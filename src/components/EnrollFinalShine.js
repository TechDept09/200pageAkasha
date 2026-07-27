// Closing "WE WANT TO SEE YOU SHINE / You Can Rely On" section from the live
// Wix /enroll-now page, rendered over the warm-gray canvas. Copy is verbatim
// from the live source. The summer-offer recap that follows on Wix is rendered
// by <EnrollSummerBand> placed after this section on the page.
const ORANGE = '#E5771E';

const CHECK_ICON =
  'https://static.wixstatic.com/media/cd7168_89da62ac6f254f7185941dba1c508306~mv2.png/v1/fill/w_48,h_48,al_c,q_85,enc_avif,quality_auto/CHECK-MARK234.png';

const RELY_ON = [
  'Experienced Registered Yoga Teachers at the highest level (E-RYT-500)',
  'A decade of teaching more than 1100 certified Yoga instructors worldwide, who are now teaching on all 6 continents',
  'Consistent 5-star review ratings & heart-felt testimonials',
];

export default function EnrollFinalShine() {
  return (
    <section className="scroll-mt-24">
      <div className="section py-16 md:py-24">
        <h2
          className="text-center font-heading uppercase tracking-[0.06em]"
          style={{ color: ORANGE, fontSize: 'clamp(1.5rem, 3.4vw, 2.3rem)', fontWeight: 400 }}
        >
          We Want To See You Shine
        </h2>

        <div className="max-w-2xl mx-auto mt-8 text-center space-y-4 font-body text-akasha-white/80 leading-relaxed">
          <p>
            You are taking a huge step forward. An authentic yoga teaching training course
            takes time, commitment, self-compassion, and expert teachers who have been there.
          </p>
          <p>
            That&rsquo;s why we designed a holistic, professional program that dives deep
            into practical and spiritual Yoga fundamentals while remaining accessible to all
            levels of learning.
          </p>
          <p className="font-heading text-akasha-white/90" style={{ fontSize: 'clamp(1.15rem, 2.4vw, 1.5rem)', fontWeight: 300 }}>
            No matter where you&rsquo;re starting from, we want this to be the best
            investment of your life.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mt-12">
          <h3 className="font-heading uppercase tracking-[0.08em] mb-6" style={{ color: ORANGE, fontSize: 'clamp(1.2rem, 2.4vw, 1.6rem)', fontWeight: 400 }}>
            You Can Rely On:
          </h3>
          <ul className="space-y-5">
            {RELY_ON.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-akasha-white/80 leading-relaxed">
                <img src={CHECK_ICON} alt="" aria-hidden="true" loading="lazy" decoding="async" className="w-4 h-4 flex-none mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-center space-y-2">
          <p className="font-heading text-akasha-white/85" style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)', fontWeight: 300 }}>
            Experience the breath-taking quality &amp; benefits of our premium 200-Hour
            Online Yoga Teacher Training
          </p>
          <p className="font-heading text-akasha-white/85" style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)', fontWeight: 300 }}>
            Start your journey into the Heart of Yoga!
          </p>
        </div>
      </div>
    </section>
  );
}
