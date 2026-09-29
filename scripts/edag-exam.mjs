import { questions, mc, tf } from './edag-questions.mjs';
import { reviewQuestions } from './edag-question-review.mjs';

// Format follows the source quiz; scope is exclusively Chapters 1–5.
// Six questions per chapter: three five-option MCQs and three assertions.
reviewQuestions(questions);
const p = 'exam';
const source = ch => `Chapter ${ch}: slide S${ch} dan buku B${ch}; kasus baru dalam cakupan bab.`;

mc(1,'Kanal, digitasi, dan revenue stream','s9',
  'Penerbit menutup toko retailnya, menjual buku cetak melalui web, dan mengirim lewat kurir. Ia juga menerima langganan akses e-book secara online. Klasifikasi mana konsisten untuk organisasi, transaksi buku cetak, dan penerimaan e-book?',
  'Pisahkan tiga unit analisis. Kanal retail online sesuai pure-play; buku cetak tetap partial EC karena pemenuhan/pengirimannya fisik. Pembayaran periodik akses e-book adalah subscription revenue. Gudang tidak sama dengan toko retail, dan transaksi campuran tidak mengubah subscription menjadi transaction fee.',[
    ['Pure-play; partial EC; subscription revenue','Label diterapkan pada kanal organisasi, digitalisasi transaksi, lalu cara menerima pendapatan.'],
    ['Pure-play; pure EC; subscription revenue','Pure-play benar, tetapi kanal online tidak mendigitalkan pengiriman buku cetak.'],
    ['Click-and-mortar; partial EC; subscription revenue','Gudang bukan bukti bahwa kanal toko retail fisik masih ada.'],
    ['Pure-play; partial EC; transaction-fee revenue','Subscription menagih akses periodik, sedangkan transaction fee menagih transaksi tertentu.'],
    ['Click-and-mortar; pure EC; transaction-fee revenue','Mencampurkan operasi fisik, kanal online, dan penagihan periodik.']
  ],p,source(1));
mc(1,'Canvas dan janji layanan','s8',
  'Platform menjanjikan laboratorium kampus “reagen sesuai spesifikasi, tersedia besok”. Penjual mengunggah sertifikat sendiri; stok diperbarui mingguan. Pasangan key activities dan key resources mana paling langsung menguji kemampuan memenuhi value proposition tersebut?',
  'Janji memiliki dua syarat: kesesuaian spesifikasi dan ketersediaan tepat waktu. Validasi serta reservasi perlu ditopang data mutu dan stok yang dapat dipercaya. Akuisisi atau rancangan pendapatan relevan dalam canvas, tetapi tidak menguji kemampuan operasi memenuhi kedua syarat itu.',[
    ['Validasi sertifikat dan reservasi; data mutu serta stok','Aktivitas dan sumber daya langsung menopang dua komponen janji layanan.'],
    ['Negosiasi komisi dan penagihan; kontrak serta piutang','Menguji penerimaan dan kontrak, belum spesifikasi atau kesiapan stok.'],
    ['Akuisisi penjual dan promosi; daftar prospek serta kanal','Menguji pertumbuhan, tetapi banyak penjual tidak menjamin stok benar.'],
    ['Segmentasi pembeli dan survei; profil serta umpan balik','Menguji kecocokan janji dengan kebutuhan pasar, belum kemampuan melaksanakannya.'],
    ['Penyusunan katalog dan desain; foto serta deskripsi item','Mendukung penyajian penawaran; sertifikat dan stok masih perlu diverifikasi.']
  ],p,source(1));
mc(1,'Pendapatan platform dan nilai transaksi','s9',
  'Platform tidak memiliki barang yang dijual. Transaksi penjual mencapai Rp80 juta per bulan. Platform menerima komisi 6% dan langganan 20 toko masing-masing Rp150.000. Biaya variabel platform Rp2 juta. Abaikan pajak, refund, dan biaya tetap. Berapa pendapatan serta kontribusi platform?',
  'GMV Rp80 juta adalah nilai barang para penjual. Komisi = 0,06 × 80 juta = 4,8 juta; subscription = 20 × 150 ribu = 3 juta. Pendapatan 7,8 juta dikurangi biaya variabel 2 juta menghasilkan kontribusi 5,8 juta, sebelum biaya tetap.',[
    ['Pendapatan Rp7,8 juta; kontribusi Rp5,8 juta','Memisahkan dua revenue streams dari GMV lalu mengurangkan biaya variabel satu kali.'],
    ['Pendapatan Rp83 juta; kontribusi Rp81 juta','Memasukkan nilai barang penjual sebagai pendapatan platform penuh.'],
    ['Pendapatan Rp4,8 juta; kontribusi Rp2,8 juta','Menghitung komisi tetapi mengabaikan pendapatan langganan.'],
    ['Pendapatan Rp7,8 juta; kontribusi Rp4,8 juta','Pendapatan tepat, tetapi mengurangkan langganan seolah biaya.'],
    ['Pendapatan Rp5,8 juta; kontribusi Rp3,8 juta','Menamai kontribusi sebagai pendapatan lalu mengurangkan biaya variabel lagi.']
  ],p,source(1));
tf(1,'Relasi aktor dan perantara','s3',
  'Marketplace mengatur pembayaran jual beli kamera pribadi antara dua individu tanpa membeli kameranya. Pada unit analisis pertukaran kamera, biaya layanan marketplace mengubah relasi C2C menjadi B2C.',false,
  'Pelaku pertukaran kamera tetap dua individu. Biaya platform menunjukkan transaksi jasa perantara yang perlu dianalisis terpisah; itu tidak membuat platform menjadi penjual kamera. B2C pada barang memerlukan bisnis bertindak sebagai penjualnya.',p,source(1));
tf(1,'Richness dan reach','s5',
  'Katalog tetap melayani pengguna dan SKU yang sama, tetapi menambahkan spesifikasi kompatibilitas dan demonstrasi penggunaan. Richness meningkat meskipun perluasan reach belum ditunjukkan.',true,
  'Richness berkaitan dengan kedalaman dan mutu informasi. Reach berkaitan dengan jangkauan pihak atau penawaran. Kasus menahan jangkauan tetap; peningkatan informasi tidak perlu dinyatakan sebagai perluasan reach agar bermanfaat.',p,source(1));
tf(1,'EB dan aktivitas internal','s1',
  'Perusahaan mendigitalkan pelatihan teknisi dan berbagi desain dengan pemasok, sedangkan penjualan pelanggan masih offline. Dengan definisi EB luas dalam materi, dua aktivitas digital tersebut termasuk e-business.',true,
  'EB mencakup pembelajaran, kolaborasi mitra dan operasi organisasi, selain transaksi penjualan. Kanal penjualan offline tidak menghapus kegiatan EB tersebut. Gunakan definisi yang dinyatakan soal, karena EC dalam penggunaan luas kadang mendekati EB.',p,source(1));

mc(2,'Struktur pasar dan aturan lelang','s8',
  'Situs milik produsen menawarkan satu mesin kepada banyak calon pembeli. Harga diturunkan bertahap dari Rp70 juta; penerima pertama menang. Kombinasi pengendali pasar, sisi pasar, dan aturan harga mana paling tepat?',
  'Kendali satu produsen menunjukkan private marketplace; satu penjual menghadapi banyak pembeli menunjukkan sell-side. Harga turun sampai diterima adalah Dutch auction. Reverse auction ditentukan pemasok yang bersaing untuk satu pembeli, bukan sekadar arah harga.',[
    ['Private sell-side; Dutch auction','Memakai bukti pengendali, struktur pelaku, dan aturan penawaran secara terpisah.'],
    ['Private buy-side; reverse auction','Harga turun tidak menjadikan produsen pembeli atau calon pembeli pemasok.'],
    ['Public sell-side; Dutch auction','Aturan tepat, tetapi banyak pengunjung tidak mengubah kendali satu produsen.'],
    ['Private sell-side; reverse auction','Struktur tepat, tetapi pembeli berebut barang satu penjual dalam kasus ini.'],
    ['Public many-to-many; double auction','Tidak ada banyak penjual atau pencocokan dua kumpulan bid jual-beli.']
  ],p,source(2));
mc(2,'Biaya penny auction','s8',
  'Setiap bid pada penny auction berbiaya Rp4.000 dan tidak dikembalikan. Rani mengajukan 18 bid lalu menang dengan harga Rp120.000 dan ongkir Rp20.000. Tidak ada biaya lain. Barang setara di toko berharga total Rp200.000. Evaluasi biaya yang benar adalah…',
  'Biaya bid = 18 × 4.000 = 72.000. Total = 72.000 + 120.000 + 20.000 = 212.000. Dibanding alternatif 200.000, Rani membayar 12.000 lebih banyak. Harga penutup lelang saja mengabaikan biaya partisipasi yang tidak dikembalikan.',[
    ['Total Rp212.000; lebih mahal Rp12.000','Memasukkan semua biaya dan membandingkan total pada basis yang sama.'],
    ['Total Rp140.000; lebih murah Rp60.000','Mengabaikan 18 biaya bid yang tetap dibayar pemenang.'],
    ['Total Rp192.000; lebih murah Rp8.000','Memasukkan bid serta harga kemenangan tetapi mengabaikan ongkir.'],
    ['Total Rp196.000; lebih murah Rp4.000','Jumlah ini menghitung 14 bid, bukan 18 bid yang dinyatakan.'],
    ['Total Rp232.000; lebih mahal Rp32.000','Menghitung ongkir dua kali, padahal hanya dikenakan satu kali.']
  ],p,source(2));
mc(2,'Crowdsourcing dan seleksi','s11',
  'Ide A mendapat suara terbanyak tetapi prototipenya melewati batas biaya. Ide B memenuhi batas biaya dan performa, namun kalah suara. Penyelenggara sejak awal mensyaratkan kelayakan teknis dan memakai voting sebagai masukan. Keputusan paling konsisten adalah…',
  'Voting menggambarkan preferensi peserta, sedangkan pengujian prototipe membuktikan kelayakan terhadap batas. B dapat diprioritaskan; A dapat diberi kesempatan revisi jika diizinkan. Mengganti syarat kelayakan dengan popularitas sesudah voting mengubah dasar seleksi.',[
    ['Prioritaskan B; minta revisi A bila aturan mengizinkan','Menjaga batas wajib sekaligus memanfaatkan kontribusi peserta.'],
    ['Prioritaskan A; pakai suara untuk mengganti uji biaya','Mengubah voting menjadi pengganti syarat teknis yang telah diumumkan.'],
    ['Ambil biaya rata-rata A dan B; luluskan keduanya','Biaya satu ide tidak dikurangi kelayakan ide lain jika tiap ide harus memenuhi batas.'],
    ['Pilih keduanya bergiliran; uji kelayakan setelah rilis','Menunda syarat wajib sampai sesudah keputusan implementasi.'],
    ['Ulangi voting; gunakan hasilnya sebagai uji teknis','Voting tambahan tetap mengukur pilihan, bukan perubahan biaya atau performa.']
  ],p,source(2));
tf(2,'Perubahan fungsi perantara','s5',
  'Produsen melewati distributor yang semula mencari pembeli dan menangani pengiriman. Platform baru mengambil alih kedua fungsi itu. Disintermediation distributor dan reintermediation fungsi dapat terjadi dalam perubahan rantai yang sama.',true,
  'Perantara yang hilang berbeda dari fungsi yang tetap dibutuhkan. Distributor dihapus, sementara platform menjadi perantara baru untuk matching dan fulfillment. Kedua konsep berlaku pada tingkat analisis yang dijelaskan tanpa saling meniadakan.',p,source(2));
tf(2,'Pencarian visual dan AR','s10',
  'Aplikasi menerima foto ruang tamu, mengenali warna, lalu menampilkan daftar sofa di halaman katalog terpisah. Karena foto dunia nyata menjadi masukan, fitur ini diklasifikasikan sebagai augmented reality.',false,
  'Gambar dapat menjadi masukan pencarian atau rekomendasi visual. AR menambahkan elemen digital pada pandangan lingkungan nyata; kasus hanya menghasilkan daftar katalog terpisah. Jenis input saja tidak membuktikan representasi AR.',p,source(2));
tf(2,'Storefront dan mall','s6',
  'Direktori mengumpulkan tautan 60 toko dan meneruskan pengguna ke checkout tiap toko. Dalam klasifikasi buku, direktori itu menjadi satu storefront karena tidak memiliki keranjang bersama.',false,
  'Referring mall dapat mengumpulkan banyak toko tanpa checkout terpadu. Storefront merujuk toko satu penjual/perusahaan. Kepemilikan keranjang bukan pembeda tunggal; banyak toko tetap dihimpun walaupun transaksi diselesaikan pada situs masing-masing.',p,source(2));

mc(3,'Konflik kanal dan insentif','s11',
  'Dealer memberi konsultasi dan uji produk. Pelanggan memakai kode konsultasi untuk membeli di web produsen. Harga akhir kedua kanal sudah sama, tetapi dealer tidak memperoleh imbalan atas pembelian web. Intervensi apa paling langsung menyasar konflik yang tersisa?',
  'Perbedaan harga telah dihilangkan. Dealer masih menanggung biaya layanan yang menciptakan penjualan pada kanal lain. Kode konsultasi memberi jejak kontribusi sehingga imbalan dapat mengikuti layanan yang berperan, dengan verifikasi untuk mencegah atribusi palsu.',[
    ['Bagikan imbalan menurut konsultasi yang terverifikasi','Menghubungkan kontribusi dealer dengan nilai transaksi lintas kanal.'],
    ['Perbarui harga katalog kedua kanal lebih sering','Harga akhir sudah sama; frekuensi pembaruan tidak memberi kompensasi layanan.'],
    ['Pisahkan katalog web dari katalog milik dealer','Pemisahan katalog belum mengubah pihak yang membiayai konsultasi.'],
    ['Nilai dealer hanya dari transaksi di tokonya','Tetap mengabaikan kontribusi dealer pada transaksi web.'],
    ['Gabungkan omzet tanpa mencatat asal konsultasi','Menghapus jejak yang diperlukan untuk membagi imbalan menurut kontribusi.']
  ],p,source(3));
mc(3,'Efisiensi pasar kerja online','s6',
  'Sebelum perubahan matching, portal menerima 200 CV, 25% lolos asesmen, dengan biaya penyaringan Rp5 juta. Sesudahnya: 500 CV, 16% lolos, biaya Rp6 juta. Kriteria asesmen tetap. Pasangan jumlah hasil dan biaya per kandidat lolos yang tepat adalah…',
  'Sebelum: 200 × 25% = 50 kandidat; biaya 5 juta/50 = 100 ribu. Sesudah: 500 × 16% = 80 kandidat; biaya 6 juta/80 = 75 ribu. Rasio turun tetapi jumlah lolos naik dan biaya unit turun. Kualitas kerja setelah direkrut belum diukur sehingga tidak boleh disimpulkan dari data ini.',[
    ['Kandidat lolos naik 30; biaya per kandidat turun 25%','Jumlah naik dari 50 ke 80 dan biaya unit turun dari 100 ribu ke 75 ribu.'],
    ['Kandidat lolos turun 9; biaya per kandidat naik 20%','Menyamakan selisih persentase dengan jumlah, lalu biaya total dengan biaya unit.'],
    ['Kandidat lolos naik 30; biaya per kandidat naik 20%','Jumlah benar; biaya unit harus dibagi dengan jumlah lolos yang berubah.'],
    ['Kandidat lolos naik 60; biaya per kandidat turun 25%','Kenaikan adalah 30 orang; angka 60 merupakan persentase kenaikan, bukan orang.'],
    ['Kandidat lolos tetap 50; biaya per kandidat naik 20%','Mengabaikan 500 × 16% = 80 sehingga denominator biaya unit salah.']
  ],p,source(3));
mc(3,'Produk travel dan biaya relevan','s5',
  'Tiket A Rp800.000, bagasi Rp150.000, dan perubahan jadwal Rp300.000. Tiket B Rp1.000.000 termasuk bagasi dan satu perubahan. Pelanggan pasti memakai bagasi dan tepat sekali mengubah jadwal. Tidak ada selisih tarif atau biaya lain. Perbandingan yang benar adalah…',
  'Bandingkan bundel layanan yang dibutuhkan. A = 800.000 + 150.000 + 300.000 = 1.250.000; B = 1.000.000. B lebih rendah 250.000 untuk kasus ini. Kesimpulan bergantung pada asumsi bagasi dan perubahan, bukan klaim satu tiket selalu lebih baik bagi semua orang.',[
    ['B lebih rendah Rp250.000 untuk kebutuhan tersebut','Membandingkan alternatif setelah semua layanan yang akan digunakan diperhitungkan.'],
    ['A lebih rendah Rp200.000 untuk kebutuhan tersebut','Hanya memakai harga awal dan mengabaikan dua tambahan yang pasti digunakan.'],
    ['A lebih rendah Rp50.000 untuk kebutuhan tersebut','Menghitung bagasi tetapi mengabaikan satu perubahan jadwal.'],
    ['B lebih rendah Rp100.000 untuk kebutuhan tersebut','Menghitung perubahan tetapi mengabaikan bagasi yang dibutuhkan.'],
    ['B lebih rendah Rp400.000 untuk kebutuhan tersebut','Menambahkan biaya yang tidak dinyatakan sehingga selisih terlalu besar.']
  ],p,source(3));
tf(3,'Omnichannel dan multichannel','s3',
  'Retailer memakai satu merek dan katalog pada web serta toko. Order, stok, dan retur tetap terpisah. Keseragaman katalog cukup untuk menyatakan pengalaman pembelian sudah terintegrasi secara omnichannel.',false,
  'Merek dan katalog menyatukan komunikasi, tetapi pengalaman lintas kanal memerlukan kesinambungan proses. Order, stok, dan retur yang terpisah menunjukkan fragmentasi. Multichannel menjelaskan keberadaan beberapa kanal; integrasi omnichannel tidak terbukti dari tampilan seragam.',p,source(3));
tf(3,'Personalisasi dan customization','s11',
  'Toko menyusun urutan katalog dari riwayat pembeli, lalu memproduksi jaket mengikuti ukuran yang dimasukkan pembeli. Perubahan pertama mengenai pengalaman informasi, sedangkan perubahan kedua mengenai produk yang dipenuhi.',true,
  'Urutan katalog merupakan personalization informasi. Produksi sesuai ukuran mengubah spesifikasi barang sehingga termasuk customization. Keduanya dapat berlangsung dalam satu transaksi, tetapi memerlukan data dan kemampuan operasi yang berbeda.',p,source(3));
tf(3,'Broker elektronik dan institusi pasar','s7',
  'Pengguna online brokerage mengirim order sendiri melalui aplikasi, tetapi broker meneruskannya ke bursa. Self-service pada antarmuka dan keberadaan perantara institusional dapat berlangsung bersamaan.',true,
  'Self-service menjelaskan siapa memasukkan instruksi; broker dan bursa menjalankan fungsi pemrosesan serta pasar. Digitalisasi interaksi bukan bukti seluruh perantara hilang. Analisis harus mengikuti order dari antarmuka hingga penyelesaiannya.',p,source(3));

mc(4,'Total cost of ownership','s6',
  'Dua pemasok memenuhi spesifikasi identik. A: Rp100 juta di awal, operasi Rp18 juta per tahun, migrasi keluar Rp12 juta. B: Rp118 juta di awal, operasi Rp12 juta per tahun, tanpa biaya migrasi keluar. Horizon tiga tahun, migrasi terjadi di akhir. Abaikan diskonto dan nilai sisa. Keputusan biaya yang tepat adalah…',
  'A = 100 + 3×18 + 12 = 166 juta. B = 118 + 3×12 = 154 juta. B lebih murah 12 juta. Seluruh komponen harus memakai horizon yang sama; biaya keluar tidak boleh hilang dari perhitungan. Karena spesifikasi setara, pemilihan berbasis komponen biaya yang diberikan dapat dilakukan.',[
    ['Pilih B; totalnya lebih rendah Rp12 juta','Memasukkan investasi, tiga tahun operasi dan biaya migrasi yang dinyatakan.'],
    ['Pilih A; biaya awalnya lebih rendah Rp18 juta','Membatasi perbandingan pada pembelian dan mengabaikan masa pemakaian.'],
    ['Keduanya setara; total masing-masing Rp154 juta','A hanya menjadi 154 juta jika biaya migrasi 12 juta diabaikan.'],
    ['Pilih B; totalnya lebih rendah Rp30 juta','Selisih ini tidak mengikuti penjumlahan komponen pada horizon yang sama.'],
    ['Pilih A; totalnya lebih rendah Rp6 juta','Perhitungan ini mengubah periode atau biaya yang diberikan.']
  ],p,source(4));
mc(4,'Group purchasing dan biaya pengadaan','s8',
  'Empat laboratorium masing-masing memesan 25 unit. Harga terpisah Rp500.000 per unit. Komitmen gabungan 100 unit mendapat harga Rp460.000, dengan koordinasi Rp2 juta dan distribusi tambahan Rp10.000 per unit. Tidak ada perbedaan lain. Nilai ekonomis penggabungan adalah…',
  'Terpisah = 100 × 500.000 = 50 juta. Gabungan = 100 × 460.000 + 2 juta + 100 × 10.000 = 49 juta. Penghematan bersih 1 juta, bukan diskon kotor 4 juta. Hasil agregasi ditentukan komitmen unit dan biaya tambahan, bukan jumlah anggota semata.',[
    ['Hemat Rp1 juta setelah biaya tambahan','Mengurangkan koordinasi dan distribusi dari diskon kotor 4 juta.'],
    ['Hemat Rp4 juta setelah biaya tambahan','Ini baru diskon barang; kedua biaya kelompok belum dihitung.'],
    ['Hemat Rp2 juta setelah biaya tambahan','Memasukkan koordinasi tetapi mengabaikan distribusi tambahan 1 juta.'],
    ['Hemat Rp3 juta setelah biaya tambahan','Memasukkan distribusi tetapi mengabaikan koordinasi 2 juta.'],
    ['Lebih mahal Rp1 juta setelah biaya tambahan','Tanda perubahan terbalik: 49 juta tetap di bawah 50 juta.']
  ],p,source(4));
mc(4,'Exchange dan pola sourcing','s9',
  'Operator independen mempertemukan banyak pemasok bahan baku dan banyak pabrik farmasi. Sebagian pembelian melalui kontrak tahunan, sebagian mendadak. Operator bukan satu-satunya pembeli. Struktur pasar dan pola sourcing yang tepat adalah…',
  'Banyak penjual-pembeli dengan operator independen menunjukkan public exchange. Fokus satu industri menunjukkan vertical exchange. Spot dan systematic sourcing merupakan sumbu pembelian yang dapat hadir bersama; kontrak tahunan tidak membuat operator menjadi buy-side tunggal.',[
    ['Public vertical exchange; dua pola sourcing dapat hadir','Memisahkan struktur, fokus industri, dan keteraturan pembelian.'],
    ['Private buy-side; kontrak tahunan menentukan pemiliknya','Kontrak tidak mengubah banyak pabrik menjadi satu pembeli.'],
    ['Public horizontal exchange; banyak pabrik berarti lintas industri','Banyak organisasi tetap bisa berada dalam satu industri, yaitu farmasi.'],
    ['Private sell-side; banyak pemasok memakai satu situs','Satu situs tidak sama dengan pengendalian oleh satu pemasok.'],
    ['Public vertical exchange; seluruh transaksi harus spot','Vertical tidak melarang kontrak tahunan atau mengubahnya menjadi pembelian spot.']
  ],p,source(4));
tf(4,'Direct material dan systematic sourcing','s2',
  'Pabrik membeli bahan yang masuk ke produk akhir melalui kontrak tahunan. Kontrak menjelaskan systematic sourcing, sedangkan penggunaan bahan dalam produk akhir menjelaskan direct material.',true,
  'Tujuan penggunaan dan pola pembelian adalah dua sumbu. Direct/indirect ditentukan peran barang dalam operasi atau produk; systematic/spot ditentukan pola kebutuhan dan pengadaan. Kontrak jangka panjang tidak mengubah bahan langsung menjadi MRO.',p,source(4));
tf(4,'Desktop purchasing dan kendali','s8',
  'Pegawai memesan melalui katalog kontrak dengan limit dan otorisasi yang telah disetujui. Karena unit pembelian tidak mengetik setiap order, aktivitas tersebut tergolong maverick purchasing.',false,
  'Desktop purchasing memungkinkan pemesan membeli dalam kontrol dan kontrak yang disetujui. Maverick purchasing menyimpang dari kebijakan atau pengaturan tersebut. Tidak terlibatnya staf pengadaan dalam setiap klik bukan bukti penyimpangan.',p,source(4));
tf(4,'EDI dan perencanaan kolaboratif','s11',
  'Dua perusahaan mengirim purchase order elektronik berformat standar, tetapi tidak berbagi forecast atau menyelaraskan rencana. Pertukaran dokumen itu saja cukup untuk menyatakan perencanaan permintaan mereka sudah kolaboratif.',false,
  'EDI mendukung pertukaran dokumen terstruktur dan mengurangi entri ulang. Perencanaan kolaboratif memerlukan berbagi dan menyelaraskan keputusan yang belum terjadi pada kasus. Teknologi pertukaran dapat mendukung koordinasi, tetapi bukan bukti hasil koordinasi.',p,source(4));

mc(5,'Peran G2G, G2C dan G2E','s3',
  'Platform memiliki tiga alur: (X) dinas kesehatan memadankan data dengan dinas sosial; (Y) warga memeriksa status bantuannya; (Z) pegawai dinas mengakses tunjangan kerja. Klasifikasi berdasarkan peran setiap alur adalah…',
  'X menghubungkan dua instansi sehingga G2G; Y melayani warga sehingga G2C; Z melayani pegawai dalam hubungan kerja sehingga G2E. Ketiganya dapat berada pada satu aplikasi. Identitas umum seseorang atau hosting aplikasi tidak menggantikan peran pada interaksi.',[
    ['X G2G; Y G2C; Z G2E','Klasifikasi mengikuti pasangan pelaku dan peran penerima layanan.'],
    ['X G2E; Y G2C; Z G2G','X bukan kepegawaian, dan Z tidak menghubungkan dua instansi sebagai aktor.'],
    ['X G2G; Y G2E; Z G2C','Menukar peran warga penerima bantuan dengan pegawai penerima tunjangan kerja.'],
    ['X G2C; Y G2C; Z G2E','Tujuan akhir membantu warga tidak mengubah pertukaran antardinas menjadi layanan langsung G2C.'],
    ['X G2G; Y G2C; Z G2C','Pegawai juga warga, tetapi Z melayaninya secara eksplisit dalam hubungan kerja.']
  ],p,source(5));
mc(5,'ELS dan siklus pengetahuan','s5',
  'ELS menemukan pakar setelah repositori tidak memiliki solusi. Pakar menjawab dan masalah selesai, tetapi kasus serupa terus dirutekan ke pakar yang sama. Perbaikan paling langsung untuk mengurangi pengulangan sekaligus menjaga validasi adalah…',
  'Routing sudah bekerja; jawabannya belum menjadi pengetahuan organisasi yang bisa ditemukan dan dipakai ulang. Siklus harus menangkap solusi, memvalidasi dan memberi konteks, lalu menyimpan serta mengindeksnya. Memperinci profil pakar memperbaiki pencarian orang, bukan reuse isi jawaban.',[
    ['Validasi solusi serta konteksnya, lalu indekskan di repositori','Menghubungkan penyelesaian kasus dengan capture, refinement dan penemuan kembali.'],
    ['Perinci profil pakar, lalu prioritaskan routing padanya','Memperkuat ketergantungan kepada pakar tanpa menyediakan solusi untuk reuse.'],
    ['Salin jawaban ke FAQ tanpa syarat penerapannya','Menyimpan isi tetapi menghilangkan validasi dan konteks untuk penerapan berbeda.'],
    ['Tutup tiket lebih cepat, lalu ukur tiket yang selesai','Memperbaiki metrik aktivitas tanpa membuat pengetahuan tersedia pada kasus berulang.'],
    ['Sebarkan daftar pakar, lalu hapus pencarian repositori','Mempermudah kontak tetapi menghilangkan jalur memakai pengetahuan terdokumentasi.']
  ],p,source(5));
mc(5,'Evaluasi transfer e-learning','s4',
  'Pelatihan prosedur melalui LMS mencapai completion 98%, tetapi kesalahan penerapan pada pekerjaan belum turun. Manajemen ingin menguji apakah peserta mampu menggunakan pengetahuan pada tugas nyata. Evaluasi paling langsung adalah…',
  'Completion mengukur penyelesaian aktivitas, bukan penguasaan prosedur. Transfer perlu diuji dengan tugas penerapan serta ukuran kesalahan yang sesuai, memakai baseline atau kelompok sebanding. Ini membantu membedakan kompetensi dari penyebab operasi lain; skor aktivitas akses saja tidak menunjukkan transfer.',[
    ['Asesmen tugas representatif dan perbandingan kesalahan kerja','Mengukur penerapan prosedur serta hasil yang menjadi tujuan pelatihan.'],
    ['Tambahan jam video dan jumlah modul yang dibuka','Masih mengukur paparan serta akses, bukan kemampuan menerapkan prosedur.'],
    ['Survei kenyamanan antarmuka dan kepuasan peserta','Mengukur pengalaman, tetapi tidak langsung menunjukkan kemampuan kerja.'],
    ['Kecepatan unduh konten dan uptime sistem LMS','Menguji akses teknis, bukan perpindahan pengetahuan ke pekerjaan.'],
    ['Jumlah sertifikat dan ketepatan pencatatan nilai','Menguji administrasi penyelesaian, sementara masalahnya kompetensi penerapan.']
  ],p,source(5));
tf(5,'Audit e-voting','s3',
  'Mesin voting memverifikasi pemilih dan mengumumkan total suara dengan cepat. Tanpa bukti untuk memeriksa ulang penghitungan, dua kemampuan itu sudah memenuhi kebutuhan audit hasil.',false,
  'Autentikasi menjawab keabsahan pelaku, kecepatan menjawab performa, dan audit menjawab kemampuan memverifikasi hasil. Satu kemampuan tidak menggantikan yang lain. Slide Chapter 5 menekankan keamanan serta audit; kunci kuis lama yang meremehkan keamanan tidak dijadikan dasar.',p,source(5));
tf(5,'E-health dan transaksi','s6',
  'Rumah sakit mengirim hasil laboratorium ke rekam pasien dan mengatur konsultasi melalui jaringan. Ini dapat termasuk e-health walaupun tidak tersedia pembelian obat atau pembayaran online.',true,
  'E-health mencakup informasi, koordinasi, administrasi dan layanan kesehatan melalui sistem elektronik. Pembelian obat adalah salah satu aplikasi, bukan syarat setiap layanan e-health. Klasifikasi mengikuti aktivitas yang dilakukan, bukan keberadaan checkout.',p,source(5));
tf(5,'Knowledge refinement','s5',
  'Komunitas teknisi memiliki solusi terdokumentasi. Anggota kemudian menguji solusi pada kondisi berbeda dan menambahkan batas penggunaan. Aktivitas lanjutan ini memberi bukti knowledge refinement meskipun berlangsung di komunitas sosial.',true,
  'Refinement memperbaiki kelayakan penggunaan melalui validasi dan konteks. Penciptaan, pencatatan, serta penyempurnaan dapat terjadi pada komunitas yang sama. Nama media tidak menentukan tahap KM; pengujian serta pemberian batas menjadi bukti utama dalam kasus.',p,source(5));

export default questions;
