// Section 13 from the live Wix 80-Hour Advanced Hatha & Pranayama page:
// course title, Breath & Bandha copy, and AKASHA devices mockup.
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const DEVICES =
  'https://static.wixstatic.com/media/cd7168_99881a587ddf4b778f9a767f7d5d61f5~mv2.png/v1/fill/w_960,h_539,al_c,q_90,enc_avif,quality_auto/AKASHA-DEVICES-MOCKUP.png';

const pStyle = {
  fontSize: 'clamp(0.95rem, 1.7vw, 1.25rem)',
  color: TEXT,
  fontWeight: 300,
  lineHeight: 1.65,
};

export default function BreathBandha80Hatha() {
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
            80-Hr Advanced Hatha &amp; Pranayama Online TTC
          </h2>
          <p
            className="font-heading mt-3"
            style={{
              fontSize: 'clamp(1.15rem, 2.4vw, 1.6rem)',
              fontWeight: 300,
              color: '#6E6E6D',
            }}
          >
            Breath &amp; Bandha-Centered Practice
          </p>
          <p
            className="font-heading uppercase tracking-[0.1em] mt-5 md:mt-6"
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
              fontWeight: 400,
              color: '#6E6E6D',
            }}
          >
            Develop a Confident &amp; Heart-Centered Practice
          </p>

          <div className="mt-8 md:mt-10 space-y-5 font-body" style={pStyle}>
            <p>
              You&rsquo;ll leave this premium program empowered to teach Pranayama and
              classical Hatha Yoga – a breath-based style taught by the legendary
              Krishnamacharya.
            </p>
            <p>
              Discover the transformative potential of genuine Asana &amp;
              kundalini-charged Pranayama. Develop your own solid self-practice, which
              will empower your experience-based teaching. Moving &amp; static
              Pranayama will become the foundation for your integrated practice, and
              you&rsquo;ll learn how to teach this powerful breath-work to your
              students.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <img
            src={DEVICES}
            alt="Akasha Hatha & Pranayama course on tablet, phone, desktop and laptop"
            loading="lazy"
            decoding="async"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
