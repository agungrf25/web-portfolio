# Network Engineer Portfolio

Website portfolio statis untuk Network Enthusiast / Engineer. Project ini menggunakan **Astro + TypeScript**, tidak memakai PHP, database, login, maupun endpoint upload. Source code, konten, dan konfigurasi deploy berada dalam satu repository.

## Cara paling gampang: publish lewat GitHub Pages

1. Extract folder project ini, lalu buat repository baru di GitHub.
2. Upload **seluruh isi folder project** ke repository (termasuk folder tersembunyi `.github`). Nama branch utama harus `main`.
3. Buka **Settings → Pages** pada repository.
4. Di bagian **Build and deployment → Source**, pilih **GitHub Actions**.
5. Buka tab **Actions**. Workflow `Build and deploy portfolio` akan berjalan otomatis setelah kamu push ke branch `main`.
6. Setelah status workflow berhasil, buka **Settings → Pages** untuk melihat URL website.

Astro dan GitHub Actions akan mendeteksi nama repository dan mengatur base path otomatis. Contohnya, repository `portfolio` akan dipublikasikan pada `https://USERNAME.github.io/portfolio/`. Untuk website utama akun, gunakan nama repository khusus `USERNAME.github.io`.

Setelah setup awal, setiap perubahan yang di-push ke branch `main` akan otomatis di-build dan dipublikasikan kembali.

## Edit profil dan portfolio

Buka `src/data/site.ts`. Ganti placeholder berikut sesuai data milikmu:

- `name`, `role`, `location`, `headline`, `intro`, dan `about`.
- `email` dengan email aktif.
- `socials` dengan URL LinkedIn dan GitHub milikmu. Hapus tautan yang tidak digunakan.
- `focusAreas`, `projects`, dan `toolset` sesuai pengalaman serta tools yang benar-benar kamu kuasai.

Project cards yang disediakan adalah **contoh area lab/eksplorasi**, bukan klaim implementasi atau pencapaian profesional. Ganti dengan studi kasus nyata atau hapus yang tidak relevan.

## Tambah artikel / tips & tricks

Buat file Markdown baru di `src/content/articles/`. Contoh nama file: `vlan-troubleshooting.md`.

```markdown
---
title: "Troubleshooting VLAN untuk pemula"
description: "Catatan singkat saat menganalisis konektivitas antar-VLAN."
pubDate: 2026-11-17
category: "Networking"
tags: ["VLAN", "Switching", "Troubleshooting"]
draft: false
---

Tulis artikel kamu di sini menggunakan Markdown.

## Subjudul

- Poin pertama
- Poin kedua
```

Nama file akan menjadi URL artikel. Gunakan `draft: true` agar artikel belum ditampilkan. Saat artikel siap dipublikasikan, ubah menjadi `draft: false`, lalu commit dan push ke GitHub. Tidak ada kewajiban posting rutin.

## Preview dan build di komputer sendiri

Project menggunakan Node.js 24. Node.js minimal yang didukung paket Astro di project ini adalah `22.23.4`.

```bash
npm install
npm run dev
```

Untuk membuat versi produksi:

```bash
npm run build
npm run preview
```

Hasil website statis ada di folder `dist/`. Untuk hosting statis selain GitHub Pages, upload **isi folder `dist/`** ke document root hosting, misalnya `public_html/`.

## Hosting dengan custom domain (opsional)

Jika ingin menggunakan domain sendiri di GitHub Pages:

1. Tambahkan repository variable bernama `SITE_URL` pada **Settings → Secrets and variables → Actions → Variables**, misalnya `https://portfolio.example.com`.
2. Buat file `public/CNAME` yang hanya berisi nama domain tersebut.
3. Konfigurasikan custom domain di **Settings → Pages** dan arahkan DNS domain sesuai instruksi GitHub.
4. Push perubahan ke branch `main`.

Dengan `SITE_URL` terisi, project otomatis menggunakan root path (`/`) yang sesuai untuk custom domain.

## Struktur folder

```text
network-portfolio/
├── .github/workflows/deploy.yml  # Build dan deploy otomatis ke GitHub Pages
├── public/
│   ├── assets/                   # CSS, JavaScript, dan favicon
│   ├── .htaccess                 # Header dasar untuk Apache/shared hosting
│   └── _headers                  # Header untuk host yang mendukung format ini
├── src/
│   ├── components/               # Header, footer, ilustrasi topologi jaringan
│   ├── content/articles/         # Artikel Markdown
│   ├── data/site.ts              # Profil, project, fokus teknis, social links
│   ├── layouts/                  # Layout halaman
│   ├── pages/                    # Halaman website dan arsip artikel
│   └── utils/paths.ts            # Helper base path GitHub Pages
├── astro.config.mjs
├── package.json
└── README.md
```

## Catatan keamanan

- Website produksi berupa file statis; tidak membutuhkan PHP runtime, database, endpoint upload, login, atau panel admin.
- CSS, JavaScript, dan favicon disajikan dari website sendiri tanpa font atau library browser pihak ketiga.
- `_headers` disertakan untuk platform yang mendukung file konfigurasi tersebut, seperti Cloudflare Pages/Netlify. **GitHub Pages tidak menerapkan custom HTTP headers dari file `_headers` atau `.htaccess`**.
- Aktifkan MFA pada GitHub, gunakan HTTPS, batasi token/akses repository, dan jangan commit password, API key, token, maupun data sensitif.
- Jalankan `npm audit` saat memeriksa dependency dan evaluasi hasilnya sebelum update. Gunakan Node.js LTS yang masih menerima security update.

Website statis mengurangi attack surface karena server tidak menjalankan PHP atau kode aplikasi pada setiap request, tetapi bukan jaminan bebas vulnerability. Keamanan akun GitHub, dependency saat proses build, DNS, konfigurasi hosting, dan proses deployment tetap perlu dijaga.
