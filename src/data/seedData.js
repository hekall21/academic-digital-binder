// Pre-seeded academic data for 8 subjects and 32 meetings (Unindra Semester 1)
// Extracted from verified master compendium

export const initialSubjects = [
  {
    "id": "subject-ksi",
    "name": "Konsep Sistem Informasi (KSI)",
    "code": "TI-101",
    "lecturer": "Pak Dheni, M.Kom.",
    "schedule": "Senin • 07:30 - 10:00 WIB • Ruang R.4.4-4",
    "room": "Ruang R.4.4-4",
    "color": "#6366F1",
    "target_meetings": 16,
    "semester": "Semester 1",
    "academic_year": "2026/2027",
    "meetings": [
      {
        "id": "subject-ksi_m1",
        "subject_id": "subject-ksi",
        "meeting_number": 1,
        "date": "2026-09-13",
        "title": "Konsep Dasar Data, Informasi, dan Transformasi Pengetahuan",
        "description": "Materi perkuliahan pekan ke-1 mata kuliah Konsep Sistem Informasi (KSI).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-ksi_1_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 1: Konsep Dasar Data, Informasi, dan Transformasi Pengetahuan.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-ksi_1_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P1.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-ksi_1_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-ksi_1",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 1: Konsep Dasar Data, Informasi, dan Transformasi Pengetahuan) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Hakikat Data dan Epistemologi Komputasi</h4>\r\n<p>Secara epistemologis dan praktis, <strong>Data</strong> didefinisikan sebagai representasi mentah dari fakta (<em>raw facts</em>), kejadian (<em>events</em>), atau entitas nyata (orang, tempat, benda, uang, transaksi) yang terekam atau terdokumentasi tanpa makna bawaan yang dapat langsung dipakai untuk pengambilan keputusan strategis.</p>\r\n<ul>\r\n  <li><strong>Sifat Data:</strong> Atomik, belum terstruktur secara semantik, berdiri sendiri, dan berorientasi historis operasional.</li>\r\n  <li><strong>Klasifikasi Data Berdasarkan Format:</strong>\r\n    <ul>\r\n      <li><em>Data Terstruktur:</em> Angka, tanggal, dan teks dalam basis data relasional (RDBMS) yang memiliki tipe dan panjang kolom pasti.</li>\r\n      <li><em>Data Semi-Terstruktur:</em> Berkas JSON, XML, log web server yang memiliki tag identitas namun struktur fleksibel.</li>\r\n      <li><em>Data Tidak Terstruktur:</em> Dokumen PDF, video rekaman CCTV, foto kwitansi, percakapan suara pelanggan yang memerlukan pemrosesan khusus untuk diekstraksi.</li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n\r\n<h4>2. Definisi Informasi Menurut Gordon B. Davis & Pakar Klasik</h4>\r\n<p>Dalam karya monumentalnya <em>Management Information Systems: Conceptual Foundations, Structure, and Development</em>, <strong>Gordon B. Davis</strong> merumuskan definisi standar yang menjadi rujukan kurikulum akademis:</p>\r\n<blockquote style=\"border-left: 4px solid var(--primary); padding-left: 14px; margin: 10px 0; color: var(--text-main); font-style: italic; background: var(--surface-elevated); padding: 10px 14px; border-radius: 4px;\">\r\n  \"Informasi adalah data yang telah diproses ke dalam suatu bentuk yang mempunyai arti bagi si penerima (meaningful) dan mempunyai nilai nyata serta terasa bagi pengambilan keputusan saat ini maupun keputusan masa mendatang.\"\r\n</blockquote>\r\n<p>Kunci distingsi Davis terletak pada 3 kata kunci:</p>\r\n<ol>\r\n  <li><strong>Telah Diproses:</strong> Telah melalui operasi matematis, pengelompokan, agregasi, atau penyaringan.</li>\r\n  <li><strong>Mempunyai Arti bagi Penerima:</strong> Harus berada dalam konteks penerima (data penjualan raw tidak berarti bagi teknisi AC, tetapi sangat bernilai bagi manajer pemasaran).</li>\r\n  <li><strong>Mempunyai Nilai Nyata dalam Pengambilan Keputusan:</strong> Mengurangi ketidakpastian (<em>reducing uncertainty</em>) bagi pengambil kebijakan.</li>\r\n</ol>\r\n\r\n<h4>3. Hierarki DIKW (Data &rarr; Information &rarr; Knowledge &rarr; Wisdom)</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Tingkatan</th><th>Pertanyaan Kunci</th><th>Karakteristik & Nilai Guna</th><th>Contoh Konkret Bisnis Retail</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Data</strong></td><td><em>What? (Fakta)</em></td><td>Catatan transaksi tanpa konteks relasional</td><td><code>100, \"2026-09-30\", \"SKU-992\", 45000</code></td></tr>\r\n      <tr><td><strong>Information</strong></td><td><em>Who, When, Where?</em></td><td>Data yang diagregasi dan memiliki label relasional</td><td>\"Pada 30 September 2026, terjual 100 unit SKU-992 dengan omset Rp4.500.000 di Cabang Jakarta.\"</td></tr>\r\n      <tr><td><strong>Knowledge</strong></td><td><em>How? (Pola & Kaidah)</em></td><td>Informasi yang dipadukan dengan pengalaman dan pemahaman pola</td><td>\"Penjualan SKU-992 selalu melonjak 300% pada akhir bulan saat hari gajian karena produk tersebut adalah kebutuhan pokok.\"</td></tr>\r\n      <tr><td><strong>Wisdom</strong></td><td><em>Why? (Kebijaksanaan)</em></td><td>Kemampuan memproyeksikan wawasan untuk strategi masa depan</td><td>\"Mengalokasikan stok penyangga (buffer stock) 500 unit setiap tanggal 25 dan meluncurkan promo bundling gajian untuk memaksimalkan margin laba.\"</td></tr>\r\n    </tbody>\r\n  </table>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": true
        }
      },
      {
        "id": "subject-ksi_m2",
        "subject_id": "subject-ksi",
        "meeting_number": 2,
        "date": "2026-09-16",
        "title": "Karakteristik, Batasan & Taksonomi Sistem",
        "description": "Materi perkuliahan pekan ke-2 mata kuliah Konsep Sistem Informasi (KSI).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-ksi_2_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 2: Karakteristik, Batasan & Taksonomi Sistem.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-ksi_2_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P2.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-ksi_2_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-ksi_2",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 2: Karakteristik, Batasan & Taksonomi Sistem) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. 8 Karakteristik Wajib Suatu Sistem (Sistematika Utuh)</h4>\r\n<p>Suatu kesatuan hanya berhak disebut sebagai <strong>Sistem</strong> jika memenuhi 8 karakteristik terpadu berikut:</p>\r\n<ol>\r\n  <li><strong>Komponen Sistem (Components):</strong> Suatu sistem terdiri dari sejumlah komponen yang saling berinteraksi, bekerja sama membentuk satu kesatuan. Komponen dapat berupa subsistem-subsistem yang masing-masing menjalankan fungsinya sendiri namun tetap terintegrasi.</li>\r\n  <li><strong>Batas Sistem (Boundary):</strong> Daerah pemisah antara suatu sistem dengan sistem yang lain atau dengan lingkungan luarnya. Batas sistem menentukan konfigurasi, ruang lingkup, dan kemampuan sistem.</li>\r\n  <li><strong>Lingkungan Luar Sistem (Environment):</strong> Apapun di luar batas sistem yang mempengaruhi operasi sistem. Lingkungan luar dapat bersifat menguntungkan (energi, modal, bahan baku yang harus dijaga) atau merugikan (regulasi pesaing, serangan siber yang harus dikendalikan).</li>\r\n  <li><strong>Penghubung Sistem (Interface):</strong> Media perantara yang memungkinkan sumber daya atau data mengalir dari satu subsistem ke subsistem lainnya. Format output subsistem A harus kompatibel dengan format input subsistem B.</li>\r\n  <li><strong>Masukan Sistem (Input):</strong> Energi yang dimasukkan ke dalam sistem. Dibagi 2:\r\n    <ul>\r\n      <li><em>Maintenance Input:</em> Energi yang dimasukkan agar sistem terus beroperasi (misal: listrik, operating system, pemeliharaan server).</li>\r\n      <li><em>Signal Input:</em> Energi yang diproses untuk menghasilkan keluaran (misal: data transaksi penjualan yang diinput kasir).</li>\r\n    </ul>\r\n  </li>\r\n  <li><strong>Pengolahan Sistem (Process):</strong> Bagian yang mengolah dan mentransformasikan masukan menjadi keluaran. Pada sistem informasi, pengolahan berupa pemrosesan program logika, perhitungan, dan penyimpanan data.</li>\r\n  <li><strong>Keluaran Sistem (Output):</strong> Hasil olahan dari energi yang dimasukkan. Dapat berupa keluaran yang berguna (informasi laporan manajemen) maupun sisa buangan/sampah (<em>waste/log error</em>).</li>\r\n  <li><strong>Sasaran dan Tujuan (Goal & Objective):</strong> Sistem pasti memiliki tujuan (<em>goal</em> untuk ruang lingkup luas) atau sasaran (<em>objective</em> untuk batasan operasional terukur). Kinerja sistem dievaluasi dari seberapa tepat sasaran tercapai.</li>\r\n</ol>\r\n\r\n<h4>2. Taksonomi & Klasifikasi Sistem</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Dimensi Klasifikasi</th><th>Tipe Sistem A</th><th>Tipe Sistem B</th><th>Contoh Pembeda Nyata</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Bentuk Wujud</strong></td><td><strong>Sistem Abstrak:</strong> Berupa gagasan, ide, teologi pemikiran manusia.</td><td><strong>Sistem Fisik:</strong> Memiliki wujud materiil dan komponen kebendaan.</td><td>Sistem Filsafat Etika vs Perangkat Keras Komputer</td></tr>\r\n      <tr><td><strong>Asal Kejadian</strong></td><td><strong>Sistem Alamiah:</strong> Terbentuk secara alami oleh hukum semesta tanpa campur tangan manusia.</td><td><strong>Sistem Buatan Manusia:</strong> Dirancang dan diimplementasikan oleh manusia.</td><td>Sistem Peredaran Darah Manusia vs Sistem Penggajian Karyawan</td></tr>\r\n      <tr><td><strong>Kepastian Operasi</strong></td><td><strong>Sistem Deterministik:</strong> Bekerja dengan tingkah laku yang dapat diprediksi secara presisi 100%.</td><td><strong>Sistem Probabilistik:</strong> Mengandung faktor ketidakpastian dan peluang.</td><td>Program perkalian dua angka vs Sistem Prediksi Harga Saham</td></tr>\r\n      <tr><td><strong>Interaksi Lingkungan</strong></td><td><strong>Sistem Tertutup:</strong> Terisolasi mandiri, tidak menerima pengaruh energi dari luar.</td><td><strong>Sistem Terbuka:</strong> Berinteraksi dinamis dengan lingkungan luarnya.</td><td>Eksperimen kimia dalam tabung vakum vs Organisasi Perusahaan Modern</td></tr>\r\n    </tbody>\r\n  </table>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-ksi_m3",
        "subject_id": "subject-ksi",
        "meeting_number": 3,
        "date": "2026-09-19",
        "title": "Sumber, Kualitas Informasi & Arsitektur 6 Blok Pembangun SI",
        "description": "Materi perkuliahan pekan ke-3 mata kuliah Konsep Sistem Informasi (KSI).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-ksi_3_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 3: Sumber, Kualitas Informasi & Arsitektur 6 Blok Pembangun SI.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-ksi_3_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P3.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-ksi_3_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-ksi_3",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 3: Sumber, Kualitas Informasi & Arsitektur 6 Blok Pembangun SI) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Siklus Pengolahan Informasi (Information Cycle)</h4>\r\n<p>Siklus informasi menggambarkan bagaimana data mengalir dalam loop tak berujung (<em>closed-loop feedback</em>):</p>\r\n<pre style=\"background: var(--surface-elevated); padding: 12px; border-radius: 6px; font-family: var(--font-mono); font-size: 13px;\">\r\n[DATA BARU / FAKTA LAPANGAN]\r\n             │\r\n             ▼\r\n   ┌──────────────────┐\r\n   │ MASUKAN (INPUT)  │ <── Formulir, sensor, input user\r\n   └─────────┬────────┘\r\n             │\r\n             ▼\r\n   ┌──────────────────┐\r\n   │ PENGOLAHAN DATA  │ <── Model logika, program software, rumus\r\n   └─────────┬────────┘\r\n             │\r\n             ▼\r\n   ┌──────────────────┐\r\n   │ KELUARAN (OUTPUT)│ <── Laporan, visualisasi grafik, notifikasi\r\n   └─────────┬────────┘\r\n             │\r\n             ▼\r\n   ┌──────────────────┐\r\n   │     PENERIMA     │ <── Pengambil keputusan (Manajer / User)\r\n   └─────────┬────────┘\r\n             │\r\n             ▼\r\n   ┌──────────────────┐\r\n   │ KEPUTUSAN / AKSI │ <── Tindakan operasional organisasi\r\n   └─────────┬────────┘\r\n             │ (Menghasilkan transaksi baru)\r\n             ▼\r\n       [DATA BARU] ─── (Kembali berputar ke Siklus Input)\r\n</pre>\r\n\r\n<h4>2. 4 Pilar Kualitas Informasi</h4>\r\n<ol>\r\n  <li><strong>Akurat (Accurate):</strong> Informasi harus bebas dari kesalahan-kesalahan, tidak bias, tidak menyesatkan, dan secara presisi mencerminkan fakta maksudnya. Kesalahan data masukan akan berakibat pada output yang salah (prinsip <em>GIGO: Garbage In, Garbage Out</em>). Sub-komponen akurat:\r\n    <ul>\r\n      <li><em>Kelengkapan (Completeness):</em> Seluruh data pendukung tersedia utuh tanpa ada yang terpotong.</li>\r\n      <li><em>Kebenaran (Correctness):</em> Bebas dari salah hitung atau kesalahan pengetikan.</li>\r\n    </ul>\r\n  </li>\r\n  <li><strong>Tepat Waktu (Timeliness):</strong> Informasi yang datang pada penerima tidak boleh terlambat (usang). Informasi yang kadaluarsa tidak mempunyai nilai guna lagi dalam pengambilan keputusan kompetitif dan justru berisiko menimbulkan kerugian finansial.</li>\r\n  <li><strong>Relevan (Relevance):</strong> Informasi harus mempunyai manfaat pemakaian spesifik bagi penerimanya. Relevansi informasi berbeda untuk tiap orang tergantung tingkat jabatan dan fungsinya (misal: manajer keuangan memerlukan laporan neraca laba rugi, bukan log IP address jaringan server).</li>\r\n  <li><strong>Ekonomis (Value of Information):</strong> Nilai suatu informasi diukur dari perbandingan antara manfaat (<em>benefit</em>) yang didapat dengan biaya (<em>cost</em>) yang dikeluarkan untuk memperolehnya. Suatu sistem informasi tidak layak diimplementasikan jika biaya pembuatannya lebih besar daripada nilai tambah operasionalnya.</li>\r\n</ol>\r\n\r\n<h4>3. Arsitektur 6 Blok Pembangun Sistem Informasi (John Burch Framework)</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Nama Blok</th><th>Fungsi Spesifik</th><th>Komponen & Contoh Implementasi</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>1. Blok Masukan (Input Block)</strong></td><td>Metode dan media untuk menangkap data dari sumber aslinya masuk ke sistem</td><td>Keyboard, barcode scanner QRIS, formulir registrasi online, sensor IoT, RFID reader</td></tr>\r\n      <tr><td><strong>2. Blok Model (Model Block)</strong></td><td>Kombinasi prosedur, logika pemrograman, dan model matematika yang memanipulasi data</td><td>Logika perhitungan PPh 21, algoritma rekomendasi e-commerce, rumus depresiasi aset</td></tr>\r\n      <tr><td><strong>3. Blok Keluaran (Output Block)</strong></td><td>Penyajian hasil pemrosesan ke format yang bermakna bagi pengguna</td><td>Faktur tagihan PDF, grafik analitik dashboard React, pesan SMS konfirmasi OTP, laporan audit</td></tr>\r\n      <tr><td><strong>4. Blok Teknologi (Technology Block)</strong></td><td>Kotak alat (tool-box) perangkat penopang jalannya sistem</td><td>Hardware (Server Xeon, PC, RAM), Software (Linux, Windows Server), Jaringan (Router, Fiber Optic, Wi-Fi)</td></tr>\r\n      <tr><td><strong>5. Blok Basis Data (Database Block)</strong></td><td>Tempat penyimpanan kumpulan data terorganisir yang saling berelasi</td><td>RDBMS (PostgreSQL, MySQL, Oracle), NoSQL (MongoDB), Schema tabel, primary key, foreign key</td></tr>\r\n      <tr><td><strong>6. Blok Kendali (Control Block)</strong></td><td>Mekanisme proteksi dan pengamanan sistem dari gangguan, kerusakan, dan serangan</td><td>Enkripsi AES-256, otentikasi 2FA, firewall, sistem backup rutin off-site, uninterruptible power supply (UPS)</td></tr>\r\n    </tbody>\r\n  </table>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-ksi_m4",
        "subject_id": "subject-ksi",
        "meeting_number": 4,
        "date": "2026-09-22",
        "title": "Tingkat Manajemen & Karakteristik Pengambilan Keputusan",
        "description": "Materi perkuliahan pekan ke-4 mata kuliah Konsep Sistem Informasi (KSI).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-ksi_4_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 4: Tingkat Manajemen & Karakteristik Pengambilan Keputusan.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-ksi_4_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P4.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-ksi_4_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-ksi_4",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 4: Tingkat Manajemen & Karakteristik Pengambilan Keputusan) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Piramida Tingkat Manajemen (Model Robert N. Anthony)</h4>\r\n<p>Dalam teori manajemen dan sistem informasi, struktur organisasi terbagi menjadi 3 tingkatan manajerial dengan spektrum kebutuhan informasi yang sangat kontras:</p>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Tingkat Manajerial</th><th>Posisi & Jabatan</th><th>Fokus Perencanaan</th><th>Karakteristik Informasi yang Dibutuhkan</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Top Management (Manajemen Puncak)</strong></td><td>CEO, Direktur Utama, Komisaris, Rektor</td><td>Perencanaan Strategis Jangka Panjang (3 - 5 tahun ke depan)</td><td>Sangat ringkas, berorientasi masa depan, bersumber dari lingkungan eksternal (regulasi, makro ekonomi, tren pasar global), non-rutin.</td></tr>\r\n      <tr><td><strong>Middle Management (Manajemen Madya)</strong></td><td>Manajer Pemasaran, Kepala Cabang, Dekan</td><td>Pengendalian Manajemen & Taktis (Bulanan s.d Tahunan)</td><td>Informasi varians anggaran, perbandingan target vs realisasi, ringkasan kinerja per departemen, informasi taktis periodik.</td></tr>\r\n      <tr><td><strong>Lower / First-Line Management (Manajemen Lini Pertama)</strong></td><td>Supervisor, Kepala Regu, Mandor</td><td>Pengendalian Operasional (Harian s.d Mingguan)</td><td>Sangat detail, terperinci, akurat, bersumber internal, repetitif, data transaksi langsung saat itu juga (real-time).</td></tr>\r\n    </tbody>\r\n  </table>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      }
    ]
  },
  {
    "id": "subject-indo",
    "name": "Bahasa Indonesia (MKWK107)",
    "code": "MKWK107",
    "lecturer": "Tim Dosen Bahasa Indonesia Unindra",
    "schedule": "Senin • 10:00 - 11:40 WIB • Ruang R.4.4-4",
    "room": "Ruang R.4.4-4",
    "color": "#06B6D4",
    "target_meetings": 16,
    "semester": "Semester 1",
    "academic_year": "2026/2027",
    "meetings": [
      {
        "id": "subject-indo_m1",
        "subject_id": "subject-indo",
        "meeting_number": 1,
        "date": "2026-09-15",
        "title": "Hakikat Bahasa, Kedudukan & Fungsi Bahasa Indonesia",
        "description": "Materi perkuliahan pekan ke-1 mata kuliah Bahasa Indonesia (MKWK107).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-indo_1_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 1: Hakikat Bahasa, Kedudukan & Fungsi Bahasa Indonesia.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-indo_1_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P1.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-indo_1_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-indo_1",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 1: Hakikat Bahasa, Kedudukan & Fungsi Bahasa Indonesia) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Hakikat Bahasa Menurut Para Ahli Linguistik</h4>\r\n<p>Kajian ilmiah bahasa Indonesia di perguruan tinggi bertumpu pada definisi formal linguistik:</p>\r\n<ul>\r\n  <li><strong>Harimurti Kridalaksana (1993):</strong> <em>\"Bahasa adalah sistem lambang bunyi yang arbitrer yang digunakan oleh para anggota kelompok sosial untuk bekerja sama, berkomunikasi, dan mengidentifikasikan diri.\"</em></li>\r\n  <li><strong>Kamus Besar Bahasa Indonesia (KBBI):</strong> Bahasa adalah sistem lambang bunyi yang arbitrer yang digunakan oleh semua anggota masyarakat untuk bekerja sama, berinteraksi, dan mengidentifikasikan diri.</li>\r\n  <li><strong>12 Ciri Hakiki Bahasa:</strong>\r\n    <ol>\r\n      <li><em>Bahasa adalah Sistem:</em> Bersifat sistematis (tersusun menurut pola teratur) dan sistemik (terdiri atas subsistem fonologi, morfologi, sintaksis, semantik).</li>\r\n      <li><em>Bahasa adalah Lambang:</em> Memiliki tanda yang mewakili suatu konsep atau makna dalam alam nyata.</li>\r\n      <li><em>Bahasa adalah Bunyi:</em> Bunyi vokal yang dihasilkan oleh alat ucap manusia (organ of speech). Bunyi non-alat ucap (tepuk tangan, siulan) bukan bahasa.</li>\r\n      <li><em>Bahasa bersifat Arbitrer:</em> Sewenang-wenang, tidak ada hubungan logis wajib antara lambang bunyi dengan benda yang dilambangkannya (contoh: mengapa hewan berkaki empat pemakan rumput disebut \"kuda\", bukan \"meja\").</li>\r\n      <li><em>Bahasa itu Bermakna:</em> Mengandung konsep atau pesan yang dapat dipahami.</li>\r\n      <li><em>Bahasa bersifat Konvensional:</em> Disepakati bersama oleh komunitas pemakai bahasa.</li>\r\n      <li><em>Bahasa bersifat Unik:</em> Memiliki ciri khas spesifik yang tidak dimiliki bahasa lain (misal: bahasa Indonesia tidak mengenal tenses konjugasi kata kerja seperti bahasa Inggris).</li>\r\n      <li><em>Bahasa bersifat Universal:</em> Semua bahasa memiliki kesamaan universal dasar (memiliki vokal dan konsonan, memiliki subjek dan predikat).</li>\r\n      <li><em>Bahasa bersifat Produktif:</em> Dari sejumlah unsur terbatas (26 huruf abjad), dapat dihasilkan kalimat yang jumlahnya tidak terhingga.</li>\r\n      <li><em>Bahasa itu Bervariasi:</em> Memiliki ragam dialek, sosiolek, dan fungsiolek.</li>\r\n      <li><em>Bahasa itu Dinamis:</em> Selalu berkembang mengikuti perkembangan zaman dan teknologi.</li>\r\n      <li><em>Bahasa itu Manusiawi:</em> Hanya dimiliki dan digunakan secara sempurna oleh manusia.</li>\r\n    </ol>\r\n  </li>\r\n</ul>\r\n\r\n<h4>2. Kedudukan Bahasa Indonesia: Bahasa Nasional vs Bahasa Negara</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Aspek Pembeda</th><th>Bahasa Indonesia sebagai BAHASA NASIONAL</th><th>Bahasa Indonesia sebagai BAHASA NEGARA</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Landasan Yuridis</strong></td><td><strong>Ikrar Sumpah Pemuda</strong> (28 Oktober 1928, Butir ke-3: <em>\"Menjunjung bahasa persatuan, bahasa Indonesia\"</em>)</td><td><strong>UUD 1945 Bab XV Pasal 36</strong> (Disahkan pada 18 Agustus 1945: <em>\"Bahasa Negara ialah Bahasa Indonesia\"</em>)</td></tr>\r\n      <tr><td><strong>Fungsi 1</strong></td><td><strong>Lambang Kebanggaan Kebangsaan:</strong> Mencerminkan nilai-nilai luhur dan kebanggaan jati diri bangsa Indonesia.</td><td><strong>Bahasa Resmi Kenegaraan:</strong> Dipakai dalam upacara kenegaraan, sidang parlemen, pidato kenegaraan, dokumen resmi hukum.</td></tr>\r\n      <tr><td><strong>Fungsi 2</strong></td><td><strong>Lambang Identitas Nasional:</strong> Pembeda unik bangsa Indonesia dari bangsa-bangsa lain di pentas global.</td><td><strong>Bahasa Pengantar Resmi Pendidikan:</strong> Dipakai dari jenjang taman kanak-kanak hingga perguruan tinggi.</td></tr>\r\n      <tr><td><strong>Fungsi 3</strong></td><td><strong>Alat Pemersatu Bangsa:</strong> Menghubungkan ratusan suku bangsa yang berbeda bahasa daerah tanpa menghilangkan identitas kesukuannya.</td><td><strong>Alat Perhubungan Tingkat Nasional:</strong> Dipakai dalam perencanaan pembangunan, administrasi pemerintahan, dan rapat koordinasi nasional.</td></tr>\r\n      <tr><td><strong>Fungsi 4</strong></td><td><strong>Alat Perhubungan Antardaerah & Antarbudaya:</strong> Sarana komunikasi perdagangan dan sosial lintas pulau di Nusantara.</td><td><strong>Sarana Pengembangan IPTEK & Kebudayaan:</strong> Wahana penulisan jurnal ilmiah, publikasi buku cetak, dan kebudayaan nasional.</td></tr>\r\n    </tbody>\r\n  </table>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": true
        }
      },
      {
        "id": "subject-indo_m2",
        "subject_id": "subject-indo",
        "meeting_number": 2,
        "date": "2026-09-18",
        "title": "Menumbuhkan Sikap Positif Terhadap Bahasa Indonesia",
        "description": "Materi perkuliahan pekan ke-2 mata kuliah Bahasa Indonesia (MKWK107).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-indo_2_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 2: Menumbuhkan Sikap Positif Terhadap Bahasa Indonesia.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-indo_2_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P2.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-indo_2_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-indo_2",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 2: Menumbuhkan Sikap Positif Terhadap Bahasa Indonesia) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Teori Sosiolinguistik Sikap Bahasa (Garvin & Mathiot)</h4>\r\n<p>Dalam kajian sosiolinguistik oleh <strong>Paul L. Garvin dan Madeleine Mathiot (1968)</strong>, kualitas pemakaian bahasa suatu masyarakat sangat ditentukan oleh sikap bahasa (<em>language attitude</em>). Sikap positif terhadap bahasa ditandai oleh 3 pilar perilaku:</p>\r\n<ol>\r\n  <li><strong>Kesetiaan Berbahasa (Language Loyalty):</strong> Sikap batin yang mendorong suatu kelompok masyarakat penutur untuk mempertahankan kemandirian bahasanya, mencegah masuknya pengaruh bahasa asing secara berlebihan yang berpotensi merusak tatanan gramatikal baku, serta gigih membela eksistensi bahasanya dari ancaman kepunahan.</li>\r\n  <li><strong>Kebanggaan Berbahasa (Language Pride):</strong> Sikap emosional yang mendorong orang atau masyarakat mengutamakan bahasanya dan menggunakannya sebagai lambang identitas dan kesatuan bangsa. Lawan dari kebanggaan bahasa adalah sikap <em>inferioritas</em> (merasa lebih keren atau lebih terpelajar jika mencampuradukkan istilah asing yang sebenarnya sudah ada padanan bakunya dalam bahasa Indonesia).</li>\r\n  <li><strong>Kesadaran akan Adanya Norma/Kaidah Bahasa (Awareness of the Norm):</strong> Kesadaran sukarela untuk menggunakan bahasa secara tertib, cermat, santun, dan taat asas sesuai dengan kaidah baku tata bahasa dan ejaan yang berlaku (EYD V). Sikap ini menjadi faktor pendorong utama seseorang untuk selalu memeriksa kebenaran penulisan karyanya melalui KBBI.</li>\r\n</ol>\r\n\r\n<h4>2. Paradigma: \"Bahasa Indonesia yang Baik dan Benar\"</h4>\r\n<ul>\r\n  <li><strong>Berbahasa yang BAIK:</strong> Penggunaan bahasa yang sesuai dengan situasi, kondisi, dan konteks komunikasi (siapa yang diajak bicara, topik apa yang dibahas, di mana tempatnya). Situasi non-formal santai di warung kopi tidak perlu menggunakan bahasa baku akademis kaku.</li>\r\n  <li><strong>Berbahasa yang BENAR:</strong> Penggunaan bahasa yang patuh dan taat asas terhadap seluruh kaidah gramatikal, fonologi, morfologi, sintaksis, dan kaidah ejaan resmi (EYD).</li>\r\n  <li><strong>Kombinasi Sempurna:</strong> Menggunakan bahasa yang tepat sasaran konteksnya (BAIK) dan sekaligus taat asas aturan kaidahnya (BENAR) pada ranah formal seperti penulisan artikel ilmiah, skripsi, presentasi akademik, dan surat kedinasan.</li>\r\n</ul>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-indo_m3",
        "subject_id": "subject-indo",
        "meeting_number": 3,
        "date": "2026-09-21",
        "title": "Sejarah & Tonggak Perkembangan Bahasa Indonesia",
        "description": "Materi perkuliahan pekan ke-3 mata kuliah Bahasa Indonesia (MKWK107).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-indo_3_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 3: Sejarah & Tonggak Perkembangan Bahasa Indonesia.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-indo_3_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P3.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-indo_3_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-indo_3",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 3: Sejarah & Tonggak Perkembangan Bahasa Indonesia) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Asal-Usul Rumpun Austronesia & Dialek Melayu Riau</h4>\r\n<p>Berdasarkan kajian linguistik historis komparatif, bahasa Indonesia berinduk dari rumpun <strong>Austronesia</strong> (bahasa kepulauan selatan). Sekitar 25 abad lalu terjadi migrasi bangsa dari daratan Formosa (Taiwan) menuju selatan menyusuri Filipina, Kalimantan, Sumatera, hingga Madagaskar.</p>\r\n<p>Bahasa Melayu yang berkembang pesat adalah <strong>Melayu Riau</strong> (Melayu Tinggi di sekitar Kepulauan Riau dan Semenanjung Malaka). Sejak abad ke-7, bahasa Melayu telah berfungsi sebagai <em>Lingua Franca</em> (bahasa perantara/pergaulan) bagi para pedagang antarpulau, pelaut, dan penyebar agama di kawasan Nusantara.</p>\r\n\r\n<h4>2. Bukti Epigrafi Abad ke-7 Kerajaan Sriwijaya</h4>\r\n<p>Keberadaan bahasa Melayu Kuno terekam abadi dalam prasasti-prasasti batu bertuliskan aksara Pallawa peninggalan Kemaharajaan Sriwijaya:</p>\r\n<ol>\r\n  <li><strong>Prasasti Kedukan Bukit (683 M)</strong> di Palembang, menceritakan perjalanan suci (<em>siddhayatra</em>) Dapunta Hyang membawa 20.000 tentara.</li>\r\n  <li><strong>Prasasti Talang Tuwo (684 M)</strong> di Palembang, tentang pembangunan Taman Sriksetra untuk kemakmuran semua makhluk.</li>\r\n  <li><strong>Prasasti Kota Kapur (686 M)</strong> di Pulau Bangka, memuat kutukan bagi mereka yang memberontak kepada Sriwijaya.</li>\r\n  <li><strong>Prasasti Karang Brahi (686 M)</strong> di Jambi, berisi doa keselamatan dan kepatuhan rakyat.</li>\r\n</ol>\r\n\r\n<h4>3. 4 Alasan Mengapa Bahasa Melayu Diangkat Menjadi Bahasa Indonesia</h4>\r\n<div class=\"callout callout-info\">\r\n  <div class=\"callout-title\">💡 4 Faktor Penentu Pengangkatan Bahasa Melayu (Sidang Kongres Pemuda 1928)",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-indo_m4",
        "subject_id": "subject-indo",
        "meeting_number": 4,
        "date": "2026-09-24",
        "title": "Kaidah Baku EYD Edisi V (Pemakaian Huruf, Kata & Tanda Baca)",
        "description": "Materi perkuliahan pekan ke-4 mata kuliah Bahasa Indonesia (MKWK107).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-indo_4_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 4: Kaidah Baku EYD Edisi V (Pemakaian Huruf, Kata & Tanda Baca).pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-indo_4_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P4.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-indo_4_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-indo_4",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 4: Kaidah Baku EYD Edisi V (Pemakaian Huruf, Kata & Tanda Baca)) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Kaidah Kritis Pemakaian Huruf Kapital</h4>\r\n<ul>\r\n  <li>Huruf pertama pada awal kalimat (<em>Mahasiswa sedang belajar.</em>).</li>\r\n  <li>Huruf pertama unsur nama orang, termasuk julukan (<em>Amir Hamzah</em>, <em>Ayam Jantan dari Timur</em>).</li>\r\n  <li>Huruf pertama nama tahun, bulan, hari, dan hari besar/keagamaan (<em>tahun Masehi, bulan Agustus, hari Jumat, hari Idulfitri</em>).</li>\r\n  <li>Huruf pertama nama bangsa, suku bangsa, dan bahasa (<em>bangsa Indonesia, suku Sunda, bahasa Inggris</em>; catatan: jika menjadi kata turunan, huruf kecil: <em>mengindonesiakan</em>, <em>keinggris-inggrisan</em>).</li>\r\n  <li>Huruf pertama nama geografi spesifik (<em>Gunung Merapi, Danau Toba, Selat Sunda, Jalan Sudirman</em>).<br>\r\n    ⚠️ <strong>Pengecualian Penting UTS:</strong>\r\n    <ul>\r\n      <li>Nama geografi yang BUKAN nama diri ditulis kecil: <em>berlayar ke teluk, menyeberangi selat, mendaki gunung</em>.</li>\r\n      <li>Nama geografi yang dipakai sebagai nama jenis makanan/benda ditulis huruf kecil: <em>jeruk bali, kunci inggris, petai cina, pisang ambon, kacang bogor</em>.</li>\r\n      <li>Tetapi corak/khas budaya daerah tetap kapital: <em>batik Solo, tarian Bali, masakan Padang</em>.</li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n\r\n<h4>2. Kaidah Pemakaian Huruf Miring (Italic)</h4>\r\n<ul>\r\n  <li>Menuliskan judul buku, majalah, atau surat kabar yang dikutip dalam tulisan (<em>Majalah Tempo, buku Pengantar Ilmu Komputer</em>).</li>\r\n  <li>Menegaskan atau mengkhususkan huruf, bagian kata, atau kelompok kata (<em>Huruf pertama kata abad adalah a.</em>).</li>\r\n  <li>Menuliskan kata atau ungkapan dalam bahasa daerah atau bahasa asing yang belum dibakukan ke dalam bahasa Indonesia (<em>Sistem ini menggunakan metode waterfall.</em>).</li>\r\n</ul>\r\n\r\n<h4>3. Kaidah Penulisan Kata: Kata Depan vs Awalan</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Bentuk</th><th>Fungsi Gramatikal</th><th>Aturan Penulisan</th><th>Contoh Penulisan Benar</th><th>Contoh Salah (Jebakan UTS)</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Kata Depan (Preposisi) <code>di</code>, <code>ke</code>, <code>dari</code></strong></td><td>Menunjukkan tempat keberadaan, arah tujuan, atau asal</td><td>Ditulis <strong>TERPISAH</strong> dengan spasi dari kata yang mengikutinya</td><td><code>di kampus</code>, <code>di rumah</code>, <code>ke Jakarta</code>, <code>ke atas</code>, <code>dari Bogor</code></td><td><span style=\"color:var(--rose)\">diperkuliahan</span>, <span style=\"color:var(--rose)\">dirumah</span>, <span style=\"color:var(--rose)\">kekampus</span></td></tr>\r\n      <tr><td><strong>Awalan (Prefiks) <code>di-</code>, <code>ke-</code></strong></td><td>Membentuk kata kerja pasif atau kata benda/bilangan</td><td>Ditulis <strong>SERANGKAI</strong> (menyatu tanpa spasi) dengan kata dasarnya</td><td><code>ditulis</code>, <code>dianalisis</code>, <code>dikerjakan</code>, <code>ketua</code>, <code>kehendak</code>, <code>kesatu</code></td><td><span style=\"color:var(--rose)\">di tulis</span>, <span style=\"color:var(--rose)\">di analisis</span>, <span style=\"color:var(--rose)\">di kerjakan</span></td></tr>\r\n    </tbody>\r\n  </table>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      }
    ]
  },
  {
    "id": "subject-algo",
    "name": "Algoritma 1",
    "code": "TI-103",
    "lecturer": "Pak Rizki / Pak Rahmat",
    "schedule": "Selasa • 07:30 - 09:10 WIB • Ruang R.4.5-3",
    "room": "Ruang R.4.5-3",
    "color": "#10B981",
    "target_meetings": 16,
    "semester": "Semester 1",
    "academic_year": "2026/2027",
    "meetings": [
      {
        "id": "subject-algo_m1",
        "subject_id": "subject-algo",
        "meeting_number": 1,
        "date": "2026-09-17",
        "title": "Pengantar Logika Komputasi, Etimologi & Kriteria Algoritma",
        "description": "Materi perkuliahan pekan ke-1 mata kuliah Algoritma 1.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-algo_1_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 1: Pengantar Logika Komputasi, Etimologi & Kriteria Algoritma.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-algo_1_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P1.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-algo_1_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-algo_1",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 1: Pengantar Logika Komputasi, Etimologi & Kriteria Algoritma) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Sejarah & Asal-Usul Etimologi Algoritma</h4>\r\n<p>Kata <strong>Algoritma</strong> berasal dari pelafalan bangsa barat terhadap nama ilmuwan dan matematikawan muslim terkemuka abad pertengahan (abad ke-9 Masehi), <strong>Abu Ja'far Muhammad bin Musa Al-Khawarizmi</strong> (780–850 M) yang lahir di Khwarazm (sekarang Khiva, Uzbekistan). Melalui kitab monumentalnya <em>Al-Kitab al-mukhtasar fi hisab al-jabr wa'l-muqabala</em> (Buku Rangkuman Perhitungan dengan Penyelesaian dan Pengimbangan), beliau meletakkan dasar-dasar ilmu Aljabar dan sistem penomoran desimal dengan angka nol.</p>\r\n<p>Dalam bahasa Latin, namanya diterjemahkan menjadi <em>Algoritmi</em>, yang kemudian berevolusi menjadi <em>algorism</em> (metode berhitung dengan angka Arab), dan akhirnya menjadi <strong>algorithm</strong> (algoritma).</p>\r\n\r\n<h4>2. Definisi Formal Algoritma</h4>\r\n<ul>\r\n  <li><strong>KBBI:</strong> <em>Urutan logis pengambilan putusan untuk pemecahan suatu masalah.</em></li>\r\n  <li><strong>Ilmu Komputer Modern:</strong> Suatu himpunan berhingga dari instruksi-instruksi yang terdefinisi secara jelas, logis, dan sistematis yang mentransformasikan data masukan (<em>input</em>) menjadi keluaran (<em>output</em>) yang memenuhi spesifikasi yang diinginkan dalam jumlah langkah yang berhingga.</li>\r\n  <li><strong>Hubungan Program dan Algoritma:</strong>\r\n    <p>Menurut Bapak Pemrograman Terstruktur, <strong>Prof. Niklaus Wirth</strong>:</p>\r\n    <div style=\"background:var(--surface-elevated); padding:8px 14px; border-left:4px solid var(--primary); font-family:var(--font-mono); font-weight:700;\">\r\n      PROGRAM = ALGORITMA + STRUKTUR DATA",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": true
        }
      },
      {
        "id": "subject-algo_m2",
        "subject_id": "subject-algo",
        "meeting_number": 2,
        "date": "2026-09-20",
        "title": "Tipe Data Primitif, Operator Komputasi & Hierarki Presedensi",
        "description": "Materi perkuliahan pekan ke-2 mata kuliah Algoritma 1.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-algo_2_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 2: Tipe Data Primitif, Operator Komputasi & Hierarki Presedensi.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-algo_2_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P2.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-algo_2_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-algo_2",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 2: Tipe Data Primitif, Operator Komputasi & Hierarki Presedensi) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Tipe Data Primitif & Karakteristik Komputasi</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Tipe Data</th><th>Domain & Rentang Nilai</th><th>Ukuran Memori</th><th>Karakteristik & Contoh Nilai</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Integer</strong></td><td>Bilangan bulat negatif, nol, positif: <code>-32.768</code> s.d <code>32.767</code> (16-bit)</td><td>2 atau 4 byte</td><td>Tidak memuat pecahan desimal. Contoh: <code>-15, 0, 100</code></td></tr>\r\n      <tr><td><strong>Real / Float</strong></td><td>Bilangan pecahan / desimal: <code>2.9e-39</code> s.d <code>1.7e38</code></td><td>4 atau 8 byte</td><td>Menggunakan titik sebagai pemisah desimal. Contoh: <code>3.14159, -0.05</code></td></tr>\r\n      <tr><td><strong>Char</strong></td><td>Satu karakter tunggal kode ASCII (0 - 255)</td><td>1 byte (8-bit)</td><td>Diapit tanda petik tunggal. Contoh: <code>'A', '9', '%', ' '</code></td></tr>\r\n      <tr><td><strong>String</strong></td><td>Rangkaian teks / untaian karakter (array of char)</td><td>1 s.d 256 byte</td><td>Diapit tanda petik tunggal. Contoh: <code>'FTIK Unindra 2026'</code></td></tr>\r\n      <tr><td><strong>Boolean</strong></td><td>Nilai logika biner: hanya <code>TRUE</code> atau <code>FALSE</code></td><td>1 byte</td><td>Hasil dari operasi relasional atau kondisi logika.</td></tr>\r\n    </tbody>\r\n  </table>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-algo_m3",
        "subject_id": "subject-algo",
        "meeting_number": 3,
        "date": "2026-09-23",
        "title": "Representasi Flowchart & Standar Simbol ANSI",
        "description": "Materi perkuliahan pekan ke-3 mata kuliah Algoritma 1.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-algo_3_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 3: Representasi Flowchart & Standar Simbol ANSI.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-algo_3_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P3.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-algo_3_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-algo_3",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 3: Representasi Flowchart & Standar Simbol ANSI) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Definisi & Fungsi Flowchart</h4>\r\n<p><strong>Flowchart (Bagan Alir)</strong> adalah representasi grafis dari langkah-langkah penyelesaian masalah dalam suatu program yang dinyatakan melalui simbol-simbol geometris berstandar ANSI (<em>American National Standards Institute</em>) dan dihubungkan oleh garis arah aliran instruksi.</p>\r\n<p><strong>Fungsi Utama:</strong></p>\r\n<ul>\r\n  <li>Sebagai cetak biru (blueprint) perancangan program sebelum menulis kode.</li>\r\n  <li>Memudahkan identifikasi kesalahan logika (<em>logic debugging</em>).</li>\r\n  <li>Media dokumentasi teknis dan komunikasi alur kerja program kepada tim developer lain.</li>\r\n</ul>\r\n\r\n<h4>2. Daftar Simbol Baku Flowchart Program (ANSI)</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Simbol</th><th>Bentuk Geometri</th><th>Nama Baku</th><th>Penjelasan Fungsi & Kaidah Pemakaian</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><span style=\"font-size:18px;\">⬭</span></td><td>Oval / Kapsul</td><td><strong>Terminator</strong></td><td>Menandai awal program (<code>START</code>/<code>MULAI</code>) atau akhir program (<code>END</code>/<code>SELESAI</code>). Hanya memiliki 1 garis alir keluar (pada Start) atau 1 garis alir masuk (pada End).</td></tr>\r\n      <tr><td><span style=\"font-size:18px;\">▱</span></td><td>Jajar Genjang</td><td><strong>Input / Output</strong></td><td>Menunjukkan operasi pembacaan data masukan dari keyboard (<code>Read/Input</code>) atau pencetakan keluaran ke layar monitor/printer (<code>Write/Print</code>).</td></tr>\r\n      <tr><td><span style=\"font-size:18px;\">▭</span></td><td>Persegi Panjang</td><td><strong>Process</strong></td><td>Operasi pengolahan internal sistem komputasi (perhitungan aritmatika, manipulasi string, penugasan variabel).</td></tr>\r\n      <tr><td><span style=\"font-size:18px;\">◇</span></td><td>Belah Ketupat (Diamond)</td><td><strong>Decision</strong></td><td>Pengambilan keputusan percabangan berdasarkan kondisi Boolean. Memiliki 1 garis masuk dan minimal 2 garis keluar berlabel kondisi (<em>Ya/Tidak</em> atau <em>True/False</em>).</td></tr>\r\n      <tr><td><span style=\"font-size:18px;\">⬡</span></td><td>Segi Enam (Hexagon)</td><td><strong>Preparation</strong></td><td>Inisialisasi variabel, penentuan nilai awal pencacah (counter), atau pemberian dimensi awal array.</td></tr>\r\n      <tr><td><span style=\"font-size:18px;\">○</span></td><td>Lingkaran Kecil</td><td><strong>On-Page Connector</strong></td><td>Penghubung alur flowchart yang terputus dalam <strong>satu halaman</strong> yang sama untuk menghindari garis panah yang saling silang. Diisi huruf identitas (A, B, C).</td></tr>\r\n      <tr><td><span style=\"font-size:18px;\">⌂</span></td><td>Segi Lima</td><td><strong>Off-Page Connector</strong></td><td>Penghubung alur flowchart yang melompat ke <strong>halaman kertas lain</strong>.</td></tr>\r\n      <tr><td><span style=\"font-size:18px;\">➔</span></td><td>Garis Panah</td><td><strong>Flowline</strong></td><td>Menunjukkan arah urutan eksekusi langkah instruksi (dari atas ke bawah atau kiri ke kanan).</td></tr>\r\n    </tbody>\r\n  </table>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-algo_m4",
        "subject_id": "subject-algo",
        "meeting_number": 4,
        "date": "2026-09-26",
        "title": "Struktur Dasar Algoritma (Struktur Sequence / Runtunan)",
        "description": "Materi perkuliahan pekan ke-4 mata kuliah Algoritma 1.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-algo_4_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 4: Struktur Dasar Algoritma (Struktur Sequence / Runtunan).pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-algo_4_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P4.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-algo_4_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-algo_4",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 4: Struktur Dasar Algoritma (Struktur Sequence / Runtunan)) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. 3 Struktur Kontrol Dasar Teori Bohm-Jacopini</h4>\r\n<p>Menurut Teorema Struktur <strong>Corrado Böhm dan Giuseppe Jacopini (1966)</strong>, setiap permasalahan komputasi serumit apapun dapat diselesaikan hanya dengan mengombinasikan 3 struktur kendali dasar:</p>\r\n<ol>\r\n  <li><strong>Struktur Sequence (Runtunan):</strong> Langkah demi langkah dieksekusi secara sekuensial.</li>\r\n  <li><strong>Struktur Selection (Pemilihan/Percabangan):</strong> Memilih jalur eksekusi berdasarkan kondisi.</li>\r\n  <li><strong>Struktur Repetition (Perulangan/Iterasi):</strong> Mengulang blok instruksi selama kondisi terpenuhi.</li>\r\n</ol>\r\n\r\n<h4>2. Karakteristik Mutlak Struktur Runtunan (Sequence)</h4>\r\n<ul>\r\n  <li>Instruksi dikerjakan secara berurutan baris demi baris, dimulai dari baris pertama hingga baris terakhir.</li>\r\n  <li>Tiap instruksi dilaksanakan tepat satu kali (tidak ada instruksi yang melompat dan tidak ada yang diulang).</li>\r\n  <li>Urutan instruksi yang dilaksanakan oleh prosesor sama persis dengan urutan instruksi yang tertulis dalam teks algoritma.</li>\r\n  <li>Akhir dari instruksi terakhir menandai selesainya eksekusi algoritma.</li>\r\n</ul>\r\n\r\n<h4>3. Studi Kasus Kritis: Algoritma Penukaran Nilai (Swap Values)</h4>\r\n<p>Masalah: Diberikan dua variabel $A = 10$ dan $B = 25$. Tukarlah nilainya sehingga $A = 25$ dan $B = 10$.</p>\r\n<div class=\"code-box\">\r\n  <div class=\"code-header\">\r\n    <span class=\"code-lang\">Analisis Kesalahan Logika Pemula vs Solusi Benar</span>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      }
    ]
  },
  {
    "id": "subject-pascal",
    "name": "Pemrograman 1 (Pascal)",
    "code": "TI-104",
    "lecturer": "Pak Zaeni Miftah / Pak Rizki",
    "schedule": "Selasa • 09:10 - 10:50 WIB • Ruang R.4.5-3",
    "room": "Ruang R.4.5-3",
    "color": "#F59E0B",
    "target_meetings": 16,
    "semester": "Semester 1",
    "academic_year": "2026/2027",
    "meetings": [
      {
        "id": "subject-pascal_m1",
        "subject_id": "subject-pascal",
        "meeting_number": 1,
        "date": "2026-09-19",
        "title": "Filosofi Bahasa Pascal & Struktur Anatomi Program",
        "description": "Materi perkuliahan pekan ke-1 mata kuliah Pemrograman 1 (Pascal).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-pascal_1_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 1: Filosofi Bahasa Pascal & Struktur Anatomi Program.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-pascal_1_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P1.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-pascal_1_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-pascal_1",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 1: Filosofi Bahasa Pascal & Struktur Anatomi Program) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Sejarah & Filosofi Desain Bahasa Pascal</h4>\r\n<p>Bahasa Pascal dirancang oleh <strong>Prof. Niklaus Wirth</strong> di Eidgenössische Technische Hochschule (ETH) Zurich, Swiss pada tahun 1970. Nama Pascal diabadikan untuk menghormati <strong>Blaise Pascal</strong>, filsuf dan matematikawan Prancis penemu kalkulator mekanik roda putar pertama di dunia (<em>Pascaline</em>, 1642).</p>\r\n<p><strong>Ciri Khas Bahasa Pascal:</strong></p>\r\n<ul>\r\n  <li><strong>Terstruktur & Prosedural:</strong> Mendorong modularitas kode menggunakan prosedur dan fungsi.</li>\r\n  <li><strong>Explicit Declaration:</strong> Setiap variabel, konstanta, dan tipe data wajib dideklarasikan di awal blok deklarasi sebelum digunakan dalam blok pernyataan. Pascal menolak variabel liar yang tiba-tiba muncul di tengah eksekusi.</li>\r\n  <li><strong>Strongly Typed:</strong> Penggunaan tipe data sangat ketat. Anda tidak dapat memasukkan tipe string ke dalam variabel integer tanpa konversi eksplisit. Hal ini mencegah bug memori saat runtime.</li>\r\n  <li><strong>Case-Insensitive:</strong> Pascal tidak membedakan huruf besar dan huruf kecil. Kata <code>PROGRAM</code>, <code>Program</code>, dan <code>program</code>, serta variabel <code>NilaiAkhir</code> dan <code>nilaiahkir</code> diperlakukan sama persis oleh kompiler.</li>\r\n</ul>\r\n\r\n<h4>2. Anatomi Baku Program Pascal</h4>\r\n<div class=\"code-box\">\r\n  <div class=\"code-header\">\r\n    <span class=\"code-lang\">Pascal Structure (FPC 3.2.2)</span>\r\n    <button class=\"copy-btn\" onclick=\"copyCode(this)\">Salin</button>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": true
        }
      },
      {
        "id": "subject-pascal_m2",
        "subject_id": "subject-pascal",
        "meeting_number": 2,
        "date": "2026-09-22",
        "title": "Variabel, Konstanta, Tipe Data & Operator Penugasan",
        "description": "Materi perkuliahan pekan ke-2 mata kuliah Pemrograman 1 (Pascal).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-pascal_2_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 2: Variabel, Konstanta, Tipe Data & Operator Penugasan.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-pascal_2_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P2.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-pascal_2_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-pascal_2",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 2: Variabel, Konstanta, Tipe Data & Operator Penugasan) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Aturan Penamaan Pengenal (Identifier) di Pascal</h4>\r\n<ul>\r\n  <li>Karakter pertama wajib berupa huruf abjad (<code>A-Z</code>, <code>a-z</code>) atau garis bawah (<em>underscore</em> <code>_</code>). Tidak boleh diawali oleh angka!</li>\r\n  <li>Karakter kedua dan seterusnya dapat berupa kombinasi huruf, angka, atau underscore.</li>\r\n  <li><strong>Dilarang Menggunakan Spasi:</strong> Gunakan pola <em>camelCase</em> (contoh: <code>gajiBersih</code>) atau underscore (contoh: <code>gaji_bersih</code>).</li>\r\n  <li><strong>Dilarang Menggunakan Simbol Khusus:</strong> Karakter seperti <code>-</code>, <code>+</code>, <code>*</code>, <code>/</code>, <code>@</code>, <code>#</code>, <code>$</code>, <code>%</code>, <code>^</code>, <code>&</code> tidak diizinkan karena merupakan operator reserved.</li>\r\n  <li><strong>Dilarang Menggunakan Reserved Words:</strong> Kata kunci cadangan compiler seperti <code>program</code>, <code>var</code>, <code>begin</code>, <code>end</code>, <code>if</code>, <code>then</code>, <code>else</code>, <code>integer</code>, <code>real</code> tidak boleh dijadikan nama variabel.</li>\r\n</ul>\r\n\r\n<h4>2. Operator Aritmatika & Perbedaan Kritis Pembagian di Pascal</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Operator</th><th>Nama Operasi</th><th>Tipe Data Masukan</th><th>Tipe Data Hasil</th><th>Contoh Evaluasi</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><code>+</code></td><td>Penjumlahan</td><td>Integer atau Real</td><td>Mengikuti tipe operand</td><td><code>10 + 5 = 15</code></td></tr>\r\n      <tr><td><code>-</code></td><td>Pengurangan</td><td>Integer atau Real</td><td>Mengikuti tipe operand</td><td><code>10 - 3 = 7</code></td></tr>\r\n      <tr><td><code>*</code></td><td>Perkalian</td><td>Integer atau Real</td><td>Mengikuti tipe operand</td><td><code>4 * 5 = 20</code></td></tr>\r\n      <tr><td><code>/</code></td><td><strong>Pembagian Real (Pecahan)</strong></td><td>Integer atau Real</td><td><strong>SELALU REAL</strong></td><td><code>7 / 2 = 3.50000000000000E+000</code></td></tr>\r\n      <tr><td><code>div</code></td><td><strong>Pembagian Bulat (Truncation)</strong></td><td>Wajib Integer</td><td><strong>INTEGER</strong></td><td><code>7 div 2 = 3</code> (membuang 0.5)</td></tr>\r\n      <tr><td><code>mod</code></td><td><strong>Sisa Hasil Bagi (Modulo)</strong></td><td>Wajib Integer</td><td><strong>INTEGER</strong></td><td><code>7 mod 2 = 1</code></td></tr>\r\n      <tr><td><code>:=</code></td><td><strong>Assignment (Penugasan)</strong></td><td>Variabel di sisi kiri</td><td>-</td><td><code>x := 100;</code></td></tr>\r\n    </tbody>\r\n  </table>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-pascal_m3",
        "subject_id": "subject-pascal",
        "meeting_number": 3,
        "date": "2026-09-25",
        "title": "Instruksi Input & Output (I/O) dan Pemformatan Real",
        "description": "Materi perkuliahan pekan ke-3 mata kuliah Pemrograman 1 (Pascal).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-pascal_3_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 3: Instruksi Input & Output (I/O) dan Pemformatan Real.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-pascal_3_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P3.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-pascal_3_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-pascal_3",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 3: Instruksi Input & Output (I/O) dan Pemformatan Real) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Perbedaan Mendasar write() vs writeln()</h4>\r\n<ul>\r\n  <li><code>write(parameter);</code> : Mencetak isi parameter (teks string, nilai variabel, atau konstanta) ke layar monitor. Setelah mencetak, <strong>kursor output tetap berada tepat di sebelah kanan karakter terakhir</strong> yang dicetak (tidak membuat baris baru).</li>\r\n  <li><code>writeln(parameter);</code> : Merupakan singkatan dari <em>write line</em>. Mencetak isi parameter ke layar, lalu <strong>otomatis memindahkan kursor ke awal baris baru berikutnya</strong> (menambahkan karakter Enter / Newline).</li>\r\n  <li><code>writeln;</code> (tanpa parameter): Berfungsi mencetak baris kosong (menggeser kursor ke baris baru).</li>\r\n</ul>\r\n\r\n<h4>2. Perbedaan Mendasar read() vs readln()</h4>\r\n<ul>\r\n  <li><code>read(variabel);</code> : Membaca data masukan dari keyboard ke dalam variabel penampung. Posisi kursor pembacaan berhenti tepat setelah karakter terakhir dibaca tanpa membuang karakter Enter. Instruksi pembacaan berikutnya akan terus membaca buffer yang sama.</li>\r\n  <li><code>readln(variabel);</code> : Merupakan singkatan dari <em>read line</em>. Membaca masukan data dari keyboard hingga pengguna menekan tombol Enter, lalu <strong>membuang sisa buffer Enter tersebut dan memindahkan pembacaan ke baris berikutnya</strong>.</li>\r\n  <li><em>Rekomendasi Praktikum Dosen:</em> Selalu gunakan <code>readln</code> untuk membaca input keyboard mahasiswa agar buffer input tidak macet.</li>\r\n</ul>\r\n\r\n<h4>3. Format Angka Real (Formatting Float Output)</h4>\r\n<p>Secara default, jika variabel real dicetak langsung tanpa pemformatan, Pascal akan menampilkannya dalam notasi eksponensial ilmiah yang membingungkan orang awam (misal: <code>3.50000000000000E+001</code> untuk angka 35).</p>\r\n<p>Untuk menampilkannya dalam format desimal baku, gunakan sintaks pemformatan titik dua ganda:</p>\r\n<div style=\"background:var(--surface-elevated); padding:8px 14px; border-left:4px solid var(--primary); font-family:var(--font-mono); font-weight:700;\">\r\n  variabel_real : lebar_kolom_total : jumlah_digit_desimal",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-pascal_m4",
        "subject_id": "subject-pascal",
        "meeting_number": 4,
        "date": "2026-09-28",
        "title": "Struktur Kontrol Percabangan (IF-THEN, IF-THEN-ELSE)",
        "description": "Materi perkuliahan pekan ke-4 mata kuliah Pemrograman 1 (Pascal).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-pascal_4_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 4: Struktur Kontrol Percabangan (IF-THEN, IF-THEN-ELSE).pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-pascal_4_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P4.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-pascal_4_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-pascal_4",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 4: Struktur Kontrol Percabangan (IF-THEN, IF-THEN-ELSE)) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Struktur Percabangan Tunggal (IF - THEN)</h4>\r\n<p>Digunakan jika sebuah blok instruksi hanya akan dieksekusi jika kondisi bernilai TRUE, dan tidak melakukan apa-apa jika kondisi FALSE.</p>\r\n<pre style=\"background:var(--surface); padding:10px; border-radius:6px; font-family:var(--font-mono);\">\r\nif (Kondisi_Boolean) then\r\n  Pernyataan_Tunggal;\r\n\r\n{ Jika pernyataan lebih dari satu (Compound Statement), wajib diapit BEGIN - END; }\r\nif (Kondisi_Boolean) then\r\nbegin\r\n  Pernyataan_1;\r\n  Pernyataan_2;\r\nend;\r\n</pre>\r\n\r\n<h4>2. Struktur Percabangan Ganda (IF - THEN - ELSE)</h4>\r\n<p>Digunakan untuk memilih satu dari dua kemungkinan jalur alternatif berdasarkan hasil evaluasi kondisi.</p>\r\n<div class=\"callout callout-danger\">\r\n  <div class=\"callout-title\">🚨 ATURAN EMAS KOMPILER PASCAL: PANTANGAN TITIK KOMA SEBELUM ELSE!",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      }
    ]
  },
  {
    "id": "subject-inggris",
    "name": "Bahasa Inggris 1",
    "code": "TI-105",
    "lecturer": "Tim Dosen Bahasa Inggris FTIK Unindra",
    "schedule": "Kamis • 07:30 - 09:10 WIB • Ruang R.4.4-4",
    "room": "Ruang R.4.4-4",
    "color": "#8B5CF6",
    "target_meetings": 16,
    "semester": "Semester 1",
    "academic_year": "2026/2027",
    "meetings": [
      {
        "id": "subject-inggris_m1",
        "subject_id": "subject-inggris",
        "meeting_number": 1,
        "date": "2026-09-21",
        "title": "Self-Introduction, Professional Profiling & Daily Activities",
        "description": "Materi perkuliahan pekan ke-1 mata kuliah Bahasa Inggris 1.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-inggris_1_1",
            "type": "pptx",
            "title": "Slide Dosen - Chapter I: Self-Introduction, Professional Profiling & Daily Activities.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-inggris_1_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P1.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-inggris_1_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-inggris_1",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Chapter I: Self-Introduction, Professional Profiling & Daily Activities) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Formal vs Informal Self-Introduction in Academic & Tech Settings</h4>\r\n<ul>\r\n  <li><strong>Formal Introduction (Academic & Workplace):</strong>\r\n    <p><em>\"Good morning, Ladies and Gentlemen. Allow me to introduce myself. My name is Muhammad Haikel Saleh. I am a first-semester undergraduate student majoring in Information Systems at Universitas Indraprasta PGRI. I specialize in frontend development and database design.\"</em></p>\r\n  </li>\r\n  <li><strong>Key Phrases for Personal Profiling:</strong>\r\n    <ul>\r\n      <li><em>\"I am currently studying...\"</em> / <em>\"I am enrolled in...\"</em></li>\r\n      <li><em>\"My main field of interest is software architecture...\"</em></li>\r\n      <li><em>\"I spend most of my time coding in Pascal and Python...\"</em></li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n\r\n<h4>2. Grammar Focus: Simple Present Tense (Habitual Actions & General Truths)</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Pola Kalimat</th><th>Subjek Jamak (I / You / We / They)</th><th>Subjek Tunggal Orang Ketiga (He / She / It)</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Verbal (+)</strong></td><td><code>S + Verb 1 + Object</code><br><em>\"They compile the Pascal code every day.\"</em></td><td><code>S + Verb 1(-s/-es) + Object</code><br><em>\"He compiles the Pascal code every day.\"</em></td></tr>\r\n      <tr><td><strong>Verbal (-)</strong></td><td><code>S + do not (don't) + Verb 1 + Object</code><br><em>\"We do not encounter syntax errors.\"</em></td><td><code>S + does not (doesn't) + Verb 1 + Object</code><br><em>\"She does not encounter syntax errors.\"</em></td></tr>\r\n      <tr><td><strong>Verbal (?)</strong></td><td><code>Do + S + Verb 1 + Object?</code><br><em>\"Do you attend the algorithm lab session?\"</em></td><td><code>Does + S + Verb 1 + Object?</code><br><em>\"Does he understand Boolean logic?\"</em></td></tr>\r\n      <tr><td><strong>Nominal</strong></td><td><code>S + are / am + Complement</code><br><em>\"I am an IT student.\"</em> / <em>\"We are diligent.\"</em></td><td><code>S + is + Complement</code><br><em>\"The compiler is fast.\"</em></td></tr>\r\n    </tbody>\r\n  </table>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": true
        }
      },
      {
        "id": "subject-inggris_m2",
        "subject_id": "subject-inggris",
        "meeting_number": 2,
        "date": "2026-09-24",
        "title": "Procedural Texts & Technical Instructions (How to Make Something)",
        "description": "Materi perkuliahan pekan ke-2 mata kuliah Bahasa Inggris 1.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-inggris_2_1",
            "type": "pptx",
            "title": "Slide Dosen - Chapter II: Procedural Texts & Technical Instructions (How to Make Something).pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-inggris_2_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P2.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-inggris_2_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-inggris_2",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Chapter II: Procedural Texts & Technical Instructions (How to Make Something)) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Generic Structure of Procedural Text</h4>\r\n<ol>\r\n  <li><strong>Goal / Aim:</strong> Menyatakan tujuan atau sasaran tugas yang akan dicapai (seringkali dijadikan judul: <em>\"How to Set Up Free Pascal Compiler on Windows 11\"</em>).</li>\r\n  <li><strong>Materials / Tools / Prerequisites:</strong> Daftar perangkat keras, perangkat lunak, dependensi, atau pustaka yang diperlukan sebelum memulai (contoh: <em>PC with Windows OS, FPC 3.2.2 installer file, 500 MB free storage</em>).</li>\r\n  <li><strong>Steps / Methods:</strong> Serangkaian instruksi kerja yang disusun secara runut kronologis dan tidak boleh diacak-acak.</li>\r\n</ol>\r\n\r\n<h4>2. Language Features of Procedural Texts</h4>\r\n<ul>\r\n  <li><strong>Imperative Sentences (Kalimat Perintah):</strong> Dimulai langsung dengan Kata Kerja Bentuk Pertama (Verb 1) tanpa subjek nominal:\r\n    <ul>\r\n      <li><em>\"Download the executable installer from the official website.\"</em></li>\r\n      <li><em>\"Extract the zip file to the local directory.\"</em></li>\r\n      <li><em>\"Do not close the terminal window while compiling.\"</em> (Negative imperative).</li>\r\n    </ul>\r\n  </li>\r\n  <li><strong>Temporal Conjunctions & Sequence Connectors:</strong>\r\n    <p><em>First, ...</em> &rarr; <em>Second, ...</em> &rarr; <em>Then, ...</em> &rarr; <em>Next, ...</em> &rarr; <em>After that, ...</em> &rarr; <em>Finally, ...</em></p>\r\n  </li>\r\n  <li><strong>Action Verbs in Computing:</strong> <em>install, execute, initialize, configure, debug, compile, deploy, terminate</em>.</li>\r\n</ul>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-inggris_m3",
        "subject_id": "subject-inggris",
        "meeting_number": 3,
        "date": "2026-09-27",
        "title": "Recount Texts & Talking about Past Holiday / Experiences",
        "description": "Materi perkuliahan pekan ke-3 mata kuliah Bahasa Inggris 1.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-inggris_3_1",
            "type": "pptx",
            "title": "Slide Dosen - Chapter III: Recount Texts & Talking about Past Holiday / Experiences.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-inggris_3_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P3.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-inggris_3_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-inggris_3",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Chapter III: Recount Texts & Talking about Past Holiday / Experiences) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Grammar Focus: Simple Past Tense (Past Incident / Historical Fact)</h4>\r\n<p>Digunakan untuk menceritakan aktivitas, kejadian, atau peristiwa yang telah dimulai dan selesai di masa lampau pada titik waktu spesifik yang definitif.</p>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Pola Kalimat</th><th>Bentuk Pola</th><th>Contoh Kalimat Akademis / Liburan</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Verbal (+)</strong></td><td><code>S + Verb 2 (Past Form) + Object + Time Adverb</code></td><td><em>\"Our class visited the National Museum last month.\"</em></td></tr>\r\n      <tr><td><strong>Verbal (-)</strong></td><td><code>S + did not (didn't) + Verb 1 + Object</code></td><td><em>\"We did not study programming during the holiday.\"</em></td></tr>\r\n      <tr><td><strong>Verbal (?)</strong></td><td><code>Did + S + Verb 1 + Object?</code></td><td><em>\"Did you write the project proposal yesterday?\"</em></td></tr>\r\n      <tr><td><strong>Nominal (+)</strong></td><td><code>S + was / were + Complement (Adj/Noun)</code></td><td><em>\"The assignment was very challenging.\"</em> / <em>\"They were in Bandung.\"</em></td></tr>\r\n    </tbody>\r\n  </table>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-inggris_m4",
        "subject_id": "subject-inggris",
        "meeting_number": 4,
        "date": "2026-09-30",
        "title": "Talking about Future Intentions & Planning (Will vs Be Going To)",
        "description": "Materi perkuliahan pekan ke-4 mata kuliah Bahasa Inggris 1.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-inggris_4_1",
            "type": "pptx",
            "title": "Slide Dosen - Chapter IV: Talking about Future Intentions & Planning (Will vs Be Going To).pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-inggris_4_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P4.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-inggris_4_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-inggris_4",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Chapter IV: Talking about Future Intentions & Planning (Will vs Be Going To)) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Komparasi Gramatikal: WILL vs BE GOING TO</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Aspek Pembeda</th><th>WILL (Modal Auxiliary)</th><th>BE GOING TO (Semi-Modal)</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Struktur Rumus</strong></td><td><code>S + will + Verb 1 + Object</code></td><td><code>S + am / is / are + going to + Verb 1 + Object</code></td></tr>\r\n      <tr><td><strong>Waktu Pengambilan Niat / Keputusan</strong></td><td><strong>Spontan (On the spot):</strong> Keputusan baru saja diputuskan pada saat berbicara tanpa rencana sebelumnya.</td><td><strong>Rencana Terencana (Pre-meditated plan):</strong> Sudah dipikirkan, dirancang, dan diniatkan sebelum saat berbicara.</td></tr>\r\n      <tr><td><strong>Contoh Niat</strong></td><td><em>\"Someone is ringing the doorbell. I will open the door.\"</em></td><td><em>\"I am going to submit my algorithm project next Tuesday because I finished it yesterday.\"</em></td></tr>\r\n      <tr><td><strong>Sifat Prediksi Masa Depan</strong></td><td><strong>Prediksi Subjektif:</strong> Berdasarkan opini pribadi, harapan, firasat, atau dugaan tanpa bukti fisik konkret.</td><td><strong>Prediksi Berbasis Bukti Nyata:</strong> Ada tanda-tanda atau bukti fisik konkret yang sedang terlihat saat ini.</td></tr>\r\n      <tr><td><strong>Contoh Prediksi</strong></td><td><em>\"I think artificial intelligence will transform education in 2030.\"</em></td><td><em>\"Look at the dark clouds gathering above! It is going to rain in a few minutes.\"</em></td></tr>\r\n      <tr><td><strong>Fungsi Khusus Lainnya</strong></td><td>Janji (<em>\"I will always help you\"</em>), Penawaran bantuan (<em>\"Will you take a cup of coffee?\"</em>), Penolakan (<em>\"The laptop will not boot\"</em>).</td><td>Peristiwa tak terelakkan yang segera terjadi di depan mata (<em>\"Watch out! The glass is going to fall!\"</em>).</td></tr>\r\n    </tbody>\r\n  </table>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      }
    ]
  },
  {
    "id": "subject-matdas",
    "name": "Matematika Dasar",
    "code": "TI-106",
    "lecturer": "Dr. Munali, M.Pd.",
    "schedule": "Kamis • 09:10 - 10:50 WIB • Ruang R.4.4-4",
    "room": "Ruang R.4.4-4",
    "color": "#EC4899",
    "target_meetings": 16,
    "semester": "Semester 1",
    "academic_year": "2026/2027",
    "meetings": [
      {
        "id": "subject-matdas_m1",
        "subject_id": "subject-matdas",
        "meeting_number": 1,
        "date": "2026-09-23",
        "title": "Pertemuan 1 & 2: Sistem Bilangan Real, Pertidaksamaan & Nilai Mutlak",
        "description": "Materi perkuliahan pekan ke-1 mata kuliah Matematika Dasar.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-matdas_1_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 1 & 2: Sistem Bilangan Real, Pertidaksamaan & Nilai Mutlak.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-matdas_1_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P1.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-matdas_1_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-matdas_1",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 1 & 2: Sistem Bilangan Real, Pertidaksamaan & Nilai Mutlak) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Hierarki & Klasifikasi Himpunan Bilangan</h4>\r\n<p>Dalam analisis matematika dasar, sistem bilangan terstruktur secara hierarkis:</p>\r\n$$\\mathbb{N} \\subset \\mathbb{W} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R} \\subset \\mathbb{C}$$\r\n<ul>\r\n  <li><strong>Bilangan Asli ($\\mathbb{N}$ - Natural Numbers):</strong> $\\{1, 2, 3, 4, ...\\}$.</li>\r\n  <li><strong>Bilangan Cacah ($\\mathbb{W}$ - Whole Numbers):</strong> $\\{0, 1, 2, 3, ...\\}$.</li>\r\n  <li><strong>Bilangan Bulat ($\\mathbb{Z}$ - Integers):</strong> $\\{..., -3, -2, -1, 0, 1, 2, 3, ...\\}$.</li>\r\n  <li><strong>Bilangan Rasional ($\\mathbb{Q}$):</strong> Bilangan yang dapat dinyatakan dalam bentuk pecahan $\\frac{a}{b}$ dengan $a, b \\in \\mathbb{Z}$ dan $b \\neq 0$. Memiliki representasi desimal berhenti (misal $0.75$) atau desimal berulang tak hingga (misal $0.333...$).</li>\r\n  <li><strong>Bilangan Irasional:</strong> Bilangan yang tidak dapat dinyatakan dalam pecahan $\\frac{a}{b}$. Desimal tak berulang dan tak terhingga (contoh: $\\sqrt{2} \\approx 1.4142...$, $\\pi \\approx 3.14159...$, $e \\approx 2.71828...$).</li>\r\n  <li><strong>Bilangan Real ($\\mathbb{R}$):</strong> Gabungan himpunan seluruh bilangan rasional dan irasional yang memenuhi garis bilangan kontinu.</li>\r\n</ul>\r\n\r\n<h4>2. Pertidaksamaan Aljabar & Teorema Pembalikan Tanda</h4>\r\n<p>Pertidaksamaan adalah pernyataan matematis yang memuat relasi pembanding ($<, >, \\le, \\ge$).</p>\r\n<div class=\"callout callout-danger\">\r\n  <div class=\"callout-title\">🚨 TEOREMA EMAS PERTIDAKSAMAAN: PEMBALIKAN TANDA KETAKSAMAAN",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": true
        }
      },
      {
        "id": "subject-matdas_m2",
        "subject_id": "subject-matdas",
        "meeting_number": 2,
        "date": "2026-09-26",
        "title": "Persamaan Garis Lurus, Gradien & Hubungan Garis",
        "description": "Materi perkuliahan pekan ke-2 mata kuliah Matematika Dasar.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-matdas_2_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 3: Persamaan Garis Lurus, Gradien & Hubungan Garis.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-matdas_2_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P2.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-matdas_2_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-matdas_2",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 3: Persamaan Garis Lurus, Gradien & Hubungan Garis) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Konsep Gradien (Kemiringan Garis)</h4>\r\n<p>Gradien (dilambangkan $m$) adalah ukuran kemiringan atau kecuraman suatu garis terhadap sumbu horizontal $X$. Gradien merupakan rasio perubahan nilai ordinat ($\\Delta y$) terhadap perubahan absis ($\\Delta x$):</p>\r\n$$m = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$$\r\n\r\n<h4>2. Bentuk-Bentuk Persamaan Garis Lurus</h4>\r\n<ol>\r\n  <li><strong>Bentuk Eksplisit:</strong> $y = mx + c$, di mana $m$ adalah gradien dan $c$ adalah titik potong sumbu $Y$ di koordinat $(0, c)$.</li>\r\n  <li><strong>Bentuk Umum (Implisit):</strong> $Ax + By + C = 0$. Gradien garis ini adalah:\r\n    $$m = -\\frac{A}{B}$$\r\n  </li>\r\n  <li><strong>Persamaan Garis Melalui Titik $(x_1, y_1)$ dengan Gradien $m$:</strong>\r\n    $$y - y_1 = m(x - x_1)$$\r\n  </li>\r\n  <li><strong>Persamaan Garis Melalui Dua Titik $(x_1, y_1)$ dan $(x_2, y_2)$ :</strong>\r\n    $$\\frac{y - y_1}{y_2 - y_1} = \\frac{x - x_1}{x_2 - x_1}$$\r\n  </li>\r\n</ol>\r\n\r\n<h4>3. Hubungan Posisi Antara Dua Garis Lurus</h4>\r\n<ul>\r\n  <li><strong>Dua Garis Sejajar ($g_1 \\parallel g_2$):</strong> Memiliki kemiringan yang sama persis sehingga kedua garis tidak akan pernah berpotongan:\r\n    $$m_1 = m_2$$\r\n  </li>\r\n  <li><strong>Dua Garis Tegak Lurus ($g_1 \\perp g_2$):</strong> Berpotongan membentuk sudut siku-siku $90^\\circ$. Hasil kali kedua gradiennya sama dengan $-1$:\r\n    $$m_1 \\cdot m_2 = -1 \\iff m_2 = -\\frac{1}{m_1}$$\r\n  </li>\r\n</ul>\r\n\r\n<h4>4. Pembahasan Soal Kontekstual Kuliah Dr. Munali</h4>\r\n<div class=\"callout callout-success\">\r\n  <div class=\"callout-title\">✈️ Soal Kontekstual Penerbangan (Slide 7 Dr. Munali)",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-matdas_m3",
        "subject_id": "subject-matdas",
        "meeting_number": 3,
        "date": "2026-09-29",
        "title": "Pertemuan 3",
        "description": "Materi perkuliahan pekan ke-3 mata kuliah Matematika Dasar.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-matdas_3_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 3.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-matdas_3_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P3.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-matdas_3_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-matdas_3",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 3) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<p>Materi kuliah pertemuan ini.</p>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-matdas_m4",
        "subject_id": "subject-matdas",
        "meeting_number": 4,
        "date": "2026-09-32",
        "title": "Eksponen, Bentuk Akar & Logaritma",
        "description": "Materi perkuliahan pekan ke-4 mata kuliah Matematika Dasar.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-matdas_4_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 4: Eksponen, Bentuk Akar & Logaritma.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-matdas_4_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P4.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-matdas_4_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-matdas_4",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 4: Eksponen, Bentuk Akar & Logaritma) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. 8 Sifat Utama Eksponen (Bilangan Berpangkat)</h4>\r\n<ol>\r\n  <li>$a^m \\cdot a^n = a^{m+n}$ (Perkalian basis sama: pangkat dijumlahkan).</li>\r\n  <li>$\\frac{a^m}{a^n} = a^{m-n}$ (Pembagian basis sama: pangkat dikurangkan).</li>\r\n  <li>$(a^m)^n = a^{m \\cdot n}$ (Pangkat dipangkatkan: pangkat dikalikan).</li>\r\n  <li>$(a \\cdot b)^n = a^n \\cdot b^n$ (Pangkat perkalian didistribusikan).</li>\r\n  <li>$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$ dengan $b \\neq 0$.</li>\r\n  <li>$a^0 = 1$ untuk setiap $a \\neq 0$ (Setiap bilangan real bukan nol berpangkat 0 adalah 1).</li>\r\n  <li>$a^{-n} = \\frac{1}{a^n}$ (Pangkat negatif diubah menjadi pecahan positif di penyebut).</li>\r\n  <li>$a^{m/n} = \\sqrt[n]{a^m}$ (Pangkat pecahan ekuivalen dengan bentuk radikal akar).</li>\r\n</ol>\r\n\r\n<h4>2. Operasi Bentuk Akar & Merasionalkan Penyebut</h4>\r\n<ul>\r\n  <li>Penjumlahan/Pengurangan: $p\\sqrt{a} \\pm q\\sqrt{a} = (p \\pm q)\\sqrt{a}$.</li>\r\n  <li>Perkalian Sekawan: $(\\sqrt{a} + \\sqrt{b})(\\sqrt{a} - \\sqrt{b}) = a - b$.</li>\r\n  <li><strong>Teknik Merasionalkan Penyebut Pecahan:</strong>\r\n    <ul>\r\n      <li>Bentuk $\\frac{a}{\\sqrt{b}}$ dikalikan $\\frac{\\sqrt{b}}{\\sqrt{b}}$:\r\n        $$\\frac{a}{\\sqrt{b}} = \\frac{a\\sqrt{b}}{b}$$\r\n      </li>\r\n      <li>Bentuk $\\frac{c}{\\sqrt{a} + \\sqrt{b}}$ dikalikan bentuk sekawan $\\frac{\\sqrt{a} - \\sqrt{b}}{\\sqrt{a} - \\sqrt{b}}$:\r\n        $$\\frac{c}{\\sqrt{a} + \\sqrt{b}} = \\frac{c(\\sqrt{a} - \\sqrt{b})}{a - b}$$\r\n      </li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n\r\n<h4>3. Logaritma: Definisi & 10 Sifat Pokok</h4>\r\n<p><strong>Definisi:</strong> Logaritma adalah invers (kebalikan) dari operasi eksponen. Jika $a^c = b$, maka:</p>\r\n$$^a\\log b = c \\quad \\text{dengan basis } a > 0, a \\neq 1, \\text{ dan numerus } b > 0$$\r\n<p><strong>10 Sifat Fundamental Logaritma:</strong></p>\r\n<ol>\r\n  <li>$^a\\log a = 1$</li>\r\n  <li>$^a\\log 1 = 0$</li>\r\n  <li>$^a\\log (b \\cdot c) = ^a\\log b + ^a\\log c$</li>\r\n  <li>$^a\\log \\left(\\frac{b}{c}\\right) = ^a\\log b - ^a\\log c$</li>\r\n  <li>$^a\\log (b^n) = n \\cdot ^a\\log b$</li>\r\n  <li>$^{a^m}\\log (b^n) = \\frac{n}{m} \\cdot ^a\\log b$</li>\r\n  <li>$^a\\log b = \\frac{^c\\log b}{^c\\log a}$ (Sifat ganti basis)</li>\r\n  <li>$^a\\log b = \\frac{1}{^b\\log a}$</li>\r\n  <li>$^a\\log b \\cdot ^b\\log c = ^a\\log c$ (Sifat rantai)</li>\r\n  <li>$a^{^a\\log b} = b$</li>\r\n</ol>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      }
    ]
  },
  {
    "id": "subject-pancasila",
    "name": "Pendidikan Pancasila",
    "code": "TI-107",
    "lecturer": "Tim Dosen Pancasila Unindra",
    "schedule": "Jumat • 07:30 - 09:10 WIB • Ruang R.4.4-1",
    "room": "Ruang R.4.4-1",
    "color": "#3B82F6",
    "target_meetings": 16,
    "semester": "Semester 1",
    "academic_year": "2026/2027",
    "meetings": [
      {
        "id": "subject-pancasila_m1",
        "subject_id": "subject-pancasila",
        "meeting_number": 1,
        "date": "2026-09-25",
        "title": "Landasan & Tujuan Pendidikan Pancasila di Perguruan Tinggi",
        "description": "Materi perkuliahan pekan ke-1 mata kuliah Pendidikan Pancasila.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-pancasila_1_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 1: Landasan & Tujuan Pendidikan Pancasila di Perguruan Tinggi.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-pancasila_1_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P1.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-pancasila_1_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-pancasila_1",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 1: Landasan & Tujuan Pendidikan Pancasila di Perguruan Tinggi) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. 4 Pilar Landasan Penyelenggaraan Kuliah Pancasila</h4>\r\n<ol>\r\n  <li><strong>Landasan Historis:</strong> Nilai-nilai Pancasila bukan diciptakan secara mendadak oleh para pendiri bangsa pada tahun 1945, melainkan digali langsung dari bumi pertiwi Indonesia. Nilai-nilai religius, kekeluargaan, kemanusiaan, musyawarah mufakat, dan gotong royong telah hidup, mengakar, dan dipraktikkan oleh nenek moyang bangsa Nusantara selama berabad-abad dalam kehidupan adat istiadat dan kebudayaannya.</li>\r\n  <li><strong>Landasan Kultural:</strong> Pancasila adalah kristalisasi dari nilai-nilai budaya luhur bangsa Indonesia sendiri. Setiap bangsa di dunia memiliki kepribadian kulturalnya masing-masing. Pancasila menjamin bangsa Indonesia tidak kehilangan identitas kultural dan jati dirinya di tengah arus globalisasi dan gempuran ideologi asing (individualisme, liberalisme, marxisme).</li>\r\n  <li><strong>Landasan Yuridis:</strong> Berpijak kokoh pada ketentuan hukum positif Indonesia:\r\n    <ul>\r\n      <li>Pembukaan UUD 1945 alinea ke-4 (penetapan 5 sila Pancasila sebagai dasar negara Republik Indonesia).</li>\r\n      <li><strong>Undang-Undang No. 12 Tahun 2012 tentang Pendidikan Tinggi (Pasal 35 ayat 3):</strong> Menegaskan bahwa kurikulum pendidikan tinggi <em>wajib</em> memuat mata kuliah Agama, Pancasila, Kewarganegaraan, dan Bahasa Indonesia.</li>\r\n      <li>Surat Keputusan Dirjen Dikti No. 84/E/KPT/2020 tentang Panduan Pelaksanaan Mata Kuliah Wajib Kurikulum (MKWK).</li>\r\n    </ul>\r\n  </li>\r\n  <li><strong>Landasan Filosofis:</strong> Pancasila berkedudukan sebagai pandangan hidup bangsa (<em>Weltanschauung</em>) dan dasar filsafat negara (<em>Philosophische Grondslag</em>). Secara ontologis, epistemologis, dan aksiologis, Pancasila mengandung sistem pemikiran rasional dan filosofis tentang hakikat manusia Indonesia dan tatanan kenegaraan yang adil.</li>\r\n</ol>\r\n\r\n<h4>2. Tujuan Pendidikan Pancasila bagi Mahasiswa IT & Sistem Informasi</h4>\r\n<ul>\r\n  <li>Membentuk kepribadian intelektual yang beriman, bertakwa kepada Tuhan YME, berbudi pekerti luhur, dan berdisiplin tinggi.</li>\r\n  <li>Menumbuhkan etika profesi di bidang teknologi informasi (mencegah cybercrime, kejahatan pembobolan data, korupsi digital, dan ujaran kebencian).</li>\r\n  <li>Membekali mahasiswa dengan daya kritis untuk menyaring hoaks dan pengaruh destruktif di era transformasi digital.</li>\r\n</ul>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": true
        }
      },
      {
        "id": "subject-pancasila_m2",
        "subject_id": "subject-pancasila",
        "meeting_number": 2,
        "date": "2026-09-28",
        "title": "Pancasila dalam Lintas Sejarah Bangsa (Era Pra-Kemerdekaan)",
        "description": "Materi perkuliahan pekan ke-2 mata kuliah Pendidikan Pancasila.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-pancasila_2_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 2: Pancasila dalam Lintas Sejarah Bangsa (Era Pra-Kemerdekaan).pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-pancasila_2_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P2.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-pancasila_2_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-pancasila_2",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 2: Pancasila dalam Lintas Sejarah Bangsa (Era Pra-Kemerdekaan)) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Jejak Nilai Pancasila pada Kerajaan Kuno Nusantara</h4>\r\n<ul>\r\n  <li><strong>Kerajaan Kutai Kertanegara (Kalimantan Timur, 350–400 M):</strong> Prasasti <em>Yupa</em> mencatat nilai Ketuhanan dan kedermawanan Raja Mulawarman yang menyedekahkan 20.000 ekor sapi kepada para brahmana (cerminan sila ke-1 dan ke-2).</li>\r\n  <li><strong>Kemaharajaan Sriwijaya (Sumatera Selatan, Abad VII–XII):</strong>\r\n    <p>Menurut Mr. Muhammad Yamin, Sriwijaya adalah perwujudan <em>Negara Kebangsaan Pertama</em>. Mencerminkan nilai persatuan maritim kepulauan, keadilan tata niaga pelayaran, serta toleransi keagamaan yang tinggi (menjadi pusat studi agama Buddha internasional di Asia Tenggara di bawah bimbingan guru agung Dharmapala dan Sakyakirti).</p>\r\n  </li>\r\n  <li><strong>Kemaharajaan Majapahit (Jawa Timur, Abad XIII–XVI):</strong>\r\n    <p>Di bawah Raja Hayam Wuruk dan Mahapatih Gajah Mada (Sumpah Palapa), Majapahit mewujudkan <em>Negara Kebangsaan Kedua</em>.</p>\r\n    <ul>\r\n      <li><strong>Kitab Negarakertagama (Kakawin Desa Warnana, 1365 M) oleh Mpu Prapanca:</strong> Ditemukan istilah <strong>Pancasila</strong> dalam bahasa Sanskerta yang bermakna \"lima asas moral/tata susila\" (<em>Pancasila Krama</em>): (1) Tidak boleh membunuh, (2) Tidak boleh mencuri, (3) Tidak boleh berzina, (4) Tidak boleh berbohong, (5) Tidak boleh meminum minuman keras yang memabukkan.</li>\r\n      <li><strong>Kitab Sutasoma oleh Mpu Tantular:</strong> Mencetuskan kalimat abadi yang menjadi semboyan resmi lambang Garuda Indonesia:\r\n        <blockquote style=\"border-left:4px solid var(--primary); padding:6px 12px; font-style:italic; background:var(--surface-elevated);\">\r\n          \"Rwaneka dhatu winuwus Buddha Wiswa, Bhinêki rakwa ring apan kena parwanosen, Mangka ng Jinatwa kalawan Siwatatwa tunggal, <strong>Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa</strong>\"\r\n        </blockquote>\r\n        Artinya: Walaupun Buddha dan Siwa berbeda, keduanya adalah satu. Berbeda-beda itu, tetapi satu jua; tidak ada kebenaran yang mendua (prinsip persatuan dalam keanekaragaman agama dan suku).\r\n      </li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n\r\n<h4>2. Era Penjajahan Barat & Kebangkitan Nasional 1908</h4>\r\n<p>Perjuangan kedaerahan sebelum abad ke-20 selalu mengalami kegagalan akibat politik adu domba Belanda (<em>Devide et Impera</em>). Berdirinya <strong>Boedi Oetomo</strong> (20 Mei 1908) menandai era baru pergerakan nasional berbasis persatuan intelektual modern, disusul oleh Ikrar <strong>Sumpah Pemuda 1928</strong> yang mengkristalkan ikrar satu tanah air, satu bangsa, dan satu bahasa persatuan.</p>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-pancasila_m3",
        "subject_id": "subject-pancasila",
        "meeting_number": 3,
        "date": "2026-09-31",
        "title": "Perumusan & Pengesahan Pancasila sebagai Dasar Negara",
        "description": "Materi perkuliahan pekan ke-3 mata kuliah Pendidikan Pancasila.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-pancasila_3_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 3: Perumusan & Pengesahan Pancasila sebagai Dasar Negara.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-pancasila_3_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P3.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-pancasila_3_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-pancasila_3",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 3: Perumusan & Pengesahan Pancasila sebagai Dasar Negara) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Sidang BPUPKI I (29 Mei – 1 Juni 1945)</h4>\r\n<p>Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan Indonesia (BPUPKI / <em>Dokuritsu Junbi Cosakai</em>) dipimpin Dr. K.R.T. Radjiman Wedyodiningrat. Membahas pertanyaan mendasar: <em>\"Apa dasar negara Indonesia merdeka yang akan kita bentuk?\"</em></p>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Tokoh Perumus</th><th>Tanggal Pidato</th><th>Gagasan 5 Dasar Negara yang Diajukan</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Mr. Muhammad Yamin</strong></td><td>29 Mei 1945</td><td>1. Peri Kebangsaan, 2. Peri Kemanusiaan, 3. Peri Ketuhanan, 4. Peri Kerakyatan, 5. Kesejahteraan Rakyat. (Usulan tertulis: Ketuhanan Yang Maha Esa, Kebangsaan Persatuan Indonesia, Rasa Kemanusiaan yang Adil dan Beradab, Kerakyatan yang dipimpin oleh hikmat kebijaksanaan..., Keadilan sosial bagi seluruh rakyat Indonesia).</td></tr>\r\n      <tr><td><strong>Prof. Dr. Soepomo</strong></td><td>31 Mei 1945</td><td>Mengajukan <strong>Teori Negara Integralistik (Negara Persatuan)</strong>: Menolak teori individualisme (Eropa barat) dan teori kelas/Marxisme. Negara adalah satu kesatuan organik dengan rakyatnya; mengatasi semua golongan dan agama. 5 Prinsip: 1. Persatuan, 2. Kekeluargaan, 3. Keseimbangan lahir dan batin, 4. Musyawarah, 5. Keadilan rakyat.</td></tr>\r\n      <tr><td><strong>Ir. Soekarno</strong></td><td>1 Juni 1945</td><td>Berpidato tanpa teks mencetuskan nama <strong>Pancasila</strong>: 1. Kebangsaan Indonesia (Nasionalisme), 2. Internasionalisme atau Peri-Kemanusiaan, 3. Mufakat atau Demokrasi, 4. Kesejahteraan Sosial, 5. Ketuhanan yang Berkebudayaan.<br>Diperas menjadi <strong>Trisila</strong> (Sosio-Nasionalisme, Sosio-Demokrasi, Ketuhanan) dan diperas lagi menjadi <strong>Ekasila</strong> (Gotong Royong). Hari ini diperingati sebagai <strong>Hari Lahir Pancasila</strong>.</td></tr>\r\n    </tbody>\r\n  </table>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-pancasila_m4",
        "subject_id": "subject-pancasila",
        "meeting_number": 4,
        "date": "2026-09-34",
        "title": "Dinamika & Dialektika Pancasila Pasca Kemerdekaan",
        "description": "Materi perkuliahan pekan ke-4 mata kuliah Pendidikan Pancasila.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-pancasila_4_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 4: Dinamika & Dialektika Pancasila Pasca Kemerdekaan.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-pancasila_4_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P4.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-pancasila_4_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-pancasila_4",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 4: Dinamika & Dialektika Pancasila Pasca Kemerdekaan) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Periode 1945 – 1950 (Awal Kemerdekaan)</h4>\r\n<p>Penerapan Pancasila menghadapi ancaman pemberontakan bersenjata yang berupaya mengganti ideologi negara:</p>\r\n<ul>\r\n  <li><strong>Pemberontakan PKI Madiun (18 September 1948):</strong> Dipimpin oleh Musso dan Amir Sjarifuddin yang ingin mendirikan Republik Soviet Indonesia berideologi Komunis/Marxisme-Leninisme. Berhasil ditumpas TNI.</li>\r\n  <li><strong>Pemberontakan DI/TII (Darul Islam / Tentara Islam Indonesia - 1949):</strong> Dipimpin oleh S.M. Kartosuwiryo di Jawa Barat yang memproklamasikan Negara Islam Indonesia (NII) untuk menggantikan Pancasila dengan dasar syariat Islam murni.</li>\r\n</ul>\r\n\r\n<h4>2. Periode 1950 – 1959 (Era Demokrasi Liberal & UUDS 1950)</h4>\r\n<ul>\r\n  <li>Penerapan sistem kabinet parlementer barat menyebabkan instabilitas politik nasional; terjadi pergantian kabinet sebanyak 7 kali dalam kurun waktu 9 tahun.</li>\r\n  <li>Meskipun Pemilu 1955 berlangsung sangat demokratis, Dewan Konstituante mengalami <em>deadlock</em> (kebuntuan total) dalam merumuskan UUD baru karena perdebatan tanpa ujung antara blok dasar negara Pancasila vs blok dasar negara Islam.</li>\r\n  <li>Presiden Soekarno mengeluarkan <strong>Dekrit Presiden 5 Juli 1959</strong>: (1) Membubarkan Konstituante, (2) Memberlakukan kembali UUD 1945 dan tidak berlakunya UUDS 1950, (3) Membentuk MPRS dan DPAS.</li>\r\n</ul>\r\n\r\n<h4>3. Periode 1959 – 1965 (Orde Lama / Demokrasi Terpimpin)</h4>\r\n<div class=\"callout callout-warning\">\r\n  <div class=\"callout-title\">⚠️ Penyimpangan Konstitusional Orde Lama terhadap Pancasila",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      }
    ]
  },
  {
    "id": "subject-pai",
    "name": "Pendidikan Agama Islam (PAI)",
    "code": "TI-108",
    "lecturer": "Tim Dosen PAI Unindra",
    "schedule": "Jumat • 09:10 - 10:50 WIB • Ruang R.4.4-1",
    "room": "Ruang R.4.4-1",
    "color": "#14B8A6",
    "target_meetings": 16,
    "semester": "Semester 1",
    "academic_year": "2026/2027",
    "meetings": [
      {
        "id": "subject-pai_m1",
        "subject_id": "subject-pai",
        "meeting_number": 1,
        "date": "2026-09-27",
        "title": "Visi Perkuliahan Islam & Fondasi Tauhid Komprehensif",
        "description": "Materi perkuliahan pekan ke-1 mata kuliah Pendidikan Agama Islam (PAI).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-pai_1_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 1: Visi Perkuliahan Islam & Fondasi Tauhid Komprehensif.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-pai_1_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P1.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-pai_1_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-pai_1",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 1: Visi Perkuliahan Islam & Fondasi Tauhid Komprehensif) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Visi, Misi & Tujuan PAI di Perguruan Tinggi</h4>\r\n<ul>\r\n  <li>Membentuk sarjana muslim yang memiliki integritas ilmiah, profesional, bertakwa kepada Allah SWT, dan berhiaskan akhlak mulia (<em>akhlakul karimah</em>).</li>\r\n  <li>Membangun landasan berpikir berdasar pada dua sumber primer hukum Islam: <strong>Al-Qur'anul Karim</strong> dan <strong>As-Sunnah An-Nabawiyyah Ash-Shahihah</strong>.</li>\r\n  <li>Mewujudkan jiwa antikorupsi, kejujuran intelektual, dan etika tanggung jawab profesional dalam pemanfaatan sains dan teknologi.</li>\r\n</ul>\r\n\r\n<h4>2. Hakikat & Tiga Dimensi Tauhid (Trilogi Tauhid)</h4>\r\n<p>Tauhid secara bahasa berarti mengesakan. Secara terminologi adalah meyakini keesaan Allah SWT dalam segala hal yang menjadi kekhususan bagi-Nya. Menurut para ulama Ahlussunnah wal Jama'ah, tauhid terbagi menjadi 3 dimensi terpadu:</p>\r\n<ol>\r\n  <li><strong>Tauhid Rububiyyah:</strong>\r\n    <ul>\r\n      <li><em>Definisi:</em> Mengesakan Allah SWT dalam segala perbuatan-Nya sendiri, meyakini bahwa hanya Allah satu-satunya Pencipta (<em>Al-Khaliq</em>), Pemilik, Pemelihara, Pengatur alam semesta (<em>Al-Mudabbir</em>), dan Pemberi rezeki (<em>Ar-Raziq</em>) bagi seluruh makhluk tanpa sekutu.</li>\r\n      <li><em>Dalil:</em> QS. Al-Fatihah: 2 (<em>\"Alhamdulillahi Rabbil 'Alamin\"</em> - Segala puji bagi Allah, Tuhan Semesta Alam).</li>\r\n    </ul>\r\n  </li>\r\n  <li><strong>Tauhid Uluhiyyah (Tauhid Ibadah):</strong>\r\n    <ul>\r\n      <li><em>Definisi:</em> Mengesakan Allah SWT dalam seluruh perbuatan dan penghambaan hamba-Nya. Meniatkan seluruh ibadah (shalat, doa, nadzar, tawakkal, takut, harap, sembelihan) hanya murni ditujukan kepada Allah SWT semata. Menolak segala bentuk penyekutuan (<em>syirik</em>).</li>\r\n      <li><em>Dalil:</em> QS. Adz-Dzariyat: 56 (<em>\"Wamaa khalaqtul jinna wal insa illa liya'buduun\"</em> - Dan tidaklah Aku ciptakan jin dan manusia melainkan agar mereka menyembah-Ku).</li>\r\n    </ul>\r\n  </li>\r\n  <li><strong>Tauhid Asma wa Shifat:</strong>\r\n    <ul>\r\n      <li><em>Definisi:</em> Menetapkan nama-nama (<em>Asmaul Husna</em>) dan sifat-sifat keagungan bagi Allah SWT sebagaimana yang termaktub dalam Al-Qur'an dan Hadits shahih sesuai dengan kebesaran-Nya, tanpa melakukan:\r\n        <ul>\r\n          <li><em>Tahrif:</em> Mengubah lafaz atau makna sifat.</li>\r\n          <li><em>Ta'thil:</em> Meniadakan atau menolak sifat Allah.</li>\r\n          <li><em>Takyif:</em> Mempertanyakan bagaimanakah bentuk hakikat sifat tersebut.</li>\r\n          <li><em>Tamtsil:</em> Menyerupakan sifat Allah dengan makhluk-Nya.</li>\r\n        </ul>\r\n      </li>\r\n      <li><em>Dalil:</em> QS. Asy-Syura: 11 (<em>\"Laisa kamitslihi syai-un wa huwas sami'ul bashir\"</em> - Tidak ada sesuatu pun yang serupa dengan Dia, dan Dialah Yang Maha Mendengar lagi Maha Melihat).</li>\r\n    </ul>\r\n  </li>\r\n</ol>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": true
        }
      },
      {
        "id": "subject-pai_m2",
        "subject_id": "subject-pai",
        "meeting_number": 2,
        "date": "2026-09-30",
        "title": "Aqidah Islam, Makna & 4 Ruang Lingkup Kajian",
        "description": "Materi perkuliahan pekan ke-2 mata kuliah Pendidikan Agama Islam (PAI).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-pai_2_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 2: Aqidah Islam, Makna & 4 Ruang Lingkup Kajian.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-pai_2_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P2.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-pai_2_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-pai_2",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 2: Aqidah Islam, Makna & 4 Ruang Lingkup Kajian) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Pengertian Aqidah Secara Etimologi & Terminologi</h4>\r\n<ul>\r\n  <li><strong>Etimologi:</strong> Berasal dari kata bahasa Arab: <em>'aqada - ya'qidu - 'aqidatan</em> yang bermakna ikatan simpul yang sangat kuat, kukuh, dan sulit dilepas.</li>\r\n  <li><strong>Terminologi:</strong> Keyakinan dan ketetapan hati yang mantap, mutlak, dan bulat kepada Allah SWT dan perkara-perkara ghaib tanpa ada sedikit pun celah keraguan (<em>syak</em>), kebimbangan, atau dugaan di dalam kalbu sanubari seorang muslim.</li>\r\n</ul>\r\n\r\n<h4>2. Arkanul Iman (6 Rukun Iman)</h4>\r\n<p>Aqidah bertumpu pada 6 rukun iman dalam Hadits Jibril: (1) Iman kepada Allah, (2) Iman kepada Malaikat-Malaikat-Nya, (3) Iman kepada Kitab-Kitab-Nya, (4) Iman kepada Rasul-Rasul-Nya, (5) Iman kepada Hari Kiamat, dan (6) Iman kepada Qadha dan Qadar (takdir baik dan buruk berasal dari ketetapan Allah).</p>\r\n\r\n<h4>3. 4 Ruang Lingkup Aqidah Islam (Model Syaikh Hasan Al-Banna)</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Ruang Lingkup</th><th>Fokus Pembahasan</th><th>Objek Kajian Spesifik</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>1. Ilahiyyat</strong></td><td>Segala hal yang berkaitan langsung dengan Dzat dan Ketuhanan Allah SWT</td><td>Sifat Wajib, Mustahil, Jaiz bagi Allah; Asmaul Husna; Af'alullah (perbuatan Allah).</td></tr>\r\n      <tr><td><strong>2. Nubuwwat</strong></td><td>Segala hal yang berkaitan dengan para Nabi dan Rasul utusan Allah</td><td>Sifat wajib Rasul (Siddiq, Amanah, Tabligh, Fathonah); Mukjizat; Kitab Suci Samawi (Taurat, Zabur, Injil, Al-Qur'an); Sunnah.</td></tr>\r\n      <tr><td><strong>3. Ruhaniyyat</strong></td><td>Segala hal yang berkaitan dengan dimensi alam metafisika dan makhluk halus</td><td>Penciptaan Malaikat dari cahaya; Jin dan Iblis dari nyala api; Hakikat Roh; Setan; Qarin.</td></tr>\r\n      <tr><td><strong>4. Sam'iyyat</strong></td><td>Perkara ghaib eskatologis yang <strong>hanya dapat diketahui melalui pendengaran wahyu</strong> (Al-Qur'an & Sunnah) tanpa bisa dijangkau oleh panca indra manusia</td><td>Tanda-tanda kiamat, sakaratul maut, alam Barzakh (siksa dan nikmat kubur), Yaumul Ba'ats (kebangkitan), Padang Mahsyar, Mizan (timbangan amal), Hisab (perhitungan), Telaga Al-Kautsar, Jembatan Shirath, Surga, dan Neraka.</td></tr>\r\n    </tbody>\r\n  </table>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-pai_m3",
        "subject_id": "subject-pai",
        "meeting_number": 3,
        "date": "2026-09-33",
        "title": "Syariah Islam, Dimensi Ibadah & 5 Hukum Taklifi",
        "description": "Materi perkuliahan pekan ke-3 mata kuliah Pendidikan Agama Islam (PAI).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-pai_3_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 3: Syariah Islam, Dimensi Ibadah & 5 Hukum Taklifi.pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-pai_3_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P3.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-pai_3_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-pai_3",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 3: Syariah Islam, Dimensi Ibadah & 5 Hukum Taklifi) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Pengertian Syariah</h4>\r\n<ul>\r\n  <li>Secara bahasa (etimologi) berarti <em>jalan lurus menuju mata air kehidupan</em>.</li>\r\n  <li>Secara istilah (terminologi) adalah seperangkat aturan, tata tertib, dan ketentuan hukum yang diwahyukan oleh Allah SWT kepada Rasulullah SAW untuk mengatur perbuatan manusia sebagai hamba Allah, sebagai makhluk sosial, dan sebagai pemakmur bumi.</li>\r\n</ul>\r\n\r\n<h4>2. Dua Dimensi Ibadah dalam Syariah</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Dimensi Ibadah</th><th>Ibadah MAKHDAH (Khusus)</th><th>Ibadah GHAIRU MAKHDAH / Muamalah (Umum)</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Definisi & Relasi</strong></td><td>Hubungan vertikal langsung antara hamba dengan Allah (<em>Hablum Minallah</em>).</td><td>Hubungan horizontal antara manusia dengan sesama manusia dan alam (<em>Hablum Minannas</em>).</td></tr>\r\n      <tr><td><strong>Kaidah Fiqih Pokok</strong></td><td><em>\"Al-ashlu fil 'ibaadati al-buthlanu hatta yadulla ad-dalilu 'ala amrihi\"</em><br>(Hukum asal ibadah adalah <strong>TERLARANG / BATAL</strong> kecuali jika ada dalil yang memerintahkannya).</td><td><em>\"Al-ashlu fil mu'amalati al-ibahatu hatta yadulla ad-dalilu 'ala tahrimihi\"</em><br>(Hukum asal muamalah adalah <strong>BOLEH / HALAL</strong> kecuali jika ada dalil yang mengharamkannya).</td></tr>\r\n      <tr><td><strong>Sifat Ketentuan</strong></td><td>Kaku, baku, terinci, tidak boleh dikurangi atau ditambahi (bid'ah).</td><td>Fleksibel, dinamis, terbuka terhadap inovasi sains dan teknologi modern.</td></tr>\r\n      <tr><td><strong>Contoh Konkret</strong></td><td>Tata cara Shalat 5 waktu, Puasa Ramadhan, Zakat, Ibadah Haji.</td><td>Jual-beli online e-commerce, etika koding AI, tolong-menolong, bekerja profesional.</td></tr>\r\n    </tbody>\r\n  </table>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-pai_m4",
        "subject_id": "subject-pai",
        "meeting_number": 4,
        "date": "2026-09-36",
        "title": "Akhlak dalam Islam (Komparasi Etika, Moral & Akhlak)",
        "description": "Materi perkuliahan pekan ke-4 mata kuliah Pendidikan Agama Islam (PAI).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-pai_4_1",
            "type": "pptx",
            "title": "Slide Dosen - Pertemuan 4: Akhlak dalam Islam (Komparasi Etika, Moral & Akhlak).pptx",
            "file_url": "#",
            "file_size": 2450000,
            "date_added": "2026-09-12"
          },
          {
            "id": "mat_subject-pai_4_2",
            "type": "pdf",
            "title": "Modul Diktat Praktikum P4.pdf",
            "file_url": "#",
            "file_size": 1120000,
            "date_added": "2026-09-14"
          },
          {
            "id": "mat_subject-pai_4_3",
            "type": "link",
            "title": "Portal Akademik LMS Unindra & Materi Terkait",
            "file_url": "https://unindra.ac.id",
            "file_size": 0,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-pai_4",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep fundamental pada materi ini (Pertemuan 4: Akhlak dalam Islam (Komparasi Etika, Moral & Akhlak)) adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS). Pastikan menghafal istilah penting dan mampu merekonstruksi skema atau diagram terkait.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Hakikat Akhlak Menurut Hujjatul Islam Imam Al-Ghazali</h4>\r\n<p>Dalam kitab monumentalnya <em>Ihya' 'Ulumiddin</em>, <strong>Imam Abu Hamid Al-Ghazali</strong> merumuskan definisi akhlak:</p>\r\n<blockquote style=\"border-left:4px solid var(--primary); padding:10px 14px; background:var(--surface-elevated); font-style:italic;\">\r\n  \"Al-Khuluqu 'ibaaratun 'an hai-atin fin-nafsi raasikhatin, 'anhaa tashdurul af'aalu bisuhuulatin wa yusrin min ghairi haajatin ilaa fikrin wa ruwiyyah.\"<br>\r\n  (Akhlak adalah suatu kondisi atau sifat yang tertanam kuat di dalam jiwa, yang darinya memancar perbuatan-perbuatan dengan mudah dan spontan tanpa memerlukan pemikiran dan pertimbangan yang panjang).\r\n</blockquote>\r\n<p>Jika seseorang harus berpikir lama dan menimbang-nimbang sebelum memberi sedekah uang seribu rupiah, kedermawanannya belum menjadi akhlaknya. Namun jika tangan kanannya otomatis memberi dengan ikhlas tanpa riya' begitu melihat orang membutuhkan, kedermawanan telah menjadi akhlak yang mengakar.</p>\r\n\r\n<h4>2. Matriks Komparasi Ilmiah: Etika vs Moral vs Akhlak</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Dimensi Pembanding</th><th>ETIKA (Ethics)</th><th>MORAL (Morality)</th><th>AKHLAK (Islamic Ethics)</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Asal Kata & Etimologi</strong></td><td>Bahasa Yunani <em>Ethos</em> (watak, kebiasaan, adat)</td><td>Bahasa Latin <em>Mos</em> / jamaknya <em>Mores</em> (adat kebiasaan)</td><td>Bahasa Arab <em>Khuluqun</em> (tabiat, perangai, ciptaan batin yang serumpun dengan kata <em>Khaliq</em> dan <em>Makhluq</em>)</td></tr>\r\n      <tr><td><strong>Sumber & Tolok Ukur Kebenaran</strong></td><td><strong>Akal Pikiran / Rasio Manusia:</strong> Kesimpulan filosofis berbasis logika logis akal sehat manusia.</td><td><strong>Adat Istiadat / Norma Sosial:</strong> Kesepakatan tradisi budaya yang berlaku dalam suatu komunitas masyarakat tertentu.</td><td><strong>Wahyu Ilahi (Al-Qur'an & As-Sunnah):</strong> Tuntunan mutlak dari Allah SWT yang dicontohkan Rasulullah SAW.</td></tr>\r\n      <tr><td><strong>Sifat Nilai Keberlakuan</strong></td><td><strong>Relatif & Teoretis:</strong> Berubah mengikuti paradigma filsafat dan temuan sains baru.</td><td><strong>Lokal & Terbatas Wilayah:</strong> Berbeda antar daerah (apa yang sopan di Jawa belum tentu sopan di Eropa).</td><td><strong>Mutlak, Abadi & Universal:</strong> Berlaku kapanpun, dimanapun, untuk siapapun hingga akhir zaman (kejujuran selalu mulia, korupsi selalu terkutuk).</td></tr>\r\n      <tr><td><strong>Sanksi Pelanggaran</strong></td><td>Kritik akal sehat, celaan kaum cendekiawan, diskualifikasi etika profesi.</td><td>Sanksi sosial, gunjingan tetangga, pengucilan dari paguyuban adat.</td><td>Dosa di sisi Allah, kegelisahan batin spiritual, dan pertanggungjawaban hisab di akhirat.</td></tr>\r\n      <tr><td><strong>Motivasi Perbuatan</strong></td><td>Pujian rasionalitas, martabat martir profesional, reputasi gelar.</td><td>Penerimaan sosial warga setempat, menjaga nama baik keluarga.</td><td><strong>Murni Mengharap Ridha Allah SWT (Ikhlas Lillahi Ta'ala).</strong></td></tr>\r\n    </tbody>\r\n  </table>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      }
    ]
  }
];

export const initialProfile = {
  id: "usr_haikel_2026",
  email: "haikel@unindra.ac.id",
  full_name: "Muhammad Haikel",
  university: "Universitas Indraprasta PGRI (Unindra)",
  major: "Teknik Informatika / Sistem Informasi",
  class_code: "R1G Reguler",
  semester_active: "Semester 1",
  academic_year: "2026/2027",
  avatar_url: null
};

export const initialSemesters = [
  { id: "sem-1", name: "Semester 1", academic_year: "2026/2027", is_active: true },
  { id: "sem-2", name: "Semester 2", academic_year: "2026/2027", is_active: false },
  { id: "sem-3", name: "Semester 3", academic_year: "2027/2028", is_active: false }
];
