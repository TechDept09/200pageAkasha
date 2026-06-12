import Head from 'next/head';
import SiteNav from '@/components/SiteNav';
import Hero from '@/components/Hero';
import QuoteBreak from '@/components/QuoteBreak';
import WhyAkasha from '@/components/WhyAkasha';
import Curriculum from '@/components/Curriculum';
import Teachers from '@/components/Teachers';
import Steps from '@/components/Steps';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          200-Hour Online Yoga Teacher Training — Akasha Yoga Academy | Your
          Path to Purpose &amp; Joy
        </title>
        <meta
          name="description"
          content="Become Yoga Alliance certified with Akasha Yoga Academy's 200-Hour Online YTT. 75% Summer Discount — US$290 (was US$1190) until June 15. Live Zoom classes, 200+ Bali studio videos, 14-day money-back guarantee. 1,100+ graduates on 6 continents."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
