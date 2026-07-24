// Section 18 from the live Wix 80-Hour Meditation page: course title +
// "TRANSFORM IN 80 HOURS" copy, AKASHA devices mockup, journey CTA + ENROLL.
const MINT = '#75C8AE';
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const ENROLL_URL =
  'https://www.akashayogaacademy.com/enroll-now-80-hr-online-meditation-teacher-training';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const DEVICES =
  'https://static.wixstatic.com/media/cd7168_99881a587ddf4b778f9a767f7d5d61f5~mv2.png/v1/fill/w_960,h_538,al_c,q_90,enc_avif,quality_auto/AKASHA-DEVICES-MOCKUP.png';

const pStyle = {
  fontSize: 'clamp(0.95rem, 1.7vw, 1.25rem)',
  color: TEXT,
  fontWeight: 300,
  lineHeight: 1.65,
};

export default function Transform80Meditation() {
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
              fontSize: 'clamp(1.35rem, 3vw, 2rem)',
              fontWeight: 300,
              color: '#6E6E6D',
              lineHeight: 1.3,
            }}
          >
            80-Hour Meditation Teacher Training: Spiritual Heart &amp; Mantra
            Meditation
          </h2>
          <p
            className="font-heading uppercase tracking-[0.1em] mt-5"
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
              fontWeight: 400,
              color: '#6E6E6D',
            }}
          >
            Transform in 80 Hours: Deepen Your Yoga Practice
          </p>

          <div className="mt-8 md:mt-10 space-y-5 font-body" style={pStyle}>
            <p>
              You&rsquo;ll grow the confidence and compassion vital to leading a
              heart-opening meditation class &amp; holding space for those around you,
              both in formal Yoga classes and in your personal relationships.
            </p>
            <p>
              Through Akasha&rsquo;s fully immersive program, you&rsquo;ll explore the
              depth of Yoga with a passion and devotion not fully realized until now.
              Enjoy the infinite and boundless capacities that spring up within you.
            </p>
            <p>
              Together, we&rsquo;ll dive into various meditation styles, traditions,
              techniques, mantras, hand mudras, and common sitting postures for all body
              types. We&rsquo;ll also enter the world of brainwaves and altered states of
              consciousness.
            </p>
            <p>
              Your transformation throughout this program will naturally enable you to
              live with a higher purpose and hold space for the people around you.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <img
            src={DEVICES}
            alt="Akasha Meditation course on tablet, phone, desktop and laptop"
            loading="lazy"
            decoding="async"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-12 md:mt-14 max-w-3xl mx-auto text-center">
          <h3
            className="font-heading uppercase tracking-[0.08em]"
            style={{ fontSize: 'clamp(1.35rem, 3vw, 2rem)', fontWeight: 300, color: '#6E6E6D' }}
          >
            Start Your Meditation Journey Now
          </h3>
          <p className="mt-4 font-body" style={pStyle}>
            Experience the breath-taking quality &amp; benefits of our premium 80-Hour
            Meditation Online Teacher Training
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={ENROLL_URL}
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
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
