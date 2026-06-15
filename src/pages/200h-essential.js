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

const SITE_URL = 'https://www.akashayogaacademy.com';
const OG_IMAGE =
  'https://static.wixstatic.com/media/c15a18_5d357dab7cec43c4879c3f12090081ce~mv2.jpg/v1/fill/w_1200,h_630,al_c,q_85,enc_avif,quality_auto/Certified-Yoga-Instructor---Bali---Akash.jpg';
const PAGE_TITLE =
  '200-Hour Online Yoga Teacher Training, Akasha Yoga Academy | Your Path to Purpose & Joy';
const PAGE_DESC =
  "Become Yoga Alliance certified with Akasha Yoga Academy's 200-Hour Online YTT. 75% Summer Discount, US$290 (was US$1190) until June 15. Live Zoom classes, 200+ Bali studio videos, 14-day money-back guarantee. 1,100+ graduates on 6 continents.";

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: '200-Hour Online Yoga Teacher Training, Essential',
  description: PAGE_DESC,
  provider: {
    '@type': 'Organization',
    name: 'Akasha Yoga Academy',
    sameAs: SITE_URL,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.93',
    reviewCount: '359',
    bestRating: '5',
  },
  offers: {
    '@type': 'Offer',
    price: '290',
    priceCurrency: 'USD',
    category: 'Essential',
    availability: 'https://schema.org/InStock',
  },
};

export default function Home() {
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
      </Head>

      <SiteNav />

      <main>
        <Hero />

        <QuoteBreak
          text="Their love & passion for a Yogic Life was out of this world. I swear my blueprint is changed because of it!"
          author="Suzi Bloor"
          country="Denmark"
        />

        <WhyAkasha />
        <Curriculum />

        <QuoteBreak
          text="You will learn so much more than just Yoga. I truly wish that EVERY person could experience this deep dive of self-discovery."
          author="Chandise Dasher"
          country="United States"
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
    </>
  );
}
