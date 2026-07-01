import '@/styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { Inter, Jost, Allura } from 'next/font/google';
import { pageview } from '@/lib/pixel';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '1349360126835158';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-L76KTFBEBG';

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
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('config', GA_ID, { page_path: url });
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
          `,
        }}
      />

      <div className={`${inter.variable} ${jost.variable} ${allura.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
