'use client';

import { useEffect, useState } from 'react';
import { getActiveWindow, isAllExpired } from '@/lib/saleConfig';

// Per second, decide whether we're inside an active sale window. Components
// hide their countdown / urgency UI during gaps between windows, and show the
// fallback after the last window closes.
export function useSaleStatus(windows = []) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const active = getActiveWindow(windows, now);
  if (active) {
    return { isActive: true, isExpired: false, currentEnd: active.end };
  }
  const expired = isAllExpired(windows, now);
  return { isActive: false, isExpired: expired, currentEnd: null };
}
