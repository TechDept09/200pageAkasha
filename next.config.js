/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'static.wixstatic.com' },
    ],
  },
  experimental: {
    // Lets <Script strategy="worker"> offload third-party scripts (Meta Pixel,
    // GA4, etc.) into a Partytown web worker, freeing the main thread and
    // dropping Total Blocking Time without changing event semantics.
    nextScriptWorkers: true,
  },
};

module.exports = nextConfig;
