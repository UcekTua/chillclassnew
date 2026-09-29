import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import vm from 'node:vm';
import { chromium, expect } from '@playwright/test';
import questions from './edag-exam.mjs';

const generated = { window: {} };
vm.runInNewContext(fs.readFileSync('public/edag/lessons.js', 'utf8'), generated);
const lessons = generated.window.EDAG_LESSONS;
assert.equal(lessons.length, 5);
assert.equal(lessons.reduce((n,l)=>n+l.sections.length,0),57);
for (const lesson of lessons) {
  assert(lesson.introHtml.length > 100, `Missing beginner introduction: ${lesson.id}`);
  for (const section of lesson.sections) {
    const location = `${lesson.id}-${section.id}`;
    assert(section.html.length > 700, `Missing guided explanation: ${location}`);
    assert(section.detailHtml.length > 100, `Missing source detail: ${location}`);
    assert(section.checkpoint.questionHtml.length > 35, `Missing checkpoint: ${location}`);
    assert(section.checkpoint.answerHtml.length > 90, `Missing checkpoint explanation: ${location}`);
    assert(!section.html.includes('**Jawaban:**'), `Answer leaked into primary reading: ${location}`);
  }
}
assert.equal(questions.length, 80);
assert.equal(new Set(questions.map(q => q.prompt)).size, 80);
assert.equal(new Set(questions.map(q => q.id)).size, 80);
assert(questions.every(q=>q.chapter>=1&&q.chapter<=5));
for (let id = 1; id <= 5; id++) assert.equal(questions.filter(q => q.pool === 'practice' && q.chapter === id).length, 10);
for (const id of [6,7,8]) for(const prefix of ['chapter','latihan']) assert(!fs.existsSync(`public/edag/${prefix}-${id}.html`),'Out-of-scope page remains');
const exam = questions.filter(q => q.pool === 'exam');
assert.equal(exam.length, 30);
assert.equal(exam.filter(q => q.type === 'mc').length, 15);
assert.equal(exam.filter(q => q.type === 'tf').length, 15);
for (const chapter of [1,2,3,4,5]) {
  assert.equal(exam.filter(q => q.chapter === chapter).length, 6);
  assert.equal(exam.filter(q => q.chapter === chapter && q.type==='mc').length, 3);
  assert.equal(exam.filter(q => q.chapter === chapter && q.type==='tf').length, 3);
}
for (const q of questions) {
  assert(lessons.find(l => l.id === q.chapter)?.sections.some(s => s.id === q.section), `Missing reference ${q.id}`);
  assert(q.reason.length > 90 && q.source.length > 10, `Explanation ${q.id}`);
  assert.equal(q.analysis.length, q.options.length);
  assert(q.analysis.every(x => x.length > 25), `Option explanation ${q.id}`);
  assert.equal(new Set(q.options).size, q.options.length);
  assert(q.answer >= 0 && q.answer < q.options.length);
  assert.equal(q.options.length, q.type === 'tf' ? 2 : q.pool === 'exam' ? 5 : 4);
}
const output = path.resolve('tmp/edag-qa'); fs.mkdirSync(output, { recursive: true });
const root = path.resolve('public');
const server = http.createServer((req,res) => {
  const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://test').pathname));
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404).end(); return; }
  const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8'};
  res.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream'});fs.createReadStream(file).pipe(res);
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}/edag/`;
const executablePath = process.env.EDAG_BROWSER || ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','C:/Program Files/Google/Chrome/Application/chrome.exe'].find(p => fs.existsSync(p));
let browser;
const results = [];
try {
  browser = await chromium.launch({headless: true, ...(executablePath ? {executablePath} : {})});
  const context = await browser.newContext({viewport: {width:1440,height:1000}, reducedMotion:'reduce'});
  await context.route('https://fonts.googleapis.com/**', route => route.abort());
  await context.route('https://fonts.gstatic.com/**', route => route.abort());
  const page = await context.newPage();
  const errors = []; page.on('pageerror', e => errors.push(e.message));
  const go = name => page.goto(base+name, {waitUntil:'load'});
  const screenshot = async (name, fullPage=false) => {
    await page.evaluate(() => {document.activeElement?.blur();window.scrollTo({top:0,behavior:'instant'});});
    await page.screenshot({path:path.join(output,name),fullPage});
  };
  const overflow = async () => assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth+1), `Horizontal overflow ${page.url()}`);
  const state = key => page.evaluate(k => JSON.parse(localStorage.getItem(k)), key);
  const practiceKey = 'edag.quiz.v2.practice.1';
  const examKey = 'edag.quiz.v3.exam';
  const chooseCorrect = async key => {
    const s = await state(key); const q = questions.find(q => q.id === s.ids[s.index]);
    await page.locator(`input[name=answer][value="${q.answer}"]`).check();
  };
  await go('index.html'); await expect(page.locator('.module-card')).toHaveCount(5); await overflow();
  await expect(page.locator('a[href*="chapter-6"],a[href*="chapter-7"],a[href*="chapter-8"]')).toHaveCount(0);
  await screenshot('desktop-home.png',true);
  await page.locator('#search').fill('penny auction'); await expect(page.locator('.search-result')).toHaveCount(1);
  await page.locator('.search-result').click(); await expect(page).toHaveURL(/chapter-2\.html#s8$/);
  results.push('Search indexes deep lesson content and links to the correct section');
  for (let i=1;i<=5;i++) {
    await go(`chapter-${i}.html`);
    await expect(page.locator('.lesson-section')).toHaveCount(lessons[i-1].sections.length);
    await expect(page.locator('.checkpoint')).toHaveCount(lessons[i-1].sections.length);
    await expect(page.locator('.source-detail')).toHaveCount(lessons[i-1].sections.length);
    await expect(page.locator('.lesson-intro')).toBeVisible();
    await expect(page.locator('#s1 .checkpoint-answer > .prose')).toBeHidden();
    await expect(page.locator('#s1 .source-detail > .prose')).toBeHidden();
    await page.locator('#s1 .checkpoint-answer summary').focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#s1 .checkpoint-answer > .prose')).toBeVisible();
    await page.locator('#s1 .source-detail summary').click();
    await expect(page.locator('#s1 .source-detail > .prose')).toBeVisible();
    const labSection = {1:'s2',4:'s5',5:'s5'}[i];
    if (labSection) {
      await expect(page.locator(`#${labSection} .lab`)).toHaveCount(1);
      assert(await page.locator(`#${labSection}`).evaluate(el => !!(el.querySelector('.lesson-explanation').compareDocumentPosition(el.querySelector('.lab')) & Node.DOCUMENT_POSITION_FOLLOWING)));
    }
    await overflow();
    const broken = await page.locator('.outline a').evaluateAll(as => as.filter(a => !document.getElementById(a.hash.slice(1))).map(a => a.hash));
    assert.deepEqual(broken,[]);
  }
  await go('chapter-1.html');
  await expect(page.locator('#s1 .lesson-explanation')).toContainText('BukuKampus');
  await expect(page.locator('#s1 .lesson-explanation')).toContainText('electronic commerce');
  await page.locator('#s1').screenshot({path:path.join(output,'desktop-beginner-section.png')});
  await page.locator('[data-section="s1"]').check(); await page.reload(); await expect(page.locator('[data-section="s1"]')).toBeChecked();
  await page.locator('#digit-1').selectOption('digital'); await page.locator('#digit-2').selectOption('digital');
  await expect(page.locator('#lab-result')).toContainText('Pure EC');
  await page.locator('#theme').click(); await page.reload(); await expect(page.locator('body')).toHaveClass(/light/);
  await screenshot('desktop-chapter-light.png');
  await page.locator('#theme').click();
  await go('chapter-4.html'); await page.locator('#seller-count').selectOption('many');await page.locator('#buyer-count').selectOption('one');await expect(page.locator('#lab-result')).toContainText('Reverse auction');
  await go('chapter-5.html');await page.locator('#km-activity').selectOption('refine');await expect(page.locator('#lab-result')).toContainText('Refine');
  await expect(page.locator('.next-nav a').last()).toHaveAttribute('href','simulasi-kuis-1.html');
  results.push('Only five chapters / 57 sections; Chapter 5 advances to simulation; reading persistence, theme, and three concept labs');
  results.push('57 beginner explanations with explained checkpoints and expandable source details; keyboard access; labs follow relevant concepts');
  await go('latihan-1.html');await page.locator('#start-quiz').click();await expect(page.locator('#check')).toBeDisabled();
  await chooseCorrect(practiceKey);await page.locator('#flag').click();
  const first = await state(practiceKey);await page.reload();assert.deepEqual(await state(practiceKey),first);
  await expect(page.locator('#flag')).toHaveAttribute('aria-pressed','true');
  await page.locator('#check').click();await expect(page.locator('.feedback')).toContainText('Tepat.');
  assert(await page.locator('input[name=answer]').evaluateAll(xs=>xs.every(x=>x.disabled)));
  await page.locator('#next').click();
  let s = await state(practiceKey);let q=questions.find(q=>q.id===s.ids[s.index]);
  await page.locator(`input[name=answer][value="${(q.answer+1)%q.options.length}"]`).check();await page.locator('#check').click();
  await expect(page.locator('.feedback')).toContainText('Belum tepat.');
  await page.locator('#finish').click();await expect(page.locator('[role=dialog]')).toContainText('8 soal belum dijawab');
  await expect(page.locator('#dialog-no')).toBeFocused();await page.keyboard.press('Tab');await expect(page.locator('#dialog-yes')).toBeFocused();await page.keyboard.press('Escape');await expect(page.locator('[role=dialog]')).toHaveCount(0);
  await page.locator('#finish').click();await page.locator('#dialog-yes').click();await expect(page.locator('.result-hero')).toContainText('1 benar · 1 salah · 8 kosong');
  await page.locator('[data-filter=wrong]').click();await expect(page.locator('.review-card')).toHaveCount(9);
  await page.locator('[data-filter=flagged]').click();await expect(page.locator('.review-card')).toHaveCount(1);
  await page.locator('#retry').click();await page.locator('#dialog-yes').click();await page.locator('#start-quiz').click();
  for (let i=0;i<10;i++) {await chooseCorrect(practiceKey);if(i<9)await page.locator('#next').click();}
  await page.locator('#finish').click();await page.locator('#dialog-yes').click();await expect(page.locator('.result-hero')).toContainText('10 benar · 0 salah · 0 kosong');
  assert.equal((await state('edag.progress.v1')).scores['practice-1'].best,10);
  assert.equal((await state('edag.progress.v1')).read['1-s1'],true);
  await page.reload();await expect(page.locator('.result-score')).toContainText('100');
  results.push('Practice: correct/wrong/blank scoring, explanation lock, saved order/flags, filters, retry, perfect score, best score');
  for(let i=2;i<=5;i++){await go(`latihan-${i}.html`);await page.locator('#start-quiz').click();await expect(page.locator('.qjump')).toHaveCount(10);}
  // A completed old-scope attempt must not resume or set the new exam's best score.
  await page.evaluate(()=>{
    localStorage.setItem('edag.quiz.v2.exam',JSON.stringify({version:2,submitted:true,ids:['exam-6-1']}));
    const progress=JSON.parse(localStorage.getItem('edag.progress.v1'));
    progress.scores.exam={best:30,last:30,total:30};progress.read['6-s1']=true;
    localStorage.setItem('edag.progress.v1',JSON.stringify(progress));
  });
  await go('simulasi-kuis-1.html');await page.locator('#timed').uncheck();await page.locator('#start-quiz').click();
  await expect(page.locator('#timer')).toHaveText('Tanpa timer');await expect(page.locator('#check')).toHaveCount(0);
  await chooseCorrect(examKey);await page.locator('#flag').click();await expect(page.locator('.feedback')).toHaveCount(0);
  const savedExam=await state(examKey);await page.reload();assert.deepEqual(await state(examKey),savedExam);
  await screenshot('desktop-exam.png');
  await page.locator('#finish').click();await page.locator('#dialog-yes').click();await expect(page.locator('.result-hero')).toContainText('1 benar · 0 salah · 29 kosong');
  await expect(page.locator('.review-card')).toHaveCount(30);
  await expect(page.locator('.topic-result')).toHaveCount(5);
  assert.equal((await state('edag.progress.v1')).scores['exam-ch1-5-v3'].best,1);
  assert.equal((await state('edag.progress.v1')).scores['practice-1'].best,10);
  await page.locator('#retry').click();await page.locator('#dialog-yes').click();await page.locator('#start-quiz').click();
  s=await state(examKey);assert(Math.abs(s.deadline-s.started-2700000)<1000);
  await page.evaluate(k=>{const s=JSON.parse(localStorage.getItem(k));s.deadline=Date.now()-100;localStorage.setItem(k,JSON.stringify(s));},examKey);
  await page.reload();await expect(page.locator('.result-hero')).toContainText('Waktu habis');assert.equal((await state(examKey)).submitted,true);
  // Exercise expiry while the confirmation dialog is open.
  await page.locator('#retry').click();await page.locator('#dialog-yes').click();await page.locator('#start-quiz').click();
  await page.evaluate(k=>{const s=JSON.parse(localStorage.getItem(k));s.deadline=Date.now()+1800;localStorage.setItem(k,JSON.stringify(s));},examKey);
  await page.reload();await page.locator('#finish').click();await expect(page.locator('.result-hero')).toContainText('Waktu habis',{timeout:6000});await expect(page.locator('[role=dialog]')).toHaveCount(0);
  results.push('Chapter 1–5 exam: 30 questions, isolated old scores, five chapter diagnostics, no early feedback, timer persistence and auto-submit');
  await page.evaluate(k=>localStorage.setItem(k,'{broken'),examKey);await page.reload();await expect(page.locator('#start-quiz')).toBeVisible();
  await page.locator('#start-quiz').click();await page.evaluate(k=>{const s=JSON.parse(localStorage.getItem(k));s.order[s.ids[0]]=[999];localStorage.setItem(k,JSON.stringify(s));},examKey);await page.reload();await expect(page.locator('#start-quiz')).toBeVisible();
  const blocked=await context.newPage();await blocked.addInitScript(()=>{Storage.prototype.setItem=function(){throw new Error('disabled');};});
  await blocked.goto(base+'latihan-2.html');await blocked.locator('input[name=answer]').first().check();await expect(blocked.locator('.storage-warning')).toBeVisible();await blocked.locator('#check').click();await expect(blocked.locator('.feedback')).toBeVisible();await blocked.close();
  results.push('Malformed saved data recovery and functional session when persistence is blocked');
  await page.setViewportSize({width:390,height:844});
  await go('index.html');await overflow();await page.locator('#menu').click();await expect(page.locator('#menu')).toHaveAttribute('aria-expanded','true');await page.keyboard.press('Escape');await expect(page.locator('#menu')).toHaveAttribute('aria-expanded','false');
  await screenshot('mobile-home.png',true);
  await go('chapter-3.html');await overflow();await screenshot('mobile-chapter.png');
  for (let i=1;i<=5;i++) {
    await go(`chapter-${i}.html`);
    await page.locator('#s1 .checkpoint-answer summary').click();
    await expect(page.locator('#s1 .checkpoint-answer > .prose')).toBeVisible();
    await overflow();
    if (i===1) await page.locator('#s1').screenshot({path:path.join(output,'mobile-beginner-section.png')});
    await page.locator('#s1 .source-detail summary').click();
    await expect(page.locator('#s1 .source-detail > .prose')).toBeVisible();
    await overflow();
  }
  await go('latihan-1.html');await overflow();await page.locator('.review-card summary').first().click();await overflow();await screenshot('mobile-review.png');
  await go('simulasi-kuis-1.html');await page.locator('#start-quiz').click();await overflow();await screenshot('mobile-exam.png',true);
  await go('sumber.html');await overflow();await expect(page.locator('.audit-content')).toContainText('324');
  await go('audit-kuis.html');await expect(page.locator('.audit-content')).toContainText('Q1');await overflow();
  assert.equal(await page.locator('.audit-content h3').filter({hasText:/Q[12]-\d\d/}).count(),15);
  await expect(page.locator('.audit-content')).not.toContainText('Q1-29');
  results.push('390px layouts: home, chapters, results, exam, source audit; mobile menu keyboard dismissal');
  assert.deepEqual(errors,[],'Browser runtime errors');
  fs.writeFileSync(path.join(output,'results.json'),JSON.stringify({passed:true,questions:questions.length,sections:lessons.reduce((n,l)=>n+l.sections.length,0),results},null,2));
  console.log(results.map(x=>'PASS '+x).join('\n'));
} finally {await browser?.close();await new Promise(r=>server.close(r));}
