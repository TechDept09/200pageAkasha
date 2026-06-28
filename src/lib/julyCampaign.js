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

// Wix product IDs the campaign checkout will reference.
// - Essential reuses the existing live product.
// - Yin Add-on at the discounted bundle price is a NEW Wix product that
//   Wira needs to publish and drop into Vercel as NEXT_PUBLIC_WIX_PRODUCT_ID_YIN_ADDON.
//   Until that env var is set, the bundle button stays disabled with a
//   friendly "coming soon" message instead of failing at checkout.
export const JULY_PRODUCTS = {
  essential: process.env.NEXT_PUBLIC_WIX_PRODUCT_ID,
  yinAddOn: process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_YIN_ADDON,
};

// Promo video for the campaign. Direct MP4 hosted on wixstatic so the
// hero can use a plain HTML5 video tag (no YouTube branding, no iframe
// overhead, and the host is already preconnected from elsewhere on the
// site). Override via NEXT_PUBLIC_JULY_BG_VIDEO if marketing swaps cuts.
export const JULY_BG_VIDEO =
  process.env.NEXT_PUBLIC_JULY_BG_VIDEO ||
  'https://video.wixstatic.com/video/cd7168_ac443cf0083b47ce9eed5df7eb1d58eb/480p/mp4/file.mp4';

// Testimonial set mirrors the live 200hr Essential page (Arianne, Clarissa,
// Coral) plus three additional graduates from the
// 200hr-yoga-teacher-training-online + homepage scrapes we previously
// verified. Each photo URL is the one Akasha publishes alongside the same
// name, so name-to-face attribution stays correct.
export const JULY_TESTIMONIALS = [
  {
    name: 'Arianne',
    country: '',
    quote:
      'For me the course was not only inspiring, but transformative! I first got into yoga for the asana practice, but I soon realized that there was more to it. I have found so much meaning in the teachings of yoga and I am ready to apply them to my life.',
    photo:
      'https://static.wixstatic.com/media/cd7168_9606fee6b4944df0bd317d69bda02b36~mv2.jpeg/v1/crop/x_150,y_577,w_932,h_936/fill/w_484,h_486,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Arianne-Testimonial%203.jpeg',
  },
  {
    name: 'Charlotte Heminsley',
    country: 'United States',
    quote:
      'Literally the best month of my life! The journey of self-discovery was unbelievable!',
    photo:
      'https://static.wixstatic.com/media/cd7168_f9565c280e5e45d6ab281e26d2942d70~mv2.jpg/v1/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/portrait.jpg',
  },
  {
    name: 'Clarissa',
    country: 'United States',
    quote:
      'This course has inspired me more than I could have ever imagined! The training has not only given me the tools to make the transformation from yoga student to yoga teacher, but also the tools to connect with my heart, relax and be present.',
    photo:
      'https://static.wixstatic.com/media/cd7168_58484436d3c24b8eb5b143ac0ff2f8ce~mv2.jpg/v1/fill/w_484,h_486,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Clarissa.jpg',
  },
  {
    name: 'Anna Kotaba',
    country: 'Poland',
    quote:
      'This place showed me how to slow down, how to open up, and how to love myself with all around.',
    photo:
      'https://static.wixstatic.com/media/cd7168_e363df305b8e43ad8049e5a4bac074a6~mv2.jpg/v1/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/portrait.jpg',
  },
  {
    name: 'Coral',
    country: 'United States',
    quote:
      'I came to deepen my own practice, with no intention to teach, but I am leaving with a passion to share this energy and the lessons I have learned here. I really feel like a new person ready to shine and to share what I have learned!',
    photo:
      'https://static.wixstatic.com/media/cd7168_26c02626fba14355aab1913375832c55~mv2.jpeg/v1/crop/x_341,y_12,w_486,h_488/fill/w_484,h_486,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/coral%20.jpeg',
  },
  {
    name: 'Kinga Kovacs',
    country: 'United Kingdom',
    quote:
      'No words would give true justice to the experience with these guys!',
    photo:
      'https://static.wixstatic.com/media/cd7168_5daede02159240e58ad572c3845f434a~mv2.webp/v1/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/portrait.webp',
  },
];
