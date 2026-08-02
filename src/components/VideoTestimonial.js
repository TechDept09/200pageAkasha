'use client';

import { useState } from 'react';

/**
 * Inline video testimonial embed. Shows a clickable poster thumbnail
 * first — the YouTube iframe only loads when the visitor chooses to
 * watch. Uses youtube-nocookie + anti-navigation params so the user
 * stays on the page: no related videos, minimal branding, inline only.
 *
 * Props:
 *   videoId     — YouTube video ID (required)
 *   title       — iframe title for a11y (default: 'Video testimonial')
 *   posterImg   — poster thumbnail URL (default: YouTube hqdefault)
 *   eyebrow     — small label above heading
 *   heading     — section heading
 *   description — supporting text below heading
 */
export default function VideoTestimonial({
  videoId,
  title = 'Video testimonial',
  posterImg,
  eyebrow = 'Hear from our graduates',
  heading = 'What our students say',
  description = 'Watch real stories from graduates who transformed their practice and their lives through Akasha.',
}) {
  const [playing, setPlaying] = useState(false);
  const thumb = posterImg || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <section className="py-16 md:py-24 bg-akasha-white" aria-labelledby="vt-heading">
      <div className="section max-w-4xl">
        <header className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          {eyebrow ? <span className="eyebrow text-akasha-orange">{eyebrow}</span> : null}
          <h2
            id="vt-heading"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 300 }}
          >
            {heading}
          </h2>
          <span className="gold-rule" />
          {description ? (
            <p className="font-body text-akasha-gray-1 mt-5 text-base md:text-lg leading-relaxed">
              {description}
            </p>
          ) : null}
        </header>

        <figure className="flex flex-col max-w-2xl mx-auto">
          {/* Poster with play button — click-to-load pattern keeps the
              YouTube iframe payload off the critical path and gives the
              visitor control over when third-party code runs. */}
          {playing ? (
            <div className="aspect-video bg-akasha-black rounded-sm overflow-hidden shadow-lg">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&playsinline=1`}
                title={title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                style={{ border: 0 }}
              />
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="relative aspect-video bg-akasha-black rounded-sm overflow-hidden shadow-lg group cursor-pointer border-0 p-0 w-full"
              aria-label={`Play ${title}`}
            >
              <img
                src={thumb}
                alt={title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                loading="lazy"
              />
              {/* Semi-transparent overlay so the white play icon is
                  always readable even on light thumbnails. */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

              {/* Play button — centered, familiar YouTube-triangle shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-akasha-orange flex items-center justify-center shadow-lg group-hover:bg-akasha-orange-dark group-hover:scale-105 transition-all duration-300">
                  <svg
                    width="24"
                    height="28"
                    viewBox="0 0 24 28"
                    fill="none"
                    aria-hidden="true"
                    className="ml-1"
                  >
                    <path
                      d="M0 0v28l24-14L0 0z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </button>
          )}

          <figcaption className="text-center mt-4">
            <p className="text-[11px] font-body uppercase tracking-[0.22em] text-akasha-gray-1">
              Click to watch
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
