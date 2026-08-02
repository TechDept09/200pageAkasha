#!/usr/bin/env node
/**
 * Generate sitemap.xml for Akasha Yoga Academy.
 * Auto-detects all page routes from the Next.js build manifest.
 * Run: node scripts/generate-sitemap.mjs
 * Or: npm run sitemap
 */

import { writeFileSync, readFileSync, existsSync, readdirSync } from 'fs';
import { resolve, dirname, join, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.local so NEXT_PUBLIC_SITE_URL is picked up
const envPath = resolve(__dirname, '..', '.env.local');
if (existsSync(envPath)) {
  const envContent = readFileSync(envPath, 'utf8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim();
    if (key && val && !process.env[key]) {
      process.env[key] = val;
    }
  }
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.akashayogaacademy.com';

const LAST_MOD = new Date().toISOString().split('T')[0];

// Route → (changefreq, priority) overrides. Everything not listed
// defaults to monthly / 0.7.
const OVERRIDES = {
  '/':                  { changefreq: 'weekly',  priority: 1.0 },
  '/courses':           { changefreq: 'weekly',  priority: 0.9 },
  '/200h-essential':    { changefreq: 'monthly', priority: 0.9 },
  '/200h-premium':      { changefreq: 'monthly', priority: 0.8 },
  '/300h-ytt':          { changefreq: 'monthly', priority: 0.9 },
  '/80h-yin':           { changefreq: 'monthly', priority: 0.8 },
  '/80h-meditation':    { changefreq: 'monthly', priority: 0.8 },
  '/80h-hatha-pranayama': { changefreq: 'monthly', priority: 0.8 },
  '/feminine-wisdom':   { changefreq: 'monthly', priority: 0.7 },
  '/kundalini-india':   { changefreq: 'monthly', priority: 0.7 },
};

// Excluded routes (transactional, not content pages)
const EXCLUDED = new Set([
  '/checkout',
  '/thank-you',
  '/404',
  '/500',
  '/_error',
  '/_app',
  '/_document',
  '/200h-essential/enroll',
]);

/**
 * Auto-discover routes from the pages directory.
 * Only includes .js files that export a default component (pages).
 */
function discoverRoutes() {
  const pagesDir = resolve(__dirname, '..', 'src', 'pages');
  const routes = [];

  function walk(dir, prefix = '') {
    if (!existsSync(dir)) return;
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('_')) continue;
      if (entry.name.startsWith('api')) continue;

      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath, `${prefix}/${entry.name}`);
      } else if (entry.isFile() && extname(entry.name) === '.js') {
        const routeName = entry.name.replace(/\.js$/, '');
        const route = routeName === 'index' ? prefix || '/' : `${prefix}/${routeName}`;
        // Normalize double slashes
        const normalized = route.replace(/\/+/g, '/');
        routes.push(normalized);
      }
    }
  }

  walk(pagesDir);
  return routes;
}

function generateUrlEntry(url) {
  const overrides = OVERRIDES[url] || {};
  const changefreq = overrides.changefreq || 'monthly';
  const priority = overrides.priority || 0.7;

  return `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${LAST_MOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const routes = discoverRoutes()
  .filter((r) => !EXCLUDED.has(r))
  .sort();

const urls = routes.map(generateUrlEntry).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const outPath = resolve(__dirname, '..', 'public', 'sitemap.xml');
writeFileSync(outPath, sitemap, 'utf8');
console.log(`✅ Sitemap written to ${outPath}`);
console.log(`   ${routes.length} URLs listed`);
routes.forEach((r) => console.log(`   ${r}`));
