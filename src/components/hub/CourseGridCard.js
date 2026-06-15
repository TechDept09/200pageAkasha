export default function CourseGridCard({ course }) {
  const {
    title,
    discountPercent,
    regularPrice,
    promoPrice,
    currency,
    shortDescription,
    image,
    href,
    isInternal,
    prereq,
    openToAll,
  } = course;

  const external = !isInternal;
  const price = (n) => (currency === 'USD' ? `US$${n}` : `${currency}${n}`);
  const hasDiscount = regularPrice && promoPrice;
  const hasPrice = regularPrice && !promoPrice;

  return (
    <article className="flex flex-col bg-akasha-white border border-akasha-gray-4 rounded-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative aspect-[4/3] bg-akasha-gray-4">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-akasha-gray-2 font-body text-[11px]">
            Image coming soon
          </div>
        )}

        {discountPercent ? (
          <span
            className="absolute top-2.5 left-2.5 bg-akasha-orange text-akasha-white text-[10px] font-medium tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {discountPercent}% off
          </span>
        ) : null}
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3
          className="font-heading text-akasha-black text-base md:text-[17px] mb-2 leading-snug"
          style={{ fontWeight: 400 }}
        >
          {title}
        </h3>

        <p className="font-body text-[13px] text-akasha-gray-1 mb-4 leading-relaxed flex-1">
          {shortDescription}
        </p>

        {(prereq || openToAll) ? (
          <p
            className="text-[9.5px] font-body uppercase tracking-[0.18em] text-akasha-gray-2 mb-3"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {openToAll ? 'Open to all' : `Prereq: ${prereq}`}
          </p>
        ) : null}

        {hasDiscount ? (
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-akasha-gray-2 line-through font-body text-xs">
              {price(regularPrice)}
            </span>
            <span
              className="font-heading text-akasha-orange text-xl"
              style={{ fontWeight: 400 }}
            >
              {price(promoPrice)}
            </span>
          </div>
        ) : hasPrice ? (
          <div className="mb-4">
            <span
              className="font-heading text-akasha-black text-xl"
              style={{ fontWeight: 400 }}
            >
              {price(regularPrice)}
            </span>
          </div>
        ) : null}

        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="inline-flex items-center justify-center bg-transparent text-akasha-black border border-akasha-black px-5 py-2.5 rounded-full text-[10.5px] font-medium uppercase tracking-[0.2em] hover:bg-akasha-black hover:text-akasha-white transition-all duration-300 mt-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Learn More
        </a>
      </div>
    </article>
  );
}
