// Section 20 from the live Wix 300-Hour page: grey "WHAT YOU'LL GAIN"
// checklist with peach checkmarks, lotus watermark, and mint ENROLL NOW.
const MINT = '#7CC7B0';
const GREY_BG = '#FFFFFF';
const CHECK =
  'https://static.wixstatic.com/media/cd7168_89da62ac6f254f7185941dba1c508306~mv2.png/v1/fill/w_46,h_54,al_c,q_85,enc_avif,quality_auto/CHECK-MARK234.png';

const ENROLL_URL =
  'https://www.akashayogaacademy.com/300-hr-online-enroll-now';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const GAINS = [
  'Advanced Hatha & Vinyasa Yoga practices & philosophy',
  'Step-by-step practice to develop basic & advanced arm balances',
  'Enriched knowledge & experience of Pranayama & Bandhas',
  'Comprehensive knowledge of anatomy & TCM meridians',
  'Expert knowledge of Yin Yoga, mindfulness & meditation',
  'The ability to lead a heart-opening meditation session',
  'Profound transformation that enables you to hold space for others',
  'Instruction training & extensive teaching practice',
  'The confidence to teach others from a place of lived experience',
];

export default function WhatYoullGain300() {
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
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em] text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          What You&rsquo;ll Gain
        </h2>

        <ul className="mt-10 md:mt-12 max-w-2xl mx-auto space-y-4 md:space-y-5">
          {GAINS.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <img
                src={CHECK}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="w-5 h-6 md:w-6 md:h-7 shrink-0 mt-0.5"
              />
              <span className="font-body text-akasha-gray-1 text-base md:text-lg leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>

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
