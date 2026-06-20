const BADGE_BASE =
  'https://static.wixstatic.com/media/cd7168_';

const primaryBadges = [
  {
    name: 'Facebook',
    logo: `${BADGE_BASE}7b6164b634b94bbe9829759473e99757~mv2.webp/v1/fill/w_232,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/72.webp`,
    rating: '4.8/5.0',
    count: 'based on 242 reviews',
  },
  {
    name: 'Yoga Alliance',
    logo: `${BADGE_BASE}b1d2922fd0ad4e90afe1be8f1cdc36b8~mv2.webp/v1/fill/w_210,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/71.webp`,
    rating: '4.93/5.0',
    count: 'based on 359 reviews',
  },
  {
    name: 'Google',
    logo: `${BADGE_BASE}609b9ef5946e43f092238e0f12fe58c6~mv2.webp/v1/fill/w_232,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/73.webp`,
    rating: '4.9/5.0',
    count: 'based on 163 reviews',
  },
];

const secondaryBadges = [
  {
    name: 'BookRetreats',
    logo: `${BADGE_BASE}b212e180eec74c65bfc539e91f3383bd~mv2.webp/v1/fill/w_232,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logos%20%20(26).webp`,
    stars: 5,
  },
  {
    name: 'BookYogaRetreats by Tripaneer',
    logo: `${BADGE_BASE}6a1d0b2b497b45a9a1416c9cd206ba86~mv2.webp/v1/fill/w_232,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logos%20%20(25).webp`,
    stars: 4.5,
  },
];

// Real Akasha alumni with quote + profile photo sourced directly from
// akashayogaacademy.com (200H, 80H Yin, and 300H pages). Photos use Wix
// CDN. Order keeps the original cadence from the page.
const quotes = [
  { text: 'They show you how to slow down, how to open up, and how to love yourself.', author: 'Anna Kotaba', country: 'Poland',
    photo: 'https://static.wixstatic.com/media/cd7168_51660736472d4c7fb23211b0196e64ff~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_51660736472d4c7fb23211b0196e64ff~mv2.jpg' },
  { text: 'It is amazing with how much love & authenticity you get prepared to be a Yoga Teacher.', author: 'Pierre Mayer', country: 'Germany',
    photo: 'https://static.wixstatic.com/media/cd7168_6e281e03fb4e47d98065a824f79802c4~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_6e281e03fb4e47d98065a824f79802c4~mv2.jpg' },
  { text: 'A fantastic experience. Connecting on a daily basis with instructors and participants from around the world was amazing.', author: 'Sayla', country: 'United Kingdom',
    photo: 'https://static.wixstatic.com/media/cd7168_9919c2c185274916837e14bc5bd02ac3~mv2.jpeg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_9919c2c185274916837e14bc5bd02ac3~mv2.jpeg' },
  { text: 'From the bottom of my heart, I really like to encourage anyone to join the Akasha family. The change of my life is amazing.', author: 'Nici Kellerman', country: 'Australia',
    photo: 'https://static.wixstatic.com/media/cd7168_a7573a60139a43de8c5e8ba03c884642~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_a7573a60139a43de8c5e8ba03c884642~mv2.jpg' },
  { text: 'Akasha instructors are incredible people & mentors, inspiring, nurturing, and so authentic.', author: 'Lauren Torralba', country: 'United States',
    photo: 'https://static.wixstatic.com/media/cd7168_45e9dca9bd744e778d2b63d53f975753~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_45e9dca9bd744e778d2b63d53f975753~mv2.jpg' },
  { text: 'It is amazing how they share their resources & knowledge with you to find your own calling.', author: 'Mohit Jain', country: 'India/Dubai',
    photo: 'https://static.wixstatic.com/media/cd7168_fca73a6208a14626ad04d55ceb4157cb~mv2.jpg/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_fca73a6208a14626ad04d55ceb4157cb~mv2.jpg' },
];

function Stars({ value }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <span className="text-akasha-gold text-sm tracking-[0.15em] inline-flex items-center justify-center">
      {'★'.repeat(full)}
      {half ? '½' : ''}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-akasha-gray-4/30">
      <div className="section">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            className="uppercase tracking-[0.18em]"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 300 }}
          >
            We know this is a big step for you
          </h2>
          <p className="script text-akasha-orange mt-3" style={{ fontSize: '1.6rem' }}>
            So we do everything to make this the best investment of your life
          </p>
          <span className="gold-rule" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 max-w-4xl mx-auto items-end mb-12">
          {primaryBadges.map((b) => (
            <div key={b.name} className="flex flex-col items-center text-center">
              <img
                src={b.logo}
                alt={b.name}
                className="h-12 md:h-14 w-auto object-contain mb-3"
                loading="lazy"
              />
              <span className="text-akasha-gold text-base tracking-[0.15em]">★★★★★</span>
              <p className="text-[12px] font-body text-akasha-gray-1 mt-2 leading-snug">
                <strong className="text-akasha-black font-medium">{b.rating}</strong> {b.count}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-2xl mx-auto items-end mb-12">
          {secondaryBadges.map((b) => (
            <div key={b.name} className="flex flex-col items-center text-center">
              <img
                src={b.logo}
                alt={b.name}
                className="h-10 md:h-12 w-auto object-contain mb-3"
                loading="lazy"
              />
              <Stars value={b.stars} />
            </div>
          ))}
        </div>

        <p className="text-center text-sm font-body text-akasha-gray-1 max-w-2xl mx-auto leading-relaxed mb-16">
          Over the past{' '}
          <strong className="text-akasha-black font-medium">15 years</strong>, we empowered more than{' '}
          <strong className="text-akasha-black font-medium">1,100 awesome Yoga Instructors</strong>{' '}
         , who are now successfully teaching on all{' '}
          <strong className="text-akasha-black font-medium">6 continents</strong>.
          <br />
          <span className="italic">Countless genuine reviews speak for themselves.</span>
        </p>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow">From the Akasha Family</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className="bg-akasha-white border border-akasha-gray-4 rounded-sm p-7 text-center flex flex-col"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-akasha-gray-4">
                <img
                  src={q.photo}
                  alt={q.author}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="text-akasha-gold text-xs tracking-[0.2em] block mb-4">
                ★★★★★
              </span>
              <blockquote
                className="font-heading text-akasha-black/85 text-[15px] leading-relaxed mb-6 flex-1"
                style={{ fontWeight: 300 }}
              >
                &ldquo;{q.text}&rdquo;
              </blockquote>
              <figcaption>
                <p className="text-[11px] font-body text-akasha-gray-1 uppercase tracking-[0.25em]">
                  {q.author}, {q.country}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
