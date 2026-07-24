// Section 16b from the live Wix 80-Hour Meditation page: "HEAR FROM OUR
// ALUMNI" with three circular graduate portraits (Yasmin, Sunshine, Teia).
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const BASE = 'https://static.wixstatic.com/media/';

const ALUMNI = [
  {
    name: 'Yasmin',
    photo:
      BASE +
      'cd7168_61d0e60bb0de4aedaf0dabb8338cb2ab~mv2.jpg/v1/fill/w_320,h_320,al_c,q_80,enc_avif,quality_auto/yasmin.jpg',
    body: "Hello, I'm Yasmin. This meditation course transformed me into a better person, deepening my life and relationships. It's not just a training, it's a life-changer. Embracing spirituality doesn't make you weak; it empowers with resilience. The transformation I experienced, others do too. It's a journey of growth, making you grounded and strong. Considering this course? It's a resounding yes from me. It elevates your life. Highly recommended.",
  },
  {
    name: 'Sunshine',
    photo:
      BASE +
      'cd7168_099123c5707749cf849a142b8e6dc60b~mv2.jpg/v1/crop/x_690,y_0,w_4106,h_4128/fill/w_320,h_320,al_c,q_80,enc_avif,quality_auto/sunshine.jpg',
    body: "Hi, I'm Sunshine and I'm thrilled with Akasha's meditation practice. Unlike other online yoga courses, they infuse meditation throughout, even in the 200 and 300-hour programs. The 30-minute meditation in each chapter, accompanied by Balinese Yoga sounds, let me connect with myself deeply. Despite being in my basement, I felt the serenity. This comprehensive course teaches spiritual meditation, concentration techniques, and offers their own experiences. It's unique and transformative. Highly recommend!",
  },
  {
    name: 'Teia',
    photo:
      BASE +
      'cd7168_a3250efc3194417181ec7436dbc5771d~mv2.jpg/v1/crop/x_0,y_0,w_1422,h_1428/fill/w_320,h_320,al_c,q_80,enc_avif,quality_auto/teia.jpg',
    body: "Hi, I'm Teia. Sharing my Akasha experience is a must. Their heart-centered teaching stands out. They listen and speak from the heart, fostering a family-like connection. Zoom calls become soulful exchanges. Their approach opens hearts and imparts knowledge effortlessly. They're contemporary yet rooted in tradition, merging ancient wisdom with modern science. I've embraced this journey, part of the Akasha family. Highly recommended. Namaste.",
  },
];

export default function Alumni80Meditation() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-1/2 -translate-y-1/2 w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading uppercase tracking-[0.12em] text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300, color: '#6E6E6D' }}
        >
          Hear from Our Alumni
        </h2>

        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-5xl mx-auto">
          {ALUMNI.map((a) => (
            <div key={a.name} className="text-center flex flex-col items-center">
              <img
                src={a.photo}
                alt={`${a.name}, Akasha Meditation graduate`}
                loading="lazy"
                decoding="async"
                className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover"
              />
              <p
                className="mt-5 font-body text-sm md:text-[15px] leading-relaxed text-left md:text-center"
                style={{ color: TEXT, fontWeight: 300 }}
              >
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
