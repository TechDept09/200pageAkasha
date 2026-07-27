// Section 11a from the live Wix 80-Hour Advanced Hatha & Pranayama page:
// "incredible 7 bonuses" dark cards with mint BONUS tags, orange value
// badges, pricing close, and mint ENROLL NOW.
const MINT = '#75C8AE';
const ORANGE = '#E5771E';
const GREY_BG = '#FFFFFF';
const CARD_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const ENROLL_URL =
  'https://www.akashayogaacademy.com/80-hr-online-enroll-now-hatha-and-pranayama';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const BASE = 'https://static.wixstatic.com/media/';

const BONUSES = [
  {
    title: 'The 8 Limbs of Yoga',
    value: 99,
    img:
      BASE +
      'cd7168_6845d74e3e7648a59fbba331d1f90390~mv2.png/v1/crop/x_104,y_0,w_554,h_480/fill/w_480,h_416,al_c,q_85,enc_avif,quality_auto/The-8-Limbs-of-Yoga.png',
    body: [
      'Experience the holistic depth of Yoga beyond the mat.',
      'In this workshop we explore the heart-opening wisdom of the Yoga Sutras of Patanjali. We discover the roots of this ancient practice, and apply the pragmatic tips into our modern life.',
    ],
  },
  {
    title: 'Resume Yoga Teacher (CV)',
    value: 40,
    img:
      BASE +
      'cd7168_846c1ebaabe74c48ad10798e4fb51dc0~mv2.png/v1/crop/x_140,y_69,w_796,h_666/fill/w_480,h_402,al_c,q_85,enc_avif,quality_auto/resume.png',
    body: [
      'An important and helpful component in seeking yoga teaching opportunities is a professional resume. A resume helps to give potential employers a snapshot of your background and mission statement to help you get your foot in the door for an interview or audition',
    ],
  },
  {
    title: 'Meditation collection',
    value: 35,
    img:
      BASE +
      'cd7168_1f97997fe2e44912bb62b8a0f9d6111d~mv2.png/v1/crop/x_0,y_7,w_1080,h_925/fill/w_480,h_411,al_c,q_85,enc_avif,quality_auto/meditation-phone.png',
    body: [
      'Set of 24 guided Audio Meditations. Decrease stress, increase focus and be present in the moment',
    ],
  },
  {
    title: 'Yoga Liability Waiver',
    value: 30,
    img:
      BASE +
      'cd7168_08eef431524a42c4a98408d6dd08bb25~mv2.png/v1/crop/x_12,y_0,w_576,h_444/fill/w_480,h_370,al_c,q_85,enc_avif,quality_auto/Waiver.png',
    body: [
      'This waiver template is an essential document for any Yoga teacher that informs the students of the risks involved in practice and can also protect you and your business from any legal issues.',
    ],
  },
  {
    title: 'Cover Letter Yoga Teacher',
    value: 30,
    img:
      BASE +
      'cd7168_36168601328241e2b8834a819eed7890~mv2.png/v1/crop/x_146,y_120,w_770,h_574/fill/w_480,h_358,al_c,q_85,enc_avif,quality_auto/cover-letter.png',
    body: [
      'A well-written cover letter will show potential yoga employers that you are organized and professional. It will also help them understand why you are a good fit for the position. Cover letters allow potential employers to understand who you are and encourage them to read your resume.',
    ],
  },
  {
    title: 'Intake Form New Clients',
    value: 30,
    img:
      BASE +
      'cd7168_3065a79714e145dd88bb760d86a05413~mv2.png/v1/crop/x_0,y_50,w_1080,h_960/fill/w_480,h_427,al_c,q_85,enc_avif,quality_auto/Intake-form.png',
    body: [
      'You can use this sample New Yoga Client Intake and Health History Form to learn about their health history background. It is recommended to have a complete health history so you can address key issues and make sure you focus on what matters to your students.',
    ],
  },
  {
    title: 'Yearly Planner 2026',
    value: 25,
    img:
      BASE +
      'cd7168_d87ed6bcfe67414ca83cc088f7797916~mv2.png/v1/crop/x_0,y_140,w_1080,h_940/fill/w_480,h_418,al_c,q_85,enc_avif,quality_auto/Planner-mockup.png',
    body: [
      'Set a vision for your life and intentions with this monthly planner.',
      'Calendar pages provide room for notes and schedule-keeping. Filled with inspiring images, quotes, and reflection pages to give yourself the space to go deeper and reflect on why you strive for those things on your list and what motivates you to keep going.',
    ],
  },
];

function BonusCard({ index, title, value, img, body }) {
  return (
    <div className="relative max-w-4xl mx-auto mt-14 md:mt-16 first:mt-10">
      <span
        className="absolute -top-4 left-4 md:-left-6 z-20 text-akasha-white font-body uppercase tracking-[0.12em] text-xs md:text-sm px-4 py-2"
        style={{ backgroundColor: MINT }}
      >
        Bonus #{index}
      </span>
      <span
        className="absolute -top-6 right-6 md:right-10 z-20 flex flex-col items-center justify-center rounded-full text-akasha-white text-center leading-tight w-16 h-16 md:w-20 md:h-20"
        style={{ backgroundColor: ORANGE }}
      >
        <span className="font-heading text-sm md:text-base" style={{ fontWeight: 400 }}>
          US${value}
        </span>
        <span className="font-body text-[9px] md:text-[10px] uppercase tracking-wide opacity-90">
          Value
        </span>
      </span>
      <div
        className="grid md:grid-cols-2 gap-6 md:gap-8 items-center rounded-sm border border-akasha-gray-4 shadow-sm px-6 md:px-12 py-10 md:py-12"
        style={{ backgroundColor: CARD_BG }}
      >
        <div>
          <h3
            className="font-heading text-akasha-gray-1"
            style={{ fontSize: 'clamp(1.35rem, 2.6vw, 1.85rem)', fontWeight: 300 }}
          >
            {title}
          </h3>
          <div className="mt-4 space-y-3 font-body text-akasha-gray-1 text-sm md:text-[15px] leading-relaxed">
            {body.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={img}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full max-w-sm h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default function Bonuses80Hatha() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-[8%] w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300, color: '#6E6E6D' }}
        >
          Plus receive these incredible 7 bonuses!
        </h2>

        <div className="mt-4 md:mt-6">
          {BONUSES.map((b, i) => (
            <BonusCard key={b.title} index={i + 1} {...b} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center max-w-2xl mx-auto">
          <div
            className="space-y-1 font-heading"
            style={{ fontSize: 'clamp(1.15rem, 2.4vw, 1.5rem)', fontWeight: 300 }}
          >
            <p style={{ color: TEXT }}>Regular Tuition US$600</p>
            <p style={{ color: TEXT }}>+7 Bonuses worth US$289</p>
            <p style={{ color: ORANGE, fontWeight: 700 }}>= Total Value US$889</p>
          </div>

          <p
            className="font-heading mt-8"
            style={{ fontSize: 'clamp(1.35rem, 3vw, 2rem)', fontWeight: 400, color: '#6E6E6D' }}
          >
            33% Summer Wellness Discount
          </p>
          <p
            className="font-heading mt-3"
            style={{ color: ORANGE, fontSize: 'clamp(1.5rem, 3.4vw, 2.3rem)', fontWeight: 700 }}
          >
            Start today for only US$399
          </p>
          <p className="font-body mt-3 text-sm" style={{ color: ORANGE }}>
            * Offer until July 31.
          </p>
          <p
            className="font-body mt-6"
            style={{
              fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
              color: TEXT,
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            For a limited time, the bonus is FREE and included in the 80-Hour Advanced
            Hatha &amp; Pranayama Online TTC
          </p>

          <div className="mt-8">
            <a
              href={ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-akasha-white uppercase tracking-[0.12em] px-10 py-3.5 font-body hover:shadow-lg transition-all"
              style={{
                backgroundColor: MINT,
                borderRadius: 20,
                fontWeight: 700,
                fontSize: '0.95rem',
                boxShadow: '2px 2px 1px rgba(86, 149, 130, 0.88)',
              }}
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
