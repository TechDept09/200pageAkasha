import FadeIn from './FadeIn';

const bonuses = [
  { t: 'How to Teach Yoga Online', v: 99, d: 'First-hand experience bringing your Yoga classes online.' },
  { t: 'Journey Through the 7 Chakras', v: 299, d: 'Introduction workshop on the famous 7-Chakra system.' },
  { t: 'Holistic Well-Being Workshop', v: 199, d: 'The yogic system of the 5 Bodies.' },
  { t: 'Asana Study Flashcards', v: 229, d: 'Memorize the teaching cues for every posture.' },
  { t: 'Sanskrit Study Flashcards', v: 35, d: 'Memorize the Sanskrit names of the Asanas.' },
  { t: 'Asana Pose Poster', v: 35, d: 'Every Asana covered in the 200-Hr Yoga TTC.' },
  { t: 'The Art & Science of Teaching', v: 69, d: 'Unite ancient wisdom with modern methods.' },
  { t: 'Yoga in Daily Life', v: 108, d: 'A bonus book on Yama & Niyama, yoga’s ethical foundations.' },
  { t: 'Scripture Studies Book', v: 86, d: 'Explore timeless pearls of wisdom.' },
  { t: 'Yoga Liability Waiver', v: 29, d: 'An essential legal document for any Yoga teacher.' },
  { t: 'Yoga Teacher Resume (CV)', v: 19, d: 'Professional resume template for teaching opportunities.' },
  { t: 'Yoga Teacher Cover Letter', v: 19, d: 'A well-written cover letter for yoga employers.' },
  { t: 'New Client Intake Form', v: 35, d: 'Sample intake and health-history form for new students.' },
  { t: 'Design Your Schedule', v: null, d: 'A tailor-made, personalized schedule service.' },
];

export default function Bonuses() {
  return (
    <section className="py-20 md:py-28 bg-akasha-white">
      <div className="section">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow text-akasha-orange">Free Until June 15</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
            14 Exclusive Bonuses &amp; Career Starter Kit
          </h2>
          <p className="font-body text-akasha-gray-1 mt-4 leading-relaxed">
            A complete toolkit to start teaching with confidence.
            Included free with the Essential Path.
          </p>
          <p className="script text-akasha-orange mt-3" style={{ fontSize: '1.4rem' }}>
            Total value US$1,130
          </p>
          <span className="gold-rule" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {bonuses.map((b, i) => (
            <FadeIn
              key={i}
              delay={(i % 3) * 80}
              className="bg-akasha-white border border-akasha-gray-4 rounded-sm p-5 flex items-start gap-4 hover:border-akasha-gold transition-colors"
            >
              <div className="flex-none w-9 h-9 rounded-full border border-akasha-gold flex items-center justify-center text-[12px] font-heading text-akasha-black" style={{ fontWeight: 400 }}>
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="font-heading text-akasha-black text-[15px] leading-tight" style={{ fontWeight: 400 }}>
                    {b.t}
                  </h3>
                  {b.v != null && (
                    <span className="flex-none text-[11px] font-body uppercase tracking-[0.15em] text-akasha-orange">
                      US${b.v}
                    </span>
                  )}
                </div>
                <p className="text-[12.5px] font-body text-akasha-gray-1 leading-snug">
                  {b.d}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="text-center text-[11px] font-body uppercase tracking-[0.25em] text-akasha-gray-1 mt-12">
          Included free with the Essential Path · No upsells, no add-ons
        </p>
      </div>
    </section>
  );
}
