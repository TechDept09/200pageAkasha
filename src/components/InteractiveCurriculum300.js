// Section 13 from the live Wix 300-Hour page: "THE INTERACTIVE CURRICULUM"
// intro + AKASHA devices mockup, then "HOW IT WORKS" detail copy and
// BOOK MY FREE CALL CTA.
const MINT = '#7CC7B0';

const CALENDLY_URL =
  'https://calendly.com/akasha-yoga-academy/300-hour-discovery-call';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/c15a18_5c73f145ca4842c9a23c2f2d8f6c2080~mv2.jpg/v1/fill/w_800,h_800,al_c,q_85,enc_avif,quality_auto/lotus.jpg';

const DEVICES =
  'https://static.wixstatic.com/media/cd7168_99881a587ddf4b778f9a767f7d5d61f5~mv2.png/v1/fill/w_960,h_538,al_c,q_90,enc_avif,quality_auto/AKASHA-DEVICES-MOCKUP.png';

const B = ({ children }) => (
  <strong className="font-semibold text-akasha-black">{children}</strong>
);

export default function InteractiveCurriculum300() {
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
        {/* Interactive Curriculum intro */}
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em]"
            style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
          >
            The Interactive Curriculum
          </h2>
          <p
            className="font-heading uppercase text-akasha-gray-1 tracking-[0.1em] mt-4"
            style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)', fontWeight: 500 }}
          >
            A Truly Engaging Journey
          </p>
          <div className="mt-8 space-y-5 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
            <p>
              Immerse yourself in the <B>heart-opening atmosphere</B> of this
              300-Hour TTC. You&rsquo;ll evolve in the interactive flow of this Yoga
              Alliance certified course. It includes a variety of{' '}
              <B>live teachings and assignments</B>, as well as eye-opening
              conversations with our dedicated team of master teachers.
            </p>
            <p>
              The <B>engaging instructor education</B> shows you how to teach
              advanced Hatha Yoga, Vinyasa Krama &amp; Pranayama, Yin Yoga &amp;
              Self-Inquiry, and Spiritual Heart Meditation. You&rsquo;ll{' '}
              <B>discover a depth of Yoga</B> that will expand the limits of your
              self-practice.
            </p>
          </div>
        </div>

        {/* Devices mockup */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <img
            src={DEVICES}
            alt="Akasha 300-Hour course on tablet, phone, desktop and laptop"
            loading="lazy"
            decoding="async"
            className="w-full h-auto"
          />
        </div>

        {/* How it works */}
        <div className="mt-14 md:mt-20 max-w-3xl mx-auto">
          <h2
            className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em] text-center"
            style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
          >
            How It Works
          </h2>

          <div className="mt-10 space-y-6 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed text-left">
            <p>
              Join <B>45+ live group sessions</B> with your lead teachers and other
              experts: We offer <B>8 Zoom calls per week</B> to give you full
              flexibility. You have space to get answers to all your questions.
            </p>
            <p>
              Benefit from <B>various engaging assignments</B> to deepen your
              understanding and application of advanced teaching techniques:
            </p>
            <div>
              <p>
                <B>Personalized 1-on-1 feedback</B> from a dedicated supervisor for
                each part. You&rsquo;ll get professional feedback in{' '}
                <B>five sessions</B>:
              </p>
              <ul className="mt-3 ml-5 list-disc space-y-1.5">
                <li>a 60-minute Hatha or Vinyasa class</li>
                <li>a 60-minute Yin Yoga session</li>
                <li>a 40-minute Pranayama class</li>
                <li>a 15-minute &amp; a 30-minute meditation</li>
              </ul>
            </div>
            <p>
              <B>Buddy system</B> and uplifting <B>accountability partners</B>:
              Practice your teaching skills in <B>four peer-to-peer classes</B>:
              60-minute Hatha Yoga, 60-minute Yin Yoga, 30-minute Pranayama, and
              15-minute Meditation.
            </p>
            <p>
              Immerse yourself in our <B>heartfelt yogic community</B>. Enjoy the
              interactive connections unfolding in a global community of awesome
              Yogis.
            </p>
            <p>
              Learn from your favorite teachers by{' '}
              <B>analyzing four asana classes &amp; three meditations</B>.
              We&rsquo;ll show you how to implement their tools &amp; tricks into
              your own sessions.
            </p>
            <p>
              Receive a <B>fully accredited 300-Hour Yoga Alliance certificate</B>.
              This advanced accreditation allows you to sign up as a Registered
              Yoga Teacher at the prestigious <B>500-Hour level</B> (RYT 500).
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.18em] px-10 py-3.5 font-body hover:shadow-lg transition-all"
              style={{ backgroundColor: MINT, fontWeight: 600, fontSize: '0.8rem' }}
            >
              Book My Free Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
