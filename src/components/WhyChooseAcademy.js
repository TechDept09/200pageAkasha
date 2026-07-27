import Image from 'next/image';

// "Why Choose Our Yoga Academy" section from the live Wix 200-Hour page:
// four editorial blocks with the AKASHA multi-device mockup sitting between
// the mentor block and the ratings block, over the faint lotus watermark.
// Copy is verbatim from the live source.
const GREEN = '#5FBFA6';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const DEVICES =
  'https://static.wixstatic.com/media/cd7168_5c292400fe7644a5845053e90a361547~mv2.png/v1/crop/x_0,y_226,w_6000,h_3080/fill/w_1382,h_710,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/AKASHADEVICES.png';

function Block({ title, children, note }) {
  return (
    <div>
      <h3
        className="font-heading text-akasha-gray-1"
        style={{ fontSize: 'clamp(1.25rem, 2.4vw, 1.7rem)', fontWeight: 300 }}
      >
        {title}
      </h3>
      <p className="mt-4 font-body text-akasha-gray-1 leading-relaxed">{children}</p>
      {note ? (
        <p className="mt-2 font-body text-sm italic text-akasha-gray-2">{note}</p>
      ) : null}
    </div>
  );
}

export default function WhyChooseAcademy() {
  return (
    <section id="why-choose" className="relative overflow-hidden bg-akasha-white">
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
          className="text-center font-heading uppercase text-akasha-gray-1 tracking-[0.14em]"
          style={{ fontSize: 'clamp(1.7rem, 3.6vw, 2.6rem)', fontWeight: 300 }}
        >
          Why Choose Our Yoga Academy
        </h2>

        <div className="max-w-2xl mx-auto mt-12 md:mt-14 space-y-12">
          <Block title="Ready to Teach Yoga">
            Our training program is not only about learning yoga; it&rsquo;s also
            about preparing you for a successful teaching career. We cover every
            aspect of yoga, from basic to advanced techniques, to give you a deep
            understanding and strong practical skills. Many of our students have
            gone on to build successful businesses after graduation. When you
            complete our course, you&rsquo;ll have the knowledge, confidence, and
            foundation to start teaching yoga professionally and even establish
            your own yoga business.
          </Block>

          <Block
            title="Personalized Guidance from Expert Mentors"
            note="*Only Available with Our Premium Plan"
          >
            At Akasha Yoga Academy, we believe in a personalized approach to
            learning. Each student is paired with a dedicated mentor who provides
            tailored support and guidance. These mentors help you navigate through
            the course with customized assignments and interactive sessions,
            catering to your individual learning style and needs. This one-on-one
            attention ensures that your journey into yoga teaching is as unique as
            you are.
          </Block>
        </div>

        {/* Multi-device mockup */}
        <div className="max-w-3xl mx-auto my-14 md:my-16">
          <Image
            src={DEVICES}
            alt="The Akasha 200-Hour course shown on laptop, phone and tablet"
            width={1382}
            height={710}
            className="w-full h-auto"
          />
        </div>

        <div className="max-w-2xl mx-auto space-y-12">
          <Block title="Highly Rated and Experienced Experts">
            With a 4.93-star rating and over 200 reviews, Akasha Yoga Academy
            stands out as a top-tier yoga school. Our program, established in
            2011, is backed by 12 years of educational excellence. We bring a
            deep-rooted history and expertise in yoga education, offering a
            curriculum that is both comprehensive and deeply transformative. This
            high ranking is a testament to our commitment to providing exceptional
            yoga training.
          </Block>

          <Block title="Join a Supportive Global Yoga Community">
            At Akasha Yoga Academy, you&rsquo;ll be part of a worldwide family of
            yoga practitioners, learning from diverse experiences and cultures.
            Our program includes interactive online training with direct
            communication with teachers and peers. You&rsquo;ll get real-time
            guidance and participate in daily live sessions, addressing all your
            questions. This supportive environment not only helps you learn yoga
            but also connects you with friends globally. It prepares you with the
            skills and confidence to teach yoga anywhere in the world.
          </Block>
        </div>

        <div className="mt-14 md:mt-16 text-center">
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
