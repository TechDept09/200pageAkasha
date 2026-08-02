'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { THRIVECART_URL } from '@/lib/thriveCart';

// Full-screen checkout shell. Just an Akasha branding strip at the top
// (logo + close), then a ThriveCart iframe filling the entire rest of
// the viewport so it reads as an immersive checkout instead of a small
// embed inside a page. UTM/email/coupon/fbc/fbp on the parent URL get
// forwarded into the iframe URL.

const LOGO_BLACK =
  'https://static.wixstatic.com/media/c15a18_add3f1d2dd1a4582876f0249d1a2daf3~mv2.png/v1/fill/w_376,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Akasha-Yoga-Academy-Logo-2020-BLACK-500W.png';

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

  useEffect(() => {
    if (!router.isReady) return;
    const url = new URL(THRIVECART_URL);
    for (const key of FORWARD_KEYS) {
      const value = router.query[key];
      if (value && typeof value === 'string') {
        url.searchParams.set(key, value);
      }
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

  return (
    <>
      <Head>
        <title>Secure Checkout, 200-Hour Yoga Teacher Training, Akasha Yoga Academy</title>
        <meta name="description" content="Complete your enrollment for the 200-Hour Yoga Teacher Training." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          {iframeUrl ? (
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
