import { useTier } from '@/lib/TierContext';

// "Join the Akasha Family" section from the live Wix 200-Hour page: three
// numbered steps with large orange numerals over the faint lotus watermark,
// closing with the green Enroll CTA. Copy is verbatim from the live source.
const GREEN = '#5FBFA6';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const B = ({ children }) => (
  <strong className="font-semibold text-akasha-black">{children}</strong>
);

const steps = [
  {
    n: '1',
    t: 'Get in Touch & Enroll in Our Awesome Yoga Teacher Training',
    body: (
      <>
        Watch the <B>free previews</B> &amp; enjoy the{' '}
        <B>outstanding quality</B> of our teachings.
      </>
    ),
  },
  {
    n: '2',
    t: 'Become Part of the Family & Become a Certified Yoga Teacher',
    body: (
      <>
        Sign up for a life-changing journey, and dive deep into{' '}
        <B>the Heart of authentic Yoga</B>.
      </>
    ),
  },
  {
    n: '3',
    t: 'Live a Fulfilled Life of Passion & Purpose and Share the Light',
    body: (
      <>
        Experience how Yoga can <B>benefit all areas of life</B> &amp; share your
        passion with others.
      </>
    ),
  },
];

export default function Steps() {
  const tier = useTier();
  return (
    <section id="join-family" className="relative overflow-hidden bg-akasha-white">
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-1/2 -translate-y-1/2 w-[440px] md:w-[640px] opacity-[0.12]"
      />

      <div className="section relative z-10 py-16 md:py-24">
        <h2
          className="text-center font-heading uppercase text-akasha-gray-1 tracking-[0.14em]"
          style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.4rem)', fontWeight: 300 }}
        >
          Join the Akasha Family
        </h2>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 max-w-4xl mx-auto mt-12 md:mt-16">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <div
                className="font-heading text-akasha-orange leading-none mb-5"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 3.6rem)', fontWeight: 300 }}
              >
                {s.n}
              </div>
              <h3 className="font-body uppercase tracking-[0.12em] text-akasha-gray-1 text-sm mb-4 max-w-[260px] mx-auto leading-relaxed">
                {s.t}
              </h3>
              <p className="text-sm font-body text-akasha-gray-1 leading-relaxed max-w-[260px] mx-auto">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={tier.ctaHref}
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
