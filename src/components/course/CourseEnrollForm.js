'use client';

import CheckoutForm from '@/components/checkout/CheckoutForm';

// Course-landing adapter over the shared CheckoutForm. Individual courses
// carry their own plans array; the tier-only GA4/GTM begin_checkout push and
// coupon fallback stay off to preserve the existing course checkout behavior.
export default function CourseEnrollForm({ course }) {
  const { plans = [], slug, title } = course;

  return (
    <CheckoutForm
      title={title || slug}
      slug={slug}
      plans={plans}
      source="CourseEnrollForm"
      emptyStateMessage="Checkout for this course is being set up. Please contact our team."
    />
  );
}
