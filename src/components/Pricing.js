'use client';

import EnrollForm from './EnrollForm';
import SaleCountdown from './SaleCountdown';
import WhileSaleActive from './WhileSaleActive';
import { useTier } from '@/lib/TierContext';
import { getSavings } from '@/lib/tiers';

export default function Pricing() {
  const tier = useTier();
  const savings = getSavings(tier);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-akasha-gray-4/30">
      <div className="section">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow text-akasha-orange">
            {tier.discountLabel} · Ends in{' '}
            <SaleCountdown variant="long" fallback={<>{tier.saleEndShort}</>} />
          </span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
            Your Investment
          </h2>
          <p className="font-body text-akasha-gray-1 mt-4 leading-relaxed">
            Everything you need to become Yoga Alliance certified.
            At our lowest price ever.
          </p>
          <WhileSaleActive>
            <p className="text-[11px] font-body text-akasha-gray-1 mt-3 italic">
              Price returns to US${tier.regularPrice} after the sale ends.
            </p>
          </WhileSaleActive>
          <span className="gold-rule" />
        </div>

        <div className="max-w-xl mx-auto bg-akasha-white border border-akasha-gray-4 rounded-sm overflow-hidden">
          <div className="text-center pt-10 pb-8 px-8 border-b border-akasha-gray-4">
            <span className="script block mb-3" style={{ fontSize: '2rem' }}>
              {tier.pricingTagline}
            </span>
            <div className="flex items-baseline justify-center gap-4 mb-2">
              <span className="text-akasha-gray-2 text-xl line-through font-body">
                US${tier.regularPrice}
              </span>
              <span
                className="font-heading text-akasha-black text-6xl"
                style={{ fontWeight: 300 }}
              >
                US${tier.promoPrice}
              </span>
            </div>
            <p className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-orange">
              Save US${savings} · One-Time Payment
            </p>
          </div>

          <div className="px-8 md:px-12 py-8">
            <ul className="space-y-3">
              {tier.bullets.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm font-body text-akasha-gray-1 leading-relaxed"
                >
                  <span className="text-akasha-green mt-0.5 flex-none">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-8 md:px-12 pb-10">
            <p className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-gray-1 mb-4 text-center">
              Reserve your seat
            </p>
            <EnrollForm />
          </div>
        </div>

        <p className="text-center text-xs font-body text-akasha-gray-1 mt-8 max-w-md mx-auto leading-relaxed">
          <strong className="text-akasha-black font-medium">Tuition with purpose</strong>, your
          enrollment supports the Plastic Exchange Project, feeding Balinese
          families by turning ocean waste into nourishment.
        </p>
      </div>
    </section>
  );
}
