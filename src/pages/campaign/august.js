'use client';

// Confidential preview route for the August-October campaign, the
// August-October marketing plan by Ayu. Same access-key gate as the
// July preview, same rendering tree (CampaignContent), just a
// different default phase so the URL reflects the campaign the
// buyer or reviewer is actually looking at.
//
// Marketing previews via /campaign/august?key=AKASHA-JULY-2026, and
// can override the default with ?phase=augphase1 (or any other phase
// key in JULY_PHASES) if they want to compare mid-review.

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import HubNav from '@/components/hub/HubNav';
import Footer from '@/components/Footer';
import { JULY_ACCESS_KEY, JULY_PHASES } from '@/lib/julyCampaign';
import { CampaignContent } from './july';

const STORAGE_KEY = 'akasha_aug_2026_access';

export default function AugustCampaign() {
  const router = useRouter();
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
    // This is a preview of the NEXT campaign, so the default is
    // always augphase1 regardless of what phase the calendar says
    // is currently active. Marketing can still compare against
    // other phases via ?phase= (accepts any key in JULY_PHASES).
    const overrideKey = typeof router.query.phase === 'string'
      ? router.query.phase.toLowerCase()
      : null;
    const overridePhase =
      overrideKey && JULY_PHASES[overrideKey]
        ? JULY_PHASES[overrideKey]
        : null;
    setPhase(overridePhase || JULY_PHASES.augphase1);
  }, [router.query.phase]);

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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
              August Campaign Preview
            </h1>
            <p className="font-body text-akasha-gray-1 mb-8 leading-relaxed">
              This page is part of the August-October marketing plan and
              is not yet public. Enter the access code to view.
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
