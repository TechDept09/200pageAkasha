export default function QuoteBreak({ text, author, country, dark = false, image = null, className = '' }) {
  // Full-bleed image variant: a graduate photo with the quote overlaid at
  // the bottom, matching the live Wix testimonial banners.
  if (image) {
    return (
      <section className={`relative w-full min-h-[260px] md:min-h-[340px] flex items-end justify-center overflow-hidden ${className}`}>
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Warmer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

        {/* Decorative giant quote mark behind text */}
        <span
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 top-[10%] md:top-[5%] font-heading text-white/[0.06] pointer-events-none select-none leading-none"
          style={{ fontSize: 'clamp(8rem, 16vw, 14rem)' }}
        >
          &ldquo;
        </span>

        <div className="section relative z-10 max-w-3xl text-center pb-8 md:pb-12 animate-fade-up">
          <blockquote
            className="font-heading text-akasha-white"
            style={{
              fontSize: 'clamp(1.05rem, 2.2vw, 1.6rem)',
              fontWeight: 300,
              lineHeight: 1.45,
              textShadow: '0 1px 8px rgba(0,0,0,0.4)',
            }}
          >
            &ldquo;{text}&rdquo;
          </blockquote>
          <cite
            className="not-italic font-script text-akasha-white/90 block mt-3"
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              textShadow: '0 1px 6px rgba(0,0,0,0.35)',
            }}
          >
            {author}
            {country ? <> &ndash; {country}</> : null}
          </cite>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`py-16 md:py-20 ${
        dark ? 'bg-akasha-black text-akasha-white' : 'bg-akasha-white'
      }`}
    >
      <div className="section max-w-3xl text-center relative">
        {/* Decorative giant quote mark */}
        <span
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 -top-[0.3em] font-heading text-akasha-orange/[0.07] pointer-events-none select-none leading-none"
          style={{ fontSize: 'clamp(6rem, 12vw, 10rem)' }}
        >
          &ldquo;
        </span>

        <span className="text-akasha-gold tracking-[0.25em] text-sm block mb-6 animate-fade-in relative">
          ★★★★★
        </span>
        <blockquote
          className={`font-heading mb-6 relative ${
            dark ? 'text-akasha-white' : 'text-akasha-black'
          }`}
          style={{
            fontSize: 'clamp(1.3rem, 2.6vw, 1.85rem)',
            fontWeight: 300,
            lineHeight: 1.55,
          }}
        >
          &ldquo;{text}&rdquo;
        </blockquote>
        <cite
          className={`not-italic text-[11px] font-body uppercase tracking-[0.25em] ${
            dark ? 'text-akasha-white/60' : 'text-akasha-gray-1'
          }`}
        >
          {author}, {country}
        </cite>
      </div>
    </section>
  );
}
