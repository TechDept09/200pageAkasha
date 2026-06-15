export default function CourseCurriculum({ items = [] }) {
  if (!items.length) return null;

  return (
    <section id="curriculum" className="py-20 md:py-28 bg-akasha-white">
      <div className="section">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Curriculum</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
            What You&rsquo;ll Learn
          </h2>
          <p className="font-body text-akasha-gray-1 mt-4 leading-relaxed">
            A grounded, sequential path. Each piece builds on the last.
          </p>
          <span className="gold-rule" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-akasha-white border border-akasha-gray-4 rounded-sm p-6 hover:border-akasha-gold transition-colors duration-300 flex flex-col"
            >
              <span
                className="script block mb-3"
                style={{ fontSize: '1.6rem', lineHeight: 1 }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-sm font-body text-akasha-gray-1 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
