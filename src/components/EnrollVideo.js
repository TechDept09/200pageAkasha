'use client';

// Video section for the enroll page ("Watch This Video To Learn More About Us"
// and "Watch This Virtual Tour" on the live Wix /enroll-now page), rendered
// transparently over the warm-gray canvas. Copy is verbatim from the source.
const ORANGE = '#E5771E';

export default function EnrollVideo({
  heading,
  description,
  videoId,
  footerLines = [],
  showEnroll = false,
  onEnroll,
}) {
  const handleEnroll = (e) => {
    e.preventDefault();
    onEnroll?.();
  };

  return (
    <section className="scroll-mt-24">
      <div className="section max-w-3xl py-14 md:py-20 text-center">
        <h2 className="font-heading uppercase tracking-[0.06em] text-akasha-white/90" style={{ fontSize: 'clamp(1.4rem, 3.2vw, 2.1rem)', fontWeight: 300 }}>
          {heading}
        </h2>

        {description ? (
          <p className="font-body text-akasha-white/75 leading-relaxed mt-5 max-w-2xl mx-auto">
            {description}
          </p>
        ) : null}

        {videoId ? (
          <div className="aspect-video rounded-sm overflow-hidden shadow-lg mt-8 bg-black/40">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
              title={heading}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              style={{ border: 0 }}
            />
          </div>
        ) : null}

        {footerLines.length > 0 && (
          <div className="mt-8 space-y-2">
            {footerLines.map((line) => (
              <p key={line} className="font-heading text-akasha-white/80" style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)', fontWeight: 300 }}>
                {line}
              </p>
            ))}
          </div>
        )}

        {showEnroll && (
          <div className="mt-8">
            <button
              type="button"
              onClick={handleEnroll}
              className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
              style={{ backgroundColor: ORANGE, fontWeight: 600 }}
            >
              Enroll Now
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
