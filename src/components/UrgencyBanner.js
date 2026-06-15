'use client';

import { useCountdown } from '@/hooks/useCountdown';
import { useTier } from '@/lib/TierContext';
import { getSavings } from '@/lib/tiers';

function formatLong(c) {
  if (c.days > 0) return `${c.days}d ${c.hours}h ${c.minutes}m`;
  if (c.hours > 0) return `${c.hours}h ${c.minutes}m ${c.seconds}s`;
  if (c.minutes > 0) return `${c.minutes}m ${c.seconds}s`;
  return `${c.seconds}s`;
}

export default function UrgencyBanner() {
  const tier = useTier();
  const c = useCountdown(tier.saleEnd);
  if (c.isExpired) return null;

  return (
    <div className="bg-akasha-orange/95 text-akasha-white text-center">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-1.5 flex items-center justify-center gap-x-2 whitespace-nowrap overflow-hidden">
        <span className="hidden sm:inline text-[11px] md:text-[12px] font-body uppercase tracking-[0.18em]">
          {tier.discountLabel} ends in
        </span>
        <span className="sm:hidden text-[11px] font-body uppercase tracking-[0.15em]">
          Ends in
        </span>
        <span
          className="font-heading text-[12px] md:text-[14px] tracking-wide tabular-nums"
          style={{ fontWeight: 500 }}
        >
          {formatLong(c)}
        </span>
        <span className="hidden sm:inline text-[11px] md:text-[12px] font-body opacity-90">
          · Save US${getSavings(tier)}
        </span>
      </div>
    </div>
  );
}
