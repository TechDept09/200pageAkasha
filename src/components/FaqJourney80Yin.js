// Section 32 from the live Wix 80-Hour Yin page: grey FAQ teaser +
// "YOUR JOURNEY STARTS NOW" pricing close + mint EXPAND CTA.
const MINT = '#75C8AE';
const GREY_BG = '#FFFFFF';
const ORANGE = '#E5771E';
const TEXT = '#6E6E6D';

const FAQ_URL = 'https://www.akashayogaacademy.com/80-yin-ytt-faq';
const ENROLL_URL = 'https://www.akashayogaacademy.com/80hr-yin-ytt-enroll-now';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

export default function FaqJourney80Yin() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-[18%] w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20 text-center">
        <h2
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em]"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          Frequently Asked Questions
        </h2>

        <div
          className="max-w-2xl mx-auto mt-6 space-y-1 font-body"
          style={{
            fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)',
            color: TEXT,
            fontWeight: 300,
            lineHeight: 1.65,
          }}
        >
          <p>
            We want to make sure this is the best investment of your life.
            That&rsquo;s why we&rsquo;ve answered all Frequently Asked Questions
            very thoroughly.
          </p>
          <p>Please click below to receive detailed answers to all your questions.</p>
        </div>

        <div className="mt-8">
          <a
            href={FAQ_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: MINT, fontWeight: 600 }}
          >
            Go to FAQ
          </a>
        </div>

        <h2
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em] mt-16 md:mt-20"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          Your Journey Starts Now
        </h2>

        <div
          className="max-w-2xl mx-auto mt-6 space-y-1 font-body"
          style={{
            fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)',
            color: TEXT,
            fontWeight: 300,
            lineHeight: 1.65,
          }}
        >
          <p>Are you ready to explore the depth of your commitment to Yoga like never before?</p>
          <p>The Akasha Family is here to guide you every step of the way.</p>
        </div>

        <div
          className="mt-10 space-y-1 font-heading"
          style={{ fontSize: 'clamp(1.15rem, 2.4vw, 1.5rem)', fontWeight: 300 }}
        >
          <p style={{ color: TEXT }}>Regular Tuition US$600</p>
          <p style={{ color: TEXT }}>+5 Bonuses worth US$264</p>
          <p style={{ color: ORANGE, fontWeight: 700 }}>= Total Value US$864</p>
        </div>

        <p
          className="font-heading mt-8"
          style={{
            color: '#6E6E6D',
            fontSize: 'clamp(1.35rem, 3vw, 2rem)',
            fontWeight: 400,
          }}
        >
          33% Summer Wellness Discount
        </p>

        <p
          className="font-heading mt-3"
          style={{
            color: ORANGE,
            fontSize: 'clamp(1.5rem, 3.4vw, 2.3rem)',
            fontWeight: 700,
          }}
        >
          Start today for only US$399
        </p>

        <p className="font-body mt-3 text-sm" style={{ color: ORANGE }}>
          * Offer until July 31.
        </p>

        <div className="mt-10">
          <a
            href={ENROLL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.12em] px-8 md:px-10 py-4 font-body hover:shadow-lg transition-all text-center"
            style={{ backgroundColor: MINT, fontWeight: 600 }}
          >
            Expand Your Yogic Journey Now
          </a>
        </div>
      </div>
    </section>
  );
}
