
import os,sys
sys.stdout.reconfigure(encoding='utf-8')
DIR = r"d:\2. UWIW\0. CHP\Chill Class\resource-materi\ManPro-4"
exec(open(os.path.join(DIR,"gen_part1.py"),encoding="utf-8").read().split("# ====")[0])

body = """
<div class="card">
<h2>1. Pentingnya Eksekusi Proyek</h2>
<p>Planning bagus itu penting, tapi <strong>mengeksekusi dengan baik LEBIH penting lagi</strong>. Riset Fortune menunjukkan alasan utama CEO gagal adalah <em>poor execution</em> — mereka tidak menyelesaikan pekerjaan, tidak tegas, dan tidak memenuhi komitmen.</p>
<ul>
<li>Sebagian besar <strong>waktu dan budget</strong> proyek dihabiskan di fase eksekusi</li>
<li>Tidak ada dua proyek yang dieksekusi dengan cara yang persis sama karena setiap proyek mengandung <strong>ketidakpastian (uncertainty/risk)</strong></li>
</ul>
</div>

<div class="card">
<h2>2. Project Integration Management (Executing)</h2>
<p>Hal-hal penting yang harus dilakukan PM saat eksekusi:</p>
<ol>
<li><strong>Koordinasi planning & execution</strong> — Update rencana saat ada perubahan</li>
<li><strong>Develop and use soft skills</strong> — Leadership, team building, komunikasi, motivasi, negosiasi, conflict management, problem solving</li>
<li><strong>Provide supportive organizational culture</strong></li>
<li><strong>Break the rules when needed</strong> — Gunakan political skills untuk meyakinkan stakeholder</li>
<li><strong>Capitalize on product/business knowledge</strong></li>
<li><strong>Use project execution tools and techniques</strong></li>
</ol>

<h3>Output Penting Integration Management:</h3>
<ul>
<li><strong>Deliverables</strong> — Output paling penting! Produk/layanan yang dihasilkan proyek</li>
<li><strong>Work Performance Data</strong> — KPI, teknikal measures, data aktual. PM bisa menggunakan pendekatan <strong>MBWA (Management By Wandering Around)</strong> — informal observasi dan bicara langsung ke tim</li>
<li><strong>Issue Log</strong> — Dokumen untuk mencatat, memonitor, dan melacak isu. <em>Critical issue</em> = isu yang menghentikan progress pada aktivitas di critical path. Harus ada <strong>escalation process</strong>.</li>
<li><strong>Change Requests</strong> — Proses penanganan perubahan harus sudah didefinisikan saat planning</li>
<li><strong>Lessons Learned Register</strong> — Mendokumentasikan tantangan, masalah, dan peluang</li>
</ul>
</div>

<div class="card">
<h2>3. Managing Project Knowledge</h2>
<p>Ada 2 jenis knowledge:</p>
<table>
<tr><th>Tipe</th><th>Penjelasan</th><th>Contoh</th></tr>
<tr><td><strong>Explicit Knowledge</strong></td><td>Mudah dijelaskan dengan kata-kata, gambar, angka. Mudah dikomunikasikan dan disimpan.</td><td>Buku, dokumen proyek, encyclopedia, manual</td></tr>
<tr><td><strong>Tacit Knowledge</strong></td><td>Sulit diungkapkan, sangat personal. Dibagikan melalui percakapan dan interaksi.</td><td>Keyakinan, insight, pengalaman, intuisi</td></tr>
</table>
<div class="tip">Knowledge management harus dilakukan SEBELUM, SELAMA, dan SETELAH proyek. Organisasi bisa menyediakan explicit knowledge secara tertulis, dan membangun budaya trust untuk berbagi tacit knowledge.</div>
</div>

<div class="card">
<h2>4. Managing Quality (Quality Assurance)</h2>
<p>Quality Assurance menjawab pertanyaan: <em>"Apakah kita melakukan apa yang kita katakan akan kita lakukan, kapan kita bilang, dengan cara yang kita bilang, dan bisakah kita melakukannya lebih baik?"</em></p>
<h3>Tools & Techniques:</h3>
<ul>
<li><strong>Benchmarking</strong> — Membandingkan praktik proyek dengan proyek/produk lain</li>
<li><strong>Quality Audit</strong> — Review terstruktur atas aktivitas quality management. Bisa dijadwalkan atau random. Bisa oleh auditor internal atau pihak ketiga.</li>
<li><strong>Process Analysis</strong> — Menganalisis proses dan mencari perbaikan. Bisa menggunakan task board/kanban board (To Do, In Progress, Done)</li>
<li><strong>Cause-and-Effect Diagram (Fishbone/Ishikawa)</strong> — Menemukan root cause masalah kualitas</li>
</ul>
</div>

<div class="card">
<h2>5. Project Resource Management</h2>
<h3>5.1 Teori Motivasi (SANGAT PENTING untuk ujian!)</h3>

<h3>a. Maslow's Hierarchy of Needs</h3>
<p>Kebutuhan manusia berjenjang, harus dipenuhi dari bawah ke atas:</p>
<ol>
<li><strong>Physiological</strong> — Udara, air, makanan (kebutuhan dasar)</li>
<li><strong>Safety</strong> — Keamanan, perlindungan dari bahaya</li>
<li><strong>Social</strong> — Teman, komunitas, rasa memiliki</li>
<li><strong>Esteem</strong> — Pencapaian, pengakuan, penghargaan</li>
<li><strong>Self-actualization</strong> — Pemenuhan potensi diri</li>
</ol>
<div class="tip">Cara ingat (dari bawah): "<strong>P</strong>aling <strong>S</strong>uka <strong>S</strong>aling <strong>E</strong>jek <strong>S</strong>endiri" = Physiological, Safety, Social, Esteem, Self-actualization</div>

<h3>b. Herzberg's Motivation-Hygiene Theory</h3>
<table>
<tr><th>Hygiene Factors (Penyebab Ketidakpuasan)</th><th>Motivators (Penyebab Kepuasan)</th></tr>
<tr><td>Gaji, kondisi kerja, kebijakan perusahaan, hubungan interpersonal</td><td>Achievement, recognition, the work itself, responsibility, advancement, growth</td></tr>
<tr><td>Jika TIDAK ada = tidak puas. Jika ADA = biasa saja (tidak menambah motivasi)</td><td>Jika ADA = termotivasi. Jika TIDAK ada = biasa saja</td></tr>
</table>
<div class="highlight">Poin kunci Herzberg: <strong>Uang (gaji) BUKAN motivator!</strong> Gaji adalah hygiene factor. Yang benar-benar memotivasi adalah achievement dan recognition.</div>

<h3>c. McClelland's Acquired-Needs Theory</h3>
<table>
<tr><th>Need</th><th>Ciri-ciri</th><th>Cara Mengelola</th></tr>
<tr><td><strong>Achievement (nAch)</strong></td><td>Suka tantangan, hindari risiko terlalu rendah/tinggi, butuh feedback rutin, lebih suka kerja sendiri/dengan achiever lain</td><td>Beri proyek menantang dengan goal yang bisa dicapai, feedback sering</td></tr>
<tr><td><strong>Affiliation (nAff)</strong></td><td>Ingin hubungan harmonis, butuh diterima orang lain, mengikuti norma kelompok</td><td>Ciptakan lingkungan kerja kooperatif</td></tr>
<tr><td><strong>Power (nPow)</strong></td><td>Personal power = suka memerintah. Institutional power = ingin mengorganisir untuk tujuan organisasi</td><td>Beri kesempatan memimpin, tekankan pentingnya tujuan organisasi</td></tr>
</table>

<h3>d. McGregor's Theory X & Y + Ouchi's Theory Z</h3>
<table>
<tr><th>Theory X</th><th>Theory Y</th><th>Theory Z</th></tr>
<tr><td>Anggapan: Pekerja malas, harus dipaksa dan diancam. Pekerja suka diperintah, hindari tanggung jawab.</td><td>Anggapan: Bekerja itu alami. Orang akan mengarahkan dirinya sendiri jika komitmen. Motivasi terbesar: esteem & self-actualization.</td><td>Fokus pada loyalitas karyawan dengan job for life, kesejahteraan on/off the job, work-life balance.</td></tr>
</table>
</div>

<div class="card">
<h2>5.2 Thamhain & Wilemon's Influence Bases</h2>
<p>9 basis pengaruh yang dimiliki PM:</p>
<ol>
<li><strong>Authority</strong> — Hak hierarkis resmi</li>
<li><strong>Assignment</strong> — Kemampuan mempengaruhi penugasan di proyek masa depan</li>
<li><strong>Budget</strong> — Kemampuan mengotorisasi dana</li>
<li><strong>Promotion</strong> — Kemampuan menaikkan posisi</li>
<li><strong>Money</strong> — Kemampuan menaikkan gaji</li>
<li><strong>Penalty</strong> — Kemampuan memberikan hukuman</li>
<li><strong>Work Challenge</strong> — Memberi tugas yang menantang dan menyenangkan (intrinsic)</li>
<li><strong>Expertise</strong> — Pengetahuan khusus yang dianggap penting</li>
<li><strong>Friendship</strong> — Hubungan pribadi yang baik</li>
</ol>
<div class="warn">Proyek GAGAL jika PM terlalu mengandalkan: Authority, Money, Penalty. Proyek SUKSES jika PM menggunakan: <strong>Work Challenge dan Expertise</strong>.</div>
</div>

<div class="card">
<h2>5.3 Covey's 7 Habits of Highly Effective People</h2>
<ol>
<li><strong>Be proactive</strong> — Antisipasi dan rencanakan masalah</li>
<li><strong>Begin with the end in mind</strong> — Punya dan bagikan visi hasil akhir</li>
<li><strong>Put first things first</strong> — Fokus pada hal penting tapi tidak mendesak (planning, relationship building)</li>
<li><strong>Think win/win</strong> — Keputusan yang menguntungkan semua pihak</li>
<li><strong>Seek first to understand, then to be understood</strong> — Empathic listening</li>
<li><strong>Synergize</strong> — Kolaborasi menghasilkan lebih dari jumlah bagian</li>
<li><strong>Sharpen the saw</strong> — Retrain, reenergize, relax untuk hindari burnout</li>
</ol>
</div>

<div class="card">
<h2>5.4 Acquiring Resources</h2>
<ul>
<li><strong>Resource Loading</strong> — Jumlah resource yang dibutuhkan jadwal pada periode waktu tertentu. Gunakan <strong>histogram</strong>. <strong>Overallocation</strong> = lebih banyak resource ditugaskan daripada yang tersedia.</li>
<li><strong>Resource Leveling</strong> — Teknik untuk menyelesaikan konflik resource dengan <strong>menunda task</strong>. Menggunakan slack/float. Tujuan: distribusi resource yang lebih merata. Keuntungan: resource butuh less management, meningkatkan morale, mengurangi masalah accounting.</li>
<li><strong>Resource Smoothing</strong> — Teknik untuk menyelesaikan proyek tepat waktu sambil menghindari peaks and valleys dalam resource demand.</li>
</ul>
</div>

<div class="card">
<h2>5.5 Developing the Team (Tuckman Model)</h2>
<table>
<tr><th>Tahap</th><th>Penjelasan</th></tr>
<tr><td><strong>1. Forming</strong></td><td>Perkenalan anggota tim. Bersikap sopan, belum ada konflik.</td></tr>
<tr><td><strong>2. Storming</strong></td><td>Mulai ada perbedaan pendapat. Konflik tentang cara kerja tim.</td></tr>
<tr><td><strong>3. Norming</strong></td><td>Tim menemukan cara kerja bersama. Aturan dan norma terbentuk.</td></tr>
<tr><td><strong>4. Performing</strong></td><td>Tim fokus pada pencapaian goal. Kinerja optimal!</td></tr>
<tr><td><strong>5. Adjourning</strong></td><td>Tim dibubarkan setelah goal tercapai.</td></tr>
</table>
<div class="tip">Ingat: "<strong>F</strong>orming → <strong>S</strong>torming → <strong>N</strong>orming → <strong>P</strong>erforming → <strong>A</strong>djourning" = Fans Sering Nonton Pertandingan Akhir</div>
</div>

<div class="card">
<h2>5.6 MBTI & Social Styles</h2>
<h3>MBTI (4 dimensi):</h3>
<ul>
<li><strong>E/I</strong> (Extrovert/Introvert) — 75% orang IT = Introvert!</li>
<li><strong>S/N</strong> (Sensing/Intuition) — Fakta vs Big Picture. 55% IT = Intuitive</li>
<li><strong>T/F</strong> (Thinking/Feeling) — Logis vs Personal. 80% IT = Thinking</li>
<li><strong>J/P</strong> (Judgment/Perception) — Terstruktur vs Fleksibel</li>
</ul>
<h3>Social Styles Profile (4 zona):</h3>
<ul>
<li><strong>Drivers</strong> = proaktif & task-oriented</li>
<li><strong>Expressives</strong> = proaktif & people-oriented</li>
<li><strong>Analyticals</strong> = reaktif & task-oriented</li>
<li><strong>Amiables</strong> = reaktif & people-oriented</li>
</ul>
<div class="warn">Orang di sudut berlawanan (Drivers vs Amiables, Analyticals vs Expressives) sering sulit bekerja sama!</div>
</div>

<div class="card">
<h2>6. Conflict Management (Thomas-Kilmann)</h2>
<p>Dua dimensi: <strong>Assertiveness</strong> (memuaskan diri sendiri) dan <strong>Cooperativeness</strong> (memuaskan pihak lain)</p>
<table>
<tr><th>Mode</th><th>Assertive?</th><th>Cooperative?</th><th>Penjelasan</th></tr>
<tr><td><strong>Competing</strong></td><td>Tinggi</td><td>Rendah</td><td>Win-lose. Memaksakan pendapat sendiri.</td></tr>
<tr><td><strong>Accommodating</strong></td><td>Rendah</td><td>Tinggi</td><td>Mengalah. Mengorbankan kepentingan sendiri.</td></tr>
<tr><td><strong>Avoiding</strong></td><td>Rendah</td><td>Rendah</td><td>Menghindar dari konflik. Tidak ada resolusi.</td></tr>
<tr><td><strong>Collaborating</strong></td><td>Tinggi</td><td>Tinggi</td><td>Win-win. Mencari solusi bersama. Paling ideal!</td></tr>
<tr><td><strong>Compromising</strong></td><td>Sedang</td><td>Sedang</td><td>Kedua pihak mengorbankan sebagian. Give and take.</td></tr>
</table>
<div class="highlight">Konflik TIDAK selalu buruk. Konflik bisa menghasilkan ide baru, alternatif lebih baik, dan motivasi. Tanpa konflik bisa terjadi <strong>groupthink</strong> — konformitas berlebihan dalam kelompok.</div>
</div>

<div class="card">
<h2>7. Leadership Styles</h2>
<table>
<tr><th>Style</th><th>Penjelasan</th></tr>
<tr><td><strong>Laissez-faire</strong></td><td>"Let go" — Tim menentukan goal dan cara mencapainya sendiri</td></tr>
<tr><td><strong>Transactional</strong></td><td>Management by exception — Reward dan punishment untuk capai goal</td></tr>
<tr><td><strong>Servant Leader</strong></td><td>Fokus pada pertumbuhan, pembelajaran, dan otonomi orang lain. <em>Paling cocok untuk Scrum Master!</em></td></tr>
<tr><td><strong>Transformational</strong></td><td>Memberdayakan orang lain dan memandu perubahan melalui inspirasi</td></tr>
<tr><td><strong>Charismatic</strong></td><td>Menginspirasi melalui antusiasme dan kepercayaan diri</td></tr>
<tr><td><strong>Interactional</strong></td><td>Kombinasi transactional + transformational + charismatic</td></tr>
</table>
</div>

<div class="card">
<h2>8. Communications & Stakeholder (Executing)</h2>
<ul>
<li>Riset menunjukkan komunikasi face-to-face: <strong>58% body language, 35% cara bicara, 7% kata-kata</strong></li>
<li>Jumlah saluran komunikasi = <strong>n(n-1)/2</strong> (n = jumlah orang)</li>
<li>Introvert suka komunikasi privat, Extrovert suka diskusi publik</li>
<li>Managing Stakeholder Engagement membutuhkan leadership dan interpersonal skills PM yang kuat</li>
</ul>
</div>

<div class="card">
<h2>9. Procurement & Risk (Executing)</h2>
<h3>Conducting Procurements:</h3>
<ul>
<li>3 pendekatan: (1) Approach preferred supplier, (2) Approach several qualified suppliers, (3) Advertise to many</li>
<li><strong>Source Selection</strong> = evaluasi proposal, pilih terbaik, negosiasi, award kontrak</li>
<li><strong>BAFO</strong> (Best and Final Offer) = penawaran terakhir dari seller di shortlist</li>
</ul>
<h3>Implementing Risk Responses:</h3>
<p>Merencanakan risk response itu penting, tapi <strong>mengimplementasikannya dengan baik LEBIH penting</strong>.</p>
</div>

<div class="card">
<h2>10. Executing Agile/Hybrid</h2>
<ul>
<li>Tim agile harus <strong>self-directed</strong></li>
<li>Scrum Master menggunakan pendekatan <strong>servant-leader</strong></li>
<li>Scrum theory menekankan values: <strong>Commitment, Focus, Openness, Respect, Courage</strong></li>
<li><strong>Psychological safety</strong> = kualitas #1 untuk tim yang hebat — orang harus merasa aman untuk mengungkapkan pendapat</li>
</ul>
</div>
"""

quiz = '<div class="quiz-section" id="quiz_exec"><h2>Latihan Soal: Executing Projects</h2>'
quiz += make_question("quiz_exec",1,"Menurut Herzberg, mana yang merupakan MOTIVATOR (bukan hygiene factor)?",{"a":"Gaji","b":"Kondisi kerja","c":"Achievement dan Recognition","d":"Kebijakan perusahaan"})
quiz += make_question("quiz_exec",2,"Dalam Tuckman Model, tahap di mana tim mulai berkonflik disebut...",{"a":"Forming","b":"Storming","c":"Norming","d":"Performing"})
quiz += make_question("quiz_exec",3,"Menurut Thamhain & Wilemon, basis pengaruh mana yang PALING efektif untuk keberhasilan proyek?",{"a":"Authority dan Penalty","b":"Money dan Promotion","c":"Work Challenge dan Expertise","d":"Budget dan Assignment"})
quiz += make_question("quiz_exec",4,"Dalam Thomas-Kilmann, mode konflik yang PALING ideal (win-win) adalah...",{"a":"Competing","b":"Avoiding","c":"Compromising","d":"Collaborating"})
quiz += make_question("quiz_exec",5,"Maslow's Hierarchy: Urutan dari bawah ke atas yang BENAR adalah...",{"a":"Safety, Physiological, Social, Esteem, Self-actualization","b":"Physiological, Safety, Social, Esteem, Self-actualization","c":"Social, Safety, Physiological, Esteem, Self-actualization","d":"Physiological, Social, Safety, Self-actualization, Esteem"})
quiz += make_question("quiz_exec",6,"Apa itu MBWA?",{"a":"Management By Wandering Around - observasi informal ke tim","b":"Most Basic Work Assessment","c":"Multiple Budget Work Allocation","d":"Manager-Based Work Authority"})
quiz += make_question("quiz_exec",7,"Resource Leveling bertujuan untuk...",{"a":"Menambah resource baru ke proyek","b":"Membuat distribusi penggunaan resource lebih merata dengan menunda task","c":"Mengurangi jumlah anggota tim","d":"Meningkatkan budget proyek"})
quiz += make_question("quiz_exec",8,"Dalam MBTI, mayoritas orang IT adalah...",{"a":"Extrovert, Sensing, Feeling","b":"Introvert, Intuitive, Thinking","c":"Extrovert, Intuitive, Feeling","d":"Introvert, Sensing, Thinking"})
quiz += make_question("quiz_exec",9,"Servant Leader paling cocok digunakan oleh...",{"a":"CEO perusahaan","b":"Scrum Master dalam tim agile","c":"Quality Auditor","d":"Vendor eksternal"})
quiz += make_question("quiz_exec",10,"Groupthink terjadi ketika...",{"a":"Tim terlalu banyak konflik","b":"Tim terlalu banyak anggota","c":"Tidak ada perbedaan pendapat sehingga tim menjadi konformis","d":"PM tidak hadir dalam rapat"})
quiz += make_question("quiz_exec",11,"Rumus menghitung jumlah saluran komunikasi dalam tim adalah...",{"a":"n x 2","b":"n(n-1)/2","c":"n(n+1)/2","d":"2n - 1"})
quiz += make_question("quiz_exec",12,"McClelland: Orang dengan need for Achievement (nAch) biasanya...",{"a":"Suka risiko tinggi","b":"Suka risiko rendah","c":"Menghindari risiko tinggi DAN rendah, mencari yang achievable","d":"Tidak peduli dengan risiko"})

quiz += """
<div style="margin-top:15px;">
<button class="btn" onclick="submitQuiz('quiz_exec',{1:'c',2:'b',3:'c',4:'d',5:'b',6:'a',7:'b',8:'b',9:'b',10:'c',11:'b',12:'c'})">Submit</button>
<button class="btn" style="background:#374151;" onclick="resetQuiz('quiz_exec')">Reset</button>
</div>
<div id="quiz_exec_result"></div></div>"""

html = wrap("Materi 12: Executing Projects", body+quiz, "quiz_exec", "materi-12-executing.html")
with open(os.path.join(DIR,"materi-12-executing.html"),"w",encoding="utf-8") as f:
    f.write(html)
print("DONE: materi-12-executing.html")
