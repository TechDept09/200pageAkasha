// Section 5 from the live Wix 80-Hour Advanced Hatha & Pranayama page:
// "WE'VE BEEN THERE, AND WE'RE WITH YOU" reflective copy + mint SAVE YOUR SPOT.
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';
const MINT = '#75C8AE';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const ENROLL_HREF =
  'https://www.akashayogaacademy.com/80-hr-online-enroll-now-hatha-and-pranayama';

const pStyle = {
  fontSize: 'clamp(0.95rem, 1.7vw, 1.25rem)',
  color: TEXT,
  fontWeight: 300,
  lineHeight: 1.65,
};

export default function WeveBeenThere80Hatha() {
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
          className="font-heading uppercase text-center tracking-[0.08em] max-w-4xl mx-auto"
          style={{
            fontSize: 'clamp(1.35rem, 3.2vw, 2.15rem)',
            fontWeight: 300,
            color: '#6E6E6D',
            lineHeight: 1.25,
          }}
        >
          We&rsquo;ve Been There,
          <br />
          And We&rsquo;re With You
        </h2>

        <div
          className="mt-8 md:mt-10 max-w-3xl mx-auto text-center font-body space-y-5"
          style={pStyle}
        >
          <p>Do you feel that something vital is missing in your Yoga journey?</p>
          <p>
            Eliminate the guesswork. Clear the confusion. Make a radical shift in
            your practice.
          </p>
          <p>
            Many Hatha &amp; Pranayama Yoga practitioners reach a plateau that keeps
            their personal and teaching practice at a superficial level of physical
            strength &amp; flexibility.
          </p>
          <p>
            At Akasha, we have explored the depths of the Yogic Life through decades
            of adventures, and now we&rsquo;re here to inspire your experience.
          </p>
          <p>
            This is your chance to ignite the transformative spark that will take
            your practice from a &ldquo;nice session&rdquo; to a fully-embodied &amp;
            life-changing engagement &ndash; with yourself, and with your students.
          </p>
        </div>

        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href={ENROLL_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.12em] px-8 md:px-10 py-4 font-body hover:shadow-lg transition-all text-center"
            style={{ backgroundColor: MINT, fontWeight: 600 }}
          >
            Save Your Spot Now
          </a>
        </div>
      </div>
    </section>
  );
}
