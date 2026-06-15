function price(n, currency) {
  if (!n) return null;
  return currency === 'USD' ? `US$${n}` : `${currency}${n}`;
}

export default function CourseCTA({ course }) {
  const {
    tagline,
    discountPercent,
    regularPrice,
    promoPrice,
    currency,
    wixEnrollUrl,
  } = course;

  const hasDiscount = regularPrice && promoPrice;

  return (
    <section id="enroll" className="py-24 md:py-32 bg-akasha-black text-akasha-white">
      <div className="section max-w-3xl text-center">
        <span className="eyebrow" style={{ color: '#E7BC5D' }}>
          Sharing the Light of Yoga Since 2011
        </span>

        <h2
          className="text-akasha-white mb-3"
          style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)', fontWeight: 300 }}
        >
          Begin Your
          <br />
          Practice With Us
        </h2>

        {tagline ? (
          <p
            className="script mb-8"
            style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)',
              color: '#E7BC5D',
            }}
          >
            {tagline}
          </p>
        ) : null}

        <p className="font-body text-akasha-white/75 max-w-xl mx-auto mb-10 leading-relaxed">
          Join over 1,100 graduates teaching on 6 continents. A path that meets
          you where you are.
        </p>

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

        {discountPercent ? (
          <p className="text-[10px] font-body text-akasha-white/50 mt-5 tracking-[0.25em] uppercase">
            {discountPercent}% off · Secure checkout via Wix
          </p>
        ) : null}
      </div>
    </section>
  );
}
