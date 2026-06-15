'use client';

import { useEffect, useState } from 'react';

const LOGO_BLACK =
  'https://static.wixstatic.com/media/c15a18_add3f1d2dd1a4582876f0249d1a2daf3~mv2.png/v1/fill/w_376,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Akasha-Yoga-Academy-Logo-2020-BLACK-500W.png';

export default function CourseNav({ ctaLabel = 'Enroll' }) {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center" aria-label="Akasha Yoga Academy">
          <img src={LOGO_BLACK} alt="Akasha Yoga Academy" className="h-14 w-auto" />
        </a>

        <div className="flex items-center gap-3 md:gap-6">
          <a
            href="/"
            className="hidden md:inline-flex text-[12px] font-body uppercase tracking-[0.2em] text-akasha-black/70 hover:text-akasha-orange transition-colors"
          >
            All Courses
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center bg-akasha-orange text-white text-[11px] font-medium tracking-[0.12em] uppercase px-5 py-2.5 rounded-full hover:bg-akasha-orange-dark transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
