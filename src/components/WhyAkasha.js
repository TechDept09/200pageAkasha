import { useTier } from '@/lib/TierContext';

// "We Know This Is a Big Step for You" section, matching the live Wix
// 200-Hour page: an orange script promise, the review scores across five
// platforms (with the same star graphics Wix uses), a closing credibility
// line, and the green Enroll CTA, over the faint lotus watermark.
const GREEN = '#5FBFA6';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const STARS_5 =
  'https://static.wixstatic.com/media/c15a18_8fa0b772c88940c48272a4b4bd8b70d1~mv2.png/v1/fill/w_200,h_48,al_c,q_85,enc_avif,quality_auto/5STARS.png';
const STARS_48 =
  'https://static.wixstatic.com/media/c15a18_f12cd7a724664c91ba9269f6d94ffe41~mv2.png/v1/fill/w_200,h_48,al_c,q_85,enc_avif,quality_auto/4-8STARS.png';
const STARS_45 =
  'https://static.wixstatic.com/media/c15a18_5eb16904ecc845d8af84aa36df5a615b~mv2.png/v1/fill/w_200,h_48,al_c,q_85,enc_avif,quality_auto/4-5stars.png';

const BADGE_BASE = 'https://static.wixstatic.com/media/cd7168_';

const primaryRatings = [
  {
    platform: 'Facebook',
    logo: `${BADGE_BASE}7b6164b634b94bbe9829759473e99757~mv2.webp/v1/fill/w_232,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/72.webp`,
    stars: STARS_48,
    score: '4.8/5.0 based on 242 reviews',
  },
  {
    platform: 'Yoga Alliance',
    logo: `${BADGE_BASE}b1d2922fd0ad4e90afe1be8f1cdc36b8~mv2.webp/v1/fill/w_210,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/71.webp`,
    stars: STARS_5,
    score: '4.93/5.0 based on 359 reviews',
  },
  {
    platform: 'Google',
    logo: `${BADGE_BASE}609b9ef5946e43f092238e0f12fe58c6~mv2.webp/v1/fill/w_232,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/73.webp`,
    stars: STARS_5,
    score: '4.9/5.0 based on 163 reviews',
  },
];

const secondaryRatings = [
  {
    platform: 'BookRetreats',
    logo: `${BADGE_BASE}b212e180eec74c65bfc539e91f3383bd~mv2.webp/v1/fill/w_232,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logos%20%20(26).webp`,
    stars: STARS_5,
  },
  {
    platform: 'BookYogaRetreats by Tripaneer',
    logo: `${BADGE_BASE}6a1d0b2b497b45a9a1416c9cd206ba86~mv2.webp/v1/fill/w_232,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logos%20%20(25).webp`,
    stars: STARS_45,
  },
];

export default function WhyAkasha() {
  const tier = useTier();
  return (
    <section id="why" className="relative overflow-hidden bg-akasha-white">
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
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em]"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          We Know This Is a Big Step for You
        </h2>
        <p
          className="font-script text-akasha-orange mt-3"
          style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2rem)' }}
        >
          So we do everything to make this the best investment of your life
        </p>

        {/* Primary review platforms */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 max-w-4xl mx-auto items-start">
          {primaryRatings.map((r) => (
            <div key={r.platform} className="flex flex-col items-center">
              <div className="h-12 md:h-14 flex items-center justify-center">
                <img src={r.logo} alt={r.platform} loading="lazy" decoding="async" className="max-h-full w-auto object-contain" />
              </div>
              <img src={r.stars} alt="" aria-hidden="true" loading="lazy" decoding="async" className="mt-4 h-5 md:h-6 w-auto" />
              <p className="mt-3 font-body text-sm md:text-base text-akasha-gray-1">{r.score}</p>
            </div>
          ))}
        </div>

        {/* Secondary review platforms */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8 max-w-xl mx-auto items-start">
          {secondaryRatings.map((r) => (
            <div key={r.platform} className="flex flex-col items-center">
              <div className="h-10 md:h-12 flex items-center justify-center">
                <img src={r.logo} alt={r.platform} loading="lazy" decoding="async" className="max-h-full w-auto object-contain" />
              </div>
              <img src={r.stars} alt="" aria-hidden="true" loading="lazy" decoding="async" className="mt-3 h-5 md:h-6 w-auto" />
            </div>
          ))}
        </div>

        {/* Closing credibility line */}
        <p className="mt-14 md:mt-16 max-w-2xl mx-auto font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
          Over the past decade, we empowered more than 1100 awesome Yoga
          Instructors who are now successfully teaching on all 6 continents.
          Countless genuine reviews speak for themselves.
        </p>

        {/* Green CTA */}
        <div className="mt-8">
          <a
            href={tier.ctaHref}
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
