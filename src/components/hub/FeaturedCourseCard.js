export default function FeaturedCourseCard({ course, anchorId, ctaLabel = 'Learn More' }) {
  const {
    title,
    badge,
    discountPercent,
    regularPrice,
    promoPrice,
    currency,
    shortDescription,
    usp,
    image,
    href,
    isInternal,
  } = course;

  const external = !isInternal;

  return (
    <section id={anchorId} className="py-16 md:py-24 bg-akasha-white">
      <div className="section">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden rounded-sm bg-akasha-gray-4">
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-akasha-gray-2 font-body text-sm">
                Image coming soon
              </div>
            )}

            {discountPercent ? (
              <div className="absolute top-4 left-4 bg-akasha-orange text-akasha-white px-4 py-2 rounded-sm">
                <p
                  className="text-[10px] font-body uppercase tracking-[0.2em] leading-none mb-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Save
                </p>
                <p className="font-heading text-2xl leading-none" style={{ fontWeight: 400 }}>
                  {discountPercent}% off
                </p>
              </div>
            ) : null}
          </div>

          <div className="text-center lg:text-left">
            {badge ? (
              <span className="eyebrow" style={{ color: '#ED5829' }}>
                {badge}
              </span>
            ) : null}

            <h2
              className="mb-5"
              style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 300 }}
            >
              {title}
            </h2>

            <p className="font-body text-akasha-gray-1 max-w-md mx-auto lg:mx-0 mb-6 leading-relaxed">
              {shortDescription}
            </p>

            {usp ? (
              <p
                className="text-[11px] font-body uppercase tracking-[0.2em] text-akasha-gold mb-7"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {usp}
              </p>
            ) : null}

            {regularPrice && promoPrice ? (
              <div className="flex items-baseline justify-center lg:justify-start gap-4 mb-8">
                <span className="text-akasha-gray-2 line-through font-body text-lg">
                  {currency === 'USD' ? 'US$' : currency}{regularPrice}
                </span>
                <span
                  className="font-heading text-akasha-orange text-4xl md:text-5xl"
                  style={{ fontWeight: 400 }}
                >
                  {currency === 'USD' ? 'US$' : currency}{promoPrice}
                </span>
              </div>
            ) : null}

            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="btn-primary"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
