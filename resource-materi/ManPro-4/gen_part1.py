
import os
DIR = r"d:\2. UWIW\0. CHP\Chill Class\resource-materi\ManPro-4"

CSS = """
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:'Segoe UI',sans-serif; background:#0f0f1a; color:#e0e0e0; line-height:1.7; }
.container { max-width:900px; margin:0 auto; padding:20px; }
h1 { font-size:2em; background:linear-gradient(135deg,#6366f1,#a855f7); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:10px; }
h2 { color:#a78bfa; border-bottom:2px solid #a78bfa33; padding-bottom:8px; margin:30px 0 15px; font-size:1.4em; }
h3 { color:#c4b5fd; margin:20px 0 10px; font-size:1.15em; }
.card { background:#1a1a2e; border-radius:12px; padding:25px; margin:15px 0; border:1px solid #ffffff10; }
.highlight { background:#2d1b69; border-left:4px solid #a855f7; padding:15px 20px; border-radius:0 8px 8px 0; margin:10px 0; }
.tip { background:#1a2e1a; border-left:4px solid #4ade80; padding:15px 20px; border-radius:0 8px 8px 0; margin:10px 0; }
.warn { background:#2e2a1a; border-left:4px solid #fbbf24; padding:15px 20px; border-radius:0 8px 8px 0; margin:10px 0; }
table { width:100%; border-collapse:collapse; margin:15px 0; }
th { background:#6366f133; color:#a78bfa; padding:12px; text-align:left; }
td { padding:10px 12px; border-bottom:1px solid #ffffff10; }
tr:hover { background:#ffffff05; }
ul,ol { padding-left:25px; margin:10px 0; }
li { margin:5px 0; }
.quiz-section { background:#1a1a2e; border-radius:12px; padding:25px; margin:20px 0; border:1px solid #6366f133; }
.question { background:#16162a; padding:20px; border-radius:10px; margin:15px 0; border:1px solid #ffffff08; }
.question p { font-weight:600; margin-bottom:12px; color:#e2e8f0; }
.option { display:block; padding:10px 15px; margin:5px 0; background:#1e1e3a; border-radius:8px; cursor:pointer; transition:all .2s; border:1px solid transparent; }
.option:hover { background:#2a2a4a; border-color:#6366f155; }
.option.selected { background:#6366f133; border-color:#6366f1; }
.option.correct { background:#16a34a33; border-color:#16a34a; }
.option.wrong { background:#dc262633; border-color:#dc2626; }
.btn { background:linear-gradient(135deg,#6366f1,#a855f7); color:#fff; border:none; padding:12px 30px; border-radius:8px; cursor:pointer; font-size:1em; margin:10px 5px; transition:transform .2s; }
.btn:hover { transform:scale(1.03); }
.result { padding:20px; border-radius:10px; margin:15px 0; font-size:1.1em; font-weight:600; }
.nav { display:flex; flex-wrap:wrap; gap:8px; margin:20px 0; }
.nav a { background:#1a1a2e; color:#a78bfa; padding:8px 16px; border-radius:8px; text-decoration:none; border:1px solid #a78bfa33; font-size:.9em; transition:all .2s; }
.nav a:hover { background:#6366f133; }
.badge { display:inline-block; background:#6366f133; color:#a78bfa; padding:3px 10px; border-radius:20px; font-size:.8em; margin:2px; }
details { margin:10px 0; }
summary { cursor:pointer; color:#c4b5fd; font-weight:600; padding:8px; background:#16162a; border-radius:8px; }
details[open] summary { border-radius:8px 8px 0 0; }
details > div { background:#1e1e30; padding:15px; border-radius:0 0 8px 8px; }
"""

QUIZ_JS = """
function initQuiz(quizId) {
  var key = 'quiz_' + quizId;
  var saved = localStorage.getItem(key);
  if (saved) {
    var data = JSON.parse(saved);
    data.forEach(function(item) {
      var opt = document.getElementById(item.id);
      if (opt) { opt.classList.add('selected'); opt.querySelector('input').checked = true; }
    });
  }
}
function selectOpt(el, quizId) {
  var qDiv = el.closest('.question');
  qDiv.querySelectorAll('.option').forEach(function(o){ o.classList.remove('selected'); });
  el.classList.add('selected');
  el.querySelector('input').checked = true;
  saveSelections(quizId);
}
function saveSelections(quizId) {
  var key = 'quiz_' + quizId;
  var selections = [];
  document.querySelectorAll('#'+quizId+' .option.selected').forEach(function(el){
    selections.push({id: el.id});
  });
  localStorage.setItem(key, JSON.stringify(selections));
}
function submitQuiz(quizId, answers) {
  var score = 0;
  var total = Object.keys(answers).length;
  for (var qNum in answers) {
    var q = document.getElementById(quizId + '_q' + qNum);
    if (!q) continue;
    var selected = q.querySelector('.option.selected');
    var correctId = quizId + '_q' + qNum + '_' + answers[qNum];
    var correctEl = document.getElementById(correctId);
    if (correctEl) correctEl.classList.add('correct');
    if (selected) {
      if (selected.id === correctId) { score++; }
      else { selected.classList.add('wrong'); }
    }
  }
  var resultDiv = document.getElementById(quizId + '_result');
  var pct = Math.round(score/total*100);
  var color = pct >= 80 ? '#16a34a' : pct >= 60 ? '#eab308' : '#dc2626';
  resultDiv.innerHTML = '<div class=\"result\" style=\"background:'+color+'22;border:1px solid '+color+'\">Skor: '+score+'/'+total+' ('+pct+'%)'+(pct>=80?' ✅ Excellent!':(pct>=60?' ⚠️ Perlu belajar lagi':' ❌ Pelajari ulang materinya'))+'</div>';
  localStorage.setItem(quizId+'_score', JSON.stringify({score:score,total:total}));
}
function resetQuiz(quizId) {
  document.querySelectorAll('#'+quizId+' .option').forEach(function(o){ o.classList.remove('selected','correct','wrong'); o.querySelector('input').checked=false; });
  document.getElementById(quizId+'_result').innerHTML='';
  localStorage.removeItem('quiz_'+quizId);
  localStorage.removeItem(quizId+'_score');
}
"""

def nav_links(current):
    files = [
        ("materi-10-communication-stakeholder.html","10: Comm & Stakeholder"),
        ("materi-11-risk-procurement.html","11: Risk & Procurement"),
        ("materi-12-executing.html","12: Executing"),
        ("materi-13-monitoring-controlling.html","13: Monitoring & Control"),
        ("materi-14-closing.html","14: Closing"),
        ("simulasi-uas.html","📝 Simulasi UAS"),
    ]
    html = '<div class="nav">'
    for f,label in files:
        if f == current:
            html += f'<a href="{f}" style="background:#6366f1;color:#fff;">{label}</a>'
        else:
            html += f'<a href="{f}">{label}</a>'
    html += '</div>'
    return html

def wrap(title, body, quizId, current_file):
    return f"""<!DOCTYPE html>
<html lang="id"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>{title} - ManPro Study</title>
<style>{CSS}</style></head><body>
<div class="container">
{nav_links(current_file)}
<h1>{title}</h1>
{body}
</div>
<script>{QUIZ_JS}</script>
<script>document.addEventListener('DOMContentLoaded',function(){{ initQuiz('{quizId}'); }});</script>
</body></html>"""

def make_option(qid, key, text):
    oid = f"{qid}_{key}"
    return f'<label class="option" id="{oid}" onclick="selectOpt(this,this.closest(\'.quiz-section\').id)"><input type="radio" name="{qid}" style="display:none">{key.upper()}. {text}</label>'

def make_question(quiz_id, num, text, options):
    qid = f"{quiz_id}_q{num}"
    opts = ""
    for k,v in options.items():
        opts += make_option(qid, k, v)
    return f'<div class="question" id="{qid}"><p>{num}. {text}</p>{opts}</div>'

# ============================================================
# FILE 5: CLOSING PROJECTS (shortest, do first)
# ============================================================
body5 = """
<div class="card">
<h2>📌 Gambaran Umum</h2>
<p><strong>Closing Projects</strong> adalah proses grup terakhir dalam manajemen proyek. Intinya: <em>menyelesaikan semua aktivitas, mengarsip informasi proyek, memastikan semua pekerjaan selesai, dan melepaskan sumber daya organisasi.</em></p>
<p>Banyak tim proyek yang mengabaikan fase ini, padahal closing yang baik sangat penting untuk pembelajaran di proyek-proyek selanjutnya.</p>
<div class="highlight">💡 <strong>Poin Kunci:</strong> Closing dilakukan baik untuk proyek yang <em>berhasil diselesaikan</em> maupun yang <em>dibatalkan</em>. Keduanya tetap perlu ditutup secara formal.</div>
</div>

<div class="card">
<h2>🔄 4 Cara Menutup/Mengakhiri Proyek</h2>
<table>
<tr><th>Tipe</th><th>Penjelasan</th><th>Contoh</th></tr>
<tr><td><strong>Integration</strong></td><td>Proyek selesai, hasilnya diintegrasikan ke operasi bisnis sehari-hari. <em>Ini yang paling umum!</em></td><td>Aplikasi baru selesai dibuat lalu diserahkan ke tim operasional untuk digunakan.</td></tr>
<tr><td><strong>Addition</strong></td><td>Proyek menghasilkan produk/layanan baru yang membentuk unit organisasi baru (divisi/departemen baru).</td><td>Proyek R&D sukses → jadi divisi bisnis baru di perusahaan.</td></tr>
<tr><td><strong>Extinction</strong></td><td>Proyek dihentikan karena sudah tercapai tujuannya (sukses) ATAU gagal/tidak relevan lagi.</td><td>Proyek riset selesai, tidak ada kelanjutan. Atau proyek dibatalkan karena teknologinya sudah ketinggalan.</td></tr>
<tr><td><strong>Starvation</strong></td><td>Proyek "dimatikan pelan-pelan" dengan cara mengurangi/memotong anggarannya. Biasanya untuk menyembunyikan kegagalan.</td><td>Budget proyek terus dipotong sampai akhirnya tidak bisa jalan. Manajemen melakukan ini supaya tidak malu.</td></tr>
</table>
<div class="tip">🧠 <strong>Cara Mengingat (IAES):</strong> "<strong>I</strong>ndah <strong>A</strong>da <strong>E</strong>kstra <strong>S</strong>nack" → Integration, Addition, Extinction, Starvation</div>
</div>

<div class="card">
<h2>📋 Output Utama Closing (Integration Management)</h2>
<ol>
<li><strong>Project Documents Updates</strong> — Semua dokumen proyek di-review dan ditandai sebagai versi final.</li>
<li><strong>Final Product/Service/Result Transition</strong> — Produk akhir diserahkan dan ditransisikan ke bagian organisasi yang tepat. <em>Sponsor paling peduli pada bagian ini!</em></li>
<li><strong>Final Report</strong> — Laporan akhir proyek dan presentasi penutupan.</li>
<li><strong>Organizational Process Assets Updates</strong> — Memperbarui aset proses organisasi seperti template, kebijakan, dan terutama <strong>lessons-learned reports</strong>.</li>
</ol>
</div>

<div class="card">
<h2>📝 Dokumen-Dokumen Penting saat Closing</h2>

<h3>1. Customer Acceptance/Project Completion Form</h3>
<p>Formulir resmi yang menandakan bahwa customer/sponsor telah <strong>menerima dan menyetujui</strong> semua deliverable proyek. Ini adalah bukti formal bahwa proyek dianggap selesai.</p>

<h3>2. Final Report</h3>
<p>Laporan lengkap yang merangkum seluruh proyek: tujuan, pencapaian, perbandingan rencana vs aktual (scope, time, cost), dan ringkasan perubahan yang terjadi.</p>

<h3>3. Transition Plan</h3>
<p>Rencana detail bagaimana produk/hasil proyek akan diserahterimakan ke tim operasional. Mencakup pelatihan, dokumentasi teknis, dan periode pendampingan.</p>

<h3>4. Lessons-Learned Report</h3>
<p>Dokumen yang mencatat apa yang berjalan baik, apa yang bermasalah, dan rekomendasi untuk proyek masa depan. Ini adalah <strong>aset paling berharga</strong> dari closing!</p>
<div class="highlight">💡 Lessons-Learned sebaiknya <strong>didokumentasikan sepanjang proyek berlangsung</strong>, bukan hanya di akhir. Bisa menggunakan blog, progress report, atau repository khusus.</div>
</div>

<div class="card">
<h2>🤝 Close-Out Meeting</h2>
<p>Mirip dengan kick-off meeting di awal proyek, close-out meeting mengundang <strong>stakeholder kunci</strong>. Yang dibahas:</p>
<ol>
<li>Review pencapaian scope, time, dan cost (target vs hasil aktual)</li>
<li>Success criteria dan hasilnya</li>
<li>Perubahan-perubahan utama yang terjadi dan bagaimana diatasi</li>
<li>Lessons learned utama</li>
<li>Ringkasan transition plan</li>
</ol>
<div class="warn">⚠️ Project champion/sponsor yang membuka meeting, lalu PM dan tim mempresentasikan informasi di atas.</div>
</div>

<div class="card">
<h2>🔁 Knowledge Transfer</h2>
<p><strong>Knowledge Transfer</strong> = proses mengkomunikasikan pengetahuan yang dikembangkan oleh satu orang/bagian organisasi ke orang/bagian lain.</p>
<ul>
<li>Orang yang akan <em>mengambil alih</em> produk/hasil proyek perlu menghabiskan waktu bersama tim proyek untuk memahami detail.</li>
<li><strong>Human capital</strong> (pengetahuan karyawan) adalah salah satu aset terpenting organisasi.</li>
<li>Knowledge transfer harus dijadikan <strong>prioritas</strong>, terutama jika benefit proyek tidak langsung terasa.</li>
</ul>
</div>

<div class="card">
<h2>🔄 Closing Agile/Hybrid Projects</h2>
<p>Proyek agile juga punya aktivitas closing, tapi dilakukan secara iteratif:</p>
<table>
<tr><th>Event Scrum</th><th>Peran dalam Closing</th></tr>
<tr><td><strong>Daily Scrum</strong></td><td>Bisa dianggap sebagai "closure" untuk hari sebelumnya. Tim fokus pada progress menuju sprint goal.</td></tr>
<tr><td><strong>Sprint Review</strong></td><td>Closure untuk sprint. Stakeholder memberi feedback, menginspeksi hasil, dan menentukan adaptasi. Jika tidak ada value, bisa jadi tidak ada sprint selanjutnya.</td></tr>
<tr><td><strong>Sprint Retrospective</strong></td><td>Tim membahas apa yang baik, masalah apa yang ditemui, dan bagaimana memperbaiki. Mirip lessons-learned tapi per sprint.</td></tr>
</table>
<p>Saat proyek agile berakhir, tim tetap harus:</p>
<ol>
<li>Transisi pekerjaan ke tim operasional</li>
<li>Mengadakan close-out meeting</li>
<li>Mengadakan <strong>final retrospective</strong> untuk seluruh proyek</li>
<li>Merayakan akhir proyek! 🎉</li>
</ol>
</div>

<div class="card">
<h2>💡 Tips & Advice untuk Closing</h2>
<ul>
<li>✅ <strong>Rencanakan closing sejak awal</strong> — masukkan deliverable closing di WBS dan alokasikan resource</li>
<li>✅ <strong>Dokumentasikan lessons learned sesegera mungkin</strong> — jangan tunggu akhir proyek</li>
<li>✅ <strong>Ucapkan terima kasih</strong> ke tim dan stakeholder</li>
<li>✅ <strong>Adakan perayaan</strong> — bisa formal (untuk proyek besar yang sukses) atau informal (makan bersama, gathering virtual)</li>
<li>✅ Gunakan blog atau progress report untuk menangkap lessons learned secara berkala</li>
</ul>
</div>

<div class="card">
<h2>🧠 Ringkasan Poin Penting & Cara Menghafal</h2>
<div class="highlight">
<p><strong>CLOSING = FATUK</strong></p>
<ul>
<li><strong>F</strong>inal Report & dokumen</li>
<li><strong>A</strong>rsip semua informasi proyek</li>
<li><strong>T</strong>ransisi produk ke operasional</li>
<li><strong>U</strong>capkan terima kasih & rayakan</li>
<li><strong>K</strong>nowledge transfer & lessons learned</li>
</ul>
</div>
<div class="tip">
<p><strong>4 Cara Tutup Proyek = IAES:</strong> Integration (paling umum), Addition (unit baru), Extinction (selesai/gagal), Starvation (budget dipotong)</p>
</div>
</div>

<div class="card">
<h2>📖 Contoh Soal & Pembahasan</h2>
<details><summary>Soal 1: Apa cara paling umum untuk menutup proyek?</summary>
<div><p><strong>Jawaban: Integration</strong></p><p>Penjelasan: Pada Integration, proyek selesai dan produk/layanan yang dibuat diintegrasikan ke dalam operasi organisasi sehari-hari. Staff dan resource proyek dilepas kembali ke organisasi. Ini adalah cara paling umum menutup proyek.</p></div></details>

<details><summary>Soal 2: Apa perbedaan antara Extinction dan Starvation?</summary>
<div><p><strong>Jawaban:</strong></p><p><strong>Extinction</strong> = proyek dihentikan secara langsung/jelas, baik karena sukses (goal tercapai, tidak perlu lanjut) atau gagal.</p><p><strong>Starvation</strong> = proyek "dimatikan pelan-pelan" dengan memotong budget secara bertahap. Biasanya dilakukan manajemen untuk menghindari malu (avoid embarrassment) dari kegagalan proyek.</p></div></details>

<details><summary>Soal 3: Mengapa lessons-learned sebaiknya tidak hanya didokumentasikan di akhir proyek?</summary>
<div><p><strong>Jawaban:</strong> Karena jika menunggu akhir proyek, banyak detail penting yang sudah dilupakan. Mendokumentasikan lessons learned sepanjang proyek berlangsung memastikan informasi masih segar dan akurat. Bisa menggunakan blog, progress report, atau repository khusus.</p></div></details>

<details><summary>Soal 4: Apa peran Sprint Retrospective dalam closing agile?</summary>
<div><p><strong>Jawaban:</strong> Sprint Retrospective berfungsi sebagai mini-closing setiap sprint, di mana tim membahas apa yang baik, masalah yang ditemui, dan cara memperbaiki. Saat proyek berakhir, diadakan final retrospective yang fokus pada lessons learned seluruh proyek (bukan hanya satu sprint).</p></div></details>
</div>

""" + """
<div class="quiz-section" id="quiz_closing">
<h2>🎯 Latihan Soal: Closing Projects</h2>
<p>Pilih jawaban yang paling tepat, lalu klik Submit untuk melihat hasilnya.</p>
""" + make_question("quiz_closing",1,"Cara menutup proyek di mana hasilnya diintegrasikan ke operasi organisasi disebut...",{"a":"Extinction","b":"Addition","c":"Integration","d":"Starvation"}) + make_question("quiz_closing",2,"Berikut ini yang BUKAN merupakan output utama dari closing project adalah...",{"a":"Final Report","b":"Risk Register Update","c":"Lessons-Learned Report","d":"Customer Acceptance Form"}) + make_question("quiz_closing",3,"Ketika manajemen memotong budget proyek secara bertahap untuk menyembunyikan kegagalan, cara ini disebut...",{"a":"Extinction","b":"Integration","c":"Addition","d":"Starvation"}) + make_question("quiz_closing",4,"Siapa yang biasanya membuka close-out meeting?",{"a":"Project Manager","b":"Project Champion/Sponsor","c":"Tim Developer","d":"Stakeholder Eksternal"}) + make_question("quiz_closing",5,"Dalam agile, event mana yang berfungsi sebagai 'mini-closing' setiap sprint?",{"a":"Daily Scrum","b":"Sprint Planning","c":"Sprint Retrospective","d":"Backlog Refinement"}) + make_question("quiz_closing",6,"Knowledge Transfer adalah proses...",{"a":"Memindahkan anggota tim ke proyek lain","b":"Mengkomunikasikan pengetahuan dari satu pihak ke pihak lain dalam organisasi","c":"Menghapus data proyek lama","d":"Membuat proposal proyek baru"}) + make_question("quiz_closing",7,"Apa aset paling berharga yang dihasilkan dari proses closing?",{"a":"Final Report","b":"Customer Acceptance Form","c":"Lessons-Learned Report","d":"Transition Plan"}) + make_question("quiz_closing",8,"Proyek yang menghasilkan produk baru sehingga membentuk divisi/unit baru di organisasi ditutup dengan cara...",{"a":"Integration","b":"Addition","c":"Extinction","d":"Starvation"}) + make_question("quiz_closing",9,"Kapan sebaiknya lessons learned mulai didokumentasikan?",{"a":"Hanya di akhir proyek","b":"Saat close-out meeting","c":"Sepanjang proyek berlangsung","d":"Setelah proyek diaudit"}) + make_question("quiz_closing",10,"Dalam closing agile project, final retrospective fokus pada...",{"a":"Hanya sprint terakhir","b":"Seluruh proyek dari awal hingga akhir","c":"Hanya bug yang belum diperbaiki","d":"Perencanaan proyek baru"}) + """
<div style="margin-top:15px;">
<button class="btn" onclick="submitQuiz('quiz_closing',{1:'c',2:'b',3:'d',4:'b',5:'c',6:'b',7:'c',8:'b',9:'c',10:'b'})">📊 Submit</button>
<button class="btn" style="background:#374151;" onclick="resetQuiz('quiz_closing')">🔄 Reset</button>
</div>
<div id="quiz_closing_result"></div>
</div>
"""

html5 = wrap("Materi 14: Closing Projects","".join(body5),"quiz_closing","materi-14-closing.html")
with open(os.path.join(DIR,"materi-14-closing.html"),"w",encoding="utf-8") as f:
    f.write(html5)
print("DONE: materi-14-closing.html created")
