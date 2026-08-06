import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Warm up the connections we know every page hits, so the browser
            doesn't pay the TLS handshake cost on first request. Google
            Fonts is gone from here, the fonts now self-host via next/font
            in src/pages/_app.js. */}
        <link rel="preconnect" href="https://static.wixstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://video.wixstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
      </Head>
      <body>
        {/* GTM noscript fallbacks disabled — JS is required for the site to
            function (Next.js SPA), and consent is managed client-side through
            the CookieConsent banner. Loading noscript iframes here would
            bypass the consent gate for users who chose Essential Only. */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
