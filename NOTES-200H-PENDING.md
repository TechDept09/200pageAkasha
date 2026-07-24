# 200-Hour YTT Page — Pending / Follow-Up Notes

Status: Halaman `src/pages/200h-essential.js` sudah direplikasi penuh section-by-section
sesuai halaman Wix `akashayogaacademy.com/200hr-yoga-teacher-training-online`.
Dokumen ini mencatat hal-hal yang **belum selesai / perlu keputusan**.

---

## 1. Aset gambar yang belum persis

### Bonus #1 — "Design Your Schedule" (`src/components/Bonuses.js`)
- Gambar tablet-jadwal (bar oranye) di Wix **dirender client-side** dan tidak ada
  di HTML statis, jadi tidak bisa diambil otomatis.
- Sementara memakai mockup **AKASHADEVICES.png** sebagai pengganti.
- **Butuh:** file gambar asli tablet-jadwal, atau konfirmasi pakai mockup ini.

---

## 2. Video yang masih placeholder

### "Watch This Video" (`src/components/IntroVideo.js`)
- `videoId` masih placeholder (`RkAZ2x5kWP8`).
- **Butuh:** YouTube ID video "Intro To 200-Hour Online Yoga TTC" dari Wix.

### Testimoni video Silvia & Rosie (`src/components/TopRankedSchool.js`)
- `youtubeId: null` → masih poster placeholder.
- **Butuh:** 2 YouTube ID (Silvia, Rosie).

---

## 3. Form / backend yang belum tersambung

### Brochure download (`src/components/BrochureDownload.js`)
- Form (nama + email) masih **stub client-side**, belum kirim ke API / belum
  mengirim brosur.
- **Butuh:** endpoint lead-capture + pengiriman brosur (email/CRM).

---

## 4. Link yang belum final (href asli Wix tidak tersedia di HTML statis)

| Lokasi | Tombol | Sekarang mengarah ke | Catatan |
|---|---|---|---|
| `FaqShineTeaser.js` | GO TO FAQ | `#faq` (dead, `FAQ` sudah dilepas dari halaman) | Wix mengarah ke halaman `/faq` terpisah |
| `Graduates.js` | More Testimonials | `/200h-essential/enroll` | href review asli belum diketahui; sekarang numpang ke CTA enroll (bukan tujuan idealnya) |
| Semua tombol "ENROLL NOW" / "I Want To Be Part Of This" (16 komponen essential-only) | — | `/200h-essential/enroll` | lihat §8, halaman enrollment baru |
| `BookACall.js` / `FaqShineTeaser.js` | BOOK A CALL | URL Calendly | konfirmasi URL Calendly benar |

- **Butuh:** konfirmasi URL final untuk FAQ, halaman review, dan Calendly.

---

## 5. Harga: tampilan vs checkout

- Band promo (SummerOfferBand, FinalRelyOn, BringBaliHomeBanner, dan sekarang
  `PlanSelector` di halaman enrollment) menampilkan **US$299** agar persis dengan
  Wix (`DISPLAY_PRICE` constant di tiap file).
- Harga checkout sebenarnya di config = **US$290** (`tier.promoPrice`, setelah kode
  CARE30) dan `regularPrice` = **US$1190**.
- **Keputusan diperlukan:** samakan angka display ke US$290, atau biarkan US$299
  (beda dengan harga checkout). Ini sekarang juga tampil di kartu Essential pada
  `/200h-essential/enroll` — begitu diputuskan, tinggal ganti satu-satu konstanta
  `DISPLAY_PRICE`/`SUMMER_PRICE` di 4 file di atas.

---

## 6. Dua section garansi (sengaja, bukan bug)

Dari HTML Wix, garansi muncul **dua kali** dengan layout berbeda — keduanya sudah
dibuat:
- `MoneyBackGuarantee.js` — versi ringkas (blok "Absolute Freedom" + "Empower Your
  Journey"), setelah quote Sarah.
- `RiskFreeGuarantee.js` — versi lengkap ("Risk-Free Booking" + "Absolute Freedom
  Guarantee" + "Register Now – Decide Later"), dekat akhir.
- **Konfirmasi:** apakah keduanya memang mau dipertahankan.

---

## 7. QA visual yang disarankan

- Jalankan `npm run dev` lalu bandingkan tiap section dengan Wix (butuh
  `full_network` agar `next/image` bisa fetch `static.wixstatic.com`).
- Cek responsif mobile (grid 2-kolom → 1-kolom, kartu bonus, foto bulat).
- Cek urutan section akhir-ke-akhir vs Wix.

---

## 8. Halaman enrollment — DONE

- Route baru `/200h-essential/enroll` (`src/pages/200h-essential/enroll.js`):
  `PlanSelector` (kartu Essential vs Premium, pixel-matched ke Wix
  `/enroll-now`) → `RiskFreeGuarantee` → form `EnrollForm`/`CheckoutForm` yang
  sudah ada (tidak ada perubahan ke `checkout.js`/`wixClient.js`/`pendingPurchase.js`).
- Semua tombol "Enroll Now" / "Pricing" di `/200h-essential` sekarang mengarah
  ke `/200h-essential/enroll` — 16 komponen essential-only di-hardcode
  langsung, 6 komponen shared (`Hero`, `SiteNav`, `Testimonials`, `Curriculum`,
  `WhyAkasha`, `Steps`) pakai `tier.ctaHref` (baru, di `tiers.js`) supaya
  `/200h-premium` (dan halaman course lain) tidak ikut berubah — sudah
  diverifikasi dev-server tetap 200 dan link `#pricing`-nya premium tidak
  tersentuh.
- **Keputusan konten (dikonfirmasi user):** `ESSENTIAL_BULLETS` di `tiers.js`
  diubah jadi 7 item **verbatim dari Wix**, termasuk MBG dan bonus — ini
  membatalkan catatan tim sebelumnya (2 Jul) yang secara eksplisit
  mengeluarkan MBG & bonus dari Essential. `PREMIUM_BULLETS` tidak diubah.
  Perubahan ini otomatis mengalir ke komponen mana pun yang membaca
  `tier.bullets` untuk tier Essential (mis. `Pricing.js`, saat ini hanya
  di-mount di `200h-premium.js` dengan tier Premium, jadi belum ada
  dampak langsung — tapi kalau nanti Essential pakai `Pricing.js` juga,
  bullet-nya sudah otomatis 7 item ini).
- `FAQ`, `TrustStrip`, `Footer`, `StickyCTA` tetap dilepas dari
  `/200h-essential` (lihat keputusan sebelumnya) — tombol "Go to FAQ" di
  `FaqShineTeaser.js` tetap dead link untuk saat ini.

---

## 9. Halaman enrollment — FULL PIXEL-PERFECT (Wix `/enroll-now`) — DONE

`/200h-essential/enroll` sekarang mereplika **seluruh** halaman Wix
`/enroll-now` di atas kanvas abu-abu hangat (`#8b8a86`) + watermark lotus di
kiri (aksen: oranye `#E5771E`, teal `#75C8AE`). Urutan section (persis Wix):

1. `EnrollHero` (foto shala Bali, judul, "Bring Bali Home", badge 75% OFF, pill
   Summer Wellness US$1190 → US$299)
2. `PlanSelector` — countdown "Discount ends in" (ke 31 Jul) + "Choose a plan…"
   + kartu Essential (ribbon MOST POPULAR, foto, 7 bullet, tombol ORANYE) vs
   Premium (foto, 7 fitur, tombol TEAL). Foto: Essential `cd7168_11af1911…`,
   Premium `cd7168_eea3bf63…`.
3. `FeatureComparison` (NEW) — tabel "See What's Included…", header teal, 12 baris.
4. `Bonuses` `theme="enroll"` — 14 bonus (transparan, reuse komponen main page).
5. `EnrollSummerBand` (green, +bonus line)
6. `ShineTerms` (NEW) — "WE WANT TO SEE YOU SHINE" + Terms of Service.
7. `EnrollVideo` "Watch This Video To Learn More About Us"
8. `EnrollSummerBand` (orange)
9. `Pillars` (NEW) — Train With Masters / Learn At Your Own Pace / Join Our
   Community / Transform Your Life (foto bulat gold-ring).
10. `OfficiallyCertified` (NEW) — badge RYS200 + E-RYT500 + teks.
11. `RiskFreeGuarantee` `theme="enroll"` — MBG + badge emas + Register Now.
12. `EnrollVideo` "Watch This Virtual Tour" (+ deskripsi + tombol Enroll)
13. `Graduates` `theme="enroll"` — "Testimonials / Hear from our 1100+ graduates".
14. `EnrollFinalShine` (NEW) — "WE WANT TO SEE YOU SHINE" + "You Can Rely On".
15. `EnrollSummerBand` (orange, final)
16. ~~Form checkout inline~~ **DIHAPUS** (permintaan user). Sekarang semua
    tombol "Enroll Now" (kartu plan, pill hero, semua summer band, video
    "Virtual Tour") + "Register Now – Decide Later" (MBG) **membuka modal**
    `EnrollModal` yang berisi `EnrollForm`/`CheckoutForm` — tidak lagi
    scroll ke bawah. Modal punya toggle tier Essential/Premium di dalamnya,
    tutup via tombol ×, klik backdrop, atau Esc; body scroll di-lock saat
    modal terbuka. Tombol kartu Essential/Premium otomatis set tier lalu buka
    modal; tombol generik buka modal dengan tier yang sedang aktif.

Komponen shared yang diberi prop `theme='enroll'` (default `'light'` = main
page tak berubah, sudah diverifikasi `/200h-essential` & `/200h-premium` = 200):
`Bonuses`, `RiskFreeGuarantee`, `Graduates`.

### PENDING di halaman enroll
- **Video ID belum benar:** kedua `EnrollVideo` pakai placeholder
  `RkAZ2x5kWP8`. Butuh ID YouTube asli "Intro To 200-Hour Online Yoga TTC" &
  "Curriculum / Virtual Tour" (di-load client-side di Wix, tak ada di HTML
  statis). Ganti `VIDEO_INTRO` / `VIDEO_TOUR` di `enroll.js`.
- **Bonus #1 image** masih placeholder `AKASHADEVICES.png` (lihat catatan
  `Bonuses.js`).
- **Harga display US$299 vs checkout US$290** — sama seperti section lain,
  belum diseragamkan (keputusan menunggu).
