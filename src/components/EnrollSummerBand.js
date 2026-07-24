'use client';

import { TIERS } from '@/lib/tiers';

// Recurring "Over 70% Summer Wellness Discount" offer block from the live Wix
// /enroll-now page, rendered transparently over the page's warm-gray canvas.
// Copy is verbatim from the live source.
const ORANGE = '#E5771E';
const GREEN = '#75C8AE';

// Summer-Wellness display price shown on Wix. Kept separate from
// tier.promoPrice (US$290, the post-CARE30 checkout price).
const DISPLAY_PRICE = 299;

export default function EnrollSummerBand({ buttonColor = 'orange', showBonusLine = false, onEnroll }) {
  const tier = TIERS.essential;
  const bg = buttonColor === 'green' ? GREEN : ORANGE;

  const handleEnroll = (e) => {
    e.preventDefault();
    onEnroll?.();
  };

  return (
    <section className="scroll-mt-24">
      <div className="section py-12 md:py-16 text-center">
        <h2 className="font-heading text-akasha-white/90" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 300 }}>
          Over 70% Summer Wellness Discount
        </h2>
        <p className="font-heading mt-3" style={{ color: ORANGE, fontSize: 'clamp(1.2rem, 2.4vw, 1.6rem)', fontWeight: 400 }}>
          Start for only
        </p>
        <div className="flex items-baseline justify-center gap-3 mt-1">
          <span className="line-through text-akasha-white/55 font-heading" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 300 }}>
            US${tier.regularPrice}
          </span>
          <span className="text-akasha-white font-heading" style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.3rem)', fontWeight: 300 }}>
            US${DISPLAY_PRICE}
          </span>
        </div>
        <p className="font-body text-sm mt-4" style={{ color: ORANGE }}>
          * Offer until 31st of July
        </p>

        {showBonusLine && (
          <p className="font-heading text-akasha-white/80 max-w-2xl mx-auto mt-8 leading-snug" style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.5rem)', fontWeight: 300 }}>
            Until July 31st, all the bonuses are FREE and included in Essential &amp;
            Premium Version. Total Value US$1130
          </p>
        )}

        <div className="mt-8">
          <button
            type="button"
            onClick={handleEnroll}
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: bg, fontWeight: 600 }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
}
