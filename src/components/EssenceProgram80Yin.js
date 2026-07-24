// Section 3 from the live Wix 80-Hour Yin page: Self-Inquiry intro copy,
// YouTube embed (O5iqwTeQMHs), deeper-program copy, and mint Enroll CTA
// on the grey band with orange lotus watermark.
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';
const MINT = '#75C8AE';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const VIDEO_ID = 'O5iqwTeQMHs';
const ENROLL_HREF = 'https://www.akashayogaacademy.com/80hr-yin-ytt-enroll-now';

const pStyle = {
  fontSize: 'clamp(0.95rem, 1.7vw, 1.25rem)',
  color: TEXT,
  fontWeight: 300,
  lineHeight: 1.65,
};

export default function EssenceProgram80Yin() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-[20%] w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <div className="max-w-3xl mx-auto text-center font-body space-y-5" style={pStyle}>
          <p>
            Imagine you are{' '}
            <em className="italic">just starting your Yoga journey</em> like you
            would begin a brand-new day &ndash; wide awake, with wonder, and an
            openness to receive, experience &amp; express yourself fully.
            You&rsquo;re curious, courageous &amp; committed to meet that new day
            in all its forms.
          </p>
          <p>
            That is the very essence of Akasha Yoga Academy&rsquo;s{' '}
            <strong style={{ fontWeight: 700 }}>Self-Inquiry based Yin Yoga Program.</strong>{' '}
            We invite you to step into this unknown landscape of your innermost Self.
          </p>
          <p>
            And we encourage you to deepen your personal &amp; professional journey
            through 80 hours of{' '}
            <strong style={{ fontWeight: 700 }}>Yoga Alliance accredited</strong> Teacher
            Training.
          </p>
        </div>

        <div className="mt-10 md:mt-12 max-w-4xl mx-auto">
          <div className="aspect-video overflow-hidden shadow-lg bg-black/20">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
              title="80-Hour Online Yin Yoga TTC - Akasha Yoga Academy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              style={{ border: 0 }}
            />
          </div>
        </div>

        <div className="mt-10 md:mt-12 max-w-3xl mx-auto text-center font-body space-y-5" style={pStyle}>
          <p>
            <strong style={{ fontWeight: 700 }}>
              This illuminating online course will engage &amp; gently disrupt
              everything you think you know about Yoga.
            </strong>{' '}
            Together, we&rsquo;ll slow down, look deeply at the present moment, and
            experience how introspection &amp; contemplation transform our practice
            &amp; lives.
          </p>
          <p>
            <strong style={{ fontWeight: 700 }}>This Yoga Alliance certified training</strong>{' '}
            covers the basics of classical Yin Yoga: functional Anatomy, joints &amp;
            target areas, meridian theory &amp; mindfulness.
          </p>
          <p>
            <strong style={{ fontWeight: 700 }}>Yet we dare to go much deeper:</strong>{' '}
            Together we&rsquo;ll explore an authentic spiritual practice known as Self
            Inquiry. We use this genuine approach to discover the existential depths of
            our practice &amp; purpose.
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
            Enroll now
          </a>
        </div>
      </div>
    </section>
  );
}
