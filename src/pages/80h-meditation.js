import Head from 'next/head';
import SiteNav from '@/components/SiteNav';
import Hero80Meditation from '@/components/Hero80Meditation';
import Intro80Meditation from '@/components/Intro80Meditation';
import QuoteBreak from '@/components/QuoteBreak';
import WhoAreYou80Meditation from '@/components/WhoAreYou80Meditation';
import CraftPractice80Meditation from '@/components/CraftPractice80Meditation';
import Compass80Meditation from '@/components/Compass80Meditation';
import StudyBest80Meditation from '@/components/StudyBest80Meditation';
import MeetTeachers80Meditation from '@/components/MeetTeachers80Meditation';
import Steps80Meditation from '@/components/Steps80Meditation';
import JourneyNow80Meditation from '@/components/JourneyNow80Meditation';
import Bonuses80Meditation from '@/components/Bonuses80Meditation';
import Alumni80Meditation from '@/components/Alumni80Meditation';
import Transform80Meditation from '@/components/Transform80Meditation';
import WhatYoullExperience80Meditation from '@/components/WhatYoullExperience80Meditation';
import AkashaDifference80Meditation from '@/components/AkashaDifference80Meditation';
import Faq80Meditation from '@/components/Faq80Meditation';
import DiveContent80Meditation from '@/components/DiveContent80Meditation';
import { TierProvider } from '@/lib/TierContext';
import { TIERS } from '@/lib/tiers';

// Pixel-perfect rebuild of the live Wix 80-Hour Meditation TTC page, same
// approach as /80h-yin: SiteNav + hero first, then section-by-section from
// screenshots. Generic CourseLanding chrome is stripped until each Wix
// section is replicated.
const tier = TIERS['80h-meditation'];

const OG_IMAGE =
  'https://static.wixstatic.com/media/cd7168_af049207a34b49a2b8cb8373993ab442f000.jpg/v1/fill/w_1200,h_630,al_c,q_85,enc_avif,quality_auto/80h-meditation-og.jpg';

export default function Page() {
  return (
    <TierProvider tier="80h-meditation">
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
        <Hero80Meditation />
        <Intro80Meditation />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_0a05ce77a94a4310b9ef008bd9319cbc~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/anna-kotaba.jpg"
          text="This place shows you how to slow down, how to open up, and how to love yourself."
          author="Anna Kotaba"
          country="Poland"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <WhoAreYou80Meditation />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_4ca831536c114102964297224d073a15~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/luis.jpg"
          text="The lessons were very genuine they came from a real heartfelt place. I was absolutely delighted to meet all the teachers during the classes, if we had any questions the support was amazing."
          author="Luis"
          country="New Zealand"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <CraftPractice80Meditation />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_027b1d43a4b24a85b896657c96d61781~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/sharon.jpg"
          text="The akasha family were so welcoming and supportive, They create such a save space and they enable me to slowly go beyond my self-limiting belief"
          author="Sharon"
          country="Australia"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <Compass80Meditation />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_86908852159e4304a33fc2e96cdceee3~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/valerie.jpg"
          text="To find teachers with so much depth, passion & dedication is quite unique."
          author="Valerie, Curaçao"
          country="Online Graduate 2020"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <StudyBest80Meditation />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_39e5a05d37614f46be4b357a9c74cd3b~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/sayla.jpg"
          text="A fantastic experience. Connecting on a daily basis with instructors & participants from around the world was amazing."
          author="Sayla, UK"
          country="Online Graduate 2020"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <MeetTeachers80Meditation />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_71c0fb6c969a42ba9269e781f00a51f9~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/chandise-dasher.jpg"
          text="You will learn so much more than just Yoga. I truly wish that EVERY person could experience this deep dive of self-discovery."
          author="Chandise Dasher"
          country="United States"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <Steps80Meditation />
        <JourneyNow80Meditation />
        <Bonuses80Meditation />
        <Alumni80Meditation />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_bce92a2b0dac4085989f5c9b40141493~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/seyla.jpg"
          text="The course content is incredible! Easy to digest. It's been a fantastic experience that I will encourage anyone to sign up for"
          author="Seyla"
          country="Australia"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <Transform80Meditation />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_e66917d26a1a4f3e95b0f8875a34e57e~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/pierre-mayer.jpg"
          text="It's amazing with how much love & authenticity you get prepared to be a Yoga Teacher, just AWESOME and not describable in words."
          author="Pierre Mayer"
          country="lustaufgesund.com"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <WhatYoullExperience80Meditation />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_7508b95a24824cefb7a2ef35bc9935e8~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/mohit-jain.jpg"
          text="It's amazing how they share their resources & knowledge with you to find your own calling. This itself is proof they are providing all this from their hearts."
          author="Mohit Jain"
          country="India / Dubai"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <AkashaDifference80Meditation />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_b2fdf7a8ec6d46db9f58ab3c34cce9c3~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/nici-kellerman.jpg"
          text="They have taught me how to step into my own authority, how to teach what I love, and how to keep growing."
          author="Nici Kellerman"
          country="yogawithnici.com"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <Faq80Meditation />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_662157d048fd41e9b12abf0fe750adc4~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/nici-group.jpg"
          text="They have taught me how to step into my own authority, how to teach what I love, and how to keep growing."
          author="Nici Kellerman"
          country="yogawithnici.com"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <DiveContent80Meditation />
      </main>
    </TierProvider>
  );
}
