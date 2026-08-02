// Section 5 from the live Wix 80-Hour Yin page: "What's Most Important"
// reflective copy with bold phrases and mint SAVE YOUR SPOT NOW CTA.
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';
const MINT = '#75C8AE';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const ENROLL_HREF = 'https://www.akashayogaacademy.com/80hr-yin-ytt-enroll-now';

const pStyle = {
  fontSize: 'clamp(0.95rem, 1.7vw, 1.25rem)',
  color: TEXT,
  fontWeight: 300,
  lineHeight: 1.65,
};

export default function WhatsMostImportant80Yin() {
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
          className="font-heading uppercase text-center tracking-[0.06em] max-w-4xl mx-auto"
          style={{
            fontSize: 'clamp(1.35rem, 3.2vw, 2.15rem)',
            fontWeight: 300,
            color: '#6E6E6D',
            lineHeight: 1.25,
          }}
        >
          What&rsquo;s Most Important in Your Life Right Now?
        </h2>

        <div className="mt-8 md:mt-10 max-w-3xl mx-auto text-center font-body space-y-5" style={pStyle}>
          <p>
            Do you feel like you&rsquo;re just skimming the surface of your Yoga
            practice?
          </p>
          <p>
            Have you heard an{' '}
            <strong style={{ fontWeight: 700 }}>inner call to go deeper?</strong>
          </p>
          <p>
            You&rsquo;ve started to experience a more contemplative &amp; peaceful
            space in your practice. Yet something&rsquo;s still missing in your
            relationship with Yoga.
          </p>
          <p>
            Akasha&rsquo;s Self Inquiry based Yin Yoga Teacher Training peels back
            those layers that condemn us to a flat, repetitive &amp; ordinary life.
          </p>
          <p>
            Together, we&rsquo;ll bring about a{' '}
            <strong style={{ fontWeight: 700 }}>clarity &amp; serenity</strong> that
            catapults you forward into a new dimension &ndash; in your Yoga journey,
            and in your entire life.
          </p>
          <p>
            And you know that{' '}
            <strong style={{ fontWeight: 700 }}>you&rsquo;re ready for this.</strong>
          </p>
          <p>
            Explore your body &amp; mind at a depth you&rsquo;ve only imagined. Join
            Akasha&rsquo;s 80-Hour Yin Yoga Teacher Training and{' '}
            <strong style={{ fontWeight: 700 }}>take your journey to the next level.</strong>
          </p>
        </div>

        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href={ENROLL_HREF}
            className="inline-flex items-center justify-center text-akasha-white uppercase tracking-[0.1em] px-10 py-3 font-body transition-all"
            style={{
              backgroundColor: MINT,
              border: `2px solid ${MINT}`,
              borderRadius: 9999,
              fontWeight: 700,
              fontSize: '1.05rem',
              boxShadow: '2px 2px 1px rgba(86, 149, 130, 0.88)',
              textShadow: '1px 1.5px rgba(86, 149, 130, 0.77)',
            }}
          >
            Save Your Spot Now
          </a>
        </div>
      </div>
    </section>
  );
}
