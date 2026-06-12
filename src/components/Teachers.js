export default function Teachers() {
  const teachers = [
    {
      name: 'Burkhard',
      role: 'Founder · Lead Teacher',
      cred: 'E-RYT-500',
      bio: 'Master’s in Psychology from the Free University of Berlin. Over 5,000 hours of yogic study since 2001, living year-round in Asia since 2007 — including a 49-day solitary meditation retreat.',
      quote: 'The depth of his practice is brilliant. He really holds the space well, and opens from the Heart consistently.',
      attr: 'Zoran — Canada',
    },
    {
      name: 'Kirsten',
      role: 'Co-Founder · Lead Teacher',
      cred: 'E-RYT-500',
      bio: 'From architecture & art history to a decade of travel through India & Southeast Asia. Fifteen-plus years devoted to classical breath-based Hatha, Yin Yoga, pranayama, and meditation.',
      quote: 'Kirsten is super clear & precise. She is motherly, but not patronizing — kind & compassionate.',
      attr: 'Anastasia — Germany',
    },
    {
      name: 'Devdas',
      role: 'Lead Teacher',
      cred: 'E-RYT-500',
      bio: 'Found Hatha Yoga at 16, then spent 12 years teaching meditation in India under Swami Jnanananda and Sri Mooji. Has taught across America, Europe, Bali, Thailand, and Mexico.',
      quote: 'The way Devdas holds space is amazing. I feel blessed to have had the opportunity to learn from him.',
      attr: 'Rebecca — United States',
    },
  ];

  return (
    <section id="teachers" className="py-20 md:py-28 bg-akasha-gray-4/30">
      <div className="section">
        {/* Centered header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Meet Your Teachers</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
            65 Years of Combined Experience
          </h2>
          <p className="font-body text-akasha-gray-1 mt-4 leading-relaxed">
            Heart-centered teachers who actually embody the teachings — and
            share their wisdom in a relatable way.
          </p>
          <span className="gold-rule" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {teachers.map((t, i) => (
            <article
              key={i}
              className="bg-akasha-white border border-akasha-gray-4 rounded-sm p-8 text-center flex flex-col"
            >
              <span className="script block mb-2" style={{ fontSize: '2.4rem' }}>
                {t.name}
              </span>
              <p className="text-[10px] font-body text-akasha-gray-1 uppercase tracking-[0.25em] mb-6">
                {t.role} · {t.cred}
              </p>

              <p className="text-sm font-body text-akasha-gray-1 leading-relaxed mb-7 flex-1">
                {t.bio}
              </p>

              <div className="pt-6 border-t border-akasha-gray-4">
                <p className="font-heading text-akasha-black/85 text-[15px] leading-relaxed mb-3" style={{ fontWeight: 300 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <cite className="not-italic text-[10px] font-body text-akasha-gray-1 uppercase tracking-[0.25em]">
                  {t.attr}
                </cite>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
