export default function CTA() {
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
          Become a Certified
          <br />
          Yoga Teacher Online
        </h2>

        <p className="script mb-8" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#E7BC5D' }}>
          75% Summer Discount
        </p>

        <p className="font-body text-akasha-white/75 max-w-xl mx-auto mb-10 leading-relaxed">
          Turn your passion into a meaningful profession. Join over 1,100
          graduates teaching on 6 continents, at our lowest price ever.
        </p>

        <div className="flex items-baseline justify-center gap-4 mb-8">
          <span className="text-akasha-white/50 text-lg line-through font-body">
            US$1190
          </span>
          <span className="font-heading text-akasha-white text-5xl md:text-6xl" style={{ fontWeight: 300 }}>
            US$290
          </span>
        </div>

        <a href="#pricing" className="btn-action !px-14 inline-block">
          Start Today
        </a>

        <p className="text-[10px] font-body text-akasha-white/50 mt-5 tracking-[0.25em] uppercase">
          75% Summer Discount · Ends June 15 · 14-Day Money-Back Guarantee
        </p>
      </div>
    </section>
  );
}
