export default function HubHero() {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-akasha-white">
      <div className="section text-center max-w-3xl">
        <span className="eyebrow" style={{ color: '#ED5829' }}>
          International Yoga Day, 21 June
        </span>

        <h1
          className="mb-4"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 300 }}
        >
          Storewide Discount
          <br />
          on All Courses
        </h1>

        <p
          className="script mb-7"
          style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)' }}
        >
          Celebrate Yoga, Anywhere
        </p>

        <p className="font-body text-akasha-gray-1 max-w-xl mx-auto mb-8 leading-relaxed">
          A curated catalog of our trainings, workshops, and retreats. Choose
          the path that fits where you are today, and continue your journey
          with us.
        </p>

        <span className="gold-rule mx-auto" />
      </div>
    </section>
  );
}
