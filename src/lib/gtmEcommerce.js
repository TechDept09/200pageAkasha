// GA4 / GTM ecommerce event helpers. Fires begin_checkout on the
// enroll click and purchase on the thank-you page. Runs alongside
// the existing Meta Pixel flow, doesn't touch it.
//
// Marketing owns the tag stack, so the dataLayer pushes here are the
// contract: GTM tags read `event`, `ecommerce.transaction_id`, and
// items[]. Do not rename these keys without checking with marketing.

const SS_KEY = 'pending_order';

export function pushBeginCheckout({ course_name, value, currency = 'USD' }) {
  if (typeof window === 'undefined') return;

  const orderInfo = { course_name, value, currency };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'begin_checkout',
    ecommerce: orderInfo,
  });

  try {
    sessionStorage.setItem(SS_KEY, JSON.stringify(orderInfo));
  } catch (_) {
    // Private mode or quota: skip. Purchase event will still fire
    // if URL has orderId, it just won't carry the item details.
  }
}

// Fires the purchase event on the thank-you page when Wix returns
// with an orderId query param. Reads the saved order from sessionStorage
// so items[] carries the correct name/price. Idempotent: sessionStorage
// is cleared after firing so a refresh does not re-fire.
export function firePurchaseFromUrl() {
  if (typeof window === 'undefined') return false;

  const params = new URLSearchParams(window.location.search);
  const orderId = params.get('orderId') || params.get('order_id');
  if (!orderId) return false;

  let saved;
  try {
    saved = sessionStorage.getItem(SS_KEY);
  } catch (_) {
    return false;
  }
  if (!saved) return false;

  let order;
  try {
    order = JSON.parse(saved);
  } catch (_) {
    return false;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'purchase',
    ecommerce: {
      transaction_id: orderId,
      value: order.value,
      currency: order.currency,
      items: [
        {
          item_name: order.course_name,
          price: order.value,
          quantity: 1,
        },
      ],
    },
  });

  try {
    sessionStorage.removeItem(SS_KEY);
  } catch (_) {}

  return true;
}
