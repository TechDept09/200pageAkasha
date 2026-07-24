'use client';

import Image from 'next/image';
import { useTier } from '@/lib/TierContext';
import { useSaleStatus } from '@/hooks/useSaleStatus';
import { useCountdown } from '@/hooks/useCountdown';

// "After hero" section, matching the live Wix 200-Hour page: warm taupe band
// with the summer-discount headline + countdown, the certified-instructor
// portrait ringed in gold, the Yoga Alliance seals (RYS-200 + E-RYT-500),
// the "Become a Certified Yoga Teacher Online" copy, and the tagline.
//
// NOTE (pending assets/values to confirm against Wix):
// - BG_TAUPE / GREEN are sampled from the screenshot, tweak to exact hex.
// - The faint lotus-mandala watermark asset URL is not yet wired in.
const BG_TAUPE = '#A99C8D';
const GREEN = '#5FBFA6';

const PORTRAIT =
  'https://static.wixstatic.com/media/c15a18_5d357dab7cec43c4879c3f12090081ce~mv2.jpg/v1/fill/w_600,h_600,al_c,q_85,enc_avif,quality_auto/certified-yoga-teacher.jpg';
const BADGE_RYS200 =
  'https://static.wixstatic.com/media/cd7168_977ee408f17b46a29edd503ef69e6617~mv2.png/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_977ee408f17b46a29edd503ef69e6617~mv2.png';
const BADGE_ERYT500 =
  'https://static.wixstatic.com/media/cd7168_24994c4ef3af4e9585efa50e9c37c8eb~mv2.png/v1/fill/w_180,h_178,al_c,q_85,enc_avif,quality_auto/cd7168_24994c4ef3af4e9585efa50e9c37c8eb~mv2.png';

const pad = (n) => String(n).padStart(2, '0');

function Countdown() {
  const tier = useTier();
  const status = useSaleStatus(tier.saleWindows);
  const c = useCountdown(status.currentEnd || '1970-01-01T00:00:00Z');

  const units = [
    { label: 'Days', value: c.days },
    { label: 'Hours', value: c.hours },
    { label: 'Minutes', value: c.minutes },
    { label: 'Seconds', value: c.seconds },
  ];

  return (
    <div className="flex items-start justify-center gap-6 md:gap-10">
      {units.map((u) => (
        <div key={u.label} className="text-center">
          <div
            className="font-heading tabular-nums text-akasha-orange leading-none"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 400 }}
          >
            {c.hasMounted ? pad(u.value) : '00'}
          </div>
          <div className="mt-2 text-[10px] md:text-[11px] font-body uppercase tracking-[0.25em] text-white/70">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CertifiedIntroBanner() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: BG_TAUPE }}
      aria-labelledby="certified-intro-heading"
    >
      <div className="section relative">
        {/* Headline + countdown */}
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="text-white/90"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 300, lineHeight: 1.2 }}
          >
            Over 70% Summer Wellness Discount!
            <br />
            Until July 31st.
          </h2>

          <p className="mt-8 mb-5 text-[12px] md:text-[13px] font-body uppercase tracking-[0.3em] text-white/80">
            Discount ends in
          </p>
          <Countdown />
        </div>

        {/* Portrait + badges + copy */}
        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center max-w-4xl mx-auto">
          <div className="flex justify-center md:justify-end">
            <div
              className="rounded-full p-[6px]"
              style={{ background: `linear-gradient(135deg, #E7BC5D, ${'#ED5829'})` }}
            >
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-akasha-gray-4">
                <Image
                  src={PORTRAIT}
                  alt="Certified Yoga Instructor at Akasha Yoga Academy"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-5 mb-6">
              <img src={BADGE_RYS200} alt="Yoga Alliance RYS-200" className="h-20 md:h-24 w-auto" loading="lazy" />
              <img src={BADGE_ERYT500} alt="Yoga Alliance E-RYT-500" className="h-20 md:h-24 w-auto" loading="lazy" />
            </div>

            <h3
              id="certified-intro-heading"
              className="text-white mb-3"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 300, lineHeight: 1.25 }}
            >
              Become a Certified Yoga Teacher Online
            </h3>
            <p className="font-body text-white/80 leading-relaxed mb-7 max-w-md mx-auto md:mx-0">
              Turn your passion into a meaningful profession with our Yoga
              Alliance certified course.
            </p>

            <a
              href="/200h-essential/enroll"
              className="inline-flex items-center justify-center px-9 py-4 rounded-full text-[13px] md:text-[14px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:brightness-95 hover:shadow-lg"
              style={{ backgroundColor: GREEN, fontFamily: 'Inter, sans-serif' }}
            >
              Start Your Journey
            </a>
          </div>
        </div>

        <p className="text-center text-white/70 mt-14 md:mt-16 font-body tracking-[0.05em]">
          Sharing the Light of Yoga with Love &amp; Wisdom Since 2011
        </p>
      </div>
    </section>
  );
}
