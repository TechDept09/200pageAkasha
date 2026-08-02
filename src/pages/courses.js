import Head from 'next/head';
import HubNav from '@/components/hub/HubNav';
import MainProducts from '@/components/hub/MainProducts';
import CategorySection from '@/components/hub/CategorySection';
import Footer from '@/components/Footer';
import { courses, getCoursesByCategory, CATEGORIES } from '@/lib/courses';
import { CanonicalLink, buildBreadcrumbSchema, jsonLd } from '@/lib/seo';

// Catalog hub — the browsable course directory that anchors the site.
// Linked from the "← All Courses" breadcrumb in CourseLanding and the
// logo in HubNav. Separate from the campaign landing (/) so visitors
// always have a neutral, non-promotional starting point.
const advancedCourses = getCoursesByCategory(CATEGORIES.ADVANCED);
const otherCourses = getCoursesByCategory(CATEGORIES.OTHER);

const OG_IMAGE =
  'https://static.wixstatic.com/media/c15a18_5d357dab7cec43c4879c3f12090081ce~mv2.jpg/v1/fill/w_1200,h_630,al_c,q_85,enc_avif,quality_auto/Certified-Yoga-Instructor---Bali---Akash.jpg';

export default function CoursesPage() {
  return (
    <>
      <Head>
        <title>Yoga Teacher Training Courses | Akasha Yoga Academy</title>
        <meta
          name="description"
          content="Explore Akasha Yoga Academy's online yoga teacher training courses. 200-hour, 300-hour, Yin Yoga, Meditation, Hatha & Pranayama — Yoga Alliance certified."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yoga Teacher Training Courses | Akasha Yoga Academy" />
        <meta
          property="og:description"
          content="Online yoga teacher training courses. 200h, 300h, Yin, Meditation, Hatha. Yoga Alliance certified."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Akasha Yoga Academy" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yoga Teacher Training Courses | Akasha Yoga Academy" />
        <meta
          name="twitter:description"
          content="Online yoga teacher training courses. 200h, 300h, Yin, Meditation, Hatha. Yoga Alliance certified."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        <meta name="robots" content="index, follow" />
        {CanonicalLink('/courses')}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(buildBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Courses', url: '/courses' },
          ]))}
        />
      </Head>

      <HubNav ctaText="Browse All Courses" ctaHref="/courses" />

      <main className="pt-[5.5rem]">
        <MainProducts />

        <CategorySection
          id="advanced"
          eyebrow="For Certified Teachers"
          heading="Advanced Training"
          intro="Deepen your practice and expand your teaching toolkit with these Yoga Alliance YACEP programs."
          courses={advancedCourses}
        />

        <CategorySection
          id="other"
          eyebrow="Beyond the Mat"
          heading="Special Programs"
          intro="Workshops, retreats, and short courses for continuing education and personal growth."
          courses={otherCourses}
          bg="bg-akasha-white"
        />
      </main>

      <Footer />
    </>
  );
}
