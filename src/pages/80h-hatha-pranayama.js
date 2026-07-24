import Head from 'next/head';
import SiteNav from '@/components/SiteNav';
import Hero80Hatha from '@/components/Hero80Hatha';
import Intro80Hatha from '@/components/Intro80Hatha';
import QuoteBreak from '@/components/QuoteBreak';
import TransformOvercome80Hatha from '@/components/TransformOvercome80Hatha';
import WeveBeenThere80Hatha from '@/components/WeveBeenThere80Hatha';
import StudyBest80Hatha from '@/components/StudyBest80Hatha';
import MeetTeachers80Hatha from '@/components/MeetTeachers80Hatha';
import Steps80Hatha from '@/components/Steps80Hatha';
import JourneyNow80Hatha from '@/components/JourneyNow80Hatha';
import Bonuses80Hatha from '@/components/Bonuses80Hatha';
import Testimonials80Hatha from '@/components/Testimonials80Hatha';
import BreathBandha80Hatha from '@/components/BreathBandha80Hatha';
import WhatYoullExperience80Hatha from '@/components/WhatYoullExperience80Hatha';
import AkashaAdvantage80Hatha from '@/components/AkashaAdvantage80Hatha';
import TheContent80Hatha from '@/components/TheContent80Hatha';
import FaqJourney80Hatha from '@/components/FaqJourney80Hatha';
import { TierProvider } from '@/lib/TierContext';
import { TIERS } from '@/lib/tiers';

// Pixel-perfect rebuild of the live Wix 80-Hour Advanced Hatha & Pranayama
// TTC page, same approach as /80h-yin and /80h-meditation: SiteNav + hero
// first, then section-by-section from screenshots. Generic CourseLanding
// chrome is stripped until each Wix section is replicated.
const tier = TIERS['80h-hatha-pranayama'];

const OG_IMAGE =
  'https://static.wixstatic.com/media/cd7168_ac443cf0083b47ce9eed5df7eb1d58ebf000.jpg/v1/fill/w_1200,h_630,al_c,q_85,enc_avif,quality_auto/80h-hatha-og.jpg';

export default function Page() {
  return (
    <TierProvider tier="80h-hatha-pranayama">
      <Head>
        <title>{tier.metaTitle}</title>
        <meta name="description" content={tier.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={tier.metaTitle} />
        <meta property="og:description" content={tier.metaDescription} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:site_name" content="Akasha Yoga Academy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tier.metaTitle} />
        <meta name="twitter:description" content={tier.metaDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Head>

      <SiteNav />

      <main className="pt-28 md:pt-32">
        <Hero80Hatha />
        <Intro80Hatha />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_02b833ce75004c8d9af0fc1f636c5786~mv2.jpeg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/lauren.jpg"
          text="Akasha instructors are incredible people, mentors, inspiring, nurturing and so authentic."
          author="Lauren"
          country="New Zealand"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <TransformOvercome80Hatha />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_60bb241860f64b09801e15919437a270~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/valerie.jpg"
          text="To find teachers with so much depth, passion & dedication is quite unique."
          author="Valerie, Curaçao"
          country="Online Graduate 2020"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <WeveBeenThere80Hatha />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_13e272d4b6184beb9f7bfef53aa8e421~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/anu.jpg"
          text="This program transmits the Essence of Yoga. Akasha is Home for me."
          author="Anu"
          country="Tanzania"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <StudyBest80Hatha />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_a9f98b1743d14d03a5131ee7e0f891f0~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/nici-kellerman.jpg"
          text="They have taught me how to step into my own authority, how to teach what I love, and how to keep growing."
          author="Nici Kellerman"
          country="yogawithnici.com"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <MeetTeachers80Hatha />
        <Steps80Hatha />
        <JourneyNow80Hatha />
        <Bonuses80Hatha />
        <Testimonials80Hatha />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_9d9e819445ea47b6b31a6c18a5c6edbc~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/ashley.jpg"
          text="I am so grateful for this amazing experience. I am honestly speechless and have no words to express the gratitude I have in my heart for the two of you. This TTC was exactly the next step for my spiritual journey."
          author="Ashley"
          country="USA"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <BreathBandha80Hatha />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_b4603f35295d4046b0ce7d772d4a2ba8~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/tamu.jpg"
          text="With Akasha I understand how Yoga applies in our lives how we can use it to help ourself and others."
          author="Tamu"
          country="Singapore"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <WhatYoullExperience80Hatha />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_f1680fa1917043a7b139ae7097abc2d1~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/amber.jpg"
          text="If you're thinking of choosing Akasha Yoga Academy to do your course, I highly, highly recommend it, as I had a beautiful experience - and I know you will too."
          author="Amber"
          country="Australia"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <AkashaAdvantage80Hatha />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_edfb1cecc3c5460d845af5abf4ff5f36~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/nici-family.jpg"
          text="What I love about Akasha family is that everything they teach is connected to the heart."
          author="Nici Kellerman"
          country="USA"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <TheContent80Hatha />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_70dbc1ed353f44aa8263cd0a1a87f747~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/nici-authority.jpg"
          text="They have taught me how to step into my own authority, how to teach what I love, and how to keep growing."
          author="Nici Kellerman"
          country="yogawithnici.com"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <FaqJourney80Hatha />
      </main>
    </TierProvider>
  );
}
