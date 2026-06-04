# gen_m4.py — Monitoring & Controlling Projects
body = """
<div class="toc"><h3>📑 Daftar Isi</h3>
<a href="#intro">1. Gambaran Umum</a>
<a href="#evm">2. Earned Value Management (EVM)</a>
<a href="#formula">3. Rumus-Rumus EVM</a>
<a href="#reports">4. Performance Reports</a>
<a href="#change">5. Integrated Change Control</a>
<a href="#scope">6. Scope Management</a>
<a href="#schedule">7. Schedule Control</a>
<a href="#quality">8. Quality Control & 7 Basic Tools</a>
<a href="#other">9. Resource, Comm, Stakeholder, Risk, Procurement</a>
<a href="#agile-mc">10. Agile: Burn & Velocity Charts</a>
<a href="#hafal">11. Ringkasan & Cara Menghafal</a>
<a href="#latihan">12. Latihan Soal</a></div>

<div class="card" id="intro"><h2>📊 1. Gambaran Umum</h2>
<p>Monitoring & Controlling = mengukur progres secara reguler, memastikan proyek memenuhi tujuan & kebutuhan bisnis, dan mengambil tindakan korektif jika perlu.</p></div>

<div class="card" id="evm"><h2>📈 2. Earned Value Management (EVM)</h2>
<p>EVM = teknik pengukuran kinerja proyek yang <strong>mengintegrasikan scope, time, dan cost</strong>.</p>
<h3>Tiga Nilai Dasar EVM:</h3>
<table><tr><th>Nilai</th><th>Nama</th><th>Penjelasan Sederhana</th></tr>
<tr><td><strong>PV</strong></td><td>Planned Value</td><td>Berapa yang SEHARUSNYA sudah dikerjakan menurut jadwal (dalam Rupiah)</td></tr>
<tr><td><strong>AC</strong></td><td>Actual Cost</td><td>Berapa biaya yang BENAR-BENAR sudah dikeluarkan</td></tr>
<tr><td><strong>EV</strong></td><td>Earned Value</td><td>Nilai pekerjaan yang BENAR-BENAR sudah selesai (dalam Rupiah)</td></tr></table>
<div class="tip">🧠 <strong>Cara Ingat:</strong> PV = Plan, AC = Actual cost, EV = "Earned" = apa yang sudah kamu "dapatkan/selesaikan"</div></div>

<div class="card" id="formula"><h2>🔢 3. Rumus-Rumus EVM (WAJIB HAFAL!)</h2>
<table><tr><th>Rumus</th><th>Formula</th><th>Interpretasi</th></tr>
<tr><td><strong>CV</strong> (Cost Variance)</td><td class="formula">CV = EV - AC</td><td>Negatif = Over budget ❌<br>Positif = Under budget ✅</td></tr>
<tr><td><strong>SV</strong> (Schedule Variance)</td><td class="formula">SV = EV - PV</td><td>Negatif = Behind schedule ❌<br>Positif = Ahead of schedule ✅</td></tr>
<tr><td><strong>CPI</strong> (Cost Performance Index)</td><td class="formula">CPI = EV / AC</td><td>&lt; 1 = Over budget ❌<br>&gt; 1 = Under budget ✅</td></tr>
<tr><td><strong>SPI</strong> (Schedule Performance Index)</td><td class="formula">SPI = EV / PV</td><td>&lt; 1 = Behind schedule ❌<br>&gt; 1 = Ahead of schedule ✅</td></tr>
<tr><td><strong>EAC</strong> (Estimate at Completion)</td><td class="formula">EAC = BAC / CPI</td><td>Prediksi total biaya akhir proyek</td></tr>
<tr><td><strong>New Duration</strong></td><td class="formula">Original Duration / SPI</td><td>Prediksi kapan proyek selesai</td></tr></table>

<div class="highlight">💡 <strong>Contoh Perhitungan:</strong><br>
AC = $1,500 | EV = $2,000<br>
CV = EV - AC = $2,000 - $1,500 = <strong>$500</strong> → Under budget ✅<br>
CPI = $2,000 / $1,500 = <strong>1.33</strong> → Efisien</div>

<div class="warn">⚠️ <strong>INGAT:</strong> Angka negatif pada CV/SV = BURUK. CPI/SPI < 1 = BURUK. Semua rumus EVM dimulai dengan <strong>EV</strong>!</div>

<h3>Contoh Lengkap:</h3>
<p>BAC = $1.2M, proyek 12 bulan. Di bulan 6: PV = $600K, EV = $900K, AC = $1.2M</p>
<ul><li>CPI = 900K/1.2M = <strong>0.75</strong> (over budget)</li>
<li>SPI = 900K/600K = <strong>1.5</strong> (ahead of schedule)</li>
<li>EAC = 1.2M/0.75 = <strong>$1.6M</strong> (akan melebihi budget)</li>
<li>New duration = 12/1.5 = <strong>8 bulan</strong> (selesai lebih cepat)</li></ul></div>

<div class="card" id="reports"><h2>📋 4. Performance Reports</h2>
<table><tr><th>Tipe Laporan</th><th>Menjawab Pertanyaan</th></tr>
<tr><td><strong>Status Report</strong></td><td>Di mana posisi proyek SEKARANG? (scope, time, cost saat ini)</td></tr>
<tr><td><strong>Progress Report</strong></td><td>Apa yang sudah DISELESAIKAN dalam periode tertentu?</td></tr>
<tr><td><strong>Forecast</strong></td><td>Bagaimana PREDIKSI masa depan berdasarkan tren?</td></tr></table></div>

<div class="card" id="change"><h2>🔄 5. Integrated Change Control</h2>
<p>3 tujuan utama:</p>
<ol><li><strong>Influencing factors</strong> — Pastikan perubahan itu beneficial</li>
<li><strong>Determining a change has occurred</strong> — PM harus tahu status proyek setiap saat</li>
<li><strong>Managing actual changes</strong> — Kelola perubahan saat terjadi</li></ol>
<div class="highlight">💡 <strong>Change Control Board (CCB)</strong> = yang bertanggung jawab menyetujui/menolak change request, terutama perubahan MAJOR.</div></div>

<div class="card" id="scope"><h2>🎯 6. Scope Management</h2>
<h3>Validating Scope</h3>
<p>= Penerimaan FORMAL deliverable oleh customer/stakeholder melalui inspeksi & sign-off.</p>
<ul><li><strong>Verified deliverable</strong> = sudah selesai & dicek kebenarannya (quality control)</li>
<li><strong>Validated deliverable</strong> = sudah DITERIMA oleh customer</li></ul>
<h3>Controlling Scope</h3>
<p>Mencegah <strong>scope creep</strong> (perluasan scope tanpa kontrol). Perubahan beneficial didorong, unnecessary changes dicegah.</p></div>

<div class="card" id="schedule"><h2>⏱️ 7. Schedule Control</h2>
<p>Jadwal sering jadi sumber konflik terbesar karena <strong>waktu mudah diukur dan tidak fleksibel</strong>.</p>
<h3>Tracking Gantt Chart</h3>
<ul><li>Menampilkan bar untuk planned & actual start/finish dates</li>
<li><strong>Slipped Milestone</strong> (diamond putih) = milestone yang selesai lebih lambat dari rencana</li>
<li>Persentase di samping bar = % pekerjaan yang selesai</li></ul></div>

<div class="card" id="quality"><h2>🔍 8. Quality Control & 7 Basic Tools of Quality</h2>
<p>Output utama Quality Control: <strong>acceptance decisions, rework, process adjustments</strong>.</p>
<table><tr><th>No</th><th>Tool</th><th>Penjelasan</th></tr>
<tr><td>1</td><td><strong>Cause-and-Effect Diagram</strong></td><td>Fishbone/Ishikawa — lacak root cause. Gunakan teknik <strong>5 Whys</strong></td></tr>
<tr><td>2</td><td><strong>Control Chart</strong></td><td>Grafik proses dari waktu ke waktu. Deteksi apakah proses in/out of control. <strong>Seven Run Rule</strong>: 7 data point berturut-turut di atas/bawah mean → proses perlu diperiksa</td></tr>
<tr><td>3</td><td><strong>Checksheet</strong></td><td>Formulir untuk mengumpulkan & menganalisis data (tally sheet)</td></tr>
<tr><td>4</td><td><strong>Scatter Diagram</strong></td><td>Menunjukkan hubungan (korelasi) antara dua variabel</td></tr>
<tr><td>5</td><td><strong>Histogram</strong></td><td>Bar graph distribusi variabel (frekuensi)</td></tr>
<tr><td>6</td><td><strong>Pareto Chart</strong></td><td>Histogram yang diurutkan dari tertinggi ke terendah. <strong>Aturan 80-20</strong>: 80% masalah dari 20% penyebab</td></tr>
<tr><td>7</td><td><strong>Flowchart</strong></td><td>Alur proses dengan decision points</td></tr></table>
<div class="tip">🧠 <strong>Hafal 7 Tools: CC-CS-SH-PF</strong> — Cause-effect, Control chart, Checksheet, Scatter, Histogram, Pareto, Flowchart</div></div>

<div class="card" id="other"><h2>📡 9. Resource, Communications, Stakeholder, Risk, Procurement</h2>
<h3>Controlling Resources</h3><p>Memastikan physical resources tersedia sesuai rencana & monitor planned vs actual utilization.</p>
<h3>Monitoring Communications</h3><p>Memastikan kebutuhan informasi stakeholder terpenuhi sepanjang project lifecycle.</p>
<h3>Monitoring Stakeholder Engagement</h3><p>Monitor hubungan & sesuaikan strategi engagement. Current engagement level ditulis di <strong>Stakeholder Register</strong>.</p>
<h3>Monitoring Risks</h3><p>Track identified risks, implementasi response plans, identifikasi risiko baru. <strong>Workarounds</strong> = unplanned responses (tidak ada contingency plan).</p>
<h3>Controlling Procurements</h3><p>Kelola hubungan procurement, monitor kinerja kontrak. <strong>Constructive Change Orders</strong> = tindakan oral/tertulis yang bisa dianggap setara change order tertulis.</p></div>

<div class="card" id="agile-mc"><h2>🏃 10. Agile: Burn & Velocity Charts</h2>
<table><tr><th>Chart</th><th>Menampilkan</th><th>Ingat</th></tr>
<tr><td><strong>Burndown Chart</strong></td><td>Jumlah sisa pekerjaan (tasks remaining) — garis MENURUN</td><td>"Burn DOWN = turun"</td></tr>
<tr><td><strong>Burnup Chart</strong></td><td>Jumlah pekerjaan yang SELESAI — garis NAIK. Juga menunjukkan perubahan total planned work.</td><td>"Burn UP = naik"</td></tr>
<tr><td><strong>Combined Burn Chart</strong></td><td>Gabungan completed + remaining</td><td>Versi lengkap</td></tr>
<tr><td><strong>Velocity Chart</strong></td><td>Produktivitas tim per sprint. Bukan untuk monitoring tim, tapi untuk <strong>release planning</strong>.</td><td>"Velocity = kecepatan tim"</td></tr></table>
<div class="warn">⚠️ Burn charts TIDAK menunjukkan TASK MANA yang selesai — hanya jumlahnya. Jadi bisa saja progress terlihat bagus tapi task penting belum dikerjakan.</div></div>

<div class="card" id="hafal"><h2>🧠 11. Ringkasan & Cara Menghafal</h2>
<div class="highlight"><h3>RUMUS EVM — SEMUA DIMULAI DARI EV:</h3>
<ul><li>CV = EV - AC (Cost)</li><li>SV = EV - PV (Schedule)</li>
<li>CPI = EV / AC</li><li>SPI = EV / PV</li>
<li>EAC = BAC / CPI</li><li>New Duration = Original / SPI</li>
<li>Negatif/kurang dari 1 = BURUK</li></ul></div>
<div class="tip"><strong>7 Tools:</strong> Fishbone, Control Chart, Checksheet, Scatter, Histogram, Pareto, Flowchart<br>
<strong>Pareto = 80-20 rule</strong> | <strong>Control Chart = Seven Run Rule</strong><br>
<strong>Burndown = sisa tugas</strong> | <strong>Velocity = bukan monitoring, tapi release planning</strong><br>
<strong>CCB = approves/rejects change requests</strong></div></div>

""" + """
<div class="quiz-section" id="quiz_mc">
<h2>🎯 12. Latihan Soal: Monitoring & Controlling</h2>
""" + make_question("quiz_mc",1,"Jika AC = $1,500 dan EV = $2,000, maka Cost Variance adalah...",{"a":"$500, under budget","b":"-$500, over budget","c":"-$2,500, over budget","d":"$2,500, under budget"},"<strong>Jawaban: A.</strong> CV = EV - AC = $2,000 - $1,500 = $500 (positif = under budget).") + make_question("quiz_mc",2,"Sprint teams menggunakan ... untuk mengukur berapa banyak work yang bisa diselesaikan tiap iterasi.",{"a":"Burnup Charts","b":"Velocity Charts","c":"Combined Burn Charts","d":"Burndown Charts"},"<strong>Jawaban: B.</strong> Velocity charts measure how much work per iteration.") + make_question("quiz_mc",3,"Chart yang menunjukkan jumlah pekerjaan SELESAI dibandingkan rencana adalah...",{"a":"Velocity Charts","b":"Combined Burn Charts","c":"Burndown Charts","d":"Burnup Charts"},"<strong>Jawaban: D.</strong> Burnup = shows work completed compared to plan.") + make_question("quiz_mc",4,"Yang bertanggung jawab menyetujui/menolak change request (terutama major) adalah...",{"a":"Change Control Board","b":"Project Manager","c":"Change Control System","d":"Project Team"},"<strong>Jawaban: A.</strong> CCB approves/rejects change requests.") + make_question("quiz_mc",5,"... adalah rangkaian kegiatan proaktif yang memastikan proses pengembangan memenuhi standar kualitas.",{"a":"Quality Planning","b":"Quality Assurance","c":"Quality Control","d":"Quality Improvement"},"<strong>Jawaban: B.</strong> QA = proactive activities ensuring processes meet quality standards.") + make_question("quiz_mc",6,"The main outcomes of ... are acceptance decisions, rework, and process adjustments.",{"a":"Quality Maturity Assessment","b":"Quality Planning","c":"Quality Assurance","d":"Quality Control"},"<strong>Jawaban: D.</strong> Quality Control outputs = acceptance decisions, rework, process adjustments.") + make_question("quiz_mc",7,"Teknik untuk resolve resource conflicts dengan menunda tasks adalah...",{"a":"Critical Path Analysis","b":"Resource Loading","c":"Overallocation","d":"Resource Leveling"},"<strong>Jawaban: D.</strong> Resource leveling = resolving conflicts by delaying tasks.") + make_question("quiz_mc",8,"Progress Report menggambarkan...",{"a":"Prediksi masa depan","b":"Posisi proyek saat ini","c":"Apa yang sudah diselesaikan tim dalam periode tertentu","d":"Permintaan perubahan"},"<strong>Jawaban: C.</strong> Progress report = what team has accomplished during certain period.") + make_question("quiz_mc",9,"Current stakeholder engagement level ditulis di...",{"a":"Issue Log","b":"Stakeholder Analysis","c":"Stakeholder Register","d":"Communication Management Plan"},"<strong>Jawaban: C.</strong> Current engagement level written in stakeholder register.") + make_question("quiz_mc",10,"Aturan 80-20 (80% masalah dari 20% penyebab) digunakan pada...",{"a":"Control Chart","b":"Scatter Diagram","c":"Pareto Chart","d":"Flowchart"},"<strong>Jawaban: C.</strong> Pareto chart = 80-20 rule.") + make_question("quiz_mc",11,"Seven Run Rule pada Control Chart berarti...",{"a":"7 defect berturut-turut ditoleransi","b":"7 data point berturut-turut di atas/bawah mean menandakan proses perlu diperiksa","c":"Proses dihentikan setelah 7 hari","d":"Quality audit dilakukan setiap 7 sprint"},"<strong>Jawaban: B.</strong> Seven run rule = 7 consecutive points above/below mean = non-random problem.") + make_question("quiz_mc",12,"Jika CPI = 0.8 dan SPI = 1.2, proyek ini...",{"a":"Over budget dan ahead of schedule","b":"Under budget dan behind schedule","c":"Over budget dan behind schedule","d":"Under budget dan ahead of schedule"},"<strong>Jawaban: A.</strong> CPI < 1 = over budget. SPI > 1 = ahead of schedule.") + """
<div style="margin-top:16px;">
<button class="btn" onclick="submitQuiz('quiz_mc',{1:'a',2:'b',3:'d',4:'a',5:'b',6:'d',7:'d',8:'c',9:'c',10:'c',11:'b',12:'a'})">📊 Submit</button>
<button class="btn btn-secondary" onclick="resetQuiz('quiz_mc')">🔄 Reset</button>
</div><div id="quiz_mc_result"></div></div>
"""

html = wrap("Materi 13: Monitoring & Controlling Projects", body, "quiz_mc", "materi-13-monitoring-controlling.html", "EVM, Quality Control, Burn Charts, dan lainnya")
with open(os.path.join(DIR,"materi-13-monitoring-controlling.html"),"w",encoding="utf-8") as f:
    f.write(html)
print("✅ materi-13-monitoring-controlling.html created")
