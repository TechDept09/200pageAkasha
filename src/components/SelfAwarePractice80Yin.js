// Section 24 from the live Wix 80-Hour Yin page: course title + "Journey into
// an intentional, self-aware practice" copy, AKASHA devices mockup, mint
// ENROLL NOW CTA.
const MINT = '#75C8AE';
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const ENROLL_URL = 'https://www.akashayogaacademy.com/80hr-yin-ytt-enroll-now';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const DEVICES =
  'https://static.wixstatic.com/media/cd7168_99881a587ddf4b778f9a767f7d5d61f5~mv2.png/v1/fill/w_960,h_538,al_c,q_90,enc_avif,quality_auto/AKASHA-DEVICES-MOCKUP.png';

const B = ({ children }) => (
  <strong style={{ fontWeight: 700, color: TEXT }}>{children}</strong>
);

const pStyle = {
  fontSize: 'clamp(0.95rem, 1.7vw, 1.25rem)',
  color: TEXT,
  fontWeight: 300,
  lineHeight: 1.65,
};

export default function SelfAwarePractice80Yin() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-[10%] w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-heading"
            style={{
              fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)',
              fontWeight: 300,
              color: '#6E6E6D',
            }}
          >
            80-Hour Yin Yoga Teacher Training
          </h2>
          <p
            className="font-heading uppercase tracking-[0.1em] mt-4"
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
              fontWeight: 400,
              color: '#6E6E6D',
            }}
          >
            Journey into an Intentional, Self-Aware Practice
          </p>

          <div className="mt-8 md:mt-10 space-y-5 font-body" style={pStyle}>
            <p>
              You&rsquo;ll leave this course <B>confident &amp; inspired</B> to teach a
              unique Yin Yoga class. We&rsquo;ll empower you to guide students through
              the profound practice of Self Inquiry, both on and off the mat.
            </p>
            <p>
              <B>Self Inquiry</B> is the basis of our Yin Yoga Program, and what makes
              it distinct from the offerings of other Yoga schools. Like opening a
              secret door to Self, the practice of Self Inquiry invites us to{' '}
              <B>explore our inner landscape.</B> Simultaneously we expand our capacity
              to rest back as awareness.
            </p>
            <p>
              You&rsquo;ll experience the <B>power of holding space</B> for another
              person through a connected &amp; mindful Yin Yoga practice. Together,
              we&rsquo;ll dive into <B>functional anatomy,</B> the myofascial lines &amp;
              nervous system. We&rsquo;ll explore the underlying energetic foundation of
              Yin Yoga through the world of meridians.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <img
            src={DEVICES}
            alt="Akasha Yin Yoga course on tablet, phone, desktop and laptop"
            loading="lazy"
            decoding="async"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-10 md:mt-12 flex justify-center">
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
    </section>
  );
}
