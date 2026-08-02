// "WE WANT TO SEE YOU SHINE / Please know about our Terms of Service" section
// from the live Wix /enroll-now page. Copy is verbatim from the live source.
const ORANGE = '#E5771E';

const CHECK_ICON =
  'https://static.wixstatic.com/media/cd7168_89da62ac6f254f7185941dba1c508306~mv2.png/v1/fill/w_48,h_48,al_c,q_85,enc_avif,quality_auto/CHECK-MARK234.png';

const ITEMS = [
  'Start your journey now: As soon as you enroll, you get immediate access to our entire online platform. Our flexible schedule allows you to begin and graduate in your own rhythm.',
  'We offer full interactive support, including personal 1-on-1 guidance, supervised practicum assignments, live calls, private Facebook & WhatsApp groups etc.',
  'We are available daily for the popular one-hour Zoom calls. You can join us anytime to complete a total of 30 live sessions.',
  'In order to get certified by the International Yoga Alliance, participants have to complete their training within 6 months of the time of purchase. The personal guidance ends after 6 months, and experience shows that students complete their certification well within the timeframe.',
  'Additionally, you have free access to 4 printable Teaching manuals with more than 700 pages of information & inspiration.',
  'The premium content of our educational program is truly inspiring, so we doubt that you would ever choose to drop out. Once you signed up for the online course your tuition fee & payment plan are however non-refundable.',
];

export default function ShineTerms() {
  return (
    <section className="scroll-mt-24">
      <div className="section py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading uppercase tracking-[0.06em]" style={{ color: ORANGE, fontSize: 'clamp(1.5rem, 3.4vw, 2.3rem)', fontWeight: 400 }}>
            We Want To See You Shine
          </h2>
          <p className="font-heading mt-1" style={{ color: ORANGE, fontSize: 'clamp(1.15rem, 2.4vw, 1.6rem)', fontWeight: 300 }}>
            Please know about our Terms of Service
          </p>
        </div>

        <div className="max-w-2xl mx-auto mt-8 space-y-6">
          <p className="font-body text-akasha-white/80 leading-relaxed text-center">
            You are taking a big step forward. An authentic Yoga Teacher Training Course
            takes time, commitment, self-compassion, and expert teachers who have been there.
          </p>

          <ul className="space-y-5">
            {ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-akasha-white/80 leading-relaxed">
                <img src={CHECK_ICON} alt="" aria-hidden="true" loading="lazy" decoding="async" className="w-4 h-4 flex-none mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="font-body text-akasha-white/80 leading-relaxed text-center pt-2">
            Thank you very much for your kind understanding of this common practice in the
            world of online courses.
          </p>
          <p className="font-body text-akasha-white/80 leading-relaxed text-center italic">
            We give ourselves with an open Heart, and we trust that you can find ways to
            receive the priceless gifts we share. Best wishes for this life-changing journey.
          </p>
        </div>
      </div>
    </section>
  );
}
