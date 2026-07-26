// Blueprint Brief 04, "Why Train Online? Why Akasha?" Addresses the
// #1 blocking objection ("is online legit?") first, then differentiates
// Akasha from every other online school with three specific pillars.
// Copy is verbatim from the Complete Blueprint.

const DIFFS = [
  {
    title: 'Heart-Centered, Not Factory-Made',
    body:
      'Akasha is not a content mill. Every lesson is taught by master teachers with over 65 years of combined experience. Our training is rooted in the Krishnamacharya tradition, the very source of modern yoga, giving you a depth of understanding that most online programs simply cannot offer.',
  },
  {
    title: 'Bali Studio Quality, In Your Living Room',
    body:
      'Our 200+ video lessons are filmed in our exclusive BALIWOOD studio in Bali, not a basement with a ring light. The production quality, the setting, the energy of each session is designed to transport you. This is what a US$1,190 training looks and feels like.',
  },
  {
    title: 'Live Connection, Not Just Pre-Recorded',
    body:
      'With 3 live Zoom sessions every week, you are not watching videos alone in a vacuum. You are practicing alongside real classmates, getting real-time feedback from your teachers, and building real relationships. This is the difference between watching yoga and doing yoga.',
  },
];

export default function WhyOnlineWhyAkasha() {
  return (
    <section
      className="py-14 md:py-20 bg-akasha-white"
      aria-labelledby="why-online-akasha-heading"
      id="why-akasha"
    >
      <div className="section max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="eyebrow text-akasha-orange">The honest answer</span>
          <h2
            id="why-online-akasha-heading"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 300 }}
          >
            Can You Really Become a Yoga Teacher Online?
          </h2>
          <p
            className="script mt-3"
            style={{ fontSize: 'clamp(1.4rem, 2.6vw, 1.8rem)', color: '#b3733a' }}
          >
            Absolutely. Here is why.
          </p>
          <span className="gold-rule" />
        </div>
        <div className="max-w-3xl mx-auto space-y-4 mb-12 font-body text-akasha-gray-1 text-base md:text-[17px] leading-relaxed">
          <p>
            We understand the hesitation. For years, yoga teacher training
            meant flying to an ashram, spending weeks away from home, and
            investing thousands of dollars. And while in-person training
            is beautiful, it is not the only path anymore.
          </p>
          <p>
            Since 2020, Yoga Alliance fully recognises online yoga teacher
            training. The same RYT-200 credential. The same global
            recognition. The same doors opened. The only difference?
            You can do it from home, at your own pace, without putting
            your life on hold.
          </p>
          <p>
            And with 1,100+ graduates now teaching on six continents,
            the proof is not theoretical. It is in the hundreds of Akasha
            graduates who are leading classes, hosting retreats, and
            building thriving yoga careers, all after training online.
          </p>
        </div>
        <p className="text-center text-[11px] font-body uppercase tracking-[0.24em] text-akasha-gray-1 mb-6">
          Why Akasha, specifically
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
          {DIFFS.map((d) => (
            <article
              key={d.title}
              className="bg-akasha-gray-4/30 border border-akasha-gray-4 rounded-sm p-6 flex flex-col"
            >
              <h3
                className="font-heading text-akasha-black text-base md:text-lg mb-3 leading-snug"
                style={{ fontWeight: 400 }}
              >
                {d.title}
              </h3>
              <p className="font-body text-akasha-gray-1 text-sm leading-relaxed">
                {d.body}
              </p>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-akasha-gray-4 pt-6">
          {[
            'Yoga Alliance Certified (RYS 200)',
            'Google 4.9',
            'Facebook 4.8',
            '1,100+ Graduates Worldwide',
          ].map((line, i) => (
            <span
              key={i}
              className="text-[10px] font-body uppercase tracking-[0.22em] text-akasha-gray-1"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {line}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
