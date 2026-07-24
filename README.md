# Akasha Yoga Academy — Landing Pages

Marketing landing pages for Akasha Yoga Academy's Yoga Teacher Training programs
(200h Essential/Premium, 300h, 80h specializations, retreats). Built with
**Next.js 14 (Pages Router)** and **Tailwind CSS**. Checkout runs through **Wix
Headless Commerce**, and conversions are tracked via **Meta Pixel + Conversions
API**, GA4, and GTM.

## Prerequisites

- Node.js 18.18+ (or 20+)
- npm
- A Wix Headless OAuth client + Wix Stores product IDs (see env vars below)

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in the values
npm run dev                        # http://localhost:3000
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (also runs ESLint; fails on lint errors) |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint (`next lint`) |
| `npm test` | Run the Vitest unit tests once |
| `npm run test:watch` | Run Vitest in watch mode |

## Environment variables

All variables are documented in [`.env.local.example`](.env.local.example).
Summary:

- **`NEXT_PUBLIC_WIX_CLIENT_ID`** — Wix Headless OAuth client ID.
- **`NEXT_PUBLIC_WIX_PRODUCT_ID*`** — one Wix Stores product ID per course/plan.
  These are referenced by the `PRODUCT_REGISTRY` in
  [`src/lib/checkout.js`](src/lib/checkout.js) keyed by `` `${courseSlug}|${planSlug}` ``.
- **Analytics (public):** `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_GA_ID`,
  `NEXT_PUBLIC_GA_ID_MARKETING`, `NEXT_PUBLIC_GTM_ID`,
  `NEXT_PUBLIC_GTM_ID_MARKETING`. All have hardcoded fallbacks in
  [`src/pages/_app.js`](src/pages/_app.js).
  Set `NEXT_PUBLIC_ENABLE_GA_MARKETING=false` or
  `NEXT_PUBLIC_ENABLE_GTM_MARKETING=false` to drop the secondary property/container.
- **Server-only secrets** (never prefix with `NEXT_PUBLIC_`): `META_CAPI_TOKEN`,
  `META_PIXEL_ID`, `WIX_WEBHOOK_SECRET`. Set `WIX_WEBHOOK_REQUIRE_SECRET=true`
  to make the webhook fail closed when the secret is missing.

## Project structure

```
src/
  components/       200h tier + shared components (Nav, Footer, Hero, ...)
    checkout/       CheckoutForm — the shared enroll/checkout form
    campaign/       July campaign-specific components
    course/         thin course-landing variants (CourseLanding, CourseEnrollForm, ...)
    hub/            catalog/index (hub) components
  hooks/            countdown, UTM, sale-status hooks
  lib/              non-UI logic (see below)
  pages/            landing pages + /api/meta-purchase (Pages Router)
  styles/           globals.css (Tailwind)
scripts/            manual Wix checkout diagnostics (run via node, not part of tests)
```

### Key `lib/` modules

| File | Responsibility |
|---|---|
| [`campaignSchedule.js`](src/lib/campaignSchedule.js) | **Single source of truth** for July campaign dates/windows. Imported by `tiers.js`, `courses.js`, `julyCampaign.js`. |
| [`saleConfig.js`](src/lib/saleConfig.js) | Date-agnostic sale-window helpers (`getActiveWindow`, `isSaleActive`, ...). |
| [`tiers.js`](src/lib/tiers.js) | 200h Essential/Premium tier config. |
| [`courses.js`](src/lib/courses.js) | Catalog data for the hub + individual course landings. |
| [`julyCampaign.js`](src/lib/julyCampaign.js) | July campaign phase config + `getActiveJulyPhase`. |
| [`checkout.js`](src/lib/checkout.js) | `startWixCheckout`, product-ID registry. |
| [`utm.js`](src/lib/utm.js) | `attachUtmToWixRedirect` (SDK-free, unit-tested). |
| [`wixOrder.js`](src/lib/wixOrder.js) | Wix order/invoice parsing + PII hashing (used by the webhook, unit-tested). |
| [`pendingPurchase.js`](src/lib/pendingPurchase.js) | Shared localStorage keys/helpers for the enroll → thank-you Purchase handoff. |

## How checkout + tracking works

1. The buyer submits [`CheckoutForm`](src/components/checkout/CheckoutForm.js)
   (used by both `EnrollForm` for tiers and `CourseEnrollForm` for courses).
2. It stages the pending purchase in `localStorage` (`pendingPurchase.js`),
   fires Meta `InitiateCheckout` (+ optional GA4/GTM `begin_checkout`), and
   redirects to the Wix hosted checkout. UTM + `fbc`/`fbp` cookies travel along
   (including inside the nested Wix `redirectUrl`, see `attachUtmToWixRedirect`).
3. On success Wix redirects to [`/thank-you`](src/pages/thank-you.js), which
   fires the browser-side Meta `Purchase` using the staged `eventId`.
4. Separately, the Wix **Order Paid** automation POSTs to
   [`/api/meta-purchase`](src/pages/api/meta-purchase.js), which relays a
   server-side `Purchase` to the Meta CAPI. Both hits share the same `eventId`
   so Meta dedupes them.

## Adding a new course

1. Add a new entry to the `courses` array in [`src/lib/courses.js`](src/lib/courses.js)
   (set `slug`, `title`, `plans`, `saleWindows`/`salePhases` from `campaignSchedule`, etc.).
2. Add the Wix product ID(s) to `PRODUCT_REGISTRY` in
   [`src/lib/checkout.js`](src/lib/checkout.js) keyed by `` `${slug}|${planSlug}` ``,
   and add the matching `NEXT_PUBLIC_WIX_PRODUCT_ID_*` to `.env.local` / Vercel.
3. Create the page at `src/pages/<slug>.js` (mirror an existing course page; it
   renders `CourseLanding` with `getCourseBySlug(slug)`).

## Adding / editing a tier (200h)

Edit [`src/lib/tiers.js`](src/lib/tiers.js). Each tier is a flat object designed
to map to a CMS row. Sale dates come from `campaignSchedule.js` — do not hardcode
new date strings; update the central schedule instead.

## Deployment

Auto-deployed to **Vercel** via Git integration (Next.js auto-detected; no custom
`vercel.json`). Set all environment variables in the Vercel project settings for
**every** environment (production **and** preview) — in particular
`WIX_WEBHOOK_SECRET`, so `/api/meta-purchase` never runs in the fail-open state.

## Testing & linting

- Unit tests (Vitest) live in `src/lib/__tests__/` and cover the pure logic most
  prone to silent breakage: sale windows, campaign phases, UTM injection, and Wix
  order parsing. Run `npm test`.
- `npm run lint` runs `next lint`. `next build` also runs it and fails on errors.
