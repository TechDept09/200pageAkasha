import Image from 'next/image';

// "Start Today" section from the live Wix 200-Hour page: two editorial blocks
// (what you get + bonuses) each paired with a gold-ringed circular photo, over
// the faint lotus watermark. Copy is verbatim from the live source.
const GREEN = '#5FBFA6';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const PHOTO_JOIN =
  'https://static.wixstatic.com/media/cd7168_a785ceb175ad4f49a97d1f05eb26255c~mv2.jpg/v1/crop/x_0,y_51,w_1667,h_1649/fill/w_360,h_360,al_c,q_85,enc_avif,quality_auto/join.jpg';

const PHOTO_BONUS =
  'https://static.wixstatic.com/media/cd7168_3c0848fcf4914b70bec1b9461fe773d2~mv2.jpeg/v1/crop/x_0,y_853,w_1667,h_1647/fill/w_360,h_360,al_c,q_85,enc_avif,quality_auto/bonuses.jpeg';

const JOIN_ITEMS = [
  ['Experience Comprehensive Yoga Training:', 'Dive deep into Hatha Yoga, covering both theoretical knowledge and practical skills.'],
  ['Receive Live Coaching:', 'Benefit from regular live sessions with experienced yoga mentors who offer real-time guidance and support.'],
  ['Join a Global Yoga Community:', 'Connect with a diverse group of yoga practitioners worldwide, sharing experiences and growing together.'],
];

const BONUS_ITEMS = [
  ['Get Personalized Feedback:', 'Individual posture reviews to refine your yoga practice.'],
  ['Enjoy a Customizable Schedule:', 'Flexibility to create a study schedule that suits your individual needs.'],
  ['Receive the "Yoga in Daily Life" Book:', 'A guide to integrating yogic principles into everyday life.'],
  ['Access the Business Starter Kit:', 'Essential tools for launching a yoga business, including marketing strategies and templates.'],
  ['Use the Application Manual:', '"Teaching Yoga 101" for in-depth teaching insights.'],
  ['Study with Asana Flashcards:', 'Quick-reference tools for learning yoga poses.'],
  ['Explore the "Roots of Yoga" Book:', 'Insights into the traditional foundations of yoga.'],
];

function BulletList({ items }) {
  return (
    <ul className="mt-5 space-y-3 font-body text-akasha-gray-1 leading-relaxed">
      {items.map(([label, rest]) => (
        <li key={label} className="flex items-start gap-2.5">
          <span
            className="text-akasha-orange mt-[0.5rem] flex-none w-1.5 h-1.5 rounded-full bg-akasha-orange"
            aria-hidden="true"
          />
          <span>
            <strong className="font-semibold text-akasha-black">{label}</strong> {rest}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Photo({ src, alt }) {
  return (
    <div className="flex justify-center">
      <div className="rounded-full p-[3px]" style={{ boxShadow: '0 0 0 2px #C9A24B' }}>
        <div className="rounded-full overflow-hidden w-52 h-52 md:w-60 md:h-60">
          <Image src={src} alt={alt} width={360} height={360} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default function StartToday() {
  return (
    <section id="start-today" className="relative overflow-hidden bg-akasha-white">
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-0 w-[440px] md:w-[680px] opacity-[0.12]"
      />

      <div className="section relative z-10 py-16 md:py-24">
        <h2
          className="text-center font-script text-akasha-orange"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}
        >
          Start Today
        </h2>

        {/* When You Join */}
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto mt-14">
          <div>
            <h3
              className="font-heading text-akasha-gray-1"
              style={{ fontSize: 'clamp(1.25rem, 2.4vw, 1.7rem)', fontWeight: 300 }}
            >
              When You Join Akasha Yoga Academy&rsquo;s 200-Hour Program, You&rsquo;ll&hellip;
            </h3>
            <BulletList items={JOIN_ITEMS} />
          </div>
          <Photo src={PHOTO_JOIN} alt="Akasha student studying at home" />
        </div>

        {/* And As Bonuses */}
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto mt-16">
          <div className="md:order-1">
            <h3
              className="font-heading text-akasha-gray-1"
              style={{ fontSize: 'clamp(1.25rem, 2.4vw, 1.7rem)', fontWeight: 300 }}
            >
              And As Bonuses, You&rsquo;ll&hellip;
            </h3>
            <BulletList items={BONUS_ITEMS} />
          </div>
          <div className="md:order-2">
            <Photo src={PHOTO_BONUS} alt="Akasha student practising a standing pose" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center space-y-6 font-body text-akasha-gray-1 leading-relaxed">
          <p>
            These features and bonuses are designed to ensure you&rsquo;re fully
            prepared to embark on a successful and fulfilling yoga teaching career.
          </p>
          <p>
            Discover the exceptional quality and transformative benefits of our
            premium 200-Hour Online Yoga Teacher Training.
          </p>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/200h-essential/enroll"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: GREEN, fontWeight: 600 }}
          >
            Enroll Now
          </a>
          <p className="mt-3 font-body text-xs uppercase tracking-[0.2em] text-akasha-gray-2">
            Over 70% Off Until July 31st
          </p>
        </div>
      </div>
    </section>
  );
}
