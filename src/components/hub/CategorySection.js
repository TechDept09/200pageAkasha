import CourseGridCard from './CourseGridCard';

export default function CategorySection({
  id,
  eyebrow,
  heading,
  intro,
  courses,
  bg = 'bg-akasha-gray-4/30',
}) {
  return (
    <section id={id} className={`py-14 md:py-20 ${bg} scroll-mt-20`}>
      <div className="section">
        <div className="text-center max-w-2xl mx-auto mb-10">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2 style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.4rem)', fontWeight: 300 }}>
            {heading}
          </h2>
          <span className="gold-rule" />
          {intro ? (
            <p className="font-body text-akasha-gray-1 mt-4 text-sm md:text-base leading-relaxed">
              {intro}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {courses.map((c) => (
            <CourseGridCard key={c.slug} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
