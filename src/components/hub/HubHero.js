export default function HubHero() {
  return (
    <section className="pt-28 md:pt-36 pb-10 md:pb-14 bg-akasha-white">
      <div className="section text-center max-w-3xl">
        <h1
          className="mb-4 uppercase"
          style={{
            fontSize: 'clamp(3.2rem, 8.5vw, 6rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '0.01em',
          }}
        >
          Big Yoga Day Discounts
        </h1>

        <div className="flex justify-center mb-5">
          <span
            className="inline-flex items-center gap-2 bg-akasha-orange text-akasha-white rounded-full px-5 py-2 shadow-md"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.78rem, 1.4vw, 0.95rem)',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            <span aria-hidden="true">⏳</span>
            Final 3 Days · Ends June 30
          </span>
        </div>

        <h2
          className="mb-3"
          style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.5rem)', fontWeight: 300 }}
        >
          Extended Storewide Offer on All Courses
        </h2>

        <p
          className="script mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
        >
          Celebrate Yoga, Anywhere
        </p>

        <p className="font-body text-akasha-gray-1 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
          Our trainings, workshops, and retreats. Choose the path that fits you,
          continue your journey with us.
        </p>
      </div>
    </section>
  );
}
