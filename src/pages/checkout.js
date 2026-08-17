'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getThriveCartUrl, getDefaultCoupon, isPaymentDisabled } from '@/lib/thriveCart';

// Full-screen checkout shell. Just an Akasha branding strip at the top
// (logo + close), then a ThriveCart iframe filling the entire rest of
// the viewport so it reads as an immersive checkout instead of a small
// embed inside a page. UTM/email/coupon/fbc/fbp on the parent URL get
// forwarded into the iframe URL.

const LOGO_BLACK =
  '/images/akasha-logo-black.png';

const FORWARD_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'email',
  'coupon',
  'fbc',
  'fbp',
];

export default function CheckoutPage() {
  const router = useRouter();
  const [iframeUrl, setIframeUrl] = useState('');
  const [maintenance, setMaintenance] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;
    const product = typeof router.query.product === 'string' ? router.query.product : null;

    // Payment temporarily closed for this product — skip the ThriveCart
    // iframe entirely and let the shell render the maintenance card below.
    if (isPaymentDisabled(product)) {
      setMaintenance(true);
      setIframeUrl('');
      return;
    }
    setMaintenance(false);

    const url = new URL(getThriveCartUrl(product));
    for (const key of FORWARD_KEYS) {
      const value = router.query[key];
      if (value && typeof value === 'string') {
        url.searchParams.set(key, value);
      }
    }
    // Auto-apply the product's default coupon (e.g. TRANSFORM50 for the
    // 200h Essential) when the buyer didn't bring their own in the query.
    if (!url.searchParams.get('coupon')) {
      const defaultCoupon = getDefaultCoupon(product);
      if (defaultCoupon) url.searchParams.set('coupon', defaultCoupon);
    }
    setIframeUrl(url.toString());
  }, [router.isReady, router.query]);

  const handleClose = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  // ── Iframe navigation detection ──────────────────────────────
  // ThriveCart runs cross-origin so we can't read iframe.location.
  // Listen for postMessage events that ThriveCart may send for
  // close / cancel / purchase actions.
  //
  // Iframe breakout for Akasha links is handled in _app.js via
  // window.self !== window.top detection — no need to count iframe
  // loads here.

  const closeCheckout = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  // Listen for ThriveCart postMessage events.
  useEffect(() => {
    const handleMessage = (event) => {
      if (!event.origin || !event.origin.includes('thrivecart.com')) return;

      let data = event.data;
      if (typeof data === 'string') {
        try { data = JSON.parse(data); } catch { /* plain string */ }
      }

      const action =
        (typeof data === 'string' ? data : null) ||
        data?.action ||
        data?.event ||
        data?.type ||
        data?.message;

      if (
        action === 'close' ||
        action === 'cancel' ||
        action === 'back' ||
        action === 'navigate_away'
      ) {
        closeCheckout();
      }

      if (
        action === 'purchase' ||
        action === 'order_complete' ||
        action === 'checkout_complete'
      ) {
        router.push('/thank-you');
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [router]);

  return (
    <>
      <Head>
        <title>Secure Checkout, 200-Hour Yoga Teacher Training, Akasha Yoga Academy</title>
        <meta name="description" content="Complete your enrollment for the 200-Hour Yoga Teacher Training." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Full-viewport shell. dvh handles the iOS Safari 100vh bug
          (address bar showing/hiding no longer clips the iframe).
          Older browsers get 100vh as a fallback via inline style. */}
      <div
        className="fixed inset-0 flex flex-col bg-akasha-gray-4/30"
        style={{ height: '100dvh' }}
      >
        {/* Top branding strip. Logo left, trust cue center on desktop,
            close button right. Kept slim so the iframe below dominates. */}
        <header className="flex-none h-14 md:h-16 bg-akasha-white border-b border-akasha-gray-4 flex items-center justify-between px-3 md:px-6">
          <a href="/" aria-label="Akasha Yoga Academy" className="flex items-center">
            <img
              src={LOGO_BLACK}
              alt="Akasha Yoga Academy"
              className="h-8 md:h-9 w-auto"
              loading="eager"
            />
          </a>

          <div className="hidden md:flex items-center gap-4 text-[10px] font-body uppercase tracking-[0.22em] text-akasha-gray-1">
            <span>Secure checkout</span>
            <span aria-hidden="true">·</span>
            <span>14-day money-back guarantee</span>
          </div>

          {/* Mobile: compact trust cue between logo + close so the
              header still says something reassuring at a glance. */}
          <span className="md:hidden text-[9px] font-body uppercase tracking-[0.18em] text-akasha-gray-1">
            Secure checkout
          </span>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close checkout"
            className="w-11 h-11 md:w-10 md:h-10 flex items-center justify-center rounded-full text-akasha-black hover:bg-akasha-gray-4/60 transition-colors -mr-1 md:mr-0"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        {/* Iframe fills every remaining pixel. ThriveCart handles
            internal scroll if its content is taller than the container.
            -webkit-overflow-scrolling helps momentum scroll on iOS
            when the iframe body is scrollable. */}
        <div
          className="flex-1 min-h-0 bg-akasha-white overflow-hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {maintenance ? (
            <div className="w-full h-full flex items-center justify-center px-6">
              <div className="max-w-md text-center bg-akasha-white border border-akasha-gray-4 rounded-md p-8 md:p-10 shadow-sm">
                <p
                  className="text-[10px] font-body uppercase tracking-[0.28em] text-akasha-orange mb-3"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Checkout Under Maintenance
                </p>
                <h1
                  className="font-heading text-akasha-black text-2xl md:text-3xl mb-4"
                  style={{ fontWeight: 400 }}
                >
                  Enrollment temporarily unavailable
                </h1>
                <p className="font-body text-akasha-gray-1 text-sm md:text-base leading-relaxed mb-6">
                  We&rsquo;re performing scheduled maintenance on this course&rsquo;s
                  payment page. Please check back a little later, or reach out to
                  our team if you&rsquo;d like to reserve your seat right away.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[12px] font-medium uppercase tracking-[0.18em] bg-akasha-black text-akasha-white hover:bg-akasha-gray-1 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Back to Home
                  </a>
                  <a
                    href="mailto:info@akashayogaacademy.com?subject=Enrollment%20enquiry"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[12px] font-medium uppercase tracking-[0.18em] border border-akasha-black text-akasha-black hover:bg-akasha-black hover:text-akasha-white transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          ) : iframeUrl ? (
            <iframe
              src={iframeUrl}
              title="Secure ThriveCart checkout"
              className="w-full h-full block"
              style={{ border: 'none' }}
              allow="payment *"
              loading="eager"
              scrolling="yes"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-akasha-gray-3 border-t-akasha-orange animate-spin" />
              <p className="font-body text-akasha-gray-1 text-sm animate-pulse-soft">
                Preparing secure checkout&hellip;
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
