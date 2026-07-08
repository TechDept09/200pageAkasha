import '@/styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { Inter, Jost, Allura } from 'next/font/google';
import { pageview } from '@/lib/pixel';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '1349360126835158';
// Two GA4 properties fire in parallel from this codebase:
// - GA_ID (G-L76KTFBEBG): original property, historical continuity.
// - GA_ID_MARKETING (G-TGN09D50HK): marketing's property, used for
//   Google Ads conversion attribution and their existing reporting.
// gtag.js is loaded once, then two gtag('config', ...) calls target
// each property. Each property gets its own _ga_<id> cookie, so
// they don't collide.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-L76KTFBEBG';
const GA_ID_MARKETING =
  process.env.NEXT_PUBLIC_GA_ID_MARKETING || 'G-TGN09D50HK';
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-M9GPNL6';
// Second GTM container. Marketing wired an additional container
// alongside the primary one; both listen on the same dataLayer so
// every push routes to both containers without extra plumbing.
const GTM_ID_MARKETING =
  process.env.NEXT_PUBLIC_GTM_ID_MARKETING || 'GTM-5F5NHG99';

// Self-hosted Google Fonts via next/font: the font files ship from the
// same origin as the rest of the bundle, so there's no render-blocking
// request to fonts.googleapis.com and the cross-origin DNS hop is gone.
// The CSS variables get plugged into tailwind.config.js fontFamily.
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});
const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
});
const allura = Allura({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-allura',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview();
      // Both GA4 properties get a direct gtag pageview so client-side
      // route changes (Next.js router.push) are attributed correctly.
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('config', GA_ID, { page_path: url });
        window.gtag('config', GA_ID_MARKETING, { page_path: url });
      }
      // GTM also gets the SPA pageview signal via dataLayer for any
      // non-GA4 tags marketing wires into the container.
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'pageview', page_path: url });
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Head>
        {/* Ships with the SSR HTML so mobile browsers render at device
            width from first paint. Without this, Next.js falls back to
            'width=device-width' only, and pages that render null on the
            server (mounted-gate pattern) show up unscaled on iOS Safari. */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>

      <style jsx global>{`
        html {
          --font-inter: ${inter.style.fontFamily};
          --font-jost: ${jost.style.fontFamily};
          --font-allura: ${allura.style.fontFamily};
        }
      `}</style>

      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* Existing GA4 tracking on the original property. Keeps
          historical continuity, unchanged. */}
      <Script
        id="ga-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
            gtag('config', '${GA_ID_MARKETING}');
          `,
        }}
      />

      {/* Primary Google Tag Manager container. */}
      <Script
        id="gtm-loader"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {/* Second GTM container from marketing, loaded in parallel. */}
      <Script
        id="gtm-loader-marketing"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID_MARKETING}');
          `,
        }}
      />

      <div className={`${inter.variable} ${jost.variable} ${allura.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
