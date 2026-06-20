'use client';

import { useEffect, useState } from 'react';

function compute(target) {
  const total = target.getTime() - Date.now();
  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0, isExpired: true };
  }
  const days = Math.floor(total / 86400000);
  const hours = Math.floor((total % 86400000) / 3600000);
  const minutes = Math.floor((total % 3600000) / 60000);
  const seconds = Math.floor((total % 60000) / 1000);
  return { days, hours, minutes, seconds, total, isExpired: false };
}

// Hydration-safe countdown: server renders a placeholder (isExpired: false,
// hasMounted: false). Client computes the real values on mount, so the
// initial HTML stays identical across server and client.
const PLACEHOLDER = { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0, isExpired: false, hasMounted: false };

export function useCountdown(targetISO) {
  const [state, setState] = useState(PLACEHOLDER);

  useEffect(() => {
    const target = new Date(targetISO);
    setState({ ...compute(target), hasMounted: true });
    const id = setInterval(() => {
      const next = { ...compute(target), hasMounted: true };
      setState(next);
      if (next.isExpired) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  return state;
}
