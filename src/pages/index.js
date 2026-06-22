import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import HubNav from '@/components/hub/HubNav';
import HubHero from '@/components/hub/HubHero';
import MainProducts from '@/components/hub/MainProducts';
import CategorySection from '@/components/hub/CategorySection';
import TrustStrip from '@/components/TrustStrip';
import Footer from '@/components/Footer';
import { CATEGORIES, getCoursesByCategory } from '@/lib/courses';
import { trackPurchase } from '@/lib/pixel';

// Two-hour ceiling on stale Purchase data sitting in localStorage,
// in case the buyer abandoned mid-checkout and only returned much later.
const PENDING_TTL_MS = 2 * 60 * 60 * 1000;

const SITE_URL = 'https://www.akashayogaacademy.com';
const OG_IMAGE =
  'https://static.wixstatic.com/media/c15a18_5d357dab7cec43c4879c3f12090081ce~mv2.jpg/v1/fill/w_1200,h_630,al_c,q_85,enc_avif,quality_auto/Certified-Yoga-Instructor---Bali---Akash.jpg';
const PAGE_TITLE =
  'Big Yoga Day Discounts, Akasha Yoga Academy';
const PAGE_DESC =
  'Big Yoga Day discounts on all our courses and on-site programs for International Yoga Day. Explore our 200-Hour, 300-Hour, 80-Hour modules, workshops, and retreats.';

export default function HubHome() {
  const router = useRouter();
  const advanced = getCoursesByCategory(CATEGORIES.ADVANCED);
  const other = getCoursesByCategory(CATEGORIES.OTHER);

  // Wix Headless redirects post-payment to /?status=thank-you (set in
  // src/lib/checkout.js). The query string carries no order detail, so
  // we read the data the form staged in localStorage right before the
  // redirect and fire a browser-side Purchase event. The same event_id
  // is also forwarded to Wix as a customField, so when CAPI fires from
  // /api/meta-purchase Meta dedupes the two hits into one conversion.
  useEffect(() => {
    if (!router.isReady) return;
    if (typeof window === 'undefined') return;
    if (router.query?.status !== 'thank-you') return;
    // Refresh-proof guard.
    if (sessionStorage.getItem('purchase_fired')) return;

    let courseName, courseId, price, eventId, timestamp;
    try {
      courseName = localStorage.getItem('pendingPurchase_courseName') || 'Course Enrollment';
      courseId = localStorage.getItem('pendingPurchase_courseId') || 'unknown_course';
      price = localStorage.getItem('pendingPurchase_price') || '0';
      eventId = localStorage.getItem('pendingPurchase_eventId') || null;
      timestamp = localStorage.getItem('pendingPurchase_timestamp');
    } catch (_) {
      return;
    }

    if (timestamp && Date.now() - parseInt(timestamp, 10) > PENDING_TTL_MS) {
      return;
    }

    let attempts = 0;
    const interval = setInterval(() => {
      attempts += 1;
      if (typeof window.fbq !== 'undefined') {
        clearInterval(interval);
        trackPurchase(courseName, price, courseId, eventId);
        sessionStorage.setItem('purchase_fired', 'true');
        try {
          localStorage.removeItem('pendingPurchase_courseName');
          localStorage.removeItem('pendingPurchase_courseId');
          localStorage.removeItem('pendingPurchase_price');
          localStorage.removeItem('pendingPurchase_eventId');
          localStorage.removeItem('pendingPurchase_timestamp');
        } catch (_) {}
        router.replace('/', undefined, { shallow: true });
      } else if (attempts > 25) {
        // Give up after ~5s if the Pixel script never loaded.
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [router.isReady, router.query?.status, router]);

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Akasha Yoga Academy" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Head>

      <HubNav />

      <main>
        <HubHero />
        <TrustStrip />
        <MainProducts />

        <CategorySection
          id="advanced"
          eyebrow="For Certified Teachers"
          heading="Advanced Courses"
          intro="Specialized modules to continue your path after the 200-Hour Certification."
          courses={advanced}
          bg="bg-akasha-gray-4/30"
        />

        <CategorySection
          id="other"
          eyebrow="Open to All"
          heading="Other Courses & On-Site"
          intro="Workshops and retreats open to everyone, no prior yoga training required."
          courses={other}
          bg="bg-akasha-white"
        />

        <Footer />
      </main>
    </>
  );
}
