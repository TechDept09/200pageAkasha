// Course-specific testimonials with student photos sourced from the
// matching akashayogaacademy.com page. Data comes from course.testimonials.

export default function CourseTestimonials({ testimonials = [] }) {
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-akasha-gray-4/30">
      <div className="section">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="eyebrow">From the Akasha Family</span>
          <h2
            style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.4rem)', fontWeight: 300 }}
          >
            Testimonials
          </h2>
          <span className="gold-rule" />
          <p className="font-body text-akasha-gray-1 mt-5 text-sm md:text-base leading-relaxed">
            Over the past decade, we empowered more than 1,100 awesome Yoga
            Instructors, who are now successfully teaching on all 6
            continents. Countless genuine reviews speak for themselves.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-akasha-white border border-akasha-gray-4 rounded-sm p-7 text-center flex flex-col"
            >
              {t.photo ? (
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-akasha-gray-4">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : (
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-akasha-gray-4 flex items-center justify-center font-heading text-akasha-gray-1 text-2xl">
                  {t.name?.charAt(0) || '?'}
                </div>
              )}
              <span className="text-akasha-gold text-xs tracking-[0.2em] block mb-4">
                ★★★★★
              </span>
              <blockquote
                className="font-heading text-akasha-black/85 text-[15px] leading-relaxed mb-5 flex-1"
                style={{ fontWeight: 300 }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <p className="text-[11px] font-body text-akasha-gray-1 uppercase tracking-[0.25em]">
                  {t.name}
                  {t.country ? `, ${t.country}` : ''}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
