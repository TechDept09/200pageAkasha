import Image from 'next/image';

// "Meet Your Teachers" section, matching the live Wix 200-Hour page: three
// circular portraits with a gold ring, a script name, and a short graduate
// quote beneath each, over the faint lotus watermark.
const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const teachers = [
  {
    name: 'Burkhard',
    photo:
      'https://static.wixstatic.com/media/cd7168_241779a0b2e94455a8c7fe10e05530c7~mv2.jpg/v1/fill/w_492,h_486,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Akasha-Yoga-Academy-Bali-300-Hour-2019--.jpg',
    quote:
      'The depth of his practice is brilliant. He really holds the space well, and opens from the Heart consistently.',
    attr: 'Zoran from Canada',
  },
  {
    name: 'Kirsten',
    photo:
      'https://static.wixstatic.com/media/c15a18_c3d07047d6e04f11ab181a9a82faff92~mv2.jpg/v1/crop/x_53,y_56,w_394,h_390/fill/w_494,h_486,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/KIRSTEN.jpg',
    quote:
      'Kirsten is super clear & precise. She is motherly, but not patronizing, kind & compassionate.',
    attr: 'Anastasia from Germany',
  },
  {
    name: 'Devdas',
    photo:
      'https://static.wixstatic.com/media/cd7168_c55633f6fdc4442b8a354b77fab9d68f~mv2.jpg/v1/fill/w_492,h_486,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DEVDAS.jpg',
    quote:
      'The way Devdas holds space is amazing. I feel blessed to have had the opportunity to learn from him.',
    attr: 'Rebecca from the US',
  },
];

export default function Teachers() {
  return (
    <section id="teachers" className="relative overflow-hidden bg-akasha-white">
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
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.18em] text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          Meet Your Teachers
        </h2>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8 max-w-4xl mx-auto">
          {teachers.map((t) => (
            <div key={t.name} className="text-center flex flex-col items-center">
              <div
                className="rounded-full p-[3px]"
                style={{ background: 'linear-gradient(135deg, #E7BC5D 0%, #b8892f 55%, #E7BC5D 100%)' }}
              >
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden bg-akasha-gray-4">
                  <Image
                    src={t.photo}
                    alt={`${t.name}, Akasha Yoga Academy lead teacher`}
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                </div>
              </div>

              <span
                className="font-script text-akasha-orange mt-4"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
              >
                {t.name}
              </span>

              <p className="mt-2 max-w-[15rem] font-body italic text-akasha-gray-1 text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <cite className="mt-2 not-italic font-script text-akasha-gray-1" style={{ fontSize: '1rem' }}>
                {t.attr}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
