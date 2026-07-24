// Pure helpers for parsing the many shapes a Wix Order/Invoice payload can
// take, plus PII hashing/redaction. Extracted from the /api/meta-purchase
// route so this logic can be unit tested without spinning up the handler.

import crypto from 'crypto';

// Strip PII before writing arbitrary Wix payloads to the Vercel logs.
export function redactPII(obj) {
  const seen = new WeakSet();
  const SENSITIVE = /^(email|phone|firstName|lastName|fullName|address|ssn|cardNumber|cvv|password)$/i;
  const walk = (v) => {
    if (v && typeof v === 'object') {
      if (seen.has(v)) return '[circular]';
      seen.add(v);
      if (Array.isArray(v)) return v.map(walk);
      const out = {};
      for (const [k, val] of Object.entries(v)) {
        out[k] = SENSITIVE.test(k) ? '[redacted]' : walk(val);
      }
      return out;
    }
    return v;
  };
  return walk(obj);
}

export function hash(value) {
  if (!value) return undefined;
  return crypto
    .createHash('sha256')
    .update(String(value).toLowerCase().trim())
    .digest('hex');
}

// Wix wraps order/invoice payloads in different shapes depending on the
// trigger source (Stores order, Invoices, Bookings, Automations webhook,
// Velo onOrderPaid, app webhook). Try the common ones.
export function extractOrder(body) {
  if (body?.data?.order) return body.data.order;
  if (body?.data?.invoice) return body.data.invoice;
  if (body?.order) return body.order;
  if (body?.invoice) return body.invoice;
  if (body?.entity) return body.entity;
  if (body?.entityFqdn && body?.actionEvent?.body?.entity) {
    return body.actionEvent.body.entity;
  }
  return body;
}

export function readCustomField(order, title) {
  const fields = order?.customFields || order?.customFieldsList || [];
  const found = fields.find((f) => {
    const t = f.title || f.name || f.fieldName;
    return t && String(t).toLowerCase() === title.toLowerCase();
  });
  return found?.value || found?.translatedValue || '';
}

export function firstLineItem(order) {
  const items = order?.lineItems || order?.items || [];
  return items[0] || {};
}

export function pickProductName(item) {
  if (typeof item?.productName === 'string') return item.productName;
  if (item?.productName?.original) return item.productName.original;
  if (item?.productName?.translated) return item.productName.translated;
  if (typeof item?.name === 'object') return item.name?.original || item.name?.translated || '';
  return item?.name || item?.description || '';
}

export function pickTotal(order) {
  // Stores order paths
  const storesTotal =
    order?.priceSummary?.total?.amount ??
    order?.totals?.total ??
    order?.totalPrice ??
    order?.balanceSummary?.balance?.amount;
  if (storesTotal != null) return storesTotal;

  // Invoice / Bookings paths
  return (
    order?.payments?.[0]?.amount?.amount ??
    order?.totals?.subtotal ??
    order?.total?.amount ??
    order?.totalAmount ??
    order?.grandTotal ??
    0
  );
}

export function pickEmail(order) {
  return (
    order?.buyerInfo?.email ||
    order?.billingInfo?.contactDetails?.email ||
    order?.customer?.email ||
    order?.customerInfo?.email ||
    order?.recipient?.email ||
    order?.email ||
    ''
  );
}

export function pickPhone(order) {
  return (
    order?.buyerInfo?.phone ||
    order?.billingInfo?.contactDetails?.phone ||
    order?.customer?.phone ||
    order?.customerInfo?.phone ||
    order?.recipient?.phone ||
    order?.phone ||
    ''
  );
}
