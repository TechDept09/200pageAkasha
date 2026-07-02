import { courses } from '@/lib/courses';

function ProductCard({ course, accent, badge }) {
  const {
    title,
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
  const price = (n) => (currency === 'USD' ? `US$${n}` : `${currency}${n}`);

  return (
    <article
      className={`flex flex-col bg-akasha-white border ${accent.border} rounded-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full`}
    >
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="relative aspect-[16/10] bg-akasha-gray-4 block group"
        aria-label={`Explore ${title}`}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:opacity-95 transition-opacity"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-akasha-gray-2 font-body text-xs">
            Image coming soon
          </div>
        )}

        {discountPercent ? (
          <div className={`absolute top-3 left-3 ${accent.badgeBg} ${accent.badgeText} px-4 py-2 rounded-sm shadow-md`}>
            <span
              className="text-[13px] md:text-[14px] font-semibold uppercase tracking-[0.18em]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {discountPercent}% off
            </span>
          </div>
        ) : null}

        {badge ? (
          <span
            className={`absolute top-3 right-3 bg-akasha-white ${accent.text} text-[11px] md:text-[12px] font-semibold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-sm border ${accent.border}`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {badge}
          </span>
        ) : null}
      </a>

      <div className="flex flex-col flex-1 p-6 md:p-7">
        <h3
          className="font-heading text-akasha-black text-xl md:text-2xl mb-3 leading-snug"
          style={{ fontWeight: 400 }}
        >
          {title}
        </h3>

        <p className="font-body text-sm text-akasha-gray-1 mb-5 leading-relaxed">
          {shortDescription}
        </p>

        {usp ? (
          <p
            className={`text-[11px] font-body uppercase tracking-[0.18em] ${accent.text} mb-5`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {usp}
          </p>
        ) : null}

        {regularPrice && promoPrice ? (
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-akasha-gray-2 line-through font-body text-base">
              {price(regularPrice)}
            </span>
            <span
              className={`font-heading ${accent.text} text-3xl md:text-4xl`}
              style={{ fontWeight: 400 }}
            >
              {price(promoPrice)}
            </span>
          </div>
        ) : regularPrice ? (
          <div className="mb-6">
            <span
              className="font-heading text-akasha-black text-3xl md:text-4xl"
              style={{ fontWeight: 400 }}
            >
              {price(regularPrice)}
            </span>
          </div>
        ) : null}

        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className={`mt-auto inline-flex items-center justify-center ${accent.btnBg} ${accent.btnText} ${accent.btnHover} px-8 py-3.5 rounded-full text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Explore {course.slug === '200h-essential' ? 'Essential' : 'Premium'}
        </a>
      </div>
    </article>
  );
}

export default function MainProducts({
  essentialOverride,
  premiumOverride,
} = {}) {
  const essential =
    essentialOverride || courses.find((c) => c.slug === '200h-essential');
  const premium =
    premiumOverride || courses.find((c) => c.slug === '200h-premium');

  return (
    <section id="main" className="py-14 md:py-20 bg-akasha-white">
      <div className="section">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow">200-Hour Yoga Teacher Training</span>
          <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 300 }}>
            Choose Your Path
          </h2>
          <span className="gold-rule" />
          <p className="font-body text-akasha-gray-1 mt-5 text-base md:text-lg leading-relaxed">
            Self-paced or mentored, both lead to Yoga Alliance certification.
            Pick the format that fits your season of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div id="essential" className="scroll-mt-24">
            <ProductCard
              course={essential}
              badge="Most Popular"
              accent={{
                border: 'border-akasha-orange/40',
                badgeBg: 'bg-akasha-orange',
                badgeText: 'text-akasha-white',
                text: 'text-akasha-orange',
                btnBg: 'bg-akasha-orange',
                btnText: 'text-akasha-white',
                btnHover: 'hover:bg-akasha-orange-dark',
              }}
            />
          </div>
          <div id="premium" className="scroll-mt-24">
            <ProductCard
              course={premium}
              badge="With Mentorship"
              accent={{
                border: 'border-akasha-gold/50',
                badgeBg: 'bg-akasha-black',
                badgeText: 'text-akasha-white',
                text: 'text-akasha-gold',
                btnBg: 'bg-akasha-black',
                btnText: 'text-akasha-white',
                btnHover: 'hover:bg-akasha-gray-1',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
