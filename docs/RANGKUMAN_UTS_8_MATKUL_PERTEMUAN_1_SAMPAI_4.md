# 🎓 BUKU CATATAN BINDER UTS: KOMPENDIUM LENGKAP 8 MATA KULIAH (PERTEMUAN 1 – 4)

> **Institusi:** Universitas Indraprasta PGRI (UNINDRA)  
> **Fakultas / Program Studi:** Teknik & Ilmu Komputer (FTIK) / Sistem Informasi  
> **Kelas / Semester:** R1G / Semester 1 (Reguler RG)  
> **Status:** Kompendium Lengkap & Mendalam Persiapan Ujian Tengah Semester (UTS)  
> **Acuan Validasi:** Master Index Kuliah, Modul Praktikum PDF, Slide PPTX Dosen, dan Transkripsi Rekaman Kuliah.

---

## 📌 DAFTAR ISI MATA KULIAH
1. [🌐 Konsep Sistem Informasi (Senin 07:30)](#1-konsep-sistem-informasi-ksi)
2. [🔤 Bahasa Indonesia (Senin 10:00)](#2-bahasa-indonesia-mkwk107)
3. [⚡ Algoritma 1 (Selasa 07:30)](#3-algoritma-1)
4. [💻 Pemrograman 1 - Pascal (Selasa 09:10)](#4-pemrograman-1-pascal)
5. [🇬🇧 Bahasa Inggris 1 (Kamis 07:30)](#5-bahasa-inggris-1)
6. [📐 Matematika Dasar (Kamis 09:10)](#6-matematika-dasar)
7. [🇮🇩 Pendidikan Pancasila (Jumat 07:30)](#7-pendidikan-pancasila)
8. [🕌 Pendidikan Agama Islam (Jumat 09:10)](#8-pendidikan-agama-islam-pai)

---

## 1. Konsep Sistem Informasi (KSI)
* **Dosen Pengampu:** Pak Dheni, M.Kom.
* **Jadwal & Ruang:** Senin • 07:30 - 10:00 WIB • Ruang R.4.4-4

### Pertemuan 1: Konsep Dasar Data, Informasi, dan Transformasi Pengetahuan
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Hakikat Data dan Epistemologi Komputasi
<p>Secara epistemologis dan praktis, **Data** didefinisikan sebagai representasi mentah dari fakta (*raw facts*), kejadian (*events*), atau entitas nyata (orang, tempat, benda, uang, transaksi) yang terekam atau terdokumentasi tanpa makna bawaan yang dapat langsung dipakai untuk pengambilan keputusan strategis.</p>
<ul>
  <li>**Sifat Data:** Atomik, belum terstruktur secara semantik, berdiri sendiri, dan berorientasi historis operasional.</li>
  <li>**Klasifikasi Data Berdasarkan Format:**
    <ul>
      <li>*Data Terstruktur:* Angka, tanggal, dan teks dalam basis data relasional (RDBMS) yang memiliki tipe dan panjang kolom pasti.</li>
      <li>*Data Semi-Terstruktur:* Berkas JSON, XML, log web server yang memiliki tag identitas namun struktur fleksibel.</li>
      <li>*Data Tidak Terstruktur:* Dokumen PDF, video rekaman CCTV, foto kwitansi, percakapan suara pelanggan yang memerlukan pemrosesan khusus untuk diekstraksi.</li>
    </ul>
  </li>
</ul>

#### 2. Definisi Informasi Menurut Gordon B. Davis & Pakar Klasik
<p>Dalam karya monumentalnya *Management Information Systems: Conceptual Foundations, Structure, and Development*, **Gordon B. Davis** merumuskan definisi standar yang menjadi rujukan kurikulum akademis:</p>
<blockquote style="border-left: 4px solid var(--primary); padding-left: 14px; margin: 10px 0; color: var(--text-main); font-style: italic; background: var(--surface-elevated); padding: 10px 14px; border-radius: 4px;">
  "Informasi adalah data yang telah diproses ke dalam suatu bentuk yang mempunyai arti bagi si penerima (meaningful) dan mempunyai nilai nyata serta terasa bagi pengambilan keputusan saat ini maupun keputusan masa mendatang."
</blockquote>
<p>Kunci distingsi Davis terletak pada 3 kata kunci:</p>
<ol>
  <li>**Telah Diproses:** Telah melalui operasi matematis, pengelompokan, agregasi, atau penyaringan.</li>
  <li>**Mempunyai Arti bagi Penerima:** Harus berada dalam konteks penerima (data penjualan raw tidak berarti bagi teknisi AC, tetapi sangat bernilai bagi manajer pemasaran).</li>
  <li>**Mempunyai Nilai Nyata dalam Pengambilan Keputusan:** Mengurangi ketidakpastian (*reducing uncertainty*) bagi pengambil kebijakan.</li>
</ol>

#### 3. Hierarki DIKW (Data -> Information -> Knowledge -> Wisdom)
<div class="table-wrap">
  <table>
    <thead><tr><th>Tingkatan</th><th>Pertanyaan Kunci</th><th>Karakteristik & Nilai Guna</th><th>Contoh Konkret Bisnis Retail</th></tr></thead>
    <tbody>
      <tr><td>**Data**</td><td>*What? (Fakta)*</td><td>Catatan transaksi tanpa konteks relasional</td><td>`100, "2026-09-30", "SKU-992", 45000`</td></tr>
      <tr><td>**Information**</td><td>*Who, When, Where?*</td><td>Data yang diagregasi dan memiliki label relasional</td><td>"Pada 30 September 2026, terjual 100 unit SKU-992 dengan omset Rp4.500.000 di Cabang Jakarta."</td></tr>
      <tr><td>**Knowledge**</td><td>*How? (Pola & Kaidah)*</td><td>Informasi yang dipadukan dengan pengalaman dan pemahaman pola</td><td>"Penjualan SKU-992 selalu melonjak 300% pada akhir bulan saat hari gajian karena produk tersebut adalah kebutuhan pokok."</td></tr>
      <tr><td>**Wisdom**</td><td>*Why? (Kebijaksanaan)*</td><td>Kemampuan memproyeksikan wawasan untuk strategi masa depan</td><td>"Mengalokasikan stok penyangga (buffer stock) 500 unit setiap tanggal 25 dan meluncurkan promo bundling gajian untuk memaksimalkan margin laba."</td></tr>
    </tbody>
  </table>
</div>

#### 4. Peran Pengolah Informasi (Information Processor)
<p>Agar data mentah dapat bermetamorfosis menjadi informasi berharga, diperlukan subsistem pengolah informasi (*Information Processor*) yang dapat bekerja secara:</p>
<ul>
  <li>**Manual:** Menggunakan tenaga klerikal manusia, buku besar akuntansi, kalkulator, dan filling cabinet (rentan human-error, lambat, biaya skalabilitas tinggi).</li>
  <li>**Berbasis Komputer (CBIS - Computer Based Information System):** Menggunakan algoritma software, database server, query SQL otomatis, dan jaringan telekomunikasi (presisi tinggi, latensi milidetik, kapasitas masif).</li>
</ul>


---

### Pertemuan 2: Karakteristik, Batasan & Taksonomi Sistem
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. 8 Karakteristik Wajib Suatu Sistem (Sistematika Utuh)
<p>Suatu kesatuan hanya berhak disebut sebagai **Sistem** jika memenuhi 8 karakteristik terpadu berikut:</p>
<ol>
  <li>**Komponen Sistem (Components):** Suatu sistem terdiri dari sejumlah komponen yang saling berinteraksi, bekerja sama membentuk satu kesatuan. Komponen dapat berupa subsistem-subsistem yang masing-masing menjalankan fungsinya sendiri namun tetap terintegrasi.</li>
  <li>**Batas Sistem (Boundary):** Daerah pemisah antara suatu sistem dengan sistem yang lain atau dengan lingkungan luarnya. Batas sistem menentukan konfigurasi, ruang lingkup, dan kemampuan sistem.</li>
  <li>**Lingkungan Luar Sistem (Environment):** Apapun di luar batas sistem yang mempengaruhi operasi sistem. Lingkungan luar dapat bersifat menguntungkan (energi, modal, bahan baku yang harus dijaga) atau merugikan (regulasi pesaing, serangan siber yang harus dikendalikan).</li>
  <li>**Penghubung Sistem (Interface):** Media perantara yang memungkinkan sumber daya atau data mengalir dari satu subsistem ke subsistem lainnya. Format output subsistem A harus kompatibel dengan format input subsistem B.</li>
  <li>**Masukan Sistem (Input):** Energi yang dimasukkan ke dalam sistem. Dibagi 2:
    <ul>
      <li>*Maintenance Input:* Energi yang dimasukkan agar sistem terus beroperasi (misal: listrik, operating system, pemeliharaan server).</li>
      <li>*Signal Input:* Energi yang diproses untuk menghasilkan keluaran (misal: data transaksi penjualan yang diinput kasir).</li>
    </ul>
  </li>
  <li>**Pengolahan Sistem (Process):** Bagian yang mengolah dan mentransformasikan masukan menjadi keluaran. Pada sistem informasi, pengolahan berupa pemrosesan program logika, perhitungan, dan penyimpanan data.</li>
  <li>**Keluaran Sistem (Output):** Hasil olahan dari energi yang dimasukkan. Dapat berupa keluaran yang berguna (informasi laporan manajemen) maupun sisa buangan/sampah (*waste/log error*).</li>
  <li>**Sasaran dan Tujuan (Goal & Objective):** Sistem pasti memiliki tujuan (*goal* untuk ruang lingkup luas) atau sasaran (*objective* untuk batasan operasional terukur). Kinerja sistem dievaluasi dari seberapa tepat sasaran tercapai.</li>
</ol>

#### 2. Taksonomi & Klasifikasi Sistem
<div class="table-wrap">
  <table>
    <thead><tr><th>Dimensi Klasifikasi</th><th>Tipe Sistem A</th><th>Tipe Sistem B</th><th>Contoh Pembeda Nyata</th></tr></thead>
    <tbody>
      <tr><td>**Bentuk Wujud**</td><td>**Sistem Abstrak:** Berupa gagasan, ide, teologi pemikiran manusia.</td><td>**Sistem Fisik:** Memiliki wujud materiil dan komponen kebendaan.</td><td>Sistem Filsafat Etika vs Perangkat Keras Komputer</td></tr>
      <tr><td>**Asal Kejadian**</td><td>**Sistem Alamiah:** Terbentuk secara alami oleh hukum semesta tanpa campur tangan manusia.</td><td>**Sistem Buatan Manusia:** Dirancang dan diimplementasikan oleh manusia.</td><td>Sistem Peredaran Darah Manusia vs Sistem Penggajian Karyawan</td></tr>
      <tr><td>**Kepastian Operasi**</td><td>**Sistem Deterministik:** Bekerja dengan tingkah laku yang dapat diprediksi secara presisi 100%.</td><td>**Sistem Probabilistik:** Mengandung faktor ketidakpastian dan peluang.</td><td>Program perkalian dua angka vs Sistem Prediksi Harga Saham</td></tr>
      <tr><td>**Interaksi Lingkungan**</td><td>**Sistem Tertutup:** Terisolasi mandiri, tidak menerima pengaruh energi dari luar.</td><td>**Sistem Terbuka:** Berinteraksi dinamis dengan lingkungan luarnya.</td><td>Eksperimen kimia dalam tabung vakum vs Organisasi Perusahaan Modern</td></tr>
    </tbody>
  </table>
</div>

> [!WARNING]
> **⚠️ Waspada Jebakan UTS: Hukum Entropi Sistem**
> Dalam kenyataan empiris, **sistem tertutup mutlak tidak pernah ada** dalam organisasi bisnis. Menurut hukum termodinamika dan teori sistem umum, sistem yang benar-benar tertutup akan mengalami peningkatan **Entropi** (keausan, disintegrasi, hilangnya energi dan informasi) yang berujung pada kepunahan sistem. Oleh karena itu, sistem informasi selalu berkarakteristik **Sistem Terbuka** yang membutuhkan umpan balik (*feedback loop*) untuk mencapai *homeostasis* (keseimbangan dinamis).


---

### Pertemuan 3: Sumber, Kualitas Informasi & Arsitektur 6 Blok Pembangun SI
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Siklus Pengolahan Informasi (Information Cycle)
<p>Siklus informasi menggambarkan bagaimana data mengalir dalam loop tak berujung (*closed-loop feedback*):</p>
```text

[DATA BARU / FAKTA LAPANGAN]
             │
             ▼
   ┌──────────────────┐
   │ MASUKAN (INPUT)  │ <── Formulir, sensor, input user
   └─────────┬────────┘
             │
             ▼
   ┌──────────────────┐
   │ PENGOLAHAN DATA  │ <── Model logika, program software, rumus
   └─────────┬────────┘
             │
             ▼
   ┌──────────────────┐
   │ KELUARAN (OUTPUT)│ <── Laporan, visualisasi grafik, notifikasi
   └─────────┬────────┘
             │
             ▼
   ┌──────────────────┐
   │     PENERIMA     │ <── Pengambil keputusan (Manajer / User)
   └─────────┬────────┘
             │
             ▼
   ┌──────────────────┐
   │ KEPUTUSAN / AKSI │ <── Tindakan operasional organisasi
   └─────────┬────────┘
             │ (Menghasilkan transaksi baru)
             ▼
       [DATA BARU] ─── (Kembali berputar ke Siklus Input)

```

#### 2. 4 Pilar Kualitas Informasi
<ol>
  <li>**Akurat (Accurate):** Informasi harus bebas dari kesalahan-kesalahan, tidak bias, tidak menyesatkan, dan secara presisi mencerminkan fakta maksudnya. Kesalahan data masukan akan berakibat pada output yang salah (prinsip *GIGO: Garbage In, Garbage Out*). Sub-komponen akurat:
    <ul>
      <li>*Kelengkapan (Completeness):* Seluruh data pendukung tersedia utuh tanpa ada yang terpotong.</li>
      <li>*Kebenaran (Correctness):* Bebas dari salah hitung atau kesalahan pengetikan.</li>
    </ul>
  </li>
  <li>**Tepat Waktu (Timeliness):** Informasi yang datang pada penerima tidak boleh terlambat (usang). Informasi yang kadaluarsa tidak mempunyai nilai guna lagi dalam pengambilan keputusan kompetitif dan justru berisiko menimbulkan kerugian finansial.</li>
  <li>**Relevan (Relevance):** Informasi harus mempunyai manfaat pemakaian spesifik bagi penerimanya. Relevansi informasi berbeda untuk tiap orang tergantung tingkat jabatan dan fungsinya (misal: manajer keuangan memerlukan laporan neraca laba rugi, bukan log IP address jaringan server).</li>
  <li>**Ekonomis (Value of Information):** Nilai suatu informasi diukur dari perbandingan antara manfaat (*benefit*) yang didapat dengan biaya (*cost*) yang dikeluarkan untuk memperolehnya. Suatu sistem informasi tidak layak diimplementasikan jika biaya pembuatannya lebih besar daripada nilai tambah operasionalnya.</li>
</ol>

#### 3. Arsitektur 6 Blok Pembangun Sistem Informasi (John Burch Framework)
<div class="table-wrap">
  <table>
    <thead><tr><th>Nama Blok</th><th>Fungsi Spesifik</th><th>Komponen & Contoh Implementasi</th></tr></thead>
    <tbody>
      <tr><td>**1. Blok Masukan (Input Block)**</td><td>Metode dan media untuk menangkap data dari sumber aslinya masuk ke sistem</td><td>Keyboard, barcode scanner QRIS, formulir registrasi online, sensor IoT, RFID reader</td></tr>
      <tr><td>**2. Blok Model (Model Block)**</td><td>Kombinasi prosedur, logika pemrograman, dan model matematika yang memanipulasi data</td><td>Logika perhitungan PPh 21, algoritma rekomendasi e-commerce, rumus depresiasi aset</td></tr>
      <tr><td>**3. Blok Keluaran (Output Block)**</td><td>Penyajian hasil pemrosesan ke format yang bermakna bagi pengguna</td><td>Faktur tagihan PDF, grafik analitik dashboard React, pesan SMS konfirmasi OTP, laporan audit</td></tr>
      <tr><td>**4. Blok Teknologi (Technology Block)**</td><td>Kotak alat (tool-box) perangkat penopang jalannya sistem</td><td>Hardware (Server Xeon, PC, RAM), Software (Linux, Windows Server), Jaringan (Router, Fiber Optic, Wi-Fi)</td></tr>
      <tr><td>**5. Blok Basis Data (Database Block)**</td><td>Tempat penyimpanan kumpulan data terorganisir yang saling berelasi</td><td>RDBMS (PostgreSQL, MySQL, Oracle), NoSQL (MongoDB), Schema tabel, primary key, foreign key</td></tr>
      <tr><td>**6. Blok Kendali (Control Block)**</td><td>Mekanisme proteksi dan pengamanan sistem dari gangguan, kerusakan, dan serangan</td><td>Enkripsi AES-256, otentikasi 2FA, firewall, sistem backup rutin off-site, uninterruptible power supply (UPS)</td></tr>
    </tbody>
  </table>
</div>


---

### Pertemuan 4: Tingkat Manajemen & Karakteristik Pengambilan Keputusan
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Piramida Tingkat Manajemen (Model Robert N. Anthony)
<p>Dalam teori manajemen dan sistem informasi, struktur organisasi terbagi menjadi 3 tingkatan manajerial dengan spektrum kebutuhan informasi yang sangat kontras:</p>
<div class="table-wrap">
  <table>
    <thead><tr><th>Tingkat Manajerial</th><th>Posisi & Jabatan</th><th>Fokus Perencanaan</th><th>Karakteristik Informasi yang Dibutuhkan</th></tr></thead>
    <tbody>
      <tr><td>**Top Management (Manajemen Puncak)**</td><td>CEO, Direktur Utama, Komisaris, Rektor</td><td>Perencanaan Strategis Jangka Panjang (3 - 5 tahun ke depan)</td><td>Sangat ringkas, berorientasi masa depan, bersumber dari lingkungan eksternal (regulasi, makro ekonomi, tren pasar global), non-rutin.</td></tr>
      <tr><td>**Middle Management (Manajemen Madya)**</td><td>Manajer Pemasaran, Kepala Cabang, Dekan</td><td>Pengendalian Manajemen & Taktis (Bulanan s.d Tahunan)</td><td>Informasi varians anggaran, perbandingan target vs realisasi, ringkasan kinerja per departemen, informasi taktis periodik.</td></tr>
      <tr><td>**Lower / First-Line Management (Manajemen Lini Pertama)**</td><td>Supervisor, Kepala Regu, Mandor</td><td>Pengendalian Operasional (Harian s.d Mingguan)</td><td>Sangat detail, terperinci, akurat, bersumber internal, repetitif, data transaksi langsung saat itu juga (real-time).</td></tr>
    </tbody>
  </table>
</div>

#### 2. Taksonomi Tipe Pengambilan Keputusan (Model Herbert A. Simon)
<ol>
  <li>**Keputusan Terstruktur (Structured Decision):**
    <ul>
      <li>*Definisi:* Keputusan yang berulang-ulang, rutin, dan memiliki prosedur standar operasi (SOP) atau formula algoritma yang pasti sehingga cara penyelesaiannya sudah baku.</li>
      <li>*Tingkat Keterlibatan Manusia:* Sangat minim; dapat didelegasikan 100% pada sistem perangkat lunak otomatis.</li>
      <li>*Contoh:* Perhitungan denda keterlambatan buku perpustakaan, penentuan pemotongan pajak PPh 21, auto-reorder stok barang saat menyentuh batas minimum.</li>
    </ul>
  </li>
  <li>**Keputusan Semi-Terstruktur (Semi-Structured Decision):**
    <ul>
      <li>*Definisi:* Keputusan yang sebagian prosedurnya terdefinisi dengan jelas oleh aturan/model analitik, tetapi sebagian lainnya tetap memerlukan intuisi, kebijaksanaan, dan pertimbangan subjektif pengambil keputusan manusia.</li>
      <li>*Tingkat Keterlibatan Manusia:* Kolaboratif; sistem menyediakan model kalkulasi (DSS - Decision Support System), manusia memutuskan pilihan akhir.</li>
      <li>*Contoh:* Persetujuan permohonan kredit pinjaman bank, alokasi biaya anggaran kampanye iklan digital, penetapan harga sewa properti komersial.</li>
    </ul>
  </li>
  <li>**Keputusan Tidak Terstruktur (Unstructured Decision):**
    <ul>
      <li>*Definisi:* Keputusan yang baru pertama kali dihadapi, kompleks, tidak memiliki pedoman baku, dan parameter kondisinya sarat dengan ketidakpastian.</li>
      <li>*Tingkat Keterlibatan Manusia:* Sangat tinggi; sistem informasi hanya mampu memberikan data ringkasan tren global (EIS - Executive Information System), keputusan murni dari intuisi dan visi strategis pemimpin.</li>
      <li>*Contoh:* Keputusan melakukan akuisisi perusahaan kompetitor, penutupan pabrik cabang di masa krisis perang, perubahan total model bisnis perusahaan.</li>
    </ul>
  </li>
</ol>


---

## 2. Bahasa Indonesia (MKWK107)
* **Dosen Pengampu:** Tim Dosen Bahasa Indonesia Unindra
* **Jadwal & Ruang:** Senin • 10:00 - 11:40 WIB • Ruang R.4.4-4

### Pertemuan 1: Hakikat Bahasa, Kedudukan & Fungsi Bahasa Indonesia
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Hakikat Bahasa Menurut Para Ahli Linguistik
<p>Kajian ilmiah bahasa Indonesia di perguruan tinggi bertumpu pada definisi formal linguistik:</p>
<ul>
  <li>**Harimurti Kridalaksana (1993):** *"Bahasa adalah sistem lambang bunyi yang arbitrer yang digunakan oleh para anggota kelompok sosial untuk bekerja sama, berkomunikasi, dan mengidentifikasikan diri."*</li>
  <li>**Kamus Besar Bahasa Indonesia (KBBI):** Bahasa adalah sistem lambang bunyi yang arbitrer yang digunakan oleh semua anggota masyarakat untuk bekerja sama, berinteraksi, dan mengidentifikasikan diri.</li>
  <li>**12 Ciri Hakiki Bahasa:**
    <ol>
      <li>*Bahasa adalah Sistem:* Bersifat sistematis (tersusun menurut pola teratur) dan sistemik (terdiri atas subsistem fonologi, morfologi, sintaksis, semantik).</li>
      <li>*Bahasa adalah Lambang:* Memiliki tanda yang mewakili suatu konsep atau makna dalam alam nyata.</li>
      <li>*Bahasa adalah Bunyi:* Bunyi vokal yang dihasilkan oleh alat ucap manusia (organ of speech). Bunyi non-alat ucap (tepuk tangan, siulan) bukan bahasa.</li>
      <li>*Bahasa bersifat Arbitrer:* Sewenang-wenang, tidak ada hubungan logis wajib antara lambang bunyi dengan benda yang dilambangkannya (contoh: mengapa hewan berkaki empat pemakan rumput disebut "kuda", bukan "meja").</li>
      <li>*Bahasa itu Bermakna:* Mengandung konsep atau pesan yang dapat dipahami.</li>
      <li>*Bahasa bersifat Konvensional:* Disepakati bersama oleh komunitas pemakai bahasa.</li>
      <li>*Bahasa bersifat Unik:* Memiliki ciri khas spesifik yang tidak dimiliki bahasa lain (misal: bahasa Indonesia tidak mengenal tenses konjugasi kata kerja seperti bahasa Inggris).</li>
      <li>*Bahasa bersifat Universal:* Semua bahasa memiliki kesamaan universal dasar (memiliki vokal dan konsonan, memiliki subjek dan predikat).</li>
      <li>*Bahasa bersifat Produktif:* Dari sejumlah unsur terbatas (26 huruf abjad), dapat dihasilkan kalimat yang jumlahnya tidak terhingga.</li>
      <li>*Bahasa itu Bervariasi:* Memiliki ragam dialek, sosiolek, dan fungsiolek.</li>
      <li>*Bahasa itu Dinamis:* Selalu berkembang mengikuti perkembangan zaman dan teknologi.</li>
      <li>*Bahasa itu Manusiawi:* Hanya dimiliki dan digunakan secara sempurna oleh manusia.</li>
    </ol>
  </li>
</ul>

#### 2. Kedudukan Bahasa Indonesia: Bahasa Nasional vs Bahasa Negara
<div class="table-wrap">
  <table>
    <thead><tr><th>Aspek Pembeda</th><th>Bahasa Indonesia sebagai BAHASA NASIONAL</th><th>Bahasa Indonesia sebagai BAHASA NEGARA</th></tr></thead>
    <tbody>
      <tr><td>**Landasan Yuridis**</td><td>**Ikrar Sumpah Pemuda** (28 Oktober 1928, Butir ke-3: *"Menjunjung bahasa persatuan, bahasa Indonesia"*)</td><td>**UUD 1945 Bab XV Pasal 36** (Disahkan pada 18 Agustus 1945: *"Bahasa Negara ialah Bahasa Indonesia"*)</td></tr>
      <tr><td>**Fungsi 1**</td><td>**Lambang Kebanggaan Kebangsaan:** Mencerminkan nilai-nilai luhur dan kebanggaan jati diri bangsa Indonesia.</td><td>**Bahasa Resmi Kenegaraan:** Dipakai dalam upacara kenegaraan, sidang parlemen, pidato kenegaraan, dokumen resmi hukum.</td></tr>
      <tr><td>**Fungsi 2**</td><td>**Lambang Identitas Nasional:** Pembeda unik bangsa Indonesia dari bangsa-bangsa lain di pentas global.</td><td>**Bahasa Pengantar Resmi Pendidikan:** Dipakai dari jenjang taman kanak-kanak hingga perguruan tinggi.</td></tr>
      <tr><td>**Fungsi 3**</td><td>**Alat Pemersatu Bangsa:** Menghubungkan ratusan suku bangsa yang berbeda bahasa daerah tanpa menghilangkan identitas kesukuannya.</td><td>**Alat Perhubungan Tingkat Nasional:** Dipakai dalam perencanaan pembangunan, administrasi pemerintahan, dan rapat koordinasi nasional.</td></tr>
      <tr><td>**Fungsi 4**</td><td>**Alat Perhubungan Antardaerah & Antarbudaya:** Sarana komunikasi perdagangan dan sosial lintas pulau di Nusantara.</td><td>**Sarana Pengembangan IPTEK & Kebudayaan:** Wahana penulisan jurnal ilmiah, publikasi buku cetak, dan kebudayaan nasional.</td></tr>
    </tbody>
  </table>
</div>


---

### Pertemuan 2: Menumbuhkan Sikap Positif Terhadap Bahasa Indonesia
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Teori Sosiolinguistik Sikap Bahasa (Garvin & Mathiot)
<p>Dalam kajian sosiolinguistik oleh **Paul L. Garvin dan Madeleine Mathiot (1968)**, kualitas pemakaian bahasa suatu masyarakat sangat ditentukan oleh sikap bahasa (*language attitude*). Sikap positif terhadap bahasa ditandai oleh 3 pilar perilaku:</p>
<ol>
  <li>**Kesetiaan Berbahasa (Language Loyalty):** Sikap batin yang mendorong suatu kelompok masyarakat penutur untuk mempertahankan kemandirian bahasanya, mencegah masuknya pengaruh bahasa asing secara berlebihan yang berpotensi merusak tatanan gramatikal baku, serta gigih membela eksistensi bahasanya dari ancaman kepunahan.</li>
  <li>**Kebanggaan Berbahasa (Language Pride):** Sikap emosional yang mendorong orang atau masyarakat mengutamakan bahasanya dan menggunakannya sebagai lambang identitas dan kesatuan bangsa. Lawan dari kebanggaan bahasa adalah sikap *inferioritas* (merasa lebih keren atau lebih terpelajar jika mencampuradukkan istilah asing yang sebenarnya sudah ada padanan bakunya dalam bahasa Indonesia).</li>
  <li>**Kesadaran akan Adanya Norma/Kaidah Bahasa (Awareness of the Norm):** Kesadaran sukarela untuk menggunakan bahasa secara tertib, cermat, santun, dan taat asas sesuai dengan kaidah baku tata bahasa dan ejaan yang berlaku (EYD V). Sikap ini menjadi faktor pendorong utama seseorang untuk selalu memeriksa kebenaran penulisan karyanya melalui KBBI.</li>
</ol>

#### 2. Paradigma: "Bahasa Indonesia yang Baik dan Benar"
<ul>
  <li>**Berbahasa yang BAIK:** Penggunaan bahasa yang sesuai dengan situasi, kondisi, dan konteks komunikasi (siapa yang diajak bicara, topik apa yang dibahas, di mana tempatnya). Situasi non-formal santai di warung kopi tidak perlu menggunakan bahasa baku akademis kaku.</li>
  <li>**Berbahasa yang BENAR:** Penggunaan bahasa yang patuh dan taat asas terhadap seluruh kaidah gramatikal, fonologi, morfologi, sintaksis, dan kaidah ejaan resmi (EYD).</li>
  <li>**Kombinasi Sempurna:** Menggunakan bahasa yang tepat sasaran konteksnya (BAIK) dan sekaligus taat asas aturan kaidahnya (BENAR) pada ranah formal seperti penulisan artikel ilmiah, skripsi, presentasi akademik, dan surat kedinasan.</li>
</ul>


---

### Pertemuan 3: Sejarah & Tonggak Perkembangan Bahasa Indonesia
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Asal-Usul Rumpun Austronesia & Dialek Melayu Riau
<p>Berdasarkan kajian linguistik historis komparatif, bahasa Indonesia berinduk dari rumpun **Austronesia** (bahasa kepulauan selatan). Sekitar 25 abad lalu terjadi migrasi bangsa dari daratan Formosa (Taiwan) menuju selatan menyusuri Filipina, Kalimantan, Sumatera, hingga Madagaskar.</p>
<p>Bahasa Melayu yang berkembang pesat adalah **Melayu Riau** (Melayu Tinggi di sekitar Kepulauan Riau dan Semenanjung Malaka). Sejak abad ke-7, bahasa Melayu telah berfungsi sebagai *Lingua Franca* (bahasa perantara/pergaulan) bagi para pedagang antarpulau, pelaut, dan penyebar agama di kawasan Nusantara.</p>

#### 2. Bukti Epigrafi Abad ke-7 Kerajaan Sriwijaya
<p>Keberadaan bahasa Melayu Kuno terekam abadi dalam prasasti-prasasti batu bertuliskan aksara Pallawa peninggalan Kemaharajaan Sriwijaya:</p>
<ol>
  <li>**Prasasti Kedukan Bukit (683 M)** di Palembang, menceritakan perjalanan suci (*siddhayatra*) Dapunta Hyang membawa 20.000 tentara.</li>
  <li>**Prasasti Talang Tuwo (684 M)** di Palembang, tentang pembangunan Taman Sriksetra untuk kemakmuran semua makhluk.</li>
  <li>**Prasasti Kota Kapur (686 M)** di Pulau Bangka, memuat kutukan bagi mereka yang memberontak kepada Sriwijaya.</li>
  <li>**Prasasti Karang Brahi (686 M)** di Jambi, berisi doa keselamatan dan kepatuhan rakyat.</li>
</ol>

#### 3. 4 Alasan Mengapa Bahasa Melayu Diangkat Menjadi Bahasa Indonesia
> [!NOTE]
> **💡 4 Faktor Penentu Pengangkatan Bahasa Melayu (Sidang Kongres Pemuda 1928)**
> <ol>
    <li>**Sudah Menjadi Lingua Franca:** Bahasa Melayu sudah berabad-abad menjadi bahasa pergaulan antarsuku di seluruh Nusantara tanpa menimbulkan kesulitan komunikasi.</li>
    <li>**Sistem Sederhana & Demokratis:** Tata bahasa Melayu tidak mengenal tingkatan tutur sosial yang rumit (berbeda dengan bahasa Jawa atau Sunda yang memiliki undak-usuk/tingkatan bahasa kasar, menengah, dan halus). Bahasa Melayu mudah dipelajari oleh siapapun.</li>
    <li>**Keikhlasan dan Kerelaan Suku Lain:** Suku Jawa, Sunda, Madura, dan suku-suku lain dengan sukarela dan lapang dada menerima bahasa Melayu menjadi bahasa persatuan demi integrasi nasional.</li>
    <li>**Kemampuan Psikologis & Fleksibilitas:** Bahasa Melayu memiliki kesanggupan luar biasa untuk menyerap kosakata asing (Arab, Sanskerta, Belanda, Inggris) dan berkembang dinamis menjadi bahasa ilmu pengetahuan modern.</li>
  </ol>

#### 4. Periodisasi Evolusi Ejaan Resmi Bahasa Indonesia
<div class="table-wrap">
  <table>
    <thead><tr><th>Nama Ejaan</th><th>Tahun Berlaku</th><th>Karakteristik & Ciri Huruf Khas</th><th>Contoh Kata</th></tr></thead>
    <tbody>
      <tr><td>**Ejaan Van Ophuijsen**</td><td>1901 – 1947</td><td>Disusun oleh Ch. A. Van Ophuijsen (Belanda). Memakai huruf `oe` untuk /u/, huruf `dj` untuk /j/, `tj` untuk /c/, `ch` untuk /kh/, tanda diakritik trema (ä, ï) dan tanda koma ain.</td><td>*Soerabaia, djoewal, tjoetji, ma'moer*</td></tr>
      <tr><td>**Ejaan Soewandi (Ejaan Republik)**</td><td>1947 – 1972</td><td>Diresmikan Menteri PPK Mr. Soewandi. Mengganti `oe` menjadi `u`. Tanda koma ain diganti huruf `k`. Angka 2 dipakai untuk kata ulang.</td><td>*Surabaja, jual, tjuci, makmur, anak2*</td></tr>
      <tr><td>**Ejaan Yang Disempurnakan (EYD I)**</td><td>1972 – 2015</td><td>Diresmikan Presiden Soeharto. Standardisasi besar-besaran: `dj` -> `j`, `tj` -> `c`, `j` -> `y`, `ch` -> `kh`, `nj` -> `ny`, `sj` -> `sy`. Penulisan kata ulang wajib tanda hubung (-).</td><td>*Surabaya, jual, cuci, makmur, anak-anak*</td></tr>
      <tr><td>**PUEBI (Pedoman Umum Ejaan Bahasa Indonesia)**</td><td>2015 – 2022</td><td>Diterbitkan Badan Bahasa Kemendikbud. Menambahkan diftong `ei`, huruf kapital untuk julukan, aturan huruf tebal.</td><td>*survei, geiser*</td></tr>
      <tr><td>**EYD Edisi V**</td><td>2022 – Sekarang</td><td>Ditetapkan via Kepmendikbudristek No. 396/P/2022. Penambahan monoftong `eu` (Sunda/Aceh), penegasan tanda baca modern, aturan penyerapan istilah ilmiah baru.</td><td>*seuleukeub, sadeu*</td></tr>
    </tbody>
  </table>
</div>


---

### Pertemuan 4: Kaidah Baku EYD Edisi V (Pemakaian Huruf, Kata & Tanda Baca)
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Kaidah Kritis Pemakaian Huruf Kapital
<ul>
  <li>Huruf pertama pada awal kalimat (*Mahasiswa sedang belajar.*).</li>
  <li>Huruf pertama unsur nama orang, termasuk julukan (*Amir Hamzah*, *Ayam Jantan dari Timur*).</li>
  <li>Huruf pertama nama tahun, bulan, hari, dan hari besar/keagamaan (*tahun Masehi, bulan Agustus, hari Jumat, hari Idulfitri*).</li>
  <li>Huruf pertama nama bangsa, suku bangsa, dan bahasa (*bangsa Indonesia, suku Sunda, bahasa Inggris*; catatan: jika menjadi kata turunan, huruf kecil: *mengindonesiakan*, *keinggris-inggrisan*).</li>
  <li>Huruf pertama nama geografi spesifik (*Gunung Merapi, Danau Toba, Selat Sunda, Jalan Sudirman*).<br>
    ⚠️ **Pengecualian Penting UTS:**
    <ul>
      <li>Nama geografi yang BUKAN nama diri ditulis kecil: *berlayar ke teluk, menyeberangi selat, mendaki gunung*.</li>
      <li>Nama geografi yang dipakai sebagai nama jenis makanan/benda ditulis huruf kecil: *jeruk bali, kunci inggris, petai cina, pisang ambon, kacang bogor*.</li>
      <li>Tetapi corak/khas budaya daerah tetap kapital: *batik Solo, tarian Bali, masakan Padang*.</li>
    </ul>
  </li>
</ul>

#### 2. Kaidah Pemakaian Huruf Miring (Italic)
<ul>
  <li>Menuliskan judul buku, majalah, atau surat kabar yang dikutip dalam tulisan (*Majalah Tempo, buku Pengantar Ilmu Komputer*).</li>
  <li>Menegaskan atau mengkhususkan huruf, bagian kata, atau kelompok kata (*Huruf pertama kata abad adalah a.*).</li>
  <li>Menuliskan kata atau ungkapan dalam bahasa daerah atau bahasa asing yang belum dibakukan ke dalam bahasa Indonesia (*Sistem ini menggunakan metode waterfall.*).</li>
</ul>

#### 3. Kaidah Penulisan Kata: Kata Depan vs Awalan
<div class="table-wrap">
  <table>
    <thead><tr><th>Bentuk</th><th>Fungsi Gramatikal</th><th>Aturan Penulisan</th><th>Contoh Penulisan Benar</th><th>Contoh Salah (Jebakan UTS)</th></tr></thead>
    <tbody>
      <tr><td>**Kata Depan (Preposisi) `di`, `ke`, `dari`**</td><td>Menunjukkan tempat keberadaan, arah tujuan, atau asal</td><td>Ditulis **TERPISAH** dengan spasi dari kata yang mengikutinya</td><td>`di kampus`, `di rumah`, `ke Jakarta`, `ke atas`, `dari Bogor`</td><td><span style="color:var(--rose)">diperkuliahan</span>, <span style="color:var(--rose)">dirumah</span>, <span style="color:var(--rose)">kekampus</span></td></tr>
      <tr><td>**Awalan (Prefiks) `di-`, `ke-`**</td><td>Membentuk kata kerja pasif atau kata benda/bilangan</td><td>Ditulis **SERANGKAI** (menyatu tanpa spasi) dengan kata dasarnya</td><td>`ditulis`, `dianalisis`, `dikerjakan`, `ketua`, `kehendak`, `kesatu`</td><td><span style="color:var(--rose)">di tulis</span>, <span style="color:var(--rose)">di analisis</span>, <span style="color:var(--rose)">di kerjakan</span></td></tr>
    </tbody>
  </table>
</div>

#### 4. Kaidah Tanda Baca Esensial (Titik Koma, Titik Dua & Koma)
<ul>
  <li>**Tanda Koma (`,`):**
    <ul>
      <li>Wajib diletakkan di antara unsur-unsur dalam suatu perincian atau pembilangan (*Saya membeli kertas, tinta, dan printer.*). Perhatikan tanda koma sebelum kata "dan" adalah **wajib** dalam EYD!</li>
      <li>Wajib diletakkan di belakang kata atau ungkapan penghubung antarkalimat (*Oleh karena itu, ...*; *Namun, ...*; *Meskipun demikian, ...*; *Jadi, ...*).</li>
    </ul>
  </li>
  <li>**Tanda Titik Dua (`:`):** Digunakan pada akhir suatu pernyataan lengkap yang diikuti rincian atau penjelasan. Jika rincian itu merupakan pelengkap kalimat yang menyatu, tanda titik dua **TIDAK** digunakan (contoh benar: *Kita memerlukan perabot: kursi, meja, dan lemari.* &bull; contoh salah: *Kita memerlukan: kursi, meja, dan lemari.*).</li>
</ul>


---

## 3. Algoritma 1
* **Dosen Pengampu:** Pak Rizki / Pak Rahmat
* **Jadwal & Ruang:** Selasa • 07:30 - 09:10 WIB • Ruang R.4.5-3

### Pertemuan 1: Pengantar Logika Komputasi, Etimologi & Kriteria Algoritma
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Sejarah & Asal-Usul Etimologi Algoritma
<p>Kata **Algoritma** berasal dari pelafalan bangsa barat terhadap nama ilmuwan dan matematikawan muslim terkemuka abad pertengahan (abad ke-9 Masehi), **Abu Ja'far Muhammad bin Musa Al-Khawarizmi** (780–850 M) yang lahir di Khwarazm (sekarang Khiva, Uzbekistan). Melalui kitab monumentalnya *Al-Kitab al-mukhtasar fi hisab al-jabr wa'l-muqabala* (Buku Rangkuman Perhitungan dengan Penyelesaian dan Pengimbangan), beliau meletakkan dasar-dasar ilmu Aljabar dan sistem penomoran desimal dengan angka nol.</p>
<p>Dalam bahasa Latin, namanya diterjemahkan menjadi *Algoritmi*, yang kemudian berevolusi menjadi *algorism* (metode berhitung dengan angka Arab), dan akhirnya menjadi **algorithm** (algoritma).</p>

#### 2. Definisi Formal Algoritma
<ul>
  <li>**KBBI:** *Urutan logis pengambilan putusan untuk pemecahan suatu masalah.*</li>
  <li>**Ilmu Komputer Modern:** Suatu himpunan berhingga dari instruksi-instruksi yang terdefinisi secara jelas, logis, dan sistematis yang mentransformasikan data masukan (*input*) menjadi keluaran (*output*) yang memenuhi spesifikasi yang diinginkan dalam jumlah langkah yang berhingga.</li>
  <li>**Hubungan Program dan Algoritma:**
    <p>Menurut Bapak Pemrograman Terstruktur, **Prof. Niklaus Wirth**:</p>
    <div style="background:var(--surface-elevated); padding:8px 14px; border-left:4px solid var(--primary); font-family:var(--font-mono); font-weight:700;">
      PROGRAM = ALGORITMA + STRUKTUR DATA
    </div>
    <p>Algoritma adalah otak/logika dari penyelesaian masalah, sedangkan bahasa pemrograman adalah alat/kendaraan untuk mengekspresikan algoritma tersebut agar dapat dipahami dan dijalankan oleh prosesor komputer.</p>
  </li>
</ul>

#### 3. 5 Kriteria Wajib Algoritma Baik (Donald E. Knuth)
<p>Dalam mahakaryanya *The Art of Computer Programming*, Donald Ervin Knuth menetapkan 5 kriteria mutlak yang harus dipenuhi oleh setiap algoritma:</p>
<ol>
  <li>**Finiteness (Keterbatasan):** Algoritma harus berakhir (berhenti) setelah melakukan sejumlah langkah komputasi yang berhingga. Algoritma yang berjalan selamanya tanpa akhir (mengalami *infinite loop*) dianggap cacat secara komputasi.</li>
  <li>**Definiteness (Kepastian / Tidak Ambigu):** Setiap langkah instruksi harus didefinisikan secara tepat, gamblang, dan tidak memiliki makna ganda (ambiguitas). Sebagai contoh: instruksi "tambahkan sedikit garam" adalah tidak definitif, sedangkan "tambahkan 5 gram garam" adalah definitif.</li>
  <li>**Input (Masukan):** Algoritma memiliki nol atau lebih masukan (*input*) yang diberikan kepada algoritma sebelum algoritma mulai bekerja atau saat algoritma sedang berjalan. Batasan dan tipe domain input harus didefinisikan dengan jelas.</li>
  <li>**Output (Keluaran):** Algoritma memiliki satu atau lebih keluaran (*output*). Keluaran ini merupakan hasil pemrosesan dan solusi atas masalah yang diselesaikan. Algoritma yang tidak menghasilkan keluaran apapun adalah sia-sia.</li>
  <li>**Effectiveness (Efektivitas / Keterlaksanaan):** Setiap langkah instruksi harus bersifat sederhana, mekanis, dan mendasar sehingga dapat benar-benar dikerjakan oleh komputer atau manusia dalam rentang waktu yang wajar (kompleksitas waktu dan memori yang realistis).</li>
</ol>

#### 4. 3 Metode Penyajian Algoritma
<ol>
  <li>**Deskriptif (Bahasa Alami):** Menuliskan instruksi langkah demi langkah menggunakan kalimat bahasa manusia sehari-hari. Kelemahan: bertele-tele dan rentan ambigu.</li>
  <li>**Pseudocode:** Kode semu yang meniru struktur sintaks bahasa pemrograman tingkat tinggi (seperti Pascal atau C) namun tanpa terikat aturan sintaks compiler yang ketat. Menggunakan kata kunci seperti `READ`, `WRITE`, `IF-THEN-ELSE`, `WHILE-DO`.</li>
  <li>**Flowchart:** Penyajian algoritma menggunakan simbol-simbol grafis terstandar yang dihubungkan dengan garis alir panah untuk menunjukkan arah eksekusi logika.</li>
</ol>


---

### Pertemuan 2: Tipe Data Primitif, Operator Komputasi & Hierarki Presedensi
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Tipe Data Primitif & Karakteristik Komputasi
<div class="table-wrap">
  <table>
    <thead><tr><th>Tipe Data</th><th>Domain & Rentang Nilai</th><th>Ukuran Memori</th><th>Karakteristik & Contoh Nilai</th></tr></thead>
    <tbody>
      <tr><td>**Integer**</td><td>Bilangan bulat negatif, nol, positif: `-32.768` s.d `32.767` (16-bit)</td><td>2 atau 4 byte</td><td>Tidak memuat pecahan desimal. Contoh: `-15, 0, 100`</td></tr>
      <tr><td>**Real / Float**</td><td>Bilangan pecahan / desimal: `2.9e-39` s.d `1.7e38`</td><td>4 atau 8 byte</td><td>Menggunakan titik sebagai pemisah desimal. Contoh: `3.14159, -0.05`</td></tr>
      <tr><td>**Char**</td><td>Satu karakter tunggal kode ASCII (0 - 255)</td><td>1 byte (8-bit)</td><td>Diapit tanda petik tunggal. Contoh: `'A', '9', '%', ' '`</td></tr>
      <tr><td>**String**</td><td>Rangkaian teks / untaian karakter (array of char)</td><td>1 s.d 256 byte</td><td>Diapit tanda petik tunggal. Contoh: `'FTIK Unindra 2026'`</td></tr>
      <tr><td>**Boolean**</td><td>Nilai logika biner: hanya `TRUE` atau `FALSE`</td><td>1 byte</td><td>Hasil dari operasi relasional atau kondisi logika.</td></tr>
    </tbody>
  </table>
</div>

#### 2. Operator Aritmatika, Relasional & Logika
<ul>
  <li>**Operator Aritmatika:** `+` (penjumlahan), `-` (pengurangan), `*` (perkalian), `/` (pembagian real), `DIV` (pembagian bulat), `MOD` (sisa hasil bagi).</li>
  <li>**Operator Relasional (Pembanding):** `=` (sama dengan), `&lt;&gt;` (tidak sama dengan), `&lt;` (kurang dari), `&gt;` (lebih dari), `&lt;=` (kurang dari atau sama dengan), `&gt;=` (lebih dari atau sama dengan). Hasil evaluasi selalu berupa tipe data **Boolean** (True/False).</li>
  <li>**Operator Logika (Aljabar Boolean):**
    <div class="table-wrap">
      <table>
        <thead><tr><th>P</th><th>Q</th><th>NOT P</th><th>P AND Q</th><th>P OR Q</th><th>P XOR Q</th></tr></thead>
        <tbody>
          <tr><td>TRUE</td><td>TRUE</td><td>FALSE</td><td>**TRUE**</td><td>TRUE</td><td>FALSE</td></tr>
          <tr><td>TRUE</td><td>FALSE</td><td>FALSE</td><td>FALSE</td><td>**TRUE**</td><td>**TRUE**</td></tr>
          <tr><td>FALSE</td><td>TRUE</td><td>TRUE</td><td>FALSE</td><td>**TRUE**</td><td>**TRUE**</td></tr>
          <tr><td>FALSE</td><td>FALSE</td><td>TRUE</td><td>FALSE</td><td>FALSE</td><td>FALSE</td></tr>
        </tbody>
      </table>
    </div>
  </li>
</ul>

#### 3. Presedensi Operator (Urutan Tingkat Kekuatan Eksekusi)
<ol>
  <li>Tingkat 1 (Paling Tinggi): Tanda kurung `( ... )`</li>
  <li>Tingkat 2: Operator negasi logika `NOT`, tanda minus unari `-`</li>
  <li>Tingkat 3 (Multiplikatif): `*`, `/`, `DIV`, `MOD`, `AND`</li>
  <li>Tingkat 4 (Aditif): `+`, `-`, `OR`, `XOR`</li>
  <li>Tingkat 5 (Paling Rendah): Operator relasional `=`, `&lt;&gt;`, `&lt;`, `&lt;=`, `&gt;`, `&gt;=`</li>
</ol>
<p>*Contoh Soal UTS:* Hitung nilai ekspresi logika: `(5 + 3 * 2 > 10) AND NOT (4 MOD 2 = 0)`<br>
Langkah: `3 * 2 = 6` -> `5 + 6 = 11` -> `11 > 10` (TRUE). Sisi kanan: `4 MOD 2 = 0` -> `0 = 0` (TRUE) -> `NOT(TRUE)` = FALSE. Maka: `TRUE AND FALSE` = **FALSE**.</p>


---

### Pertemuan 3: Representasi Flowchart & Standar Simbol ANSI
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Definisi & Fungsi Flowchart
<p>**Flowchart (Bagan Alir)** adalah representasi grafis dari langkah-langkah penyelesaian masalah dalam suatu program yang dinyatakan melalui simbol-simbol geometris berstandar ANSI (*American National Standards Institute*) dan dihubungkan oleh garis arah aliran instruksi.</p>
<p>**Fungsi Utama:**</p>
<ul>
  <li>Sebagai cetak biru (blueprint) perancangan program sebelum menulis kode.</li>
  <li>Memudahkan identifikasi kesalahan logika (*logic debugging*).</li>
  <li>Media dokumentasi teknis dan komunikasi alur kerja program kepada tim developer lain.</li>
</ul>

#### 2. Daftar Simbol Baku Flowchart Program (ANSI)
<div class="table-wrap">
  <table>
    <thead><tr><th>Simbol</th><th>Bentuk Geometri</th><th>Nama Baku</th><th>Penjelasan Fungsi & Kaidah Pemakaian</th></tr></thead>
    <tbody>
      <tr><td><span style="font-size:18px;">⬭</span></td><td>Oval / Kapsul</td><td>**Terminator**</td><td>Menandai awal program (`START`/`MULAI`) atau akhir program (`END`/`SELESAI`). Hanya memiliki 1 garis alir keluar (pada Start) atau 1 garis alir masuk (pada End).</td></tr>
      <tr><td><span style="font-size:18px;">▱</span></td><td>Jajar Genjang</td><td>**Input / Output**</td><td>Menunjukkan operasi pembacaan data masukan dari keyboard (`Read/Input`) atau pencetakan keluaran ke layar monitor/printer (`Write/Print`).</td></tr>
      <tr><td><span style="font-size:18px;">▭</span></td><td>Persegi Panjang</td><td>**Process**</td><td>Operasi pengolahan internal sistem komputasi (perhitungan aritmatika, manipulasi string, penugasan variabel).</td></tr>
      <tr><td><span style="font-size:18px;">◇</span></td><td>Belah Ketupat (Diamond)</td><td>**Decision**</td><td>Pengambilan keputusan percabangan berdasarkan kondisi Boolean. Memiliki 1 garis masuk dan minimal 2 garis keluar berlabel kondisi (*Ya/Tidak* atau *True/False*).</td></tr>
      <tr><td><span style="font-size:18px;">⬡</span></td><td>Segi Enam (Hexagon)</td><td>**Preparation**</td><td>Inisialisasi variabel, penentuan nilai awal pencacah (counter), atau pemberian dimensi awal array.</td></tr>
      <tr><td><span style="font-size:18px;">○</span></td><td>Lingkaran Kecil</td><td>**On-Page Connector**</td><td>Penghubung alur flowchart yang terputus dalam **satu halaman** yang sama untuk menghindari garis panah yang saling silang. Diisi huruf identitas (A, B, C).</td></tr>
      <tr><td><span style="font-size:18px;">⌂</span></td><td>Segi Lima</td><td>**Off-Page Connector**</td><td>Penghubung alur flowchart yang melompat ke **halaman kertas lain**.</td></tr>
      <tr><td><span style="font-size:18px;">➔</span></td><td>Garis Panah</td><td>**Flowline**</td><td>Menunjukkan arah urutan eksekusi langkah instruksi (dari atas ke bawah atau kiri ke kanan).</td></tr>
    </tbody>
  </table>
</div>


---

### Pertemuan 4: Struktur Dasar Algoritma (Struktur Sequence / Runtunan)
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. 3 Struktur Kontrol Dasar Teori Bohm-Jacopini
<p>Menurut Teorema Struktur **Corrado Böhm dan Giuseppe Jacopini (1966)**, setiap permasalahan komputasi serumit apapun dapat diselesaikan hanya dengan mengombinasikan 3 struktur kendali dasar:</p>
<ol>
  <li>**Struktur Sequence (Runtunan):** Langkah demi langkah dieksekusi secara sekuensial.</li>
  <li>**Struktur Selection (Pemilihan/Percabangan):** Memilih jalur eksekusi berdasarkan kondisi.</li>
  <li>**Struktur Repetition (Perulangan/Iterasi):** Mengulang blok instruksi selama kondisi terpenuhi.</li>
</ol>

#### 2. Karakteristik Mutlak Struktur Runtunan (Sequence)
<ul>
  <li>Instruksi dikerjakan secara berurutan baris demi baris, dimulai dari baris pertama hingga baris terakhir.</li>
  <li>Tiap instruksi dilaksanakan tepat satu kali (tidak ada instruksi yang melompat dan tidak ada yang diulang).</li>
  <li>Urutan instruksi yang dilaksanakan oleh prosesor sama persis dengan urutan instruksi yang tertulis dalam teks algoritma.</li>
  <li>Akhir dari instruksi terakhir menandai selesainya eksekusi algoritma.</li>
</ul>

#### 3. Studi Kasus Kritis: Algoritma Penukaran Nilai (Swap Values)
<p>Masalah: Diberikan dua variabel $A = 10$ dan $B = 25$. Tukarlah nilainya sehingga $A = 25$ dan $B = 10$.</p>
<div class="code-box">
  <div class="code-header">
    <span class="code-lang">Analisis Kesalahan Logika Pemula vs Solusi Benar</span>
  </div>
  ```pascal
{ SALAH FATAL (Data B hilang tertimpa) }
A := B;    { Nilai A sekarang menjadi 25. Nilai asli A (10) lenyap dari memori! }
B := A;    { Nilai B diisi A (yang sudah 25). Hasil akhir: A=25, B=25 (GAGAL!) }

{ SOLUSI BENAR (Menggunakan Variabel Penampung Sementara 'Temp') }
Temp := A; { 1. Amankan nilai asli A (10) ke dalam variabel Temp }
A := B;    { 2. Salin nilai B (25) ke dalam variabel A (A sekarang 25) }
B := Temp; { 3. Salin nilai asli A yang ada di Temp (10) ke dalam B (B sekarang 10) }
{ Hasil Akhir: A=25, B=10 (BERHASIL!) }
```
</div>


---

## 4. Pemrograman 1 (Pascal)
* **Dosen Pengampu:** Pak Zaeni Miftah / Pak Rizki
* **Jadwal & Ruang:** Selasa • 09:10 - 10:50 WIB • Ruang R.4.5-3

### Pertemuan 1: Filosofi Bahasa Pascal & Struktur Anatomi Program
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Sejarah & Filosofi Desain Bahasa Pascal
<p>Bahasa Pascal dirancang oleh **Prof. Niklaus Wirth** di Eidgenössische Technische Hochschule (ETH) Zurich, Swiss pada tahun 1970. Nama Pascal diabadikan untuk menghormati **Blaise Pascal**, filsuf dan matematikawan Prancis penemu kalkulator mekanik roda putar pertama di dunia (*Pascaline*, 1642).</p>
<p>**Ciri Khas Bahasa Pascal:**</p>
<ul>
  <li>**Terstruktur & Prosedural:** Mendorong modularitas kode menggunakan prosedur dan fungsi.</li>
  <li>**Explicit Declaration:** Setiap variabel, konstanta, dan tipe data wajib dideklarasikan di awal blok deklarasi sebelum digunakan dalam blok pernyataan. Pascal menolak variabel liar yang tiba-tiba muncul di tengah eksekusi.</li>
  <li>**Strongly Typed:** Penggunaan tipe data sangat ketat. Anda tidak dapat memasukkan tipe string ke dalam variabel integer tanpa konversi eksplisit. Hal ini mencegah bug memori saat runtime.</li>
  <li>**Case-Insensitive:** Pascal tidak membedakan huruf besar dan huruf kecil. Kata `PROGRAM`, `Program`, dan `program`, serta variabel `NilaiAkhir` dan `nilaiahkir` diperlakukan sama persis oleh kompiler.</li>
</ul>

#### 2. Anatomi Baku Program Pascal
<div class="code-box">
  <div class="code-header">
    <span class="code-lang">Pascal Structure (FPC 3.2.2)</span>
    <button class="copy-btn" onclick="copyCode(this)">Salin</button>
  </div>
  ```pascal
program HitungGajiKaryawan; { 1. Kepala Program (Wajib titik koma ';') }

uses
  crt;                      { 2. Uses Clause: Unit CRT untuk manipulasi layar konsol }

const
  TUNJANGAN_MAKAN = 250000; { 3. Blok Deklarasi Konstanta (Nilai Tetap) }
  PAJAK_PERSEN = 0.05;

type
  HurufMutu = char;         { 4. Blok Deklarasi Tipe Data Bentukan }

var
  Nama : string[40];        { 5. Blok Deklarasi Variabel }
  GajiPokok, GajiBersih : real;
  HariKerja : integer;

begin                       { 6. Awal Blok Pernyataan Utama }
  clrscr;                   { Membersihkan layar output terminal }
  
  write('Masukkan Nama Karyawan : ');
  readln(Nama);
  write('Masukkan Gaji Pokok    : Rp');
  readln(GajiPokok);
  
  GajiBersih := GajiPokok + TUNJANGAN_MAKAN - (GajiPokok * PAJAK_PERSEN);
  
  writeln('---------------------------------------');
  writeln('Karyawan Bernama    : ', Nama);
  writeln('Total Gaji Diterima : Rp', GajiBersih:0:2);
  
  readln;                   { Menahan jendela terminal agar tidak tertutup otomatis }
end.                        { 7. Akhir Program Utama (WAJIB DIAKHIRI TANDA TITIK '.') }
```
</div>


---

### Pertemuan 2: Variabel, Konstanta, Tipe Data & Operator Penugasan
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Aturan Penamaan Pengenal (Identifier) di Pascal
<ul>
  <li>Karakter pertama wajib berupa huruf abjad (`A-Z`, `a-z`) atau garis bawah (*underscore* `_`). Tidak boleh diawali oleh angka!</li>
  <li>Karakter kedua dan seterusnya dapat berupa kombinasi huruf, angka, atau underscore.</li>
  <li>**Dilarang Menggunakan Spasi:** Gunakan pola *camelCase* (contoh: `gajiBersih`) atau underscore (contoh: `gaji_bersih`).</li>
  <li>**Dilarang Menggunakan Simbol Khusus:** Karakter seperti `-`, `+`, `*`, `/`, `@`, `#`, `$`, `%`, `^`, `&` tidak diizinkan karena merupakan operator reserved.</li>
  <li>**Dilarang Menggunakan Reserved Words:** Kata kunci cadangan compiler seperti `program`, `var`, `begin`, `end`, `if`, `then`, `else`, `integer`, `real` tidak boleh dijadikan nama variabel.</li>
</ul>

#### 2. Operator Aritmatika & Perbedaan Kritis Pembagian di Pascal
<div class="table-wrap">
  <table>
    <thead><tr><th>Operator</th><th>Nama Operasi</th><th>Tipe Data Masukan</th><th>Tipe Data Hasil</th><th>Contoh Evaluasi</th></tr></thead>
    <tbody>
      <tr><td>`+`</td><td>Penjumlahan</td><td>Integer atau Real</td><td>Mengikuti tipe operand</td><td>`10 + 5 = 15`</td></tr>
      <tr><td>`-`</td><td>Pengurangan</td><td>Integer atau Real</td><td>Mengikuti tipe operand</td><td>`10 - 3 = 7`</td></tr>
      <tr><td>`*`</td><td>Perkalian</td><td>Integer atau Real</td><td>Mengikuti tipe operand</td><td>`4 * 5 = 20`</td></tr>
      <tr><td>`/`</td><td>**Pembagian Real (Pecahan)**</td><td>Integer atau Real</td><td>**SELALU REAL**</td><td>`7 / 2 = 3.50000000000000E+000`</td></tr>
      <tr><td>`div`</td><td>**Pembagian Bulat (Truncation)**</td><td>Wajib Integer</td><td>**INTEGER**</td><td>`7 div 2 = 3` (membuang 0.5)</td></tr>
      <tr><td>`mod`</td><td>**Sisa Hasil Bagi (Modulo)**</td><td>Wajib Integer</td><td>**INTEGER**</td><td>`7 mod 2 = 1`</td></tr>
      <tr><td>`:=`</td><td>**Assignment (Penugasan)**</td><td>Variabel di sisi kiri</td><td>-</td><td>`x := 100;`</td></tr>
    </tbody>
  </table>
</div>
> [!WARNING]
> **⚠️ Jebakan Ujian Pascal: Tipe Hasil Pembagian Real**
> Jika Anda mendeklarasikan variabel `Hasil : integer;` kemudian menuliskan `Hasil := 10 / 2;`, kompiler Free Pascal akan mengeluarkan pesan kesalahan: **Error: Incompatible types: got "Extended" expected "LongInt"**. Mengapa? Karena operator garis miring tunggal (`/`) SELALU menghasilkan tipe bilangan berkoma (Real/Extended) meskipun hasil pembagiannya bulat! Untuk bilangan bulat, Anda wajib menggunakan operator `div` (contoh: `Hasil := 10 div 2;`).


---

### Pertemuan 3: Instruksi Input & Output (I/O) dan Pemformatan Real
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Perbedaan Mendasar write() vs writeln()
<ul>
  <li>`write(parameter);` : Mencetak isi parameter (teks string, nilai variabel, atau konstanta) ke layar monitor. Setelah mencetak, **kursor output tetap berada tepat di sebelah kanan karakter terakhir** yang dicetak (tidak membuat baris baru).</li>
  <li>`writeln(parameter);` : Merupakan singkatan dari *write line*. Mencetak isi parameter ke layar, lalu **otomatis memindahkan kursor ke awal baris baru berikutnya** (menambahkan karakter Enter / Newline).</li>
  <li>`writeln;` (tanpa parameter): Berfungsi mencetak baris kosong (menggeser kursor ke baris baru).</li>
</ul>

#### 2. Perbedaan Mendasar read() vs readln()
<ul>
  <li>`read(variabel);` : Membaca data masukan dari keyboard ke dalam variabel penampung. Posisi kursor pembacaan berhenti tepat setelah karakter terakhir dibaca tanpa membuang karakter Enter. Instruksi pembacaan berikutnya akan terus membaca buffer yang sama.</li>
  <li>`readln(variabel);` : Merupakan singkatan dari *read line*. Membaca masukan data dari keyboard hingga pengguna menekan tombol Enter, lalu **membuang sisa buffer Enter tersebut dan memindahkan pembacaan ke baris berikutnya**.</li>
  <li>*Rekomendasi Praktikum Dosen:* Selalu gunakan `readln` untuk membaca input keyboard mahasiswa agar buffer input tidak macet.</li>
</ul>

#### 3. Format Angka Real (Formatting Float Output)
<p>Secara default, jika variabel real dicetak langsung tanpa pemformatan, Pascal akan menampilkannya dalam notasi eksponensial ilmiah yang membingungkan orang awam (misal: `3.50000000000000E+001` untuk angka 35).</p>
<p>Untuk menampilkannya dalam format desimal baku, gunakan sintaks pemformatan titik dua ganda:</p>
<div style="background:var(--surface-elevated); padding:8px 14px; border-left:4px solid var(--primary); font-family:var(--font-mono); font-weight:700;">
  variabel_real : lebar_kolom_total : jumlah_digit_desimal
</div>
<p>**Contoh Pemakaian:**</p>
```text

writeln(NilaiAkhir:0:2);  { Mencetak dengan 2 digit di belakang koma, misal: 87.50 }
writeln(NilaiAkhir:8:2);  { Mencetak rata kanan selebar 8 karakter, misal: '   87.50' }
writeln(NilaiAkhir:0:0);  { Mencetak angka bulat tanpa angka di belakang koma, misal: 88 }

```


---

### Pertemuan 4: Struktur Kontrol Percabangan (IF-THEN, IF-THEN-ELSE)
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Struktur Percabangan Tunggal (IF - THEN)
<p>Digunakan jika sebuah blok instruksi hanya akan dieksekusi jika kondisi bernilai TRUE, dan tidak melakukan apa-apa jika kondisi FALSE.</p>
```text

if (Kondisi_Boolean) then
  Pernyataan_Tunggal;

{ Jika pernyataan lebih dari satu (Compound Statement), wajib diapit BEGIN - END; }
if (Kondisi_Boolean) then
begin
  Pernyataan_1;
  Pernyataan_2;
end;

```

#### 2. Struktur Percabangan Ganda (IF - THEN - ELSE)
<p>Digunakan untuk memilih satu dari dua kemungkinan jalur alternatif berdasarkan hasil evaluasi kondisi.</p>
> [!CAUTION]
> **🚨 ATURAN EMAS KOMPILER PASCAL: PANTANGAN TITIK KOMA SEBELUM ELSE!**
> Di dalam tata bahasa sintaks Pascal, tanda titik koma (`;`) bertindak sebagai **Pemisah Instruksi (Statement Separator)**. Struktur `IF ... THEN ... ELSE ...` diakui oleh kompiler sebagai **SATU KALIMAT UTUH**.<br>
  Jika Anda memberi tanda titik koma tepat sebelum kata kunci `else`, kompiler menganggap kalimat IF telah selesai! Akibatnya, saat kompiler membaca kata `else`, kompiler akan langsung melempar pesan kesalahan fatal: **Fatal: Syntax error, ";" expected but "ELSE" found**.
<div class="code-box">
  <div class="code-header"><span class="code-lang">Contoh Lengkap Program Kelulusan Mahasiswa</span><button class="copy-btn" onclick="copyCode(this)">Salin</button></div>
  ```pascal
program CekKelulusan;
uses crt;

var
  Nama : string;
  NilaiUTS, NilaiUAS, NilaiAkhir : real;

begin
  clrscr;
  write('Masukkan Nama Mahasiswa : '); readln(Nama);
  write('Masukkan Nilai UTS       : '); readln(NilaiUTS);
  write('Masukkan Nilai UAS       : '); readln(NilaiUAS);
  
  NilaiAkhir := (0.4 * NilaiUTS) + (0.6 * NilaiUAS);
  writeln('------------------------------------------');
  writeln('Nilai Akhir : ', NilaiAkhir:0:2);
  
  if (NilaiAkhir >= 60.0) then
    writeln('Status : SELAMAT ANDA LULUS!') { <--- PERHATIKAN: TIDAK ADA TITIK KOMA DI SINI! }
  else
    writeln('Status : MOHON MAAF ANDA REMEDIAL');
    
  readln;
end.
```
</div>


---

## 5. Bahasa Inggris 1
* **Dosen Pengampu:** Tim Dosen Bahasa Inggris FTIK Unindra
* **Jadwal & Ruang:** Kamis • 07:30 - 09:10 WIB • Ruang R.4.4-4

### Chapter I: Self-Introduction, Professional Profiling & Daily Activities
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Formal vs Informal Self-Introduction in Academic & Tech Settings
<ul>
  <li>**Formal Introduction (Academic & Workplace):**
    <p>*"Good morning, Ladies and Gentlemen. Allow me to introduce myself. My name is Muhammad Haikel Saleh. I am a first-semester undergraduate student majoring in Information Systems at Universitas Indraprasta PGRI. I specialize in frontend development and database design."*</p>
  </li>
  <li>**Key Phrases for Personal Profiling:**
    <ul>
      <li>*"I am currently studying..."* / *"I am enrolled in..."*</li>
      <li>*"My main field of interest is software architecture..."*</li>
      <li>*"I spend most of my time coding in Pascal and Python..."*</li>
    </ul>
  </li>
</ul>

#### 2. Grammar Focus: Simple Present Tense (Habitual Actions & General Truths)
<div class="table-wrap">
  <table>
    <thead><tr><th>Pola Kalimat</th><th>Subjek Jamak (I / You / We / They)</th><th>Subjek Tunggal Orang Ketiga (He / She / It)</th></tr></thead>
    <tbody>
      <tr><td>**Verbal (+)**</td><td>`S + Verb 1 + Object`<br>*"They compile the Pascal code every day."*</td><td>`S + Verb 1(-s/-es) + Object`<br>*"He compiles the Pascal code every day."*</td></tr>
      <tr><td>**Verbal (-)**</td><td>`S + do not (don't) + Verb 1 + Object`<br>*"We do not encounter syntax errors."*</td><td>`S + does not (doesn't) + Verb 1 + Object`<br>*"She does not encounter syntax errors."*</td></tr>
      <tr><td>**Verbal (?)**</td><td>`Do + S + Verb 1 + Object?`<br>*"Do you attend the algorithm lab session?"*</td><td>`Does + S + Verb 1 + Object?`<br>*"Does he understand Boolean logic?"*</td></tr>
      <tr><td>**Nominal**</td><td>`S + are / am + Complement`<br>*"I am an IT student."* / *"We are diligent."*</td><td>`S + is + Complement`<br>*"The compiler is fast."*</td></tr>
    </tbody>
  </table>
</div>

#### 3. Aturan Penambahan Akhiran `-s / -es` pada Verb 3rd Person Singular
<ul>
  <li>Verb berakhiran `-ch, -sh, -s, -x, -z` atau `-o` ditambah `-es`: *watch -> watches*, *fix -> fixes*, *pass -> passes*, *go -> goes*, *do -> does*.</li>
  <li>Verb berakhiran huruf konsonan + `y`, ubah `y` menjadi `-ies`: *study -> studies*, *modify -> modifies*.</li>
  <li>Verb berakhiran huruf vokal + `y`, cukup ditambah `-s`: *play -> plays*, *buy -> buys*.</li>
</ul>

#### 4. Adverbs of Frequency & Syntactic Placement
<p>Keterangan frekuensi rutinitas harian dan letak sintaksisnya:</p>
<ul>
  <li>*Always (100%), Usually (80%), Often (70%), Sometimes (50%), Seldom/Rarely (20%), Never (0%)*.</li>
  <li>**Aturan Letak:** Terletak **SEBELUM** Main Verb (*"Haikel <u>always studies</u> algorithm before the exam"*) atau **SETELAH** Auxiliary / To Be (*"He <u>is always</u> punctual in attending lectures"*).</li>
</ul>


---

### Chapter II: Procedural Texts & Technical Instructions (How to Make Something)
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Generic Structure of Procedural Text
<ol>
  <li>**Goal / Aim:** Menyatakan tujuan atau sasaran tugas yang akan dicapai (seringkali dijadikan judul: *"How to Set Up Free Pascal Compiler on Windows 11"*).</li>
  <li>**Materials / Tools / Prerequisites:** Daftar perangkat keras, perangkat lunak, dependensi, atau pustaka yang diperlukan sebelum memulai (contoh: *PC with Windows OS, FPC 3.2.2 installer file, 500 MB free storage*).</li>
  <li>**Steps / Methods:** Serangkaian instruksi kerja yang disusun secara runut kronologis dan tidak boleh diacak-acak.</li>
</ol>

#### 2. Language Features of Procedural Texts
<ul>
  <li>**Imperative Sentences (Kalimat Perintah):** Dimulai langsung dengan Kata Kerja Bentuk Pertama (Verb 1) tanpa subjek nominal:
    <ul>
      <li>*"Download the executable installer from the official website."*</li>
      <li>*"Extract the zip file to the local directory."*</li>
      <li>*"Do not close the terminal window while compiling."* (Negative imperative).</li>
    </ul>
  </li>
  <li>**Temporal Conjunctions & Sequence Connectors:**
    <p>*First, ...* -> *Second, ...* -> *Then, ...* -> *Next, ...* -> *After that, ...* -> *Finally, ...*</p>
  </li>
  <li>**Action Verbs in Computing:** *install, execute, initialize, configure, debug, compile, deploy, terminate*.</li>
</ul>


---

### Chapter III: Recount Texts & Talking about Past Holiday / Experiences
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Grammar Focus: Simple Past Tense (Past Incident / Historical Fact)
<p>Digunakan untuk menceritakan aktivitas, kejadian, atau peristiwa yang telah dimulai dan selesai di masa lampau pada titik waktu spesifik yang definitif.</p>
<div class="table-wrap">
  <table>
    <thead><tr><th>Pola Kalimat</th><th>Bentuk Pola</th><th>Contoh Kalimat Akademis / Liburan</th></tr></thead>
    <tbody>
      <tr><td>**Verbal (+)**</td><td>`S + Verb 2 (Past Form) + Object + Time Adverb`</td><td>*"Our class visited the National Museum last month."*</td></tr>
      <tr><td>**Verbal (-)**</td><td>`S + did not (didn't) + Verb 1 + Object`</td><td>*"We did not study programming during the holiday."*</td></tr>
      <tr><td>**Verbal (?)**</td><td>`Did + S + Verb 1 + Object?`</td><td>*"Did you write the project proposal yesterday?"*</td></tr>
      <tr><td>**Nominal (+)**</td><td>`S + was / were + Complement (Adj/Noun)`</td><td>*"The assignment was very challenging."* / *"They were in Bandung."*</td></tr>
    </tbody>
  </table>
</div>

#### 2. Regular vs Irregular Verbs (50 Essential Verbs in Tech & Daily Life)
<div class="table-wrap">
  <table>
    <thead><tr><th>Verb 1 (Infinitive)</th><th>Verb 2 (Simple Past)</th><th>Verb 3 (Past Participle)</th><th>Makna Bahasa Indonesia</th></tr></thead>
    <tbody>
      <tr><td>Go</td><td>Went</td><td>Gone</td><td>Pergi</td></tr>
      <tr><td>Write</td><td>Wrote</td><td>Written</td><td>Menulis</td></tr>
      <tr><td>Build</td><td>Built</td><td>Built</td><td>Membangun</td></tr>
      <tr><td>See</td><td>Saw</td><td>Seen</td><td>Melihat</td></tr>
      <tr><td>Take</td><td>Took</td><td>Taken</td><td>Mengambil / Mengikuti Ujian</td></tr>
      <tr><td>Find</td><td>Found</td><td>Found</td><td>Menemukan</td></tr>
      <tr><td>Run</td><td>Ran</td><td>Run</td><td>Menjalankan program</td></tr>
      <tr><td>Read</td><td>Read /rɛd/</td><td>Read /rɛd/</td><td>Membaca</td></tr>
    </tbody>
  </table>
</div>


---

### Chapter IV: Talking about Future Intentions & Planning (Will vs Be Going To)
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Komparasi Gramatikal: WILL vs BE GOING TO
<div class="table-wrap">
  <table>
    <thead><tr><th>Aspek Pembeda</th><th>WILL (Modal Auxiliary)</th><th>BE GOING TO (Semi-Modal)</th></tr></thead>
    <tbody>
      <tr><td>**Struktur Rumus**</td><td>`S + will + Verb 1 + Object`</td><td>`S + am / is / are + going to + Verb 1 + Object`</td></tr>
      <tr><td>**Waktu Pengambilan Niat / Keputusan**</td><td>**Spontan (On the spot):** Keputusan baru saja diputuskan pada saat berbicara tanpa rencana sebelumnya.</td><td>**Rencana Terencana (Pre-meditated plan):** Sudah dipikirkan, dirancang, dan diniatkan sebelum saat berbicara.</td></tr>
      <tr><td>**Contoh Niat**</td><td>*"Someone is ringing the doorbell. I will open the door."*</td><td>*"I am going to submit my algorithm project next Tuesday because I finished it yesterday."*</td></tr>
      <tr><td>**Sifat Prediksi Masa Depan**</td><td>**Prediksi Subjektif:** Berdasarkan opini pribadi, harapan, firasat, atau dugaan tanpa bukti fisik konkret.</td><td>**Prediksi Berbasis Bukti Nyata:** Ada tanda-tanda atau bukti fisik konkret yang sedang terlihat saat ini.</td></tr>
      <tr><td>**Contoh Prediksi**</td><td>*"I think artificial intelligence will transform education in 2030."*</td><td>*"Look at the dark clouds gathering above! It is going to rain in a few minutes."*</td></tr>
      <tr><td>**Fungsi Khusus Lainnya**</td><td>Janji (*"I will always help you"*), Penawaran bantuan (*"Will you take a cup of coffee?"*), Penolakan (*"The laptop will not boot"*).</td><td>Peristiwa tak terelakkan yang segera terjadi di depan mata (*"Watch out! The glass is going to fall!"*).</td></tr>
    </tbody>
  </table>
</div>


---

## 6. Matematika Dasar
* **Dosen Pengampu:** Dr. Munali, M.Pd.
* **Jadwal & Ruang:** Kamis • 09:10 - 10:50 WIB • Ruang R.4.4-4

### Pertemuan 1 & 2: Sistem Bilangan Real, Pertidaksamaan & Nilai Mutlak
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Hierarki & Klasifikasi Himpunan Bilangan
<p>Dalam analisis matematika dasar, sistem bilangan terstruktur secara hierarkis:</p>
$$\mathbb{N} \subset \mathbb{W} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$$
<ul>
  <li>**Bilangan Asli ($\mathbb{N}$ - Natural Numbers):** $\{1, 2, 3, 4, ...\}$.</li>
  <li>**Bilangan Cacah ($\mathbb{W}$ - Whole Numbers):** $\{0, 1, 2, 3, ...\}$.</li>
  <li>**Bilangan Bulat ($\mathbb{Z}$ - Integers):** $\{..., -3, -2, -1, 0, 1, 2, 3, ...\}$.</li>
  <li>**Bilangan Rasional ($\mathbb{Q}$):** Bilangan yang dapat dinyatakan dalam bentuk pecahan $\frac{a}{b}$ dengan $a, b \in \mathbb{Z}$ dan $b \neq 0$. Memiliki representasi desimal berhenti (misal $0.75$) atau desimal berulang tak hingga (misal $0.333...$).</li>
  <li>**Bilangan Irasional:** Bilangan yang tidak dapat dinyatakan dalam pecahan $\frac{a}{b}$. Desimal tak berulang dan tak terhingga (contoh: $\sqrt{2} \approx 1.4142...$, $\pi \approx 3.14159...$, $e \approx 2.71828...$).</li>
  <li>**Bilangan Real ($\mathbb{R}$):** Gabungan himpunan seluruh bilangan rasional dan irasional yang memenuhi garis bilangan kontinu.</li>
</ul>

#### 2. Pertidaksamaan Aljabar & Teorema Pembalikan Tanda
<p>Pertidaksamaan adalah pernyataan matematis yang memuat relasi pembanding ($<, >, \le, \ge$).</p>
> [!CAUTION]
> **🚨 TEOREMA EMAS PERTIDAKSAMAAN: PEMBALIKAN TANDA KETAKSAMAAN**
> Jika kedua ruas dari suatu pertidaksamaan **dikalikan atau dibagi oleh suatu bilangan negatif**, maka **arah tanda ketaksamaan WAJIB DIBALIK**!<br>
  $$\text{Jika } a < b \text{ dan } c < 0, \text{ maka } a \cdot c > b \cdot c \quad \text{dan} \quad \frac{a}{c} > \frac{b}{c}$$
<p>**Contoh Soal Langkah Demi Langkah:**</p>
<p>Selesaikan pertidaksamaan: $-3x + 5 \le 14$</p>
<ol>
  <li>Kurangkan kedua ruas dengan 5: $-3x \le 14 - 5 \iff -3x \le 9$.</li>
  <li>Bagi kedua ruas dengan bilangan negatif $-3$ (TANDA DIBALIK!):
    $$x \ge \frac{9}{-3} \iff x \ge -3$$
  </li>
  <li>Himpunan Penyelesaian (HP): $HP = \{x \mid x \ge -3, x \in \mathbb{R}\}$ atau dalam notasi interval tertutup: $[-3, \infty)$.</li>
</ol>

#### 3. Pertidaksamaan Nilai Mutlak (|x|)
<p>Nilai mutlak menyatakan jarak suatu bilangan dari titik 0 pada garis bilangan (selalu bernilai non-negatif $|x| \ge 0$).</p>
<div class="table-wrap">
  <table>
    <thead><tr><th>Sifat Bentuk Nilai Mutlak</th><th>Ekuivalensi Rumus Penyelesaian</th><th>Interpretasi Geometris</th></tr></thead>
    <tbody>
      <tr><td>**$|x| < a$ (dengan $a > 0$)**</td><td>$$-a < x < a$$</td><td>Jarak $x$ ke titik 0 kurang dari $a$ (daerah di dalam pita interval).</td></tr>
      <tr><td>**$|x| > a$ (dengan $a > 0$)**</td><td>$$x < -a \quad \text{atau} \quad x > a$$</td><td>Jarak $x$ ke titik 0 lebih jauh dari $a$ (daerah di sayap luar).</td></tr>
      <tr><td>**$|f(x)| \le |g(x)|$**</td><td>$$(f(x) + g(x))(f(x) - g(x)) \le 0$$</td><td>Penyelesaian menggunakan rumus selisih kuadrat $a^2 - b^2 \le 0$.</td></tr>
    </tbody>
  </table>
</div>


---

### Pertemuan 3: Persamaan Garis Lurus, Gradien & Hubungan Garis
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Konsep Gradien (Kemiringan Garis)
<p>Gradien (dilambangkan $m$) adalah ukuran kemiringan atau kecuraman suatu garis terhadap sumbu horizontal $X$. Gradien merupakan rasio perubahan nilai ordinat ($\Delta y$) terhadap perubahan absis ($\Delta x$):</p>
$$m = \frac{\Delta y}{\Delta x} = \frac{y_2 - y_1}{x_2 - x_1}$$

#### 2. Bentuk-Bentuk Persamaan Garis Lurus
<ol>
  <li>**Bentuk Eksplisit:** $y = mx + c$, di mana $m$ adalah gradien dan $c$ adalah titik potong sumbu $Y$ di koordinat $(0, c)$.</li>
  <li>**Bentuk Umum (Implisit):** $Ax + By + C = 0$. Gradien garis ini adalah:
    $$m = -\frac{A}{B}$$
  </li>
  <li>**Persamaan Garis Melalui Titik $(x_1, y_1)$ dengan Gradien $m$:**
    $$y - y_1 = m(x - x_1)$$
  </li>
  <li>**Persamaan Garis Melalui Dua Titik $(x_1, y_1)$ dan $(x_2, y_2)$ :**
    $$\frac{y - y_1}{y_2 - y_1} = \frac{x - x_1}{x_2 - x_1}$$
  </li>
</ol>

#### 3. Hubungan Posisi Antara Dua Garis Lurus
<ul>
  <li>**Dua Garis Sejajar ($g_1 \parallel g_2$):** Memiliki kemiringan yang sama persis sehingga kedua garis tidak akan pernah berpotongan:
    $$m_1 = m_2$$
  </li>
  <li>**Dua Garis Tegak Lurus ($g_1 \perp g_2$):** Berpotongan membentuk sudut siku-siku $90^\circ$. Hasil kali kedua gradiennya sama dengan $-1$:
    $$m_1 \cdot m_2 = -1 \iff m_2 = -\frac{1}{m_1}$$
  </li>
</ul>

#### 4. Pembahasan Soal Kontekstual Kuliah Dr. Munali
> [!TIP]
> **✈️ Soal Kontekstual Penerbangan (Slide 7 Dr. Munali)**
> <p>**Soal:** Suatu pesawat A bergerak melalui koordinat $(0,4)$ dan $(4,6)$. Pesawat B bergerak melalui koordinat $(4,4)$ dan $(8,6)$. Hitung gradien masing-masing pesawat dan simpulkan hubungan lintasannya!</p>
  <p>**Penyelesaian Rinci:**</p>
  <ol>
    <li>Gradien Pesawat A:
      $$m_A = \frac{y_2 - y_1}{x_2 - x_1} = \frac{6 - 4}{4 - 0} = \frac{2}{4} = \frac{1}{2}$$
    </li>
    <li>Gradien Pesawat B:
      $$m_B = \frac{y_2 - y_1}{x_2 - x_1} = \frac{6 - 4}{8 - 4} = \frac{2}{4} = \frac{1}{2}$$
    </li>
    <li>**Kesimpulan:** Karena $m_A = m_B = \frac{1}{2}$, maka lintasan terbang pesawat A dan pesawat B adalah **SEJAJAR** ($g_A \parallel g_B$). Kedua pesawat terbang pada arah koridor yang sama dan tidak akan bertabrakan dalam kondisi lintasan tersebut.</li>
  </ol>


---

### Pertemuan 3
- [ ] *Sudah disalin ke lembar binder fisik*



---

### Pertemuan 4: Eksponen, Bentuk Akar & Logaritma
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. 8 Sifat Utama Eksponen (Bilangan Berpangkat)
<ol>
  <li>$a^m \cdot a^n = a^{m+n}$ (Perkalian basis sama: pangkat dijumlahkan).</li>
  <li>$\frac{a^m}{a^n} = a^{m-n}$ (Pembagian basis sama: pangkat dikurangkan).</li>
  <li>$(a^m)^n = a^{m \cdot n}$ (Pangkat dipangkatkan: pangkat dikalikan).</li>
  <li>$(a \cdot b)^n = a^n \cdot b^n$ (Pangkat perkalian didistribusikan).</li>
  <li>$\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$ dengan $b \neq 0$.</li>
  <li>$a^0 = 1$ untuk setiap $a \neq 0$ (Setiap bilangan real bukan nol berpangkat 0 adalah 1).</li>
  <li>$a^{-n} = \frac{1}{a^n}$ (Pangkat negatif diubah menjadi pecahan positif di penyebut).</li>
  <li>$a^{m/n} = \sqrt[n]{a^m}$ (Pangkat pecahan ekuivalen dengan bentuk radikal akar).</li>
</ol>

#### 2. Operasi Bentuk Akar & Merasionalkan Penyebut
<ul>
  <li>Penjumlahan/Pengurangan: $p\sqrt{a} \pm q\sqrt{a} = (p \pm q)\sqrt{a}$.</li>
  <li>Perkalian Sekawan: $(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$.</li>
  <li>**Teknik Merasionalkan Penyebut Pecahan:**
    <ul>
      <li>Bentuk $\frac{a}{\sqrt{b}}$ dikalikan $\frac{\sqrt{b}}{\sqrt{b}}$:
        $$\frac{a}{\sqrt{b}} = \frac{a\sqrt{b}}{b}$$
      </li>
      <li>Bentuk $\frac{c}{\sqrt{a} + \sqrt{b}}$ dikalikan bentuk sekawan $\frac{\sqrt{a} - \sqrt{b}}{\sqrt{a} - \sqrt{b}}$:
        $$\frac{c}{\sqrt{a} + \sqrt{b}} = \frac{c(\sqrt{a} - \sqrt{b})}{a - b}$$
      </li>
    </ul>
  </li>
</ul>

#### 3. Logaritma: Definisi & 10 Sifat Pokok
<p>**Definisi:** Logaritma adalah invers (kebalikan) dari operasi eksponen. Jika $a^c = b$, maka:</p>
$$^a\log b = c \quad \text{dengan basis } a > 0, a \neq 1, \text{ dan numerus } b > 0$$
<p>**10 Sifat Fundamental Logaritma:**</p>
<ol>
  <li>$^a\log a = 1$</li>
  <li>$^a\log 1 = 0$</li>
  <li>$^a\log (b \cdot c) = ^a\log b + ^a\log c$</li>
  <li>$^a\log \left(\frac{b}{c}\right) = ^a\log b - ^a\log c$</li>
  <li>$^a\log (b^n) = n \cdot ^a\log b$</li>
  <li>$^{a^m}\log (b^n) = \frac{n}{m} \cdot ^a\log b$</li>
  <li>$^a\log b = \frac{^c\log b}{^c\log a}$ (Sifat ganti basis)</li>
  <li>$^a\log b = \frac{1}{^b\log a}$</li>
  <li>$^a\log b \cdot ^b\log c = ^a\log c$ (Sifat rantai)</li>
  <li>$a^{^a\log b} = b$</li>
</ol>


---

## 7. Pendidikan Pancasila
* **Dosen Pengampu:** Tim Dosen Pancasila Unindra
* **Jadwal & Ruang:** Jumat • 07:30 - 09:10 WIB • Ruang R.4.4-1

### Pertemuan 1: Landasan & Tujuan Pendidikan Pancasila di Perguruan Tinggi
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. 4 Pilar Landasan Penyelenggaraan Kuliah Pancasila
<ol>
  <li>**Landasan Historis:** Nilai-nilai Pancasila bukan diciptakan secara mendadak oleh para pendiri bangsa pada tahun 1945, melainkan digali langsung dari bumi pertiwi Indonesia. Nilai-nilai religius, kekeluargaan, kemanusiaan, musyawarah mufakat, dan gotong royong telah hidup, mengakar, dan dipraktikkan oleh nenek moyang bangsa Nusantara selama berabad-abad dalam kehidupan adat istiadat dan kebudayaannya.</li>
  <li>**Landasan Kultural:** Pancasila adalah kristalisasi dari nilai-nilai budaya luhur bangsa Indonesia sendiri. Setiap bangsa di dunia memiliki kepribadian kulturalnya masing-masing. Pancasila menjamin bangsa Indonesia tidak kehilangan identitas kultural dan jati dirinya di tengah arus globalisasi dan gempuran ideologi asing (individualisme, liberalisme, marxisme).</li>
  <li>**Landasan Yuridis:** Berpijak kokoh pada ketentuan hukum positif Indonesia:
    <ul>
      <li>Pembukaan UUD 1945 alinea ke-4 (penetapan 5 sila Pancasila sebagai dasar negara Republik Indonesia).</li>
      <li>**Undang-Undang No. 12 Tahun 2012 tentang Pendidikan Tinggi (Pasal 35 ayat 3):** Menegaskan bahwa kurikulum pendidikan tinggi *wajib* memuat mata kuliah Agama, Pancasila, Kewarganegaraan, dan Bahasa Indonesia.</li>
      <li>Surat Keputusan Dirjen Dikti No. 84/E/KPT/2020 tentang Panduan Pelaksanaan Mata Kuliah Wajib Kurikulum (MKWK).</li>
    </ul>
  </li>
  <li>**Landasan Filosofis:** Pancasila berkedudukan sebagai pandangan hidup bangsa (*Weltanschauung*) dan dasar filsafat negara (*Philosophische Grondslag*). Secara ontologis, epistemologis, dan aksiologis, Pancasila mengandung sistem pemikiran rasional dan filosofis tentang hakikat manusia Indonesia dan tatanan kenegaraan yang adil.</li>
</ol>

#### 2. Tujuan Pendidikan Pancasila bagi Mahasiswa IT & Sistem Informasi
<ul>
  <li>Membentuk kepribadian intelektual yang beriman, bertakwa kepada Tuhan YME, berbudi pekerti luhur, dan berdisiplin tinggi.</li>
  <li>Menumbuhkan etika profesi di bidang teknologi informasi (mencegah cybercrime, kejahatan pembobolan data, korupsi digital, dan ujaran kebencian).</li>
  <li>Membekali mahasiswa dengan daya kritis untuk menyaring hoaks dan pengaruh destruktif di era transformasi digital.</li>
</ul>


---

### Pertemuan 2: Pancasila dalam Lintas Sejarah Bangsa (Era Pra-Kemerdekaan)
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Jejak Nilai Pancasila pada Kerajaan Kuno Nusantara
<ul>
  <li>**Kerajaan Kutai Kertanegara (Kalimantan Timur, 350–400 M):** Prasasti *Yupa* mencatat nilai Ketuhanan dan kedermawanan Raja Mulawarman yang menyedekahkan 20.000 ekor sapi kepada para brahmana (cerminan sila ke-1 dan ke-2).</li>
  <li>**Kemaharajaan Sriwijaya (Sumatera Selatan, Abad VII–XII):**
    <p>Menurut Mr. Muhammad Yamin, Sriwijaya adalah perwujudan *Negara Kebangsaan Pertama*. Mencerminkan nilai persatuan maritim kepulauan, keadilan tata niaga pelayaran, serta toleransi keagamaan yang tinggi (menjadi pusat studi agama Buddha internasional di Asia Tenggara di bawah bimbingan guru agung Dharmapala dan Sakyakirti).</p>
  </li>
  <li>**Kemaharajaan Majapahit (Jawa Timur, Abad XIII–XVI):**
    <p>Di bawah Raja Hayam Wuruk dan Mahapatih Gajah Mada (Sumpah Palapa), Majapahit mewujudkan *Negara Kebangsaan Kedua*.</p>
    <ul>
      <li>**Kitab Negarakertagama (Kakawin Desa Warnana, 1365 M) oleh Mpu Prapanca:** Ditemukan istilah **Pancasila** dalam bahasa Sanskerta yang bermakna "lima asas moral/tata susila" (*Pancasila Krama*): (1) Tidak boleh membunuh, (2) Tidak boleh mencuri, (3) Tidak boleh berzina, (4) Tidak boleh berbohong, (5) Tidak boleh meminum minuman keras yang memabukkan.</li>
      <li>**Kitab Sutasoma oleh Mpu Tantular:** Mencetuskan kalimat abadi yang menjadi semboyan resmi lambang Garuda Indonesia:
        <blockquote style="border-left:4px solid var(--primary); padding:6px 12px; font-style:italic; background:var(--surface-elevated);">
          "Rwaneka dhatu winuwus Buddha Wiswa, Bhinêki rakwa ring apan kena parwanosen, Mangka ng Jinatwa kalawan Siwatatwa tunggal, **Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa**"
        </blockquote>
        Artinya: Walaupun Buddha dan Siwa berbeda, keduanya adalah satu. Berbeda-beda itu, tetapi satu jua; tidak ada kebenaran yang mendua (prinsip persatuan dalam keanekaragaman agama dan suku).
      </li>
    </ul>
  </li>
</ul>

#### 2. Era Penjajahan Barat & Kebangkitan Nasional 1908
<p>Perjuangan kedaerahan sebelum abad ke-20 selalu mengalami kegagalan akibat politik adu domba Belanda (*Devide et Impera*). Berdirinya **Boedi Oetomo** (20 Mei 1908) menandai era baru pergerakan nasional berbasis persatuan intelektual modern, disusul oleh Ikrar **Sumpah Pemuda 1928** yang mengkristalkan ikrar satu tanah air, satu bangsa, dan satu bahasa persatuan.</p>


---

### Pertemuan 3: Perumusan & Pengesahan Pancasila sebagai Dasar Negara
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Sidang BPUPKI I (29 Mei – 1 Juni 1945)
<p>Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan Indonesia (BPUPKI / *Dokuritsu Junbi Cosakai*) dipimpin Dr. K.R.T. Radjiman Wedyodiningrat. Membahas pertanyaan mendasar: *"Apa dasar negara Indonesia merdeka yang akan kita bentuk?"*</p>
<div class="table-wrap">
  <table>
    <thead><tr><th>Tokoh Perumus</th><th>Tanggal Pidato</th><th>Gagasan 5 Dasar Negara yang Diajukan</th></tr></thead>
    <tbody>
      <tr><td>**Mr. Muhammad Yamin**</td><td>29 Mei 1945</td><td>1. Peri Kebangsaan, 2. Peri Kemanusiaan, 3. Peri Ketuhanan, 4. Peri Kerakyatan, 5. Kesejahteraan Rakyat. (Usulan tertulis: Ketuhanan Yang Maha Esa, Kebangsaan Persatuan Indonesia, Rasa Kemanusiaan yang Adil dan Beradab, Kerakyatan yang dipimpin oleh hikmat kebijaksanaan..., Keadilan sosial bagi seluruh rakyat Indonesia).</td></tr>
      <tr><td>**Prof. Dr. Soepomo**</td><td>31 Mei 1945</td><td>Mengajukan **Teori Negara Integralistik (Negara Persatuan)**: Menolak teori individualisme (Eropa barat) dan teori kelas/Marxisme. Negara adalah satu kesatuan organik dengan rakyatnya; mengatasi semua golongan dan agama. 5 Prinsip: 1. Persatuan, 2. Kekeluargaan, 3. Keseimbangan lahir dan batin, 4. Musyawarah, 5. Keadilan rakyat.</td></tr>
      <tr><td>**Ir. Soekarno**</td><td>1 Juni 1945</td><td>Berpidato tanpa teks mencetuskan nama **Pancasila**: 1. Kebangsaan Indonesia (Nasionalisme), 2. Internasionalisme atau Peri-Kemanusiaan, 3. Mufakat atau Demokrasi, 4. Kesejahteraan Sosial, 5. Ketuhanan yang Berkebudayaan.<br>Diperas menjadi **Trisila** (Sosio-Nasionalisme, Sosio-Demokrasi, Ketuhanan) dan diperas lagi menjadi **Ekasila** (Gotong Royong). Hari ini diperingati sebagai **Hari Lahir Pancasila**.</td></tr>
    </tbody>
  </table>
</div>

#### 2. Piagam Jakarta (Jakarta Charter - 22 Juni 1945)
<p>Panitia Sembilan menghasilkan naskah mukadimah yang memuat rumusan sila pertama: *"Ketuhanan dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya"* (dikenal sebagai 'tujuh kata').</p>

#### 3. Sidang Historis PPKI (18 Agustus 1945)
<p>Sore hari 17 Agustus 1945, perwakilan Indonesia bagian timur menyampaikan keberatan terhadap tujuh kata Piagam Jakarta. Demi menjaga persatuan NKRI yang baru lahir sehari, **Drs. Mohammad Hatta** berdialog dengan para tokoh Islam (Ki Bagus Hadikusumo, Wahid Hasyim, Teuku M. Hasan) dan bersepakat mengubah sila pertama menjadi: **"Ketuhanan Yang Maha Esa"**.</p>
<p>**3 Keputusan Pokok Sidang PPKI 18 Agustus 1945:**</p>
<ol>
  <li>Mengesahkan UUD 1945 (termasuk Pembukaan UUD 1945 yang memuat naskah resmi Pancasila yang sah dan berlaku hingga hari ini).</li>
  <li>Memilih Ir. Soekarno sebagai Presiden dan Drs. Mohammad Hatta sebagai Wakil Presiden RI.</li>
  <li>Membentuk Komite Nasional Indonesia Pusat (KNIP) untuk membantu tugas-tugas presiden sebelum terbentuknya MPR/DPR definitif.</li>
</ol>


---

### Pertemuan 4: Dinamika & Dialektika Pancasila Pasca Kemerdekaan
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Periode 1945 – 1950 (Awal Kemerdekaan)
<p>Penerapan Pancasila menghadapi ancaman pemberontakan bersenjata yang berupaya mengganti ideologi negara:</p>
<ul>
  <li>**Pemberontakan PKI Madiun (18 September 1948):** Dipimpin oleh Musso dan Amir Sjarifuddin yang ingin mendirikan Republik Soviet Indonesia berideologi Komunis/Marxisme-Leninisme. Berhasil ditumpas TNI.</li>
  <li>**Pemberontakan DI/TII (Darul Islam / Tentara Islam Indonesia - 1949):** Dipimpin oleh S.M. Kartosuwiryo di Jawa Barat yang memproklamasikan Negara Islam Indonesia (NII) untuk menggantikan Pancasila dengan dasar syariat Islam murni.</li>
</ul>

#### 2. Periode 1950 – 1959 (Era Demokrasi Liberal & UUDS 1950)
<ul>
  <li>Penerapan sistem kabinet parlementer barat menyebabkan instabilitas politik nasional; terjadi pergantian kabinet sebanyak 7 kali dalam kurun waktu 9 tahun.</li>
  <li>Meskipun Pemilu 1955 berlangsung sangat demokratis, Dewan Konstituante mengalami *deadlock* (kebuntuan total) dalam merumuskan UUD baru karena perdebatan tanpa ujung antara blok dasar negara Pancasila vs blok dasar negara Islam.</li>
  <li>Presiden Soekarno mengeluarkan **Dekrit Presiden 5 Juli 1959**: (1) Membubarkan Konstituante, (2) Memberlakukan kembali UUD 1945 dan tidak berlakunya UUDS 1950, (3) Membentuk MPRS dan DPAS.</li>
</ul>

#### 3. Periode 1959 – 1965 (Orde Lama / Demokrasi Terpimpin)
> [!WARNING]
> **⚠️ Penyimpangan Konstitusional Orde Lama terhadap Pancasila**
> <ol>
    <li>Pemusatan kekuasaan mutlak pada figur Presiden Soekarno.</li>
    <li>Pengangkatan Presiden Soekarno sebagai **Presiden Seumur Hidup** oleh MPRS melalui TAP MPRS No. III/MPRS/1963 (bertentangan dengan UUD 1945 pasal 7 tentang masa jabatan 5 tahun).</li>
    <li>Pembubaran DPR hasil Pemilu 1955 oleh Presiden karena menolak RAPBN yang diajukan pemerintah, lalu menggantinya dengan DPR-GR bentukan presiden.</li>
    <li>Penggabungan doktrin **NASAKOM (Nasionalis, Agama, Komunis)** yang menempatkan Partai Komunis Indonesia (PKI) setara dengan ideologi negara. Kebijakan ini berujung pada peristiwa kudeta berdarah **G30S/PKI (30 September 1965)** yang menewaskan 6 jenderal dan 1 perwira TNI AD (Pahlawan Revolusi).</li>
  </ol>


---

## 8. Pendidikan Agama Islam (PAI)
* **Dosen Pengampu:** Tim Dosen PAI Unindra
* **Jadwal & Ruang:** Jumat • 09:10 - 10:50 WIB • Ruang R.4.4-1

### Pertemuan 1: Visi Perkuliahan Islam & Fondasi Tauhid Komprehensif
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Visi, Misi & Tujuan PAI di Perguruan Tinggi
<ul>
  <li>Membentuk sarjana muslim yang memiliki integritas ilmiah, profesional, bertakwa kepada Allah SWT, dan berhiaskan akhlak mulia (*akhlakul karimah*).</li>
  <li>Membangun landasan berpikir berdasar pada dua sumber primer hukum Islam: **Al-Qur'anul Karim** dan **As-Sunnah An-Nabawiyyah Ash-Shahihah**.</li>
  <li>Mewujudkan jiwa antikorupsi, kejujuran intelektual, dan etika tanggung jawab profesional dalam pemanfaatan sains dan teknologi.</li>
</ul>

#### 2. Hakikat & Tiga Dimensi Tauhid (Trilogi Tauhid)
<p>Tauhid secara bahasa berarti mengesakan. Secara terminologi adalah meyakini keesaan Allah SWT dalam segala hal yang menjadi kekhususan bagi-Nya. Menurut para ulama Ahlussunnah wal Jama'ah, tauhid terbagi menjadi 3 dimensi terpadu:</p>
<ol>
  <li>**Tauhid Rububiyyah:**
    <ul>
      <li>*Definisi:* Mengesakan Allah SWT dalam segala perbuatan-Nya sendiri, meyakini bahwa hanya Allah satu-satunya Pencipta (*Al-Khaliq*), Pemilik, Pemelihara, Pengatur alam semesta (*Al-Mudabbir*), dan Pemberi rezeki (*Ar-Raziq*) bagi seluruh makhluk tanpa sekutu.</li>
      <li>*Dalil:* QS. Al-Fatihah: 2 (*"Alhamdulillahi Rabbil 'Alamin"* - Segala puji bagi Allah, Tuhan Semesta Alam).</li>
    </ul>
  </li>
  <li>**Tauhid Uluhiyyah (Tauhid Ibadah):**
    <ul>
      <li>*Definisi:* Mengesakan Allah SWT dalam seluruh perbuatan dan penghambaan hamba-Nya. Meniatkan seluruh ibadah (shalat, doa, nadzar, tawakkal, takut, harap, sembelihan) hanya murni ditujukan kepada Allah SWT semata. Menolak segala bentuk penyekutuan (*syirik*).</li>
      <li>*Dalil:* QS. Adz-Dzariyat: 56 (*"Wamaa khalaqtul jinna wal insa illa liya'buduun"* - Dan tidaklah Aku ciptakan jin dan manusia melainkan agar mereka menyembah-Ku).</li>
    </ul>
  </li>
  <li>**Tauhid Asma wa Shifat:**
    <ul>
      <li>*Definisi:* Menetapkan nama-nama (*Asmaul Husna*) dan sifat-sifat keagungan bagi Allah SWT sebagaimana yang termaktub dalam Al-Qur'an dan Hadits shahih sesuai dengan kebesaran-Nya, tanpa melakukan:
        <ul>
          <li>*Tahrif:* Mengubah lafaz atau makna sifat.</li>
          <li>*Ta'thil:* Meniadakan atau menolak sifat Allah.</li>
          <li>*Takyif:* Mempertanyakan bagaimanakah bentuk hakikat sifat tersebut.</li>
          <li>*Tamtsil:* Menyerupakan sifat Allah dengan makhluk-Nya.</li>
        </ul>
      </li>
      <li>*Dalil:* QS. Asy-Syura: 11 (*"Laisa kamitslihi syai-un wa huwas sami'ul bashir"* - Tidak ada sesuatu pun yang serupa dengan Dia, dan Dialah Yang Maha Mendengar lagi Maha Melihat).</li>
    </ul>
  </li>
</ol>


---

### Pertemuan 2: Aqidah Islam, Makna & 4 Ruang Lingkup Kajian
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Pengertian Aqidah Secara Etimologi & Terminologi
<ul>
  <li>**Etimologi:** Berasal dari kata bahasa Arab: *'aqada - ya'qidu - 'aqidatan* yang bermakna ikatan simpul yang sangat kuat, kukuh, dan sulit dilepas.</li>
  <li>**Terminologi:** Keyakinan dan ketetapan hati yang mantap, mutlak, dan bulat kepada Allah SWT dan perkara-perkara ghaib tanpa ada sedikit pun celah keraguan (*syak*), kebimbangan, atau dugaan di dalam kalbu sanubari seorang muslim.</li>
</ul>

#### 2. Arkanul Iman (6 Rukun Iman)
<p>Aqidah bertumpu pada 6 rukun iman dalam Hadits Jibril: (1) Iman kepada Allah, (2) Iman kepada Malaikat-Malaikat-Nya, (3) Iman kepada Kitab-Kitab-Nya, (4) Iman kepada Rasul-Rasul-Nya, (5) Iman kepada Hari Kiamat, dan (6) Iman kepada Qadha dan Qadar (takdir baik dan buruk berasal dari ketetapan Allah).</p>

#### 3. 4 Ruang Lingkup Aqidah Islam (Model Syaikh Hasan Al-Banna)
<div class="table-wrap">
  <table>
    <thead><tr><th>Ruang Lingkup</th><th>Fokus Pembahasan</th><th>Objek Kajian Spesifik</th></tr></thead>
    <tbody>
      <tr><td>**1. Ilahiyyat**</td><td>Segala hal yang berkaitan langsung dengan Dzat dan Ketuhanan Allah SWT</td><td>Sifat Wajib, Mustahil, Jaiz bagi Allah; Asmaul Husna; Af'alullah (perbuatan Allah).</td></tr>
      <tr><td>**2. Nubuwwat**</td><td>Segala hal yang berkaitan dengan para Nabi dan Rasul utusan Allah</td><td>Sifat wajib Rasul (Siddiq, Amanah, Tabligh, Fathonah); Mukjizat; Kitab Suci Samawi (Taurat, Zabur, Injil, Al-Qur'an); Sunnah.</td></tr>
      <tr><td>**3. Ruhaniyyat**</td><td>Segala hal yang berkaitan dengan dimensi alam metafisika dan makhluk halus</td><td>Penciptaan Malaikat dari cahaya; Jin dan Iblis dari nyala api; Hakikat Roh; Setan; Qarin.</td></tr>
      <tr><td>**4. Sam'iyyat**</td><td>Perkara ghaib eskatologis yang **hanya dapat diketahui melalui pendengaran wahyu** (Al-Qur'an & Sunnah) tanpa bisa dijangkau oleh panca indra manusia</td><td>Tanda-tanda kiamat, sakaratul maut, alam Barzakh (siksa dan nikmat kubur), Yaumul Ba'ats (kebangkitan), Padang Mahsyar, Mizan (timbangan amal), Hisab (perhitungan), Telaga Al-Kautsar, Jembatan Shirath, Surga, dan Neraka.</td></tr>
    </tbody>
  </table>
</div>


---

### Pertemuan 3: Syariah Islam, Dimensi Ibadah & 5 Hukum Taklifi
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Pengertian Syariah
<ul>
  <li>Secara bahasa (etimologi) berarti *jalan lurus menuju mata air kehidupan*.</li>
  <li>Secara istilah (terminologi) adalah seperangkat aturan, tata tertib, dan ketentuan hukum yang diwahyukan oleh Allah SWT kepada Rasulullah SAW untuk mengatur perbuatan manusia sebagai hamba Allah, sebagai makhluk sosial, dan sebagai pemakmur bumi.</li>
</ul>

#### 2. Dua Dimensi Ibadah dalam Syariah
<div class="table-wrap">
  <table>
    <thead><tr><th>Dimensi Ibadah</th><th>Ibadah MAKHDAH (Khusus)</th><th>Ibadah GHAIRU MAKHDAH / Muamalah (Umum)</th></tr></thead>
    <tbody>
      <tr><td>**Definisi & Relasi**</td><td>Hubungan vertikal langsung antara hamba dengan Allah (*Hablum Minallah*).</td><td>Hubungan horizontal antara manusia dengan sesama manusia dan alam (*Hablum Minannas*).</td></tr>
      <tr><td>**Kaidah Fiqih Pokok**</td><td>*"Al-ashlu fil 'ibaadati al-buthlanu hatta yadulla ad-dalilu 'ala amrihi"*<br>(Hukum asal ibadah adalah **TERLARANG / BATAL** kecuali jika ada dalil yang memerintahkannya).</td><td>*"Al-ashlu fil mu'amalati al-ibahatu hatta yadulla ad-dalilu 'ala tahrimihi"*<br>(Hukum asal muamalah adalah **BOLEH / HALAL** kecuali jika ada dalil yang mengharamkannya).</td></tr>
      <tr><td>**Sifat Ketentuan**</td><td>Kaku, baku, terinci, tidak boleh dikurangi atau ditambahi (bid'ah).</td><td>Fleksibel, dinamis, terbuka terhadap inovasi sains dan teknologi modern.</td></tr>
      <tr><td>**Contoh Konkret**</td><td>Tata cara Shalat 5 waktu, Puasa Ramadhan, Zakat, Ibadah Haji.</td><td>Jual-beli online e-commerce, etika koding AI, tolong-menolong, bekerja profesional.</td></tr>
    </tbody>
  </table>
</div>

#### 3. 5 Hukum Taklifi (Ketentuan Norma Syariat)
<ol>
  <li>**Wajib (Fardhu):** Perbuatan yang apabila dikerjakan mendapat pahala, dan apabila ditinggalkan berdosa. Dibagi 2:
    <ul>
      <li>*Wajib 'Aini:* Kewajiban personal setiap individu muslim (contoh: shalat 5 waktu).</li>
      <li>*Wajib Kifa'i:* Kewajiban kolektif komunitas; jika sebagian sudah mengerjakan maka gugur dosa yang lain (contoh: shalat jenazah, mendalami ilmu teknologi untuk ketahanan umat).</li>
    </ul>
  </li>
  <li>**Sunnah (Mandub):** Perbuatan yang apabila dikerjakan mendapat pahala, dan apabila ditinggalkan tidak mendapat dosa.
    <ul>
      <li>*Sunnah Muakkad:* Sunnah yang sangat ditekankan dan jarang ditinggalkan Rasulullah (contoh: shalat rawatib, shalat tarawih, qurban).</li>
      <li>*Sunnah Ghairu Muakkad:* Sunnah biasa yang sesekali dikerjakan (contoh: puasa Senin-Kamis).</li>
    </ul>
  </li>
  <li>**Mubah (Ja'iz):** Perbuatan yang bebas dipilih; apabila dikerjakan atau ditinggalkan sama-sama tidak berpahala dan tidak berdosa (contoh: makan, tidur, memilih bahasa pemrograman). Namun mubah dapat bernilai pahala jika diniatkan untuk ibadah.</li>
  <li>**Makruh:** Perbuatan yang apabila ditinggalkan mendapat pahala kebaikan, dan apabila dikerjakan tidak berdosa tetapi sangat dibenci oleh Allah (contoh: makan makanan yang berbau menyengat sebelum shalat berjamaah).</li>
  <li>**Haram:** Perbuatan yang apabila ditinggalkan karena ketaatan kepada Allah mendapat pahala besar, dan apabila dikerjakan mendapat dosa dan siksaan pedih di akhirat (contoh: berzina, korupsi, mencuri, riba, meminum khamr).</li>
</ol>

#### 4. Maqashid Asy-Syari'ah (5 Tujuan Utama Syariat Islam)
<p>Seluruh aturan hukum syariat diturunkan Allah demi memelihara 5 kemaslahatan primer (*Adh-Dharuriyyat Al-Khams*):</p>
<ol>
  <li>**Hifzh Ad-Din:** Memelihara kesucian agama dan keimanan.</li>
  <li>**Hifzh An-Nafs:** Memelihara keselamatan jiwa manusia dari pembunuhan dan kekerasan.</li>
  <li>**Hifzh Al-'Aql:** Memelihara akal pikiran dari kerusakan (larangan narkoba dan khamr).</li>
  <li>**Hifzh An-Nasl:** Memelihara keturunan, nasab, dan kehormatan keluarga (syariat pernikahan dan larangan zina).</li>
  <li>**Hifzh Al-Mal:** Memelihara kepemilikan harta kekayaan dari pencurian, riba, manipulasi penipuan (scam), dan korupsi.</li>
</ol>


---

### Pertemuan 4: Akhlak dalam Islam (Komparasi Etika, Moral & Akhlak)
- [ ] *Sudah disalin ke lembar binder fisik*


#### 1. Hakikat Akhlak Menurut Hujjatul Islam Imam Al-Ghazali
<p>Dalam kitab monumentalnya *Ihya' 'Ulumiddin*, **Imam Abu Hamid Al-Ghazali** merumuskan definisi akhlak:</p>
<blockquote style="border-left:4px solid var(--primary); padding:10px 14px; background:var(--surface-elevated); font-style:italic;">
  "Al-Khuluqu 'ibaaratun 'an hai-atin fin-nafsi raasikhatin, 'anhaa tashdurul af'aalu bisuhuulatin wa yusrin min ghairi haajatin ilaa fikrin wa ruwiyyah."<br>
  (Akhlak adalah suatu kondisi atau sifat yang tertanam kuat di dalam jiwa, yang darinya memancar perbuatan-perbuatan dengan mudah dan spontan tanpa memerlukan pemikiran dan pertimbangan yang panjang).
</blockquote>
<p>Jika seseorang harus berpikir lama dan menimbang-nimbang sebelum memberi sedekah uang seribu rupiah, kedermawanannya belum menjadi akhlaknya. Namun jika tangan kanannya otomatis memberi dengan ikhlas tanpa riya' begitu melihat orang membutuhkan, kedermawanan telah menjadi akhlak yang mengakar.</p>

#### 2. Matriks Komparasi Ilmiah: Etika vs Moral vs Akhlak
<div class="table-wrap">
  <table>
    <thead><tr><th>Dimensi Pembanding</th><th>ETIKA (Ethics)</th><th>MORAL (Morality)</th><th>AKHLAK (Islamic Ethics)</th></tr></thead>
    <tbody>
      <tr><td>**Asal Kata & Etimologi**</td><td>Bahasa Yunani *Ethos* (watak, kebiasaan, adat)</td><td>Bahasa Latin *Mos* / jamaknya *Mores* (adat kebiasaan)</td><td>Bahasa Arab *Khuluqun* (tabiat, perangai, ciptaan batin yang serumpun dengan kata *Khaliq* dan *Makhluq*)</td></tr>
      <tr><td>**Sumber & Tolok Ukur Kebenaran**</td><td>**Akal Pikiran / Rasio Manusia:** Kesimpulan filosofis berbasis logika logis akal sehat manusia.</td><td>**Adat Istiadat / Norma Sosial:** Kesepakatan tradisi budaya yang berlaku dalam suatu komunitas masyarakat tertentu.</td><td>**Wahyu Ilahi (Al-Qur'an & As-Sunnah):** Tuntunan mutlak dari Allah SWT yang dicontohkan Rasulullah SAW.</td></tr>
      <tr><td>**Sifat Nilai Keberlakuan**</td><td>**Relatif & Teoretis:** Berubah mengikuti paradigma filsafat dan temuan sains baru.</td><td>**Lokal & Terbatas Wilayah:** Berbeda antar daerah (apa yang sopan di Jawa belum tentu sopan di Eropa).</td><td>**Mutlak, Abadi & Universal:** Berlaku kapanpun, dimanapun, untuk siapapun hingga akhir zaman (kejujuran selalu mulia, korupsi selalu terkutuk).</td></tr>
      <tr><td>**Sanksi Pelanggaran**</td><td>Kritik akal sehat, celaan kaum cendekiawan, diskualifikasi etika profesi.</td><td>Sanksi sosial, gunjingan tetangga, pengucilan dari paguyuban adat.</td><td>Dosa di sisi Allah, kegelisahan batin spiritual, dan pertanggungjawaban hisab di akhirat.</td></tr>
      <tr><td>**Motivasi Perbuatan**</td><td>Pujian rasionalitas, martabat martir profesional, reputasi gelar.</td><td>Penerimaan sosial warga setempat, menjaga nama baik keluarga.</td><td>**Murni Mengharap Ridha Allah SWT (Ikhlas Lillahi Ta'ala).**</td></tr>
    </tbody>
  </table>
</div>

#### 3. Hadits Pokok Misi Kerasulan Nabi Muhammad SAW
> [!TIP]
> **🌟 Hadits Pilar Akhlak (HR. Ahmad No. 8952 & Al-Bukhari dalam Al-Adab Al-Mufrad)**
> <p style="font-size:15px; font-weight:700; color:var(--text-main); margin-bottom:6px;">
    إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ
  </p>
  <p>**Pelafalan:** *"Innama bu'itstu li-utammima makaarimal akhlaaq."*</p>
  <p>**Artinya:** *"Sesungguhnya aku diutus hanyalah semata-mata untuk menyempurnakan kemuliaan akhlak."*</p>
  <p>Hadits ini menegaskan bahwa puncak dari seluruh ajaran rukun iman (aqidah) dan rukun Islam (syariah) adalah terwujudnya kemuliaan akhlak dalam tindakan nyata manusia sehari-hari.</p>


---
