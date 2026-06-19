'use client';

import { useEffect, useState } from 'react';
import SaleCountdown from './SaleCountdown';
import { useTier } from '@/lib/TierContext';
import { useSaleStatus } from '@/hooks/useSaleStatus';

export default function StickyCTA() {
  const tier = useTier();
  const sale = useSaleStatus(tier.saleWindows, tier.salePhases);
  const phaseRange = sale.phase?.dateRange;
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-akasha-white border-t border-akasha-gray-4 shadow-[0_-4px_14px_rgba(0,0,0,0.06)] transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!show}
    >
      <div className="px-4 py-3 flex items-center gap-3 max-w-3xl mx-auto">
        <div className="flex-1 leading-tight">
          <div className="flex items-baseline gap-2">
            <span className="text-akasha-gray-2 text-xs line-through font-body">US${tier.regularPrice}</span>
            <span className="font-heading text-akasha-black text-xl" style={{ fontWeight: 400 }}>
              US${tier.promoPrice}
            </span>
          </div>
          <p className="text-[10px] font-body uppercase tracking-[0.18em] text-akasha-orange">
            {phaseRange ? phaseRange : <>Ends in <SaleCountdown variant="short" fallback={<>{tier.saleEndShort}</>} /></>} · {tier.discountPercent}% Off
          </p>
        </div>
        <a
          href="#pricing"
          className="bg-akasha-orange text-white text-[12px] font-medium tracking-[0.12em] uppercase px-5 py-3 rounded-full hover:bg-akasha-orange-dark transition-colors whitespace-nowrap"
        >
          Enroll
        </a>
      </div>
    </div>
  );
}
