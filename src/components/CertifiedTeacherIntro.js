// Shared "Become a Certified Yoga Teacher Online" block. Same layout on
// the campaign preview page and the live 200hr Essential page so the
// Yoga Alliance credibility signal reads identically wherever it sits.
// showPhoto true renders the portrait column (used on the campaign
// preview). showPhoto false stacks the RYS-200 badge above the copy
// so the accreditation reads as a stamp at the top of the section.
export default function CertifiedTeacherIntro({
  headingId = 'certified-teacher-heading',
  showPhoto = true,
}) {
  return (
    <section
      className="py-14 md:py-24 bg-akasha-white"
      aria-labelledby={headingId}
    >
      <div className={`section ${showPhoto ? 'max-w-5xl' : 'max-w-3xl'}`}>
        {showPhoto ? (
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 md:gap-14 items-center">
            <div className="order-2 md:order-1">
              <div className="relative aspect-[4/5] max-w-[240px] md:max-w-[300px] mx-auto rounded-sm overflow-hidden bg-akasha-gray-4 shadow-sm">
                <img
                  src="https://static.wixstatic.com/media/c15a18_5d357dab7cec43c4879c3f12090081ce~mv2.jpg/v1/fill/w_600,h_750,al_c,q_85,enc_avif,quality_auto/certified-yoga-teacher.jpg"
                  alt="Certified Yoga Instructor at Akasha Yoga Academy"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 md:order-2 text-center md:text-left">
              {/* RYS-200 badge stays as the credibility stamp above the
                  eyebrow whether or not the portrait column is showing. */}
              <div className="flex justify-center md:justify-start mb-6 md:mb-8">
                <img
                  src="https://static.wixstatic.com/media/cd7168_977ee408f17b46a29edd503ef69e6617~mv2.png/v1/fill/w_308,h_300,al_c,q_85,enc_avif,quality_auto/RYS-200-Yoga-Alliance.png"
                  alt="Yoga Alliance Registered School RYS-200"
                  loading="lazy"
                  decoding="async"
                  className="h-24 md:h-28 w-auto"
                />
              </div>
              <span className="eyebrow text-akasha-orange">Akasha's Courses</span>
              <h2
                id={headingId}
                className="mb-4"
                style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}
              >
                Become a Certified Yoga Teacher Online
              </h2>
              <span className="gold-rule mx-auto md:mx-0" />
              <p className="font-body text-akasha-gray-1 mt-5 mb-8 text-base md:text-lg leading-relaxed">
                Turn your passion into a meaningful profession with our Yoga
                Alliance certified courses.
              </p>

              <div className="flex justify-center md:justify-start">
                <a
                  href="https://www.akashayogaacademy.com/200hr-yoga-teacher-training-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            {/* RYS-200 sits at the top as the credibility stamp before
                the eyebrow + heading, per team's request. */}
            <div className="flex justify-center mb-8 md:mb-10">
              <img
                src="https://static.wixstatic.com/media/cd7168_977ee408f17b46a29edd503ef69e6617~mv2.png/v1/fill/w_308,h_300,al_c,q_85,enc_avif,quality_auto/RYS-200-Yoga-Alliance.png"
                alt="Yoga Alliance Registered School RYS-200"
                loading="lazy"
                decoding="async"
                className="h-28 md:h-36 w-auto"
              />
            </div>

            <span className="eyebrow text-akasha-orange">Akasha's Courses</span>
            <h2
              id={headingId}
              className="mb-4"
              style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}
            >
              Become a Certified Yoga Teacher Online
            </h2>
            <span className="gold-rule" />
            <p className="font-body text-akasha-gray-1 mt-5 mb-8 text-base md:text-lg leading-relaxed">
              Turn your passion into a meaningful profession with our Yoga
              Alliance certified courses.
            </p>

            <div className="flex justify-center">
              <a
                href="https://www.akashayogaacademy.com/200hr-yoga-teacher-training-online"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Learn more
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
