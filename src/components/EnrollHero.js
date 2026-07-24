'use client';

// Full-bleed hero banner from the live Wix /enroll-now page: the Bali bamboo-
// shala meditation photo, the course title, a "Bring Bali Home" tagline, a
// dashed divider carrying a circular "75% OFF" badge, and a dark summer-offer
// pill with the struck/sale price. Copy is verbatim from the live source.
const ORANGE = '#E08A3C';

// Summer-Wellness display price shown on the Wix hero pill. Kept separate from
// tier.promoPrice (US$290, the post-CARE30 checkout price).
const DISPLAY_PRICE = 299;
const REGULAR_PRICE = 1190;

const HERO_BG =
  'https://static.wixstatic.com/media/cd7168_44439be89f4149a3b0127824b6ff0b96~mv2.jpg/v1/fill/w_1920,h_860,al_c,q_85,enc_avif,quality_auto/hero.jpg';

export default function EnrollHero({ onEnroll }) {
  const handleEnroll = (e) => {
    e.preventDefault();
    onEnroll?.();
  };

  return (
    <section className="relative overflow-hidden">
      <img
        src={HERO_BG}
        alt="Meditation class in the Akasha bamboo shala, Bali"
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30" />

      <div className="relative section min-h-[440px] md:min-h-[560px] flex flex-col items-center justify-center py-16 md:py-24 text-center">
        <div className="inline-block text-center">
          <h1
            className="font-heading text-akasha-white uppercase leading-[1.1]"
            style={{ fontSize: 'clamp(1.9rem, 5vw, 3.6rem)', fontWeight: 300, letterSpacing: '0.01em' }}
          >
            200-Hour Online Yoga
            <br />
            Teacher Training
          </h1>
          <p className="font-body text-akasha-white/90 text-left mt-3 text-sm md:text-base">
            Bring Bali Home
          </p>
        </div>

        {/* Dashed divider carrying the 75% OFF badge */}
        <div className="relative w-full max-w-3xl mt-10 md:mt-14">
          <div className="border-t border-dashed border-akasha-white/50" />
          <div className="absolute right-0 md:right-[4%] -top-9 w-[72px] h-[72px] rounded-full border border-akasha-white/80 flex items-center justify-center">
            <span className="font-heading text-akasha-white text-center leading-tight" style={{ fontSize: '0.95rem', fontWeight: 300 }}>
              75%
              <br />
              OFF
            </span>
          </div>
        </div>

        {/* Summer-offer pill */}
        <div className="mt-12 md:mt-16 inline-flex items-center gap-4 rounded-full bg-black/65 backdrop-blur-sm pl-6 pr-2 py-2">
          <span className="font-body text-akasha-white/90 text-[11px] md:text-xs uppercase tracking-[0.15em] text-left leading-snug">
            Summer Wellness Discount
            <br />
            Until July 31st
          </span>
          <button
            type="button"
            onClick={handleEnroll}
            className="inline-flex items-baseline gap-2 rounded-full text-akasha-white font-heading px-6 py-3 hover:shadow-lg transition-all"
            style={{ backgroundColor: ORANGE }}
          >
            <span className="line-through text-akasha-white/70 text-sm md:text-base" style={{ fontWeight: 300 }}>
              US${REGULAR_PRICE}
            </span>
            <span className="text-lg md:text-xl" style={{ fontWeight: 400 }}>
              US${DISPLAY_PRICE}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
