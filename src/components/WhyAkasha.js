export default function WhyAkasha() {
  const ratings = [
    { score: '4.8/5.0', count: '242 reviews' },
    { score: '4.93/5.0', count: '359 reviews' },
    { score: '4.9/5.0', count: '163 reviews' },
  ];

  const pillars = [
    {
      t: 'Heart-Centered Teaching',
      d: 'Authentic, breath-based Yoga presented deep yet simple — so you grow into a confident self-practitioner, not just a credential holder.',
    },
    {
      t: 'Bring Bali Home',
      d: 'Video lessons filmed in our exclusive BALIWOOD studio, paired with live Zoom classes. Practice with us from anywhere.',
    },
    {
      t: 'Tuition with Purpose',
      d: 'Your enrollment supports the Plastic Exchange Project — feeding Balinese families by turning ocean waste into nourishment.',
    },
  ];

  return (
    <section id="why" className="py-20 md:py-28 bg-akasha-gray-4/30">
      <div className="section">
        {/* Centered header — Akasha model */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Why Akasha</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
            We know this is a big step for you
          </h2>
          <p className="font-body text-akasha-gray-1 mt-4 leading-relaxed">
            So we do everything to make this the best investment of your life.
          </p>
          <span className="gold-rule" />
        </div>

        {/* Ratings trio — real numbers from the site */}
        <div className="grid grid-cols-3 max-w-2xl mx-auto mb-16 divide-x divide-akasha-gray-3">
          {ratings.map((r, i) => (
            <div key={i} className="text-center px-3 md:px-6">
              <span className="text-akasha-gold text-xs tracking-[0.15em] block mb-2">
                ★★★★★
              </span>
              <div
                className="font-heading text-akasha-black text-2xl md:text-3xl"
                style={{ fontWeight: 300 }}
              >
                {r.score}
              </div>
              <p className="text-[10px] font-body uppercase tracking-[0.2em] text-akasha-gray-1 mt-1">
                {r.count}
              </p>
            </div>
          ))}
        </div>

        {/* Pillars — 3 centered columns */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 max-w-4xl mx-auto">
          {pillars.map((p, i) => (
            <div key={i} className="text-center">
              <h3
                className="font-heading text-akasha-black mb-3"
                style={{ fontSize: '1.2rem', fontWeight: 400 }}
              >
                {p.t}
              </h3>
              <p className="text-sm font-body text-akasha-gray-1 leading-relaxed">
                {p.d}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm font-body text-akasha-gray-1 mt-14 max-w-xl mx-auto leading-relaxed">
          Over the past 15 years we empowered more than{' '}
          <strong className="text-akasha-black font-medium">1,100 yoga instructors</strong>{' '}
          — now successfully teaching on all{' '}
          <strong className="text-akasha-black font-medium">6 continents</strong>.
        </p>
      </div>
    </section>
  );
}
