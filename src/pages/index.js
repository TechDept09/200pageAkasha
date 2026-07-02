import Head from 'next/head';
import HubNav from '@/components/hub/HubNav';
import HubHero from '@/components/hub/HubHero';
import JulyLaunchHome from '@/components/hub/JulyLaunchHome';
import MainProducts from '@/components/hub/MainProducts';
import CategorySection from '@/components/hub/CategorySection';
import TrustStrip from '@/components/TrustStrip';
import Footer from '@/components/Footer';
import { CATEGORIES, getCoursesByCategory } from '@/lib/courses';
import { useJulyLaunched } from '@/hooks/useJulyLaunched';

const SITE_URL = 'https://www.akashayogaacademy.com';
const OG_IMAGE =
  'https://static.wixstatic.com/media/c15a18_5d357dab7cec43c4879c3f12090081ce~mv2.jpg/v1/fill/w_1200,h_630,al_c,q_85,enc_avif,quality_auto/Certified-Yoga-Instructor---Bali---Akash.jpg';
const PAGE_TITLE_PRE =
  'Big Yoga Day Discounts, Akasha Yoga Academy';
const PAGE_DESC_PRE =
  'Big Yoga Day discounts on all our courses and on-site programs for International Yoga Day. Explore our 200-Hour, 300-Hour, 80-Hour modules, workshops, and retreats.';
const PAGE_TITLE_LIVE =
  'Summer Self-Care Journey, Akasha Yoga Academy';
const PAGE_DESC_LIVE =
  'Begin your 200hr Yoga Teacher Training this summer. Save over 70% on the Essential path, Yoga Alliance certified, voucher auto-applied at checkout.';

export default function HubHome() {
  const advanced = getCoursesByCategory(CATEGORIES.ADVANCED);
  const other = getCoursesByCategory(CATEGORIES.OTHER);
  const launched = useJulyLaunched();

  const title = launched ? PAGE_TITLE_LIVE : PAGE_TITLE_PRE;
  const description = launched ? PAGE_DESC_LIVE : PAGE_DESC_PRE;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Akasha Yoga Academy" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Head>

      {/* Auto-swap: once useJulyLaunched flips to true (at 2 Jul 12:00
          WITA), the entire hub renders the July campaign landing. Before
          launch, current pre-launch hub content stays put. Waiting on
          mount (launched === null) shows the pre-launch view so SSR
          output stays valid and there's no blank first paint. */}
      {launched ? (
        <JulyLaunchHome />
      ) : (
        <>
          <HubNav />
          <main>
            <HubHero />
            <TrustStrip />
            <MainProducts />

            <CategorySection
              id="advanced"
              eyebrow="For Certified Teachers"
              heading="Advanced Courses"
              intro="Specialized modules to continue your path after the 200-Hour Certification."
              courses={advanced}
              bg="bg-akasha-gray-4/30"
            />

            <CategorySection
              id="other"
              eyebrow="Open to All"
              heading="Other Courses & On-Site"
              intro="Workshops and retreats open to everyone, no prior yoga training required."
              courses={other}
              bg="bg-akasha-white"
            />

            <Footer />
          </main>
        </>
      )}
    </>
  );
}
