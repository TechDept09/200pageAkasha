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
    discountLabel: '75% Summer Discount',
    saleEnd: '2026-06-15T23:59:59+07:00',
    saleEndShort: 'June 15',
    ctaShort: 'Enroll US$290',
    ctaLong: 'Enroll Now, US$290',
    selfPaceWindow: '6-month self-paced',
    metaTitle:
      '200-Hour Online Yoga Teacher Training, Akasha Yoga Academy | Your Path to Purpose & Joy',
    metaDescription:
      "Become Yoga Alliance certified with Akasha Yoga Academy's 200-Hour Online YTT. 75% Summer Discount, US$290 (was US$1190) until June 15. Live Zoom classes, 200+ Bali studio videos, 14-day money-back guarantee. 1,100+ graduates on 6 continents.",
    bullets: ESSENTIAL_BULLETS,
    accessNote: '6 months access to platform, self-paced.',
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
    promoPrice: 596,
    discountPercent: 60,
    discountLabel: '60% Yoga Day Discount',
    saleEnd: '2026-06-15T23:59:59+07:00',
    saleEndShort: 'June 15',
    ctaShort: 'Enroll US$596',
    ctaLong: 'Enroll Now, US$596',
    selfPaceWindow: '12-month Live Zoom access',
    metaTitle:
      '200-Hour Online Yoga Teacher Training Premium, Akasha Yoga Academy | Guided, Personal, Yours',
    metaDescription:
      "Become Yoga Alliance certified with personal mentorship, alignment coaching, and 12-month Zoom access. 200-Hour Premium YTT, 60% off (US$596, was US$1490). 1,100+ graduates on 6 continents.",
    bullets: PREMIUM_BULLETS,
    accessNote: '12 months Live Zoom access, with 1-on-1 mentorship.',
  },
};

export const getTier = (slug) => TIERS[slug] || TIERS.essential;

export const getSavings = (tier) => tier.regularPrice - tier.promoPrice;
