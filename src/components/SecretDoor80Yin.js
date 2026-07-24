// Section 7 from the live Wix 80-Hour Yin page: "Yin Yoga Is a Secret Door"
// reflective copy with italic/bold emphasis and mint ENROLL NOW CTA.
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

export default function SecretDoor80Yin() {
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
          Yin Yoga Is a Secret Door
        </h2>

        <div className="mt-8 md:mt-10 max-w-3xl mx-auto text-center font-body space-y-5" style={pStyle}>
          <p>
            Other schools focus <em className="italic">exclusively</em> on the{' '}
            <em className="italic">physical</em> benefits of this practice. While
            there are merits to such an approach, you&rsquo;ll discover{' '}
            <strong style={{ fontWeight: 700 }}>
              <em className="italic">far more</em> depth in Akasha&rsquo;s
            </strong>{' '}
            Yin Yoga Program:
          </p>
          <p>
            Our exclusive Teacher Training has a much broader and{' '}
            <strong style={{ fontWeight: 700 }}>truly holistic approach.</strong> The
            genuinely practical philosophy and the authentic practice will allow you
            to <em className="italic">actually integrate</em> Yin into{' '}
            <em className="italic">every</em> area of your life.
          </p>
          <p>
            Lead teacher Kirsten describes Yin Yoga as a &ldquo;secret door&rdquo;
            through which we can{' '}
            <strong style={{ fontWeight: 700 }}>explore &amp; expand</strong> all
            aspects of our being. We start by creating spaciousness in the{' '}
            <em className="italic">physical</em> body and from there, we go all the
            way, into the very essence of Existence.
          </p>
          <p>
            Akasha&rsquo;s Yin Yoga Teacher Training guides you through the threshold
            of this secret door. In this{' '}
            <strong style={{ fontWeight: 700 }}>life-changing process,</strong>{' '}
            you&rsquo;ll gain all the skills &amp; wisdom needed to support yourself
            (and future students.)
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
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}
