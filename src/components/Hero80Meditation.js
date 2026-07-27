'use client';

// Hero from the live Wix 80-Hour Meditation TTC page: looping background
// video, Yoga Alliance white badge, title + script subtitle, mint Enroll
// now CTA, and a full-bleed mint promo strip.
const MINT = '#75C8AE';

const VIDEO_SRC =
  'https://video.wixstatic.com/video/cd7168_af049207a34b49a2b8cb8373993ab442/720p/mp4/file.mp4';

const POSTER =
  'https://static.wixstatic.com/media/cd7168_af049207a34b49a2b8cb8373993ab442f000.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/poster.jpg';

const YA_LOGO_WHITE =
  'https://static.wixstatic.com/media/cd7168_bc603063632f4f1d8bb21b17b922cb81~mv2.png/v1/fill/w_242,h_242,al_c,q_85,enc_avif,quality_auto/YACEP-YA-LOGO-white.png';

const ENROLL_HREF =
  'https://www.akashayogaacademy.com/enroll-now-80-hr-online-meditation-teacher-training';

export default function Hero80Meditation() {
  return (
    <section className="relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_SRC}
        poster={POSTER}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(110, 110, 109, 0.55)' }}
      />

      <div className="relative section flex flex-col items-center justify-center text-center pt-16 md:pt-24 pb-24 md:pb-28 min-h-[70vh] md:min-h-[76vh]">
        <img
          src={YA_LOGO_WHITE}
          alt="Yoga Alliance Certified"
          className="h-[88px] md:h-[121px] w-auto mb-6 md:mb-8"
          fetchpriority="high"
          decoding="async"
        />

        <h1
          className="font-heading text-akasha-white uppercase leading-[1.1]"
          style={{
            fontSize: 'clamp(1.65rem, 4.2vw, 3.125rem)',
            fontWeight: 400,
            letterSpacing: '0.02em',
            maxWidth: '20ch',
          }}
        >
          Online 80-Hour Meditation Teacher Training
        </h1>

        <p
          className="script text-akasha-white mt-4 md:mt-5"
          style={{ fontSize: 'clamp(1.35rem, 2.8vw, 1.875rem)', color: '#FFFFFF' }}
        >
          Certified by Yoga Alliance Continuous Education
        </p>

        <div className="mt-8 md:mt-10">
          <a
            href={ENROLL_HREF}
            className="inline-flex items-center justify-center text-akasha-white uppercase tracking-[0.1em] px-8 py-2.5 font-body transition-all"
            style={{
              backgroundColor: MINT,
              border: `2px solid ${MINT}`,
              borderRadius: 20,
              fontWeight: 700,
              fontSize: '1.05rem',
              boxShadow: '2px 2px 1px rgba(86, 149, 130, 0.88)',
              textShadow: '1px 1.5px rgba(86, 149, 130, 0.77)',
            }}
          >
            Enroll now
          </a>
        </div>
      </div>

      <div
        className="relative text-center text-akasha-white px-5 py-4 md:py-5"
        style={{ backgroundColor: MINT }}
      >
        <p
          className="font-body"
          style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)', fontWeight: 500 }}
        >
          33% Summer Wellness Discount!
        </p>
        <p
          className="font-body mt-0.5 opacity-95"
          style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.05rem)' }}
        >
          Starting From Just US$399. Expires on July 31.
        </p>
      </div>
    </section>
  );
}
