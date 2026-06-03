
import os,sys
sys.stdout.reconfigure(encoding='utf-8')
DIR = r"d:\2. UWIW\0. CHP\Chill Class\resource-materi\ManPro-4"
exec(open(os.path.join(DIR,"gen_part1.py"),encoding="utf-8").read().split("# ====")[0])

body = """
<div class="card">
<h2>BAGIAN A: PROJECT RISK MANAGEMENT</h2>
</div>

<div class="card">
<h2>1. Pentingnya Risk Management</h2>
<p><strong>Project Risk Management</strong> = seni dan ilmu mengidentifikasi, menganalisis, dan merespons risiko sepanjang siklus hidup proyek demi mencapai tujuan proyek.</p>
<ul>
<li>Risk management sering diabaikan, padahal bisa membantu memilih proyek yang tepat, menentukan scope, dan membuat estimasi realistis</li>
<li>Risiko selalu ada di <strong>masa depan</strong>. Seiring proyek berjalan, risiko bisa terjadi atau tidak.</li>
<li>Risk management planning diulang secara berkala (di akhir fase atau milestone)</li>
</ul>
<div class="highlight"><strong>Tujuan utama:</strong> Meminimalkan risiko NEGATIF (ancaman) dan memaksimalkan risiko POSITIF (peluang/opportunities)</div>
</div>

<div class="card">
<h2>2. Definisi Risk</h2>
<table>
<tr><th>Tipe Risiko</th><th>Penjelasan</th><th>Contoh</th></tr>
<tr><td><strong>Negative Risk (Threat)</strong></td><td>Masalah potensial yang menghambat keberhasilan proyek. Risk management-nya seperti <em>asuransi</em>.</td><td>Keterlambatan deliverable, pembengkakan biaya, supplier gagal kirim</td></tr>
<tr><td><strong>Positive Risk (Opportunity)</strong></td><td>Ketidakpastian yang menghasilkan hal baik</td><td>Proyek selesai lebih cepat, biaya lebih murah dari perkiraan</td></tr>
</table>

<h3>Risk Utility / Risk Tolerance</h3>
<table>
<tr><th>Tipe Orang</th><th>Sikap terhadap Risiko</th></tr>
<tr><td><strong>Risk-Averse</strong></td><td>Menghindari risiko. Kepuasan naik dengan rate menurun. Lebih pilih yang aman.</td></tr>
<tr><td><strong>Risk-Seeking</strong></td><td>Toleransi tinggi. Kepuasan naik saat potensi keuntungan lebih besar.</td></tr>
<tr><td><strong>Risk-Neutral</strong></td><td>Seimbang antara risiko dan keuntungan.</td></tr>
</table>
</div>

<div class="card">
<h2>3. Proses Risk Management (6 Proses)</h2>
<ol>
<li><strong>Planning Risk Management</strong> — Memutuskan pendekatan dan rencana aktivitas risk management</li>
<li><strong>Identifying Risks</strong> — Menentukan risiko mana yang mungkin mempengaruhi proyek</li>
<li><strong>Performing Qualitative Risk Analysis</strong> — Memprioritaskan risiko berdasarkan probability dan impact</li>
<li><strong>Performing Quantitative Risk Analysis</strong> — Mengestimasi efek risiko secara numerik</li>
<li><strong>Planning Risk Responses</strong> — Menentukan langkah untuk menangani risiko</li>
<li><strong>Controlling Risk</strong> — Memonitor risiko, implementasi rencana respons, evaluasi efektivitas</li>
</ol>
<div class="tip">Ingat urutan: "<strong>P</strong>lan <strong>I</strong>dentify <strong>Q</strong>ualitative <strong>Q</strong>uantitative <strong>R</strong>esponse <strong>C</strong>ontrol" = "<strong>PIQ-QRC</strong>"</div>
</div>

<div class="card">
<h2>4. Risk Management Plan</h2>
<p>Dokumen utama yang berisi prosedur mengelola risiko. Isi:</p>
<ol>
<li>Methodology</li>
<li>Roles and Responsibilities</li>
<li>Budget and Schedule</li>
<li>Risk Categories</li>
<li>Risk Probability and Impact</li>
<li>Revised Stakeholders' Tolerances</li>
<li>Tracking</li>
<li>Risk Documentation</li>
</ol>

<h3>Contingency vs Fallback Plans vs Reserves</h3>
<table>
<tr><th>Istilah</th><th>Penjelasan</th></tr>
<tr><td><strong>Contingency Plan</strong></td><td>Rencana tindakan yang sudah disiapkan JIKA risiko terjadi</td></tr>
<tr><td><strong>Fallback Plan</strong></td><td>Rencana cadangan jika contingency plan GAGAL. Untuk risiko berdampak tinggi.</td></tr>
<tr><td><strong>Contingency Reserve</strong></td><td>Dana cadangan untuk risiko yang sudah teridentifikasi. BAGIAN dari cost baseline.</td></tr>
<tr><td><strong>Management Reserve</strong></td><td>Dana cadangan untuk risiko yang TIDAK diketahui. BUKAN bagian cost baseline, tapi bagian dari total budget.</td></tr>
</table>

<h3>Risk Breakdown Structure (RBS)</h3>
<p>Hierarki kategori risiko potensial (mirip WBS tapi untuk risiko). Kategori umum: Market, Financial, Technology, People, Structure/Process.</p>
</div>

<div class="card">
<h2>5. Identifying Risks</h2>
<p>Anda tidak bisa mengelola risiko jika belum mengidentifikasinya! Output utama: <strong>Risk Register</strong> dan <strong>Risk Report</strong>.</p>
<h3>Tools untuk Identifikasi:</h3>
<ul>
<li><strong>Brainstorming</strong> — Menghasilkan ide spontan tanpa menghakimi. Perlu fasilitator berpengalaman. TAPI riset menunjukkan individu menghasilkan lebih banyak ide sendiri daripada brainstorming kelompok!</li>
<li><strong>Interviewing</strong> — Wawancara orang berpengalaman (tatap muka, telepon, email)</li>
<li><strong>SWOT Analysis</strong> — Strengths, Weaknesses, Opportunities, Threats</li>
<li><strong>Document Review</strong> — Review dokumen-dokumen proyek yang ada</li>
</ul>

<h3>Risk Register (Isi Lengkap)</h3>
<ol>
<li>Identification number</li>
<li>Rank</li>
<li>Name of risk event</li>
<li>Description</li>
<li>Category</li>
<li>Root cause</li>
<li><strong>Triggers</strong> (indikator/gejala bahwa risiko akan terjadi)</li>
<li>Potential responses</li>
<li><strong>Risk owner</strong> (penanggung jawab)</li>
<li>Probability and Impact</li>
<li>Status</li>
</ol>
</div>

<div class="card">
<h2>6. Qualitative Risk Analysis</h2>
<p>Menggunakan <strong>Probability/Impact Matrix</strong> untuk memprioritaskan risiko sebagai High, Medium, atau Low.</p>
<ul>
<li><strong>High</strong> = 75%-100% probability/impact</li>
<li><strong>Medium</strong> = 25%-75%</li>
<li><strong>Low</strong> = 0%-25%</li>
</ul>
<p>Fokus utama: risiko yang ada di area <strong>High-High</strong> pada matrix.</p>
<p><strong>Watch List</strong> = daftar risiko prioritas rendah yang tetap dipantau.</p>
</div>

<div class="card">
<h2>7. Quantitative Risk Analysis</h2>
<p>Analisis numerik/statistik. Sering dilakukan untuk proyek besar dan kompleks. Teknik utama:</p>
<ul>
<li><strong>Decision Tree Analysis</strong> — Diagram untuk mengambil keputusan berdasarkan probabilitas dan nilai</li>
<li><strong>Simulation</strong> — Monte Carlo simulation dll</li>
<li><strong>Sensitivity Analysis</strong> — Menganalisis variabel mana yang paling berpengaruh</li>
</ul>
</div>

<div class="card">
<h2>8. Risk Response Strategies (SANGAT PENTING!)</h2>
<h3>Untuk Risiko NEGATIF (Ancaman):</h3>
<table>
<tr><th>Strategy</th><th>Penjelasan</th><th>Contoh</th></tr>
<tr><td><strong>Escalation</strong></td><td>Eskalasi ke manajer yang lebih tinggi jika di luar scope/authority PM</td><td>Risiko regulasi pemerintah → eskalasi ke direksi</td></tr>
<tr><td><strong>Avoidance</strong></td><td>Menghilangkan ancaman dengan menghilangkan penyebabnya</td><td>Tidak menggunakan teknologi baru yang berisiko tinggi</td></tr>
<tr><td><strong>Acceptance</strong></td><td>Menerima konsekuensi jika risiko terjadi</td><td>Risiko minor yang biaya penanganannya lebih besar dari dampaknya</td></tr>
<tr><td><strong>Transference</strong></td><td>Mengalihkan tanggung jawab ke pihak ketiga</td><td>Beli asuransi, gunakan fixed-price contract</td></tr>
<tr><td><strong>Mitigation</strong></td><td>Mengurangi dampak/probabilitas terjadinya risiko</td><td>Menambah testing, menyediakan backup, training tambahan</td></tr>
</table>
<div class="tip">Cara ingat Negative Risk: "<strong>EAATM</strong>" = "<strong>E</strong>scalate, <strong>A</strong>void, <strong>A</strong>ccept, <strong>T</strong>ransfer, <strong>M</strong>itigate"</div>

<h3>Untuk Risiko POSITIF (Peluang):</h3>
<table>
<tr><th>Strategy</th><th>Penjelasan</th></tr>
<tr><td><strong>Escalation</strong></td><td>Eskalasi jika di luar scope PM</td></tr>
<tr><td><strong>Exploitation</strong></td><td>Melakukan segala cara agar peluang PASTI terjadi</td></tr>
<tr><td><strong>Sharing</strong></td><td>Membagi kepemilikan peluang ke pihak lain yang lebih mampu memanfaatkannya</td></tr>
<tr><td><strong>Enhancement</strong></td><td>Memperbesar peluang dengan mengidentifikasi dan memaksimalkan faktor pendorongnya</td></tr>
<tr><td><strong>Acceptance</strong></td><td>Tim tidak bisa/memilih untuk tidak mengambil tindakan</td></tr>
</table>

<h3>Residual vs Secondary Risks</h3>
<ul>
<li><strong>Residual risks</strong> = risiko yang TERSISA setelah semua response strategy diimplementasikan</li>
<li><strong>Secondary risks</strong> = risiko BARU yang muncul sebagai AKIBAT dari implementasi risk response</li>
</ul>
</div>

<div class="card">
<h2>BAGIAN B: PROJECT PROCUREMENT MANAGEMENT</h2>
</div>

<div class="card">
<h2>9. Pentingnya Procurement Management</h2>
<p>= Proses mengakuisisi/membeli barang dan jasa dari luar organisasi. PM harus melakukan yang terbaik untuk proyek, dan seringkali itu berarti <strong>membeli dari luar</strong>.</p>
<p>Good procurement = <strong>win-win</strong> untuk buyer dan seller.</p>
</div>

<div class="card">
<h2>10. Make-or-Buy Decision</h2>
<p>Organisasi memutuskan apakah lebih menguntungkan <strong>membuat sendiri (Make)</strong> atau <strong>membeli dari luar (Buy)</strong>.</p>
<div class="highlight">
<p><strong>Contoh Perhitungan:</strong></p>
<p>Opsi Make: In-house trainer $60/jam x 80 jam = $4,800 + Material $7,500 + Online facilitation $60/jam x 500 jam = $30,000 = <strong>Total $42,300</strong></p>
<p>Opsi Buy: $1,000/peserta x 100 = $100,000 + Online $100/jam x 500 jam = $50,000 = <strong>Total $150,000</strong></p>
<p>Selisih: $107,700. <strong>Rekomendasi: Make (hemat $107,700!)</strong></p>
</div>
</div>

<div class="card">
<h2>11. Types of Contracts (4 Tipe)</h2>
<table>
<tr><th>Tipe Kontrak</th><th>Penjelasan</th><th>Risiko di Siapa?</th></tr>
<tr><td><strong>Fixed-Price / Lump-Sum</strong></td><td>Harga total tetap untuk produk/layanan yang well-defined. Subtipe: FFP, FPIF, FP-EPA.</td><td><strong>Seller</strong> menanggung risiko lebih besar</td></tr>
<tr><td><strong>Cost-Reimbursable</strong></td><td>Buyer membayar biaya aktual (direct + indirect) + fee/profit. Subtipe: CPAF, CPFF, CPIF.</td><td><strong>Buyer</strong> menanggung risiko lebih besar</td></tr>
<tr><td><strong>Time & Material (T&M)</strong></td><td>Hybrid. Tarif per jam + biaya material. Cocok untuk pekerjaan yang tidak bisa didefinisikan dengan jelas.</td><td>Risiko dibagi</td></tr>
<tr><td><strong>IDIQ</strong></td><td>Kuantitas tidak terbatas untuk waktu tetap, dengan batas atas/bawah. Mencegah delay dan overrun.</td><td>Risiko dibagi</td></tr>
</table>
<div class="tip">Cara ingat: "<strong>Fixed = Seller risk, Cost = Buyer risk, T&M = Shared, IDIQ = Flexible</strong>"</div>
</div>

<div class="card">
<h2>12. Dokumen Procurement</h2>
<h3>Bid Documents:</h3>
<ul>
<li><strong>RFP (Request for Proposal)</strong> — Meminta proposal dengan pendekatan berbeda. Untuk pekerjaan yang kompleks.</li>
<li><strong>RFQ (Request for Quote)</strong> — Meminta harga untuk item standar yang sudah jelas.</li>
</ul>

<h3>Procurement SOW (Statement of Work)</h3>
<p>Dokumen kontraktual yang menjelaskan barang/jasa yang akan dibeli. Harus: clear, concise, complete. Gunakan kata "<strong>must/shall</strong>" bukan "may".</p>

<h3>Supplier Evaluation Matrix</h3>
<p>Weighted scoring model untuk mengevaluasi supplier berdasarkan kriteria (cost, quality, technology, past performance, management). Total bobot = 100%.</p>
</div>

<div class="card">
<h2>13. Change Management</h2>
<p><strong>Change management ≠ Change control!</strong></p>
<ul>
<li><strong>Change control</strong> = mengelola perubahan terhadap objective proyek</li>
<li><strong>Change management</strong> = mengelola dampak proyek terhadap ORANG di organisasi</li>
</ul>
<h3>PMI's Steps for Change Management:</h3>
<ol>
<li><strong>Formulate change</strong> — Buat alasan perubahan, jelaskan kenapa masa depan lebih baik</li>
<li><strong>Plan change</strong> — Identifikasi aktivitas untuk persiapan</li>
<li><strong>Implement change</strong> — Tunjukkan manfaat, lakukan penyesuaian</li>
<li><strong>Manage transition</strong> — Atasi aktivitas setelah future state tercapai (knowledge transfer)</li>
<li><strong>Sustain change</strong> — Pastikan kapabilitas baru berlanjut</li>
</ol>
</div>
"""

quiz = '<div class="quiz-section" id="quiz_risk"><h2>Latihan Soal: Risk & Procurement</h2>'
quiz += make_question("quiz_risk",1,"Strategi risk response untuk risiko NEGATIF yang mengalihkan tanggung jawab ke pihak ketiga disebut...",{"a":"Avoidance","b":"Mitigation","c":"Transference","d":"Acceptance"})
quiz += make_question("quiz_risk",2,"Pada fixed-price contract, siapa yang menanggung risiko LEBIH BESAR?",{"a":"Buyer","b":"Seller","c":"Keduanya sama","d":"Pihak ketiga"})
quiz += make_question("quiz_risk",3,"Apa perbedaan antara Contingency Reserve dan Management Reserve?",{"a":"Contingency = untuk risiko unknown, Management = untuk risiko known","b":"Contingency = bagian cost baseline untuk risiko known, Management = BUKAN bagian cost baseline untuk risiko unknown","c":"Keduanya sama","d":"Contingency lebih besar dari Management"})
quiz += make_question("quiz_risk",4,"Trigger dalam risk register adalah...",{"a":"Orang yang bertanggung jawab atas risiko","b":"Dampak dari risiko jika terjadi","c":"Indikator atau gejala bahwa risiko akan segera terjadi","d":"Solusi untuk mengatasi risiko"})
quiz += make_question("quiz_risk",5,"Secondary risk adalah...",{"a":"Risiko yang sudah terjadi","b":"Risiko yang tersisa setelah response strategy diimplementasikan","c":"Risiko BARU yang muncul sebagai AKIBAT dari implementasi risk response","d":"Risiko dengan prioritas kedua"})
quiz += make_question("quiz_risk",6,"RFP digunakan untuk...",{"a":"Meminta harga untuk item standar yang sudah jelas","b":"Meminta proposal dengan pendekatan berbeda untuk pekerjaan kompleks","c":"Membatalkan kontrak","d":"Mengevaluasi kinerja supplier"})
quiz += make_question("quiz_risk",7,"Strategi risk response 'Exploitation' digunakan untuk risiko...",{"a":"Negatif","b":"Positif (peluang)","c":"Keduanya","d":"Residual"})
quiz += make_question("quiz_risk",8,"Cost-reimbursable contract, buyer membayar...",{"a":"Harga tetap yang sudah disepakati","b":"Biaya aktual (direct + indirect) + fee/profit","c":"Per jam kerja saja","d":"Biaya material saja"})
quiz += make_question("quiz_risk",9,"Dalam procurement SOW, kata yang HARUS digunakan adalah...",{"a":"May atau Could","b":"Should atau Would","c":"Must atau Shall","d":"Can atau Might"})
quiz += make_question("quiz_risk",10,"Change Management fokus pada...",{"a":"Mengelola perubahan terhadap objective proyek","b":"Mengelola dampak proyek terhadap ORANG di organisasi","c":"Mengelola budget proyek","d":"Mengelola risiko teknis"})
quiz += make_question("quiz_risk",11,"Orang yang Risk-Averse cenderung...",{"a":"Mencari risiko tinggi untuk keuntungan besar","b":"Menghindari risiko dan lebih memilih yang aman","c":"Seimbang antara risiko dan keuntungan","d":"Mengabaikan risiko sepenuhnya"})
quiz += make_question("quiz_risk",12,"Qualitative Risk Analysis menggunakan tool utama berupa...",{"a":"Monte Carlo Simulation","b":"Decision Tree","c":"Probability/Impact Matrix","d":"Sensitivity Analysis"})

quiz += """
<div style="margin-top:15px;">
<button class="btn" onclick="submitQuiz('quiz_risk',{1:'c',2:'b',3:'b',4:'c',5:'c',6:'b',7:'b',8:'b',9:'c',10:'b',11:'b',12:'c'})">Submit</button>
<button class="btn" style="background:#374151;" onclick="resetQuiz('quiz_risk')">Reset</button>
</div>
<div id="quiz_risk_result"></div></div>"""

html = wrap("Materi 11: Project Risk & Procurement Management", body+quiz, "quiz_risk", "materi-11-risk-procurement.html")
with open(os.path.join(DIR,"materi-11-risk-procurement.html"),"w",encoding="utf-8") as f:
    f.write(html)
print("DONE: materi-11-risk-procurement.html")
