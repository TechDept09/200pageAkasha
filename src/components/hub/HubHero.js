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
  // Once the campaign is live, drop the whole hero block (marketing can
  // swap the surrounding copy to the live campaign in a follow-up).
  if (t.diff === 0) return null;

  const units = [
    { label: 'Days', value: t.days },
    { label: 'Hrs', value: t.hours },
    { label: 'Min', value: t.minutes },
    { label: 'Sec', value: t.seconds },
  ];

  return (
    <div className="flex flex-col items-center gap-5 md:gap-6 mb-6">
      <span
        className="inline-flex items-center text-akasha-orange"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(0.72rem, 1.3vw, 0.85rem)',
          fontWeight: 600,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
        }}
      >
        A new promo drops in
      </span>

      {/* Dramatic hero-scale numbers. No tile boxes: the numbers themselves
          are the statement, colons breathe between them, gold labels ground
          the whole line so it still reads as a timer. Acts as the visual
          h1 of the hub hero now. */}
      <div
        className="w-full flex items-end justify-center gap-3 sm:gap-5 md:gap-8"
        role="timer"
        aria-live="polite"
        aria-label={`New July promo drops in ${t.days} days ${t.hours} hours ${t.minutes} minutes ${t.seconds} seconds`}
      >
        {units.map((u, i) => (
          <div key={u.label} className="flex items-end gap-3 sm:gap-5 md:gap-8">
            <div className="flex flex-col items-center">
              <span
                className="font-heading text-akasha-black leading-none"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 6rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.01em',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {pad(u.value)}
              </span>
              <span
                className="text-akasha-gold mt-2 md:mt-3"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(0.6rem, 1vw, 0.72rem)',
                  fontWeight: 500,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                }}
              >
                {u.label}
              </span>
            </div>
            {i < units.length - 1 ? (
              <span
                aria-hidden="true"
                className="text-akasha-gold/50 font-heading self-start"
                style={{
                  fontSize: 'clamp(2rem, 7vw, 4rem)',
                  fontWeight: 300,
                  lineHeight: 1,
                  marginTop: 'clamp(0.5rem, 1vw, 0.8rem)',
                }}
              >
                :
              </span>
            ) : null}
          </div>
        ))}
      </div>

      <span
        className="font-body text-akasha-gray-1"
        style={{
          fontSize: 'clamp(0.72rem, 1.1vw, 0.82rem)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
      >
        July 2 · 12:00 WITA
      </span>
    </div>
  );
}

function UrgencyCta() {
  return (
    <a
      href="#essential"
      className="inline-flex items-center gap-2 text-akasha-orange hover:text-akasha-orange-dark transition-colors mb-8"
      style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 'clamp(0.72rem, 1.1vw, 0.82rem)',
        fontWeight: 600,
        letterSpacing: '0.24em',
        textTransform: 'uppercase',
      }}
    >
      Enroll before the door closes
      <span aria-hidden="true">→</span>
    </a>
  );
}

export default function HubHero() {
  return (
    <section className="pt-28 md:pt-36 pb-10 md:pb-14 bg-akasha-white">
      <div className="section text-center max-w-3xl">
        {/* Countdown replaces the old 'Big Yoga Day Discounts' headline so
            the first thing a visitor sees is the shift, a new promo is on
            the way. Two mindsets in one block: (1) something new is
            coming, (2) the current Yoga Day offer only holds until the
            timer runs out. */}
        <JulyCountdown />

        <h2
          className="mb-5"
          style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.6rem)', fontWeight: 300 }}
        >
          Yoga Day pricing holds only until the new drop opens
        </h2>

        <p
          className="script mb-6"
          style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
        >
          Choose your path while the door is open
        </p>

        <UrgencyCta />
      </div>
    </section>
  );
}
