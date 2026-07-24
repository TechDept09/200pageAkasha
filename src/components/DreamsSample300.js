'use client';

import { useState } from 'react';

// Section 3 from the live Wix 300-Hour page: "Your dreams are too important…"
// copy block flowing into the Free Sample Class lead-capture form. Same warm
// cream canvas + left lotus watermark. Form is a client-side stub until a
// backend endpoint is wired (same pattern as BrochureDownload).
const MINT = '#7CC7B0';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/c15a18_5c73f145ca4842c9a23c2f2d8f6c2080~mv2.jpg/v1/fill/w_800,h_800,al_c,q_85,enc_avif,quality_auto/lotus.jpg';

const B = ({ children }) => (
  <strong className="font-semibold text-akasha-black">{children}</strong>
);

export default function DreamsSample300() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-full border border-akasha-gray-1/50 bg-akasha-white text-akasha-gray-1 placeholder-akasha-gray-2 px-6 py-3.5 font-body text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#7CC7B0]';

  return (
    <section className="relative overflow-hidden bg-[#F5F4F1]">
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-180px] top-0 w-[420px] md:w-[560px] opacity-[0.35]"
      />

      <div className="section relative z-10 py-14 md:py-20 text-center max-w-3xl mx-auto">
        <h2
          className="font-heading text-akasha-gray-1"
          style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.3rem)', fontWeight: 300 }}
        >
          Your dreams are too important to neglect
        </h2>

        <p className="font-body text-akasha-gray-1 mt-6 text-base md:text-lg leading-relaxed">
          Your Yoga journey started long ago and has significantly impacted your
          life. You went deeper, but still, <B>something is missing</B>. You
          can&rsquo;t ignore it anymore.
        </p>

        <ul className="mt-8 space-y-3 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed list-none">
          <li>
            <span className="mr-2" aria-hidden="true">
              &bull;
            </span>
            Are you struggling to maintain a regular daily practice?
          </li>
          <li>
            <span className="mr-2" aria-hidden="true">
              &bull;
            </span>
            Did you encounter <B>obstacles on your spiritual path</B>?
          </li>
          <li>
            <span className="mr-2" aria-hidden="true">
              &bull;
            </span>
            Are you uncertain how to deeply inspire others?
          </li>
        </ul>

        <p className="font-body text-akasha-gray-1 mt-8 text-base md:text-lg leading-relaxed">
          It&rsquo;s normal to occasionally <B>feel stuck</B>, confused, or
          uninspired on your path. Such obstacles are a clear sign that
          you&rsquo;re ready to <B>advance your practice</B>.
        </p>
        <p className="font-body text-akasha-gray-1 mt-4 text-base md:text-lg leading-relaxed">
          Curiosity brought you here. Commitment will take you deeper.
        </p>

        <h3
          className="font-heading text-akasha-gray-1 mt-14 md:mt-16"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.1rem)', fontWeight: 300 }}
        >
          Start Your Journey with a Free Sample Class
        </h3>

        {submitted ? (
          <p className="mt-8 max-w-md mx-auto font-body text-akasha-gray-1 text-base md:text-lg">
            Thank you{name ? `, ${name}` : ''}! Your sample class link is on its
            way to <span className="text-akasha-black font-medium">{email}</span>.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 max-w-md mx-auto space-y-4">
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
              placeholder="Your best email address"
              autoComplete="email"
              className={inputClass}
            />
            <button
              type="submit"
              className="w-full rounded-full text-akasha-white uppercase tracking-[0.15em] py-3.5 font-body hover:shadow-lg transition-all"
              style={{ backgroundColor: MINT, fontWeight: 600, fontSize: '0.85rem' }}
            >
              Get Sample Class
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
