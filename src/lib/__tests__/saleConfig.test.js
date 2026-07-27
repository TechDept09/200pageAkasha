import { describe, it, expect } from 'vitest';
import {
  normalizeWindows,
  getActiveWindow,
  getNextWindow,
  isSaleActive,
  isAllExpired,
  getCurrentWindowEnd,
  getActivePhase,
} from '@/lib/saleConfig';

const WINDOWS = [
  { start: '2026-07-02T12:00:00+08:00', end: '2026-07-17T23:59:59+08:00' },
  { start: '2026-07-28T00:00:00+08:00', end: '2026-07-30T23:59:59+08:00' },
];

const during = new Date('2026-07-10T00:00:00+08:00');
const gap = new Date('2026-07-20T00:00:00+08:00');
const before = new Date('2026-06-01T00:00:00+08:00');
const after = new Date('2026-08-01T00:00:00+08:00');

describe('normalizeWindows', () => {
  it('returns arrays as-is', () => {
    expect(normalizeWindows(WINDOWS)).toBe(WINDOWS);
  });
  it('wraps a single end-date string into one open window', () => {
    const w = normalizeWindows('2026-07-17T23:59:59+08:00');
    expect(w).toHaveLength(1);
    expect(w[0].end).toBe('2026-07-17T23:59:59+08:00');
  });
  it('returns [] for empty/invalid input', () => {
    expect(normalizeWindows(null)).toEqual([]);
    expect(normalizeWindows([])).toEqual([]);
  });
});

describe('getActiveWindow / isSaleActive', () => {
  it('finds the window we are inside', () => {
    expect(getActiveWindow(WINDOWS, during)).toBe(WINDOWS[0]);
    expect(isSaleActive(WINDOWS, during)).toBe(true);
  });
  it('returns undefined/false in the gap between windows', () => {
    expect(getActiveWindow(WINDOWS, gap)).toBeUndefined();
    expect(isSaleActive(WINDOWS, gap)).toBe(false);
  });
});

describe('getNextWindow', () => {
  it('returns the upcoming window from the gap', () => {
    expect(getNextWindow(WINDOWS, gap)).toBe(WINDOWS[1]);
  });
  it('returns undefined once all windows are in the past', () => {
    expect(getNextWindow(WINDOWS, after)).toBeUndefined();
  });
});

describe('isAllExpired', () => {
  it('is false while a window is still upcoming or active', () => {
    expect(isAllExpired(WINDOWS, during)).toBe(false);
    expect(isAllExpired(WINDOWS, before)).toBe(false);
  });
  it('is true once every window has ended', () => {
    expect(isAllExpired(WINDOWS, after)).toBe(true);
  });
  it('is false for an empty window list', () => {
    expect(isAllExpired([], during)).toBe(false);
  });
});

describe('getCurrentWindowEnd', () => {
  it('returns the active window end when inside one', () => {
    expect(getCurrentWindowEnd(WINDOWS, during)).toBe(WINDOWS[0].end);
  });
  it('returns the next window end when in a gap', () => {
    expect(getCurrentWindowEnd(WINDOWS, gap)).toBe(WINDOWS[1].end);
  });
  it('returns null when everything is expired', () => {
    expect(getCurrentWindowEnd(WINDOWS, after)).toBeNull();
  });
});

describe('getActivePhase', () => {
  const phases = [
    { end: '2026-07-17T23:59:59+08:00', dateRange: '2-17 July' },
    { end: '2026-07-31T23:59:59+08:00', dateRange: '18-31 July' },
  ];
  it('returns the first phase whose end is still in the future', () => {
    expect(getActivePhase(phases, during).dateRange).toBe('2-17 July');
    expect(getActivePhase(phases, gap).dateRange).toBe('18-31 July');
  });
  it('returns null once all phases ended', () => {
    expect(getActivePhase(phases, after)).toBeNull();
  });
  it('returns null for non-array input', () => {
    expect(getActivePhase(undefined, during)).toBeNull();
  });
});
