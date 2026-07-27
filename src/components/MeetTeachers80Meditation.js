// Section 12 from the live Wix 80-Hour Meditation page: "MEET YOUR TEACHERS"
// (Burkhard / Kirsten / Devdas bios) + Guest Teacher Hareesh + mint
// WATCH INTERVIEWS CTA. Keep Wix spelling "Kashmiri Shivaism".
const MINT = '#75C8AE';
const ORANGE = '#ED5829';
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const INTERVIEWS_URL =
  'https://www.akashayogaacademy.com/80-hour-meditation-meet-teachers';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const BASE = 'https://static.wixstatic.com/media/';

const TEACHERS = [
  {
    name: 'Burkhard',
    photo:
      BASE +
      'cd7168_a331b6acdcca4febb6d513e7a2739b73~mv2.png/v1/fill/w_320,h_316,al_c,q_85,enc_avif,quality_auto/burkhard.png',
    bio: 'Burkhard is a high-vibration Yoga & meditation teacher deeply interested in practical Yoga philosophy, applied history & anatomy. He is a truly passionate Yoga scholar who loves verifying his findings in his own practice. His spirit shines where the power of the mind meets the generosity of the heart. He is inspired when the ancient practice of Yoga is reconfirmed by modern science. His aspiration is to integrate science & spirituality and a unified understanding of Eastern & Western philosophies.',
  },
  {
    name: 'Kirsten',
    photo:
      BASE +
      'cd7168_6802ed13df2e4ae0a40bb1908a15cc3b~mv2.png/v1/crop/x_0,y_17,w_1066,h_1053/fill/w_320,h_316,al_c,q_85,enc_avif,quality_auto/kirsten.png',
    bio: "Kirsten's approach to meditation is profoundly practical. She is passionate about making meditation accessible using the power of the body and breath movement as it is experienced in breath-based asana practice. She loves to connect to the Sacredness of Life in the ordinary. Her background is in Spiritual Heart Meditation and Self-inquiry. She has practiced and taught meditation for the past 15 years in various formats and countries, from short silent sittings, which typically end her Yoga classes, to meditation classes & retreats of various lengths. Her passion belongs to the connectedness & sacredness that arises from Stillness.",
  },
  {
    name: 'Devdas',
    photo:
      BASE +
      'cd7168_043af959ee84489cb78fc4d0498ac750~mv2.png/v1/crop/x_0,y_6,w_1056,h_1044/fill/w_320,h_316,al_c,q_85,enc_avif,quality_auto/devdas.png',
    bio: "Devdas began his journey in meditation naturally in his young years, just sitting and contemplating in his favorite nature spots. Eventually, he learned some proper techniques and helped run a series of meditation centers all over India for 12 years. Meditation should be as natural to human beings as the breath and should be taught so that everyone feels the profound and immediate benefit of regular practice. Pranayama as a doorway into stillness and mantra meditation are Devdas' special passions. By now, Devdas has shared meditation experiences and retreats in North America, South America, Europe, and all over Asia.",
  },
];

const GUEST = {
  name: 'Hareesh Christopher Wallis',
  photo:
    BASE +
    'cd7168_a9480b743a744463923f6850ecb81111~mv2.jpg/v1/crop/x_0,y_0,w_2160,h_2132/fill/w_320,h_316,al_c,q_80,enc_avif,quality_auto/hareesh.jpg',
  bio: 'is a distinguished scholar-practitioner in Kashmiri Shivaism with a Ph.D. in Sanskrit from Berkeley. Drawing from extensive studies in India and the mentorship of spiritual masters, Hareesh masterfully bridges academic learning and spiritual practice, offering teachings that are deeply rooted yet accessible to the modern learner. His engaging teaching style incorporates philosophy, meditation, and hands-on insights. As part of the 80-hour Akasha Meditation Course, Hareesh will immerse students in the profound world of Kashmiri Shivaism, blending its philosophical essence with practical meditation techniques. Many testify to the transformative power of his sessions, highlighting the clarity and depth he brings to their meditation journey.',
};

export default function MeetTeachers80Meditation() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-[8%] w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading uppercase tracking-[0.12em] text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300, color: '#6E6E6D' }}
        >
          Meet Your Teachers
        </h2>

        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-5xl mx-auto">
          {TEACHERS.map((t) => (
            <div key={t.name} className="text-center flex flex-col items-center">
              <img
                src={t.photo}
                alt={`${t.name}, Akasha Yoga Academy teacher`}
                loading="lazy"
                decoding="async"
                className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover"
              />
              <span
                className="script mt-4"
                style={{ color: ORANGE, fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)' }}
              >
                {t.name}
              </span>
              <p
                className="mt-3 font-body text-sm md:text-[15px] leading-relaxed"
                style={{ color: TEXT }}
              >
                {t.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 max-w-2xl mx-auto text-center">
          <h3
            className="font-heading uppercase tracking-[0.12em]"
            style={{ fontSize: 'clamp(1.25rem, 2.6vw, 1.75rem)', fontWeight: 300, color: '#6E6E6D' }}
          >
            Guest Teacher
          </h3>

          <img
            src={GUEST.photo}
            alt={`${GUEST.name}, guest teacher`}
            loading="lazy"
            decoding="async"
            className="mt-8 mx-auto w-36 h-36 md:w-44 md:h-44 rounded-full object-cover"
          />

          <span
            className="script mt-4 block"
            style={{ color: ORANGE, fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}
          >
            {GUEST.name}
          </span>

          <p
            className="mt-3 font-body text-sm md:text-[15px] leading-relaxed"
            style={{ color: TEXT }}
          >
            {GUEST.bio}
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href={INTERVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.12em] px-8 md:px-10 py-4 font-body hover:shadow-lg transition-all text-center"
              style={{ backgroundColor: MINT, fontWeight: 600 }}
            >
              Watch Interviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
