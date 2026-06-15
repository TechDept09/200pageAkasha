// Tier configuration for the 200-Hour Yoga Teacher Training.
// Two tiers ship with distinct landing pages so users can focus on the
// one that matches their needs, instead of getting distracted by features
// of the other.
//
// CMS-ready: each tier is a flat object that maps cleanly to a CMS row.

export const TIERS = {
  essential: {
    slug: 'essential',
    label: 'Essential',
    title: '200-Hour Online Yoga Teacher Training',
    tagline: 'Your Path to Purpose & Joy',
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
  },
  premium: {
    slug: 'premium',
    label: 'Premium',
    title: '200-Hour Online Yoga Teacher Training, Premium',
    tagline: 'Guided, Personal, Yours',
    regularPrice: 1490,
    promoPrice: 596,
    discountPercent: 60,
    discountLabel: '60% Yoga Day Discount',
    saleEnd: '2026-06-15T23:59:59+07:00',
    saleEndShort: 'June 15',
    ctaShort: 'Enroll US$596',
    ctaLong: 'Enroll Now, US$596',
    selfPaceWindow: '12-month access · personal mentorship',
    metaTitle:
      '200-Hour Online Yoga Teacher Training Premium, Akasha Yoga Academy | Guided, Personal, Yours',
    metaDescription:
      "Become Yoga Alliance certified with personal mentorship, alignment coaching, and 12-month Zoom access. 200-Hour Premium YTT, 60% off (US$596, was US$1490). 1,100+ graduates on 6 continents.",
  },
};

export const getTier = (slug) => TIERS[slug] || TIERS.essential;

export const getSavings = (tier) => tier.regularPrice - tier.promoPrice;
