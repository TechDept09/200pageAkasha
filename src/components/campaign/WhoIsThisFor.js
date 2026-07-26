// Blueprint Brief 05, "Who Is This Training For?" Self-identification
// so the buyer can nod at the scenario that fits them before the
// checkout ask. Copy is verbatim from the Complete Blueprint.

const SCENARIOS = [
  {
    title: 'You practice yoga regularly and want to take it deeper',
    body:
      'You love your practice but feel like there is a whole world beneath the surface you have not explored yet. You want to understand the why behind every pose, every breath, every moment on the mat.',
  },
  {
    title: "You dream of teaching but feel like you're 'not ready enough'",
    body:
      'Here is a secret: every teacher felt that way before they started. You do not need to touch your toes or hold a handstand. You just need the desire to learn and the willingness to grow. We will give you the rest.',
  },
  {
    title: "You're ready for a meaningful career change",
    body:
      'Maybe you have spent years in an office wondering if there is more. A yoga certification is not just a piece of paper, it is a doorway to a career built on purpose, connection, and well-being.',
  },
  {
    title: 'You want world-recognised certification without leaving home',
    body:
      'You have responsibilities. A family, a job, a life you cannot pause for weeks. Our self-paced program fits around your schedule, not the other way around.',
  },
  {
    title: 'You simply want to transform your personal practice',
    body:
      'Not everyone who trains wants to teach, and that is perfectly okay. Many of our students enrol purely for self-discovery, personal growth, and a deeper connection to the ancient wisdom of yoga.',
  },
];

export default function WhoIsThisFor() {
  return (
    <section
      className="py-14 md:py-20 bg-akasha-gray-4/30"
      aria-labelledby="who-is-this-for-heading"
      id="who-is-this-for"
    >
      <div className="section max-w-3xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow">See yourself in it</span>
          <h2
            id="who-is-this-for-heading"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 300 }}
          >
            This Training Is for You If&hellip;
          </h2>
          <span className="gold-rule" />
        </div>
        <ul className="space-y-3 md:space-y-4 mb-8">
          {SCENARIOS.map((s, i) => (
            <li
              key={i}
              className="flex items-start gap-4 bg-akasha-white border border-akasha-gray-4 rounded-sm px-5 md:px-6 py-4 md:py-5"
            >
              <span
                className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-akasha-orange/10 text-akasha-orange flex-shrink-0"
                aria-hidden="true"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6.5L4.8 9L10 3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3
                  className="font-heading text-akasha-black text-base md:text-lg mb-1"
                  style={{ fontWeight: 400 }}
                >
                  {s.title}
                </h3>
                <p className="font-body text-akasha-gray-1 text-sm md:text-[15px] leading-relaxed">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-akasha-white border-l-2 border-akasha-orange px-5 md:px-6 py-4 md:py-5 rounded-sm">
          <p
            className="font-body text-akasha-black text-sm md:text-[15px] leading-relaxed"
            style={{ fontWeight: 500 }}
          >
            No prior teaching experience needed. No advanced poses required.
          </p>
          <p className="font-body text-akasha-gray-1 text-sm md:text-[15px] leading-relaxed mt-1">
            We meet you exactly where you are, and guide you to where you
            want to be.
          </p>
        </div>
      </div>
    </section>
  );
}
