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
  return bank;
}
