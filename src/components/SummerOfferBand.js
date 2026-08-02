'use client';

import { useTier } from '@/lib/TierContext';

// Dark summer-offer band, matching the live Wix 200-Hour page: two flanking
// lotus emblems, the discount headline, the struck/sale price, the offer
// deadline, the green Enroll CTA, and the Plastic Exchange giving-back note.
const GREEN = '#5FBFA6';
const DARK_BG = '#3a3a3a';

// Summer-Wellness display price shown on the Wix band. Kept separate from
// tier.promoPrice (US$290, the post-CARE30 checkout price).
const SUMMER_PRICE = 299;

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

export default function SummerOfferBand() {
  const tier = useTier();

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: DARK_BG }}
    >
      {/* Flanking lotus emblems */}
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none hidden md:block absolute left-[4%] top-1/2 -translate-y-1/2 w-[220px] lg:w-[260px] opacity-40"
      />
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none hidden md:block absolute right-[4%] top-1/2 -translate-y-1/2 w-[220px] lg:w-[260px] opacity-40"
      />

      <div className="section relative z-10 py-16 md:py-20 text-center">
        <h2
          className="font-heading text-akasha-white"
          style={{ fontSize: 'clamp(1.5rem, 3.4vw, 2.4rem)', fontWeight: 300 }}
        >
          Over 70% Summer Wellness Discount
        </h2>

        <p
          className="font-heading text-akasha-orange mt-4"
          style={{ fontSize: 'clamp(1.2rem, 2.4vw, 1.6rem)', fontWeight: 400 }}
        >
          Start today for only
        </p>

        <div className="flex items-baseline justify-center gap-3 mt-1">
          <span className="line-through text-akasha-white/55 font-heading" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 300 }}>
            US${tier.regularPrice}
          </span>
          <span className="text-akasha-white font-heading" style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.3rem)', fontWeight: 300 }}>
            US${SUMMER_PRICE}
          </span>
        </div>

        <p className="font-body text-akasha-orange text-sm mt-5">
          * Offer until 31st of July
        </p>

        <div className="mt-5">
          <a
            href="/200h-essential/enroll"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: GREEN, fontWeight: 600 }}
          >
            Enroll Now
          </a>
        </div>

        <p className="mt-8 font-body text-akasha-white/55 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
          *Your tuition helps feed a Balinese family in need via the{' '}
          <a
            href="https://www.akashayogaacademy.com/giving-back"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-akasha-white"
          >
            &lsquo;Plastic Exchange&rsquo; Project.
          </a>
        </p>
      </div>
    </section>
  );
}
