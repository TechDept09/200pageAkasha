// Section 18 from the live Wix 300-Hour page: 80-Hour student discount teaser,
// "Plus these incredible 10 bonuses!" dark cards, then summer-offer close with
// ENROLL NOW + ENROLLED STUDENT OFFER CTAs.
const MINT = '#7CC7B0';
const ORANGE = '#C1632B';
const CARD_BG = '#FFFFFF';

const ENROLL_URL =
  'https://www.akashayogaacademy.com/300-hr-online-enroll-now';
const STUDENT_OFFER_URL =
  'https://www.akashayogaacademy.com/300-hr-online-current-students-payment-plan';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/c15a18_5c73f145ca4842c9a23c2f2d8f6c2080~mv2.jpg/v1/fill/w_800,h_800,al_c,q_85,enc_avif,quality_auto/lotus.jpg';

const BASE = 'https://static.wixstatic.com/media/';

const BONUSES = [
  {
    title: 'Tao Te Ching - Scripture Study',
    value: 25,
    img:
      BASE +
      'cd7168_5e33d3f0398f4566b91730bbfb8aaebf~mv2.png/v1/crop/x_638,y_94,w_2399,h_2125/fill/w_480,h_425,al_c,q_85,enc_avif,quality_auto/tao.png',
    body: [
      'Embrace the profound wisdom of the famous Tao Te Ching by Lao Tzu.',
      'This Daoist source scripture will guide you to a place of deep serenity: Explore the delicate balance between Yin & Yang. Embrace the art of surrender.',
    ],
  },
  {
    title: 'Meditation Collection',
    value: 30,
    img:
      BASE +
      'cd7168_1f97997fe2e44912bb62b8a0f9d6111d~mv2.png/v1/crop/x_0,y_7,w_1080,h_925/fill/w_480,h_410,al_c,q_85,enc_avif,quality_auto/meditation.png',
    body: [
      'Benefit from a set of 14 Guided Audio Meditations:',
      'Our Spiritual Heart Meditations allows you to release stress & find peace within.',
      'Integrate the practices of the Meditation Teacher Training into your daily life.',
    ],
  },
  {
    title: '9-Hour Akasha Silent Retreat',
    value: 199,
    img:
      BASE +
      'cd7168_8f8c111363ad4ecf9e114b40954e50fa~mv2.png/v1/crop/x_20,y_233,w_996,h_685/fill/w_520,h_358,al_c,q_85,enc_avif,quality_auto/retreat.png',
    body: [
      'Unveil the Spiritual Heart and find Stillness Within through breath-based Hatha & Yin Yoga practice, deep going Pranayama and meditation. Dive deep into the essence of being and refresh your inspiration.',
    ],
  },
  {
    title: 'Integral Yoga',
    value: 39,
    img:
      BASE +
      'cd7168_eb19af2bdcc5400987d0f8dd7a9ea3c6~mv2.png/v1/crop/x_0,y_208,w_1080,h_774/fill/w_520,h_372,al_c,q_85,enc_avif,quality_auto/integral.png',
    body: [
      'This lecture series introduces you to the eye-opening wisdom of Integral Yoga.',
      'Discover the roots of this truly holistic perspective on life.',
      'Dive deep into this most inclusive vision on Existence.',
    ],
  },
  {
    title: 'Being Water',
    value: 35,
    img:
      BASE +
      'cd7168_364949407de142f7bdeeb3add74f7625~mv2.png/v1/crop/x_0,y_210,w_1080,h_794/fill/w_520,h_382,al_c,q_85,enc_avif,quality_auto/water.png',
    body: [
      'Dive into an engaging conversation with Kirsten and Devdas, as they explore the water element and its connection to femininity, motherhood, and cultural perspectives. This enlightening session offers deep insights into the water element and its embodiment of feminine energy.',
    ],
  },
  {
    title: 'Quotes from Masters',
    value: 30,
    img:
      BASE +
      'cd7168_f5125e059edc4b1eac2a0b037fff8e10~mv2.png/v1/crop/x_0,y_137,w_1080,h_677/fill/w_520,h_326,al_c,q_85,enc_avif,quality_auto/quotes.png',
    body: [
      'These Flash Cards carry profound pearls of wisdom:',
      'Get inspired by the pictures of these genuine Masters. The quotes of these great Yogis & Sages transmit a timeless Truth that will open your Heart.',
    ],
  },
  {
    title: 'Live Music for Yoga Classes',
    value: 35,
    img:
      BASE +
      'cd7168_38f73f86c365456b997f1191e96bad3c~mv2.png/v1/crop/x_0,y_165,w_1080,h_783/fill/w_520,h_377,al_c,q_85,enc_avif,quality_auto/music.png',
    body: [
      'This is a collection of awesome music tracks. The amazing sounds are produced exclusively in our own Baliwood Studios.',
      'The uplifting vibrations are here to take you & your students into altered states of consciousness.',
    ],
  },
  {
    title: 'Yin Yoga Music',
    value: 35,
    img:
      BASE +
      'cd7168_1ae9b2a9bb2143129f35eb467f3d67e0~mv2.jpeg/v1/fill/w_400,h_400,al_c,q_80,enc_avif,quality_auto/yin-music.jpeg',
    body: [
      'This is a collection of amazing heart-opening music. We exclusively produced these awesome sets with guest artists in our Baliwood Studios.',
      'The high-vibe sounds will take you & your students to deeper states within.',
    ],
  },
  {
    title: 'Yin Yoga Poster',
    value: 50,
    img:
      BASE +
      'cd7168_5509907ca68245c288a307cf3cf50f6b~mv2.jpg/v1/crop/x_0,y_139,w_6000,h_3721/fill/w_560,h_347,al_c,q_80,enc_avif,quality_auto/yin-poster.jpg',
    body: [
      'An appealing poster with all the Asanas you will learn in our 80-Hour Yin Yoga Teacher Training.',
      'Due to the high-resolution image quality you can print this poster in bill-board size. This allows you to showcase the full sequence at home or in your Yoga studio.',
    ],
  },
  {
    title: '2026 Yearly Planner',
    value: 25,
    img:
      BASE +
      'cd7168_b59b5b4fa19f49c787e4efdb5aa7b969~mv2.png/v1/crop/x_82,y_0,w_3427,h_2747/fill/w_480,h_385,al_c,q_85,enc_avif,quality_auto/planner.png',
    body: [
      'Set a vision for your life and intentions with this monthly planner.',
      'Calendar pages provide room for notes and schedule-keeping. Filled with inspiring images, quotes, and reflection pages to give yourself the space to go deeper and reflect on why you strive for those things on your list and what motivates you to keep going.',
    ],
  },
];

function BonusCard({ index, title, value, img, body }) {
  return (
    <div className="relative max-w-4xl mx-auto mt-14 md:mt-16 first:mt-10">
      <span
        className="absolute -top-4 left-4 md:-left-6 z-20 text-akasha-white font-body uppercase tracking-[0.12em] text-xs md:text-sm px-4 py-2"
        style={{ backgroundColor: MINT }}
      >
        Bonus #{index}
      </span>
      <span
        className="absolute -top-6 right-6 md:right-10 z-20 flex flex-col items-center justify-center rounded-full text-akasha-white text-center leading-tight w-16 h-16 md:w-20 md:h-20"
        style={{ backgroundColor: ORANGE }}
      >
        <span className="font-heading text-sm md:text-base" style={{ fontWeight: 400 }}>
          US${value}
        </span>
        <span className="font-body text-[9px] md:text-[10px] uppercase tracking-wide opacity-90">
          Value
        </span>
      </span>
      <div
        className="grid md:grid-cols-2 gap-6 md:gap-8 items-center rounded-sm border border-akasha-gray-4 shadow-sm px-6 md:px-12 py-10 md:py-12"
        style={{ backgroundColor: CARD_BG }}
      >
        <div>
          <h3
            className="font-heading text-akasha-gray-1"
            style={{ fontSize: 'clamp(1.35rem, 2.6vw, 1.85rem)', fontWeight: 300 }}
          >
            {title}
          </h3>
          <div className="mt-4 space-y-3 font-body text-akasha-gray-1 text-sm md:text-[15px] leading-relaxed">
            {body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={img}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full max-w-sm h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default function Bonuses300() {
  return (
    <section className="relative overflow-hidden bg-[#F5F4F1]">
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-180px] top-0 w-[420px] md:w-[560px] opacity-[0.35]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
            If you&rsquo;re already enrolled in our <strong className="font-semibold text-akasha-black">80-Hour TTC</strong>{' '}
            you get access to <strong className="font-semibold text-akasha-black">huge discounts</strong>. Click below to
            find your special offer:
          </p>
          <div className="mt-6">
            <a
              href={STUDENT_OFFER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.14em] px-8 py-3.5 font-body hover:shadow-lg transition-all"
              style={{ backgroundColor: MINT, fontWeight: 600, fontSize: '0.78rem' }}
            >
              Discounts for 80-Hour Students
            </a>
          </div>
        </div>

        <h2
          className="font-heading text-center text-akasha-gray-1 mt-14 md:mt-16"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          Plus these incredible 10 bonuses!
        </h2>

        <div className="mt-4 md:mt-6">
          {BONUSES.map((b, i) => (
            <BonusCard key={b.title} index={i + 1} {...b} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center max-w-2xl mx-auto">
          <p
            className="font-heading text-akasha-gray-1"
            style={{ fontSize: 'clamp(1.35rem, 3vw, 2rem)', fontWeight: 400 }}
          >
            33% Summer Wellness Discount
          </p>
          <p
            className="font-heading mt-3"
            style={{ color: ORANGE, fontSize: 'clamp(1.5rem, 3.4vw, 2.3rem)', fontWeight: 400 }}
          >
            Start today for only US$399
          </p>
          <p className="font-body mt-3 text-sm" style={{ color: ORANGE }}>
            * Offer until July 31.
          </p>
          <p className="font-body text-akasha-gray-1 mt-6 text-base md:text-lg leading-relaxed">
            All bonuses are currently FREE, and included in the 300-Hour Online Yoga
            Teacher Training
          </p>
          <div className="mt-8">
            <a
              href={ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
              style={{ backgroundColor: MINT, fontWeight: 600 }}
            >
              Enroll Now
            </a>
          </div>
          <p className="font-body text-akasha-gray-1 mt-10 text-base leading-relaxed">
            Students of our 80-Hour TTCs get a massive discount.
            <br />
            Access these special deals via the button below.
          </p>
          <div className="mt-6">
            <a
              href={STUDENT_OFFER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.14em] px-8 py-3.5 font-body hover:shadow-lg transition-all"
              style={{ backgroundColor: MINT, fontWeight: 600, fontSize: '0.78rem' }}
            >
              Enrolled Student Offer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
