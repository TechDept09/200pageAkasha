'use client';

import { useEffect, useState } from 'react';

// New July campaign goes live at 2 July 2026, 12:00 WITA (UTC+8).
// Keep this in sync with the real launch time so the hero countdown
// matches what marketing announces on social.
const JULY_LAUNCH_ISO = '2026-07-02T12:00:00+08:00';

function useCountdown(targetIso) {
  const [now, setNow] = useState(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (now === null) return null;
  const diff = Math.max(0, new Date(targetIso).getTime() - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { diff, days, hours, minutes, seconds };
}

function pad(n) {
  return String(n).padStart(2, '0');
}

function JulyCountdown() {
  const t = useCountdown(JULY_LAUNCH_ISO);
  // Hide until mounted so the SSR HTML doesn't ship a stale timer.
  if (!t) return null;
  // Once the campaign is live, drop the badge entirely (marketing can
  // swap the hero copy in a follow-up commit).
  if (t.diff === 0) return null;

  const units = [
    { label: 'Days', value: t.days },
    { label: 'Hrs', value: t.hours },
    { label: 'Min', value: t.minutes },
    { label: 'Sec', value: t.seconds },
  ];

  return (
    <div className="flex flex-col items-center gap-3 mb-6">
      <span
        className="inline-flex items-center gap-2 text-akasha-orange"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(0.7rem, 1.2vw, 0.8rem)',
          fontWeight: 600,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
        }}
      >
        <span aria-hidden="true">✧</span>
        Something new is coming
        <span aria-hidden="true">✧</span>
      </span>

      <div
        className="inline-flex items-center gap-2 md:gap-3"
        role="timer"
        aria-live="polite"
        aria-label={`New July campaign launches in ${t.days} days ${t.hours} hours ${t.minutes} minutes ${t.seconds} seconds`}
      >
        {units.map((u, i) => (
          <span key={u.label} className="flex items-center gap-2 md:gap-3">
            <span className="flex flex-col items-center bg-akasha-black text-akasha-white rounded-md px-3 md:px-4 py-2 md:py-2.5 min-w-[52px] md:min-w-[62px] shadow-sm">
              <span
                className="font-heading leading-none"
                style={{
                  fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                  fontWeight: 400,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {pad(u.value)}
              </span>
              <span
                className="text-akasha-gold mt-1"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(0.55rem, 0.9vw, 0.65rem)',
                  fontWeight: 500,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                }}
              >
                {u.label}
              </span>
            </span>
            {i < units.length - 1 ? (
              <span
                aria-hidden="true"
                className="text-akasha-gold/60 font-heading"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)', fontWeight: 300 }}
              >
                :
              </span>
            ) : null}
          </span>
        ))}
      </div>

      <span
        className="font-body text-akasha-gray-1"
        style={{
          fontSize: 'clamp(0.72rem, 1.1vw, 0.82rem)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
        }}
      >
        July 2 · 12:00 WITA
      </span>
    </div>
  );
}

export default function HubHero() {
  return (
    <section className="pt-28 md:pt-36 pb-10 md:pb-14 bg-akasha-white">
      <div className="section text-center max-w-3xl">
        <JulyCountdown />

        <h1
          className="mb-4 uppercase"
          style={{
            fontSize: 'clamp(3.2rem, 8.5vw, 6rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '0.01em',
          }}
        >
          Big Yoga Day Discounts
        </h1>

        <h2
          className="mb-3"
          style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.5rem)', fontWeight: 300 }}
        >
          Extended Storewide Offer on All Courses
        </h2>

        <p
          className="script mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
        >
          Celebrate Yoga, Anywhere
        </p>

        <p className="font-body text-akasha-gray-1 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
          Our trainings, workshops, and retreats. Choose the path that fits you,
          continue your journey with us.
        </p>
      </div>
    </section>
  );
}
