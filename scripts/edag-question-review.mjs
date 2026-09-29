// Editorial second pass: neighboring concepts, credible interventions, explicit assumptions.
// Each pair contains an option followed by its diagnostic explanation; first pair is correct.
export function reviewQuestions(bank) {
  const edit = (id, choices, prompt, reason) => {
    const q = bank.find(q => q.id === id);
    if (!q) throw new Error(`Unknown question ${id}`);
    if (prompt) q.prompt = prompt;
    if (reason) q.reason = reason;
    if (choices) {
      const offset = bank.indexOf(q) % choices.length;
      const ordered = choices.slice(offset).concat(choices.slice(0, offset));
      q.options = ordered.map(x => x[0]); q.analysis = ordered.map(x => x[1]);
      q.answer = (choices.length - offset) % choices.length;
    }
  };
  edit('practice-1-3', [
    ['Sinkronisasi stok dan reservasi lintas mitra','Menyatukan ketersediaan dengan komitmen order menangani penyebab pembatalan.'],
    ['Rekonsiliasi pembayaran dan percepatan refund','Mengurangi dampak finansial pembatalan, tetapi barang yang dijanjikan tetap tidak tersedia.'],
    ['Validasi alamat dan penjadwalan kapasitas kurir','Menangani kelayakan pengiriman setelah barang tersedia; bukti kasus menunjuk stok pemasok.'],
    ['Pemeriksaan kredit dan konfirmasi ulang pembeli','Menangani risiko pembayaran atau niat pembeli, sedangkan order telah dibayar dan stok tidak sinkron.']]);
  edit('practice-1-4', [
    ['Validasi ISBN dan kapasitas titik pengambilan','Menguji ketepatan edisi serta kemampuan memenuhi janji waktu melalui aktivitas dan sumber daya.'],
    ['Validasi minat segmen dan pertumbuhan langganan','Menguji permintaan dan penerimaan berulang, belum kemampuan menyediakan edisi tepat hari ini.'],
    ['Validasi biaya pemasok dan margin setiap kategori','Menguji kelayakan biaya, tetapi margin tidak membuktikan ketepatan edisi atau kesiapan pengambilan.'],
    ['Validasi klik kanal dan respons kampanye rujukan','Menguji akuisisi pelanggan; keberhasilan janji fulfillment memerlukan bukti operasi.']]);
  edit('practice-2-1', [
    ['Distributor dilewati; fungsi perantara dibentuk ulang','Disintermediation terjadi pada distributor dan reintermediation pada layanan platform.'],
    ['Distributor dilewati; distribusi berubah menjadi fungsi pembeli','Pembeli tidak dinyatakan mengambil alih pembayaran, reputasi, dan pengiriman yang dikelola platform.'],
    ['Distributor diganti; disintermediation tidak terjadi dalam rantai','Peniadaan distributor tetap dapat disebut disintermediation pada mata rantai tersebut meski muncul perantara baru.'],
    ['Distributor tetap ada; platform hanya menjadi kanal komunikasinya','Kasus menyatakan distributor lama dilewati dan platform melaksanakan fungsi transaksi.']]);
  edit('practice-2-5', [
    ['Transisi status order dan integrasi fulfillment','Menelusuri sambungan setelah persetujuan pembayaran hingga order masuk antrean gudang.'],
    ['Validasi kartu dan permintaan otorisasi ulang','Gateway sudah memberikan persetujuan; mengulang otorisasi belum menjelaskan hilangnya order dan berisiko duplikasi.'],
    ['Reservasi kapasitas kurir dan pencetakan label','Ini tahap setelah gudang menerima order; kasus belum menunjukkan order mencapai tahap tersebut.'],
    ['Indeks katalog dan validasi isi keranjang','Pemilihan produk mendahului pembayaran; titik pertama yang terindikasi gagal adalah pemindahan order ke fulfillment.']]);
  edit('practice-2-6', [
    ['Saring kelayakan, uji kriteria, lalu prioritaskan','Menghubungkan seleksi dengan batas biaya dan performa yang telah ditetapkan.'],
    ['Urutkan jumlah suara, lalu biayai prototipe teratas','Popularitas dapat menyaring perhatian tetapi tidak menggantikan kelayakan terhadap dua batas kasus.'],
    ['Urutkan kebaruan, lalu pilih ide paling berbeda','Kebaruan penting untuk inovasi, tetapi ide baru bisa melanggar batas performa atau biaya.'],
    ['Urutkan biaya usulan, lalu pilih estimasi terendah','Estimasi biaya perlu diverifikasi dan dibandingkan dengan kebutuhan performa, bukan digunakan sendirian.']]);
  edit('practice-3-1', [
    ['Satukan identitas order, stok, dan prosedur retur','Menghubungkan bukti transaksi dan pelaksanaan layanan lintas kanal.'],
    ['Satukan merek, promosi, dan kalender peluncuran','Konsistensi komunikasi belum memungkinkan toko memproses retur order web.'],
    ['Satukan target omzet dan pelaporan kedua kanal','Pelaporan bersama dapat mendukung koordinasi, tetapi transaksi dan kebijakan retur belum terintegrasi.'],
    ['Satukan katalog, foto, dan deskripsi setiap produk','Konsistensi informasi produk tidak memberi kemampuan menerima atau membukukan retur lintas kanal.']]);
  edit('practice-3-2', [
    ['Makanan memerlukan kendali kondisi dan slot kirim','Umur simpan serta jendela dua jam menuntut kapasitas dan kondisi pengiriman fisik.'],
    ['Makanan memerlukan kendali lisensi dan hak unduh','Kontrol ini lebih langsung terkait distribusi konten digital daripada kualitas makanan selama pengiriman.'],
    ['Keduanya cukup memakai antrean fulfillment identik','Antrean generik mengabaikan kedaluwarsa, wilayah, dan kapasitas pengiriman makanan.'],
    ['Keduanya cukup memakai kapasitas server identik','Kapasitas digital relevan untuk pemesanan, tetapi tidak menangani bottleneck pemenuhan fisik.']]);
  edit('practice-3-3', [
    ['Reservasi stok konsisten saat order dikonfirmasi','Komitmen order harus mengurangi ketersediaan secara konsisten meski permintaan hampir bersamaan.'],
    ['Sinkronisasi katalog setiap akhir batch pembayaran','Jeda batch masih memungkinkan beberapa order membaca stok yang sama sebelum pembaruan.'],
    ['Pemeriksaan stok setiap awal sesi belanja pelanggan','Pemeriksaan awal menjadi usang ketika pembeli lain membuat komitmen sebelum checkout.'],
    ['Rekonsiliasi stok ketika picking gudang dimulai','Menemukan kekurangan sesudah janji dan pembayaran; berguna untuk audit tetapi terlambat mencegah overselling.']]);
  edit('practice-3-4', [
    ['Atur atribusi layanan dan pembagian imbalan kanal','Mengembalikan imbalan kepada kanal yang berkontribusi pada keputusan pembelian.'],
    ['Samakan harga katalog dan ukur omzet tiap kanal','Harga seragam mengurangi satu pemicu, tetapi dealer masih dapat memberi demo tanpa memperoleh bagian transaksi.'],
    ['Pisahkan segmen kanal berdasarkan usia pelanggan','Segmentasi usia tidak langsung mengatasi pelanggan yang memakai demo dealer lalu membeli di web.'],
    ['Tambah target demo dan bonus berdasarkan kunjungan','Menghargai aktivitas, tetapi tanpa hubungan kualitas atau konversi dapat mendorong demo yang tidak menghasilkan nilai.']]);
  edit('practice-3-5', [
    ['Escrow dengan bukti penerimaan dan aturan sengketa','Dana ditahan pihak perantara dan dilepas berdasarkan syarat pertukaran yang disepakati.'],
    ['Prapembayaran dengan verifikasi identitas penjual','Identitas mengurangi anonimitas, tetapi risiko penyerahan sebelum pemeriksaan tetap ditanggung pembeli.'],
    ['Pascapembayaran dengan rating dan batas kredit','Memindahkan risiko gagal bayar kepada penjual yang justru menolak mengirim tanpa kepastian dana.'],
    ['Transfer langsung dengan pelacakan pengiriman','Pelacakan menunjukkan pergerakan, bukan kesesuaian kondisi barang atau mekanisme penahanan dana.']]);
  edit('practice-3-6', [
    ['Biaya total dan ketentuan sesuai pola perjalanan','Perubahan jadwal dan bagasi memengaruhi biaya serta manfaat yang relevan bagi pengguna kasus.'],
    ['Harga awal dan biaya perubahan pada satu skenario','Lebih baik daripada harga awal saja, tetapi mengabaikan bagasi dan kemungkinan perubahan yang berbeda.'],
    ['Rata-rata biaya penumpang pada seluruh rute','Rata-rata umum dapat tidak mewakili frekuensi perubahan dan kebutuhan bagasi pengguna ini.'],
    ['Banyaknya fleksibilitas tanpa menilai pemakaiannya','Fleksibilitas merupakan nilai bila sesuai kebutuhan; jumlah opsi saja bukan ukuran biaya total atau kecocokan.']]);
  edit('practice-3-7', [
    ['Uji jumlah kandidat layak dan biaya per kandidat','Pisahkan proporsi dari jumlah absolut, lalu ukur efisiensi menyaring kandidat yang benar-benar sesuai.'],
    ['Simpulkan matching memburuk dari rasio kelulusan','Rasio turun dapat bersamaan dengan jumlah kandidat layak naik; perlu denominator dan biaya.'],
    ['Simpulkan matching membaik dari total CV masuk','Input yang lebih besar belum membuktikan jumlah atau kualitas hasil dan efisiensi penyaringan.'],
    ['Bandingkan biaya iklan per CV sebelum dan sesudah','Ini metrik akuisisi input; biaya per kandidat layak diperlukan untuk menilai hasil matching.']],
    'Portal kerja menerima tiga kali lebih banyak CV, tetapi proporsi yang lolos asesmen turun. Belum tersedia angka kelulusan absolut atau biaya penyaringan. Evaluasi mana paling tepat?',
    'Proporsi dan jumlah absolut berbeda. Misalnya 100 CV × 30% menghasilkan 30 kandidat, sedangkan 300 × 20% menghasilkan 60 meski proporsinya turun. Bandingkan kandidat sesuai kriteria dan biaya per kandidat sebelum menyimpulkan kualitas atau efisiensi matching berubah.');
  edit('practice-4-2', [
    ['Solusi belum setara pada dimensi yang dinilai','Harga tidak merangkum perbedaan integrasi, layanan, serta risiko implementasi.'],
    ['Jumlah pemasok belum sama dengan jumlah pembeli','Reverse auction tidak mensyaratkan jumlah kedua sisi sama; satu pembeli dan banyak pemasok justru lazim.'],
    ['Tender elektronik belum mempunyai harga pembuka','Evaluasi proposal multikriteria tidak memerlukan mekanisme harga pembuka lelang.'],
    ['Biaya pembelian belum dikonversi menjadi komisi','Komisi merupakan model imbalan perantara, bukan prasyarat membandingkan proposal pengadaan.']]);
  edit('practice-4-7', [
    ['Menyelaraskan rencana permintaan dan pasokan','Kolaborasi praorder menyambungkan forecast dan kapasitas, bukan hanya memproses transaksi yang sudah terjadi.'],
    ['Mengotomasi pencocokan invoice dengan penerimaan','Pencocokan invoice terjadi setelah order dan penerimaan; tahap yang dibahas adalah perencanaan.'],
    ['Mengonsolidasikan pembelian untuk diskon volume','Agregasi order kelompok berbeda dari berbagi forecast dan menyelaraskan rencana dua mitra.'],
    ['Membandingkan bid untuk menentukan harga kontrak','Penemuan harga melalui penawaran bukan kegiatan dominan dalam kasus perencanaan bersama.']]);
  edit('practice-5-2', [
    ['Kemampuan audit hasil belum memadai','Tanpa bukti pemeriksaan ulang, autentikasi dan kecepatan tidak membuktikan hasil dapat diaudit.'],
    ['Autentikasi harus diulang pada tahap rekapitulasi','Mengulang pemeriksaan identitas tidak menghasilkan bukti bahwa suara dihitung dengan benar.'],
    ['Kapasitas hitung harus disetarakan antarperangkat','Kesetaraan performa tidak menyelesaikan ketiadaan bukti audit; kecepatan pun sudah dinyatakan baik.'],
    ['Ketersediaan server harus menjadi prioritas tunggal','Availability penting, tetapi bukti kasus secara spesifik menunjukkan masalah verifikasi hasil.']]);
  edit('practice-5-3', [
    ['LMS untuk universitas; KM untuk perusahaan','Administrasi pembelajaran berbeda dari pengelolaan solusi serta keahlian untuk pemakaian organisasi.'],
    ['KM untuk universitas; LMS untuk perusahaan','Membalik fungsi dominan: jadwal/nilai memerlukan LMS, sedangkan reuse praktik kerja menekankan KM.'],
    ['LMS untuk universitas; ELS saja untuk perusahaan','ELS membantu menemukan pakar, tetapi belum mencakup penyimpanan, validasi, dan reuse seluruh pengetahuan.'],
    ['Repositori untuk universitas; direktori pakar untuk perusahaan','Masing-masing hanya komponen; belum mencakup administrasi nilai maupun seluruh siklus pengetahuan.']]);
  edit('practice-5-5', [
    ['Tinjau solusi, kirim, dan perbarui repositori','Menutup kasus sekaligus mengubah jawaban pakar menjadi pengetahuan yang dapat dipakai ulang.'],
    ['Kirim solusi, tutup tiket, dan perbarui profil pakar','Profil membantu pencarian berikutnya, tetapi isi solusi tidak tersedia untuk reuse bila tidak ditangkap.'],
    ['Arsipkan jawaban mentah, lalu tutup akses kasus','Penyimpanan tanpa peninjauan dan akses yang sesuai belum membentuk pengetahuan yang dapat digunakan.'],
    ['Tambahkan kata kunci, lalu arahkan semua kasus ke pakar','Memperbaiki routing, tetapi mempertahankan ketergantungan pada pakar untuk masalah berulang.']]);
  edit('practice-5-6', [
    ['Kontinuitas informasi; evaluasi duplikasi pemeriksaan','Rekam yang terhubung membantu dokter melihat hasil sebelumnya; penurunan tes duplikat menguji penggunaan informasi itu.'],
    ['Kapasitas pelayanan; evaluasi jumlah akun dokter','Akun merupakan kesiapan akses, bukan kapasitas layanan atau bukti informasi dipakai dalam keputusan.'],
    ['Ketepatan klinis; evaluasi jumlah hasil yang diunggah','Volume unggahan tidak mengukur ketepatan diagnosis; perlu indikator klinis yang sesuai.'],
    ['Efisiensi administrasi; evaluasi kecepatan unduh saja','Kecepatan akses dapat membantu, tetapi belum menguji koordinasi pelayanan yang menjadi tujuan integrasi.']],
    'Rumah sakit menghubungkan hasil laboratorium dengan rekam pasien dan memberi dokter akses sesuai peran. Tim ingin menguji apakah integrasi memperbaiki koordinasi pelayanan, bukan hanya menambah data. Pasangan manfaat dan indikator mana paling langsung?',
    'Integrasi membuat hasil pemeriksaan tersedia dalam konteks pasien. Salah satu konsekuensi yang dapat diuji adalah berkurangnya pemeriksaan berulang akibat informasi sebelumnya tidak ditemukan. Tetap periksa alasan klinis, komposisi pasien, dan baseline; tidak semua pemeriksaan ulang merupakan duplikasi yang sia-sia.');
  edit('practice-5-7', [
    ['C2C pada barang; layanan bisnis oleh platform','Individu bertukar barang, sementara platform menjalankan kegiatan bisnis layanan perantara.'],
    ['B2C pada barang; C2C pada layanan platform','Membalik unit analisis: platform bukan pemilik barang pada fakta kasus.'],
    ['C2C pada barang; intrabusiness pada layanan platform','Layanan platform melibatkan pihak luar, bukan proses yang hanya berlangsung di dalam satu organisasi.'],
    ['B2B2C pada barang; B2B pada layanan platform','Tidak dinyatakan ada dua bisnis dalam rantai penjual barang; penjualnya individu.']]);
  edit('practice-6-2', [
    ['AI memperkaya layanan yang telah berfungsi','AI merupakan kemampuan tambahan; transaksi mobile sudah dapat berjalan melalui fondasi yang disebutkan.'],
    ['AI menjadi prasyarat bila katalog bersifat dinamis','Katalog dinamis dapat diperbarui dengan aturan dan database tanpa inferensi model AI.'],
    ['AI menjadi prasyarat bila pembeli memakai ponsel','Perangkat mobile dan kanal transaksi tidak menyaratkan rekomendasi atau kecerdasan buatan.'],
    ['AI diperlukan untuk setiap keputusan pembayaran','Otorisasi dapat mengikuti aturan serta prosedur tanpa model AI; fraud scoring cerdas merupakan kemungkinan tambahan.']]);
  edit('practice-6-4', [
    ['Pemeliharaan data tempat dan aturan rekomendasi','Jam operasional merupakan atribut tempat yang usang; koordinat telah dinyatakan akurat.'],
    ['Kalibrasi sensor dan interval pembacaan lokasi','Memperbaiki posisi tidak memperbarui informasi jam buka toko.'],
    ['Penambahan radius dan jumlah hasil pencarian','Memperbanyak kandidat tidak memisahkan toko buka dan tutup bila datanya tetap usang.'],
    ['Penghitungan rute dan estimasi waktu perjalanan','Rute membantu perjalanan setelah pemilihan, tetapi jam operasional salah tetap menyebabkan saran tidak sesuai.']]);
  edit('practice-6-6', [
    ['Perbaiki pemrosesan order di sisi backend','Pengukuran menempatkan empat detik pada proses server; intervensi pertama harus menyasar bottleneck tersebut.'],
    ['Perbesar kapasitas transfer pada sisi pengguna','Dapat membantu transfer, tetapi kapasitas telah digandakan tanpa perubahan dan dominasi waktu berada di server.'],
    ['Kurangi ukuran gambar pada katalog perangkat','Mengurangi unduhan katalog tidak langsung memperpendek komputasi order yang telah diukur.'],
    ['Perpendek interval polling status pembayaran','Mempercepat pemeriksaan status dapat menambah beban tanpa mempercepat pemrosesan order.']]);
  edit('practice-6-7', [
    ['Aturan ambang, eskalasi, dan prosedur respons','Menghubungkan deteksi dengan tanggung jawab serta tindakan saat kondisi keluar dari rentang.'],
    ['Pengukuran lebih rapat dan arsip lebih panjang','Menambah data tetapi tidak menentukan siapa bertindak saat suhu melewati batas.'],
    ['Kalibrasi sensor dan validasi format pesan','Menjaga mutu input penting; kasus secara spesifik kekurangan respons terhadap data yang diterima.'],
    ['Replikasi penyimpanan dan kompresi telemetri','Meningkatkan ketahanan serta efisiensi data, belum menghubungkan kejadian dengan aksi operasi.']]);
  edit('practice-7-4', [
    ['Perlu konteks ulasan sebelum memastikan pilihan','Rata-rata dan ukuran sampel harus dilihat bersama distribusi, bias seleksi, kecocokan pengguna dan verifikasi.'],
    ['Utamakan P dengan mengabaikan jumlah pengulas','Rata-rata tinggi pada sampel kecil belum cukup memberi kepastian kualitas.'],
    ['Utamakan Q dengan mengabaikan komposisi pengulas','Sampel besar memperkuat estimasi pada populasinya, tetapi bias dan ketidakcocokan pengguna tetap mungkin.'],
    ['Gabungkan keduanya memakai rata-rata tanpa bobot','Menggabungkan dua produk menjadi satu angka menghilangkan perbedaan objek keputusan dan jumlah pengulas.']]);
  edit('practice-7-7', [
    ['Social bookmarking','Objek yang disimpan dan dibagikan adalah tautan; komentar teman dapat melengkapinya.'],
    ['Social recommendation engine','Mesin rekomendasi menyeleksi atau mengurutkan berdasarkan model/sinyal; kasus menekankan penyimpanan tautan pengguna.'],
    ['Collaborative filtering','Memerlukan inferensi preferensi dari pola antarpengguna atau item; saran langsung teman belum membuktikan algoritme itu.'],
    ['Social comparison shopping','Membandingkan penawaran dapat menjadi penggunaan lanjut, tetapi menyimpan dan berbagi tautan adalah fungsi yang ditanyakan.']]);
  edit('practice-8-1', [
    ['Authorization atas perubahan rekening pemasok','Identitas telah diverifikasi; masalahnya hak pengguna menjalankan tindakan tertentu.'],
    ['Authentication ulang saat sesi pegawai dimulai','Verifikasi ulang identitas tidak membatasi kewenangan jika aturan akses masih mengizinkan perubahan.'],
    ['Confidentiality atas rekaman rekening pemasok','Kerahasiaan melindungi pembacaan, sedangkan kasus menyoroti perubahan di luar kewenangan.'],
    ['Availability atas layanan pemeliharaan pemasok','Ketersediaan memastikan akses layanan, bukan bahwa tindakan diizinkan bagi pelaku tertentu.']]);
  edit('practice-8-4', [
    ['Vulnerability; tindakan ancaman yang terealisasi','Akun aktif yang seharusnya dicabut adalah kelemahan; penyalahgunaannya merupakan aksi serangan.'],
    ['Threat; vulnerability yang belum tereksploitasi','Membalik kondisi dan aksi; kelemahan sudah dipakai mengambil data.'],
    ['Control; risiko yang belum menjadi kejadian','Prosedur tidak efektif bukan bukti kontrol bekerja, dan pengambilan data sudah menjadi kejadian.'],
    ['Incident; ancaman yang masih bersifat potensial','Akun usang adalah kondisi kelemahan; aksi penyerang tidak lagi sekadar potensi.']]);
  edit('exam-5-2', [
    ['Forum menjadi partisipasi publik dalam government 2.0','Pemerintah memakai interaksi warga untuk fungsi publik; sesuai perluasan partisipatif e-government.'],
    ['Forum menjadi G2G karena solusi diputuskan instansi','Siapa memutuskan tidak mengubah interaksi pemerintah–warga menjadi relasi antarpemerintah.'],
    ['Forum menjadi IEE karena ide diproses secara internal','Pemrosesan internal dapat mendukungnya, tetapi aktivitas utama yang dihadapi warga adalah partisipasi.'],
    ['Forum menjadi G2E karena peserta membantu pekerjaan','Memberi kontribusi tidak menjadikan warga pegawai pemerintah.'],
    ['Forum menjadi G2B karena hasilnya bernilai ekonomis','Nilai ekonomis tidak membuktikan peserta bertindak sebagai bisnis.']],
    'Pemerintah membuka forum bagi warga untuk mengusulkan dan menilai solusi banjir. Instansi meninjau usulan lalu menjelaskan tindak lanjutnya. Selain portal informasi dan tender yang terpisah, bagaimana fungsi forum ini paling tepat diklasifikasikan?');
  edit('exam-5-4', [
    ['Autentikasi pemilih, integritas rekaman, bukti audit','Mencakup tiga kebutuhan berbeda yang eksplisit dalam kasus.'],
    ['Autentikasi pemilih, enkripsi kanal, server cadangan','Mendukung identitas, kanal, dan availability; belum menyediakan bukti pemeriksaan hasil.'],
    ['Kontrol akses admin, integritas rekaman, rekap cepat','Integritas sebagian tercakup; keabsahan pemilih dan audit tidak dipenuhi oleh kontrol admin serta kecepatan.'],
    ['Registrasi pemilih, kerahasiaan suara, kapasitas hitung','Registrasi belum memastikan pemilih yang mengakses sah; kerahasiaan/kapasitas tidak menggantikan audit integritas.'],
    ['Bukti audit, replikasi server, enkripsi penyimpanan','Audit ada, tetapi replikasi dan enkripsi tidak dengan sendirinya mengautentikasi pemilih atau memastikan suara tidak diubah.']]);
  edit('exam-6-3', [
    ['Pengolahan spasial dan data atribut tempat','Menggabungkan kedekatan koordinat dengan jam operasional untuk menentukan kandidat yang sesuai.'],
    ['Triangulasi sinyal dan kalibrasi sensor posisi','Berfungsi memperoleh posisi; posisi sudah tersedia dan belum menyediakan atribut area parkir.'],
    ['Penghitungan rute dan estimasi waktu tempuh','Memerlukan tujuan yang sesuai; rute sendiri belum menyaring parkir berdasarkan lokasi dan jam buka.'],
    ['Pelacakan posisi dan penyimpanan riwayat perjalanan','Mengikuti pergerakan pengguna, bukan melengkapi data area parkir serta status operasinya.'],
    ['Rendering peta dan penyederhanaan simbol lokasi','Menyajikan informasi visual, tetapi tampilan tidak menggantikan query spasial serta atribut tempat.']]);
  edit('exam-6-4', [
    ['Pencarian lebih cepat; manfaat total belum terbukti','Ada bukti efisiensi pencarian dan efek buruk pembatalan, sehingga manfaat keseluruhan memerlukan ukuran lanjut.'],
    ['Biaya layanan turun; pembatalan menjadi biaya penjual','Pihak yang menanggung dan besarnya biaya tidak diberikan; pemindahan biaya pun bukan bukti biaya total turun.'],
    ['Akurasi meningkat; kecepatan pembaruan menjadi proksi','Kecepatan pembaruan berbeda dari kebenaran isi dan kasus justru menyebut stok sering keliru.'],
    ['Kepuasan meningkat; waktu pencarian menjadi ukuran','Waktu adalah satu dimensi; pembatalan bisa menurunkan kepuasan dan hasil survei belum tersedia.'],
    ['Fulfillment membaik; real-time berarti sinkronisasi','Tampilan segera tidak membuktikan kecocokan inventori atau keberhasilan memenuhi pesanan.']]);
  edit('exam-7-1', [
    ['Evaluasi kecocokan rekomendasi serta konteks pengguna','Verifikasi ulasan membantu keaslian sumber, bukan kecocokan bagi pengguna baru yang minim riwayat.'],
    ['Perketat verifikasi transaksi sebagai perbaikan utama','Dapat membantu trust, tetapi sebagian besar ulasan sudah terverifikasi dan masalahnya relevansi bagi pengguna baru.'],
    ['Naikkan bobot popularitas pada semua pengguna baru','Popularitas dapat menjadi baseline, tetapi tidak langsung menyelesaikan perbedaan kebutuhan pengguna baru.'],
    ['Tambahkan jumlah ulasan sebagai satu ukuran kecocokan','Volume ulasan tidak menentukan apakah produk sesuai konteks seseorang.'],
    ['Utamakan ulasan terbaru tanpa memeriksa preferensi','Kebaruan informasi dapat membantu, tetapi tidak menggantikan kesesuaian kebutuhan.']]);
  edit('exam-7-4', [
    ['Pisahkan driver awal dan hasil; uji hubungan trust','Urutan kejadian membantu membedakan alasan adopsi dari hasil; hubungan kausal trust masih perlu diuji.'],
    ['Tetapkan trust sebagai driver awal dari hasil pilot','Hasil yang ditemukan sesudah pilot tidak cukup membuktikan alasan awal adopsi.'],
    ['Tetapkan pertumbuhan jejaring sebagai akibat pilot','Pertumbuhan industri telah dicatat sebelum pilot, sehingga tidak dapat begitu saja diatribusikan pada pilot perusahaan.'],
    ['Gunakan kenaikan trust sebagai bukti ROI positif','Trust dapat memberi manfaat, tetapi ROI memerlukan manfaat yang dibandingkan dengan biaya pada horizon yang sama.'],
    ['Gunakan kebutuhan kolaborasi sebagai bukti trust naik','Kebutuhan adalah alasan tindakan, bukan pengukuran hasil kepercayaan sesudah implementasi.']]);
  edit('exam-7-5', [
    ['Bandingkan waktu penyelesaian kasus dan total biaya','Dengan baseline serta kasus sebanding, waktu yang dihemat dapat dinilai terhadap biaya dan mutu hasil.'],
    ['Bandingkan posting per pegawai dan pengguna aktif','Mengukur adopsi/aktivitas yang sudah memadai, belum menjawab imbal balik terhadap biaya.'],
    ['Bandingkan jumlah koneksi dan kelengkapan profil','Mengukur jangkauan jejaring, tetapi nilai produktivitas atau biaya belum ditunjukkan.'],
    ['Bandingkan uptime sistem dan kecepatan pencarian','Menguji kualitas teknis; perlu hubungan dengan hasil kerja serta total biaya untuk menjawab keberatan direksi.'],
    ['Bandingkan kepuasan pengguna dan jumlah komunitas','Sinyal pengalaman berguna, tetapi belum membuktikan manfaat finansial dibanding investasi.']]);
  const assertion = (id, prompt, correct, reason) => {
    const q = bank.find(q => q.id === id); q.prompt = prompt; q.answer = correct ? 0 : 1; q.reason = reason;
    q.analysis = correct ? [reason, `Menolak klaim ini tidak sesuai mekanisme kasus. ${reason}`] : [`Kesalahan klaimnya terletak pada hubungan konsep berikut. ${reason}`, reason];
  };
  assertion('practice-2-8','Keranjang menahan pilihan pengguna selama sesi. Dalam pemetaan fungsi EC, penyimpanan pilihan ini merupakan bukti reservasi persediaan gudang.',false,'Keranjang menyimpan item yang dipilih. Reservasi adalah komitmen stok oleh proses inventori; keduanya dapat dihubungkan, tetapi kasus hanya menyebut penyimpanan pilihan sehingga bukti reservasi belum ada.');
  assertion('practice-2-10','Mal virtual X mengekspor avatar dalam format yang dapat diimpor platform Y. Bukti itu menunjukkan interoperabilitas representasi avatar, tetapi belum membuktikan hak pakai barang virtual ikut berlaku di Y.',true,'Portabilitas representasi dan pengakuan hak aset merupakan lapisan berbeda. Impor bentuk avatar menguji pertukaran data, sedangkan lisensi, identitas dan pengakuan transaksi membutuhkan aturan serta dukungan platform penerima.');
  assertion('practice-3-10','Retailer click-and-mortar menjual stok berlebih melalui flash sale daring. Dalam klasifikasi materi, flash sale menjelaskan mekanisme penawaran, sedangkan click-and-mortar menjelaskan struktur kanal.',true,'Sumbu klasifikasi berbeda dapat berlaku bersama. Batas waktu penawaran menjelaskan flash sale; keberadaan kanal toko fisik dan online menjelaskan click-and-mortar. Perubahan mekanisme promosi tidak menghapus struktur kanal tersebut.');
  assertion('practice-4-9','Dua kelompok memesan total unit yang sama dengan kepastian pembayaran dan biaya distribusi setara. Dalam diskon yang semata-mata berbasis volume, kelompok beranggota lebih banyak memperoleh dasar tawar lebih kuat.',false,'Unit yang dikomitmenkan sama dan faktor lain dibuat setara. Jumlah anggota tidak menambah volume, sehingga aturan diskon volume tidak memberi keunggulan tambahan. Jika risiko, biaya atau relasi berubah, kasusnya berbeda.');
  assertion('practice-5-9','Dashboard LMS mencatat nilai asesmen praktik dan penyelesaian video secara terpisah. Untuk tujuan mengukur kompetensi melakukan prosedur, completion video merupakan pengganti yang setara dengan asesmen praktik.',false,'Completion membuktikan aktivitas penyelesaian konten, sedangkan asesmen praktik menguji penerapan prosedur. Kedua metrik dapat saling melengkapi, tetapi kesetaraan validitasnya tidak mengikuti dari keduanya berada di LMS.');
  assertion('practice-5-10','Dua perangkat membuka berkas e-book yang sama. Keberhasilan membuka teks memberikan dasar yang cukup untuk menyatakan dukungan video dan interaktivitas keduanya setara.',false,'Kompatibilitas teks berbeda dari kemampuan merender multimedia, menjalankan interaksi, atau terhubung untuk pembaruan. Kesetaraan harus diuji untuk fitur yang diklaim, bukan disimpulkan dari satu kemampuan dasar.');
  assertion('practice-6-9','Sensor dan aktuator bertukar pesan pada jaringan lokal tertutup. Aktivitas ini dapat diklasifikasikan M2M tanpa bukti bahwa layanan IoT untuk pengguna akhir telah tersedia.',true,'M2M berfokus pada komunikasi antarmesin. IoT dalam alur layanan yang dibahas menambahkan pengelolaan, pengolahan data dan aplikasi; bukti pertukaran pesan saja tidak menetapkan kelengkapan seluruh lapisan itu.');
  assertion('practice-7-9','Video ditampilkan sama kepada semua pengunjung. Pengayaan ini meningkatkan richness informasi, sedangkan personalization baru terbukti jika pengalaman disesuaikan dengan karakteristik pengguna.',true,'Richness menjelaskan kedalaman atau kekayaan informasi. Personalisasi memerlukan penyesuaian bagi pengguna; format video sendiri bukan bukti penyesuaian. Video yang sama dapat kaya informasi tanpa personalisasi.');
  assertion('practice-8-9','Pembayaran sepatu lewat dompet digital mendigitalkan instrumen pembayaran. Dalam model tiga dimensi materi, fakta itu menjadikan pengiriman fisik sepatu bagian dari pure EC.',false,'Digitasi satu dimensi tidak mendigitalkan dimensi lain. Pengiriman sepatu tetap fisik sehingga transaksi campuran/partial EC; sifat instrumen pembayaran tidak mengubah objek atau metode fulfillment.');
  assertion('exam-5-6','Sistem hasil laboratorium dan penjadwalan konsultasi elektronik dikelompokkan sebagai e-health. Pengelompokan ini tetap sesuai definisi meskipun pembayaran konsultasi dilakukan di loket.',true,'E-health mencakup informasi, koordinasi dan pelayanan kesehatan melalui sistem elektronik. Kanal pembayaran adalah dimensi lain; tidak adanya pembayaran online tidak menghapus fungsi informasi atau penjadwalan dalam cakupan e-health.');
  assertion('exam-5-9','Perusahaan lintas zona waktu memilih webinar wajib pada satu jam yang sama. Pilihan kanal online itu telah menyelesaikan hambatan keserempakan waktu yang menjadi alasan awal adopsi.',false,'Webinar sinkron mengurangi kebutuhan berada di tempat yang sama, tetapi tetap mengharuskan waktu yang sama. Hambatan zona waktu memerlukan desain asinkron, alternatif sesi, atau mekanisme lain; digitalisasi kanal saja belum menyelesaikannya.');
  assertion('exam-6-6','Pilot menggabungkan empat fungsi ke satu aplikasi. Jumlah perpindahan aplikasi turun, tetapi salah pilih menu naik. Kedua temuan konsisten dengan integrasi kanal yang belum menyederhanakan interaksi.',true,'Perpindahan aplikasi dan beban navigasi merupakan ukuran berbeda. Integrasi dapat mengurangi perpindahan sekaligus menambah kepadatan pilihan. Nilai usability perlu diuji pada tugas dan kesalahan, bukan jumlah aplikasi saja.');
  assertion('exam-6-8','Pada jaringan yang bandwidth-nya dinaikkan, ukuran berkas tetap dan waktu propagasi tidak berubah. Seluruh penurunan waktu transfer berkas itu dapat ditafsirkan sebagai hilangnya waktu propagasi.',false,'Bandwidth memengaruhi berapa banyak data dapat ditransfer per waktu. Propagasi merupakan waktu perjalanan sinyal dan dinyatakan tetap; mengatribusikan perubahan transfer kepada hilangnya propagasi bertentangan dengan asumsi kasus.');
  assertion('exam-6-10','Aplikasi memilih mode hemat data berdasarkan kualitas koneksi. Dalam context-aware computing, kondisi jaringan yang memengaruhi perilaku aplikasi termasuk konteks meskipun koordinat tidak dipakai.',true,'Konteks meliputi informasi relevan tentang situasi pengguna, perangkat atau interaksi. Kondisi jaringan dapat memicu adaptasi yang relevan; location awareness merupakan salah satu bentuk, bukan batas seluruh konteks.');
  assertion('exam-7-8','Tim menggabungkan testimonial, video, dan studi kasus dari satu sponsor. Banyaknya format tersebut dapat dipakai sebagai bukti bahwa evaluasi telah menggunakan sumber yang independen.',false,'Keragaman format bukan independensi asal informasi. Ketiganya berasal dari sponsor yang sama sehingga insentif serta bias dapat berkorelasi. Perlu memeriksa sumber, metode dan kesesuaian penggunaan, bukan menghitung format saja.');
  assertion('exam-7-10','Pegawai memberi tag bebas, lalu kurator memetakan sinonim ke kategori resmi tanpa menghapus tag asal. Sistem ini menggabungkan folksonomy dengan taxonomy.',true,'Tag pengguna membentuk klasifikasi partisipatif; kategori resmi memberi struktur terkelola. Pemetaan dapat mempertahankan kedua lapisan. Keberadaan taxonomy tidak dengan sendirinya menghapus kontribusi pengguna atau karakter Enterprise 2.0.');
  assertion('exam-6-7','Aplikasi menghitung rute tujuan dan memberi instruksi belok. Karena hasilnya digambar di peta, fungsi dominan yang diuji adalah mapping, sedangkan navigation hanya berlaku ketika koordinat perangkat dilacak.',false,'Mapping merepresentasikan informasi geografis, navigation menentukan rute dan petunjuk menuju tujuan, sedangkan tracking mengikuti posisi atau pergerakan. Tampilan peta tidak mengubah instruksi rute menjadi sekadar mapping; klaim juga mencampurkan navigation dengan tracking.');
  assertion('exam-7-7','Tim menjelaskan social shopping melalui norma kelompok, preferensi individu, dan koordinasi daftar belanja bersama. Ketiga faktor itu berada sepenuhnya dalam perspektif perilaku konsumen sehingga analisis hubungan sosial dan kolaborasi tidak menambah penjelasan.',false,'Preferensi individu berhubungan dengan perilaku konsumen; norma dan pengaruh kelompok memerlukan hubungan sosial; koordinasi daftar bersama memperlihatkan kolaborasi online. Perspektifnya dapat beririsan, tetapi memasukkan seluruhnya ke satu perspektif menghilangkan mekanisme pembeda.');
  assertion('exam-7-9','Pembelian kelompok memberi diskon Rp12.000 per unit dan memerlukan distribusi tambahan Rp15.000 per unit dibanding pembelian individual. Dengan komponen biaya lain sama, kelompok menghemat Rp3.000 per unit.',false,'Perubahan biaya bersih = −Rp12.000 + Rp15.000 = +Rp3.000. Angkanya adalah tambahan biaya, bukan penghematan. Diskon pembelian tidak dapat dinilai terpisah dari biaya koordinasi atau distribusi yang ditimbulkannya.');
  return bank;
}
