import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import questions from './edag-exam.mjs';

const root = process.cwd();
const notes = path.join(root, 'resource-materi/EDAG-3/catatan-belajar');
const out = path.join(root, 'public/edag');
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'questions.js'), `window.EDAG_QUESTIONS = ${JSON.stringify(questions)};\n`);
const read = name => fs.readFileSync(path.join(notes, name), 'utf8');
const combined = read('03-04-retailing-dan-b2b.md');
const retail = combined.split('## Bab 3 — Retailing dalam electronic commerce')[1].split('## Bab 4 — Business-to-business e-commerce')[0].replace(/^### /gm, '## ');
const b2b = combined.split('## Bab 4 — Business-to-business e-commerce')[1].split('## Miskonsepsi lintas bab')[0].replace(/^### /gm, '## ');
const definitions = [
  ['Fondasi e-commerce', 'Mengenal e-commerce dari nol', 'Ikuti perjalanan satu pesanan buku untuk memahami e-commerce, pelaku bisnis, dan cara memperoleh pendapatan.', 'inti', '01-fondasi.md', ['Jelaskan e-commerce dan e-business dengan contoh sehari-hari', 'Bedakan pihak yang bertransaksi dan cara toko berjualan', 'Jelaskan manfaat bisnis bagi pelanggan serta hitung pendapatan sederhananya'], ['S1 · 27 halaman', 'B1 · 26 halaman']],
  ['Mekanisme & platform', 'Cara pasar digital bekerja', 'Pelajari apa yang terjadi saat orang mencari produk, bertemu penjual, membandingkan harga, dan membuat pesanan.', 'inti', '02-mekanisme.md', ['Ikuti alur dari halaman pembeli ke pekerjaan di belakang layar', 'Bedakan cara toko, pasar, perantara, dan lelang bekerja', 'Jelaskan bagaimana komunitas dan alat digital membantu pengguna'], ['S2 · 38 halaman', 'B2 · 26 halaman']],
  ['Retailing dalam EC', 'Dari memilih produk sampai menerima pesanan', 'Gunakan contoh buku, tiket, dan layanan untuk memahami penjualan online serta pekerjaan yang membuat pesanan sampai.', 'inti', null, ['Jelaskan penjualan kepada konsumen dan alur pemenuhan pesanan', 'Bandingkan kebutuhan membeli barang dengan memesan layanan', 'Jelaskan cara toko fisik dan online bekerja bersama'], ['S3 · 42 halaman', 'B3 · 28 halaman']],
  ['Business-to-business', 'Ketika organisasi berbelanja', 'Ikuti pengadaan laptop kampus: siapa menentukan kebutuhan, bagaimana pemasok dipilih, dan kapan pembayaran dilakukan.', 'inti', null, ['Kenali pihak dan peran dalam pembelian antarorganisasi', 'Pilih cara meminta serta membandingkan penawaran pemasok', 'Jelaskan bagaimana data dan kerja sama membantu pasokan'], ['S4 · 41 halaman', 'B4 · 31 halaman']],
  ['Sistem EC inovatif', 'Sistem digital untuk pelayanan dan pengetahuan', 'Mulai dari mengurus dokumen, belajar online, dan berbagi panduan kerja untuk memahami penggunaan sistem digital yang lebih luas.', 'inti', '05-sistem-ec-inovatif.md', ['Bedakan pengguna dan tujuan layanan pemerintah digital', 'Jelaskan cara sistem membantu belajar dan berbagi pengetahuan', 'Kenali alur informasi kesehatan dan transaksi antarindividu'], ['S5 · 41 halaman', 'B5 · 24 halaman']],
];
if (questions.some(q => q.chapter < 1 || q.chapter > definitions.length)) throw new Error('Question exceeds Chapter 1–5 scope');
const render = source => renderToStaticMarkup(React.createElement(Markdown, {
  remarkPlugins: [remarkGfm],
  components: {
    table: ({ children }) => React.createElement('div', { className: 'table-scroll', tabIndex: 0, role: 'region', 'aria-label': 'Tabel materi, geser untuk melihat seluruh kolom' }, React.createElement('table', null, children)),
    a: ({ href, children }) => href?.startsWith('http') ? React.createElement('a', { href, target: '_blank', rel: 'noopener noreferrer' }, children) : React.createElement('span', null, children),
  }, children: source,
}));
const lessons = definitions.map((d, i) => {
  const src = i === 2 ? retail : i === 3 ? b2b : read(d[4]);
  const guide = read(`panduan-pemula/${String(i + 1).padStart(2, '0')}.md`);
  const [intro, ...guidedSections] = guide.split(/^## /m);
  const detailedSections = src.split(/^## /m).slice(1);
  if (guidedSections.length !== detailedSections.length) throw new Error(`Chapter ${i + 1}: guide must cover all ${detailedSections.length} source sections`);
  const sections = guidedSections.map((chunk, n) => {
    const [heading, ...rest] = chunk.split('\n');
    const parts = rest.join('\n').split(/^### Cek pemahaman\s*$/m);
    if (parts.length !== 2) throw new Error(`Chapter ${i + 1} section ${n + 1}: expected one checkpoint`);
    const [question, answer, extra] = parts[1].split('**Jawaban:**');
    if (!question?.trim() || !answer?.trim() || extra !== undefined) throw new Error(`Chapter ${i + 1} section ${n + 1}: incomplete checkpoint`);
    const detail = detailedSections[n].split('\n').slice(1).join('\n');
    return {
      id: `s${n + 1}`,
      title: heading.replace(/^\d+(?:\.\d+)?[.\s]+/, '').replaceAll('**', '').trim(),
      html: render(parts[0]),
      detailHtml: render(detail),
      checkpoint: { questionHtml: render(question), answerHtml: render(answer) },
      text: `${rest.join('\n')}\n${detail}`.replace(/[*#|]/g, ' '),
    };
  });
  return { id: i + 1, title: d[0], subtitle: d[1], description: d[2], kind: d[3], objectives: d[5], sources: d[6], introHtml: render(intro.replace(/^# .*\r?\n/, '')), minutes: Math.max(25, Math.round(guide.split(/\s+/).length / 130)), sections };
});
fs.writeFileSync(path.join(out, 'lessons.js'), `window.EDAG_LESSONS = ${JSON.stringify(lessons)};\n`);
const html = (title, page, chapter = '') => `<!doctype html>
<html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#10191e"><meta name="description" content="Belajar E-Dagang secara bertahap: materi lengkap, studi kasus, latihan analitis, dan Simulasi Kuis 1."><title>${title} · EDAG / Chill Class</title><link rel="stylesheet" href="edag.css"><script defer src="lessons.js"></script><script defer src="questions.js"></script><script defer src="app.js"></script></head>
<body data-page="${page}" data-chapter="${chapter}"><a class="skip" href="#main">Lewati navigasi</a><div id="app"><main id="main"><p class="loading">Menyiapkan ruang belajar EDAG…</p></main></div><noscript><p>Aktifkan JavaScript untuk membaca modul dan mengerjakan latihan interaktif ini.</p></noscript></body></html>`;
fs.writeFileSync(path.join(out, 'index.html'), html('E-Dagang: pahami sistemnya', 'home'));
for (const l of lessons) {
  fs.writeFileSync(path.join(out, `chapter-${l.id}.html`), html(l.title, 'chapter', l.id));
  fs.writeFileSync(path.join(out, `latihan-${l.id}.html`), html(`Latihan ${l.id}: ${l.title}`, 'practice', l.id));
}
fs.writeFileSync(path.join(out, 'simulasi-kuis-1.html'), html('Simulasi Kuis 1', 'exam'));
fs.writeFileSync(path.join(out, 'sumber.html'), html('Sumber dan peta cakupan', 'sources'));
fs.writeFileSync(path.join(out, 'scope.js'), `window.EDAG_SCOPE = ${JSON.stringify(render(read('00-cakupan.md')))};\n`);
const scopePage = path.join(out, 'sumber.html');
fs.writeFileSync(scopePage, fs.readFileSync(scopePage, 'utf8').replace('<script defer src="app.js">', '<script defer src="scope.js"></script><script defer src="app.js">'));
fs.writeFileSync(path.join(out, 'audit-kuis.html'), html('Bedah kuis sumber', 'audit'));
// User-facing source audit contains concepts and source locations; no attempt owner metadata.
fs.writeFileSync(path.join(out, 'audit.js'), `window.EDAG_AUDIT = ${JSON.stringify(render(read('06-pembahasan-kuis.md')))};\n`);
const auditPage = path.join(out, 'audit-kuis.html');
fs.writeFileSync(auditPage, fs.readFileSync(auditPage, 'utf8').replace('<script defer src="app.js">', '<script defer src="audit.js"></script><script defer src="app.js">'));
console.log(`Built ${lessons.length} chapters, ${lessons.reduce((n,l) => n+l.sections.length,0)} sections, ${lessons.length} practices and the quiz hub.`);
