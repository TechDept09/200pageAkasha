'use client';

import { useTier } from '@/lib/TierContext';

// Final closing section from the live Wix 200-Hour page: the "You Can Rely On"
// checklist followed by the summer-offer recap and green Enroll CTA, over the
// faint lotus watermark. Copy is verbatim from the live source.
const GREEN = '#5FBFA6';

// Summer-Wellness display price shown on the Wix band. Kept separate from
// tier.promoPrice (the post-code checkout price).
const SUMMER_PRICE = 299;

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const RELY_ON = [
  'Experienced Registered Yoga Teachers at the highest level (E-RYT-500)',
  'A decade of teaching more than 1100 certified Yoga instructors worldwide, who are now teaching on all 6 continents',
  'Consistent 5-star review ratings & heart-felt testimonials',
  'Experience the breath-taking quality & benefits of our premium 200-Hour Online Yoga Teacher Training',
  "14-Day Money-Back Guarantee: If our program doesn't meet your needs, you can easily claim a full refund. Register now, decide later. Benefit on all levels. Risk-free.",
];

export default function FinalRelyOn() {
  const tier = useTier();

  return (
    <section id="enroll" className="relative overflow-hidden bg-akasha-white">
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-0 w-[440px] md:w-[680px] opacity-[0.12]"
      />

      <div className="section relative z-10 py-16 md:py-24">
        {/* Intro */}
        <div className="max-w-2xl mx-auto text-center space-y-4 font-body text-akasha-gray-1 leading-relaxed">
          <p>
            You are taking a huge step forward. An authentic yoga teaching
            training course takes time, commitment, self-compassion, and expert
            teachers who have been there.
          </p>
          <p>
            That&rsquo;s why we designed a holistic, professional program that
            dives deep into practical and spiritual Yoga fundamentals while
            remaining accessible to all levels of learning.
          </p>
          <p>
            No matter where you&rsquo;re starting from, we want this to be the
            best investment of your life.
          </p>
        </div>

        {/* You can rely on */}
        <div className="max-w-2xl mx-auto mt-12">
          <h2
            className="font-script text-akasha-orange mb-6"
            style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.2rem)' }}
          >
            You Can Rely On:
          </h2>
          <ul className="space-y-5">
            {RELY_ON.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-akasha-gray-1 leading-relaxed">
                <span className="text-akasha-orange flex-none mt-0.5" aria-hidden="true">
                  &#10003;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Closing lines */}
        <div className="max-w-2xl mx-auto mt-14 text-center space-y-1">
          <p
            className="font-heading text-akasha-gray-1"
            style={{ fontSize: 'clamp(1.2rem, 2.4vw, 1.6rem)', fontWeight: 300 }}
          >
            Start your journey into the heart of Yoga!
          </p>
          <p
            className="font-heading text-akasha-gray-1"
            style={{ fontSize: 'clamp(1.2rem, 2.4vw, 1.6rem)', fontWeight: 300 }}
          >
            Access a library of immense value.
          </p>
        </div>

        {/* Summer offer recap */}
        <div className="mt-12 text-center">
          <p
            className="font-heading text-akasha-gray-1"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 300 }}
          >
            Over 70% Summer Wellness Discount
          </p>
          <p
            className="font-heading text-akasha-orange mt-3"
            style={{ fontSize: 'clamp(1.2rem, 2.4vw, 1.6rem)', fontWeight: 400 }}
          >
            Start today for only
          </p>
          <div className="flex items-baseline justify-center gap-3 mt-1">
            <span className="line-through text-akasha-gray-2 font-heading" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 300 }}>
              US${tier.regularPrice}
            </span>
            <span className="text-akasha-black font-heading" style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.3rem)', fontWeight: 300 }}>
              US${SUMMER_PRICE}
            </span>
          </div>
          <p className="font-body text-akasha-orange text-sm mt-4">* Offer until 31st of July</p>
          <p
            className="font-heading text-akasha-gray-1 mt-6"
            style={{ fontSize: 'clamp(1.15rem, 2.4vw, 1.5rem)', fontWeight: 300 }}
          >
            Start your journey into the Heart of Yoga!
          </p>

          <div className="mt-6">
            <a
              href="/200h-essential/enroll"
              className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
              style={{ backgroundColor: GREEN, fontWeight: 600 }}
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
