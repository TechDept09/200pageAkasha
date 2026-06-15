import Head from 'next/head';
import SiteNav from '@/components/SiteNav';
import Hero from '@/components/Hero';
import QuoteBreak from '@/components/QuoteBreak';
import WhyAkasha from '@/components/WhyAkasha';
import Curriculum from '@/components/Curriculum';
import Teachers from '@/components/Teachers';
import Steps from '@/components/Steps';
import TrustStrip from '@/components/TrustStrip';
import Pricing from '@/components/Pricing';
import Bonuses from '@/components/Bonuses';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import { TierProvider } from '@/lib/TierContext';
import { TIERS } from '@/lib/tiers';

const tier = TIERS.premium;

const OG_IMAGE =
  'https://static.wixstatic.com/media/c15a18_5d357dab7cec43c4879c3f12090081ce~mv2.jpg/v1/fill/w_1200,h_630,al_c,q_85,enc_avif,quality_auto/Certified-Yoga-Instructor---Bali---Akash.jpg';

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: '200-Hour Online Yoga Teacher Training, Premium',
  description: tier.metaDescription,
  provider: {
    '@type': 'Organization',
    name: 'Akasha Yoga Academy',
    sameAs: 'https://www.akashayogaacademy.com',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.93',
    reviewCount: '359',
    bestRating: '5',
  },
  offers: {
    '@type': 'Offer',
    price: String(tier.promoPrice),
    priceCurrency: 'USD',
    category: 'Premium',
    availability: 'https://schema.org/InStock',
  },
};

export default function PremiumPage() {
  return (
    <TierProvider tier="premium">
      <Head>
        <title>{tier.metaTitle}</title>
        <meta name="description" content={tier.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={tier.metaTitle} />
        <meta property="og:description" content={tier.metaDescription} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Akasha Yoga Academy" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tier.metaTitle} />
        <meta name="twitter:description" content={tier.metaDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
      </Head>

      <SiteNav />

      <main>
        <Hero />

        <QuoteBreak
          text="The mentorship was the difference, having a teacher who actually saw my practice and met me where I was."
          author="Akasha Premium Graduate"
          country=""
        />

        <WhyAkasha />
        <Curriculum />

        <QuoteBreak
          text="Personal feedback every week meant I was teaching with confidence by month three, not month twelve."
          author="Akasha Premium Graduate"
          country=""
        />

        <Teachers />
        <Steps />
        <TrustStrip />
        <Pricing />
        <Bonuses />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>

      <StickyCTA />
    </TierProvider>
  );
}
