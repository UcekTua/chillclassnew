export const SIPA_MATERIALS = [
  { id: "idx", title: 'Index / Homepage Materi', category: 'Interactive Module', ai_summary: '', file_url: '/sipa/index.html' },
  { id: "ch01", title: 'Chapter 01: Accounting in Action', category: 'Interactive Module', ai_summary: '', file_url: '/sipa/ch01.html' },
  { id: "ch02", title: 'Chapter 02: The Recording Process', category: 'Interactive Module', ai_summary: '', file_url: '/sipa/ch02.html' },
  { id: "ch03", title: 'Chapter 03: Adjusting the Accounts', category: 'Interactive Module', ai_summary: '', file_url: '/sipa/ch03.html' },
  { id: "ch04", title: 'Chapter 04: Completing the Accounting Cycle', category: 'Interactive Module', ai_summary: '', file_url: '/sipa/ch04.html' },
  { id: "ch05", title: 'Chapter 05: Accounting for Merchandising Operations', category: 'Interactive Module', ai_summary: '', file_url: '/sipa/ch05.html' },
  { id: "ch06", title: 'Chapter 06: Inventories', category: 'Interactive Module', ai_summary: '', file_url: '/sipa/ch06.html' },
  { id: "sim", title: 'Simulasi UAS Akuntansi', category: 'Interactive Module', ai_summary: '', file_url: '/sipa/uas-simulation.html' }
];

export const PKPL_MATERIALS = [
  { id: "idx", title: 'Index / Homepage Materi', category: 'Interactive Module', ai_summary: '', file_url: '/pkpl/index.html' },
  { id: "ch01", title: 'Chapter 01: Database Security', category: 'Interactive Module', ai_summary: '', file_url: '/pkpl/ch01-database-security.html' },
  { id: "ch02", title: 'Chapter 02: Unit Testing', category: 'Interactive Module', ai_summary: '', file_url: '/pkpl/ch02-unit-testing.html' },
  { id: "ch03", title: 'Chapter 03: Regression Testing', category: 'Interactive Module', ai_summary: '', file_url: '/pkpl/ch03-regression-testing.html' },
  { id: "ch04", title: 'Chapter 04: Integration & System Acceptance', category: 'Interactive Module', ai_summary: '', file_url: '/pkpl/ch04-integration-system-acceptance.html' },
  { id: "ch05", title: 'Chapter 05: Penetration Testing', category: 'Interactive Module', ai_summary: '', file_url: '/pkpl/ch05-penetration-testing.html' },
  { id: "ch06", title: 'Chapter 06: Law, Ethics & Cybercrime', category: 'Interactive Module', ai_summary: '', file_url: '/pkpl/ch06-law-ethics-cybercrime.html' },
  { id: "sim", title: 'Simulasi UAS PKPL', category: 'Interactive Module', ai_summary: '', file_url: '/pkpl/uas-simulation.html' }
];

export const MANPRO_MATERIALS = [
  { id: "ch10", title: 'Chapter 10: Communication & Stakeholder', category: 'Interactive Module', ai_summary: '', file_url: '/manpro/materi-10-communication-stakeholder.html' },
  { id: "ch11", title: 'Chapter 11: Risk & Procurement', category: 'Interactive Module', ai_summary: '', file_url: '/manpro/materi-11-risk-procurement.html' },
  { id: "ch12", title: 'Chapter 12: Executing', category: 'Interactive Module', ai_summary: '', file_url: '/manpro/materi-12-executing.html' },
  { id: "ch13", title: 'Chapter 13: Monitoring & Controlling', category: 'Interactive Module', ai_summary: '', file_url: '/manpro/materi-13-monitoring-controlling.html' },
  { id: "ch14", title: 'Chapter 14: Closing', category: 'Interactive Module', ai_summary: '', file_url: '/manpro/materi-14-closing.html' },
  { id: "sim", title: 'Simulasi UAS Manajemen Proyek', category: 'Interactive Module', ai_summary: '', file_url: '/manpro/simulasi-uas.html' }
];

export const PENGSTAT_MATERIALS = [
  { id: "idx", title: 'Index / Hub Master PENGSTAT', category: 'Interactive Module', ai_summary: '', file_url: '/pengstat/index.html' },
  { id: "m01", title: 'Materi 1: Fondasi Statistika & Metodologi', category: 'Interactive Module', ai_summary: '', file_url: '/pengstat/materi-1.html' },
  { id: "m02", title: 'Materi 2: Distribusi Frekuensi & Grafik', category: 'Interactive Module', ai_summary: '', file_url: '/pengstat/materi-2.html' },
  { id: "m03", title: 'Materi 3: Tendensi Sentral (Mean, Median, Modus)', category: 'Interactive Module', ai_summary: '', file_url: '/pengstat/materi-3.html' },
  { id: "m04", title: 'Materi 4: Variabilitas & Deviasi Standar', category: 'Interactive Module', ai_summary: '', file_url: '/pengstat/materi-4.html' },
  { id: "m05", title: 'Materi 5: Skor Terstandar (z-Scores)', category: 'Interactive Module', ai_summary: '', file_url: '/pengstat/materi-5.html' },
  { id: "m06", title: 'Materi 6: Persentil & Interpolasi Linier', category: 'Interactive Module', ai_summary: '', file_url: '/pengstat/materi-6.html' },
  { id: "sim", title: 'Simulasi Kuis Essay PENGSTAT', category: 'Interactive Module', ai_summary: '', file_url: '/pengstat/simulasi-kuis.html' }
];

export const EDAG_MATERIALS = [
  { id: "idx", title: 'Ruang Belajar E-Dagang', category: 'Interactive Module', ai_summary: '', file_url: '/edag/index.html' },
  ...[
    'Fondasi E-Commerce', 'Mekanisme dan Platform', 'Retailing dalam EC',
    'Business-to-Business', 'Sistem EC Inovatif'
  ].map((title, index) => ({ id: `ch${index + 1}`, title: `Modul ${index + 1}: ${title}`, category: 'Interactive Module', ai_summary: '', file_url: `/edag/chapter-${index + 1}.html` })),
  { id: "sim", title: 'Simulasi Kuis 1 E-Dagang', category: 'Interactive Module', ai_summary: '', file_url: '/edag/simulasi-kuis-1.html' }
];

export const COURSES_DB = {
  "edag-3-frontend": {
    id: "edag-3-frontend",
    name: "E-Dagang",
    code: "EDAG-3",
    semester: 3,
    materials: EDAG_MATERIALS
  },
  "sipa-4-frontend": {
    id: "sipa-4-frontend",
    name: "Sistem Informasi Perusahaan dan Akuntansi",
    code: "SIPA-4",
    semester: 4,
    materials: SIPA_MATERIALS
  },
  "pkpl-4-frontend": {
    id: "pkpl-4-frontend",
    name: "Pengantar Keamanan Perangkat Lunak",
    code: "PKPL-4",
    semester: 4,
    materials: PKPL_MATERIALS
  },
  "manpro-4-frontend": {
    id: "manpro-4-frontend",
    name: "Manajemen Proyek",
    code: "MANPRO-4",
    semester: 4,
    materials: MANPRO_MATERIALS
  },
  "pengstat-4-frontend": {
    id: "pengstat-4-frontend",
    name: "Pengantar Statistika",
    code: "PENGSTAT-4",
    semester: 4,
    materials: PENGSTAT_MATERIALS
  }
};
