// Section 30 from the live Wix 80-Hour Yin page: grey "THE CONTENT" zigzag
// blocks (rectangular photos), italic/bold emphasis, mint BOOK NOW.
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';
const MINT = '#75C8AE';

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
    title: 'Principles of Yin Yoga Practice',
    photo:
      BASE +
      'cd7168_e826728a78f542fc80230a9e78e96a48~mv2.jpg/v1/crop/x_150,y_215,w_979,h_1283/fill/w_480,h_630,al_c,q_85,enc_avif,quality_auto/principles-content.jpg',
    photoClass: 'aspect-[3/4] max-w-[280px] md:max-w-[320px]',
    align: 'right',
    body: (
      <>
        <p>
          Yin Yoga is a <I>slow</I> practice that works with a small variety of{' '}
          <B>long-held floor poses.</B> The <I>gentle</I> approach brings{' '}
          <B>health &amp; mobility</B> to the deeper structures of the body:
          connective tissue, fascia, joints &amp; bones.
        </p>
        <p>
          These areas don&rsquo;t get addressed properly in a regular fast Yoga
          practice. Yin Yoga has the potential to{' '}
          <B>free up a whole new range of motion</B> in your body.
        </p>
        <p>
          This truly comprehensive course presents <B>all essential Yin poses.</B>{' '}
          You&rsquo;ll gain an in-depth understanding of relevant principles,
          modifications, and target areas of all postures. You&rsquo;ll discover
          the underlying anatomy and <B>experience the benefits of each pose</B>{' '}
          in your own body.
        </p>
      </>
    ),
  },
  {
    title: 'Myofascial Lines & Meridians',
    photo:
      BASE +
      'cd7168_9d2ae9efad1b4cbdad41ebaaef64f456~mv2.jpg/v1/crop/x_466,y_0,w_1568,h_1667/fill/w_480,h_510,al_c,q_85,enc_avif,quality_auto/myofascial.jpg',
    photoClass: 'aspect-square max-w-[280px] md:max-w-[320px]',
    align: 'left',
    body: (
      <>
        <p>
          We&rsquo;ll present a <I>functional</I> approach to Yin Yoga anatomy. And
          we&rsquo;ll introduce you to the wisdom of{' '}
          <B>Traditional Chinese Medicine (TCM).</B> Through a practical
          investigation, we&rsquo;ll trace these connective lines in all essential
          postures.
        </p>
        <p>
          The <B>meridians of TCM</B> are the energetic foundation of Yin Yoga.
          We&rsquo;ll introduce the intricate connections between those{' '}
          <I>energetic</I> meridians and the <I>physical</I> myofascial lines.
        </p>
        <p>
          Together, we&rsquo;ll discover how these deep relations between energetic
          &amp; physical planes profoundly influence our practice.
        </p>
      </>
    ),
  },
  {
    title: 'Awareness Practices & Holding Space',
    photo:
      BASE +
      'cd7168_827b268128bc4f68845831612afe9d52~mv2.jpeg/v1/crop/x_742,y_129,w_1095,h_1538/fill/w_480,h_674,al_c,q_85,enc_avif,quality_auto/awareness.jpg',
    photoClass: 'aspect-[3/4] max-w-[280px] md:max-w-[320px]',
    align: 'right',
    body: (
      <>
        <p>
          Self Inquiry is a practical way to hold hands with your own Stillness
          and to <B>deeply nourish the Soul.</B> Through inspirational talks,
          guided meditations &amp; practical explanations, we will explore
          experientially what is <B>beyond body &amp; mind.</B>
        </p>
        <p>
          We&rsquo;ll discover the <B>roots of awareness:</B> What is
          consciousness? And what is its relation to the feeling &amp; thinking
          mind? The invitation is to investigate into the{' '}
          <I>existential nature</I> of Awareness – to <B>reveal that</B>{' '}
          <I>Universal Presence</I>, beyond our individual form. Being in full
          presence with – and as – Consciousness. That stable, spacious &amp; vast
          Awareness.
        </p>
        <p>
          The unique Akasha approach to Yin Yoga merges posture practice &amp;
          Self Inquiry. It uses the potential of a slow posture practice to{' '}
          <B>investigate into the Nature of Self.</B>
        </p>
      </>
    ),
  },
  {
    title: 'Learn to Practice & Teach Your Way',
    photo:
      BASE +
      'cd7168_4da06fd6ceb8408785d6e330bb89b20f~mv2.jpg/v1/crop/x_0,y_0,w_1439,h_1280/fill/w_480,h_427,al_c,q_85,enc_avif,quality_auto/teach-your-way.jpg',
    photoClass: 'aspect-[5/4] max-w-[300px] md:max-w-[340px]',
    align: 'left',
    body: (
      <>
        <p>
          Each of us walks the path of life with{' '}
          <B>
            <I>our own unique</I>
          </B>{' '}
          rhythm. We whole-heartedly accept you &amp; your students – wherever you
          are on the journey.
        </p>
        <p>
          This course will allow you to <B>teach an</B> <I>individualized</I> form
          of Yin Yoga. You&rsquo;ll learn how to adapt the emphasis – depending on
          your own flow and who you are teaching.
        </p>
        <p>
          Together, we&rsquo;ll explore{' '}
          <B>physical, energetic &amp; spiritual planes:</B>
        </p>
        <p>
          We start at the <I>physical</I> level, providing you with all the{' '}
          <B>knowledge, skills &amp; tools</B> you need. You &amp; your students
          will learn to feel Yin Yoga from the inside.
        </p>
        <p>
          We&rsquo;ll also research the <I>energetic</I> side of Yin: We&rsquo;ll{' '}
          <B>investigate the meridians</B>, and we&rsquo;ll work on specific
          meridian pairs in exemplifying sample classes.
        </p>
        <p>
          Moving into the <I>spiritual</I> realms, we&rsquo;ll use{' '}
          <B>Self Inquiry</B> to enhance our practice. This ancient yet potent
          technique can quickly take us deeper: We&rsquo;ll clear the mind, and
          move beyond our psychology, into the{' '}
          <B>
            <I>direct experience</I>
          </B>{' '}
          of the higher Self. This existential form of inquiry intertwines
          beautifully with the profound <B>Stillness of Yin Yoga.</B>
        </p>
        <p>
          Our expert team will guide your journey at each of those levels.
          We&rsquo;ll show you how to unlock your <I>true</I> potential as a
          genuine teacher. And we&rsquo;ll empower you to guide your students
          through this profound &amp; life-changing practice in a responsible way.
        </p>
      </>
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
      <div
        className={`${photoFirst ? 'md:order-2' : 'md:order-1'} text-left`}
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

export default function TheContent80Yin() {
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
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: MINT, fontWeight: 600 }}
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
