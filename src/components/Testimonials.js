export default function Testimonials() {
  const quotes = [
    { text: 'Literally the best month of my life! The journey of self-discovery was unbelievable!', author: 'Charlotte Heminsley', country: 'United States' },
    { text: 'No words would give true justice to the experience with these guys!', author: 'Kinga Kovacs', country: 'United Kingdom' },
    { text: 'The training has a beautiful structure and helps you feel confident to start teaching right away.', author: 'Tamara Cuypers', country: 'Belgium' },
    { text: 'The Teacher Training is amazing — with how much love & authenticity you get prepared to be a Yoga Teacher.', author: 'Pierre Mayer', country: 'Germany' },
    { text: 'This place showed me how to slow down, how to open up, and how to love myself with all around.', author: 'Anna Kotaba', country: 'Poland' },
    { text: 'A fantastic experience. Connecting daily with instructors & participants worldwide was amazing.', author: 'Sayla', country: 'United Kingdom' },
  ];

  return (
    <section className="py-20 md:py-28 bg-akasha-gray-4/30">
      <div className="section">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Testimonials</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
            From the Akasha Family
          </h2>
          <p className="font-body text-akasha-gray-1 mt-4 leading-relaxed">
            Countless genuine reviews speak for themselves.
          </p>
          <span className="gold-rule" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className="bg-akasha-white border border-akasha-gray-4 rounded-sm p-7 text-center flex flex-col"
            >
              <span className="text-akasha-gold text-xs tracking-[0.2em] block mb-4">
                ★★★★★
              </span>
              <blockquote
                className="font-heading text-akasha-black/85 text-[15px] leading-relaxed mb-6 flex-1"
                style={{ fontWeight: 300 }}
              >
                &ldquo;{q.text}&rdquo;
              </blockquote>
              <figcaption>
                <p className="text-[11px] font-body text-akasha-gray-1 uppercase tracking-[0.25em]">
                  {q.author} — {q.country}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
