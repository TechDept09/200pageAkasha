// 'Enroll Today & Get 14 Free Bonuses' grid. Bonus content is
// verbatim from akashayogaacademy.com/200hr-yoga-teacher-training-online:
// 'Design Your Schedule' as the intro item + 13 numbered bonuses.
// Total value US$1,130 comes directly from the source header.

// Small stroke-based icon renderer, matches the reference screenshot's
// outlined bonus icons. currentColor picks up the orange text colour
// so the whole set stays on Akasha palette.
function Icon({ children, size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const ICONS = {
  calendar: (
    <Icon>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </Icon>
  ),
  video: (
    <Icon>
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
    </Icon>
  ),
  zap: (
    <Icon>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </Icon>
  ),
  layers: (
    <Icon>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </Icon>
  ),
  grid: (
    <Icon>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </Icon>
  ),
  type: (
    <Icon>
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" y1="20" x2="15" y2="20" />
      <line x1="12" y1="4" x2="12" y2="20" />
    </Icon>
  ),
  image: (
    <Icon>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </Icon>
  ),
  bulb: (
    <Icon>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.5c1 .8 1.5 1.8 1.5 2.5v1h5v-1c0-.7.5-1.7 1.5-2.5A7 7 0 0 0 12 2z" />
    </Icon>
  ),
  heart: (
    <Icon>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </Icon>
  ),
  book: (
    <Icon>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </Icon>
  ),
  shield: (
    <Icon>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </Icon>
  ),
  file: (
    <Icon>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </Icon>
  ),
  mail: (
    <Icon>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22 6 12 13 2 6" />
    </Icon>
  ),
  clipboard: (
    <Icon>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
    </Icon>
  ),
};

const BONUSES = [
  {
    icon: 'calendar',
    name: 'Design Your Schedule',
    value: 99,
    desc:
      'Receive a tailor-made, personalized schedule. Get empowered to complete this course successfully. This helpful customization service allows you to fit our flexible course into your daily life.',
  },
  {
    icon: 'video',
    name: 'How to Teach Yoga Online',
    value: 299,
    desc:
      'In this course Akasha Yoga shares their first-hand experience of how to bring your Yoga classes online. Receive all the audio, lighting, and camera tricks and tips to make your offerings online a successful experience.',
  },
  {
    icon: 'zap',
    name: 'Journey Through the 7 Chakras',
    value: 199,
    desc:
      'In this introduction workshop, we present the system of the famous 7 Chakras. You will receive a clear understanding of the classical roots and modern interpretations. In this comprehensive overview, you will learn about energetic aspects, corresponding emotions, and psychological attributes.',
  },
  {
    icon: 'layers',
    name: 'Holistic Well-Being Workshop',
    value: 229,
    desc:
      "In this eye-opening workshop, we introduce the yogic system of the 5 Bodies. You will benefit a lot from this ancient holistic description of the human being, formulated 2500 years ago, yet fully relevant in our modern times. You will walk away with a clear & practical understanding of the different layers & aspects of our being, ready to apply this wisdom into your daily life.",
  },
  {
    icon: 'grid',
    name: 'Asana Study Flashcards',
    value: 35,
    desc:
      "These Asana study flashcards were made especially for you to memorize the teaching cues. The Asanas in this card deck are part of Akasha's 200-Hour Teacher Training.",
  },
  {
    icon: 'type',
    name: 'Sanskrit Study Flashcards',
    value: 35,
    desc:
      "These Sanskrit study flashcards were made especially for you to memorize the Sanskrit names of the Asanas. The cards in this deck are part of Akasha's 200-Hour Teacher Training.",
  },
  {
    icon: 'image',
    name: 'Poster Asana Poses',
    value: 69,
    desc:
      "Poster with all the Asana's covered in our 200-Hr Yoga TTC in high image quality. Perfect to show case at home or your Yoga studio.",
  },
  {
    icon: 'bulb',
    name: 'The Art & Science of Teaching',
    value: 108,
    desc:
      'Unite ancient wisdom with modern methods. Elevate your teaching with a fusion of yogic artistry and evidence-based science. Perfect for aspiring and seasoned instructors.',
  },
  {
    icon: 'heart',
    name: 'Yoga in Daily Life',
    value: 86,
    desc:
      "Discover 'Yoga in Daily Life': our bonus book delving into Yama & Niyama, yoga's ethical foundations. Learn to integrate these virtues into everyday life & practice.",
  },
  {
    icon: 'book',
    name: 'Scripture Studies Book',
    value: 39,
    desc:
      'Explore timeless pearls of wisdom in our Scripture Studies Book.',
  },
  {
    icon: 'shield',
    name: 'Yoga Liability Waiver',
    value: 29,
    desc:
      'This waiver template is an essential document for any Yoga teacher that informs the students of the risks involved in practice and can also protect you and your business from any legal issues.',
  },
  {
    icon: 'file',
    name: 'Resume Yoga Teacher (CV)',
    value: 19,
    desc:
      'An important and helpful component in seeking yoga teaching opportunities is a professional resume. A resume helps to give potential employers a snapshot of your background and mission statement to help you get your foot in the door for an interview or audition.',
  },
  {
    icon: 'mail',
    name: 'Cover Letter Yoga Teacher',
    value: 19,
    desc:
      'A well-written cover letter will show potential yoga employers that you are organized and professional. It will also help them understand why you are a good fit for the position. Cover letters allow potential employers to understand who you are and encourage them to read your resume.',
  },
  {
    icon: 'clipboard',
    name: 'Intake Form New Clients',
    value: 35,
    desc:
      'You can use this sample New Yoga Client Intake and Health History Form to learn about their health history background. It is recommended to have a complete health history so you can address key issues and make sure you focus on what matters to your students.',
  },
];

// Verbatim from the source header on
// akashayogaacademy.com/200hr-yoga-teacher-training-online. Not a
// sum of the item values so it stays aligned with what marketing
// already publishes on the live page.
const TOTAL_VALUE_LABEL = 'US$1,130';

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
            Over {TOTAL_VALUE_LABEL} value
          </p>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {BONUSES.map((b) => (
            <li key={b.name} className="flex items-start gap-4">
              <span className="flex-none w-11 h-11 rounded-full border border-akasha-orange/70 bg-akasha-orange/10 text-akasha-orange flex items-center justify-center">
                {ICONS[b.icon]}
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
