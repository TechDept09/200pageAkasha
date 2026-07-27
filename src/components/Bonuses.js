import Image from 'next/image';

// "14 Exclusive Bonuses" section from the live Wix 200-Hour page: full-width
// dark cards, each with a green "Bonus #N" tab, an orange value badge and the
// product mockup on the right, over the faint lotus watermark. Copy + assets
// are taken from the live source.
//
// NOTE: Bonus #1 (Design Your Schedule) is rendered client-side on Wix and its
// tablet-schedule mockup is not present in the static HTML, so we fall back to
// the AKASHA multi-device mockup for that single card.
const GREEN = '#5FBFA6';
const ORANGE = '#C1632B';
const CARD_BG = '#FFFFFF';
const BASE = 'https://static.wixstatic.com/media/';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const BONUSES = [
  {
    title: 'Design Your Schedule',
    value: 99,
    img: {
      src:
        BASE +
        'cd7168_5c292400fe7644a5845053e90a361547~mv2.png/v1/crop/x_0,y_226,w_6000,h_3080/fill/w_660,h_360,al_c,q_90,enc_avif,quality_auto/AKASHADEVICES.png',
      w: 660,
      h: 360,
    },
    body: [
      'Receive a tailor-made, personalized schedule. Get empowered to complete this course successfully.',
      'This helpful customization service allows you to fit our flexible course into your daily life.',
    ],
  },
  {
    title: 'How to Teach Yoga Online',
    value: 299,
    img: {
      src:
        BASE +
        'cd7168_3ea9c1c4db0445e58eccfe9d7dd388e9~mv2.jpg/v1/crop/x_287,y_0,w_2426,h_2000/fill/w_660,h_544,al_c,q_85,enc_avif,quality_auto/Asana-Mockup---Laptop-Phone.jpg',
      w: 660,
      h: 544,
    },
    body: [
      'In this course Akasha Yoga shares their first-hand experience of how to bring your Yoga classes online.',
      'Receive all the audio, lighting, and camera tricks and tips to make your offerings online a successful experience.',
    ],
  },
  {
    title: 'Journey Through the 7 Chakras',
    value: 199,
    img: {
      src:
        BASE +
        'cd7168_9c733443b1c4444490788f0f120b69df~mv2.png/v1/crop/x_0,y_156,w_837,h_646/fill/w_650,h_502,al_c,q_85,enc_avif,quality_auto/7-chakras-mockup.png',
      w: 650,
      h: 502,
    },
    body: [
      'In this introduction workshop, we present the system of the famous 7 Chakras.',
      'You will receive a clear understanding of the classical roots and modern interpretations.',
      'In this comprehensive overview, you will learn about energetic aspects, corresponding emotions, and psychological attributes.',
    ],
  },
  {
    title: 'Holistic Well-Being Workshop',
    value: 229,
    img: {
      src:
        BASE +
        'cd7168_8996a0fe8c2e4861b0cf35f3d1c0d7ba~mv2.png/v1/crop/x_93,y_0,w_1007,h_737/fill/w_686,h_502,al_c,q_85,enc_avif,quality_auto/5-BODIES-mockup.png',
      w: 686,
      h: 502,
    },
    body: [
      'In this eye-opening workshop, we introduce the yogic system of the 5 Bodies.',
      'You will benefit a lot from this ancient holistic description of the human being \u2013 formulated 2500 years ago, yet fully relevant in our modern times.',
      'You will walk away with a clear & practical understanding of the different layers & aspects of our being \u2013 ready to apply this wisdom into your daily life.',
    ],
  },
  {
    title: 'Asana Study Flashcards',
    value: 35,
    img: {
      src:
        BASE +
        'cd7168_fa63202dcded4a48ae5d0397a6947173~mv2.png/v1/crop/x_180,y_0,w_2709,h_2092/fill/w_650,h_502,al_c,q_85,enc_avif,quality_auto/Flash-Card-02.png',
      w: 650,
      h: 502,
    },
    body: [
      "These Asana study flashcards were made especially for you to memorize the teaching cues. The Asanas in this card deck are part of Akasha's 200-Hour Teacher Training.",
    ],
  },
  {
    title: 'Sanskrit Study Flashcards',
    value: 35,
    img: {
      src:
        BASE +
        'cd7168_3958225fbf88415e9a574eba29375ca1~mv2.png/v1/crop/x_180,y_0,w_2709,h_2092/fill/w_650,h_502,al_c,q_85,enc_avif,quality_auto/Flash-Card-03.png',
      w: 650,
      h: 502,
    },
    body: [
      "These Sanskrit study flashcards were made especially for you to memorize the Sanskrit names of the Asanas. The cards in this deck are part of Akasha's 200-Hour Teacher Training.",
    ],
  },
  {
    title: 'Poster Asana Poses',
    value: 69,
    img: {
      src:
        BASE +
        'cd7168_3886cca6aa5f4b78a8732c53f259ad31~mv2.jpg/v1/crop/x_814,y_0,w_5186,h_4000/fill/w_650,h_502,al_c,q_85,enc_avif,quality_auto/Poster-inYogaStudio-OriginalLandscape.jpg',
      w: 650,
      h: 502,
    },
    body: [
      "Poster with all the Asana's covered in our 200-Hr Yoga TTC in high image quality. Perfect to show case at home or your Yoga studio.",
    ],
  },
  {
    title: 'The Art & Science of Teaching',
    value: 108,
    img: {
      src:
        BASE +
        'cd7168_af1b00d6a4a44dcab55920317e8e959f~mv2.png/v1/crop/x_0,y_285,w_1275,h_1080/fill/w_550,h_466,al_c,q_85,enc_avif,quality_auto/Logos-12.png',
      w: 550,
      h: 466,
    },
    body: [
      'Unite ancient wisdom with modern methods. Elevate your teaching with a fusion of yogic artistry and evidence-based science. Perfect for aspiring and seasoned instructors.',
    ],
  },
  {
    title: 'Yoga in Daily Life',
    value: 86,
    img: {
      src:
        BASE +
        'cd7168_a7c59b162ff44a2d8aa795d84fcad576~mv2.png/v1/crop/x_0,y_0,w_2592,h_2345/fill/w_616,h_556,al_c,q_85,enc_avif,quality_auto/Yama-Niyama-Book-Mock-Up.png',
      w: 616,
      h: 556,
    },
    body: [
      "Discover 'Yoga in Daily Life': our bonus book delving into Yama & Niyama, yoga's ethical foundations. Learn to integrate these virtues into everyday life & practice.",
    ],
  },
  {
    title: 'Scripture Studies Book',
    value: 39,
    img: {
      src:
        BASE +
        'cd7168_55363f3e17b14e3798b0bb76d20cae30~mv2.png/v1/crop/x_66,y_0,w_669,h_566/fill/w_667,h_566,al_c,q_90,enc_avif,quality_auto/MockUp-scripture-book.png',
      w: 667,
      h: 566,
    },
    body: ['Explore timeless pearls of wisdom in our Scripture Studies Book.'],
  },
  {
    title: 'Yoga Liability Waiver',
    value: 29,
    img: {
      src:
        BASE +
        'cd7168_08eef431524a42c4a98408d6dd08bb25~mv2.png/v1/crop/x_12,y_0,w_576,h_444/fill/w_670,h_518,al_c,lg_1,q_85,enc_avif,quality_auto/Waiver.png',
      w: 670,
      h: 518,
    },
    body: [
      'This waiver template is an essential document for any Yoga teacher that informs the students of the risks involved in practice and can also protect you and your business from any legal issues.',
    ],
  },
  {
    title: 'Resume Yoga Teacher (CV)',
    value: 19,
    img: {
      src:
        BASE +
        'cd7168_846c1ebaabe74c48ad10798e4fb51dc0~mv2.png/v1/crop/x_140,y_64,w_796,h_656/fill/w_650,h_536,al_c,q_85,enc_avif,quality_auto/15M_060.png',
      w: 650,
      h: 536,
    },
    body: [
      'An important and helpful component in seeking yoga teaching opportunities is a professional resume. A resume helps to give potential employers a snapshot of your background and mission statement to help you get your foot in the door for an interview or audition.',
    ],
  },
  {
    title: 'Cover Letter Yoga Teacher',
    value: 19,
    img: {
      src:
        BASE +
        'cd7168_36168601328241e2b8834a819eed7890~mv2.png/v1/crop/x_146,y_120,w_770,h_574/fill/w_696,h_518,al_c,q_90,enc_avif,quality_auto/cover-letter.png',
      w: 696,
      h: 518,
    },
    body: [
      'A well-written cover letter will show potential yoga employers that you are organized and professional. It will also help them understand why you are a good fit for the position. Cover letters allow potential employers to understand who you are and encourage them to read your resume.',
    ],
  },
  {
    title: 'Intake Form New Clients',
    value: 35,
    img: {
      src:
        BASE +
        'cd7168_3065a79714e145dd88bb760d86a05413~mv2.png/v1/crop/x_0,y_50,w_1080,h_960/fill/w_650,h_578,al_c,q_90,enc_avif,quality_auto/Intake-form.png',
      w: 650,
      h: 578,
    },
    body: [
      'You can use this sample New Yoga Client Intake and Health History Form to learn about their health history background. It is recommended to have a complete health history so you can address key issues and make sure you focus on what matters to your students.',
    ],
  },
];

function BonusCard({ index, title, value, img, body }) {
  return (
    <div className="relative max-w-4xl mx-auto mt-16 first:mt-0">
      {/* Green Bonus tab */}
      <span
        className="absolute -top-4 left-4 md:-left-6 z-20 text-akasha-white font-body uppercase tracking-[0.12em] text-xs md:text-sm px-4 py-2"
        style={{ backgroundColor: GREEN }}
      >
        Bonus #{index}
      </span>

      {/* Orange value badge */}
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
            style={{ fontSize: 'clamp(1.4rem, 2.6vw, 1.9rem)', fontWeight: 300 }}
          >
            {title}
          </h3>
          <div className="mt-4 space-y-3 font-body text-akasha-gray-1 text-sm md:text-[15px] leading-relaxed">
            {body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src={img.src}
            alt={title}
            width={img.w}
            height={img.h}
            className="w-full max-w-sm h-auto rounded-sm"
          />
        </div>
      </div>
    </div>
  );
}

// theme 'light' (default): white section + faint lotus, dark heading — used on
// the main course page. theme 'enroll': transparent (the enroll page supplies
// its own warm-gray canvas + lotus) with light heading text.
export default function Bonuses({ theme = 'light' }) {
  const enroll = theme === 'enroll';
  const headingCls = enroll ? 'text-akasha-white/90' : 'text-akasha-gray-1';
  return (
    <section id="bonuses" className={`relative overflow-hidden ${enroll ? '' : 'bg-akasha-white'}`}>
      {!enroll && (
        <img
          src={LOTUS_WATERMARK}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none select-none absolute left-[-160px] top-0 w-[440px] md:w-[680px] opacity-[0.12]"
        />
      )}

      <div className="section relative z-10 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`font-heading leading-snug ${headingCls}`}
            style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
          >
            Until July 31st, all the bonuses are FREE and included in Essential &amp;
            Premium Version.
          </h2>
          <p
            className={`font-heading mt-3 ${headingCls}`}
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 300 }}
          >
            Total Value US$1130
          </p>
        </div>

        {BONUSES.map((b, i) => (
          <BonusCard key={b.title} index={i + 1} {...b} />
        ))}
      </div>
    </section>
  );
}
