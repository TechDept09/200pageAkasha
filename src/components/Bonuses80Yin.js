// Section 20 from the live Wix 80-Hour Yin page: "incredible 5 bonuses"
// dark cards with mint BONUS tags, orange value badges, and summer-offer close.
const MINT = '#75C8AE';
const ORANGE = '#E5771E';
const GREY_BG = '#FFFFFF';
const CARD_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const ENROLL_URL = 'https://www.akashayogaacademy.com/80hr-yin-ytt-enroll-now';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const BASE = 'https://static.wixstatic.com/media/';

const BONUSES = [
  {
    title: 'Yin Yang Pranayama Masterclass',
    value: 99,
    img:
      BASE +
      'cd7168_c5a54f95b6dd42f2a5cd1587d18b7ea3~mv2.png/v1/crop/x_90,y_118,w_910,h_733/fill/w_560,h_450,al_c,q_85,enc_avif,quality_auto/pranayama.png',
    body: [
      'In this Pranayama Masterclass, we explore pranayama as a doorway into the peace of meditation.',
      'This class helps you to deepen your self-practice, while exploring breath-work as a potent tool to deepen experience deep stillness within.',
    ],
  },
  {
    title: 'Breath-Based Alignment Workshop',
    value: 55,
    img:
      BASE +
      'cd7168_71073f4921ad4360b7449a8d22999947~mv2.png/v1/crop/x_0,y_88,w_1000,h_620/fill/w_560,h_348,al_c,q_85,enc_avif,quality_auto/alignment.png',
    body: [
      "This eye-opening presentation provides a provocative perspective: It doesn't really matter how our posture looks from outside. Instead of fitting our body into a standardized outer shape, we allow our breath to guide us from within.",
    ],
    // italic words handled in render via markers
    italics: ['outer', 'within'],
  },
  {
    title: 'Yin Yoga Sequences',
    value: 25,
    img:
      BASE +
      'cd7168_5e186b2c3895436c83913e43ed8c0a35~mv2.png/v1/crop/x_0,y_43,w_1000,h_620/fill/w_560,h_348,al_c,q_85,enc_avif,quality_auto/sequences.png',
    body: [
      'This is a complete collection of ready-made Yin Yoga classes. The useful summaries will make it easy for you to teach smooth 60-minute sessions.',
      'You will receive a beautiful visual map of all poses, descriptions and benefits, empowering you to instruct skillfully.',
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
];

function withItalics(text, words = []) {
  if (!words.length) return text;
  let nodes = [text];
  words.forEach((word) => {
    const next = [];
    nodes.forEach((node) => {
      if (typeof node !== 'string') {
        next.push(node);
        return;
      }
      const parts = node.split(word);
      parts.forEach((part, i) => {
        next.push(part);
        if (i < parts.length - 1) {
          next.push(
            <em key={`${word}-${i}`} className="italic">
              {word}
            </em>
          );
        }
      });
    });
    nodes = next;
  });
  return nodes;
}

function BonusCard({ index, title, value, img, body, italics }) {
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
              <p key={p.slice(0, 28)}>{withItalics(p, italics)}</p>
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

export default function Bonuses80Yin() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-[8%] w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300, color: '#6E6E6D' }}
        >
          And receive these incredible 5 bonuses!
        </h2>

        <div className="mt-4 md:mt-6">
          {BONUSES.map((b, i) => (
            <BonusCard key={b.title} index={i + 1} {...b} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center max-w-2xl mx-auto">
          <p
            className="font-heading"
            style={{ fontSize: 'clamp(1.15rem, 2.4vw, 1.5rem)', fontWeight: 300, color: '#6E6E6D' }}
          >
            For a limited time, all 5 bonuses are FREE and included in the 80-Hour
            Yin Online TTC
          </p>
          <p
            className="font-heading mt-4"
            style={{ fontSize: 'clamp(1.35rem, 3vw, 2rem)', fontWeight: 400, color: '#6E6E6D' }}
          >
            Total Value of US$ 864
          </p>
          <p
            className="font-heading mt-3"
            style={{ fontSize: 'clamp(1.35rem, 3vw, 2rem)', fontWeight: 400, color: '#6E6E6D' }}
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
          <div className="mt-8">
            <a
              href={ENROLL_URL}
              className="inline-flex items-center justify-center text-akasha-white uppercase tracking-[0.12em] px-10 py-3.5 font-body hover:shadow-lg transition-all"
              style={{
                backgroundColor: MINT,
                borderRadius: 20,
                fontWeight: 700,
                fontSize: '0.95rem',
                boxShadow: '2px 2px 1px rgba(86, 149, 130, 0.88)',
              }}
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
