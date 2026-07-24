// Section 14 from the live Wix 80-Hour Meditation page: grey "2 STEPS TO GET
// STARTED" with large orange numerals and mint ENROLL NOW.
const MINT = '#75C8AE';
const ORANGE = '#ED5829';
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const ENROLL_URL =
  'https://www.akashayogaacademy.com/enroll-now-80-hr-online-meditation-teacher-training';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const STEPS = [
  {
    n: '1',
    title: 'Register to Secure Your Spot',
    body: 'Sign up for a life-changing journey, and dive deep into the Heart of Meditation.',
  },
  {
    n: '2',
    title: 'Begin the Journey That Will Transform Your Life',
    body: 'Experience how Meditation can benefit all areas of life, and share your passion with others.',
  },
];

export default function Steps80Meditation() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-1/2 -translate-y-1/2 w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading uppercase tracking-[0.12em] text-center"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 300, color: '#6E6E6D' }}
        >
          2 Steps to Get Started
        </h2>

        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 max-w-4xl mx-auto">
          {STEPS.map((s) => (
            <div key={s.n} className="text-center">
              <div
                className="font-heading leading-none mb-4"
                style={{ color: ORANGE, fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 300 }}
              >
                {s.n}
              </div>
              <h3
                className="font-body uppercase tracking-[0.12em] text-sm md:text-base mb-4 max-w-[300px] mx-auto leading-relaxed"
                style={{ color: TEXT }}
              >
                {s.title}
              </h3>
              <p
                className="font-body text-sm md:text-base leading-relaxed max-w-[300px] mx-auto"
                style={{ color: '#6E6E6D', fontWeight: 300 }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
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
    </section>
  );
}
