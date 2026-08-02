'use client';

import { useState } from 'react';

// Section 11 from the live Wix 80-Hour Yin page: Whole-Hearted Support copy
// flowing into the Free Sample Class lead-capture form. Form is a client-side
// stub until a backend endpoint is wired (same pattern as DreamsSample300).
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';
const MINT = '#75C8AE';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const B = ({ children }) => (
  <strong style={{ fontWeight: 700, color: TEXT }}>{children}</strong>
);

const pStyle = {
  fontSize: 'clamp(0.95rem, 1.7vw, 1.25rem)',
  color: TEXT,
  fontWeight: 300,
  lineHeight: 1.65,
};

export default function WholeHearted80Yin() {
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
        className="pointer-events-none select-none absolute left-[-160px] top-1/2 -translate-y-1/2 w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading uppercase text-center tracking-[0.06em] max-w-4xl mx-auto"
          style={{
            fontSize: 'clamp(1.35rem, 3.2vw, 2.15rem)',
            fontWeight: 300,
            color: '#6E6E6D',
            lineHeight: 1.25,
          }}
        >
          Whole-Hearted Support &amp; Expert Guidance
        </h2>

        <div
          className="mt-8 md:mt-10 max-w-3xl mx-auto text-left font-body space-y-5"
          style={pStyle}
        >
          <p>Every Yoga journey matures through three main stages:</p>
          <p>
            <B>Curiosity, experimentation &amp; integration.</B>
          </p>
          <p>Not sure where you&rsquo;re at?</p>
          <p>
            It&rsquo;s natural to feel stuck and unsure about what&rsquo;s next.{' '}
            <B>Creating the space &amp; time</B> for the heart-led commitment of a
            Yoga Teacher Training isn&rsquo;t easy. You might worry about the
            challenges this phase in your journey may present.
          </p>
          <p>
            <B>You&rsquo;ve already come a long way.</B> We know. We&rsquo;ve been
            there too.
          </p>
          <p>
            In an <em className="italic">authentic</em> Yoga journey, there&rsquo;s a
            natural flow between curiosity, experimentation, and integration. As you
            devote yourself more deeply to your practice, you&rsquo;ll evolve to
            greater heights.
          </p>
          <p>
            <B>Trust this: Your guide is already within you,</B> gently encouraging
            you to take a step forward, release the past, and discover the
            magnificence of awareness, in full, loving presence.
          </p>
          <p>
            And we&rsquo;re here to support that journey every step of the way. Our
            program gives you convenient online access to all training modules &amp;
            materials, so you can choose a pace that works for you. Plus, you&rsquo;ll
            meet the lead teachers and connect to our vibrant global community in
            regular live Zoom calls.
          </p>
          <p>
            The ancient science of Yoga is a vast &amp; beautiful subject, and Self
            Inquiry opens us to a new way of seeing ourselves in relation to the
            world. It is our privilege to share this knowledge and experience this
            transformative journey with you.
          </p>
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
          <p
            className="mt-8 max-w-md mx-auto text-center font-body"
            style={pStyle}
          >
            Thank you{name ? `, ${name}` : ''}! Your sample class link is on its way
            to <span className="font-medium text-akasha-black">{email}</span>.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-8 max-w-md mx-auto space-y-4"
            aria-label="Access Sample Classes 80hr Online Yin YTT"
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
