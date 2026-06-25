// Catalog data for the Yoga Day hub/directory and individual course landings.
// Hardcoded today, designed to map cleanly to a CMS row later.
//
// Prices set per the Akasha Master Product Price List 2026, Yoga Day
// 60% Store-Wide Discount campaign. Discount active 21-24 + 28-30 June
// (ads stay live until 2 July but the actual sale window closes 30 Jun).
// Essential stays at 75% off; every other course is 60% off the base
// price during this window. Premium 6-month payment plan is flagged
// "not confirmed yet" in the PDF source.
//
// Each course has an internal href (the Next.js landing) and a wixEnrollUrl
// (the live Wix checkout). Until we have internal Wix product IDs for these
// courses, CTAs route to the existing Wix flow.

export const CATEGORIES = {
  MAIN: 'main',
  ADVANCED: 'advanced',
  OTHER: 'other',
};

// Sale windows for the 60% Yoga Day Store-Wide campaign.
// PDF tells a "phase 1 + extension" story (21-24, then 28-30) for marketing,
// but the discount stays on through the gap, so the runtime treats the
// whole run as one continuous window 21-30 Jun.
const STOREWIDE_WINDOWS = [
  { start: '2026-06-21T00:00:00+08:00', end: '2026-06-30T23:59:59+08:00' },
];

// Display-only phase labels for the Store-Wide campaign. Phase 1 dates
// (21-24) are shown to buyers through 27 Jun, then phase 2 (28-30) kicks
// in at 28 Jun 00:00 Bali as the extension.
const STOREWIDE_PHASES = [
  { start: '2026-06-21T00:00:00+08:00', end: '2026-06-27T23:59:59+08:00', dateRange: '21-24 June' },
  { start: '2026-06-28T00:00:00+08:00', end: '2026-06-30T23:59:59+08:00', dateRange: '28-30 June' },
];

// Essential EVERGREEN-2: continuous 17-30 Jun.
const ESSENTIAL_WINDOWS = [
  { start: '2026-06-17T00:00:00+08:00', end: '2026-06-30T23:59:59+08:00' },
];

export const courses = [
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
    usp: 'Self-guided, 6-month access',
    image:
      'https://static.wixstatic.com/media/c15a18_5d357dab7cec43c4879c3f12090081ce~mv2.jpg/v1/fill/w_1200,h_630,al_c,q_85,enc_avif,quality_auto/Certified-Yoga-Instructor---Bali---Akash.jpg',
    href: '/200h-essential',
    isInternal: true,
    prereq: null,
    saleWindows: ESSENTIAL_WINDOWS,
  },

  {
    slug: '200h-premium',
    category: CATEGORIES.MAIN,
    priority: 2,
    title: '200-Hour Premium Yoga Teacher Training',
    badge: 'With Mentorship',
    discountPercent: 60,
    discountLabel: '60% Yoga Day Discount',
    saleEndShort: 'June 30',
    regularPrice: 1490,
    promoPrice: 590,
    currency: 'USD',
    shortDescription:
      'Everything in Essential, plus 1-on-1 mentorship, alignment coaching, individual feedback, the WhatsApp community, and 12 months of Live Zoom access.',
    usp: 'Personal mentorship, 12-month Zoom access, monthly payments',
    image:
      'https://static.wixstatic.com/media/cd7168_eea3bf63d06a4260b9e04f7bc00a255c~mv2.jpeg/v1/fill/w_900,h_563,al_c,q_85,enc_avif,quality_auto/AYA300-Dean%20Raphael-67.jpeg',
    href: '/200h-premium',
    isInternal: true,
    prereq: null,
    saleWindows: STOREWIDE_WINDOWS,
    salePhases: STOREWIDE_PHASES,
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 1490, price: 590, currency: 'USD', note: 'One-time payment' },
      {
        slug: 'installment', label: '6-Month Plan', regularPrice: null, price: 249, currency: 'USD',
        note: 'per month, US$1,494 total', confirmed: false,
        wixProductPageUrl: 'https://www.akashayogaacademy.com/product-page/200-hour-yoga-tttc-6-month-premium-payment-plan',
      },
    ],
  },

  {
    slug: '300h-ytt',
    category: CATEGORIES.ADVANCED,
    priority: 1,
    title: '300-Hour Advanced Yoga Teacher Training',
    tagline: 'A Life-Changing Yogic Immersion',
    discountPercent: 60,
    discountLabel: '60% Yoga Day Discount',
    saleEndShort: 'June 30',
    regularPrice: 1800,
    promoPrice: 699,
    currency: 'USD',
    shortDescription:
      'Three 100-hour modules across Hatha, Pranayama, Yin Yoga, and Spiritual Heart Meditation. Stepping stone to your RYT-500.',
    image:
      'https://static.wixstatic.com/media/cd7168_08b4252a1e1a44fbab5f36b9588534b3~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/AYA300-Dean%20Raphael-W-67.jpg',
    href: '/300h-ytt',
    wixEnrollUrl: 'https://www.akashayogaacademy.com/300-hour-online-teacher-training',
    isInternal: true,
    prereq: '200-Hour Certification',
    duration: '300 hours, self-paced',
    saleWindows: STOREWIDE_WINDOWS,
    salePhases: STOREWIDE_PHASES,
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 1800, price: 699, currency: 'USD', note: 'One-time payment' },
      {
        slug: 'installment', label: '3-Month Plan', regularPrice: null, price: 259, currency: 'USD',
        note: 'per month, US$777 total',
        wixProductPageUrl: 'https://www.akashayogaacademy.com/product-page/300-hour-advanced-yoga-teacher-training',
      },
    ],
    instructors: ['Burkhard', 'Kirsten', 'Devdas'],
    longDescription: [
      'This advanced certification deepens your yoga practice through three integrated modules: classical Hatha and Pranayama, restorative Yin Yoga with self-inquiry, and Spiritual Heart Meditation. Live group sessions, personal feedback, and a supportive global community transform aspiring instructors into confident master teachers grounded in authentic yogic tradition.',
      'What sets this training apart is its heart-centered approach, taught by educators with 60+ combined years of teaching. The interactive online format includes 45+ live Zoom calls weekly, peer teaching partnerships, one-on-one supervision, and exclusive bonuses, all fully accredited by Yoga Alliance and enabling graduates to register as RYT-500.',
    ],
    learningOutcomes: [
      'Advanced Hatha, Vinyasa Krama, and arm balance progressions',
      'Pranayama techniques, bandhas, and subtle energy work',
      'Yin Yoga philosophy, meridian anatomy, and fascia connections',
      'Self-inquiry practices exploring existential questions',
      'Genuine meditation techniques and altered states of consciousness',
      'Anatomy, physiology, and TCM meridian knowledge',
      'Heart-opening meditation leadership and space-holding skills',
      'Personal teaching style development and student inspiration',
    ],
    inclusions: [
      '45+ live group Zoom sessions, 8 calls weekly for flexibility',
      'Three 100-hour modules: Hatha/Pranayama, Yin Yoga, Meditation',
      'Personal one-on-one feedback across five teaching evaluations',
      'Peer-to-peer practice teaching with accountability partners',
      '300-hour Yoga Alliance certification, RYT-500 eligible when combined with your RYT-200',
      'Ten bonuses worth US$503: Tao Te Ching Scripture Study (US$25), Meditation Collection 14 audios (US$30), 9-Hour Akasha Silent Retreat (US$199), Integral Yoga Lectures (US$39), Being Water Conversation (US$35), Quotes from Masters Flash Cards (US$30), Live Music for Yoga Classes (US$35), Yin Yoga Music (US$35), Yin Yoga Poster (US$50), 2026 Yearly Planner (US$25)',
      'Lifetime access to recorded content and course materials',
      'Global supportive community with buddy system',
    ],
    testimonials: [
      {
        name: 'Martina',
        country: 'Germany',
        quote: 'I really appreciate everything they taught here. We went into every bio-physical detail, from the cardiovascular system, hormones, anatomy, and everything else involved. All was explained in a way that helps a lot to understand why we do certain things in Yoga & the effect we will have on us.',
        photo: 'https://static.wixstatic.com/media/cd7168_154ac401d63d41149a925b22b5866eb0~mv2.jpeg/v1/crop/x_0,y_236,w_720,h_724/fill/w_508,h_502,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Martina.jpeg',
      },
      {
        name: 'Nici',
        country: 'Australia',
        quote: "The main thing that I love about the Akasha family is that it's all about connecting to the heart. There is also a lot of academic coverage, it's everything, the heart and the knowledge supplied. It's amazing the difference between myself before and now after the 300-Hour TTC.",
        photo: 'https://static.wixstatic.com/media/cd7168_d31feeaf75024ae48a9f68d364b59c2d~mv2.jpeg/v1/crop/x_0,y_58,w_540,h_543/fill/w_500,h_502,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Nici.jpeg',
      },
      {
        name: 'Sandra',
        country: 'New Zealand',
        quote: "Akasha teachers, they're very knowledgeable, they live and breathe these teachings themselves. Therefore they're not coming from a mind perspective, they're coming from a heart perspective. Those principles that you can use in your daily life.",
        photo: 'https://static.wixstatic.com/media/cd7168_d01bfdb4047f4179bdcf9f505f3af7a7~mv2.jpeg/v1/fill/w_500,h_502,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sandra.jpeg',
      },
    ],
  },

  {
    slug: '80h-yin',
    category: CATEGORIES.ADVANCED,
    priority: 2,
    title: '80-Hour Yin Yoga Teacher Training',
    tagline: 'Expand Your Awareness',
    discountPercent: 60,
    discountLabel: '60% Yoga Day Discount',
    saleEndShort: 'June 30',
    regularPrice: 600,
    promoPrice: 239,
    currency: 'USD',
    shortDescription:
      'Yin postures, functional anatomy, meridian theory, and Self Inquiry. Lifetime access to recordings, monthly live Zoom with instructors.',
    image:
      'https://static.wixstatic.com/media/cd7168_ac443cf0083b47ce9eed5df7eb1d58ebf000.jpg/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/cd7168_ac443cf0083b47ce9eed5df7eb1d58ebf000.jpg',
    href: '/80h-yin',
    wixEnrollUrl: 'https://www.akashayogaacademy.com/80-hr-online-yin-yoga-teacher-training',
    isInternal: true,
    prereq: '200-Hour Certification',
    duration: '80 hours, self-paced',
    saleWindows: STOREWIDE_WINDOWS,
    salePhases: STOREWIDE_PHASES,
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 600, price: 239, currency: 'USD', note: 'One-time payment' },
      {
        slug: 'installment', label: '3-Month Plan', regularPrice: null, price: 89, currency: 'USD',
        note: 'per month, US$267 total',
        wixProductPageUrl: 'https://www.akashayogaacademy.com/product-page/80-hour-yin-yoga-ttc-pp',
      },
    ],
    instructors: ['Kirsten', 'Burkhard', 'Devdas', 'Astrid'],
    longDescription: [
      "Akasha's online Yin certification merges classical Yin Yoga fundamentals with contemplative Self Inquiry practice. This Yoga Alliance-accredited program combines functional anatomy, meridian theory, and mindfulness, a holistic approach that extends far beyond postures into existential exploration.",
      'Unlike conventional teacher trainings, this course emphasizes introspection as a transformative tool. Students discover how slowing down and examining present-moment awareness reshapes not only their personal practice but their entire relationship with life itself, practical wisdom that applies on and off the mat.',
    ],
    learningOutcomes: [
      'Practice and teach Yin safely with proper alignment and modifications for diverse bodies',
      'Master essential Yin postures, including benefits, target areas, contraindications, and energetic applications',
      'Functional anatomy and how connective tissue, fascia, and joints respond to slow, sustained poses',
      'Traditional Chinese Medicine meridian theory and the Five Elements system',
      'Myofascial lines and their connection to energetic meridian pathways',
      'Self Inquiry techniques to deepen personal awareness and authentic spiritual practice',
      'Structure balanced Yin classes and guide students through contemplative practice',
      'Investigate the roots of consciousness and awareness beyond body and mind',
    ],
    inclusions: [
      'Lifetime access to recorded video modules and training materials',
      'Professional manuals and comprehensive course documentation',
      'Monthly live Zoom calls with lead instructors for personalized guidance',
      'Five bonuses worth US$264: Yin Yang Pranayama Masterclass (US$99), Breath-Based Alignment Workshop (US$55), Yin Yoga Sequences (US$25), Yin Yoga Poster (US$50), Yin Yoga Music (US$35)',
      'Community participation with global Akasha family members',
      'High-quality video production from BALIWOOD Film Studio',
      'Flexible self-paced learning across time zones',
      'Expert support team assistance throughout your journey',
    ],
    testimonials: [
      { name: 'Anna Kotaba', country: 'Poland', quote: 'They show you how to slow down, how to open up, and how to love yourself.', photo: 'https://static.wixstatic.com/media/cd7168_51660736472d4c7fb23211b0196e64ff~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_51660736472d4c7fb23211b0196e64ff~mv2.jpg' },
      { name: 'Luis', country: 'New Zealand', quote: 'The lessons were very genuine, they came from a real heartfelt place.', photo: 'https://static.wixstatic.com/media/cd7168_dd087d310c5f4b8f8c5e4fcdc09bbe77~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_dd087d310c5f4b8f8c5e4fcdc09bbe77~mv2.jpg' },
      { name: 'Anu Anj', country: 'United Kingdom', quote: 'I love Akasha Yoga Academy. Their programs are extremely comprehensive & truly get to the essence of Yoga.', photo: 'https://static.wixstatic.com/media/cd7168_292a4b76d8274db68a31d7ad3271f7fc~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_292a4b76d8274db68a31d7ad3271f7fc~mv2.jpg' },
      { name: 'Sharon', country: 'Australia', quote: 'The Akasha family is so welcoming & supportive. They create such a safe space.', photo: 'https://static.wixstatic.com/media/cd7168_31d48015a7b948b2ae07b77dc52084b8~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_31d48015a7b948b2ae07b77dc52084b8~mv2.jpg' },
      { name: 'Valerie', country: 'Curaçao', quote: 'To find teachers with so much depth, passion & dedication is quite unique.', photo: 'https://static.wixstatic.com/media/cd7168_122c4af0ec6c46b9a7c1e70bbea1ac66~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_122c4af0ec6c46b9a7c1e70bbea1ac66~mv2.jpg' },
      { name: 'Nici Kellerman', country: 'Australia', quote: 'They have taught me how to step into my own authority, how to teach what I love, and how to keep growing.', photo: 'https://static.wixstatic.com/media/cd7168_5356899bd52b4ccd9bf2603949fac275~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_5356899bd52b4ccd9bf2603949fac275~mv2.jpg' },
    ],
  },

  {
    slug: '80h-hatha-pranayama',
    category: CATEGORIES.ADVANCED,
    priority: 3,
    title: '80-Hour Advanced Hatha & Pranayama Teacher Training',
    tagline: 'Transform Your Practice',
    discountPercent: 60,
    discountLabel: '60% Yoga Day Discount',
    saleEndShort: 'June 30',
    regularPrice: 600,
    promoPrice: 239,
    currency: 'USD',
    shortDescription:
      'Breath-integrated Hatha, advanced Pranayama, arm balances, and bandhas. Rooted in the Hatha Yoga Pradipika, taught by E-RYT-500 teachers.',
    image:
      'https://static.wixstatic.com/media/cd7168_08b4252a1e1a44fbab5f36b9588534b3~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/AYA300-Dean%20Raphael-W-67.jpg',
    href: '/80h-hatha-pranayama',
    wixEnrollUrl: 'https://www.akashayogaacademy.com/80-hr-online-hatha-and-pranayama',
    isInternal: true,
    prereq: '200-Hour Certification',
    duration: '80 hours, self-paced',
    saleWindows: STOREWIDE_WINDOWS,
    salePhases: STOREWIDE_PHASES,
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 600, price: 239, currency: 'USD', note: 'One-time payment' },
      {
        slug: 'installment', label: '3-Month Plan', regularPrice: null, price: 89, currency: 'USD',
        note: 'per month, US$267 total',
        wixProductPageUrl: 'https://www.akashayogaacademy.com/product-page/80-hour-adv-hatha-pranayama-ttc-pp',
      },
    ],
    instructors: ['Devdas', 'Kirsten', 'Burkhard', 'Marc'],
    longDescription: [
      'This comprehensive online program deepens your practice through breath-based techniques rooted in classical Hatha. Pranayama and bandhas integrate with asana to build an embodied understanding of authentic yoga that goes beyond physical alignment. The curriculum treats transformative breathwork as the foundational tool for genuine personal practice and confident teaching.',
      "The course prepares experienced practitioners to teach advanced Hatha and Pranayama skillfully to diverse student populations. Through studying historical texts, exploring modern lineages, and mastering specialized techniques, graduates gain confidence sharing breath-centered practices for individual needs. Akasha's faculty bring decades of committed study and real-world teaching to this premium training.",
    ],
    learningOutcomes: [
      'Integrate breath and bandhas into asana for deeper transformation',
      'Master advanced pranayama techniques and their energetic implications',
      'Develop arm balancing skills, inversions, and handstand progressions',
      'Study the Hatha Yoga Pradipika and authentic yoga history',
      'Teach individualized practices addressing various ages and body types',
      'Anatomy of respiration and contraindications for safe practice',
      "Eight limbs of yoga philosophy through Patanjali's teachings",
      'Heating and cooling breath practices and their effects',
    ],
    inclusions: [
      'Lifetime access to all video content, manuals, and training materials',
      'Interactive curriculum exceeding official teacher training requirements',
      'Guest workshops featuring renowned instructors like Marc Laws',
      'Seven bonuses worth US$289: 8 Limbs of Yoga Workshop (US$99), Yoga Teacher Resume template (US$40), Meditation Collection 24 audios (US$35), Liability Waiver template (US$30), Cover Letter template (US$30), New Client Intake Form (US$25), 2026 Yearly Planner (US$25)',
      'Professional instruction from E-RYT-500 senior teachers',
      'Comprehensive support for teaching real-world yoga classes',
    ],
    testimonials: [
      { name: 'Lauren', country: 'New Zealand', quote: 'Akasha instructors are incredible people, mentors, inspiring, nurturing and so authentic.', photo: 'https://static.wixstatic.com/media/cd7168_e10d14bef0b343c8b0b13b390c381c65~mv2.jpeg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_e10d14bef0b343c8b0b13b390c381c65~mv2.jpeg' },
      { name: 'Nici', country: 'United States', quote: 'From the bottom of my heart, I really encourage anyone thinking about joining the Akasha family to do it. It’s amazing.', photo: 'https://static.wixstatic.com/media/cd7168_d31feeaf75024ae48a9f68d364b59c2d~mv2.jpeg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_d31feeaf75024ae48a9f68d364b59c2d~mv2.jpeg' },
      { name: 'Sandra', country: 'New Zealand', quote: 'Akasha teachers live and breathe these teachings themselves. They come from a heart perspective, not just the mind.', photo: 'https://static.wixstatic.com/media/cd7168_d01bfdb4047f4179bdcf9f505f3af7a7~mv2.jpeg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_d01bfdb4047f4179bdcf9f505f3af7a7~mv2.jpeg' },
    ],
  },

  {
    slug: '80h-meditation',
    category: CATEGORIES.ADVANCED,
    priority: 4,
    title: '80-Hour Meditation Teacher Training',
    tagline: 'Find Stillness',
    discountPercent: 60,
    discountLabel: '60% Yoga Day Discount',
    saleEndShort: 'June 30',
    regularPrice: 600,
    promoPrice: 239,
    currency: 'USD',
    shortDescription:
      'Spiritual Heart Meditation, mantra practice, and Eastern wisdom traditions. YACEP certified, suitable for beginners and experienced practitioners.',
    image:
      'https://static.wixstatic.com/media/cd7168_0a05ce77a94a4310b9ef008bd9319cbc~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/cd7168_0a05ce77a94a4310b9ef008bd9319cbc~mv2.jpg',
    href: '/80h-meditation',
    wixEnrollUrl: 'https://www.akashayogaacademy.com/80-hr-online-meditation-teacher-training',
    isInternal: true,
    prereq: '200-Hour Certification',
    duration: '80 hours, self-paced',
    saleWindows: STOREWIDE_WINDOWS,
    salePhases: STOREWIDE_PHASES,
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 600, price: 239, currency: 'USD', note: 'One-time payment' },
      {
        slug: 'installment', label: '3-Month Plan', regularPrice: null, price: 89, currency: 'USD',
        note: 'per month, US$267 total',
        wixProductPageUrl: 'https://www.akashayogaacademy.com/product-page/80-hour-meditation-ttc',
      },
    ],
    instructors: ['Burkhard', 'Kirsten', 'Devdas', 'Hareesh Christopher Wallis (guest)'],
    longDescription: [
      'This meditation training offers a rare integration of practices from Yoga, Advaita Vedanta, Tantrism, Kashmir Shaivism, and Buddhism. Participants dive into Spiritual Heart Meditation, mantra practices, and self-inquiry within a supportive environment built for profound inner transformation.',
      'The program equips students to teach meditation with confidence while deepening personal practice. Through guided sessions, philosophy study, and practical techniques, learners develop the skills to hold space for others and integrate meditation into daily life and teaching contexts.',
    ],
    learningOutcomes: [
      'Spiritual Heart Meditation combining heart centering, breath awareness, and self-inquiry',
      'Mantra meditation using vocalized and silent techniques with bija mantras',
      'Pranayama and asana practices to prepare body and mind for deeper meditation',
      'Eastern wisdom: Vipassana, Tantrism, Kashmiri Shaivism',
      'Western scientific perspectives on consciousness, brainwaves, and altered states',
      'Meditation philosophy across cultures and historical traditions',
      'Teaching methodologies for classes and workshops',
      'Personal self-practice development and sustainable meditation routines',
    ],
    inclusions: [
      '80 hours of pre-recorded video content with lifetime access',
      'Comprehensive course manual and training materials',
      'Eight guided Mantra Meditation sessions with Devdas (15 minutes each)',
      'Eight Spiritual Heart Meditation sessions with Kirsten (15 minutes each)',
      'Eight Spiritual Heart Meditation sessions with Burkhard (30 minutes each)',
      'Self-Inquiry and Heart of Oneness workshop module',
      'Mudras flash card set and poetry/quotation booklet',
      'Lucid Dreaming playlist for supplemental practice',
      'One full-day silent meditation retreat experience',
      'Ongoing community support and access to live calls',
    ],
    testimonials: [
      { name: 'Yasmin', country: '', quote: 'This meditation course transformed me into a better person, deepening my life.', photo: 'https://static.wixstatic.com/media/cd7168_61d0e60bb0de4aedaf0dabb8338cb2ab~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_61d0e60bb0de4aedaf0dabb8338cb2ab~mv2.jpg' },
      { name: 'Sunshine', country: '', quote: 'Unlike other online yoga courses, they infuse meditation throughout, even in the asana practice.', photo: 'https://static.wixstatic.com/media/cd7168_099123c5707749cf849a142b8e6dc60b~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_099123c5707749cf849a142b8e6dc60b~mv2.jpg' },
      { name: 'Teia', country: '', quote: 'Their heart-centered teaching stands out. They listen and speak from the heart.', photo: 'https://static.wixstatic.com/media/cd7168_a3250efc3194417181ec7436dbc5771d~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_a3250efc3194417181ec7436dbc5771d~mv2.jpg' },
    ],
  },

  {
    slug: 'feminine-wisdom',
    category: CATEGORIES.OTHER,
    priority: 1,
    title: 'Feminine Wisdom for Holistic Wellbeing',
    tagline: 'Move with Your Rhythms',
    discountPercent: 60,
    discountLabel: '60% Yoga Day Discount',
    saleEndShort: 'June 30',
    regularPrice: 229,
    promoPrice: 89,
    currency: 'USD',
    shortDescription:
      'Ayurveda, embodiment, and feminine cycles. 10 YACEP hours, taught by Astrid van Zon, Amanda Noga, and Ashley Apple.',
    openToAll: true,
    image:
      'https://static.wixstatic.com/media/cd7168_da755951681c4df5a4dce2d28aa579cf~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/feminine-wisdom.jpg',
    href: '/feminine-wisdom',
    wixEnrollUrl: 'https://www.akashayogaacademy.com/feminine',
    isInternal: true,
    duration: '10 YACEP hours, self-paced',
    saleWindows: STOREWIDE_WINDOWS,
    salePhases: STOREWIDE_PHASES,
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 229, price: 89, currency: 'USD', note: 'One-time payment' },
    ],
    instructors: ['Astrid van Zon', 'Amanda Noga', 'Ashley Apple'],
    longDescription: [
      "This course invites you to reconnect with your body's inherent wisdom and cyclical nature. Rather than pushing through exhaustion and suppressing natural rhythms, you learn to move with your body's intelligence. Through Ayurveda, gentle yoga, and feminine embodiment, you discover how aligning with your cycles generates harmony, clarity, and radiance.",
      'The program bridges ancient yogic traditions with modern understanding of women\'s health and sexuality. It honors sensuality as a sacred force interconnected with spirituality, helping students cultivate confidence, creativity, and joy. "Your body is not a problem to fix. It is a wisdom keeper waiting to be heard."',
    ],
    learningOutcomes: [
      'Align personal rhythms with seasonal and cyclical patterns for optimal energy',
      'Understand menstrual and lunar cycle phases and their significance',
      'Yoga practices customized for each inner season (Winter, Spring, Summer, Autumn)',
      'Sacred approaches to fertility and creative energy activation',
      'Science and philosophy of sexual energy transformation',
      'Breathing and embodiment for refining sensual awareness',
      'Connection between sexuality and higher spiritual consciousness',
      'Integration of Ayurvedic wisdom for feminine balance',
    ],
    inclusions: [
      'Ayurvedic guidance aligned with inner and outer seasonal cycles',
      "Movement practices harmonized with your body's natural rhythms",
      'Training in sacred sexuality and sensual energy activation',
      '10 Yoga Alliance Continuing Education (YACEP) credit hours',
      'Instruction from multiple expert teachers with specialized knowledge',
      'Comprehensive exploration of feminine energy across life stages',
      'Ancient wisdom integrated with contemporary wellness science',
    ],
  },

  {
    slug: 'kundalini-india',
    category: CATEGORIES.OTHER,
    priority: 2,
    title: 'Kundalini Awakening Retreat, India',
    tagline: 'Awaken Your Soul in India',
    discountPercent: 60,
    discountLabel: '60% Yoga Day Discount',
    saleEndShort: 'June 30',
    regularPrice: 2999,
    promoPrice: 1199,
    currency: 'USD',
    shortDescription:
      '11 days in Rishikesh, 21 February to 3 March 2027. Hatha, pranayama, mudras, and Kundalini practices on the banks of the Ganga.',
    openToAll: true,
    image:
      'https://static.wixstatic.com/media/cd7168_a9ae728b0a474274b2afdea6122d8f7e~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/kundalini-india.jpg',
    href: '/kundalini-india',
    wixEnrollUrl: 'https://www.akashayogaacademy.com/kundalini-india',
    isInternal: true,
    duration: '11 days, on-site',
    saleWindows: STOREWIDE_WINDOWS,
    salePhases: STOREWIDE_PHASES,
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 2999, price: 1199, currency: 'USD', note: 'One-time payment' },
      {
        // Headless SDK pilot still hits "You can't place your order just
        // yet" even with the Digital PP shipping profile live in Wix, so
        // we route the buyer to the native Wix product page where the
        // hosted checkout knows how to handle the PP variant directly.
        slug: 'installment', label: '3-Month Plan', regularPrice: null, price: 399, currency: 'USD',
        note: 'per month, US$1,197 total',
        wixProductPageUrl: 'https://www.akashayogaacademy.com/product-page/kundalini-awakening-retreat-payment-plan',
      },
    ],
    location: 'Rishikesh, India',
    dates: '21 February to 3 March 2027',
    instructors: ['Burkhard', 'Astrid'],
    longDescription: [
      "This 11-day transformative pilgrimage combines advanced Hatha Yoga, Pranayama, and meditative practices to awaken Kundalini Shakti. Set in sacred Rishikesh, you practice by the holy Ganga while receiving expert guidance on energy channeling, chakra opening, and spiritual evolution in India's spiritual heartland.",
      'The retreat blends classical yogic disciplines with wisdom teachings on consciousness and oneness. Purification practices, sacred rituals, temple visits, and nature immersion happen while staying in a serene ashram nestled in the Himalayan foothills, an authentic environment for deep inner transformation.',
    ],
    learningOutcomes: [
      'Sunrise yoga and meditation on the Ganga River banks',
      'Advanced Hatha with focus on energy channeling and asanas',
      'Pranayama, mudras, and bandhas',
      'Yogic breathwork and mindfulness',
      'Evening satsang with spiritual teachings',
      'Sacred temple visits and ancient meditation caves',
      'Ganga Aarti (evening fire ritual)',
      'Fire puja purification ritual at the ashram',
      'Silent meditation retreat days',
      'Himalayan foothill hikes and Ganga purification baths',
    ],
    inclusions: [
      'Double room with twin beds, private bathroom, Wi-Fi',
      'Three vegetarian meals daily plus snacks and beverages',
      'Safe private airport pickup and drop-off',
      'Yoga Alliance YACEP continuing education certificate',
      'All guided excursions and local transport',
      'Entrance fees, donations, and ritual offerings',
      'Silent meditation retreat and satsang participation',
      'Fire ceremonies and spiritual initiations',
      'Nature trips including Ganga baths and waterfall visits',
      'Community support and like-minded fellowship',
      'Online Preparation Kit for Kundalini Retreat',
      'Welcome Basket with gifts and goodies',
      '8 Limbs of Yoga Workshop bonus (US$99 value)',
      '3-Month Payment Plan available: US$399 per month (US$1,197 total)',
    ],
    testimonials: [
      { name: 'Tina', country: 'France', quote: 'I am utmost grateful, a life-saving experience. Thank you from the heart.', photo: 'https://static.wixstatic.com/media/cd7168_759b0a70c0de42c395c4cfd4762d814f~mv2.jpeg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_759b0a70c0de42c395c4cfd4762d814f~mv2.jpeg' },
      { name: 'Sarah', country: 'United Kingdom', quote: 'I genuinely had a life-changing experience.', photo: 'https://static.wixstatic.com/media/cd7168_d47345741d464fce9df9734298fbc9a2~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_d47345741d464fce9df9734298fbc9a2~mv2.jpg' },
      { name: 'Helen', country: 'Australia', quote: 'Akasha Yoga Academy created the right environment with each element they curated.', photo: 'https://static.wixstatic.com/media/cd7168_061d9a6d4723472d80246eb325ecf5a8~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_061d9a6d4723472d80246eb325ecf5a8~mv2.jpg' },
      { name: 'Marie Celine', country: 'Switzerland', quote: 'Arriving at the Ashram near the Ganga River was a sacred experience.', photo: 'https://static.wixstatic.com/media/cd7168_2bd04e1e439d49fdb28faab64fc0f28b~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_2bd04e1e439d49fdb28faab64fc0f28b~mv2.jpg' },
      { name: 'Karen', country: 'United States', quote: 'Coming to India with fellow yogis has been an amazing journey of learning.', photo: 'https://static.wixstatic.com/media/cd7168_7758fc4ba91a48bd8130404f3f52f9d7~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_7758fc4ba91a48bd8130404f3f52f9d7~mv2.jpg' },
    ],
    notIncluded: [
      'Flights to and from India',
      'Travel insurance',
      'Indian visa',
      'Personal expenses (souvenirs, additional meals)',
    ],
  },
];

export const getCoursesByCategory = (category) =>
  courses
    .filter((c) => c.category === category)
    .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));

export const getCourseBySlug = (slug) => courses.find((c) => c.slug === slug);
