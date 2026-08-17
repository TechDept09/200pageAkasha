// ThriveCart checkout integration. ThriveCart is the live payment
// gateway across every product with a URL registered below; products
// without a URL yet (feminine-wisdom, kundalini-india) fall through
// to the legacy Wix flow via CheckoutForm.
//
// The URL builder forwards coupon, UTM, and buyer email as URL
// params so ThriveCart's own checkout page picks them up (coupon
// auto-applies, UTM lands in the ThriveCart order record).

export const THRIVECART_URL =
  process.env.NEXT_PUBLIC_THRIVECART_URL ||
  'https://akashayogaacademy.thrivecart.com/200hr-ttc/';

// Per-tier ThriveCart product URLs. Keys match the tier / course slugs
// used across tiers.js and courses.js. Both `essential` and the
// courses.js alias `200h-essential` map to the same product (same for
// premium) so either slug resolves correctly.
// Env-overridable so marketing can rotate individual product links
// without a redeploy.
export const THRIVECART_URLS = {
  essential:
    process.env.NEXT_PUBLIC_THRIVECART_URL_ESSENTIAL ||
    'https://akashayogaacademy.thrivecart.com/200hr-ttc/',
  '200h-essential':
    process.env.NEXT_PUBLIC_THRIVECART_URL_ESSENTIAL ||
    'https://akashayogaacademy.thrivecart.com/200hr-ttc/',
  premium:
    process.env.NEXT_PUBLIC_THRIVECART_URL_PREMIUM ||
    'https://akashayogaacademy.thrivecart.com/200hr-premium/',
  '200h-premium':
    process.env.NEXT_PUBLIC_THRIVECART_URL_PREMIUM ||
    'https://akashayogaacademy.thrivecart.com/200hr-premium/',
  '300h-ytt':
    process.env.NEXT_PUBLIC_THRIVECART_URL_300H ||
    'https://akashayogaacademy.thrivecart.com/300hr/',
  '80h-yin':
    process.env.NEXT_PUBLIC_THRIVECART_URL_80H_YIN ||
    'https://akashayogaacademy.thrivecart.com/80hr-yin-ytt/',
  '80h-meditation':
    process.env.NEXT_PUBLIC_THRIVECART_URL_80H_MEDITATION ||
    'https://akashayogaacademy.thrivecart.com/80hr-meditation/',
  '80h-hatha-pranayama':
    process.env.NEXT_PUBLIC_THRIVECART_URL_80H_HATHA ||
    'https://akashayogaacademy.thrivecart.com/80hr-hatha/',
};

// True when this slug has a live ThriveCart product. Used by
// CheckoutForm to decide whether to redirect to /checkout (ThriveCart)
// or fall through to the legacy Wix flow.
export function hasThriveCartUrl(slug) {
  return !!(slug && THRIVECART_URLS[slug]);
}

// Per-product default coupons that auto-apply on the ThriveCart hosted
// page. Env-overridable so marketing can rotate a code without a
// redeploy. Both slug aliases (essential + 200h-essential) point to the
// same env var so either entry point picks up the same coupon.
const ESSENTIAL_DEFAULT_COUPON =
  process.env.NEXT_PUBLIC_THRIVECART_COUPON_ESSENTIAL || 'TRANSFORM50';

export const THRIVECART_COUPONS = {
  essential: ESSENTIAL_DEFAULT_COUPON,
  '200h-essential': ESSENTIAL_DEFAULT_COUPON,
};

export function getDefaultCoupon(slug) {
  return (slug && THRIVECART_COUPONS[slug]) || null;
}

export function getThriveCartUrl(tierSlug) {
  return THRIVECART_URLS[tierSlug] || THRIVECART_URL;
}

// Internal /checkout href for a given tier slug. Falls back to the
// default (200hr Essential) if the slug is unknown.
export function getCheckoutHref(tierSlug) {
  if (!tierSlug || !THRIVECART_URLS[tierSlug]) return '/checkout';
  return `/checkout?product=${encodeURIComponent(tierSlug)}`;
}

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
];

// Build a ThriveCart checkout URL with coupon + UTM + buyer email
// pre-filled. All params are optional; missing values are dropped.
export function buildThriveCartUrl({ coupon, utm, buyerEmail } = {}) {
  const url = new URL(THRIVECART_URL);

  if (coupon && typeof coupon === 'string') {
    url.searchParams.set('coupon', coupon.trim());
  }

  if (utm && typeof utm === 'object') {
    for (const key of UTM_KEYS) {
      const value = utm[key];
      if (value) url.searchParams.set(key, String(value));
    }
  }

  if (buyerEmail && typeof buyerEmail === 'string') {
    url.searchParams.set('email', buyerEmail.trim());
  }

  return url.toString();
}
