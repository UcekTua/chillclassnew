# Mobile commerce dan ubiquitous computing

## 1. Mengapa modul ini diperlukan?

Kuis 1 menguji m-commerce, location-based commerce, context-aware computing dan IoT. Slide/buku bab khusus topik tersebut tidak tersedia dalam folder. Modul ini menyusun **materi penghubung berdasarkan konsep yang diuji**, bukan mengaku merekonstruksi semua isi bab yang tidak tersedia. Definisi dasar bertumpu pada Bab 1–3 serta pembahasan 30 soal unik Kuis 1.

Urutan belajar: pisahkan atribut layanan → kenali fondasi teknologi → telusuri alur lokasi → bedakan fungsi pemetaan/navigasi → analisis konteks → nilai manfaat dan keterbatasan. Contoh aplikasi berikut bersifat ilustratif.

## 2. Atribut m-commerce yang sering tertukar

M-commerce menjalankan aktivitas EC melalui perangkat bergerak dan konektivitas nirkabel. Perhatikan manfaat **yang dijelaskan dalam kasus**, karena satu aplikasi dapat memiliki beberapa atribut.

| Atribut | Pertanyaan pembeda | Contoh |
|---|---|---|
| Ubiquity | Apakah akses dapat dilakukan lintas lokasi/waktu? | Memeriksa status order saat bepergian. |
| Convenience | Apakah usaha pengguna berkurang? | Pembayaran beberapa langkah dengan data tersimpan. |
| Interactivity | Apakah ada komunikasi timbal balik? | Tanya jawab pembeli dan penjual. |
| Personalization | Apakah pengalaman disesuaikan dengan individu? | Urutan produk berbeda menurut preferensi pelanggan. |
| Localization | Apakah informasi relevan terhadap lokasi? | Menemukan tempat pengambilan terdekat. |

Personalisasi tidak sama dengan multimedia: video yang sama bagi semua orang memperkaya format, tetapi belum menyesuaikan individu. Interaksi real-time tidak otomatis meningkatkan kepuasan bila jawaban lambat atau salah. Ubiquity adalah kemampuan akses dalam batas jaringan/perangkat, bukan jaminan koneksi di setiap tempat.

## 3. Fondasi teknis dan alur transaksi

Lapisan umum: **perangkat → antarmuka aplikasi/browser → jaringan → layanan/backend → integrasi bisnis**. Smartphone/wearable menyediakan sensor dan input; browser/aplikasi menyediakan antarmuka; jaringan membawa permintaan; backend memproses identitas, katalog, order, pembayaran dan pemenuhan.

Istilah microbrowser/mobile portal dalam kuis merujuk taksonomi sumber lama. Intelligent systems dapat memperkaya rekomendasi atau deteksi fraud, tetapi toko mobile sederhana tidak memerlukan AI agar dapat menerima order. Karena itu soal “fondasi teknis, kecuali” harus dibaca sebagai pemisahan prasyarat dan kemampuan tambahan.

Elaborasi: pelanggan menekan bayar saat sinyal terputus. Aplikasi harus dapat memeriksa status transaksi sebelum mencoba ulang agar tidak membuat order ganda. Kualitas pengalaman tergantung koordinasi backend, bukan kecepatan layar saja.

## 4. Location-based commerce: dari koordinat ke layanan

L-commerce memakai lokasi untuk memberi layanan atau penawaran yang relevan. Alur konseptualnya: **pengguna/perangkat meminta layanan → sistem memperoleh estimasi lokasi → server menafsirkan lokasi → GIS dan database menyediakan informasi geografis → aplikasi menyajikan hasil**. Istilah location finder dan mobile positioning center pada kuis mewakili fungsi penentuan/pengelolaan posisi. Implementasi nyata dapat menggabungkan beberapa fungsi.

GIS mengelola/menganalisis data geografis. Posisi dapat diperkirakan melalui teknologi satelit, seluler, Wi-Fi atau sensor, dengan akurasi berbeda. Lokasi akurat tetapi database jam buka salah tetap menghasilkan rekomendasi buruk. Smart grid adalah konteks infrastruktur energi; bukan komponen wajib untuk layanan lokasi toko.

LBS dapat digunakan untuk pencarian tempat, transportasi, pelacakan aset, perjalanan, layanan darurat, serta penawaran berbasis kedekatan. Kategori “leisure and travel” pada kuis lama tidak memiliki tabel asal di folder; modul ini tidak mengklaim instant messaging selalu termasuk LBS. Pesan tanpa penggunaan lokasi tidak otomatis location-based.

## 5. Mapping, navigation, tracking, dan context

**Mapping** merepresentasikan lokasi/fitur geografis dalam peta. **Navigation** membantu menentukan/mengikuti jalur menuju tujuan. **Tracking** memantau posisi/pergerakan objek dari waktu ke waktu. Ketiganya dapat dipakai dalam satu aplikasi.

Elaborasi: titik toko pada peta = pemetaan; instruksi belok menuju toko = navigasi; melihat kurir bergerak = pelacakan. Visualisasi rute dapat memakai peta, sehingga soal lama yang sekadar menyebut “visualisasi rute = mapping” terlalu longgar. Soal baru menyebut fungsi dominan secara tegas agar ada satu jawaban yang dapat dipertahankan.

Context-aware computing menyesuaikan layanan berdasarkan situasi. Konteks dapat berupa identitas, aktivitas, waktu atau lokasi; lokasi merupakan salah satu kemungkinan, bukan syarat wajib. Contoh: menunda notifikasi saat kalender menunjukkan ujian tidak memerlukan GPS. Penelitian Dey dan kolega membahas konteks melampaui lokasi. [Context Toolkit, Georgia Tech](https://sites.cc.gatech.edu/fce/contexttoolkit/pubs/chi99/).

## 6. Ubiquitous computing, IoT, dan M2M

Ubiquitous/pervasive computing mengintegrasikan kemampuan komputasi ke lingkungan dan aktivitas. IoT menghubungkan objek/perangkat yang mengindra, bertukar data atau mengendalikan proses. **M2M** menyoroti komunikasi antarmesin; dapat menjadi bagian arsitektur IoT. Hubungan M2M lokal tidak otomatis mencakup semua komponen layanan IoT.

Elaborasi cold chain: sensor membaca suhu → gateway mengirim data → layanan membandingkan batas → petugas mendapat peringatan → tindakan dicatat. Data sensor saja belum menghasilkan nilai bisnis jika tidak memengaruhi keputusan. Bedakan objek fisik, sensor, jaringan, pengolahan, dan aplikasi.

## 7. Manfaat, keterbatasan, dan tradeoff desain

Manfaat potensial konsumen: informasi saat dibutuhkan, akses belanja/hiburan, transaksi praktis, serta relevansi lokasi. Manfaat organisasi: dukungan petugas lapangan, jangkauan dan respons lebih cepat. Manfaat tersebut harus diuji terhadap kebutuhan, biaya dan kondisi pengguna.

Keterbatasan meliputi layar/input kecil, baterai, cakupan, bandwidth/latensi, perangkat dan OS beragam, keamanan, privasi serta kompleksitas fitur. Bandwidth lebih besar berarti kapasitas transfer lebih besar; itu tidak dengan sendirinya menghambat l-commerce. Namun kapasitas bukan satu-satunya penentu respons: latensi, kepadatan jaringan, ukuran data dan backend berpengaruh.

**Latihan berpikir:** lokasi sangat presisi memberi relevansi lebih tinggi, tetapi menambah kebutuhan pengelolaan izin/data. Fitur lebih banyak membantu beberapa tugas, tetapi menambah beban belajar. Solusinya memilih ketelitian, frekuensi pembaruan, fitur, dan informasi yang diperlukan untuk tugas spesifik.

Koreksi pola kuis: bedakan **manfaat potensial** dari **jaminan hasil**, **kapasitas jaringan** dari **kebutuhan bandwidth**, dan **konteks** dari **lokasi**. Lihat pembahasan sumber Q1-01/02/07/12/14/23–26/29 pada audit kuis.
