// July 2026 Summer Self-Care Journey campaign config.
// Two-phase rollout with a confidential page (password-gated) so the new
// pricing is not discoverable until marketing wants it public. Phase
// windows match the PDF brief.

export const JULY_PHASES = {
  phase1: {
    key: 'phase1',
    start: '2026-07-03T00:00:00+08:00',
    end: '2026-07-17T23:59:59+08:00', // active through Jul 17 (live until 17th)
    label: 'Summer Self-Care Discount',
    dateRange: 'July 3-15',
    headline: 'Summer Self-Care Discount',
    sub: 'Save over 70% on 200hr Essential this July',
    intro:
      "This summer, choose yourself. Begin your 200hr Yoga Teacher Training and unlock a special Yin Yoga add-on to deepen your practice.",
    couponCode: 'CARE320',
    couponNote: 'Use coupon CARE320 for the bundle savings.',
    bundle: {
      essential: 320,
      yin: 199,
      total: 519,
      savings: 1271, // regular total 1790, bundle 519
    },
    standalone: {
      // Buyer who skips Yin falls back to the existing Essential Yoga Day
      // landing page where the $290 sale price is already plumbed in.
      essential: 290,
    },
  },
  phase2: {
    key: 'phase2',
    start: '2026-07-16T00:00:00+08:00',
    end: '2026-08-02T23:59:59+08:00', // active through Aug 2 (live until 2 Aug)
    label: 'Summer Wellness Discount',
    dateRange: 'July 16-31',
    headline: 'Summer Wellness Discount',
    sub: 'Final July offer: save over 70% on 200hr Essential',
    intro:
      "Before July ends, reset your yoga journey. Transform your practice this summer with our 200hr Essential Yoga Teacher Training.",
    couponCode: 'WELLNESS50',
    couponNote: 'Use coupon WELLNESS50 for an additional $50 off, bringing the bundle to $249 at checkout.',
    bundle: {
      essential: 299,
      yin: 199,
      total: 498,
      popUpTotal: 249, // WELLNESS50 coupon brings essential to $249
      savings: 1292,
    },
    standalone: {
      essential: 290,
    },
  },
};

export function getActiveJulyPhase(now = new Date()) {
  const candidates = [JULY_PHASES.phase1, JULY_PHASES.phase2];
  for (const p of candidates) {
    if (now >= new Date(p.start) && now <= new Date(p.end)) {
      return p;
    }
  }
  // Outside both windows. During PDF gap (Jul 16-17 both windows overlap)
  // phase1 wins because it comes first in the list, which matches "Phase 1
  // active until 17th, Phase 2 starts 16th" overlap rule from the brief.
  return null;
}

// The access key gates the page on live. Local dev still requires the same
// key so the test environment matches production behaviour. Override via
// NEXT_PUBLIC_JULY_CAMPAIGN_KEY in .env.local for stricter rotation.
export const JULY_ACCESS_KEY =
  process.env.NEXT_PUBLIC_JULY_CAMPAIGN_KEY || 'AKASHA-JULY-2026';

// Wix product IDs the campaign checkout will reference.
// - Essential reuses the existing live product.
// - Yin Add-on at the discounted bundle price is a NEW Wix product that
//   Wira needs to publish and drop into Vercel as NEXT_PUBLIC_WIX_PRODUCT_ID_YIN_ADDON.
//   Until that env var is set, the bundle button stays disabled with a
//   friendly "coming soon" message instead of failing at checkout.
export const JULY_PRODUCTS = {
  essential: process.env.NEXT_PUBLIC_WIX_PRODUCT_ID,
  yinAddOn: process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_YIN_ADDON,
};

// Placeholder for the marketing-supplied promo video. Swap the YouTube
// ID once the asset is uploaded. Leaving null hides the video block so
// the page never shows a broken iframe.
export const JULY_VIDEO_ID = process.env.NEXT_PUBLIC_JULY_VIDEO_ID || null;

// Testimonial set borrowed from the live 200hr-yoga-teacher-training-online
// + homepage scrapes we already verified. These are real Akasha graduates
// with the photo hash matching the name on akashayogaacademy.com.
export const JULY_TESTIMONIALS = [
  {
    name: 'Charlotte Heminsley',
    country: 'United States',
    quote:
      'Literally the best month of my life! The journey of self-discovery was unbelievable!',
    photo:
      'https://static.wixstatic.com/media/cd7168_f9565c280e5e45d6ab281e26d2942d70~mv2.jpg/v1/fill/w_300,h_300,al_c,q_85,enc_auto/portrait.jpg',
  },
  {
    name: 'Kinga Kovacs',
    country: 'United Kingdom',
    quote:
      'No words would give true justice to the experience with these guys!',
    photo:
      'https://static.wixstatic.com/media/cd7168_5daede02159240e58ad572c3845f434a~mv2.webp/v1/fill/w_300,h_300,al_c,q_85,enc_auto/portrait.webp',
  },
  {
    name: 'Anna Kotaba',
    country: 'Poland',
    quote:
      'This place showed me how to slow down, how to open up, and how to love myself with all around.',
    photo:
      'https://static.wixstatic.com/media/cd7168_e363df305b8e43ad8049e5a4bac074a6~mv2.jpg/v1/fill/w_300,h_300,al_c,q_85,enc_auto/portrait.jpg',
  },
];
