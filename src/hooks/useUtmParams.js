'use client';

import { useEffect, useState } from 'react';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign'];
const STORAGE_KEY = 'akasha_utm_params';

// UTM values are persisted in sessionStorage so attribution survives
// intra-site navigation (hero -> pricing -> checkout) even after the user
// loses the original query string.
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
      // Private mode can disable sessionStorage; swallow to keep the page alive.
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
      } catch {}
      return;
    }

    try {
      const cached = sessionStorage.getItem(STORAGE_KEY);
      if (cached) setUtm(JSON.parse(cached));
    } catch {}
  }, []);

  return utm;
}

export function formatUtmNote(utm) {
  const parts = UTM_KEYS
    .filter((k) => utm[k])
    .map((k) => `${k.replace('utm_', '').replace(/^./, (c) => c.toUpperCase())}: ${utm[k]}`);
  return parts.length ? parts.join(' | ') : 'Direct (no UTM)';
}
