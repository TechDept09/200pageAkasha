export default function Steps() {
  const steps = [
    {
      n: '1',
      t: 'Enroll in the Academy',
      d: 'Secure your place in the Essential Path, one simple payment, instant access to everything.',
    },
    {
      n: '2',
      t: 'Become Part of the Family',
      d: 'Dive deep into authentic Yoga with live Zoom classes, expert teachers, and a worldwide community.',
    },
    {
      n: '3',
      t: 'Live Your Purpose',
      d: 'Graduate Yoga Alliance certified, and experience how genuine Yoga benefits every area of your life.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-akasha-white">
      <div className="section">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">How It Works</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
            Join the Akasha Family
          </h2>
          <span className="gold-rule" />
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="w-14 h-14 mx-auto mb-5 rounded-full border border-akasha-gold flex items-center justify-center font-heading text-2xl text-akasha-black"
                style={{ fontWeight: 300 }}
              >
                {s.n}
              </div>
              <h3
                className="font-heading text-akasha-black mb-3"
                style={{ fontSize: '1.2rem', fontWeight: 400 }}
              >
                {s.t}
              </h3>
              <p className="text-sm font-body text-akasha-gray-1 leading-relaxed max-w-[260px] mx-auto">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
