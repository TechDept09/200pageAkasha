// Diagnose "You can't place your order just yet" —
// inspect violations, calculation errors, availability, and price.
// Run: node --env-file=.env.local scripts/diag-checkout.mjs

import { createClient, OAuthStrategy } from '@wix/sdk';
import { checkout } from '@wix/ecom';

const STORES_APP_ID = '215238eb-22a5-4c36-9e7b-e7c08025e04e';

const client = createClient({
  modules: { checkout },
  auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID }),
});

try {
  const co = await client.checkout.createCheckout({
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
  });

  const li = co.lineItems?.[0];

  console.log('checkoutId        :', co._id);
  console.log('completed         :', co.completed);
  console.log('currency          :', co.currency, '/ payment:', co.paymentCurrency);
  console.log('');
  console.log('--- LINE ITEM ---');
  console.log('productName       :', li?.productName?.original);
  console.log('availability      :', JSON.stringify(li?.availability));
  console.log('price             :', JSON.stringify(li?.price));
  console.log('paymentOption     :', li?.paymentOption);
  console.log('itemType          :', JSON.stringify(li?.itemType));
  console.log('shippable         :', li?.physicalProperties?.shippable);
  console.log('');
  console.log('--- TOTALS ---');
  console.log('priceSummary      :', JSON.stringify(co.priceSummary, null, 2));
  console.log('');
  console.log('--- VIOLATIONS ---');
  console.log(JSON.stringify(co.violations ?? [], null, 2));
  console.log('');
  console.log('--- CALCULATION ERRORS ---');
  console.log(JSON.stringify(co.calculationErrors ?? {}, null, 2));
} catch (e) {
  console.error('FAIL:', e?.message || e);
  if (e?.details) console.error('Details:', JSON.stringify(e.details, null, 2));
  process.exit(1);
}
