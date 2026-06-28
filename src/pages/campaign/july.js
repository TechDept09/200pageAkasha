'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import HubNav from '@/components/hub/HubNav';
import Footer from '@/components/Footer';
import { startWixCheckout } from '@/lib/checkout';
import { useUtmParams, formatUtmNote } from '@/hooks/useUtmParams';
import { trackLead, trackInitiateCheckout, newEventId } from '@/lib/pixel';
import { getMetaCookies } from '@/lib/fbCookies';
import {
  JULY_ACCESS_KEY,
  getActiveJulyPhase,
  JULY_PHASES,
  JULY_PRODUCTS,
  JULY_VIDEO_ID,
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
        {/* Hero with YouTube video as full-bleed background. Autoplay
            requires muted (browser policy). loop wants playlist=ID set
            to itself; controls/modestbranding/rel/iv_load_policy strip
            the YouTube chrome and end-card branding so the background
            stays clean. pointer-events:none keeps clicks falling through
            to whatever overlays the player. */}
        <section className="relative overflow-hidden bg-akasha-black min-h-[88vh] flex items-center">
          {JULY_VIDEO_ID ? (
            <div className="absolute inset-0 pointer-events-none">
              <iframe
                src={`https://www.youtube.com/embed/${JULY_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${JULY_VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1`}
                title=""
                allow="autoplay; encrypted-media; picture-in-picture"
                frameBorder="0"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vw] h-[180vw] md:w-[110vw] md:h-[62vw] min-h-full pointer-events-none"
                style={{ border: 0 }}
              />
            </div>
          ) : null}

          {/* Darken + gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />

          <div className="relative z-10 section text-center max-w-3xl text-akasha-white py-20 md:py-28">
            <span
              className="inline-block text-[11px] tracking-[0.3em] uppercase font-medium mb-4"
              style={{ fontFamily: 'Inter, sans-serif', color: '#F5B872' }}
            >
              July Campaign 2026 · {phase.dateRange}
            </span>
            <h1
              className="mb-4"
              style={{
                fontSize: 'clamp(2.6rem, 6.4vw, 4.6rem)',
                fontWeight: 300,
                lineHeight: 1.05,
                color: '#FFFFFF',
              }}
            >
              {phase.headline}
            </h1>
            <p
              className="script mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: '#F5B872',
              }}
            >
              This summer, choose yourself
            </p>
            <p
              className="font-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(255,255,255,0.92)' }}
            >
              {phase.intro}
            </p>
            <a
              href="#enroll"
              className="inline-flex items-center justify-center bg-akasha-orange text-akasha-white px-10 py-4 rounded-full text-[13px] font-semibold uppercase tracking-[0.2em] hover:bg-akasha-orange-dark transition-colors shadow-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              See Your Bundle
            </a>
          </div>
        </section>

        {/* Two checkout options */}
        <section className="py-14 md:py-20 bg-akasha-gray-4/30" id="enroll">
          <div className="section">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="eyebrow">Choose your path</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.6rem)', fontWeight: 300 }}>
                200hr Essential, with or without Yin
              </h2>
              <span className="gold-rule" />
            </div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
              <BundleCard phase={phase} showWellnessNote={showWellnessNote} />
              <StandaloneCard phase={phase} />
            </div>
          </div>
        </section>

        {/* Bundle value */}
        <section className="py-14 md:py-20 bg-akasha-white">
          <div className="section max-w-4xl">
            <div className="text-center mb-10">
              <span className="eyebrow">Bundle Transparency</span>
              <h2 style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.4rem)', fontWeight: 300 }}>
                Full Bundle Value &amp; Savings
              </h2>
              <span className="gold-rule" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-akasha-gray-4/30 border border-akasha-gray-4 rounded-sm p-6">
                <p className="text-[11px] font-body uppercase tracking-[0.2em] text-akasha-gray-1 mb-3">
                  Normal Price
                </p>
                <p className="font-body text-akasha-gray-1 leading-relaxed">
                  200hr Essential <span className="float-right text-akasha-black">US$1,190</span>
                </p>
                <p className="font-body text-akasha-gray-1 leading-relaxed">
                  80hr Yin Training <span className="float-right text-akasha-black">US$600</span>
                </p>
                <p className="font-body text-akasha-black mt-4 pt-3 border-t border-akasha-gray-4 font-medium">
                  Total Value <span className="float-right">US$1,790</span>
                </p>
              </div>

              <div className="bg-akasha-gray-4/30 border border-akasha-orange/40 rounded-sm p-6">
                <p className="text-[11px] font-body uppercase tracking-[0.2em] text-akasha-orange mb-3">
                  Campaign Price
                </p>
                <p className="font-body text-akasha-gray-1 leading-relaxed">
                  200hr Essential <span className="float-right text-akasha-black">US${bundle.essential}</span>
                </p>
                <p className="font-body text-akasha-gray-1 leading-relaxed">
                  80hr Yin Training <span className="float-right text-akasha-black">US${bundle.yin}</span>
                </p>
                <p className="font-body text-akasha-orange mt-4 pt-3 border-t border-akasha-gray-4 font-medium">
                  Bundle Price <span className="float-right">US${bundle.total}</span>
                </p>
                {showWellnessNote ? (
                  <p className="text-[11px] font-body text-akasha-orange mt-2 leading-snug">
                    With {phase.couponCode}: bundle drops to US${bundle.popUpTotal}.
                  </p>
                ) : null}
              </div>

              <div className="bg-akasha-white border border-akasha-orange/40 rounded-sm p-6 text-center flex flex-col justify-center">
                <p className="text-[11px] font-body uppercase tracking-[0.2em] text-akasha-orange mb-3">
                  Total Savings
                </p>
                <p
                  className="font-heading text-akasha-orange text-4xl md:text-5xl"
                  style={{ fontWeight: 400 }}
                >
                  US${bundle.savings}
                </p>
                <p className="text-[11px] font-body uppercase tracking-[0.2em] text-akasha-gray-1 mt-3">
                  Available until {phase.key === 'phase1' ? 'July 15' : 'July 31'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials, modern photo-first grid */}
        <section className="py-16 md:py-24 bg-akasha-white">
          <div className="section">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <span className="eyebrow">From the Akasha Family</span>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
                Real stories from real graduates
              </h2>
              <span className="gold-rule" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
              {JULY_TESTIMONIALS.map((t) => (
                <article
                  key={t.name}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-akasha-gray-4 mb-6 shadow-sm">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute bottom-3 left-3 inline-flex items-center bg-akasha-white/95 backdrop-blur-sm text-akasha-gold text-[11px] tracking-[0.25em] px-3 py-1 rounded-full shadow">
                      ★★★★★
                    </span>
                  </div>
                  <blockquote
                    className="font-heading text-akasha-black text-[15px] md:text-base leading-relaxed mb-4 italic"
                    style={{ fontWeight: 300 }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="text-[11px] font-body text-akasha-gray-1 uppercase tracking-[0.28em]">
                    {t.name}{t.country ? ` · ${t.country}` : ''}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

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
        Prefer to start without the Yin add-on? Continue with the standard
        Yoga Day sale price, no coupon required.
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
        Existing Yoga Day price
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
