// src/lib/pixel.js
function fire(eventName, params = {}, eventId = null) {
  if (typeof window === 'undefined') return;
  if (!window.fbq) return;
  // Pass eventID so Meta can dedupe against the server-side CAPI event
  // that fires from /api/meta-purchase. Same eventID on both sources
  // means Meta counts the conversion once even though we send it twice.
  if (eventId) {
    window.fbq('track', eventName, params, { eventID: eventId });
  } else {
    window.fbq('track', eventName, params);
  }
}

export function pageview() {
  fire('PageView');
}

export function trackLead(courseName, value) {
  fire('Lead', {
    content_name: courseName,
    currency: 'USD',
    value: parseFloat(value) || 0,
  });
}

export function trackInitiateCheckout(courseName, value, courseId) {
  fire('InitiateCheckout', {
    content_name: courseName,
    content_ids: [courseId],
    content_type: 'product',
    currency: 'USD',
    value: parseFloat(value) || 0,
    num_items: 1,
  });
}

export function trackPurchase(courseName, value, courseId, eventId) {
  fire(
    'Purchase',
    {
      content_name: courseName,
      content_ids: [courseId],
      content_type: 'product',
      currency: 'USD',
      value: parseFloat(value) || 0,
      num_items: 1,
    },
    eventId
  );
}

// Browser-safe UUID. crypto.randomUUID is available on every browser
// we care about (Safari 15.4+, Chrome 92+, Firefox 95+); the fallback
// is a v4-ish hex string for any unusual environment.
export function newEventId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'evt_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}
