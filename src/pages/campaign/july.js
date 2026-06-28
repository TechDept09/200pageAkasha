'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import HubNav from '@/components/hub/HubNav';
import Footer from '@/components/Footer';
import { JULY_ACCESS_KEY, getActiveJulyPhase, JULY_PHASES } from '@/lib/julyCampaign';

const STORAGE_KEY = 'akasha_july_2026_access';

export default function JulyCampaign() {
  const [authorized, setAuthorized] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [phase, setPhase] = useState(null);
  const [selectedOption, setSelectedOption] = useState('bundle');

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && sessionStorage.getItem(STORAGE_KEY) === 'true') {
      setAuthorized(true);
    }
    // Detect active phase. Default to phase1 if outside the window so the
    // preview content still renders for marketing review.
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

  if (!mounted) {
    return null;
  }

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

  return <CampaignContent phase={phase} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />;
}

function CampaignContent({ phase, selectedOption, setSelectedOption }) {
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
        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-12 md:pb-16">
          <div className="section text-center max-w-3xl">
            <span className="eyebrow text-akasha-orange">
              July Campaign 2026 · {phase.dateRange}
            </span>
            <h1
              className="mb-3"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', fontWeight: 300 }}
            >
              {phase.headline}
            </h1>
            <p
              className="script mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)' }}
            >
              This summer, choose yourself
            </p>
            <p className="font-body text-akasha-gray-1 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              {phase.intro}
            </p>
          </div>
        </section>

        {/* Plan selector */}
        <section className="py-14 md:py-20 bg-akasha-gray-4/30">
          <div className="section">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="eyebrow">Choose your path</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.6rem)', fontWeight: 300 }}>
                200hr Essential, with or without Yin
              </h2>
              <span className="gold-rule" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Bundle */}
              <button
                type="button"
                onClick={() => setSelectedOption('bundle')}
                className={`text-left bg-akasha-white border rounded-sm p-7 md:p-8 transition-shadow ${
                  selectedOption === 'bundle'
                    ? 'border-akasha-orange shadow-md'
                    : 'border-akasha-gray-4 hover:shadow-md'
                }`}
              >
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
                  Begin your certification and deepen your practice with the Yin
                  Yoga add-on. Stack both for the full Summer Self-Care path.
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

                {showWellnessNote ? (
                  <div className="border border-akasha-orange/30 bg-akasha-orange/5 rounded-sm p-3 mb-5">
                    <p
                      className="text-[10px] font-body uppercase tracking-[0.2em] text-akasha-orange mb-1"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Use coupon code
                    </p>
                    <p className="font-heading text-akasha-black text-lg mb-1" style={{ fontWeight: 400 }}>
                      {phase.couponCode}
                    </p>
                    <p className="text-[11px] font-body text-akasha-gray-1 leading-snug">
                      Brings the Essential portion down to US$249 at checkout.
                    </p>
                  </div>
                ) : (
                  <div className="border border-akasha-orange/30 bg-akasha-orange/5 rounded-sm p-3 mb-5">
                    <p
                      className="text-[10px] font-body uppercase tracking-[0.2em] text-akasha-orange mb-1"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Use coupon code
                    </p>
                    <p className="font-heading text-akasha-black text-lg" style={{ fontWeight: 400 }}>
                      {phase.couponCode}
                    </p>
                  </div>
                )}

                <span
                  className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-full text-[12px] font-medium uppercase tracking-[0.2em] transition-colors ${
                    selectedOption === 'bundle'
                      ? 'bg-akasha-orange text-akasha-white'
                      : 'border border-akasha-black text-akasha-black'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {selectedOption === 'bundle' ? 'Selected' : 'Select Bundle'}
                </span>
              </button>

              {/* Standalone */}
              <button
                type="button"
                onClick={() => setSelectedOption('standalone')}
                className={`text-left bg-akasha-white border rounded-sm p-7 md:p-8 transition-shadow ${
                  selectedOption === 'standalone'
                    ? 'border-akasha-gold shadow-md'
                    : 'border-akasha-gray-4 hover:shadow-md'
                }`}
              >
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
                  Prefer to start without the Yin add-on? Continue with the
                  standard Yoga Day sale price already running on the Essential
                  landing page.
                </p>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-akasha-gray-2 line-through font-body text-base">
                    US$1,190
                  </span>
                  <span
                    className="font-heading text-akasha-black text-3xl md:text-4xl"
                    style={{ fontWeight: 400 }}
                  >
                    US${standalone.essential}
                  </span>
                </div>
                <p className="text-[11px] font-body uppercase tracking-[0.2em] text-akasha-gray-1 mb-6">
                  Existing Yoga Day price
                </p>

                <span
                  className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-full text-[12px] font-medium uppercase tracking-[0.2em] transition-colors ${
                    selectedOption === 'standalone'
                      ? 'bg-akasha-black text-akasha-white'
                      : 'border border-akasha-black text-akasha-black'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {selectedOption === 'standalone' ? 'Selected' : 'Select 200hr Only'}
                </span>
              </button>
            </div>

            {/* CTA bar */}
            <div className="max-w-3xl mx-auto mt-12 text-center">
              {selectedOption === 'bundle' ? (
                <>
                  <p className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-gray-1 mb-4">
                    Ready to enrol with the bundle
                  </p>
                  <p className="font-body text-akasha-gray-1 max-w-xl mx-auto mb-6 leading-relaxed">
                    Bundle checkout is being wired into Wix. For testing,
                    continue to the 200hr Essential checkout and apply{' '}
                    <strong className="text-akasha-black font-medium">
                      {phase.couponCode}
                    </strong>{' '}
                    plus the 80hr Yin add-on at the Wix cart step.
                  </p>
                  <a
                    href={`/200h-essential?coupon=${phase.couponCode}`}
                    className="btn-action"
                  >
                    Continue to Essential Checkout
                  </a>
                </>
              ) : (
                <>
                  <p className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-gray-1 mb-4">
                    Ready to enrol with 200hr only
                  </p>
                  <p className="font-body text-akasha-gray-1 max-w-xl mx-auto mb-6 leading-relaxed">
                    No coupon required, the existing Essential sale page handles
                    the US$290 price.
                  </p>
                  <a href="/200h-essential" className="btn-primary">
                    Continue to Essential Checkout
                  </a>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Value breakdown */}
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
      </main>

      <Footer />
    </>
  );
}
