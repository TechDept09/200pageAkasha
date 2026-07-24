'use client';

import { useEffect, useRef, useState } from 'react';
import UrgencyBanner from './UrgencyBanner';
import { useTier } from '@/lib/TierContext';

const LOGO_BLACK =
  'https://static.wixstatic.com/media/c15a18_add3f1d2dd1a4582876f0249d1a2daf3~mv2.png/v1/fill/w_376,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Akasha-Yoga-Academy-Logo-2020-BLACK-500W.png';

// Same primary cross-page nav as HubNav so the site header stays
// consistent across the hub landing and every individual course
// page. In-page anchor navigation is dropped from the header at
// team's request; readers scroll through the course page instead.
const NAV = [
  {
    label: '200-HR TTC',
    dropdown: [
      { href: '/200h-essential', label: 'Essential' },
      { href: '/200h-premium', label: 'Premium' },
    ],
  },
  { href: '/300h-ytt', label: '300-HR TTC' },
  {
    label: 'Courses',
    dropdown: [
      { href: '/80h-yin', label: 'Yin Yoga' },
      { href: '/80h-meditation', label: 'Meditation' },
      { href: '/80h-hatha-pranayama', label: 'Hatha & Pranayama' },
    ],
  },
];

export default function SiteNav() {
  const tier = useTier();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobile, setOpenMobile] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMenu = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-akasha-white transition-shadow duration-200 ${
        scrolled ? 'border-b border-akasha-gray-4' : ''
      }`}
    >
      <UrgencyBanner />
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center" aria-label="Akasha Yoga Academy">
          <img src={LOGO_BLACK} alt="Akasha Yoga Academy" className="h-14 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openMenu(item.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-[12px] font-body uppercase tracking-[0.2em] text-akasha-black/70 hover:text-akasha-orange transition-colors"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.label}
                >
                  {item.label}
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className={`transition-transform ${
                      openDropdown === item.label ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {openDropdown === item.label ? (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[210px] bg-akasha-white border border-akasha-gray-4 rounded-sm shadow-lg py-2 z-10">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        className="block px-5 py-2.5 text-[12px] font-body uppercase tracking-[0.18em] text-akasha-black/80 hover:text-akasha-orange hover:bg-akasha-gray-4/40 transition-colors whitespace-nowrap"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="text-[12px] font-body uppercase tracking-[0.2em] text-akasha-black/70 hover:text-akasha-orange transition-colors"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <a
          href={tier.ctaHref}
          className="hidden lg:inline-flex items-center bg-akasha-orange text-white text-[11px] font-medium tracking-[0.12em] uppercase px-5 py-2.5 rounded-full hover:bg-akasha-orange-dark transition-colors"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {tier.ctaShort}
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-akasha-black"
        >
          <span className={`block w-5 h-px bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden bg-akasha-white border-t border-akasha-gray-4 transition-all duration-300 ${
          open ? 'max-h-[520px]' : 'max-h-0'
        }`}
      >
        <nav className="px-5 py-6 flex flex-col gap-1">
          {NAV.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="border-b border-akasha-gray-4 last:border-b-0">
                <button
                  type="button"
                  onClick={() =>
                    setOpenMobile((prev) => (prev === item.label ? null : item.label))
                  }
                  className="w-full flex items-center justify-between py-3 text-sm font-body uppercase tracking-[0.2em] text-akasha-black/85"
                  aria-expanded={openMobile === item.label}
                >
                  {item.label}
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className={`transition-transform ${
                      openMobile === item.label ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openMobile === item.label ? 'max-h-56 pb-3' : 'max-h-0'
                  }`}
                >
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 pl-4 text-[13px] font-body uppercase tracking-[0.18em] text-akasha-black/70 hover:text-akasha-orange"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-body uppercase tracking-[0.2em] text-akasha-black/85 hover:text-akasha-orange border-b border-akasha-gray-4"
              >
                {item.label}
              </a>
            ),
          )}
          <a
            href={tier.ctaHref}
            onClick={() => setOpen(false)}
            className="mt-3 bg-akasha-orange text-white text-center text-xs font-medium tracking-[0.12em] uppercase px-5 py-3 rounded-full"
          >
            {tier.ctaShort}
          </a>
        </nav>
      </div>
    </header>
  );
}
