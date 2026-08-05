export const CONSENT_COOKIE = 'akasha_cookie_consent';
export const CONSENT_VALUES = { ACCEPTED: 'accepted', ESSENTIAL: 'essential' };
const MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export function getConsent() {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${CONSENT_COOKIE}=([^;]*)`)
  );
  return match ? decodeURIComponent(match[1]) : null;
}

export function setConsent(value, { reload = true } = {}) {
  if (typeof document === 'undefined') return;
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(
    value
  )};max-age=${MAX_AGE};path=/;SameSite=Lax`;
  if (reload) {
    window.location.reload();
  }
}

export function hasMarketingConsent() {
  return getConsent() === CONSENT_VALUES.ACCEPTED;
}
