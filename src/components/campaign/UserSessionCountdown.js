'use client';

// Per-user 24-hour urgency countdown, evergreen scarcity pattern.
// First visit stamps localStorage; the deadline is that stamp + 24h.
// Refreshing or navigating away and coming back keeps ticking against
// the SAME deadline, so buyers cannot game it by reloading the page.
//
// Style is the Hostinger-style dark tile with big monospace digits.
// Sits inside the campaign hero, right above the CTA.

import { useUrgencyCountdown } from '@/hooks/useUrgencyCountdown';

function pad(n) {
  return String(n).padStart(2, '0');
}

export default function UserSessionCountdown({
  label = 'Your offer expires in',
  compact = false,
}) {
  const t = useUrgencyCountdown();
  if (!t) return null;
  if (t.expired) return null;

  const { hours, minutes, seconds } = t;

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
