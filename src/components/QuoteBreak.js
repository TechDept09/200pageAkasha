import Image from 'next/image';

export default function QuoteBreak({ text, author, country, dark = false, image = null, className = '' }) {
  // Full-bleed image variant: a graduate photo with the quote overlaid at
  // the bottom, matching the live Wix testimonial banners.
  if (image) {
    return (
      <section className={`relative w-full min-h-[260px] md:min-h-[340px] flex items-end justify-center overflow-hidden ${className}`}>
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="section relative z-10 max-w-3xl text-center pb-8 md:pb-12">
          <blockquote
            className="font-heading text-akasha-white"
            style={{
              fontSize: 'clamp(1.05rem, 2.2vw, 1.6rem)',
              fontWeight: 300,
              lineHeight: 1.4,
              textShadow: '0 1px 6px rgba(0,0,0,0.35)',
            }}
          >
            &ldquo;{text}&rdquo;
          </blockquote>
          <cite
            className="not-italic font-script text-akasha-white block mt-2"
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
      <div className="section max-w-3xl text-center">
        <span className="text-akasha-gold tracking-[0.25em] text-sm block mb-6">
          ★★★★★
        </span>
        <blockquote
          className={`font-heading mb-6 ${
            dark ? 'text-akasha-white' : 'text-akasha-black'
          }`}
          style={{
            fontSize: 'clamp(1.3rem, 2.6vw, 1.8rem)',
            fontWeight: 300,
            lineHeight: 1.5,
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
