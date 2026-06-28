'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import HubNav from '@/components/hub/HubNav';
import MainProducts from '@/components/hub/MainProducts';
import CategorySection from '@/components/hub/CategorySection';
import TrustStrip from '@/components/TrustStrip';
import Footer from '@/components/Footer';
import { CATEGORIES, courses, getCoursesByCategory } from '@/lib/courses';

// Campaign preview: only Essential and 80hr Yin are part of the Summer
// Self-Care offer. Every other course card on this page should render
// at its regular price so the visual story doesn't confuse the Yoga Day
// 60% promo (which ended on 30 Jun) with the July bundle.
const CAMPAIGN_DISCOUNT_KEEP = new Set(['200h-essential', '80h-yin']);

function stripCampaignDiscount(course) {
  if (!course) return course;
  if (CAMPAIGN_DISCOUNT_KEEP.has(course.slug)) return course;
  return {
    ...course,
    discountPercent: null,
    discountLabel: null,
    promoPrice: null,
    saleEndShort: null,
  };
}
import { startWixCheckout } from '@/lib/checkout';
import { useUtmParams, formatUtmNote } from '@/hooks/useUtmParams';
import { trackLead, trackInitiateCheckout, newEventId } from '@/lib/pixel';
import { getMetaCookies } from '@/lib/fbCookies';
import {
  JULY_ACCESS_KEY,
  getActiveJulyPhase,
  JULY_PHASES,
  JULY_PRODUCTS,
  JULY_BG_VIDEO,
  JULY_TESTIMONIALS,
} from '@/lib/julyCampaign';

const STORAGE_KEY = 'akasha_july_2026_access';

export default function JulyCampaign() {
  const [authorized, setAuthorized] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [phase, setPhase] = useState(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && sessionStorage.getItem(STORAGE_KEY) === 'true') {
      setAuthorized(true);
    }
    setPhase(getActiveJulyPhase() || JULY_PHASES.phase1);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    setError('');
    if (code.trim().toUpperCase() === JULY_ACCESS_KEY.toUpperCase()) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setAuthorized(true);
    } else {
      setError('Invalid access code. Contact marketing for the current key.');
    }
  };

  if (!mounted) return null;

  if (!authorized) {
    return (
      <>
        <Head>
          <title>Confidential, Akasha Yoga Academy</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <HubNav />
        <main className="min-h-[80vh] flex items-center justify-center bg-akasha-white pt-28 md:pt-36 pb-16">
          <div className="section max-w-md text-center">
            <span className="eyebrow text-akasha-orange">Confidential Preview</span>
            <h1
              className="mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 300 }}
            >
              July Campaign Preview
            </h1>
            <p className="font-body text-akasha-gray-1 mb-8 leading-relaxed">
              This page is part of an upcoming marketing campaign and is not
              yet public. Enter the access code to view.
            </p>
            <form onSubmit={submit} className="space-y-4">
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Access code"
                autoComplete="off"
                spellCheck="false"
                className="w-full border border-akasha-gray-3 rounded-full px-5 py-3 text-sm font-body text-akasha-black placeholder:text-akasha-gray-2 focus:outline-none focus:border-akasha-orange transition-colors bg-akasha-white text-center tracking-[0.18em] uppercase"
              />
              {error ? (
                <p className="text-xs text-akasha-orange-dark font-body">{error}</p>
              ) : null}
              <button type="submit" className="btn-primary w-full">
                Unlock Preview
              </button>
            </form>
            <p className="text-[10px] font-body uppercase tracking-[0.25em] text-akasha-gray-2 mt-8">
              Akasha Internal · Do Not Share
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return <CampaignContent phase={phase} />;
}

function CampaignContent({ phase }) {
  const bundle = phase.bundle;
  const standalone = phase.standalone;
  const showWellnessNote = phase.key === 'phase2';

  return (
    <>
      <Head>
        <title>{phase.headline}, Akasha Yoga Academy</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <HubNav />

      <main className="bg-akasha-white">
        {/* Hero with a Wix-hosted MP4 looping in the background. HTML5
            video gives us no third-party branding (vs YouTube iframe)
            and lets us truly mute + autoplay + loop with a one-liner.
            object-cover keeps it cropped to the section regardless of
            viewport ratio. pointer-events:none means taps still hit the
            CTA overlay above. */}
        <section className="relative overflow-hidden bg-akasha-black min-h-[88vh] flex items-center">
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

          {/* Darken + gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />

          <div className="relative z-10 section text-center max-w-3xl text-akasha-white py-20 md:py-28">
            <span
              className="july-hero-anim inline-block uppercase mb-5"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#F5B872',
                animationDelay: '0.15s',
                fontSize: 'clamp(0.95rem, 1.7vw, 1.2rem)',
                letterSpacing: '0.32em',
                fontWeight: 600,
              }}
            >
              {phase.dateRange}
            </span>
            <h1
              className="july-hero-anim mb-4"
              style={{
                fontSize: 'clamp(2.6rem, 6.4vw, 4.6rem)',
                fontWeight: 300,
                lineHeight: 1.05,
                color: '#FFFFFF',
                animationDelay: '0.3s',
              }}
            >
              {phase.headline}
            </h1>
            {phase.scriptTagline ? (
              <p
                className="july-hero-anim script mb-6"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  color: '#F5B872',
                  animationDelay: '0.55s',
                }}
              >
                {phase.scriptTagline}
              </p>
            ) : null}
            <p
              className="july-hero-anim font-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(255,255,255,0.92)', animationDelay: '0.75s' }}
            >
              {phase.intro}
            </p>
            <a
              href="#enroll"
              className="july-hero-anim inline-flex items-center justify-center bg-akasha-orange text-akasha-white px-10 py-4 rounded-full text-[13px] font-semibold uppercase tracking-[0.2em] hover:bg-akasha-orange-dark transition-colors shadow-lg"
              style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.95s' }}
            >
              See Your Bundle
            </a>
          </div>

          <style jsx>{`
            .july-hero-anim {
              opacity: 0;
              animation: julyFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            }
            @keyframes julyFadeUp {
              0% {
                opacity: 0;
                transform: translate3d(0, 28px, 0);
                filter: blur(4px);
              }
              60% {
                filter: blur(0);
              }
              100% {
                opacity: 1;
                transform: translate3d(0, 0, 0);
                filter: blur(0);
              }
            }
            @media (prefers-reduced-motion: reduce) {
              .july-hero-anim {
                opacity: 1;
                animation: none;
                transform: none;
                filter: none;
              }
            }
          `}</style>
        </section>

        {/* Two checkout options */}
        <section className="py-14 md:py-20 bg-akasha-gray-4/30" id="enroll">
          <div className="section">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="eyebrow">Begin your journey</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.6rem)', fontWeight: 300 }}>
                Two ways to step in this summer
              </h2>
              <span className="gold-rule" />
              <p className="font-body text-akasha-gray-1 mt-6 text-base md:text-lg leading-relaxed">
                This summer, self-care can become your new path. Both options
                begin with the 200hr Essential Yoga Teacher Training, the
                foundation of your certification and the place where the
                practice of choosing yourself starts. The bundle then opens
                into the 80hr Yin methodology, a slower, deeper layer of the
                journey, a practice of stillness, of letting the breath lead.
                Choose the path that calls.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
              <BundleCard phase={phase} showWellnessNote={showWellnessNote} />
              <StandaloneCard phase={phase} />
            </div>
          </div>
        </section>

        {/* Side-by-side comparison */}
        <section className="py-14 md:py-20 bg-akasha-white">
          <div className="section max-w-5xl">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="eyebrow">Look closer</span>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
                When two journeys cost less than one
              </h2>
              <span className="gold-rule" />
              <p className="font-body text-akasha-gray-1 mt-5 text-base md:text-lg leading-relaxed">
                Step into the 200hr Essential and 80hr Yin together this
                summer. The numbers below show how the bundle holds both
                certifications, gently, with breathing room to spare.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-akasha-gray-4/40 border border-akasha-gray-4 rounded-sm p-6 md:p-7 flex flex-col">
                <p className="text-[11px] font-body uppercase tracking-[0.22em] text-akasha-gray-1 mb-4">
                  Buying separately
                </p>
                <ul className="space-y-2 font-body text-akasha-gray-1 text-[15px] leading-relaxed flex-1">
                  <li className="flex justify-between">
                    <span>200hr Essential</span>
                    <span className="text-akasha-black line-through">US$1,190</span>
                  </li>
                  <li className="flex justify-between">
                    <span>80hr Yin Training</span>
                    <span className="text-akasha-black line-through">US$600</span>
                  </li>
                </ul>
                <p className="mt-5 pt-4 border-t border-akasha-gray-4 font-body text-akasha-black flex justify-between">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-akasha-gray-1 self-end">
                    You would pay
                  </span>
                  <span className="font-heading text-akasha-black text-2xl" style={{ fontWeight: 400 }}>
                    US$1,790
                  </span>
                </p>
              </div>

              <div className="bg-akasha-orange/5 border-2 border-akasha-orange rounded-sm p-6 md:p-7 flex flex-col relative shadow-md">
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center bg-akasha-orange text-akasha-white px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.22em] whitespace-nowrap"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Your bundle
                </span>
                <p className="text-[11px] font-body uppercase tracking-[0.22em] text-akasha-orange mb-4 mt-1">
                  Summer Self-Care bundle
                </p>
                <ul className="space-y-2 font-body text-akasha-gray-1 text-[15px] leading-relaxed flex-1">
                  <li className="flex justify-between">
                    <span>200hr Essential</span>
                    <span className="text-akasha-black">US${bundle.essential}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>80hr Yin Training</span>
                    <span className="text-akasha-black">US${bundle.yin}</span>
                  </li>
                </ul>
                <p className="mt-5 pt-4 border-t border-akasha-orange/30 font-body flex justify-between">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-akasha-orange self-end">
                    You pay
                  </span>
                  <span className="font-heading text-akasha-orange text-3xl" style={{ fontWeight: 400 }}>
                    US${bundle.total}
                  </span>
                </p>
                {showWellnessNote ? (
                  <p className="text-[11px] font-body text-akasha-orange/90 mt-3 leading-snug">
                    Apply {phase.couponCode} at checkout and the bundle drops
                    to US${bundle.popUpTotal}.
                  </p>
                ) : null}
              </div>

              <div className="bg-akasha-black text-akasha-white rounded-sm p-6 md:p-7 flex flex-col justify-center text-center">
                <p className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-gold mb-3">
                  You keep
                </p>
                <p
                  className="font-heading text-akasha-white text-4xl md:text-5xl mb-2"
                  style={{ fontWeight: 400 }}
                >
                  US${bundle.savings}
                </p>
                <p className="font-body text-akasha-gray-4 text-sm leading-relaxed">
                  {Math.round((bundle.savings / 1790) * 100)}% less than buying
                  the two trainings separately, both certifications still
                  yours.
                </p>
                <p className="text-[10px] font-body uppercase tracking-[0.25em] text-akasha-gold/80 mt-4">
                  Offer ends {phase.key === 'phase1' ? 'July 15' : 'July 31'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials, one-at-a-time fade carousel */}
        <TestimonialCarousel />


        {/* Mirror the hub homepage card grids so marketing can preview how
            the campaign reads alongside the rest of the catalog. The same
            shared components render here, no live page is touched. Cards
            outside the Summer Self-Care offer (Essential + Yin) have their
            60% Yoga Day badge + promo price stripped via
            stripCampaignDiscount() so the page visual stays on-message. */}
        <TrustStrip />

        <MainProducts
          premiumOverride={stripCampaignDiscount(courses.find((c) => c.slug === '200h-premium'))}
        />

        <CategorySection
          id="advanced"
          eyebrow="For Certified Teachers"
          heading="Advanced Courses"
          intro="Specialized modules to continue your path after the 200-Hour Certification."
          courses={getCoursesByCategory(CATEGORIES.ADVANCED).map(stripCampaignDiscount)}
          bg="bg-akasha-gray-4/30"
        />

        <CategorySection
          id="other"
          eyebrow="Open to All"
          heading="Other Courses & On-Site"
          intro="Workshops and retreats open to everyone, no prior yoga training required."
          courses={getCoursesByCategory(CATEGORIES.OTHER).map(stripCampaignDiscount)}
          bg="bg-akasha-white"
        />

        {/* Tracking hook placeholder. When Wira sends the post-pay tracking
            snippet, drop it inside this div so it only ever runs on the
            campaign page, never on live course pages. */}
        <div data-akasha-tracking="post-pay-placeholder" />
      </main>

      <Footer />
    </>
  );
}

function BundleCard({ phase, showWellnessNote }) {
  const bundle = phase.bundle;
  const utm = useUtmParams();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const bundleReady = Boolean(JULY_PRODUCTS.essential && JULY_PRODUCTS.yinAddOn);

  useEffect(() => {
    const onShow = (e) => {
      if (e.persisted) {
        setLoading(false);
        setError(null);
      }
    };
    window.addEventListener('pageshow', onShow);
    return () => window.removeEventListener('pageshow', onShow);
  }, []);

  async function handleBuy(e) {
    e.preventDefault();
    setError(null);
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!form.firstName.trim()) {
      setError('Please enter your first name.');
      return;
    }

    setLoading(true);
    const courseLabel = `July ${phase.label} Bundle`;
    const contentId = `july-${phase.key}|bundle`;
    trackLead(courseLabel, bundle.total);
    try {
      trackInitiateCheckout(courseLabel, bundle.total, contentId);
      const { fbc, fbp } = getMetaCookies();
      const eventId = newEventId();
      try {
        localStorage.setItem('pendingPurchase_courseName', courseLabel);
        localStorage.setItem('pendingPurchase_courseId', contentId);
        localStorage.setItem('pendingPurchase_price', String(bundle.total));
        localStorage.setItem('pendingPurchase_eventId', eventId);
        localStorage.setItem('pendingPurchase_timestamp', Date.now().toString());
      } catch (_) {}

      const url = await startWixCheckout({
        utm,
        utmNote: formatUtmNote(utm),
        productId: JULY_PRODUCTS.essential,
        extraLineItems: [{ productId: JULY_PRODUCTS.yinAddOn, quantity: 1 }],
        couponCode: phase.couponCode,
        meta: { fbc, fbp, courseSlug: 'july-bundle', planSlug: phase.key, eventId },
        buyer: {
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
        },
      });

      const finalUrl = new URL(url);
      if (fbc) finalUrl.searchParams.set('fbc', fbc);
      if (fbp) finalUrl.searchParams.set('fbp', fbp);
      window.location.href = finalUrl.toString();
    } catch (err) {
      console.error('[JulyBundle] checkout failed:', err);
      setError(err?.message || 'Could not start checkout. Please try again.');
      setLoading(false);
    }
  }

  const inputCls =
    'w-full border border-akasha-gray-3 rounded-full px-5 py-3 text-sm font-body text-akasha-black placeholder:text-akasha-gray-2 focus:outline-none focus:border-akasha-orange transition-colors bg-akasha-white';

  return (
    <div className="bg-akasha-white border-2 border-akasha-orange rounded-sm p-7 md:p-8 flex flex-col">
      <p
        className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-orange mb-2"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Recommended Bundle
      </p>
      <h3
        className="font-heading text-akasha-black text-xl md:text-2xl mb-3"
        style={{ fontWeight: 400 }}
      >
        200hr Essential + 80hr Yin
      </h3>
      <p className="font-body text-akasha-gray-1 text-sm leading-relaxed mb-5">
        Begin your certification and deepen your practice with the Yin Yoga
        add-on. Stack both for the full Summer Self-Care path.
      </p>

      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-akasha-gray-2 line-through font-body text-base">
          US$1,790
        </span>
        <span
          className="font-heading text-akasha-orange text-3xl md:text-4xl"
          style={{ fontWeight: 400 }}
        >
          US${bundle.total}
        </span>
      </div>
      <p className="text-[11px] font-body uppercase tracking-[0.2em] text-akasha-orange mb-5">
        Save US${bundle.savings}
      </p>

      <ul className="space-y-2 text-sm font-body text-akasha-gray-1 mb-6">
        <li className="flex justify-between">
          <span>200hr Essential Training</span>
          <span className="text-akasha-black">US${bundle.essential}</span>
        </li>
        <li className="flex justify-between">
          <span>80hr Yin Yoga Add-On</span>
          <span className="text-akasha-black">US${bundle.yin}</span>
        </li>
      </ul>

      <div className="border border-akasha-orange/30 bg-akasha-orange/5 rounded-sm p-3 mb-5">
        <p
          className="text-[10px] font-body uppercase tracking-[0.2em] text-akasha-orange mb-1"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Auto-applied at checkout
        </p>
        <p className="font-heading text-akasha-black text-lg mb-1" style={{ fontWeight: 400 }}>
          {phase.couponCode}
        </p>
        <p className="text-[11px] font-body text-akasha-gray-1 leading-snug">
          {showWellnessNote
            ? `Brings the Essential portion down to US$249 at checkout, bundle total US$${bundle.popUpTotal}.`
            : 'Pre-applied automatically, no manual code entry required.'}
        </p>
      </div>

      {bundleReady ? (
        <form onSubmit={handleBuy} className="mt-auto" noValidate>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              autoComplete="given-name"
              placeholder="First name *"
              value={form.firstName}
              onChange={set('firstName')}
              className={inputCls}
            />
            <input
              type="text"
              autoComplete="family-name"
              placeholder="Last name"
              value={form.lastName}
              onChange={set('lastName')}
              className={inputCls}
            />
          </div>
          <input
            type="email"
            autoComplete="email"
            placeholder="Email address *"
            value={form.email}
            onChange={set('email')}
            className={`${inputCls} mb-4`}
          />
          <button
            type="submit"
            disabled={loading}
            className={`btn-action w-full ${loading ? 'opacity-70 cursor-wait' : ''}`}
          >
            {loading ? 'Preparing your checkout…' : `Enrol in Bundle, US$${bundle.total}`}
          </button>
          {error && (
            <p className="text-xs text-akasha-orange-dark mt-3 font-body text-center">
              {error}
            </p>
          )}
        </form>
      ) : (
        <div className="mt-auto bg-akasha-gray-4/40 border border-dashed border-akasha-gray-3 rounded-sm p-4">
          <p className="text-[11px] font-body uppercase tracking-[0.2em] text-akasha-gray-1 mb-1">
            Bundle checkout pending
          </p>
          <p className="text-xs font-body text-akasha-gray-1 leading-relaxed">
            Waiting on the US$199 Yin Add-on product ID from Wix. Set
            NEXT_PUBLIC_WIX_PRODUCT_ID_YIN_ADDON in Vercel to unlock.
          </p>
        </div>
      )}
    </div>
  );
}

function TestimonialCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((i) => (i + 1) % JULY_TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIdx]);

  return (
    <section className="py-16 md:py-24 bg-akasha-gray-4/30">
      <div className="section">
        <header className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="eyebrow">From the Akasha Family</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
            Real stories from real graduates
          </h2>
          <span className="gold-rule" />
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="grid">
            {JULY_TESTIMONIALS.map((t, i) => (
              <article
                key={t.name}
                aria-hidden={i !== currentIdx}
                style={{
                  gridArea: '1 / 1',
                  opacity: i === currentIdx ? 1 : 0,
                  transition: 'opacity 1s ease',
                  pointerEvents: i === currentIdx ? 'auto' : 'none',
                }}
                className="bg-akasha-white border border-akasha-gray-4 rounded-sm p-8 md:p-12 shadow-sm"
              >
                <div className="grid md:grid-cols-[260px,1fr] gap-8 md:gap-12 items-center">
                  <div className="aspect-square overflow-hidden rounded-sm bg-akasha-gray-4 mx-auto md:mx-0 max-w-[260px] w-full shadow-sm">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <span className="text-akasha-gold text-sm tracking-[0.25em] block mb-4">
                      ★★★★★
                    </span>
                    <blockquote
                      className="font-heading text-akasha-black text-lg md:text-xl leading-relaxed italic mb-6"
                      style={{ fontWeight: 300 }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <p className="text-[12px] font-body text-akasha-gray-1 uppercase tracking-[0.28em]">
                      {t.name}{t.country ? ` · ${t.country}` : ''}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8 md:mt-10" role="tablist" aria-label="Testimonial selector">
            {JULY_TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === currentIdx}
                aria-label={`Show testimonial ${i + 1} of ${JULY_TESTIMONIALS.length}`}
                onClick={() => setCurrentIdx(i)}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  i === currentIdx
                    ? 'w-10 bg-akasha-orange'
                    : 'w-2 bg-akasha-gray-3 hover:bg-akasha-gray-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StandaloneCard({ phase }) {
  const utm = useUtmParams();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  useEffect(() => {
    const onShow = (e) => {
      if (e.persisted) {
        setLoading(false);
        setError(null);
      }
    };
    window.addEventListener('pageshow', onShow);
    return () => window.removeEventListener('pageshow', onShow);
  }, []);

  async function handleBuy(e) {
    e.preventDefault();
    setError(null);
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!form.firstName.trim()) {
      setError('Please enter your first name.');
      return;
    }

    setLoading(true);
    const courseLabel = `July ${phase.label} Essential Only`;
    const contentId = `july-${phase.key}|essential-only`;
    trackLead(courseLabel, phase.standalone.essential);
    try {
      trackInitiateCheckout(courseLabel, phase.standalone.essential, contentId);
      const { fbc, fbp } = getMetaCookies();
      const eventId = newEventId();
      try {
        localStorage.setItem('pendingPurchase_courseName', courseLabel);
        localStorage.setItem('pendingPurchase_courseId', contentId);
        localStorage.setItem('pendingPurchase_price', String(phase.standalone.essential));
        localStorage.setItem('pendingPurchase_eventId', eventId);
        localStorage.setItem('pendingPurchase_timestamp', Date.now().toString());
      } catch (_) {}

      const url = await startWixCheckout({
        utm,
        utmNote: formatUtmNote(utm),
        productId: JULY_PRODUCTS.essential,
        meta: { fbc, fbp, courseSlug: 'july-essential-only', planSlug: phase.key, eventId },
        buyer: {
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
        },
      });

      const finalUrl = new URL(url);
      if (fbc) finalUrl.searchParams.set('fbc', fbc);
      if (fbp) finalUrl.searchParams.set('fbp', fbp);
      window.location.href = finalUrl.toString();
    } catch (err) {
      console.error('[JulyStandalone] checkout failed:', err);
      setError(err?.message || 'Could not start checkout. Please try again.');
      setLoading(false);
    }
  }

  const inputCls =
    'w-full border border-akasha-gray-3 rounded-full px-5 py-3 text-sm font-body text-akasha-black placeholder:text-akasha-gray-2 focus:outline-none focus:border-akasha-orange transition-colors bg-akasha-white';

  return (
    <div className="bg-akasha-white border border-akasha-gray-4 rounded-sm p-7 md:p-8 flex flex-col">
      <p
        className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-gold mb-2"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        200hr Only
      </p>
      <h3
        className="font-heading text-akasha-black text-xl md:text-2xl mb-3"
        style={{ fontWeight: 400 }}
      >
        200hr Essential Training
      </h3>
      <p className="font-body text-akasha-gray-1 text-sm leading-relaxed mb-5">
        Prefer to begin with the 200hr Essential alone? Same training, same
        promotional rate, no coupon required.
      </p>

      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-akasha-gray-2 line-through font-body text-base">
          US$1,190
        </span>
        <span
          className="font-heading text-akasha-black text-3xl md:text-4xl"
          style={{ fontWeight: 400 }}
        >
          US${phase.standalone.essential}
        </span>
      </div>
      <p className="text-[11px] font-body uppercase tracking-[0.2em] text-akasha-gray-1 mb-6">
        Summer Self-Care price
      </p>

      <form onSubmit={handleBuy} className="mt-auto" noValidate>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <input
            type="text"
            autoComplete="given-name"
            placeholder="First name *"
            value={form.firstName}
            onChange={set('firstName')}
            className={inputCls}
          />
          <input
            type="text"
            autoComplete="family-name"
            placeholder="Last name"
            value={form.lastName}
            onChange={set('lastName')}
            className={inputCls}
          />
        </div>
        <input
          type="email"
          autoComplete="email"
          placeholder="Email address *"
          value={form.email}
          onChange={set('email')}
          className={`${inputCls} mb-4`}
        />
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex items-center justify-center w-full bg-akasha-black text-akasha-white px-8 py-3.5 rounded-full text-[12px] font-medium uppercase tracking-[0.2em] hover:bg-akasha-gray-1 transition-colors ${
            loading ? 'opacity-70 cursor-wait' : ''
          }`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {loading ? 'Preparing your checkout…' : `Enrol in 200hr Only, US$${phase.standalone.essential}`}
        </button>
        {error && (
          <p className="text-xs text-akasha-orange-dark mt-3 font-body text-center">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
