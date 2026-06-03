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
  { id: "ch01", title: 'Chapter 01: Unit Testing', category: 'Interactive Module', ai_summary: '', file_url: '/pkpl/ch01-unit-testing.html' },
  { id: "ch02", title: 'Chapter 02: Regression Testing', category: 'Interactive Module', ai_summary: '', file_url: '/pkpl/ch02-regression-testing.html' },
  { id: "ch03", title: 'Chapter 03: Integration & System Acceptance', category: 'Interactive Module', ai_summary: '', file_url: '/pkpl/ch03-integration-system-acceptance.html' },
  { id: "ch04", title: 'Chapter 04: Penetration Testing', category: 'Interactive Module', ai_summary: '', file_url: '/pkpl/ch04-penetration-testing.html' },
  { id: "ch05", title: 'Chapter 05: Law, Ethics & Cybercrime', category: 'Interactive Module', ai_summary: '', file_url: '/pkpl/ch05-law-ethics-cybercrime.html' },
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

export const COURSES_DB = {
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
  }
};
