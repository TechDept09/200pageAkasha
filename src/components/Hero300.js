'use client';

// Hero from the live Wix 300-Hour page: looping background video of the Bali
// studio, white Akasha crest, "300-HOUR / ADVANCED ONLINE TTC", italic
// tagline, mint JOIN NOW CTA, and a full-bleed mint promo strip at the bottom.
const MINT = '#7CC7B0';

const VIDEO_SRC =
  'https://video.wixstatic.com/video/cd7168_44c4bbbdd68b48e88b61494a8e8c2d6f/720p/mp4/file.mp4';

const POSTER =
  'https://static.wixstatic.com/media/cd7168_44c4bbbdd68b48e88b61494a8e8c2d6ff000.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/poster.jpg';

const LOGO_WHITE =
  'https://static.wixstatic.com/media/c15a18_16e6f60ed35f4e3fa50fc7552ddca6be~mv2.png/v1/crop/x_0,y_12,w_1000,h_529/fill/w_400,h_212,al_c,q_85,enc_avif,quality_auto/LOGO-WHITE.png';

const ENROLL_HREF = 'https://www.akashayogaacademy.com/300-hr-online-enroll-now';

export default function Hero300() {
  return (
    <section className="relative overflow-hidden">
      {/* Background video (same asset as Wix) */}
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
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative section flex flex-col items-center justify-center text-center pt-20 md:pt-28 pb-28 md:pb-32 min-h-[72vh] md:min-h-[78vh]">
        <img
          src={LOGO_WHITE}
          alt="Akasha Yoga Academy"
          className="h-16 md:h-20 w-auto mb-8 md:mb-10"
          fetchpriority="high"
          decoding="async"
        />

        <h1
          className="font-heading text-akasha-white uppercase leading-[1.08]"
          style={{
            fontSize: 'clamp(2.4rem, 5.8vw, 4.2rem)',
            fontWeight: 500,
            letterSpacing: '0.06em',
          }}
        >
          300-Hour
          <br />
          Advanced Online TTC
        </h1>

        <p
          className="script text-akasha-white mt-4 md:mt-5"
          style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.5rem)' }}
        >
          A Life-Changing Yogic Immersion
        </p>

        <div className="mt-10 md:mt-12">
          <a
            href={ENROLL_HREF}
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.2em] px-10 py-3.5 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: MINT, fontWeight: 600, fontSize: '0.85rem' }}
          >
            Join Now
          </a>
        </div>
      </div>

      {/* Promo strip */}
      <div className="relative text-center text-akasha-white px-5 py-4 md:py-5" style={{ backgroundColor: MINT }}>
        <p className="font-body" style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)', fontWeight: 500 }}>
          33% Summer Wellness Discount!
        </p>
        <p className="font-body mt-0.5 opacity-95" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.05rem)' }}>
          Starting From Just US$399. Expires on July 31.
        </p>
      </div>
    </section>
  );
}
