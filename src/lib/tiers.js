// Tier configuration for the 200-Hour Yoga Teacher Training.
// Two tiers ship with distinct landing pages so users can focus on the
// one that matches their needs, instead of getting distracted by features
// of the other.
//
// CMS-ready: each tier is a flat object that maps cleanly to a CMS row.

import {
  STOREWIDE_WINDOWS,
  STOREWIDE_PHASES,
  SALE_END_SHORT,
} from '@/lib/campaignSchedule';

// Wording rules per team feedback (2 Jul):
// - Zoom is 'sessions', never 'classes' (Zoom is discussion time, not
//   a yoga class, and mis-naming is a common refund driver).
// - Use '200-Hour' with a hyphen everywhere, not '200hr'.
// - Yin is called 'Yin Yoga (YACEP) Bonus course' (the YACEP tag is
//   part of the selling point).
// Matches the live Wix /enroll-now Essential card verbatim (incl. MBG
// and bonuses - an earlier draft dropped those two lines, this restores
// them to keep the new enrollment page pixel-perfect with Wix).
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
  '12 months access to unlimited Live Zoom Sessions & Q&A',
  '6-months Support Program',
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
    discountLabel: '75% Summer Discount',
    // July Summer Self-Care Journey window, 2 Jul 12:00 WITA to 17 Jul.
    // Shared storewide schedule, see campaignSchedule.js.
    saleWindows: STOREWIDE_WINDOWS,
    salePhases: STOREWIDE_PHASES,
    saleEndShort: SALE_END_SHORT,
    // Auto-applied at Wix checkout by EnrollForm. Voucher takes the
    // Essential from US$298 (75% off) down to US$290 flat.
    couponCode: 'CARE30',
    ctaShort: 'Enroll US$290',
    ctaLong: 'Enroll Now, US$290',
    ctaHref: '/200h-essential/enroll',
    selfPaceWindow: 'Self-paced, 6-months access & certification window',
    metaTitle:
      '200-Hour Online Yoga Teacher Training, Akasha Yoga Academy | Your Path to Purpose & Joy',
    metaDescription:
      "Become Yoga Alliance certified with Akasha Yoga Academy's 200-Hour Online YTT. US$290 (was US$1190). 3 Live Zoom Sessions per week, 200+ Bali studio videos, 1,100+ graduates on 6 continents.",
    bullets: ESSENTIAL_BULLETS,
    accessNote: 'Self-paced, 6-months access & certification window.',
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
    // July pricelist: Premium sits at regular US$1,490 (no discount).
    // 6-month payment plan stays live at US$249/month.
    regularPrice: 1490,
    promoPrice: 1490,
    discountPercent: 0,
    discountLabel: null,
    saleWindows: [],
    salePhases: [],
    saleEndShort: null,
    ctaShort: 'Enroll US$1,490',
    ctaLong: 'Enroll Now, US$1,490',
    ctaHref: '#pricing',
    selfPaceWindow: '12-months access, unlimited Live Zoom Sessions',
    metaTitle:
      '200-Hour Online Yoga Teacher Training Premium, Akasha Yoga Academy | Guided, Personal, Yours',
    metaDescription:
      "Become Yoga Alliance certified with personal mentorship, alignment coaching, and unlimited Live Zoom Sessions. 200-Hour Premium YTT, US$1,490. Available with 6-month payment plan at US$249/month.",
    bullets: PREMIUM_BULLETS,
    accessNote: '12-months access to the online platform and unlimited Live Zoom Sessions, 6-months Support Program.',
    heroImage:
      'https://static.wixstatic.com/media/cd7168_eea3bf63d06a4260b9e04f7bc00a255c~mv2.jpeg/v1/fill/w_900,h_900,al_c,q_85,enc_avif,quality_auto/AYA300-Dean%20Raphael-67.jpeg',
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: null, price: 1490, currency: 'USD', note: 'One-time payment' },
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

  // 300-Hour Advanced — landing uses the same SiteNav/UrgencyBanner stack as
  // the 200h pages. Checkout product IDs key off this slug in checkout.js.
  '300h-ytt': {
    slug: '300h-ytt',
    label: '300-Hour',
    title: '300-Hour Advanced Yoga Teacher Training',
    heroLine1: 'Advanced Online TTC',
    heroLine2: 'A Life-Changing Yogic Immersion',
    tagline: 'A Life-Changing Yogic Immersion',
    pricingTagline: 'Advanced Path',
    // July pricelist: 33% off, US$1,190 (was US$1,800). Wix hero also
    // promotes the 3-month plan from US$399.
    regularPrice: 1800,
    promoPrice: 1190,
    discountPercent: 33,
    discountLabel: '33% Summer Wellness Discount',
    saleWindows: STOREWIDE_WINDOWS,
    salePhases: STOREWIDE_PHASES,
    saleEndShort: SALE_END_SHORT,
    ctaShort: 'Enroll US$1,190',
    ctaLong: 'Enroll Now, US$1,190',
    // Temporary: Wix hosted enroll until we build /300h-ytt/enroll.
    ctaHref: 'https://www.akashayogaacademy.com/300-hr-online-enroll-now',
    selfPaceWindow: '300 hours, self-paced · RYT-500 pathway',
    metaTitle:
      '300-Hour Yoga Teacher Training Online | Akasha Yoga Academy | Meditation, Hatha Yoga & Pranayama, Yin Yoga',
    metaDescription:
      '300-Hour Advanced Online Yoga & Meditation Teacher Training. Fully certified by Yoga Alliance. 33% Summer Wellness Discount — starting from US$399.',
    bullets: [
      'Three 100-hour modules: Hatha/Pranayama, Yin Yoga, Meditation',
      '45+ live group Zoom sessions',
      'Personal one-on-one feedback',
      '300-hour Yoga Alliance certification (RYT-500 pathway)',
      'Lifetime access to recorded content',
    ],
    accessNote: 'Self-paced advanced training with live support.',
    heroImage:
      'https://static.wixstatic.com/media/cd7168_44c4bbbdd68b48e88b61494a8e8c2d6ff000.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/hero.jpg',
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 1800, price: 1190, currency: 'USD', note: 'One-time payment' },
      {
        slug: 'installment',
        label: '3-Month Plan',
        regularPrice: null,
        price: 399,
        currency: 'USD',
        note: 'per month, US$1,197 total',
        wixProductPageUrl:
          'https://www.akashayogaacademy.com/product-page/300-hour-advanced-yoga-teacher-training',
      },
    ],
  },

  // 80-Hour Yin Yoga — landing uses the same SiteNav/UrgencyBanner stack.
  // Checkout product IDs key off this slug in checkout.js when internal
  // enroll ships; for now CTA points at the live Wix enroll page.
  '80h-yin': {
    slug: '80h-yin',
    label: '80-Hour Yin',
    title: '80-Hour Yin Yoga Teacher Training',
    heroLine1: 'Online 80-Hour Yin Yoga',
    heroLine2: 'Teacher Training',
    tagline: 'Expand Your Awareness',
    pricingTagline: 'Yin Yoga Path',
    // July pricelist: 33% off, US$399 (was US$600).
    regularPrice: 600,
    promoPrice: 399,
    discountPercent: 33,
    discountLabel: '33% Summer Wellness Discount',
    saleWindows: STOREWIDE_WINDOWS,
    salePhases: STOREWIDE_PHASES,
    saleEndShort: SALE_END_SHORT,
    ctaShort: 'Enroll US$399',
    ctaLong: 'Enroll Now, US$399',
    ctaHref: 'https://www.akashayogaacademy.com/80hr-yin-ytt-enroll-now',
    selfPaceWindow: '80 hours, self-paced · YACEP',
    metaTitle:
      '80-Hour Yin Yoga Teacher Training Online | Akasha Yoga Academy | Yoga Alliance Certified',
    metaDescription:
      '80-Hour Online Yin Yoga Teacher Training. Fully certified by Yoga Alliance (YACEP). 33% Summer Wellness Discount — starting from US$399.',
    bullets: [
      'Yin postures, functional anatomy & meridian theory',
      'Self Inquiry contemplative practice',
      'Lifetime access to recordings',
      'Monthly live Zoom with instructors',
      'Yoga Alliance YACEP certification',
    ],
    accessNote: 'Self-paced Yin training with live support.',
    heroImage:
      'https://static.wixstatic.com/media/cd7168_ac443cf0083b47ce9eed5df7eb1d58ebf000.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/hero.jpg',
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 600, price: 399, currency: 'USD', note: 'One-time payment' },
      {
        slug: 'installment',
        label: '3-Month Plan',
        regularPrice: null,
        price: 139,
        currency: 'USD',
        note: 'per month',
        wixProductPageUrl:
          'https://www.akashayogaacademy.com/product-page/80-hour-yin-yoga-ttc-pp',
      },
    ],
  },

  // 80-Hour Meditation — same SiteNav/UrgencyBanner stack as Yin.
  // CTA points at the live Wix enroll page until internal enroll ships.
  '80h-meditation': {
    slug: '80h-meditation',
    label: '80-Hour Meditation',
    title: '80-Hour Meditation Teacher Training',
    heroLine1: 'Online 80-Hour Meditation',
    heroLine2: 'Teacher Training',
    tagline: 'Find Stillness',
    pricingTagline: 'Meditation Path',
    // July pricelist: 33% off, US$399 (was US$600).
    regularPrice: 600,
    promoPrice: 399,
    discountPercent: 33,
    discountLabel: '33% Summer Wellness Discount',
    saleWindows: STOREWIDE_WINDOWS,
    salePhases: STOREWIDE_PHASES,
    saleEndShort: SALE_END_SHORT,
    ctaShort: 'Enroll US$399',
    ctaLong: 'Enroll Now, US$399',
    ctaHref:
      'https://www.akashayogaacademy.com/enroll-now-80-hr-online-meditation-teacher-training',
    selfPaceWindow: '80 hours, self-paced · YACEP',
    metaTitle:
      '80-Hour Meditation Teacher Training Online | Akasha Yoga Academy | Yoga Alliance Certified',
    metaDescription:
      '80-Hour Online Meditation Teacher Training — Spiritual Heart & Mantra Meditation. Fully certified by Yoga Alliance (YACEP). 33% Summer Wellness Discount — starting from US$399.',
    bullets: [
      'Spiritual Heart Meditation & mantra practice',
      'Eastern wisdom traditions & Self Inquiry',
      'Lifetime access to recordings',
      'Live Zoom support with instructors',
      'Yoga Alliance YACEP certification',
    ],
    accessNote: 'Self-paced Meditation training with live support.',
    heroImage:
      'https://static.wixstatic.com/media/cd7168_af049207a34b49a2b8cb8373993ab442f000.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/hero.jpg',
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 600, price: 399, currency: 'USD', note: 'One-time payment' },
      {
        slug: 'installment',
        label: '3-Month Plan',
        regularPrice: null,
        price: 139,
        currency: 'USD',
        note: 'per month',
        wixProductPageUrl:
          'https://www.akashayogaacademy.com/product-page/80-hour-meditation-ttc',
      },
    ],
  },

  // 80-Hour Advanced Hatha & Pranayama — same SiteNav/UrgencyBanner stack.
  // CTA points at the live Wix enroll page until internal enroll ships.
  '80h-hatha-pranayama': {
    slug: '80h-hatha-pranayama',
    label: '80-Hour Hatha & Pranayama',
    title: '80-Hour Advanced Hatha & Pranayama Teacher Training',
    heroLine1: 'Online 80-Hour Advanced Hatha',
    heroLine2: '& Pranayama Teacher Training',
    tagline: 'Transform Your Practice',
    pricingTagline: 'Hatha & Pranayama Path',
    // July pricelist: 33% off, US$399 (was US$600).
    regularPrice: 600,
    promoPrice: 399,
    discountPercent: 33,
    discountLabel: '33% Summer Wellness Discount',
    saleWindows: STOREWIDE_WINDOWS,
    salePhases: STOREWIDE_PHASES,
    saleEndShort: SALE_END_SHORT,
    ctaShort: 'Enroll US$399',
    ctaLong: 'Enroll Now, US$399',
    ctaHref:
      'https://www.akashayogaacademy.com/80-hr-online-enroll-now-hatha-and-pranayama',
    selfPaceWindow: '80 hours, self-paced · YACEP',
    metaTitle:
      '80-Hour Advanced Hatha Yoga & Pranayama Teacher Training | Akasha Yoga Academy',
    metaDescription:
      '80-Hour Online Advanced Hatha & Pranayama Teacher Training. Fully certified by Yoga Alliance (YACEP). 33% Summer Wellness Discount — starting from US$399.',
    bullets: [
      'Breath-integrated Hatha & advanced Pranayama',
      'Arm balances, inversions & bandhas',
      'Lifetime access to recordings',
      'Live Zoom support with instructors',
      'Yoga Alliance YACEP certification',
    ],
    accessNote: 'Self-paced Hatha & Pranayama training with live support.',
    heroImage:
      'https://static.wixstatic.com/media/cd7168_ac443cf0083b47ce9eed5df7eb1d58ebf000.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/hero.jpg',
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 600, price: 399, currency: 'USD', note: 'One-time payment' },
      {
        slug: 'installment',
        label: '3-Month Plan',
        regularPrice: null,
        price: 139,
        currency: 'USD',
        note: 'per month',
        wixProductPageUrl:
          'https://www.akashayogaacademy.com/product-page/80-hour-adv-hatha-pranayama-ttc-pp',
      },
    ],
  },
};

export const getTier = (slug) => TIERS[slug] || TIERS.essential;

export const getSavings = (tier) => tier.regularPrice - tier.promoPrice;
