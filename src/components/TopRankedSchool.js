'use client';

import { useState } from 'react';
import Image from 'next/image';

// "World's Top-Ranked Yoga School" section, matching the live Wix 200-Hour
// page: three checkmark proof points, three script affirmations, and two
// portrait testimonial videos, over the faint lotus watermark, closing with
// the green CTA.
//
// NOTE: the two testimonial videos are Wix-hosted VideoPlayer components on
// the source site, so their IDs are not in the static HTML. Drop the real
// YouTube IDs into VIDEOS[].youtubeId to wire playback; until then the cards
// show a poster placeholder.
const GREEN = '#5FBFA6';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

// Temporary poster until the real "Changed my Life" thumbnails are supplied.
const POSTER =
  'https://static.wixstatic.com/media/cd7168_5daede02159240e58ad572c3845f434a~mv2.webp/v1/fill/w_640,h_800,al_c,q_85,enc_avif,quality_auto/poster.webp';

const CHECKS = [
  'Meet three lead teachers with 65 years of combined teaching experience',
  'Celebrate excellence, confirmed by 100s of verified 5-Star Yoga Alliance Reviews',
  'Join 1100+ successful graduates, teaching on all six continents',
];

const PHRASES = ['Elevate your practice', 'Teach with confidence', 'Live your passion'];

const VIDEOS = [
  { name: 'Silvia', youtubeId: null, poster: POSTER },
  { name: 'Rosie', youtubeId: null, poster: POSTER },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      className="w-5 h-5 text-akasha-orange shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function VideoCard({ name, youtubeId, poster }) {
  const [play, setPlay] = useState(false);

  return (
    <figure className="flex flex-col items-center">
      <figcaption
        className="font-heading text-akasha-gray-1 mb-4"
        style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 300 }}
      >
        Hear From {name}
      </figcaption>
      <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-md overflow-hidden shadow-lg bg-akasha-gray-4">
        {play && youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={`Hear From ${name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
          />
        ) : (
          <button
            type="button"
            onClick={() => youtubeId && setPlay(true)}
            className="group absolute inset-0 w-full h-full cursor-pointer"
            aria-label={`Play ${name}'s testimonial`}
          >
            <Image src={poster} alt="" fill sizes="320px" className="object-cover" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/85 group-hover:bg-white transition-colors shadow-md">
                <svg viewBox="0 0 24 24" className="w-7 h-7 translate-x-0.5 text-akasha-black" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
    </figure>
  );
}

export default function TopRankedSchool() {
  return (
    <section className="relative overflow-hidden bg-akasha-white">
      {/* Faint lotus watermark, bleeding off the left edge */}
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-140px] top-1/2 -translate-y-1/2 w-[420px] md:w-[620px] opacity-[0.12]"
      />

      <div className="section relative z-10 py-16 md:py-24">
        <h2
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.12em] text-center"
          style={{ fontSize: 'clamp(1.4rem, 3.4vw, 2.4rem)', fontWeight: 300 }}
        >
          World&rsquo;s Top-Ranked Yoga School
        </h2>

        {/* Checkmark proof points */}
        <ul className="mt-10 md:mt-12 max-w-2xl mx-auto space-y-4 font-body text-akasha-gray-1 text-base md:text-lg">
          {CHECKS.map((c) => (
            <li key={c} className="flex items-start gap-3">
              <CheckIcon />
              <span>{c}</span>
            </li>
          ))}
        </ul>

        {/* Script affirmations */}
        <div className="mt-10 md:mt-12 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {PHRASES.map((p) => (
            <span
              key={p}
              className="font-script text-akasha-orange"
              style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.8rem)' }}
            >
              {p}
            </span>
          ))}
        </div>

        {/* Testimonial videos */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto justify-items-center">
          {VIDEOS.map((v) => (
            <VideoCard key={v.name} {...v} />
          ))}
        </div>

        {/* Green CTA */}
        <div className="mt-14 md:mt-16 text-center">
          <a
            href="/200h-essential/enroll"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: GREEN, fontWeight: 600 }}
          >
            Start Your Journey
          </a>
          <p className="mt-3 font-body text-xs uppercase tracking-[0.2em] text-akasha-gray-2">
            Over 70% Off Until July 31st
          </p>
        </div>
      </div>
    </section>
  );
}
