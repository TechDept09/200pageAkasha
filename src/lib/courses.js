// Catalog data for the Yoga Day hub/directory and individual course landings.
// Hardcoded today, designed to map cleanly to a CMS row later.
//
// Prices set per the Akasha Master Product Price List 2026, Yoga Day
// 60% Store-Wide Discount campaign (21-30 June, ads until 2 July).
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
// Active 21-24 Jun, gap 25-27 Jun, active again 28-30 Jun, ads still on
// website until 2 Jul lunch time (Bali). All non-Essential courses use this.
const STOREWIDE_WINDOWS = [
  { start: '2026-06-21T00:00:00+08:00', end: '2026-06-24T23:59:59+08:00' },
  { start: '2026-06-28T00:00:00+08:00', end: '2026-07-02T12:00:00+08:00' },
];

// Essential EVERGREEN-2: continuous 17-30 Jun, ads alive until 2 Jul lunch.
const ESSENTIAL_WINDOWS = [
  { start: '2026-06-17T00:00:00+08:00', end: '2026-07-02T12:00:00+08:00' },
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
    saleEndShort: 'July 2',
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
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 1490, price: 590, currency: 'USD', note: 'One-time payment' },
      { slug: 'installment', label: '6-Month Plan', regularPrice: null, price: 249, currency: 'USD', note: 'per month, US$1,494 total', confirmed: false },
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
    saleEndShort: 'July 2',
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
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 1800, price: 699, currency: 'USD', note: 'One-time payment' },
      { slug: 'installment', label: '3-Month Plan', regularPrice: null, price: 259, currency: 'USD', note: 'per month, US$777 total' },
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
  },

  {
    slug: '80h-yin',
    category: CATEGORIES.ADVANCED,
    priority: 2,
    title: '80-Hour Yin Yoga Teacher Training',
    tagline: 'Expand Your Awareness',
    discountPercent: 60,
    discountLabel: '60% Yoga Day Discount',
    saleEndShort: 'July 2',
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
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 600, price: 239, currency: 'USD', note: 'One-time payment' },
      { slug: 'installment', label: '3-Month Plan', regularPrice: null, price: 89, currency: 'USD', note: 'per month, US$267 total' },
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
  },

  {
    slug: '80h-hatha-pranayama',
    category: CATEGORIES.ADVANCED,
    priority: 3,
    title: '80-Hour Advanced Hatha & Pranayama Teacher Training',
    tagline: 'Transform Your Practice',
    discountPercent: 60,
    discountLabel: '60% Yoga Day Discount',
    saleEndShort: 'July 2',
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
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 600, price: 239, currency: 'USD', note: 'One-time payment' },
      { slug: 'installment', label: '3-Month Plan', regularPrice: null, price: 89, currency: 'USD', note: 'per month, US$267 total' },
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
  },

  {
    slug: '80h-meditation',
    category: CATEGORIES.ADVANCED,
    priority: 4,
    title: '80-Hour Meditation Teacher Training',
    tagline: 'Find Stillness',
    discountPercent: 60,
    discountLabel: '60% Yoga Day Discount',
    saleEndShort: 'July 2',
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
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 600, price: 239, currency: 'USD', note: 'One-time payment' },
      { slug: 'installment', label: '3-Month Plan', regularPrice: null, price: 89, currency: 'USD', note: 'per month, US$267 total' },
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
  },

  {
    slug: 'feminine-wisdom',
    category: CATEGORIES.OTHER,
    priority: 1,
    title: 'Feminine Wisdom for Holistic Wellbeing',
    tagline: 'Move with Your Rhythms',
    discountPercent: 60,
    discountLabel: '60% Yoga Day Discount',
    saleEndShort: 'July 2',
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
    saleEndShort: 'July 2',
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
    plans: [
      { slug: 'full', label: 'Pay in Full', regularPrice: 2999, price: 1199, currency: 'USD', note: 'One-time payment' },
      { slug: 'installment', label: '3-Month Plan', regularPrice: null, price: 399, currency: 'USD', note: 'per month, US$1,197 total' },
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
      'Secure your spot with a US$599 deposit; payment plan available',
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
