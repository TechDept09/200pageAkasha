const LOGO_WHITE =
  'https://static.wixstatic.com/media/c15a18_16e6f60ed35f4e3fa50fc7552ddca6be~mv2.png/v1/crop/x_0,y_12,w_1000,h_529/fill/w_624,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO-WHITE.png';

export default function Footer() {
  const social = [
    {
      n: 'Instagram',
      h: 'https://www.instagram.com/akashayogaacademy',
      i: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      n: 'Facebook',
      h: 'https://www.facebook.com/akashayogaacademy',
      i: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      n: 'YouTube',
      h: '#',
      i: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-akasha-black text-akasha-white/75">
      <div className="section py-16">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <img src={LOGO_WHITE} alt="Akasha Yoga Academy" className="h-14 w-auto mb-4" />
            <p className="text-xs font-body text-akasha-white/55 leading-relaxed max-w-xs">
              World&rsquo;s top-ranked yoga school. Sharing the light of Yoga
              with love &amp; wisdom since 2011.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-body text-akasha-gold uppercase tracking-[0.22em] mb-4">
              Certification
            </h4>
            <p className="text-xs font-body text-akasha-white/55 leading-relaxed">
              Yoga Alliance
              <br />
              Registry ID 87485
              <br />
              Since 2012
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-body text-akasha-gold uppercase tracking-[0.22em] mb-4">
              Contact
            </h4>
            <p className="text-xs font-body text-akasha-white/55 leading-relaxed">
              Akasha Yoga Coaching LLC
              <br />
              1209 Mountain Road PL NE
              <br />
              Albuquerque NM 87110, USA
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-body text-akasha-gold uppercase tracking-[0.22em] mb-4">
              Follow
            </h4>
            <div className="flex gap-2">
              {social.map((s, i) => (
                <a
                  key={i}
                  href={s.h}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.n}
                  className="w-9 h-9 flex items-center justify-center border border-akasha-white/15 text-akasha-white/50 hover:text-akasha-gold hover:border-akasha-gold transition-colors"
                >
                  {s.i}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-akasha-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] font-body text-akasha-white/40 tracking-wide">
            &copy; Akasha Yoga Academy 2011-{new Date().getFullYear()}
          </p>
          <div className="flex gap-5 text-[11px] font-body text-akasha-white/40">
            <a href="https://www.akashayogaacademy.com/privacy-policy-terms-conditions" target="_blank" rel="noreferrer" className="hover:text-akasha-gold transition-colors">
              Privacy
            </a>
            <a href="https://www.akashayogaacademy.com/privacy-policy-terms-conditions" target="_blank" rel="noreferrer" className="hover:text-akasha-gold transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
