/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'static.wixstatic.com' },
    ],
  },
  // Security headers applied to every route. Lighthouse Best Practices
  // checks for these explicitly; absent ones drop the score. We pick
  // conservative values that don't break the Wix SDK, Meta Pixel, GTM,
  // GA, or Wix-hosted images we already load.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // 1 year HSTS, includes subdomains, preloadable.
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          // Block clickjacking from anywhere.
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Disable MIME sniffing.
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Send only origin on cross-origin navigation.
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Cross-Origin-Opener-Policy isolates this site from popups so
          // hostile pages can't reach into ours.
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          // Tight Permissions-Policy so the browser blocks unused
          // powerful features that we never opt into.
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
