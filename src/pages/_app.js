import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import Head from 'next/head';

// Preview gate. The course-pages branch is not yet published to
// production; anyone hitting the Vercel preview URL must enter
// the shared marketing access code before any page renders. Once
// entered, the session persists via sessionStorage until the tab
// closes. Same code as the /campaign/august preview so marketing
// only has to remember one key.
const ACCESS_KEY = 'AKASHA-AUG-2026';
const STORAGE_KEY = 'akasha_preview_2026_access';

function PreviewGate({ onUnlock }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setError('');
    if (code.trim().toUpperCase() === ACCESS_KEY.toUpperCase()) {
      try {
        sessionStorage.setItem(STORAGE_KEY, 'true');
      } catch (_) {}
      onUnlock();
    } else {
      setError('Invalid access code. Contact marketing for the current key.');
    }
  };

  return (
    <>
      <Head>
        <title>Confidential Preview, Akasha Yoga Academy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-akasha-white px-5">
        <div className="max-w-md w-full text-center">
          <p
            className="uppercase mb-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.25em',
              color: '#d97a3c',
              fontWeight: 600,
            }}
          >
            Confidential Preview
          </p>
          <h1
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 300,
              marginBottom: '1.5rem',
              color: '#1a1a1a',
            }}
          >
            Course Pages Preview
          </h1>
          <p
            style={{
              color: '#666',
              lineHeight: 1.6,
              marginBottom: '2rem',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            This site is a private preview and is not yet public. Enter
            the access code to view.
          </p>
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Access code"
              autoComplete="off"
              spellCheck="false"
              style={{
                width: '100%',
                border: '1px solid #d0d0d0',
                borderRadius: '999px',
                padding: '12px 20px',
                fontSize: '14px',
                textAlign: 'center',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                outline: 'none',
              }}
            />
            {error ? (
              <p style={{ fontSize: '12px', color: '#c05a1a' }}>{error}</p>
            ) : null}
            <button
              type="submit"
              style={{
                width: '100%',
                background: '#d97a3c',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                padding: '14px 28px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Unlock Preview
            </button>
          </form>
          <p
            style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: '#999',
              marginTop: '2rem',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Akasha Internal · Do Not Share
          </p>
        </div>
      </main>
    </>
  );
}

export default function App({ Component, pageProps }) {
  const [authorized, setAuthorized] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (
      typeof window !== 'undefined' &&
      sessionStorage.getItem(STORAGE_KEY) === 'true'
    ) {
      setAuthorized(true);
    }
  }, []);

  if (!mounted) return null;

  if (!authorized) {
    return <PreviewGate onUnlock={() => setAuthorized(true)} />;
  }

  return <Component {...pageProps} />;
}
