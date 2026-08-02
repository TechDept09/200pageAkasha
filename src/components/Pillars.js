// Four-pillar section from the live Wix /enroll-now page: alternating
// gold-ringed circular photos and copy blocks. Copy + assets are verbatim
// from the live source.
const GOLD = '#C7A867';
const BASE = 'https://static.wixstatic.com/media/';
const IMG = (id, ext = 'jpg') =>
  `${BASE}${id}~mv2.${ext}/v1/fill/w_600,h_600,al_c,q_85,enc_avif,quality_auto/pillar.${ext}`;

const PILLARS = [
  {
    title: 'Train With Masters',
    img: IMG('cd7168_168b8cf9443f490a9493116830e9bfe8'),
    body:
      'Akasha Yoga is the real deal. Senior, devoted teachers with decades of experience guide you every step of the way. Dive deep into fundamental Yoga scriptures. Learn breath-based asana, pranayama, meditation, and anatomy. Grow a spiritual foundation for authentic practice. Develop and practice key teaching techniques for safe, expert guidance and alignment.',
  },
  {
    title: 'Learn At Your Own Pace',
    img: IMG('cd7168_cc86e71d676a4ac59f273a334a32345a'),
    body:
      'Study at a rhythm that\u2019s right for YOU. Unlike other Yoga schools, our 200 hour certified online Yoga Teacher Training course is designed to give you total freedom to study and practice at a pace that suits your life, while receiving live support and feedback. You can either immerse yourself in a short intensive training. Or you can spread out the journey over a longer period for deeper integration.',
  },
  {
    title: 'Join Our Community',
    img: IMG('c15a18_4b730747833c417abf2f2c1578d0221d'),
    body:
      'Learning doesn\u2019t happen in isolation. When we connect with like-minded people we grow our understanding and deepen our compassion. Daily Zoom calls allow you to practice in a fun and interactive group setting, ask questions, listen to others\u2019 insights, and foster life-long connections. You\u2019ll have lifetime access to instructional resources and an international community of Yoga practitioners.',
  },
  {
    title: 'Transform Your Life',
    img: IMG('cd7168_0eac8a98800244cfb208e3be4d2cd278'),
    body:
      'This immersive yoga training course teaches you how to surrender to the moment and live with greater awareness and intention. Heart-opening techniques, meditation, and breath-based asana guide you through a deep and transformative inner journey that will enhance your relationships and change the way you see the world.',
  },
];

function Photo({ src, title }) {
  return (
    <div className="flex justify-center">
      <div
        className="rounded-full overflow-hidden w-56 h-56 md:w-72 md:h-72 flex-none"
        style={{ border: `3px solid ${GOLD}`, boxShadow: '0 0 0 1px rgba(199,168,103,0.4)' }}
      >
        <img src={src} alt={title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

function Copy({ title, body }) {
  return (
    <div>
      <h3 className="font-heading text-akasha-white/90" style={{ fontSize: 'clamp(1.3rem, 2.6vw, 1.8rem)', fontWeight: 300 }}>
        {title}
      </h3>
      <p className="font-body text-akasha-white/75 leading-relaxed mt-4">{body}</p>
    </div>
  );
}

export default function Pillars() {
  return (
    <section className="scroll-mt-24">
      <div className="section py-12 md:py-20 space-y-14 md:space-y-20">
        {PILLARS.map((p, i) => {
          const imageRight = i % 2 === 0;
          return (
            <div key={p.title} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
              {imageRight ? (
                <>
                  <Copy title={p.title} body={p.body} />
                  <Photo src={p.img} title={p.title} />
                </>
              ) : (
                <>
                  <Photo src={p.img} title={p.title} />
                  <Copy title={p.title} body={p.body} />
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
