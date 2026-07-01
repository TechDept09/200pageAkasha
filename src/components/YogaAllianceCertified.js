// Yoga Alliance Certified section, verbatim from
// akashayogaacademy.com/200hr-yoga-teacher-training-online. Four Yoga
// Alliance badges (RYS-200, RYS-300, ERYT-500, YACEP) plus the two
// verbatim credibility paragraphs Akasha publishes on the live page.

const BADGES = [
  {
    src: 'https://static.wixstatic.com/media/cd7168_977ee408f17b46a29edd503ef69e6617~mv2.png/v1/fill/w_308,h_300,al_c,q_85,enc_avif,quality_auto/RYS-200-Yoga-Alliance.png',
    alt: 'Yoga Alliance RYS-200 Registered Yoga School',
  },
  {
    src: 'https://static.wixstatic.com/media/cd7168_b0002e34d2324f19aa47e198f769d01c~mv2.png/v1/fill/w_314,h_300,al_c,q_85,enc_avif,quality_auto/RYS-300-Yoga-Alliance.png',
    alt: 'Yoga Alliance RYS-300 Registered Yoga School',
  },
  {
    src: 'https://static.wixstatic.com/media/cd7168_c00f00faf1c442759dff116c1d8acaf0~mv2.png/v1/fill/w_300,h_300,al_c,q_85,enc_avif,quality_auto/cd7168_c00f00faf1c442759dff116c1d8acaf0~mv2.png',
    alt: 'Yoga Alliance E-RYT-500 Experienced Registered Yoga Teacher',
  },
  {
    src: 'https://static.wixstatic.com/media/cd7168_24994c4ef3af4e9585efa50e9c37c8eb~mv2.png/v1/fill/w_300,h_300,al_c,q_85,enc_avif,quality_auto/cd7168_24994c4ef3af4e9585efa50e9c37c8eb~mv2.png',
    alt: 'Yoga Alliance YACEP Continuing Education Provider',
  },
];

export default function YogaAllianceCertified() {
  return (
    <section
      className="py-16 md:py-24 bg-akasha-white"
      aria-labelledby="yoga-alliance-heading"
    >
      <div className="section max-w-5xl text-center">
        <span className="eyebrow text-akasha-orange">Accredited & Certified</span>
        <h2
          id="yoga-alliance-heading"
          className="mb-4"
          style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}
        >
          Yoga Alliance Certified
        </h2>
        <span className="gold-rule" />

        <div className="max-w-2xl mx-auto mt-8 space-y-5 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
          <p>
            We've been a leading member of the international Yoga Alliance for
            more than 13 years. Our curriculum is officially accredited &
            certified by this reputable organization.
          </p>
          <p>
            Our academy is globally recognized as the highest-ranked school,
            with more than 250 reviews.
          </p>
          <p>
            As a graduate, you'll be empowered to become a Registered Yoga
            Teacher (RYT-200), equipped with the latest knowledge & most
            comprehensive skills. Our time-proven, top-rated course will
            certainly provide you with a life-changing experience.
          </p>
        </div>

        <ul
          className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          aria-label="Yoga Alliance registered credentials"
        >
          {BADGES.map((b) => (
            <li key={b.src} className="flex items-center">
              <img
                src={b.src}
                alt={b.alt}
                loading="lazy"
                decoding="async"
                className="h-20 md:h-24 w-auto"
              />
            </li>
          ))}
        </ul>

        <div className="mt-14 md:mt-16 max-w-2xl mx-auto border-t border-akasha-gray-4 pt-10 md:pt-12">
          <h3
            className="mb-4"
            style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)', fontWeight: 300 }}
          >
            Join a Legacy of Excellence
          </h3>
          <div className="space-y-5 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
            <p>
              All lead instructors are Experienced Registered Yoga Teachers at
              the highest level (E-RYT-500). You'll benefit from our superb
              level of expertise & wisdom. Since 2012, we've been a fully
              accredited & officially Registered Yoga School (Registry-ID:
              87485).
            </p>
            <p>
              For decades, we've led the evolution of Yoga education. Our
              program meets & exceeds the brand-new Yoga Alliance
              requirements, offering you the best possible experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
