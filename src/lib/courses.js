// Catalog data for the Yoga Day hub/directory page.
// Hardcoded today; designed so each entry maps cleanly to a CMS row later
// (slug, title, category, href, discountPercent, regularPrice, promoPrice, image, shortDescription, prereq).
//
// Prices and descriptions verified from akashayogaacademy.com. Advanced
// course promos shown are the current summer-sale numbers (expire 30 Jun);
// Yoga Day pricing may replace these once Mbak Ayu confirms.

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
      'Self-paced online RYT-200 with Live Zoom classes, 200+ Bali studio videos, and a global yoga community. Full Yoga Alliance certification.',
    usp: 'Self-guided · 6-month access',
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
    badge: 'With Mentorship',
    discountPercent: 60,
    regularPrice: 1490,
    promoPrice: 596,
    currency: 'USD',
    shortDescription:
      'Everything in Essential, plus 1-on-1 mentorship, alignment coaching, individual feedback, the WhatsApp community, and 12 months of Live Zoom access.',
    usp: 'Personal mentorship · 12-month Zoom access · monthly payments',
    image:
      'https://static.wixstatic.com/media/cd7168_eea3bf63d06a4260b9e04f7bc00a255c~mv2.jpeg/v1/fill/w_1200,h_750,al_c,q_85,enc_avif,quality_auto/AYA300-Dean%20Raphael-67.jpeg',
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
    discountPercent: 78,
    regularPrice: 1800,
    promoPrice: 399,
    currency: 'USD',
    shortDescription:
      'Three 100-hour modules across Hatha, Pranayama, Yin Yoga, and Spiritual Heart Meditation. Stepping stone to your RYT-500.',
    image:
      'https://static.wixstatic.com/media/cd7168_44c4bbbdd68b48e88b61494a8e8c2d6ff000.jpg/v1/fill/w_1200,h_900,al_c,q_85,enc_avif,quality_auto/cd7168_44c4bbbdd68b48e88b61494a8e8c2d6ff000.jpg',
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
    discountPercent: 33,
    regularPrice: 600,
    promoPrice: 399,
    currency: 'USD',
    shortDescription:
      'Yin postures, functional anatomy, meridian theory, and Self Inquiry. Lifetime access to recordings, monthly live Zoom with instructors.',
    image:
      'https://static.wixstatic.com/media/cd7168_ac443cf0083b47ce9eed5df7eb1d58ebf000.jpg/v1/fill/w_1200,h_900,al_c,q_85,enc_avif,quality_auto/cd7168_ac443cf0083b47ce9eed5df7eb1d58ebf000.jpg',
    href: 'https://www.akashayogaacademy.com/80-hr-online-yin-yoga-teacher-training',
    isInternal: false,
    prereq: null,
    discountConfirmed: false,
  },
  {
    slug: '80h-hatha-pranayama',
    category: CATEGORIES.ADVANCED,
    priority: 3,
    title: '80-Hour Advanced Hatha & Pranayama Teacher Training',
    discountPercent: 33,
    regularPrice: 600,
    promoPrice: 399,
    currency: 'USD',
    shortDescription:
      'Breath-integrated Hatha, advanced Pranayama, arm balances, and bandhas. Rooted in the Hatha Yoga Pradipika, taught by E-RYT-500 teachers.',
    image:
      'https://static.wixstatic.com/media/cd7168_08b4252a1e1a44fbab5f36b9588534b3~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85,enc_avif,quality_auto/AYA300-Dean%20Raphael-W-67.jpg',
    href: 'https://www.akashayogaacademy.com/80-hr-online-hatha-and-pranayama',
    isInternal: false,
    prereq: null,
    discountConfirmed: false,
  },
  {
    slug: '80h-meditation',
    category: CATEGORIES.ADVANCED,
    priority: 4,
    title: '80-Hour Meditation Teacher Training',
    discountPercent: 33,
    regularPrice: 600,
    promoPrice: 399,
    currency: 'USD',
    shortDescription:
      'Spiritual Heart Meditation, mantra practice, and Eastern wisdom traditions. YACEP certified, suitable for beginners and experienced practitioners.',
    image:
      'https://static.wixstatic.com/media/cd7168_0a05ce77a94a4310b9ef008bd9319cbc~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85,enc_avif,quality_auto/cd7168_0a05ce77a94a4310b9ef008bd9319cbc~mv2.jpg',
    href: 'https://www.akashayogaacademy.com/80-hr-online-meditation-teacher-training',
    isInternal: false,
    prereq: null,
    discountConfirmed: false,
  },

  // Section E: Other Courses / On-Site (open to all)
  {
    slug: 'feminine-wisdom',
    category: CATEGORIES.OTHER,
    priority: 1,
    title: 'Feminine Wisdom for Holistic Wellbeing',
    discountPercent: null,
    regularPrice: 229,
    promoPrice: null,
    currency: 'USD',
    shortDescription:
      'Ayurveda, embodiment, and feminine cycles. 10 YACEP hours, taught by Astrid van Zon, Amanda Noga, and Ashley Apple.',
    openToAll: true,
    image:
      'https://static.wixstatic.com/media/cd7168_da755951681c4df5a4dce2d28aa579cf~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85,enc_avif,quality_auto/feminine-wisdom.jpg',
    href: 'https://www.akashayogaacademy.com/feminine',
    isInternal: false,
    discountConfirmed: false,
  },
  {
    slug: 'kundalini-india',
    category: CATEGORIES.OTHER,
    priority: 2,
    title: 'Kundalini Awakening Retreat, India',
    discountPercent: 40,
    regularPrice: 2999,
    promoPrice: 1799,
    currency: 'USD',
    shortDescription:
      '11 days in Rishikesh, 21 February to 3 March 2027. Hatha, pranayama, mudras, and Kundalini practices on the banks of the Ganga.',
    openToAll: true,
    image:
      'https://static.wixstatic.com/media/cd7168_a9ae728b0a474274b2afdea6122d8f7e~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85,enc_avif,quality_auto/kundalini-india.jpg',
    href: 'https://www.akashayogaacademy.com/kundalini-india',
    isInternal: false,
    discountConfirmed: false,
  },
];

export const getCoursesByCategory = (category) =>
  courses
    .filter((c) => c.category === category)
    .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
