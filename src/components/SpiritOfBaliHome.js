'use client';

// "Bring the Spirit of Bali Home" social-proof + CTA section, matching the
// live Wix 200-Hour page: muted headline, three credibility columns
// (Akasha teachers / Yoga Alliance rating / Facebook rating) over a faint
// lotus watermark, closing with the primary CTA. Asset IDs are pulled
// verbatim from the Wix source so the logos/stars match one-to-one.

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const AKASHA_LOGO =
  'https://static.wixstatic.com/media/cd7168_9eb241be7f554798a0bcec81b234ede0~mv2.webp/v1/fill/w_254,h_72,al_c,q_85,enc_avif,quality_auto/5.webp';
const YOGA_ALLIANCE_LOGO =
  'https://static.wixstatic.com/media/cd7168_b1d2922fd0ad4e90afe1be8f1cdc36b8~mv2.webp/v1/fill/w_210,h_88,al_c,q_85,enc_avif,quality_auto/71.webp';
const FACEBOOK_LOGO =
  'https://static.wixstatic.com/media/cd7168_7b6164b634b94bbe9829759473e99757~mv2.webp/v1/fill/w_232,h_88,al_c,q_85,enc_avif,quality_auto/72.webp';

const STARS_5 =
  'https://static.wixstatic.com/media/c15a18_8fa0b772c88940c48272a4b4bd8b70d1~mv2.png/v1/fill/w_200,h_48,al_c,q_85,enc_avif,quality_auto/5STARS.png';
const STARS_48 =
  'https://static.wixstatic.com/media/c15a18_f12cd7a724664c91ba9269f6d94ffe41~mv2.png/v1/fill/w_200,h_48,al_c,q_85,enc_avif,quality_auto/4-8STARS.png';

export default function SpiritOfBaliHome() {
  return (
    <section className="relative overflow-hidden bg-akasha-white">
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
        {/* Headline */}
        <h2
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.12em]"
          style={{ fontSize: 'clamp(1.4rem, 3.4vw, 2.4rem)', fontWeight: 300 }}
        >
          Bring the Spirit of Bali Home
        </h2>
        <p
          className="font-heading uppercase text-akasha-orange tracking-[0.12em] mt-1"
          style={{ fontSize: 'clamp(1.3rem, 3vw, 2.1rem)', fontWeight: 400 }}
        >
          At Our Lowest Price Ever
        </p>

        {/* Body copy */}
        <div className="max-w-2xl mx-auto mt-8 space-y-5 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
          <p>
            200-Hour Online Yoga Teacher Training Essential, now more accessible
            than ever with a over 70% discount until July 31st!
          </p>
          <p>
            Experience state-of-the-art video lessons filmed in our exclusive
            &ldquo;BALIWOOD&rdquo; studio...
          </p>
        </div>

        {/* Three credibility columns */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 max-w-4xl mx-auto items-start">
          <div className="flex flex-col items-center">
            <img
              src={AKASHA_LOGO}
              alt="Akasha Yoga Academy"
              loading="lazy"
              decoding="async"
              className="h-12 md:h-14 w-auto object-contain"
            />
            <p className="mt-4 font-body text-sm md:text-base text-akasha-gray-1 max-w-[15rem]">
              3 uplifting lead teachers with 65 years of combined teaching
              experience
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={YOGA_ALLIANCE_LOGO}
              alt="Yoga Alliance"
              loading="lazy"
              decoding="async"
              className="h-12 md:h-14 w-auto object-contain"
            />
            <img
              src={STARS_5}
              alt="Rated 4.93 out of 5"
              loading="lazy"
              decoding="async"
              className="mt-4 h-5 md:h-6 w-auto"
            />
            <p className="mt-3 font-body text-sm md:text-base text-akasha-gray-1">
              4.93/5.0 based on 359 reviews
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={FACEBOOK_LOGO}
              alt="Facebook"
              loading="lazy"
              decoding="async"
              className="h-12 md:h-14 w-auto object-contain"
            />
            <img
              src={STARS_48}
              alt="Rated 4.8 out of 5"
              loading="lazy"
              decoding="async"
              className="mt-4 h-5 md:h-6 w-auto"
            />
            <p className="mt-3 font-body text-sm md:text-base text-akasha-gray-1">
              4.8/5.0 based on 243 reviews
            </p>
          </div>
        </div>

        {/* Closing line + CTA */}
        <p className="mt-14 md:mt-16 max-w-2xl mx-auto font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
          Transform your practice. Become Yoga Alliance Certified from anywhere
          in the world.
        </p>

        <div className="mt-8">
          <a
            href="/200h-essential/enroll"
            className="inline-flex items-center justify-center rounded-full bg-akasha-orange text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:bg-akasha-orange-dark hover:shadow-lg transition-all"
            style={{ fontWeight: 600 }}
          >
            Start Your Journey
          </a>
          <p className="mt-3 font-body text-xs uppercase tracking-[0.2em] text-akasha-gray-2">
            Over 70% Off Until July 31st
          </p>
        </div>
      </div>
    </section>
  );
}
