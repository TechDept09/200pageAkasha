import Image from 'next/image';
import { useTier } from '@/lib/TierContext';

// "Real Stories of Real Transformation" section, matching the live Wix
// 200-Hour page: a dark feature band with a gold-ringed graduate portrait,
// a highlighted testimonial, and the green "Join the Yoga Family" CTA.
// Copy is verbatim from the live source.
const GREEN = '#5FBFA6';
const DARK_BG = '#3a3a3a';

const EVELYN_PHOTO =
  'https://static.wixstatic.com/media/cd7168_eb16b0e4f34c4eee8970a7e9a279bc29~mv2.png/v1/crop/x_0,y_6,w_894,h_878/fill/w_500,h_490,al_c,q_85,enc_avif,quality_auto/evelyn.png';

export default function Testimonials() {
  const tier = useTier();
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden"
      style={{ backgroundColor: DARK_BG }}
    >
      <div className="section relative z-10 py-16 md:py-24">
        <h2
          className="font-heading uppercase text-white/75 tracking-[0.16em] text-center"
          style={{ fontSize: 'clamp(1.4rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          Real Stories of Real Transformation
        </h2>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 md:gap-12 items-center max-w-4xl mx-auto">
          <div className="flex justify-center">
            <div
              className="rounded-full p-[3px]"
              style={{ background: 'linear-gradient(135deg, #E7BC5D 0%, #b8892f 55%, #E7BC5D 100%)' }}
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-akasha-gray-1">
                <Image
                  src={EVELYN_PHOTO}
                  alt="Evelyn Müller-Lüscher, Akasha Yoga Academy graduate"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <figure className="text-center md:text-left">
            <blockquote
              className="font-body text-white/85 text-base md:text-lg leading-relaxed"
            >
              &ldquo;This online course offered me a great opportunity to{' '}
              <strong className="font-semibold text-white">
                become a better version of myself.
              </strong>{' '}
              The holistic approach to Yoga was very important to me, and{' '}
              <strong className="font-semibold text-white">
                my expectations were fully met.
              </strong>{' '}
              The teachers succeeded in creating a{' '}
              <strong className="font-semibold text-white">
                warm, intimate &amp; unifying atmosphere
              </strong>
              . I am so pleased that I have booked a new course with them
              directly.&rdquo;
            </blockquote>
            <figcaption className="mt-4 font-body text-white/60 text-sm">
              &ndash; Evelyn Müller-Lüscher, Switzerland
            </figcaption>
          </figure>
        </div>

        {/* Green CTA */}
        <div className="mt-12 md:mt-14 text-center">
          <a
            href={tier.ctaHref}
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: GREEN, fontWeight: 600 }}
          >
            Join the Yoga Family
          </a>
        </div>
      </div>
    </section>
  );
}
