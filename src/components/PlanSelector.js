'use client';

import { useCountdown } from '@/hooks/useCountdown';
import { TIERS } from '@/lib/tiers';

// Plan-comparison block from the live Wix /enroll-now page: a "Discount ends
// in" countdown, the "Choose a plan..." heading, and the two dark plan cards
// (Essential w/ MOST POPULAR ribbon + Premium) floating on the page's warm-gray
// canvas. Copy is verbatim from the live source.
const ORANGE = '#E5771E';
const GREEN = '#75C8AE';
const CARD_BG = '#141414';

// Summer-Wellness display price shown on Wix's Essential card. Kept separate
// from tier.promoPrice (US$290, the post-CARE30 checkout price).
const DISPLAY_PRICE = 299;

// Offer deadline shown across the page ("Until 31st of July").
const OFFER_END_ISO = '2026-07-31T23:59:59+08:00';

const CHECK_ICON =
  'https://static.wixstatic.com/media/cd7168_89da62ac6f254f7185941dba1c508306~mv2.png/v1/fill/w_48,h_48,al_c,q_85,enc_avif,quality_auto/CHECK-MARK234.png';

const ESSENTIAL_PHOTO =
  'https://static.wixstatic.com/media/cd7168_11af1911c1264208a660d58446daf36e~mv2.jpg/v1/fill/w_800,h_520,al_c,q_85,enc_avif,quality_auto/essential.jpg';
const PREMIUM_PHOTO =
  'https://static.wixstatic.com/media/cd7168_eea3bf63d06a4260b9e04f7bc00a255c~mv2.jpeg/v1/fill/w_800,h_520,al_c,q_85,enc_avif,quality_auto/premium.jpeg';

const PREMIUM_FEATURES = [
  'Full mentorship & personal 1-on-1 guidance',
  'Interactive alignment coaching',
  'Monthly Payments',
  '1-on-1 Mentorship & Private Chat',
  'WhatsApp Community Group',
  '12 Months Access to Live Zoom Classes & Q&As',
  'Individual Feedback & Alignment Coaching',
];

function Check() {
  return (
    <img
      src={CHECK_ICON}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className="w-4 h-4 flex-none mt-1"
    />
  );
}

function TimeBlock({ value, label }) {
  const v = String(value ?? 0).padStart(2, '0');
  return (
    <div className="text-center">
      <div className="font-heading tabular-nums" style={{ color: ORANGE, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 400 }}>
        {v}
      </div>
      <div className="font-body uppercase tracking-[0.2em] text-akasha-white/70 text-[10px] md:text-[11px]">
        {label}
      </div>
    </div>
  );
}

export default function PlanSelector({ selectedTier, onSelectTier, onEnroll }) {
  const essential = TIERS.essential;
  const premium = TIERS.premium;
  const c = useCountdown(OFFER_END_ISO);

  const selectAndEnroll = (slug) => (e) => {
    e.preventDefault();
    onSelectTier?.(slug);
    onEnroll?.(slug);
  };

  return (
    <section id="plans" className="scroll-mt-24">
      <div className="section py-14 md:py-20">
        {/* Countdown */}
        <div className="text-center">
          <p className="font-heading text-akasha-white/80" style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.5rem)', fontWeight: 300 }}>
            Discount ends in
          </p>
          <div className="flex items-start justify-center gap-6 md:gap-10 mt-3">
            <TimeBlock value={c.days} label="Days" />
            <TimeBlock value={c.hours} label="Hours" />
            <TimeBlock value={c.minutes} label="Minutes" />
            <TimeBlock value={c.seconds} label="Seconds" />
          </div>
        </div>

        <h2
          className="text-center font-heading text-akasha-white/90 mt-10 md:mt-14"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 300 }}
        >
          Choose a plan and start learning today:
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-6 max-w-4xl mx-auto mt-16 items-start">
          {/* Essential */}
          <div className="relative rounded-sm overflow-visible" style={{ backgroundColor: CARD_BG }}>
            <div
              className="absolute left-0 right-0 -top-9 z-10 text-center font-body uppercase tracking-[0.2em] text-akasha-white text-xs md:text-sm py-2.5 rounded-t-sm"
              style={{ backgroundColor: ORANGE }}
            >
              Most Popular
            </div>

            <img src={ESSENTIAL_PHOTO} alt="Essential plan" loading="lazy" decoding="async" className="w-full aspect-[500/300] object-cover" />

            <div className="px-7 md:px-9 pt-6 pb-9 text-center">
              <h3 className="font-heading text-akasha-white" style={{ fontSize: 'clamp(1.4rem, 2.8vw, 1.9rem)', fontWeight: 300 }}>
                Essential
              </h3>
              <p className="font-body text-akasha-white/70 text-sm mt-3 leading-relaxed">
                Perfect for foundational growth and certification.
              </p>

              <p className="font-heading mt-6" style={{ color: ORANGE, fontSize: 'clamp(1.15rem, 2.4vw, 1.5rem)', fontWeight: 400 }}>
                Full Payment 70% Off
              </p>
              <div className="flex items-baseline justify-center gap-3 mt-1">
                <span className="line-through text-akasha-white/50 font-heading" style={{ fontSize: 'clamp(1.2rem, 2.4vw, 1.5rem)', fontWeight: 300 }}>
                  US${essential.regularPrice}
                </span>
                <span className="font-heading" style={{ color: ORANGE, fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 400 }}>
                  US${DISPLAY_PRICE}
                </span>
              </div>
              <p className="font-body text-sm mt-2" style={{ color: ORANGE }}>
                (Until 31st of July)
              </p>

              <p className="font-body text-akasha-white/70 text-sm text-left mt-7">Includes:</p>
              <ul className="text-left space-y-3 mt-3">
                {essential.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-akasha-white/80 leading-relaxed">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={selectAndEnroll('essential')}
                  className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-3.5 font-body hover:shadow-lg transition-all"
                  style={{ backgroundColor: ORANGE, fontWeight: 600 }}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Premium */}
          <div className="relative rounded-sm overflow-hidden" style={{ backgroundColor: CARD_BG }}>
            <img src={PREMIUM_PHOTO} alt="Premium plan" loading="lazy" decoding="async" className="w-full aspect-[500/300] object-cover" />

            <div className="px-7 md:px-9 pt-6 pb-9 text-center">
              <h3 className="font-heading text-akasha-white" style={{ fontSize: 'clamp(1.4rem, 2.8vw, 1.9rem)', fontWeight: 300 }}>
                Premium
              </h3>
              <p className="font-body text-akasha-white/70 text-sm mt-3 leading-relaxed">
                Everything in Essential, plus advanced tools &amp; mentorship for a more tailored experience.
              </p>

              <p className="font-heading text-akasha-white mt-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 300 }}>
                US${premium.promoPrice}
              </p>
              <p className="font-body text-akasha-white/70 text-sm mt-2">
                Total Valued at US$4995
              </p>

              <p className="font-body text-akasha-white/70 text-sm text-left mt-7 leading-relaxed">
                Everything included in Essential. PLUS these additional features:
              </p>
              <ul className="text-left space-y-3 mt-3">
                {PREMIUM_FEATURES.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-akasha-white/80 leading-relaxed">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={selectAndEnroll('premium')}
                  className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-3.5 font-body hover:shadow-lg transition-all"
                  style={{ backgroundColor: GREEN, fontWeight: 600 }}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
