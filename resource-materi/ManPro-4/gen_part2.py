
import os, sys
sys.stdout.reconfigure(encoding='utf-8')
DIR = r"d:\2. UWIW\0. CHP\Chill Class\resource-materi\ManPro-4"
# Reuse CSS/JS from part1
exec(open(os.path.join(DIR,"gen_part1.py"),encoding="utf-8").read().split("# ====")[0])

body = """
<div class="card">
<h2>1. Gambaran Umum Monitoring & Controlling</h2>
<p><strong>Monitoring and Controlling</strong> adalah proses mengukur kemajuan proyek secara berkala untuk memastikan proyek memenuhi tujuannya dan kebutuhan bisnis saat ini.</p>
<p>Project manager dan timnya memonitor kemajuan terhadap rencana dan mengambil <strong>tindakan korektif (corrective action)</strong> jika diperlukan.</p>
<div class="highlight">Proses ini berjalan <strong>sepanjang proyek</strong>, bukan hanya di satu fase tertentu. Tujuannya: deteksi penyimpangan sedini mungkin!</div>
<h3>Output Umum untuk Semua Knowledge Area:</h3>
<ul>
<li>Change Requests</li>
<li>Work Performance Information</li>
<li>Project Management Plan Updates</li>
<li>Project Documents Updates</li>
<li>Organizational Process Assets Updates</li>
</ul>
</div>

<div class="card">
<h2>2. Earned Value Management (EVM) ⭐ SANGAT PENTING!</h2>
<p>EVM adalah teknik pengukuran kinerja proyek yang <strong>mengintegrasikan scope, waktu, dan biaya</strong> dalam satu pengukuran terpadu.</p>

<h3>2.1 Tiga Nilai Dasar EVM</h3>
<table>
<tr><th>Istilah</th><th>Rumus</th><th>Penjelasan Sederhana</th></tr>
<tr><td><strong>Planned Value (PV)</strong></td><td>Budget yang dijadwalkan</td><td>Berapa uang yang <em>seharusnya sudah dihabiskan</em> sesuai jadwal pada titik waktu tertentu</td></tr>
<tr><td><strong>Actual Cost (AC)</strong></td><td>Biaya aktual yang dikeluarkan</td><td>Berapa uang yang <em>benar-benar sudah dikeluarkan</em> sampai saat ini</td></tr>
<tr><td><strong>Earned Value (EV)</strong></td><td>% pekerjaan selesai x BAC</td><td>Nilai pekerjaan yang <em>benar-benar sudah diselesaikan</em> dihitung berdasarkan budget</td></tr>
<tr><td><strong>Budget at Completion (BAC)</strong></td><td>Total budget proyek</td><td>Total anggaran yang disetujui untuk seluruh proyek</td></tr>
</table>

<h3>2.2 Rumus-Rumus EVM</h3>
<table>
<tr><th>Metrik</th><th>Rumus</th><th>Interpretasi</th></tr>
<tr><td><strong>Cost Variance (CV)</strong></td><td>EV - AC</td><td>Negatif = Over budget (jelek), Positif = Under budget (bagus)</td></tr>
<tr><td><strong>Schedule Variance (SV)</strong></td><td>EV - PV</td><td>Negatif = Behind schedule (jelek), Positif = Ahead of schedule (bagus)</td></tr>
<tr><td><strong>Cost Performance Index (CPI)</strong></td><td>EV / AC</td><td>&lt;1 = Over budget, &gt;1 = Under budget, =1 = On budget</td></tr>
<tr><td><strong>Schedule Performance Index (SPI)</strong></td><td>EV / PV</td><td>&lt;1 = Behind schedule, &gt;1 = Ahead, =1 = On schedule</td></tr>
<tr><td><strong>Estimate at Completion (EAC)</strong></td><td>BAC / CPI</td><td>Perkiraan total biaya akhir proyek berdasarkan kinerja saat ini</td></tr>
<tr><td><strong>Estimate to Complete (ETC)</strong></td><td>EAC - AC</td><td>Sisa biaya yang dibutuhkan untuk menyelesaikan proyek</td></tr>
<tr><td><strong>Estimated completion date</strong></td><td>Original time / SPI</td><td>Perkiraan kapan proyek akan selesai</td></tr>
</table>

<div class="tip">
<p><strong>Cara Mengingat Rumus EVM:</strong></p>
<p>"<strong>Semua Variance = EV dikurangi sesuatu</strong>" (CV = EV-AC, SV = EV-PV)</p>
<p>"<strong>Semua Index = EV dibagi sesuatu</strong>" (CPI = EV/AC, SPI = EV/PV)</p>
<p>"<strong>Negatif = Jelek, Kurang dari 1 = Jelek</strong>"</p>
</div>

<h3>2.3 Contoh Perhitungan EVM Lengkap</h3>
<div class="highlight">
<p><strong>Kasus:</strong> Proyek 10 bulan, BAC = Rp 500 juta (Rp 50 juta/bulan merata). Di akhir bulan ke-4:</p>
<ul>
<li>Pekerjaan seharusnya selesai: 40% (sesuai jadwal)</li>
<li>Pekerjaan benar-benar selesai: 30%</li>
<li>Biaya aktual: Rp 180 juta</li>
</ul>
<p><strong>Jawaban:</strong></p>
<ul>
<li>PV = 40% x 500 juta = <strong>Rp 200 juta</strong></li>
<li>EV = 30% x 500 juta = <strong>Rp 150 juta</strong></li>
<li>AC = <strong>Rp 180 juta</strong></li>
<li>CV = 150 - 180 = <strong>-30 juta</strong> (Over budget!)</li>
<li>SV = 150 - 200 = <strong>-50 juta</strong> (Behind schedule!)</li>
<li>CPI = 150/180 = <strong>0.83</strong> (Setiap Rp 1 yang dikeluarkan hanya menghasilkan Rp 0.83 nilai kerja)</li>
<li>SPI = 150/200 = <strong>0.75</strong> (Hanya 75% dari pekerjaan yang dijadwalkan yang selesai)</li>
<li>EAC = 500/0.83 = <strong>Rp 602.4 juta</strong> (Proyek diperkirakan habis Rp 602.4 juta, bukan 500 juta)</li>
<li>ETC = 602.4 - 180 = <strong>Rp 422.4 juta lagi</strong></li>
<li>Perkiraan selesai = 10/0.75 = <strong>13.3 bulan</strong> (terlambat 3.3 bulan!)</li>
</ul>
<p><strong>Kesimpulan:</strong> Proyek ini dalam kondisi BURUK. Over budget DAN behind schedule. PM harus segera ambil tindakan korektif.</p>
</div>

<h3>2.4 Membaca Grafik EVM</h3>
<ul>
<li>Jika garis <strong>AC di atas EV</strong> = biaya lebih besar dari nilai kerja yang dihasilkan = <strong>Over budget (buruk)</strong></li>
<li>Jika garis <strong>PV di atas EV</strong> = rencana lebih cepat dari aktual = <strong>Behind schedule (buruk)</strong></li>
<li>Jika garis <strong>EV di atas PV</strong> = aktual lebih cepat dari rencana = <strong>Ahead of schedule (bagus)</strong></li>
<li>Jika garis <strong>EV di atas AC</strong> = nilai kerja lebih besar dari biaya = <strong>Under budget (bagus)</strong></li>
</ul>
</div>

<div class="card">
<h2>3. Performance Reports</h2>
<table>
<tr><th>Jenis Report</th><th>Isi</th></tr>
<tr><td><strong>Status Report</strong></td><td>Di mana posisi proyek <em>saat ini</em>? (scope, time, cost pada titik waktu tertentu)</td></tr>
<tr><td><strong>Progress Report</strong></td><td>Apa yang sudah <em>dicapai</em> tim dalam periode tertentu? (mingguan/bulanan)</td></tr>
<tr><td><strong>Forecast</strong></td><td>Prediksi <em>masa depan</em> proyek berdasarkan data dan tren saat ini (EAC, perkiraan waktu selesai)</td></tr>
</table>
</div>

<div class="card">
<h2>4. Integrated Change Control</h2>
<p>Tiga tujuan utama:</p>
<ol>
<li><strong>Mempengaruhi faktor penyebab perubahan</strong> — pastikan perubahan itu bermanfaat (improve quality, reduce cost, save time)</li>
<li><strong>Menentukan apakah perubahan sudah terjadi</strong> — PM harus tahu status area kunci proyek setiap saat</li>
<li><strong>Mengelola perubahan aktual saat terjadi</strong> — ini peran kunci PM!</li>
</ol>
</div>

<div class="card">
<h2>5. Scope Management: Validating & Controlling Scope</h2>
<h3>Validating Scope</h3>
<ul>
<li>= Penerimaan formal deliverable proyek oleh customer/stakeholder</li>
<li>Dilakukan melalui <strong>inspeksi</strong> oleh customer, lalu <strong>sign-off</strong></li>
<li><strong>Verified deliverable</strong> = sudah dicek kebenarannya (quality control)</li>
<li><strong>Validated deliverable</strong> = sudah diterima oleh customer</li>
</ul>
<h3>Controlling Scope</h3>
<ul>
<li>Scope harus didefinisikan dengan jelas terlebih dahulu</li>
<li>Harus ada proses untuk meminta dan memonitor perubahan scope</li>
<li>Stakeholder didorong untuk menyarankan perubahan bermanfaat, tapi dicegah dari perubahan yang tidak perlu (<strong>scope creep</strong>)</li>
</ul>
<div class="warn">Scope creep = penambahan scope yang tidak terkontrol, tanpa melalui change control. Ini masalah umum!</div>
</div>

<div class="card">
<h2>6. Schedule Control</h2>
<ul>
<li>Mengelola jadwal adalah tantangan terbesar bagi banyak PM</li>
<li>Waktu adalah variabel yang <strong>paling tidak fleksibel</strong> — waktu terus berjalan apapun yang terjadi</li>
<li><strong>Tracking Gantt Chart</strong> = alat yang sangat baik untuk memvisualisasikan jadwal (menampilkan planned vs actual)</li>
<li><strong>Slipped milestone</strong> = milestone yang selesai lebih lambat dari rencana (ditandai diamond putih di tracking Gantt chart)</li>
</ul>
</div>

<div class="card">
<h2>7. Quality Control - 7 Basic Tools of Quality ⭐</h2>
<table>
<tr><th>#</th><th>Tool</th><th>Kegunaan</th><th>Cara Mengingat</th></tr>
<tr><td>1</td><td><strong>Cause-and-Effect Diagram</strong> (Fishbone/Ishikawa)</td><td>Mencari akar penyebab masalah kualitas. Bisa gunakan teknik <strong>5 Whys</strong>.</td><td>Bentuknya seperti tulang ikan</td></tr>
<tr><td>2</td><td><strong>Control Chart</strong></td><td>Menampilkan hasil proses dari waktu ke waktu. Mencegah defect, bukan mendeteksi. Gunakan <strong>Seven Run Rule</strong>.</td><td>Grafik dengan batas atas/bawah</td></tr>
<tr><td>3</td><td><strong>Checksheet</strong></td><td>Mengumpulkan dan menganalisis data secara terstruktur (tally)</td><td>Formulir centang/tally</td></tr>
<tr><td>4</td><td><strong>Scatter Diagram</strong></td><td>Menunjukkan hubungan antara 2 variabel</td><td>Titik-titik tersebar di grafik</td></tr>
<tr><td>5</td><td><strong>Histogram</strong></td><td>Bar chart distribusi variabel</td><td>Grafik batang</td></tr>
<tr><td>6</td><td><strong>Pareto Chart</strong></td><td>Histogram yang memprioritaskan masalah. <strong>Aturan 80/20</strong> = 80% masalah dari 20% penyebab.</td><td>Batang dari tinggi ke rendah</td></tr>
<tr><td>7</td><td><strong>Flowchart</strong></td><td>Menampilkan logika dan alur proses</td><td>Kotak dan diamond dengan panah</td></tr>
</table>

<div class="tip">
<p><strong>Cara Mengingat 7 Tools:</strong> "<strong>C</strong>ari <strong>C</strong>epat <strong>C</strong>atat <strong>S</strong>ebar <strong>H</strong>itung <strong>P</strong>rioritaskan <strong>F</strong>low"</p>
<p>Cause-effect, Control chart, Checksheet, Scatter, Histogram, Pareto, Flowchart</p>
</div>

<h3>Seven Run Rule</h3>
<p>Jika <strong>7 data point berturut-turut</strong> semuanya di bawah mean, di atas mean, atau semuanya naik/turun, maka proses perlu diperiksa karena ada masalah <strong>non-random</strong>.</p>
</div>

<div class="card">
<h2>8. Resource, Communications, Stakeholder, Risk, Procurement</h2>

<h3>Controlling Resources</h3>
<p>Memastikan resource fisik yang ditugaskan ke proyek tersedia sesuai rencana. Monitor penggunaan planned vs actual.</p>

<h3>Monitoring Communications</h3>
<p>Memantau komunikasi sepanjang siklus hidup proyek untuk memastikan kebutuhan informasi stakeholder terpenuhi.</p>

<h3>Monitoring Stakeholder Engagement</h3>
<p>Anda <strong>tidak bisa mengontrol</strong> stakeholder, tapi bisa <strong>memonitor tingkat keterlibatan</strong> mereka dan menyesuaikan strategi.</p>

<h3>Monitoring Risks</h3>
<ul>
<li>Melacak risiko yang teridentifikasi + mengidentifikasi risiko baru yang muncul</li>
<li>Risiko baru harus melalui proses analisis yang sama</li>
<li><strong>Workarounds</strong> = respons risiko yang <em>tidak direncanakan</em>, digunakan saat tidak ada contingency plan</li>
<li>Output penting: <strong>update risk register</strong></li>
</ul>

<h3>Controlling Procurements</h3>
<ul>
<li>Mengelola hubungan procurement, memonitor kinerja kontrak</li>
<li><strong>Constructive change order</strong> = tindakan lisan/tertulis yang bisa dianggap sebagai change order meskipun bukan change order formal. Hati-hati dengan ini!</li>
<li>Semua perubahan kontrak harus <strong>didokumentasikan</strong> dan dikomunikasikan ke semua pihak terkait</li>
</ul>
</div>

<div class="card">
<h2>9. Prinsip: Embracing Adaptability & Resiliency</h2>
<ul>
<li><strong>Adaptability</strong> = kemampuan merespons perubahan kondisi</li>
<li><strong>Resiliency</strong> = kemampuan menyerap dampak dan pulih cepat dari kegagalan</li>
</ul>
<p>Tips untuk tim:</p>
<ol>
<li>Bangun tim yang beragam dengan skill set luas</li>
<li>Tekankan pentingnya continuous learning</li>
<li>Dorong percakapan terbuka dan ide baru</li>
<li>Berikan dan terima feedback sesering mungkin</li>
<li>Fokus pada <strong>outcomes</strong>, bukan hanya deliverables</li>
</ol>
</div>

<div class="card">
<h2>10. Monitoring & Controlling di Agile</h2>
<h3>Scrum Events untuk M&C:</h3>
<ul>
<li><strong>Daily Scrum</strong> — inspeksi progress menuju Sprint Goal, adaptasi Sprint Backlog</li>
<li><strong>Sprint Review</strong> — inspeksi outcome Sprint, diskusi dengan stakeholder, tentukan adaptasi</li>
</ul>

<h3>Agile Artifacts untuk Monitoring:</h3>
<table>
<tr><th>Artifact</th><th>Penjelasan</th></tr>
<tr><td><strong>Burndown Chart</strong></td><td>Menunjukkan sisa pekerjaan (task) vs rencana. Digunakan per sprint. <em>Tidak menunjukkan TASK MANA yang selesai, hanya jumlah.</em></td></tr>
<tr><td><strong>Burnup Chart</strong></td><td>Menunjukkan pekerjaan yang sudah selesai vs rencana. Bisa menampilkan perubahan total planned work.</td></tr>
<tr><td><strong>Velocity Chart</strong></td><td>Mengukur berapa banyak pekerjaan yang bisa diselesaikan tim per sprint. <em>Bukan untuk memonitor tim</em>, tapi untuk <strong>release planning</strong>.</td></tr>
</table>
<div class="warn">Velocity chart: upward trend bukan berarti selalu bagus, downward trend bukan berarti selalu buruk. Keduanya adalah sinyal untuk investigasi lebih dalam.</div>
</div>

<div class="card">
<h2>Ringkasan & Poin Hafalan</h2>
<div class="highlight">
<p><strong>EVM = "EVA CUKUR SEPEDA"</strong></p>
<ul>
<li><strong>EV</strong>A = EV (Earned Value), <strong>A</strong>C (Actual Cost)</li>
<li><strong>C</strong>V = EV - AC, <strong>C</strong>PI = EV/AC</li>
<li><strong>S</strong>V = EV - PV, <strong>S</strong>PI = EV/PV</li>
<li>EAC = BAC / CPI</li>
</ul>
<p><strong>Negatif/Kurang dari 1 = JELEK. Positif/Lebih dari 1 = BAGUS.</strong></p>
</div>
<div class="tip">
<p><strong>7 Quality Tools = "3C-SHPF":</strong> Cause-effect, Control chart, Checksheet, Scatter, Histogram, Pareto, Flowchart</p>
</div>
</div>
"""

quiz = """
<div class="quiz-section" id="quiz_mc">
<h2>Latihan Soal: Monitoring & Controlling</h2>
"""

quiz += make_question("quiz_mc",1,"Proyek dengan BAC Rp 200 juta, 4 bulan. Di bulan ke-2: AC=Rp120jt, PV=Rp100jt, EV=Rp110jt. Berapa CV?",{"a":"Rp 10 juta","b":"-Rp 10 juta","c":"Rp 20 juta","d":"-Rp 20 juta"})
quiz += make_question("quiz_mc",2,"Dari soal di atas, berapa SPI?",{"a":"0.92","b":"1.10","c":"0.83","d":"1.20"})
quiz += make_question("quiz_mc",3,"CPI = 0.75 artinya...",{"a":"Proyek under budget 25%","b":"Setiap Rp 1 yang dikeluarkan hanya menghasilkan Rp 0.75 nilai kerja","c":"Proyek ahead of schedule","d":"75% pekerjaan sudah selesai"})
quiz += make_question("quiz_mc",4,"Rumus EAC (Estimate at Completion) adalah...",{"a":"BAC x CPI","b":"BAC / SPI","c":"BAC / CPI","d":"BAC - CV"})
quiz += make_question("quiz_mc",5,"Aturan 80/20 (Pareto Analysis) menyatakan bahwa...",{"a":"80% budget digunakan untuk 20% aktivitas","b":"80% masalah disebabkan oleh 20% penyebab","c":"80% tim mengerjakan 20% pekerjaan","d":"80% waktu untuk planning, 20% untuk executing"})
quiz += make_question("quiz_mc",6,"Seven Run Rule pada Control Chart menyatakan bahwa proses perlu diperiksa jika...",{"a":"Ada 7 data point yang semuanya di atas rata-rata berturut-turut","b":"Ada 7 defect dalam satu batch","c":"Ada 7 keluhan dari customer","d":"Ada 7 change request dalam satu sprint"})
quiz += make_question("quiz_mc",7,"Apa perbedaan antara verified deliverable dan validated deliverable?",{"a":"Verified = diterima customer, Validated = dicek QC","b":"Verified = dicek kebenarannya (QC), Validated = diterima customer","c":"Keduanya sama saja","d":"Verified untuk agile, Validated untuk predictive"})
quiz += make_question("quiz_mc",8,"Workarounds adalah...",{"a":"Rencana cadangan yang sudah disiapkan sebelumnya","b":"Respons risiko yang TIDAK direncanakan, digunakan saat tidak ada contingency plan","c":"Proses eskalasi masalah ke manajemen","d":"Teknik untuk mempercepat jadwal proyek"})
quiz += make_question("quiz_mc",9,"Velocity chart pada agile paling berguna untuk...",{"a":"Memonitor kinerja individu tim","b":"Release planning","c":"Menghitung budget","d":"Quality control"})
quiz += make_question("quiz_mc",10,"SV = -50 juta dan CPI = 0.83. Mana pernyataan yang BENAR?",{"a":"Proyek ahead of schedule dan under budget","b":"Proyek behind schedule dan over budget","c":"Proyek ahead of schedule dan over budget","d":"Proyek behind schedule dan under budget"})
quiz += make_question("quiz_mc",11,"Constructive change order adalah...",{"a":"Perubahan resmi yang disetujui steering committee","b":"Tindakan lisan/tertulis yang bisa dianggap sebagai change order meskipun bukan formal","c":"Dokumen untuk menambah scope","d":"Formulir penolakan deliverable"})
quiz += make_question("quiz_mc",12,"Burndown chart TIDAK bisa menunjukkan...",{"a":"Jumlah task yang tersisa","b":"Tren penyelesaian pekerjaan","c":"Task MANA yang sudah selesai","d":"Perbandingan progress vs rencana"})

quiz += """
<div style="margin-top:15px;">
<button class="btn" onclick="submitQuiz('quiz_mc',{1:'b',2:'b',3:'b',4:'c',5:'b',6:'a',7:'b',8:'b',9:'b',10:'b',11:'b',12:'c'})">Submit</button>
<button class="btn" style="background:#374151;" onclick="resetQuiz('quiz_mc')">Reset</button>
</div>
<div id="quiz_mc_result"></div>
</div>
"""

html = wrap("Materi 13: Monitoring and Controlling Projects", body + quiz, "quiz_mc", "materi-13-monitoring-controlling.html")
with open(os.path.join(DIR,"materi-13-monitoring-controlling.html"),"w",encoding="utf-8") as f:
    f.write(html)
print("DONE: materi-13-monitoring-controlling.html")
