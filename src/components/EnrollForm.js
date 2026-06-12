'use client';

import { useState } from 'react';
import { startWixCheckout } from '@/lib/checkout';
import { useUtmParams, formatUtmNote } from '@/hooks/useUtmParams';

/**
 * EnrollForm, collects name + email on the landing page, then opens the
 * Wix checkout with those details (and the product) already pre-filled.
 * UTM is attached the same way as CheckoutButton: customFields + buyerNote
 * on the checkout, plus utm_* params re-appended to the redirect URL.
 */
export default function EnrollForm() {
  const utm = useUtmParams();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e) {
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
    try {
      const url = await startWixCheckout({
        utm,
        utmNote: formatUtmNote(utm),
        buyer: {
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
        },
      });
      window.location.href = url;
    } catch (err) {
      console.error('[EnrollForm] failed:', err);
      setError(err?.message || 'Could not start checkout. Please try again.');
      setLoading(false);
    }
  }

  const inputCls =
    'w-full border border-akasha-gray-3 rounded-full px-5 py-3 text-sm font-body text-akasha-black placeholder:text-akasha-gray-2 focus:outline-none focus:border-akasha-orange transition-colors bg-akasha-white';

  return (
    <form onSubmit={handleSubmit} noValidate>
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
        {loading ? 'Preparing your checkout…' : 'Enroll Now, US$290'}
      </button>

      {error && (
        <p className="text-xs text-akasha-orange-dark mt-3 font-body text-center">
          {error}
        </p>
      )}

      <p className="text-[10px] font-body text-akasha-gray-1 mt-3 tracking-[0.2em] uppercase text-center">
        Secure checkout · Powered by Wix
      </p>
    </form>
  );
}
