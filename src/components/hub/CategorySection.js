import CourseGridCard from './CourseGridCard';

export default function CategorySection({ id, eyebrow, heading, intro, courses, bg = 'bg-akasha-gray-4/30' }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${bg}`}>
      <div className="section">
        <div className="text-center max-w-2xl mx-auto mb-14">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
            {heading}
          </h2>
          <span className="gold-rule" />
          {intro ? (
            <p className="font-body text-akasha-gray-1 mt-6 leading-relaxed">{intro}</p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((c) => (
            <CourseGridCard key={c.slug} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
