'use client';

import { useEffect, useRef, useState } from 'react';
import UrgencyBanner from '@/components/UrgencyBanner';
import { USE_THRIVECART } from '@/lib/thriveCart';

const LOGO_BLACK =
  'https://static.wixstatic.com/media/c15a18_add3f1d2dd1a4582876f0249d1a2daf3~mv2.png/v1/fill/w_376,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Akasha-Yoga-Academy-Logo-2020-BLACK-500W.png';

// Primary cross-page navigation shown on the promo landing (/),
// course hub (/courses), and every product detail page via SiteNav.
const NAV = [
  { href: '/courses', label: 'All Courses' },
  {
    label: '200-HR TTC',
    dropdown: [
      { href: '/200h-essential', label: 'Essential (US$299)' },
      { href: '/200h-premium', label: 'Premium (US$1,490)' },
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

export default function HubNav({
  ctaText = 'Enroll Now',
  ctaHref,
  showUrgencyBanner = false,
}) {
  const defaultHref = USE_THRIVECART ? '/checkout' : '/200h-essential';
  const enrollHref = ctaHref || defaultHref;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobile, setOpenMobile] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 160);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-akasha-white/90 backdrop-blur-md shadow-nav border-b border-akasha-gray-4/60'
          : 'bg-akasha-white'
      }`}
    >
      {showUrgencyBanner ? <UrgencyBanner /> : null}
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center group" aria-label="Akasha Yoga Academy">
          <img
            src={LOGO_BLACK}
            alt="Akasha Yoga Academy"
            className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
          />
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
                  onClick={() => openDropdown === item.label ? setOpenDropdown(null) : openMenu(item.label)}
                >
                  {item.label}
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${
                      openDropdown === item.label ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {openDropdown === item.label ? (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[210px] bg-akasha-white border border-akasha-gray-4 rounded-md shadow-lg py-2 z-10"
                    onMouseEnter={() => {
                      if (closeTimer.current) clearTimeout(closeTimer.current);
                    }}
                    onMouseLeave={scheduleClose}
                  >
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        className="block px-5 py-2.5 text-[12px] font-body uppercase tracking-[0.18em] text-akasha-black/80 hover:text-akasha-orange hover:bg-akasha-orange/5 transition-colors whitespace-nowrap"
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
                className="text-[12px] font-body uppercase tracking-[0.2em] text-akasha-black/70 hover:text-akasha-orange transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-akasha-orange after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <a
          href={enrollHref}
          className="hidden lg:inline-flex items-center bg-akasha-orange text-white text-[11px] font-medium tracking-[0.12em] uppercase px-5 py-2.5 rounded-full shadow-sm shadow-akasha-orange/20 hover:bg-akasha-orange-dark hover:shadow-md hover:shadow-akasha-orange/25 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {ctaText}
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-akasha-black"
        >
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden bg-akasha-white border-t border-akasha-gray-4 transition-all duration-400 ease-out ${
          open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-5 py-6 flex flex-col gap-1">
          {NAV.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="border-b border-akasha-gray-4 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenMobile((prev) => (prev === item.label ? null : item.label))}
                  className="w-full flex items-center justify-between py-3 text-sm font-body uppercase tracking-[0.2em] text-akasha-black/85 hover:text-akasha-orange transition-colors"
                  aria-expanded={openMobile === item.label}
                >
                  {item.label}
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${openMobile === item.label ? 'rotate-180' : ''}`}
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-out ${openMobile === item.label ? 'max-h-56 pb-3' : 'max-h-0'}`}>
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 pl-4 text-[13px] font-body uppercase tracking-[0.18em] text-akasha-black/70 hover:text-akasha-orange transition-colors"
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
                className="block py-3 text-sm font-body uppercase tracking-[0.2em] text-akasha-black/85 hover:text-akasha-orange border-b border-akasha-gray-4 transition-colors"
              >
                {item.label}
              </a>
            ),
          )}
          <a
            href={enrollHref}
            onClick={() => setOpen(false)}
            className="mt-3 bg-akasha-orange text-white text-center text-xs font-medium tracking-[0.12em] uppercase px-5 py-3 rounded-full shadow-sm shadow-akasha-orange/20 hover:shadow-md transition-all duration-300"
          >
            {ctaText}
          </a>
        </nav>
      </div>
    </header>
  );
}
