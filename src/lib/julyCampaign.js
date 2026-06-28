// July 2026 Summer Self-Care Journey campaign config.
// Two-phase rollout with a confidential page (password-gated) so the new
// pricing is not discoverable until marketing wants it public. Phase
// windows match the PDF brief.

export const JULY_PHASES = {
  phase1: {
    key: 'phase1',
    start: '2026-07-03T00:00:00+08:00',
    end: '2026-07-17T23:59:59+08:00', // active through Jul 17 (live until 17th)
    label: 'Summer Self-Care Discount',
    dateRange: 'July 3-15',
    headline: 'Summer Self-Care Discount',
    sub: 'Save over 70% on 200hr Essential this July',
    intro:
      "This summer, choose yourself. Begin your 200hr Yoga Teacher Training and unlock a special Yin Yoga add-on to deepen your practice.",
    couponCode: 'CARE320',
    couponNote: 'Use coupon CARE320 for the bundle savings.',
    bundle: {
      essential: 320,
      yin: 199,
      total: 519,
      savings: 1271, // regular total 1790, bundle 519
    },
    standalone: {
      // Buyer who skips Yin falls back to the existing Essential Yoga Day
      // landing page where the $290 sale price is already plumbed in.
      essential: 290,
    },
  },
  phase2: {
    key: 'phase2',
    start: '2026-07-16T00:00:00+08:00',
    end: '2026-08-02T23:59:59+08:00', // active through Aug 2 (live until 2 Aug)
    label: 'Summer Wellness Discount',
    dateRange: 'July 16-31',
    headline: 'Summer Wellness Discount',
    sub: 'Final July offer: save over 70% on 200hr Essential',
    intro:
      "Before July ends, reset your yoga journey. Transform your practice this summer with our 200hr Essential Yoga Teacher Training.",
    couponCode: 'WELLNESS50',
    couponNote: 'Use coupon WELLNESS50 for an additional $50 off, bringing the bundle to $249 at checkout.',
    bundle: {
      essential: 299,
      yin: 199,
      total: 498,
      popUpTotal: 249, // WELLNESS50 coupon brings essential to $249
      savings: 1292,
    },
    standalone: {
      essential: 290,
    },
  },
};

export function getActiveJulyPhase(now = new Date()) {
  const candidates = [JULY_PHASES.phase1, JULY_PHASES.phase2];
  for (const p of candidates) {
    if (now >= new Date(p.start) && now <= new Date(p.end)) {
      return p;
    }
  }
  // Outside both windows. During PDF gap (Jul 16-17 both windows overlap)
  // phase1 wins because it comes first in the list, which matches "Phase 1
  // active until 17th, Phase 2 starts 16th" overlap rule from the brief.
  return null;
}

// The access key gates the page on live. Local dev still requires the same
// key so the test environment matches production behaviour. Override via
// NEXT_PUBLIC_JULY_CAMPAIGN_KEY in .env.local for stricter rotation.
export const JULY_ACCESS_KEY =
  process.env.NEXT_PUBLIC_JULY_CAMPAIGN_KEY || 'AKASHA-JULY-2026';
