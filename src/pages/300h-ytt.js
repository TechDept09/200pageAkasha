import Head from 'next/head';
import SiteNav from '@/components/SiteNav';
import Hero300 from '@/components/Hero300';
import CertifiedIntro300 from '@/components/CertifiedIntro300';
import QuoteBreak from '@/components/QuoteBreak';
import DreamsSample300 from '@/components/DreamsSample300';
import BookACall300 from '@/components/BookACall300';
import MasterTeacher300 from '@/components/MasterTeacher300';
import FeaturedIn300 from '@/components/FeaturedIn300';
import ThreeParts300 from '@/components/ThreeParts300';
import StudyBest300 from '@/components/StudyBest300';
import InteractiveCurriculum300 from '@/components/InteractiveCurriculum300';
import YogaAllianceCert300 from '@/components/YogaAllianceCert300';
import JourneyNow300 from '@/components/JourneyNow300';
import Bonuses300 from '@/components/Bonuses300';
import WhatYoullGain300 from '@/components/WhatYoullGain300';
import LeadTeachers300 from '@/components/LeadTeachers300';
import Curriculum300 from '@/components/Curriculum300';
import Testimonials300 from '@/components/Testimonials300';
import Steps300 from '@/components/Steps300';
import FaqTeaser300 from '@/components/FaqTeaser300';
import { TierProvider } from '@/lib/TierContext';
import { TIERS } from '@/lib/tiers';

// Pixel-perfect rebuild of the live Wix 300-Hour page, same approach as
// /200h-essential: SiteNav + hero first, then section-by-section from
// screenshots. Generic CourseLanding chrome is stripped until each Wix
// section is replicated.
const tier = TIERS['300h-ytt'];

const OG_IMAGE =
  'https://static.wixstatic.com/media/cd7168_08b4252a1e1a44fbab5f36b9588534b3~mv2.jpg/v1/fill/w_1200,h_630,al_c,q_85,enc_avif,quality_auto/AYA300-Dean%20Raphael-W-67.jpg';

export default function Page() {
  return (
    <TierProvider tier="300h-ytt">
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
        <Hero300 />
        <CertifiedIntro300 />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_3b0c1b5bd81947e6bd4533939ec8c125~mv2.jpg/v1/fill/w_1920,h_720,al_c,q_85,enc_avif,quality_auto/nici-shala.jpg"
          text="From the bottom of my heart, I really like to encourage anyone to join the Akasha family. The change of my life is amazing. I'm a completely different person."
          author="Nici Kellerman from Australia"
          className="!min-h-[360px] md:!min-h-[480px]"
        />
        <DreamsSample300 />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_13e272d4b6184beb9f7bfef53aa8e421~mv2.jpg/v1/fill/w_1920,h_720,al_c,q_85,enc_avif,quality_auto/sanusi.jpg"
          text="Akasha doesn't just train people to become yoga instructors. They train you to be a Yoga Master."
          author="Sugeng Sanusi from Singapore"
          className="!min-h-[360px] md:!min-h-[480px]"
        />
        <BookACall300 />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_dfdb09b4c0174017922fafefb52663d6~mv2.jpg/v1/fill/w_1920,h_720,al_c,q_85,enc_avif,quality_auto/christine.jpg"
          text="Akasha is the best family. There's unconditional love, support, nurture & challenge. The training has been so inspiring and I would recommend it to anyone."
          author="Christine Stoove from Australia"
          className="!min-h-[360px] md:!min-h-[480px]"
        />
        <MasterTeacher300 />
        <FeaturedIn300 />
        <ThreeParts300 />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_45e9dca9bd744e778d2b63d53f975753~mv2.jpg/v1/fill/w_1920,h_720,al_c,q_85,enc_avif,quality_auto/lauren.jpg"
          text="Akasha instructors are incredible people & mentors, inspiring, nurturing, and so authentic."
          author="Lauren Torralba from the US"
          className="!min-h-[360px] md:!min-h-[480px]"
        />
        <StudyBest300 />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_8317be1e896f4637bd4e3044a985cce1~mv2.jpg/v1/fill/w_1920,h_720,al_c,q_85,enc_avif,quality_auto/anu-bts.jpg"
          text="This program is the essence of what Yoga should be. Akasha is Home for me."
          author="Anu Anj from the UK"
          className="!min-h-[360px] md:!min-h-[480px]"
        />
        <InteractiveCurriculum300 />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_f7cf3605eb264283b7d90877e21f17fb~mv2.jpg/v1/fill/w_1920,h_720,al_c,q_85,enc_avif,quality_auto/sandra-anatomy.jpg"
          text="Akasha teachers live & breathe these teachings themselves. They're coming from the heart. You can use those principles in your daily life."
          author="Sandra Forrest from New Zealand"
          className="!min-h-[360px] md:!min-h-[480px]"
        />
        <YogaAllianceCert300 />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_3b7ab2300c3f47ae82fc72ccfadce406~mv2.jpg/v1/fill/w_1920,h_720,al_c,q_85,enc_avif,quality_auto/tamu.jpg"
          text="Akasha is a big family. You can really feel the connection as the teachers create such an amazing environment."
          author="Tamu from Singapore"
          className="!min-h-[360px] md:!min-h-[480px]"
        />
        <JourneyNow300 />
        <Bonuses300 />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_53bb36d5314e4d22b684dcc286bbc0c1~mv2.jpg/v1/fill/w_1920,h_720,al_c,q_85,enc_avif,quality_auto/lana.jpg"
          text="The true essence of the word family is what they bring to their teaching. It's a combination of passion, wisdom, love & support, mixed with extensive knowledge."
          author="Lana Mazahreh from Jordan"
          className="!min-h-[360px] md:!min-h-[480px]"
        />
        <WhatYoullGain300 />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_b06b2fe8c11c4f3e8292ea6a99f9f3c6~mv2.jpg/v1/fill/w_1920,h_720,al_c,q_85,enc_avif,quality_auto/nina.jpg"
          text="The Akasha teachers are just amazing & passionate. Even though I did the TTC online, I never had the feeling of being alone. You could really feel the connection – even through the screen."
          author="Nina Zeeb from Germany"
          className="!min-h-[360px] md:!min-h-[480px]"
        />
        <LeadTeachers300 />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_480c9b8174ae451c8795e478209204de~mv2.png/v1/fill/w_1920,h_720,al_c,q_85,enc_avif,quality_auto/amber-adjustment.png"
          text="Connecting on a daily basis with instructors and participants was one of my favorite parts of doing the course online."
          author="Amber Ivers from Australia"
          className="!min-h-[360px] md:!min-h-[480px]"
        />
        <Curriculum300 />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_1828622d1b6841158eb3a712ae0b2152~mv2.jpeg/v1/fill/w_1920,h_720,al_c,q_85,enc_avif,quality_auto/sarah.jpg"
          text="It was an amazing journey. Many things in my life changed."
          author="Sarah Huttner from Germany"
          className="!min-h-[360px] md:!min-h-[480px]"
        />
        <Testimonials300 />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_08b4252a1e1a44fbab5f36b9588534b3~mv2.jpg/v1/fill/w_1920,h_720,al_c,q_85,enc_avif,quality_auto/seyla.jpg"
          text="It's been a fantastic experience that I would encourage anybody to sign up for. You can learn so much about yourself."
          author="Seyla Saunders from the UK"
          className="!min-h-[360px] md:!min-h-[480px]"
        />
        <Steps300 />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_362be338d8f74898a584e7196c8a4a36~mv2.jpg/v1/fill/w_1920,h_720,al_c,q_85,enc_avif,quality_auto/sharon.jpg"
          text="They've enabled me to slowly strip away my self-limiting belief. It really has enhanced me spiritually, emotionally & physically."
          author="Sharon Devey from the UK"
          className="!min-h-[360px] md:!min-h-[480px]"
        />
        <FaqTeaser300 />
      </main>
    </TierProvider>
  );
}
