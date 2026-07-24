// Section 19 from the live Wix 80-Hour Advanced Hatha & Pranayama page:
// grey "THE CONTENT" zigzag blocks (landscape photos) + mint BOOK NOW.
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';
const MINT = '#75C8AE';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const ENROLL_HREF =
  'https://www.akashayogaacademy.com/80-hr-online-enroll-now-hatha-and-pranayama';

const BASE = 'https://static.wixstatic.com/media/';

const PHOTO_CLASS = 'aspect-[3/2] w-full max-w-lg';

const BLOCKS = [
  {
    title: 'Breath & Bandhas',
    photo:
      BASE +
      'cd7168_08b4252a1e1a44fbab5f36b9588534b3~mv2.jpg/v1/crop/x_0,y_23,w_1920,h_1235/fill/w_1020,h_656,al_c,q_85,enc_avif,quality_auto/breath-bandhas.jpg',
    photoClass: PHOTO_CLASS,
    align: 'right',
    body: (
      <p>
        Breath-work &amp; Bandha cultivate a deep relationship with yourself &amp;
        others, and they deepen your connection to your body &amp; the present
        moment. You&rsquo;ll learn to skillfully integrate your breath in Asana
        practice, prioritizing the breath and aligning it with movement. As your
        self-practice develops, you&rsquo;ll learn to teach this practice to others,
        inspiring students to enjoy these surprisingly transformative tricks.
      </p>
    ),
  },
  {
    title: 'Arm Balances',
    photo:
      BASE +
      'cd7168_c8a31e4e7abd480c87a6b09a907160cc~mv2.jpg/v1/crop/x_0,y_447,w_1280,h_815/fill/w_1030,h_656,al_c,q_85,enc_avif,quality_auto/arm-balances.jpg',
    photoClass: PHOTO_CLASS,
    align: 'left',
    body: (
      <p>
        Inversions inspire subtle internal lifting &amp; toning. You&rsquo;ll develop
        the critical foundation of arm balances, discover the benefits of thorough
        preparation, and understand the related anatomy. We&rsquo;ll warm up with
        core strength and wrist flexibility, practice basics like crow &amp; crane,
        stabilize headstand variations, and investigate possibilities for handstand
        training.
      </p>
    ),
  },
  {
    title: 'Pranayama',
    photo:
      BASE +
      'cd7168_79b8d36f0f5449ef89e39f588ac2fce5~mv2.jpg/v1/crop/x_0,y_29,w_1920,h_1223/fill/w_1030,h_656,al_c,q_85,enc_avif,quality_auto/pranayama.jpg',
    photoClass: PHOTO_CLASS,
    align: 'right',
    body: (
      <p>
        The transformative techniques of Pranayama are a crucial component of
        holistic &amp; integrated Yoga. You&rsquo;ll learn two ways to practice
        Pranayama: while moving in asana, and in a stable sitting pose. Advanced
        teachings will incorporate powerful Bandhas from the Kundalini Yoga
        tradition – taking your practice to the next level. You&rsquo;ll also learn
        the art of holding space during intense breath-work and heart-centered
        meditation.
      </p>
    ),
  },
  {
    title: 'Yoga History',
    photo:
      BASE +
      'cd7168_4da06fd6ceb8408785d6e330bb89b20f~mv2.jpg/v1/crop/x_0,y_29,w_1920,h_1223/fill/w_1030,h_656,al_c,q_85,enc_avif,quality_auto/yoga-history.jpg',
    photoClass: PHOTO_CLASS,
    align: 'left',
    body: (
      <p>
        We&rsquo;ll dive into the history of genuine Yoga, specifically exploring
        the Hatha Yoga Pradipika – one of the fundamental scriptures that
        systematically outlines the practices of Asana &amp; Pranayama. We&rsquo;ll
        investigate the lineages of modern Yoga, shedding some inspiring light on
        what&rsquo;s what and who&rsquo;s who.
      </p>
    ),
  },
];

function BlockRow({ title, photo, photoClass, align, body }) {
  const photoFirst = align === 'left';
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div
        className={`flex justify-center ${photoFirst ? 'md:order-1' : 'md:order-2'}`}
      >
        <img
          src={photo}
          alt=""
          loading="lazy"
          decoding="async"
          className={`w-full object-cover ${photoClass}`}
        />
      </div>
      <div className={`${photoFirst ? 'md:order-2' : 'md:order-1'} text-left`}>
        <h3
          className="font-heading"
          style={{
            fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)',
            fontWeight: 400,
            color: '#6E6E6D',
            lineHeight: 1.25,
          }}
        >
          {title}
        </h3>
        <div
          className="mt-4 md:mt-5 font-body space-y-4"
          style={{
            fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)',
            color: TEXT,
            fontWeight: 300,
            lineHeight: 1.65,
          }}
        >
          {body}
        </div>
      </div>
    </div>
  );
}

export default function TheContent80Hatha() {
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

      <div className="section relative z-10 py-14 md:py-20 space-y-14 md:space-y-20">
        <h2
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em] text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          The Content
        </h2>

        {BLOCKS.map((block) => (
          <BlockRow key={block.title} {...block} />
        ))}

        <div className="flex justify-center pt-2">
          <a
            href={ENROLL_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-akasha-white uppercase tracking-[0.12em] px-10 py-3.5 font-body hover:shadow-lg transition-all"
            style={{
              backgroundColor: MINT,
              borderRadius: 20,
              fontWeight: 700,
              fontSize: '0.95rem',
              boxShadow: '2px 2px 1px rgba(86, 149, 130, 0.88)',
            }}
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
