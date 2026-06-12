import EnrollForm from './EnrollForm';

export default function Pricing() {
  const inclusions = [
    '200+ State-of-the-Art Videos From our Bali School',
    'Live Zoom Classes, Q&A and interactive sessions',
    'Superb training materials',
    'Full-fledged Yoga Alliance certificate',
    'Connection to a global yoga community',
    '14 Day Money Back Guarantee',
    '14 exclusive bonuses & career starter kit',
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-akasha-gray-4/30">
      <div className="section">
        {/* Centered header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow text-akasha-orange">75% Summer Discount · Ends June 15</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
            Your Investment
          </h2>
          <p className="font-body text-akasha-gray-1 mt-4 leading-relaxed">
            Everything you need to become Yoga Alliance certified.
            At our lowest price ever.
          </p>
          <span className="gold-rule" />
        </div>

        {/* Single centered price card */}
        <div className="max-w-xl mx-auto bg-akasha-white border border-akasha-gray-4 rounded-sm overflow-hidden">
          <div className="text-center pt-10 pb-8 px-8 border-b border-akasha-gray-4">
            <span className="script block mb-3" style={{ fontSize: '2rem' }}>
              Essential Path
            </span>
            <div className="flex items-baseline justify-center gap-4 mb-2">
              <span className="text-akasha-gray-2 text-xl line-through font-body">
                US$1190
              </span>
              <span
                className="font-heading text-akasha-black text-6xl"
                style={{ fontWeight: 300 }}
              >
                US$290
              </span>
            </div>
            <p className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-orange">
              Save US$900 · One-Time Payment
            </p>
          </div>

          <div className="px-8 md:px-12 py-8">
            <ul className="space-y-3">
              {inclusions.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm font-body text-akasha-gray-1 leading-relaxed"
                >
                  <span className="text-akasha-green mt-0.5 flex-none">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-8 md:px-12 pb-10">
            <p className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-gray-1 mb-4 text-center">
              Reserve your seat
            </p>
            <EnrollForm />
          </div>
        </div>

        {/* Tuition with purpose */}
        <p className="text-center text-xs font-body text-akasha-gray-1 mt-8 max-w-md mx-auto leading-relaxed">
          <strong className="text-akasha-black font-medium">Tuition with purpose</strong>, your
          enrollment supports the Plastic Exchange Project, feeding Balinese
          families by turning ocean waste into nourishment.
        </p>
      </div>
    </section>
  );
}
