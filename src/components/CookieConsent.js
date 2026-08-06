'use client';

import { useState } from 'react';
import { CONSENT_VALUES, setConsent } from '@/lib/cookieConsent';

export default function CookieConsent() {
  const [exiting, setExiting] = useState(false);

  const handleAccept = () => {
    setExiting(true);
    setTimeout(() => {
      setConsent(CONSENT_VALUES.ACCEPTED);
    }, 300);
  };

  const handleEssential = () => {
    setExiting(true);
    setTimeout(() => {
      setConsent(CONSENT_VALUES.ESSENTIAL);
    }, 300);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className={`fixed bottom-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        exiting
          ? 'translate-y-full opacity-0'
          : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="bg-akasha-white border-t border-akasha-gray-4 shadow-[0_-8px_32px_rgba(0,0,0,0.08)]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 md:py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="font-body text-[13px] md:text-sm text-akasha-gray-1 leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site
              traffic, and personalize content. By clicking{' '}
              <strong className="text-akasha-black font-medium">
                &ldquo;Accept All&rdquo;
              </strong>
              , you consent to our use of marketing and analytics cookies.{' '}
              <span className="hidden sm:inline">
                Choose &ldquo;Essential Only&rdquo; to continue with strictly
                necessary cookies.
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={handleEssential}
              className="text-[11.5px] md:text-xs font-body uppercase tracking-[0.12em] text-akasha-gray-1 hover:text-akasha-black px-3 py-2.5 rounded-full border border-akasha-gray-3 hover:border-akasha-gray-1 transition-all duration-200 whitespace-nowrap"
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="text-[11.5px] md:text-xs font-body uppercase tracking-[0.12em] text-akasha-white bg-akasha-orange hover:bg-akasha-orange-dark px-5 py-2.5 rounded-full shadow-sm shadow-akasha-orange/20 hover:shadow-md hover:shadow-akasha-orange/25 transition-all duration-200 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
