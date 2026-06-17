// Sale-window helpers. Each campaign is a list of active windows, since
// the Akasha Yoga Day push has a deliberate gap (21-24 Jun active, 25-27
// off, 28-30 active again, then ads alive on website until 2 Jul lunch
// time Bali). Components ask "are we currently in a sale window?" and
// "when does this window close?" instead of comparing against a single
// SALE_END value.

export const SALE_END = '2026-07-02T12:00:00+07:00';

export const SALE_REGULAR_PRICE = 1190;
export const SALE_PROMO_PRICE = 290;
export const SALE_SAVINGS = SALE_REGULAR_PRICE - SALE_PROMO_PRICE;

// Default fallback for tiers/courses that have a single saleEnd only.
function asWindow(end) {
  return [{ start: '2020-01-01T00:00:00+07:00', end }];
}

export function normalizeWindows(input) {
  if (Array.isArray(input) && input.length) return input;
  if (typeof input === 'string') return asWindow(input);
  return [];
}

export function getActiveWindow(windows, now = new Date()) {
  return windows.find((w) => {
    const start = new Date(w.start);
    const end = new Date(w.end);
    return now >= start && now <= end;
  });
}

export function getNextWindow(windows, now = new Date()) {
  return windows.find((w) => new Date(w.start) > now);
}

export function isSaleActive(windows, now = new Date()) {
  return !!getActiveWindow(windows, now);
}

export function isAllExpired(windows, now = new Date()) {
  if (!windows.length) return false;
  return windows.every((w) => new Date(w.end) < now);
}

// Returns the current window's end if we're inside one; otherwise the
// next window's end; otherwise null. Used by SaleCountdown / UrgencyBanner.
export function getCurrentWindowEnd(windows, now = new Date()) {
  const active = getActiveWindow(windows, now);
  if (active) return active.end;
  const next = getNextWindow(windows, now);
  if (next) return next.end;
  return null;
}
