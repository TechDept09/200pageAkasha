// 200-Hour curriculum grid, verbatim from
// akashayogaacademy.com/200hr-yoga-teacher-training-online. Same
// four blocks the 'What will you get?' modal has, surfaced inline
// so cold traffic sees what they will learn without clicking.

const SECTIONS = [
  {
    section: 'PRACTICE',
    items: ['60 Hours of Asana', '20 Hours of Pranayama', '15 Hours of Meditation'],
  },
  {
    section: 'THEORY',
    items: [
      '40 Hours of Yoga Anatomy & Posture Study',
      '50 Hours of Lectures on Applied Philosophy & History',
      'Teaching Techniques & Instructor Skills',
    ],
  },
  {
    section: 'TEACHER EDUCATION',
    items: [
      'Personally Supervised Practicum Assignments',
      'Guided Prep, Video Recording & One-on-One Feedback',
      'Marketing, Networking & How to Get Started',
    ],
  },
  {
    section: 'PERSONAL GUIDANCE & FUN',
    items: [
      'Daily Live Q&As',
      'Community Forums, Private Facebook Group & Chats',
      'Bhajan Chanting & so much more',
    ],
  },
];

export default function CampaignCurriculum() {
  return (
    <section
      className="py-14 md:py-20 bg-akasha-gray-4/30"
      aria-labelledby="campaign-curriculum-heading"
    >
      <div className="section max-w-5xl">
        <header className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="eyebrow text-akasha-orange">The curriculum</span>
          <h2
            id="campaign-curriculum-heading"
            className="mb-4"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 300 }}
          >
            What you will learn
          </h2>
          <span className="gold-rule" />
          <p className="font-body text-akasha-gray-1 mt-5 text-base md:text-lg leading-relaxed">
            The 200 hours are split across four pillars: daily practice,
            grounded theory, teacher training, and community.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {SECTIONS.map((s) => (
            <div
              key={s.section}
              className="bg-akasha-white border border-akasha-gray-4 rounded-sm p-6 md:p-7"
            >
              <p
                className="text-[10px] md:text-[11px] font-body uppercase tracking-[0.28em] text-akasha-orange mb-4"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                {s.section}
              </p>
              <ul className="space-y-2.5 font-body text-akasha-gray-1 text-sm md:text-[15px] leading-relaxed">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-akasha-green flex-none mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
