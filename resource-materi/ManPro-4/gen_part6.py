
import os, sys
sys.stdout.reconfigure(encoding='utf-8')
DIR = r"d:\2. UWIW\0. CHP\Chill Class\resource-materi\ManPro-4"
exec(open(os.path.join(DIR,"gen_part1.py"),encoding="utf-8").read().split("# ====")[0])

body = """
<div class="card">
<h2>🎓 Simulasi Ujian Akhir Semester (UAS)</h2>
<p>Simulasi ini mencakup soal-soal komprehensif dari materi <strong>Topic 10 hingga Topic 13 (Closing)</strong>, termasuk modifikasi dari studi kasus EVM, Risk, Procurement, dan Konflik. Soal dirancang sedikit lebih sulit dan analitis untuk mempersiapkan Anda menghadapi UAS yang sebenarnya.</p>
<div class="tip">Pastikan Anda sudah membaca semua materi sebelum mengerjakan simulasi ini. Good luck!</div>
</div>
"""

quiz = '<div class="quiz-section" id="quiz_uas">'

# Communication & Stakeholder (1-5)
quiz += make_question("quiz_uas", 1, "Anda sedang menangani proyek dengan 15 orang stakeholder. Karena ada reorganisasi, 3 orang stakeholder inti diganti dengan 5 orang stakeholder baru. Berapa penambahan jumlah saluran komunikasi (communication channels) yang terjadi akibat perubahan ini?", {"a":"105","b":"31","c":"45","d":"136"})
quiz += make_question("quiz_uas", 2, "Sebagai Project Manager, Anda menemukan bahwa Stakeholder Engagement Plan yang memuat informasi sensitif mengenai resistensi seorang Direktur terhadap proyek, secara tidak sengaja terlampir dalam email update mingguan yang dikirim ke seluruh staf. Apa prinsip utama yang dilanggar dalam kasus ini?", {"a":"Stakeholder engagement plan harus bersifat rahasia dan tidak didistribusikan secara luas","b":"Project manager tidak boleh mencatat informasi sensitif dalam dokumen apa pun","c":"Email mingguan hanya boleh berisi schedule variance","d":"Semua dokumen proyek harus menggunakan format PDF yang diproteksi"})
quiz += make_question("quiz_uas", 3, "Dalam sebuah proyek Agile, tim merasa terlalu banyak menghabiskan waktu untuk meeting status harian yang melebar ke diskusi teknis mendalam sehingga memakan waktu lebih dari 1 jam. Apa aturan Scrum yang seharusnya ditegakkan oleh Scrum Master?", {"a":"Menghapus Daily Scrum sepenuhnya","b":"Membatasi Daily Scrum maksimal 15 menit dan memindahkan diskusi teknis ke sesi terpisah","c":"Mengurangi frekuensi Daily Scrum menjadi seminggu sekali","d":"Mewajibkan semua stakeholder hadir agar diskusi teknis langsung mendapat persetujuan"})

# Risk & Procurement (4-9)
quiz += make_question("quiz_uas", 4, "Anda adalah konsultan manajemen risiko di RSUD Harapan Sehat yang beroperasi 24/7. Anda mengidentifikasi risiko: 'Downtime server saat migrasi data SIMRS menyebabkan penanganan pasien terhenti'. Tim memutuskan untuk menyewa server cloud tambahan secara paralel selama proses migrasi. Strategi respons risiko apa yang digunakan?", {"a":"Avoidance","b":"Acceptance","c":"Mitigation","d":"Transference"})
quiz += make_question("quiz_uas", 5, "Sebuah perusahaan manufaktur ingin mengimplementasikan sistem ERP. Tim IT internal mereka hanya berisi administrator jaringan dan tidak pernah mengimplementasikan ERP. Jika perusahaan memutuskan untuk membangun ERP custom dari nol menggunakan tim internal yang baru direkrut, jenis risiko apa yang PALING mungkin terjadi?", {"a":"Manajemen tidak mau menggunakan sistem","b":"Scope creep dan pembengkakan waktu secara masif karena kurangnya pengalaman enterprise ERP","c":"Biaya lisensi tahunan yang membengkak","d":"Ketergantungan penuh pada vendor eksternal"})
quiz += make_question("quiz_uas", 6, "Dalam kontrak antara Bank NDB dengan vendor Fintech untuk pembuatan Mobile Banking, disepakati bahwa Bank NDB akan membayar semua biaya aktual pengembangan ditambah fee tetap sebesar Rp 500 juta. Jika proyek molor, Bank NDB tetap harus membayar biaya jam kerja vendor yang membengkak. Jenis kontrak apakah ini?", {"a":"Fixed-Price (Lump-Sum)","b":"Cost-Reimbursable (CPFF - Cost Plus Fixed Fee)","c":"Time and Material (T&M)","d":"IDIQ (Indefinite Delivery Indefinite Quantity)"})
quiz += make_question("quiz_uas", 7, "Risk owner pada proyek melaporkan bahwa risiko yang mereka mitigasi ternyata memicu munculnya risiko baru yang sebelumnya tidak teridentifikasi. Risiko baru ini disebut sebagai...", {"a":"Residual Risk","b":"Primary Risk","c":"Secondary Risk","d":"Fallback Risk"})

# Executing (10-15)
quiz += make_question("quiz_uas", 8, "Andi (Developer) dan Rina (UI/UX) bersitegang karena desain yang tidak realistis secara teknis. Keduanya menolak berkompromi dan memaksakan kehendak masing-masing. Berdasarkan Thomas-Kilmann Conflict Handling Modes, mode apa yang sedang mereka tunjukkan?", {"a":"Avoiding","b":"Accommodating","c":"Collaborating","d":"Competing"})
quiz += make_question("quiz_uas", 9, "Masih mengenai konflik Andi dan Rina, jika Anda sebagai PM meminta Rina menyederhanakan desain sedikit dan meminta Andi berusaha menulis kode sedikit lebih kompleks agar desain tetap menarik, mode penanganan konflik apa yang Anda terapkan?", {"a":"Compromising","b":"Collaborating","c":"Accommodating","d":"Competing"})
quiz += make_question("quiz_uas", 10, "Berdasarkan Herzberg's Motivation-Hygiene Theory, jika Anda menaikkan gaji seluruh developer sebesar 50% tanpa memberikan mereka tantangan kerja atau pengakuan atas prestasi, apa yang paling mungkin terjadi?", {"a":"Mereka akan sangat termotivasi dan kinerja meningkat tajam","b":"Mereka tidak akan tidak puas (dissatisfied), tetapi juga tidak akan benar-benar termotivasi untuk berprestasi lebih","c":"Mereka akan merasa self-actualization mereka terpenuhi","d":"Mereka akan menjadi demotivasi dan keluar dari pekerjaan"})
quiz += make_question("quiz_uas", 11, "Dalam mengelola anggota tim proyek, Anda menyadari bahwa programmer lead Anda sangat fokus pada tugas (task-oriented) dan sangat proaktif dalam mengambil keputusan, tetapi sering mengabaikan perasaan orang lain. Berdasarkan Social Styles Profile, tipe apakah dia?", {"a":"Analytical","b":"Amiable","c":"Driver","d":"Expressive"})
quiz += make_question("quiz_uas", 12, "Apa output terpenting dari fase Executing yang merupakan alasan utama proyek tersebut dikerjakan?", {"a":"Project Management Plan","b":"Deliverables","c":"Change Requests","d":"Issue Log"})

# Monitoring & Controlling (16-21)
quiz += make_question("quiz_uas", 13, "Proyek pengembangan aplikasi dijadwalkan 10 bulan dengan total anggaran Rp 500 juta. Di bulan ke-4, Planned Value (PV) adalah Rp 200 juta. Namun, hanya 30% pekerjaan yang selesai dan biaya yang dihabiskan adalah Rp 180 juta. Hitung nilai Cost Performance Index (CPI) dan Schedule Performance Index (SPI) secara berurutan!", {"a":"0.83 dan 0.75","b":"0.75 dan 0.83","c":"1.20 dan 1.33","d":"-30 juta dan -50 juta"})
quiz += make_question("quiz_uas", 14, "Berdasarkan data soal nomor 13, berapakah Estimate at Completion (EAC) proyek tersebut, dan apa maknanya?", {"a":"Rp 500 juta; Proyek akan selesai sesuai anggaran","b":"Rp 602.4 juta; Perkiraan total biaya penyelesaian proyek membengkak dari rencana awal","c":"Rp 422.4 juta; Sisa dana yang dibutuhkan untuk menyelesaikan proyek","d":"Rp 300 juta; Biaya yang berhasil dihemat sejauh ini"})
quiz += make_question("quiz_uas", 15, "Dalam analisis keluhan aplikasi TransJakarta, ditemukan 450 keluhan: Gagal login (180), Error bayar (120), Tiket tidak terkirim (75), Aplikasi lambat (50), Tampilan rusak (25). Alat kontrol kualitas apa yang paling tepat untuk menentukan keluhan mana yang harus diprioritaskan untuk diperbaiki agar menyelesaikan mayoritas masalah?", {"a":"Control Chart","b":"Scatter Diagram","c":"Pareto Chart","d":"Flowchart"})
quiz += make_question("quiz_uas", 16, "Anda melihat garis pada grafik Control Chart dari proses server response time. Anda menyadari ada 7 titik berturut-turut yang semuanya berada di bawah garis rata-rata (mean), meskipun masih dalam batas spesifikasi. Tindakan apa yang seharusnya diambil berdasarkan prinsip Quality Control?", {"a":"Tidak perlu melakukan apa-apa karena masih dalam batas kontrol","b":"Menghentikan proyek secara permanen","c":"Menyelidiki proses tersebut karena adanya pola non-random berdasarkan Seven Run Rule","d":"Menaikkan upper control limit agar data terlihat lebih stabil"})
quiz += make_question("quiz_uas", 17, "Dalam Agile, alat mana yang digunakan untuk menunjukkan sisa pekerjaan (task) yang belum selesai di dalam satu sprint tertentu?", {"a":"Velocity Chart","b":"Burndown Chart","c":"Burnup Chart","d":"Gantt Chart"})
quiz += make_question("quiz_uas", 18, "Perbedaan mendasar antara Verified Deliverables dan Validated Deliverables adalah...", {"a":"Verified berarti diperiksa kualitasnya oleh tim internal (QC), Validated berarti diterima secara formal oleh customer","b":"Validated berarti diperiksa kualitasnya oleh tim internal, Verified berarti diterima oleh customer","c":"Verified digunakan untuk biaya, Validated digunakan untuk jadwal","d":"Tidak ada perbedaan, keduanya adalah istilah yang bisa ditukar"})

# Closing (22-25)
quiz += make_question("quiz_uas", 19, "Proyek pengembangan AI untuk deteksi kanker telah berhasil mencapai akurasi 99%, dan aplikasi telah dipasang di rumah sakit. Setelah itu, tim inti dari proyek ini diangkat untuk membentuk divisi baru bernama 'AI Medical Division' di dalam perusahaan. Penutupan proyek dengan cara ini disebut...", {"a":"Extinction","b":"Integration","c":"Starvation","d":"Addition"})
quiz += make_question("quiz_uas", 20, "Sponsor tiba-tiba memotong aliran dana untuk proyek secara perlahan tanpa pengumuman resmi karena menyadari teknologi yang dikembangkan sudah usang. Akhirnya proyek tersebut mati karena tidak memiliki resource. Ini adalah contoh dari terminasi proyek melalui...", {"a":"Extinction","b":"Integration","c":"Starvation","d":"Addition"})
quiz += make_question("quiz_uas", 21, "Di dalam Agile project, ketika proyek secara keseluruhan akan berakhir, apa aktivitas krusial yang harus dilakukan tim selain transisi operasional?", {"a":"Daily Scrum perpisahan","b":"Final Retrospective untuk membahas lessons learned seluruh proyek","c":"Mengubah Scrum Master menjadi Manajer Operasional","d":"Membatalkan sprint review terakhir"})
quiz += make_question("quiz_uas", 22, "Mengapa Lessons-Learned Report sangat disarankan untuk didokumentasikan sepanjang proyek berjalan, bukan hanya di akhir proyek?", {"a":"Agar dapat diserahkan ke sponsor untuk penambahan dana","b":"Agar memori tim masih segar dan detail krusial tidak terlupakan di akhir proyek","c":"Untuk menghukum anggota tim yang melakukan kesalahan di tengah proyek","d":"Karena itu adalah syarat dari ISO 9001"})

# Hard Mixed Case Studies (26-27)
quiz += make_question("quiz_uas", 23, "Sebuah proyek implementasi ERP memiliki anggaran Rp 3.6 Miliar dan dijadwalkan selesai dalam 15 bulan. Jika CPI adalah 0.90 dan SPI adalah 1.15. Manakah pernyataan analisis yang PALING TEPAT mengenai status proyek?", {"a":"Proyek mengalami over budget yang kritis dan terlambat parah","b":"Proyek berkinerja lebih cepat dari jadwal (ahead of schedule), tetapi menghabiskan biaya lebih besar dari yang dianggarkan (over budget) untuk titik progres saat ini","c":"Proyek berjalan lambat namun sangat hemat biaya","d":"Proyek akan selesai tepat waktu dan on budget"})
quiz += make_question("quiz_uas", 24, "Sebuah tim Agile (Scrum) sering mengalami masalah di mana tim Development membuat arsitektur teknis yang luar biasa canggih, tetapi sering kali tidak sesuai dengan apa yang benar-benar dibutuhkan oleh bisnis di pasar. Event mana yang tidak dimanfaatkan dengan baik oleh Product Owner dan Stakeholder?", {"a":"Sprint Retrospective","b":"Sprint Review","c":"Daily Scrum","d":"Sprint Planning"})
quiz += make_question("quiz_uas", 25, "Manakah pernyataan di bawah ini yang BENAR terkait penerapan Management By Wandering Around (MBWA) pada fase Executing?", {"a":"PM diam di meja, menunggu laporan resmi tertulis dari supervisor lapangan","b":"PM melakukan observasi informal dan interaksi tatap muka dengan anggota tim secara kasual di area kerja","c":"PM melakukan inspeksi audit kualitas formal bersama auditor eksternal","d":"PM mengirimkan survei anonim untuk memonitor motivasi tim"})

quiz += """
<div style="margin-top:15px; border-top:1px solid #444; padding-top:20px;">
<button class="btn" style="width:100%; padding:15px; font-size:1.2em;" onclick="submitQuiz('quiz_uas',{1:'b',2:'a',3:'b',4:'c',5:'b',6:'b',7:'c',8:'d',9:'a',10:'b',11:'c',12:'b',13:'a',14:'b',15:'c',16:'c',17:'b',18:'a',19:'d',20:'c',21:'b',22:'b',23:'b',24:'b',25:'b'})">🚀 Submit Jawaban UAS</button>
<button class="btn" style="background:#374151; width:100%;" onclick="resetQuiz('quiz_uas')">🔄 Ulangi Simulasi</button>
</div>
<div id="quiz_uas_result" style="margin-top:20px;"></div>
</div>
"""

html = wrap("📝 Simulasi Ujian Akhir Semester (UAS)", body+quiz, "quiz_uas", "simulasi-uas.html")
with open(os.path.join(DIR,"simulasi-uas.html"),"w",encoding="utf-8") as f:
    f.write(html)
print("DONE: simulasi-uas.html")
