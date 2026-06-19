'use client';

import { useSaleStatus } from '@/hooks/useSaleStatus';

function price(n, currency) {
  if (!n) return null;
  return currency === 'USD' ? `US$${n}` : `${currency}${n}`;
}

export default function CourseCTA({ course }) {
  const {
    title,
    tagline,
    discountPercent,
    discountLabel,
    saleEndShort,
    regularPrice,
    promoPrice,
    currency,
    wixEnrollUrl,
  } = course;

  const status = useSaleStatus(course.saleWindows, course.salePhases);
  const dateText = status.phase?.dateRange || (saleEndShort ? `Ends in ${saleEndShort}` : null);

  const hasDiscount = regularPrice && promoPrice;

  return (
    <section id="enroll" className="py-24 md:py-32 bg-akasha-black text-akasha-white">
      <div className="section max-w-3xl text-center">
        <span className="eyebrow" style={{ color: '#E7BC5D' }}>
          Sharing the Light of Yoga Since 2011
        </span>

        <h2
          className="text-akasha-white mb-3"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 300 }}
        >
          {title}
        </h2>

        {tagline ? (
          <p
            className="script mb-10"
            style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)',
              color: '#E7BC5D',
            }}
          >
            {tagline}
          </p>
        ) : null}

        {discountLabel ? (
          <p
            className="font-body uppercase tracking-[0.25em] mb-4 text-sm md:text-[15px]"
            style={{ color: '#E7BC5D', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
          >
            {discountLabel}
            {dateText ? ` · ${dateText}` : ''}
          </p>
        ) : null}

        {regularPrice ? (
          <div className="flex items-baseline justify-center gap-4 mb-8">
            {hasDiscount ? (
              <span className="text-akasha-white/50 text-lg line-through font-body">
                {price(regularPrice, currency)}
              </span>
            ) : null}
            <span
              className="font-heading text-akasha-white text-5xl md:text-6xl"
              style={{ fontWeight: 300 }}
            >
              {price(promoPrice || regularPrice, currency)}
            </span>
          </div>
        ) : null}

        <a
          href={wixEnrollUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-action !px-14 inline-block"
        >
          Start Today
        </a>

        <p className="text-[10px] font-body text-akasha-white/50 mt-5 tracking-[0.25em] uppercase">
          {discountLabel || (discountPercent ? `${discountPercent}% off` : null)}
          {dateText ? ` · ${dateText}` : ''}
          {' · 14-Day Money-Back Guarantee'}
        </p>
      </div>
    </section>
  );
}
