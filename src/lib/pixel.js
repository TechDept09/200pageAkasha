// Meta (Facebook) Pixel wrapper.
// Pixel ID comes from NEXT_PUBLIC_META_PIXEL_ID, set in Vercel env.
// All track calls are no-ops when the pixel hasn't loaded or the ID is missing,
// so callers don't need to guard.

export const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export function isPixelReady() {
  return typeof window !== 'undefined' && typeof window.fbq === 'function';
}

export function pageView() {
  if (!isPixelReady()) return;
  window.fbq('track', 'PageView');
}

export function track(eventName, params) {
  if (!isPixelReady()) return;
  if (params) {
    window.fbq('track', eventName, params);
  } else {
    window.fbq('track', eventName);
  }
}

export function trackCustom(eventName, params) {
  if (!isPixelReady()) return;
  if (params) {
    window.fbq('trackCustom', eventName, params);
  } else {
    window.fbq('trackCustom', eventName);
  }
}

// Standard event helpers, typed for our use cases.

export function lead(params) {
  track('Lead', params);
}

export function initiateCheckout({ value, currency = 'USD', contentName, contentIds } = {}) {
  track('InitiateCheckout', {
    value,
    currency,
    content_name: contentName,
    content_ids: contentIds,
  });
}

export function purchase({ value, currency = 'USD', contentName, contentIds } = {}) {
  track('Purchase', {
    value,
    currency,
    content_name: contentName,
    content_ids: contentIds,
  });
}

export function viewContent({ value, currency = 'USD', contentName, contentIds, contentType = 'product' } = {}) {
  track('ViewContent', {
    value,
    currency,
    content_name: contentName,
    content_ids: contentIds,
    content_type: contentType,
  });
}
