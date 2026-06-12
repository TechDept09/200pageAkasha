/**
 * Single centered testimonial interlude between sections;
 * the signature rhythm of akashayogaacademy.com.
 */
export default function QuoteBreak({ text, author, country, dark = false }) {
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
