'use client';

import { useState } from 'react';

// Section 3 from the live Wix 80-Hour Advanced Hatha & Pranayama page:
// TRANSFORM & OVERCOME copy + SAVE YOUR SPOT, trailer, "THIS IS THE CHANGE"
// zigzag circular blocks, free sample form, Pranayama + History blocks.
// Keep Wix typo ("allows you can branch").
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';
const MINT = '#75C8AE';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const ENROLL_HREF =
  'https://www.akashayogaacademy.com/80-hr-online-enroll-now-hatha-and-pranayama';

const TRAILER =
  'https://static.wixstatic.com/media/cd7168_e338667a9f7b45239d9686bfe7621fe9~mv2.jpg/v1/fill/w_1280,h_720,al_c,q_85,enc_avif,quality_auto/80-Hour-Advance-Hatha-Pranayama-Online-TTC.jpg';

const BASE = 'https://static.wixstatic.com/media/';

const B = ({ children }) => (
  <strong style={{ fontWeight: 700, color: TEXT }}>{children}</strong>
);

const pStyle = {
  fontSize: 'clamp(0.95rem, 1.7vw, 1.25rem)',
  color: TEXT,
  fontWeight: 300,
  lineHeight: 1.65,
};

const BLOCKS_A = [
  {
    title: 'Deepen into an Authentic, Breath-Based Practice',
    photo:
      BASE +
      'cd7168_be4e86d1431642e2b8f3e89bc8f31521~mv2.png/v1/crop/x_600,y_0,w_969,h_969/fill/w_480,h_480,al_c,q_85,enc_avif,quality_auto/deepen.jpg',
    align: 'left',
    body: (
      <p>
        Genuine Yoga is far more than alignment &amp; flexibility. Authentic Yoga
        shifts your mindset from doing to Being &ndash; on the mat &amp; beyond.{' '}
        <B>Advanced breathwork &amp; mindful movement are the Master Keys.</B> They
        make your practice profound &amp; transformative. Breath &amp; Bandha give
        inner alignment in Asana. Together they ignite that transformative spark of
        Prana that changes us from the inside out.
      </p>
    ),
  },
  {
    title: 'Step into your Confidence: Own & Share your Practice',
    photo:
      BASE +
      'cd7168_298d8a28bcba45f1a6f6486a5284af8d~mv2.jpg/v1/crop/x_0,y_569,w_1280,h_1278/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/confidence.jpg',
    align: 'right',
    body: (
      <p>
        Uplevel your practice. <B>Master inversions</B>. Learn to practice &amp; teach
        simple arm balances. Get introduced to handstands!
        <br />
        Understanding the <B>deeper energetics</B> behind poses allows you can branch
        out of common sequences &amp; class templates. Better{' '}
        <B>serve your community</B> by curating physically &amp; energetically aligned
        classes.
      </p>
    ),
  },
  {
    title: 'Teach a Truly Individualized Practice',
    photo:
      BASE +
      'cd7168_5fec691ccd354b098f6fc59d913c968d~mv2.jpg/v1/crop/x_166,y_546,w_1031,h_1030/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/individualized.jpg',
    align: 'left',
    body: (
      <p>
        Genuine Yoga is not a one-size-fits-all practice. We&rsquo;ll dive deep into
        personalized alignment &amp; refinement of basic &amp; advanced asanas. Learn
        about common injuries &amp; pregnancy. Know how to address the specific age
        &amp; body types of students, by using modifications, props &amp; creative
        exploration.
      </p>
    ),
  },
];

const BLOCKS_B = [
  {
    title: 'Dive Deep into the World of Pranayama',
    photo:
      BASE +
      'cd7168_4deb977c72cf486ebab7ac61d7ef362d~mv2.jpg/v1/crop/x_188,y_0,w_604,h_604/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/pranayama.jpg',
    align: 'right',
    body: (
      <>
        <p>
          Yogic Breathwork is a highly potent tool to work with energies &amp; the
          mind. Learn everything about Pranayama:
        </p>
        <p>
          We&rsquo;ll cover all essential techniques, secret Bandhas, anatomy of
          respiration, energetic &amp; spiritual implications of breath &amp;
          breathlessness. Understand the differences between heating &amp; cooling
          practices. Know the effects, benefits, contraindications &amp; guidelines for
          powerful &amp; safe practice.
        </p>
      </>
    ),
  },
  {
    title: 'Explore the History of Genuine Yoga',
    photo:
      BASE +
      'cd7168_e6a78a4a71d94df7a53a6f3d5ca3a844~mv2.jpg/v1/crop/x_303,y_725,w_657,h_658/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/history.jpg',
    align: 'left',
    body: (
      <p>
        The Hatha Yoga Pradipika is a source scripture that introduces the practices
        of Asana &amp; Pranayama, as well as purification &amp; liberation.
        We&rsquo;ll dive into ancient roots to discover the authentic origins of this
        profound spiritual path. And we&rsquo;ll explore modern lineages of Yoga,
        shedding light &amp; inspiration on its recent history. With joyful spirit,
        we&rsquo;ll sort out those countless names &amp; styles that leave many Yoga
        teachers confused.
      </p>
    ),
  },
];

function BlockRow({ title, photo, align, body }) {
  const photoFirst = align === 'left';
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className={`flex justify-center ${photoFirst ? 'md:order-1' : 'md:order-2'}`}>
        <img
          src={photo}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover"
        />
      </div>
      <div
        className={`${photoFirst ? 'md:order-2' : 'md:order-1'} text-center md:text-left`}
      >
        <h3
          className="font-heading"
          style={{
            fontSize: 'clamp(1.2rem, 2.4vw, 1.65rem)',
            fontWeight: 400,
            color: '#6E6E6D',
            lineHeight: 1.25,
          }}
        >
          {title}
        </h3>
        <div className="mt-4 md:mt-5 font-body space-y-4" style={pStyle}>
          {body}
        </div>
      </div>
    </div>
  );
}

export default function TransformOvercome80Hatha() {
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
        className="pointer-events-none select-none absolute left-[-160px] top-[6%] w-[420px] md:w-[560px] opacity-[0.10]"
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
          Transform &amp; Overcome All Limits
        </h2>

        <div
          className="mt-8 md:mt-10 max-w-3xl mx-auto text-center font-body space-y-5"
          style={pStyle}
        >
          <p>
            Where are you right now? Uncertain about the future? Overwhelmed &amp;
            concerned about the current crises? Unclear about the next steps on your
            Yoga journey?
          </p>
          <p>
            It&rsquo;s a challenging time to be alive. Yet you could see these
            obstacles as an invitation to evolve. You can grow with the challenges
            &ndash; if you have the right tools &amp; mindset.
          </p>
          <p>
            Confrontation creates room for innovation. It opens the door for
            transformation. Learn to see crises as a chance for fundamental change.
            Discover the wisdom to see a stumbling block as a stepping stone.
          </p>
          <p>
            Authentic Yoga teaches you how to face difficulty with maturity &amp;
            integrity.
          </p>
          <p>
            You can overcome the barriers that stop you from developing an authentic
            Yoga practice. You deserve a safe &amp; loving space to deepen your
            resilience.
          </p>
          <p>
            You&rsquo;re here to discover the power that&rsquo;s already within you.
            You&rsquo;re meant to transform your life &amp; inspire others. And
            you&rsquo;re more ready than you&rsquo;ve ever been.
          </p>
        </div>

        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href={ENROLL_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.12em] px-8 md:px-10 py-4 font-body hover:shadow-lg transition-all text-center"
            style={{ backgroundColor: MINT, fontWeight: 600 }}
          >
            Save Your Spot Now
          </a>
        </div>

        <p className="mt-12 md:mt-14 text-center font-body" style={pStyle}>
          Check out the premium quality of our life-changing program:
        </p>

        <div className="mt-6 max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-sm shadow-lg aspect-video bg-black">
            <img
              src={TRAILER}
              alt="80-Hour Advance Hatha & Pranayama Online TTC"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <h2
          className="font-heading uppercase text-center tracking-[0.08em] max-w-4xl mx-auto mt-14 md:mt-20"
          style={{
            fontSize: 'clamp(1.35rem, 3.2vw, 2.15rem)',
            fontWeight: 300,
            color: '#6E6E6D',
            lineHeight: 1.25,
          }}
        >
          This Is the Change You&rsquo;ve Been Waiting For
        </h2>

        <div className="mt-12 md:mt-16 space-y-14 md:space-y-20">
          {BLOCKS_A.map((block) => (
            <BlockRow key={block.title} {...block} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 max-w-md mx-auto text-center">
          <h3
            className="font-heading"
            style={{
              fontSize: 'clamp(1.25rem, 2.6vw, 1.85rem)',
              fontWeight: 300,
              color: '#6E6E6D',
              lineHeight: 1.3,
            }}
          >
            Start Your Journey with a Free Sample Class
          </h3>

          {submitted ? (
            <p className="mt-8 font-body" style={pStyle}>
              Thank you! Check your inbox for your free sample class.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 space-y-4 text-left">
              <label className="sr-only" htmlFor="hatha-sample-name">
                Your Name
              </label>
              <input
                id="hatha-sample-name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
              <label className="sr-only" htmlFor="hatha-sample-email">
                Your best email address
              </label>
              <input
                id="hatha-sample-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="Your best email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.12em] px-8 py-3.5 font-body hover:shadow-lg transition-all"
                style={{ backgroundColor: MINT, fontWeight: 600 }}
              >
                Submit
              </button>
            </form>
          )}
        </div>

        <div className="mt-16 md:mt-20 space-y-14 md:space-y-20">
          {BLOCKS_B.map((block) => (
            <BlockRow key={block.title} {...block} />
          ))}
        </div>
      </div>
    </section>
  );
}
