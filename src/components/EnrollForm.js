'use client';

import { useState, useEffect } from 'react';
import { startWixCheckout, getProductId } from '@/lib/checkout';
import { useUtmParams, formatUtmNote } from '@/hooks/useUtmParams';
import { useTier } from '@/lib/TierContext';
import { trackLead, trackInitiateCheckout, newEventId } from '@/lib/pixel';
import { getMetaCookies } from '@/lib/fbCookies';

function price(n, currency) {
  if (!n) return null;
  return currency === 'USD' ? `US$${n}` : `${currency}${n}`;
}

export default function EnrollForm() {
  const utm = useUtmParams();
  const tier = useTier();
  const plans = tier.plans || [
    { slug: 'full', label: 'Pay in Full', price: tier.promoPrice, currency: 'USD', note: 'One-time payment' },
  ];

  const [selectedPlan, setSelectedPlan] = useState(plans[0]?.slug || 'full');
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const activePlan = plans.find((p) => p.slug === selectedPlan) || plans[0];

  const skipBuyerForm = !!activePlan?.wixProductPageUrl;

  // BB: if the buyer hits Back from the Wix checkout, the browser restores
  // this page from bfcache with loading still true and the submit button
  // permanently disabled. Reset on pageshow when persisted is true.
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

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    // Pay-in-Full needs name + email to pre-fill the Wix checkout. Payment-Plan
    // routes the buyer to the native Wix product page which collects those
    // fields itself, so we skip validation when wixProductPageUrl is set.
    if (!skipBuyerForm) {
      if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        setError('Please enter a valid email address.');
        return;
      }
      if (!form.firstName.trim()) {
        setError('Please enter your first name.');
        return;
      }
    }

    setLoading(true);
    trackLead(tier.title || tier.slug, activePlan?.price);

    try {
      trackInitiateCheckout(tier.title || tier.slug, activePlan?.price, `${tier.slug}|${selectedPlan}`);

      const { fbc, fbp } = getMetaCookies();

      // Pre-stage browser Purchase event data. The thank-you redirect
      // from Wix lands on /?status=thank-you with no query context, so
      // index.js needs to read these values from localStorage to fire
      // Purchase. eventId is shared with the CAPI side via Wix
      // customField so Meta dedupes both hits.
      const eventId = newEventId();
      const courseLabel = tier.title || tier.slug;
      const contentId = `${tier.slug}|${selectedPlan}`;
      try {
        localStorage.setItem('pendingPurchase_courseName', courseLabel);
        localStorage.setItem('pendingPurchase_courseId', contentId);
        localStorage.setItem('pendingPurchase_price', String(activePlan?.price || 0));
        localStorage.setItem('pendingPurchase_eventId', eventId);
        localStorage.setItem('pendingPurchase_timestamp', Date.now().toString());
      } catch (_) {
        // Private mode or quota: continue without browser-side Purchase,
        // CAPI still tracks the order via the Wix Order Paid webhook.
      }

      // Subscription/Payment-Plan variants are dropped by the Wix headless
      // SDK, so the plan declares a wixProductPageUrl and we redirect the
      // buyer to the native Wix product page. UTM + fb cookies travel as
      // query params so Wix-side analytics still see attribution.
      if (activePlan?.wixProductPageUrl) {
        const u = new URL(activePlan.wixProductPageUrl);
        ['utm_source','utm_medium','utm_campaign'].forEach((k) => { if (utm[k]) u.searchParams.set(k, utm[k]); });
        if (fbc) u.searchParams.set('fbc', fbc);
        if (fbp) u.searchParams.set('fbp', fbp);
        if (form.email) u.searchParams.set('email', form.email.trim());
        window.location.href = u.toString();
        return;
      }

      const productId = getProductId(tier.slug, selectedPlan);
      // Auto-apply the plan or tier coupon when set. Plan-level wins
      // (Premium 6-month plan may carry its own), tier is the fallback
      // (Essential's July CARE30 voucher lives on the tier config).
      const couponCode = activePlan?.couponCode || tier.couponCode || undefined;
      const url = await startWixCheckout({
        utm,
        utmNote: formatUtmNote(utm),
        productId,
        couponCode,
        meta: { fbc, fbp, courseSlug: tier.slug, planSlug: selectedPlan, eventId },
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
      console.error('[EnrollForm] failed:', err);
      setError(err?.message || 'Could not start checkout. Please try again.');
      setLoading(false);
    }
  }

  const inputCls =
    'w-full border border-akasha-gray-3 rounded-full px-5 py-3 text-sm font-body text-akasha-black placeholder:text-akasha-gray-2 focus:outline-none focus:border-akasha-orange transition-colors bg-akasha-white';

  return (
    <form onSubmit={handleSubmit} noValidate>
      {plans.length > 1 ? (
        <div className="grid grid-cols-2 gap-2 mb-5">
          {plans.map((p) => {
            const isActive = p.slug === selectedPlan;
            return (
              <button
                key={p.slug}
                type="button"
                onClick={() => setSelectedPlan(p.slug)}
                className={`text-left p-3 rounded-sm border transition-colors ${
                  isActive
                    ? 'border-akasha-orange bg-akasha-orange/5'
                    : 'border-akasha-gray-4 bg-akasha-white hover:border-akasha-gray-2'
                }`}
              >
                <p
                  className="text-[10px] font-body uppercase tracking-[0.18em] text-akasha-gray-1 mb-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {p.label}
                </p>
                <p
                  className="font-heading text-akasha-black text-xl leading-none"
                  style={{ fontWeight: 400 }}
                >
                  {price(p.price, p.currency)}
                </p>
                {p.note ? (
                  <p className="text-[10px] font-body text-akasha-gray-1 mt-1 leading-tight">
                    {p.note}
                  </p>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}

      {skipBuyerForm ? null : (
        <>
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
        </>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`btn-action w-full ${loading ? 'opacity-70 cursor-wait' : ''}`}
      >
        {loading
          ? 'Preparing your checkout…'
          : skipBuyerForm
            ? `Continue to ${activePlan?.label || 'Checkout'}`
            : `Enroll Now, ${price(activePlan?.price, activePlan?.currency)}`}
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
