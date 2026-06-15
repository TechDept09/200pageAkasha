'use client';

import { useCountdown } from '@/hooks/useCountdown';
import { useTier } from '@/lib/TierContext';

function fmtShort(c) {
  if (c.days > 0) return `${c.days}d ${c.hours}h`;
  if (c.hours > 0) return `${c.hours}h ${c.minutes}m`;
  return `${c.minutes}m`;
}

function fmtLong(c) {
  if (c.days > 0) return `${c.days}d ${c.hours}h ${c.minutes}m`;
  if (c.hours > 0) return `${c.hours}h ${c.minutes}m ${c.seconds}s`;
  return `${c.minutes}m ${c.seconds}s`;
}

export default function SaleCountdown({ variant = 'long', fallback = null, className = '' }) {
  const tier = useTier();
  const c = useCountdown(tier.saleEnd);
  if (c.isExpired) return fallback;
  const text = variant === 'short' ? fmtShort(c) : fmtLong(c);
  return <span className={`tabular-nums ${className}`}>{text}</span>;
}
