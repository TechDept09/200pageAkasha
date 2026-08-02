'use client';

// Five-chapter student journey through the 200-Hour Essential.
// Rendered as a winding-path layout so the visitor feels the sequence
// visually rather than scanning another six-card grid.
//
// Copy is sourced from Akasha live content:
//   Ch 1 & 2 & 5   → Steps.js on the course-pages branch
//   Ch 3           → self-paced format shared across course-pages copy
//   Ch 4           → CampaignBenefits.js "3 Live Zoom Sessions per week"
//
// No personal-mentor language anywhere per Ayu's Aug-Oct campaign
// compliance ("Essential is an independent, self-paced program.
// It does not include a personal mentor, private coaching, or
// individualized feedback.").

const CHAPTERS = [
  {
    n: '01',
    tag: 'Day 1',
    title: 'Enroll and unlock everything',
    body:
      'One payment opens the door. Every video lesson, training manual, and community channel becomes yours the moment the enrollment clears.',
    side: 'left',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    n: '02',
    tag: 'Week 1',
    title: 'Join the Akasha family',
    body:
      'Introduce yourself in the community and settle into the rhythm of the training alongside fellow students already on the path from six continents.',
    side: 'right',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    n: '03',
    tag: 'Self-paced',
    title: 'Learn on your own schedule',
    body:
      'Move through 200+ video lessons filmed inside our BALIWOOD studio at whatever pace fits your life. Early mornings, late nights, weekends. Pause and resume as often as you need.',
    side: 'left',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
  },
  {
    n: '04',
    tag: '3 sessions per week',
    title: 'Practice live, together',
    body:
      'Join 3 Live Zoom classes each week with the training teachers and fellow students. Move through the practice in real time, ask questions, and feel the rhythm of a class held from Bali.',
    side: 'right',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M4.93 4.93l2.83 2.83M2 12h4M4.93 19.07l2.83-2.83M12 22v-4M19.07 19.07l-2.83-2.83M22 12h-4M19.07 4.93l-2.83 2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    n: '05',
    tag: 'The Beginning',
    title: 'Graduate Yoga Alliance certified',
    body:
      'Complete your final assessment and receive your Akasha certificate. Register with Yoga Alliance as an RYT-200, a credential welcomed in more than 100 countries, and step into your purpose.',
    side: 'left',
    final: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
];

export default function YourPath() {
  return (
    <section
      className="py-14 md:py-20 bg-akasha-gray-4/30 relative overflow-hidden"
      aria-labelledby="your-path-heading"
      id="your-path"
    >
      <div className="section max-w-3xl text-center relative">
        <span className="eyebrow text-akasha-orange">The Akasha experience</span>
        <h2
          id="your-path-heading"
          style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 300 }}
        >
          Your Path, Chapter by Chapter
        </h2>
        <span className="gold-rule" />
        <p className="font-body text-akasha-gray-1 mt-5 text-base md:text-[17px] leading-relaxed">
          Five chapters in the life of an Akasha student, from the day
          you enroll to the day you walk out a Yoga Alliance certified
          teacher.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-14 md:mt-20 relative px-4">
        {/* Winding SVG path in the center */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-16 bottom-16 left-8 md:left-1/2 md:-translate-x-1/2 w-[60px] md:w-[200px] z-0"
        >
          <svg
            viewBox="0 0 200 1000"
            preserveAspectRatio="none"
            className="w-full h-full block"
          >
            <defs>
              <linearGradient id="yourPathGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E7BC5D" />
                <stop offset="50%" stopColor="#d97a3c" />
                <stop offset="100%" stopColor="#1a1a1a" />
              </linearGradient>
            </defs>
            <path
              d="M 100 0
                 C 100 90, 40 140, 100 220
                 C 160 300, 40 370, 100 450
                 C 160 530, 40 610, 100 690
                 C 160 770, 100 900, 100 1000"
              fill="none"
              stroke="url(#yourPathGrad)"
              strokeWidth="2.5"
              strokeDasharray="8 10"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Chapters */}
        <ol className="relative z-10 flex flex-col gap-10 md:gap-14 list-none">
          {CHAPTERS.map((c) => (
            <li
              key={c.n}
              className="grid grid-cols-[60px_1fr] md:grid-cols-[1fr_120px_1fr] gap-4 md:gap-5 items-center"
            >
              {/* Left cell — content when side=left, empty when side=right */}
              {c.side === 'left' ? (
                <div
                  className={`hidden md:block ${
                    c.final ? '' : ''
                  }`}
                >
                  <Card chapter={c} />
                </div>
              ) : (
                <div className="hidden md:block" />
              )}

              {/* Station dot (centered on desktop, left column on mobile) */}
              <div className="flex justify-start md:justify-center items-center relative">
                <div
                  className={`w-13 h-13 md:w-16 md:h-16 rounded-full flex items-center justify-center relative z-10 transition-all duration-500 ${
                    c.final
                      ? 'bg-akasha-black border-2 border-akasha-gold shadow-[0_0_0_8px_var(--tw-shadow-color,#f4ede0),0_0_0_12px_rgba(231,188,93,0.15)]'
                      : 'bg-akasha-orange border-2 border-akasha-orange shadow-[0_0_0_8px_rgba(245,235,215,1),0_6px_18px_-6px_rgba(0,0,0,0.18)]'
                  }`}
                  style={{ width: 60, height: 60 }}
                >
                  <span
                    className={`absolute -top-8 left-1/2 -translate-x-1/2 hidden md:block whitespace-nowrap text-[11px] font-body uppercase tracking-[0.28em] text-akasha-gray-1 font-medium`}
                  >
                    Chapter {c.n}
                  </span>
                  <span
                    className={`inline-flex items-center justify-center ${
                      c.final ? 'text-akasha-gold' : 'text-akasha-white'
                    }`}
                    style={{ width: 26, height: 26 }}
                  >
                    {c.icon}
                  </span>
                </div>
              </div>

              {/* Mobile-only card (both sides render here) OR right-side desktop card */}
              <div className="md:hidden">
                <Card chapter={c} mobile />
              </div>
              {c.side === 'right' ? (
                <div className="hidden md:block">
                  <Card chapter={c} />
                </div>
              ) : (
                <div className="hidden md:block" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Card({ chapter, mobile = false }) {
  const alignRight = chapter.side === 'left' && !mobile;
  return (
    <article
      className={`rounded-sm border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        chapter.final
          ? 'bg-akasha-black border-akasha-black text-akasha-white hover:border-akasha-gold'
          : 'bg-akasha-white border-akasha-gray-4 hover:border-akasha-orange'
      } ${alignRight ? 'md:text-right' : 'md:text-left'}`}
    >
      <span
        className={`md:hidden inline-block text-[11px] font-body uppercase tracking-[0.28em] font-semibold mb-2 ${
          chapter.final ? 'text-akasha-gold' : 'text-akasha-orange-dark'
        }`}
      >
        Chapter {chapter.n}
      </span>
      <h3
        className={`font-heading text-xl md:text-2xl mb-2 leading-snug ${
          chapter.final ? 'text-akasha-white' : 'text-akasha-black'
        }`}
        style={{ fontWeight: 400 }}
      >
        {chapter.title}
      </h3>
      <p
        className={`font-body text-sm md:text-[15px] leading-relaxed mb-3 ${
          chapter.final ? 'text-akasha-white/75' : 'text-akasha-gray-1'
        }`}
      >
        {chapter.body}
      </p>
      <span
        className={`inline-block text-[10px] font-body uppercase tracking-[0.22em] font-semibold px-3 py-1 rounded-full ${
          chapter.final
            ? 'text-akasha-gold bg-akasha-gold/15'
            : 'text-akasha-orange-dark bg-akasha-orange/10'
        }`}
      >
        {chapter.tag}
      </span>
    </article>
  );
}
