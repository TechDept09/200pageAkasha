import { useEffect, useState } from 'react';
import Head from 'next/head';
import HubNav from '@/components/hub/HubNav';
import Footer from '@/components/Footer';
import { trackPurchase } from '@/lib/pixel';
import { firePurchaseFromUrl } from '@/lib/gtmEcommerce';
import {
  readPendingPurchase,
  clearPendingPurchase,
  PENDING_PURCHASE_TTL_MS,
} from '@/lib/pendingPurchase';

export default function ThankYou() {
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

    const pending = readPendingPurchase();
    if (!pending) return;
    const courseName = pending.courseName || 'Course Enrollment';
    const courseId = pending.courseId || 'unknown_course';
    const price = pending.price || '0';
    const eventId = pending.eventId || null;
    const timestamp = pending.timestamp;

    if (timestamp && Date.now() - parseInt(timestamp, 10) > PENDING_PURCHASE_TTL_MS) {
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
        clearPendingPurchase();
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
