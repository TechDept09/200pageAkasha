'use client';

import { useEffect, useState } from 'react';
import { getActiveWindow, isAllExpired, getActivePhase } from '@/lib/saleConfig';

// Per second, decide whether we're inside an active sale window. Components
// hide their countdown / urgency UI during gaps between windows, and show the
// fallback after the last window closes. Optional `phases` describe display
// metadata (date range, countdown end) layered on top of the saleWindow.
export function useSaleStatus(windows = [], phases = []) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const active = getActiveWindow(windows, now);
  const phase = getActivePhase(phases, now);
  if (active) {
    return {
      isActive: true,
      isExpired: false,
      currentEnd: active.end,
      phase,
    };
  }
  const expired = isAllExpired(windows, now);
  return { isActive: false, isExpired: expired, currentEnd: null, phase };
}
