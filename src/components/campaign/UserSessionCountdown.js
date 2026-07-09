'use client';

// Per-user 24-hour urgency countdown, evergreen scarcity pattern.
// First visit stamps localStorage; the deadline is that stamp + 24h.
// Refreshing or navigating away and coming back keeps ticking against
// the SAME deadline, so buyers cannot game it by reloading the page.
//
// Style is the Hostinger-style dark tile with big monospace digits.
// Sits inside the campaign hero, right above the CTA.

import { useEffect, useState } from 'react';

const START_KEY = 'akasha_urgency_start';
const WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

function pad(n) {
  return String(n).padStart(2, '0');
}

export default function UserSessionCountdown({
  label = 'Your offer expires in',
  compact = false,
}) {
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    let start = Number(window.localStorage.getItem(START_KEY));
    if (!start || Number.isNaN(start) || start > Date.now()) {
      start = Date.now();
      try {
        window.localStorage.setItem(START_KEY, String(start));
      } catch (_) {
        // Private mode or quota: fall back to session-only, timer
        // will restart on next reload but still applies urgency now.
      }
    }
    const endsAt = start + WINDOW_MS;

    const tick = () => {
      const diff = Math.max(0, endsAt - Date.now());
      setRemaining(diff);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (remaining === null) return null;
  if (remaining === 0) return null;

  const hours = Math.floor(remaining / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  const digitStyle = {
    fontFamily: 'Inter, sans-serif',
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
  };

  return (
    <div
      className={`inline-flex flex-col items-center gap-2 ${
        compact ? '' : 'mb-6'
      }`}
      role="timer"
      aria-live="polite"
      aria-label={`Offer expires in ${hours} hours ${minutes} minutes ${seconds} seconds`}
    >
      <span
        className="text-akasha-white/70 uppercase"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(0.68rem, 1vw, 0.78rem)',
          letterSpacing: '0.32em',
          fontWeight: 600,
          textShadow: '0 1px 6px rgba(0,0,0,0.5)',
        }}
      >
        {label}
      </span>
      <div
        className="inline-flex items-center gap-2 md:gap-3 bg-black/45 border border-akasha-orange/70 rounded-full px-5 py-2.5 md:px-6 md:py-3 shadow-lg"
        style={{ backdropFilter: 'blur(6px)' }}
      >
        {[
          { v: hours, l: 'H' },
          { v: minutes, l: 'M' },
          { v: seconds, l: 'S' },
        ].map((u, i, arr) => (
          <span key={u.l} className="inline-flex items-baseline">
            <span
              className="text-akasha-white text-xl md:text-2xl"
              style={digitStyle}
            >
              {pad(u.v)}
            </span>
            <span
              className="ml-1 text-akasha-orange text-[10px] md:text-xs"
              style={{ ...digitStyle, letterSpacing: '0.1em' }}
            >
              {u.l}
            </span>
            {i < arr.length - 1 ? (
              <span
                className="mx-2 text-akasha-white/40"
                style={digitStyle}
                aria-hidden="true"
              >
                :
              </span>
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}
