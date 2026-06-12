import { createClient, OAuthStrategy } from '@wix/sdk';
import { checkout } from '@wix/ecom';
import { redirects } from '@wix/redirects';

/**
 * Wix Headless client — visitor (anonymous) OAuth flow.
 * Token refresh is handled by the SDK automatically.
 *
 * Required env: NEXT_PUBLIC_WIX_CLIENT_ID
 *   Get it from Wix Dashboard → Settings → Headless Settings → OAuth apps.
 */
export const wixClient = createClient({
  modules: { checkout, redirects },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
  }),
});

// Wix Stores app ID — required for ecom catalog references.
// This is a public Wix constant, not a secret.
export const WIX_STORES_APP_ID = '215238eb-22a5-4c36-9e7b-e7c08025e04e';
