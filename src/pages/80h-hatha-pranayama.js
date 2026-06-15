import CourseLanding from '@/components/course/CourseLanding';
import { getCourseBySlug } from '@/lib/courses';

export default function Page() {
  return <CourseLanding course={getCourseBySlug('80h-hatha-pranayama')} />;
}
