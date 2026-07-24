// Section 1 after the hero on the live Wix 80-Hour Yin page: three script
// promises across the top, "Are you ready..." questions with bold verbs,
// YACEP + RYS 300 seals on the right, orange lotus watermark on grey.
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';
const SCRIPT = '#ED5829';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const YACEP =
  'https://static.wixstatic.com/media/cd7168_bfe8b6337c45401bac9708fcaf7c99ad~mv2.png/v1/fill/w_306,h_306,al_c,q_85,enc_avif,quality_auto/YACEP-Yoga-Alliance-Continuing-Education-Provider.png';

const RYS300 =
  'https://static.wixstatic.com/media/cd7168_b0002e34d2324f19aa47e198f769d01c~mv2.png/v1/fill/w_344,h_344,al_c,q_85,enc_avif,quality_auto/RYS-300-Registered-Yoga-School-Yoga-Alli.png';

const PROMISES = [
  'Expand Your Awareness',
  'Embody Your Knowledge',
  'Unite Your Body, Mind & Soul',
];

const QUESTIONS = [
  { bold: 'break through', rest: ' to a contemplative & authentic Yoga practice?' },
  { bold: 'expand', rest: ' the space in your physical body?' },
  { bold: 'rediscover', rest: ', from inside out, the essence of your being?' },
  { bold: 'deepen', rest: ' & integrate your knowledge with the tools of Yin Yoga?' },
  { bold: 'reunite', rest: ' with your wonderful body?' },
  { bold: 'cultivate', rest: ' a confidence that is compassionate?' },
  { bold: 'step into full presence', rest: ' with all that you are?' },
];

export default function AreYouReady80Yin() {
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

      <div className="section relative z-10 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 text-center max-w-5xl mx-auto">
          {PROMISES.map((line) => (
            <p
              key={line}
              className="script flex-1"
              style={{ fontSize: 'clamp(1.35rem, 2.4vw, 1.875rem)', color: SCRIPT }}
            >
              {line}
            </p>
          ))}
        </div>

        <div className="mt-10 md:mt-12 grid md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-start max-w-5xl mx-auto">
          <div>
            <h2
              className="font-heading"
              style={{
                fontSize: 'clamp(1.35rem, 2.6vw, 1.7rem)',
                fontWeight: 400,
                color: '#6E6E6D',
              }}
            >
              Are you ready&hellip;
            </h2>

            <ul className="mt-5 md:mt-6 space-y-3 md:space-y-3.5">
              {QUESTIONS.map((q) => (
                <li
                  key={q.bold}
                  className="font-body leading-snug"
                  style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.25rem)', color: TEXT, fontWeight: 300 }}
                >
                  To <strong style={{ fontWeight: 700 }}>{q.bold}</strong>
                  {q.rest}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-row md:flex-col items-center justify-center gap-6 md:gap-8 md:pt-2">
            <img
              src={YACEP}
              alt="Yoga Alliance Continuing Education Provider (YACEP)"
              loading="lazy"
              decoding="async"
              className="w-[120px] md:w-[153px] h-auto"
            />
            <img
              src={RYS300}
              alt="Yoga Alliance Registered Yoga School RYS 300"
              loading="lazy"
              decoding="async"
              className="w-[136px] md:w-[172px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
