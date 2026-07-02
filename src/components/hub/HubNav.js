'use client';

import { useEffect, useState } from 'react';

const LOGO_BLACK =
  'https://static.wixstatic.com/media/c15a18_add3f1d2dd1a4582876f0249d1a2daf3~mv2.png/v1/fill/w_376,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Akasha-Yoga-Academy-Logo-2020-BLACK-500W.png';

// Menu links dropped at team's request. Hub nav keeps just the
// logo (top-left) and the Browse Courses CTA. Restore this array
// if the anchor navigation returns.
const links = [];

export default function HubNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-akasha-white transition-shadow duration-200 ${
        scrolled ? 'border-b border-akasha-gray-4' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center" aria-label="Akasha Yoga Academy">
          <img src={LOGO_BLACK} alt="Akasha Yoga Academy" className="h-14 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] font-body uppercase tracking-[0.2em] text-akasha-black/70 hover:text-akasha-orange transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://www.akashayogaacademy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center bg-akasha-orange text-white text-[11px] font-medium tracking-[0.12em] uppercase px-5 py-2.5 rounded-full hover:bg-akasha-orange-dark transition-colors"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Browse Courses
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
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="px-5 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-body uppercase tracking-[0.2em] text-akasha-black/80 hover:text-akasha-orange"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.akashayogaacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 bg-akasha-orange text-white text-center text-xs font-medium tracking-[0.12em] uppercase px-5 py-3 rounded-full"
          >
            Browse Courses
          </a>
        </nav>
      </div>
    </header>
  );
}
