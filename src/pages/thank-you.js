import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import HubNav from '@/components/hub/HubNav';
import Footer from '@/components/Footer';
import { trackPurchase } from '@/lib/pixel';
import { firePurchaseFromUrl } from '@/lib/gtmEcommerce';

// Two hour ceiling on stale Purchase data, in case the buyer abandoned
// mid-checkout and only revisited this URL much later.
const PENDING_TTL_MS = 2 * 60 * 60 * 1000;

export default function ThankYou() {
  const router = useRouter();
  const [orderName, setOrderName] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // GA4 / GTM purchase event. Reads orderId from the URL that Wix
    // appended on redirect + the sessionStorage stashed by
    // pushBeginCheckout. Idempotent (sessionStorage cleared on fire),
    // so a refresh does not re-fire. Runs independent of Meta below.
    firePurchaseFromUrl();

    // Refresh-proof: never fire Meta Purchase twice in the same tab.
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

    setOrderName(courseName);

    // Wait up to ~5s for the Pixel script to finish loading before
    // firing, then give up. Without this, the event can race the
    // afterInteractive Script load and silently drop.
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
      } else if (attempts > 25) {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Thank You, Akasha Yoga Academy</title>
        <meta name="robots" content="noindex" />
      </Head>

      <HubNav />

      <main className="min-h-[70vh] flex items-center justify-center bg-akasha-white pt-28 md:pt-36 pb-16">
        <div className="section text-center max-w-2xl">
          <span className="eyebrow text-akasha-orange">Order Confirmed</span>

          <h1
            className="mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 300 }}
          >
            Welcome to the Akasha Family
          </h1>

          <p
            className="script mb-6"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
          >
            Your yogic journey starts now
          </p>

          {orderName ? (
            <p className="font-body text-akasha-gray-1 mb-6 text-base md:text-lg leading-relaxed">
              Your enrollment in{' '}
              <strong className="text-akasha-black font-medium">{orderName}</strong> is confirmed.
            </p>
          ) : (
            <p className="font-body text-akasha-gray-1 mb-6 text-base md:text-lg leading-relaxed">
              Your enrollment is confirmed.
            </p>
          )}

          <div className="bg-akasha-gray-4/30 border border-akasha-gray-4 rounded-sm p-6 md:p-8 text-left mb-8">
            <p className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-gray-1 mb-4">
              Next Steps
            </p>
            <ul className="space-y-3 font-body text-akasha-gray-1 text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-akasha-green flex-none mt-0.5">✓</span>
                <span>
                  Check your inbox for a confirmation email with login details and onboarding instructions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-akasha-green flex-none mt-0.5">✓</span>
                <span>
                  Didn&rsquo;t receive an email? Check your spam folder or contact us at{' '}
                  <a href="mailto:support@akashayogaacademy.com" className="text-akasha-orange underline">
                    support@akashayogaacademy.com
                  </a>
                  .
                </span>
              </li>
            </ul>
          </div>

          <a href="/" className="btn-primary">
            Browse More Courses
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
