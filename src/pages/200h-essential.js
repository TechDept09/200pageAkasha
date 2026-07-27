import Head from 'next/head';
import SiteNav from '@/components/SiteNav';
import Hero from '@/components/Hero';
import QuoteBreak from '@/components/QuoteBreak';
import CertifiedIntroBanner from '@/components/CertifiedIntroBanner';
import BringBaliHomeBanner from '@/components/BringBaliHomeBanner';
import SpiritOfBaliHome from '@/components/SpiritOfBaliHome';
import TopRankedSchool from '@/components/TopRankedSchool';
import BrochureDownload from '@/components/BrochureDownload';
import HighestRatedSchool from '@/components/HighestRatedSchool';
import SummerOfferBand from '@/components/SummerOfferBand';
import DiscoverYourPath from '@/components/DiscoverYourPath';
import BookACall from '@/components/BookACall';
import OwnPaceSupport from '@/components/OwnPaceSupport';
import IntroVideo from '@/components/IntroVideo';
import WhyAkasha from '@/components/WhyAkasha';
import Curriculum from '@/components/Curriculum';
import CourseContent from '@/components/CourseContent';
import WhyChooseAcademy from '@/components/WhyChooseAcademy';
import Graduates from '@/components/Graduates';
import MoneyBackGuarantee from '@/components/MoneyBackGuarantee';
import StartToday from '@/components/StartToday';
import Bonuses from '@/components/Bonuses';
import RiskFreeGuarantee from '@/components/RiskFreeGuarantee';
import BeYogiInsurance from '@/components/BeYogiInsurance';
import ValuePackedAdditions from '@/components/ValuePackedAdditions';
import FaqShineTeaser from '@/components/FaqShineTeaser';
import FinalRelyOn from '@/components/FinalRelyOn';
import Teachers from '@/components/Teachers';
import Steps from '@/components/Steps';
import YogaAllianceCertified from '@/components/YogaAllianceCertified';
import Testimonials from '@/components/Testimonials';
import { TierProvider } from '@/lib/TierContext';
import { TIERS } from '@/lib/tiers';

const tier = TIERS.essential;

const OG_IMAGE =
  'https://static.wixstatic.com/media/c15a18_5d357dab7cec43c4879c3f12090081ce~mv2.jpg/v1/fill/w_1200,h_630,al_c,q_85,enc_avif,quality_auto/Certified-Yoga-Instructor---Bali---Akash.jpg';

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: '200-Hour Online Yoga Teacher Training, Essential',
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
    category: 'Essential',
    availability: 'https://schema.org/InStock',
  },
};

export default function EssentialPage() {
  return (
    <TierProvider tier="essential">
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
        {/* Ordering follows the buyer's arc: pitch, meet, learn, verify,
            price. Hero states the offer, then we humanise (video), open
            up the training (Why / Curriculum / Teachers), stack the
            trust signals (Alliance / TrustStrip), and only then ask
            for the sale. Testimonials sit just before pricing so the
            last thing read before the price is another graduate's
            voice. */}
        <Hero />

        <CertifiedIntroBanner />

        <BringBaliHomeBanner />

        <SpiritOfBaliHome />

        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_5daede02159240e58ad572c3845f434a~mv2.webp/v1/fill/w_1920,h_640,al_c,q_85,enc_avif,quality_auto/quote-graduates.webp"
          text="No words would give true justice to the experience with these guys!"
          author="Kinga Kovacs"
          country="United Kingdom"
        />

        <TopRankedSchool />

        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_b5fe8544de1047af8c2ee78b1f8557b1~mv2.webp/v1/fill/w_1920,h_540,al_c,q_85,enc_avif,quality_auto/quote-filming.webp"
          text="To find teachers with so much depth, passion & dedication is quite unique."
          author="Valerie"
          country="Netherlands"
        />

        <Curriculum />

        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_fc4851225d0f4a9e875aef5d772a4a6b~mv2.webp/v1/fill/w_1920,h_600,al_c,q_85,enc_avif,quality_auto/quote-anatomy.webp"
          text="It was such a beautiful, humbling experience, and for me, the perfect introduction to Yoga & Spiritual Heart meditation."
          author="James"
          country="Australia"
        />

        <Teachers />

        <WhyAkasha />

        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_8e643b3e9b0a43f08bada7379569f4d1~mv2.webp/v1/fill/w_1920,h_620,al_c,q_85,enc_avif,quality_auto/quote-breathwork.webp"
          text="The training has a beautiful structure and helps you to feel confident to start teaching right away."
          author="Tamara Cuypers"
          country="Belgium"
        />

        <BrochureDownload />

        <YogaAllianceCertified />

        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_f934156a033d4649ad3c0bf5a97719b5~mv2.webp/v1/fill/w_1920,h_720,al_c,q_85,enc_avif,quality_auto/quote-graduation-joy.webp"
          text="They have taught me how to step into my own authority, how to teach what I love, and how to keep growing."
          author="Nici Kellerman"
          country="yogawithnici.com"
        />

        <HighestRatedSchool />

        <Testimonials />

        <SummerOfferBand />

        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_2e292f449aa84742a22ff12072bdffc5~mv2.webp/v1/fill/w_1920,h_720,al_c,q_85,enc_avif,quality_auto/quote-class.webp"
          text="A fantastic experience. Connecting on a daily basis with instructors & participants from around the world was amazing."
          author="Jayla, UK"
          country="Online Graduate 2020"
        />

        <DiscoverYourPath />

        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_350910e030b24af2bc7de441b1705db8~mv2.webp/v1/fill/w_1920,h_680,al_c,q_85,enc_avif,quality_auto/quote-meditation.webp"
          text="You will learn so much more than just Yoga. I truly wish that EVERY person could experience this deep dive of self-discovery."
          author="Chandise Dasher"
          country="United States"
        />

        <BookACall />

        <IntroVideo
          videoId="RkAZ2x5kWP8"
          title="Intro To 200-Hour Online Yoga TTC"
          eyebrow=""
          headline="Watch This Video"
          description="Check out the premium quality of our life-changing program:"
        />

        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_bd7222270fcb4cb5aed083fa2efb2d59~mv2.jpg/v1/fill/w_1920,h_720,al_c,q_85,enc_avif,quality_auto/quote-certificate.jpg"
          text="Authentic, professional, and in-depth Yoga Teacher Training. The Akasha Family goes beyond any expectations, offering a spiritual journey that can transform your life."
          author="Jo"
          country="Australia"
        />

        <OwnPaceSupport />

        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_1c525e41f1e942c5aa28150b9b690211~mv2.jpeg/v1/fill/w_1920,h_720,al_c,q_85,enc_avif,quality_auto/quote-online-teaching.jpeg"
          text="I've learned the authentic way of yoga teaching from such great, knowledgeable teachers who have been to India for their teachings. It's been such an AMAZING transformation."
          author="Tariann Tarabochia"
          country="USA"
        />

        <QuoteBreak
          text="Their love & passion for a Yogic Life was out of this world. I swear my blueprint is changed because of it!"
          author="Suzi Bloor"
          country="Denmark"
        />

        <CourseContent />

        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_bb542df59f024ad2baa8035ee4afb9b0~mv2.jpeg/v1/fill/w_1920,h_640,al_c,q_85,enc_avif,quality_auto/pierre.jpeg"
          text="It's amazing with how much love & authenticity you get prepared to be a Yoga Teacher, just AWESOME and not describable in words."
          author="Pierre Mayer"
          country="lustaufgesund.com"
        />

        <WhyChooseAcademy />

        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_4705f63dcae6485c9d0d76dcc53b085b~mv2.jpg/v1/fill/w_1920,h_640,al_c,q_85,enc_avif,quality_auto/mohit.jpg"
          text="It's amazing how they share their resources & knowledge with you to find your own calling. This itself is proof they are providing all this from their hearts."
          author="Mohit Jain – Indra"
          country="Dubai"
        />

        <Graduates />

        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_8664ff2f7b894ce4be04ceeb16df45e3~mv2.jpeg/v1/fill/w_1920,h_640,al_c,q_85,enc_avif,quality_auto/sarah.jpeg"
          text="I think it was an amazing journey and many things in my life changed. Thanks a lot thanks for sharing and all the great thoughts"
          author="Sarah Hüttner"
        />

        <MoneyBackGuarantee />
        <StartToday />

        <SummerOfferBand />

        <Bonuses />

        <SummerOfferBand />

        <RiskFreeGuarantee />
        <BeYogiInsurance />

        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_6ef23258896449fca11d4527dc43a967~mv2.jpg/v1/fill/w_1920,h_640,al_c,q_85,enc_avif,quality_auto/taryn.jpg"
          text="Taking my 200-Hour YTT at Akasha Yoga Academy has been such a pivotal transformative milestone for me. The YTT programme at Akasha is highly structured, immersive and deeply connected."
          author="Taryn Mock"
          country="Singapore"
        />

        <ValuePackedAdditions />

        <SummerOfferBand />

        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_2bf5f7c47ef4464b8f2ea92b8465784e~mv2.jpg/v1/fill/w_1920,h_640,al_c,q_85,enc_avif,quality_auto/julia.jpg"
          text="This course was definitely the best I could choose to become a professional yoga teacher. It gave me maximum knowledge and qualifications to teach classes."
          author="Julia Stupek"
          country="Poland"
        />

        <Steps />

        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_2990418e7bc6497f89ef13546fb8b456~mv2.jpg/v1/fill/w_1920,h_640,al_c,q_85,enc_avif,quality_auto/lana.jpg"
          text="The true essence of the word family is what they bring to their teaching. It is a combination of passion wisdom, love, support combined with extensive knowledge."
          author="Lana"
          country="Jordan"
        />

        <FaqShineTeaser />

        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_f1bc3887e79248ecbf700dc3bda29459~mv2.jpg/v1/fill/w_1920,h_640,al_c,q_85,enc_avif,quality_auto/kelsey.jpg"
          text="This academy, rooted in the timeless tradition of classical Hatha Yoga, pranayama, and meditation, offers more than just a certification – it's a journey of self-discovery and holistic well-being and I believe it came at a perfect moment in my life."
          author="Kelsey Palmer"
        />

        <FinalRelyOn />
      </main>
    </TierProvider>
  );
}
