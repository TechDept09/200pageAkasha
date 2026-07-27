# Audit Menyeluruh — Akasha Yoga Academy Landing Pages (`200pageAkasha`)

**Tanggal audit:** 17 Juli 2026
**Cakupan:** Arsitektur, keamanan, performa, kualitas kode/duplikasi, SEO, dan tracking/analytics.
**Metode:** Review statis kode di `src/`, `next.config.js`, `package.json`, riwayat git, dan konfigurasi environment (`.env.local.example`). Tidak ada build/deploy/runtime test yang dijalankan.

---

## 1. Ringkasan Eksekutif

Proyek ini adalah kumpulan landing page marketing (Next.js 14, Pages Router) untuk Akasha Yoga Academy, yang menjual beberapa program Yoga Teacher Training (200h, 300h, 80h, retreat, dll). Checkout diproses lewat **Wix Headless Commerce** (`@wix/ecom`, `@wix/redirects`), dan setiap konversi dilacak lewat Meta Pixel + Conversions API, dua properti GA4, dan dua container GTM sekaligus.

Secara keseluruhan, kode menunjukkan kematangan tinggi di sisi **keamanan dasar dan desain tracking/atribusi iklan** — jauh di atas rata-rata landing page marketing biasa. Namun proyek ini nyaris tidak punya *safety net* rekayasa perangkat lunak standar (tidak ada test, lint, CI/CD, atau dokumentasi setup), dan menyimpan duplikasi kode yang cukup besar antara varian halaman "tier" (200h) dan "course" (produk lain). Proyek ini juga sangat erat dengan siklus campaign marketing jangka pendek (hardcoded tanggal promo, kupon, harga), yang wajar untuk landing page taktis, tapi berisiko menumpuk *dead code* dari waktu ke waktu.

**Kesimpulan singkat:** aman untuk dijalankan produksi hari ini, tapi rawan bug regresi saat tim mengubah logic checkout/promo di masa depan karena duplikasi kode dan absennya test/lint. Prioritas perbaikan: konsolidasi komponen enroll/checkout, tambahkan lint dasar, dan dokumentasikan environment variables.

---

## 2. Kelebihan (Strengths)

### 2.1 Keamanan dasar sudah diperhatikan dengan baik
- [next.config.js](next.config.js) menerapkan header keamanan lengkap di semua route: HSTS (1 tahun + preload), `X-Frame-Options`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Cross-Origin-Opener-Policy`, dan `Permissions-Policy` yang mengunci kamera/mikrofon/geolokasi/payment API yang tidak dipakai. Ini persis yang dicek Lighthouse Best Practices, dan jarang ditemukan sudah lengkap di landing page marketing sekelas ini.
- Endpoint webhook [src/pages/api/meta-purchase.js](src/pages/api/meta-purchase.js) menerima payload order dari Wix dan meneruskannya sebagai Purchase event ke Meta CAPI. Implementasinya cukup matang:
  - Verifikasi signature via HMAC SHA-256 dan/atau shared-secret query param, dengan `crypto.timingSafeEqual` untuk mencegah timing attack.
  - PII (email, nama, alamat) di-hash SHA-256 sebelum dikirim ke Meta, sesuai syarat Meta CAPI.
  - Log error me-redact field sensitif (`redactPII`) sebelum ditulis ke Vercel logs.
  - Body parser dimatikan secara sengaja (`bodyParser: false`) supaya raw body tersedia utuh untuk verifikasi HMAC — detail yang mudah terlewat tapi krusial.

### 2.2 Desain tracking/atribusi iklan cukup canggih
- Deduplikasi event Purchase antara browser (Meta Pixel) dan server (CAPI) menggunakan `eventId` yang sama, dijembatani lewat Wix `customFields` pada order ([src/lib/checkout.js](src/lib/checkout.js) baris 60-76, [src/pages/api/meta-purchase.js](src/pages/api/meta-purchase.js) baris 231-233). Ini mencegah Meta menghitung ganda satu transaksi, masalah umum yang sering diabaikan.
- UTM parameter secara sengaja disisipkan dua kali — di URL redirect luar *dan* di dalam `redirectUrl` bersarang milik Wix ([src/lib/checkout.js](src/lib/checkout.js) fungsi `attachUtmToWixRedirect`) — karena penulis kode menyadari Wix men-drop query param saat redirect hop. Ini detail non-obvious yang menunjukkan pemahaman mendalam tentang perilaku pihak ketiga.
- `fbc`/`fbp` cookie diteruskan konsisten dari form → checkout → webhook, menjaga rantai atribusi Meta tetap utuh lintas redirect eksternal (Wix hosted checkout).

### 2.3 Praktik frontend yang solid
- Font dimuat via `next/font/google` (self-hosted, `display: swap`) — menghindari request eksternal ke `fonts.googleapis.com` yang render-blocking.
- Ada penanganan edge-case browser yang jarang dipikirkan: reset state `loading` saat halaman dipulihkan dari `bfcache` via event `pageshow` (lihat komentar "BB:" di [src/components/EnrollForm.js](src/components/EnrollForm.js) baris 32-45) — mengatasi bug nyata "tombol submit macet" saat user klik Back dari Wix checkout.
- Validasi email/nama di sisi klien sebelum checkout, dengan pengecualian yang jelas untuk varian *payment plan* yang route ke halaman produk Wix native.

### 2.4 Dependency minim dan terkini
- `package.json` hanya berisi 6 dependency produksi (Wix SDK suite + Next + React) dan 3 dev dependency (Tailwind). Tidak ada bloat. Next 14.2.15 dan React 18.3.1 keduanya versi yang relatif baru dan tidak diketahui punya CVE terbuka yang relevan untuk use-case ini.

### 2.5 Dokumentasi inline yang menjelaskan "kenapa", bukan cuma "apa"
- Komentar di seluruh basis kode (terutama [src/lib/saleConfig.js](src/lib/saleConfig.js), [src/lib/tiers.js](src/lib/tiers.js), [src/lib/checkout.js](src/lib/checkout.js)) secara konsisten menjelaskan keputusan bisnis dan alasan teknis (misalnya kenapa Zoom harus disebut "sessions" bukan "classes", kenapa `shippingInfo` dummy diperlukan untuk produk digital). Ini nilai jual besar untuk *maintainability* saat tim berganti.

---

## 3. Kelemahan (Weaknesses)

### 3.1 Tidak ada testing sama sekali — **Risiko tinggi**
Tidak ditemukan satu pun file `*.test.js`, `*.spec.js`, atau folder `__tests__`. Tidak ada CI/CD (`.github/workflows` tidak ada). Artinya:
- Setiap perubahan (harga, kupon, tanggal sale window, logic checkout) di-deploy tanpa jaring pengaman otomatis.
- Bug regresi (misalnya salah kalkulasi harga, atau `productId` yang salah ke-mapping) hanya terdeteksi manual atau setelah user melapor.
- Fungsi kritis seperti `getActiveWindow`, `pickTotal` (parsing bentuk order Wix yang bervariasi di `meta-purchase.js`), dan `attachUtmToWixRedirect` adalah kandidat ideal untuk unit test karena logic-nya presisi dan mudah salah tanpa disadari.

### 3.2 Tidak ada ESLint/Prettier config — **Risiko menengah**
Tidak ada file `.eslintrc*` di root, padahal `next lint` biasanya tersedia default di project Next.js. Tanpa ini, tidak ada jaring pengaman untuk unused variable, missing key di list render, dependency array yang salah di `useEffect`, dll — kelas bug yang lazim di React.

### 3.3 Duplikasi kode signifikan — **Risiko menengah-tinggi, utang teknis terbesar**
Proyek punya dua "jalur" komponen yang paralel: satu untuk tier 200h (`src/components/*.js`) dan satu untuk course lainnya (`src/components/course/*.js`), dan keduanya nyaris identik copy-paste:

| Tier version | Course version | Kesamaan |
|---|---|---|
| [EnrollForm.js](src/components/EnrollForm.js) (241 baris) | [course/CourseEnrollForm.js](src/components/course/CourseEnrollForm.js) (224 baris) | ~95% identik — validasi, `localStorage` staging, tracking pixel, struktur JSX form semua diduplikasi persis, hanya sumber data (`tier` vs `course` prop) yang beda |
| `SiteNav.js` | `course/CourseNav.js` | Struktur nav sama |
| `Curriculum.js` | `course/CourseCurriculum.js` | Layout kurikulum sama |
| `Teachers.js` | `course/CourseTeachers.js` | Layout pengajar sama |
| `StickyCTA.js` | `course/CourseStickyCTA.js` | CTA sticky sama |
| `Testimonials.js` | `course/CourseTestimonials.js` | Layout testimoni sama |

**Dampak konkret:** komentar "BB:" tentang bug `bfcache`/`pageshow` di baris 32 `EnrollForm.js` sudah ditempel manual juga di `CourseEnrollForm.js` — tanda bahwa fix bug pun harus diulang manual di setiap file duplikat. Kalau ada bug checkout baru ditemukan, risiko tinggi hanya salah satu dari dua file yang diperbaiki.

### 3.4 Tidak menggunakan `next/image` — **Risiko rendah-menengah, peluang performa**
`next.config.js` sudah mengonfigurasi `images.remotePatterns` untuk `static.wixstatic.com`, mengindikasikan niat memakai optimasi gambar Next.js — tapi implementasi nyatanya memakai tag `<img>` mentah di semua tempat (contoh: [src/components/hub/CourseGridCard.js](src/components/hub/CourseGridCard.js) baris 30, juga di `Teachers.js`, `Testimonials.js`, `Hero.js`, `WhyAkasha.js`, dll). Konfigurasi `remotePatterns` saat ini jadi mati fungsi. Akibatnya:
- Tidak ada responsive `srcset` otomatis per breakpoint.
- Tidak ada lazy-loading yang dikelola Next (meski beberapa sudah pakai `loading="lazy"` manual).
- Tidak ada konversi otomatis ke AVIF/WebP oleh Next (walau URL Wix sendiri sudah menyisipkan `enc_avif` di query string, jadi dampaknya sebagian sudah termitigasi oleh Wix CDN).

### 3.5 Overhead tracking script yang berat — **Risiko menengah untuk performa**
[src/pages/_app.js](src/pages/_app.js) memuat di setiap halaman: Meta Pixel, GA4 property #1, GA4 property #2, GTM container #1, GTM container #2 — total 5 script pelacakan pihak ketiga, semua `strategy="afterInteractive"`. Ini:
- Menambah beban parsing/eksekusi JS di setiap page load, berpotensi menurunkan skor Core Web Vitals (terutama di mobile/koneksi lambat, yang relevan karena target pasar termasuk negara berkembang).
- Menimbulkan pertanyaan governance: dua GA4 + dua GTM berjalan paralel karena alasan historis ("marketing menambahkan container sendiri") — bukan karena kebutuhan teknis. Ini titik rawan biaya maintenance dan potensi double-counting metric non-Purchase.

### 3.6 Webhook fail-open secara default — **Risiko keamanan menengah, kondisional**
Di [src/pages/api/meta-purchase.js](src/pages/api/meta-purchase.js) baris 178-190: jika `WIX_WEBHOOK_SECRET` tidak diset di environment, verifikasi signature **dilewati sepenuhnya** dan request diterima tanpa otentikasi apa pun. Ini didesain sebagai fallback sementara ("fail-open until Wix Automation is wired up"), tapi:
- Kalau env var ini lupa diset ulang setelah rotasi secret, atau hilang saat migrasi environment (Vercel preview/staging baru, dsb), endpoint jadi terbuka untuk siapa pun mengirim event Purchase palsu — bisa membakar kuota Meta CAPI dan merusak data atribusi iklan (persis risiko yang disebut di komentar `.env.local.example` baris 47-50 sendiri).
- Tidak ada alerting/monitoring yang memberi tahu tim kalau kondisi fail-open ini aktif di production.

### 3.7 Konten & konfigurasi campaign tercampur di kode — **Risiko operasional**
- [src/lib/courses.js](src/lib/courses.js) (504 baris) menyimpan seluruh copy marketing, testimoni, harga, learning outcomes, dan tanggal sale window sebagai literal JavaScript. Komentar di file ini sendiri menyebut "Hardcoded today, designed to map cleanly to a CMS row later" — niat baik, tapi belum terealisasi, sehingga setiap perubahan harga/promo/testimoni butuh developer + deploy, bukan sekadar tim marketing yang mengubah konten.
- Tanggal dan window sale campaign terduplikasi di banyak tempat dengan nama berbeda: `STOREWIDE_WINDOWS`/`STOREWIDE_PHASES` di `courses.js`, `saleWindows`/`salePhases` di `tiers.js`, `SALE_END`/`SALE_REGULAR_PRICE` terpisah di `saleConfig.js`, plus `JULY_LAUNCH_ISO` di `julyCampaign.js`. Riwayat git (`git log`) menunjukkan pola commit "phase 2", "backup phase", "rotate voucher" yang sering — tanda campaign berubah cepat, tapi arsitektur konfigurasinya tidak terpusat sehingga rawan salah satu tempat terlewat saat rotasi promo.

### 3.8 Tidak ada dokumentasi proyek (README) — **Risiko onboarding**
Tidak ditemukan `README.md` di root. Satu-satunya dokumentasi setup adalah komentar di [.env.local.example](.env.local.example). Developer baru tidak punya panduan singkat: cara `npm run dev`, struktur folder, mapping produk-ke-Wix, atau cara menambah course baru.

### 3.9 State staging via `localStorage` yang rentan salah ketik — **Risiko rendah**
Pola `localStorage.setItem('pendingPurchase_courseName', ...)`, dst, diulang manual persis sama di `EnrollForm.js` dan `CourseEnrollForm.js` (5 key string literal per file). Tidak ada konstanta terpusat untuk key ini — risiko typo yang membuat `thank-you`/`index.js` gagal membaca data Purchase secara diam-diam (tanpa error yang kelihatan).

---

## 4. Rekomendasi Prioritas

Diurutkan dari rasio dampak/effort tertinggi:

1. **Konsolidasi komponen enroll/checkout duplikat.** Gabungkan `EnrollForm.js` + `CourseEnrollForm.js` (dan pasangan duplikat lain: Nav, Curriculum, Teachers, StickyCTA, Testimonials) menjadi satu komponen yang menerima data generik (`{ title, plans, slug }`) baik dari `tier` maupun `course`. Ini menghapus ~450+ baris duplikat dan menjadikan bug fix cukup sekali.
2. **Tambahkan ESLint config dasar** (`next lint` / `eslint-config-next`) dan jalankan sekali untuk baseline, supaya bug kelas React umum (missing deps, unused var) tertangkap sebelum production.
3. **Migrasikan gambar utama ke `next/image`** (hero, course grid, teacher photos) untuk memanfaatkan `remotePatterns` yang sudah dikonfigurasi tapi belum dipakai.
4. **Tulis README singkat**: langkah setup lokal, daftar env var per fungsi (kelompokkan sesuai `.env.local.example` yang sudah cukup baik), cara menambah course/tier baru, dan cara deploy ke Vercel.
5. **Audit ulang kebutuhan dual GA4 + dual GTM.** Konfirmasi ke tim marketing apakah kedua container/property masih dipakai aktif; jika salah satu sudah tidak dipantau, hapus untuk mengurangi beban JS di setiap halaman.
6. **Perkuat jalur fail-open webhook**: pastikan `WIX_WEBHOOK_SECRET` selalu diset di semua environment (production **dan** preview Vercel), dan tambahkan log warning eksplisit saat startup/request jika secret kosong, supaya kondisi fail-open tidak diam-diam aktif tanpa disadari.
7. **Sentralisasi tanggal/window campaign** ke satu sumber kebenaran (misalnya satu file `campaignSchedule.js` yang di-import oleh `courses.js`, `tiers.js`, `saleConfig.js`, `julyCampaign.js`), mengurangi risiko lupa update satu tempat saat rotasi promo.
8. **Tambahkan unit test minimal** untuk fungsi logic murni yang berisiko tinggi salah tanpa test: `getActiveWindow`/`isSaleActive` ([saleConfig.js](src/lib/saleConfig.js)), `pickTotal`/`extractOrder` ([meta-purchase.js](src/pages/api/meta-purchase.js)), dan `attachUtmToWixRedirect` ([checkout.js](src/lib/checkout.js)).
9. **Pertimbangkan migrasi konten campaign ke CMS ringan** (Wix CMS/Content Manager yang sudah tersedia karena proyek sudah pakai Wix, atau alternatif seperti sebuah JSON/YAML config yang di-fetch saat build) supaya tim marketing bisa mengubah harga/copy tanpa menunggu developer deploy.

---

## 5. Lampiran

### 5.1 Statistik ukuran file (baris kode, 25 file terbesar)

```
102  src/components/Hero.js
110  src/components/Footer.js
112  src/components/CertifiedTeacherIntro.js
112  src/pages/200h-premium.js
115  src/components/SiteNav.js
119  src/lib/tiers.js
124  src/components/hub/CourseGridCard.js
134  src/pages/200h-essential.js
137  src/components/WhyAkasha.js
139  src/components/Curriculum.js
142  src/components/course/CourseTeachers.js
142  src/pages/thank-you.js
157  src/components/hub/HubHero.js
169  src/pages/_app.js
174  src/components/Testimonials.js
180  src/lib/checkout.js
181  src/components/hub/MainProducts.js
224  src/components/course/CourseEnrollForm.js
235  src/components/campaign/CampaignBonuses.js
241  src/components/EnrollForm.js
241  src/lib/julyCampaign.js
297  src/pages/api/meta-purchase.js
313  src/components/course/CourseLanding.js
504  src/lib/courses.js
```

Total kode di `src/`: ~6.500 baris.

### 5.2 Dependency (dari `package.json`)

**Production:**
- `@wix/ecom` ^1.0.2107
- `@wix/redirects` ^1.0.116
- `@wix/sdk` ^1.21.12
- `@wix/stores` ^1.0.802
- `next` ^14.2.15
- `react` / `react-dom` ^18.3.1

**Dev:**
- `autoprefixer` ^10.4.20
- `postcss` ^8.4.49
- `tailwindcss` ^3.4.17

Tidak ada dependency testing, linting, atau type-checking (TypeScript tidak dipakai — proyek 100% JavaScript dengan `jsconfig.json` untuk path alias `@/*` saja, tanpa type safety).

### 5.3 Struktur folder

```
src/
  components/       komponen halaman tier 200h + shared (Nav, Footer, dst.)
    campaign/        komponen khusus campaign July
    course/           varian komponen untuk course non-200h (duplikat parsial dari root)
    hub/              komponen halaman index/hub katalog
  hooks/              5 custom hook (countdown, UTM, sale status, dll.)
  lib/                logic non-UI: checkout, Wix client, config tier/course/sale, tracking
  pages/              9 landing page + 1 API route (Pages Router)
  styles/             globals.css (Tailwind)
scripts/              3 skrip diagnostik/testing manual untuk Wix checkout (dijalankan manual via node, bukan bagian dari test suite otomatis)
```

### 5.4 Deployment
Proyek dikonfigurasi untuk Vercel (`.vercel` di `.gitignore`, tidak ada `vercel.json` kustom — memakai deteksi otomatis Next.js oleh Vercel). Tidak ditemukan pipeline CI/CD terpisah (GitHub Actions dsb.); deployment kemungkinan mengandalkan integrasi Git otomatis Vercel tanpa gate test/lint sebelum production.
