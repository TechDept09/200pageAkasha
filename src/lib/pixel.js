// src/lib/pixel.js
function fire(eventName, params = {}) {
  if (typeof window === 'undefined') return;
  if (!window.fbq) return;
  window.fbq('track', eventName, params);
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
