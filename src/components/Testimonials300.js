// Section 26 from the live Wix 300-Hour page: grey TESTIMONIALS grid with
// three circular graduate portraits (Martina, Nici, Sandra) and quotes.
const GREY_BG = '#FFFFFF';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const BASE = 'https://static.wixstatic.com/media/';

const ITEMS = [
  {
    name: 'Martina from Germany',
    photo:
      BASE +
      'cd7168_154ac401d63d41149a925b22b5866eb0~mv2.jpeg/v1/crop/x_0,y_236,w_720,h_724/fill/w_320,h_320,al_c,q_80,enc_avif,quality_auto/Martina.jpeg',
    quote:
      'I really appreciate everything they taught here. We went into every bio-physical detail, from the cardiovascular system, hormones, anatomy, and everything else involved. All was explained in a way that helps a lot to understand why we do certain things in Yoga & the effect we will have on us.',
  },
  {
    name: 'Nici from Australia',
    photo:
      BASE +
      'cd7168_d31feeaf75024ae48a9f68d364b59c2d~mv2.jpeg/v1/crop/x_0,y_58,w_540,h_543/fill/w_320,h_320,al_c,q_80,enc_avif,quality_auto/Nici.jpeg',
    quote:
      "The main thing that I love about the Akasha family is that it's all about connecting to the heart. There is also a lot of academic coverage, it's everything, the heart and the knowledge supplied. It's amazing the difference between myself before and now after the 300-Hour TTC.",
  },
  {
    name: 'Sandra from New Zealand',
    photo:
      BASE +
      'cd7168_d01bfdb4047f4179bdcf9f505f3af7a7~mv2.jpeg/v1/fill/w_320,h_320,al_c,q_80,enc_avif,quality_auto/Sandra.jpeg',
    quote:
      "Akasha teachers, they're very knowledgeable, they live and breathe these teachings themselves. Therefore they're not coming from a mind perspective, they're coming from a heart perspective. Those principles that you can use in your daily life.",
  },
];

export default function Testimonials300() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-1/2 -translate-y-1/2 w-[420px] md:w-[560px] opacity-10"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em] text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          Testimonials
        </h2>

        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8 max-w-5xl mx-auto">
          {ITEMS.map((t) => (
            <div key={t.name} className="text-center flex flex-col items-center">
              <img
                src={t.photo}
                alt={t.name}
                loading="lazy"
                decoding="async"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
              />
              <p className="mt-5 font-body text-akasha-gray-1 text-sm md:text-[15px] leading-relaxed max-w-[18rem]">
                {t.quote}
              </p>
              <cite className="mt-4 not-italic font-body text-akasha-gray-1 text-sm">
                {t.name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
