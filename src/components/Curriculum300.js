// Section 24 from the live Wix 300-Hour page: grey "THE CURRICULUM" with
// zigzag Part 1/2/3 rows (circular photos), detailed copy, and orange
// ADVANCE YOUR YOGA JOURNEY NOW CTA.
const ORANGE = '#D07A3A';
const GREY_BG = '#FFFFFF';

const ENROLL_URL =
  'https://www.akashayogaacademy.com/300-hr-online-enroll-now';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const BASE = 'https://static.wixstatic.com/media/';

const B = ({ children }) => (
  <strong className="font-semibold text-akasha-black">{children}</strong>
);

const PARTS = [
  {
    part: 'Part 1',
    title: 'Advanced Hatha Yoga & Pranayama',
    photo:
      BASE +
      'cd7168_241e6b08019d4c1baf6d8a1e3313dfc1~mv2.jpg/v1/crop/x_0,y_0,w_1667,h_1667/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/part1.jpg',
    align: 'right',
    body: (
      <>
        <p>
          Explore the origins of classical Yoga in ancient scriptures. Discover
          the roots of modern Yoga, as taught by the master of masters:
          Krishnamacharya.
        </p>
        <p>
          Connect to the <B>origins of breath-based Vinyasa</B>. Learn to use
          advanced Bandhas, master basic poses, and explore possibilities for
          arm balances.
        </p>
        <p>
          Experience the <B>profound benefits of Pranayama</B>. Refine your
          awareness of subtle energies &amp; prana. Develop the confidence to
          teach <B>Yogic breathwork</B> from your own experience.
        </p>
      </>
    ),
  },
  {
    part: 'Part 2',
    title: 'Yin Yoga & Self Inquiry',
    photo:
      BASE +
      'cd7168_02d16cddcd344489a2cb005f8f47f2bf~mv2.jpg/v1/crop/x_0,y_0,w_1667,h_1667/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/part2.jpg',
    align: 'left',
    body: (
      <>
        <p>
          Dive deep into archetypal <B>Yin Yoga poses</B>. Experience the
          relaxing benefits of this restorative practice. And cultivate the art
          of peaceful living.
        </p>
        <p>
          Discover the world of meridians, and explore their connection to the
          connective tissue of <B>fascia</B>.
        </p>
        <p>
          Ask the question &lsquo;Who am I?&rsquo; to contemplate the{' '}
          <B>meaning of life</B> and other existential questions.
        </p>
        <p>
          Gain relevant <B>knowledge &amp; skills</B> to share your own inspiring
          Yin Yoga practice.
        </p>
      </>
    ),
  },
  {
    part: 'Part 3',
    title: 'Spiritual Heart Meditation',
    photo:
      BASE +
      'cd7168_4fdcf87d4d8f4789b0aa20751155c006~mv2.jpg/v1/crop/x_0,y_0,w_1034,h_1034/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/part3.jpg',
    align: 'right',
    body: (
      <>
        <p>
          This Meditation Teacher Training is devoted to genuine contemplation.
          Practical teachings explore three main contemplative directions:
          Spiritual Heart Meditation, Self-Inquiry &amp; Mantra Meditation.
        </p>
        <p>
          Akasha&rsquo;s breath-based &amp; heart-centered approach is grounded
          in the <B>non-dual wisdom of Advaita Vedanta</B>. We&rsquo;ll explore
          relevant basics &amp; background insight on different lineages &amp;
          styles of meditation.
        </p>
      </>
    ),
  },
];

function PartRow({ part, title, photo, align, body }) {
  const photoFirst = align === 'left';
  return (
    <div
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
        photoFirst ? '' : ''
      }`}
    >
      <div className={`flex justify-center ${photoFirst ? 'md:order-1' : 'md:order-2'}`}>
        <img
          src={photo}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover"
        />
      </div>
      <div className={`${photoFirst ? 'md:order-2' : 'md:order-1'} text-center md:text-left`}>
        <p className="font-body text-akasha-gray-1 text-sm uppercase tracking-[0.12em]">
          {part}
        </p>
        <h3
          className="font-heading text-akasha-gray-1 mt-1"
          style={{ fontSize: 'clamp(1.35rem, 2.8vw, 1.85rem)', fontWeight: 400 }}
        >
          {title}
        </h3>
        <div className="mt-4 space-y-3 font-body text-akasha-gray-1 text-sm md:text-base leading-relaxed">
          {body}
        </div>
      </div>
    </div>
  );
}

export default function Curriculum300() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-0 w-[420px] md:w-[560px] opacity-10"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em] text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          The Curriculum
        </h2>

        <div className="mt-12 md:mt-16 space-y-14 md:space-y-20 max-w-5xl mx-auto">
          {PARTS.map((p) => (
            <PartRow key={p.part} {...p} />
          ))}
        </div>

        <div className="mt-14 md:mt-16 flex justify-center">
          <a
            href={ENROLL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.12em] px-8 md:px-10 py-4 font-body hover:shadow-lg transition-all text-center text-sm md:text-base"
            style={{ backgroundColor: ORANGE, fontWeight: 600 }}
          >
            Advance Your Yoga Journey Now
          </a>
        </div>
      </div>
    </section>
  );
}
