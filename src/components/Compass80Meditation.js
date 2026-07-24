'use client';

import { useState } from 'react';

// Section 8 from the live Wix 80-Hour Meditation page: "WE'RE YOUR COMPASS..."
// copy, mint ENROLL NOW, then Free Sample Class lead-capture form (client stub).
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';
const MINT = '#75C8AE';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const ENROLL_HREF =
  'https://www.akashayogaacademy.com/enroll-now-80-hr-online-meditation-teacher-training';

const pStyle = {
  fontSize: 'clamp(0.95rem, 1.7vw, 1.25rem)',
  color: TEXT,
  fontWeight: 300,
  lineHeight: 1.65,
};

export default function Compass80Meditation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-full border border-akasha-gray-3 bg-white text-akasha-black placeholder-akasha-gray-2 px-6 py-3.5 font-body text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#75C8AE]';

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-[10%] w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading uppercase text-center tracking-[0.08em] max-w-4xl mx-auto"
          style={{
            fontSize: 'clamp(1.35rem, 3.2vw, 2.15rem)',
            fontWeight: 300,
            color: '#6E6E6D',
            lineHeight: 1.25,
          }}
        >
          We&rsquo;re Your Compass on This Journey Home
        </h2>

        <div
          className="mt-8 md:mt-10 max-w-3xl mx-auto text-center font-body space-y-5"
          style={pStyle}
        >
          <p>
            Every explorer reaches a crossroads, yearning for a guide to illuminate the
            path ahead.
          </p>
          <p>
            Within you, a voice resonates — a teacher, a mentor, a spiritual compass. It
            echoes YOUR truths, guiding your steps with unwavering conviction.
          </p>
          <p>
            What we&rsquo;ve come to understand is that Yoga isn&rsquo;t a mere practice;
            it&rsquo;s the very essence of your existence, the force propelling you forward
            on your journey. It is this voice. Meditation is at the heart of Yoga.
          </p>
          <p>
            Embarking on the path of Spiritual Heart Meditation can be deeply
            introspective, even challenging. Having a nurturing guide and a supportive
            environment is paramount as you delve into your true nature. Together,
            we&rsquo;ll journey through the practical and spiritual facets of meditation
            and self-inquiry, fostering profound transformation and equipping you to guide
            others.
          </p>
          <p>
            Beyond the poses and theories, Yoga unfurls its full magnificence in
            meditation. We invite you to transcend conventional courses and enter a realm
            where time stands still, external layers dissolve, revealing your luminous
            inner self.
          </p>
          <p>With the Akasha family by your side, your inner wisdom will find its voice.</p>
        </div>

        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href={ENROLL_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: MINT, fontWeight: 600 }}
          >
            Enroll Now
          </a>
        </div>

        <h3
          className="font-heading text-center mt-14 md:mt-16 max-w-3xl mx-auto"
          style={{
            fontSize: 'clamp(1.35rem, 3vw, 2.1rem)',
            fontWeight: 300,
            color: '#6E6E6D',
            lineHeight: 1.25,
          }}
        >
          Start Your Journey with a Free Sample Class
        </h3>

        {submitted ? (
          <p className="mt-8 max-w-md mx-auto text-center font-body" style={pStyle}>
            Thank you{name ? `, ${name}` : ''}! Your sample class link is on its way to{' '}
            <span className="font-medium text-akasha-black">{email}</span>.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-8 max-w-md mx-auto space-y-4"
            aria-label="Access Sample Classes 80hr Meditation Online YTT"
          >
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
              className="w-full rounded-full text-akasha-white font-body hover:opacity-90 transition-all py-3.5"
              style={{
                backgroundColor: MINT,
                fontWeight: 600,
                fontSize: '1rem',
              }}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
