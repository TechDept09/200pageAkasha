// Catalog data for the Yoga Day hub/directory page.
// Hardcoded today; designed so each entry maps cleanly to a CMS row later
// (slug, title, category, href, discountPercent, regularPrice, promoPrice, image, shortDescription, prereq).
//
// Discount %, regular/promo price for Advanced and Other are placeholders
// pending confirmation from Mbak Ayu. The Essential and Premium 200H prices
// are the source of truth for the two main products of the Yoga Day push.

export const CATEGORIES = {
  MAIN: 'main',
  ADVANCED: 'advanced',
  OTHER: 'other',
};

export const courses = [
  // Section B: Main Product
  {
    slug: '200h-essential',
    category: CATEGORIES.MAIN,
    priority: 1,
    title: '200-Hour Essential Yoga Teacher Training',
    badge: 'Most Popular',
    discountPercent: 75,
    regularPrice: 1190,
    promoPrice: 290,
    currency: 'USD',
    shortDescription:
      'Self-paced online RYT-200 with Live Zoom classes, 200+ Bali studio videos, and a global yoga community. The complete path to Yoga Alliance certification.',
    usp: 'No mentorship · self-guided',
    image:
      'https://static.wixstatic.com/media/c15a18_5d357dab7cec43c4879c3f12090081ce~mv2.jpg/v1/fill/w_1200,h_630,al_c,q_85,enc_avif,quality_auto/Certified-Yoga-Instructor---Bali---Akash.jpg',
    href: '/200h-essential',
    isInternal: true,
    prereq: null,
  },

  // Section C: Secondary Product
  {
    slug: '200h-premium',
    category: CATEGORIES.MAIN,
    priority: 2,
    title: '200-Hour Premium Yoga Teacher Training',
    badge: 'Includes Mentorship',
    discountPercent: 60,
    regularPrice: 1490,
    promoPrice: 596,
    currency: 'USD',
    shortDescription:
      'Everything in Essential, plus personal mentorship, individual feedback, alignment coaching, extended Zoom access, and the WhatsApp community.',
    usp: 'Personal mentorship · individual feedback · extended Zoom access',
    image: null,
    href: '/200h-premium',
    isInternal: true,
    prereq: null,
  },

  // Section D: Advanced Courses (require prior 200H or advanced practice)
  {
    slug: '300h-ytt',
    category: CATEGORIES.ADVANCED,
    priority: 1,
    title: '300-Hour Advanced Yoga Teacher Training',
    discountPercent: 60,
    regularPrice: null,
    promoPrice: null,
    currency: 'USD',
    shortDescription:
      'Hatha, Pranayama, Yin Yoga, Mindfulness and Meditation. The natural next step after your RYT-200.',
    image: null,
    href: 'https://www.akashayogaacademy.com/300-hour-online-teacher-training',
    isInternal: false,
    prereq: 'RYT-200 or equivalent',
    discountConfirmed: false,
  },
  {
    slug: '80h-yin',
    category: CATEGORIES.ADVANCED,
    priority: 2,
    title: '80-Hour Yin Yoga Teacher Training',
    discountPercent: 60,
    regularPrice: null,
    promoPrice: null,
    currency: 'USD',
    shortDescription:
      'Explore stillness, meridians, and authentic spiritual practice through Self Inquiry.',
    image: null,
    href: 'https://www.akashayogaacademy.com/80-hr-online-yin-yoga-teacher-training',
    isInternal: false,
    prereq: '200-Hour Certification',
    discountConfirmed: false,
  },
  {
    slug: '80h-hatha-pranayama',
    category: CATEGORIES.ADVANCED,
    priority: 3,
    title: '80-Hour Advanced Hatha & Pranayama Teacher Training',
    discountPercent: 60,
    regularPrice: null,
    promoPrice: null,
    currency: 'USD',
    shortDescription:
      'Deepen your practice and teaching with advanced asanas, pranayama, and bandhas.',
    image: null,
    href: 'https://www.akashayogaacademy.com/80-hr-online-hatha-and-pranayama',
    isInternal: false,
    prereq: '200-Hour Certification',
    discountConfirmed: false,
  },
  {
    slug: '80h-meditation',
    category: CATEGORIES.ADVANCED,
    priority: 4,
    title: '80-Hour Meditation Teacher Training',
    discountPercent: 60,
    regularPrice: null,
    promoPrice: null,
    currency: 'USD',
    shortDescription:
      'Develop confidence and compassion for leading meditation classes.',
    image: null,
    href: 'https://www.akashayogaacademy.com/80-hr-online-meditation-teacher-training',
    isInternal: false,
    prereq: '200-Hour Certification',
    discountConfirmed: false,
  },

  // Section E: Other Courses / On-Site (open to all)
  {
    slug: 'feminine-wisdom',
    category: CATEGORIES.OTHER,
    priority: 1,
    title: 'Feminine Wisdom for Holistic Wellbeing',
    discountPercent: null,
    regularPrice: null,
    promoPrice: null,
    currency: 'USD',
    shortDescription:
      'Yoga, Ayurveda, and feminine embodiment practices aligned with cyclical rhythms. Open to all, no yoga prerequisite.',
    openToAll: true,
    image: null,
    href: 'https://www.akashayogaacademy.com/feminine',
    isInternal: false,
    discountConfirmed: false,
  },
  {
    slug: 'kundalini-india',
    category: CATEGORIES.OTHER,
    priority: 2,
    title: 'Kundalini Awakening Retreat in India',
    discountPercent: null,
    regularPrice: null,
    promoPrice: null,
    currency: 'USD',
    shortDescription:
      'On-site retreat in the Himalayas, 21 February to 3 March 2027. Classical Kundalini Yoga, chakra activation, and Meditative Wisdom of Oneness.',
    openToAll: true,
    image: null,
    href: 'https://www.akashayogaacademy.com/kundalini-india',
    isInternal: false,
    discountConfirmed: false,
  },
];

export const getCoursesByCategory = (category) =>
  courses
    .filter((c) => c.category === category)
    .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
