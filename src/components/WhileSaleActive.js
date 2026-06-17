'use client';

import { useSaleStatus } from '@/hooks/useSaleStatus';
import { useTier } from '@/lib/TierContext';

export default function WhileSaleActive({ children, fallback = null }) {
  const tier = useTier();
  const status = useSaleStatus(tier.saleWindows);
  if (!status.isActive) return fallback;
  return children;
}
