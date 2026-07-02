import { Html, Head, Main, NextScript } from 'next/document';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-M9GPNL6';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Warm up the connections we know every page hits, so the browser
            doesn't pay the TLS handshake cost on first request. Google
            Fonts is gone from here, the fonts now self-host via next/font
            in src/pages/_app.js. */}
        <link rel="preconnect" href="https://static.wixstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
      </Head>
      <body>
        {/* GTM noscript fallback. Loads the container in a hidden iframe
            when JavaScript is disabled so server-side hit logging still
            fires for the ~1% of visitors without JS. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
