// Section 9 from the live Wix 300-Hour page: "Learn Advanced Yoga &
// Meditation in 3 Parts" overview icons, then zigzag detail rows for each
// 100-hour module, closing with BOOK MY FREE CALL.
const ORANGE = '#D07A3A';
const MINT = '#7CC7B0';

const CALENDLY_URL =
  'https://calendly.com/akasha-yoga-academy/300-hour-discovery-call';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/c15a18_5c73f145ca4842c9a23c2f2d8f6c2080~mv2.jpg/v1/fill/w_800,h_800,al_c,q_85,enc_avif,quality_auto/lotus.jpg';

const BASE = 'https://static.wixstatic.com/media/';

const OVERVIEW = [
  {
    icon: BASE + 'cd7168_2c14c11eec4b47e6ae755e451a65fb71~mv2.png/v1/fill/w_240,h_240,al_c,q_85,enc_avif,quality_auto/hatha.png',
    label: ['Part 1', '100-Hour', 'Advanced Hatha Yoga and Pranayama'],
  },
  {
    icon: BASE + 'cd7168_1c938a07a0c74e80b3f9af2be30d1a77~mv2.png/v1/crop/x_22,y_5,w_1058,h_1075/fill/w_240,h_240,al_c,q_85,enc_avif,quality_auto/yin.png',
    label: ['Part 2', '100-Hour', 'Yin Yoga & Self Inquiry'],
  },
  {
    icon: BASE + 'cd7168_6a630e47af474083bb24b99aabf5dffe~mv2.png/v1/fill/w_240,h_240,al_c,q_85,enc_avif,quality_auto/meditation.png',
    label: ['Part 3', '100-Hour', 'Spiritual Heart Meditation'],
  },
];

const B = ({ children }) => (
  <strong className="font-semibold text-akasha-black">{children}</strong>
);

const PARTS = [
  {
    title: 'Part 1: Advanced Hatha Yoga & Pranayama',
    photo:
      BASE +
      'cd7168_a021fe3990994e5ab7b9095da6caf9fb~mv2.jpg/v1/crop/x_134,y_0,w_533,h_533/fill/w_560,h_560,al_c,q_85,enc_avif,quality_auto/part1.jpg',
    align: 'right',
    body: (
      <>
        Experience the transformative power of classical Asana, Pranayama, Mudra
        &amp; Bandha. Learn to <B>teach breath-based Vinyasa &amp; Yogic breath-work</B>{' '}
        with confidence, creativity &amp; integrity.
      </>
    ),
  },
  {
    title: 'Part 2: Yin Yoga & Self Inquiry',
    photo:
      BASE +
      'cd7168_1083745017bb49c885271c4c0681a652~mv2.jpg/v1/crop/x_134,y_0,w_533,h_533/fill/w_560,h_560,al_c,q_85,enc_avif,quality_auto/part2.jpg',
    align: 'left',
    body: (
      <>
        Discover the <B>energetic foundation</B> of Yin Yoga. Build a{' '}
        <B>restorative Asana</B> practice that weaves in authentic{' '}
        <B>mindfulness</B> &amp; loving-kindness, heart-felt compassion &amp;
        profound states of self-awareness.
      </>
    ),
  },
  {
    title: 'Part 3: Spiritual Heart Meditation',
    photo:
      BASE +
      'cd7168_0e6b89c09d3e46d693ebb3c98e544640~mv2.jpg/v1/crop/x_282,y_976,w_1013,h_1014/fill/w_560,h_560,al_c,q_85,enc_avif,quality_auto/part3.jpg',
    align: 'right',
    body: (
      <>
        Dive deep into the wonder-full world of genuine meditation. Explore
        altered states of consciousness &amp; understand brainwaves. Learn how to
        hold space for others &amp; lead meditation groups.
      </>
    ),
  },
];

function PartRow({ title, photo, align, body }) {
  const text = (
    <div className={align === 'right' ? 'text-right' : 'text-left'}>
      <h3
        className="font-heading text-akasha-gray-1"
        style={{ fontSize: 'clamp(1.25rem, 2.6vw, 1.7rem)', fontWeight: 400 }}
      >
        {title}
      </h3>
      <p className="font-body text-akasha-gray-1 mt-4 text-base md:text-lg leading-relaxed">
        {body}
      </p>
    </div>
  );
  const img = (
    <div className="flex justify-center">
      <div className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64">
        <img src={photo} alt={title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
      </div>
    </div>
  );
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
      {align === 'right' ? (
        <>
          {img}
          {text}
        </>
      ) : (
        <>
          {text}
          {img}
        </>
      )}
    </div>
  );
}

export default function ThreeParts300() {
  return (
    <section className="relative overflow-hidden bg-[#F5F4F1]">
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-180px] top-0 w-[420px] md:w-[560px] opacity-[0.35]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading text-akasha-gray-1 text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          Learn Advanced Yoga &amp; Meditation in 3 Parts:
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {OVERVIEW.map((item) => (
            <div key={item.label[0]} className="text-center">
              <img
                src={item.icon}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="w-24 h-24 md:w-28 md:h-28 mx-auto object-contain"
              />
              <div className="mt-4 font-body leading-snug" style={{ color: ORANGE }}>
                {item.label.map((line) => (
                  <p key={line} className="text-sm md:text-base">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 space-y-14 md:space-y-20">
          {PARTS.map((p) => (
            <PartRow key={p.title} {...p} />
          ))}
        </div>

        <div className="mt-14 md:mt-16 text-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-3.5 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: MINT, fontWeight: 600, fontSize: '0.8rem' }}
          >
            Book My Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
