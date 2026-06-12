'use client';

import { useEffect, useState } from 'react';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign'];
const STORAGE_KEY = 'akasha_utm_params';

/**
 * Capture UTM params from the landing URL and persist to sessionStorage so
 * the values survive intra-site navigation (hero → pricing → checkout).
 *
 * Returns: { utm_source, utm_medium, utm_campaign } — strings or null.
 *
 * Router-agnostic: reads window.location.search directly, so it works in
 * both Pages Router and App Router without changes.
 */
export function useUtmParams() {
  const [utm, setUtm] = useState({
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = Object.fromEntries(
      UTM_KEYS.map((k) => [k, params.get(k)])
    );
    const hasAny = UTM_KEYS.some((k) => fromUrl[k]);

    if (hasAny) {
      setUtm(fromUrl);
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
      } catch {
        // sessionStorage unavailable (private mode, etc.) — ignore.
      }
      return;
    }

    // No UTM in URL — try restoring from earlier visit in this tab.
    try {
      const cached = sessionStorage.getItem(STORAGE_KEY);
      if (cached) setUtm(JSON.parse(cached));
    } catch {
      // ignore
    }
  }, []);

  return utm;
}

/**
 * Build a single-line summary of UTM params, e.g.
 *   "Source: facebook | Medium: cpc | Campaign: summer-sale"
 * Used to attach human-readable tracking info to the Wix order.
 */
export function formatUtmNote(utm) {
  const parts = UTM_KEYS
    .filter((k) => utm[k])
    .map((k) => `${k.replace('utm_', '').replace(/^./, (c) => c.toUpperCase())}: ${utm[k]}`);
  return parts.length ? parts.join(' | ') : 'Direct (no UTM)';
}
