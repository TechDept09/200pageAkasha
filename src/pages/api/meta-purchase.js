// POST /api/meta-purchase
// Wix Orders → Order Paid webhook handler. Parses the Wix Order shape,
// extracts buyer + amount + fbc/fbp from customFields, hashes PII, and
// relays a Purchase event to Meta Conversions API.

import crypto from 'crypto';

const PIXEL_ID   = process.env.META_PIXEL_ID   || '1349360126835158';
const CAPI_TOKEN = process.env.META_CAPI_TOKEN;
const WIX_SECRET = process.env.WIX_WEBHOOK_SECRET;

// Next.js parses JSON bodies by default. The HMAC check needs the raw bytes
// exactly as Wix sent them, so we disable the parser and read the stream
// ourselves. Side effect: req.body is undefined; we parse manually below.
export const config = { api: { bodyParser: false } };

async function readRawBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

function verifyWixSignature(rawBody, headerSig) {
  if (!WIX_SECRET) return true; // signing not configured, skip
  if (!headerSig) return false;
  const expected = crypto
    .createHmac('sha256', WIX_SECRET)
    .update(rawBody)
    .digest('hex');
  // Constant-time compare to dodge timing attacks
  const a = Buffer.from(expected, 'utf8');
  const b = Buffer.from(String(headerSig), 'utf8');
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

function hash(value) {
  if (!value) return undefined;
  return crypto
    .createHash('sha256')
    .update(String(value).toLowerCase().trim())
    .digest('hex');
}

// Wix wraps order payloads in different shapes depending on the webhook
// surface (REST app webhook, Velo trigger, automation). Try the common ones.
function extractOrder(body) {
  if (body?.data?.order) return body.data.order;
  if (body?.order) return body.order;
  if (body?.entity) return body.entity;
  if (body?.entityFqdn && body?.actionEvent?.body?.entity) {
    return body.actionEvent.body.entity;
  }
  return body;
}

function readCustomField(order, title) {
  const fields = order?.customFields || order?.customFieldsList || [];
  const found = fields.find((f) => {
    const t = f.title || f.name || f.fieldName;
    return t && String(t).toLowerCase() === title.toLowerCase();
  });
  return found?.value || found?.translatedValue || '';
}

function firstLineItem(order) {
  const items = order?.lineItems || order?.items || [];
  return items[0] || {};
}

function pickProductName(item) {
  if (typeof item?.productName === 'string') return item.productName;
  if (item?.productName?.original) return item.productName.original;
  if (item?.productName?.translated) return item.productName.translated;
  return item?.name || '';
}

function pickTotal(order) {
  return (
    order?.priceSummary?.total?.amount ??
    order?.totals?.total ??
    order?.totalPrice ??
    order?.balanceSummary?.balance?.amount ??
    0
  );
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  if (!CAPI_TOKEN) return res.status(500).json({ error: 'CAPI token not set' });

  let raw;
  try {
    raw = await readRawBody(req);
  } catch (e) {
    return res.status(400).json({ error: 'Could not read body' });
  }

  const sigHeader = req.headers['x-wix-webhook-signature'] || req.headers['x-signature'];
  if (!verifyWixSignature(raw, sigHeader)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  let body;
  try {
    body = JSON.parse(raw.toString('utf8') || '{}');
  } catch (e) {
    return res.status(400).json({ error: 'Body is not JSON' });
  }

  try {
    const order = extractOrder(body);
    const item  = firstLineItem(order);

    const orderId     = order?._id || order?.number || order?.id;
    const buyerEmail  = order?.buyerInfo?.email || order?.billingInfo?.contactDetails?.email;
    const buyerPhone  = order?.buyerInfo?.phone || order?.billingInfo?.contactDetails?.phone;
    const totalPrice  = pickTotal(order);
    const currency    = order?.currency || order?.priceSummary?.total?.currency || 'USD';
    const courseName  = pickProductName(item);
    const courseId    =
      readCustomField(order, 'courseSlug') ||
      item?.catalogReference?.catalogItemId ||
      item?.productId ||
      '';
    const fbc = readCustomField(order, 'fbc');
    const fbp = readCustomField(order, 'fbp');

    if (!orderId) {
      console.error('[CAPI] Missing orderId, payload shape unknown:', JSON.stringify(body).slice(0, 500));
      return res.status(400).json({ error: 'Missing orderId' });
    }

    const payload = {
      data: [
        {
          event_name: 'Purchase',
          event_time: Math.floor(Date.now() / 1000),
          // Dedup with the client-side InitiateCheckout fired earlier; Meta uses
          // event_id to collapse browser + server hits for the same order.
          event_id: String(orderId),
          action_source: 'website',
          user_data: {
            em: hash(buyerEmail),
            ph: hash(buyerPhone),
            fbc: fbc || undefined,
            fbp: fbp || undefined,
            client_ip_address: req.headers['x-forwarded-for'] || '',
            client_user_agent: req.headers['user-agent'] || '',
          },
          custom_data: {
            currency,
            value: parseFloat(totalPrice) || 0,
            order_id: String(orderId),
            content_name: courseName || '',
            content_ids: [courseId || ''],
            content_type: 'product',
            num_items: 1,
          },
        },
      ],
      access_token: CAPI_TOKEN,
    };

    const r = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    const result = await r.json();
    if (!r.ok) {
      console.error('[CAPI] Meta error:', JSON.stringify(result));
      return res.status(502).json({ error: result });
    }

    console.log('[CAPI] Purchase sent:', orderId, 'value:', totalPrice, currency);
    return res.status(200).json({ success: true, eventId: String(orderId) });
  } catch (err) {
    console.error('[CAPI] Error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
