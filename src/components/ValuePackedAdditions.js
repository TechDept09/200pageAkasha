import Image from 'next/image';

// "Transform Your Practice and Career with These Value-Packed Additions"
// section from the live Wix 200-Hour page: seven alternating rows pairing a
// gold-ringed circular photo with a numbered, titled copy block, over the
// faint lotus watermark. Copy + assets are taken from the live source.
const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const FILL = 'fill/w_560,h_560,al_c,q_85,enc_avif,quality_auto';
const M = 'https://static.wixstatic.com/media/';

const rows = [
  {
    title: 'Personalized Feedback: Your Path to Perfection',
    photo: `${M}cd7168_15fb088d83784528b89eeef688ad248a~mv2.jpg/v1/crop/x_0,y_0,w_1684,h_1667/${FILL}/vp1.jpg`,
    alt: 'Akasha graduates celebrating together',
    body: (
      <>
        <p className="font-semibold text-akasha-black">Value: Priceless</p>
        <p>
          Receive tailored posture recaps to fine-tune your yoga poses. This
          personalized attention ensures you master every asana with precision,
          elevating your practice to new heights.
        </p>
        <p className="text-sm italic text-akasha-gray-2">
          *Only Available with Our Premium Plan
        </p>
      </>
    ),
  },
  {
    title: 'Customizable Schedule: Flexibility at Its Best',
    photo: `${M}cd7168_c4b5b9ac08a54d9d92ae28f95237eed0~mv2.jpg/v1/crop/x_0,y_431,w_1667,h_1638/${FILL}/vp2.jpg`,
    alt: 'A mother and children practising yoga together',
    body: (
      <p>
        Craft a learning schedule that fits your unique lifestyle. This
        flexibility allows you to balance yoga with your personal and
        professional commitments, ensuring a harmonious learning experience.
      </p>
    ),
  },
  {
    title: "Lifestyle Integration Book: 'Yoga in Daily Life'",
    photo: `${M}cd7168_a6479f0bf04744b5923cdbca13f0b2dc~mv2.jpg/v1/crop/x_0,y_428,w_1667,h_1644/${FILL}/vp3.jpg`,
    alt: 'A student stretching outdoors at sunrise',
    body: (
      <p>
        Immerse yourself in this essential guide, offering practical ways to
        weave yoga principles into your everyday life. This book is your
        companion in transforming daily routines into a holistic yogic lifestyle.
      </p>
    ),
  },
  {
    title: 'Business Starter Kit: Launch Your Yoga Career',
    photo: `${M}cd7168_d227b478665a4ab2811e2a4755f22d67~mv2.jpg/v1/crop/x_402,y_0,w_1697,h_1667/${FILL}/vp4.jpg`,
    alt: 'A teacher guiding a student through an adjustment',
    body: (
      <p>
        Step into the world of yoga entrepreneurship with a comprehensive
        toolkit. Equipped with marketing strategies, resume templates, client
        intake forms, and a yearly planner, this kit lays the foundation for a
        successful yoga business.
      </p>
    ),
  },
  {
    title: 'Application Manual: Deepen Your Teaching Skills',
    photo: `${M}cd7168_4411ddb74bd1470186f84c7fc200f8bf~mv2.jpg/v1/crop/x_408,y_0,w_1685,h_1667/${FILL}/vp5.jpg`,
    alt: 'A graduate practising in nature',
    body: (
      <p>
        &lsquo;Teaching Yoga 101&rsquo; provides in-depth insights into yoga
        instruction. This manual is an invaluable resource for enhancing your
        teaching techniques and connecting more effectively with your students.
      </p>
    ),
  },
  {
    title: 'Asana Study Flashcards: Quick-Reference Learning',
    photo: `${M}cd7168_399db77b3a24465092e8f718c0db7741~mv2.jpg/v1/crop/x_515,y_413,w_1216,h_1193/${FILL}/vp6.jpg`,
    alt: 'A student studying online from home',
    body: (
      <p>
        Craft a learning schedule that fits your unique lifestyle. This
        flexibility allows you to balance yoga with your personal and
        professional commitments, ensuring a harmonious learning experience.
      </p>
    ),
  },
  {
    title: "Roots of Yoga Book: Explore Yoga's Rich Heritage",
    photo: `${M}cd7168_072aa503d9274c8c8a122bfce474ddda~mv2.jpg/v1/crop/x_10,y_0,w_1980,h_1952/${FILL}/vp7.jpg`,
    alt: 'Students gathered around a sacred fire ceremony',
    body: (
      <p>
        Immerse yourself in this essential guide, offering practical ways to
        weave yoga principles into your everyday life. This book is your
        companion in transforming daily routines into a holistic yogic lifestyle.
      </p>
    ),
  },
];

function GoldCircle({ photo, alt }) {
  return (
    <div
      className="rounded-full p-[3px]"
      style={{ background: 'linear-gradient(135deg, #E7BC5D 0%, #b8892f 55%, #E7BC5D 100%)' }}
    >
      <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden bg-akasha-gray-4">
        <Image src={photo} alt={alt} fill sizes="256px" className="object-cover" />
      </div>
    </div>
  );
}

export default function ValuePackedAdditions() {
  return (
    <section id="value-packed" className="relative overflow-hidden bg-akasha-white">
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-140px] top-0 w-[420px] md:w-[640px] opacity-[0.12]"
      />

      <div className="section relative z-10 py-16 md:py-24">
        <h2
          className="font-heading uppercase text-akasha-gray-1 text-center tracking-[0.1em]"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.3rem)', fontWeight: 300, lineHeight: 1.3 }}
        >
          Transform Your Practice and Career with These Value-Packed Additions
        </h2>

        <div className="mt-14 md:mt-20 space-y-14 md:space-y-20 max-w-4xl mx-auto">
          {rows.map((r, i) => {
            const photoRight = i % 2 === 0;
            return (
              <div key={r.title} className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
                <div className={`flex justify-center ${photoRight ? 'md:order-2' : 'md:order-1'}`}>
                  <GoldCircle photo={r.photo} alt={r.alt} />
                </div>
                <div className={photoRight ? 'md:order-1' : 'md:order-2'}>
                  <h3
                    className="font-heading text-akasha-gray-1 mb-4"
                    style={{ fontSize: 'clamp(1.2rem, 2.4vw, 1.6rem)', fontWeight: 300 }}
                  >
                    {i + 1}. {r.title}
                  </h3>
                  <div className="space-y-3 font-body text-akasha-gray-1 text-base leading-relaxed">
                    {r.body}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-16 md:mt-20 text-center space-y-4">
          <p
            className="font-heading text-akasha-gray-1"
            style={{ fontSize: 'clamp(1.25rem, 2.6vw, 1.7rem)', fontWeight: 300 }}
          >
            Dive into an Exceptional Journey with Unmatched Value
          </p>
          <p className="font-body text-akasha-gray-1 leading-relaxed">
            Awesome bonuses crafted to deepen your practice and catapult you into a
            thriving yoga career.
          </p>
        </div>
      </div>
    </section>
  );
}
