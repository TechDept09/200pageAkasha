'use client';

import { resetConsent } from '@/lib/cookieConsent';

export default function CookieSettingsLink() {
  const handleClick = () => {
    resetConsent();
    // Reload so the consent banner reappears on the next page.
    window.location.reload();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-[11px] font-body text-akasha-white/40 hover:text-akasha-gold transition-colors"
    >
      Cookie Settings
    </button>
  );
}
