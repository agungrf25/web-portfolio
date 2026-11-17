/**
 * EDIT PROFIL WEBSITE DI SINI.
 * Ganti placeholder, email, tautan, dan deskripsi dengan informasi milikmu.
 */
export const site = {
  name: 'Ramadhan Agung Rifai',
  shortName: 'NET//',
  role: 'Network Enthusiast',
  location: 'Indonesia',
  email: 'hello@yourdomain.com',
  domain: import.meta.env.SITE || 'https://yourdomain.com',
  headline: 'Merancang koneksi.\nMenjaga sistem tetap andal.',
  intro:
    'Ruang personal untuk berbagi perjalanan, eksplorasi, dan catatan seputar networking, cybersecurity, serta infrastruktur teknologi.',
  about:
    'Saya tertarik pada bagaimana jaringan, keamanan, dan infrastruktur bekerja sebagai satu kesatuan. Di sini saya mendokumentasikan hal-hal yang saya pelajari, lab yang saya eksplorasi, serta insight teknis yang mungkin berguna untuk orang lain.',
  availability: 'Terbuka untuk diskusi teknis',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ramadhan-agung-rifai', short: 'in' },
    { label: 'GitHub', href: 'https://github.com/agungrf25', short: 'gh' },
  ],
};

export const focusAreas = [
  {
    number: '01',
    title: 'Networking & Infrastructure',
    description:
      'Routing, switching, wireless, network architecture, troubleshooting, dan fondasi infrastruktur yang stabil.',
    tags: ['Routing & Switching', 'LAN / WAN', 'Wireless', 'Infrastructure'],
  },
  {
    number: '02',
    title: 'Cybersecurity & Zero Trust',
    description:
      'Eksplorasi firewall, secure access, proteksi aplikasi, identity-aware access, dan pendekatan Zero Trust.',
    tags: ['Firewall', 'WAF', 'ZTNA', 'DLP'],
  },
  {
    number: '03',
    title: 'Monitoring & Observability',
    description:
      'Memahami pola trafik, membaca telemetry, melakukan investigasi, dan mengubah data menjadi insight.',
    tags: ['Network Visibility', 'Traffic Analysis', 'Logs', 'Troubleshooting'],
  },
];

// Contoh area eksplorasi. Ganti atau tambah dengan project dan studi kasus milikmu.
export const projects = [
  {
    index: 'LAB / 01',
    title: 'Secure Access & Zero Trust',
    kind: 'Security Lab',
    description:
      'Eksplorasi pendekatan akses berbasis identitas, policy, device posture, dan konektivitas private application.',
    stack: ['Cloudflare One', 'ZTNA', 'WARP'],
    mark: 'ZT',
  },
  {
    index: 'LAB / 02',
    title: 'Network Visibility & Investigation',
    kind: 'Monitoring Lab',
    description:
      'Catatan eksperimen untuk memahami komunikasi antarperangkat, pola trafik, anomali, dan alur investigasi.',
    stack: ['ExtraHop', 'NPM', 'NDR'],
    mark: 'NV',
  },
  {
    index: 'LAB / 03',
    title: 'Enterprise Network & Voice',
    kind: 'Infrastructure Lab',
    description:
      'Eksplorasi infrastruktur jaringan, switching, wireless, virtualisasi, dan komunikasi enterprise.',
    stack: ['Avaya', 'Ruckus', 'Sophos'],
    mark: 'EN',
  },
];

export const toolset = [
  'Avaya',
  'Cloudflare',
  'ExtraHop',
  'Palo Alto',
  'Ruckus',
  'Sophos',
];
