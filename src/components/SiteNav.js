'use client';

// Thin wrapper around HubNav that injects TierContext-aware CTA text
// and the UrgencyBanner. Course landing pages (200h-essential, 300h-ytt,
// 80h-yin, etc.) import this component so the header CTA reflects the
// current tier's price (e.g. "Enroll US$290") and the sale countdown
// banner appears above the nav.

import HubNav from '@/components/hub/HubNav';
import { useTier } from '@/lib/TierContext';
import { USE_THRIVECART } from '@/lib/thriveCart';

export default function SiteNav() {
  const tier = useTier();
  const ctaHref = USE_THRIVECART ? '/checkout' : '#pricing';

  return (
    <HubNav
      ctaText={tier.ctaShort}
      ctaHref={ctaHref}
      showUrgencyBanner
    />
  );
}
