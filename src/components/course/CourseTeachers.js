// Master roster of Akasha senior teachers, with photos from the existing
// 200H Teachers component plus extended teachers used in advanced courses.
// CourseTeachers renders only those whose name appears in course.instructors.

const TEACHER_DB = {
  Burkhard: {
    name: 'Burkhard',
    role: 'Founder, Lead Teacher',
    cred: 'E-RYT-500',
    photo:
      'https://static.wixstatic.com/media/cd7168_241779a0b2e94455a8c7fe10e05530c7~mv2.jpg/v1/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/Akasha-Yoga-Academy-Bali-300-Hour-2019--.jpg',
    bio:
      "Master's in Psychology from the Free University of Berlin. Over 5,000 hours of yogic study since 2001, living year-round in Asia since 2007, including a 49-day solitary meditation retreat.",
  },
  Kirsten: {
    name: 'Kirsten',
    role: 'Co-Founder, Lead Teacher',
    cred: 'E-RYT-500',
    photo:
      'https://static.wixstatic.com/media/c15a18_c3d07047d6e04f11ab181a9a82faff92~mv2.jpg/v1/crop/x_53,y_56,w_394,h_390/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/KIRSTEN.jpg',
    bio:
      'From architecture and art history to fifteen-plus years of travel through India and Southeast Asia, devoted to classical breath-based Hatha, Yin Yoga, pranayama, and meditation.',
  },
  Devdas: {
    name: 'Devdas',
    role: 'Lead Teacher',
    cred: 'E-RYT-500',
    photo:
      'https://static.wixstatic.com/media/cd7168_c55633f6fdc4442b8a354b77fab9d68f~mv2.jpg/v1/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/DEVDAS.jpg',
    bio:
      'Found Hatha Yoga at 16, then spent 12 years teaching meditation in India under Swami Jnanananda and Sri Mooji. Has taught across America, Europe, Bali, Thailand, and Mexico.',
  },
  Astrid: {
    name: 'Astrid',
    role: 'Yoga Therapist, Lead Teacher',
    cred: 'C-IAYT, E-RYT-500',
    photo:
      'https://static.wixstatic.com/media/cd7168_bd8bf24868cc41ccaf122ad4f57221e3~mv2.jpg/v1/crop/x_241,y_0,w_1518,h_1500/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/P7180482.jpg',
  },
  'Astrid van Zon': {
    name: 'Astrid van Zon',
    role: 'Yoga Therapist',
    cred: 'C-IAYT, E-RYT-500',
    photo:
      'https://static.wixstatic.com/media/cd7168_bd8bf24868cc41ccaf122ad4f57221e3~mv2.jpg/v1/crop/x_241,y_0,w_1518,h_1500/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/P7180482.jpg',
  },
  Marc: {
    name: 'Marc Laws',
    role: 'Guest Teacher',
    cred: 'E-RYT-500',
    photo: null,
  },
  'Amanda Noga': {
    name: 'Amanda Noga',
    role: 'Yoga and Ayurveda Teacher',
    cred: null,
    photo: null,
  },
  'Ashley Apple': {
    name: 'Ashley Apple',
    role: 'Clinical Herbalist, Sexuality Educator',
    cred: null,
    photo: null,
  },
  'Hareesh Christopher Wallis (guest)': {
    name: 'Hareesh Christopher Wallis',
    role: 'Guest Teacher',
    cred: 'Ph.D. Sanskrit, Berkeley',
    photo: null,
  },
};

export default function CourseTeachers({ instructors = [] }) {
  if (!instructors.length) return null;

  const teachers = instructors
    .map((name) => TEACHER_DB[name] || { name, role: 'Senior Teacher' })
    .filter(Boolean);

  return (
    <section id="teachers" className="py-20 md:py-28 bg-akasha-gray-4/30">
      <div className="section">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Meet Your Teachers</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
            Heart-Centered Senior Teachers
          </h2>
          <p className="font-body text-akasha-gray-1 mt-4 leading-relaxed">
            Teachers who embody the practice and share it in a relatable way.
          </p>
          <span className="gold-rule" />
        </div>

        <div className={`grid gap-6 max-w-5xl mx-auto ${teachers.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
          {teachers.map((t, i) => (
            <article
              key={i}
              className="bg-akasha-white border border-akasha-gray-4 rounded-sm overflow-hidden flex flex-col"
            >
              {t.photo ? (
                <div className="aspect-square overflow-hidden bg-akasha-gray-4">
                  <img src={t.photo} alt={t.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
              ) : (
                <div className="aspect-square bg-akasha-gray-4 flex items-center justify-center">
                  <span
                    className="font-heading text-akasha-gray-2 text-3xl"
                    style={{ fontWeight: 300 }}
                  >
                    {t.name.charAt(0)}
                  </span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="font-heading text-akasha-black text-xl mb-1"
                  style={{ fontWeight: 400 }}
                >
                  {t.name}
                </h3>
                <p className="text-[10.5px] font-body uppercase tracking-[0.2em] text-akasha-orange mb-3">
                  {t.role}
                  {t.cred ? ` · ${t.cred}` : ''}
                </p>
                {t.bio ? (
                  <p className="text-sm font-body text-akasha-gray-1 leading-relaxed">
                    {t.bio}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
