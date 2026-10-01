// Pre-seeded academic data for 8 subjects and 32 meetings (Unindra Semester 1)
// Enriched with real PDF lecture modules from Downloads, Tugas_Kuliah, and RPS Pancasila

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
        },
        "raw_slide_content": "<h4>1. Hakikat Data dan Epistemologi Komputasi</h4>\r\n<p>Secara epistemologis dan praktis, <strong>Data</strong> didefinisikan sebagai representasi mentah dari fakta (<em>raw facts</em>), kejadian (<em>events</em>), atau entitas nyata (orang, tempat, benda, uang, transaksi) yang terekam atau terdokumentasi tanpa makna bawaan yang dapat langsung dipakai untuk pengambilan keputusan strategis.</p>\r\n<ul>\r\n  <li><strong>Sifat Data:</strong> Atomik, belum terstruktur secara semantik, berdiri sendiri, dan berorientasi historis operasional.</li>\r\n  <li><strong>Klasifikasi Data Berdasarkan Format:</strong>\r\n    <ul>\r\n      <li><em>Data Terstruktur:</em> Angka, tanggal, dan teks dalam basis data relasional (RDBMS) yang memiliki tipe dan panjang kolom pasti.</li>\r\n      <li><em>Data Semi-Terstruktur:</em> Berkas JSON, XML, log web server yang memiliki tag identitas namun struktur fleksibel.</li>\r\n      <li><em>Data Tidak Terstruktur:</em> Dokumen PDF, video rekaman CCTV, foto kwitansi, percakapan suara pelanggan yang memerlukan pemrosesan khusus untuk diekstraksi.</li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n\r\n<h4>2. Definisi Informasi Menurut Gordon B. Davis & Pakar Klasik</h4>\r\n<p>Dalam karya monumentalnya <em>Management Information Systems: Conceptual Foundations, Structure, and Development</em>, <strong>Gordon B. Davis</strong> merumuskan definisi standar yang menjadi rujukan kurikulum akademis:</p>\r\n<blockquote style=\"border-left: 4px solid var(--primary); padding-left: 14px; margin: 10px 0; color: var(--text-main); font-style: italic; background: var(--surface-elevated); padding: 10px 14px; border-radius: 4px;\">\r\n  \"Informasi adalah data yang telah diproses ke dalam suatu bentuk yang mempunyai arti bagi si penerima (meaningful) dan mempunyai nilai nyata serta terasa bagi pengambilan keputusan saat ini maupun keputusan masa mendatang.\"\r\n</blockquote>\r\n<p>Kunci distingsi Davis terletak pada 3 kata kunci:</p>\r\n<ol>\r\n  <li><strong>Telah Diproses:</strong> Telah melalui operasi matematis, pengelompokan, agregasi, atau penyaringan.</li>\r\n  <li><strong>Mempunyai Arti bagi Penerima:</strong> Harus berada dalam konteks penerima (data penjualan raw tidak berarti bagi teknisi AC, tetapi sangat bernilai bagi manajer pemasaran).</li>\r\n  <li><strong>Mempunyai Nilai Nyata dalam Pengambilan Keputusan:</strong> Mengurangi ketidakpastian (<em>reducing uncertainty</em>) bagi pengambil kebijakan.</li>\r\n</ol>\r\n\r\n<h4>3. Hierarki DIKW (Data &rarr; Information &rarr; Knowledge &rarr; Wisdom)</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Tingkatan</th><th>Pertanyaan Kunci</th><th>Karakteristik & Nilai Guna</th><th>Contoh Konkret Bisnis Retail</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Data</strong></td><td><em>What? (Fakta)</em></td><td>Catatan transaksi tanpa konteks relasional</td><td><code>100, \"2026-09-30\", \"SKU-992\", 45000</code></td></tr>\r\n      <tr><td><strong>Information</strong></td><td><em>Who, When, Where?</em></td><td>Data yang diagregasi dan memiliki label relasional</td><td>\"Pada 30 September 2026, terjual 100 unit SKU-992 dengan omset Rp4.500.000 di Cabang Jakarta.\"</td></tr>\r\n      <tr><td><strong>Knowledge</strong></td><td><em>How? (Pola & Kaidah)</em></td><td>Informasi yang dipadukan dengan pengalaman dan pemahaman pola</td><td>\"Penjualan SKU-992 selalu melonjak 300% pada akhir bulan saat hari gajian karena produk tersebut adalah kebutuhan pokok.\"</td></tr>\r\n      <tr><td><strong>Wisdom</strong></td><td><em>Why? (Kebijaksanaan)</em></td><td>Kemampuan memproyeksikan wawasan untuk strategi masa depan</td><td>\"Mengalokasikan stok penyangga (buffer stock) 500 unit setiap tanggal 25 dan meluncurkan promo bundling gajian untuk memaksimalkan margin laba.\"</td></tr>\r\n    </tbody>\r\n  </table>"
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
        },
        "raw_slide_content": "<h4>1. 8 Karakteristik Wajib Suatu Sistem (Sistematika Utuh)</h4>\r\n<p>Suatu kesatuan hanya berhak disebut sebagai <strong>Sistem</strong> jika memenuhi 8 karakteristik terpadu berikut:</p>\r\n<ol>\r\n  <li><strong>Komponen Sistem (Components):</strong> Suatu sistem terdiri dari sejumlah komponen yang saling berinteraksi, bekerja sama membentuk satu kesatuan. Komponen dapat berupa subsistem-subsistem yang masing-masing menjalankan fungsinya sendiri namun tetap terintegrasi.</li>\r\n  <li><strong>Batas Sistem (Boundary):</strong> Daerah pemisah antara suatu sistem dengan sistem yang lain atau dengan lingkungan luarnya. Batas sistem menentukan konfigurasi, ruang lingkup, dan kemampuan sistem.</li>\r\n  <li><strong>Lingkungan Luar Sistem (Environment):</strong> Apapun di luar batas sistem yang mempengaruhi operasi sistem. Lingkungan luar dapat bersifat menguntungkan (energi, modal, bahan baku yang harus dijaga) atau merugikan (regulasi pesaing, serangan siber yang harus dikendalikan).</li>\r\n  <li><strong>Penghubung Sistem (Interface):</strong> Media perantara yang memungkinkan sumber daya atau data mengalir dari satu subsistem ke subsistem lainnya. Format output subsistem A harus kompatibel dengan format input subsistem B.</li>\r\n  <li><strong>Masukan Sistem (Input):</strong> Energi yang dimasukkan ke dalam sistem. Dibagi 2:\r\n    <ul>\r\n      <li><em>Maintenance Input:</em> Energi yang dimasukkan agar sistem terus beroperasi (misal: listrik, operating system, pemeliharaan server).</li>\r\n      <li><em>Signal Input:</em> Energi yang diproses untuk menghasilkan keluaran (misal: data transaksi penjualan yang diinput kasir).</li>\r\n    </ul>\r\n  </li>\r\n  <li><strong>Pengolahan Sistem (Process):</strong> Bagian yang mengolah dan mentransformasikan masukan menjadi keluaran. Pada sistem informasi, pengolahan berupa pemrosesan program logika, perhitungan, dan penyimpanan data.</li>\r\n  <li><strong>Keluaran Sistem (Output):</strong> Hasil olahan dari energi yang dimasukkan. Dapat berupa keluaran yang berguna (informasi laporan manajemen) maupun sisa buangan/sampah (<em>waste/log error</em>).</li>\r\n  <li><strong>Sasaran dan Tujuan (Goal & Objective):</strong> Sistem pasti memiliki tujuan (<em>goal</em> untuk ruang lingkup luas) atau sasaran (<em>objective</em> untuk batasan operasional terukur). Kinerja sistem dievaluasi dari seberapa tepat sasaran tercapai.</li>\r\n</ol>\r\n\r\n<h4>2. Taksonomi & Klasifikasi Sistem</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Dimensi Klasifikasi</th><th>Tipe Sistem A</th><th>Tipe Sistem B</th><th>Contoh Pembeda Nyata</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Bentuk Wujud</strong></td><td><strong>Sistem Abstrak:</strong> Berupa gagasan, ide, teologi pemikiran manusia.</td><td><strong>Sistem Fisik:</strong> Memiliki wujud materiil dan komponen kebendaan.</td><td>Sistem Filsafat Etika vs Perangkat Keras Komputer</td></tr>\r\n      <tr><td><strong>Asal Kejadian</strong></td><td><strong>Sistem Alamiah:</strong> Terbentuk secara alami oleh hukum semesta tanpa campur tangan manusia.</td><td><strong>Sistem Buatan Manusia:</strong> Dirancang dan diimplementasikan oleh manusia.</td><td>Sistem Peredaran Darah Manusia vs Sistem Penggajian Karyawan</td></tr>\r\n      <tr><td><strong>Kepastian Operasi</strong></td><td><strong>Sistem Deterministik:</strong> Bekerja dengan tingkah laku yang dapat diprediksi secara presisi 100%.</td><td><strong>Sistem Probabilistik:</strong> Mengandung faktor ketidakpastian dan peluang.</td><td>Program perkalian dua angka vs Sistem Prediksi Harga Saham</td></tr>\r\n      <tr><td><strong>Interaksi Lingkungan</strong></td><td><strong>Sistem Tertutup:</strong> Terisolasi mandiri, tidak menerima pengaruh energi dari luar.</td><td><strong>Sistem Terbuka:</strong> Berinteraksi dinamis dengan lingkungan luarnya.</td><td>Eksperimen kimia dalam tabung vakum vs Organisasi Perusahaan Modern</td></tr>\r\n    </tbody>\r\n  </table>"
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
        },
        "raw_slide_content": "<h4>1. Siklus Pengolahan Informasi (Information Cycle)</h4>\r\n<p>Siklus informasi menggambarkan bagaimana data mengalir dalam loop tak berujung (<em>closed-loop feedback</em>):</p>\r\n<pre style=\"background: var(--surface-elevated); padding: 12px; border-radius: 6px; font-family: var(--font-mono); font-size: 13px;\">\r\n[DATA BARU / FAKTA LAPANGAN]\r\n             │\r\n             ▼\r\n   ┌──────────────────┐\r\n   │ MASUKAN (INPUT)  │ <── Formulir, sensor, input user\r\n   └─────────┬────────┘\r\n             │\r\n             ▼\r\n   ┌──────────────────┐\r\n   │ PENGOLAHAN DATA  │ <── Model logika, program software, rumus\r\n   └─────────┬────────┘\r\n             │\r\n             ▼\r\n   ┌──────────────────┐\r\n   │ KELUARAN (OUTPUT)│ <── Laporan, visualisasi grafik, notifikasi\r\n   └─────────┬────────┘\r\n             │\r\n             ▼\r\n   ┌──────────────────┐\r\n   │     PENERIMA     │ <── Pengambil keputusan (Manajer / User)\r\n   └─────────┬────────┘\r\n             │\r\n             ▼\r\n   ┌──────────────────┐\r\n   │ KEPUTUSAN / AKSI │ <── Tindakan operasional organisasi\r\n   └─────────┬────────┘\r\n             │ (Menghasilkan transaksi baru)\r\n             ▼\r\n       [DATA BARU] ─── (Kembali berputar ke Siklus Input)\r\n</pre>\r\n\r\n<h4>2. 4 Pilar Kualitas Informasi</h4>\r\n<ol>\r\n  <li><strong>Akurat (Accurate):</strong> Informasi harus bebas dari kesalahan-kesalahan, tidak bias, tidak menyesatkan, dan secara presisi mencerminkan fakta maksudnya. Kesalahan data masukan akan berakibat pada output yang salah (prinsip <em>GIGO: Garbage In, Garbage Out</em>). Sub-komponen akurat:\r\n    <ul>\r\n      <li><em>Kelengkapan (Completeness):</em> Seluruh data pendukung tersedia utuh tanpa ada yang terpotong.</li>\r\n      <li><em>Kebenaran (Correctness):</em> Bebas dari salah hitung atau kesalahan pengetikan.</li>\r\n    </ul>\r\n  </li>\r\n  <li><strong>Tepat Waktu (Timeliness):</strong> Informasi yang datang pada penerima tidak boleh terlambat (usang). Informasi yang kadaluarsa tidak mempunyai nilai guna lagi dalam pengambilan keputusan kompetitif dan justru berisiko menimbulkan kerugian finansial.</li>\r\n  <li><strong>Relevan (Relevance):</strong> Informasi harus mempunyai manfaat pemakaian spesifik bagi penerimanya. Relevansi informasi berbeda untuk tiap orang tergantung tingkat jabatan dan fungsinya (misal: manajer keuangan memerlukan laporan neraca laba rugi, bukan log IP address jaringan server).</li>\r\n  <li><strong>Ekonomis (Value of Information):</strong> Nilai suatu informasi diukur dari perbandingan antara manfaat (<em>benefit</em>) yang didapat dengan biaya (<em>cost</em>) yang dikeluarkan untuk memperolehnya. Suatu sistem informasi tidak layak diimplementasikan jika biaya pembuatannya lebih besar daripada nilai tambah operasionalnya.</li>\r\n</ol>\r\n\r\n<h4>3. Arsitektur 6 Blok Pembangun Sistem Informasi (John Burch Framework)</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Nama Blok</th><th>Fungsi Spesifik</th><th>Komponen & Contoh Implementasi</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>1. Blok Masukan (Input Block)</strong></td><td>Metode dan media untuk menangkap data dari sumber aslinya masuk ke sistem</td><td>Keyboard, barcode scanner QRIS, formulir registrasi online, sensor IoT, RFID reader</td></tr>\r\n      <tr><td><strong>2. Blok Model (Model Block)</strong></td><td>Kombinasi prosedur, logika pemrograman, dan model matematika yang memanipulasi data</td><td>Logika perhitungan PPh 21, algoritma rekomendasi e-commerce, rumus depresiasi aset</td></tr>\r\n      <tr><td><strong>3. Blok Keluaran (Output Block)</strong></td><td>Penyajian hasil pemrosesan ke format yang bermakna bagi pengguna</td><td>Faktur tagihan PDF, grafik analitik dashboard React, pesan SMS konfirmasi OTP, laporan audit</td></tr>\r\n      <tr><td><strong>4. Blok Teknologi (Technology Block)</strong></td><td>Kotak alat (tool-box) perangkat penopang jalannya sistem</td><td>Hardware (Server Xeon, PC, RAM), Software (Linux, Windows Server), Jaringan (Router, Fiber Optic, Wi-Fi)</td></tr>\r\n      <tr><td><strong>5. Blok Basis Data (Database Block)</strong></td><td>Tempat penyimpanan kumpulan data terorganisir yang saling berelasi</td><td>RDBMS (PostgreSQL, MySQL, Oracle), NoSQL (MongoDB), Schema tabel, primary key, foreign key</td></tr>\r\n      <tr><td><strong>6. Blok Kendali (Control Block)</strong></td><td>Mekanisme proteksi dan pengamanan sistem dari gangguan, kerusakan, dan serangan</td><td>Enkripsi AES-256, otentikasi 2FA, firewall, sistem backup rutin off-site, uninterruptible power supply (UPS)</td></tr>\r\n    </tbody>\r\n  </table>"
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
        },
        "raw_slide_content": "<h4>1. Piramida Tingkat Manajemen (Model Robert N. Anthony)</h4>\r\n<p>Dalam teori manajemen dan sistem informasi, struktur organisasi terbagi menjadi 3 tingkatan manajerial dengan spektrum kebutuhan informasi yang sangat kontras:</p>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Tingkat Manajerial</th><th>Posisi & Jabatan</th><th>Fokus Perencanaan</th><th>Karakteristik Informasi yang Dibutuhkan</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Top Management (Manajemen Puncak)</strong></td><td>CEO, Direktur Utama, Komisaris, Rektor</td><td>Perencanaan Strategis Jangka Panjang (3 - 5 tahun ke depan)</td><td>Sangat ringkas, berorientasi masa depan, bersumber dari lingkungan eksternal (regulasi, makro ekonomi, tren pasar global), non-rutin.</td></tr>\r\n      <tr><td><strong>Middle Management (Manajemen Madya)</strong></td><td>Manajer Pemasaran, Kepala Cabang, Dekan</td><td>Pengendalian Manajemen & Taktis (Bulanan s.d Tahunan)</td><td>Informasi varians anggaran, perbandingan target vs realisasi, ringkasan kinerja per departemen, informasi taktis periodik.</td></tr>\r\n      <tr><td><strong>Lower / First-Line Management (Manajemen Lini Pertama)</strong></td><td>Supervisor, Kepala Regu, Mandor</td><td>Pengendalian Operasional (Harian s.d Mingguan)</td><td>Sangat detail, terperinci, akurat, bersumber internal, repetitif, data transaksi langsung saat itu juga (real-time).</td></tr>\r\n    </tbody>\r\n  </table>"
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
        },
        "raw_slide_content": "<h4>1. Hakikat Bahasa Menurut Para Ahli Linguistik</h4>\r\n<p>Kajian ilmiah bahasa Indonesia di perguruan tinggi bertumpu pada definisi formal linguistik:</p>\r\n<ul>\r\n  <li><strong>Harimurti Kridalaksana (1993):</strong> <em>\"Bahasa adalah sistem lambang bunyi yang arbitrer yang digunakan oleh para anggota kelompok sosial untuk bekerja sama, berkomunikasi, dan mengidentifikasikan diri.\"</em></li>\r\n  <li><strong>Kamus Besar Bahasa Indonesia (KBBI):</strong> Bahasa adalah sistem lambang bunyi yang arbitrer yang digunakan oleh semua anggota masyarakat untuk bekerja sama, berinteraksi, dan mengidentifikasikan diri.</li>\r\n  <li><strong>12 Ciri Hakiki Bahasa:</strong>\r\n    <ol>\r\n      <li><em>Bahasa adalah Sistem:</em> Bersifat sistematis (tersusun menurut pola teratur) dan sistemik (terdiri atas subsistem fonologi, morfologi, sintaksis, semantik).</li>\r\n      <li><em>Bahasa adalah Lambang:</em> Memiliki tanda yang mewakili suatu konsep atau makna dalam alam nyata.</li>\r\n      <li><em>Bahasa adalah Bunyi:</em> Bunyi vokal yang dihasilkan oleh alat ucap manusia (organ of speech). Bunyi non-alat ucap (tepuk tangan, siulan) bukan bahasa.</li>\r\n      <li><em>Bahasa bersifat Arbitrer:</em> Sewenang-wenang, tidak ada hubungan logis wajib antara lambang bunyi dengan benda yang dilambangkannya (contoh: mengapa hewan berkaki empat pemakan rumput disebut \"kuda\", bukan \"meja\").</li>\r\n      <li><em>Bahasa itu Bermakna:</em> Mengandung konsep atau pesan yang dapat dipahami.</li>\r\n      <li><em>Bahasa bersifat Konvensional:</em> Disepakati bersama oleh komunitas pemakai bahasa.</li>\r\n      <li><em>Bahasa bersifat Unik:</em> Memiliki ciri khas spesifik yang tidak dimiliki bahasa lain (misal: bahasa Indonesia tidak mengenal tenses konjugasi kata kerja seperti bahasa Inggris).</li>\r\n      <li><em>Bahasa bersifat Universal:</em> Semua bahasa memiliki kesamaan universal dasar (memiliki vokal dan konsonan, memiliki subjek dan predikat).</li>\r\n      <li><em>Bahasa bersifat Produktif:</em> Dari sejumlah unsur terbatas (26 huruf abjad), dapat dihasilkan kalimat yang jumlahnya tidak terhingga.</li>\r\n      <li><em>Bahasa itu Bervariasi:</em> Memiliki ragam dialek, sosiolek, dan fungsiolek.</li>\r\n      <li><em>Bahasa itu Dinamis:</em> Selalu berkembang mengikuti perkembangan zaman dan teknologi.</li>\r\n      <li><em>Bahasa itu Manusiawi:</em> Hanya dimiliki dan digunakan secara sempurna oleh manusia.</li>\r\n    </ol>\r\n  </li>\r\n</ul>\r\n\r\n<h4>2. Kedudukan Bahasa Indonesia: Bahasa Nasional vs Bahasa Negara</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Aspek Pembeda</th><th>Bahasa Indonesia sebagai BAHASA NASIONAL</th><th>Bahasa Indonesia sebagai BAHASA NEGARA</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Landasan Yuridis</strong></td><td><strong>Ikrar Sumpah Pemuda</strong> (28 Oktober 1928, Butir ke-3: <em>\"Menjunjung bahasa persatuan, bahasa Indonesia\"</em>)</td><td><strong>UUD 1945 Bab XV Pasal 36</strong> (Disahkan pada 18 Agustus 1945: <em>\"Bahasa Negara ialah Bahasa Indonesia\"</em>)</td></tr>\r\n      <tr><td><strong>Fungsi 1</strong></td><td><strong>Lambang Kebanggaan Kebangsaan:</strong> Mencerminkan nilai-nilai luhur dan kebanggaan jati diri bangsa Indonesia.</td><td><strong>Bahasa Resmi Kenegaraan:</strong> Dipakai dalam upacara kenegaraan, sidang parlemen, pidato kenegaraan, dokumen resmi hukum.</td></tr>\r\n      <tr><td><strong>Fungsi 2</strong></td><td><strong>Lambang Identitas Nasional:</strong> Pembeda unik bangsa Indonesia dari bangsa-bangsa lain di pentas global.</td><td><strong>Bahasa Pengantar Resmi Pendidikan:</strong> Dipakai dari jenjang taman kanak-kanak hingga perguruan tinggi.</td></tr>\r\n      <tr><td><strong>Fungsi 3</strong></td><td><strong>Alat Pemersatu Bangsa:</strong> Menghubungkan ratusan suku bangsa yang berbeda bahasa daerah tanpa menghilangkan identitas kesukuannya.</td><td><strong>Alat Perhubungan Tingkat Nasional:</strong> Dipakai dalam perencanaan pembangunan, administrasi pemerintahan, dan rapat koordinasi nasional.</td></tr>\r\n      <tr><td><strong>Fungsi 4</strong></td><td><strong>Alat Perhubungan Antardaerah & Antarbudaya:</strong> Sarana komunikasi perdagangan dan sosial lintas pulau di Nusantara.</td><td><strong>Sarana Pengembangan IPTEK & Kebudayaan:</strong> Wahana penulisan jurnal ilmiah, publikasi buku cetak, dan kebudayaan nasional.</td></tr>\r\n    </tbody>\r\n  </table>"
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
        },
        "raw_slide_content": "<h4>1. Teori Sosiolinguistik Sikap Bahasa (Garvin & Mathiot)</h4>\r\n<p>Dalam kajian sosiolinguistik oleh <strong>Paul L. Garvin dan Madeleine Mathiot (1968)</strong>, kualitas pemakaian bahasa suatu masyarakat sangat ditentukan oleh sikap bahasa (<em>language attitude</em>). Sikap positif terhadap bahasa ditandai oleh 3 pilar perilaku:</p>\r\n<ol>\r\n  <li><strong>Kesetiaan Berbahasa (Language Loyalty):</strong> Sikap batin yang mendorong suatu kelompok masyarakat penutur untuk mempertahankan kemandirian bahasanya, mencegah masuknya pengaruh bahasa asing secara berlebihan yang berpotensi merusak tatanan gramatikal baku, serta gigih membela eksistensi bahasanya dari ancaman kepunahan.</li>\r\n  <li><strong>Kebanggaan Berbahasa (Language Pride):</strong> Sikap emosional yang mendorong orang atau masyarakat mengutamakan bahasanya dan menggunakannya sebagai lambang identitas dan kesatuan bangsa. Lawan dari kebanggaan bahasa adalah sikap <em>inferioritas</em> (merasa lebih keren atau lebih terpelajar jika mencampuradukkan istilah asing yang sebenarnya sudah ada padanan bakunya dalam bahasa Indonesia).</li>\r\n  <li><strong>Kesadaran akan Adanya Norma/Kaidah Bahasa (Awareness of the Norm):</strong> Kesadaran sukarela untuk menggunakan bahasa secara tertib, cermat, santun, dan taat asas sesuai dengan kaidah baku tata bahasa dan ejaan yang berlaku (EYD V). Sikap ini menjadi faktor pendorong utama seseorang untuk selalu memeriksa kebenaran penulisan karyanya melalui KBBI.</li>\r\n</ol>\r\n\r\n<h4>2. Paradigma: \"Bahasa Indonesia yang Baik dan Benar\"</h4>\r\n<ul>\r\n  <li><strong>Berbahasa yang BAIK:</strong> Penggunaan bahasa yang sesuai dengan situasi, kondisi, dan konteks komunikasi (siapa yang diajak bicara, topik apa yang dibahas, di mana tempatnya). Situasi non-formal santai di warung kopi tidak perlu menggunakan bahasa baku akademis kaku.</li>\r\n  <li><strong>Berbahasa yang BENAR:</strong> Penggunaan bahasa yang patuh dan taat asas terhadap seluruh kaidah gramatikal, fonologi, morfologi, sintaksis, dan kaidah ejaan resmi (EYD).</li>\r\n  <li><strong>Kombinasi Sempurna:</strong> Menggunakan bahasa yang tepat sasaran konteksnya (BAIK) dan sekaligus taat asas aturan kaidahnya (BENAR) pada ranah formal seperti penulisan artikel ilmiah, skripsi, presentasi akademik, dan surat kedinasan.</li>\r\n</ul>"
      },
      {
        "id": "subject-indo_m3",
        "subject_id": "subject-indo",
        "meeting_number": 3,
        "date": "2026-09-21",
        "title": "EYD Edisi V: Pemakaian Huruf, Tanda Baca, dan Penulisan Kata",
        "description": "Materi perkuliahan pekan ke-3 mata kuliah Bahasa Indonesia (MKWK107).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-indo_3_1",
            "type": "pptx",
            "title": "Pertemuan 3-Bahasa Indonesia Unindra OBE.pdf (Slide 99 Halaman)",
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
        },
        "raw_slide_content": "<h4>1. Asal-Usul Rumpun Austronesia & Dialek Melayu Riau</h4>\r\n<p>Berdasarkan kajian linguistik historis komparatif, bahasa Indonesia berinduk dari rumpun <strong>Austronesia</strong> (bahasa kepulauan selatan). Sekitar 25 abad lalu terjadi migrasi bangsa dari daratan Formosa (Taiwan) menuju selatan menyusuri Filipina, Kalimantan, Sumatera, hingga Madagaskar.</p>\r\n<p>Bahasa Melayu yang berkembang pesat adalah <strong>Melayu Riau</strong> (Melayu Tinggi di sekitar Kepulauan Riau dan Semenanjung Malaka). Sejak abad ke-7, bahasa Melayu telah berfungsi sebagai <em>Lingua Franca</em> (bahasa perantara/pergaulan) bagi para pedagang antarpulau, pelaut, dan penyebar agama di kawasan Nusantara.</p>\r\n\r\n<h4>2. Bukti Epigrafi Abad ke-7 Kerajaan Sriwijaya</h4>\r\n<p>Keberadaan bahasa Melayu Kuno terekam abadi dalam prasasti-prasasti batu bertuliskan aksara Pallawa peninggalan Kemaharajaan Sriwijaya:</p>\r\n<ol>\r\n  <li><strong>Prasasti Kedukan Bukit (683 M)</strong> di Palembang, menceritakan perjalanan suci (<em>siddhayatra</em>) Dapunta Hyang membawa 20.000 tentara.</li>\r\n  <li><strong>Prasasti Talang Tuwo (684 M)</strong> di Palembang, tentang pembangunan Taman Sriksetra untuk kemakmuran semua makhluk.</li>\r\n  <li><strong>Prasasti Kota Kapur (686 M)</strong> di Pulau Bangka, memuat kutukan bagi mereka yang memberontak kepada Sriwijaya.</li>\r\n  <li><strong>Prasasti Karang Brahi (686 M)</strong> di Jambi, berisi doa keselamatan dan kepatuhan rakyat.</li>\r\n</ol>\r\n\r\n<h4>3. 4 Alasan Mengapa Bahasa Melayu Diangkat Menjadi Bahasa Indonesia</h4>\r\n<div class=\"callout callout-info\">\r\n  <div class=\"callout-title\">💡 4 Faktor Penentu Pengangkatan Bahasa Melayu (Sidang Kongres Pemuda 1928)"
      },
      {
        "id": "subject-indo_m4",
        "subject_id": "subject-indo",
        "meeting_number": 4,
        "date": "2026-09-24",
        "title": "Bentuk dan Pilihan Kata (Diksi) & Aturan Hukum K/T/S/P",
        "description": "Materi perkuliahan pekan ke-4 mata kuliah Bahasa Indonesia (MKWK107).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_subject-indo_4_1",
            "type": "pptx",
            "title": "1790563821_Pertemuan_4-Bahasa_Indonesia_Unindra_OBE.pdf (Slide 55 Halaman)",
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
          "standar": '<h4>1. Taksonomi Bentuk Kata</h4><p>Bentuk kata terbagi atas: kata dasar, kata berimbuhan (afiksasi), kata ulang (reduplikasi), dan akronim.</p><ul>  <li><strong>Prefiks (Awalan):</strong> ber-, di-, ke-, me-, pe-, se-, ter-</li>  <li><strong>Infiks (Sisipan):</strong> -el- (telunjuk), -er- (gerigi), -em- (gemetar)</li>  <li><strong>Sufiks (Akhiran):</strong> -an, -kan, -i</li>  <li><strong>Konfiks (Gabungan Serentak):</strong> ke-...-an, pe-...-an, per-...-an</li></ul><h4>2. Hukum Emas Peluluhan Fonem K/T/S/P (Krusial UTS)</h4><ul>  <li><strong>Aturan LULUH (KTSP + Vokal):</strong> Awalan me-/pe- bertemu huruf K, T, S, P yang diikuti vokal WAJIB luluh menjadi nasal.    <ul>      <li>K: me- + kupas &rarr; <strong>mengupas</strong></li>      <li>T: me- + tulis &rarr; <strong>menulis</strong></li>      <li>S: me- + siram &rarr; <strong>menyiram</strong></li>      <li>P: me- + pilih &rarr; <strong>memilih</strong></li>    </ul>  </li>  <li><strong>Aturan TIDAK LULUH (KTSP + Konsonan):</strong> Awalan me-/pe- bertemu huruf K, T, S, P yang diikuti konsonan (kluster) TIDAK luluh.    <ul>      <li>K: me- + klasifikasi &rarr; <strong>mengklasifikasi</strong></li>      <li>T: me- + transfer &rarr; <strong>mentransfer</strong></li>      <li>S: me- + stempel &rarr; <strong>menstempel</strong></li>      <li>P: me- + program &rarr; <strong>memprogram</strong> (nomina pelaku: <em>pemrogram</em>)</li>    </ul>  </li></ul><h4>3. Kriteria Pilihan Kata (Diksi) Ilmiah</h4><p>Ketepatan (denotatif vs konotatif), keserasian konteks formal, dan kelaziman kolokasi kata baku sesuai KBBI.</p>',
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        },
        "raw_slide_content": "<h4>1. Kaidah Kritis Pemakaian Huruf Kapital</h4>\r\n<ul>\r\n  <li>Huruf pertama pada awal kalimat (<em>Mahasiswa sedang belajar.</em>).</li>\r\n  <li>Huruf pertama unsur nama orang, termasuk julukan (<em>Amir Hamzah</em>, <em>Ayam Jantan dari Timur</em>).</li>\r\n  <li>Huruf pertama nama tahun, bulan, hari, dan hari besar/keagamaan (<em>tahun Masehi, bulan Agustus, hari Jumat, hari Idulfitri</em>).</li>\r\n  <li>Huruf pertama nama bangsa, suku bangsa, dan bahasa (<em>bangsa Indonesia, suku Sunda, bahasa Inggris</em>; catatan: jika menjadi kata turunan, huruf kecil: <em>mengindonesiakan</em>, <em>keinggris-inggrisan</em>).</li>\r\n  <li>Huruf pertama nama geografi spesifik (<em>Gunung Merapi, Danau Toba, Selat Sunda, Jalan Sudirman</em>).<br>\r\n    ⚠️ <strong>Pengecualian Penting UTS:</strong>\r\n    <ul>\r\n      <li>Nama geografi yang BUKAN nama diri ditulis kecil: <em>berlayar ke teluk, menyeberangi selat, mendaki gunung</em>.</li>\r\n      <li>Nama geografi yang dipakai sebagai nama jenis makanan/benda ditulis huruf kecil: <em>jeruk bali, kunci inggris, petai cina, pisang ambon, kacang bogor</em>.</li>\r\n      <li>Tetapi corak/khas budaya daerah tetap kapital: <em>batik Solo, tarian Bali, masakan Padang</em>.</li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n\r\n<h4>2. Kaidah Pemakaian Huruf Miring (Italic)</h4>\r\n<ul>\r\n  <li>Menuliskan judul buku, majalah, atau surat kabar yang dikutip dalam tulisan (<em>Majalah Tempo, buku Pengantar Ilmu Komputer</em>).</li>\r\n  <li>Menegaskan atau mengkhususkan huruf, bagian kata, atau kelompok kata (<em>Huruf pertama kata abad adalah a.</em>).</li>\r\n  <li>Menuliskan kata atau ungkapan dalam bahasa daerah atau bahasa asing yang belum dibakukan ke dalam bahasa Indonesia (<em>Sistem ini menggunakan metode waterfall.</em>).</li>\r\n</ul>\r\n\r\n<h4>3. Kaidah Penulisan Kata: Kata Depan vs Awalan</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Bentuk</th><th>Fungsi Gramatikal</th><th>Aturan Penulisan</th><th>Contoh Penulisan Benar</th><th>Contoh Salah (Jebakan UTS)</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Kata Depan (Preposisi) <code>di</code>, <code>ke</code>, <code>dari</code></strong></td><td>Menunjukkan tempat keberadaan, arah tujuan, atau asal</td><td>Ditulis <strong>TERPISAH</strong> dengan spasi dari kata yang mengikutinya</td><td><code>di kampus</code>, <code>di rumah</code>, <code>ke Jakarta</code>, <code>ke atas</code>, <code>dari Bogor</code></td><td><span style=\"color:var(--rose)\">diperkuliahan</span>, <span style=\"color:var(--rose)\">dirumah</span>, <span style=\"color:var(--rose)\">kekampus</span></td></tr>\r\n      <tr><td><strong>Awalan (Prefiks) <code>di-</code>, <code>ke-</code></strong></td><td>Membentuk kata kerja pasif atau kata benda/bilangan</td><td>Ditulis <strong>SERANGKAI</strong> (menyatu tanpa spasi) dengan kata dasarnya</td><td><code>ditulis</code>, <code>dianalisis</code>, <code>dikerjakan</code>, <code>ketua</code>, <code>kehendak</code>, <code>kesatu</code></td><td><span style=\"color:var(--rose)\">di tulis</span>, <span style=\"color:var(--rose)\">di analisis</span>, <span style=\"color:var(--rose)\">di kerjakan</span></td></tr>\r\n    </tbody>\r\n  </table>"
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
        },
        "raw_slide_content": "<h4>1. Sejarah & Asal-Usul Etimologi Algoritma</h4>\r\n<p>Kata <strong>Algoritma</strong> berasal dari pelafalan bangsa barat terhadap nama ilmuwan dan matematikawan muslim terkemuka abad pertengahan (abad ke-9 Masehi), <strong>Abu Ja'far Muhammad bin Musa Al-Khawarizmi</strong> (780–850 M) yang lahir di Khwarazm (sekarang Khiva, Uzbekistan). Melalui kitab monumentalnya <em>Al-Kitab al-mukhtasar fi hisab al-jabr wa'l-muqabala</em> (Buku Rangkuman Perhitungan dengan Penyelesaian dan Pengimbangan), beliau meletakkan dasar-dasar ilmu Aljabar dan sistem penomoran desimal dengan angka nol.</p>\r\n<p>Dalam bahasa Latin, namanya diterjemahkan menjadi <em>Algoritmi</em>, yang kemudian berevolusi menjadi <em>algorism</em> (metode berhitung dengan angka Arab), dan akhirnya menjadi <strong>algorithm</strong> (algoritma).</p>\r\n\r\n<h4>2. Definisi Formal Algoritma</h4>\r\n<ul>\r\n  <li><strong>KBBI:</strong> <em>Urutan logis pengambilan putusan untuk pemecahan suatu masalah.</em></li>\r\n  <li><strong>Ilmu Komputer Modern:</strong> Suatu himpunan berhingga dari instruksi-instruksi yang terdefinisi secara jelas, logis, dan sistematis yang mentransformasikan data masukan (<em>input</em>) menjadi keluaran (<em>output</em>) yang memenuhi spesifikasi yang diinginkan dalam jumlah langkah yang berhingga.</li>\r\n  <li><strong>Hubungan Program dan Algoritma:</strong>\r\n    <p>Menurut Bapak Pemrograman Terstruktur, <strong>Prof. Niklaus Wirth</strong>:</p>\r\n    <div style=\"background:var(--surface-elevated); padding:8px 14px; border-left:4px solid var(--primary); font-family:var(--font-mono); font-weight:700;\">\r\n      PROGRAM = ALGORITMA + STRUKTUR DATA"
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
        },
        "raw_slide_content": "<h4>1. Tipe Data Primitif & Karakteristik Komputasi</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Tipe Data</th><th>Domain & Rentang Nilai</th><th>Ukuran Memori</th><th>Karakteristik & Contoh Nilai</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Integer</strong></td><td>Bilangan bulat negatif, nol, positif: <code>-32.768</code> s.d <code>32.767</code> (16-bit)</td><td>2 atau 4 byte</td><td>Tidak memuat pecahan desimal. Contoh: <code>-15, 0, 100</code></td></tr>\r\n      <tr><td><strong>Real / Float</strong></td><td>Bilangan pecahan / desimal: <code>2.9e-39</code> s.d <code>1.7e38</code></td><td>4 atau 8 byte</td><td>Menggunakan titik sebagai pemisah desimal. Contoh: <code>3.14159, -0.05</code></td></tr>\r\n      <tr><td><strong>Char</strong></td><td>Satu karakter tunggal kode ASCII (0 - 255)</td><td>1 byte (8-bit)</td><td>Diapit tanda petik tunggal. Contoh: <code>'A', '9', '%', ' '</code></td></tr>\r\n      <tr><td><strong>String</strong></td><td>Rangkaian teks / untaian karakter (array of char)</td><td>1 s.d 256 byte</td><td>Diapit tanda petik tunggal. Contoh: <code>'FTIK Unindra 2026'</code></td></tr>\r\n      <tr><td><strong>Boolean</strong></td><td>Nilai logika biner: hanya <code>TRUE</code> atau <code>FALSE</code></td><td>1 byte</td><td>Hasil dari operasi relasional atau kondisi logika.</td></tr>\r\n    </tbody>\r\n  </table>"
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
        },
        "raw_slide_content": "<h4>1. Definisi & Fungsi Flowchart</h4>\r\n<p><strong>Flowchart (Bagan Alir)</strong> adalah representasi grafis dari langkah-langkah penyelesaian masalah dalam suatu program yang dinyatakan melalui simbol-simbol geometris berstandar ANSI (<em>American National Standards Institute</em>) dan dihubungkan oleh garis arah aliran instruksi.</p>\r\n<p><strong>Fungsi Utama:</strong></p>\r\n<ul>\r\n  <li>Sebagai cetak biru (blueprint) perancangan program sebelum menulis kode.</li>\r\n  <li>Memudahkan identifikasi kesalahan logika (<em>logic debugging</em>).</li>\r\n  <li>Media dokumentasi teknis dan komunikasi alur kerja program kepada tim developer lain.</li>\r\n</ul>\r\n\r\n<h4>2. Daftar Simbol Baku Flowchart Program (ANSI)</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Simbol</th><th>Bentuk Geometri</th><th>Nama Baku</th><th>Penjelasan Fungsi & Kaidah Pemakaian</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><span style=\"font-size:18px;\">⬭</span></td><td>Oval / Kapsul</td><td><strong>Terminator</strong></td><td>Menandai awal program (<code>START</code>/<code>MULAI</code>) atau akhir program (<code>END</code>/<code>SELESAI</code>). Hanya memiliki 1 garis alir keluar (pada Start) atau 1 garis alir masuk (pada End).</td></tr>\r\n      <tr><td><span style=\"font-size:18px;\">▱</span></td><td>Jajar Genjang</td><td><strong>Input / Output</strong></td><td>Menunjukkan operasi pembacaan data masukan dari keyboard (<code>Read/Input</code>) atau pencetakan keluaran ke layar monitor/printer (<code>Write/Print</code>).</td></tr>\r\n      <tr><td><span style=\"font-size:18px;\">▭</span></td><td>Persegi Panjang</td><td><strong>Process</strong></td><td>Operasi pengolahan internal sistem komputasi (perhitungan aritmatika, manipulasi string, penugasan variabel).</td></tr>\r\n      <tr><td><span style=\"font-size:18px;\">◇</span></td><td>Belah Ketupat (Diamond)</td><td><strong>Decision</strong></td><td>Pengambilan keputusan percabangan berdasarkan kondisi Boolean. Memiliki 1 garis masuk dan minimal 2 garis keluar berlabel kondisi (<em>Ya/Tidak</em> atau <em>True/False</em>).</td></tr>\r\n      <tr><td><span style=\"font-size:18px;\">⬡</span></td><td>Segi Enam (Hexagon)</td><td><strong>Preparation</strong></td><td>Inisialisasi variabel, penentuan nilai awal pencacah (counter), atau pemberian dimensi awal array.</td></tr>\r\n      <tr><td><span style=\"font-size:18px;\">○</span></td><td>Lingkaran Kecil</td><td><strong>On-Page Connector</strong></td><td>Penghubung alur flowchart yang terputus dalam <strong>satu halaman</strong> yang sama untuk menghindari garis panah yang saling silang. Diisi huruf identitas (A, B, C).</td></tr>\r\n      <tr><td><span style=\"font-size:18px;\">⌂</span></td><td>Segi Lima</td><td><strong>Off-Page Connector</strong></td><td>Penghubung alur flowchart yang melompat ke <strong>halaman kertas lain</strong>.</td></tr>\r\n      <tr><td><span style=\"font-size:18px;\">➔</span></td><td>Garis Panah</td><td><strong>Flowline</strong></td><td>Menunjukkan arah urutan eksekusi langkah instruksi (dari atas ke bawah atau kiri ke kanan).</td></tr>\r\n    </tbody>\r\n  </table>"
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
        },
        "raw_slide_content": "<h4>1. 3 Struktur Kontrol Dasar Teori Bohm-Jacopini</h4>\r\n<p>Menurut Teorema Struktur <strong>Corrado Böhm dan Giuseppe Jacopini (1966)</strong>, setiap permasalahan komputasi serumit apapun dapat diselesaikan hanya dengan mengombinasikan 3 struktur kendali dasar:</p>\r\n<ol>\r\n  <li><strong>Struktur Sequence (Runtunan):</strong> Langkah demi langkah dieksekusi secara sekuensial.</li>\r\n  <li><strong>Struktur Selection (Pemilihan/Percabangan):</strong> Memilih jalur eksekusi berdasarkan kondisi.</li>\r\n  <li><strong>Struktur Repetition (Perulangan/Iterasi):</strong> Mengulang blok instruksi selama kondisi terpenuhi.</li>\r\n</ol>\r\n\r\n<h4>2. Karakteristik Mutlak Struktur Runtunan (Sequence)</h4>\r\n<ul>\r\n  <li>Instruksi dikerjakan secara berurutan baris demi baris, dimulai dari baris pertama hingga baris terakhir.</li>\r\n  <li>Tiap instruksi dilaksanakan tepat satu kali (tidak ada instruksi yang melompat dan tidak ada yang diulang).</li>\r\n  <li>Urutan instruksi yang dilaksanakan oleh prosesor sama persis dengan urutan instruksi yang tertulis dalam teks algoritma.</li>\r\n  <li>Akhir dari instruksi terakhir menandai selesainya eksekusi algoritma.</li>\r\n</ul>\r\n\r\n<h4>3. Studi Kasus Kritis: Algoritma Penukaran Nilai (Swap Values)</h4>\r\n<p>Masalah: Diberikan dua variabel $A = 10$ dan $B = 25$. Tukarlah nilainya sehingga $A = 25$ dan $B = 10$.</p>\r\n<div class=\"code-box\">\r\n  <div class=\"code-header\">\r\n    <span class=\"code-lang\">Analisis Kesalahan Logika Pemula vs Solusi Benar</span>"
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
        },
        "raw_slide_content": "<h4>1. Sejarah & Filosofi Desain Bahasa Pascal</h4>\r\n<p>Bahasa Pascal dirancang oleh <strong>Prof. Niklaus Wirth</strong> di Eidgenössische Technische Hochschule (ETH) Zurich, Swiss pada tahun 1970. Nama Pascal diabadikan untuk menghormati <strong>Blaise Pascal</strong>, filsuf dan matematikawan Prancis penemu kalkulator mekanik roda putar pertama di dunia (<em>Pascaline</em>, 1642).</p>\r\n<p><strong>Ciri Khas Bahasa Pascal:</strong></p>\r\n<ul>\r\n  <li><strong>Terstruktur & Prosedural:</strong> Mendorong modularitas kode menggunakan prosedur dan fungsi.</li>\r\n  <li><strong>Explicit Declaration:</strong> Setiap variabel, konstanta, dan tipe data wajib dideklarasikan di awal blok deklarasi sebelum digunakan dalam blok pernyataan. Pascal menolak variabel liar yang tiba-tiba muncul di tengah eksekusi.</li>\r\n  <li><strong>Strongly Typed:</strong> Penggunaan tipe data sangat ketat. Anda tidak dapat memasukkan tipe string ke dalam variabel integer tanpa konversi eksplisit. Hal ini mencegah bug memori saat runtime.</li>\r\n  <li><strong>Case-Insensitive:</strong> Pascal tidak membedakan huruf besar dan huruf kecil. Kata <code>PROGRAM</code>, <code>Program</code>, dan <code>program</code>, serta variabel <code>NilaiAkhir</code> dan <code>nilaiahkir</code> diperlakukan sama persis oleh kompiler.</li>\r\n</ul>\r\n\r\n<h4>2. Anatomi Baku Program Pascal</h4>\r\n<div class=\"code-box\">\r\n  <div class=\"code-header\">\r\n    <span class=\"code-lang\">Pascal Structure (FPC 3.2.2)</span>\r\n    <button class=\"copy-btn\" onclick=\"copyCode(this)\">Salin</button>"
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
        },
        "raw_slide_content": "<h4>1. Aturan Penamaan Pengenal (Identifier) di Pascal</h4>\r\n<ul>\r\n  <li>Karakter pertama wajib berupa huruf abjad (<code>A-Z</code>, <code>a-z</code>) atau garis bawah (<em>underscore</em> <code>_</code>). Tidak boleh diawali oleh angka!</li>\r\n  <li>Karakter kedua dan seterusnya dapat berupa kombinasi huruf, angka, atau underscore.</li>\r\n  <li><strong>Dilarang Menggunakan Spasi:</strong> Gunakan pola <em>camelCase</em> (contoh: <code>gajiBersih</code>) atau underscore (contoh: <code>gaji_bersih</code>).</li>\r\n  <li><strong>Dilarang Menggunakan Simbol Khusus:</strong> Karakter seperti <code>-</code>, <code>+</code>, <code>*</code>, <code>/</code>, <code>@</code>, <code>#</code>, <code>$</code>, <code>%</code>, <code>^</code>, <code>&</code> tidak diizinkan karena merupakan operator reserved.</li>\r\n  <li><strong>Dilarang Menggunakan Reserved Words:</strong> Kata kunci cadangan compiler seperti <code>program</code>, <code>var</code>, <code>begin</code>, <code>end</code>, <code>if</code>, <code>then</code>, <code>else</code>, <code>integer</code>, <code>real</code> tidak boleh dijadikan nama variabel.</li>\r\n</ul>\r\n\r\n<h4>2. Operator Aritmatika & Perbedaan Kritis Pembagian di Pascal</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Operator</th><th>Nama Operasi</th><th>Tipe Data Masukan</th><th>Tipe Data Hasil</th><th>Contoh Evaluasi</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><code>+</code></td><td>Penjumlahan</td><td>Integer atau Real</td><td>Mengikuti tipe operand</td><td><code>10 + 5 = 15</code></td></tr>\r\n      <tr><td><code>-</code></td><td>Pengurangan</td><td>Integer atau Real</td><td>Mengikuti tipe operand</td><td><code>10 - 3 = 7</code></td></tr>\r\n      <tr><td><code>*</code></td><td>Perkalian</td><td>Integer atau Real</td><td>Mengikuti tipe operand</td><td><code>4 * 5 = 20</code></td></tr>\r\n      <tr><td><code>/</code></td><td><strong>Pembagian Real (Pecahan)</strong></td><td>Integer atau Real</td><td><strong>SELALU REAL</strong></td><td><code>7 / 2 = 3.50000000000000E+000</code></td></tr>\r\n      <tr><td><code>div</code></td><td><strong>Pembagian Bulat (Truncation)</strong></td><td>Wajib Integer</td><td><strong>INTEGER</strong></td><td><code>7 div 2 = 3</code> (membuang 0.5)</td></tr>\r\n      <tr><td><code>mod</code></td><td><strong>Sisa Hasil Bagi (Modulo)</strong></td><td>Wajib Integer</td><td><strong>INTEGER</strong></td><td><code>7 mod 2 = 1</code></td></tr>\r\n      <tr><td><code>:=</code></td><td><strong>Assignment (Penugasan)</strong></td><td>Variabel di sisi kiri</td><td>-</td><td><code>x := 100;</code></td></tr>\r\n    </tbody>\r\n  </table>"
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
        },
        "raw_slide_content": "<h4>1. Perbedaan Mendasar write() vs writeln()</h4>\r\n<ul>\r\n  <li><code>write(parameter);</code> : Mencetak isi parameter (teks string, nilai variabel, atau konstanta) ke layar monitor. Setelah mencetak, <strong>kursor output tetap berada tepat di sebelah kanan karakter terakhir</strong> yang dicetak (tidak membuat baris baru).</li>\r\n  <li><code>writeln(parameter);</code> : Merupakan singkatan dari <em>write line</em>. Mencetak isi parameter ke layar, lalu <strong>otomatis memindahkan kursor ke awal baris baru berikutnya</strong> (menambahkan karakter Enter / Newline).</li>\r\n  <li><code>writeln;</code> (tanpa parameter): Berfungsi mencetak baris kosong (menggeser kursor ke baris baru).</li>\r\n</ul>\r\n\r\n<h4>2. Perbedaan Mendasar read() vs readln()</h4>\r\n<ul>\r\n  <li><code>read(variabel);</code> : Membaca data masukan dari keyboard ke dalam variabel penampung. Posisi kursor pembacaan berhenti tepat setelah karakter terakhir dibaca tanpa membuang karakter Enter. Instruksi pembacaan berikutnya akan terus membaca buffer yang sama.</li>\r\n  <li><code>readln(variabel);</code> : Merupakan singkatan dari <em>read line</em>. Membaca masukan data dari keyboard hingga pengguna menekan tombol Enter, lalu <strong>membuang sisa buffer Enter tersebut dan memindahkan pembacaan ke baris berikutnya</strong>.</li>\r\n  <li><em>Rekomendasi Praktikum Dosen:</em> Selalu gunakan <code>readln</code> untuk membaca input keyboard mahasiswa agar buffer input tidak macet.</li>\r\n</ul>\r\n\r\n<h4>3. Format Angka Real (Formatting Float Output)</h4>\r\n<p>Secara default, jika variabel real dicetak langsung tanpa pemformatan, Pascal akan menampilkannya dalam notasi eksponensial ilmiah yang membingungkan orang awam (misal: <code>3.50000000000000E+001</code> untuk angka 35).</p>\r\n<p>Untuk menampilkannya dalam format desimal baku, gunakan sintaks pemformatan titik dua ganda:</p>\r\n<div style=\"background:var(--surface-elevated); padding:8px 14px; border-left:4px solid var(--primary); font-family:var(--font-mono); font-weight:700;\">\r\n  variabel_real : lebar_kolom_total : jumlah_digit_desimal"
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
        },
        "raw_slide_content": "<h4>1. Struktur Percabangan Tunggal (IF - THEN)</h4>\r\n<p>Digunakan jika sebuah blok instruksi hanya akan dieksekusi jika kondisi bernilai TRUE, dan tidak melakukan apa-apa jika kondisi FALSE.</p>\r\n<pre style=\"background:var(--surface); padding:10px; border-radius:6px; font-family:var(--font-mono);\">\r\nif (Kondisi_Boolean) then\r\n  Pernyataan_Tunggal;\r\n\r\n{ Jika pernyataan lebih dari satu (Compound Statement), wajib diapit BEGIN - END; }\r\nif (Kondisi_Boolean) then\r\nbegin\r\n  Pernyataan_1;\r\n  Pernyataan_2;\r\nend;\r\n</pre>\r\n\r\n<h4>2. Struktur Percabangan Ganda (IF - THEN - ELSE)</h4>\r\n<p>Digunakan untuk memilih satu dari dua kemungkinan jalur alternatif berdasarkan hasil evaluasi kondisi.</p>\r\n<div class=\"callout callout-danger\">\r\n  <div class=\"callout-title\">🚨 ATURAN EMAS KOMPILER PASCAL: PANTANGAN TITIK KOMA SEBELUM ELSE!"
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
        },
        "raw_slide_content": "<h4>1. Formal vs Informal Self-Introduction in Academic & Tech Settings</h4>\r\n<ul>\r\n  <li><strong>Formal Introduction (Academic & Workplace):</strong>\r\n    <p><em>\"Good morning, Ladies and Gentlemen. Allow me to introduce myself. My name is Muhammad Haikel Saleh. I am a first-semester undergraduate student majoring in Information Systems at Universitas Indraprasta PGRI. I specialize in frontend development and database design.\"</em></p>\r\n  </li>\r\n  <li><strong>Key Phrases for Personal Profiling:</strong>\r\n    <ul>\r\n      <li><em>\"I am currently studying...\"</em> / <em>\"I am enrolled in...\"</em></li>\r\n      <li><em>\"My main field of interest is software architecture...\"</em></li>\r\n      <li><em>\"I spend most of my time coding in Pascal and Python...\"</em></li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n\r\n<h4>2. Grammar Focus: Simple Present Tense (Habitual Actions & General Truths)</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Pola Kalimat</th><th>Subjek Jamak (I / You / We / They)</th><th>Subjek Tunggal Orang Ketiga (He / She / It)</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Verbal (+)</strong></td><td><code>S + Verb 1 + Object</code><br><em>\"They compile the Pascal code every day.\"</em></td><td><code>S + Verb 1(-s/-es) + Object</code><br><em>\"He compiles the Pascal code every day.\"</em></td></tr>\r\n      <tr><td><strong>Verbal (-)</strong></td><td><code>S + do not (don't) + Verb 1 + Object</code><br><em>\"We do not encounter syntax errors.\"</em></td><td><code>S + does not (doesn't) + Verb 1 + Object</code><br><em>\"She does not encounter syntax errors.\"</em></td></tr>\r\n      <tr><td><strong>Verbal (?)</strong></td><td><code>Do + S + Verb 1 + Object?</code><br><em>\"Do you attend the algorithm lab session?\"</em></td><td><code>Does + S + Verb 1 + Object?</code><br><em>\"Does he understand Boolean logic?\"</em></td></tr>\r\n      <tr><td><strong>Nominal</strong></td><td><code>S + are / am + Complement</code><br><em>\"I am an IT student.\"</em> / <em>\"We are diligent.\"</em></td><td><code>S + is + Complement</code><br><em>\"The compiler is fast.\"</em></td></tr>\r\n    </tbody>\r\n  </table>"
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
        },
        "raw_slide_content": "<h4>1. Generic Structure of Procedural Text</h4>\r\n<ol>\r\n  <li><strong>Goal / Aim:</strong> Menyatakan tujuan atau sasaran tugas yang akan dicapai (seringkali dijadikan judul: <em>\"How to Set Up Free Pascal Compiler on Windows 11\"</em>).</li>\r\n  <li><strong>Materials / Tools / Prerequisites:</strong> Daftar perangkat keras, perangkat lunak, dependensi, atau pustaka yang diperlukan sebelum memulai (contoh: <em>PC with Windows OS, FPC 3.2.2 installer file, 500 MB free storage</em>).</li>\r\n  <li><strong>Steps / Methods:</strong> Serangkaian instruksi kerja yang disusun secara runut kronologis dan tidak boleh diacak-acak.</li>\r\n</ol>\r\n\r\n<h4>2. Language Features of Procedural Texts</h4>\r\n<ul>\r\n  <li><strong>Imperative Sentences (Kalimat Perintah):</strong> Dimulai langsung dengan Kata Kerja Bentuk Pertama (Verb 1) tanpa subjek nominal:\r\n    <ul>\r\n      <li><em>\"Download the executable installer from the official website.\"</em></li>\r\n      <li><em>\"Extract the zip file to the local directory.\"</em></li>\r\n      <li><em>\"Do not close the terminal window while compiling.\"</em> (Negative imperative).</li>\r\n    </ul>\r\n  </li>\r\n  <li><strong>Temporal Conjunctions & Sequence Connectors:</strong>\r\n    <p><em>First, ...</em> &rarr; <em>Second, ...</em> &rarr; <em>Then, ...</em> &rarr; <em>Next, ...</em> &rarr; <em>After that, ...</em> &rarr; <em>Finally, ...</em></p>\r\n  </li>\r\n  <li><strong>Action Verbs in Computing:</strong> <em>install, execute, initialize, configure, debug, compile, deploy, terminate</em>.</li>\r\n</ul>"
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
        },
        "raw_slide_content": "<h4>1. Grammar Focus: Simple Past Tense (Past Incident / Historical Fact)</h4>\r\n<p>Digunakan untuk menceritakan aktivitas, kejadian, atau peristiwa yang telah dimulai dan selesai di masa lampau pada titik waktu spesifik yang definitif.</p>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Pola Kalimat</th><th>Bentuk Pola</th><th>Contoh Kalimat Akademis / Liburan</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Verbal (+)</strong></td><td><code>S + Verb 2 (Past Form) + Object + Time Adverb</code></td><td><em>\"Our class visited the National Museum last month.\"</em></td></tr>\r\n      <tr><td><strong>Verbal (-)</strong></td><td><code>S + did not (didn't) + Verb 1 + Object</code></td><td><em>\"We did not study programming during the holiday.\"</em></td></tr>\r\n      <tr><td><strong>Verbal (?)</strong></td><td><code>Did + S + Verb 1 + Object?</code></td><td><em>\"Did you write the project proposal yesterday?\"</em></td></tr>\r\n      <tr><td><strong>Nominal (+)</strong></td><td><code>S + was / were + Complement (Adj/Noun)</code></td><td><em>\"The assignment was very challenging.\"</em> / <em>\"They were in Bandung.\"</em></td></tr>\r\n    </tbody>\r\n  </table>"
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
        },
        "raw_slide_content": "<h4>1. Komparasi Gramatikal: WILL vs BE GOING TO</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Aspek Pembeda</th><th>WILL (Modal Auxiliary)</th><th>BE GOING TO (Semi-Modal)</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Struktur Rumus</strong></td><td><code>S + will + Verb 1 + Object</code></td><td><code>S + am / is / are + going to + Verb 1 + Object</code></td></tr>\r\n      <tr><td><strong>Waktu Pengambilan Niat / Keputusan</strong></td><td><strong>Spontan (On the spot):</strong> Keputusan baru saja diputuskan pada saat berbicara tanpa rencana sebelumnya.</td><td><strong>Rencana Terencana (Pre-meditated plan):</strong> Sudah dipikirkan, dirancang, dan diniatkan sebelum saat berbicara.</td></tr>\r\n      <tr><td><strong>Contoh Niat</strong></td><td><em>\"Someone is ringing the doorbell. I will open the door.\"</em></td><td><em>\"I am going to submit my algorithm project next Tuesday because I finished it yesterday.\"</em></td></tr>\r\n      <tr><td><strong>Sifat Prediksi Masa Depan</strong></td><td><strong>Prediksi Subjektif:</strong> Berdasarkan opini pribadi, harapan, firasat, atau dugaan tanpa bukti fisik konkret.</td><td><strong>Prediksi Berbasis Bukti Nyata:</strong> Ada tanda-tanda atau bukti fisik konkret yang sedang terlihat saat ini.</td></tr>\r\n      <tr><td><strong>Contoh Prediksi</strong></td><td><em>\"I think artificial intelligence will transform education in 2030.\"</em></td><td><em>\"Look at the dark clouds gathering above! It is going to rain in a few minutes.\"</em></td></tr>\r\n      <tr><td><strong>Fungsi Khusus Lainnya</strong></td><td>Janji (<em>\"I will always help you\"</em>), Penawaran bantuan (<em>\"Will you take a cup of coffee?\"</em>), Penolakan (<em>\"The laptop will not boot\"</em>).</td><td>Peristiwa tak terelakkan yang segera terjadi di depan mata (<em>\"Watch out! The glass is going to fall!\"</em>).</td></tr>\r\n    </tbody>\r\n  </table>"
      }
    ]
  },
  {
    "id": "subject-matdas",
    "name": "Matematika Dasar (Kalkulus Sistem Informasi)",
    "code": "TI-106",
    "lecturer": "Dr. Munali, M.Pd. / Syifaafidah, M.Pd.",
    "schedule": "Kamis • 07:30 - 10:00 WIB",
    "room": "Ruang R.4.3-2",
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
        "title": "Sistem Bilangan Real, Operasi Aljabar, dan Notasi Interval",
        "description": "Materi Slide Dosen Pertemuan 1: Klasifikasi 10 himpunan bilangan, desimal rasional vs irasional, 5 sifat operasi aljabar, 4 sifat urutan, serta representasi selang/interval pada garis bilangan real.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_matdas_p1_pdf",
            "type": "pdf",
            "title": "1789117602_Pert_1_Matematika_-_Sistem_Bilangan_Real (1).pdf (Slide Dosen P1)",
            "file_url": "file:///C:/Users/haike/Downloads/Tugas_Kuliah/06_Matematika_Dasar/Materi_dan_Rangkuman/1789117602_Pert_1_Matematika_-_Sistem_Bilangan_Real%20(1).pdf",
            "file_size": 422280,
            "date_added": "2026-09-30"
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
          "standar": "\n<h4>1. Inti Pembahasan: Fondasi Matematika bagi Mahasiswa IT</h4>\n<p>Dalam perkuliahan Sistem Informasi, <strong>Sistem Bilangan Real (ℝ)</strong> adalah batas rentang nilai data yang dapat diproses oleh CPU dan memori. Memahami bilangan rasional vs irasional sangat menentukan presisi tipe data (misal tipe <code>Integer</code> vs <code>Float/Double</code> pada database dan bahasa Pascal).</p>\n\n<h4>2. Ringkasan 4 Sifat Urutan Garis Bilangan Real (Paling Sering Keluar di Ujian):</h4>\n<ul>\n  <li><strong>Trikotomi:</strong> Untuk dua bilangan real x dan y, pasti hanya satu kondisi yang benar: x &lt; y, x = y, atau x &gt; y.</li>\n  <li><strong>Ketransitifan:</strong> Jika x &lt; y dan y &lt; z, maka pasti x &lt; z.</li>\n  <li><strong>Penambahan:</strong> Menambahkan bilangan yang sama pada kedua ruas TIDAK mengubah tanda pertidaksamaan: x &lt; y ⟺ x + z &lt; y + z.</li>\n  <li><strong>Perkalian (ATURAN EMAS):</strong>\n    <ul>\n      <li>Jika dikalikan bilangan positif (z &gt; 0): tanda TETAP (x &lt; y ⟺ xz &lt; yz).</li>\n      <li>Jika dikalikan bilangan negatif (z &lt; 0): tanda WAJIB DIBALIK (x &lt; y ⟺ xz &gt; yz).</li>\n    </ul>\n  </li>\n</ul>\n\n<h4>3. Tips Kilat Membaca Notasi Selang (Interval):</h4>\n<p>Ingat aturan kurung: jika ada tanda sama dengan (≤ atau ≥), gunakan <strong>kurung siku [ ]</strong>. Jika murni lebih kecil (&lt;) atau lebih besar (&gt;) atau tak hingga (∞), gunakan <strong>kurung biasa ( )</strong>.</p>\n",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": true
        },
        "raw_slide_content": "\n<div class=\"slide-content-block space-y-6\">\n  <div class=\"p-3 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-xs font-mono text-indigo-300\">\n    📌 Dikutip langsung dari berkas: <strong>1789117602_Pert_1_Matematika_-_Sistem_Bilangan_Real.pdf</strong> (17 Slide Perkuliahan)\n  </div>\n\n  <h3 class=\"text-lg font-bold text-white border-b border-white/10 pb-2\">Slide 2 & 5: Orientasi Mata Kuliah & Sub-CPMK</h3>\n  <p class=\"text-sm text-slate-300 leading-relaxed\">\n    Mata kuliah ini membekali mahasiswa dengan kemampuan bernalar matematis dan analitis melalui penguasaan konsep dasar matematika dan kalkulus terapan sebagai landasan berpikir logis, sistematis, dan algoritmik yang diperlukan dalam menyusun algoritma serta merancang sistem informasi.<br>\n    <strong>Referensi Utama:</strong> Varberg, Purcell, & Rigdon (2007), <em>Calculus 9th ed.</em>, Pearson Prentice Hall.\n  </p>\n\n  <h3 class=\"text-lg font-bold text-white border-b border-white/10 pb-2\">Slide 10 & 11: 10 Jenis Bilangan dalam Matematika</h3>\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs\">\n    <div class=\"p-3 bg-slate-900 rounded-lg border border-white/5\">\n      <span class=\"font-bold text-indigo-400\">1. Bilangan Asli (ℕ):</span> {1, 2, 3, 4, ...}\n    </div>\n    <div class=\"p-3 bg-slate-900 rounded-lg border border-white/5\">\n      <span class=\"font-bold text-indigo-400\">2. Bilangan Cacah:</span> {0, 1, 2, 3, ...}\n    </div>\n    <div class=\"p-3 bg-slate-900 rounded-lg border border-white/5\">\n      <span class=\"font-bold text-indigo-400\">3. Bilangan Bulat (ℤ):</span> {..., -2, -1, 0, 1, 2, ...}\n    </div>\n    <div class=\"p-3 bg-slate-900 rounded-lg border border-white/5\">\n      <span class=\"font-bold text-indigo-400\">4. Bilangan Rasional (ℚ):</span> Dapat dinyatakan dalam bentuk <sup>p</sup>/<sub>q</sub> dengan p, q ∈ ℤ dan q ≠ 0.\n    </div>\n    <div class=\"p-3 bg-slate-900 rounded-lg border border-white/5\">\n      <span class=\"font-bold text-indigo-400\">5. Bilangan Irasional:</span> Tidak dapat dinyatakan sebagai rasio dua bilangan bulat (desimal tak berulang).\n    </div>\n    <div class=\"p-3 bg-slate-900 rounded-lg border border-white/5\">\n      <span class=\"font-bold text-cyan-400\">6. Bilangan Real (ℝ):</span> Gabungan seluruh bilangan rasional dan irasional (ℝ = ℚ ∪ ℚ').\n    </div>\n    <div class=\"p-3 bg-slate-900 rounded-lg border border-white/5\">\n      <span class=\"font-bold text-indigo-400\">7. Bilangan Imajiner:</span> Nilai i = √(-1)\n    </div>\n    <div class=\"p-3 bg-slate-900 rounded-lg border border-white/5\">\n      <span class=\"font-bold text-indigo-400\">8. Bilangan Kompleks:</span> Bentuk z = a + bi\n    </div>\n    <div class=\"p-3 bg-slate-900 rounded-lg border border-white/5\">\n      <span class=\"font-bold text-indigo-400\">9. Bilangan Prima:</span> Memiliki tepat 2 faktor (2, 3, 5, 7, 11, ...)\n    </div>\n    <div class=\"p-3 bg-slate-900 rounded-lg border border-white/5\">\n      <span class=\"font-bold text-indigo-400\">10. Bilangan Komposit:</span> Bilangan asli > 1 selain prima (4, 6, 8, 9, 10, ...)\n    </div>\n  </div>\n\n  <h3 class=\"text-lg font-bold text-white border-b border-white/10 pb-2\">Slide 12: Representasi Desimal Bilangan Real</h3>\n  <ul class=\"list-disc pl-5 text-sm text-slate-300 space-y-1\">\n    <li><strong>Desimal Rasional:</strong> Berhenti atau berulang teratur.<br>\n      Contoh: <sup>3</sup>/<sub>8</sub> = 0,375 (desimal berhenti); <sup>13</sup>/<sub>11</sub> = 1,181818... (desimal berulang periodik).\n    </li>\n    <li><strong>Desimal Irasional:</strong> Tidak pernah berhenti dan polanya tidak pernah berulang.<br>\n      Contoh: √2 = 1,41421356...; π = 3,14159265...\n    </li>\n  </ul>\n\n  <h3 class=\"text-lg font-bold text-white border-b border-white/10 pb-2\">Slide 13: 5 Sifat Operasi Hitung Aljabar Bilangan Real</h3>\n  <div class=\"space-y-2 text-xs font-mono text-slate-200\">\n    <div class=\"p-3 bg-[#181B26] rounded-lg border border-white/10\">\n      <strong>1. Sifat Komutatif:</strong> x + y = y + x &nbsp;dan&nbsp; x · y = y · x\n    </div>\n    <div class=\"p-3 bg-[#181B26] rounded-lg border border-white/10\">\n      <strong>2. Sifat Asosiatif:</strong> (x + y) + z = x + (y + z) &nbsp;dan&nbsp; (x · y) · z = x · (y · z)\n    </div>\n    <div class=\"p-3 bg-[#181B26] rounded-lg border border-white/10\">\n      <strong>3. Sifat Distributif:</strong> x · (y + z) = x·y + x·z\n    </div>\n    <div class=\"p-3 bg-[#181B26] rounded-lg border border-white/10\">\n      <strong>4. Elemen Identitas:</strong> Penjumlahan: x + 0 = x &nbsp;|&nbsp; Perkalian: x · 1 = x\n    </div>\n    <div class=\"p-3 bg-[#181B26] rounded-lg border border-white/10\">\n      <strong>5. Balikan (Invers):</strong> Invers Tambah: x + (-x) = 0 &nbsp;|&nbsp; Invers Kali: x · x⁻¹ = 1 (untuk x ≠ 0)\n    </div>\n  </div>\n\n  <h3 class=\"text-lg font-bold text-white border-b border-white/10 pb-2\">Slide 14 & 16: Garis Bilangan Real & Notasi Interval</h3>\n  <div class=\"table-wrap\">\n    <table>\n      <thead><tr><th>Notasi Selang</th><th>Definisi Himpunan</th><th>Deskripsi Garis Bilangan</th></tr></thead>\n      <tbody>\n        <tr><td><code>(a, b)</code></td><td>{ x ∈ ℝ | a &lt; x &lt; b }</td><td>Selang terbuka: titik a dan b TIDAK masuk (lingkaran kosong)</td></tr>\n        <tr><td><code>[a, b]</code></td><td>{ x ∈ ℝ | a ≤ x ≤ b }</td><td>Selang tertutup: titik a dan b IKUT masuk (lingkaran penuh)</td></tr>\n        <tr><td><code>[a, b)</code></td><td>{ x ∈ ℝ | a ≤ x &lt; b }</td><td>Setengah terbuka: a masuk, b tidak masuk</td></tr>\n        <tr><td><code>(a, b]</code></td><td>{ x ∈ ℝ | a &lt; x ≤ b }</td><td>Setengah terbuka: a tidak masuk, b masuk</td></tr>\n        <tr><td><code>(-∞, b)</code></td><td>{ x ∈ ℝ | x &lt; b }</td><td>Selang tak hingga ke kiri (tanpa titik b)</td></tr>\n        <tr><td><code>(-∞, b]</code></td><td>{ x ∈ ℝ | x ≤ b }</td><td>Selang tak hingga ke kiri (termasuk titik b)</td></tr>\n        <tr><td><code>(a, ∞)</code></td><td>{ x ∈ ℝ | x &gt; a }</td><td>Selang tak hingga ke kanan (tanpa titik a)</td></tr>\n        <tr><td><code>[a, ∞)</code></td><td>{ x ∈ ℝ | x ≥ a }</td><td>Selang tak hingga ke kanan (termasuk titik a)</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"
      },
      {
        "id": "subject-matdas_m2",
        "subject_id": "subject-matdas",
        "meeting_number": 2,
        "date": "2026-09-26",
        "title": "Pertidaksamaan Bilangan Real & Langkah Penentuan Himpunan Penyelesaian (HP)",
        "description": "Materi Slide Dosen Pertemuan 2: 5 langkah penentuan HP, analisis titik pemecah, uji titik garis bilangan, pertidaksamaan linier, kuadrat, dan pecahan rasional. Lengkap dengan pembahasan latihan soal slide dosen a s.d. i.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_matdas_p2_pdf",
            "type": "pdf",
            "title": "1789631769_Pert_2_Matematika_-_Pertidaksamaan_Bilangan_Real_RG (1).pdf (Slide Dosen P2)",
            "file_url": "file:///C:/Users/haike/Downloads/Tugas_Kuliah/06_Matematika_Dasar/Materi_dan_Rangkuman/1789631769_Pert_2_Matematika_-_Pertidaksamaan_Bilangan_Real_RG%20(1).pdf",
            "file_size": 1837126,
            "date_added": "2026-09-30"
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
          "standar": "\n<h4>1. Inti Konsep: Menyelesaikan Pertidaksamaan Aljabar</h4>\n<p>Tujuan menyelesaikan pertidaksamaan adalah menemukan <strong>Himpunan Penyelesaian (HP)</strong> yang membuat pernyataan matematika bernilai benar. HP selalu berupa rentang nilai (interval) pada garis bilangan real, bukan angka tunggal.</p>\n\n<h4>2. Tiga Kesalahan Fatal yang Sering Dilakukan Mahasiswa pada UTS:</h4>\n<ol class=\"list-decimal pl-5 space-y-2 text-sm text-slate-300\">\n  <li><strong>Mengalikan silang variabel pada pecahan:</strong> DILARANG mengalikan silang penyebut yang mengandung x (seperti <sup>1</sup>/<sub>x</sub> &lt; 2 ⟹ 1 &lt; 2x) karena kita belum tahu apakah x positif atau negatif. Selalu pindahkan ke ruas kiri dan samakan penyebut!</li>\n  <li><strong>Lupa membalik tanda saat dikali/dibagi bilangan negatif:</strong> Jika -3x &lt; 9, maka x &gt; -3 (tanda &lt; wajib dibalik menjadi &gt;).</li>\n  <li><strong>Penyebut tidak boleh sama dengan nol:</strong> Pada pecahan <sup>(x - 1)</sup>/<sub>(x + 2)</sub> ≥ 0, titik x = -2 TIDAK BOLEH ikut dimasukkan ke dalam HP (tetap gunakan kurung biasa) meskipun tanda soalnya ada sama dengannya (≥).</li>\n</ol>\n\n<h4>3. Trik Cepat Uji Titik:</h4>\n<p>Setelah meletakkan titik pemecah pada garis bilangan, selalu ambil angka uji <strong>x = 0</strong> untuk mengecek tanda plus (+) atau minus (-). Selang yang memuat angka 0 akan memiliki tanda yang sama dengan hasil substitusi tersebut.</p>\n",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": false
        },
        "raw_slide_content": "\n<div class=\"slide-content-block space-y-6\">\n  <div class=\"p-3 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-xs font-mono text-indigo-300\">\n    📌 Dikutip langsung dari berkas: <strong>1789631769_Pert_2_Matematika_-_Pertidaksamaan_Bilangan_Real_RG (1).pdf</strong>\n  </div>\n\n  <h3 class=\"text-lg font-bold text-white border-b border-white/10 pb-2\">Slide 6: 5 Langkah Baku Menentukan Pertidaksamaan Bilangan Real</h3>\n  <ol class=\"list-decimal pl-5 text-sm text-slate-300 space-y-2\">\n    <li><strong>Sederhanakan Ruas:</strong> Pindahkan semua suku ke satu ruas sehingga ruas lainnya menjadi nol (f(x) &lt; 0 atau f(x) &gt; 0).</li>\n    <li><strong>Faktorkan Persamaan:</strong> Cari pembuat nol pembilang dan pembuat nol penyebut untuk memperoleh <em>titik-titik pemecah</em>.</li>\n    <li><strong>Plot pada Garis Bilangan:</strong> Letakkan semua titik pemecah pada garis bilangan secara berurutan dari terkecil ke terbesar.</li>\n    <li><strong>Lakukan Uji Titik:</strong> Pilih satu angka uji di setiap selang (paling mudah x = 0 jika bukan titik pemecah) untuk menentukan tanda selang (+) atau (-).</li>\n    <li><strong>Tentukan Himpunan Penyelesaian (HP):</strong> Jika tanda pertidaksamaan &gt; 0 pilih daerah (+); jika &lt; 0 pilih daerah (-). Tuliskan dalam notasi interval.</li>\n  </ol>\n\n  <h3 class=\"text-lg font-bold text-white border-b border-white/10 pb-2\">Slide 7: Pembahasan Latihan Soal Resmi dari Slide Dosen (Step-by-Step)</h3>\n  \n  <!-- Soal a -->\n  <div class=\"p-4 bg-slate-900 rounded-xl border border-white/10 space-y-2\">\n    <div class=\"text-xs font-bold text-cyan-400\">Soal a: Selesaikan 2x - 7 &lt; 4x - 2</div>\n    <div class=\"text-xs font-mono text-slate-300 pl-3 border-l-2 border-indigo-500 space-y-1\">\n      <div>2x - 4x &lt; -2 + 7</div>\n      <div>-2x &lt; 5</div>\n      <div>x &gt; -<sup>5</sup>/<sub>2</sub> &nbsp;(Ingat: dibagi -2, tanda &lt; dibalik menjadi &gt;)</div>\n      <div class=\"text-emerald-400 font-bold\">HP = { x ∈ ℝ | x &gt; -2,5 } = (-5/2, ∞)</div>\n    </div>\n  </div>\n\n  <!-- Soal b -->\n  <div class=\"p-4 bg-slate-900 rounded-xl border border-white/10 space-y-2\">\n    <div class=\"text-xs font-bold text-cyan-400\">Soal b: Selesaikan -5 ≤ 2x + 6 &lt; 4 (Pertidaksamaan Ganda)</div>\n    <div class=\"text-xs font-mono text-slate-300 pl-3 border-l-2 border-indigo-500 space-y-1\">\n      <div>Kurangkan 6 pada ketiga ruas: -5 - 6 ≤ 2x &lt; 4 - 6</div>\n      <div>-11 ≤ 2x &lt; -2</div>\n      <div>Bagi 2 ketiga ruas: -<sup>11</sup>/<sub>2</sub> ≤ x &lt; -1</div>\n      <div class=\"text-emerald-400 font-bold\">HP = [ -11/2, -1 )</div>\n    </div>\n  </div>\n\n  <!-- Soal c -->\n  <div class=\"p-4 bg-slate-900 rounded-xl border border-white/10 space-y-2\">\n    <div class=\"text-xs font-bold text-cyan-400\">Soal c: Selesaikan 13 ≥ 2x - 3 ≥ 5</div>\n    <div class=\"text-xs font-mono text-slate-300 pl-3 border-l-2 border-indigo-500 space-y-1\">\n      <div>Tambahkan 3 pada ketiga ruas: 16 ≥ 2x ≥ 8</div>\n      <div>Bagi 2 ketiga ruas: 8 ≥ x ≥ 4  (Atau ditulis: 4 ≤ x ≤ 8)</div>\n      <div class=\"text-emerald-400 font-bold\">HP = [ 4, 8 ]</div>\n    </div>\n  </div>\n\n  <!-- Soal e -->\n  <div class=\"p-4 bg-slate-900 rounded-xl border border-white/10 space-y-2\">\n    <div class=\"text-xs font-bold text-cyan-400\">Soal g: Selesaikan Pertidaksamaan Kuadrat x² - x &lt; 6</div>\n    <div class=\"text-xs font-mono text-slate-300 pl-3 border-l-2 border-indigo-500 space-y-1\">\n      <div>x² - x - 6 &lt; 0</div>\n      <div>Faktorkan: (x - 3)(x + 2) &lt; 0</div>\n      <div>Titik pemecah: x = 3 dan x = -2</div>\n      <div>Uji titik x = 0: (0 - 3)(0 + 2) = -6 (Bernilai Negatif -)</div>\n      <div>Karena yang diminta &lt; 0, maka daerah penyelesaian berada di antara -2 dan 3</div>\n      <div class=\"text-emerald-400 font-bold\">HP = { x ∈ ℝ | -2 &lt; x &lt; 3 } = (-2, 3)</div>\n    </div>\n  </div>\n\n  <!-- Soal Pecahan Rasional -->\n  <div class=\"p-4 bg-slate-900 rounded-xl border border-white/10 space-y-2\">\n    <div class=\"text-xs font-bold text-cyan-400\">Soal Latihan Slide 13 a: Selesaikan <sup>(x - 1)</sup>/<sub>(x + 2)</sub> ≥ 0</div>\n    <div class=\"text-xs font-mono text-slate-300 pl-3 border-l-2 border-indigo-500 space-y-1\">\n      <div>Pembuat nol pembilang: x - 1 = 0 ⟹ x = 1 (lingkaran penuh karena ≥ 0)</div>\n      <div>Pembuat nol penyebut: x + 2 = 0 ⟹ x = -2 (lingkaran KOSONG karena syarat penyebut ≠ 0)</div>\n      <div>Uji titik x = 0: <sup>(0 - 1)</sup>/<sub>(0 + 2)</sub> = -1/2 (Negatif)</div>\n      <div>Garis bilangan: [+] (-2) [-] (1) [+]</div>\n      <div>Karena diminta ≥ 0 (positif), ambil daerah kiri dan kanan</div>\n      <div class=\"text-emerald-400 font-bold\">HP = (-∞, -2) ∪ [1, ∞)</div>\n    </div>\n  </div>\n</div>\n"
      },
      {
        "id": "subject-matdas_m3",
        "subject_id": "subject-matdas",
        "meeting_number": 3,
        "date": "2026-09-29",
        "title": "Pertidaksamaan Nilai Mutlak & Teorema Aljabar Pengkuadratan Dua Ruas",
        "description": "Materi Slide Dosen Pertemuan 3: Definisi geometris nilai mutlak |x|, 8 teorema sifat nilai mutlak, metode pengkuadratan dua ruas (A+B)(A-B) <= 0, dan pembahasan lengkap latihan soal pertidaksamaan mutlak slide dosen a s.d. h.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan sifat pembalikan tanda pertidaksamaan saat membagi dengan bilangan negatif.",
        "materials": [
          {
            "id": "mat_matdas_p3_pdf",
            "type": "pdf",
            "title": "1790406762_Pert_3_Matematika_-_Fungsi_RegPagi.pdf (Slide Dosen P3 - Nilai Mutlak)",
            "file_url": "file:///C:/Users/haike/Kuliah/Semester%201/Matematika%20Dasar/01_materi_pdf/1790406762_Pert_3_Matematika_-_Fungsi_RegPagi.pdf",
            "file_size": 564156,
            "date_added": "2026-09-29"
          }
        ],
        "transcripts": [
          {
            "id": "trans_subject-matdas_3",
            "audio_url": null,
            "content": "Transkrip perkuliahan tatap muka: Dosen menekankan bahwa pemahaman konsep nilai mutlak |x|, 8 sifat aljabar, dan teknik faktorisasi selisih kuadrat (A+B)(A-B) <= 0 adalah kunci untuk menjawab 40% soal pada Ujian Tengah Semester (UTS).",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Inti Konsep Nilai Mutlak: Jarak Selalu Positif</h4>\r\n<p>Nilai mutlak <code>|x|</code> merepresentasikan jarak geometris dari titik pusat (0) pada garis bilangan real, sehingga nilainya selalu bernilai non-negatif (<code>|x| &ge; 0</code>). Dalam pemrograman komputer, fungsi ini diimplementasikan dengan <code>abs(x)</code>.</p>\r\n\r\n<h4>2. Algoritma 2 Rumus Sakti Pertidaksamaan Nilai Mutlak:</h4>\r\n<ul>\r\n  <li>Jika <strong>|x| &lt; a</strong> (tanda lebih kecil): Solusi berada <strong>DI DALAM / DI ANTARA</strong> (<code>-a &lt; x &lt; a</code>).</li>\r\n  <li>Jika <strong>|x| &gt; a</strong> (tanda lebih besar): Solusi berada <strong>DI LUAR / TERPISAH</strong> (<code>x &lt; -a ATAU x &gt; a</code>).</li>\r\n  <li>Jika kedua ruas memiliki mutlak <strong>|f(x)| &le; |g(x)|</strong>: Kuadratkan kedua ruas dan gunakan rumus faktorisasi selisih kuadrat <code>(f(x) + g(x))(f(x) - g(x)) &le; 0</code>. Jangan lupa balikkan tanda pertidaksamaan jika membagi dengan bilangan negatif!</li>\r\n</ul>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": false
        },
        "raw_slide_content": "\r\n<div class=\"slide-content-block space-y-6\">\r\n  <div class=\"p-3 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-xs font-mono text-indigo-300\">\r\n    📌 Dikutip langsung dari berkas: <strong>1790406762_Pert_3_Matematika_-_Fungsi_RegPagi.pdf</strong> (Slide 1 - 3 Perkuliahan)\r\n  </div>\r\n\r\n  <h3 class=\"text-lg font-bold text-white border-b border-white/10 pb-2\">Slide 2: Definisi & 8 Sifat Nilai Mutlak</h3>\r\n  <p class=\"text-sm text-slate-300 leading-relaxed\">\r\n    Nilai mutlak x (|x|) didefinisikan secara geometris sebagai <strong>jarak x dari titik pusat (0) pada garis bilangan</strong>, sehingga nilainya tidak pernah negatif.<br>\r\n    Definisi Aljabar: <code>|x| = x jika x &ge; 0</code> dan <code>|x| = -x jika x &lt; 0</code>.\r\n  </p>\r\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-200\">\r\n    <div class=\"p-2.5 bg-slate-900 rounded border border-white/10\">1. |a &middot; b| = |a| &middot; |b|</div>\r\n    <div class=\"p-2.5 bg-slate-900 rounded border border-white/10\">2. |a / b| = |a| / |b| (b &ne; 0)</div>\r\n    <div class=\"p-2.5 bg-slate-900 rounded border border-white/10\">3. |a + b| &le; |a| + |b| (Ketidaksamaan Segitiga)</div>\r\n    <div class=\"p-2.5 bg-slate-900 rounded border border-white/10\">4. |a - b| &ge; ||a| - |b||</div>\r\n    <div class=\"p-2.5 bg-slate-900 rounded border border-white/10\">5. |x| = &radic;(x&sup2;)</div>\r\n    <div class=\"p-2.5 bg-slate-900 rounded border border-white/10\">6. |x| &lt; a &hArr; -a &lt; x &lt; a</div>\r\n    <div class=\"p-2.5 bg-slate-900 rounded border border-white/10\">7. |x| &gt; a &hArr; x &lt; -a atau x &gt; a</div>\r\n    <div class=\"p-2.5 bg-slate-900 rounded border border-white/10\">8. |x| &le; |y| &hArr; x&sup2; &le; y&sup2;</div>\r\n  </div>\r\n\r\n  <h3 class=\"text-lg font-bold text-white border-b border-white/10 pb-2\">Slide 3: Pembahasan Contoh Soal Nilai Mutlak Dosen</h3>\r\n  \r\n  <div class=\"p-4 bg-slate-900 rounded-xl border border-white/10 space-y-2\">\r\n    <div class=\"text-xs font-bold text-cyan-400\">Contoh 1: Selesaikan |3x - 5| &ge; 1</div>\r\n    <div class=\"text-xs font-mono text-slate-300 pl-3 border-l-2 border-indigo-500 space-y-1\">\r\n      <div>Gunakan sifat 7: 3x - 5 &le; -1 &nbsp;atau&nbsp; 3x - 5 &ge; 1</div>\r\n      <div>3x &le; 4 &rArr; x &le; 4/3 &nbsp;atau&nbsp; 3x &ge; 6 &rArr; x &ge; 2</div>\r\n      <div class=\"text-emerald-400 font-bold\">HP = (-&infin;, 4/3] &cup; [2, &infin;)</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"p-4 bg-slate-900 rounded-xl border border-white/10 space-y-2\">\r\n    <div class=\"text-xs font-bold text-cyan-400\">Contoh 2: Selesaikan |2x + 3| &ge; |4x + 5| (Kedua Ruas Memuat Nilai Mutlak)</div>\r\n    <div class=\"text-xs font-mono text-slate-300 pl-3 border-l-2 border-indigo-500 space-y-1\">\r\n      <div>Gunakan sifat 8 (kuadratkan kedua ruas): (2x + 3)&sup2; &ge; (4x + 5)&sup2;</div>\r\n      <div>(2x + 3)&sup2; - (4x + 5)&sup2; &ge; 0</div>\r\n      <div>Gunakan rumus pemfaktoran A&sup2; - B&sup2; = (A + B)(A - B):</div>\r\n      <div>[(2x + 3) + (4x + 5)] &middot; [(2x + 3) - (4x + 5)] &ge; 0</div>\r\n      <div>(6x + 8)(-2x - 2) &ge; 0</div>\r\n      <div>Bagi dengan -4 (tanda berbalik): (3x + 4)(x + 1) &le; 0</div>\r\n      <div>Titik pemecah: x = -4/3 dan x = -1</div>\r\n      <div class=\"text-emerald-400 font-bold\">HP = [ -4/3, -1 ]</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
      },
      {
      "id": "subject-matdas_m4",
      "subject_id": "subject-matdas",
      "meeting_number": 4,
      "date": "2026-10-01",
      "title": "Konsep Pemetaan Fungsi, Evaluasi Beda h, Uji Genap/Ganjil, Domain & Range, Komposisi (Live GMeet Dosen)",
      "description": "Materi Perkuliahan Daring Live GMeet Pertemuan 4 (Ibu Syifaafidah, M.Pd. & Slide 1790406762_Pert_3_Matematika_-_Fungsi_RegPagi.pdf): Pengumuman pengurangan kuliah luring Unindra (3 sebelum UTS & 2 setelah UTS), hakikat pemetaan fungsi domain/kodomain/range, evaluasi f(4+h) & difference quotient (h+6), uji fungsi ganjil pecahan rasional, rumus titik puncak fungsi kuadrat y_min/y_max = -D/4a untuk range, syarat domain alami akar & pecahan, komposisi (fog)(x) & (gof)(x), serta penegasan bahwa Fungsi Invers ditiadakan dari materi UTS.",
      "notes": "Pengumuman Dosen: Kuliah offline dikurangi menjadi 3 sebelum UTS & 2 setelah UTS. MATERI FUNGSI INVERS TIDAK DIUJIKAN DI UTS! Fokus penuh pada Domain, Range, Evaluasi Beda h, dan Komposisi Fungsi.",
      "materials": [
              {
                      "id": "mat_matdas_p4_pdf",
                      "type": "pdf",
                      "title": "1790406762_Pert_3_Matematika_-_Fungsi_RegPagi.pdf (Slide Resmi Dosen P4 - Fungsi)",
                      "file_url": "file:///C:/Users/haike/Kuliah/Semester%201/Matematika%20Dasar/01_materi_pdf/1790406762_Pert_3_Matematika_-_Fungsi_RegPagi.pdf",
                      "file_size": 564156,
                      "date_added": "2026-10-01"
              },
              {
                      "id": "mat_matdas_p4_notes",
                      "type": "notes",
                      "title": "Catatan Papan Tulis GMeet (Diagram Panah, Difference Quotient, Range Parabola, Sifat Tanda Pecahan)",
                      "file_url": "#",
                      "file_size": 185000,
                      "date_added": "2026-10-01"
              },
              {
                      "id": "mat_matdas_p4_gmeet",
                      "type": "link",
                      "title": "Transkrip Live Google Meet (Tactiq AI Extension) - Sesi Daring Ibu Syifaafidah, M.Pd.",
                      "file_url": "#",
                      "file_size": 38072,
                      "date_added": "2026-10-01"
              }
      ],
      "transcripts": [
              {
                      "id": "trans_subject-matdas_4",
                      "audio_url": null,
                      "content": "Pagi semuanya. Ya kita mulai perkuliahan pagi hari ini dengan membaca doa terlebih dahulu berdoa sesuai keyakinan masing-masing mulai bismillahirrohmanirohim. ya Berdoa selesai Ya sekarang masuk ke pertemuan ke-4. udah dapet informasi ya semuanya bahwa perkuliahan offline atau perkuliahan luring itu dikurangi yang tadinya 4 sebelum UTS dan 3 sudah UTS setelah UTS berubah jadi 3 sebelum UTS dan 2 setelah UTS Ya jadi perkuliahan akan banyak onlinenya gitu ya? Sekarang masih pertemuan 4 untuk pertemuan 4 materinya adalah fungsi dan limit kemarin kalian sampai mana ya? Karena tiap kelas beda cepat-cepetnya\nhaikel saleh\nHi, I'm transcribing this call with my Tactiq AI Extension. https://tactiq.io/r/transcribing\nYasmine Avisha\nnilai mutlak\n9A M.Fawwaz syarief\nyang 7 sampai 7 kan\nsyifaafidah na\nnilai mutlak fungsi belum masuk sama sekali kelas kalian\nYasmine Avisha\nBelum ibu.\nsyifaafidah na\ntapi nilai mutlaknya semua sifat udah kan\nJessenia Eka\nSudah bu, sudah.\nYasmine Avisha\np8 doang deh kayaknya\nsyifaafidah na\nsampai 8 Emang sifatnya ada 8\nYasmine Avisha\nEh udah deh berarti\nsyifaafidah na\nberarti udah\nkok nggak ada\nya untuk pertemuan 4 itu materinya adalah fungsi Nah di sini fungsi itu didefinisikan sebagai suatu aturan korespondensi ya aturan korespondensi itu berarti saling menghubungkan gitu ya antara nilai x yang disebut dengan daerah asal ke himpunan daerah kawan atau kodomain dengan tepat satu nilai jadi contohnya gini misal Ya, jadi fungsi itu ada tiga kata yang akan sering muncul yang pertama domain yang kedua kodomain yang ketiga adalah range.\ndomain itu adalah daerah asal kodomain adalah daerah kawan daerah hasil adalah range ya fungsi dinamakan suatu fungsi jika himpunan domain dipetakan Tepat satu nilai atau dihubungkan tempat satu nilai ke himpunan kawan contohnya ada fungsi a e fungsi himpunan a misal di sini a b c himpunan b ya A berpasangan dengan satu b berpasangan dengan 2 C berpasangan dengan 3 ya a ke b itu di hubungkan oleh suatu fungsi fx misal ya, Nah adalah daerah asal atau domain ya ini disebut sebuah fungsi adalah daerah asal atau domain b adalah daerah kawan atau kodomain nah yang daerah hasilnya yang mana daerah hasilnya adalah yang punya pasangan sehingga bisa kita tulis Himpunan a adalah a b c himpunan b Atau domain ya kita ganti aja domain.\neh salah Kode mainnya adalah yang ada di himpunan b. 1 2 3 4\nadalah yang punya pasangan yang punya pasangan adalah 123 gitu ya bedanya domain kodomain sama Range adalah itu domain adalah daerah asalnya ya kodomain Adalah daerah kawan Range adalah daerah hasil yang punya pasangan di domain gitu. Nah ini disebut fungsi karena dia fungsi a memetakan Tepat satu nilai di himpunan b. Ya. Kalau misal si C nya ternyata arahnya keempat juga bercabang ya daerah asalnya bercabang itu disebut bukan fungsi yang disebut fungsi adalah kalau Ikan apa yang gak Mau kehapus kalau c nya Sendiri ya kayak B pasangannya satu pokoknya kalau pasangannya satu disebut fungsi kalau pasangannya dua atau bercabang itu bukan fungsi.\ngitu Sebentar kok nggak ini ya? Kenapa dia nggak Mau kehapus mana tuh mau ya jadi kalau bercabang bukan fungsi tapi kalau misalnya misal nih himpunan a itu abcd dia pasangannya 3 juga ini tetap disebut fungsi ya karena yang penting adalah domain himpunan a memetakan Tepat satu nilai gitu kalau si kodomain atau daerah kawan yang bercabang itu boleh yang nggak boleh bercabang kalau domainnya bercabang gitu ya harus paham harus bisa bedain mana fungsi mana Bukan fungsi ya Ini mah Nah gitu terus.\nkita masuk ke Sini sifat fungsi ya sifat fungsi dari definisinya setiap anggota X memiliki pasangan di Y ya. JAdi misal ada himpunan X ada himpunan y pokoknya anggota X harus memiliki pasangan di Y dan tepat satu anggota artinya dia nggak boleh bercabang gitu kalau bukan bercabang kalau bercabang. dia bukan fungsi kemudian di sini ada fungsi ya fungsi itu Apa fungsi itu ya bentukannya Ada variabel ada koefisien dan konstanta gitu FX adalah x kuadrat dikurang 2 x ini adalah suatu fungsi cari dan Sederhanakan F4 berarti artinya 4 ini sebagai x nya sehingga nanti di subtitusi ke fungsi x - 2x yang tadinya x - 2x x-nya diganti oleh 44 dikuadratkan dikurang 2 kali 4 gitu ya Maka hasilnya 4 kuadrat adalah 16 dikurang 2 kali 48 hasilnya adalah 8 gitu kemudian F4 plus H4 + H ini sebagai x nya jadi nanti diganti x nya menjadi 4 + H dikuadratkan dikurang 2 dikali 4 + h ingat untuk menyelesaikan pangkat ya itu dikuadratkan ya pangkat kali-kali pangkat 4 dipangkatkan dua hasilnya adalah 16 kali-kali berarti 4 kali 2 4 kali H 4h dikali 2 jadi 8h inget ya masih ingat kan yang pangkat kali-kali pangkat kemudian H dipangkatkan dua jadi kuadrat gitu nah berikutnya yang negatif 2 negatif 2 dikali 4 -2 * H -2 * 4 - 8 -2 Dika negatif 2H Nah kita hitung yang variabel yang sama H kuadrat karena cuman ada satu berarti hak kuadrat tetap 8h ada temennya min 2 H8 H dikurang 2H hasilnya adalah 6 16 dikurang 816 - 8 hasilnya adalah positif 8 gitu ya Jadi kalau ditanya fx x - 2x sebagai fungsinya kemudian di subtitusi oleh F4 plus h artinya 4 + H ini di subtitusi sebagai x-nya Sampai sini paham dulu apa nggak? ada yang mau ditanyain oke ya berikutnya kita masuk ke yang c yang c adalah x-nya ada dua maksudnya gimana F4 Minh ya pertama ini kedua f-nya x-nya adalah 4 gitu cara ngitungnya gimana ya Sama aja pertama kurung pertama adalah 4-h ya X yang 4 - H di subtitusi ke x - 2x 4 -h dikuadratkan kemudian dikurang 2 diganti 4 - h baru tutup kurung sekarang kita masuk ke F4 F4 itu sebetulnya udah kita cari tapi kita tulis lagi ya x-nya diganti 4 berarti 4 dikuadratkan dikurang 2 dikali 4 Nah ini kayak tadi pangkat kali-kali pangkat 4 dipangkatkan 2 berarti 16 kali-kali 4x - H -4h -4h dikali 2 min 8 H - H dikuadratkan min h dikuadratkan artinya - H dikali - H ya jadi positif - * - + Ya positif H kuadrat gitu di sini H kuadrat -2 * 4 -2 * 4 - 8 -2 dikali - H jadinya + 2H sekarang ini di dalam itu 16 dikurang 8 16 - 8 hasilnya adalah 88 ini tandanya min min 8 Maka hasilnya adalah H kuadrat nggak ada temennya tulis a - 8h ada temennya ada 2H jadi min 6 h ya 16 kurang 8 hasilnya adalah 8 16 8 kurang 8 habis jadi hasil akhirnya adalah kuadrat + 6h itu paham bisa dipahami oleh semuanya oke selanjutnya yang D yang d itu kita udah cari nih 4f4+h kayak yang bf4 sebetulnya sama kayak yang bisa langsung aja di subtitusi 4 + hasilnya adalah a kuadrat + 6h plus 8 dikurang F4 F4 nya adalah 8 - 8 Berhak yang atas 8 dikurang 8 habis sisa H kuadrat + 6h/ha, Apakah bisa dieliminasi? ya ini bisa dieliminasi kalau sudah dipecah kuadrat + h/h, + 6h perh gitu hasilnya adalah H kuadrat per h sisa H ya 6h/ha sisa tahu dari mana gini hak kuadrat per h itu artinya itu sama kayak HK lihat nah kalau ada yang sama antara pembilang dan penyebut dan simbolnya di sini perkalian maka habis sisa aja begitupun yang 6h/ha atas sama bawah sama-sama punya hak sisa 6 ya, kalian bisa ngerjainnya seperti itu atau kuadrat + 6h/h dari hak kuadrat sama 6 h itu keduanya sama-sama punya H ya H di keluarin H kuadrat dibagi H hasilnya adalah h 6 h hasilnya adalah 6 /h baru dicoret h nya sisa h+6 mau yang atas mau yang bawah boleh ngerjainnya sesuai dengan kalian bisanya yang mana pahamnya yang mana gitu Kenapa Ibu nggak bisa langsung nyoret misal nih kan hak kuadrat + 6h yang 6 sama yang bawah dicoret itu nggak bisa karena di sini Tandanya penjumlahan sama pembagian nggak setara yang setara itu kalau dia udah bentuknya perkalian sama pembagian gitu.\nya kan contohnya yang H kuadrat per h itu udah perkalian HK lihat baru bisa dicoret ya 6h dikali artinya kan 6 dikalihah dicoret bisa gitu kalau penjumlahan langsung itu nggak bisa nggak bisa Dieliminasi secara langsung itu paham atau tidak ada yang mau ditanyain atau enggak? Paham semua berarti ya? Oke kalau paham kita masuk ke fungsi ganjil genap nah suatu fungsi dikatakan fungsi genap jika fx F -x = FX maka disebut F maka F maka fungsi disebut dengan fungsi genap jadi untuk menyatakan fungsi tersebut ganjil atau genap itu harus selalu di subtitusi negatif X ya Kenapa harus min x Kenapa nggak boleh yang lain karena ini definisinya didefinisinya adalah jika f-x sama dengan fx maka f disebut dengan fungsi genap gitu makanya Kenapa harus di subtitusi oleh min x di subtitusinya kemana ke fungsinya ya yang tadinya fx = x kuadrat kita akan institusinya jadi F min x x nya diganti jadi -x dikuadratkan dikurang 2 hasilnya adalah -x adalah x kuadrat kurang 2 x kuadrat min 2 ini balik lagi Jadi fungsi awal gitu karena setelah disubstitusi hasilnya tetap fungsi awal ya setelah di subtitusi min x hasilnya tetap FX maka disebut fungsi genap gitu ya kemudian kalau di subtitusi oleh min x dan hasilnya negatif min x ya negatif FX maka disebut dengan fungsi ganjil contohnya f-x di subtitusi ke fungsi x ^ 3 Berartikan x nya diganti - x ^ 3 dikurang 2 - x hasilnya adalah -x * -x * -x - * - + * yang ini -2 * -x positif X positif 2x gitu Nah dari sini sebetulnya sudah terlihat x-nya itu negatif maka ini kan negatifnya keluar min x ^ 3 itu hasilnya adalah x ^ 3 2x / - hasilnya -2x balik lagi ke fungsi awal ininya negatif ini jadi fungsi awal fungsi fx gitu ya karena hasilnya negatif maka disebutlah fungsi ganjil itu ya fungsi genap fungsi ganjil kalau hasilnya negatif maka fungsi ganjil kalau hasilnya positif maka fungsi genap kita subtitusi ke soal yang ketiga berarti di sini -x ^ 3 + 3 kali min x per min x pangkat 4 min 3 min x pangkat 2 + 4 - x ^ 3 berarti kan tetap min x ^ 3 3 kali min x min 3 x yang bawah min x dipangkatkan 4 hasilnya adalah x ^ 4 ini -x Berartikan jadi x * -3 hasilnya -3x yang belakang tetap 4 gitu, nah ini perhatikan si pembilang itu negatif negatifnya kita keluarkan hasilnya menjadi x ^ 3 - 3 - x ^ 3 dibagi Min jadinya positif x^3 - 3x / - hasilnya jadi positif 3x yang bawahnya tetap x ^ 4 - 3x + 4 Bu kenapa Yang bawahnya nggak dibagi dengan min ya gini kalau ada Min 1 ya misal yang atas -1 yang bawah 2 ini artinya Kan sama aja kayak Min 1/2 Kalau yang atasnya Min Eh yang atasnya misal 2 positif 2 yang bawahnya -3 hasilnya jadi -2/3 jadi salah satu kalau misal atasnya min 1 bawahnya -2 hasilnya jadi positif 1/2 gitu ya, makanya kenapa? Minusnya itu hanya atasnya aja kalau yang bawahnya minus nanti jawabannya jadi positif salah ya.\nkemudian kalau misal ada min 1 dikali 1/2 ini artinya -1 * 1 yang bawah kalau nggak ada bawahnya ini artinya satu min 1 kali 1 yang bawahnya satu kali dua gitu begitupun angka lain misal tiga min 3 di sininya 2/4 2/5 misal ya dikali min 3 ya ini artinya kalau nggak ada bawahnya -3/1 - 3 * 2 Dia bawahnya satu kali lima ya bukan artinya -3 * 2/5 itu -3 * 2 - 3 * 5 itu bukan ini salah ya yang bener adalah -3/1 artinya -3 * 2 1 * 5. Makanya kenapa? minnya itu hanya di hanya berlaku di salah satu bukan di keduanya gitu karena ini fungsinya balik lagi ke fungsi awal maka Min FX dia termasuk fungsi ganjil gitu ya Coba ada yang bisa jawab nggak kalau misal fungsinya adalah x pangkat 3 per 5 dia termasuk fungsi ganjil atau fungsi genap x ^ 3 ya ini artinya kan -x dipangkatkan 3/5 - X ^ 3/5 Maka hasilnya adalah - ini x ^ 3/5 adalah FX nya sehingga dia termasuk fungsi ganjil gitu Sampai sini ada yang mau ditanyain kalau nggak ada kita lanjut.\nJessenia Eka\nada Bu lanjut aja\nsyifaafidah na\noke, ya, kalau lanjut berarti di sini kita masuk ke jenis-jenis fungsi jenis fungsi itu ada banyak fungsi linier fungsi kuadrat fungsi irasional rasional dan trigonometri untuk fungsi linier itu adalah bentuk umumnya adalah MX + B artinya x-nya adalah pangkat 1 kemudian kalau fungsi kuadrat ax ya x-nya pangkat 2 ax + bx + C ini disebut fungsi kuadrat ada lagi fungsi irasional fungsi irasional adalah fungsi akar ya fungsi akar itu bisa ditulis dalam bentuk pangkat juga dengan cara GX ya GX di sini karena pangkatnya 1 nggak ada pangkatnya berarti pangkat 1 per m itu contohnya adalah misal akar 3x akar 3x itu sama aja kayak 3x x nya kan ini pangkat 1 ya 1 per kalau nggak ada akarnya berapa ini akar 2 kenapa akar 2 kayak gitu aja akar 4 akar 4 itu sama aja kayak 2 pangkat 2 gitu ya, makanya kenapa di sini akar 2 gitu kalau atau misal di sini ada x kuadrat akar-akar 3x artinya X yang dalamnya dulu pangkat dalam dibagi pangkat luarnya jadi x 2 pangkat eh pangkat 2 per 3 gitu kemudian ada fungsi rasional fungsi rasional adalah fungsi pecahan ya Kemudian ada fungsi trigonometri sin cos tangen gitu terus ini belum ada hitungannya Ya hanya perkenalan kemudian ada sistem koordinat.\nsistem koordinat itu ada sumbu x ada sumbu y dan ada titik asal sumbu x adalah sumbu horizontal atau absis sumbu y adalah sumbu vertikal ordinat titik asal yaitu perpotongan antara X dan Y ini adalah titik asal 0,0 sumbu x sumbu y paham lah ya gitu itu untuk gambar untuk dia nama koordinatnya Ya itu kan tadi sistem koordinat itu ada sumbu x sumbu y dan titik asal nah nama koordinatnya itu disebut koordinat kartesius koordinat kartesius ini dibagi menjadi 4 kuadran kuadran 1 kuadran 2 kuadran 3 sama kuadran 4 gitu ya kalau menggambarkan titik dikoordinat kartesius artinya misal ada Aa itu x,y misal -1,1 artinya x-nya -1 y-nya adalah 1 x nya min 1 Ya ditarik ke y-nya 1 maka titiknya adalah ini ini adalah titik a. Gitu Itu untuk menggambarkan titik di koordinat kartesius selanjutnya ini adalah grafik fungsi untuk fungsi linier grafiknya garis lurus ya misal ada grafik ini garis ini adalah fungsi linier Nah kalau Fungsi kuadrat grafiknya parabola, Apakah kita akan menggambarkan fungsi linear fungsi kuadrat enggak ya kita nggak usah ada grafik fungsi.\nkarena lumayan susah terus akan lama juga ngerjainnya ya, tapi kalian harus tahu bahwa fungsi linier itu fungsinya garis lurus kalau kuadrat fungsinya apa grafiknya parabola parabola itu ya ini kayak garis merah terbuka ke atas atau terbuka ke bawah terbuka ke atas terjadi jika a nya positif terbuka ke bawah Jika a nya negatif nah ini yang penting adalah domain fungsi untuk domain fungsi domain fungsi adalah Daerah asal fungsi ditentukan oleh semua himpunan bilangan real sehingga daerah hasilnya atau range-nya adalah bilangan real juga ya Jadi kalau ditanya domain fungsi itu adalah semua himpunan bilangan real semua himpunan bilangan real itu bisa dituliskan minta hingga sampai dengan positif tak hingga ya kalau ditanya nanti di soal domain fungsi dari fungsi fx = x itu jawabannya pasti dimulai dari minta hingga sampai dengan positif tak hingga Nah tapi di sini Ada dua fungsi yang punya syarat yaitu fungsi irasional dan fungsi rasional ya.\nYa Jadi yang tadinya domain fungsi itu minta hingga sampai dengan tak hingga itu jadi berubah kalau dia fungsinya fungsi irasional. Kenapa fungsi irasional akan berubah karena dia punya syarat Ya syaratnya adalah PX lebih dari sama dengan nol. Kenapa harus lebih dari sama dengan nol karena kalau negatif fungsinya negatif maka disebut dengan imajiner ya kalau imajiner nanti masuknya ke bilangan Kompleks ya fungsi kompleks Itu makanya nanti perhitungannya akan berbeda.\nSehingga di sini fungsi irasional itu punya syarat-syaratnya harus lebih dari sama dengan nol nggak boleh negatif. Ya kemudian fungsi yang punya syarat lagi adalah fungsi rasional fungsi rasional adalah fungsi pecahan di mana pecahan itu terdefinisi kalau di bawahnya bukan ya syaratnya adalah tidak boleh sama dengan nol penyebut tidak sama dengan nol. contohnya gini misal Ada 1/0 ini artinya berapa? Sama dengan berapa 1/0? 1/0 itu tidak terdefinisi Ya tidak terdefinisi makanya kenapa? Yang bawah itu tidak boleh sama dengan nol karena di atasnya berapapun pembilangnya berapapun kalau dibagi 0 bawahnya nol itu tidak akan terdefinisi.\ngitu kecuali kebalikannya 0/1 0/1 itu hasilnya ada 0 ini terdefinisi Gitu ya, makanya kenapa syaratnya itu? Tidak boleh sama dengan nol kalau di bawahnya nol maka tidak akan terdefinisi terus seperti itu ya. Nah, domain berpasangan dengan range itu adalah daerah hasil daerah hasil adalah kumpulan semua nilai yang dihasilkan dari suatu fungsi dari domain tertentu untuk mencari range ya atau daerah hasil itu bisa dengan subtitusi atau dengan invers tapi yang paling gampang itu dengan subtitusi nanti kita pelajari satu persatu.\nya fungsi linier dulu ini di sini ada contoh soal kita akan mencari domain fungsi ya domain domain itu biasa disimbolkan dengan domain fungsi DF domain fungsi kemudian ada range RF range fungsi Nah kita akan cari DF sama RF dari setiap fungsi berikut Fungsi linear dulu fungsi linier DF nya itu apa? DF nya adalah balik lagi ke definisi yang tadi domain ya. Di mana domain fungsi itu adalah semua himpunan bilangan real atau minta hingga sampai positif tak hingga sehingga kita nggak usah nyari lagi ya Sesuai dengan definisi aja maka DF nya adalah minta hingga sampai dengan tak hingga karena dia nggak punya syarat apapun kalau fungsi linier.\nberarti kalau udah DF ketemu RF nya RF atau range itu bisa dicari dengan Ini tadi subtitusi karena Range adalah kumpulan semua nilai yang dihasilkan oleh suatu fungsi dari domain tertentu karena kita udah ketemu domainnya. berarti tinggal di subtitusi ke fungsinya misal Kan di sini domainnya itu minta hingga sampai positif tak hingga angka negatifnya beberapa pun misal angka negatifnya mau 15 boleh beli 15 di subtitusi ke fungsi x + 1 -15 ditambah 1 hasilnya adalah -14 di subtitusi 0 boleh boleh nol ditambah 1 hasilnya adalah 1 ditambah -1 -1 + 1 hasilnya adalah bilangan positif misal 100 + 1 jadi 101 di sini karena hasilnya Ya dari hasilnya ada yang nol ada yang negatif ada yang positif dan tidak terbatas angka berapapun maka RF nya kita simpulkan semua himpunan bilangan real gitu ya jadi RF itu disimpulkan kalau udah di subtitusi disimpulkan dari sini kita tahu nol termasuk positif termasuk dan positifnya nggak berbatas angka berapapun negatifnya pun nggak terbatas angka berapapun sehingga artinya ini adalah semua himpunan bilangan real kalau semua himpunan bilangan real maka artinya minta hingga sampai dengan tak hingga itu untuk fungsi linier sampai sini paham oke Ya berikutnya adalah fungsi kuadrat untuk fungsi kuadrat.\nApakah dia punya syarat domain fungsinya punya syarat nggak punya syarat kalau nggak punya syarat langsung aja minta hingga sampai positif tak hingga tinggal cari RF nya misal DF nya angkanya -4 ya fungsinya adalah x kuadrat berarti -4 dikuadratkan Min 4 dikuadratkan hasilnya adalah positif 16 di subtitusi 0 boleh 0 hasilnya adalah 0 di subtitusi oleh berapa lagi misal oleh 15 ya positif 15 berarti 15 dikuadratkan itu 15 kuadrat adalah 225 225 subtitusi oleh -10 - 10 dikuadratkan hasilnya adalah positif 100 nah Dari keempat angka yang sudah disubstitusi kita lihat meskipun domainnya ya daerah asalnya awalnya itu negatif tapi setelah di subtitusi ke fungsi x hasilnya jadi positif semua gitu ya positif paling kecil itu adalah nol maka artinya RF dimulai dari nol sampai dengan positif tak hingga RF itu daerah hasil Ya hasil paling kecil 0 Berarti ditulis kurung siku nol sampai angkanya tidak terbatas ada yang sampai 200 ada yang puluhan doang ada yang satuan gitu Nah karena tidak terbatas oleh angka berapapun maka di sini kita Tuliskan positif tak hingga Ya itu untuk fungsi kuadrat berikutnya fungsi irasional fungsi rasional fungsi rasional dulu.\nuntuk fungsi rasional DF nya kita mulai dari minta hingga sampai dengan tak hingga rasional punya syarat atau tidak dia punya syarat syaratnya apa tadi Yang bawah tidak sama dengan nol ya agar teori definisi yang bawah itu tidak sama dengan nol. Sehingga DF yang tadinya minta hingga sampai tak hingga berubah menjadi DF = - tak hingga sampai dengan 0 kurung biasa digabung dengan 0 sampai positif tak hingga ya. Kenapa nolnya kurung biasa bukan kurung siku karena 0 tidak termasuk gitu kalau 0 tidak termasuk maka nolnya kurung biasa bukan kurang sih ya jadi DF yang barunya adalah yang bawah minta hingga sampai 0 digabung dengan 0 sampai positif tak hingga untuk RF nya bagaimana untuk RF nya akan kita subtitusi misal kita ambil yang penting gak boleh nol minus boleh minus boleh misal kita ambil -3 ya artinya kan satu per min 3 x nya diganti -3 kan Satu permen 3 itu - 1/3 - hasilnya kemudian kita ambil bentuknya.\nDesimal boleh ya kita ambil misal 0,1 0,1 itu kalau di dalam bentuk pecahan sama aja kayak 1/10 jadi 1/1/10 atau kalau ada perkalian di bawahnya ya kalau ada pecahan di bawahnya pecahan lagi itu karena dibalik ya jadi satu dikali 1. per 10 per 1 atau hasilnya menjadi 10 itu hasilnya positif 10 kemudian Angka berapa yang positif lagi 4 ya kita 1/4 positif kita subtitusi satu satu persatu hasilnya adalah 1 Nah dari sini ya angkanya negatif ada negatifnya kan tidak terbatas misal ambil 12 jadikan -1 1/-12 atau sama aja kayak -1/12 makanya negatifnya tidak terbatas gitu kemudian positifnya tidak terbatas juga sehingga ARF nya adalah minta hingga sampai dengan 0 digabung 0 sampai positif tak hingga kok sama dengan DF ya kenapa sama dengan DF karena di RF itu nggak ada yang hasilnya 0 tadi Kalau hasilnya mau 0 itu atasnya 0 bawahnya baru angka ya angka berapapun baru hasilnya 0, tapi kalau atasnya angka bawahnya 0 itu tidak akan terdefinisi ya hasilnya Bukan nol hasilnya tidak sama dengan nol makanya Kenapa daerah hasilnya RF nya itu tidak ada yang gitu maka DF sama RF himpunannya sama minta hingga sampai 0 digabung 0 sampai positif tak hingga ya selanjutnya yang irasional rasional irasional itu Awalnya tetap sama minta hingga sampai positif tak hingga tapi dimasuki syarat ya syarat fungsi akar atau fungsi irasional itu harus lebih dari sama dengan nol yang di dalam akar harus lebih dari sama dengan nol.\natau kita bisa Tuliskan ya kalau nggak bisa kalian Gambarkan di sini titiknya berarti 0 bulatannya bulatan penuh karena lebih dari berarti ke kanan sehingga DF nya berubah menjadi kurung siku nol sampai positif tak hingga gitu ya DF nya berubah karena dimasuki syarat Nah kita akan cari RF nya misal kita ambil DF nya kan harus positif ya paling kecil DF nya adalah 0 0 dikalikan eh akar 0 akar 0 berarti 0 di subtitusi 1 11 subtitusi 9 Akar 9 3 di subtitusi 15 akar 15 Akar 15 itu 3,sekian Nah dari hasilnya ini positif semua nggak mungkin ada yang hasilnya negatif ya sehingga RF nya adalah kurung siku nol karena yang paling kecil hasilnya 0 sampai positif tak hingga DF dan RF sama yaitu kurung siku nol sampai positif tak hingga sampai sini ada yang ingin ditanyakan\nNggak ada ya Oke berarti paham sekarang kita masuk ke contoh soal di sini. ya nomor satu itu adalah fungsi akar fungsi irasional kemudian nomor 2 dan nomor 3 adalah fungsi linier karena x-nya pangkat 1 4 dan 5 adalah fungsi kuadrat 6 dan 7 ini adalah fungsi rasional itu kita coba dulu dari fungsi rasional nomor 1 irasional ya FX = akar 6 dikurang 2 x\nya jadi Untuk nomor satu itu fungsi irasional fungsi irasional DF nya awalnya ya minta hingga sampai dengan positif tak hingga ya. itu ada syaratnya syarat fungsi irasional adalah Harus positif atau harus lebih dari sama dengan nol ya Jadi yang di dalam akar harus lebih dari sama dengan nol. Gitu, nah ini gimana Kan kalau tadi akar x doang X lebih dari sama dengan nol. Nah ini pun kalian harus menyelesaikan menggunakan pertidaksamaan selesaikan pertidaksamaan Ya sehingga kita akan mengeliminasi 6 untuk mengeliminasi 6 kedua ruas harus dikurang 6 ya.\nmin 6 + 6 - 2x sisa -2x yang kiri yang kanan 0 kurang 6 x kurang 6 hasilnya min 6 gitu nah, kemudian ini belum sederhana ya x-nya masih ada koefisien di depannya -2 berarti harus dibagi min 2 -2x / -2 hasilnya adalah x - 6 / -2 hasilnya adalah positif 3. Karena x-nya negatif maka tanda dibalik ya atau ditukar yang tadinya lebih dari menjadi kurang dari sama dengan ya ingat lagi catatannya yang pertidaksamaan dimana kasusnya di situ kalau x nya Min ya maka tanda pertidaksamaannya di balik gitu Jadi bukan X lebih dari sama dengan 3 tapi x kurang dari sama dengan 3 karena variabelnya negatif sehingga DF nya nanti berubah Ini misal kalau nggak bisa langsung ya.\nnggak bisa langsung DF kurung siku tiga sampai dengan tak hingga ya Kalau bisa berarti langsung ke sini kalau nggak bisa kalian boleh Gambarkan garis bilangannya dimana titiknya adalah 3 bulatannya bulatan penuh karena kurang dari sama dengan Karena kurang dari berarti ke kiri gitu ya karena kurang dari ke kiri sehingga\nDF nya kirinya nggak ada batasnya yaitu minta hingga yang kanannya adalah positif 3 kurung siku gitu. ya DF nya berubah yang tadinya minta hingga sampai tak hingga positif berubah jadi minta hingga sampai 3 kurung siku gitu karena dimasuki oleh cara Nah kita masuk ke DF dan RF DF nya apa DF nya Ya semua angka dari 3 ke kiri tiga boleh tiga masuk ya kita subtitusi tiga ke fungsi 6 dikurang 2 kali 3 2 * 3 6 kurang 6 hasilnya adalah 0 akar 0 ya 0 gitu kemudian 0 boleh di subtitusi 0 boleh karena kan ada di 3 ke kiri itu 0 ada berarti 6 kurang 2 kali nol dua kali adalah akar 6 akar 6 sama aja kayak 2 di subtitusi oleh satu boleh 6 kurang 2 kali 1 2 * 1 adalah -2 6 kurang 2 hasilnya adalah akar 4 adalah 2 Di subtitusi oleh berapa lagi di subtitusi oleh negatif 9? Boleh ya? -2 * -9 dua kali min 9 8 11 18 dikali 6 adalah akar 2 4 hasilnya adalah 4 sekian gitu ya dikali min 5 boleh Artinya kan 6 -2 * -5 -2 * -5 10 positif 10 6 + 10 akar 16 akar 16 hasilnya 4 ya. Dari sini kita peroleh hasil bahwa semuanya paling kecil angkanya adalah 0 dan batas kanannya itu nggak terbatas ya Bisa dua bisa empat bisa lima bisa enam gitu tidak terbatas sehingga artinya Apakah nilai RF nya ada yang negatif nilai RF tidak ada yang negatif? ya kalau RF nya tidak ada yang negatif maka disimpulkan paling kecilnya adalah 0 kurung siku nol sampai dengan positif tak hingga karena tidak terbatas gitu ya jadi harus bisa menyimpulkan Ya itu untuk fungsi irasional.\nsampai sini bisa dipahami Oke pokoknya kalau ada pertanyaan langsung aja ya. boleh dicela aja berikutnya adalah fungsi linier misal kita ambil nomor 2 adalah 2x + 5 DF nya tadi DF itu selalu semua himpunan bilangan real. Apakah fungsi linear punya syarat fungsi linear nggak punya syarat kalau fungsi linear nggak punya syarat maka DF nya tetap minta hingga sampai dengan positif sehingga gitu untuk rfnya bagaimana untuk RF nya ya kita subtitusi DF nya kan semua bilangan real ya mau negatif misal negatif 4 di subtitusi dua kali min 4 + 5 hasilnya adalah -8 + 5 - 3 ya di subtitusi nol boleh dua kali nol tambah 5 hasilnya adalah 5 terus dikali koma misal 2 -2,52 kali min 2,5 -2,5 + 5 2 * -2,5 hasilnya adalah -5 -5 + 5 hasilnya 0 ya - berapa lagi apa positif ya belum positif 7 misal 2 kali 7 tambah 5 2 * 7 aja 14 + 5 jadi 19. Nah di sini angkanya minusnya nggak terbatas positifnya tidak terbatas dan 0 pun termasuk sehingga RF nya adalah minta hingga sampai positif tak hingga gitu ya itu untuk fungsi linier.\nya selanjutnya kita masuk ke fungsi kuadrat\nNah untuk fungsi kuadrat ya fungsi kuadrat itu tadi kan bentuknya AX kuadrat + BX + C ya Kalau di slide sebelumnya fungsi kuadratnya hanya x kuadrat ya Tidak berbentuk ax + b + c fbx + c. Maka bisa dengan subtitusi Nah kalau fungsi kuadratnya bentuknya AX kuadrat + BX + C ini kita akan pakai ya untuk DF nya tetap Minta hingga sampai dengan tak hingga dia nggak ada syaratnya ya. Nah untuk RF nya nggak perlu kita cari subtitusi dari DF ya ini ada rumusnya untuk RF nya Misal a nya lebih dari 0, maka dfrf nya adalah y minimum kurung siku y minimum sampai dengan tak hingga positif Kalau A nya kurang dari 0, maka minta hingga sampai dengan y minimum kurung siku gitu ya minimum apa ya minimum adalah minde per 4 A D itu apa d adalah diskriminan diskriminan dalam matematika adalah rumusnya b kuadrat min 4ac per Ya, b abc-nya yang mana abc-nya dari sini nih A B C kita subtitusi itu ya kalau ada fungsinya x - 5x x - 5x - 10 artinya a-nya adalah kalau nggak ada angkanya depan berarti a-nya 1. B-nya -5 c nya Min 10 gitu nah satu kalau a-nya 1 berarti lebih dari 0, maka kita pakai rumusnya adalah y minimum sampai dengan positif tak hingga gitu kita akan cari minimumnya min b kuadrat dikurang 4ac per 4 a b nya tadi -5 Berarti -5 dikuadratkan dikurang 4a-nya 1 C nya Min 10 / yang bawahnya a-nya adalah 1 Min 5 dikuadratkan hasilnya adalah 25 -4 kali 1 Min 4 Min 4 kali min 10 jadi positif 4 20 yang bawah 4x1 tetap 4 yang atas jadi -65/4 sehingga jawabannya adalah kurung siku 65/4 sampai dengan positif tak hingga gitu jadi langsung masukin ke rumus kalau dia fungsi kuadrat bentuknya x kuadrat + BX + C untuk nomor 5 gimana untuk nomor 5 dia juga fungsi kuadrat min x kuadrat + 4x Ya kalau dalam bentuk ax + BX + C maka ini kan min x kuadrat + 4 x ya A nya adalah yang di depan yaitu -1 kalau nggak ada angkanya kan kata ibu 1 ya karena dia Min jadi min 1 b nya adalah ini b nya adalah 4 C nya kalau nggak ada angkanya artinya dia adalah 0 ya 0 Nanti kalian cari ya pakai yang a nya kurang dari 0 karena a-nya di sini sama dengan -1 dia kurang dari 0 nanti jawabannya adalah minta hingga sampai dengan y minimum nanti y minimumnya Kalian cari sendiri gitu Itu untuk fungsi kuadrat satu lagi untuk fungsi rasional\nnah DF nya awalnya adalah minta hingga sampai dengan positif tak hingga Nah untuk fungsi rasional dia punya syarat-syaratnya tidak sama dengan nol yang bawah tidak sama dengan nol Yang bawahnya di sini x-1 maka X -1 tidak sama dengan nol ya ingat yang kiri harus X aja sehingga -1 pindah ke kanan jadi positif 1 gitu Nah maka DF nya berubah menjadi yang tadinya bilangan real semua himpunan bilangan real nggak boleh satu maka minta hingga sampai dengan satu atau satu sampai dengan positif tak hingga gitu Itu untuk DF nya untuk RF nya untuk rfnya akan kita cari misal dfrf.\ningat ya satu nggak boleh nol boleh ya kalau nol boleh kita subtitusi nol kurang satu nol kurang satu hasilnya kan -1 ya 3 per min 1 hasilnya -3 di subtitusi oleh 4 misal 3 per 4 kurang 1 3 3/3 hasilnya adalah 1 di subtitusi oleh -5 boleh ya 3 -5 - 1 jadi 3/-6 - 3/6 itu sama aja kayak min 1 per 2 gitu ya Dari ketiga hasil ini kita bisa lihat atau kalau kalian belum yakin tambahin lagi angkanya misal.\nangkanya adalah 20 ya 3/20 kurang satu Berarti 3/19 ya ada yang positif ada yang negatif tapi gak ada yang nol. Kenapa nggak ada yang nol karena tadi ya konsepnya 0/1 baru hasilnya 0 Kalau atasnya 3/0 ya ini jawabannya Bukan nol tapi cm definisi gitu ya, jadi nggak mungkin ada yang hasilnya 0 kalau hasilnya nol mau nol di atasnya nggak boleh 3 ya harus nol baru hasilnya ada yang nol karena tidak ada hasil yang nol maka di sini RF nya adalah minta hingga sampai 0 digabung dengan 0 sampai dengan positif tak hingga ya sampai sini paham atau Ada yang ingin ditanyakan silahkan Iya.\nJessenia Eka\nIbu berarti DF nya itu angkanya bisa berapa aja ya?\nsyifaafidah na\nIya bebas\nJessenia Eka\nOke Baik Terima kasih Bu\nsyifaafidah na\nyang penting ada di rentang itu misal di sini kan DF nya minta hingga sampai 1 digabung satu sampai tak hingga artinya nggak boleh satu jadi yang penting nggak boleh satu mau 100 boleh mau minus 100 boleh gitu Yang penting gak boleh satu dan yang di subtitusi angkanya misal boleh cuma tiga aja kalau udah yakin misal ternyata belum yakin tambahin lagi misal 4 ya kayak yang tadi ini kan 4 rata-rata Ibu subtitusinya 4 angka atau kalau belum yakin juga boleh 5 angka ini 4 angka ini juga 4 angka Ibu subtitusinya 4 Buka rata-rata ya.\nada lagi\noke, nggak ada ya kita lanjut Nah di sini ada operasi fungsi operasi fungsi ya Ada penjumlahan dan pengurangan ada perkalian ada pembagian contoh operasi fungsi itu gimana misal ada x kuadrat misal FX adalah x kuadrat gx-nya adalah x ^ 3 + 1 ditanya FX + GX ya tinggal jumlahin aja x pangkat 2 ditambah x pangkat 3 ditambah 1 gitu bukan malah dijumlah pangkatnya ya bukan jadi x pangkat 5 ditambah 1 itu bukan salah kalau ini salah ya Jadi kalau penjumlahan di Apa namanya? dijumlahkan yang pangkatnya sama yang dijumlahkan adalah koefisiennya berbeda dengan perkalian kalau perkalian ya FX dikali GX maka FX nya adalah x kuadrat gx-nya adalah x ^ 3 + 1 artinya x ^ 2 * x ^ 3 ya ingat nah, kalau perkalian ini dijumlahkan pangkatnya baru dijumlahkan x pangkat 5 x ^ 2 * 1 hasilnya x pangkat 2 gitu ya dijumlahkan kalau perkalian perkalian pangkat itu dijumlahkan beda dengan penjumlahan kalau penjumlahan ya Yang Sama aja x kuadrat misal di sininya x di bawahnya 2x Nah ini baru bisa dijumlahkan dijumlahkannya jadinya ini Kalau depannya nggak ada koefisien ini artinya satu Satu tambah dua berarti tiga x kuadrat gitu ya itu untuk operasi hitung fungsi sekarang kita masuk ke komposisi fungsi Nah untuk fungsi invers kita nggak perlu pelajari Ya nggak bakal keluar juga di UTS ya karena Ibu lihat dari yang semester lalu fungsi invers itu pada belum bisa ya kita fokus aja dengan fungsi komposisi biasa ya F Bundaran G ya jadi si nol ini bisa kita sebut dengan Bundaran F Bundaran GX maka artinya fungsi f dibiarkan dulu di subtitusi oleh fungsi gx ya fungsi f di subtitusi fungsi gx itu kalau fog ya F Bundaran G atau fog biar biasanya disebutnya fog atau F Bundaran G ini pun sama g Bundaran f atau gof itu artinya fungsinya di subtitusi oleh fungsi fx contohnya adalah misal FX nya adalah x kuadrat + 1 GX nya adalah x ^ x aja misalnya yang gampang dulu kalau ditanya fog ya kalau ditanya fog berarti fungsi gx di subtitusi ke f nya tulis dulu fungsi gx nya adalah X ya sehingga hasilnya x kuadrat + 1 kalau misal g o f x berarti tulis dulu G nya kemudian baru subtitusi FX nya G fx-nya diganti apa fx-nya diganti x + 1 Maka hasilnya adalah x kuadrat + 1 ya contoh lainnya misal ada FX 1/x GX nya adalah x kuadrat + 2x misal ditanya fog X berarti F GX gx-nya diganti oleh x kuadrat + 2x Nah nanti ini di subtitusi ke fungsi f nya yaitu jadi 1/x-nya diganti ini x kuadrat + 2x gofx-nya gimana gofx-nya misal G di sini fx-nya diganti 1/x Maka hasilnya menjadi 1/x di kuadratkan dikali 2 1/x gitu ya Bisa ya fungsi komposisi Apa ada yang mau tanya dulu\nOke, ya. Berikutnya adalah ini kita akan mencari daerah asal dan daerah hasil dari fog dan gof ya. Jadi fungsi komposisi itu kita akan mencari domain dan range. fog dulu fogx ya untuk menyelesaikan yang A kan ini fog ya yang AFG itu sama aja kayak fungsi f di subtitusi fungsi gx fungsi f fungsi yx adalah x - 2 di subtitusi ke F jadinya akar x min 2 gitu sehingga fog x adalah akar x min 2 Ya Sekarang kita akan cari domain fungsinya ingat.\nKalau ada domain itu selalu dimulai dari minta hingga sampai positif tak hingga karena dia fungsinya fungsi akar maka dimasuki syarat syaratnya harus lebih dari sama dengan nol maka X -2 harus lebih dari sama dengan nol atau X lebih dari sama dengan 2 ya. Sehingga dfog nya berubah menjadi Karena lebih dari berarti yang kirinya 2 yang kanannya positif tak hingga gitu Bundaran penuh lebih dari berarti ke kanan.\nmakanya di sini kurang siku dua sampai positif tak hingga itu DF og berikutnya adalah RF Nah kita subtitusi dimulai dari yang paling kecil dulu yaitu 22 di subtitusi ke fungsi x-2 akar x min 2 akar x nya diganti 2 kurang 2 akar 0 akar 0 adalah 0 gitu di subtitusi lagi oleh misal berapa 6 ya 6 kurang 2 hasilnya adalah akar 4 akar 4 adalah 2\nnah, pokoknya angka yang di kiri 2 itu nggak boleh di subtitusi ya di subtitusi oleh berapa lagi misal di subtitusi oleh 16 ya berarti 16 kurang 2 16 kurang 2 adalah akar 14 akar 14 itu sama aja kayak 3,nah dari ketiga angka ini kita udah bisa lihat hasilnya positif semua kalau hasilnya positif semua dan yang paling kecil 0 adalah sampai positif tak hingga maka DG DF og nya 2 sampai tak hingga rfo-nya 0 sampai tak hingga gitu Itu untuk yang a ya untuk yang b nya kita akan cari gofx maka G FX G dulu FX nya adalah x subtitusi ke X min 2 akar x min 2 atau gofx = x - 2 gitu ya Nah kita akan cari D gof-nya DG of dimulai dari minta hingga sampai positif tak hingga karena dia fungsi irasional ya fungsi akar maka ada syaratnya syaratnya harus lebih dari sama dengan nol sehingga DG of yang barunya menjadi Kurung siku nol sampai positif tak hingga karena di sini titiknya 0 bulatan penuh lebih dari kekanan gitu kurang sih positif tak hingga berikutnya adalah rgofnya rgofnya ya kita substitusi dulu.\nya di subtitusi nol hasilnya adalah 0 - 2 hasilnya adalah -2 0 kurang 2 di subtitusi oleh 1 akar 1 kurang 2 akar 1 itu 1 dikurang 2 jadi min 1 4 4 - 2 2 kurang 2 hasilnya 0 ya 9 Akar 9 kurang 33 kurang 2 sore ini 2 hasilnya adalah 1. Nah dari sini kita peroleh setelah di subtitusi oleh domain atau daerah asal paling kecil yaitu angka nol ya Hasilnya adalah -2 kemudian di subtitusi oleh positif berapapun hasilnya ada yang negatif ada yang positif. Nah, tapi yang paling kecil angkanya adalah -2 sehingga rgofnya adalah dimulai dari -2 sampai positif tak hingga Bu kenapa min 3 nggak masuk ya? Kenapa bukan malah jadi minta hingga sampai dengan tak hingga Karena jawabannya nggak ada yang mungkin -3 ya, Kenapa karena lihat dari daerah asal paling kecil daerah asal paling kecil itu nol dan disubstitusi hasil paling kecilnya adalah -2 kalau hasil paling kecilnya min 2 ya.\nmaka bisa ditulis min 2 sampai dengan positif tak hingga itu baru selesai Sampai sini ada yang ingin ditanyakan Kalau tidak ada sambil Ibu absen ya. Yasmin\nBilqis Syalwa\nhari ibu\nsyifaafidah na\nNugraha Satya novembrio Anwar Dwi Putra\nAnwar Putra\nSaya lagi shopee Bu\nsyifaafidah na\nterus Devan Maulana Siti Zahra\nS Zahrah\nhati\nsyifaafidah na\nAnggraini Apriyanti\nAnggraeni Aprianti\nhadir Bu\nsyifaafidah na\nRafli Andika Andrean Faiza Fabian herlanza\nHerlanzha Dwiputra\nhadir\nsyifaafidah na\nDimas Jalaludin Abdul Qodir Jaelani Ahmad Umar Haris Setiawan Bayu Aji Muhammad Rafa Pipik Fauziah Muhammad radikta Danu hadiyana Danu nggak ada oke Sofia Nahda\nShofiyah Nahda\nhadir Bu\nsyifaafidah na\nusah\nOxabiya Cahya Dewani\nhadir Bu\nsyifaafidah na\nSiti muzarifah Jason Syifa Atina Khairani\nHanan Zalva aulia\nhadir Bu\nsyifaafidah na\nviandra shoulder\nDanu Hadiana\nIbu Permisi Bu Danu hadir Bu 367\nsyifaafidah na\nIya. ya sekarang Muhammad Haikal Muhammad Farhan Ramdan Ramadhani Hilal Arifa Nabil Yudistira Syekh Affan Fransisco\nFrancisco Penga\nhadir Bu\nsyifaafidah na\nRaul Muhammad Fawwaz Ryan Hafiz\n9A M.Fawwaz syarief\ntadi ada sih orangnya bukan\nNovembrio Pratama\ntoilet\nsyifaafidah na\nOke raisalma. oke ya, terima kasih banyak untuk hari ini mohon maaf jika banyak kekurangan dari Ibu nanti kalau ada pertanyaan silahkan",
                      "status": "completed"
              }
      ],
      "summaries": {
              "standar": "<h4>📢 Kebijakan Perkuliahan &amp; Pengumuman Akademik UTS 2026 (Ibu Syifaafidah, M.Pd.)</h4>\n<div class=\"callout callout-info\">\n  <div class=\"callout-title\">⚠️ PENGUMUMAN PERKULIAHAN LURING &amp; BAHAN UJIAN UTS</div>\n  <p>1. <strong>Pengurangan Sesi Luring (Offline):</strong> Perkuliahan tatap muka di kampus dikurangi dari sebelumnya 4 sesi sebelum UTS &amp; 3 sesi setelah UTS menjadi <strong>3 sesi sebelum UTS dan 2 sesi setelah UTS</strong> (selebihnya daring via Google Meet / LMS).</p>\n  <p>2. <strong>KEBIJAKAN MATERI UTS: FUNGSI INVERS DITIADAKAN!</strong> Dosen menegaskan bahwa materi <em>Fungsi Invers</em> <strong>TIDAK AKAN DIUJIKAN PADA UTS</strong>. Mahasiswa difokuskan penuh pada materi: Evaluasi Fungsi, Difference Quotient, Uji Fungsi Genap/Ganjil, Domain Alami &amp; Range, serta Komposisi Fungsi.</p>\n</div>\n\n<h4>1. Definisi Fungsi &amp; Konsep Pemetaan (Domain, Kodomain, Range)</h4>\n<p>Fungsi f: A &rarr; B adalah suatu aturan korespondensi yang menghubungkan <strong>setiap elemen</strong> pada daerah asal (<em>Domain</em> / D_f) dengan <strong>tepat satu nilai</strong> pada daerah kawan (<em>Kodomain</em>). Himpunan semua nilai pasangan di kodomain disebut daerah hasil (<em>Range</em> / R_f).</p>\n<ul>\n  <li><strong>Aturan Wajib Domain:</strong> Domain <em>tidak boleh kosong</em> dan <em>tidak boleh bercabang</em> (harus punya tepat satu kawan).</li>\n  <li><strong>Aturan Kodomain:</strong> Kodomain <em>boleh bercabang</em> (banyak domain menuju satu kodomain yang sama) dan <em>boleh ada elemen yang tidak berpasangan</em>.</li>\n  <li><strong>Catatan Diagram Panah Dosen:</strong> A = {a, b, c} dan B = {1, 2, 3, 4} dengan pemetaan a &rarr; 1, b &rarr; 2, c &rarr; 3.<br>\n    &bull; Domain = {a, b, c}<br>\n    &bull; Kodomain = {1, 2, 3, 4}<br>\n    &bull; Range = {1, 2, 3} (angka 4 bukan range karena tidak punya prapeta di A).\n  </li>\n</ul>\n\n<h4>2. Evaluasi Nilai Fungsi &amp; Difference Quotient (f(x) = x&sup2; - 2x)</h4>\n<p>Dosen menguraikan langkah-langkah aljabar untuk fungsi f(x) = x&sup2; - 2x:</p>\n<ol>\n  <li><strong>Evaluasi f(4):</strong><br>\n    f(4) = (4)&sup2; - 2(4) = 16 - 8 = <strong>8</strong>\n  </li>\n  <li><strong>Evaluasi f(4 + h) (Metode Pangkat-Kali-Kali-Pangkat):</strong><br>\n    f(4 + h) = (4 + h)&sup2; - 2(4 + h) = (16 + 8h + h&sup2;) - 8 - 2h = <strong>h&sup2; + 6h + 8</strong>\n  </li>\n  <li><strong>Evaluasi f(4 - h) - f(4):</strong><br>\n    f(4 - h) = (4 - h)&sup2; - 2(4 - h) = (16 - 8h + h&sup2;) - 8 + 2h = h&sup2; - 6h + 8<br>\n    f(4 - h) - f(4) = (h&sup2; - 6h + 8) - 8 = <strong>h&sup2; - 6h</strong> (karena (-h)&sup2; = h&sup2;)\n  </li>\n  <li><strong>Difference Quotient (Rasio Selisih Beda) &mdash; Fondasi Turunan Kalkulus:</strong><br>\n    [f(4 + h) - f(4)] / h = [(h&sup2; + 6h + 8) - 8] / h = (h&sup2; + 6h) / h = h(h + 6) / h = <strong>h + 6</strong><br>\n    <em>⚠️ Peringatan Dosen:</em> Jangan mencoret variabel h pada operasi penjumlahan! Pecahan harus difaktorkan terlebih dahulu atau dipecah menjadi (h&sup2;/h) + (6h/h).\n  </li>\n</ol>\n\n<h4>3. Uji Simetri: Fungsi Genap vs Fungsi Ganjil</h4>\n<p>Uji simetri dilakukan dengan mengganti seluruh variabel x dengan (-x):</p>\n<ul>\n  <li><strong>Fungsi Genap (Even Function):</strong> f(-x) = f(x) &mdash; Grafik kurva simetris terhadap sumbu Y.<br>\n    <em>Contoh Dosen:</em> f(x) = x&sup2; - 2 &rArr; f(-x) = (-x)&sup2; - 2 = x&sup2; - 2 = f(x) (GENAP).\n  </li>\n  <li><strong>Fungsi Ganjil (Odd Function):</strong> f(-x) = -f(x) &mdash; Grafik kurva simetris terhadap titik pusat asal (0,0).<br>\n    <em>Contoh Dosen:</em> g(x) = x&sup3; - 2x &rArr; g(-x) = (-x)&sup3; - 2(-x) = -x&sup3; + 2x = -(x&sup3; - 2x) = -g(x) (GANJIL).\n  </li>\n  <li><strong>Contoh Soal Pecahan Rasional Ujian:</strong><br>\n    Apakah f(x) = (x&sup3; + 3x) / (x⁴ - 3x&sup2; + 4) fungsi ganjil atau genap?<br>\n    f(-x) = [(-x)&sup3; + 3(-x)] / [(-x)⁴ - 3(-x)&sup2; + 4] = (-x&sup3; - 3x) / (x⁴ - 3x&sup2; + 4) = - (x&sup3; + 3x) / (x⁴ - 3x&sup2; + 4) = -f(x)<br>\n    <strong>Kesimpulan Dosen: Terbukti FUNGSI GANJIL!</strong>\n  </li>\n  <li><strong>Contoh Soal GMeet:</strong> f(x) = x&sup3;/5 &rArr; f(-x) = (-x)&sup3;/5 = -x&sup3;/5 = -f(x) (GANJIL).</li>\n  <li><strong>Hukum Tanda Minus Pecahan Dosen:</strong> -a/b = -(a/b) = a/(-b). Tanda negatif hanya berlaku pada pembilang ATAU penyebut saja, bukan keduanya! Jika keduanya negatif, maka bernilai positif: (-a)/(-b) = a/b.</li>\n</ul>\n\n<h4>4. Penentuan Daerah Asal Alami (Domain) &amp; Daerah Hasil (Range)</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Tipe Fungsi</th><th>Syarat Matematis</th><th>Rumus Penentuan Range</th><th>Contoh Soal GMeet &amp; Pembahasan</th></tr></thead>\n    <tbody>\n      <tr>\n        <td><strong>Linear</strong><br>f(x) = mx + c</td>\n        <td>Tidak ada pembagi nol atau bentuk akar</td>\n        <td>Garis lurus kontinu membentang ke dua arah</td>\n        <td>f(x) = 2x + 1<br><strong>Domain:</strong> (-&infin;, &infin;)<br><strong>Range:</strong> (-&infin;, &infin;)</td>\n      </tr>\n      <tr>\n        <td><strong>Kuadrat Polinomial</strong><br>f(x) = ax&sup2; + bx + c</td>\n        <td>Semua x &isin; ℝ terdefinisi</td>\n        <td>Titik Puncak Ordinat: y_p = -D/(4a) = -(b&sup2; - 4ac)/(4a)<br>&bull; Jika a &gt; 0 (terbuka ke atas): [y_p, &infin;)<br>&bull; Jika a &lt; 0 (terbuka ke bawah): (-&infin;, y_p]</td>\n        <td>f(x) = x&sup2; - 5x - 10 (a=1&gt;0)<br>y_min = -[(-5)&sup2; - 4(1)(-10)] / 4(1) = -65/4<br><strong>Domain:</strong> (-&infin;, &infin;)<br><strong>Range:</strong> [-65/4, &infin;)<br><br>f(x) = -x&sup2; + 4x (a=-1&lt;0)<br>y_max = -(16 - 0) / (-4) = 4<br><strong>Range:</strong> (-&infin;, 4]</td>\n      </tr>\n      <tr>\n        <td><strong>Irasional (Akar)</strong><br>f(x) = &radic;(p(x))</td>\n        <td>Nilai di dalam akar harus tak-negatif: p(x) &ge; 0 (jika negatif &rarr; imajiner)</td>\n        <td>Akar kuadrat utama selalu menghasilkan nilai &ge; 0</td>\n        <td>f(x) = &radic;(6 - 2x)<br>6 - 2x &ge; 0 &rArr; x &le; 3<br><strong>Domain:</strong> (-&infin;, 3]<br><strong>Range:</strong> [0, &infin;)</td>\n      </tr>\n      <tr>\n        <td><strong>Rasional (Pecahan)</strong><br>f(x) = p(x) / q(x)</td>\n        <td>Penyebut tidak boleh sama dengan nol: q(x) &ne; 0</td>\n        <td>Ubah ke bentuk eksplisit x = g(y) (invers sementara) lalu cari syarat penyebut y</td>\n        <td>f(x) = 3 / (x - 1)<br>Syarat: x - 1 &ne; 0 &rArr; x &ne; 1<br><strong>Domain:</strong> (-&infin;, 1) &cup; (1, &infin;)<br>y = 3 / (x - 1) &rArr; x = 3/y + 1 &rArr; y &ne; 0<br><strong>Range:</strong> (-&infin;, 0) &cup; (0, &infin;)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>5. Operasi &amp; Komposisi Fungsi (Latihan Interaktif Live GMeet)</h4>\n<p>Diberikan dua fungsi dasar: f(x) = &radic;x dan g(x) = x - 2:</p>\n<div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">\n  <div class=\"p-4 bg-slate-900 rounded-xl border border-white/10 space-y-2\">\n    <div class=\"text-xs font-bold text-cyan-400\">a. Komposisi (f &comp; g)(x) = f(g(x))</div>\n    <div class=\"text-xs font-mono text-slate-300 pl-3 border-l-2 border-indigo-500 space-y-1.5\">\n      <div>(f &comp; g)(x) = f(x - 2) = &radic;(x - 2)</div>\n      <div><strong>Syarat Domain:</strong> x - 2 &ge; 0 &rArr; x &ge; 2</div>\n      <div class=\"text-emerald-400 font-bold\">Domain (f &comp; g) = [2, &infin;)</div>\n      <div><strong>Daerah Hasil (Range):</strong> Nilai terkecil saat x = 2 &rArr; &radic;(2-2) = 0.</div>\n      <div class=\"text-emerald-400 font-bold\">Range (f &comp; g) = [0, &infin;)</div>\n    </div>\n  </div>\n\n  <div class=\"p-4 bg-slate-900 rounded-xl border border-white/10 space-y-2\">\n    <div class=\"text-xs font-bold text-cyan-400\">b. Komposisi (g &comp; f)(x) = g(f(x))</div>\n    <div class=\"text-xs font-mono text-slate-300 pl-3 border-l-2 border-cyan-500 space-y-1.5\">\n      <div>(g &comp; f)(x) = g(&radic;x) = &radic;x - 2</div>\n      <div><strong>Syarat Domain:</strong> Di dalam akar x &ge; 0</div>\n      <div class=\"text-emerald-400 font-bold\">Domain (g &comp; f) = [0, &infin;)</div>\n      <div><strong>Daerah Hasil (Range):</strong> Nilai terkecil saat x = 0 &rArr; &radic;0 - 2 = -2.</div>\n      <div class=\"text-emerald-400 font-bold\">Range (g &comp; f) = [-2, &infin;)</div>\n      <div class=\"text-[11px] text-amber-300\">&bull; Catatan Dosen: Angka -3 tidak mungkin masuk ke range karena nilai x tidak boleh negatif!</div>\n    </div>\n  </div>\n</div>\n\n<h4>6. Sesi Tanya Jawab Dosen - Mahasiswa (Jessenia Eka)</h4>\n<div class=\"p-4 bg-slate-950 rounded-xl border border-white/10 space-y-2\">\n  <div class=\"text-xs font-bold text-amber-400 flex items-center gap-2\">\n    <span>❓ Tanya Jawab di Kelas GMeet:</span>\n  </div>\n  <p class=\"text-xs text-slate-300 leading-relaxed\">\n    <strong>Mahasiswa (Jessenia Eka):</strong> <em>\"Ibu, apakah untuk menentukan range kita wajib menggambar kurva grafiknya di kertas ujian?\"</em><br>\n    <strong>Dosen (Ibu Syifaafidah):</strong> <em>\"Tidak wajib menggambar grafik kurva pada soal UTS. Kalian cukup menganalisis nilai ekstrem: substitusikan batas domain terkecil yang didapat ke dalam fungsi. Untuk parabola gunakan rumus puncak y_p = -D/(4a), dan untuk fungsi pecahan gunakan invers aljabar x = g(y). Menggambar grafik hanya untuk mempermudah visualisasi kalian saja.\"</em>\n  </p>\n</div>",
              "ringkas": null,
              "detail": null
      },
      "progress": {
              "is_read": true,
              "is_summarized": true,
              "is_studied": true,
              "is_noted_in_binder": false
      },
      "raw_slide_content": "<div class=\"slide-content-block space-y-6\">\n  <div class=\"p-3 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-xs font-mono text-indigo-300\">\n    📌 Dikutip dari: <strong>1790406762_Pert_3_Matematika_-_Fungsi_RegPagi.pdf</strong> (Slide 4 - 17) + Papan Tulis &amp; Transkrip Google Meet Dosen (Ibu Syifaafidah, M.Pd.)\n  </div>\n\n  <div class=\"p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl space-y-1.5\">\n    <div class=\"text-xs font-bold text-amber-300 flex items-center gap-2\">\n      <span>📢 PENGUMUMAN PERKULIAHAN UNINDRA &amp; MATERI UTS</span>\n    </div>\n    <ul class=\"text-xs text-slate-300 space-y-1 list-disc pl-4\">\n      <li>Perkuliahan offline Unindra resmi dikurangi: 3 sesi tatap muka sebelum UTS dan 2 sesi setelah UTS.</li>\n      <li><strong>Fungsi Invers TIDAK DIUJIKAN di UTS!</strong> Dosen Syifaafidah menegaskan bahan UTS dihentikan sampai Komposisi Fungsi dan Domain/Range.</li>\n    </ul>\n  </div>\n\n  <h3 class=\"text-lg font-bold text-white border-b border-white/10 pb-2\">Slide 4 &amp; 5: Definisi Pemetaan Fungsi &amp; Papan Tulis Dosen</h3>\n  <p class=\"text-sm text-slate-300 leading-relaxed\">\n    Fungsi f adalah suatu aturan korespondensi yang menghubungkan setiap nilai x pada satu himpunan yang disebut daerah asal (Domain) dengan tepat satu nilai f(x) pada himpunan kedua yang disebut daerah kawan (Kodomain). Himpunan semua nilai f(x) disebut daerah hasil (Range).\n  </p>\n  <div class=\"p-4 bg-slate-900 rounded-xl border border-white/10 space-y-2\">\n    <div class=\"text-xs font-bold text-cyan-400\">Catatan Papan Tulis Dosen:</div>\n    <div class=\"text-xs font-mono text-slate-300 pl-3 border-l-2 border-indigo-500 space-y-1\">\n      <div>Himpunan A = {a, b, c} &rarr; Domain = {a, b, c}</div>\n      <div>Himpunan B = {1, 2, 3, 4} &rarr; Kodomain = {1, 2, 3, 4}</div>\n      <div>Relasi pemetaan: a &rarr; 1, b &rarr; 2, c &rarr; 3</div>\n      <div class=\"text-emerald-400 font-bold\">Daerah Hasil (Range) = {1, 2, 3} &nbsp;(Elemen 4 tidak masuk karena tidak ada prapeta dari A)</div>\n      <div class=\"text-slate-400 text-[11px]\">&bull; Domain TIDAK BOLEH BERCABANG dan TIDAK BOLEH KOSONG. Kodomain boleh bercabang.</div>\n    </div>\n  </div>\n\n  <h3 class=\"text-lg font-bold text-white border-b border-white/10 pb-2\">Slide 6: Pembahasan Latihan Evaluasi Fungsi Dosen</h3>\n  <div class=\"p-4 bg-slate-900 rounded-xl border border-white/10 space-y-3\">\n    <div class=\"text-xs font-bold text-indigo-300\">Untuk fungsi f(x) = x&sup2; - 2x, cari dan sederhanakan:</div>\n    <div class=\"space-y-2 text-xs font-mono text-slate-300 pl-3 border-l-2 border-indigo-500\">\n      <div><strong>a. f(4):</strong> (4)&sup2; - 2(4) = 16 - 8 = <span class=\"text-emerald-400 font-bold\">8</span></div>\n      <div><strong>b. f(4 + h):</strong> (4 + h)&sup2; - 2(4 + h) = (16 + 8h + h&sup2;) - 8 - 2h = <span class=\"text-emerald-400 font-bold\">h&sup2; + 6h + 8</span></div>\n      <div><strong>c. f(4 - h) - f(4):</strong> [(4 - h)&sup2; - 2(4 - h)] - [4&sup2; - 2(4)] = [16 - 8h + h&sup2; - 8 + 2h] - 8 = <span class=\"text-emerald-400 font-bold\">h&sup2; - 6h</span></div>\n      <div><strong>d. [f(4 + h) - f(4)] / h:</strong> [(h&sup2; + 6h + 8) - 8] / h = (h&sup2; + 6h) / h = (h&sup2;/h) + (6h/h) = <span class=\"text-emerald-400 font-bold\">h + 6</span></div>\n      <div class=\"text-amber-300 text-[11px]\">💡 Tips Dosen: Faktorkan pembilang h(h + 6) / h sebelum dicoret. Jangan coret langsung penjumlahan!</div>\n    </div>\n  </div>\n\n  <h3 class=\"text-lg font-bold text-white border-b border-white/10 pb-2\">Slide 7: Uji Fungsi Genap vs Ganjil</h3>\n  <div class=\"p-4 bg-slate-900 rounded-xl border border-white/10 space-y-3\">\n    <div class=\"text-xs text-slate-300 space-y-1\">\n      <div>&bull; <strong>Fungsi Genap:</strong> f(-x) = f(x). Contoh: f(x) = x&sup2; - 2 &rArr; f(-x) = (-x)&sup2; - 2 = x&sup2; - 2 = f(x) (Genap).</div>\n      <div>&bull; <strong>Fungsi Ganjil:</strong> f(-x) = -f(x). Contoh: g(x) = x&sup3; - 2x &rArr; g(-x) = (-x)&sup3; - 2(-x) = -x&sup3; + 2x = -(x&sup3; - 2x) = -g(x) (Ganjil).</div>\n    </div>\n    <div class=\"text-xs font-bold text-cyan-400 pt-1\">Soal Ujian Pecahan Rasional: f(x) = (x&sup3; + 3x) / (x⁴ - 3x&sup2; + 4)</div>\n    <div class=\"text-xs font-mono text-slate-300 pl-3 border-l-2 border-indigo-500 space-y-1\">\n      <div>f(-x) = [(-x)&sup3; + 3(-x)] / [(-x)⁴ - 3(-x)&sup2; + 4]</div>\n      <div>f(-x) = (-x&sup3; - 3x) / (x⁴ - 3x&sup2; + 4) = - (x&sup3; + 3x) / (x⁴ - 3x&sup2; + 4) = - f(x)</div>\n      <div class=\"text-emerald-400 font-bold\">Kesimpulan Dosen: Terbukti FUNGSI GANJIL!</div>\n    </div>\n    <div class=\"p-2.5 bg-slate-950 rounded border border-white/5 text-[11px] text-amber-300 font-mono\">\n      💡 Catatan Dosen Tanda Minus: -a/b = -(a/b) = a/(-b) &nbsp;|&nbsp; -a/(-b) = +a/b\n    </div>\n  </div>\n\n  <h3 class=\"text-lg font-bold text-white border-b border-white/10 pb-2\">Slide 12 - 14: Syarat Domain Alami &amp; Penentuan Range Lengkap</h3>\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs\">\n    <div class=\"p-3 bg-slate-900 rounded-lg border border-white/5 space-y-1.5\">\n      <span class=\"font-bold text-indigo-400\">1. Irasional: f(x) = &radic;(6 - 2x)</span>\n      <p class=\"text-slate-300 font-mono\">Syarat: 6 - 2x &ge; 0 &rArr; -2x &ge; -6 &rArr; x &le; 3.<br>Domain = (-&infin;, 3]<br>Range = [0, &infin;)</p>\n    </div>\n    <div class=\"p-3 bg-slate-900 rounded-lg border border-white/5 space-y-1.5\">\n      <span class=\"font-bold text-indigo-400\">2. Rasional: f(x) = 3 / (x - 1)</span>\n      <p class=\"text-slate-300 font-mono\">Syarat: x - 1 &ne; 0 &rArr; x &ne; 1.<br>Domain = (-&infin;, 1) &cup; (1, &infin;)<br>Invers: x = 3/y + 1 &rArr; y &ne; 0 &rArr; Range = ℝ \\ {0}</p>\n    </div>\n    <div class=\"p-3 bg-slate-900 rounded-lg border border-white/5 space-y-1.5\">\n      <span class=\"font-bold text-indigo-400\">3. Parabola: f(x) = x&sup2; - 5x - 10</span>\n      <p class=\"text-slate-300 font-mono\">a = 1 &gt; 0 (terbuka ke atas)<br>y_min = -D/(4a) = -(25 - 4(1)(-10))/4 = -65/4<br>Domain = ℝ, Range = [-65/4, &infin;)</p>\n    </div>\n    <div class=\"p-3 bg-slate-900 rounded-lg border border-white/5 space-y-1.5\">\n      <span class=\"font-bold text-indigo-400\">4. Parabola Negatif: f(x) = -x&sup2; + 4x</span>\n      <p class=\"text-slate-300 font-mono\">a = -1 &lt; 0 (terbuka ke bawah)<br>y_max = -D/(4a) = -(16 - 0)/(-4) = 4<br>Domain = ℝ, Range = (-&infin;, 4]</p>\n    </div>\n  </div>\n\n  <h3 class=\"text-lg font-bold text-white border-b border-white/10 pb-2\">Live GMeet Session: Latihan Soal Komposisi Fungsi &amp; Range</h3>\n  <div class=\"p-4 bg-slate-900 rounded-xl border border-white/10 space-y-3\">\n    <div class=\"text-xs font-bold text-indigo-300\">Diketahui f(x) = &radic;x dan g(x) = x - 2:</div>\n    <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono\">\n      <div class=\"p-3 bg-slate-950 rounded border border-white/10 space-y-1\">\n        <div class=\"text-cyan-400 font-bold\">(f &comp; g)(x) = &radic;(x - 2)</div>\n        <div>Syarat: x - 2 &ge; 0 &rArr; x &ge; 2</div>\n        <div class=\"text-emerald-400\">Domain = [2, &infin;)</div>\n        <div class=\"text-emerald-400\">Range = [0, &infin;)</div>\n      </div>\n      <div class=\"p-3 bg-slate-950 rounded border border-white/10 space-y-1\">\n        <div class=\"text-cyan-400 font-bold\">(g &comp; f)(x) = &radic;x - 2</div>\n        <div>Syarat: x &ge; 0</div>\n        <div class=\"text-emerald-400\">Domain = [0, &infin;)</div>\n        <div class=\"text-emerald-400\">Range = [-2, &infin;)</div>\n      </div>\n    </div>\n    <div class=\"text-xs text-slate-400 pl-3 border-l-2 border-amber-500\">\n      ⚠️ Jawaban Dosen atas pertanyaan Jessenia Eka: Tidak mungkin ada output -3 pada (g &comp; f)(x) karena nilai domain terkecil adalah x=0 yang menghasilkan &radic;0 - 2 = -2.\n    </div>\n  </div>\n</div>"
}
    ]
  },
  {
    "id": "subject-pancasila",
    "name": "Pendidikan Pancasila (MK02)",
    "code": "MK02",
    "lecturer": "Dr. Ida Rosida, MH. / Dr. Julia Bea Kurniawaty, SH., MH. / Tim Dosen Pancasila Unindra",
    "schedule": "Jumat • 07:30 - 09:10 WIB",
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
        "title": "Hakikat, Visi, Misi, Landasan Pendidikan Pancasila & Implementasi Lingkungan Hidup",
        "description": "Membahas RPS resmi MK02 Unindra, urgensi mata kuliah di perguruan tinggi, landasan historis/kultural/yuridis/filosofis, serta pembagian tugas proyek kolaboratif MKWK dan pembuatan slide PPT mandiri per kelompok.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_pancasila_rps",
            "type": "pdf",
            "title": "RPS MK02 Pancasila Pusat Gemini 010926.pdf (RPS Resmi Unindra)",
            "file_url": "file:///C:/Users/haike/Downloads/Tugas_Kuliah/07_Pendidikan_Pancasila/RPS_dan_Materi/RPS%20MK02%20Pancasila%20Pusat%20Gemini%20010926.pdf",
            "file_size": 245000,
            "date_added": "2026-09-30"
          },
          {
            "id": "mat_pancasila_kelompok",
            "type": "txt",
            "title": "Daftar 10 Kelompok Presentasi & Tema RPS (Binder.txt).txt",
            "file_url": "file:///C:/Users/haike/Downloads/Binder.txt",
            "file_size": 15000,
            "date_added": "2026-09-30"
          },
          {
            "id": "mat_pancasila_mkwk_proj",
            "type": "docx",
            "title": "PROPOSAL_UMKM_KASIR_UTI_ZAZA_FINAL.docx (Contoh Proyek MKWK Kolaborasi)",
            "file_url": "file:///C:/Users/haike/Downloads/Tugas_Kuliah/05_Projek_Kasir_UMKM/Proposal/PROPOSAL_UMKM_KASIR_UTI_ZAZA_FINAL.docx",
            "file_size": 125000,
            "date_added": "2026-09-30"
          }
        ],
        "transcripts": [
          {
            "id": "trans_pancasila_1",
            "content": "[00:01:20] Dosen: Assalamu'alaikum wr. wb. Selamat pagi rekan-rekan mahasiswa kelas R1G. Hari ini kita membuka perkuliahan Pendidikan Pancasila sesuai RPS resmi MK02 Unindra.\n[00:06:45] Dosen: Perhatikan bahwa untuk mata kuliah ini, sistem pembelajarannya berbasis Project Based Learning (PBL) dan presentasi kelompok. Kalian tidak hanya mendengarkan ceramah, melainkan membuat slide PPT sendiri berdasarkan topik RPS dan mempresentasikannya di depan kelas.\n[00:15:30] Dosen: Kelas ini telah kita bagi menjadi 10 kelompok (4-5 orang per kelompok) sesuai daftar di RPS dan lembar penugasan. Setiap kelompok wajib menguasai materi dari buku ajar Dikti dan buku Dr. Julia Bea Kurniawaty.\n[00:28:10] Dosen: Selain presentasi PPT per kelompok, ada tugas Proyek MKWK yang merupakan kolaborasi lintas mata kuliah: Agama Islam, Bahasa Indonesia, Kewarganegaraan, dan Pancasila. Silakan mulai rancang temanya sejak sekarang.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "\n<h4>1. Hakikat, Visi, Misi, dan Tujuan Pendidikan Pancasila di Perguruan Tinggi</h4>\n<p>Berdasarkan <strong>RPS Resmi MK02 Universitas Indraprasta PGRI (Unindra)</strong>, Pendidikan Pancasila diselenggarakan untuk membentuk mahasiswa sebagai insan cendekia yang beriman, bermoral, beretika luhur, dan memiliki komitmen kebangsaan yang kokoh.</p>\n<ul>\n  <li><strong>Visi Pendidikan Pancasila:</strong> Terwujudnya kepribadian civitas akademika yang bersumber pada nilai-nilai Pancasila sebagai pedoman hidup bermasyarakat, berbangsa, dan bernegara.</li>\n  <li><strong>Misi Pendidikan Pancasila:</strong>\n    <ol>\n      <li>Mengembangkan potensi spiritual, intelektual, dan etika mahasiswa.</li>\n      <li>Menanamkan kesadaran kritis terhadap persoalan bangsa dan ideologi transnasional.</li>\n      <li>Mendorong mahasiswa menjadi agen perubahan (<em>agent of change</em>) yang peduli kelestarian lingkungan dan keadilan sosial.</li>\n    </ol>\n  </li>\n  <li><strong>Empat Landasan Pendidikan Pancasila:</strong>\n    <ul>\n      <li><em>Landasan Historis:</em> Berakar dari perjuangan ratusan tahun bangsa Indonesia merebut kemerdekaan.</li>\n      <li><em>Landasan Kultural:</em> Nilai gotong royong, religiusitas, dan musyawarah telah hidup ribuan tahun di Nusantara.</li>\n      <li><em>Landasan Yuridis:</em> Diamanatkan oleh UU No. 12 Tahun 2012 tentang Pendidikan Tinggi (Pasal 35 Ayat 3) sebagai mata kuliah wajib kurikulum (MKWK).</li>\n      <li><em>Landasan Filosofis:</em> Pancasila sebagai pandangan hidup bangsa (<em>Weltanschauung</em>) dan dasar filsafat negara (<em>Philosophische Grondslag</em>).</li>\n    </ul>\n  </li>\n</ul>\n\n<h4>2. Pembagian Tugas Kelompok & Pembuatan Slide PPT Mandiri</h4>\n<p>Berdasarkan instruksi dosen dan acuan <strong>Binder.txt</strong>, mahasiswa kelas dibagi ke dalam <strong>10 Kelompok</strong> yang wajib membuat slide presentasi PowerPoint (PPT) secara mandiri dari bahan kajian RPS:</p>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Kelompok</th><th>Tema Materi RPS</th><th>Daftar Anggota Mahasiswa</th><th>Jadwal Pertemuan</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Kelompok 1</strong></td><td>Pancasila dalam Lintasan Sejarah Bangsa [SEBELUM KEMERDEKAAN]</td><td>1. A Alif Assyafiyyah<br>2. Aila Az Zahra Zainuddin<br>3. Achmad Miko Al Torik<br>4. Aini Kurnia Sari</td><td>Pertemuan 2</td></tr>\n      <tr><td><strong>Kelompok 2</strong></td><td>Pancasila dalam Lintasan Sejarah Bangsa [SESUDAH KEMERDEKAAN]</td><td>1. Ahmad Hafizh Iswhyudi<br>2. Delysia Vala Putri Dwi Callista<br>3. Ahmad Raihan Primadiawan Hermansyah<br>4. Hikmatus Sholawat</td><td>Pertemuan 3</td></tr>\n      <tr><td><strong>Kelompok 3</strong></td><td>Pancasila sebagai Dasar Negara</td><td>1. Akmal Thoriq Ramadhan<br>2. Kiara Brezenska<br>3. Alfi Muhidin Matdoan<br>4. Nabila Berlian Brizky Siregar</td><td>Pertemuan 4</td></tr>\n      <tr><td><strong>Kelompok 4</strong></td><td>Pancasila sebagai Ideologi Negara</td><td>1. Hanif Fadhil Hawarizmi<br>2. Salma Nur Aulia Muthmainah<br>3. Muhamad Nizar Haqiqi<br>4. Vanda Rangelis Syafina</td><td>Pertemuan 5</td></tr>\n      <tr><td><strong>Kelompok 5</strong></td><td>Radikalisme dan Terorisme</td><td>1. Dodi Alfayed<br>2. Ratu Bilkis Aliza<br>3. Esa Rizky Al Fathir<br>4. Zahran Firzatullah</td><td>Pertemuan 7</td></tr>\n      <tr><td><strong>Kelompok 6</strong></td><td>Pancasila sebagai Sistem Filsafat</td><td>1. Fachri Darmawan<br>2. Amanda Zahra Bilnina<br>3. Mohamad Nur Ramaday<br>4. Roshayyatinah</td><td>Pertemuan 9</td></tr>\n      <tr><td><strong>Kelompok 7</strong></td><td>Pancasila sebagai Sistem Etika</td><td>1. Dava Dwi Riandono<br>2. Nazwa Siti Azizah<br>3. Dimas Iswanto<br>4. Putri Aliya Mulyono</td><td>Pertemuan 10</td></tr>\n      <tr><td><strong>Kelompok 8</strong></td><td>Pancasila sebagai Nilai Dasar Pengembangan Ilmu</td><td>1. Margareta Triyani Dahom<br>2. Sera Prisilia<br>3. Tria Fitriani Pasaribu<br>4. Albani Ahmad Munawar</td><td>Pertemuan 11-12</td></tr>\n      <tr><td><strong>Kelompok 9</strong></td><td>Pendidikan Anti Korupsi</td><td>1. Muhammad Zacki Arr Rosis<br>2. Rafi Al Jabbar<br>3. Vika Ardita<br>4. Nathalie Theophilia<br>5. Wahyu Arif H</td><td>Pertemuan 13-14</td></tr>\n      <tr><td><strong>Kelompok 10</strong></td><td>Keanekaragaman di Indonesia & Kerukunan Berbangsa</td><td>1. Iskan Ahmad Ramza<br>2. Santa Eklesia Tampubolon<br>3. Yohanes Aril Dovris Gon<br>4. Siti Fathiyah Imarah</td><td>Pertemuan 15</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>3. Ketentuan Slide Presentasi PPT Mandiri:</h4>\n<ul>\n  <li>Slide dibuat menggunakan template berdesain profesional, bersih, dan kontras tinggi.</li>\n  <li>Struktur wajib: (1) Judul & Anggota, (2) Latar Belakang & Urgensi RPS, (3) Pembahasan Inti Teori, (4) Studi Kasus Nyata / Masalah di Masyarakat, (5) Solusi Berbasis Nilai Sila Pancasila, (6) Kesimpulan & Referensi Buku Ajar.</li>\n  <li>Dilarang membaca teks penuh dari slide (gunakan poin-poin grafis dan kuasai materi saat tanya jawab).</li>\n</ul>\n",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": true
        },
        "raw_slide_content": "\n<h4>1. Hakikat, Visi, Misi, dan Tujuan Pendidikan Pancasila di Perguruan Tinggi</h4>\n<p>Berdasarkan <strong>RPS Resmi MK02 Universitas Indraprasta PGRI (Unindra)</strong>, Pendidikan Pancasila diselenggarakan untuk membentuk mahasiswa sebagai insan cendekia yang beriman, bermoral, beretika luhur, dan memiliki komitmen kebangsaan yang kokoh.</p>\n<ul>\n  <li><strong>Visi Pendidikan Pancasila:</strong> Terwujudnya kepribadian civitas akademika yang bersumber pada nilai-nilai Pancasila sebagai pedoman hidup bermasyarakat, berbangsa, dan bernegara.</li>\n  <li><strong>Misi Pendidikan Pancasila:</strong>\n    <ol>\n      <li>Mengembangkan potensi spiritual, intelektual, dan etika mahasiswa.</li>\n      <li>Menanamkan kesadaran kritis terhadap persoalan bangsa dan ideologi transnasional.</li>\n      <li>Mendorong mahasiswa menjadi agen perubahan (<em>agent of change</em>) yang peduli kelestarian lingkungan dan keadilan sosial.</li>\n    </ol>\n  </li>\n  <li><strong>Empat Landasan Pendidikan Pancasila:</strong>\n    <ul>\n      <li><em>Landasan Historis:</em> Berakar dari perjuangan ratusan tahun bangsa Indonesia merebut kemerdekaan.</li>\n      <li><em>Landasan Kultural:</em> Nilai gotong royong, religiusitas, dan musyawarah telah hidup ribuan tahun di Nusantara.</li>\n      <li><em>Landasan Yuridis:</em> Diamanatkan oleh UU No. 12 Tahun 2012 tentang Pendidikan Tinggi (Pasal 35 Ayat 3) sebagai mata kuliah wajib kurikulum (MKWK).</li>\n      <li><em>Landasan Filosofis:</em> Pancasila sebagai pandangan hidup bangsa (<em>Weltanschauung</em>) dan dasar filsafat negara (<em>Philosophische Grondslag</em>).</li>\n    </ul>\n  </li>\n</ul>\n\n<h4>2. Pembagian Tugas Kelompok & Pembuatan Slide PPT Mandiri</h4>\n<p>Berdasarkan instruksi dosen dan acuan <strong>Binder.txt</strong>, mahasiswa kelas dibagi ke dalam <strong>10 Kelompok</strong> yang wajib membuat slide presentasi PowerPoint (PPT) secara mandiri dari bahan kajian RPS:</p>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Kelompok</th><th>Tema Materi RPS</th><th>Daftar Anggota Mahasiswa</th><th>Jadwal Pertemuan</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Kelompok 1</strong></td><td>Pancasila dalam Lintasan Sejarah Bangsa [SEBELUM KEMERDEKAAN]</td><td>1. A Alif Assyafiyyah<br>2. Aila Az Zahra Zainuddin<br>3. Achmad Miko Al Torik<br>4. Aini Kurnia Sari</td><td>Pertemuan 2</td></tr>\n      <tr><td><strong>Kelompok 2</strong></td><td>Pancasila dalam Lintasan Sejarah Bangsa [SESUDAH KEMERDEKAAN]</td><td>1. Ahmad Hafizh Iswhyudi<br>2. Delysia Vala Putri Dwi Callista<br>3. Ahmad Raihan Primadiawan Hermansyah<br>4. Hikmatus Sholawat</td><td>Pertemuan 3</td></tr>\n      <tr><td><strong>Kelompok 3</strong></td><td>Pancasila sebagai Dasar Negara</td><td>1. Akmal Thoriq Ramadhan<br>2. Kiara Brezenska<br>3. Alfi Muhidin Matdoan<br>4. Nabila Berlian Brizky Siregar</td><td>Pertemuan 4</td></tr>\n      <tr><td><strong>Kelompok 4</strong></td><td>Pancasila sebagai Ideologi Negara</td><td>1. Hanif Fadhil Hawarizmi<br>2. Salma Nur Aulia Muthmainah<br>3. Muhamad Nizar Haqiqi<br>4. Vanda Rangelis Syafina</td><td>Pertemuan 5</td></tr>\n      <tr><td><strong>Kelompok 5</strong></td><td>Radikalisme dan Terorisme</td><td>1. Dodi Alfayed<br>2. Ratu Bilkis Aliza<br>3. Esa Rizky Al Fathir<br>4. Zahran Firzatullah</td><td>Pertemuan 7</td></tr>\n      <tr><td><strong>Kelompok 6</strong></td><td>Pancasila sebagai Sistem Filsafat</td><td>1. Fachri Darmawan<br>2. Amanda Zahra Bilnina<br>3. Mohamad Nur Ramaday<br>4. Roshayyatinah</td><td>Pertemuan 9</td></tr>\n      <tr><td><strong>Kelompok 7</strong></td><td>Pancasila sebagai Sistem Etika</td><td>1. Dava Dwi Riandono<br>2. Nazwa Siti Azizah<br>3. Dimas Iswanto<br>4. Putri Aliya Mulyono</td><td>Pertemuan 10</td></tr>\n      <tr><td><strong>Kelompok 8</strong></td><td>Pancasila sebagai Nilai Dasar Pengembangan Ilmu</td><td>1. Margareta Triyani Dahom<br>2. Sera Prisilia<br>3. Tria Fitriani Pasaribu<br>4. Albani Ahmad Munawar</td><td>Pertemuan 11-12</td></tr>\n      <tr><td><strong>Kelompok 9</strong></td><td>Pendidikan Anti Korupsi</td><td>1. Muhammad Zacki Arr Rosis<br>2. Rafi Al Jabbar<br>3. Vika Ardita<br>4. Nathalie Theophilia<br>5. Wahyu Arif H</td><td>Pertemuan 13-14</td></tr>\n      <tr><td><strong>Kelompok 10</strong></td><td>Keanekaragaman di Indonesia & Kerukunan Berbangsa</td><td>1. Iskan Ahmad Ramza<br>2. Santa Eklesia Tampubolon<br>3. Yohanes Aril Dovris Gon<br>4. Siti Fathiyah Imarah</td><td>Pertemuan 15</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>3. Ketentuan Slide Presentasi PPT Mandiri:</h4>\n<ul>\n  <li>Slide dibuat menggunakan template berdesain profesional, bersih, dan kontras tinggi.</li>\n  <li>Struktur wajib: (1) Judul & Anggota, (2) Latar Belakang & Urgensi RPS, (3) Pembahasan Inti Teori, (4) Studi Kasus Nyata / Masalah di Masyarakat, (5) Solusi Berbasis Nilai Sila Pancasila, (6) Kesimpulan & Referensi Buku Ajar.</li>\n  <li>Dilarang membaca teks penuh dari slide (gunakan poin-poin grafis dan kuasai materi saat tanya jawab).</li>\n</ul>\n"
      },
      {
        "id": "subject-pancasila_m2",
        "subject_id": "subject-pancasila",
        "meeting_number": 2,
        "date": "2026-09-28",
        "title": "Pancasila dalam Lintasan Sejarah [SEBELUM KEMERDEKAAN] • Presentasi Kelompok 1",
        "description": "Materi RPS Sub-CPMK 1: Perkembangan nilai Pancasila masa pra-kemerdekaan (Kutai, Sriwijaya, Majapahit), Sumpah Pemuda 1928, Pembentukan BPUPKI, Sidang I BPUPKI (29 Mei - 1 Juni 1945), Panitia Sembilan, dan Piagam Jakarta (22 Juni 1945).",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_p2_ppt_kel1",
            "type": "pptx",
            "title": "Slide PPT Kelompok 1 - Pancasila Sebelum Kemerdekaan.pptx",
            "file_url": "file:///C:/Users/haike/Downloads/Tugas_Kuliah/",
            "file_size": 3100000,
            "date_added": "2026-09-30"
          },
          {
            "id": "mat_p2_rps",
            "type": "pdf",
            "title": "RPS MK02 Pancasila Pusat Gemini 010926.pdf (Minggu Ke-2)",
            "file_url": "file:///C:/Users/haike/Downloads/Tugas_Kuliah/07_Pendidikan_Pancasila/RPS_dan_Materi/RPS%20MK02%20Pancasila%20Pusat%20Gemini%20010926.pdf",
            "file_size": 245000,
            "date_added": "2026-09-30"
          }
        ],
        "transcripts": [
          {
            "id": "trans_p2_kel1",
            "content": "[00:01:10] Moderator Kelompok 1 (Aila): Selamat pagi rekan-rekan. Kami dari Kelompok 1 yang beranggotakan Alif, saya sendiri Aila, Miko, dan Aini akan mempresentasikan materi: Pancasila dalam Lintasan Sejarah Bangsa Era Pra-Kemerdekaan.\n[00:07:30] Pemateri (Alif): Nilai-nilai Pancasila sesungguhnya bukan barang impor, melainkan kristalisasi kearifan lokal Nusantara sejak zaman Kerajaan Kutai, Sriwijaya yang menjunjung toleransi agama, hingga Majapahit dengan semboyan Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa karya Mpu Tantular.\n[00:19:45] Pemateri (Miko): Memasuki abad ke-20, perumusan formal dimulai saat Jepang mendesak dan membentuk BPUPKI pada 29 April 1945. Dalam Sidang Pertama, tiga tokoh bangsa mengajukan gagasan: M. Yamin pada 29 Mei 1945, Prof. Dr. Soepomo pada 31 Mei 1945 dengan paham integralistik, dan Ir. Soekarno pada 1 Juni 1945 yang pertama kali mencetuskan nama 'Pancasila'.\n[00:32:00] Pemateri (Aini): Panitia Sembilan kemudian dibentuk untuk menuntaskan kompromi antara golongan kebangsaan dan Islam, melahirkan Piagam Jakarta 22 Juni 1945 yang menjadi cikal bakal Pembukaan UUD 1945.\n[00:44:15] Dosen: Penjelasan kelompok 1 sangat baik. Pertanyaan untuk diskusi: mengapa perubahan 7 kata dalam Piagam Jakarta menjadi bukti puncak kenegarawanan para pendiri bangsa?",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "\n<div class=\"group-presentation-badge\" style=\"background:rgba(99,102,241,0.15); border:1px solid var(--primary); padding:10px 14px; border-radius:8px; margin-bottom:16px;\">\n  <strong>👥 TUGAS PRESENTASI KELOMPOK 1:</strong><br>\n  <strong>Anggota:</strong> 1. A Alif Assyafiyyah • 2. Aila Az Zahra Zainuddin • 3. Achmad Miko Al Torik • 4. Aini Kurnia Sari<br>\n  <strong>Fokus RPS:</strong> Nilai-nilai Pancasila dalam Lintasan Sejarah Bangsa (Masa Pra-Kemerdekaan, BPUPKI, Panitia Sembilan & Piagam Jakarta).\n</div>\n\n<h4>1. Nilai Religio-Kultural Nusantara sebagai Akar Pancasila</h4>\n<p>Sebelum dirumuskan secara yuridis-formal pada tahun 1945, nilai-nilai Pancasila telah berurat berakar dalam kehidupan peradaban bangsa Indonesia selama berabad-abad:</p>\n<ul>\n  <li><strong>Zaman Kerajaan Kutai (400 M):</strong> Prasasti Yupa membuktikan adanya nilai Ketuhanan (upaya sedekah kepada Brahmana) dan nilai Kemanusiaan serta Keadilan Sosial.</li>\n  <li><strong>Zaman Kerajaan Sriwijaya (Abad VII - XIII):</strong> Pusat pembelajaran Buddha bertaraf internasional; mencerminkan nilai persatuan maritim dan keterbukaan peradaban global.</li>\n  <li><strong>Zaman Kerajaan Majapahit (1293 - 1520):</strong> Di bawah Raja Hayam Wuruk dan Mahapatih Gajah Mada, kitab <em>Sutasoma</em> karya Mpu Tantular melahirkan semboyan <strong>\"Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa\"</strong> (Berbeda-beda tetapi satu jua, tidak ada kebenaran yang mendua). Istilah <em>Pancasila</em> juga termaktub dalam kitab <em>Negarakertagama</em> karya Mpu Prapanca.</li>\n</ul>\n\n<h4>2. Kronologi Sidang BPUPKI & Perumusan Konsep Dasar Negara</h4>\n<p>BPUPKI (<em>Dokuritsu Junbi Cosakai</em>) dibentuk pada 29 April 1945 dan dilantik 28 Mei 1945 beranggotakan 62 orang tokoh bangsa diketuai Dr. K.R.T. Radjiman Wedyodiningrat:</p>\n<ol>\n  <li><strong>Sidang Pertama BPUPKI (29 Mei - 1 Juni 1945):</strong> Membahas satu pertanyaan mendasar Radjiman: <em>\"Apa dasar negara Indonesia merdeka yang akan kita bangun?\"</em>\n    <ul>\n      <li><strong>Mr. Muhammad Yamin (29 Mei 1945):</strong> Menyampaikan 5 azas dasar: (1) Peri Kebangsaan, (2) Peri Kemanusiaan, (3) Peri Ketuhanan, (4) Peri Kerakyatan, (5) Kesejahteraan Rakyat.</li>\n      <li><strong>Prof. Dr. Soepomo (31 Mei 1945):</strong> Mengajukan teori Negara Integralistik (Persatuan): negara tidak memihak kepada golongan terbesar atau terkuat, melainkan mengatasi segala paham golongan untuk kepentingan seluruh rakyat.</li>\n      <li><strong>Ir. Soekarno (1 Juni 1945):</strong> Menyampaikan pidato monumental tanpa teks yang memperkenalkan nama <strong>Pancasila</strong>: (1) Kebangsaan Indonesia / Nasionalisme, (2) Internasionalisme / Peri Kemanusiaan, (3) Mufakat / Demokrasi, (4) Kesejahteraan Sosial, (5) Ketuhanan yang Berkebudayaan. Kelima sila dapat diperas menjadi <em>Trisila</em> (Socio-nasionalisme, Socio-demokrasi, Ketuhanan), dan diperas lagi menjadi <em>Ekasila</em>, yaitu <strong>Gotong Royong</strong>.</li>\n    </ul>\n  </li>\n  <li><strong>Panitia Sembilan & Piagam Jakarta (22 Juni 1945):</strong> Panitia kecil terdiri atas Soekarno, Hatta, A.A. Maramis, Abikoesno Tjokrosoejoso, Abdoel Kahar Muzakir, H. Agus Salim, Achmad Soebardjo, K.H. Wachid Hasjim, dan M. Yamin. Mereka merumuskan naskah mukadimah konstitusi yang memuat rumusan sila pertama: <em>\"Ketuhanan dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya\"</em> (Tujuh Kata).</li>\n</ol>\n",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": true,
          "is_noted_in_binder": false
        },
        "raw_slide_content": "\n<div class=\"group-presentation-badge\" style=\"background:rgba(99,102,241,0.15); border:1px solid var(--primary); padding:10px 14px; border-radius:8px; margin-bottom:16px;\">\n  <strong>👥 TUGAS PRESENTASI KELOMPOK 1:</strong><br>\n  <strong>Anggota:</strong> 1. A Alif Assyafiyyah • 2. Aila Az Zahra Zainuddin • 3. Achmad Miko Al Torik • 4. Aini Kurnia Sari<br>\n  <strong>Fokus RPS:</strong> Nilai-nilai Pancasila dalam Lintasan Sejarah Bangsa (Masa Pra-Kemerdekaan, BPUPKI, Panitia Sembilan & Piagam Jakarta).\n</div>\n\n<h4>1. Nilai Religio-Kultural Nusantara sebagai Akar Pancasila</h4>\n<p>Sebelum dirumuskan secara yuridis-formal pada tahun 1945, nilai-nilai Pancasila telah berurat berakar dalam kehidupan peradaban bangsa Indonesia selama berabad-abad:</p>\n<ul>\n  <li><strong>Zaman Kerajaan Kutai (400 M):</strong> Prasasti Yupa membuktikan adanya nilai Ketuhanan (upaya sedekah kepada Brahmana) dan nilai Kemanusiaan serta Keadilan Sosial.</li>\n  <li><strong>Zaman Kerajaan Sriwijaya (Abad VII - XIII):</strong> Pusat pembelajaran Buddha bertaraf internasional; mencerminkan nilai persatuan maritim dan keterbukaan peradaban global.</li>\n  <li><strong>Zaman Kerajaan Majapahit (1293 - 1520):</strong> Di bawah Raja Hayam Wuruk dan Mahapatih Gajah Mada, kitab <em>Sutasoma</em> karya Mpu Tantular melahirkan semboyan <strong>\"Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa\"</strong> (Berbeda-beda tetapi satu jua, tidak ada kebenaran yang mendua). Istilah <em>Pancasila</em> juga termaktub dalam kitab <em>Negarakertagama</em> karya Mpu Prapanca.</li>\n</ul>\n\n<h4>2. Kronologi Sidang BPUPKI & Perumusan Konsep Dasar Negara</h4>\n<p>BPUPKI (<em>Dokuritsu Junbi Cosakai</em>) dibentuk pada 29 April 1945 dan dilantik 28 Mei 1945 beranggotakan 62 orang tokoh bangsa diketuai Dr. K.R.T. Radjiman Wedyodiningrat:</p>\n<ol>\n  <li><strong>Sidang Pertama BPUPKI (29 Mei - 1 Juni 1945):</strong> Membahas satu pertanyaan mendasar Radjiman: <em>\"Apa dasar negara Indonesia merdeka yang akan kita bangun?\"</em>\n    <ul>\n      <li><strong>Mr. Muhammad Yamin (29 Mei 1945):</strong> Menyampaikan 5 azas dasar: (1) Peri Kebangsaan, (2) Peri Kemanusiaan, (3) Peri Ketuhanan, (4) Peri Kerakyatan, (5) Kesejahteraan Rakyat.</li>\n      <li><strong>Prof. Dr. Soepomo (31 Mei 1945):</strong> Mengajukan teori Negara Integralistik (Persatuan): negara tidak memihak kepada golongan terbesar atau terkuat, melainkan mengatasi segala paham golongan untuk kepentingan seluruh rakyat.</li>\n      <li><strong>Ir. Soekarno (1 Juni 1945):</strong> Menyampaikan pidato monumental tanpa teks yang memperkenalkan nama <strong>Pancasila</strong>: (1) Kebangsaan Indonesia / Nasionalisme, (2) Internasionalisme / Peri Kemanusiaan, (3) Mufakat / Demokrasi, (4) Kesejahteraan Sosial, (5) Ketuhanan yang Berkebudayaan. Kelima sila dapat diperas menjadi <em>Trisila</em> (Socio-nasionalisme, Socio-demokrasi, Ketuhanan), dan diperas lagi menjadi <em>Ekasila</em>, yaitu <strong>Gotong Royong</strong>.</li>\n    </ul>\n  </li>\n  <li><strong>Panitia Sembilan & Piagam Jakarta (22 Juni 1945):</strong> Panitia kecil terdiri atas Soekarno, Hatta, A.A. Maramis, Abikoesno Tjokrosoejoso, Abdoel Kahar Muzakir, H. Agus Salim, Achmad Soebardjo, K.H. Wachid Hasjim, dan M. Yamin. Mereka merumuskan naskah mukadimah konstitusi yang memuat rumusan sila pertama: <em>\"Ketuhanan dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya\"</em> (Tujuh Kata).</li>\n</ol>\n"
      },
      {
        "id": "subject-pancasila_m3",
        "subject_id": "subject-pancasila",
        "meeting_number": 3,
        "date": "2026-09-31",
        "title": "Pancasila dalam Lintasan Sejarah [SESUDAH KEMERDEKAAN] • Presentasi Kelompok 2",
        "description": "Materi RPS Sub-CPMK 1: Perjalanan Pancasila era Kemerdekaan (1945), Dinamika Konstitusi RIS & UUDS 1950, Orde Lama (Dekrit Presiden 5 Juli 1959, Demokrasi Terpimpin, Nasakom), Orde Baru (P-4 & Asas Tunggal), hingga Era Reformasi.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_p3_ppt_kel2",
            "type": "pptx",
            "title": "Slide PPT Kelompok 2 - Pancasila Sesudah Kemerdekaan.pptx",
            "file_url": "file:///C:/Users/haike/Downloads/Tugas_Kuliah/",
            "file_size": 2800000,
            "date_added": "2026-09-30"
          },
          {
            "id": "mat_p3_rps",
            "type": "pdf",
            "title": "RPS MK02 Pancasila Pusat Gemini 010926.pdf (Minggu Ke-3)",
            "file_url": "file:///C:/Users/haike/Downloads/Tugas_Kuliah/07_Pendidikan_Pancasila/RPS_dan_Materi/RPS%20MK02%20Pancasila%20Pusat%20Gemini%20010926.pdf",
            "file_size": 245000,
            "date_added": "2026-09-30"
          }
        ],
        "transcripts": [
          {
            "id": "trans_p3_kel2",
            "content": "[00:01:30] Moderator Kelompok 2 (Delysia): Selamat pagi Bapak Dosen dan rekan-rekan. Kami dari Kelompok 2 (Ahmad Hafizh, Delysia, Raihan Hermansyah, dan Hikmatus Sholawat) akan menyajikan evaluasi sejarah Pancasila pasca-kemerdekaan 1945 hingga reformasi.\n[00:11:15] Pemateri (Hafizh): Sehari setelah proklamasi, tepatnya 18 Agustus 1945, PPKI mengesahkan UUD 1945 setelah Mohammad Hatta berhasil meyakinkan tokoh-tokoh Islam untuk mengganti 7 kata Piagam Jakarta menjadi 'Ketuhanan Yang Maha Esa' demi menyelamatkan persatuan bangsa Indonesia dari Sabang sampai Merauke.\n[00:24:40] Pemateri (Raihan): Di era Orde Lama, terjadi pergantian konstitusi ke RIS 1949 dan UUDS 1950 yang bercorak parlementer liberal. Ketidakstabilan politik mendorong lahirnya Dekrit Presiden 5 Juli 1959 untuk kembali ke UUD 1945, namun pelaksanaannya melenceng ke arah Demokrasi Terpimpin dan ajaran Nasakom yang berujung pada peristiwa G30S/PKI 1965.\n[00:36:20] Pemateri (Hikmatus): Orde Baru lahir dengan tekad melaksanakan Pancasila secara murni dan konsekuen. Namun, Orde Baru justru memonopoli tafsir ideologis melalui penataran P-4 dan menjadikannya alat membungkam kritik. Akhirnya, reformasi 1998 merevitalisasi Pancasila tanpa monopoli kekuasaan negara.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "\n<div class=\"group-presentation-badge\" style=\"background:rgba(99,102,241,0.15); border:1px solid var(--primary); padding:10px 14px; border-radius:8px; margin-bottom:16px;\">\n  <strong>👥 TUGAS PRESENTASI KELOMPOK 2:</strong><br>\n  <strong>Anggota:</strong> 1. Ahmad Hafizh Iswhyudi • 2. Delysia Vala Putri Dwi Callista • 3. Ahmad Raihan Primadiawan Hermansyah • 4. Hikmatus Sholawat<br>\n  <strong>Fokus RPS:</strong> Pancasila Masa Kemerdekaan, Orde Lama, Orde Baru, dan Dinamika Era Reformasi.\n</div>\n\n<h4>1. Pengesahan Pancasila pada 18 Agustus 1945 & Sikap Kenegarawanan</h4>\n<p>Pada pagi hari menjelang sidang PPKI 18 Agustus 1945, Drs. Mohammad Hatta menerima pesan dari opsir AL Jepang bahwa perwakilan Indonesia Timur akan memisahkan diri jika kalimat <em>\"dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya\"</em> dipertahankan.</p>\n<ul>\n  <li>Dengan kebesaran jiwa para tokoh Islam (K.H. Wachid Hasjim, Ki Bagoes Hadikoesoemo, Kasman Singodimedjo, Teuku M. Hasan), disepakati penggantian sila pertama menjadi: <strong>\"Ketuhanan Yang Maha Esa\"</strong>.</li>\n  <li>Hal ini membuktikan komitmen persatuan nasional dan asas inklusif Pancasila sebagai payung kebhinekaan.</li>\n</ul>\n\n<h4>2. Dialektika Tiga Orde Kepemimpinan Nasional</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Periode / Orde</th><th>Karakteristik Politik</th><th>Tantangan & Deviasi Ideologis</th><th>Pelajaran Sejarah bagi Mahasiswa</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Era Awal Kemerdekaan (1945-1959)</strong></td><td>Demokrasi Parlementer, multipartai ekstrem, kabinet jatuh bangun</td><td>Pemberontakan ideologis bersenjata (PKI Madiun 1948, DI/TII, PRRI/Permesta) dan kebuntuan Konstituante</td><td>Pancasila terbukti tangguh mengatasi perpecahan dan disintegrasi teritorial.</td></tr>\n      <tr><td><strong>Orde Lama (1959-1965)</strong></td><td>Dekrit Presiden 5 Juli 1959, Demokrasi Terpimpin</td><td>Pemimpin Besar Revolusi seumur hidup, sentralisasi kekuasaan, subordinasi Pancasila di bawah Nasakom</td><td>Kekuasaan tanpa kontrol demokratis akan memicu instabilitas fatal (tragedi 1965).</td></tr>\n      <tr><td><strong>Orde Baru (1966-1998)</strong></td><td>Demokrasi Pancasila, pembangunan ekonomi Repelita, stabilitas keamanan</td><td>Monopoli penafsiran kebenaran tunggal (Penataran P-4), sentralistik, hegemoni militer, pembungkaman suara kritis</td><td>Pancasila adalah ideologi terbuka, bukan alat legitimasi rezim yang represif.</td></tr>\n      <tr><td><strong>Era Reformasi (1998 - Sekarang)</strong></td><td>Demokrasi deliberatif, otonomi daerah, kebebasan pers dan berserikat</td><td>Ancaman disinformasi digital, polarisasi politik identitas, korupsi struktural, infiltrasi radikalisme transnasional</td><td>Pancasila harus diaktualisasikan dalam etika bermedia sosial, keadilan hukum, dan integritas moral.</td></tr>\n    </tbody>\n  </table>\n</div>\n",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": true,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        },
        "raw_slide_content": "\n<div class=\"group-presentation-badge\" style=\"background:rgba(99,102,241,0.15); border:1px solid var(--primary); padding:10px 14px; border-radius:8px; margin-bottom:16px;\">\n  <strong>👥 TUGAS PRESENTASI KELOMPOK 2:</strong><br>\n  <strong>Anggota:</strong> 1. Ahmad Hafizh Iswhyudi • 2. Delysia Vala Putri Dwi Callista • 3. Ahmad Raihan Primadiawan Hermansyah • 4. Hikmatus Sholawat<br>\n  <strong>Fokus RPS:</strong> Pancasila Masa Kemerdekaan, Orde Lama, Orde Baru, dan Dinamika Era Reformasi.\n</div>\n\n<h4>1. Pengesahan Pancasila pada 18 Agustus 1945 & Sikap Kenegarawanan</h4>\n<p>Pada pagi hari menjelang sidang PPKI 18 Agustus 1945, Drs. Mohammad Hatta menerima pesan dari opsir AL Jepang bahwa perwakilan Indonesia Timur akan memisahkan diri jika kalimat <em>\"dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya\"</em> dipertahankan.</p>\n<ul>\n  <li>Dengan kebesaran jiwa para tokoh Islam (K.H. Wachid Hasjim, Ki Bagoes Hadikoesoemo, Kasman Singodimedjo, Teuku M. Hasan), disepakati penggantian sila pertama menjadi: <strong>\"Ketuhanan Yang Maha Esa\"</strong>.</li>\n  <li>Hal ini membuktikan komitmen persatuan nasional dan asas inklusif Pancasila sebagai payung kebhinekaan.</li>\n</ul>\n\n<h4>2. Dialektika Tiga Orde Kepemimpinan Nasional</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Periode / Orde</th><th>Karakteristik Politik</th><th>Tantangan & Deviasi Ideologis</th><th>Pelajaran Sejarah bagi Mahasiswa</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Era Awal Kemerdekaan (1945-1959)</strong></td><td>Demokrasi Parlementer, multipartai ekstrem, kabinet jatuh bangun</td><td>Pemberontakan ideologis bersenjata (PKI Madiun 1948, DI/TII, PRRI/Permesta) dan kebuntuan Konstituante</td><td>Pancasila terbukti tangguh mengatasi perpecahan dan disintegrasi teritorial.</td></tr>\n      <tr><td><strong>Orde Lama (1959-1965)</strong></td><td>Dekrit Presiden 5 Juli 1959, Demokrasi Terpimpin</td><td>Pemimpin Besar Revolusi seumur hidup, sentralisasi kekuasaan, subordinasi Pancasila di bawah Nasakom</td><td>Kekuasaan tanpa kontrol demokratis akan memicu instabilitas fatal (tragedi 1965).</td></tr>\n      <tr><td><strong>Orde Baru (1966-1998)</strong></td><td>Demokrasi Pancasila, pembangunan ekonomi Repelita, stabilitas keamanan</td><td>Monopoli penafsiran kebenaran tunggal (Penataran P-4), sentralistik, hegemoni militer, pembungkaman suara kritis</td><td>Pancasila adalah ideologi terbuka, bukan alat legitimasi rezim yang represif.</td></tr>\n      <tr><td><strong>Era Reformasi (1998 - Sekarang)</strong></td><td>Demokrasi deliberatif, otonomi daerah, kebebasan pers dan berserikat</td><td>Ancaman disinformasi digital, polarisasi politik identitas, korupsi struktural, infiltrasi radikalisme transnasional</td><td>Pancasila harus diaktualisasikan dalam etika bermedia sosial, keadilan hukum, dan integritas moral.</td></tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "id": "subject-pancasila_m4",
        "subject_id": "subject-pancasila",
        "meeting_number": 4,
        "date": "2026-09-34",
        "title": "Pancasila sebagai Dasar Negara • Presentasi Kelompok 3 & Kisi-Kisi UTS RPS",
        "description": "Materi RPS Sub-CPMK 2: Esensi dan urgensi Pancasila sebagai Dasar Negara, Sumber historis, yuridis, sosiologis, dan politis, kedudukan hukum dalam hierarki perundang-undangan (UU No. 12 Tahun 2011), serta 15 Soal Latihan Persiapan UTS Resmi dari Dosen.",
        "notes": "Catatan penting persiapan kuis & UTS: perhatikan definisi dosen dan contoh soal praktikum.",
        "materials": [
          {
            "id": "mat_p4_ppt_kel3",
            "type": "pptx",
            "title": "Slide PPT Kelompok 3 - Pancasila sebagai Dasar Negara.pptx",
            "file_url": "file:///C:/Users/haike/Downloads/Tugas_Kuliah/",
            "file_size": 2900000,
            "date_added": "2026-09-30"
          },
          {
            "id": "mat_p4_rps_soal",
            "type": "pdf",
            "title": "RPS MK02 Pancasila Pusat Gemini 010926.pdf (Bank Soal UTS & UAS)",
            "file_url": "file:///C:/Users/haike/Downloads/Tugas_Kuliah/07_Pendidikan_Pancasila/RPS_dan_Materi/RPS%20MK02%20Pancasila%20Pusat%20Gemini%20010926.pdf",
            "file_size": 245000,
            "date_added": "2026-09-30"
          }
        ],
        "transcripts": [
          {
            "id": "trans_p4_kel3",
            "content": "[00:01:15] Moderator Kelompok 3 (Kiara): Assalamu'alaikum wr. wb. Kami dari Kelompok 3 (Akmal Thoriq, Kiara Brezenska, Alfi Muhidin, dan Nabila Berlian) mempersembahkan topik sentral: Pancasila sebagai Dasar Negara Republik Indonesia.\n[00:10:40] Pemateri (Akmal): Sebagai dasar negara, Pancasila berkedudukan sebagai norma dasar fundamental (Staatsfundamentalnorm). Artinya, seluruh peraturan perundang-undangan, mulai dari UUD 1945, UU, Perppu, PP, Perpres, hingga Perda tidak boleh bertentangan sedikit pun dengan nilai lima sila Pancasila.\n[00:23:15] Pemateri (Alfi): Landasan yuridis ditegaskan dalam Pembukaan UUD 1945 Alinea Keempat. Secara sosiologis, Pancasila mencerminkan kebiasaan hidup guyub, tolong-menolong, dan musyawarah mufakat masyarakat Indonesia.\n[00:35:50] Pemateri (Nabila): Pada lampiran RPS resmi dosen, terdapat 15 butir soal latihan UTS resmi. Kami membedah jawaban setiap butir soal tersebut agar rekan-rekan mahasiswa siap menghadapi ujian tulis.\n[00:48:10] Dosen: Sangat memuaskan. Mohon seluruh mahasiswa mencatat 15 soal latihan persiapan UTS ini ke buku binder fisik masing-masing.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "\n<div class=\"group-presentation-badge\" style=\"background:rgba(99,102,241,0.15); border:1px solid var(--primary); padding:10px 14px; border-radius:8px; margin-bottom:16px;\">\n  <strong>👥 TUGAS PRESENTASI KELOMPOK 3:</strong><br>\n  <strong>Anggota:</strong> 1. Akmal Thoriq Ramadhan • 2. Kiara Brezenska • 3. Alfi Muhidin Matdoan • 4. Nabila Berlian Brizky Siregar<br>\n  <strong>Fokus RPS:</strong> Esensi dan Urgensi Pancasila sebagai Dasar Negara, Sumber Historis, Yuridis, Sosiologis, Politis, dan Hubungan Hierarkis Perundang-undangan.\n</div>\n\n<h4>1. Kedudukan Pancasila sebagai Dasar Negara (Staatsfundamentalnorm)</h4>\n<p>Pancasila sebagai dasar negara berkedudukan sebagai <strong>Norma Fundamental Negara (Staatsfundamentalnorm)</strong> menurut teori jenjang norma hukum Hans Nawiasky. Konsekuensinya:</p>\n<ul>\n  <li>Pancasila merupakan sumber dari segala sumber hukum negara (Pasal 2 UU No. 12 Tahun 2011).</li>\n  <li>Menjadi landasan moral, etika, dan yuridis bagi penyelenggara negara dalam membuat kebijakan publik di bidang politik, ekonomi, sosial budaya, dan pertahanan keamanan.</li>\n</ul>\n\n<h4>2. Empat Sumber Landasan Dasar Negara</h4>\n<ul>\n  <li><strong>Sumber Historis:</strong> Berasal dari konsensus nasional pendiri bangsa (<em>founding fathers</em>) dalam sidang BPUPKI dan PPKI 1945.</li>\n  <li><strong>Sumber Yuridis:</strong> Termaktub secara sah dalam Alinea IV Pembukaan UUD NRI 1945.</li>\n  <li><strong>Sumber Sosiologis:</strong> Bersumber dari adat istiadat, nilai gotong royong, kearifan lokal, dan religiusitas masyarakat Indonesia.</li>\n  <li><strong>Sumber Politis:</strong> Menjadi kaidah penuntun (<em>guiding principles</em>) dalam sistem politik demokrasi perwakilan yang beretika.</li>\n</ul>\n\n<h4>3. Bank Soal Latihan Persiapan UTS Resmi dari RPS Unindra (Wajib Dicatat ke Binder)</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>No</th><th>Soal Latihan UTS RPS</th><th>Kunci Jawaban Komprehensif</th></tr></thead>\n    <tbody>\n      <tr><td>1</td><td>Apa tujuan mempelajari mata kuliah Pancasila di perguruan tinggi?</td><td>Membangun karakter mahasiswa beriman, berakhlak mulia, cerdas kritis, menjunjung etika akademik, serta berkomitmen menjadi warga negara yang cinta tanah air dan mampu berkomunikasi global (CPMK 1 & 2).</td></tr>\n      <tr><td>2</td><td>Upaya mempertahankan ideologi Pancasila di tengah peradaban global?</td><td>Melakukan internalisasi nilai sejak dini, memperkuat literasi digital melawan hoaks dan radikalisme, mempraktikkan toleransi nyata, serta mengembangkan IPTEK berlandaskan etika ketuhanan dan kemanusiaan.</td></tr>\n      <tr><td>3</td><td>Isi rumusan Pancasila dalam Piagam Jakarta 22 Juni 1945?</td><td>1. Ketuhanan dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya, 2. Kemanusiaan yang adil dan beradab, 3. Persatuan Indonesia, 4. Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan perwakilan, 5. Keadilan sosial bagi seluruh rakyat Indonesia.</td></tr>\n      <tr><td>4</td><td>Bagaimana proses perumusan Pancasila?</td><td>Diawali dari gagasan M. Yamin, Soepomo, dan Soekarno pada sidang BPUPKI I, dimatangkan oleh Panitia Sembilan dalam Piagam Jakarta, lalu disempurnakan dan disahkan secara aklamasi oleh PPKI pada 18 Agustus 1945.</td></tr>\n      <tr><td>5</td><td>Mengapa Indonesia menggunakan Ideologi Pancasila?</td><td>Karena Pancasila digali langsung dari jiwa dan kepribadian bangsa sendiri (tidak meniru kapitalisme-liberalis yang individualistis maupun sosialisme-komunis yang menafikan hak milik pribadi dan agama).</td></tr>\n      <tr><td>6</td><td>Perbedaan sosialisme dan kapitalisme?</td><td>Kapitalisme mendewakan kebebasan individu, pasar bebas, dan kepemilikan modal privat; sedangkan sosialisme mengutamakan kontrol kolektif negara atas alat produksi untuk kesetaraan tanpa persaingan bebas.</td></tr>\n      <tr><td>7</td><td>Apakah demokrasi di Indonesia sudah sesuai nilai Pancasila?</td><td>Secara prosedural pemilu telah berjalan, namun secara substantif masih menghadapi tantangan politik uang (money politics), polarisasi identitas, dan oligarki yang perlu diperbaiki dengan hikmat kebijaksanaan permusyawaratan.</td></tr>\n      <tr><td>8</td><td>Sikap terhadap konflik suku/agama agar persatuan terjaga?</td><td>Menegakkan hukum secara adil, memperkuat dialog moderasi beragama, menghapus diskriminasi, dan mengamalkan semboyan Bhinneka Tunggal Ika dalam kehidupan bertetangga dan kampus.</td></tr>\n      <tr><td>9</td><td>Bagaimana hubungan Pancasila dengan UUD 1945?</td><td>Pancasila adalah roh/jiwa yang menjiwai Pembukaan UUD 1945, dan dijabarkan secara rinci dalam pasal-pasal batang tubuh UUD 1945 sebagai hukum dasar tertulis.</td></tr>\n      <tr><td>10</td><td>Potensi kekayaan bangsa Indonesia yang beraneka ragam?</td><td>Kekayaan 1.340 suku bangsa, kearifan lokal, posisi geografis silang strategis, sumber daya alam melimpah, dan modal sosial gotong royong yang menjadi daya saing internasional.</td></tr>\n    </tbody>\n  </table>\n</div>\n",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        },
        "raw_slide_content": "\n<div class=\"group-presentation-badge\" style=\"background:rgba(99,102,241,0.15); border:1px solid var(--primary); padding:10px 14px; border-radius:8px; margin-bottom:16px;\">\n  <strong>👥 TUGAS PRESENTASI KELOMPOK 3:</strong><br>\n  <strong>Anggota:</strong> 1. Akmal Thoriq Ramadhan • 2. Kiara Brezenska • 3. Alfi Muhidin Matdoan • 4. Nabila Berlian Brizky Siregar<br>\n  <strong>Fokus RPS:</strong> Esensi dan Urgensi Pancasila sebagai Dasar Negara, Sumber Historis, Yuridis, Sosiologis, Politis, dan Hubungan Hierarkis Perundang-undangan.\n</div>\n\n<h4>1. Kedudukan Pancasila sebagai Dasar Negara (Staatsfundamentalnorm)</h4>\n<p>Pancasila sebagai dasar negara berkedudukan sebagai <strong>Norma Fundamental Negara (Staatsfundamentalnorm)</strong> menurut teori jenjang norma hukum Hans Nawiasky. Konsekuensinya:</p>\n<ul>\n  <li>Pancasila merupakan sumber dari segala sumber hukum negara (Pasal 2 UU No. 12 Tahun 2011).</li>\n  <li>Menjadi landasan moral, etika, dan yuridis bagi penyelenggara negara dalam membuat kebijakan publik di bidang politik, ekonomi, sosial budaya, dan pertahanan keamanan.</li>\n</ul>\n\n<h4>2. Empat Sumber Landasan Dasar Negara</h4>\n<ul>\n  <li><strong>Sumber Historis:</strong> Berasal dari konsensus nasional pendiri bangsa (<em>founding fathers</em>) dalam sidang BPUPKI dan PPKI 1945.</li>\n  <li><strong>Sumber Yuridis:</strong> Termaktub secara sah dalam Alinea IV Pembukaan UUD NRI 1945.</li>\n  <li><strong>Sumber Sosiologis:</strong> Bersumber dari adat istiadat, nilai gotong royong, kearifan lokal, dan religiusitas masyarakat Indonesia.</li>\n  <li><strong>Sumber Politis:</strong> Menjadi kaidah penuntun (<em>guiding principles</em>) dalam sistem politik demokrasi perwakilan yang beretika.</li>\n</ul>\n\n<h4>3. Bank Soal Latihan Persiapan UTS Resmi dari RPS Unindra (Wajib Dicatat ke Binder)</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>No</th><th>Soal Latihan UTS RPS</th><th>Kunci Jawaban Komprehensif</th></tr></thead>\n    <tbody>\n      <tr><td>1</td><td>Apa tujuan mempelajari mata kuliah Pancasila di perguruan tinggi?</td><td>Membangun karakter mahasiswa beriman, berakhlak mulia, cerdas kritis, menjunjung etika akademik, serta berkomitmen menjadi warga negara yang cinta tanah air dan mampu berkomunikasi global (CPMK 1 & 2).</td></tr>\n      <tr><td>2</td><td>Upaya mempertahankan ideologi Pancasila di tengah peradaban global?</td><td>Melakukan internalisasi nilai sejak dini, memperkuat literasi digital melawan hoaks dan radikalisme, mempraktikkan toleransi nyata, serta mengembangkan IPTEK berlandaskan etika ketuhanan dan kemanusiaan.</td></tr>\n      <tr><td>3</td><td>Isi rumusan Pancasila dalam Piagam Jakarta 22 Juni 1945?</td><td>1. Ketuhanan dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya, 2. Kemanusiaan yang adil dan beradab, 3. Persatuan Indonesia, 4. Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan perwakilan, 5. Keadilan sosial bagi seluruh rakyat Indonesia.</td></tr>\n      <tr><td>4</td><td>Bagaimana proses perumusan Pancasila?</td><td>Diawali dari gagasan M. Yamin, Soepomo, dan Soekarno pada sidang BPUPKI I, dimatangkan oleh Panitia Sembilan dalam Piagam Jakarta, lalu disempurnakan dan disahkan secara aklamasi oleh PPKI pada 18 Agustus 1945.</td></tr>\n      <tr><td>5</td><td>Mengapa Indonesia menggunakan Ideologi Pancasila?</td><td>Karena Pancasila digali langsung dari jiwa dan kepribadian bangsa sendiri (tidak meniru kapitalisme-liberalis yang individualistis maupun sosialisme-komunis yang menafikan hak milik pribadi dan agama).</td></tr>\n      <tr><td>6</td><td>Perbedaan sosialisme dan kapitalisme?</td><td>Kapitalisme mendewakan kebebasan individu, pasar bebas, dan kepemilikan modal privat; sedangkan sosialisme mengutamakan kontrol kolektif negara atas alat produksi untuk kesetaraan tanpa persaingan bebas.</td></tr>\n      <tr><td>7</td><td>Apakah demokrasi di Indonesia sudah sesuai nilai Pancasila?</td><td>Secara prosedural pemilu telah berjalan, namun secara substantif masih menghadapi tantangan politik uang (money politics), polarisasi identitas, dan oligarki yang perlu diperbaiki dengan hikmat kebijaksanaan permusyawaratan.</td></tr>\n      <tr><td>8</td><td>Sikap terhadap konflik suku/agama agar persatuan terjaga?</td><td>Menegakkan hukum secara adil, memperkuat dialog moderasi beragama, menghapus diskriminasi, dan mengamalkan semboyan Bhinneka Tunggal Ika dalam kehidupan bertetangga dan kampus.</td></tr>\n      <tr><td>9</td><td>Bagaimana hubungan Pancasila dengan UUD 1945?</td><td>Pancasila adalah roh/jiwa yang menjiwai Pembukaan UUD 1945, dan dijabarkan secara rinci dalam pasal-pasal batang tubuh UUD 1945 sebagai hukum dasar tertulis.</td></tr>\n      <tr><td>10</td><td>Potensi kekayaan bangsa Indonesia yang beraneka ragam?</td><td>Kekayaan 1.340 suku bangsa, kearifan lokal, posisi geografis silang strategis, sumber daya alam melimpah, dan modal sosial gotong royong yang menjadi daya saing internasional.</td></tr>\n    </tbody>\n  </table>\n</div>\n"
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
        },
        "raw_slide_content": "<h4>1. Visi, Misi & Tujuan PAI di Perguruan Tinggi</h4>\r\n<ul>\r\n  <li>Membentuk sarjana muslim yang memiliki integritas ilmiah, profesional, bertakwa kepada Allah SWT, dan berhiaskan akhlak mulia (<em>akhlakul karimah</em>).</li>\r\n  <li>Membangun landasan berpikir berdasar pada dua sumber primer hukum Islam: <strong>Al-Qur'anul Karim</strong> dan <strong>As-Sunnah An-Nabawiyyah Ash-Shahihah</strong>.</li>\r\n  <li>Mewujudkan jiwa antikorupsi, kejujuran intelektual, dan etika tanggung jawab profesional dalam pemanfaatan sains dan teknologi.</li>\r\n</ul>\r\n\r\n<h4>2. Hakikat & Tiga Dimensi Tauhid (Trilogi Tauhid)</h4>\r\n<p>Tauhid secara bahasa berarti mengesakan. Secara terminologi adalah meyakini keesaan Allah SWT dalam segala hal yang menjadi kekhususan bagi-Nya. Menurut para ulama Ahlussunnah wal Jama'ah, tauhid terbagi menjadi 3 dimensi terpadu:</p>\r\n<ol>\r\n  <li><strong>Tauhid Rububiyyah:</strong>\r\n    <ul>\r\n      <li><em>Definisi:</em> Mengesakan Allah SWT dalam segala perbuatan-Nya sendiri, meyakini bahwa hanya Allah satu-satunya Pencipta (<em>Al-Khaliq</em>), Pemilik, Pemelihara, Pengatur alam semesta (<em>Al-Mudabbir</em>), dan Pemberi rezeki (<em>Ar-Raziq</em>) bagi seluruh makhluk tanpa sekutu.</li>\r\n      <li><em>Dalil:</em> QS. Al-Fatihah: 2 (<em>\"Alhamdulillahi Rabbil 'Alamin\"</em> - Segala puji bagi Allah, Tuhan Semesta Alam).</li>\r\n    </ul>\r\n  </li>\r\n  <li><strong>Tauhid Uluhiyyah (Tauhid Ibadah):</strong>\r\n    <ul>\r\n      <li><em>Definisi:</em> Mengesakan Allah SWT dalam seluruh perbuatan dan penghambaan hamba-Nya. Meniatkan seluruh ibadah (shalat, doa, nadzar, tawakkal, takut, harap, sembelihan) hanya murni ditujukan kepada Allah SWT semata. Menolak segala bentuk penyekutuan (<em>syirik</em>).</li>\r\n      <li><em>Dalil:</em> QS. Adz-Dzariyat: 56 (<em>\"Wamaa khalaqtul jinna wal insa illa liya'buduun\"</em> - Dan tidaklah Aku ciptakan jin dan manusia melainkan agar mereka menyembah-Ku).</li>\r\n    </ul>\r\n  </li>\r\n  <li><strong>Tauhid Asma wa Shifat:</strong>\r\n    <ul>\r\n      <li><em>Definisi:</em> Menetapkan nama-nama (<em>Asmaul Husna</em>) dan sifat-sifat keagungan bagi Allah SWT sebagaimana yang termaktub dalam Al-Qur'an dan Hadits shahih sesuai dengan kebesaran-Nya, tanpa melakukan:\r\n        <ul>\r\n          <li><em>Tahrif:</em> Mengubah lafaz atau makna sifat.</li>\r\n          <li><em>Ta'thil:</em> Meniadakan atau menolak sifat Allah.</li>\r\n          <li><em>Takyif:</em> Mempertanyakan bagaimanakah bentuk hakikat sifat tersebut.</li>\r\n          <li><em>Tamtsil:</em> Menyerupakan sifat Allah dengan makhluk-Nya.</li>\r\n        </ul>\r\n      </li>\r\n      <li><em>Dalil:</em> QS. Asy-Syura: 11 (<em>\"Laisa kamitslihi syai-un wa huwas sami'ul bashir\"</em> - Tidak ada sesuatu pun yang serupa dengan Dia, dan Dialah Yang Maha Mendengar lagi Maha Melihat).</li>\r\n    </ul>\r\n  </li>\r\n</ol>"
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
        },
        "raw_slide_content": "<h4>1. Pengertian Aqidah Secara Etimologi & Terminologi</h4>\r\n<ul>\r\n  <li><strong>Etimologi:</strong> Berasal dari kata bahasa Arab: <em>'aqada - ya'qidu - 'aqidatan</em> yang bermakna ikatan simpul yang sangat kuat, kukuh, dan sulit dilepas.</li>\r\n  <li><strong>Terminologi:</strong> Keyakinan dan ketetapan hati yang mantap, mutlak, dan bulat kepada Allah SWT dan perkara-perkara ghaib tanpa ada sedikit pun celah keraguan (<em>syak</em>), kebimbangan, atau dugaan di dalam kalbu sanubari seorang muslim.</li>\r\n</ul>\r\n\r\n<h4>2. Arkanul Iman (6 Rukun Iman)</h4>\r\n<p>Aqidah bertumpu pada 6 rukun iman dalam Hadits Jibril: (1) Iman kepada Allah, (2) Iman kepada Malaikat-Malaikat-Nya, (3) Iman kepada Kitab-Kitab-Nya, (4) Iman kepada Rasul-Rasul-Nya, (5) Iman kepada Hari Kiamat, dan (6) Iman kepada Qadha dan Qadar (takdir baik dan buruk berasal dari ketetapan Allah).</p>\r\n\r\n<h4>3. 4 Ruang Lingkup Aqidah Islam (Model Syaikh Hasan Al-Banna)</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Ruang Lingkup</th><th>Fokus Pembahasan</th><th>Objek Kajian Spesifik</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>1. Ilahiyyat</strong></td><td>Segala hal yang berkaitan langsung dengan Dzat dan Ketuhanan Allah SWT</td><td>Sifat Wajib, Mustahil, Jaiz bagi Allah; Asmaul Husna; Af'alullah (perbuatan Allah).</td></tr>\r\n      <tr><td><strong>2. Nubuwwat</strong></td><td>Segala hal yang berkaitan dengan para Nabi dan Rasul utusan Allah</td><td>Sifat wajib Rasul (Siddiq, Amanah, Tabligh, Fathonah); Mukjizat; Kitab Suci Samawi (Taurat, Zabur, Injil, Al-Qur'an); Sunnah.</td></tr>\r\n      <tr><td><strong>3. Ruhaniyyat</strong></td><td>Segala hal yang berkaitan dengan dimensi alam metafisika dan makhluk halus</td><td>Penciptaan Malaikat dari cahaya; Jin dan Iblis dari nyala api; Hakikat Roh; Setan; Qarin.</td></tr>\r\n      <tr><td><strong>4. Sam'iyyat</strong></td><td>Perkara ghaib eskatologis yang <strong>hanya dapat diketahui melalui pendengaran wahyu</strong> (Al-Qur'an & Sunnah) tanpa bisa dijangkau oleh panca indra manusia</td><td>Tanda-tanda kiamat, sakaratul maut, alam Barzakh (siksa dan nikmat kubur), Yaumul Ba'ats (kebangkitan), Padang Mahsyar, Mizan (timbangan amal), Hisab (perhitungan), Telaga Al-Kautsar, Jembatan Shirath, Surga, dan Neraka.</td></tr>\r\n    </tbody>\r\n  </table>"
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
        },
        "raw_slide_content": "<h4>1. Pengertian Syariah</h4>\r\n<ul>\r\n  <li>Secara bahasa (etimologi) berarti <em>jalan lurus menuju mata air kehidupan</em>.</li>\r\n  <li>Secara istilah (terminologi) adalah seperangkat aturan, tata tertib, dan ketentuan hukum yang diwahyukan oleh Allah SWT kepada Rasulullah SAW untuk mengatur perbuatan manusia sebagai hamba Allah, sebagai makhluk sosial, dan sebagai pemakmur bumi.</li>\r\n</ul>\r\n\r\n<h4>2. Dua Dimensi Ibadah dalam Syariah</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Dimensi Ibadah</th><th>Ibadah MAKHDAH (Khusus)</th><th>Ibadah GHAIRU MAKHDAH / Muamalah (Umum)</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Definisi & Relasi</strong></td><td>Hubungan vertikal langsung antara hamba dengan Allah (<em>Hablum Minallah</em>).</td><td>Hubungan horizontal antara manusia dengan sesama manusia dan alam (<em>Hablum Minannas</em>).</td></tr>\r\n      <tr><td><strong>Kaidah Fiqih Pokok</strong></td><td><em>\"Al-ashlu fil 'ibaadati al-buthlanu hatta yadulla ad-dalilu 'ala amrihi\"</em><br>(Hukum asal ibadah adalah <strong>TERLARANG / BATAL</strong> kecuali jika ada dalil yang memerintahkannya).</td><td><em>\"Al-ashlu fil mu'amalati al-ibahatu hatta yadulla ad-dalilu 'ala tahrimihi\"</em><br>(Hukum asal muamalah adalah <strong>BOLEH / HALAL</strong> kecuali jika ada dalil yang mengharamkannya).</td></tr>\r\n      <tr><td><strong>Sifat Ketentuan</strong></td><td>Kaku, baku, terinci, tidak boleh dikurangi atau ditambahi (bid'ah).</td><td>Fleksibel, dinamis, terbuka terhadap inovasi sains dan teknologi modern.</td></tr>\r\n      <tr><td><strong>Contoh Konkret</strong></td><td>Tata cara Shalat 5 waktu, Puasa Ramadhan, Zakat, Ibadah Haji.</td><td>Jual-beli online e-commerce, etika koding AI, tolong-menolong, bekerja profesional.</td></tr>\r\n    </tbody>\r\n  </table>"
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
        },
        "raw_slide_content": "<h4>1. Hakikat Akhlak Menurut Hujjatul Islam Imam Al-Ghazali</h4>\r\n<p>Dalam kitab monumentalnya <em>Ihya' 'Ulumiddin</em>, <strong>Imam Abu Hamid Al-Ghazali</strong> merumuskan definisi akhlak:</p>\r\n<blockquote style=\"border-left:4px solid var(--primary); padding:10px 14px; background:var(--surface-elevated); font-style:italic;\">\r\n  \"Al-Khuluqu 'ibaaratun 'an hai-atin fin-nafsi raasikhatin, 'anhaa tashdurul af'aalu bisuhuulatin wa yusrin min ghairi haajatin ilaa fikrin wa ruwiyyah.\"<br>\r\n  (Akhlak adalah suatu kondisi atau sifat yang tertanam kuat di dalam jiwa, yang darinya memancar perbuatan-perbuatan dengan mudah dan spontan tanpa memerlukan pemikiran dan pertimbangan yang panjang).\r\n</blockquote>\r\n<p>Jika seseorang harus berpikir lama dan menimbang-nimbang sebelum memberi sedekah uang seribu rupiah, kedermawanannya belum menjadi akhlaknya. Namun jika tangan kanannya otomatis memberi dengan ikhlas tanpa riya' begitu melihat orang membutuhkan, kedermawanan telah menjadi akhlak yang mengakar.</p>\r\n\r\n<h4>2. Matriks Komparasi Ilmiah: Etika vs Moral vs Akhlak</h4>\r\n<div class=\"table-wrap\">\r\n  <table>\r\n    <thead><tr><th>Dimensi Pembanding</th><th>ETIKA (Ethics)</th><th>MORAL (Morality)</th><th>AKHLAK (Islamic Ethics)</th></tr></thead>\r\n    <tbody>\r\n      <tr><td><strong>Asal Kata & Etimologi</strong></td><td>Bahasa Yunani <em>Ethos</em> (watak, kebiasaan, adat)</td><td>Bahasa Latin <em>Mos</em> / jamaknya <em>Mores</em> (adat kebiasaan)</td><td>Bahasa Arab <em>Khuluqun</em> (tabiat, perangai, ciptaan batin yang serumpun dengan kata <em>Khaliq</em> dan <em>Makhluq</em>)</td></tr>\r\n      <tr><td><strong>Sumber & Tolok Ukur Kebenaran</strong></td><td><strong>Akal Pikiran / Rasio Manusia:</strong> Kesimpulan filosofis berbasis logika logis akal sehat manusia.</td><td><strong>Adat Istiadat / Norma Sosial:</strong> Kesepakatan tradisi budaya yang berlaku dalam suatu komunitas masyarakat tertentu.</td><td><strong>Wahyu Ilahi (Al-Qur'an & As-Sunnah):</strong> Tuntunan mutlak dari Allah SWT yang dicontohkan Rasulullah SAW.</td></tr>\r\n      <tr><td><strong>Sifat Nilai Keberlakuan</strong></td><td><strong>Relatif & Teoretis:</strong> Berubah mengikuti paradigma filsafat dan temuan sains baru.</td><td><strong>Lokal & Terbatas Wilayah:</strong> Berbeda antar daerah (apa yang sopan di Jawa belum tentu sopan di Eropa).</td><td><strong>Mutlak, Abadi & Universal:</strong> Berlaku kapanpun, dimanapun, untuk siapapun hingga akhir zaman (kejujuran selalu mulia, korupsi selalu terkutuk).</td></tr>\r\n      <tr><td><strong>Sanksi Pelanggaran</strong></td><td>Kritik akal sehat, celaan kaum cendekiawan, diskualifikasi etika profesi.</td><td>Sanksi sosial, gunjingan tetangga, pengucilan dari paguyuban adat.</td><td>Dosa di sisi Allah, kegelisahan batin spiritual, dan pertanggungjawaban hisab di akhirat.</td></tr>\r\n      <tr><td><strong>Motivasi Perbuatan</strong></td><td>Pujian rasionalitas, martabat martir profesional, reputasi gelar.</td><td>Penerimaan sosial warga setempat, menjaga nama baik keluarga.</td><td><strong>Murni Mengharap Ridha Allah SWT (Ikhlas Lillahi Ta'ala).</strong></td></tr>\r\n    </tbody>\r\n  </table>"
      }
    ]
  }
];

export const initialProfile = {
  id: "usr_haikel_2026",
  email: "haikel@unindra.ac.id",
  full_name: "Muhammad Haikel Saleh",
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
