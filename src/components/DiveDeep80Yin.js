// Section 9 from the live Wix 80-Hour Yin page: zigzag curriculum blocks
// with circular photos, italic/bold emphasis, and orange GET STARTED NOW.
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';
const ORANGE = '#E5771E';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const ENROLL_HREF = 'https://www.akashayogaacademy.com/80hr-yin-ytt-enroll-now';

const BASE = 'https://static.wixstatic.com/media/';

const B = ({ children }) => (
  <strong style={{ fontWeight: 700, color: TEXT }}>{children}</strong>
);

const I = ({ children }) => <em className="italic">{children}</em>;

const BLOCKS = [
  {
    title: 'Dive Deep into the Flow of Yin',
    photo:
      BASE +
      'cd7168_9ead9e3bd99746659a75d6b35363c0bf~mv2.jpg/v1/crop/x_0,y_320,w_1280,h_1280/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/dive-deep.jpg',
    align: 'left',
    body: (
      <>
        <p>
          <B>Balancing &amp; uniting the dualities of Yin &amp; Yang</B> is what
          Yoga is all about. Yet in reality, our lives tend to be imbalanced:
        </p>
        <p>
          We live in a world dominated by strong Yang energy, nature&rsquo;s
          active outward force. In this course, we&rsquo;ll dive deeply into the{' '}
          <I>opposite</I> energy: <B>the soft &amp; slow flow of Yin.</B>
        </p>
        <p>
          Our heart-opening program explores Yoga from the inside out.
          We&rsquo;ll look at the <B>profound spiritual principles</B> of Yin Yoga.
          And we&rsquo;ll understand how this <B>peaceful practice</B> differs from
          more engaging styles of Yoga.
        </p>
      </>
    ),
  },
  {
    title: 'Learn the Principles of Yin Yoga Practice',
    photo:
      BASE +
      'cd7168_2534207d534a4c02845ecde3e00bcaa5~mv2.jpg/v1/crop/x_80,y_912,w_1468,h_1469/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/principles.jpg',
    align: 'right',
    body: (
      <>
        <p>
          You&rsquo;ll learn to practice &amp; teach Yin Yoga from a space of deep{' '}
          <B>interoception &amp; inner alignment.</B>
        </p>
        <p>
          To support your own internal perception, we&rsquo;ll also study the{' '}
          <I>physical</I> mechanics of a <I>safe</I> Yin practice:
        </p>
        <ul className="space-y-3 text-left list-none pl-0">
          <li className="flex gap-3">
            <span className="mt-2 w-2 h-2 shrink-0 bg-white/55" aria-hidden="true" />
            <span>
              In our exploration of <B>functional anatomy</B>, we&rsquo;ll discover
              relevant joints &amp; target areas.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 w-2 h-2 shrink-0 bg-white/55" aria-hidden="true" />
            <span>
              To cater to the full spectrum of abilities, our individualized style
              incorporates a variety of <B>modifications</B> for each pose.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 w-2 h-2 shrink-0 bg-white/55" aria-hidden="true" />
            <span>
              And perhaps most importantly, we&rsquo;ll explore how to use the{' '}
              <B>breath</B> to enhance the quality &amp; safety of our practice.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Applied Self Inquiry',
    photo:
      BASE +
      'cd7168_9d2ae9efad1b4cbdad41ebaaef64f456~mv2.jpg/v1/crop/x_630,y_49,w_1559,h_1561/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/self-inquiry.jpg',
    align: 'left',
    body: (
      <>
        <p>
          <B>Self-Inquiry</B> and the ability to{' '}
          <B>hold space for ourselves &amp; others</B> are two fundamental teachings
          of our Yin Yoga Program.
        </p>
        <p>
          This online training generously explores a variety of awareness
          practices. And we&rsquo;ll show you how to apply them in your Yoga
          practice, and in daily life.
        </p>
        <p>
          We&rsquo;ll have the opportunity to dive into the{' '}
          <B>deep roots of awareness:</B> In our practical approach to Self Inquiry,
          we&rsquo;ll explore how Yin Yoga serves as a powerful container for this
          eye-opening spiritual practice.
        </p>
      </>
    ),
  },
  {
    title: 'Functional Anatomy & Energetic Meridians',
    photo:
      BASE +
      'cd7168_35617b335581424ba46b8361d985d750~mv2.jpg/v1/crop/x_301,y_794,w_672,h_671/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/anatomy.jpg',
    align: 'right',
    body: (
      <>
        <p>
          The anatomy teachings of this course draw from an applied, functional
          approach. Our{' '}
          <B>
            <I>individualized</I> perspective
          </B>{' '}
          respects the highly unique makeup of each body, and it shows how that
          translates into <B>customized postures.</B>
        </p>
        <p>
          <B>Traditional Chinese Medicine (TCM)</B> is the energetic foundation of
          Yin Yoga. Energy channels, known as meridians, exist in left &amp; right
          pairs. They allow for the distributing <B>flow of Qi</B> throughout the
          entire body. Guided by our Yin Yoga practice, we&rsquo;ll explore the
          deeper structures of the body. We&rsquo;ll directly experience how the{' '}
          <I>physical</I> anatomy connects to the <I>energetic</I> body and the{' '}
          <B>Five Elements.</B>
        </p>
      </>
    ),
  },
  {
    title: 'Build a Personal & Professional Yin Yoga Practice',
    photo:
      BASE +
      'cd7168_292a4b76d8274db68a31d7ad3271f7fc~mv2.jpg/v1/crop/x_417,y_0,w_1667,h_1667/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/build-practice.jpg',
    align: 'left',
    body: (
      <>
        <p>
          Once you&rsquo;ve experienced the magnificence of a grounded &amp;{' '}
          <B>mindful connection to your body</B>, you&rsquo;ll be ready to share your
          personal insights with others in a professional Yoga context.
        </p>
        <p>
          Akasha&rsquo;s course <B>fully prepares you to teach</B> Yin Yoga in a
          holistic way, giving it a <I>physical</I>, <I>energetic</I>, or{' '}
          <I>spiritual</I> orientation. You&rsquo;ll learn how to{' '}
          <B>authentically hold space</B>, and guide others in their Yogic journey.
        </p>
      </>
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

export default function DiveDeep80Yin() {
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
