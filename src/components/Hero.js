'use client';

import SaleCountdown from './SaleCountdown';
import { useTier } from '@/lib/TierContext';

export default function Hero() {
  const tier = useTier();
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-akasha-white">
      <div className="section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <span className="eyebrow">Yoga Teacher Training Online</span>

            <h1
              className="mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)', fontWeight: 300 }}
            >
              {tier.heroLine1}
              <br />
              {tier.heroLine2}
            </h1>

            <p
              className="script mb-7"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              {tier.tagline}
            </p>

            <p className="font-body text-akasha-gray-1 max-w-md mx-auto lg:mx-0 mb-9 leading-relaxed">
              Journey with us into the depths of authentic Yoga. Become Yoga
              Alliance certified from anywhere in the world, guided by three
              lead teachers with 65 years of combined experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <a href="#pricing" className="btn-primary text-center">
                Enroll Now
              </a>
              <a href="#curriculum" className="btn-ghost">
                Explore Program
              </a>
            </div>

            <ul className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 mb-7 text-[12px] font-body text-akasha-gray-1">
              <li className="flex items-center gap-1.5">
                <span className="text-akasha-green">✓</span> Yoga Alliance certified
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-akasha-green">✓</span> {tier.selfPaceWindow}
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-akasha-green">✓</span> Learn from anywhere
              </li>
            </ul>

            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="text-akasha-gold tracking-[0.2em]">★★★★★</span>
              <p className="text-xs font-body text-akasha-gray-1">
                4.93/5.0 · 359 reviews · 1,100+ graduates on 6 continents
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={tier.heroImage}
                alt={tier.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 lg:left-auto lg:right-8 lg:translate-x-0 bg-akasha-white shadow-lg rounded-sm px-6 py-4 text-center border border-akasha-gray-4">
              <p className="text-[10px] font-body uppercase tracking-[0.25em] text-akasha-gray-1 mb-1">
                {tier.discountLabel}
              </p>
              <div className="flex items-baseline justify-center gap-3">
                <span className="text-akasha-gray-2 line-through font-body text-sm">
                  US${tier.regularPrice}
                </span>
                <span
                  className="font-heading text-akasha-orange text-3xl"
                  style={{ fontWeight: 400 }}
                >
                  US${tier.promoPrice}
                </span>
              </div>
              <p className="text-[10px] font-body uppercase tracking-[0.2em] text-akasha-orange mt-1">
                Ends in <SaleCountdown variant="short" fallback={<>{tier.saleEndShort}</>} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
