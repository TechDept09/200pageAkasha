// Section 11b from the live Wix 80-Hour Advanced Hatha & Pranayama page:
// grey TESTIMONIALS with three circular portraits (Lauren, Nici, Sandra)
// and mint MORE TESTIMONIALS CTA.
const MINT = '#75C8AE';
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const MORE_URL = 'https://www.akashayogaacademy.com/testimonial-online-200-hour';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const BASE = 'https://static.wixstatic.com/media/';

const ITEMS = [
  {
    name: 'Lauren from New Zealand.',
    photo:
      BASE +
      'cd7168_e10d14bef0b343c8b0b13b390c381c65~mv2.jpeg/v1/crop/x_80,y_73,w_601,h_604/fill/w_320,h_320,al_c,q_80,enc_avif,quality_auto/lauren.jpg',
    quote:
      "Akasha instructors are incredible people, mentors, inspiring, nurturing and so authentic. What's happening here at Akasha is saving Yoga.",
  },
  {
    name: 'Nici from the US',
    photo:
      BASE +
      'cd7168_d31feeaf75024ae48a9f68d364b59c2d~mv2.jpeg/v1/crop/x_0,y_58,w_540,h_543/fill/w_320,h_320,al_c,q_80,enc_avif,quality_auto/nici.jpg',
    quote:
      "From the bottom of my heart, I really like to encourage with anyone who is thinking about joining Akasha family to do it, it's amazing the change of my life, I'm a completely different person. They are very special and passionate. I'm so grateful.",
  },
  {
    name: 'Sandra from New Zealand',
    photo:
      BASE +
      'cd7168_d01bfdb4047f4179bdcf9f505f3af7a7~mv2.jpeg/v1/fill/w_320,h_320,al_c,q_80,enc_avif,quality_auto/Sandra.jpeg',
    quote:
      "Akasha teachers, they're very knowledgeable, they live and breathe these teachings themselves, therefore they're not coming from a mind perspective, they're coming from a heart perspective. Those are principles that you can use in your daily life.",
  },
];

export default function Testimonials80Hatha() {
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

      <div className="section relative z-10 pb-14 md:pb-20 pt-4 md:pt-6">
        <h2
          className="font-heading uppercase tracking-[0.12em] text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300, color: '#6E6E6D' }}
        >
          Testimonials
        </h2>

        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
          {ITEMS.map((t) => (
            <div key={t.name} className="flex flex-col items-center text-center">
              <img
                src={t.photo}
                alt={t.name}
                loading="lazy"
                decoding="async"
                className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover"
              />
              <p
                className="mt-6 font-body"
                style={{
                  fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                  color: TEXT,
                  fontWeight: 300,
                  lineHeight: 1.65,
                }}
              >
                {t.quote}
              </p>
              <cite
                className="mt-5 not-italic font-body text-sm md:text-base"
                style={{ color: '#6E6E6D' }}
              >
                {t.name}
              </cite>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={MORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-akasha-white uppercase tracking-[0.12em] px-10 py-3.5 font-body hover:shadow-lg transition-all"
            style={{
              backgroundColor: MINT,
              borderRadius: 20,
              fontWeight: 700,
              fontSize: '0.95rem',
              boxShadow: '2px 2px 1px rgba(86, 149, 130, 0.88)',
            }}
          >
            More Testimonials
          </a>
        </div>
      </div>
    </section>
  );
}
