'use client';

import { useState } from 'react';

// Brochure lead-capture block, matching the live Wix 200-Hour page: a muted
// headline, name + email fields as dark pills, a green submit button, and the
// gold Akasha crest beneath, over the faint lotus watermark.
//
// Submits to /api/brochure-request which fans out to Discord + Streak
// server-side, then returns a downloadUrl the client uses to trigger
// the file download immediately.
const GREEN = '#5FBFA6';

const BROCHURE_FILENAME = 'Akasha-200hr-Yoga-Teacher-Training-Brochure.pdf';

function readUtm() {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const utm = {};
  for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
    const v = params.get(k);
    if (v) utm[k] = v;
  }
  return Object.keys(utm).length ? utm : null;
}

function triggerDownload(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const AKASHA_CREST =
  'https://static.wixstatic.com/media/cd7168_5be45af3c77447dc824ed9275aa54bc6~mv2.png/v1/fit/w_480,h_360,al_c,q_90,enc_avif,quality_auto/akasha-crest.png';

export default function BrochureDownload() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/brochure-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          source: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
          utm: readUtm(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.downloadUrl) {
        throw new Error(data.error || 'Something went wrong');
      }
      triggerDownload(data.downloadUrl, BROCHURE_FILENAME);
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
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
          <div className="mt-8 max-w-lg mx-auto space-y-3 text-akasha-gray-1">
            <p className="font-body text-base md:text-lg">
              Thank you{name ? `, ${name}` : ''}! Your download has started.
            </p>
            <p className="font-body text-sm">
              Didn&rsquo;t get it?{' '}
              <a
                href="/brochure-200hr-ttc.pdf"
                download={BROCHURE_FILENAME}
                className="text-akasha-black underline font-medium"
              >
                Click here to download again
              </a>
              .
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 max-w-lg mx-auto space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              autoComplete="name"
              className={inputClass}
              disabled={loading}
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your best email address*"
              autoComplete="email"
              className={inputClass}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-full text-akasha-white py-3.5 font-body hover:shadow-lg transition-all ${loading ? 'opacity-70 cursor-wait' : ''}`}
              style={{ backgroundColor: GREEN, fontWeight: 500 }}
            >
              {loading ? 'Preparing your download…' : 'Download Brochure'}
            </button>
            {error ? (
              <p className="text-sm text-akasha-orange-dark font-body text-center">
                {error}
              </p>
            ) : null}
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
