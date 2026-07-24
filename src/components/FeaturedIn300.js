// "Featured in:" press-logo wall from the live Wix 300-Hour page, over a dark
// tropical foliage background. Logo assets are the white versions used on Wix.
const BG =
  'https://static.wixstatic.com/media/cd7168_ddde6c9718d6411a8701c7729fa8a0d0~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/foliage.jpg';

const LOGOS = [
  {
    "src": "https://static.wixstatic.com/media/cd7168_9448b8294b484bd5a83a58718a812af2~mv2.png/v1/crop/x_0,y_35,w_825,h_289/fill/w_324,h_114,al_c,q_85,enc_avif,quality_auto/beyogi.png",
    "alt": "beYogi",
    "w": 162,
    "h": 57
  },
  {
    "src": "https://static.wixstatic.com/media/cd7168_258e64fb744d4f68936b4804ab32e905~mv2.png/v1/crop/x_401,y_389,w_279,h_302/fill/w_212,h_232,al_c,q_85,enc_avif,quality_auto/mitm.png",
    "alt": "MITM – Mind Is The Master",
    "w": 106,
    "h": 116
  },
  {
    "src": "https://static.wixstatic.com/media/cd7168_132cc4ccf1534e66b6e3c538e4cd3e9d~mv2.png/v1/crop/x_0,y_12,w_972,h_227/fill/w_488,h_114,al_c,q_85,enc_avif,quality_auto/bookyogaretreats.png",
    "alt": "BookYogaRetreats",
    "w": 244,
    "h": 57
  },
  {
    "src": "https://static.wixstatic.com/media/cd7168_55ec72a6c7004ff684a6d4531fd56639~mv2.png/v1/fill/w_336,h_74,al_c,q_85,enc_avif,quality_auto/drishti.png",
    "alt": "Drishti Beats",
    "w": 168,
    "h": 37
  },
  {
    "src": "https://static.wixstatic.com/media/cd7168_80ec49ce8ae24442ba75c38abc2e79db~mv2.png/v1/fill/w_248,h_160,al_c,q_85,enc_avif,quality_auto/yogitimes.png",
    "alt": "Yogi Times",
    "w": 124,
    "h": 80
  },
  {
    "src": "https://static.wixstatic.com/media/cd7168_dd6899c84b144cd8afdc4cc99789c5a4~mv2.png/v1/crop/x_131,y_445,w_810,h_196/fill/w_612,h_148,al_c,q_85,enc_avif,quality_auto/bytt.png",
    "alt": "BookYogaTeacherTraining",
    "w": 204,
    "h": 49
  },
  {
    "src": "https://static.wixstatic.com/media/cd7168_70e29283a8894528a9856c4ee0ac71cf~mv2.png/v1/crop/x_0,y_12,w_907,h_171/fill/w_604,h_114,al_c,q_85,enc_avif,quality_auto/bookretreats.png",
    "alt": "BookRetreats",
    "w": 201,
    "h": 38
  },
  {
    "src": "https://static.wixstatic.com/media/cd7168_c889be6400e84084ba44abff25c91ea1~mv2.png/v1/crop/x_24,y_0,w_760,h_332/fill/w_306,h_134,al_c,q_85,enc_avif,quality_auto/yogajournal.png",
    "alt": "Yoga Journal",
    "w": 153,
    "h": 67
  },
  {
    "src": "https://static.wixstatic.com/media/cd7168_f035bfb483374f0b9fb19f4b26753849~mv2.png/v1/crop/x_180,y_427,w_742,h_229/fill/w_550,h_170,al_c,q_85,enc_avif,quality_auto/taylor.png",
    "alt": "Taylor's Tracks",
    "w": 183,
    "h": 57
  },
  {
    "src": "https://static.wixstatic.com/media/cd7168_80b69beb7bd54641b24cfc8433ef5a40~mv2.png/v1/crop/x_120,y_0,w_840,h_187/fill/w_602,h_134,al_c,q_85,enc_avif,quality_auto/logo10.png",
    "alt": "Featured press logo",
    "w": 200,
    "h": 45
  },
  {
    "src": "https://static.wixstatic.com/media/cd7168_2e1c48f28d4f48a59bbf67bbbf1706d7~mv2.png/v1/crop/x_0,y_17,w_1079,h_298/fill/w_688,h_190,al_c,q_85,enc_avif,quality_auto/thrive.png",
    "alt": "Thrive Global",
    "w": 229,
    "h": 63
  },
  {
    "src": "https://static.wixstatic.com/media/cd7168_79417c88a75f4208b408888923d4b611~mv2.png/v1/fill/w_336,h_74,al_c,q_85,enc_avif,quality_auto/music.png",
    "alt": "Music of Wisdom",
    "w": 168,
    "h": 37
  }
];

export default function FeaturedIn300() {
  return (
    <section className="relative overflow-hidden min-h-[420px] md:min-h-[520px] flex items-center">
      <img
        src={BG}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 section py-14 md:py-20 w-full text-center">
        <h2
          className="font-heading text-akasha-white"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 300 }}
        >
          Featured in:
        </h2>

        <div className="mt-10 md:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 md:gap-y-12 items-center justify-items-center max-w-5xl mx-auto">
          {LOGOS.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              decoding="async"
              className="max-h-12 md:max-h-14 w-auto object-contain opacity-95"
              style={{ maxWidth: '180px' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
