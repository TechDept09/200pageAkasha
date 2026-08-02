'use client';

// 'Enroll Today & Get 14 Free Bonuses' grid. Bonus content is
// verbatim from akashayogaacademy.com/200hr-yoga-teacher-training-online:
// 'Design Your Schedule' as the intro item + 13 numbered bonuses.
// Total value US$1,130 comes directly from the source header.
//
// Descriptions are collapsed by default on mobile, tap the row to
// expand. Desktop (md+) always shows the description, so the
// grid stays scannable while cold traffic on mobile can still
// dig deeper when they want to.

import { useState } from 'react';

const BONUSES = [
  {
    n: 1,
    name: 'Design Your Schedule',
    value: 99,
    desc:
      'Receive a tailor-made, personalized schedule. Get empowered to complete this course successfully. This helpful customization service allows you to fit our flexible course into your daily life.',
  },
  {
    n: 2,
    name: 'How to Teach Yoga Online',
    value: 299,
    desc:
      'In this course Akasha Yoga shares their first-hand experience of how to bring your Yoga classes online. Receive all the audio, lighting, and camera tricks and tips to make your offerings online a successful experience.',
  },
  {
    n: 3,
    name: 'Journey Through the 7 Chakras',
    value: 199,
    desc:
      'In this introduction workshop, we present the system of the famous 7 Chakras. You will receive a clear understanding of the classical roots and modern interpretations. In this comprehensive overview, you will learn about energetic aspects, corresponding emotions, and psychological attributes.',
  },
  {
    n: 4,
    name: 'Holistic Well-Being Workshop',
    value: 229,
    desc:
      "In this eye-opening workshop, we introduce the yogic system of the 5 Bodies. You will benefit a lot from this ancient holistic description of the human being, formulated 2500 years ago, yet fully relevant in our modern times. You will walk away with a clear & practical understanding of the different layers & aspects of our being, ready to apply this wisdom into your daily life.",
  },
  {
    n: 5,
    name: 'Asana Study Flashcards',
    value: 35,
    desc:
      "These Asana study flashcards were made especially for you to memorize the teaching cues. The Asanas in this card deck are part of Akasha's 200-Hour Teacher Training.",
  },
  {
    n: 6,
    name: 'Sanskrit Study Flashcards',
    value: 35,
    desc:
      "These Sanskrit study flashcards were made especially for you to memorize the Sanskrit names of the Asanas. The cards in this deck are part of Akasha's 200-Hour Teacher Training.",
  },
  {
    n: 7,
    name: 'Poster Asana Poses',
    value: 69,
    desc:
      "Poster with all the Asana's covered in our 200-Hr Yoga TTC in high image quality. Perfect to show case at home or your Yoga studio.",
  },
  {
    n: 8,
    name: 'The Art & Science of Teaching',
    value: 108,
    desc:
      'Unite ancient wisdom with modern methods. Elevate your teaching with a fusion of yogic artistry and evidence-based science. Perfect for aspiring and seasoned instructors.',
  },
  {
    n: 9,
    name: 'Yoga in Daily Life',
    value: 86,
    desc:
      "Discover 'Yoga in Daily Life': our bonus book delving into Yama & Niyama, yoga's ethical foundations. Learn to integrate these virtues into everyday life & practice.",
  },
  {
    n: 10,
    name: 'Scripture Studies Book',
    value: 39,
    desc:
      'Explore timeless pearls of wisdom in our Scripture Studies Book.',
  },
  {
    n: 11,
    name: 'Yoga Liability Waiver',
    value: 29,
    desc:
      'This waiver template is an essential document for any Yoga teacher that informs the students of the risks involved in practice and can also protect you and your business from any legal issues.',
  },
  {
    n: 12,
    name: 'Resume Yoga Teacher (CV)',
    value: 19,
    desc:
      'An important and helpful component in seeking yoga teaching opportunities is a professional resume. A resume helps to give potential employers a snapshot of your background and mission statement to help you get your foot in the door for an interview or audition.',
  },
  {
    n: 13,
    name: 'Cover Letter Yoga Teacher',
    value: 19,
    desc:
      'A well-written cover letter will show potential yoga employers that you are organized and professional. It will also help them understand why you are a good fit for the position. Cover letters allow potential employers to understand who you are and encourage them to read your resume.',
  },
  {
    n: 14,
    name: 'Intake Form New Clients',
    value: 35,
    desc:
      'You can use this sample New Yoga Client Intake and Health History Form to learn about their health history background. It is recommended to have a complete health history so you can address key issues and make sure you focus on what matters to your students.',
  },
];

// Verbatim from the source header on
// akashayogaacademy.com/200hr-yoga-teacher-training-online. Not a
// sum of the item values so it stays aligned with what marketing
// already publishes on the live page.
const TOTAL_VALUE_LABEL = 'US$1,130';

export default function CampaignBonuses() {
  const [openId, setOpenId] = useState(null);

  return (
    <section
      className="py-16 md:py-24 bg-akasha-black text-akasha-white"
      aria-labelledby="campaign-bonuses-heading"
    >
      <div className="section max-w-6xl">
        <header className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span
            className="inline-block text-akasha-gold uppercase mb-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.72rem, 1.1vw, 0.82rem)',
              letterSpacing: '0.32em',
              fontWeight: 600,
            }}
          >
            Enroll today
          </span>
          <h2
            id="campaign-bonuses-heading"
            className="mb-3"
            style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)',
              fontWeight: 300,
              color: 'inherit',
              lineHeight: 1.15,
            }}
          >
            Get {BONUSES.length} Free Bonuses
          </h2>
          <p
            className="script text-akasha-orange"
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              lineHeight: 1.1,
            }}
          >
            Over {TOTAL_VALUE_LABEL} value
          </p>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {BONUSES.map((b) => {
            const isOpen = openId === b.n;
            return (
              <li key={b.n}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : b.n)}
                  aria-expanded={isOpen}
                  className="w-full text-left flex items-start gap-4 md:cursor-default md:pointer-events-none"
                >
                  <span
                    aria-hidden="true"
                    className="flex-none w-11 h-11 rounded-full border border-akasha-orange/70 bg-akasha-orange/10 text-akasha-orange flex items-center justify-center font-heading text-lg"
                    style={{ fontWeight: 400 }}
                  >
                    {b.n}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-heading text-akasha-white leading-snug flex items-start justify-between gap-2"
                      style={{
                        fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)',
                        fontWeight: 400,
                      }}
                    >
                      <span className="flex-1">
                        {b.name}{' '}
                        <span
                          className="text-akasha-gold whitespace-nowrap"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: 'clamp(0.72rem, 1vw, 0.8rem)',
                            fontWeight: 500,
                            letterSpacing: '0.05em',
                          }}
                        >
                          (US${b.value} value)
                        </span>
                      </span>
                      {b.desc ? (
                        <span
                          aria-hidden="true"
                          className={`md:hidden flex-none mt-1 text-akasha-orange transition-transform duration-200 ${
                            isOpen ? 'rotate-45' : ''
                          }`}
                        >
                          +
                        </span>
                      ) : null}
                    </p>
                    {b.desc ? (
                      <p
                        className={`mt-1.5 text-[13px] md:text-sm font-body text-akasha-white/70 leading-relaxed ${
                          isOpen ? 'block' : 'hidden'
                        } md:block`}
                      >
                        {b.desc}
                      </p>
                    ) : null}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
