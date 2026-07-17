'use client';

// Post-launch hub landing = the full campaign preview content. Same
// CampaignContent tree that renders under /campaign/july, wired to
// Phase 2 (Summer Wellness Discount, WELLNESS50 voucher, US$1,190
// down to US$249) as the current public campaign. Swap to backup
// or phase1 if the promo cycle needs to change on the hub.

import { CampaignContent } from '@/pages/campaign/july';
import { JULY_PHASES } from '@/lib/julyCampaign';

const phase = JULY_PHASES.phase2;

export default function JulyLaunchHome() {
  return <CampaignContent phase={phase} />;
}
