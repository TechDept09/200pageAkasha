// Section 17 from the live Wix 300-Hour page: dark "START YOUR YOGA
// JOURNEY NOW" promo band with tuition/bonuses math, 33% Summer Wellness
// Discount, from-US$399 offer, and mint ENROLL NOW CTA.
const MINT = '#7CC7B0';
const ORANGE = '#D07A3A';
const DARK_BG = '#3a3a3a';

const ENROLL_URL =
  'https://www.akashayogaacademy.com/300-hr-online-enroll-now';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

export default function JourneyNow300() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: DARK_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none hidden md:block absolute left-[-40px] lg:left-[2%] top-1/2 -translate-y-1/2 w-[240px] lg:w-[300px] opacity-40"
      />
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none hidden md:block absolute right-[-40px] lg:right-[2%] top-1/2 -translate-y-1/2 w-[240px] lg:w-[300px] opacity-40"
      />

      <div className="section relative z-10 py-14 md:py-20 text-center max-w-3xl mx-auto">
        <h2
          className="font-heading uppercase text-akasha-white tracking-[0.08em]"
          style={{ fontSize: 'clamp(1.5rem, 3.4vw, 2.4rem)', fontWeight: 300 }}
        >
          Start Your Yoga Journey Now
        </h2>

        <p className="font-body text-akasha-white/90 mt-4 text-base md:text-lg leading-relaxed">
          Experience the breath-taking quality &amp; benefits of our premium
          300-Hour Online Yoga Teacher Training
        </p>

        <div className="mt-8 space-y-1 font-heading" style={{ fontSize: 'clamp(1.15rem, 2.4vw, 1.5rem)', fontWeight: 300 }}>
          <p className="text-akasha-white">Regular Tuition US$1800</p>
          <p className="text-akasha-white">+10 Bonuses worth US$503</p>
          <p style={{ color: ORANGE }}>= Total Value US$2303</p>
        </div>

        <p
          className="font-heading text-akasha-white mt-8"
          style={{ fontSize: 'clamp(1.35rem, 3vw, 2rem)', fontWeight: 400 }}
        >
          33% Summer Wellness Discount
        </p>

        <p
          className="font-heading mt-3"
          style={{ color: ORANGE, fontSize: 'clamp(1.5rem, 3.4vw, 2.3rem)', fontWeight: 400 }}
        >
          Start today for only US$399
        </p>

        <p className="font-body mt-3 text-sm" style={{ color: ORANGE }}>
          * Offer until July 31.
        </p>

        <div className="mt-8">
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
