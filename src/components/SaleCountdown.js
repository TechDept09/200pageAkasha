'use client';

import { useCountdown } from '@/hooks/useCountdown';
import { useSaleStatus } from '@/hooks/useSaleStatus';
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
  const status = useSaleStatus(tier.saleWindows);
  const c = useCountdown(status.currentEnd || '1970-01-01T00:00:00Z');
  if (!status.isActive || c.isExpired) return fallback;
  const text = variant === 'short' ? fmtShort(c) : fmtLong(c);
  return <span className={`tabular-nums ${className}`}>{text}</span>;
}
