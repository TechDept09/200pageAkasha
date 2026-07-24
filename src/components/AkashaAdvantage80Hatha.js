// Section 17 from the live Wix 80-Hour Advanced Hatha & Pranayama page:
// grey "THE AKASHA ADVANTAGE" (3 items), lotus watermark, mint JOIN CTA.
const MINT = '#75C8AE';
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const ENROLL_URL =
  'https://www.akashayogaacademy.com/80-hr-online-enroll-now-hatha-and-pranayama';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const ITEMS = [
  {
    key: 'award',
    text: 'Rich and interactive curriculum that meets & exceeds official requirements',
    svg: `<svg preserveAspectRatio="xMidYMid meet" viewBox="35 10 130 180" xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true">
<g>
<path d="M133.1 113.4l4.3-15.5 16.4-10.7-7-18.2 7-18.2L137.4 40l-5.1-18.8-19.3 1.1L98 10 83 22.3l-19.3-1.1L58.6 40 42.2 50.7l7 18.2-7 18.2 16.4 10.7 6.7 20.4L35 172.3l24.9-8.3 8 26 32.2-62.1 32.2 62.1 8-26 24.7 8.3-31.9-58.9zm-64.6 63.5l-5.9-18.8-16.9 5.6 25.7-46.9 2.1-.3 8.6-.5 12.6 9.9-26.2 51zm29.8-56.5l-13.1-9.6-.8-.8-11 .5-5.9.3-4.6-16.6-14.5-9.4 6.2-16.1-6.2-16.1 14.5-9.4 4.3-16.3 17.2.8L97.7 17l13.4 10.7 17.2-.8 4.6 16.6 14.5 9.4-6.2 16.1 6.2 16.1-14.5 9.4-4.6 16.6-17.2-1.1-12.8 10.4zm38.6 36.9l-5.9 18.8-27.3-53 9.4-7.5 15.8.8 25.2 46.9-17.2-6z" fill="#E5771E" data-color="1"/>
</g>
</svg>`,
  },
  {
    key: 'book',
    text: 'Professional teachings based on decades of committed research, study & practice',
    svg: `<svg preserveAspectRatio="xMidYMid meet" viewBox="10.411 30.955 178.189 136.945" xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true">
<g>
<path d="M188.3 68.4c0-5.9-1.5-10.2-4.4-12.6-2.6-2.2-5.5-2.2-6.6-2.1H169v-19c0-1.8-1.4-3.3-3.2-3.5C164 31 122.5 27.7 99 53 75.5 27.8 34 31.1 32.2 31.3c-1.8.2-3.2 1.7-3.2 3.5v17.4l-7-.3c-.8 0-4.1 0-7 2.8-3 2.9-4.4 7.5-4.3 13.8-.4 3.4-.3 12.2-.2 37.9.1 18.2.2 36.6.2 37.5 0 .9.1 6.5 4.4 10.9 3 3.1 7.3 4.7 12.6 4.7h43.1c.1 0 10.2.1 12.1 6 .5 1.5 1.8 2.4 3.3 2.4h12.6c.2 0 .4 0 .6-.1.2 0 .4.1.6.1h12.6c1.5 0 2.9-1 3.3-2.4 1.9-5.9 12-6 12.1-6h43.1c5.9 0 10.4-1.7 13.4-5 3.8-4.2 3.7-9.4 3.6-10.6 0-1.9.1-19.7.2-37.4.4-26 .4-34.7 0-38.1zM162 38.1v91c-23.5-3.8-48.6 9.5-59.5 16.3V59.7c17.4-20.8 49.3-21.8 59.5-21.6zm-126 0c10.2-.2 42.1.8 59.5 21.5v85.8c-4-2.5-9.9-5.8-16.9-8.9-12.3-5.4-23.7-8.1-34-8.1-3 0-5.8.2-8.6.7v-91zM14.9 71.9c-.2 0-.4.1-.7.1.2-.1.4-.1.7-.1zm.1-.1c.2 0 .3-.1.5-.2-.2.1-.3.2-.5.2zm.7-.2c.1-.1.3-.1.4-.2-.2.1-.3.1-.4.2zm.5-.3c.2-.1.3-.2.4-.4-.1.1-.2.3-.4.4zm.5-.4c.2-.2.3-.4.5-.6-.2.2-.3.4-.5.6zm.8-1.4c-.1.2-.2.5-.3.7.1-.2.2-.4.3-.7zm163.9 74.8s.3 3.3-1.8 5.5c-1.6 1.8-4.4 2.7-8.2 2.7h-43.1c-.5 0-13.1 0-17.8 8.5h-10.4c-.2 0-.4 0-.6.1-.2 0-.4-.1-.6-.1H88.5c-4.7-8.5-17.2-8.5-17.7-8.5H27.7c-3.4 0-5.9-.8-7.6-2.5-2.4-2.4-2.4-6-2.4-6v-.1c-.2-28-.4-70.4-.1-74.7.1-.3.1-.6.1-.9-.1-4 .6-7 2-8.4.8-.8 1.7-1 2-1l7.3.3v74.2c0 1.1.5 2.1 1.4 2.8.9.7 2 .9 3 .6 14.7-3.8 31.1 1.2 42.3 6.1 12.4 5.4 21.2 11.9 21.3 11.9.1.1.3.2.4.2.2.1.4.2.7.2h.2c.2 0 .5.1.7.1s.5 0 .7-.1h.2c.2-.1.5-.1.7-.3h.1c.1-.1.3-.2.4-.2.1-.1 9-6.5 21.3-11.9 11.2-4.9 27.5-9.9 42.3-6.1 1 .3 2.2 0 3-.6.9-.7 1.4-1.7 1.4-2.8V60.7h9.2c.2 0 .8 0 1.4.5.6.5 1.9 2.2 1.9 7.2 0 .3 0 .5.1.8.3 4.3.1 46.8-.1 74.7-.3.2-.2.3-.2.4zm.1-74.7c.1.3.3.7.5.9-.2-.3-.4-.6-.5-.9zm.6 1l.3.3-.3-.3zm1.6 1.1c-.1 0-.2-.1-.3-.1.1.1.2.1.3.1zm-.5-.2c-.1-.1-.2-.1-.3-.2.1.1.2.2.3.2zm-.4-.3c-.1-.1-.2-.1-.3-.2.1.1.2.2.3.2zm1.2.6c.1 0 .2 0 .3.1-.1 0-.2-.1-.3-.1z" fill="#E5771E" data-color="1"/>
<path d="M50.2 69.6c.2 0 15.7.8 28.3 9 .6.4 1.3.6 1.9.6 1.1 0 2.3-.6 2.9-1.6 1.1-1.6.6-3.8-1-4.8C68 63.5 51.2 62.7 50.5 62.7c-1.9-.1-3.6 1.4-3.6 3.3-.1 1.9 1.4 3.5 3.3 3.6z" fill="#E5771E" data-color="1"/>
<path d="M50.2 87.3c.2 0 15.7.8 28.3 9 .6.4 1.3.6 1.9.6 1.1 0 2.3-.6 2.9-1.6 1.1-1.6.6-3.8-1-4.8C68 81.2 51.2 80.4 50.5 80.4c-1.9-.1-3.6 1.4-3.6 3.3-.1 1.9 1.4 3.5 3.3 3.6z" fill="#E5771E" data-color="1"/>
<path d="M82.3 108c-4.9-3.1-14-6.3-16.7-7.3-1.8-.6-3.8.3-4.4 2.2-.6 1.8.3 3.8 2.2 4.4 5.2 1.8 11.9 4.4 15.2 6.5.6.4 1.2.5 1.9.5 1.2 0 2.3-.6 3-1.6.9-1.5.4-3.7-1.2-4.7z" fill="#E5771E" data-color="1"/>
<path d="M56 98.5c-3.3-.5-5.3-.6-5.4-.6-1.9-.1-3.6 1.4-3.7 3.3-.1 1.9 1.4 3.6 3.3 3.7 0 0 1.8.1 4.7.5h.5c1.7 0 3.2-1.2 3.5-3 .3-1.8-1-3.6-2.9-3.9z" fill="#E5771E" data-color="1"/>
<path d="M116.3 79.1c.6 0 1.3-.2 1.9-.5 3.8-2.4 8-4.4 12.2-5.7 1.8-.6 2.9-2.6 2.3-4.4-.6-1.8-2.6-2.9-4.4-2.3-4.7 1.5-9.5 3.8-13.8 6.5-1.6 1-2.1 3.2-1.1 4.8.6 1 1.7 1.6 2.9 1.6z" fill="#E5771E" data-color="1"/>
<path d="M138 70.7c.2 0 .5 0 .7-.1 4.5-.9 7.7-1 7.8-1 1.9-.1 3.5-1.7 3.4-3.6-.1-1.9-1.6-3.4-3.5-3.4h-.1c-.2 0-3.8.1-8.9 1.1-1.9.4-3.1 2.2-2.8 4.1.3 1.7 1.7 2.9 3.4 2.9z" fill="#E5771E" data-color="1"/>
<path d="M116.3 96.8c.7 0 1.3-.2 1.9-.6 12.6-8.2 28.1-9 28.3-9 1.9-.1 3.4-1.7 3.3-3.6-.1-1.9-1.7-3.4-3.6-3.4-.7 0-17.6.8-31.8 10.1-1.6 1.1-2.1 3.2-1 4.8.6 1.2 1.8 1.7 2.9 1.7z" fill="#E5771E" data-color="1"/>
<path d="M116.3 114.4c.7 0 1.3-.2 1.9-.6 12.6-8.2 28.1-9 28.3-9 1.9-.1 3.4-1.7 3.3-3.6-.1-1.9-1.7-3.4-3.6-3.4-.7 0-17.6.8-31.8 10.1-1.6 1.1-2.1 3.2-1 4.8.6 1.2 1.8 1.7 2.9 1.7z" fill="#E5771E" data-color="1"/>
</g>
</svg>`,
  },
  {
    key: 'manual',
    text: 'Lifetime access to all videos, manuals & training materials',
    svg: `<svg preserveAspectRatio="xMidYMid meet" viewBox="55.281 38.51 89.437 122.979" xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true">
<g>
<path d="M135.403 161.489H64.596c-5.137 0-9.315-4.179-9.315-9.317V47.827c0-5.137 4.178-9.317 9.315-9.317h50.949c2.489 0 4.829.969 6.588 2.729l19.857 19.857a9.254 9.254 0 0 1 2.728 6.588v84.489c.001 5.137-4.178 9.316-9.315 9.316zM64.596 42.237a5.596 5.596 0 0 0-5.59 5.59v104.346a5.597 5.597 0 0 0 5.59 5.59h70.806a5.596 5.596 0 0 0 5.591-5.59V67.684a5.555 5.555 0 0 0-1.638-3.953l-19.857-19.857a5.554 5.554 0 0 0-3.952-1.637h-50.95z" fill="#E5771E" data-color="1"/>
<path d="M142.856 66.46h-16.77c-5.137 0-9.315-4.179-9.315-9.317v-16.77h3.726v16.77a5.597 5.597 0 0 0 5.59 5.59h16.77v3.727z" fill="#E5771E" data-color="1"/>
<path fill="#E5771E" d="M76.192 121.273V125h-4.557v-3.727h4.557z" data-color="1"/>
<path fill="#E5771E" d="M83.645 121.273V125h-4.558v-3.727h4.558z" data-color="1"/>
<path fill="#E5771E" d="M91.099 121.273V125h-4.558v-3.727h4.558z" data-color="1"/>
<path fill="#E5771E" d="M98.552 121.273V125h-4.557v-3.727h4.557z" data-color="1"/>
<path fill="#E5771E" d="M106.005 121.273V125h-4.558v-3.727h4.558z" data-color="1"/>
<path fill="#E5771E" d="M113.459 121.273V125h-4.558v-3.727h4.558z" data-color="1"/>
<path fill="#E5771E" d="M120.911 121.273V125h-4.558v-3.727h4.558z" data-color="1"/>
<path fill="#E5771E" d="M128.365 121.273V125h-4.558v-3.727h4.558z" data-color="1"/>
<path fill="#E5771E" d="M76.192 80.28v3.727h-4.557V80.28h4.557z" data-color="1"/>
<path fill="#E5771E" d="M83.645 80.28v3.727h-4.558V80.28h4.558z" data-color="1"/>
<path fill="#E5771E" d="M91.099 80.28v3.727h-4.558V80.28h4.558z" data-color="1"/>
<path fill="#E5771E" d="M98.552 80.28v3.727h-4.557V80.28h4.557z" data-color="1"/>
<path fill="#E5771E" d="M106.005 80.28v3.727h-4.558V80.28h4.558z" data-color="1"/>
<path fill="#E5771E" d="M113.459 80.28v3.727h-4.558V80.28h4.558z" data-color="1"/>
<path fill="#E5771E" d="M120.911 80.28v3.727h-4.558V80.28h4.558z" data-color="1"/>
<path fill="#E5771E" d="M128.365 80.28v3.727h-4.558V80.28h4.558z" data-color="1"/>
<path fill="#E5771E" d="M128.824 136.49v1.863H90.438v-1.863h38.386z" data-color="1"/>
<path fill="#E5771E" d="M82.986 136.49v1.863h-11.81v-1.863h11.81z" data-color="1"/>
<path d="M90.439 142.08h-7.453a.931.931 0 0 1-.931-.931v-7.453a.93.93 0 0 1 .931-.931h7.453c.514 0 .931.417.931.931v7.453a.93.93 0 0 1-.931.931zm-6.521-1.863h5.59v-5.59h-5.59v5.59z" fill="#E5771E" data-color="1"/>
<path d="M106.363 113.82h-20.18a2.956 2.956 0 0 1-2.953-2.953V94.413a2.955 2.955 0 0 1 2.953-2.953h20.18a2.956 2.956 0 0 1 2.953 2.953v16.453a2.956 2.956 0 0 1-2.953 2.954zm-19.407-3.727h18.634V95.187H86.956v14.906z" fill="#E5771E" data-color="1"/>
<path d="M114.906 110.093c-.198 0-.397-.031-.59-.096l-7.457-2.486 1.179-3.535 5.004 1.668v-6.01l-5 1.667-1.179-3.535 7.453-2.485a1.864 1.864 0 0 1 2.453 1.768v11.18a1.862 1.862 0 0 1-1.863 1.864z" fill="#E5771E" data-color="1"/>
</g>
</svg>`,
  },
];

function AdvantageIcon({ svg }) {
  return (
    <span
      className="inline-flex w-9 h-9 md:w-10 md:h-10 shrink-0 items-center justify-center [&_svg]:w-full [&_svg]:h-full"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export default function AkashaAdvantage80Hatha() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-1/2 -translate-y-1/2 w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em] text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          The Akasha Advantage
        </h2>

        <ul className="mt-10 md:mt-12 max-w-2xl mx-auto space-y-5 md:space-y-6">
          {ITEMS.map((item) => (
            <li key={item.key} className="flex items-center gap-4 md:gap-5">
              <AdvantageIcon svg={item.svg} />
              <span
                className="font-body text-base md:text-lg leading-snug"
                style={{ color: TEXT, fontWeight: 300 }}
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <a
            href={ENROLL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.12em] px-8 md:px-10 py-4 font-body hover:shadow-lg transition-all text-center"
            style={{ backgroundColor: MINT, fontWeight: 600 }}
          >
            Join the Akasha Family
          </a>
        </div>
      </div>
    </section>
  );
}
