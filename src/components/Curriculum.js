import { useTier } from '@/lib/TierContext';

// "A Truly Life-Changing Journey" + "The Curriculum" section, matching the
// live Wix 200-Hour page: an intro promise block, then the syllabus broken
// into four parts as stacked text, over the faint lotus watermark, closing
// with the green CTA. Copy is verbatim from the Wix source.
const GREEN = '#5FBFA6';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const parts = [
  {
    label: 'Practice & Theory',
    desc: 'Asanas & alignment training, cleansing breathwork, heart meditation, practical philosophy, art of living, chakras.',
  },
  {
    label: 'Anatomy & Posture',
    desc: 'Advanced asanas & pranayama, bandha, applied Yoga anatomy, teaching skills, adjustment training & posture study.',
  },
  {
    label: 'Yoga Physiology',
    desc: 'Scripture Study: Bhagavad Gita, Yoga Sutras, purification, Yogic diet, sequencing, teaching of own 60-minute Yoga class.',
  },
  {
    label: 'Practicum & How to Get Started',
    desc: 'History of Yoga, self practice, own teaching of a 90-minute Yoga class, marketing & networking.',
  },
];

export default function Curriculum() {
  const tier = useTier();
  return (
    <section id="curriculum" className="relative overflow-hidden bg-akasha-white">
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
        {/* Intro promise */}
        <h2
          className="font-heading text-akasha-gray-1"
          style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.4rem)', fontWeight: 300 }}
        >
          A Truly Life-Changing Journey
        </h2>
        <div className="max-w-2xl mx-auto mt-6 space-y-4 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
          <p>
            Immerse yourself into{' '}
            <strong className="font-semibold text-akasha-black">
              classical Hatha &amp; Vinyasa Yoga.
            </strong>
          </p>
          <p>
            Get inspired by{' '}
            <strong className="font-semibold text-akasha-black">sincere Masters</strong>{' '}
            who sincerely embody{' '}
            <strong className="font-semibold text-akasha-black">Yogic wisdom.</strong>
          </p>
          <p>
            Receive{' '}
            <strong className="font-semibold text-akasha-black">abundant support</strong>{' '}
            from your own personal mentor teacher.
          </p>
        </div>

        {/* The Curriculum */}
        <h3
          className="mt-14 md:mt-20 font-heading uppercase text-akasha-gray-1 tracking-[0.18em]"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          The Curriculum
        </h3>
        <p className="max-w-2xl mx-auto mt-6 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
          Learn the essence of{' '}
          <strong className="font-semibold text-akasha-black">breath-based Hatha Yoga</strong>{' '}
          in the Vinyasa Krama style of Krishnamacharya. Receive access to this
          authentic classical approach in our{' '}
          <strong className="font-semibold text-akasha-black">
            truly systematic syllabus
          </strong>
          , which is based on decades of committed research, study &amp; practice
          under reputable masters.
        </p>

        {/* Parts */}
        <div className="max-w-2xl mx-auto mt-10 md:mt-12 space-y-7 text-left">
          {parts.map((p, i) => (
            <div key={p.label}>
              <p
                className="font-heading text-akasha-black"
                style={{ fontSize: '1.05rem', fontWeight: 500 }}
              >
                <span className="text-akasha-orange">PART {i + 1}:</span> {p.label}
              </p>
              <p className="mt-1 font-body text-akasha-gray-1 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Green CTA */}
        <div className="mt-14 md:mt-16">
          <a
            href={tier.ctaHref}
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: GREEN, fontWeight: 600 }}
          >
            Start Your Journey
          </a>
          <p className="mt-3 font-body text-xs uppercase tracking-[0.2em] text-akasha-gray-2">
            Over 70% Off Until July 31st
          </p>
        </div>
      </div>
    </section>
  );
}
