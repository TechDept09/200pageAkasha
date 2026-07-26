// Blueprint Brief 06, "How It Works, 3 Simple Steps". Sits between
// Who Is This For and the curriculum block so the buyer sees the
// process as achievable before diving into content details. Copy is
// verbatim from Wirahadi's Complete Blueprint.

const STEPS = [
  {
    n: 1,
    title: 'Enroll & Get Instant Access',
    body:
      'Choose your program and enroll in minutes. You will get immediate access to all video lessons, course materials, and the student community. Start learning today, literally today.',
    meta: 'Self-paced · Start anytime · 6 months access',
  },
  {
    n: 2,
    title: 'Learn at Your Own Pace',
    body:
      'Work through 200+ hours of professionally filmed video lessons from our Bali studio. Join 3 live Zoom sessions each week for real-time practice and feedback with your teachers. Study on your schedule, early mornings, late evenings, weekends. It is your training, your timeline.',
    meta: 'Video lessons · Live Zoom 3x/week · Practice assignments',
  },
  {
    n: 3,
    title: 'Graduate Yoga Alliance Certified',
    body:
      'Complete your assignments, pass your final assessment, and receive your certificate. You are now eligible to register as a Registered Yoga Teacher (RYT-200) with Yoga Alliance and start teaching anywhere in the world.',
    meta: 'RYT-200 eligible · Recognised in 100+ countries',
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-14 md:py-20 bg-akasha-white"
      aria-labelledby="how-it-works-heading"
      id="how-it-works"
    >
      <div className="section max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="eyebrow text-akasha-orange">The journey</span>
          <h2
            id="how-it-works-heading"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 300 }}
          >
            Your Journey in 3 Simple Steps
          </h2>
          <span className="gold-rule" />
        </div>
        <ol className="space-y-4 md:space-y-6">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 bg-akasha-gray-4/30 border border-akasha-gray-4 rounded-sm p-6 md:p-7"
            >
              <span
                className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-akasha-orange text-akasha-white font-heading text-xl"
                style={{ fontWeight: 400 }}
                aria-hidden="true"
              >
                {s.n}
              </span>
              <div>
                <h3
                  className="font-heading text-akasha-black text-lg md:text-xl mb-2"
                  style={{ fontWeight: 400 }}
                >
                  {s.title}
                </h3>
                <p className="font-body text-akasha-gray-1 text-sm md:text-[15px] leading-relaxed mb-3">
                  {s.body}
                </p>
                <p
                  className="text-[11px] font-body uppercase tracking-[0.2em] text-akasha-orange"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {s.meta}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-3xl mx-auto text-center font-body text-akasha-gray-1 text-sm md:text-[15px] leading-relaxed">
          Still wondering if you can do this? Over 1,100 students from
          50+ countries already have. Some were complete beginners. Some
          had been practicing for decades. All of them started with a
          single step: clicking &ldquo;Enroll&rdquo;.
        </p>
      </div>
    </section>
  );
}
