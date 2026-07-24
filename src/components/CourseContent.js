// "Course Content" section, matching the live Wix 200-Hour page: the exact
// hour breakdown grouped into four categories as stacked bullet lists, over
// the faint lotus watermark, closing with the green Enroll CTA. Copy is
// verbatim from the live source.
const GREEN = '#5FBFA6';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const B = ({ children }) => (
  <strong className="font-semibold text-akasha-black">{children}</strong>
);

const GROUPS = [
  {
    label: 'Practice',
    items: ['60 Hours of Asana', '20 Hours of Pranayama', '15 Hours of Meditation'],
  },
  {
    label: 'Theory',
    items: [
      '40 Hours of Yoga Anatomy & Posture Study',
      '50 Hours of lectures on Applied Philosophy & History',
      'Teaching Techniques & Instructor Skills',
    ],
  },
  {
    label: 'Teacher Education',
    items: [
      <>
        <B>Personally Supervised Practicum</B> Assignments with:
      </>,
      'Guided Prep, Video Recording & One-on-One Feedback',
      'Marketing, Networking & How to Get Started',
    ],
  },
  {
    label: 'Personal Guidance & Fun',
    items: [
      <>
        Various <B>Interactive Elements</B> such as Daily Live Q&amp;As
      </>,
      <>
        <B>Community Forums</B>, Private Facebook Group & Chats
      </>,
      <>
        <B>Bhajan Chanting</B> & so much more
      </>,
    ],
  },
];

export default function CourseContent() {
  return (
    <section id="course-content" className="relative overflow-hidden bg-akasha-white">
      {/* Faint lotus watermark, bleeding off the left edge */}
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-140px] top-1/2 -translate-y-1/2 w-[420px] md:w-[620px] opacity-[0.12]"
      />

      <div className="section relative z-10 py-16 md:py-24 text-center">
        <h2
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.16em]"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          Course Content
        </h2>
        <p className="max-w-2xl mx-auto mt-6 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
          Sign-up for our Yoga Alliance certified 200-Hour Online Yoga Teacher
          Training today, and immediately access:
        </p>

        <div className="max-w-2xl mx-auto mt-10 md:mt-12 space-y-7 text-left">
          {GROUPS.map((group) => (
            <div key={group.label}>
              <p className="font-heading uppercase tracking-[0.14em] text-akasha-black" style={{ fontWeight: 500 }}>
                {group.label}
              </p>
              <ul className="mt-2 space-y-1.5 font-body text-akasha-gray-1 leading-relaxed">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-akasha-orange mt-[0.45rem] flex-none w-1.5 h-1.5 rounded-full bg-akasha-orange" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="font-body text-sm text-akasha-gray-2 italic">
            *Mentor Support only Available with Our Premium Plan
          </p>
        </div>

        {/* Green CTA */}
        <div className="mt-12 md:mt-14">
          <a
            href="/200h-essential/enroll"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: GREEN, fontWeight: 600 }}
          >
            Enroll Now
          </a>
          <p className="mt-3 font-body text-xs uppercase tracking-[0.2em] text-akasha-gray-2">
            Over 70% Off Until July 31st
          </p>
        </div>
      </div>
    </section>
  );
}
