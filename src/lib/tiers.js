// Tier configuration for the 200-Hour Yoga Teacher Training.
// Two tiers ship with distinct landing pages so users can focus on the
// one that matches their needs, instead of getting distracted by features
// of the other.
//
// CMS-ready: each tier is a flat object that maps cleanly to a CMS row.

const ESSENTIAL_BULLETS = [
  '200+ State-of-the-Art Videos From our Bali School',
  'Live Zoom Classes, Q&A and interactive sessions',
  'Superb training materials',
  'Full-fledged Yoga Alliance certificate',
  'Connection to a global yoga community',
  '14 Day Money Back Guarantee',
  '14 exclusive bonuses & career starter kit',
];

const PREMIUM_BULLETS = [
  'Everything in Essential, plus the following',
  '1-on-1 mentorship & private chat',
  'Individual feedback & interactive alignment coaching',
  'WhatsApp community group',
  '12 months access to Live Zoom Classes & Q&A',
  'Monthly payment plan available',
  '14 exclusive bonuses & career starter kit',
];

export const TIERS = {
  essential: {
    slug: 'essential',
    label: 'Essential',
    title: '200-Hour Online Yoga Teacher Training',
    heroLine1: '200-Hour Online',
    heroLine2: 'Yoga Teacher Training',
    tagline: 'Your Path to Purpose & Joy',
    pricingTagline: 'Essential Path',
    regularPrice: 1190,
    promoPrice: 290,
    discountPercent: 75,
    discountLabel: '75% Yoga Day Discount',
    saleWindows: [
      // Sale windows control when the discount is actually live + drive
      // the countdown clock target. Phase 1 ends Jun 24 23:59, phase 2
      // reopens Jun 28 00:00 with a real gap on 25-27 Jun.
      { start: '2026-06-21T00:00:00+08:00', end: '2026-06-24T23:59:59+08:00' },
      { start: '2026-06-28T00:00:00+08:00', end: '2026-06-30T23:59:59+08:00' },
    ],
    salePhases: [
      // Phase labels are display-only and intentionally extend past the
      // sale window end. Phase 1 dateRange ("21-24 June") keeps showing
      // through 27 Jun for the "deadline missed" framing; phase 2 takes
      // over at 28 Jun 00:00 WITA. Mirrors STOREWIDE_PHASES in courses.js.
      { start: '2026-06-21T00:00:00+08:00', end: '2026-06-27T23:59:59+08:00', dateRange: '21-24 June' },
      { start: '2026-06-28T00:00:00+08:00', end: '2026-06-30T23:59:59+08:00', dateRange: '28-30 June' },
    ],
    saleEndShort: 'June 24',
    ctaShort: 'Enroll US$290',
    ctaLong: 'Enroll Now, US$290',
    selfPaceWindow: '6-month self-paced',
    metaTitle:
      '200-Hour Online Yoga Teacher Training, Akasha Yoga Academy | Your Path to Purpose & Joy',
    metaDescription:
      "Become Yoga Alliance certified with Akasha Yoga Academy's 200-Hour Online YTT. 75% Yoga Day Discount, US$290 (was US$1190), 21-24 June. Live Zoom classes, 200+ Bali studio videos, 14-day money-back guarantee. 1,100+ graduates on 6 continents.",
    bullets: ESSENTIAL_BULLETS,
    accessNote: '6 months access to platform, self-paced.',
    heroImage:
      'https://static.wixstatic.com/media/c15a18_5d357dab7cec43c4879c3f12090081ce~mv2.jpg/v1/crop/x_328,y_0,w_1345,h_1334/fill/w_838,h_792,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Certified-Yoga-Instructor---Bali---Akash.jpg',
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 1190, price: 290, currency: 'USD', note: 'One-time payment' },
    ],
  },
  premium: {
    slug: 'premium',
    label: 'Premium',
    title: '200-Hour Premium Yoga Teacher Training',
    heroLine1: '200-Hour Premium',
    heroLine2: 'Yoga Teacher Training',
    tagline: 'Guided, Personal, Yours',
    pricingTagline: 'Premium Path',
    regularPrice: 1490,
    promoPrice: 590,
    discountPercent: 60,
    discountLabel: '60% Yoga Day Discount',
    saleWindows: [
      // 60% Yoga Day Store-Wide. PDF describes phase 1 (21-24) + phase 2
      // (28-30) for marketing storytelling, but operationally the discount
      // stays on the entire 21-30 stretch, so a single continuous window
      // is what the runtime should use.
      { start: '2026-06-21T00:00:00+08:00', end: '2026-06-30T23:59:59+08:00' },
    ],
    // Phase labels switch the date range shown to the buyer while the
    // underlying discount keeps running. Phase 1 (21-24) is displayed
    // through 27 Jun for the "deadline missed" framing, then phase 2
    // (28-30) takes over at 28 Jun 00:00 Bali as the extension.
    salePhases: [
      { start: '2026-06-21T00:00:00+08:00', end: '2026-06-27T23:59:59+08:00', dateRange: '21-24 June' },
      { start: '2026-06-28T00:00:00+08:00', end: '2026-06-30T23:59:59+08:00', dateRange: '28-30 June' },
    ],
    saleEndShort: 'June 30',
    ctaShort: 'Enroll US$590',
    ctaLong: 'Enroll Now, US$590',
    selfPaceWindow: '12-month Live Zoom access',
    metaTitle:
      '200-Hour Online Yoga Teacher Training Premium, Akasha Yoga Academy | Guided, Personal, Yours',
    metaDescription:
      "Become Yoga Alliance certified with personal mentorship, alignment coaching, and 12-month Zoom access. 200-Hour Premium YTT, 60% off (US$590, was US$1490). Available with 6-month payment plan.",
    bullets: PREMIUM_BULLETS,
    accessNote: '12 months Live Zoom access, with 1-on-1 mentorship.',
    heroImage:
      'https://static.wixstatic.com/media/cd7168_eea3bf63d06a4260b9e04f7bc00a255c~mv2.jpeg/v1/fill/w_900,h_900,al_c,q_85,enc_avif,quality_auto/AYA300-Dean%20Raphael-67.jpeg',
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 1490, price: 590, currency: 'USD', note: 'One-time payment' },
      {
        slug: 'installment', label: '6-Month Plan', regularPrice: null, price: 249, currency: 'USD',
        note: 'per month, US$1,494 total',
        // Wix Headless SDK refuses to add PP variants to the cart (silent
        // line-item drop). Send the buyer to the native Wix product page
        // instead and let them check out there. UTM + fb cookies tag along
        // in the query string.
        wixProductPageUrl: 'https://www.akashayogaacademy.com/product-page/200-hour-yoga-tttc-6-month-premium-payment-plan',
      },
    ],
  },
};

export const getTier = (slug) => TIERS[slug] || TIERS.essential;

export const getSavings = (tier) => tier.regularPrice - tier.promoPrice;
