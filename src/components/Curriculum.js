export default function Curriculum() {
  const parts = [
    {
      n: '01',
      t: 'Practice & Theory',
      items: ['Asanas & alignment', 'Breathwork (Pranayama)', 'Heart meditation', 'Yoga philosophy', 'The art of living', 'The chakras'],
    },
    {
      n: '02',
      t: 'Anatomy & Posture',
      items: ['Advanced asanas & pranayama', 'Bandha', 'Yoga anatomy', 'Teaching skills', 'Adjustment training'],
    },
    {
      n: '03',
      t: 'Yoga Physiology',
      items: ['Scripture: Bhagavad Gita', 'Scripture: Yoga Sutras', 'Purification practices', 'Yogic diet', 'Sequencing', 'Teaching a 60-minute class'],
    },
    {
      n: '04',
      t: 'Practicum & Getting Started',
      items: ['Yoga history', 'Self-practice', 'Teaching a 90-minute class', 'Marketing & networking'],
    },
  ];

  return (
    <section id="curriculum" className="py-20 md:py-28 bg-akasha-white">
      <div className="section">
        {/* Centered header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Program Overview</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
            Deepen your Knowledge &amp; Practice
          </h2>
          <p className="font-body text-akasha-gray-1 mt-4 leading-relaxed">
            Learn &amp; experience a deeper level of Yoga in both philosophy
            &amp; practice — a complete 200-hour curriculum in four integrated
            parts.
          </p>
          <span className="gold-rule" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {parts.map((p, i) => (
            <div
              key={i}
              className="bg-akasha-white border border-akasha-gray-4 rounded-sm p-8 md:p-10 hover:border-akasha-gold transition-colors duration-300"
            >
              <div className="text-center mb-6">
                <span
                  className="script block mb-1"
                  style={{ fontSize: '1.9rem' }}
                >
                  Part {i + 1}
                </span>
                <h3
                  className="font-heading text-akasha-black"
                  style={{ fontSize: '1.4rem', fontWeight: 400 }}
                >
                  {p.t}
                </h3>
              </div>
              <ul className="space-y-2.5 max-w-xs mx-auto">
                {p.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm font-body text-akasha-gray-1 leading-relaxed"
                  >
                    <span className="text-akasha-green mt-0.5 flex-none">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Accreditation line */}
        <div className="text-center mt-14">
          <p className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-gray-1">
            Yoga Alliance Registered School · ID 87485 · Since 2012 · RYT-200 Eligible
          </p>
        </div>
      </div>
    </section>
  );
}
