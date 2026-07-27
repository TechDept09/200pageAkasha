// Section 15 from the live Wix 80-Hour Advanced Hatha & Pranayama page:
// grey "WHAT YOU'LL EXPERIENCE" checklist with orange checkmarks, lotus
// watermark, and mint ENROLL NOW.
const MINT = '#75C8AE';
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const CHECK =
  'https://static.wixstatic.com/media/cd7168_89da62ac6f254f7185941dba1c508306~mv2.png/v1/fill/w_46,h_54,al_c,q_85,enc_avif,quality_auto/CHECK-MARK234.png';

const ENROLL_URL =
  'https://www.akashayogaacademy.com/80-hr-online-enroll-now-hatha-and-pranayama';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const ITEMS = [
  'Learn how to properly integrate the breath into the asana style you love',
  'Participate in arm balancing workshops with famous guest teacher Marc Laws',
  'Develop an advanced Pranayama practice and learn to teach it',
  'Explore the roots of Yoga by reading genuine source scriptures',
];

export default function WhatYoullExperience80Hatha() {
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
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em] text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          What You&rsquo;ll Experience
        </h2>

        <ul className="mt-10 md:mt-12 max-w-2xl mx-auto space-y-4 md:space-y-5">
          {ITEMS.map((line) => (
            <li key={line} className="flex items-start gap-4">
              <img
                src={CHECK}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="w-5 h-6 md:w-6 md:h-7 shrink-0 mt-0.5"
              />
              <p
                className="font-body text-base md:text-lg leading-snug"
                style={{ color: TEXT, fontWeight: 300 }}
              >
                {line}
              </p>
            </li>
          ))}
        </ul>

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
