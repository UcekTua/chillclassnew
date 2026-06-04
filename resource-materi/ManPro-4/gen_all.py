import os
DIR = r"d:\2. UWIW\0. CHP\Chill Class\resource-materi\ManPro-4"

CSS = """
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:'Inter',sans-serif; background:#0a0a14; color:#d4d4e0; line-height:1.8; }
.container { max-width:920px; margin:0 auto; padding:24px; }
h1 { font-size:2.2em; font-weight:800; background:linear-gradient(135deg,#6366f1,#a855f7,#ec4899); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:8px; letter-spacing:-0.5px; }
.subtitle { color:#94a3b8; font-size:1em; margin-bottom:20px; }
h2 { color:#a78bfa; border-bottom:2px solid #a78bfa22; padding-bottom:8px; margin:32px 0 16px; font-size:1.45em; font-weight:700; }
h3 { color:#c4b5fd; margin:20px 0 10px; font-size:1.15em; font-weight:600; }
h4 { color:#818cf8; margin:14px 0 8px; font-size:1.05em; font-weight:600; }
.card { background:linear-gradient(145deg,#12122a,#161630); border-radius:14px; padding:28px; margin:18px 0; border:1px solid #ffffff08; box-shadow:0 4px 20px #00000040; }
.highlight { background:#2d1b6980; border-left:4px solid #a855f7; padding:16px 20px; border-radius:0 10px 10px 0; margin:12px 0; }
.tip { background:#0f291580; border-left:4px solid #4ade80; padding:16px 20px; border-radius:0 10px 10px 0; margin:12px 0; }
.warn { background:#29200f80; border-left:4px solid #fbbf24; padding:16px 20px; border-radius:0 10px 10px 0; margin:12px 0; }
.danger { background:#2a0f0f80; border-left:4px solid #f87171; padding:16px 20px; border-radius:0 10px 10px 0; margin:12px 0; }
table { width:100%; border-collapse:collapse; margin:16px 0; font-size:.95em; }
th { background:#6366f120; color:#a78bfa; padding:12px 14px; text-align:left; font-weight:600; }
td { padding:11px 14px; border-bottom:1px solid #ffffff08; }
tr:hover { background:#ffffff04; }
ul,ol { padding-left:24px; margin:10px 0; }
li { margin:6px 0; }
.quiz-section { background:linear-gradient(145deg,#12122a,#161630); border-radius:14px; padding:28px; margin:22px 0; border:1px solid #6366f122; }
.question { background:#0d0d20; padding:22px; border-radius:12px; margin:16px 0; border:1px solid #ffffff06; }
.question p.q-text { font-weight:600; margin-bottom:14px; color:#e2e8f0; font-size:1.02em; line-height:1.6; }
.option { display:block; padding:11px 16px; margin:6px 0; background:#14142e; border-radius:9px; cursor:pointer; transition:all .2s ease; border:2px solid transparent; font-size:.95em; }
.option:hover { background:#1e1e42; border-color:#6366f144; }
.option.selected { background:#6366f120; border-color:#6366f1; }
.option.correct { background:#16a34a22; border-color:#16a34a; }
.option.wrong { background:#dc262622; border-color:#dc2626; }
.btn { background:linear-gradient(135deg,#6366f1,#a855f7); color:#fff; border:none; padding:12px 32px; border-radius:9px; cursor:pointer; font-size:1em; font-weight:600; margin:8px 6px 8px 0; transition:all .2s; letter-spacing:0.3px; }
.btn:hover { transform:translateY(-1px); box-shadow:0 4px 16px #6366f140; }
.btn-secondary { background:linear-gradient(135deg,#374151,#4b5563); }
.btn-secondary:hover { box-shadow:0 4px 16px #37415140; }
.result { padding:20px; border-radius:12px; margin:16px 0; font-size:1.1em; font-weight:700; }
.nav { display:flex; flex-wrap:wrap; gap:8px; margin:20px 0; position:sticky; top:10px; z-index:100; background:#0a0a14ee; backdrop-filter:blur(10px); padding:12px; border-radius:12px; border:1px solid #ffffff08; }
.nav a { background:#14142e; color:#a78bfa; padding:9px 18px; border-radius:9px; text-decoration:none; border:1px solid #a78bfa22; font-size:.88em; font-weight:500; transition:all .2s; }
.nav a:hover { background:#6366f133; border-color:#6366f1; transform:translateY(-1px); }
.nav a.active { background:linear-gradient(135deg,#6366f1,#a855f7); color:#fff; border-color:transparent; }
.badge { display:inline-block; background:#6366f125; color:#a78bfa; padding:3px 12px; border-radius:20px; font-size:.82em; font-weight:600; margin:2px; }
details { margin:12px 0; }
summary { cursor:pointer; color:#c4b5fd; font-weight:600; padding:10px 14px; background:#0d0d20; border-radius:9px; transition:background .2s; list-style:none; }
summary::-webkit-details-marker { display:none; }
summary::before { content:'▸ '; color:#6366f1; }
details[open] summary { border-radius:9px 9px 0 0; background:#161630; }
details[open] summary::before { content:'▾ '; }
details > div { background:#111128; padding:18px; border-radius:0 0 9px 9px; border:1px solid #ffffff06; border-top:none; }
.comparison { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:14px 0; }
.comparison > div { background:#14142e; padding:18px; border-radius:10px; border:1px solid #ffffff08; }
@media(max-width:700px) { .comparison { grid-template-columns:1fr; } .nav { position:static; } h1 { font-size:1.6em; } }
.formula { background:#1a0a30; border:1px solid #a855f740; padding:16px 20px; border-radius:10px; margin:12px 0; font-family:'Courier New',monospace; font-size:1.05em; color:#e9d5ff; text-align:center; }
.toc { background:#0d0d20; border-radius:12px; padding:20px 24px; margin:16px 0; border:1px solid #ffffff08; }
.toc a { color:#818cf8; text-decoration:none; display:block; padding:4px 0; transition:color .2s; }
.toc a:hover { color:#a855f7; }
.emoji-card { text-align:center; padding:16px; background:#14142e; border-radius:10px; border:1px solid #ffffff08; }
.emoji-card .emoji { font-size:2.4em; margin-bottom:8px; }
.grid-3 { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px; margin:14px 0; }
.explanation { background:#0f1520; padding:16px 18px; border-radius:8px; margin-top:10px; border-left:3px solid #3b82f6; display:none; }
.explanation.show { display:block; }
strong { color:#e2e8f0; }
em { color:#c4b5fd; font-style:italic; }
code { background:#1e1e3a; padding:2px 8px; border-radius:4px; font-size:.92em; color:#a5b4fc; }
.progress-bar { background:#1a1a2e; border-radius:10px; height:12px; margin:10px 0; overflow:hidden; }
.progress-fill { background:linear-gradient(90deg,#6366f1,#a855f7); height:100%; border-radius:10px; transition:width .5s ease; }
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
  var scoreData = localStorage.getItem(quizId + '_submitted');
  if (scoreData) {
    var sd = JSON.parse(scoreData);
    submitQuizSilent(quizId, sd.answers);
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
  document.querySelectorAll('#'+quizId+' .option').forEach(function(o){ o.classList.remove('correct','wrong'); });
  for (var qNum in answers) {
    var q = document.getElementById(quizId + '_q' + qNum);
    if (!q) continue;
    var selected = q.querySelector('.option.selected');
    var correctId = quizId + '_q' + qNum + '_' + answers[qNum];
    var correctEl = document.getElementById(correctId);
    if (correctEl) correctEl.classList.add('correct');
    q.querySelectorAll('.option').forEach(function(o){ o.style.pointerEvents='none'; });
    if (selected) {
      if (selected.id === correctId) { score++; }
      else { selected.classList.add('wrong'); }
    }
    var expDiv = q.querySelector('.explanation');
    if (expDiv) expDiv.classList.add('show');
  }
  var resultDiv = document.getElementById(quizId + '_result');
  var pct = Math.round(score/total*100);
  var color = pct >= 80 ? '#16a34a' : pct >= 60 ? '#eab308' : '#dc2626';
  var emoji = pct >= 80 ? '🎉' : pct >= 60 ? '⚠️' : '❌';
  var msg = pct >= 80 ? 'Excellent! Kamu sudah paham materi ini!' : pct >= 60 ? 'Lumayan, tapi perlu belajar lagi beberapa bagian.' : 'Pelajari ulang materinya ya, masih banyak yang perlu dipahami.';
  resultDiv.innerHTML = '<div class=\"result\" style=\"background:'+color+'18;border:2px solid '+color+'\">'+emoji+' Skor: '+score+'/'+total+' ('+pct+'%) — '+msg+'</div>';
  localStorage.setItem(quizId+'_submitted', JSON.stringify({answers:answers,score:score,total:total}));
}
function submitQuizSilent(quizId, answers) {
  var score = 0;
  var total = Object.keys(answers).length;
  for (var qNum in answers) {
    var q = document.getElementById(quizId + '_q' + qNum);
    if (!q) continue;
    var selected = q.querySelector('.option.selected');
    var correctId = quizId + '_q' + qNum + '_' + answers[qNum];
    var correctEl = document.getElementById(correctId);
    if (correctEl) correctEl.classList.add('correct');
    q.querySelectorAll('.option').forEach(function(o){ o.style.pointerEvents='none'; });
    if (selected) {
      if (selected.id === correctId) { score++; }
      else { selected.classList.add('wrong'); }
    }
    var expDiv = q.querySelector('.explanation');
    if (expDiv) expDiv.classList.add('show');
  }
  var resultDiv = document.getElementById(quizId + '_result');
  var pct = Math.round(score/total*100);
  var color = pct >= 80 ? '#16a34a' : pct >= 60 ? '#eab308' : '#dc2626';
  var emoji = pct >= 80 ? '🎉' : pct >= 60 ? '⚠️' : '❌';
  var msg = pct >= 80 ? 'Excellent! Kamu sudah paham materi ini!' : pct >= 60 ? 'Lumayan, tapi perlu belajar lagi beberapa bagian.' : 'Pelajari ulang materinya ya, masih banyak yang perlu dipahami.';
  resultDiv.innerHTML = '<div class=\"result\" style=\"background:'+color+'18;border:2px solid '+color+'\">'+emoji+' Skor: '+score+'/'+total+' ('+pct+'%) — '+msg+'</div>';
}
function resetQuiz(quizId) {
  document.querySelectorAll('#'+quizId+' .option').forEach(function(o){
    o.classList.remove('selected','correct','wrong');
    o.querySelector('input').checked=false;
    o.style.pointerEvents='auto';
  });
  document.querySelectorAll('#'+quizId+' .explanation').forEach(function(e){ e.classList.remove('show'); });
  document.getElementById(quizId+'_result').innerHTML='';
  localStorage.removeItem('quiz_'+quizId);
  localStorage.removeItem(quizId+'_submitted');
}
"""

def nav_links(current):
    files = [
        ("materi-10-communication-stakeholder.html","📡 Communication & Stakeholder"),
        ("materi-11-risk-procurement.html","⚠️ Risk & Procurement"),
        ("materi-12-executing.html","🚀 Executing"),
        ("materi-13-monitoring-controlling.html","📊 Monitoring & Controlling"),
        ("materi-14-closing.html","🏁 Closing"),
        ("simulasi-uas.html","📝 Simulasi UAS"),
    ]
    html = '<div class="nav">'
    for f,label in files:
        cls = ' class="active"' if f == current else ''
        html += f'<a href="{f}"{cls}>{label}</a>'
    html += '</div>'
    return html

def wrap(title, body, quizId, current_file, subtitle=""):
    sub_html = f'<p class="subtitle">{subtitle}</p>' if subtitle else ''
    return f"""<!DOCTYPE html>
<html lang="id"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>{title} - ManPro UAS Study</title>
<style>{CSS}</style></head><body>
<div class="container">
{nav_links(current_file)}
<h1>{title}</h1>
{sub_html}
{body}
<div style="text-align:center;margin:40px 0 20px;color:#475569;font-size:.85em;">
<p>📚 Manajemen Proyek TI — Fasilkom UI | UAS Study Material</p>
</div>
</div>
<script>{QUIZ_JS}</script>
<script>document.addEventListener('DOMContentLoaded',function(){{ initQuiz('{quizId}'); }});</script>
</body></html>"""

def make_option(qid, key, text):
    oid = f"{qid}_{key}"
    return f'<label class="option" id="{oid}" onclick="selectOpt(this,this.closest(\'.quiz-section\').id)"><input type="radio" name="{qid}" style="display:none">{key.upper()}. {text}</label>'

def make_question(quiz_id, num, text, options, explanation=""):
    qid = f"{quiz_id}_q{num}"
    opts = ""
    for k,v in options.items():
        opts += make_option(qid, k, v)
    exp = f'<div class="explanation">{explanation}</div>' if explanation else ''
    return f'<div class="question" id="{qid}"><p class="q-text">{num}. {text}</p>{opts}{exp}</div>'

print("Shared components loaded. Running individual generators...")
# The individual generators will be exec'd
exec(open(os.path.join(DIR,"gen_m1.py"), encoding="utf-8").read())
exec(open(os.path.join(DIR,"gen_m2.py"), encoding="utf-8").read())
exec(open(os.path.join(DIR,"gen_m3.py"), encoding="utf-8").read())
exec(open(os.path.join(DIR,"gen_m4.py"), encoding="utf-8").read())
exec(open(os.path.join(DIR,"gen_m5.py"), encoding="utf-8").read())
exec(open(os.path.join(DIR,"gen_uas.py"), encoding="utf-8").read())
print("\\nALL FILES GENERATED SUCCESSFULLY!")
