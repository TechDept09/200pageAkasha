// Section 24 from the live Wix 80-Hour Meditation page: grey FAQ list with
// bulleted questions, orange lotus watermark, mint ENROLL NOW.
// Keep Wix typos ("Kashmiri Shivaism", "mediators").
const MINT = '#75C8AE';
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const ENROLL_URL =
  'https://www.akashayogaacademy.com/enroll-now-80-hr-online-meditation-teacher-training';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const FAQS = [
  {
    q: 'How long is the Akasha Meditation course?',
    a: 'The course is 80 hours in duration.',
  },
  {
    q: 'What styles of meditation will I learn in this course?',
    a: "You'll be introduced to a variety of styles, including Spiritual Heart Meditation, mantra meditation (both vocalized and silent), and practices influenced by posture practice and Pranayama.",
  },
  {
    q: "I'm new to mantras. Is this course suitable for beginners?",
    a: "Absolutely! The course is structured to benefit both beginners and those with prior experience. You'll be guided through the use of mantras, both chanted out loud and in silent meditation.",
  },
  {
    q: 'Will I learn about the history and philosophy of meditation?',
    a: 'Yes, you will explore the art of meditation across cultures and millennia, delve into major wisdom traditions, scriptures, and even how Western science and medicine view meditation and consciousness.',
  },
  {
    q: 'Is there a practical aspect to this course?',
    a: 'Certainly. You will engage in Spiritual Heart and mantra meditation sessions, ranging from short sittings to hour-long practices. This also includes guided meditation sessions and advice on establishing a routine.',
  },
  {
    q: 'Can I teach meditation after completing this course?',
    a: 'Yes, the course equips you to teach various meditation sessions, integrate meditation into yoga classes, and even introduce others to the practice.',
  },
  {
    q: 'Are there any guest teachers in this program?',
    a: 'Indeed. You will have the opportunity to study Kashmiri Shivaism with well-known guest teacher Hareesh Christopher Wallis.',
  },
  {
    q: 'What is the emphasis on Pranayama and Asana in a meditation course?',
    a: 'Understanding the relationship between body, breath, and prana (energy) is vital for deep meditation. The course includes Pranayama, Yin Yoga, and Hatha Flow practices to help you harness this relationship for better meditation.',
  },
  {
    q: 'Do I get any teaching materials or resources as part of this course?',
    a: "Yes, you'll receive access to a comprehensive course manual and have lifetime access to all videos, manuals, and training materials offered in the course.",
  },
  {
    q: 'Is there an opportunity for live interactions and support?',
    a: "Absolutely! You can contact your guides anytime through the course platform for queries. Additionally, you'll have the chance to meet a vibrant community of mediators and lead teachers in occasional live calls.",
  },
];

export default function Faq80Meditation() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-[12%] w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading text-center text-akasha-gray-1 tracking-[0.02em]"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          Frequently Asked Questions
        </h2>

        <ul className="mt-10 md:mt-12 max-w-3xl mx-auto space-y-6 md:space-y-7">
          {FAQS.map((item) => (
            <li key={item.q}>
              <p
                className="font-body flex gap-3"
                style={{
                  color: TEXT,
                  fontWeight: 400,
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  lineHeight: 1.45,
                }}
              >
                <span aria-hidden="true" className="shrink-0 mt-[0.55em] w-1.5 h-1.5 rounded-full bg-white/80" />
                <span>{item.q}</span>
              </p>
              <p
                className="font-body mt-2 pl-5"
                style={{
                  color: TEXT,
                  fontWeight: 300,
                  fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                  lineHeight: 1.65,
                }}
              >
                {item.a}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
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
    </section>
  );
}
