'use client';

import { useCountdown } from '@/hooks/useCountdown';
import { SALE_END } from '@/lib/saleConfig';

export default function WhileSaleActive({ children, fallback = null }) {
  const c = useCountdown(SALE_END);
  if (c.isExpired) return fallback;
  return children;
}
