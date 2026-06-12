// Standalone test of the CheckoutButton flow — no browser needed.
// Run with:  node --env-file=.env.local scripts/test-checkout.mjs
//
// This mirrors exactly what CheckoutButton does:
//   1. createCheckout with UTM in checkoutInfo.customFields + buyerNote
//   2. createRedirectSession to get fullUrl
//   3. Append UTM to that URL via URL.searchParams.set()
// Then prints all intermediate values for inspection.

import { createClient, OAuthStrategy } from '@wix/sdk';
import { checkout } from '@wix/ecom';
import { redirects } from '@wix/redirects';

const STORES_APP_ID = '215238eb-22a5-4c36-9e7b-e7c08025e04e';

const client = createClient({
  modules: { checkout, redirects },
  auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID }),
});

const utm = {
  utm_source: 'facebook',
  utm_medium: 'cpc',
  utm_campaign: 'summer-test',
};
const utmNote = `Source: ${utm.utm_source} | Medium: ${utm.utm_medium} | Campaign: ${utm.utm_campaign}`;

console.log('Client ID :', process.env.NEXT_PUBLIC_WIX_CLIENT_ID);
console.log('Product ID:', process.env.NEXT_PUBLIC_WIX_PRODUCT_ID);
console.log('UTM note  :', utmNote);
console.log('');

try {
  const buyer = {
    firstName: 'Test',
    lastName: 'Student',
    email: 'test.student@example.com',
  };

  console.log('[1] Creating checkout with UTM + buyer prefill...');
  const newCheckout = await client.checkout.createCheckout({
    channelType: 'WEB',
    lineItems: [
      {
        quantity: 1,
        catalogReference: {
          catalogItemId: process.env.NEXT_PUBLIC_WIX_PRODUCT_ID,
          appId: STORES_APP_ID,
        },
      },
    ],
    checkoutInfo: {
      customFields: [{ title: 'UTM Tracking', value: utmNote }],
      buyerNote: utmNote,
      buyerInfo: { email: buyer.email },
      billingInfo: {
        contactDetails: {
          firstName: buyer.firstName,
          lastName: buyer.lastName,
        },
      },
    },
  });
  console.log('    ✓ checkoutId :', newCheckout._id);
  console.log('    ✓ customFields:', JSON.stringify(newCheckout.customFields));
  console.log('    ✓ buyerNote   :', newCheckout.buyerNote);
  console.log('    ✓ buyerInfo   :', JSON.stringify(newCheckout.buyerInfo));
  console.log('    ✓ billing     :', JSON.stringify(newCheckout.billingInfo?.contactDetails));
  console.log('');

  console.log('[2] Creating redirect session...');
  const { redirectSession } = await client.redirects.createRedirectSession({
    ecomCheckout: { checkoutId: newCheckout._id },
    callbacks: {
      postFlowUrl: 'http://localhost:3001',
      thankYouPageUrl: 'http://localhost:3001/?status=thank-you',
    },
  });
  console.log('    ✓ Wix fullUrl:', redirectSession.fullUrl);
  console.log('');

  console.log('[3] Appending UTM — into inner redirectUrl AND outer URL...');
  const outer = new URL(redirectSession.fullUrl);
  const innerStr = outer.searchParams.get('redirectUrl');
  if (innerStr) {
    const inner = new URL(innerStr);
    inner.searchParams.set('utm_source', utm.utm_source);
    inner.searchParams.set('utm_medium', utm.utm_medium);
    inner.searchParams.set('utm_campaign', utm.utm_campaign);
    outer.searchParams.set('redirectUrl', inner.toString());
    console.log('    Inner URL (after UTM):', inner.toString());
  }
  outer.searchParams.set('utm_source', utm.utm_source);
  outer.searchParams.set('utm_medium', utm.utm_medium);
  outer.searchParams.set('utm_campaign', utm.utm_campaign);
  const finalUrl = outer.toString();
  console.log('    ✓ Final URL :', finalUrl);
  console.log('');

  console.log('--- ASSERTIONS ---');
  // Check inner URL also has UTM (this is what browser actually lands on)
  const innerFinal = innerStr ? new URL(outer.searchParams.get('redirectUrl')) : outer;
  const hasUtmInInner =
    innerFinal.searchParams.get('utm_source') === 'facebook' &&
    innerFinal.searchParams.get('utm_medium') === 'cpc' &&
    innerFinal.searchParams.get('utm_campaign') === 'summer-test';
  console.log('Cara 2 (UTM survives redirect):', hasUtmInInner ? 'PASS ✓' : 'FAIL ✗');

  const cf = newCheckout.customFields?.find(f => f.title === 'UTM Tracking');
  console.log('Cara 1a (customField present):', cf ? 'PASS ✓' : 'FAIL ✗');
  console.log('Cara 1b (buyerNote present)  :', newCheckout.buyerNote === utmNote ? 'PASS ✓' : 'FAIL ✗');
  console.log('Prefill email                :', newCheckout.buyerInfo?.email === buyer.email ? 'PASS ✓' : `FAIL ✗ (${JSON.stringify(newCheckout.buyerInfo)})`);
  const cd = newCheckout.billingInfo?.contactDetails;
  console.log('Prefill name                 :', cd?.firstName === buyer.firstName && cd?.lastName === buyer.lastName ? 'PASS ✓' : `FAIL ✗ (${JSON.stringify(cd)})`);
} catch (e) {
  console.error('FAIL:', e?.message || e);
  if (e?.details) console.error('Details:', JSON.stringify(e.details, null, 2));
  process.exit(1);
}
