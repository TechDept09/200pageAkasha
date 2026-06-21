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

        <p
          className="font-body mb-5"
          style={{
            fontSize: 'clamp(0.7rem, 1.4vw, 0.9rem)',
            letterSpacing: '0.28em',
            color: '#ED5829',
            textTransform: 'uppercase',
          }}
        >
          International Yoga Day, 21 June
        </p>

        <h2
          className="mb-3"
          style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.5rem)', fontWeight: 300 }}
        >
          Storewide Offer on All Courses
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
