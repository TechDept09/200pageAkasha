'use client';

// Post-launch hub landing = the full campaign preview content. Same
// CampaignContent tree that renders under /campaign/july, wired to
// Phase 1 (Summer Self-Care Journey). Keeps the buyer's journey
// identical whether they land on the hub or the campaign URL.

import { CampaignContent } from '@/pages/campaign/july';
import { JULY_PHASES } from '@/lib/julyCampaign';

const phase = JULY_PHASES.phase1;

export default function JulyLaunchHome() {
  return <CampaignContent phase={phase} />;
}
