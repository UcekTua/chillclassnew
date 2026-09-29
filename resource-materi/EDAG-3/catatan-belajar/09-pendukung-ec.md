# Pendalaman: layanan pendukung dan strategi

## 1. Posisi modul dalam perjalanan belajar

Kuis 2 yang disediakan mencakup marketing, keamanan, pembayaran dan strategi. Modul ini memastikan konsep dari acuan tersebut tetap dibahas, walaupun **bukan blueprint Simulasi Kuis 1**. Bab khusus topik-topik ini tidak tersedia; uraian merupakan penghubung dari soal, bab sebelumnya dan referensi primer yang ditautkan.

Alur: pahami keputusan pelanggan → ukur pemasaran → lindungi sistem → selesaikan pembayaran → pilih strategi → evaluasi hasil. Contoh angka adalah ilustrasi pendidikan.

## 2. Perilaku konsumen, riset, dan iklan

Pembelian dipengaruhi karakter konsumen, lingkungan sosial, karakter produk/merchant, stimulus pemasaran serta layanan pendukung. Bedakan faktor masukan dengan keputusan keluaran (apa, kapan, berapa, dari siapa). Antarmuka atau promosi dapat memengaruhi perilaku, tetapi data observasi saja belum membuktikan sebab-akibat.

Riset online dapat memanfaatkan survei, wawancara, observasi perilaku dan eksperimen. Anonimitas mempersulit verifikasi identitas/duplikasi dalam sebagian desain, sekaligus dapat membantu keterbukaan. Data besar belum tentu mewakili populasi. Blog, diskusi, dan sticker bermerek dapat menjadi medium pemasaran; medium bukan ukuran efektivitas.

Multimedia/rich media memperkaya format. Personalization menyesuaikan penawaran/pengalaman untuk pengguna. Iklan video yang identik bagi semua orang merupakan multimedia tanpa harus personal.

## 3. Metrik: denominator menentukan arti

**CTR = klik / impression × 100%**. Ukuran ini menggambarkan proporsi tayangan yang memperoleh klik; bukan biaya atau pembelian. [Google Ads: CTR](https://support.google.com/google-ads/answer/2615875?hl=en).

**CPM = biaya / impression × 1.000** adalah biaya per seribu tayangan. Bedakan impression biasa dan viewable impression sesuai definisi platform. [Google Ads: CPM](https://support.google.com/google-ads/answer/6310?hl=en).

Elaborasi: biaya Rp600.000, 100.000 tayangan, 2.000 klik, 60 pesanan → CTR 2%; CPM Rp6.000; conversion per klik 3%; biaya per pesanan Rp10.000. Angka ini belum menyatakan laba karena margin/retur belum diketahui.

Conversion rate perlu denominator jelas (pengguna, sesi atau klik). Cart abandonment perlu definisi kapan keranjang dianggap dimulai dan tidak selesai. Unique purchases berbeda dari jumlah item. Bandingkan periode, segmen, atribusi dan definisi yang sama. Traffic, likes dan CTR tinggi tidak otomatis berarti profit meningkat.

## 4. Keamanan: aset, ancaman, kelemahan, kontrol

**Confidentiality** menjaga akses/pengungkapan sesuai hak; **integrity** menjaga data dari perubahan/perusakan yang tidak semestinya; **availability** menjaga layanan tersedia bagi pihak yang berhak. Ketiganya merupakan CIA. [NIST: security](https://csrc.nist.gov/glossary/term/security).

**Authentication** memverifikasi identitas; **authorization** mengatur tindakan/sumber daya yang diizinkan. Pegawai yang berhasil login belum tentu boleh mengubah rekening pemasok. [NIST: authentication](https://csrc.nist.gov/glossary/term/authentication), [authorization](https://csrc.nist.gov/glossary/term/authorization).

**Threat** adalah potensi keadaan/kejadian yang merugikan. **Vulnerability** adalah kelemahan yang dapat dimanfaatkan atau memicu dampak buruk. Akun berizin terlalu luas adalah kelemahan; penyalahgunaannya adalah kejadian/tindakan. Prosedur usang bukan dengan sendirinya serangan disengaja. [NIST: threat](https://csrc.nist.gov/glossary/term/threat), [vulnerability](https://csrc.nist.gov/glossary/term/vulnerability).

**Preventive** mencegah/mengurangi peluang tindakan, **detective** menemukan kejadian, **corrective/recovery** memperbaiki atau memulihkan, **deterrent** memengaruhi niat dengan konsekuensi yang diketahui. Satu kontrol dapat memiliki beberapa efek. MFA dan pembatasan izin terutama preventive; log/alert terutama detective; pemulihan backup recovery; pemberitahuan pemantauan dapat menjadi deterrent. Sebut fungsi dominan dalam kasus.

Informasi assurance juga dapat mencakup keaslian, akuntabilitas dan nonrepudiation; CIA bukan daftar semua sifat keamanan. Enkripsi tidak otomatis menyelesaikan ketersediaan, otorisasi atau kesalahan proses.

## 5. Alur pembayaran dari persetujuan sampai dana

Pelaku umum: pemegang kartu, merchant, gateway/processor, acquirer, jaringan kartu dan issuer. **Authorization** meminta keputusan atas transaksi; persetujuan bukan berarti merchant sudah menerima dana. **Capture** mengajukan transaksi yang disetujui untuk proses berikutnya; **clearing** mempertukarkan/merekonsiliasi data kewajiban; **settlement** memindahkan/menyelesaikan dana antarpihak. Detail bergantung jaringan dan model. [Visa: payments](https://corporate.visa.com/content/VISA/visacorporate/global/en/home/solutions/acceptance/payments.html), [VisaNet Connect](https://developer.visa.com/capabilities/visanet-connect-acceptance).

Dalam istilah produk: debit biasanya membebankan dana rekening; credit memberi fasilitas kredit; charge card klasik mewajibkan pelunasan penuh per siklus, berbeda dari revolving credit. Stored value menyimpan nilai yang dapat digunakan. Smart card menggambarkan teknologi kartu, bukan protokol pembayaran atau jenis sumber dana. Produk aktual dapat memiliki fitur gabungan.

SSL/TLS adalah kategori teknologi keamanan kanal; SET dalam materi lama adalah contoh protokol historis pembayaran, bukan rekomendasi implementasi masa kini. Jangan memperlakukan kartu pintar sebagai protokol hanya karena sama-sama terlibat pembayaran.

Micropayment adalah transaksi bernilai kecil. Model agregasi menggabungkan banyak transaksi kecil untuk mengurangi biaya pemrosesan relatif; prepaid membayar saldo lebih dahulu; subscription menjual akses periode. Nilai digital dapat dipakai untuk transaksi barang fisik jika para pihak dan sistem mendukung; bentuk uang tidak menentukan bentuk barang. Ini pembahasan konsep, bukan rekomendasi produk keuangan.

## 6. Harga dan strategi masuk pasar

**Cost-plus** = biaya ditambah markup. **Competition-based** mengacu harga/posisi pesaing. **Value-based** mengacu nilai yang diterima pelanggan. **Name-your-own-price** memberi pembeli kesempatan mengajukan harga yang dapat diterima/ditolak penjual. Opsi ini bukan hak menetapkan harga sepihak.

Biaya Rp80.000 + markup 25% biaya → Rp100.000; marginnya 20% dari harga jual. Menggunakan angka 25% untuk kedua denominator menghasilkan kesalahan.

First mover dapat memperoleh pengalaman, pengenalan, hubungan atau standar lebih awal, tetapi juga menanggung eksperimen dan edukasi pasar. Pengikut dapat belajar dari kesalahan. Keuntungan ditentukan hubungan timing, kemampuan, sumber daya dan pasar, bukan “pertama selalu murah”.

## 7. Five forces dan siklus strategi

Five forces melihat rivalry antarpesaing yang sudah ada, ancaman pendatang, ancaman substitusi, daya tawar pemasok dan daya tawar pembeli. Tujuannya menganalisis struktur kompetisi dan potensi nilai industri. Perang diskon antarplatform yang sudah bersaing adalah rivalry; masuknya pemain baru adalah ancaman pendatang. [Harvard Business School: Five Forces](https://www.isc.hbs.edu/strategy/business-strategy/Pages/the-five-forces.aspx).

Siklus yang diuji kuis: **initiation → formulation → implementation → assessment → improvement**. Diagnosis menjelaskan posisi/masalah; formulasi memilih tujuan dan pendekatan; implementasi menjalankan; assessment membandingkan hasil; improvement menindaklanjuti. Evaluasi dapat berlangsung selama implementasi dan memberi umpan balik.

## 8. Balanced scorecard, KPI, dan pemilihan vendor

Balanced scorecard menghubungkan strategi dengan perspektif keuangan, pelanggan, proses internal, serta pembelajaran/pertumbuhan. Waktu pemenuhan cocok dengan proses internal; kepuasan dengan pelanggan; margin dengan keuangan; pengembangan kompetensi dengan pembelajaran. Keterkaitan antarperspektif penting: kompetensi dapat memperbaiki proses, lalu pengalaman dan hasil keuangan. [HBS: Balanced Scorecard](https://online.hbs.edu/blog/post/balanced-scorecard).

Metric adalah ukuran; KPI merupakan ukuran yang dipilih sebagai indikator kinerja penting terhadap sasaran. Banyak metrik tidak otomatis menjadi scorecard yang baik. Tetapkan tujuan, baseline, target, pemilik dan periode; jangan mengganti tujuan dengan angka yang mudah dihitung.

Gartner Magic Quadrant menilai **ability to execute** dan **completeness of vision**. Leaders kuat pada kedua dimensi, Challengers kuat dalam eksekusi relatif terhadap visi, Visionaries kuat pada visi relatif terhadap eksekusi, Niche Players berfokus pada segmen atau memiliki posisi lebih terbatas dalam evaluasi pasar itu. Niche bukan otomatis tidak cocok: pilih menurut kebutuhan, biaya dan konteks. [Gartner: Magic Quadrant](https://www.gartner.com/en/research/methodologies/magic-quadrants-research).

## 9. Menghubungkan seluruh konsep melalui satu kasus

Elaborasi: platform menaikkan CTR tetapi profit turun. Uji apakah klik mengonversi; hitung margin setelah diskon/retur; periksa order dan settlement; nilai apakah penyalahgunaan promo memanfaatkan kontrol yang lemah. Pilih perbaikan berdasarkan diagnosis, tetapkan KPI proses serta hasil, lalu evaluasi eksperimen.

Social collaboration dan virtual world dapat memperbaiki diskusi/simulasi, tetapi antarmuka imersif tidak selalu mempercepat pencarian pengetahuan. Simulasi interaktif membantu menguji keputusan dengan mengubah input. Integrasikan temuan dengan KM agar pengalaman organisasi dapat digunakan ulang. Seluruh 30 konsep unik Kuis 2 dipetakan dalam audit sumber; jawaban kategori yang ambigu tidak dijadikan hukum universal.
