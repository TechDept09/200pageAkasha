// src/lib/fbCookies.js
export function getMetaCookies() {
  if (typeof document === 'undefined') return { fbc: '', fbp: '' };

  const cookies = document.cookie.split(';').reduce((acc, c) => {
    const [k, ...v] = c.trim().split('=');
    acc[k] = v.join('=');
    return acc;
  }, {});

  return {
    fbc: cookies['_fbc'] || '',
    fbp: cookies['_fbp'] || '',
  };
}
