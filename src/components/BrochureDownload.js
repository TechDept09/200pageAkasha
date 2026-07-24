'use client';

import { useState } from 'react';

// Brochure lead-capture block, matching the live Wix 200-Hour page: a muted
// headline, name + email fields as dark pills, a green submit button, and the
// gold Akasha crest beneath, over the faint lotus watermark.
//
// NOTE: submission is a client-side stub. Wire onSubmit to a real
// lead-capture + brochure-delivery backend (e.g. /api/brochure) when ready.
const GREEN = '#5FBFA6';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const AKASHA_CREST =
  'https://static.wixstatic.com/media/cd7168_5be45af3c77447dc824ed9275aa54bc6~mv2.png/v1/fit/w_480,h_360,al_c,q_90,enc_avif,quality_auto/akasha-crest.png';

export default function BrochureDownload() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-full bg-akasha-black text-akasha-white placeholder-akasha-gray-2 px-6 py-3.5 font-body text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-akasha-gold';

  return (
    <section className="relative overflow-hidden bg-akasha-white">
      {/* Faint lotus watermark, bleeding off the left edge */}
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-140px] top-1/2 -translate-y-1/2 w-[420px] md:w-[620px] opacity-[0.12]"
      />

      <div className="section relative z-10 py-16 md:py-24 text-center">
        <h2
          className="font-heading text-akasha-gray-1 max-w-xl mx-auto"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 300, lineHeight: 1.25 }}
        >
          Download Your Brochure &amp; scroll down to sample classes
        </h2>

        {submitted ? (
          <p className="mt-8 max-w-lg mx-auto font-body text-akasha-gray-1 text-base md:text-lg">
            Thank you{name ? `, ${name}` : ''}! Your brochure is on its way to{' '}
            <span className="text-akasha-black font-medium">{email}</span>.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 max-w-lg mx-auto space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              autoComplete="name"
              className={inputClass}
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your best email address*"
              autoComplete="email"
              className={inputClass}
            />
            <button
              type="submit"
              className="w-full rounded-full text-akasha-white py-3.5 font-body hover:shadow-lg transition-all"
              style={{ backgroundColor: GREEN, fontWeight: 500 }}
            >
              Download Brochure
            </button>
          </form>
        )}

        <img
          src={AKASHA_CREST}
          alt="Akasha Yoga Academy"
          loading="lazy"
          decoding="async"
          className="mx-auto mt-12 md:mt-14 h-28 md:h-32 w-auto object-contain"
        />
      </div>
    </section>
  );
}
