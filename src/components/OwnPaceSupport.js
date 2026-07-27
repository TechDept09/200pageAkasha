// "Own Pace & Full Support" section, matching the live Wix 200-Hour page: a
// centered headline, two supportive paragraphs, and the green Enroll CTA,
// over the faint lotus watermark. Copy is verbatim from the live source.
const GREEN = '#5FBFA6';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const B = ({ children }) => (
  <strong className="font-semibold text-akasha-black">{children}</strong>
);

export default function OwnPaceSupport() {
  return (
    <section className="relative overflow-hidden bg-akasha-white">
      {/* Faint lotus watermark, bleeding off the left edge */}
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-140px] top-1/2 -translate-y-1/2 w-[420px] md:w-[620px] opacity-[0.12]"
      />

      <div className="section relative z-10 py-16 md:py-24 text-center">
        <h2
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em]"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          Own Pace &amp; Full Support
        </h2>

        <div className="max-w-2xl mx-auto mt-8 space-y-5 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
          <p>
            Study in your <B>own rhythm &amp; timezone</B>, and receive our{' '}
            <B>whole-hearted support</B> on all levels. You can either immerse
            yourself in a short intensive training. Or you can spread out the
            journey over a longer period for deeper integration.
          </p>
          <p>
            <B>Start &amp; graduate in your own time</B>, while benefiting from
            our truly interactive &amp; supportive learning environment. Join our{' '}
            <B>daily live Zoom sessions</B>, and trust that we are really here for
            you &ndash; guiding you at every step of the way.
          </p>
        </div>

        {/* Green CTA */}
        <div className="mt-10 md:mt-12">
          <a
            href="/200h-essential/enroll"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: GREEN, fontWeight: 600 }}
          >
            Enroll Now
          </a>
          <p className="mt-3 font-body text-xs uppercase tracking-[0.2em] text-akasha-gray-2">
            Over 70% Off Until July 31st
          </p>
        </div>
      </div>
    </section>
  );
}
