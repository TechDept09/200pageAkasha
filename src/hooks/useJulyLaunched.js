import { useEffect, useState } from 'react';
import { JULY_LAUNCH_ISO } from '@/lib/julyCampaign';

// Returns:
//   null   -> not mounted yet (SSR + first paint)
//   false  -> before the July launch instant
//   true   -> at or after the launch instant
// Schedules an exact-time timeout so the hub landing swaps the moment
// the countdown hits zero, no manual refresh needed. A 30s safety
// interval covers clock skew and sleep/wake transitions.
export function useJulyLaunched() {
  const [launched, setLaunched] = useState(null);

  useEffect(() => {
    const target = new Date(JULY_LAUNCH_ISO).getTime();
    const check = () => setLaunched(Date.now() >= target);

    check();
    if (Date.now() >= target) return undefined;

    const remaining = target - Date.now();
    const timeoutId = setTimeout(check, remaining + 500);
    const intervalId = setInterval(check, 30_000);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return launched;
}
