// Section 16a from the live Wix 80-Hour Meditation page: "incredible 7
// bonuses" dark cards with mint BONUS tags, orange value badges, pricing
// close, and mint ENROLL NOW.
const MINT = '#75C8AE';
const ORANGE = '#E5771E';
const GREY_BG = '#FFFFFF';
const CARD_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const ENROLL_URL =
  'https://www.akashayogaacademy.com/enroll-now-80-hr-online-meditation-teacher-training';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const BASE = 'https://static.wixstatic.com/media/';

const BONUSES = [
  {
    title: 'Mantra Meditation with Devdas',
    value: 90,
    img:
      BASE +
      'cd7168_273ee3c241d44c7ba08c266e1817ef16~mv2.png/v1/fill/w_480,h_550,al_c,q_85,enc_avif,quality_auto/devdas-devices.png',
    body: 'Dive into tranquility with Devdas through eight 15-minute sessions of mantra meditation. Experience the power of sound, find inner peace, and elevate spiritually. Simple, profound, and designed for everyone. Let each mantra resonate with you.',
  },
  {
    title: 'Spiritual Heart Meditation with Kirsten',
    value: 90,
    img:
      BASE +
      'cd7168_23c478e4c2a145eabef0042d7f02adf1~mv2.png/v1/crop/x_0,y_656,w_3458,h_2802/fill/w_560,h_454,al_c,q_85,enc_avif,quality_auto/kirsten-devices.png',
    body: 'Discover inner peace with Kirsten in eight sessions of 15-minute "Spiritual Heart Meditation". Each session taps into breath awareness, heart centering and Self-inquiry. Designed for all, these moments promise deep connection and serenity. Engage with each session and deeply resonate with the core of being.',
  },
  {
    title: 'Spiritual Heart Meditation with Burkhard',
    value: 90,
    img:
      BASE +
      'cd7168_274d9706d1e54f92883472d0daf68cec~mv2.png/v1/crop/x_127,y_407,w_3204,h_3051/fill/w_520,h_495,al_c,q_85,enc_avif,quality_auto/burkhard-devices.png',
    body: 'Embark on a transformative journey in eight 30-minute sessions of "Spiritual Heart Meditation" with Burkhard. Delve deeper into the essence of your heart, finding clarity and serenity. Suitable for everyone, these meditations provide a pathway to inner harmony. Allow Burkhard to guide you, and connect with your heart\'s true rhythm.',
  },
  {
    title: 'Going Deeper - Poetry & Quotation Booklet',
    value: 50,
    img:
      BASE +
      'cd7168_ad3b00fea28640859612a16d68e7cdc8~mv2.png/v1/crop/x_0,y_31,w_2592,h_2310/fill/w_520,h_463,al_c,q_85,enc_avif,quality_auto/going-deeper.png',
    body: 'Dive into a world of profound words with the "Going Deeper" booklet. A curated collection of poetry and quotations that inspire introspection and evoke deep emotions. Suitable for reflective moments or peaceful reading, let each page resonate with your thoughts and feelings. A journey through words, crafted to touch the soul.',
  },
  {
    title: 'Self-Inquiry and the Heart of Oneness Workshop',
    value: 150,
    img:
      BASE +
      'cd7168_4eb9a8b5d30643ef804478da486140e8~mv2.png/v1/crop/x_0,y_65,w_5000,h_3856/fill/w_600,h_463,al_c,q_85,enc_avif,quality_auto/self-inquiry.png',
    body: 'Dive into introspection, explore your true self, and discover the interconnectedness of all beings. This workshop offers guided sessions that challenge and nurture, leading you toward a deeper understanding of unity. Perfect for those seeking inner clarity and a connection with the universal whole. Join us, and unravel the essence of oneness within.',
  },
  {
    title: 'Mudras Flash Card Set',
    value: 50,
    img:
      BASE +
      'cd7168_3e17b97b966c4e4baef403ce42282d1f~mv2.png/v1/crop/x_180,y_0,w_2709,h_2092/fill/w_560,h_432,al_c,q_85,enc_avif,quality_auto/mudras.png',
    body: "Unfold the power of hand gestures with the 'Mudras Flash Card Set.' Dive into ancient practices, discovering each mudra's significance and benefits. These cards offer a visual guide, simplifying the mastery of each gesture. Ideal for both novices and seasoned practitioners, elevate your meditation and yoga routines. Engage, learn, and transform through the art of mudras.",
  },
  {
    title: 'Lucid Dreaming Playlist',
    value: 30,
    img:
      BASE +
      'cd7168_d58f60d7dfb049f39d549e788a79ccbc~mv2.png/v1/crop/x_0,y_88,w_1080,h_904/fill/w_520,h_435,al_c,q_85,enc_avif,quality_auto/lucid-dreaming.png',
    body: "Journey through the realms of consciousness with the 'Lucid Dreaming Playlist.' This curated collection of tracks is designed to guide and enhance your dream explorations, facilitating vivid and controlled dream experiences. Ideal for both beginners and avid dreamers, let each melody transport you to new dimensions. Drift, dream, and delve deeper with every listen. Embrace the adventure of the mind's nocturnal wanderings.",
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
          <p className="mt-4 font-body text-akasha-gray-1 text-sm md:text-[15px] leading-relaxed">
            {body}
          </p>
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

export default function Bonuses80Meditation() {
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
          Plus these incredible 7 bonuses!
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
            <p style={{ color: TEXT }}>+7 Bonuses worth US$550</p>
            <p style={{ color: ORANGE, fontWeight: 700 }}>= Total Value US$1150</p>
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
            For a limited time, all the bonuses are FREE and included in the 80-Hour
            Meditation Online Yoga Teacher Training Course
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
