'use client';

import CheckoutForm from '@/components/checkout/CheckoutForm';
import { useTier } from '@/lib/TierContext';

// Tier (200h Essential/Premium) adapter over the shared CheckoutForm.
// Pulls pricing/plans from TierContext and enables the GA4/GTM begin_checkout
// push + the tier-level fallback coupon (e.g. Essential's July CARE30).
export default function EnrollForm() {
  const tier = useTier();
  const plans = tier.plans || [
    { slug: 'full', label: 'Pay in Full', price: tier.promoPrice, currency: 'USD', note: 'One-time payment' },
  ];

  return (
    <CheckoutForm
      title={tier.title || tier.slug}
      slug={tier.slug}
      plans={plans}
      fallbackCouponCode={tier.couponCode}
      trackGtm
      source="EnrollForm"
    />
  );
}
