import { useEffect, useState } from 'react';

// Shared per-user 24h urgency countdown. Reads (and, on first call,
// writes) localStorage 'akasha_urgency_start' with Date.now(). The
// deadline is that stamp + 24h. Multiple consumers stay in sync
// because they all resolve to the same stamp.
//
// Returns null while unmounted / SSR, then an object with hours,
// minutes, seconds, and expired.
const START_KEY = 'akasha_urgency_start';
const WINDOW_MS = 24 * 60 * 60 * 1000;

export function useUrgencyCountdown() {
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    let start = Number(window.localStorage.getItem(START_KEY));
    if (!start || Number.isNaN(start) || start > Date.now()) {
      start = Date.now();
      try {
        window.localStorage.setItem(START_KEY, String(start));
      } catch (_) {}
    }
    const endsAt = start + WINDOW_MS;

    const tick = () => setRemaining(Math.max(0, endsAt - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (remaining === null) return null;
  return {
    hours: Math.floor(remaining / 3600000),
    minutes: Math.floor((remaining % 3600000) / 60000),
    seconds: Math.floor((remaining % 60000) / 1000),
    expired: remaining === 0,
    remainingMs: remaining,
  };
}
