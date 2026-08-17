// Single source of truth for campaign schedule constants.
// Previously these exact ISO strings were duplicated across
// julyCampaign.js, tiers.js, and courses.js. Import the
// constants/windows below instead of re-typing the dates.
//
// Timezone: +08:00 (WITA / Bali) is the canonical campaign timezone.
// Countdowns and "offer ends" copy are all authored against it.

// --- July 2026 (historical — kept for reference) ---
export const JULY_LAUNCH_ISO = '2026-07-02T12:00:00+08:00';
export const JULY_PHASE1_END_ISO = '2026-07-17T23:59:59+08:00';
export const JULY_PHASE2_START_ISO = '2026-07-16T00:00:00+08:00';
export const JULY_PHASE2_END_ISO = '2026-07-31T23:59:59+08:00';

// --- August 2026 — Transform Discount (Aug 16–30) ---
export const AUG_PHASE1_START_ISO = '2026-08-16T00:00:00+08:00';
export const AUG_PHASE1_END_ISO = '2026-08-30T23:59:59+08:00';

// Short human label for "offer ends" / countdown copy.
export const SALE_END_SHORT = 'August 30';

// The active storewide sale window. Every course/tier that discounts
// during the current campaign references this window. Updated per phase.
export const STOREWIDE_WINDOW = { start: AUG_PHASE1_START_ISO, end: AUG_PHASE1_END_ISO };
export const STOREWIDE_WINDOWS = [STOREWIDE_WINDOW];

// Display metadata layered on top of the window (date-range text for
// countdowns / banners). Phase = window + label.
export const STOREWIDE_PHASE = { ...STOREWIDE_WINDOW, dateRange: 'Until August 30th' };
export const STOREWIDE_PHASES = [STOREWIDE_PHASE];
