import { describe, it, expect } from 'vitest';
import { getActiveJulyPhase, JULY_PHASES } from '@/lib/julyCampaign';

describe('getActiveJulyPhase', () => {
  it('returns phase1 during the early July window', () => {
    const p = getActiveJulyPhase(new Date('2026-07-05T00:00:00+08:00'));
    expect(p).toBe(JULY_PHASES.phase1);
  });

  it('returns phase2 during the late July window', () => {
    const p = getActiveJulyPhase(new Date('2026-07-20T00:00:00+08:00'));
    expect(p).toBe(JULY_PHASES.phase2);
  });

  it('prefers phase1 during the phase1/phase2 overlap', () => {
    const p = getActiveJulyPhase(new Date('2026-07-16T12:00:00+08:00'));
    expect(p).toBe(JULY_PHASES.phase1);
  });

  it('returns null before launch and after all phases end', () => {
    expect(getActiveJulyPhase(new Date('2026-06-01T00:00:00+08:00'))).toBeNull();
    expect(getActiveJulyPhase(new Date('2026-08-05T00:00:00+08:00'))).toBeNull();
  });
});
