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
    saleEnd: '2026-07-02T12:00:00+07:00',
    saleEndShort: 'July 2',
    ctaShort: 'Enroll US$290',
    ctaLong: 'Enroll Now, US$290',
    selfPaceWindow: '6-month self-paced',
    metaTitle:
      '200-Hour Online Yoga Teacher Training, Akasha Yoga Academy | Your Path to Purpose & Joy',
    metaDescription:
      "Become Yoga Alliance certified with Akasha Yoga Academy's 200-Hour Online YTT. 75% Yoga Day Discount, US$290 (was US$1190) until July 2. Live Zoom classes, 200+ Bali studio videos, 14-day money-back guarantee. 1,100+ graduates on 6 continents.",
    bullets: ESSENTIAL_BULLETS,
    accessNote: '6 months access to platform, self-paced.',
    heroImage:
      'https://static.wixstatic.com/media/c15a18_5d357dab7cec43c4879c3f12090081ce~mv2.jpg/v1/crop/x_328,y_0,w_1345,h_1334/fill/w_838,h_792,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Certified-Yoga-Instructor---Bali---Akash.jpg',
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
    saleEnd: '2026-07-02T12:00:00+07:00',
    saleEndShort: 'July 2',
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
  },
};

export const getTier = (slug) => TIERS[slug] || TIERS.essential;

export const getSavings = (tier) => tier.regularPrice - tier.promoPrice;
