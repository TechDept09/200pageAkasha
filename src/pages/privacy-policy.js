import Head from 'next/head';
import SiteNav from '@/components/SiteNav';
import Footer from '@/components/Footer';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.akashayogaacademy.com';

const PolicySection = ({ id, title, children }) => (
  <section id={id} className="mb-12">
    <h2 className="text-xl md:text-2xl font-heading text-akasha-black mb-4 pb-2 border-b border-akasha-gray-4">
      {title}
    </h2>
    <div className="prose prose-sm md:prose-base max-w-none text-akasha-gray-1 font-body leading-relaxed space-y-4">
      {children}
    </div>
  </section>
);

// Navigation sidebar sections
const SECTIONS = [
  { id: 'credentials', label: 'Credentials' },
  { id: 'refund', label: 'Refund Policy' },
  { id: 'certification', label: 'Certification Policy' },
  { id: 'liability', label: 'Liability Disclaimer' },
  { id: 'legal', label: 'Legal Disclosure & Contact' },
  { id: 'copyright', label: 'Content Disclaimer & Copyright' },
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'giveaway', label: 'Giveaway Redemption Policy' },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy & Terms of Service | Akasha Yoga Academy</title>
        <meta
          name="description"
          content="Privacy policy, terms of service, refund policy, certification policy, liability disclaimer, and legal disclosure for Akasha Yoga Academy."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Privacy Policy & Terms of Service | Akasha Yoga Academy" />
        <meta
          property="og:description"
          content="Our privacy policy, terms of service, refund and certification policies, liability disclaimer, and legal disclosure."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/privacy-policy`} />
        <meta property="og:site_name" content="Akasha Yoga Academy" />
        <link rel="canonical" href={`${SITE_URL}/privacy-policy`} />
      </Head>

      <SiteNav />

      <main className="pt-[5.5rem]">
        {/* Header */}
        <div className="bg-akasha-cream py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-heading text-akasha-black mb-3">
              Privacy Policy &amp; Terms of Service
            </h1>
            <p className="text-akasha-gray-1 font-body text-sm md:text-base">
              Last updated: January 2024
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar navigation */}
            <aside className="lg:w-56 flex-shrink-0">
              <nav className="sticky top-24">
                <h3 className="text-xs uppercase tracking-[0.15em] text-akasha-gray-3 mb-3 font-body">
                  On this page
                </h3>
                <ul className="space-y-1">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block text-sm text-akasha-gray-2 hover:text-akasha-orange transition-colors py-1 font-body"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <PolicySection id="credentials" title="Credentials">
                <p>
                  The official director &amp; lead teacher of the institution is Burkhard Langemann.
                  Burkhard Langemann is certified by the international Yoga Alliance at the highest
                  level as <strong>Experienced Registered Yoga Teacher (E-RYT-500)</strong>.
                  Registry-ID: 155442.{' '}
                  <a
                    href="https://www.yogaalliance.org/TeacherPublicProfile/tid/23139"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-akasha-orange underline hover:text-akasha-orange-dark"
                  >
                    Yoga Alliance Registry
                  </a>
                </p>
                <p>
                  The curriculum of our certified Yoga Teacher Training Courses meets and exceeds
                  international standards. The Akasha Yoga Academy is fully authorized by the
                  US-based international Yoga Alliance. Our educational organization is accredited
                  as a <strong>Registered Yoga School (RYS-200)</strong>. Registry ID: 87485.{' '}
                  <a
                    href="https://www.yogaalliance.org/SchoolPublicProfile?sid=365"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-akasha-orange underline hover:text-akasha-orange-dark"
                  >
                    Yoga Alliance Registry
                  </a>
                </p>
              </PolicySection>

              <PolicySection id="refund" title="Refund Policy">
                <h3 className="text-lg font-heading text-akasha-black mb-2">Online Courses</h3>
                <p>
                  Some of our online courses come with a money-back guarantee, while others have a
                  no refund policy. The specific details are stated on the relevant subpages of each
                  course.
                </p>
                <p>
                  Many of our online Yoga Teacher Trainings come with a{' '}
                  <strong>14-Day Money Back Guarantee</strong>: Dive into many of our digital
                  courses with the assurance that you are completely covered. If, within the first
                  two weeks you find that our program does not align with your expectations, you are
                  entitled to a full refund.
                </p>
                <p>
                  Yet, some of our online courses (such as the Essential Path of our 200-Hour
                  Online Yoga Teacher Training) have a no refund policy. The tuition paid for these
                  online courses is non-refundable.
                </p>

                <h3 className="text-lg font-heading text-akasha-black mb-2 mt-6">Onsite &amp; Hybrid Courses</h3>
                <p>
                  Life&apos;s unpredictability shouldn&apos;t hinder your learning journey. For our
                  onsite retreats, we offer a flexible cancellation policy:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Full Refunds:</strong> Cancel more than 180 days before retreat start
                    — 100% refund.
                  </li>
                  <li>
                    <strong>Partial Refunds:</strong> Cancel 120&ndash;180 days before — 50% refund.
                    Cancel 90&ndash;120 days before — 25% refund.
                  </li>
                  <li>
                    <strong>No Refunds:</strong> Cancellations less than 90 days before course
                    start cannot be refunded.
                  </li>
                </ul>
              </PolicySection>

              <PolicySection id="certification" title="Certification Policy">
                <p>
                  In compliance with official Yoga Alliance standards, attendance to all classes is
                  mandatory to complete the certified course successfully. In the event of medical
                  emergencies and properly excused absence, students may miss up to 20 hours of
                  classes.
                </p>
                <p>
                  Besides punctuality and attendance requirements, students must also complete all
                  assignments, demonstrate an understanding of the training content in a final exam
                  and successfully complete their teaching practicums.
                </p>
                <p>
                  Upon successful graduation, students will receive an officially recognized Yoga
                  Instructor Certificate. With this degree, the Akasha Yoga Academy authorizes its
                  graduates to become Registered Yoga Teachers and members of the renowned
                  US-based Yoga Alliance.
                </p>
              </PolicySection>

              <PolicySection id="liability" title="Liability Disclaimer">
                <p>
                  The Akasha Yoga Academy does not offer any liability insurance for individuals
                  and groups who take part in the offered courses. The participant releases and
                  discharges the Akasha Yoga Academy and its employees from any claims and demands
                  for injury or damage related to participation in the events. A detailed liability
                  release waiver will be provided in the registration form / in the beginning
                  chapters of our online courses.
                </p>
              </PolicySection>

              <PolicySection id="legal" title="Legal Disclosure, Imprint &amp; Contact">
                <p>
                  Provider identification and information in accordance with section 5 TMG (German
                  Telemedia Act).
                </p>
                <div className="bg-akasha-cream p-5 rounded-lg text-sm space-y-1">
                  <p className="font-semibold text-akasha-black">Akasha Yoga Academy</p>
                  <p>Burkhard Langemann</p>
                  <p>Jalan Kelabang Moding, Banjar Bentuyung</p>
                  <p>Kecamatan Ubud, Kabupaten Gianyar</p>
                  <p>Bali 80571, Indonesia</p>
                  <p className="pt-2">
                    Phone Bali: +62 821 1225 2299
                    <br />
                    WhatsApp US: +1 234 444 4841
                    <br />
                    Email: info@akashayogaacademy.com
                  </p>
                </div>
              </PolicySection>

              <PolicySection id="copyright" title="Content Disclaimer &amp; Copyright">
                <h3 className="text-lg font-heading text-akasha-black mb-2">Copyright</h3>
                <p>
                  Our web pages and their contents are subject to German copyright law. The texts
                  and photos on this website are copyrighted by AkashaYogaAcademy.com unless stated
                  otherwise. The use of the content of this website is allowed as long as clear and
                  explicit attribution is given to AkashaYogaAcademy.com with an obvious link back
                  to the original content location.
                </p>

                <h3 className="text-lg font-heading text-akasha-black mb-2 mt-6">Accountability for Content</h3>
                <p>
                  The person responsible for content in accordance with &sect; 55 section 2 RStV is
                  Burkhard Langemann.
                </p>
                <p>
                  The contents of our pages have been created with the utmost care. However, we
                  cannot guarantee the contents&apos; accuracy, completeness or topicality.
                </p>

                <h3 className="text-lg font-heading text-akasha-black mb-2 mt-6">Accountability for Links</h3>
                <p>
                  Responsibility for the content of external links lies solely with the operators
                  of the linked pages. No violations were evident to us at the time of linking.
                  Should any legal infringement become known to us, we will remove the respective
                  link immediately.
                </p>
              </PolicySection>

              <PolicySection id="privacy" title="Privacy Policy">
                <h3 className="text-lg font-heading text-akasha-black mb-2">General</h3>
                <p>
                  We fully respect your privacy and are committed to best practices. Your personal
                  data (e.g. title, name, address, email, phone number, bank details) are processed
                  by us only in accordance with the provisions of German data privacy laws. This
                  data privacy policy applies only to our own web pages.
                </p>

                <h3 className="text-lg font-heading text-akasha-black mb-2 mt-6">Newsletter</h3>
                <p>
                  Following subscription to the newsletter, your email address is used for our own
                  advertising purposes until you cancel. Cancellation is possible at any time via
                  the unsubscribe link in the newsletter.
                </p>

                <h3 className="text-lg font-heading text-akasha-black mb-2 mt-6">Inventory Data</h3>
                <p>
                  Your personal data, insofar as it is necessary for this contractual relationship,
                  is used exclusively for fulfilling the contract. Without your explicit consent or
                  a legal basis, your personal data is not passed on to third parties outside the
                  scope of fulfilling this contract.
                </p>

                <h3 className="text-lg font-heading text-akasha-black mb-2 mt-6">Google Analytics</h3>
                <p>
                  This website uses Google Analytics, a web analysis service of Google Inc. Google
                  Analytics uses cookies. The information generated by the cookie about your use of
                  this website is usually transmitted to a Google server in the United States. IP
                  anonymization is activated on this website. You can prevent cookies from being
                  stored by adjusting your browser settings, or by installing the Google Analytics
                  opt-out browser plug-in:{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-akasha-orange underline hover:text-akasha-orange-dark"
                  >
                    Google Analytics Opt-out
                  </a>
                </p>

                <h3 className="text-lg font-heading text-akasha-black mb-2 mt-6">Facebook / Meta Social Plugins</h3>
                <p>
                  We use social plug-ins from facebook.com, operated by Meta / Facebook Inc. For
                  details about handling of your personal data by Facebook, please refer to their
                  data privacy policy:{' '}
                  <a
                    href="https://www.facebook.com/policy.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-akasha-orange underline hover:text-akasha-orange-dark"
                  >
                    Facebook Privacy Policy
                  </a>
                </p>

                <h3 className="text-lg font-heading text-akasha-black mb-2 mt-6">Data Disclosure</h3>
                <p>
                  According to the Federal Data Protection Act, you have a right to free-of-charge
                  information about your stored data, and possibly entitlement to correction,
                  blocking or deletion of such data. Inquiries: info@akashayogaacademy.com
                </p>
              </PolicySection>

              <PolicySection id="giveaway" title="Giveaway Redemption Policy">
                <p>
                  <strong>Purpose:</strong> This policy outlines the terms and conditions for the
                  redemption of giveaways offered by Akasha Yoga Academy, including free classes,
                  workshops, courses, and promotional items.
                </p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong>Redemption Period:</strong> Recipients must redeem their giveaway within
                    one (1) year from the date of issuance.
                  </li>
                  <li>
                    <strong>Notification:</strong> The redemption period will be clearly stated on
                    all giveaway communications.
                  </li>
                  <li>
                    <strong>Non-Transferability:</strong> Giveaways are non-transferable and must be
                    used by the individual to whom they were issued.
                  </li>
                  <li>
                    <strong>Expiration:</strong> Unredeemed giveaways expire one year from issuance
                    and will no longer be valid.
                  </li>
                  <li>
                    <strong>Extensions:</strong> Extension requests will be considered on a
                    case-by-case basis and must be submitted in writing before expiration.
                  </li>
                  <li>
                    <strong>Redemption Process:</strong> Recipients must follow the instructions
                    provided at the time of issuance.
                  </li>
                  <li>
                    <strong>Responsibility:</strong> It is the responsibility of the recipient to be
                    aware of and comply with the terms.
                  </li>
                </ol>
              </PolicySection>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
