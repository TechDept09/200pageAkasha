import Image from 'next/image';

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
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="relative aspect-[4/3] bg-akasha-gray-4 block group"
        aria-label={`Learn more about ${title}`}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:opacity-95 transition-opacity"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-akasha-gray-2 font-body text-[11px]">
            Image coming soon
          </div>
        )}

        {discountPercent ? (
          <span
            className="absolute top-2.5 left-2.5 bg-akasha-orange text-akasha-white text-[12px] md:text-[13px] font-semibold tracking-[0.15em] uppercase px-3 py-1.5 rounded-sm shadow-md"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {discountPercent}% off
          </span>
        ) : null}
      </a>

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

        {course.priceLabel ? (
          <div className="mb-4">
            <span
              className="font-heading text-akasha-black text-xl block"
              style={{ fontWeight: 400 }}
            >
              {course.priceLabel}
            </span>
            {course.priceSubLabel ? (
              <span
                className="block text-[10.5px] font-body text-akasha-gray-1 mt-1 leading-snug"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {course.priceSubLabel}
              </span>
            ) : null}
          </div>
        ) : hasDiscount ? (
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
          className="btn-ghost mt-auto"
        >
          Learn More
        </a>
      </div>
    </article>
  );
}
