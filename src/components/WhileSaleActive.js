'use client';

import { useCountdown } from '@/hooks/useCountdown';
import { useTier } from '@/lib/TierContext';

export default function WhileSaleActive({ children, fallback = null }) {
  const tier = useTier();
  const c = useCountdown(tier.saleEnd);
  if (c.isExpired) return fallback;
  return children;
}
