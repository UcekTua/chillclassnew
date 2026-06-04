# gen_m2.py — Risk & Procurement Management
body = """
<div class="toc">
<h3>📑 Daftar Isi</h3>
<a href="#risk-intro">1. Pentingnya Risk Management</a>
<a href="#risk-types">2. Jenis Risiko & Risk Utility</a>
<a href="#risk-process">3. 6 Proses Risk Management</a>
<a href="#risk-plan">4. Planning Risk Management</a>
<a href="#risk-id">5. Identifying Risks & Risk Register</a>
<a href="#qual">6. Qualitative Risk Analysis</a>
<a href="#quant">7. Quantitative Risk Analysis</a>
<a href="#response">8. Planning Risk Responses</a>
<a href="#procurement">9. Project Procurement Management</a>
<a href="#contract">10. Tipe Kontrak</a>
<a href="#bid">11. Bid Documents (RFP, RFQ, SOW)</a>
<a href="#selection">12. Source Selection & Supplier Evaluation</a>
<a href="#change-mgmt">13. Change Management</a>
<a href="#hafal">14. Ringkasan & Cara Menghafal</a>
<a href="#contoh">15. Contoh Soal & Pembahasan</a>
<a href="#latihan">16. Latihan Soal</a>
</div>

<div class="card" id="risk-intro">
<h2>⚠️ 1. Pentingnya Risk Management</h2>
<p><strong>Project Risk Management</strong> = seni dan ilmu mengidentifikasi, menganalisis, dan merespons risiko sepanjang hidup proyek demi mencapai tujuan proyek.</p>
<ul>
<li>Risk management sering diabaikan, padahal bisa meningkatkan keberhasilan proyek</li>
<li>Risiko selalu ada <strong>di masa depan</strong> — bisa terjadi atau tidak</li>
<li>Risiko yang sudah lewat dicatat sebagai <strong>closed</strong></li>
<li>Planning risiko diulang secara terjadwal: di akhir fase atau milestone</li>
</ul>
</div>

<div class="card" id="risk-types">
<h2>🎯 2. Jenis Risiko & Risk Utility</h2>
<div class="comparison">
<div>
<h4>❌ Negative Risk (Threats)</h4>
<p>Potensi masalah yang bisa menghambat keberhasilan proyek. Contoh: keterlambatan, pembengkakan biaya.</p>
</div>
<div>
<h4>✅ Positive Risk (Opportunities)</h4>
<p>Risiko yang menghasilkan hal baik. Contoh: selesai lebih cepat, biaya lebih murah dari perkiraan.</p>
</div>
</div>
<div class="highlight">💡 <strong>Tujuan Risk Management:</strong> Minimize negative risks, maximize positive risks.</div>

<h3>Risk Utility (Risk Tolerance)</h3>
<table>
<tr><th>Tipe</th><th>Penjelasan</th><th>Cara Ingat</th></tr>
<tr><td><strong>Risk-Averse</strong></td><td>Menghindari risiko. Kepuasan naik perlahan meski payoff besar. Lebih suka main aman.</td><td>"Averse = Avoid = Takut risiko"</td></tr>
<tr><td><strong>Risk-Seeking</strong></td><td>Toleransi tinggi. Makin besar taruhannya, makin puas. Suka tantangan.</td><td>"Seeking = Suka mencari risiko"</td></tr>
<tr><td><strong>Risk-Neutral</strong></td><td>Seimbang antara risiko dan payoff.</td><td>"Neutral = Di tengah-tengah"</td></tr>
</table>
</div>

<div class="card" id="risk-process">
<h2>🔄 3. Enam Proses Risk Management</h2>
<table>
<tr><th>No</th><th>Proses</th><th>Penjelasan Singkat</th></tr>
<tr><td>1</td><td><strong>Planning Risk Management</strong></td><td>Menentukan CARA pendekatan & perencanaan aktivitas risk management</td></tr>
<tr><td>2</td><td><strong>Identifying Risks</strong></td><td>Menentukan risiko APA yang mungkin mempengaruhi proyek & dokumentasikan</td></tr>
<tr><td>3</td><td><strong>Performing Qualitative Risk Analysis</strong></td><td>Memprioritaskan risiko berdasarkan <strong>probability & impact</strong> (High/Medium/Low)</td></tr>
<tr><td>4</td><td><strong>Performing Quantitative Risk Analysis</strong></td><td>Mengestimasi ANGKA dampak risiko terhadap tujuan proyek</td></tr>
<tr><td>5</td><td><strong>Planning Risk Responses</strong></td><td>Menentukan TINDAKAN untuk menangani risiko</td></tr>
<tr><td>6</td><td><strong>Controlling Risk</strong></td><td>Memantau risiko, menjalankan response plan, identifikasi risiko baru</td></tr>
</table>
<div class="tip">🧠 <strong>Hafalan: PIQPPC</strong> — Plan, Identify, Qualitative, Quantitative, Plan responses, Control</div>
</div>

<div class="card" id="risk-plan">
<h2>📋 4. Planning Risk Management</h2>
<p>Output utama: <strong>Risk Management Plan</strong> — dokumen prosedur mengelola risiko sepanjang proyek.</p>
<h3>Topik dalam Risk Management Plan:</h3>
<ol>
<li><strong>Methodology</strong> — Alat & teknik apa yang dipakai</li>
<li><strong>Roles & Responsibilities</strong> — Siapa bertanggung jawab apa</li>
<li><strong>Budget & Schedule</strong> — Dana & waktu untuk aktivitas risiko</li>
<li><strong>Risk Categories</strong> — Kategori risiko (market, financial, technology, people, structure)</li>
<li><strong>Risk Probability & Impact</strong> — Definisi High/Med/Low</li>
<li><strong>Revised Stakeholders' Tolerances</strong> — Toleransi risiko stakeholder</li>
<li><strong>Tracking</strong> — Cara memantau risiko</li>
<li><strong>Risk Documentation</strong> — Cara mendokumentasikan</li>
</ol>

<h3>Konsep Penting Terkait:</h3>
<ul>
<li><strong>Contingency Plans</strong> = Rencana aksi yang sudah disiapkan JIKA risiko terjadi</li>
<li><strong>Fallback Plans</strong> = Rencana cadangan JIKA contingency plan tidak berhasil (untuk risiko high-impact)</li>
<li><strong>Contingency Reserves</strong> = Dana cadangan untuk mengurangi risiko overrun biaya/jadwal (bagian dari budget)</li>
<li><strong>Management Reserves</strong> = Dana untuk risiko yang TIDAK DIKETAHUI — BUKAN bagian cost baseline, TAPI bagian budget & funding</li>
</ul>

<h3>Risk Breakdown Structure (RBS)</h3>
<p>Hierarki kategori risiko potensial. Mirip WBS tapi untuk mengidentifikasi dan mengkategorikan risiko.</p>
</div>

<div class="card" id="risk-id">
<h2>🔍 5. Identifying Risks & Risk Register</h2>
<h3>Tools untuk Identifikasi Risiko:</h3>
<div class="grid-3">
<div class="emoji-card"><div class="emoji">🧠</div><strong>Brainstorming</strong><br>Kumpulkan ide spontan tanpa judgment</div>
<div class="emoji-card"><div class="emoji">📋</div><strong>Document Review</strong><br>Review dokumen proyek yang ada</div>
<div class="emoji-card"><div class="emoji">🎤</div><strong>Interviewing</strong><br>Wawancara orang berpengalaman</div>
<div class="emoji-card"><div class="emoji">📊</div><strong>SWOT Analysis</strong><br>Strengths, Weaknesses, Opportunities, Threats</div>
</div>

<h3>Risk Register — Dokumen UTAMA identifikasi risiko</h3>
<p>Berisi daftar semua risiko yang teridentifikasi dan informasi terkait. Isi Risk Register:</p>
<table>
<tr><th>Kolom</th><th>Penjelasan</th></tr>
<tr><td><strong>ID Number</strong></td><td>Nomor identifikasi unik (misal R15, R21)</td></tr>
<tr><td><strong>Rank</strong></td><td>Peringkat prioritas risiko</td></tr>
<tr><td><strong>Name</strong></td><td>Nama risiko</td></tr>
<tr><td><strong>Description</strong></td><td>Deskripsi detail risiko</td></tr>
<tr><td><strong>Category</strong></td><td>Kategori (market, financial, technical, dll)</td></tr>
<tr><td><strong>Root Cause</strong></td><td>Akar penyebab risiko</td></tr>
<tr><td><strong>Triggers</strong></td><td>Indikator/gejala bahwa risiko akan terjadi</td></tr>
<tr><td><strong>Potential Responses</strong></td><td>Kemungkinan respons</td></tr>
<tr><td><strong>Risk Owner</strong></td><td>Penanggung jawab risiko</td></tr>
<tr><td><strong>Probability & Impact</strong></td><td>Kemungkinan terjadi & dampaknya</td></tr>
<tr><td><strong>Status</strong></td><td>Status terkini risiko</td></tr>
</table>
</div>

<div class="card" id="qual">
<h2>📊 6. Qualitative Risk Analysis</h2>
<p>Memprioritaskan risiko sebagai <strong>High, Medium, atau Low</strong> berdasarkan dua dimensi:</p>
<div class="formula">Probability × Impact = Risk Priority</div>
<ul>
<li><strong>High</strong> = 75%-100% probability/impact</li>
<li><strong>Medium</strong> = 25%-75%</li>
<li><strong>Low</strong> = 0%-25%</li>
</ul>
<h3>Probability/Impact Matrix</h3>
<p>Matriks yang memetakan probabilitas di satu sisi dan dampak di sisi lain. Fokuskan perhatian pada risiko di area <strong>High-High</strong> terlebih dahulu.</p>
<h3>Watch List</h3>
<p>Daftar risiko yang prioritasnya rendah tapi tetap diidentifikasi sebagai potensi risiko. Perlu dipantau berkala.</p>
</div>

<div class="card" id="quant">
<h2>🔢 7. Quantitative Risk Analysis</h2>
<p>Estimasi NUMERIK dampak risiko. Sering dilakukan setelah qualitative analysis. Teknik utama:</p>
<ol>
<li><strong>Decision Tree Analysis</strong> — Diagram keputusan bercabang dengan probabilitas dan nilai moneter</li>
<li><strong>Simulation (Monte Carlo)</strong> — Simulasi komputer ribuan skenario</li>
<li><strong>Sensitivity Analysis</strong> — Menganalisis variabel mana yang paling berpengaruh</li>
</ol>
<div class="warn">⚠️ Banyak proyek HANYA melakukan qualitative analysis. Quantitative biasanya untuk proyek besar dan kompleks.</div>
</div>

<div class="card" id="response">
<h2>🛡️ 8. Planning Risk Responses</h2>
<h3>Strategi untuk NEGATIVE Risk (Threats):</h3>
<table>
<tr><th>Strategi</th><th>Penjelasan</th><th>Contoh</th></tr>
<tr><td><strong>Escalation</strong></td><td>Risiko di luar scope/wewenang PM → serahkan ke manajer lebih tinggi</td><td>Masalah regulasi pemerintah → eskalasi ke CEO</td></tr>
<tr><td><strong>Avoidance</strong></td><td>Menghilangkan ancaman dengan menghapus penyebabnya</td><td>Fitur berisiko tinggi → hapus dari scope</td></tr>
<tr><td><strong>Acceptance</strong></td><td>Menerima konsekuensi jika risiko terjadi</td><td>"Kalau server down 1 jam, kita terima saja"</td></tr>
<tr><td><strong>Transference</strong></td><td>Memindahkan tanggung jawab ke pihak ketiga</td><td>Beli asuransi, outsource ke vendor</td></tr>
<tr><td><strong>Mitigation</strong></td><td>Mengurangi dampak/probabilitas risiko</td><td>Tambah testing, pelatihan tim, backup system</td></tr>
</table>

<h3>Strategi untuk POSITIVE Risk (Opportunities):</h3>
<table>
<tr><th>Strategi</th><th>Penjelasan</th></tr>
<tr><td><strong>Escalation</strong></td><td>Sama — eskalasi ke level lebih tinggi jika di luar scope</td></tr>
<tr><td><strong>Exploitation</strong></td><td>Pastikan peluang PASTI terjadi</td></tr>
<tr><td><strong>Sharing</strong></td><td>Bagi kepemilikan peluang ke pihak lain</td></tr>
<tr><td><strong>Enhancement</strong></td><td>Perbesar ukuran peluang dengan memaksimalkan driver-nya</td></tr>
<tr><td><strong>Acceptance</strong></td><td>Tidak mengambil tindakan khusus</td></tr>
</table>

<div class="tip">🧠 <strong>Cara Hafal:</strong><br>
Negatif: <strong>EAATM</strong> — "Escalate, Avoid, Accept, Transfer, Mitigate"<br>
Positif: <strong>EESEA</strong> — "Escalate, Exploit, Share, Enhance, Accept"</div>

<h3>Residual & Secondary Risks</h3>
<ul>
<li><strong>Residual Risks</strong> = Risiko yang MASIH TERSISA setelah semua respons diimplementasikan</li>
<li><strong>Secondary Risks</strong> = Risiko BARU yang muncul sebagai AKIBAT LANGSUNG dari implementasi respons risiko</li>
</ul>
</div>

<div class="card" id="procurement">
<h2>🛒 9. Project Procurement Management</h2>
<p>= Proses mendapatkan (acquiring/procuring) barang dan jasa untuk proyek dari LUAR organisasi.</p>
<div class="highlight">💡 PM harus melakukan apa yang terbaik untuk proyek & organisasi — seringkali itu berarti membeli dari luar.</div>

<h3>Make-or-Buy Decision</h3>
<p>Organisasi memutuskan apakah lebih menguntungkan <strong>membuat sendiri (Make)</strong> atau <strong>membeli dari supplier (Buy)</strong>.</p>
<ul>
<li><strong>Make-or-Buy Analysis</strong> = bandingkan biaya internal vs biaya outsourcing</li>
<li><strong>Lease-or-Buy Analysis</strong> = sewa vs beli (untuk peralatan/item)</li>
</ul>

<h3>Manfaat Outsourcing:</h3>
<ul>
<li><strong>Reduce fixed & recurrent costs</strong> — Kurangi biaya tetap & berulang</li>
<li><strong>Access skills & technologies</strong> — Akses keahlian & teknologi yang tidak dimiliki</li>
<li><strong>Provide flexibility</strong> — Fleksibilitas tanpa menambah headcount</li>
<li><strong>Allow focus on core business</strong> — Organisasi bisa fokus pada bisnis inti</li>
<li><strong>Economies of scale</strong> — Supplier bisa layani banyak klien, biaya lebih efisien</li>
</ul>
</div>

<div class="card" id="contract">
<h2>📄 10. Tipe-Tipe Kontrak</h2>
<table>
<tr><th>Tipe Kontrak</th><th>Penjelasan</th><th>Risiko Buyer</th></tr>
<tr><td><strong>Fixed-Price / Lump Sum</strong></td><td>Harga total tetap untuk produk/jasa yang sudah jelas. Buyer risiko paling KECIL. Sub-tipe: FFP, FPIF, FP-EPA.</td><td>🟢 Rendah</td></tr>
<tr><td><strong>Cost-Reimbursable</strong></td><td>Bayar biaya aktual (langsung + tidak langsung) + fee/profit. Buyer risiko BESAR. Sub-tipe: CPAF, CPFF, CPIF.</td><td>🔴 Tinggi</td></tr>
<tr><td><strong>Time & Material (T&M)</strong></td><td>Hybrid. Bayar per jam + biaya material. Cocok kalau scope tidak jelas.</td><td>🟡 Sedang</td></tr>
<tr><td><strong>IDIQ</strong></td><td>Indefinite Delivery Indefinite Quantity — jumlah & waktu tidak pasti tapi ada batas atas-bawah.</td><td>🟡 Sedang</td></tr>
</table>
<div class="tip">🧠 <strong>Ingat:</strong> Fixed-Price = Buyer AMAN (risiko di seller). Cost-Reimbursable = Buyer TANGGUNG risiko.</div>
</div>

<div class="card" id="bid">
<h2>📨 11. Bid Documents: RFP, RFQ, SOW</h2>
<table>
<tr><th>Dokumen</th><th>Nama Panjang</th><th>Fungsi</th></tr>
<tr><td><strong>RFP</strong></td><td>Request for Proposal</td><td>Minta PROPOSAL dari calon seller (ada banyak pendekatan berbeda yang mungkin)</td></tr>
<tr><td><strong>RFQ</strong></td><td>Request for Quote</td><td>Minta HARGA dari calon supplier (produk/jasa sudah jelas definisinya)</td></tr>
<tr><td><strong>SOW</strong></td><td>Procurement Statement of Work</td><td>Deskripsi detail barang/jasa yang dibeli. Disertakan bersama RFP.</td></tr>
</table>
<div class="warn">⚠️ <strong>Soal sering keluar:</strong> RFQ digunakan untuk meminta penawaran HARGA (quote/bid), bukan proposal!</div>
</div>

<div class="card" id="selection">
<h2>🏆 12. Source Selection & Supplier Evaluation</h2>
<h3>Supplier Evaluation Matrix</h3>
<p>= Tipe <strong>Weighted Scoring Model</strong> untuk mengevaluasi seller secara objektif.</p>
<ul>
<li>Evaluasi berdasarkan: cost, quality, technology, past performance, management</li>
<li>Total bobot semua kriteria = 100%</li>
<li>Supplier dengan skor tertimbang tertinggi yang dipilih</li>
</ul>
<p><strong>Best and Final Offer (BAFO)</strong> — Seller di shortlist diminta submit penawaran terbaik & final mereka.</p>
</div>

<div class="card" id="change-mgmt">
<h2>🔄 13. Change Management</h2>
<div class="comparison">
<div><h4>Change Control</h4><p>Fokus pada mengelola <strong>perubahan terhadap tujuan proyek</strong> (scope, time, cost).</p></div>
<div><h4>Change Management</h4><p>Fokus pada <strong>dampak proyek terhadap orang-orang</strong> dalam organisasi.</p></div>
</div>
<h3>5 Langkah Change Management (PMI Practice Guide):</h3>
<ol>
<li><strong>Formulate</strong> — Buat alasan perubahan agar orang paham kenapa future state lebih baik</li>
<li><strong>Plan</strong> — Identifikasi aktivitas untuk mempersiapkan orang</li>
<li><strong>Implement</strong> — Tunjukkan manfaat dan buat perbaikan yang diperlukan</li>
<li><strong>Manage Transition</strong> — Tangani aktivitas setelah future state tercapai</li>
<li><strong>Sustain</strong> — Pastikan kapabilitas baru tetap berlanjut</li>
</ol>
<div class="tip">🧠 Model lain: ADKAR, Kotter's 8-Step, Virginia Satir, Bridges Transition Model</div>
</div>

<div class="card" id="hafal">
<h2>🧠 14. Ringkasan & Cara Menghafal</h2>
<div class="highlight">
<h3>📌 POIN KUNCI:</h3>
<ol>
<li>Risk = uncertainty yang bisa negatif ATAU positif</li>
<li>Risk-seeking punya toleransi tinggi, risk-averse menghindari risiko</li>
<li>6 proses: Plan → Identify → Qualitative → Quantitative → Plan Response → Control</li>
<li>Qualitative pakai Probability/Impact Matrix (High/Med/Low)</li>
<li>Negative response: Escalation, Avoidance, Acceptance, Transference, Mitigation</li>
<li>Positive response: Escalation, Exploitation, Sharing, Enhancement, Acceptance</li>
<li>RFQ = minta HARGA, RFP = minta PROPOSAL</li>
<li>Fixed-Price = buyer aman. Cost-Reimbursable = buyer tanggung risiko</li>
<li>Weighted Scoring Model untuk evaluasi supplier</li>
</ol>
</div>
</div>

<div class="card" id="contoh">
<h2>📖 15. Contoh Soal & Pembahasan</h2>
<details><summary>Soal: Apa bedanya Contingency Reserve vs Management Reserve?</summary>
<div><p><strong>Contingency Reserve</strong> = Dana untuk risiko yang SUDAH DIIDENTIFIKASI. Bagian dari cost baseline.</p>
<p><strong>Management Reserve</strong> = Dana untuk risiko yang BELUM DIKETAHUI. BUKAN bagian cost baseline, TAPI bagian dari total budget.</p></div></details>
<details><summary>Soal: Risk Mitigation vs Risk Avoidance?</summary>
<div><p><strong>Mitigation</strong> = Mengurangi dampak/probabilitas. Risiko masih ADA tapi efeknya diperkecil. Contoh: tambah server backup.</p>
<p><strong>Avoidance</strong> = Menghilangkan risiko TOTAL dengan menghapus penyebabnya. Contoh: hapus fitur berbahaya dari scope.</p></div></details>
</div>

""" + """
<div class="quiz-section" id="quiz_risk">
<h2>🎯 16. Latihan Soal: Risk & Procurement</h2>
""" + make_question("quiz_risk",1,"Mereka yang memiliki toleransi tinggi terhadap risiko dan kepuasannya meningkat ketika lebih banyak yang dipertaruhkan adalah...",{"a":"Risk-averse","b":"Risk-neutral","c":"Risk-seeking","d":"Risk-avoid"},"<strong>Jawaban: C.</strong> Risk-seeking = toleransi tinggi, satisfaction meningkat saat payoff besar.") + make_question("quiz_risk",2,"Proses menentukan risiko mana yang mungkin mempengaruhi proyek dan mendokumentasikan karakteristiknya adalah...",{"a":"Performing quantitative risk analysis","b":"Planning risk management","c":"Identifying risks","d":"Performing qualitative risk analysis"},"<strong>Jawaban: C.</strong> Identifying risks = determining which risks are likely to affect a project.") + make_question("quiz_risk",3,"Dua dimensi untuk mengevaluasi risiko adalah...",{"a":"Probability and Impact","b":"Awareness and Desire","c":"Cost and Schedule","d":"Negative and Positive"},"<strong>Jawaban: A.</strong> Probability (kemungkinan terjadi) dan Impact (dampak jika terjadi).") + make_question("quiz_risk",4,"Dokumen untuk meminta penawaran HARGA dari calon pemasok adalah...",{"a":"WBS","b":"RFQ","c":"RFP","d":"SOW"},"<strong>Jawaban: B.</strong> RFQ = Request for Quote = minta harga/bid.") + make_question("quiz_risk",5,"Teknik pemilihan seller/vendor menggunakan model skor berbobot adalah...",{"a":"Expected Monetary Value","b":"Monte Carlo Analysis","c":"Weighting Scoring Model","d":"SWOT Analysis"},"<strong>Jawaban: C.</strong> Supplier Evaluation Matrix = tipe Weighted Scoring Model.") + make_question("quiz_risk",6,"Mengurangi dampak risiko dengan mengurangi probabilitas terjadinya termasuk strategi...",{"a":"Risk Mitigation","b":"Risk Transference","c":"Risk Acceptance","d":"Risk Avoidance"},"<strong>Jawaban: A.</strong> Mitigation = reducing the impact/probability of a risk event.") + make_question("quiz_risk",7,"Tipe kontrak dengan risiko PALING KECIL bagi buyer adalah...",{"a":"Cost Plus Fixed Fee","b":"Time and Material","c":"Firm Fixed Price","d":"Cost Plus Incentive Fee"},"<strong>Jawaban: C.</strong> FFP (Firm Fixed Price) = least risk for buyer.") + make_question("quiz_risk",8,"'Supplier outsourcing seringkali menggunakan skala ekonomi untuk melayani banyak klien.' Ini merujuk pada manfaat outsourcing...",{"a":"Reduce costs","b":"Provide flexibility","c":"Access skills and technologies","d":"Focus on core business"},"<strong>Jawaban: A.</strong> Economies of scale = reduce both fixed and recurrent costs.") + make_question("quiz_risk",9,"Risiko BARU yang muncul sebagai AKIBAT dari implementasi respons risiko disebut...",{"a":"Residual risk","b":"Secondary risk","c":"Contingency risk","d":"Trigger risk"},"<strong>Jawaban: B.</strong> Secondary risks = direct result of implementing a risk response.") + make_question("quiz_risk",10,"Rencana cadangan yang diaktifkan JIKA contingency plan gagal (untuk risiko high-impact) adalah...",{"a":"Management reserve","b":"Contingency reserve","c":"Fallback plan","d":"Risk register"},"<strong>Jawaban: C.</strong> Fallback plans = backup jika contingency plan tidak efektif.") + make_question("quiz_risk",11,"Change Management berbeda dengan Change Control karena Change Management fokus pada...",{"a":"Perubahan scope proyek","b":"Perubahan budget proyek","c":"Dampak proyek terhadap orang-orang dalam organisasi","d":"Perubahan jadwal proyek"},"<strong>Jawaban: C.</strong> Change management = impact of projects on people. Change control = managing changes to project objectives.") + make_question("quiz_risk",12,"Kontrak hybrid antara fixed-price dan cost-reimbursable yang sering dipakai untuk jasa konsultasi adalah...",{"a":"CPFF","b":"FFP","c":"Time and Material","d":"IDIQ"},"<strong>Jawaban: C.</strong> T&M = hybrid, bayar per jam + material.") + """
<div style="margin-top:16px;">
<button class="btn" onclick="submitQuiz('quiz_risk',{1:'c',2:'c',3:'a',4:'b',5:'c',6:'a',7:'c',8:'a',9:'b',10:'c',11:'c',12:'c'})">📊 Submit</button>
<button class="btn btn-secondary" onclick="resetQuiz('quiz_risk')">🔄 Reset</button>
</div>
<div id="quiz_risk_result"></div>
</div>
"""

html = wrap("Materi 11: Risk & Procurement Management", body, "quiz_risk", "materi-11-risk-procurement.html", "Project Planning — Mengelola risiko & pengadaan barang/jasa proyek")
with open(os.path.join(DIR,"materi-11-risk-procurement.html"),"w",encoding="utf-8") as f:
    f.write(html)
print("✅ materi-11-risk-procurement.html created")
