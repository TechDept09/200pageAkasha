// Cookie consent helpers — GDPR / ePrivacy compliant.
// Consent is stored as a cookie so _app.js can read it before
// any marketing script fires (no flash of tracking).

export const CONSENT_COOKIE = 'akasha_cookie_consent';
export const CONSENT_VALUES = { ACCEPTED: 'accepted', ESSENTIAL: 'essential' };
const MAX_AGE = 60 * 60 * 24 * 365; // 1 year

/**
 * Read consent value from the cookie, or return null if no choice made yet.
 * Safe to call on the server (returns null).
 */
export function getConsent() {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${CONSENT_COOKIE}=([^;]*)`)
  );
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * Persist consent choice and optionally reload the page so analytics
 * scripts pick up the new state without manual injection.
 */
export function setConsent(value, { reload = true } = {}) {
  if (typeof document === 'undefined') return;
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(
    value
  )};max-age=${MAX_AGE};path=/;SameSite=Lax`;
  if (reload) {
    window.location.reload();
  }
}

/**
 * Whether marketing/tracking scripts may load.
 */
export function hasMarketingConsent() {
  return getConsent() === CONSENT_VALUES.ACCEPTED;
}
