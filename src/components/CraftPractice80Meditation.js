// Section 6 from the live Wix 80-Hour Meditation page: zigzag circular-photo
// blocks + orange GET STARTED NOW.
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';
const ORANGE = '#E5771E';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const ENROLL_HREF =
  'https://www.akashayogaacademy.com/enroll-now-80-hr-online-meditation-teacher-training';

const BASE = 'https://static.wixstatic.com/media/';

const BLOCKS = [
  {
    title: 'Craft a Holistic Meditation Practice',
    photo:
      BASE +
      'cd7168_121ac79ad6e34166997bad6fb980a6cb~mv2.jpg/v1/crop/x_1032,y_0,w_4128,h_4128/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/holistic.jpg',
    align: 'left',
    body: (
      <p>
        Every component of our course nurtures the seed of authentic meditation
        within you. We guide you in cultivating the perfect conditions for the
        meditative state to flourish. Deepen your understanding and skill in
        various meditative methods, from Spiritual Heart and Mantra Meditation to
        Breath Awareness, Pranayama, and foundational Hatha Yoga asanas.
      </p>
    ),
  },
  {
    title: 'Dive Into The Essence of Heart & Mantra Meditation',
    photo:
      BASE +
      'cd7168_d59d49b848024365a5966e80312770a9~mv2.jpg/v1/crop/x_1032,y_0,w_4128,h_4128/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/heart-mantra.jpg',
    align: 'right',
    body: (
      <p>
        Spiritual Heart Meditation harmoniously melds Heart Centering, Breath
        Awareness, and Self-Inquiry. Dive into the expansive non-dual wisdom of
        Advaita Vedanta. Experience the resonance of Mantra Meditation — a journey
        into the heart through vibrational frequencies, revealing the beauty of the
        present moment and our inherent divinity.
      </p>
    ),
  },
  {
    title: 'Gain a Panoramic Understanding',
    photo:
      BASE +
      'cd7168_8a7e5aa4581642aabb19e181bc2c53b3~mv2.png/v1/crop/x_2,y_0,w_969,h_969/fill/w_480,h_480,al_c,q_85,enc_avif,quality_auto/panoramic.jpg',
    align: 'left',
    body: (
      <p>
        To truly grasp meditation, one must delve into its origins and the wisdom
        behind it. We&rsquo;ll guide you through the key teachings of Eastern
        traditions, including Vipassana, Indian Tantrism, and Kashmiri Shivaism,
        and complement this with the perspectives of Western science and
        spirituality. This holistic approach ensures a deep, interconnected, and
        joyous learning experience.
      </p>
    ),
  },
  {
    title: 'Empower Yourself to Guide Others',
    photo:
      BASE +
      'cd7168_662157d048fd41e9b12abf0fe750adc4~mv2.jpg/v1/crop/x_998,y_0,w_3990,h_3990/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/empower.jpg',
    align: 'right',
    body: (
      <p>
        The confidence to guide and hold space for others emerges from experience
        and compassion. Throughout this course, you&rsquo;ll have the opportunity to
        explore various meditation styles and dive deep into fascinating topics
        about brainwaves, altered states of consciousness &amp; much more. These
        experiences will prepare you for guiding and holding space for others.
      </p>
    ),
  },
];

function BlockRow({ title, photo, align, body }) {
  const photoFirst = align === 'left';
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className={`flex justify-center ${photoFirst ? 'md:order-1' : 'md:order-2'}`}>
        <img
          src={photo}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover"
        />
      </div>
      <div
        className={`${photoFirst ? 'md:order-2' : 'md:order-1'} text-center md:text-left`}
      >
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

export default function CraftPractice80Meditation() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-[12%] w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20 space-y-14 md:space-y-20">
        {BLOCKS.map((block) => (
          <BlockRow key={block.title} {...block} />
        ))}

        <div className="flex justify-center pt-2">
          <a
            href={ENROLL_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-akasha-white uppercase tracking-[0.1em] px-10 py-3 font-body transition-all"
            style={{
              backgroundColor: ORANGE,
              borderRadius: 20,
              fontWeight: 700,
              fontSize: '1.05rem',
              boxShadow: '1px 2px 4px rgba(110, 110, 109, 0.6)',
            }}
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
}
