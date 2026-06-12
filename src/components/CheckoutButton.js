'use client';

import { useState } from 'react';
import { startWixCheckout } from '@/lib/checkout';
import { useUtmParams, formatUtmNote } from '@/hooks/useUtmParams';

/**
 * CheckoutButton, one-click checkout with hybrid UTM tracking.
 * For the variant that also collects name + email and prefills the
 * Wix checkout form, see EnrollForm.
 */
export default function CheckoutButton({ children, className = 'btn-primary' }) {
  const utm = useUtmParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const url = await startWixCheckout({ utm, utmNote: formatUtmNote(utm) });
      window.location.href = url;
    } catch (err) {
      console.error('[CheckoutButton] failed:', err);
      setError(err?.message || 'Could not start checkout. Please try again.');
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        className={`${className} ${loading ? 'opacity-70 cursor-wait' : ''}`}
      >
        {loading ? 'Loading…' : children}
      </button>
      {error && (
        <p className="text-xs text-akasha-orange-dark mt-2 font-body">{error}</p>
      )}
    </>
  );
}
