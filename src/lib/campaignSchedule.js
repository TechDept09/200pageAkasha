// Single source of truth for the July 2026 Summer Self-Care campaign
// schedule. Previously these exact ISO strings were duplicated across
// julyCampaign.js, tiers.js, and courses.js, so a promo rotation could
// silently update one file and leave the others drifting. Import the
// constants/windows below instead of re-typing the dates.
//
// Timezone: +08:00 (WITA / Bali) is the canonical campaign timezone.
// Countdowns and "offer ends" copy are all authored against it.

// Launch moment for the July drop. The hub landing swaps to the July
// campaign landing at this exact instant and Phase 1 becomes active.
export const JULY_LAUNCH_ISO = '2026-07-02T12:00:00+08:00';

// Phase 1 (Summer Self-Care): launch through Jul 17.
export const JULY_PHASE1_END_ISO = '2026-07-17T23:59:59+08:00';

// Phase 2 (Summer Wellness): overlaps the tail of Phase 1, runs to Jul 31.
export const JULY_PHASE2_START_ISO = '2026-07-16T00:00:00+08:00';
export const JULY_PHASE2_END_ISO = '2026-07-31T23:59:59+08:00';

// Short human label for "offer ends" copy, kept next to the dates so it
// rotates with them. Matches the live Wix "Summer Wellness, until July 31st".
export const SALE_END_SHORT = 'July 31';

// The storewide sale window. Every course/tier that discounts during the
// summer shares this window. Currently runs launch → Jul 31 to match the
// live "Over 70% Summer Wellness Discount, until July 31st" promo.
export const STOREWIDE_WINDOW = { start: JULY_LAUNCH_ISO, end: JULY_PHASE2_END_ISO };
export const STOREWIDE_WINDOWS = [STOREWIDE_WINDOW];

// Display metadata layered on top of the window (date-range text for the
// countdown / banners). Phase = window + label.
export const STOREWIDE_PHASE = { ...STOREWIDE_WINDOW, dateRange: 'Until July 31st' };
export const STOREWIDE_PHASES = [STOREWIDE_PHASE];
