'use client';

import { useEffect, useState } from 'react';
import { getActiveWindow, isAllExpired, getActivePhase } from '@/lib/saleConfig';

// Per second, decide whether we're inside an active sale window. Components
// hide their countdown / urgency UI during gaps between windows, and show the
// fallback after the last window closes. Optional `phases` describe display
// metadata (date range, countdown end) layered on top of the saleWindow.
//
// Server returns a neutral "not yet known" state so the initial HTML matches
// across server and client (no hydration mismatch from Date.now() drift).
// The real evaluation kicks in on the first client tick.
export function useSaleStatus(windows = [], phases = []) {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now === null) {
    return { isActive: false, isExpired: false, currentEnd: null, phase: null };
  }

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
