// Section 1 after the hero on the live Wix 80-Hour Advanced Hatha &
// Pranayama page: three stacked script promises, centered breath intro
// copy, mint ENROLL NOW, orange lotus watermark on grey.
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';
const SCRIPT = '#ED5829';
const MINT = '#75C8AE';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const ENROLL_HREF =
  'https://www.akashayogaacademy.com/80-hr-online-enroll-now-hatha-and-pranayama';

const PROMISES = [
  'Transform Your Practice',
  'Deepen Your Purpose',
  'Discover the Missing Piece',
];

export default function Intro80Hatha() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-[8%] w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20 text-center">
        <div className="space-y-1 md:space-y-2">
          {PROMISES.map((line) => (
            <p
              key={line}
              className="script"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', color: SCRIPT }}
            >
              {line}
            </p>
          ))}
        </div>

        <div
          className="mt-10 md:mt-12 max-w-3xl mx-auto font-body space-y-5"
          style={{
            fontSize: 'clamp(0.95rem, 1.7vw, 1.25rem)',
            color: TEXT,
            fontWeight: 300,
            lineHeight: 1.65,
          }}
        >
          <p>
            Have you been practicing Yoga for a while and experienced many
            benefits?
            <br />
            Yet in daily life, you find yourself collapsing back into old
            patterns.
          </p>
          <p>
            The integration of asana, breath &amp; bandha empowers you to
            transform from the inside:
            <br />
            Learn to actually live with an open heart &ndash; authentic,
            embodied, free! How?
          </p>
          <p>The Breath is the Master Key.</p>
          <p>
            There&rsquo;s so much more to the breath than you think! Real breath
            integration creates an incredible energetic dynamic:
            <br />
            An inner alignment that recalibrates your whole being. Opening you
            towards deep peace &amp; genuine contentment. Not only during the
            practice, but also in daily life!
          </p>
        </div>

        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href={ENROLL_HREF}
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
