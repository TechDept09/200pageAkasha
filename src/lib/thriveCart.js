// ThriveCart checkout integration for the 200-Hour Essential promo.
// Behind a flag (NEXT_PUBLIC_USE_THRIVECART=true) so the existing
// Wix Headless flow stays the default; flip the env var to swap the
// destination without a code change or A/B swap.
//
// The URL builder forwards coupon, UTM, and buyer email as URL
// params so ThriveCart's own checkout page picks them up (coupon
// auto-applies, UTM lands in the ThriveCart order record).

export const THRIVECART_URL =
  process.env.NEXT_PUBLIC_THRIVECART_URL ||
  'https://akashayogaacademy.thrivecart.com/200hr-ttc/';

export const USE_THRIVECART =
  process.env.NEXT_PUBLIC_USE_THRIVECART === 'true';

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
    // ThriveCart reads `email` as the customer's email pre-fill.
    url.searchParams.set('email', buyerEmail.trim());
  }

  return url.toString();
}
