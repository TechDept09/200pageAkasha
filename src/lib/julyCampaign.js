// July 2026 Summer Self-Care Journey campaign config.
// Two-phase rollout with a confidential page (password-gated) so the new
// pricing is not discoverable until marketing wants it public. Phase
// windows match the PDF brief.

// Launch moment for the July drop. The hub landing swaps to the July
// campaign landing at this exact instant, the pre-launch countdown
// self-hides, and Phase 1 becomes active. Keep this the single source
// of truth so hub + campaign preview + phase config never drift.
export const JULY_LAUNCH_ISO = '2026-07-02T12:00:00+08:00';

export const JULY_PHASES = {
  phase1: {
    key: 'phase1',
    // Phase 1 opens the moment the launch countdown hits zero (2 Jul
    // 12:00 WITA), not the next calendar day. Removes the awkward
    // 12-hour gap between 'countdown zero' and 'phase active'.
    start: JULY_LAUNCH_ISO,
    end: '2026-07-17T23:59:59+08:00', // active through Jul 17 (live until 17th)
    label: 'Summer Self-Care Journey',
    publicName: 'Summer Self-Care',
    dateRange: 'Offer until 15th of July',
    headline: 'Summer Self-Care Journey',
    sub: 'Save over 70% on 200hr Essential this July',
    scriptTagline: 'This summer, choose yourself',
    intro:
      'Begin your 200-Hour Yoga Teacher Training and unlock our Yin Yoga (YACEP) Bonus course to deepen your practice and teaching toolkit.',
    couponCode: 'CARE320',
    couponNote: 'Use coupon CARE320 for the bundle savings.',
    bundle: {
      essential: 320,
      yin: 199,
      total: 519,
      savings: 1271, // regular total 1790, bundle 519
    },
    standalone: {
      // Voucher-based: original standalone is US$320, campaign voucher
      // brings it down to US$290 at checkout. The Wix coupon Wira
      // set for this drop handles the delta automatically.
      essential: 290,
      originalPrice: 320,
      couponCode: 'CARE30',
    },
  },
  phase2: {
    key: 'phase2',
    start: '2026-07-16T00:00:00+08:00',
    end: '2026-08-02T23:59:59+08:00', // active through Aug 2 (live until 2 Aug)
    label: 'Summer Wellness Discount',
    publicName: 'Summer Wellness',
    dateRange: 'Offer until 31st of July',
    headline: 'Summer Wellness Discount',
    sub: 'Final July offer: save over 70% on 200hr Essential',
    scriptTagline: 'Before July ends, reset your journey',
    intro:
      'Transform your practice this summer with our 200-Hour Yoga Teacher Training (Essential Path).',
    couponCode: 'WELLNESS50',
    couponNote: 'Use coupon WELLNESS50 for an additional US$41 off, bringing the Essential to US$249 at checkout.',
    // Phase 2 simplifies to Essential only at US$290, with WELLNESS50
    // bringing it to US$249 at checkout. No bundle in this phase.
    bundle: null,
    standalone: {
      essential: 290,
      voucherPrice: 249,
    },
  },
};

// Emergency Reset / Backup plan from the brief, deployed manually if
// Phase 1 underperforms in the first week. Only Essential goes live;
// Yin is dropped, bundle is dropped, and a single voucher coupon takes
// the Essential price down to US$249 at the Wix checkout. The coupon
// code is env-tunable so marketing can rotate the voucher name without
// a redeploy.
const BACKUP_COUPON =
  process.env.NEXT_PUBLIC_JULY_BACKUP_COUPON || 'FINAL41';

JULY_PHASES.backup = {
  key: 'backup',
  label: 'Final Self-Care Offer',
  publicName: 'Final Self-Care',
  dateRange: 'Final offer',
  headline: 'Last chance, 200hr Essential',
  scriptTagline: 'A quiet, final invitation',
  intro:
    'A final way in. The 200-Hour Yoga Teacher Training (Essential Path) at an exclusive closing price, for those who feel the call now.',
  couponCode: BACKUP_COUPON,
  couponNote: `Use voucher ${BACKUP_COUPON} for an additional US$41 off, bringing the Essential to US$249 at checkout.`,
  bundle: null,
  standalone: {
    essential: 290,
    voucherPrice: 249,
  },
};

// Manual switch so marketing decides when the backup goes live. Set
// NEXT_PUBLIC_JULY_BACKUP_MODE=true in Vercel and the campaign page
// flips to the Essential-only voucher view.
export const JULY_BACKUP_MODE =
  process.env.NEXT_PUBLIC_JULY_BACKUP_MODE === 'true';

export function getActiveJulyPhase(now = new Date()) {
  if (JULY_BACKUP_MODE) return JULY_PHASES.backup;
  const candidates = [JULY_PHASES.phase1, JULY_PHASES.phase2];
  for (const p of candidates) {
    if (now >= new Date(p.start) && now <= new Date(p.end)) {
      return p;
    }
  }
  return null;
}

// The access key gates the page on live. Local dev still requires the same
// key so the test environment matches production behaviour. Override via
// NEXT_PUBLIC_JULY_CAMPAIGN_KEY in .env.local for stricter rotation.
export const JULY_ACCESS_KEY =
  process.env.NEXT_PUBLIC_JULY_CAMPAIGN_KEY || 'AKASHA-JULY-2026';

// Wix product IDs the campaign checkout will reference.
// - Essential reuses the existing live product.
// - Yin Add-on: until Wira publishes a dedicated $199 add-on product,
//   reuse the live $239 standalone 80H Yin product so the bundle button
//   is testable end-to-end now. The campaign coupon (CARE320 / WELLNESS50)
//   set on the Wix Dashboard absorbs the price gap. Once a dedicated
//   add-on lands, set NEXT_PUBLIC_WIX_PRODUCT_ID_YIN_ADDON in Vercel and
//   it takes over without code changes.
export const JULY_PRODUCTS = {
  essential: process.env.NEXT_PUBLIC_WIX_PRODUCT_ID,
  yinAddOn:
    process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_YIN_ADDON ||
    process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_80H_YIN_FULL,
};

// Promo video for the campaign. Direct MP4 hosted on wixstatic so the
// hero can use a plain HTML5 video tag (no YouTube branding, no iframe
// overhead, and the host is already preconnected from elsewhere on the
// site). Override via NEXT_PUBLIC_JULY_BG_VIDEO if marketing swaps cuts.
export const JULY_BG_VIDEO =
  process.env.NEXT_PUBLIC_JULY_BG_VIDEO ||
  'https://video.wixstatic.com/video/cd7168_ac443cf0083b47ce9eed5df7eb1d58eb/480p/mp4/file.mp4';

// Intro videos surfaced between the hero and the checkout block so the
// buyer hears from Akasha before being asked to enrol. Embedded via
// youtube-nocookie + lazy iframe so they cost nothing until scrolled
// into view.
export const JULY_INTRO_VIDEOS = [
  {
    id: '6wsHASyBkc0',
    title: 'A welcome from Akasha Yoga Academy',
    caption: 'Meet the founders and feel the space where this training lives.',
  },
  {
    id: 'uqwvmmmnenY',
    title: 'A look inside the 200hr training',
    caption: 'Inside the practice: asana, breath, philosophy, and community.',
  },
];

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
