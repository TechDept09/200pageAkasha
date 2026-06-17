import crypto from 'crypto';

const PIXEL_ID   = process.env.META_PIXEL_ID   || '1349360126835158';
const CAPI_TOKEN = process.env.META_CAPI_TOKEN;
const WIX_SECRET = process.env.WIX_WEBHOOK_SECRET;

function hash(value) {
  if (!value) return undefined;
  return crypto.createHash('sha256')
    .update(String(value).toLowerCase().trim())
    .digest('hex');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  if (!CAPI_TOKEN) return res.status(500).json({ error: 'CAPI token not set' });

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const {
      orderId, buyerEmail, buyerPhone,
      totalPrice, currency, courseName,
      courseId, fbc, fbp
    } = body;

    const payload = {
      data: [{
        event_name: 'Purchase',
        event_time: Math.floor(Date.now() / 1000),
        event_id: orderId,
        action_source: 'website',
        user_data: {
          em:  hash(buyerEmail),
          ph:  hash(buyerPhone),
          fbc: fbc || undefined,
          fbp: fbp || undefined,
          client_ip_address: req.headers['x-forwarded-for'] || '',
          client_user_agent: req.headers['user-agent'] || '',
        },
        custom_data: {
          currency:     currency || 'USD',
          value:        parseFloat(totalPrice) || 0,
          order_id:     orderId,
          content_name: courseName || '',
          content_ids:  [courseId || ''],
          content_type: 'product',
          num_items:    1,
        },
      }],
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
    if (!r.ok) return res.status(502).json({ error: result });

    console.log('[CAPI] Purchase sent:', orderId);
    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('[CAPI] Error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
