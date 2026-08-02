import Image from 'next/image';

// "Highest-Rated School" section, matching the live Wix 200-Hour page: a
// centered headline + subhead, a two-column body (copy left, a gold-ringed
// circular founder photo right), and the green "Join Our Family" CTA, over
// the faint lotus watermark. Copy is verbatim from the live source.
const GREEN = '#5FBFA6';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const FOUNDERS_PHOTO =
  'https://static.wixstatic.com/media/cd7168_08058b1d2eed4741af2e2306a169332b~mv2.jpg/v1/fill/w_560,h_560,al_c,q_85,enc_avif,quality_auto/founders.jpg';

export default function HighestRatedSchool() {
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
        <header className="text-center">
          <h2
            className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em]"
            style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
          >
            Highest-Rated School
          </h2>
          <p className="mt-3 font-body uppercase tracking-[0.2em] text-akasha-gray-2 text-xs md:text-sm">
            Over 1100 Graduates Teach on All 6 Continents
          </p>
        </header>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center max-w-4xl mx-auto">
          <div className="space-y-5 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
            <p>
              You will benefit from{' '}
              <strong className="font-semibold text-akasha-black">
                high-end quality &amp; genuine excellence
              </strong>
              : Akasha is recognized globally as the highest ranked Yoga school
              with more than{' '}
              <strong className="font-semibold text-akasha-black">
                250 Yoga Alliance reviews
              </strong>
              .
            </p>
            <p>
              It&rsquo;s our mission to unlock{' '}
              <strong className="font-semibold text-akasha-black">
                each student&rsquo;s full potential
              </strong>{' '}
              &ndash; both on and off the mat. So far, we&rsquo;ve uplifted the
              lives of more than{' '}
              <strong className="font-semibold text-akasha-black">3,000 students</strong>{' '}
              around the globe.
            </p>
            <p>
              Become part of an{' '}
              <strong className="font-semibold text-akasha-black">enthusiastic community</strong>{' '}
              that values authentic learning &amp;{' '}
              <strong className="font-semibold text-akasha-black">sincere holistic growth</strong>.
            </p>
          </div>

          <div className="flex justify-center">
            <div
              className="rounded-full p-[3px]"
              style={{ background: 'linear-gradient(135deg, #E7BC5D 0%, #b8892f 55%, #E7BC5D 100%)' }}
            >
              <div className="relative w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden bg-akasha-gray-4">
                <Image
                  src={FOUNDERS_PHOTO}
                  alt="Akasha Yoga Academy founders"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Green CTA */}
        <div className="mt-12 md:mt-14 text-center">
          <a
            href="/200h-essential/enroll"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: GREEN, fontWeight: 600 }}
          >
            Join Our Family
          </a>
        </div>
      </div>
    </section>
  );
}
