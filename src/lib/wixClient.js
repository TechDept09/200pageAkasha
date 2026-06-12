import { createClient, OAuthStrategy } from '@wix/sdk';
import { checkout } from '@wix/ecom';
import { redirects } from '@wix/redirects';

export const wixClient = createClient({
  modules: { checkout, redirects },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
  }),
});

// Public Wix Stores app ID, not a secret; required for ecom catalog references.
export const WIX_STORES_APP_ID = '215238eb-22a5-4c36-9e7b-e7c08025e04e';
