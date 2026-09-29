import assert from 'node:assert/strict';
import fs from 'node:fs';
import {chromium, expect} from '@playwright/test';

const base = process.env.EDAG_BASE_URL || 'http://localhost:3010';
const executablePath = process.env.EDAG_BROWSER || ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','C:/Program Files/Google/Chrome/Application/chrome.exe'].find(p => fs.existsSync(p));
const browser = await chromium.launch({headless:true,...(executablePath?{executablePath}:{})});
try {
  const page = await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const id of [6,7,8]) {
    assert.equal((await page.request.get(`${base}/courses/edag-3-frontend/materials/ch${id}`)).status(),404);
    assert.equal((await page.request.get(`${base}/edag/chapter-${id}.html`)).status(),404);
    assert.equal((await page.request.get(`${base}/edag/latihan-${id}.html`)).status(),404);
  }
  await page.goto(base);
  await page.getByRole('button',{name:'Semester 3',exact:true}).click();
  await page.getByRole('link').filter({hasText:'EDAG-3'}).click();
  await expect(page).toHaveURL(/courses\/edag-3-frontend$/);
  await expect(page.getByRole('heading',{name:'E-Dagang',exact:true})).toBeVisible();
  await page.getByRole('link').filter({hasText:'Ruang Belajar E-Dagang'}).click();
  await expect(page).toHaveURL(/materials\/idx$/);
  const frame=page.frameLocator('iframe');
  await expect(frame.locator('.module-card')).toHaveCount(5);
  await expect(frame.locator('h1')).toContainText('perdagangan digital');
  const bounds = await page.locator('iframe').boundingBox();
  const back = await page.getByRole('link',{name:'← Daftar materi E-Dagang'}).boundingBox();
  assert(bounds.y>=back.y+back.height,'Course back link must not overlay module');
  fs.mkdirSync('tmp/edag-qa',{recursive:true});
  await page.screenshot({path:'tmp/edag-qa/portal-desktop.png'});
  await frame.locator('.module-card').first().click();await expect(frame.locator('.lesson-section')).toHaveCount(10);
  await frame.getByRole('link',{name:'Mulai latihan modul 1 ↗',exact:true}).click();
  await frame.locator('#start-quiz').click();await expect(frame.locator('.qjump')).toHaveCount(10);
  await page.setViewportSize({width:390,height:844});
  assert(await frame.locator('html').evaluate(el=>el.scrollWidth<=innerWidth+1));
  await frame.locator('#menu').click();await expect(frame.locator('#menu')).toHaveAttribute('aria-expanded','true');
  await frame.getByRole('link',{name:'↗ Simulasi Kuis 1',exact:true}).click();await expect(frame.locator('#start-quiz')).toBeVisible();
  await page.screenshot({path:'tmp/edag-qa/portal-mobile.png'});
  await page.getByRole('link',{name:'← Daftar materi E-Dagang'}).click();await expect(page).toHaveURL(/courses\/edag-3-frontend$/);
  assert.deepEqual(errors,[]);
  console.log('PASS production portal: only Chapters 1–5; excluded routes return 404; Semester 3 → lesson → practice → mobile simulation → course return');
} finally {await browser.close();}
