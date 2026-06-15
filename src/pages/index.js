import Head from 'next/head';
import HubNav from '@/components/hub/HubNav';
import HubHero from '@/components/hub/HubHero';
import FeaturedCourseCard from '@/components/hub/FeaturedCourseCard';
import CategorySection from '@/components/hub/CategorySection';
import Footer from '@/components/Footer';
import { courses, CATEGORIES, getCoursesByCategory } from '@/lib/courses';

const SITE_URL = 'https://www.akashayogaacademy.com';
const OG_IMAGE =
  'https://static.wixstatic.com/media/c15a18_5d357dab7cec43c4879c3f12090081ce~mv2.jpg/v1/fill/w_1200,h_630,al_c,q_85,enc_avif,quality_auto/Certified-Yoga-Instructor---Bali---Akash.jpg';
const PAGE_TITLE =
  'International Yoga Day Storewide Discount, Akasha Yoga Academy';
const PAGE_DESC =
  'Storewide discount for all courses and on-site programs for International Yoga Day. Explore our 200-Hour, 300-Hour, 80-Hour modules, workshops, and retreats.';

export default function HubHome() {
  const essential = courses.find((c) => c.slug === '200h-essential');
  const premium = courses.find((c) => c.slug === '200h-premium');
  const advanced = getCoursesByCategory(CATEGORIES.ADVANCED);
  const other = getCoursesByCategory(CATEGORIES.OTHER);

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Akasha Yoga Academy" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Head>

      <HubNav />

      <main>
        <HubHero />

        {essential ? (
          <FeaturedCourseCard
            course={essential}
            anchorId="essential"
            ctaLabel="Start Essential"
          />
        ) : null}

        <div className="bg-akasha-gray-4/30">
          {premium ? (
            <FeaturedCourseCard
              course={premium}
              anchorId="premium"
              ctaLabel="Start Premium"
            />
          ) : null}
        </div>

        <CategorySection
          id="advanced"
          eyebrow="For Certified Teachers"
          heading="Advanced Courses"
          intro="Continue your path after the 200-Hour Certification. Specialized modules to deepen your teaching."
          courses={advanced}
          bg="bg-akasha-white"
        />

        <CategorySection
          id="other"
          eyebrow="Open to All"
          heading="Other Courses & On-Site"
          intro="Workshops and retreats open to everyone, no prior yoga training required."
          courses={other}
          bg="bg-akasha-gray-4/30"
        />

        <Footer />
      </main>
    </>
  );
}
