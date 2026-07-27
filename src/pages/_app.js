import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { Inter, Jost, Allura, Montserrat } from 'next/font/google';
import { pageview } from '@/lib/pixel';

// Preview gate. This branch is a private client preview; every page
// waits behind a shared access code so the URL can be shared without
// exposing work-in-progress publicly. Same code as /campaign/august
// so marketing only has to remember one key.
const PREVIEW_ACCESS_KEY = 'AKASHA-AUG-2026';
const PREVIEW_STORAGE_KEY = 'akasha_preview_2026_access';

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

// The secondary marketing GA4 property and GTM container exist for
// historical reasons, not technical necessity. They load by default
// (unchanged behavior); set NEXT_PUBLIC_ENABLE_GA_MARKETING=false or
// NEXT_PUBLIC_ENABLE_GTM_MARKETING=false to drop one from every page
// (less third-party JS) without a code change, once marketing confirms
// it is no longer monitored.
const GA_MARKETING_ENABLED =
  process.env.NEXT_PUBLIC_ENABLE_GA_MARKETING !== 'false';
const GTM_MARKETING_ENABLED =
  process.env.NEXT_PUBLIC_ENABLE_GTM_MARKETING !== 'false';

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
// Body text substitute for Wix's Proxima Nova (proxima-n-w01-reg). Montserrat
// is the closest free geometric-humanist match; Inter stays for small UI
// labels (mirrors the site's separate DIN Next small-label font).
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
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

function PreviewGate({ onUnlock }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setError('');
    if (code.trim().toUpperCase() === PREVIEW_ACCESS_KEY.toUpperCase()) {
      try {
        sessionStorage.setItem(PREVIEW_STORAGE_KEY, 'true');
      } catch (_) {}
      onUnlock();
    } else {
      setError('Invalid access code. Contact marketing for the current key.');
    }
  };

  return (
    <>
      <Head>
        <title>Confidential Preview, Akasha Yoga Academy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff',
          padding: '20px',
        }}
      >
        <div style={{ maxWidth: '420px', width: '100%', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.25em',
              color: '#d97a3c',
              fontWeight: 600,
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Confidential Preview
          </p>
          <h1
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 300,
              marginBottom: '1.5rem',
              color: '#1a1a1a',
            }}
          >
            Client Preview
          </h1>
          <p
            style={{
              color: '#666',
              lineHeight: 1.6,
              marginBottom: '2rem',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            This site is a private preview and is not yet public. Enter
            the access code to view.
          </p>
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Access code"
              autoComplete="off"
              spellCheck="false"
              style={{
                width: '100%',
                border: '1px solid #d0d0d0',
                borderRadius: '999px',
                padding: '12px 20px',
                fontSize: '14px',
                textAlign: 'center',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                outline: 'none',
              }}
            />
            {error ? (
              <p style={{ fontSize: '12px', color: '#c05a1a' }}>{error}</p>
            ) : null}
            <button
              type="submit"
              style={{
                width: '100%',
                background: '#d97a3c',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                padding: '14px 28px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Unlock Preview
            </button>
          </form>
          <p
            style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: '#999',
              marginTop: '2rem',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Akasha Internal · Do Not Share
          </p>
        </div>
      </main>
    </>
  );
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (
      typeof window !== 'undefined' &&
      sessionStorage.getItem(PREVIEW_STORAGE_KEY) === 'true'
    ) {
      setAuthorized(true);
    }
  }, []);

  useEffect(() => {
    if (!authorized) return undefined;
    const handleRouteChange = (url) => {
      pageview();
      // Both GA4 properties get a direct gtag pageview so client-side
      // route changes (Next.js router.push) are attributed correctly.
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('config', GA_ID, { page_path: url });
        if (GA_MARKETING_ENABLED) {
          window.gtag('config', GA_ID_MARKETING, { page_path: url });
        }
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
  }, [router.events, authorized]);

  if (!mounted) return null;

  if (!authorized) {
    return <PreviewGate onUnlock={() => setAuthorized(true)} />;
  }

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
          --font-montserrat: ${montserrat.style.fontFamily};
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
            ${GA_MARKETING_ENABLED ? `gtag('config', '${GA_ID_MARKETING}');` : ''}
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

      {/* Second GTM container from marketing, loaded in parallel.
          Gated so it can be dropped via NEXT_PUBLIC_ENABLE_GTM_MARKETING=false. */}
      {GTM_MARKETING_ENABLED && (
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
      )}

      <div
        className={`${inter.variable} ${montserrat.variable} ${jost.variable} ${allura.variable}`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
