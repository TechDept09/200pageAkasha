// List visible Wix Stores products to find the correct product ID.
// Run: node --env-file=.env.local scripts/list-products.mjs

import { createClient, OAuthStrategy } from '@wix/sdk';
import { products } from '@wix/stores';

const client = createClient({
  modules: { products },
  auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID }),
});

try {
  const res = await client.products.queryProducts().limit(100).find();

  console.log(`Found ${res.items.length} product(s):\n`);
  for (const p of res.items) {
    console.log('—'.repeat(60));
    console.log('name      :', p.name);
    console.log('_id       :', p._id);
    console.log('visible   :', p.visible);
    console.log('inStock   :', p.stock?.inStock);
    console.log('price     :', p.priceData?.formatted?.price, '| discounted:', p.priceData?.formatted?.discountedPrice);
    console.log('type      :', p.productType);
    console.log('slug      :', p.slug);
  }
  console.log('—'.repeat(60));
  console.log('\nCurrent NEXT_PUBLIC_WIX_PRODUCT_ID:', process.env.NEXT_PUBLIC_WIX_PRODUCT_ID);
  const match = res.items.find((p) => p._id === process.env.NEXT_PUBLIC_WIX_PRODUCT_ID);
  console.log('Matches a visible product?        :', match ? `YES — "${match.name}"` : 'NO ✗');
} catch (e) {
  console.error('FAIL:', e?.message || e);
  if (e?.details) console.error('Details:', JSON.stringify(e.details, null, 2));
  process.exit(1);
}
