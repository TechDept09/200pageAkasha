// "Officially Certified" section from the live Wix /enroll-now page: the two
// Yoga Alliance seals above an orange heading and the accreditation copy.
// Copy + assets are verbatim from the live source.
const ORANGE = '#E5771E';
const BASE = 'https://static.wixstatic.com/media/';

const RYS200 = `${BASE}cd7168_977ee408f17b46a29edd503ef69e6617~mv2.png/v1/fill/w_240,h_240,al_c,q_85,enc_avif,quality_auto/RYS200.png`;
const ERYT500 = `${BASE}cd7168_fe2e2b4efa614a98865d10495b4cd304~mv2.png/v1/fill/w_240,h_240,al_c,q_85,enc_avif,quality_auto/ERYT500.png`;

export default function OfficiallyCertified() {
  return (
    <section className="scroll-mt-24">
      <div className="section py-14 md:py-20 text-center">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          <img src={RYS200} alt="Yoga Alliance Registered Yoga School RYS 200" loading="lazy" decoding="async" className="w-24 md:w-32 h-auto" />
          <img src={ERYT500} alt="Yoga Alliance Experienced Registered Yoga Teacher E-RYT 500" loading="lazy" decoding="async" className="w-24 md:w-32 h-auto" />
        </div>

        <h2 className="font-heading uppercase tracking-[0.08em] mt-10" style={{ color: ORANGE, fontSize: 'clamp(1.5rem, 3.4vw, 2.3rem)', fontWeight: 400 }}>
          Officially Certified
        </h2>

        <p className="font-body text-akasha-white/80 leading-relaxed max-w-2xl mx-auto mt-5">
          Our curriculum is fully accredited &amp; certified by the International Yoga
          Alliance, and you get empowered as a Registered Yoga Teacher RYT-200. Our lead
          teachers are Experienced Registered Yoga Teachers at the highest level
          (E-RYT-500), and since 2012 the Akasha Yoga Academy is a Registered Yoga School.
          Our consistent 5-star reviews speak for themselves.
        </p>
      </div>
    </section>
  );
}
