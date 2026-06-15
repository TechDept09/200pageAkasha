'use client';

import { createContext, useContext } from 'react';
import { getTier, TIERS } from './tiers';

const TierContext = createContext(TIERS.essential);

export function TierProvider({ tier = 'essential', children }) {
  const value = getTier(tier);
  return <TierContext.Provider value={value}>{children}</TierContext.Provider>;
}

export function useTier() {
  return useContext(TierContext);
}
