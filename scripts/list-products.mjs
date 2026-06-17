// List visible Wix Stores products and suggest which Vercel env var
// to map each one to, based on simple name matching against the course
// catalog.
//
// Run:
//   node --env-file=.env.local scripts/list-products.mjs
//
// Required env var:
//   NEXT_PUBLIC_WIX_CLIENT_ID (from Wix Headless OAuth app)

import { createClient, OAuthStrategy } from '@wix/sdk';
import { products } from '@wix/stores';

const client = createClient({
  modules: { products },
  auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID }),
});

// Map: course/plan -> env var name + match keywords (lowercased substrings).
// The first product whose name includes ALL keywords for an entry wins.
const TARGETS = [
  { env: 'NEXT_PUBLIC_WIX_PRODUCT_ID',                            keywords: ['200', 'essential'] },
  { env: 'NEXT_PUBLIC_WIX_PRODUCT_ID_ESSENTIAL_INSTALLMENT',      keywords: ['200', 'essential', 'plan'] },
  { env: 'NEXT_PUBLIC_WIX_PRODUCT_ID_PREMIUM',                    keywords: ['200', 'premium'] },
  { env: 'NEXT_PUBLIC_WIX_PRODUCT_ID_PREMIUM_INSTALLMENT',        keywords: ['200', 'premium', 'plan'] },
  { env: 'NEXT_PUBLIC_WIX_PRODUCT_ID_300H_FULL',                  keywords: ['300'] },
  { env: 'NEXT_PUBLIC_WIX_PRODUCT_ID_300H_INSTALLMENT',           keywords: ['300', 'plan'] },
  { env: 'NEXT_PUBLIC_WIX_PRODUCT_ID_80H_YIN_FULL',               keywords: ['80', 'yin'] },
  { env: 'NEXT_PUBLIC_WIX_PRODUCT_ID_80H_YIN_INSTALLMENT',        keywords: ['80', 'yin', 'plan'] },
  { env: 'NEXT_PUBLIC_WIX_PRODUCT_ID_80H_HATHA_FULL',             keywords: ['80', 'hatha'] },
  { env: 'NEXT_PUBLIC_WIX_PRODUCT_ID_80H_HATHA_INSTALLMENT',      keywords: ['80', 'hatha', 'plan'] },
  { env: 'NEXT_PUBLIC_WIX_PRODUCT_ID_80H_MEDITATION_FULL',        keywords: ['80', 'meditation'] },
  { env: 'NEXT_PUBLIC_WIX_PRODUCT_ID_80H_MEDITATION_INSTALLMENT', keywords: ['80', 'meditation', 'plan'] },
  { env: 'NEXT_PUBLIC_WIX_PRODUCT_ID_FEMININE',                   keywords: ['feminine'] },
  { env: 'NEXT_PUBLIC_WIX_PRODUCT_ID_KUNDALINI_FULL',             keywords: ['kundalini'] },
  { env: 'NEXT_PUBLIC_WIX_PRODUCT_ID_KUNDALINI_INSTALLMENT',      keywords: ['kundalini', 'plan'] },
];

function findMatch(items, keywords) {
  return items.find((p) => {
    const name = (p.name || '').toLowerCase();
    return keywords.every((k) => name.includes(k));
  });
}

try {
  const res = await client.products.queryProducts().limit(100).find();
  const items = res.items.filter((p) => p.visible);

  console.log(`Found ${items.length} visible product(s):\n`);
  for (const p of items) {
    console.log('—'.repeat(60));
    console.log('name      :', p.name);
    console.log('_id       :', p._id);
    console.log('price     :', p.priceData?.formatted?.price, '| discounted:', p.priceData?.formatted?.discountedPrice);
    console.log('slug      :', p.slug);
  }
  console.log('—'.repeat(60));

  console.log('\n\n=== Suggested Vercel env vars ===\n');
  const matched = [];
  const unmatched = [];

  for (const t of TARGETS) {
    const m = findMatch(items, t.keywords);
    if (m) {
      console.log(`${t.env}=${m._id}`);
      console.log(`  -> matched: "${m.name}"\n`);
      matched.push(t.env);
    } else {
      unmatched.push({ env: t.env, keywords: t.keywords });
    }
  }

  if (unmatched.length) {
    console.log('\n=== Could not auto-match (set manually) ===\n');
    for (const u of unmatched) {
      console.log(`${u.env}=  (look for a product whose name contains: ${u.keywords.join(' + ')})`);
    }
  }

  console.log('\n=== Summary ===');
  console.log(`Auto-matched : ${matched.length}/${TARGETS.length}`);
  console.log(`Need manual  : ${unmatched.length}`);
} catch (e) {
  console.error('FAIL:', e?.message || e);
  if (e?.details) console.error('Details:', JSON.stringify(e.details, null, 2));
  process.exit(1);
}
