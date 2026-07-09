// 'Enroll Today & Get X Free Bonuses' grid. Bonus content is verbatim
// from akashayogaacademy.com/200hr-yoga-teacher-training-online (the
// same set that sits inside the 'What will you get?' modal). Layout
// mirrors the reference: three columns on desktop, one on mobile,
// each item a circle number tag + title + value line.

const BONUSES = [
  {
    n: 1,
    name: 'How to Teach Yoga Online',
    value: 299,
    desc:
      'First-hand experience from Akasha Yoga on how to bring your Yoga classes online: audio, lighting, and camera tricks and tips.',
  },
  {
    n: 2,
    name: 'Journey Through the 7 Chakras',
    value: 199,
    desc:
      'Introductory workshop on the classical roots and modern interpretations of the 7 Chakras, energetic aspects, and corresponding emotions.',
  },
  {
    n: 3,
    name: 'Holistic Well-Being Workshop',
    value: 229,
    desc:
      'The yogic system of the 5 Bodies, an ancient holistic description of the human being formulated 2500 years ago.',
  },
  {
    n: 4,
    name: 'Asana Study Flashcards',
    value: 35,
    desc:
      'Made especially for you to memorise the teaching cues. Covers the Asanas from the 200-Hour Teacher Training.',
  },
  {
    n: 5,
    name: 'Sanskrit Study Flashcards',
    value: 35,
    desc:
      'Made especially for you to memorise the Sanskrit names of the Asanas from the 200-Hour Teacher Training.',
  },
  {
    n: 6,
    name: 'Poster Asana Poses',
    value: 69,
    desc:
      'Every Asana covered in the 200-Hour Yoga TTC in high image quality, ready to showcase at home or in your Yoga studio.',
  },
  {
    n: 7,
    name: 'The Art & Science of Teaching',
    value: 108,
    desc:
      'Ancient wisdom paired with modern methods. Yogic artistry meets evidence-based science.',
  },
  {
    n: 8,
    name: 'Yoga in Daily Life',
    value: 86,
    desc:
      "Bonus book on Yama & Niyama, yoga's ethical foundations. Integrate these virtues into everyday life & practice.",
  },
];

const TOTAL_VALUE = BONUSES.reduce((sum, b) => sum + b.value, 0);

export default function CampaignBonuses() {
  return (
    <section
      className="py-16 md:py-24 bg-akasha-black text-akasha-white"
      aria-labelledby="campaign-bonuses-heading"
    >
      <div className="section max-w-6xl">
        <header className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span
            className="inline-block text-akasha-gold uppercase mb-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.72rem, 1.1vw, 0.82rem)',
              letterSpacing: '0.32em',
              fontWeight: 600,
            }}
          >
            Enroll today
          </span>
          <h2
            id="campaign-bonuses-heading"
            className="mb-3"
            style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)',
              fontWeight: 300,
              color: 'inherit',
              lineHeight: 1.15,
            }}
          >
            Get {BONUSES.length} Free Bonuses
          </h2>
          <p
            className="script text-akasha-orange"
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              lineHeight: 1.1,
            }}
          >
            Over US${TOTAL_VALUE.toLocaleString('en-US')} value
          </p>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {BONUSES.map((b) => (
            <li key={b.n} className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="flex-none w-11 h-11 rounded-full border border-akasha-orange/70 bg-akasha-orange/10 text-akasha-orange flex items-center justify-center font-heading text-lg"
                style={{ fontWeight: 400 }}
              >
                {b.n}
              </span>
              <div className="flex-1 min-w-0">
                <p
                  className="font-heading text-akasha-white leading-snug"
                  style={{
                    fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)',
                    fontWeight: 400,
                  }}
                >
                  {b.name}{' '}
                  <span
                    className="text-akasha-gold"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(0.72rem, 1vw, 0.8rem)',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                    }}
                  >
                    (US${b.value} value)
                  </span>
                </p>
                {b.desc ? (
                  <p className="mt-1.5 text-[13px] md:text-sm font-body text-akasha-white/70 leading-relaxed">
                    {b.desc}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
