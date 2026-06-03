
import os,sys
sys.stdout.reconfigure(encoding='utf-8')
DIR = r"d:\2. UWIW\0. CHP\Chill Class\resource-materi\ManPro-4"
exec(open(os.path.join(DIR,"gen_part1.py"),encoding="utf-8").read().split("# ====")[0])

body = """
<div class="card">
<h2>BAGIAN A: PROJECT COMMUNICATION MANAGEMENT</h2>
</div>

<div class="card">
<h2>1. Pentingnya Komunikasi</h2>
<ul>
<li><strong>Ancaman terbesar</strong> banyak proyek = kegagalan komunikasi</li>
<li>PM menghabiskan <strong>90% waktunya</strong> untuk berkomunikasi</li>
<li>Tapi banyak PM yang gagal merencanakan komunikasi!</li>
<li>Budaya kita tidak menggambarkan profesional IT sebagai komunikator yang baik, padahal skill komunikasi sangat penting untuk karir IT</li>
</ul>
<p><strong>Project Communications Management</strong> meliputi: generating, collecting, disseminating, dan storing informasi proyek.</p>
<div class="highlight">Output utama planning: <strong>Communications Management Plan</strong> dan <strong>Project Website</strong></div>
</div>

<div class="card">
<h2>2. Communications Management Plan</h2>
<p>Dokumen yang memandu komunikasi proyek. Setiap proyek HARUS punya, sekecil apapun.</p>
<ul>
<li>Proyek kecil: bisa jadi bagian dari team contract</li>
<li>Proyek besar: harus dokumen terpisah</li>
</ul>
<h3>Isi Communications Management Plan:</h3>
<ol>
<li><strong>Stakeholder communications requirements</strong></li>
<li><strong>Information to be communicated</strong> (format, content, level of detail)</li>
<li><strong>Who</strong> will receive and produce the information</li>
<li><strong>Methods/technologies</strong> for conveying information</li>
<li><strong>Frequency</strong> of communication</li>
<li><strong>Escalation procedures</strong> for resolving issues</li>
<li><strong>Revision procedures</strong> for updating the plan</li>
<li><strong>Glossary</strong> of common terminology</li>
</ol>
<div class="tip">Cara ingat isi Comm Plan: "<strong>SIWMFERG</strong>" = Stakeholder req, Info, Who, Methods, Frequency, Escalation, Revision, Glossary</div>
</div>

<div class="card">
<h2>3. Stakeholder Analysis for Communications</h2>
<p>Sebuah tabel yang menentukan:</p>
<table>
<tr><th>Kolom</th><th>Penjelasan</th></tr>
<tr><td><strong>Stakeholders</strong></td><td>Siapa yang membutuhkan informasi?</td></tr>
<tr><td><strong>Document Name</strong></td><td>Dokumen apa yang diberikan?</td></tr>
<tr><td><strong>Document Format</strong></td><td>Hard copy, email, meeting, intranet?</td></tr>
<tr><td><strong>Contact Person</strong></td><td>Siapa yang bertanggung jawab menyiapkan?</td></tr>
<tr><td><strong>Due</strong></td><td>Kapan harus diberikan?</td></tr>
</table>
</div>

<div class="card">
<h2>4. Project Websites</h2>
<ul>
<li>Banyak tim proyek memposting informasi proyek ke website proyek atau SharePoint</li>
<li>Bisa juga menggunakan <strong>blogs</strong> — jurnal web yang mudah digunakan</li>
<li>Beberapa bagian website bisa terbuka, bagian lain hanya bisa diakses stakeholder tertentu</li>
<li>Menggunakan kode akses <strong>CRUD</strong> (Create, Read, Update, Delete)</li>
<li><strong>Quad charts</strong> — grafik 4 kuadran: project summary, financials, schedules, dan issues</li>
</ul>
</div>

<div class="card">
<h2>5. Agile Communications Planning</h2>
<p>Alih-alih mendokumentasikan rencana komunikasi, Scrum framework sudah memiliki event bawaan:</p>
<table>
<tr><th>Scrum Event</th><th>Durasi Max</th><th>Fungsi Komunikasi</th></tr>
<tr><td><strong>Sprint</strong></td><td>1 bulan</td><td>Container untuk semua event. Punya sprint goal yang jelas.</td></tr>
<tr><td><strong>Sprint Planning</strong></td><td>8 jam</td><td>Merencanakan apa yang dikerjakan sprint ini (value, scope, how)</td></tr>
<tr><td><strong>Daily Scrum</strong></td><td>15 menit</td><td>Inspeksi progress, adaptasi sprint backlog, rencana hari berikutnya. Menghilangkan kebutuhan meeting lain.</td></tr>
<tr><td><strong>Sprint Review</strong></td><td>4 jam</td><td>Presentasi hasil kerja ke stakeholder kunci. Working session untuk inspeksi dan adaptasi.</td></tr>
<tr><td><strong>Sprint Retrospective</strong></td><td>3 jam</td><td>Tim membahas apa yang baik, masalah, dan solusi. Hanya tim internal.</td></tr>
</table>
</div>

<div class="card">
<h2>BAGIAN B: PROJECT STAKEHOLDER MANAGEMENT</h2>
</div>

<div class="card">
<h2>6. Stakeholder Engagement Planning</h2>
<p><strong>Stakeholder engagement planning</strong> = menentukan strategi untuk melibatkan stakeholder secara efektif dalam keputusan dan aktivitas proyek.</p>
<ul>
<li>Output utama: <strong>Stakeholder Engagement Plan</strong></li>
<li>Stakeholder berubah seiring proyek berjalan → plan harus di-update!</li>
<li>Harus selaras dengan communications plan dan resource management plan</li>
<li>Organisasi juga harus memperhatikan <strong>cultural changes</strong> yang disebabkan proyek</li>
</ul>
</div>

<div class="card">
<h2>7. Stakeholder Engagement Plan (Isi)</h2>
<ul>
<li><strong>Current and desired engagement levels</strong> of key stakeholders</li>
<li><strong>Scope and impact</strong> of change to stakeholders</li>
<li>Identified <strong>interrelationships</strong> between stakeholders</li>
<li>Potential <strong>management strategies</strong> for each stakeholder classification</li>
<li>Methods for <strong>updating</strong> the plan</li>
</ul>
<div class="warn">Stakeholder engagement plan sering berisi <strong>informasi sensitif</strong> sehingga TIDAK boleh menjadi bagian dari dokumen proyek resmi yang bisa dilihat semua stakeholder. Distribusinya sangat terbatas!</div>
</div>

<div class="card">
<h2>8. Agile Stakeholder Planning</h2>
<ul>
<li>Sprint Review memungkinkan stakeholder kunci menginspeksi outcome dan menentukan adaptasi</li>
<li>Daily Scrum membahas impediment → Scrum Master menghapus impediment</li>
<li>Stakeholder kunci harus berpartisipasi dalam sprint review, mengembangkan acceptance criteria, dan menentukan <strong>Definition of Done</strong></li>
<li><strong>Information Radiators</strong> (seperti task board yang ditempel di dinding) memberikan visibilitas progress ke semua stakeholder</li>
</ul>
</div>

<div class="card">
<h2>Ringkasan & Poin Hafalan</h2>
<div class="highlight">
<p><strong>KOMUNIKASI = 90% waktu PM</strong></p>
<p><strong>8 Isi Comm Plan:</strong> Stakeholder req, Info, Who, Methods, Frequency, Escalation, Revision, Glossary</p>
<p><strong>5 Scrum Events:</strong> Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective</p>
</div>
<div class="tip">
<p><strong>Stakeholder Engagement Plan = RAHASIA!</strong> Tidak boleh jadi bagian dokumen resmi yang bisa diakses semua stakeholder.</p>
<p><strong>CRUD</strong> = Create, Read, Update, Delete (tingkat akses website proyek)</p>
</div>
</div>

<div class="card">
<h2>Contoh Soal & Pembahasan</h2>
<details><summary>Berapa persen waktu yang dihabiskan PM untuk berkomunikasi?</summary>
<div><p><strong>Jawaban: 90%</strong>. Banyak ahli sepakat bahwa kegagalan komunikasi adalah ancaman terbesar untuk proyek.</p></div></details>
<details><summary>Apa perbedaan Communication Management Plan di proyek kecil vs besar?</summary>
<div><p>Proyek kecil: bisa menjadi bagian dari team contract. Proyek besar: harus menjadi dokumen terpisah yang lengkap.</p></div></details>
<details><summary>Mengapa Stakeholder Engagement Plan bersifat rahasia?</summary>
<div><p>Karena berisi informasi sensitif tentang strategi mengelola stakeholder tertentu (termasuk yang mungkin resisten). Jika terbuka, bisa merusak hubungan.</p></div></details>
</div>
"""

quiz = '<div class="quiz-section" id="quiz_comm"><h2>Latihan Soal: Communication & Stakeholder</h2>'
quiz += make_question("quiz_comm",1,"Berapa persen waktu yang dihabiskan PM untuk berkomunikasi?",{"a":"50%","b":"70%","c":"90%","d":"100%"})
quiz += make_question("quiz_comm",2,"Untuk proyek KECIL, communications management plan bisa...",{"a":"Tidak perlu dibuat","b":"Menjadi bagian dari team contract","c":"Hanya berupa email","d":"Dibuat setelah proyek selesai"})
quiz += make_question("quiz_comm",3,"CRUD pada akses website proyek singkatan dari...",{"a":"Create, Read, Update, Delete","b":"Create, Review, Upload, Download","c":"Check, Read, Update, Deploy","d":"Create, Revise, Undo, Delete"})
quiz += make_question("quiz_comm",4,"Stakeholder Engagement Plan bersifat...",{"a":"Publik dan bisa diakses semua stakeholder","b":"Rahasia dan distribusinya sangat terbatas","c":"Hanya dibuat untuk proyek besar","d":"Opsional dan tidak wajib"})
quiz += make_question("quiz_comm",5,"Daily Scrum berlangsung maksimal...",{"a":"30 menit","b":"1 jam","c":"15 menit","d":"2 jam"})
quiz += make_question("quiz_comm",6,"Information Radiators dalam agile bertujuan untuk...",{"a":"Menghangatkan ruangan meeting","b":"Memberikan visibilitas progress kerja ke semua stakeholder","c":"Mengirim email otomatis","d":"Mengukur kecepatan internet"})
quiz += make_question("quiz_comm",7,"Quad charts pada project website menampilkan 4 kuadran, yaitu...",{"a":"Scope, Time, Cost, Quality","b":"Project Summary, Financials, Schedules, Issues","c":"Risk, Budget, Team, Deliverables","d":"Planning, Executing, Monitoring, Closing"})
quiz += make_question("quiz_comm",8,"Sprint Retrospective hanya dihadiri oleh...",{"a":"Semua stakeholder","b":"Customer dan PM saja","c":"Tim internal (team members) saja","d":"Sponsor dan manajemen"})
quiz += make_question("quiz_comm",9,"Ancaman TERBESAR untuk keberhasilan proyek menurut banyak ahli adalah...",{"a":"Budget terbatas","b":"Teknologi berubah cepat","c":"Kegagalan komunikasi","d":"Tim yang kurang kompeten"})
quiz += make_question("quiz_comm",10,"Berikut yang BUKAN merupakan isi dari Communications Management Plan adalah...",{"a":"Frequency of communication","b":"Escalation procedures","c":"Risk Register","d":"Glossary of common terminology"})

quiz += """
<div style="margin-top:15px;">
<button class="btn" onclick="submitQuiz('quiz_comm',{1:'c',2:'b',3:'a',4:'b',5:'c',6:'b',7:'b',8:'c',9:'c',10:'c'})">Submit</button>
<button class="btn" style="background:#374151;" onclick="resetQuiz('quiz_comm')">Reset</button>
</div>
<div id="quiz_comm_result"></div></div>"""

html = wrap("Materi 10: Project Communication & Stakeholder Management", body+quiz, "quiz_comm", "materi-10-communication-stakeholder.html")
with open(os.path.join(DIR,"materi-10-communication-stakeholder.html"),"w",encoding="utf-8") as f:
    f.write(html)
print("DONE: materi-10-communication-stakeholder.html")
