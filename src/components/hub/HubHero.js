export default function HubHero() {
  return (
    <section className="pt-28 md:pt-36 pb-10 md:pb-14 bg-akasha-white">
      <div className="section text-center max-w-2xl">
        <span className="eyebrow" style={{ color: '#ED5829' }}>
          International Yoga Day, 21 June
        </span>

        <h1
          className="mb-3"
          style={{ fontSize: 'clamp(2.6rem, 6vw, 4.2rem)', fontWeight: 300 }}
        >
          Storewide Discount
          <br />
          on All Courses
        </h1>

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
