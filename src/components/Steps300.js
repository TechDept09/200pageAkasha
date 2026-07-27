// Section 28 from the live Wix 300-Hour page: grey "2 STEPS TO START YOUR
// ADVANCED JOURNEY" with large orange numerals and mint ENROLL NOW.
const MINT = '#7CC7B0';
const ORANGE = '#D07A3A';
const GREY_BG = '#FFFFFF';

const ENROLL_URL =
  'https://www.akashayogaacademy.com/300-hr-online-enroll-now';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const STEPS = [
  {
    n: '1',
    title: 'Enroll to Secure Your Spot',
    body: 'Sign up for this eye-opening journey, and dive deep into the Heart of authentic Yoga.',
  },
  {
    n: '2',
    title: 'Begin Your Life-Changing Journey Now',
    body: 'Experience how advanced Yoga transforms all areas of life and share your passion with others.',
  },
];

export default function Steps300() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-1/2 -translate-y-1/2 w-[420px] md:w-[560px] opacity-10"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.12em] text-center"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 300 }}
        >
          2 Steps to Start Your
          <br />
          Advanced Journey
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
              <h3 className="font-body uppercase tracking-[0.12em] text-akasha-gray-1 text-sm md:text-base mb-4 max-w-[280px] mx-auto leading-relaxed">
                {s.title}
              </h3>
              <p className="font-body text-akasha-gray-1 text-sm md:text-base leading-relaxed max-w-[300px] mx-auto">
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
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: MINT, fontWeight: 600 }}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}
