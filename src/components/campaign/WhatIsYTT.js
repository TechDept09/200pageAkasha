// Blueprint Brief 02, "What Is a 200-Hour Yoga Teacher Training?"
// Awareness section. Cold TOF traffic from Meta Ads often has never
// heard of YTT; this section bridges the knowledge gap before any
// consideration or decision step. Copy is verbatim from marketing's
// Complete Blueprint, with em-dashes converted to commas or periods
// per house style.

const PILLARS = [
  {
    title: 'Asana & Practice',
    body:
      'Master alignment, sequencing, and the art of guiding others through yoga postures safely and effectively.',
  },
  {
    title: 'Anatomy & Physiology',
    body:
      'Understand how the body moves, how muscles and joints work together, and how to prevent injuries in your students.',
  },
  {
    title: 'Philosophy & History',
    body:
      'Explore the ancient wisdom traditions that gave birth to yoga, from the Yoga Sutras to the Bhagavad Gita, and learn how to bring these teachings into modern life.',
  },
  {
    title: 'Teaching Methodology',
    body:
      'Develop your voice as a teacher. Learn how to structure classes, give clear instructions, hold space for students, and build confidence in leading a room.',
  },
];

export default function WhatIsYTT() {
  return (
    <section
      className="py-14 md:py-20 bg-akasha-white"
      aria-labelledby="what-is-ytt-heading"
      id="what-is-ytt"
    >
      <div className="section max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="eyebrow text-akasha-orange">First, the essentials</span>
          <h2
            id="what-is-ytt-heading"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 300 }}
          >
            What Is a 200-Hour Yoga Teacher Training?
          </h2>
          <span className="gold-rule" />
        </div>
        <div className="max-w-3xl mx-auto space-y-4 mb-10 md:mb-12 font-body text-akasha-gray-1 text-base md:text-[17px] leading-relaxed">
          <p>
            A 200-hour Yoga Teacher Training (YTT) is the globally
            recognised foundation for becoming a certified yoga teacher.
            Established by Yoga Alliance, the world&rsquo;s largest
            nonprofit yoga organisation, the 200-hour standard ensures
            every graduate has the depth of knowledge and practical skills
            to teach yoga safely, confidently, and professionally.
          </p>
          <p>
            But it is not just about learning poses. A true 200-hour
            training covers four essential pillars:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12">
          {PILLARS.map((p) => (
            <article
              key={p.title}
              className="bg-akasha-gray-4/30 border border-akasha-gray-4 rounded-sm p-6"
            >
              <p
                className="text-[10px] font-body uppercase tracking-[0.22em] text-akasha-orange mb-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Pillar
              </p>
              <h3
                className="font-heading text-akasha-black text-lg md:text-xl mb-2"
                style={{ fontWeight: 400 }}
              >
                {p.title}
              </h3>
              <p className="font-body text-akasha-gray-1 text-sm md:text-[15px] leading-relaxed">
                {p.body}
              </p>
            </article>
          ))}
        </div>
        <p className="max-w-3xl mx-auto font-body text-akasha-gray-1 text-base md:text-[17px] leading-relaxed text-center">
          Upon completion, you are eligible to register as a Registered
          Yoga Teacher (RYT-200) with Yoga Alliance, a credential
          recognised in over 100 countries. Whether you want to teach at
          a local studio, lead online classes, host retreats, or simply
          deepen your own practice, a 200-hour training is where it all
          begins.
        </p>
      </div>
    </section>
  );
}
