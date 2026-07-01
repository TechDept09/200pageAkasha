// Single-video YouTube embed. Uses youtube-nocookie + lazy iframe so the
// video costs nothing until the buyer scrolls to it, and never sets a
// third-party cookie unless played. Default copy targets the 200hr
// Essential landing page; both eyebrow and headline are overrideable
// so the same component can sit on other course pages later.

export default function IntroVideo({
  videoId,
  title = 'A look inside the training',
  eyebrow = 'Meet Akasha',
  headline = 'A quiet look inside',
  description = 'Hear from the founders and step into the space where this training lives before deciding anything.',
  headingId = 'intro-video-heading',
}) {
  if (!videoId) return null;
  return (
    <section
      className="py-16 md:py-24 bg-akasha-white"
      aria-labelledby={headingId}
    >
      <div className="section max-w-4xl">
        <header className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="eyebrow">{eyebrow}</span>
          <h2
            id={headingId}
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}
          >
            {headline}
          </h2>
          <span className="gold-rule" />
          {description ? (
            <p className="font-body text-akasha-gray-1 mt-5 text-base md:text-lg leading-relaxed">
              {description}
            </p>
          ) : null}
        </header>

        <figure className="flex flex-col">
          <div className="aspect-video bg-akasha-gray-4 rounded-sm overflow-hidden shadow-md">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
              title={title}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              style={{ border: 0 }}
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
