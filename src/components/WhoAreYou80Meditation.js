// Section after Anna Kotaba quote on the live Wix 80-Hour Meditation page:
// "WHO ARE YOU AT THE VERY CORE?" reflective copy + mint SAVE YOUR SPOT NOW.
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';
const MINT = '#75C8AE';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const ENROLL_HREF =
  'https://www.akashayogaacademy.com/enroll-now-80-hr-online-meditation-teacher-training';

const pStyle = {
  fontSize: 'clamp(0.95rem, 1.7vw, 1.25rem)',
  color: TEXT,
  fontWeight: 300,
  lineHeight: 1.65,
};

export default function WhoAreYou80Meditation() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-1/2 -translate-y-1/2 w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading uppercase text-center tracking-[0.08em] max-w-4xl mx-auto"
          style={{
            fontSize: 'clamp(1.35rem, 3.2vw, 2.15rem)',
            fontWeight: 300,
            color: '#6E6E6D',
            lineHeight: 1.25,
          }}
        >
          Who Are You at the Very Core?
        </h2>

        <div className="mt-8 md:mt-10 max-w-3xl mx-auto text-center font-body space-y-5" style={pStyle}>
          <p>
            You&rsquo;ve come a long way. A lifetime of learning and discoveries has
            brought you to this point––the ground you&rsquo;re standing on now.
          </p>
          <p>
            Darkness has paved your path, too; you wouldn&rsquo;t be who you are today
            without those past storms and stumblings.
          </p>
          <p>
            A sacred light guides your path - the light of spiritual awakening. Can
            you feel it? Ignoring the call to Grace would mean relinquishing all
            you&rsquo;ve learned and discovered.
          </p>
          <p>Now is the time to delve into the immeasurable essence of who you really are.</p>
          <p>
            At Akasha, we want to help you discover your way. Our 80-hour Spiritual
            Heart Meditation Teacher Training Program offers a guided space to connect
            to the supreme reality of being and the very core of your existence.
          </p>
          <p>Don&rsquo;t stop now. Your Soul is calling you home.</p>
        </div>

        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href={ENROLL_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.12em] px-8 md:px-10 py-4 font-body hover:shadow-lg transition-all text-center"
            style={{ backgroundColor: MINT, fontWeight: 600 }}
          >
            Save Your Spot Now
          </a>
        </div>
      </div>
    </section>
  );
}
