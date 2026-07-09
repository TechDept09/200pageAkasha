// 'What's included' short list, pulled verbatim from tier config.
// Sits early in the backup flow so cold traffic reads the core
// deliverables (Zoom sessions, community, certification) before
// scrolling to bonuses and the price.

const BULLETS = [
  '200+ State-of-the-Art Videos From our Bali School',
  '3 Live Zoom Sessions per week, Q&A and interactive discussion',
  'Superb training materials',
  'Full-fledged Yoga Alliance certificate (RYT-200)',
  'Connection to a global yoga community',
];

export default function CampaignBenefits() {
  return (
    <section
      className="py-14 md:py-20 bg-akasha-white"
      aria-labelledby="campaign-benefits-heading"
    >
      <div className="section max-w-3xl text-center">
        <span className="eyebrow text-akasha-orange">What&rsquo;s included</span>
        <h2
          id="campaign-benefits-heading"
          className="mb-4"
          style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 300 }}
        >
          Everything you get with the Essential
        </h2>
        <span className="gold-rule" />

        <ul className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 text-left max-w-2xl mx-auto">
          {BULLETS.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 font-body text-akasha-gray-1 text-sm md:text-base leading-relaxed"
            >
              <span className="text-akasha-green flex-none mt-0.5">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
