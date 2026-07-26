// Blueprint Brief 03, "What Can You Actually Do With a Yoga
// Certification?" Sits right after the awareness section so a cold
// visitor moves from "what is this" to "why should I invest" before
// they see any pricing. Copy is verbatim from the Complete Blueprint.

const PATHS = [
  {
    title: 'Teach at Studios & Gyms',
    body:
      'Walk into any yoga studio or fitness center with a recognised credential. RYT-200 is the industry standard that studios look for when hiring teachers. Many of our graduates are teaching within weeks of completing the training.',
  },
  {
    title: 'Build an Online Yoga Business',
    body:
      'The online yoga industry is booming. With your certification, you can create and sell online classes, build a membership community, or offer private virtual sessions to students anywhere in the world, all from your living room.',
  },
  {
    title: 'Lead Retreats & Workshops',
    body:
      'Imagine guiding a group through sunrise yoga on a beach in Costa Rica, or hosting a weekend wellness retreat in the mountains. A yoga certification is your ticket to creating transformational experiences in extraordinary places.',
  },
  {
    title: 'Deepen Your Own Practice',
    body:
      'You do not have to teach a single class to benefit from this training. Many students enrol simply to understand yoga on a deeper level, the philosophy, the anatomy, the breathwork, and walk away with a practice that is richer and more meaningful than ever before.',
  },
];

export default function WhatCanYouDo() {
  return (
    <section
      className="py-14 md:py-20 bg-akasha-gray-4/30"
      aria-labelledby="what-can-you-do-heading"
      id="career-outcomes"
    >
      <div className="section max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="eyebrow">Where certification leads</span>
          <h2
            id="what-can-you-do-heading"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 300 }}
          >
            What Can You Actually Do With a Yoga Certification?
          </h2>
          <p
            className="script mt-3"
            style={{ fontSize: 'clamp(1.4rem, 2.6vw, 1.8rem)', color: '#b3733a' }}
          >
            More than you might think.
          </p>
          <span className="gold-rule" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
          {PATHS.map((p) => (
            <article
              key={p.title}
              className="bg-akasha-white border border-akasha-gray-4 rounded-sm p-6 md:p-7"
            >
              <h3
                className="font-heading text-akasha-black text-lg md:text-xl mb-3"
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
        <div className="max-w-3xl mx-auto bg-akasha-white border-l-2 border-akasha-orange p-5 md:p-6 rounded-sm">
          <p className="font-body text-akasha-gray-1 text-sm md:text-[15px] leading-relaxed">
            The global yoga industry is valued at over{' '}
            <span className="text-akasha-black font-medium">US$105 billion</span>{' '}
            and continues to grow year over year. Demand for qualified
            yoga teachers has never been higher, and a 200-hour
            certification is the first step into this thriving ecosystem.
          </p>
        </div>
        <div className="text-center mt-8">
          <a
            href="#why-akasha"
            className="inline-flex items-center gap-2 text-[12px] font-body uppercase tracking-[0.22em] text-akasha-orange hover:text-akasha-orange-dark transition-colors"
          >
            See how Akasha prepares you
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
