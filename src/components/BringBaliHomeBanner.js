'use client';

import Image from 'next/image';
import { useTier } from '@/lib/TierContext';

// "Bring Bali Home" promo band, matching the live Wix 200-Hour page: a
// full-bleed Bali bamboo-studio photo with the summer-discount headline
// top-left, a "75% OFF" seal on the right, and a floating price pill at
// the bottom. Pricing is data-driven from the tier config.
const BG_IMAGE =
  'https://static.wixstatic.com/media/cd7168_446427d10fc94ab4b5d580f0d5d0751a~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_85,enc_avif,quality_auto/cd7168_446427d10fc94ab4b5d580f0d5d0751a~mv2.jpg';

// Headline "Summer Wellness" price shown on the live Wix band. Kept as its
// own display value because it differs from tier.promoPrice (US$290), which
// is the post-CARE30-voucher price charged at checkout.
const SUMMER_PRICE = 299;

export default function BringBaliHomeBanner() {
  const tier = useTier();

  return (
    <section className="relative w-full min-h-[440px] md:min-h-[560px] overflow-hidden flex flex-col justify-between">
      {/* Full-bleed background */}
      <Image
        src={BG_IMAGE}
        alt="Yoga class in Akasha's bamboo studio in Bali"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Legibility wash: darker top-left where the headline sits */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/45 via-black/10 to-transparent" />

      {/* Headline top-left */}
      <div className="section relative z-10 pt-12 md:pt-16">
        <h2
          className="text-white"
          style={{ fontSize: 'clamp(2rem, 4.6vw, 3.4rem)', fontWeight: 300, lineHeight: 1.15 }}
        >
          Over 70% Summer Wellness
          <br />
          Discount
        </h2>
        <div className="flex items-center gap-4 mt-5 max-w-xl">
          <span
            className="text-white/95 whitespace-nowrap"
            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 300 }}
          >
            Bring Bali Home
          </span>
          <span className="flex-1 border-t border-dashed border-white/50" />
        </div>
      </div>

      {/* 75% OFF seal on the right */}
      <div className="absolute z-10 right-[6%] top-[34%] md:top-[30%]">
        <div className="w-[92px] h-[92px] md:w-[120px] md:h-[120px] rounded-full bg-white/25 backdrop-blur-sm border border-white/40 flex flex-col items-center justify-center text-white text-center">
          <span
            className="font-heading leading-none"
            style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', fontWeight: 400 }}
          >
            {tier.discountPercent}%
          </span>
          <span className="text-[11px] md:text-[13px] font-body uppercase tracking-[0.25em] mt-1">
            Off
          </span>
        </div>
      </div>

      {/* Floating price pill at the bottom */}
      <div className="section relative z-10 pb-10 md:pb-14 flex justify-center">
        <div className="flex items-center gap-5 md:gap-7 rounded-full bg-black/55 backdrop-blur-sm px-6 md:px-9 py-4 md:py-5">
          <div className="text-left">
            <p
              className="text-white font-heading leading-tight"
              style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)', fontWeight: 300 }}
            >
              200-Hour Yoga Teacher Training
            </p>
            <p className="text-[10px] md:text-[11px] font-body uppercase tracking-[0.25em] text-white/70 mt-1">
              Until {tier.saleEndShort}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/60 line-through font-body text-sm md:text-base">
              US${tier.regularPrice}
            </span>
            <a
              href="/200h-essential/enroll"
              className="inline-flex items-center rounded-full bg-akasha-orange text-white px-5 md:px-6 py-2.5 md:py-3 font-heading hover:bg-akasha-orange-dark transition-colors"
              style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)', fontWeight: 400 }}
            >
              US${SUMMER_PRICE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
