// Section 26 from the live Wix 80-Hour Meditation page: "DIVE INTO THE CONTENT"
// zigzag circular blocks + "YOUR JOURNEY STARTS NOW" pricing close + ENROLL.
// Keep Wix typos ("Mediation", "mediation").
const MINT = '#75C8AE';
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';
const ORANGE = '#E5771E';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const ENROLL_URL =
  'https://www.akashayogaacademy.com/enroll-now-80-hr-online-meditation-teacher-training';

const BASE = 'https://static.wixstatic.com/media/';

const BLOCKS = [
  {
    title: 'Spiritual Heart Meditation',
    photo:
      BASE +
      'cd7168_f7b43ed7d0714a789c99fb69528ea2c4~mv2.jpg/v1/crop/x_0,y_685,w_1667,h_1519/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/spiritual-heart.jpg',
    align: 'right',
    body: (
      <p>
        The non-dual wisdom of Advaita Vedanta is the cornerstone of our
        heart-centered and breath-based approach to meditation. Practicing
        Spiritual Heart Meditation allows us to connect to the heartbeat of life
        and become intimate with the eternal present moment. We&rsquo;ll explore
        in depth all three elements of Spiritual Heart Mediation, deepen your
        practice of Self-Inquiry, and understand how it waves into daily life.
      </p>
    ),
  },
  {
    title: 'Study & Practice Relevant Mantras',
    photo:
      BASE +
      'cd7168_099123c5707749cf849a142b8e6dc60b~mv2.jpg/v1/crop/x_761,y_0,w_4669,h_4128/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/mantras.jpg',
    align: 'left',
    body: (
      <p>
        All the world is vibrating, and mantra is the science of how to use
        vibration to tap into the deepest parts of who we are. If you are new to
        this style of meditation, get ready; it is a very direct and powerful way
        of discovering who you are. We will use mantras chanted out loud and
        silent mantra meditation, using bija mantras to dive into the natural
        stillness and wonder of the eternal now.
      </p>
    ),
  },
  {
    title: 'Pranayama & Asana',
    photo:
      BASE +
      'cd7168_79b8d36f0f5449ef89e39f588ac2fce5~mv2.jpg/v1/crop/x_377,y_49,w_1338,h_1224/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/pranayama-asana.jpg',
    align: 'right',
    body: (
      <p>
        In our experience, meditation is not always an easy habit to establish,
        mostly because people have busy minds and lives. Understanding how the
        body, breath, and the energy or prana can help you discover your stillness
        is a vital part of the yoga and meditation experience. We give you simple
        tools to discover energy, using the body and the breath to go deeper into
        your essential nature. Be ready to discover Pranayama, Yin Yoga, and Hatha
        Flow practices to open the door to mediation.
      </p>
    ),
  },
  {
    title: 'Get to Know the Field',
    photo:
      BASE +
      'cd7168_781ec49afd1c4b20a4822020dedc7090~mv2.jpg/v1/crop/x_669,y_0,w_4647,h_3990/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/know-the-field.jpg',
    align: 'left',
    body: (
      <p>
        Mediation is an ancient art form aimed at elevating consciousness. Its
        practice dates back millennia and is found across cultures all over the
        globe. We will take you by the hand to introduce you to every aspect of
        this art form, from setting up your foundation in your body and mind to
        getting to know the approaches of the major wisdom traditions and
        scriptures to extracting what Western science and medicine have to
        contribute to accessing this refined state of consciousness.
      </p>
    ),
  },
  {
    title: 'Self-Practice',
    photo:
      BASE +
      'cd7168_0a9aa61864c74d478a935fc53342da13~mv2.jpg/v1/crop/x_837,y_0,w_4518,h_4128/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/self-practice.jpg',
    align: 'right',
    body: (
      <p>
        Throughout this course, you will practice a generous amount of Spiritual
        Heart and mantra meditation. The sessions range from short sittings, which
        build up to 60-minute meditations, and meditations inspired by posture
        practice and Pranayama. Regular guided mediation practice combined with a
        true understanding of the techniques and thorough guidance on setting up a
        mediation self-practice empowers you to carry the depth of mediation beyond
        the course and make it a solid part of your daily routine.
      </p>
    ),
  },
  {
    title: 'Teaching Meditation',
    photo:
      BASE +
      'cd7168_8e7c3ee8070740d6b7bed8a84c5e1f1e~mv2.jpg/v1/crop/x_692,y_0,w_4808,h_4128/fill/w_480,h_480,al_c,q_80,enc_avif,quality_auto/teaching-meditation.jpg',
    align: 'left',
    body: (
      <p>
        We believe that the depth of our practice qualifies us to teach Yoga and
        meditation. Our approach to supporting teachers&rsquo; growth is to take
        aspiring teachers by the hand and help them dive into the ocean of
        meditation. Mediation experience coupled with a thorough understanding of
        the foundation of meditation and in-depth practical teaching skills
        empowers you to offer meditation sessions of various types upon graduation.
        The course prepares you to offer meditation as part of a yoga class, as a
        stand-alone practice, and shows how to lead an introduction to meditation
        workshop.
      </p>
    ),
  },
];

function BlockRow({ title, photo, align, body }) {
  const photoFirst = align === 'left';
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className={`flex justify-center ${photoFirst ? 'md:order-1' : 'md:order-2'}`}>
        <img
          src={photo}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover"
        />
      </div>
      <div
        className={`${photoFirst ? 'md:order-2' : 'md:order-1'} text-center md:text-left`}
      >
        <h3
          className="font-heading"
          style={{
            fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)',
            fontWeight: 400,
            color: '#6E6E6D',
            lineHeight: 1.25,
          }}
        >
          {title}
        </h3>
        <div
          className="mt-4 md:mt-5 font-body"
          style={{
            fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)',
            color: TEXT,
            fontWeight: 300,
            lineHeight: 1.65,
          }}
        >
          {body}
        </div>
      </div>
    </div>
  );
}

export default function DiveContent80Meditation() {
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
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em] text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          Dive Into the Content
        </h2>

        <div className="mt-12 md:mt-16 space-y-14 md:space-y-20">
          {BLOCKS.map((block) => (
            <BlockRow key={block.title} {...block} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center max-w-3xl mx-auto">
          <h2
            className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em]"
            style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
          >
            Your Journey Starts Now
          </h2>

          <div
            className="mt-6 space-y-1 font-body"
            style={{
              fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)',
              color: TEXT,
              fontWeight: 300,
              lineHeight: 1.65,
            }}
          >
            <p>Are you ready to explore the depth of your commitment to Yoga like never before?</p>
            <p>The Akasha Family is here to guide you every step of the way.</p>
          </div>

          <div
            className="mt-10 space-y-1 font-heading"
            style={{ fontSize: 'clamp(1.15rem, 2.4vw, 1.5rem)', fontWeight: 300 }}
          >
            <p style={{ color: TEXT }}>Regular Tuition US$600</p>
            <p style={{ color: TEXT }}>+7 Bonuses worth US$550</p>
            <p style={{ color: ORANGE, fontWeight: 700 }}>= Total Value US$1150</p>
          </div>

          <p
            className="font-heading mt-8"
            style={{
              color: '#6E6E6D',
              fontSize: 'clamp(1.35rem, 3vw, 2rem)',
              fontWeight: 400,
            }}
          >
            33% Summer Wellness Discount
          </p>

          <p
            className="font-heading mt-3"
            style={{
              color: ORANGE,
              fontSize: 'clamp(1.5rem, 3.4vw, 2.3rem)',
              fontWeight: 700,
            }}
          >
            Start today for only US$399
          </p>

          <p className="font-body mt-3 text-sm" style={{ color: ORANGE }}>
            * Offer until July 31.
          </p>

          <div className="mt-10">
            <a
              href={ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
              style={{ backgroundColor: MINT, fontWeight: 600 }}
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
