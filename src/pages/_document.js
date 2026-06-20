import { Html, Head, Main, NextScript } from 'next/document';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&family=Inter:wght@300;400;500;600&family=Allura&display=swap';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Warm up the connections we know every page hits, so the browser
            doesn't pay the TLS handshake cost on first request. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://static.wixstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        {/* Load Google Fonts without render-blocking. The print-media trick
            tells the parser the stylesheet doesn't affect the screen until
            the onLoad handler swaps it in. A <noscript> copy keeps it
            working when JS is disabled. */}
        <link rel="preload" as="style" href={FONTS_URL} />
        <link
          rel="stylesheet"
          href={FONTS_URL}
          media="print"
          // eslint-disable-next-line react/no-unknown-property
          onLoad="this.media='all'"
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link rel="stylesheet" href={FONTS_URL} />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
