'use client';

// Whole-page landing that replaces the pre-launch hub content the
// moment the July drop opens. Same aesthetic as /campaign/july's hero
// so buyers coming from ads recognise the campaign instantly, but
// links out to the live /200h-essential page for the actual checkout
// (Essential US$290, voucher auto-applied via existing product config).
// /campaign/july stays gated as internal preview.

import HubNav from './HubNav';
import Footer from '@/components/Footer';
import YogaAllianceCertified from '@/components/YogaAllianceCertified';
import { JULY_PHASES, JULY_BG_VIDEO } from '@/lib/julyCampaign';

const phase = JULY_PHASES.phase1;

export default function JulyLaunchHome() {
  return (
    <>
      <HubNav />

      <main className="bg-akasha-white">
        <section className="relative overflow-hidden bg-akasha-black min-h-[92vh] flex items-center">
          {JULY_BG_VIDEO ? (
            <video
              src={JULY_BG_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
          ) : null}

          <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.2) 100%)',
            }}
          />

          <div className="relative z-10 section text-center max-w-3xl text-akasha-white py-24 md:py-32">
            <span
              className="inline-block uppercase mb-5"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#F5B872',
                fontSize: 'clamp(0.95rem, 1.7vw, 1.2rem)',
                letterSpacing: '0.32em',
                fontWeight: 600,
              }}
            >
              {phase.dateRange}
            </span>

            <h1
              className="mb-4"
              style={{
                fontSize: 'clamp(2.6rem, 6.4vw, 4.6rem)',
                fontWeight: 300,
                lineHeight: 1.05,
                color: '#FFFFFF',
                textShadow: '0 2px 18px rgba(0,0,0,0.55)',
              }}
            >
              {phase.headline}
            </h1>

            <p
              className="script mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: '#F5B872',
                textShadow: '0 2px 14px rgba(0,0,0,0.5)',
              }}
            >
              {phase.scriptTagline}
            </p>

            <p
              className="font-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10"
              style={{
                color: 'rgba(255,255,255,0.95)',
                textShadow: '0 1px 10px rgba(0,0,0,0.55)',
              }}
            >
              {phase.intro}
            </p>

            <a
              href="/200h-essential"
              className="julyhome-cta inline-flex items-center justify-center gap-3 bg-akasha-orange text-akasha-white px-12 md:px-16 py-5 md:py-6 rounded-full text-[14px] md:text-[16px] font-semibold uppercase tracking-[0.22em] hover:bg-akasha-orange-dark transition-all duration-300 shadow-2xl hover:shadow-[0_20px_60px_rgba(237,88,41,0.55)]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Step into the offer, US$290
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Gentle attention pulse on the CTA, respects reduced motion. */}
          <style jsx>{`
            .julyhome-cta {
              animation: julyhomeCtaPulse 2.6s ease-in-out infinite;
            }
            @keyframes julyhomeCtaPulse {
              0%, 100% {
                transform: translateY(0);
                box-shadow: 0 12px 40px rgba(237, 88, 41, 0.35);
              }
              50% {
                transform: translateY(-3px);
                box-shadow: 0 20px 60px rgba(237, 88, 41, 0.55);
              }
            }
            @media (prefers-reduced-motion: reduce) {
              .julyhome-cta { animation: none; }
            }
          `}</style>
        </section>

        <section className="py-16 md:py-24 bg-akasha-white">
          <div className="section text-center max-w-3xl">
            <span className="eyebrow text-akasha-orange">This summer</span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
              200-Hour Yoga Teacher Training (Essential Path)
            </h2>
            <span className="gold-rule" />
            <p className="font-body text-akasha-gray-1 mt-6 mb-8 text-base md:text-lg leading-relaxed">
              Begin your Yoga Alliance certified journey with the 200-Hour
              Essential Path. The July voucher applies automatically at
              checkout, no coupon code needed.
            </p>

            <div className="flex items-baseline justify-center gap-4 mb-8">
              <span className="text-akasha-gray-2 line-through font-body text-lg">
                US$1,190
              </span>
              <span
                className="font-heading text-akasha-orange"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 400 }}
              >
                US$290
              </span>
            </div>

            <a href="/200h-essential" className="btn-primary">
              Enroll now
            </a>

            <p className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-gray-1 mt-6">
              Voucher applied automatically at checkout
            </p>
          </div>
        </section>

        <YogaAllianceCertified />

        <Footer />
      </main>
    </>
  );
}
