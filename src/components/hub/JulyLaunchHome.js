'use client';

// Post-launch hub landing = the full campaign preview content. Same
// CampaignContent tree that renders under /campaign/july, wired to
// the backup phase (Summer Self-Care Journey, 24h US$249 drop) as
// the current public campaign. Swap back to phase1 if the wider
// Summer offer needs to resume on the hub.

import { CampaignContent } from '@/pages/campaign/july';
import { JULY_PHASES } from '@/lib/julyCampaign';

const phase = JULY_PHASES.backup;

export default function JulyLaunchHome() {
  return <CampaignContent phase={phase} />;
}
