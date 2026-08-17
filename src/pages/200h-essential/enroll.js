import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Legacy internal enroll page. ThriveCart is now the payment gateway,
// so any hit here bounces straight to /checkout for the Essential
// product, preserving any query string. The old Wix-headless enroll
// UI lives in git history.
export default function EnrollPage() {
  const router = useRouter();

  useEffect(() => {
    const qs = router.asPath.includes('?')
      ? router.asPath.slice(router.asPath.indexOf('?') + 1)
      : '';
    const params = new URLSearchParams(qs);
    if (!params.get('product')) params.set('product', 'essential');
    router.replace(`/checkout?${params.toString()}`);
  }, [router]);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <p style={{ padding: 24, fontFamily: 'sans-serif' }}>Redirecting…</p>
    </>
  );
}
