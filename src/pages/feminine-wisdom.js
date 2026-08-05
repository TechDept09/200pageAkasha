import Head from 'next/head';
import CourseLanding from '@/components/course/CourseLanding';
import { getCourseBySlug } from '@/lib/courses';

export default function Page() {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>
      <CourseLanding course={getCourseBySlug('feminine-wisdom')} />
    </>
  );
}
