export default function CourseGridCard({ course }) {
  const {
    title,
    discountPercent,
    shortDescription,
    image,
    href,
    isInternal,
    prereq,
    openToAll,
  } = course;

  const external = !isInternal;

  return (
    <article className="flex flex-col bg-akasha-white border border-akasha-gray-4 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[4/3] bg-akasha-gray-4">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-akasha-gray-2 font-body text-xs">
            Image coming soon
          </div>
        )}

        {discountPercent ? (
          <span
            className="absolute top-3 left-3 bg-akasha-orange text-akasha-white text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-1.5 rounded-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {discountPercent}% off
          </span>
        ) : null}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3
          className="font-heading text-akasha-black text-lg md:text-xl mb-3 leading-snug"
          style={{ fontWeight: 400 }}
        >
          {title}
        </h3>

        <p className="font-body text-sm text-akasha-gray-1 mb-5 leading-relaxed flex-1">
          {shortDescription}
        </p>

        {(prereq || openToAll) ? (
          <p
            className="text-[10px] font-body uppercase tracking-[0.2em] text-akasha-gray-2 mb-5"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {openToAll ? 'Open to all' : `Prereq: ${prereq}`}
          </p>
        ) : null}

        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="inline-flex items-center justify-center bg-transparent text-akasha-black border border-akasha-black px-6 py-3 rounded-full text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-akasha-black hover:text-akasha-white transition-all duration-300 mt-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Learn More
        </a>
      </div>
    </article>
  );
}
