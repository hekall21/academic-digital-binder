// Pre-seeded academic data for 8 subjects and 32 meetings (Unindra Semester 1)
// Enriched with 43 real lecture PDFs from laptop Kuliah & Tugas_Kuliah repos
// Includes in-depth university level summaries and HD Cheatsheet references

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
        "date": "2026-09-15",
        "title": "Konsep Dasar Data, Informasi, dan Transformasi Pengetahuan",
        "description": "Epistemologi data komputasi, klasifikasi data 3 sumbu, definisi informasi Gordon B. Davis, dan siklus hierarki DIKW.",
        "notes": "Materi pokok UTS: Pahami perbedaan atomik data vs informasi dan rekonstruksi diagram hierarki DIKW.",
        "materials": [
          {
            "id": "mat_ksi_1_1",
            "type": "pdf",
            "title": "Modul Dosen P1: Konsep Dasar Data & Informasi (SISTEM_INFORMASI_1.pdf)",
            "file_url": "/materials/ksi_p1_sistem_informasi_1.pdf",
            "file_size": 1006636,
            "date_added": "2026-09-15"
          },
          {
            "id": "mat_ksi_1_2",
            "type": "pdf",
            "title": "Rangkuman Mandiri Mahasiswa P1 & P2 Unindra.pdf",
            "file_url": "/materials/ksi_rangkuman_mandiri_p1_p2.pdf",
            "file_size": 275115,
            "date_added": "2026-09-16"
          }
        ],
        "transcripts": [
          {
            "id": "trans_ksi_1",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Dosen Pak Dheni menegaskan bahwa data mentah belum dapat digunakan langsung oleh pimpinan untuk mengambil keputusan bisnis. Data penjualan kasir harian baru berguna ketika diolah menjadi laporan komparasi omset bulanan yang memenuhi definisi informasi Gordon B. Davis.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Hakikat Data dan Epistemologi Komputasi</h4>\n<p>Secara epistemologis dan praktis, <strong>Data</strong> didefinisikan sebagai representasi mentah dari fakta (<em>raw facts</em>), kejadian (<em>events</em>), atau entitas nyata (orang, tempat, benda, uang, transaksi) yang terekam atau terdokumentasi tanpa makna bawaan yang dapat langsung dipakai untuk pengambilan keputusan strategis.</p>\n<ul>\n  <li><strong>Sifat Data:</strong> Bersifat atomik, mentah (<em>unprocessed</em>), statis, dan belum memiliki nilai langsung bagi manajer sebelum diolah melalui logika program.</li>\n  <li><strong>Format Data Modern:</strong>\n    <ul>\n      <li><em>Data Terstruktur:</em> Angka, tanggal, dan teks dalam basis data relasional (SQL / RDBMS) dengan tipe data terdefinisi presisi.</li>\n      <li><em>Data Semi-Terstruktur:</em> Format JSON, XML, log server yang memiliki pasangan kunci-nilai (key-value) fleksibel.</li>\n      <li><em>Data Tidak Terstruktur:</em> Berkas dokumen PDF, audio rekaman, citra CCTV, dan konten multimedia yang membutuhkan ekstraksi komputasi khusus.</li>\n    </ul>\n  </li>\n</ul>\n\n<h4>2. Tiga Sumbu Klasifikasi Data Resmi (Slide Perkuliahan)</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Sumbu Klasifikasi</th><th>Kategori Data</th><th>Penjelasan Konseptual</th><th>Contoh Kasus Nyata di Lapangan</th></tr></thead>\n    <tbody>\n      <tr><td rowspan=\"2\"><strong>Berdasarkan Sifat Perolehan</strong></td><td><strong>Data Hitung (Discrete)</strong></td><td>Diperoleh dari hasil mencacah atau membilang unit bilangan bulat diskrit.</td><td>Jumlah mahasiswa kelas R1G (45 orang), jumlah inventaris printer (3 unit).</td></tr>\n      <tr><td><strong>Data Ukur (Continuous)</strong></td><td>Diperoleh dari pengukuran alat ukur berskala kontinu dan desimal.</td><td>Berat paket pengiriman (4,75 kg), suhu ruang server (21,5°C), panjang kabel LAN (15,2 m).</td></tr>\n      <tr><td rowspan=\"2\"><strong>Berdasarkan Mutu Data</strong></td><td><strong>Data Kualitatif</strong></td><td>Menyatakan mutu, sifat, atau kategori non-numerik.</td><td>Kepuasan pelanggan (\"Sangat Puas\"), warna casing unit komputer (\"Hitam Doff\").</td></tr>\n      <tr><td><strong>Data Kuantitatif</strong></td><td>Dinyatakan dalam angka mutlak yang dapat dioperasikan secara matematika.</td><td>Total omset kasir per hari (Rp 4.500.000), kuota penyimpanan SSD (512 GB).</td></tr>\n      <tr><td rowspan=\"2\"><strong>Berdasarkan Sumber Asal</strong></td><td><strong>Data Internal</strong></td><td>Berasal dari dalam organisasi atau lingkungan internal sendiri.</td><td>Daftar presensi pegawai, rekap stok barang di gudang perusahaan.</td></tr>\n      <tr><td><strong>Data Eksternal</strong></td><td>Berasal dari luar batasan organisasi bisnis.</td><td>Data laju inflasi dari BPS, kurs tukar valuta asing Bank Indonesia, harga pasaran kompetitor.</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>3. Definisi Informasi Menurut Gordon B. Davis & Pakar Klasik</h4>\n<blockquote style=\"border-left: 4px solid #6366F1; padding-left: 14px; margin: 12px 0; color: #E0E7FF; font-style: italic; background: rgba(99, 102, 241, 0.08); padding: 12px 16px; border-radius: 6px;\">\n  \"Informasi adalah data yang telah diproses ke dalam suatu bentuk yang mempunyai arti bagi si penerima (meaningful) dan mempunyai nilai nyata serta terasa bagi pengambilan keputusan saat ini maupun keputusan masa mendatang.\"<br>\n  <strong>— Gordon B. Davis, Management Information Systems</strong>\n</blockquote>\n<p>Tiga kata kunci pembeda utama menurut Davis:</p>\n<ol>\n  <li><strong>Telah Diproses (Processed):</strong> Melewati operasi aritmatika, penyaringan, agregasi, atau algoritma pengurutan.</li>\n  <li><strong>Mempunyai Arti bagi Penerima:</strong> Relevan dengan ranah tanggung jawab pengguna (rekap transaksi kasir sangat bernilai bagi kepala toko, namun tidak relevan bagi teknisi pendingin).</li>\n  <li><strong>Mengurangi Ketidakpastian (Reducing Uncertainty):</strong> Memberi landasan objektif bagi pimpinan untuk bertindak dengan tingkat risiko terkontrol.</li>\n</ol>\n\n<h4>4. Hierarki DIKW (Data ➔ Information ➔ Knowledge ➔ Wisdom)</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Tingkatan</th><th>Pertanyaan Kunci</th><th>Karakteristik Komputasi</th><th>Contoh Konkret Bisnis Retail & Kasir</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Data</strong></td><td><em>What? (Fakta)</em></td><td>Catatan transaksi atomik tanpa konteks relasional.</td><td><code>100, \"2026-09-30\", \"SKU-992\", 45000</code></td></tr>\n      <tr><td><strong>Information</strong></td><td><em>Who, When, Where?</em></td><td>Data yang diagregasi dan diberi label relasional bermakna.</td><td>\"Pada 30 September 2026, terjual 100 unit SKU-992 dengan omset Rp4.500.000 di Cabang Pasar Rebo.\"</td></tr>\n      <tr><td><strong>Knowledge</strong></td><td><em>How? (Pola & Kaidah)</em></td><td>Sintesis pemahaman tren dari akumulasi informasi berkelanjutan.</td><td>\"Penjualan SKU-992 selalu melonjak 300% pada akhir bulan saat hari gajian karena produk tersebut adalah sembako utama.\"</td></tr>\n      <tr><td><strong>Wisdom</strong></td><td><em>Why? (Strategi Masa Depan)</em></td><td>Kemampuan visi eksekutif dalam mengambil kebijakan jangka panjang.</td><td>\"Mengalokasikan stok penyangga 500 unit setiap tanggal 25 dan merancang paket bundling gajian demi memaksimalkan margin laba.\"</td></tr>\n    </tbody>\n  </table>\n</div>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-ksi_m2",
        "subject_id": "subject-ksi",
        "meeting_number": 2,
        "date": "2026-09-22",
        "title": "Karakteristik, Batasan & Taksonomi Sistem",
        "description": "Delapan karakteristik wajib sistem, taksonomi sistem aljabar komputasi, dan kalkulasi nilai bersih informasi.",
        "notes": "Materi pokok kuis: Hafalkan 8 karakteristik sistem dan kuasai rumus nilai bersih informasi.",
        "materials": [
          {
            "id": "mat_ksi_2_1",
            "type": "pdf",
            "title": "Modul Dosen P2: Karakteristik & Taksonomi Sistem (SISTEM_INFORMASI_2.pdf)",
            "file_url": "/materials/ksi_p2_sistem_informasi_2.pdf",
            "file_size": 825156,
            "date_added": "2026-09-22"
          },
          {
            "id": "mat_ksi_2_2",
            "type": "pdf",
            "title": "Rangkuman Mandiri Mahasiswa P1 & P2 Unindra.pdf",
            "file_url": "/materials/ksi_rangkuman_mandiri_p1_p2.pdf",
            "file_size": 275115,
            "date_added": "2026-09-22"
          }
        ],
        "transcripts": [
          {
            "id": "trans_ksi_2",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Sistem hanya dapat berjalan jika seluruh komponennya bekerja sama secara harmonis. Interface atau antarmuka berperan sebagai jembatan agar data dari satu subsistem dapat diterima subsistem lain tanpa distorsi format.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Delapan Karakteristik Wajib Suatu Sistem (Sistematika Utuh)</h4>\n<p>Suatu kumpulan entitas hanya berhak diklasifikasikan sebagai <strong>Sistem</strong> apabila memenuhi 8 karakteristik terpadu berikut:</p>\n<ol>\n  <li><strong>Komponen Sistem (Components):</strong> Kumpulan elemen atau subsistem yang saling berinteraksi, menjalankan tugas masing-masing untuk mencapai tujuan bersama.</li>\n  <li><strong>Batas Sistem (Boundary):</strong> Garis pemisah yang membatasi ruang lingkup sistem dengan sistem lain maupun lingkungan luarnya. Batas menentukan kapasitas dan parameter operasional.</li>\n  <li><strong>Lingkungan Luar Sistem (Environment):</strong> Segala sesuatu di luar batas sistem. Lingkungan yang menguntungkan (suplai energi, modal, data pelanggan) wajib dipelihara, sedangkan yang merugikan (serangan malware, regulasi ketat) harus dikendalikan.</li>\n  <li><strong>Penghubung Sistem (Interface):</strong> Media perantara yang memungkinkan sumber daya atau data mengalir dari satu subsistem ke subsistem lainnya. Format keluaran subsistem A harus sesuai dengan format masukan subsistem B.</li>\n  <li><strong>Masukan Sistem (Input):</strong> Energi atau sinyal yang dimasukkan ke dalam sistem. Dibagi 2 jenis:\n    <ul>\n      <li><em>Maintenance Input:</em> Energi agar sistem tetap beroperasi (contoh: arus listrik PLN, OS, perawatan rutin server).</li>\n      <li><em>Signal Input:</em> Data transaksi yang diproses untuk menghasilkan keluaran (contoh: barcode produk yang discan kasir).</li>\n    </ul>\n  </li>\n  <li><strong>Pengolahan Sistem (Process):</strong> Mesin transformasi yang mengolah masukan menjadi keluaran bernilai (algoritma komputasi, kalkulasi logika, query basis data).</li>\n  <li><strong>Keluaran Sistem (Output):</strong> Hasil olahan masukan. Berupa keluaran bermanfaat (laporan penjualan, struk kasir) maupun sisa buangan/sampah (<em>log error, limbah panas</em>).</li>\n  <li><strong>Sasaran & Tujuan (Goal & Objective):</strong> Titik akhir yang ingin dicapai. <em>Goal</em> berorientasi jangka panjang strategis, sedangkan <em>Objective</em> merupakan target operasional terukur.</li>\n</ol>\n\n<h4>2. Taksonomi & Klasifikasi Sistem</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Dimensi Klasifikasi</th><th>Kategori A</th><th>Kategori B</th><th>Contoh Pembeda Nyata</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Bentuk Wujud</strong></td><td><strong>Sistem Abstrak:</strong> Berupa ide, teologi pemikiran, atau gagasan filosofis.</td><td><strong>Sistem Fisik:</strong> Memiliki wujud kebendaan dan perangkat nyata.</td><td>Filsafat Etika Moral vs Perangkat Komputer Server</td></tr>\n      <tr><td><strong>Asal Usul Terbentuk</strong></td><td><strong>Sistem Alamiah:</strong> Terbentuk secara alami oleh hukum alam tanpa rekayasa manusia.</td><td><strong>Sistem Buatan Manusia:</strong> Dirancang dan diimplementasikan secara sadar oleh manusia.</td><td>Sistem Tata Surya vs Sistem ERP & POS Kasir</td></tr>\n      <tr><td><strong>Kepastian Operasi</strong></td><td><strong>Sistem Deterministik:</strong> Perilaku dan keluarannya dapat diprediksi secara presisi 100%.</td><td><strong>Sistem Probabilistik:</strong> Mengandung faktor ketidakpastian dan peluang.</td><td>Program kalkulator dua angka vs Sistem Prediksi Harga Saham AI</td></tr>\n      <tr><td><strong>Interaksi Lingkungan</strong></td><td><strong>Sistem Tertutup:</strong> Terisolasi mandiri, tidak menerima pengaruh dari luar.</td><td><strong>Sistem Terbuka:</strong> Berinteraksi dinamis dengan lingkungan luarnya.</td><td>Reaksi kimia tabung vakum vs Organisasi Perusahaan Modern</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>3. Nilai Informasi (Value of Information)</h4>\n<p>Informasi dinilai berharga jika mampu meningkatkan kualitas keputusan melebihi biaya perolehannya.</p>\n<blockquote style=\"border-left: 4px solid #6366F1; padding-left: 14px; margin: 12px 0; color: #E0E7FF; font-family: monospace; background: rgba(99, 102, 241, 0.08); padding: 12px 16px; border-radius: 6px;\">\n  Nilai Bersih Informasi = (Manfaat Keputusan DENGAN Informasi - Manfaat Keputusan TANPA Informasi) - Biaya Memperoleh Informasi\n</blockquote>\n<p>Sebuah sistem informasi bernilai ekonomis positif jika penambahan keuntungan akibat akurasi keputusan lebih besar daripada biaya operasional pengadaan sistem tersebut.</p>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-ksi_m3",
        "subject_id": "subject-ksi",
        "meeting_number": 3,
        "date": "2026-09-29",
        "title": "Sumber, Kualitas Informasi & Arsitektur 6 Blok Pembangun SI",
        "description": "Definisi SI Budi Sutejo, 4 pilar kualitas informasi UTS, dan arsitektur 6 blok pembangun John Burch.",
        "notes": "Materi wajib UTS: Kuasai 4 pilar mutu informasi beserta contoh kasus nyata perkuliahan.",
        "materials": [
          {
            "id": "mat_ksi_3_1",
            "type": "pdf",
            "title": "Modul Dosen P3: Mutu Informasi & Blok SI (SISTEM_INFORMASI_3.pdf)",
            "file_url": "/materials/ksi_p3_sistem_informasi_3.pdf",
            "file_size": 431592,
            "date_added": "2026-09-29"
          },
          {
            "id": "mat_ksi_3_2",
            "type": "pdf",
            "title": "Rangkuman Mandiri Mahasiswa P3 Unindra.pdf",
            "file_url": "/materials/ksi_rangkuman_mandiri_p3.pdf",
            "file_size": 14827,
            "date_added": "2026-09-30"
          }
        ],
        "transcripts": [
          {
            "id": "trans_ksi_3",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Empat pilar kualitas informasi—akurat, tepat waktu, relevan, dan lengkap—adalah tolok ukur apakah suatu laporan layak dipercaya direksi atau justru menjadi sampah komputasi (garbage in garbage out).",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Definisi Sistem Informasi Menurut Budi Sutejo (2002)</h4>\n<p>Sistem Informasi adalah suatu sistem di dalam suatu organisasi yang mempertemukan kebutuhan pengolahan transaksi harian, mendukung operasi, bersifat manajerial, dan kegiatan strategi dari suatu organisasi dan menyediakan pihak luar tertentu dengan laporan-laporan yang diperlukan.</p>\n<ul>\n  <li><strong>5 Pilar Pemanfaatan SI:</strong> Perangkat keras (hardware), perangkat lunak (software), prosedur manual (SOP), model manajemen operasional, dan basis data terstruktur (DBMS).</li>\n</ul>\n\n<h4>2. Empat Pilar Kualitas Informasi (Materi Wajib UTS & Contoh Nyata Dosen)</h4>\n<ol>\n  <li><strong>Akurat (Accurate):</strong> Informasi harus bebas dari kesalahan pencatatan, tidak bias atau menyesatkan, dan secara presisi mencerminkan kenyataan riil di lapangan.\n    <ul>\n      <li><em>Contoh Nyata Kelas RG:</em> Rekapitulasi uang kas kelas selama 4 minggu tercatat Rp 1.000.000. Saat diverifikasi fisik di dompet bendahara, jumlah uang kertas dan receh tepat Rp 1.000.000. Jika uang fisik hanya ada Rp 900.000, informasi tersebut cacat akurasi.</li>\n    </ul>\n  </li>\n  <li><strong>Tepat Waktu (Timeliness):</strong> Informasi harus tersedia pada momentum keputusan berlangsung sebelum peluang bisnis atau tindakan mitigasi hilang.\n    <ul>\n      <li><em>Contoh Nyata Kelas RG:</em> Mahasiswa mentransfer uang SPP melalui m-banking. Notifikasi mutasi sukses masuk seketika dalam hitungan detik (real-time) sehingga denda keterlambatan tidak terbit, bukan baru muncul 3 hari kemudian.</li>\n    </ul>\n  </li>\n  <li><strong>Relevan (Relevance):</strong> Informasi harus memiliki keterkaitan langsung dan kegunaan nyata dengan ranah tugas pihak yang menerima laporan.\n    <ul>\n      <li><em>Contoh Nyata Kelas RG:</em> Manajer Pemasaran membutuhkan rekap tren produk terlaris di kasir, bukan rincian tegangan listrik mesin pabrik atau absensi staf kebersihan.</li>\n    </ul>\n  </li>\n  <li><strong>Lengkap (Completeness):</strong> Informasi harus menyajikan seluruh fakta kunci secara komprehensif tanpa ada poin penting yang disembunyikan.\n    <ul>\n      <li><em>Contoh Nyata Kelas RG:</em> Rekam medis pasien memuat nama lengkap, riwayat penyakit jantung, riwayat alergi antibiotik, hingga golongan darah demi mencegah malpraktik dosis obat.</li>\n    </ul>\n  </li>\n</ol>\n\n<h4>3. Arsitektur 6 Blok Pembangun Sistem Informasi (John Burch Framework)</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Blok Pembangun</th><th>Peran & Fungsi Arsitektural</th><th>Komponen Nyata di Lapangan</th></tr></thead>\n    <tbody>\n      <tr><td><strong>1. Blok Masukan (Input Block)</strong></td><td>Menangkap data transaksi mentah dari pengguna.</td><td>Keyboard, barcode scanner kasir, form pendaftaran web, sensor IoT.</td></tr>\n      <tr><td><strong>2. Blok Model (Model Block)</strong></td><td>Logika matematika, aturan bisnis, dan prosedur kalkulasi.</td><td>Rumus diskon belanja, algoritma perhitungan pajak PPN, logika seleksi kelulusan.</td></tr>\n      <tr><td><strong>3. Blok Keluaran (Output Block)</strong></td><td>Menyajikan informasi berkualitas bagi pemakai akhir.</td><td>Struk kasir belanja, dashboard analitik grafik, laporan PDF laba-rugi bulanan.</td></tr>\n      <tr><td><strong>4. Blok Teknologi (Technology Block)</strong></td><td>Mesin fisik dan piranti lunak penggerak komputasi.</td><td>Server fisik, PC terminal kasir, sistem operasi Linux/Windows, jaringan switch & Wi-Fi.</td></tr>\n      <tr><td><strong>5. Blok Basis Data (Database Block)</strong></td><td>Tempat penyimpanan kumpulan data terpadu dan aman.</td><td>PostgreSQL, MySQL, tabel relasional, media storage SSD server.</td></tr>\n      <tr><td><strong>6. Blok Kendali (Control Block)</strong></td><td>Melindungi seluruh aset sistem dari kerusakan dan kejahatan siber.</td><td>Enkripsi password bcrypt, otentikasi peran (RBAC), firewall, dan pencadangan (backup) berkala.</td></tr>\n    </tbody>\n  </table>\n</div>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-ksi_m4",
        "subject_id": "subject-ksi",
        "meeting_number": 4,
        "date": "2026-10-06",
        "title": "5 Aktivitas SI, Hubungan SI-TI, Tingkat Manajemen & Aturan UTS Open Book",
        "description": "Lima siklus aktivitas SI, hubungan hierarkis SI dan TI, piramida manajemen Anthony, dan taksonomi keputusan Herbert Simon.",
        "notes": "Kisi-kisi utama UTS: Perbedaan SI vs TI dan karakteristik informasi pada piramida manajemen.",
        "materials": [
          {
            "id": "mat_ksi_4_1",
            "type": "pdf",
            "title": "Modul Dosen P4: Aktivitas SI & Manajemen (SISTEM_INFORMASI_4.pdf)",
            "file_url": "/materials/ksi_p4_sistem_informasi_4.pdf",
            "file_size": 674655,
            "date_added": "2026-10-06"
          },
          {
            "id": "mat_ksi_4_2",
            "type": "pdf",
            "title": "Rangkuman Kompendium Lengkap UTS KSI - Haikel Saleh.pdf",
            "file_url": "/materials/ksi_rangkuman_uts_haikel.pdf",
            "file_size": 247047,
            "date_added": "2026-10-06"
          }
        ],
        "transcripts": [
          {
            "id": "trans_ksi_4",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Hubungan SI dan TI adalah hubungan subsistem. Teknologi Informasi hanyalah instrumen fisik atau piranti lunak, sedangkan Sistem Informasi mencakup manusia, aturan SOP bisnis, dan manajemen pengambilan keputusan secara utuh.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Lima Aktivitas Pokok Sistem Informasi</h4>\n<ol>\n  <li><strong>Input Sumber Daya Data (Input):</strong> Menangkap data mentah dari transaksi. Contoh: Dosen menginput presensi kehadiran mahasiswa kelas RG di portal akademik setiap pertemuan.</li>\n  <li><strong>Pemrosesan Data Menjadi Informasi (Processing):</strong> Mengolah data masukan sesuai formula kurikulum. Contoh: Komputer menghitung bobot nilai presensi (10%), tugas mandiri (20%), UTS (30%), dan UAS (40%).</li>\n  <li><strong>Keluaran Produk Informasi (Output):</strong> Menyajikan hasil olahan yang bernilai bagi pengguna. Contoh: Tampilnya Nilai Akhir angka (82) dan huruf mutu (A- atau C) pada portal mahasiswa.</li>\n  <li><strong>Penyimpanan Sumber Daya Data (Storage):</strong> Menyimpan arsip data secara aman dan terorganisasi di media penyimpanan database server LMS kampus.</li>\n  <li><strong>Pengendalian Kinerja Sistem (Control & Feedback):</strong> Evaluasi apakah sistem berjalan sesuai standar kinerja dan menghasilkan umpan balik perbaikan. Contoh: Mahasiswa yang nilainya di bawah ambang 65 mengambil keputusan mengulang mata kuliah di semester berikutnya.</li>\n</ol>\n\n<h4>2. Hubungan Sistem Informasi (SI) dan Teknologi Informasi (TI) — SOAL KISI-KISI UTS!</h4>\n<ul>\n  <li><strong>Persamaan:</strong> Keduanya bergerak dalam ranah pengelolaan dan pengolahan data menjadi informasi bermanfaat.</li>\n  <li><strong>Hubungan Struktural:</strong> <strong>Teknologi Informasi (TI) adalah bagian (sub-sistem / enabler) dari Sistem Informasi (SI)</strong>. Suatu SI tersusun atas beberapa komponen TI (hardware, software, basis data, jaringan telekomunikasi) yang dipadukan dengan manusia (brainware) dan prosedur bisnis.</li>\n  <li><strong>Ketergantungan Operasional:</strong> Jika komponen TI rusak, maka operasional SI akan lumpuh.\n    <ul>\n      <li><em>Analogi Nyata Dosen:</em> Jika ponsel atau laptop kita jatuh dan hardware-nya rusak, maka sistem informasi di dalamnya (LMS kampus, m-banking, aplikasi kasir) tidak dapat diakses dan tidak dapat difungsikan sama sekali.</li>\n    </ul>\n  </li>\n</ul>\n\n<h4>3. Piramida Tiga Tingkat Manajemen (Robert N. Anthony Framework)</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Tingkatan Manajemen</th><th>Aktor Utama</th><th>Fokus Keputusan</th><th>Karakteristik Informasi yang Dibutuhkan</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Top Management (Puncak)</strong></td><td>Direktur Utama, CEO, Rektor</td><td>Perencanaan strategis jangka panjang (3–5 tahun ke depan).</td><td>Informasi ringkas, global, tren eksternal pasar, berorientasi masa depan.</td></tr>\n      <tr><td><strong>Middle Management (Madya)</strong></td><td>Manajer Divisi, Kepala Cabang, Dekan</td><td>Pengendalian taktis operasional (bulanan s.d. tahunan).</td><td>Laporan perbandingan realisasi vs anggaran biaya, tren produktivitas antar-tim.</td></tr>\n      <tr><td><strong>Lower Management (Lini Pertama)</strong></td><td>Supervisor, Kepala Regu Kasir</td><td>Pengendalian teknis harian.</td><td>Informasi sangat terperinci, detail atomik, bersumber internal, real-time transaksi harian.</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>4. Taksonomi Keputusan Menurut Herbert A. Simon</h4>\n<ul>\n  <li><strong>Keputusan Terstruktur (Structured):</strong> Berulang, rutin, memiliki SOP baku terdefinisi, dapat diotomatisasi 100% oleh software (contoh: kalkulasi denda keterlambatan buku, perhitungan potongan diskon kasir).</li>\n  <li><strong>Keputusan Semi-Terstruktur (Semi-Structured):</strong> Sebagian dapat dihitung sistem, namun sebagian lagi membutuhkan pertimbangan intuisi manusia (contoh: persetujuan limit kredit perbankan, evaluasi alokasi anggaran promosi).</li>\n  <li><strong>Keputusan Tidak Terstruktur (Unstructured):</strong> Kompleks, baru, tidak berpola, sarat ketidakpastian tinggi, mengandalkan visi dan pengalaman manusia (contoh: ekspansi pembukaan pabrik ke luar negeri, pergantian model bisnis inti).</li>\n</ul>\n\n<h4>5. PANDUAN PENTING UTS & TUGAS KELOMPOK</h4>\n<ul>\n  <li><strong>Sifat Ujian UTS:</strong> <strong>OPEN BOOK KHUSUS BUKU CATATAN TULISAN TANGAN SENDIRI</strong>. Dilarang keras membawa fotokopian slide PPT dosen!</li>\n  <li><strong>Tugas Presentasi Kelompok:</strong> Wajib membuat luaran dalam bentuk <strong>VIDEO DIGITAL EDUKASI</strong>. Kelompok Haikel Saleh mengambil topik <strong>Pertemuan 11: E-Business dan E-Commerce</strong>.</li>\n</ul>",
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
    "lecturer": "Tim Dosen MKWK Bahasa Indonesia Unindra",
    "schedule": "Senin • 10:00 - 11:40 WIB • Ruang R.4.4-4",
    "room": "Ruang R.4.4-4",
    "color": "#EC4899",
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
        "description": "Dua belas ciri hakiki bahasa, dualisme kedudukan bahasa Indonesia (nasional vs negara), dan akar Melayu Riau.",
        "notes": "Materi UTS: Pahami landasan yuridis Sumpah Pemuda 1928 vs UUD 1945 Pasal 36.",
        "materials": [
          {
            "id": "mat_indo_1_1",
            "type": "pdf",
            "title": "Modul Dosen P1: Hakikat & Kedudukan Bahasa (1789103790.pdf)",
            "file_url": "/materials/indo_p1_hakikat_bahasa.pdf",
            "file_size": 1366043,
            "date_added": "2026-09-15"
          },
          {
            "id": "mat_indo_1_2",
            "type": "pdf",
            "title": "Panduan Pembuatan Proposal & Laporan MKWK 2023.pdf",
            "file_url": "/materials/indo_panduan_mkwk_2023.pdf",
            "file_size": 181940,
            "date_added": "2026-09-15"
          }
        ],
        "transcripts": [
          {
            "id": "trans_indo_1",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Harimurti Kridalaksana menegaskan bahasa adalah sistem lambang bunyi yang arbitrer. Bahasa Indonesia berakar dari dialek Melayu Riau Tinggi yang menjadi Lingua Franca perniagaan Nusantara.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Hakikat Bahasa Menurut Pakar Linguistik Terkemuka</h4>\n<ul>\n  <li><strong>Harimurti Kridalaksana:</strong> <em>\"Bahasa adalah sistem lambang bunyi yang arbitrer yang dipergunakan oleh para anggota kelompok sosial untuk bekerja sama, berkomunikasi, dan mengidentifikasikan diri.\"</em></li>\n  <li><strong>Jos Daniel Parera:</strong> Bahasa sebagai instrumen komunikasi antarmanusia memiliki fungsi primer mempermudah interaksi sosial dan penyampaian gagasan intelektual.</li>\n  <li><strong>Kamus Besar Bahasa Indonesia (KBBI):</strong> Sistem lambang bunyi berartikulasi yang arbitrer dan konvensional yang dipakai sebagai alat komunikasi sekelompok masyarakat.</li>\n</ul>\n\n<h4>2. Dua Belas Ciri Hakiki Bahasa (Komprehensif)</h4>\n<ol>\n  <li><strong>Bersistem:</strong> Memiliki pola keteraturan terstruktur (subjek-predikat-objek-keterangan). Kalimat tidak dapat disusun acak tanpa kaidah sintaksis.</li>\n  <li><strong>Lambang:</strong> Berwujud satuan simbol bunyi vokal maupun konsonan yang mewakili benda, konsep abstrak, atau perbuatan nyata.</li>\n  <li><strong>Bunyi:</strong> Dihasilkan melalui getaran udara oleh organ alat ucap manusia (<em>organs of speech</em>: lidah, bibir, pita suara).</li>\n  <li><strong>Bermakna:</strong> Memiliki konsep rujukan semantik yang dapat dipahami dan disepakati oleh lawan tutur.</li>\n  <li><strong>Arbitrer (Manasuka):</strong> Tidak ada relasi wajib alami antara lambang bunyi dengan wujud fisiknya (contoh: mengapa hewan berkaki empat disebut \"kuda\", bukan \"kursi\", semata-mata adalah manasuka penuturnya).</li>\n  <li><strong>Konvensional:</strong> Didasarkan pada kesepakatan konsensus mufakat antarseluruh penutur dalam masyarakat bahasa tersebut.</li>\n  <li><strong>Produktif:</strong> Dari perpaduan 26 huruf alfabet dapat dihasilkan kata, frasa, dan kalimat dalam kuantitas tak terhingga.</li>\n  <li><strong>Unik:</strong> Memiliki ciri khas tata bahasa spesifik (bahasa Indonesia tidak mengenal konjugasi waktu lampau/present seperti bahasa Inggris).</li>\n  <li><strong>Universal:</strong> Memiliki kesamaan unsur biologis tutur (semua bahasa di dunia mengenal vokal dan konsonan, serta fungsi predikatif).</li>\n  <li><strong>Dinamis:</strong> Tumbuh berkembang dan menyerap kosakata sains dan teknologi baru seiring kemajuan zaman.</li>\n  <li><strong>Bervariasi:</strong> Memiliki keragaman dialek kedaerahan, kronolek kurun waktu, dan sosiolek jabatan akademis.</li>\n  <li><strong>Manusiawi:</strong> Hanya dimiliki dan digunakan secara sempurna melalui proses kognisi otak manusia.</li>\n</ol>\n\n<h4>3. Dualisme Kedudukan Bahasa Indonesia</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Aspek Pembeda</th><th>Bahasa Nasional</th><th>Bahasa Negara (Resmi)</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Landasan Yuridis</strong></td><td><strong>Ikrar Sumpah Pemuda 28 Oktober 1928</strong> (Butir ke-3)</td><td><strong>UUD 1945 Bab XV Pasal 36</strong> (Disahkan 18 Agustus 1945)</td></tr>\n      <tr><td><strong>Fungsi 1</strong></td><td>Lambang kebanggaan kedaulatan kebangsaan.</td><td>Bahasa resmi kenegaraan dalam tata kelola administrasi publik.</td></tr>\n      <tr><td><strong>Fungsi 2</strong></td><td>Lambang identitas pemersatu nasional di forum pergaulan internasional.</td><td>Bahasa pengantar resmi pada seluruh jenjang institusi pendidikan formal.</td></tr>\n      <tr><td><strong>Fungsi 3</strong></td><td>Alat perhubungan antardaerah, antarsuku, dan antarkebudayaan.</td><td>Alat komunikasi perhubungan nasional dalam perencanaan dan pembangunan.</td></tr>\n      <tr><td><strong>Fungsi 4</strong></td><td>Alat pemersatu aneka ragam suku bangsa tanpa menghilangkan bahasa ibu daerah.</td><td>Media pengembangan dan penyebarluasan ilmu pengetahuan, teknologi, dan seni.</td></tr>\n    </tbody>\n  </table>\n</div>\n<p><em>Jejak Sejarah:</em> Bahasa Indonesia berasal dari rumpun <strong>Austronesia</strong> cabang <strong>Melayu Riau Tinggi</strong> yang telah menjadi <em>Lingua Franca</em> sejak abad VII, terbukti pada epigrafi Prasasti Kedukan Bukit (683 M) dan Talang Tuwo (684 M) di Palembang.</p>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-indo_m2",
        "subject_id": "subject-indo",
        "meeting_number": 2,
        "date": "2026-09-22",
        "title": "Menumbuhkan Sikap Positif Terhadap Bahasa Indonesia",
        "description": "Urgensi sikap positif (riset Harvard 85%), 3 pilar sikap E. Zaenal Arifin, dan kaidah emas berbahasa yang baik dan benar.",
        "notes": "Materi UTS: Pahami 3 komponen sikap (kognisi, afeksi, konasi) dan distingsi bahasa baik vs benar.",
        "materials": [
          {
            "id": "mat_indo_2_1",
            "type": "pdf",
            "title": "Modul Dosen P2: Sikap Positif Berbahasa (1789341355.pdf)",
            "file_url": "/materials/indo_p2_sikap_positif_bahasa.pdf",
            "file_size": 2851107,
            "date_added": "2026-09-22"
          },
          {
            "id": "mat_indo_2_2",
            "type": "pdf",
            "title": "Panduan Pembuatan Proposal & Laporan MKWK 2023.pdf",
            "file_url": "/materials/indo_panduan_mkwk_2023.pdf",
            "file_size": 181940,
            "date_added": "2026-09-22"
          }
        ],
        "transcripts": [
          {
            "id": "trans_indo_2",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Sikap positif berbahasa diwujudkan dalam kesetiaan, kebanggaan, dan kesadaran kaidah. Berbahasa yang baik berarti kontekstual, berbahasa yang benar berarti tunduk pada EYD V dan kaidah baku KBBI.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Urgensi Sikap Positif dalam Keberhasilan Akademis</h4>\n<p>Merujuk pada temuan riset Harvard University & pakar Urban: <strong>85% kesuksesan seorang profesional ditentukan oleh sikapnya (attitude)</strong>, sedangkan hanya 15% ditentukan oleh kecerdasan teknis semata. Karakter sarjana komputasi berawal dari sikap positif dalam mengomunikasikan gagasan teknis secara tertib dan santun.</p>\n\n<h4>2. Tiga Pilar Sikap Positif Bahasa Menurut E. Zaenal Arifin (2009)</h4>\n<ol>\n  <li><strong>Kesetiaan Berbahasa (Language Loyalty):** Sikap batin untuk mempertahankan kemandirian bahasa Indonesia dan mencegah masuknya campur kode atau istilah asing secara latah tanpa alasan keilmuan.</li>\n  <li><strong>Kebanggaan Berbahasa (Language Pride):** Perasaan bangga mengutamakan bahasa Indonesia sebagai lambang jati diri dan harga diri kedaulatan bangsa dalam interaksi ilmiah.</li>\n  <li><strong>Kesadaran akan Kaidah Bahasa (Awareness of Norms):** Kesadaran sukarela untuk selalu menggunakan aturan ejaan baku (EYD V) dan tata kalimat resmi pada situasi formal akademik.</li>\n</ol>\n\n<h4>3. Tiga Komponen Sikap Berbahasa (Lambert & Chaer)</h4>\n<ul>\n  <li><strong>Komponen Kognisi (Pengetahuan):</strong> Penguasaan aturan ejaan, pilihan diksi, pembentukan istilah, dan struktur kalimat SPOK baku.</li>\n  <li><strong>Komponen Afeksi (Emosi/Perasaan):</strong> Rasa cinta, bangga, dan penghargaan mendalam terhadap nilai luhur bahasa persatuan.</li>\n  <li><strong>Komponen Konasi (Perilaku Nyata):</strong> Tindakan konkret dalam menulis laporan ilmiah, skripsi, dan berkomunikasi resmi tanpa salah eja.</li>\n</ul>\n\n<h4>4. Kaidah Emas: Berbahasa yang BAIK dan BENAR</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Prinsip</th><th>Definisi Operasional</th><th>Kriteria Penilaian</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Bahasa yang Baik</strong></td><td>Penggunaan bahasa yang tepat sasaran dan serasi dengan konteks situasi komunikasi lawan bicara.</td><td>Santai dan luwes saat berdiskusi kawan sebaya; sopan, formal, dan objektif saat mempresentasikan hasil riset di depan dosen.</td></tr>\n      <tr><td><strong>Bahasa yang Benar</strong></td><td>Penggunaan bahasa yang tunduk patuh pada kaidah tata bahasa baku, EYD Edisi V, dan lema kamus KBBI.</td><td>Penulisan kata baku, penerapan fungsi subjek dan predikat yang utuh, serta ketepatan tanda baca.</td></tr>\n    </tbody>\n  </table>\n</div>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-indo_m3",
        "subject_id": "subject-indo",
        "meeting_number": 3,
        "date": "2026-09-29",
        "title": "EYD Edisi V: Pemakaian Huruf, Tanda Baca, dan Penulisan Kata",
        "description": "Pembaruan EYD Edisi V, diakritik e pepet vs taling, monoftong baru eu, aturan kapital geografi, dan preposisi vs prefiks.",
        "notes": "Materi kritis UTS: Jangan tertukar penulisan kata depan di (terpisah) dengan awalan di- (serangkai).",
        "materials": [
          {
            "id": "mat_indo_3_1",
            "type": "pdf",
            "title": "Modul Dosen P3: EYD Edisi V Lengkap (OBE 99 Halaman).pdf",
            "file_url": "/materials/indo_p3_eyd_v.pdf",
            "file_size": 1059650,
            "date_added": "2026-09-29"
          },
          {
            "id": "mat_indo_3_2",
            "type": "pdf",
            "title": "Panduan Pembuatan Proposal & Laporan MKWK 2023.pdf",
            "file_url": "/materials/indo_panduan_mkwk_2023.pdf",
            "file_size": 181940,
            "date_added": "2026-09-29"
          }
        ],
        "transcripts": [
          {
            "id": "trans_indo_3",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: EYD Edisi V resmi diluncurkan tahun 2022 menggantikan PUEBI. Perubahan signifikan mencakup penambahan monoftong eu, penegasan diakritik huruf e, dan penulisan bentuk terikat.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Pembaruan Fonologis dalam EYD Edisi V (Keputusan Kepala Badan Bahasa No. 0424/2022)</h4>\n<ul>\n  <li><strong>26 Huruf Alfabet Standar:</strong> 5 vokal (A, E, I, O, U) dan 21 konsonan.</li>\n  <li><strong>Diakritik Huruf E Pepet [ə] vs E Taling [e]:</strong>\n    Untuk mencegah ambigu makna dalam teks formal, tanda diakritik (ê) dapat dicantumkan pada e pepet:\n    <ul>\n      <li><code>teras</code> (lantai pelataran rumah) vs <code>têras</code> (pejabat utama perbankan/pemerintahan).</li>\n      <li><code>seri</code> (berurutan) vs <code>sêri</code> (pertandingan imbang tanpa pemenang).</li>\n      <li><code>seret</code> (menarik paksa benda berat) vs <code>sêrêt</code> (tersendat saat menelan di tenggorokan).</li>\n    </ul>\n  </li>\n  <li><strong>1 Monoftong Baru:</strong> Gabungan vokal <code>eu</code> yang dilafalkan [ɘ] khas serapan bahasa daerah Nusantara (contoh: <em>eurih</em>, <em>seudati</em>, <em>sadeu</em>).</li>\n  <li><strong>4 Diftong Baku:</strong> Gabungan vokal <code>ai</code>, <code>au</code>, <code>ei</code>, <code>oi</code> (contoh: <em>aikido, kailan, pandai, taufik, survei, amboi</em>).</li>\n</ul>\n\n<h4>2. Kaidah Kritis Huruf Kapital Nama Geografi</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Aturan EYD V</th><th>Contoh Penulisan Benar</th><th>Jebakan Soal UTS yang Salah</th></tr></thead>\n    <tbody>\n      <tr><td>Wajib kapital jika diikuti nama diri geografis.</td><td><em>Gunung Rinjani, Danau Toba, Selat Sunda, Jalan Margonda</em></td><td>❌ <em>gunung Rinjani, Danau toba</em></td></tr>\n      <tr><td>Tulis huruf kecil jika bukan nama diri geografis.</td><td><em>berlayar ke selat, mendaki gunung terjal</em></td><td>❌ <em>berlayar ke Selat</em></td></tr>\n      <tr><td><strong>Nama jenis makanan/benda:</strong> Wajib huruf kecil meskipun memuat nama geografi.</td><td><em>jeruk bali, kunci inggris, pisang ambon, petai cina, gula jawa</em></td><td>❌ <em>Jeruk Bali, Kunci Inggris</em></td></tr>\n      <tr><td><strong>Corak khas budaya/karya:</strong> Wajib huruf kapital.</td><td><em>batik Pekalongan, tarian Bali, soto Madura, lagu Sunda</em></td><td>❌ <em>batik pekalongan, tarian bali</em></td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>3. Penulisan Kata Depan (Preposisi) vs Awalan (Prefiks)</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Kategori</th><th>Fungsi Semantik</th><th>Aturan Baku EYD</th><th>Contoh Benar</th><th>Bentuk Salah (Fatal)</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Kata Depan (<code>di</code>, <code>ke</code>, <code>dari</code>)</strong></td><td>Menunjukkan arah, tempat, atau lokasi asal.</td><td><strong>DIPISAH</strong> dengan spasi satu ketukan.</td><td><code>di kampus, ke Jakarta, dari Depok</code></td><td>❌ <em>dikampus, kejakarta</em></td></tr>\n      <tr><td><strong>Awalan (<code>di-</code>, <code>ke-</code>)</strong></td><td>Membentuk kata kerja pasif atau kata benda turunan.</td><td><strong>DISERANGKAIKAN</strong> tanpa spasi.</td><td><code>ditulis, dikompilasi, ketua, kehendak</code></td><td>❌ <em>di tulis, di kompilasi</em></td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>4. Kaidah Tanda Baca Penting</h4>\n<ul>\n  <li><strong>Tanda Koma (,):</strong> Wajib dipakai sebelum kata penghubung perincian terakhir (contoh: <em>buku, pena, dan penggaris</em>), serta wajib setelah konjungsi antarkalimat (contoh: <em>Oleh karena itu, ...</em>; <em>Namun, ...</em>).</li>\n  <li><strong>Tanda Titik Dua (:):</strong> Dipakai pada akhir suatu pernyataan lengkap yang diikuti perincian atau penjelasan. Jika perincian itu merupakan kelanjutan langsung struktur kalimat, tanda titik dua <strong>TIDAK</strong> boleh digunakan.</li>\n  <li><strong>Tanda Hubung (-) vs Tanda Pisah (— / em dash):</strong> Tanda hubung merangkai unsur kata ulang (<em>anak-anak</em>) atau bentuk terikat se- (<em>se-DKI</em>). Tanda pisah menegaskan penyisipan keterangan penjelas di luar kalimat utama (<em>kemerdekaan bangsa—saya yakin akan tercapai—diperjuangkan oleh rakyat</em>).</li>\n</ul>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-indo_m4",
        "subject_id": "subject-indo",
        "meeting_number": 4,
        "date": "2026-10-06",
        "title": "Bentuk dan Pilihan Kata (Diksi) & Aturan Hukum K/T/S/P",
        "description": "Taksonomi bentuk kata, hukum emas peluluhan fonem KTSP (luluh vokal vs kekal kluster), dan syarat diksi akademik.",
        "notes": "Materi langganan UTS: Kuasai hukum peluluhan fonem K/T/S/P pada pembentukan kata turunan.",
        "materials": [
          {
            "id": "mat_indo_4_1",
            "type": "pdf",
            "title": "Modul Dosen P4: Bentuk, Diksi Kata & Hukum KTSP (1790563821.pdf)",
            "file_url": "/materials/indo_p4_diksi_kata.pdf",
            "file_size": 573788,
            "date_added": "2026-10-06"
          },
          {
            "id": "mat_indo_4_2",
            "type": "pdf",
            "title": "Panduan Pembuatan Proposal & Laporan MKWK 2023.pdf",
            "file_url": "/materials/indo_panduan_mkwk_2023.pdf",
            "file_size": 181940,
            "date_added": "2026-10-06"
          }
        ],
        "transcripts": [
          {
            "id": "trans_indo_4",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Dosen menggarisbawahi kaidah hukum peluluhan K/T/S/P. Jika huruf kedua vokal, fonem pertama luluh menjadi bunyi sengau. Namun jika huruf kedua konsonan kluster, fonem tidak boleh luluh.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Taksonomi Bentuk Kata Bahasa Indonesia</h4>\n<ol>\n  <li><strong>Kata Dasar:</strong> Bentuk morfem bebas paling sederhana yang belum mendapat imbuhan (contoh: <em>baca, tulis, kode, simpan</em>).</li>\n  <li><strong>Kata Berimbuhan (Afiksasi):</strong> Morfem terikat yang dibubuhkan pada bentuk dasar:\n    <ul>\n      <li><em>Prefiks (Awalan):</em> <code>ber-, di-, ke-, me-, pe-, se-, ter-</code></li>\n      <li><em>Infiks (Sisipan):</em> <code>-el-</code> (telunjuk), <code>-er-</code> (gerigi), <code>-em-</code> (gemetar)</li>\n      <li><em>Sufiks (Akhiran):</em> <code>-an, -kan, -i</code></li>\n      <li><em>Konfiks (Gabungan Serentak):</em> <code>ke-...-an, pe-...-an, per-...-an</code></li>\n    </ul>\n  </li>\n  <li><strong>Kata Ulang (Reduplikasi):</strong> Dwipurwa (pepohonan), dwilingga (buku-buku), salin suara (sayur-mayur).</li>\n  <li><strong>Akronim:</strong> Kependekan kata yang dilafalkan sebagai satuan wajar (contoh: <em>Unindra, pemilu, rudal, iptek</em>).</li>\n</ol>\n\n<h4>2. HUKUM EMAS PELULUHAN FONEM K / T / S / P (SANGAT SERING KELUAR DI UTS!)</h4>\n<p>Aturan pengimbuhan awalan <code>me-</code> atau <code>pe-</code> pada bentuk dasar berfonem awal K, T, S, P:</p>\n\n<h5>Aturan A (WAJIB LULUH):</h5>\n<p>Jika kata dasar diawali fonem <strong>K, T, S, P</strong> dan huruf KEDUA adalah <strong>HURUF VOKAL (a, i, u, e, o)</strong>, maka fonem tersebut <strong>WAJIB LULUH</strong> menjadi bunyi sengau nasal:</p>\n<ul>\n  <li><strong>K + Vokal ➔ Luluh Menjadi Meng- / Peng-:</strong>\n    <ul>\n      <li><code>me-</code> + <strong>k</strong>upas ➔ <strong>mengupas</strong> (BUKAN <em>mengkupas</em>)</li>\n      <li><code>pe-</code> + <strong>k</strong>elola ➔ <strong>pengelola</strong> (BUKAN <em>pengkelola</em>)</li>\n    </ul>\n  </li>\n  <li><strong>T + Vokal ➔ Luluh Menjadi Men- / Pen-:</strong>\n    <ul>\n      <li><code>me-</code> + <strong>t</strong>ulis ➔ <strong>menulis</strong> (BUKAN <em>mentulis</em>)</li>\n      <li><code>pe-</code> + <strong>t</strong>olong ➔ <strong>penolong</strong> (BUKAN <em>pentolong</em>)</li>\n    </ul>\n  </li>\n  <li><strong>S + Vokal ➔ Luluh Menjadi Meny- / Peny-:</strong>\n    <ul>\n      <li><code>me-</code> + <strong>s</strong>iram ➔ <strong>menyiram</strong> (BUKAN <em>mensiram</em>)</li>\n      <li><code>pe-</code> + <strong>s</strong>ewa ➔ <strong>penyewa</strong> (BUKAN <em>ponsewa / pensewa</em>)</li>\n    </ul>\n  </li>\n  <li><strong>P + Vokal ➔ Luluh Menjadi Mem- / Pem-:</strong>\n    <ul>\n      <li><code>me-</code> + <strong>p</strong>ilih ➔ <strong>memilih</strong> (BUKAN <em>mempilih</em>)</li>\n      <li><code>pe-</code> + <strong>p</strong>andu ➔ <strong>pemandu</strong> (BUKAN <em>pempandu</em>)</li>\n    </ul>\n  </li>\n</ul>\n\n<h5>Aturan B (TIDAK LULUH / KEKAL):</h5>\n<p>Jika kata dasar diawali fonem <strong>K, T, S, P</strong> dan huruf KEDUA adalah <strong>HURUF KONSONAN (Gugus Konsonan / Kluster)</strong>, maka fonem tersebut <strong>TIDAK BOLEH LULUH</strong>:</p>\n<ul>\n  <li><code>me-</code> + <strong>kl</strong>asifikasi ➔ <strong>mengklasifikasi</strong> (huruf kedua konsonan 'l')</li>\n  <li><code>me-</code> + <strong>tr</strong>ansfer ➔ <strong>mentransfer</strong> (huruf kedua konsonan 'r')</li>\n  <li><code>me-</code> + <strong>st</strong>empel ➔ <strong>menstempel</strong> (huruf kedua konsonan 't')</li>\n  <li><code>me-</code> + <strong>pr</strong>ogram ➔ <strong>memprogram</strong> (huruf kedua konsonan 'r')</li>\n  <li><em>Nomina Pelaku & Proses:</em> Bentuk turunan <code>pe-</code> + program dapat membentuk nomina pelaku: <strong>pemrogram</strong> atau proses teknis: <strong>pemrograman</strong>.</li>\n</ul>\n\n<h4>3. Tiga Syarat Pemilihan Kata (Diksi) dalam Tulisan Akademik</h4>\n<ol>\n  <li><strong>Ketepatan (Accuracy):</strong> Mampu membedakan makna denotatif (makna kamus harfiah) dengan konotatif (makna kiasan asosiatif), serta menghindari kata-kata ambigu.</li>\n  <li><strong>Kesesuaian (Appropriateness):</strong> Memilih kata yang serasi dengan laras ilmiah akademik (gunakan <em>membuat</em>, bukan <em>bikin</em>; gunakan <em>mengapa</em>, bukan <em>kenapa</em>; gunakan <em>karena</em>, bukan <em>lantaran</em>).</li>\n  <li><strong>Kelaziman (Idiomatic Usage):** Memperhatikan pasangan kata kolokasi yang lazim dalam tata kalimat formal (contoh: <em>menyampaikan pendapat</em>, bukan <em>melontarkan omongan</em>).</li>\n</ol>",
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
    "lecturer": "Tim Dosen Algoritma FTIK Unindra",
    "schedule": "Selasa • 07:30 - 09:10 WIB • Ruang R.4.5-3",
    "room": "Ruang R.4.5-3",
    "color": "#3B82F6",
    "target_meetings": 16,
    "semester": "Semester 1",
    "academic_year": "2026/2027",
    "meetings": [
      {
        "id": "subject-algo_m1",
        "subject_id": "subject-algo",
        "meeting_number": 1,
        "date": "2026-09-16",
        "title": "Pengantar Logika Komputasi, Etimologi & Kriteria Algoritma",
        "description": "Sejarah Al-Khawarizmi, rumus Niklaus Wirth (Program = Algoritma + Struktur Data), dan 5 kriteria Donald Knuth.",
        "notes": "Materi pokok: Pahami rumus Niklaus Wirth dan 5 kriteria mutlak algoritma yang baik.",
        "materials": [
          {
            "id": "mat_algo_1_1",
            "type": "pdf",
            "title": "Modul Dosen P1: Pengantar Logika & Algoritma.pdf",
            "file_url": "/materials/algo_p1_pengantar_algoritma.pdf",
            "file_size": 563500,
            "date_added": "2026-09-16"
          },
          {
            "id": "mat_algo_1_2",
            "type": "pdf",
            "title": "RPS Kurikulum Resmi Algoritma 1 Unindra.pdf",
            "file_url": "/materials/algo_rps_algoritma_1.pdf",
            "file_size": 397843,
            "date_added": "2026-09-16"
          },
          {
            "id": "mat_algo_1_3",
            "type": "pdf",
            "title": "Rangkuman Mandiri Mahasiswa P1-P3.pdf",
            "file_url": "/materials/algo_rangkuman_mandiri_p1_p3.pdf",
            "file_size": 592295,
            "date_added": "2026-09-16"
          }
        ],
        "transcripts": [
          {
            "id": "trans_algo_1",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Algoritma adalah urutan langkah logis penyelesaian masalah yang disusun secara sistematis. Suatu algoritma wajib berhenti setelah sejumlah langkah berhingga, tidak boleh mengalami perulangan abadi tak berujung.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Sejarah & Asal Usul Etimologis Algoritma</h4>\n<p>Kata <strong>Algoritma</strong> berasal dari nama ilmuwan jenius muslim abad ke-9, <strong>Abu Ja'far Muhammad bin Musa Al-Khawarizmi</strong> (780–850 M) yang mengabdi di <em>Bayt al-Hikmah</em> Baghdad. Lewat karyanya <em>Al-Kitab al-mukhtasar fi hisab al-jabr wa'l-muqabala</em>, beliau merumuskan dasar sistem penomoran desimal dan Aljabar modern. Di dunia barat, namanya dilafalkan menjadi <em>Algorismus</em>, kemudian berevolusi menjadi istilah <em>Algorithm</em>.</p>\n\n<h4>2. Definisi & Rumus Klasik Niklaus Wirth</h4>\n<blockquote style=\"border-left: 4px solid #3B82F6; padding-left: 14px; margin: 12px 0; color: #DBEAFE; font-family: monospace; font-size: 15px; background: rgba(59, 130, 246, 0.08); padding: 12px 16px; border-radius: 6px;\">\n  PROGRAM = ALGORITMA + STRUKTUR DATA\n</blockquote>\n<ul>\n  <li><strong>Algoritma:</strong> Alur langkah logika dan instruksi bertahap pemecah masalah.</li>\n  <li><strong>Struktur Data:</strong> Cara penyimpanan, pengorganisasian, dan representasi memori data di komputer.</li>\n</ul>\n\n<h4>3. Lima Kriteria Mutlak Algoritma Baik menurut Donald E. Knuth</h4>\n<ol>\n  <li><strong>Finiteness (Keterbatasan Langkah):</strong> Algoritma harus berakhir dan berhenti setelah menjalankan sejumlah langkah pemrosesan terhingga (pantangan terjadinya <em>infinite loop</em>).</li>\n  <li><strong>Definiteness (Kepastian Instruksi):</strong> Setiap instruksi harus dinyatakan secara jelas, eksplisit, tidak ambigu, dan tidak menimbulkan multi-tafsir bagi pemroses mesin.</li>\n  <li><strong>Input (Masukan):</strong> Memiliki nol atau lebih nilai besaran masukan yang disuplai dari luar sistem.</li>\n  <li><strong>Output (Keluaran):</strong> Memiliki satu atau lebih nilai keluaran yang merupakan solusi nyata atas persoalan yang diselesaikan.</li>\n  <li><strong>Effectiveness (Efektivitas):</strong> Setiap instruksi harus cukup mendasar dan realistis sehingga dapat dikerjakan dalam durasi waktu yang wajar.</li>\n</ol>\n\n<h4>4. Tiga Cara Penyajian Algoritma</h4>\n<ul>\n  <li><strong>Bahasa Deskriptif:</strong> Menggunakan untaian kalimat bahasa manusia wajar (contoh: <em>1. Masukkan panjang, 2. Masukkan lebar, 3. Hitung luas = panjang * lebar</em>).</li>\n  <li><strong>Bagan Alir (Flowchart):</strong> Menggunakan diagram simbol geometris standar ANSI yang memvisualisasikan alur panah jalannya data.</li>\n  <li><strong>Pseudocode:</strong> Notasi kode semu yang mirip struktur bahasa pemrograman formal (Pascal / C) namun tetap mudah dibaca manusia.</li>\n</ul>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-algo_m2",
        "subject_id": "subject-algo",
        "meeting_number": 2,
        "date": "2026-09-23",
        "title": "Tipe Data Primitif, Operator Komputasi & Hierarki Presedensi",
        "description": "Klasifikasi tipe data dasar, operator aritmatika, relasional, logika, dan 5 urutan presedensi eksekusi.",
        "notes": "Materi kuis & UTS: Kuasai operator pembagian div vs mod dan urutan presedensi tanda kurung.",
        "materials": [
          {
            "id": "mat_algo_2_1",
            "type": "pdf",
            "title": "Modul Dosen P2: Tipe Data & Operator Komputasi.pdf",
            "file_url": "/materials/algo_p2_tipe_data_operator.pdf",
            "file_size": 566311,
            "date_added": "2026-09-23"
          },
          {
            "id": "mat_algo_2_2",
            "type": "pdf",
            "title": "Rangkuman Mandiri Mahasiswa P1-P3.pdf",
            "file_url": "/materials/algo_rangkuman_mandiri_p1_p3.pdf",
            "file_size": 592295,
            "date_added": "2026-09-23"
          }
        ],
        "transcripts": [
          {
            "id": "trans_algo_2",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Pembagian angka pada komputasi memiliki aturan khusus. Operator slash menghasilkan pecahan Real, operator div menghasilkan integer bulat, dan operator mod menghasilkan sisa pembagian.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Klasifikasi Tipe Data Standar Komputasi</h4>\n<ul>\n  <li><strong>Integer:</strong> Tipe data bilangan bulat tanpa pecahan (<code>Shortint, Integer, Longint</code>). Rentang Integer standar: -32.768 s.d. 32.767.</li>\n  <li><strong>Real / Float:</strong> Tipe data bilangan desimal pecahan berkoma mengambang (<code>Real, Single, Double</code>).</li>\n  <li><strong>Char:</strong> Karakter tunggal alfanumerik yang diapit petik tunggal (contoh: <code>'A', '9', '+'</code>).</li>\n  <li><strong>String:</strong> Kumpulan untaian karakter teks (contoh: <code>'Universitas Indraprasta PGRI'</code>).</li>\n  <li><strong>Boolean:</strong> Tipe data logika kebenaran biner yang hanya memiliki dua kemungkinan nilai: <code>TRUE</code> atau <code>FALSE</code>.</li>\n</ul>\n\n<h4>2. Taksonomi Operator Komputasi</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Kategori Operator</th><th>Simbol Operator</th><th>Makna & Fungsi Operasi</th><th>Contoh Evaluasi Nyata</th></tr></thead>\n    <tbody>\n      <tr><td rowspan=\"6\"><strong>Aritmatika</strong></td><td><code>+</code></td><td>Penjumlahan dua operan numerik</td><td><code>7 + 3 = 10</code></td></tr>\n      <tr><td><code>-</code></td><td>Pengurangan dua operan numerik</td><td><code>10 - 4 = 6</code></td></tr>\n      <tr><td><code>*</code></td><td>Perkalian dua operan numerik</td><td><code>6 * 5 = 30</code></td></tr>\n      <tr><td><code>/</code></td><td>Pembagian riil (menghasilkan angka Real pecahan)</td><td><code>10 / 4 = 2.5</code></td></tr>\n      <tr><td><code>div</code></td><td>Pembagian integer (menghasilkan hasil bagi bulat)</td><td><code>10 div 4 = 2</code></td></tr>\n      <tr><td><code>mod</code></td><td>Sisa pembagian bulat modulo (modulus remainder)</td><td><code>10 mod 4 = 2</code>; <code>15 mod 4 = 3</code></td></tr>\n      <tr><td rowspan=\"6\"><strong>Relasional (Perbandingan)</strong></td><td><code>=</code></td><td>Sama dengan</td><td><code>5 = 5 ➔ TRUE</code></td></tr>\n      <tr><td><code>&lt;&gt;</code></td><td>Tidak sama dengan</td><td><code>5 &lt;&gt; 3 ➔ TRUE</code></td></tr>\n      <tr><td><code>&lt;</code>, <code>&gt;</code></td><td>Kurang dari, Lebih dari</td><td><code>8 &gt; 12 ➔ FALSE</code></td></tr>\n      <tr><td><code>&lt;=</code>, <code>&gt;=</code></td><td>Kurang dari sama dengan, Lebih dari sama dengan</td><td><code>10 &gt;= 10 ➔ TRUE</code></td></tr>\n      <tr><td rowspan=\"3\"><strong>Logika (Boolean)</strong></td><td><code>NOT</code></td><td>Negasi pembalik nilai kebenaran biner</td><td><code>NOT TRUE ➔ FALSE</code></td></tr>\n      <tr><td><code>AND</code></td><td>Konjungsi: Bernilai TRUE jika KEDUA operan benar</td><td><code>TRUE AND FALSE ➔ FALSE</code></td></tr>\n      <tr><td><code>OR</code></td><td>Disjungsi: Bernilai TRUE jika SALAH SATU operan benar</td><td><code>TRUE OR FALSE ➔ TRUE</code></td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>3. Tabel Hierarki Presedensi Operator (Tertinggi ke Terendah)</h4>\n<ol>\n  <li>Ekspresi di dalam tanda kurung <code>( )</code> selalu dieksekusi paling pertama.</li>\n  <li>Operator Unary Negasi: <code>NOT</code></li>\n  <li>Operator Multiplikatif Perkalian/Pembagian: <code>*</code>, <code>/</code>, <code>div</code>, <code>mod</code>, <code>AND</code></li>\n  <li>Operator Aditif Penjumlahan/Pengurangan: <code>+</code>, <code>-</code>, <code>OR</code></li>\n  <li>Operator Relasional Perbandingan: <code>=</code>, <code>&lt;&gt;</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code></li>\n</ol>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-algo_m3",
        "subject_id": "subject-algo",
        "meeting_number": 3,
        "date": "2026-09-30",
        "title": "Standar Simbol Flowchart ANSI & Logika Alur",
        "description": "Bagan alir ANSI standar, fungsi terminator, process, decision, I/O, konektor, dan studi kasus alur kasir.",
        "notes": "Materi wajib praktikum: Gambar simbol ANSI secara rapi menggunakan penggaris bentuk geometris.",
        "materials": [
          {
            "id": "mat_algo_3_1",
            "type": "pdf",
            "title": "Modul Dosen P3: Standar Simbol Bagan Alir ANSI.pdf",
            "file_url": "/materials/algo_p3_flowchart_ansi.pdf",
            "file_size": 736500,
            "date_added": "2026-09-30"
          },
          {
            "id": "mat_algo_3_2",
            "type": "pdf",
            "title": "Rangkuman Mandiri Mahasiswa P1-P3.pdf",
            "file_url": "/materials/algo_rangkuman_mandiri_p1_p3.pdf",
            "file_size": 592295,
            "date_added": "2026-09-30"
          }
        ],
        "transcripts": [
          {
            "id": "trans_algo_3",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Flowchart memiliki standar internasional ANSI. Belah ketupat decision adalah satu-satunya simbol yang wajib memiliki dua arah panah keluar berlabel Ya dan Tidak.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Standar Simbol Bagan Alir ANSI (American National Standards Institute)</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Nama Simbol ANSI</th><th>Bentuk Geometris</th><th>Fungsi Spesifik dalam Algoritma</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Terminator</strong></td><td>Kapsul Oval / Persegi Tumpul</td><td>Menandai titik Awal Mulai (<code>START / MULAI</code>) atau titik Akhir Selesai (<code>END / SELESAI</code>) dari program.</td></tr>\n      <tr><td><strong>Process</strong></td><td>Persegi Panjang Tegak</td><td>Operasi kalkulasi aritmatika internal, inisialisasi awal variabel, atau penugasan memori (<code>luas := p * l</code>).</td></tr>\n      <tr><td><strong>Decision</strong></td><td>Belah Ketupat (Diamond)</td><td>Pengujian evaluasi kondisi logika. <strong>Wajib memiliki 2 cabang keluar</strong>: <code>Ya/True</code> dan <code>Tidak/False</code>.</td></tr>\n      <tr><td><strong>Input / Output</strong></td><td>Jajar Genjang</td><td>Instruksi pembacaan data masukan dari keyboard (<code>Read / Input</code>) atau penampilan keluaran ke monitor (<code>Write / Print</code>).</td></tr>\n      <tr><td><strong>On-Page Connector</strong></td><td>Lingkaran Kecil</td><td>Penyambung alur panah data dalam lembar halaman gambar yang sama untuk mencegah garis saling bertumpuk.</td></tr>\n      <tr><td><strong>Off-Page Connector</strong></td><td>Bentuk Segi Lima Terbalik</td><td>Penyambung alur panah data apabila diagram alir berlanjut ke lembar halaman berikutnya.</td></tr>\n      <tr><td><strong>Flow Line</strong></td><td>Garis Panah Berarah</td><td>Menunjukkan arah runtunan urutan eksekusi langkah instruksi komputasi secara presisi.</td></tr>\n      <tr><td><strong>Preparation</strong></td><td>Segi Enam (Hexagon)</td><td>Inisialisasi pemberian nilai awal pada variabel penghitung perulangan (<code>i = 1 to 10</code>).</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>2. Kaidah Penyusunan Flowchart yang Benar</h4>\n<ul>\n  <li>Alur diagram mengalir dari <strong>atas ke bawah (top-down)</strong> atau dari <strong>kiri ke kanan (left-to-right)</strong>.</li>\n  <li>Semua jalur percabangan (kondisi) harus bertemu kembali ke satu simpul akhir alur yang jelas, dilarang ada panah yang menggantung tanpa ujung.</li>\n  <li>Setiap simbol hanya memiliki satu panah masuk dan satu panah keluar, kecuali simbol <em>Decision</em> yang memiliki dua panah keluar.</li>\n</ul>\n\n<h4>3. Studi Kasus Alur Flowchart Kasir UMKM Sederhana</h4>\n<ol>\n  <li><code>[START]</code> Mulai program kasir.</li>\n  <li><code>[/ Masukkan Total Belanja /]</code> Kasir menginput nominal belanja pelanggan.</li>\n  <li><code>{ Total Belanja >= 100.000? }</code> Pengujian kondisi diskon:\n    <ul>\n      <li>Jika <strong>YA</strong>: <code>[ Diskon := 0.10 * Total ]</code> Potongan 10%.</li>\n      <li>Jika <strong>TIDAK</strong>: <code>[ Diskon := 0 ]</code> Tidak ada potongan.</li>\n    </ul>\n  </li>\n  <li><code>[ Total Bayar := Total Belanja - Diskon ]</code> Hitung tagihan bersih.</li>\n  <li><code>[/ Cetak Struk Total Bayar /]</code> Tampilkan struk pembayaran.</li>\n  <li><code>[END]</code> Selesai transaksi.</li>\n</ol>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-algo_m4",
        "subject_id": "subject-algo",
        "meeting_number": 4,
        "date": "2026-10-07",
        "title": "Tiga Struktur Kontrol Algoritma (Sequence, Selection, Repetition)",
        "description": "Struktur runtunan sequence, percabangan selection tunggal/ganda/majemuk, dan perulangan loop for-while-repeat.",
        "notes": "Materi inti UTS: Kuasai perbedaan alur seleksi percabangan dan perulangan pre-condition vs post-condition.",
        "materials": [
          {
            "id": "mat_algo_4_1",
            "type": "pdf",
            "title": "Modul Dosen P4: Tiga Struktur Kontrol Algoritma.pdf",
            "file_url": "/materials/algo_p4_struktur_kontrol.pdf",
            "file_size": 657568,
            "date_added": "2026-10-07"
          },
          {
            "id": "mat_algo_4_2",
            "type": "pdf",
            "title": "Rangkuman Mandiri Mahasiswa P4.pdf",
            "file_url": "/materials/algo_rangkuman_mandiri_p4.pdf",
            "file_size": 203873,
            "date_added": "2026-10-07"
          },
          {
            "id": "mat_algo_4_3",
            "type": "pdf",
            "title": "Rangkuman UTS Algoritma Lengkap - Haikel Saleh.pdf",
            "file_url": "/materials/algo_rangkuman_uts_haikel.pdf",
            "file_size": 559494,
            "date_added": "2026-10-07"
          }
        ],
        "transcripts": [
          {
            "id": "trans_algo_4",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Tiga struktur kontrol adalah fondasi seluruh bahasa pemrograman di dunia. Sequence berjalan lurus, Selection memilih salah satu jalur, dan Repetition mengulang aksi sampai syarat berhenti terpenuhi.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Struktur Runtunan (Sequence Structure)</h4>\n<p>Langkah-langkah instruksi dijalankan secara lurus berurutan baris demi baris dari atas ke bawah tanpa adanya lompatan kondisi atau pengulangan aksi.</p>\n<pre><code>Instruksi 1: Masukkan jari-jari (r)\nInstruksi 2: Hitung Luas = 3.14 * r * r\nInstruksi 3: Tampilkan Luas</code></pre>\n\n<h4>2. Struktur Percabangan (Selection / Decision Structure)</h4>\n<p>Memilih salah satu blok instruksi untuk dieksekusi berdasarkan evaluasi kondisi kebenaran logika:</p>\n<ul>\n  <li><strong>Percabangan Tunggal (IF - THEN):</strong> Instruksi hanya dijalankan jika kondisi bernilai TRUE. Jika FALSE, tidak ada aksi alternatif.</li>\n  <li><strong>Percabangan Ganda (IF - THEN - ELSE):</strong> Menyediakan dua jalur tindakan yang pasti dipilih salah satunya (jalur TRUE atau jalur FALSE).</li>\n  <li><strong>Percabangan Majemuk (IF - THEN - ELSE IF - ELSE):</strong> Mengevaluasi lebih dari dua kemungkinan kondisi secara berjenjang.</li>\n  <li><strong>Percabangan Diskrit (CASE - OF):</strong> Memilih opsi alternatif berdasarkan nilai konstanta diskrit (karakter atau integer) secara efisien tanpa nested if berlebihan.</li>\n</ul>\n\n<h4>3. Struktur Perulangan (Repetition / Looping Structure)</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Tipe Perulangan</th><th>Posisi Evaluasi Kondisi</th><th>Karakteristik Eksekusi Minimum</th><th>Sifat Perulangan</th></tr></thead>\n    <tbody>\n      <tr><td><strong>FOR..TO..DO</strong></td><td>Inisialisasi batas awal dan akhir pasti</td><td>Sesuai rentang batas yang ditetapkan</td><td>Perulangan terhitung pasti (<em>counted loop</em>).</td></tr>\n      <tr><td><strong>WHILE..DO</strong></td><td><strong>Di AWAL</strong> sebelum blok instruksi dijalankan</td><td><strong>Bisa 0 kali</strong> (jika kondisi awal langsung FALSE)</td><td>Perulangan bersyarat (<em>pre-condition loop</em>). Berjalan selama kondisi bernilai TRUE.</td></tr>\n      <tr><td><strong>REPEAT..UNTIL</strong></td><td><strong>Di AKHIR</strong> setelah blok instruksi dijalankan</td><td><strong>Minimal 1 kali</strong> pasti dieksekusi</td><td>Perulangan bersyarat (<em>post-condition loop</em>). Berulang selama FALSE, berhenti begitu bernilai TRUE.</td></tr>\n    </tbody>\n  </table>\n</div>",
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
    "lecturer": "Tim Dosen Pemrograman FTIK Unindra",
    "schedule": "Selasa • 09:10 - 10:50 WIB • Ruang R.4.5-3",
    "room": "Ruang R.4.5-3",
    "color": "#8B5CF6",
    "target_meetings": 16,
    "semester": "Semester 1",
    "academic_year": "2026/2027",
    "meetings": [
      {
        "id": "subject-pascal_m1",
        "subject_id": "subject-pascal",
        "meeting_number": 1,
        "date": "2026-09-16",
        "title": "Filosofi Bahasa Pascal & Struktur Anatomi Program",
        "description": "Sejarah Prof. Niklaus Wirth, anatomi 3 blok program Pascal, unit crt, clrscr, dan eksekusi Free Pascal.",
        "notes": "Materi praktikum: Hafalkan susunan 3 blok struktur Pascal dan fungsi titik akhir end.",
        "materials": [
          {
            "id": "mat_pascal_1_1",
            "type": "pdf",
            "title": "Modul Dosen P1: Pengantar Pemrograman Pascal (Pertemuan_1.pdf)",
            "file_url": "/materials/pascal_p1_pengantar_pascal.pdf",
            "file_size": 1378125,
            "date_added": "2026-09-16"
          },
          {
            "id": "mat_pascal_1_2",
            "type": "pdf",
            "title": "Rangkuman Mandiri Pemrograman Pascal UTS.pdf",
            "file_url": "/materials/pascal_rangkuman_mandiri_uts.pdf",
            "file_size": 634444,
            "date_added": "2026-09-16"
          }
        ],
        "transcripts": [
          {
            "id": "trans_pascal_1",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Pascal dirancang untuk mengajarkan disiplin pemrograman terstruktur. Struktur blok deklarasi dan blok program utama harus dipatuhi secara ketat.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Filosofi & Sejarah Bahasa Pemrograman Pascal</h4>\n<p>Bahasa Pascal dirancang pada tahun 1970 oleh ilmuwan komputer Swiss, <strong>Prof. Niklaus Wirth</strong> di ETH Zurich. Nama Pascal diambil sebagai penghormatan bagi <strong>Blaise Pascal</strong>, matematikawan dan fisikawan Prancis yang menciptakan mesin kalkulator mekanik pertama di dunia (<em>Pascaline</em>) pada tahun 1642. Pascal diciptakan sebagai wahana pedagogis pengajaran disiplin pemrograman terstruktur (<em>structured programming</em>).</p>\n\n<h4>2. Tiga Blok Anatomi Struktur Program Pascal</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Blok Struktur</th><th>Kata Kunci Sintaks</th><th>Fungsi dan Peran</th></tr></thead>\n    <tbody>\n      <tr><td><strong>1. Blok Judul Program</strong></td><td><code>program NamaProgram;</code></td><td>Menamai program (bersifat opsional tetapi wajib dalam kaidah penulisan akademik).</td></tr>\n      <tr><td><strong>2. Blok Deklarasi</strong></td><td><code>uses</code>, <code>const</code>, <code>type</code>, <code>var</code></td><td>Tempat mendeklarasikan unit pustaka, nilai konstanta, tipe data kustom, dan variabel memori sebelum digunakan.</td></tr>\n      <tr><td><strong>3. Blok Program Utama</strong></td><td><code>begin ... end.</code></td><td>Wadah penulisan instruksi logika yang akan dieksekusi secara nyata oleh prosesor komputer. Diakhiri tanda titik <code>end.</code></td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>3. Program Perdana Lengkap Penghitungan Luas Lingkaran</h4>\n<pre><code>program HitungLuasLingkaran;\nuses crt;          { Unit pustaka untuk kontrol layar console, clrscr, dan readln }\n\nconst\n  PI = 3.14159;    { Deklarasi konstanta nilai tetap }\n\nvar\n  jari_jari, luas : real;  { Deklarasi variabel pecahan real }\n\nbegin\n  clrscr;          { Membersihkan tampilan layar console }\n  \n  writeln('=========================================');\n  writeln('   PROGRAM HITUNG LUAS LINGKARAN PASCAL   ');\n  writeln('=========================================');\n  \n  write('Masukkan jari-jari lingkaran (r) : ');\n  readln(jari_jari);\n  \n  { Proses kalkulasi aljabar }\n  luas := PI * jari_jari * jari_jari;\n  \n  writeln('-----------------------------------------');\n  writeln('Luas Lingkaran = ', luas:0:2);  { Format 2 digit desimal }\n  writeln('=========================================');\n  \n  readln;          { Menahan console agar tidak langsung tertutup otomatis }\nend.</code></pre>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-pascal_m2",
        "subject_id": "subject-pascal",
        "meeting_number": 2,
        "date": "2026-09-23",
        "title": "Variabel, Konstanta, Tipe Data & Penugasan",
        "description": "Kaidah identifier, strongly typed, case insensitive, operator penugasan :=, dan formatting desimal.",
        "notes": "Materi kuis: Aturan identifier (tidak boleh diawali angka atau spasi) dan operator assignment :=.",
        "materials": [
          {
            "id": "mat_pascal_2_1",
            "type": "pdf",
            "title": "Modul Dosen P2: Variabel & Konstanta (Pertemuan_2.pdf)",
            "file_url": "/materials/pascal_p2_variabel_tipe_data.pdf",
            "file_size": 541898,
            "date_added": "2026-09-23"
          },
          {
            "id": "mat_pascal_2_2",
            "type": "pdf",
            "title": "Rangkuman Mandiri Pemrograman Pascal UTS.pdf",
            "file_url": "/materials/pascal_rangkuman_mandiri_uts.pdf",
            "file_size": 634444,
            "date_added": "2026-09-23"
          }
        ],
        "transcripts": [
          {
            "id": "trans_pascal_2",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Pascal bersifat Strongly Typed. Jika variabel dideklarasikan Integer, maka haram hukumnya diisi data teks string atau pecahan desimal tanpa konversi.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Karakteristik Kompiler Pascal</h4>\n<ul>\n  <li><strong>Strongly Typed:</strong> Setiap variabel wajib dideklarasikan tipe datanya terlebih dahulu sebelum digunakan di blok <code>begin ... end.</code> dan tidak dapat menampung tipe di luar definisinya.</li>\n  <li><strong>Case Insensitive:</strong> Tidak membedakan huruf besar dan huruf kecil. Variabel <code>TotalBelanja</code>, <code>totalbelanja</code>, dan <code>TOTALBELANJA</code> dianggap identik sama oleh kompiler.</li>\n</ul>\n\n<h4>2. Kaidah Baku Penamaan Identifier (Nama Variabel / Konstanta)</h4>\n<ol>\n  <li>Karakter pertama <strong>WAJIB berupa huruf alfabet (A–Z / a–z) atau karakter garis bawah (underscore <code>_</code>)</strong>. Dilarang diawali angka.</li>\n  <li>Karakter kedua dan seterusnya boleh berupa kombinasi huruf, angka, dan garis bawah.</li>\n  <li><strong>Dilarang keras mengandung spasi</strong> atau simbol matematika khusus (<code>+, -, *, /, @, #, $, %</code>).</li>\n  <li>Tidak boleh menggunakan kata kunci yang telah dipesan oleh kompiler (<em>Reserved Words</em> seperti <code>program, uses, begin, end, var, const, if, then, else, while, for</code>).</li>\n</ol>\n\n<h4>3. Operator Penugasan (Assignment Operator)</h4>\n<p>Dalam Pascal, operator penugasan nilai ke variabel dinyatakan dengan simbol titik dua sama dengan <code>:=</code>, bukan tanda sama dengan tunggal <code>=</code> (tanda <code>=</code> hanya digunakan untuk deklarasi konstanta atau perbandingan relasional):</p>\n<pre><code>{ Deklarasi }\nconst\n  BIAYA_ADMIN = 2500;  { Menggunakan = }\n\nvar\n  saldo_akhir, setor : real;\n\nbegin\n  setor := 500000;                      { Penugasan menggunakan := }\n  saldo_akhir := setor - BIAYA_ADMIN;   { Penugasan hasil kalkulasi }\nend.</code></pre>\n\n<h4>4. Pemformatan Angka Pecahan Real di Layar Console</h4>\n<p>Apabila dicetak tanpa format, tipe Real akan ditampilkan dalam notasi ilmiah eksponen (contoh: <code>4.5000000000E+01</code>). Untuk menampilkan angka desimal yang rapi, gunakan sintaks pemformatan:</p>\n<pre><code>variabel:lebar_kolom:jumlah_digit_desimal</code></pre>\n<p>Contoh: <code>writeln('Total Bayar : Rp ', total:0:2);</code> menghasilkan <code>Total Bayar : Rp 45000.00</code>.</p>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-pascal_m3",
        "subject_id": "subject-pascal",
        "meeting_number": 3,
        "date": "2026-09-30",
        "title": "Instruksi Input & Output (I/O) dan Pemformatan Real",
        "description": "Perbedaan write vs writeln, read vs readln, dan ATURAN EMAS pantangan titik koma sebelum else.",
        "notes": "Materi paling rawan error UTS: Jangan pernah menaruh titik koma sebelum kata else!",
        "materials": [
          {
            "id": "mat_pascal_3_1",
            "type": "pdf",
            "title": "Modul Dosen P3: Operasi Write & Read (Pertemuan_3.pdf)",
            "file_url": "/materials/pascal_p3_input_output.pdf",
            "file_size": 464369,
            "date_added": "2026-09-30"
          },
          {
            "id": "mat_pascal_3_2",
            "type": "pdf",
            "title": "Diktat Latihan Praktikum Percabangan IF.pdf",
            "file_url": "/materials/pascal_latihan_percabangan_if.pdf",
            "file_size": 414921,
            "date_added": "2026-09-30"
          },
          {
            "id": "mat_pascal_3_3",
            "type": "pdf",
            "title": "Rangkuman Mandiri Pemrograman Pascal UTS.pdf",
            "file_url": "/materials/pascal_rangkuman_mandiri_uts.pdf",
            "file_size": 634444,
            "date_added": "2026-09-30"
          }
        ],
        "transcripts": [
          {
            "id": "trans_pascal_3",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Write mencetak tanpa ganti baris, writeln mencetak lalu memindahkan kursor ke baris baru di bawahnya. Dan ingat pantangan mutlak Pascal: jangan beri titik koma sebelum kata else!",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Komparasi Operasi Cetak (Write vs Writeln)</h4>\n<ul>\n  <li><code>write('...')</code>: Mencetak data teks ke layar terminal dan <strong>posisi kursor tetap berada di ujung kanan teks</strong> yang sama (cocok untuk prompt input).</li>\n  <li><code>writeln('...')</code>: Mencetak data teks ke layar terminal lalu <strong>secara otomatis memindahkan posisi kursor ke baris baru di bawahnya</strong> (newline).</li>\n</ul>\n\n<h4>2. Komparasi Operasi Masukan (Read vs Readln)</h4>\n<ul>\n  <li><code>read(variabel)</code>: Membaca masukan dari pengguna tanpa membersihkan penanda akhir baris pada buffer keyboard.</li>\n  <li><code>readln(variabel)</code>: Membaca masukan pengguna dan secara bersih menghapus karakter enter pada buffer keyboard (sangat dianjurkan dipakai).</li>\n</ul>\n\n<h4>3. ATURAN EMAS KOMPILER PASCAL: PANTANGAN TITIK KOMA SEBELUM ELSE!</h4>\n<blockquote style=\"border-left: 4px solid #EF4444; padding-left: 14px; margin: 12px 0; color: #FEE2E2; background: rgba(239, 68, 68, 0.1); padding: 12px 16px; border-radius: 6px;\">\n  <strong>🚨 PERINGATAN FATAL KOMPILER:</strong><br>\n  Di dalam bahasa Pascal, tanda titik koma (<code>;</code>) bertindak sebagai pemisah antar-instruksi (<em>statement separator</em>). Struktur <code>if ... then ... else</code> adalah <strong>SATU KALIMAT UTUH</strong>. Jika Anda meletakkan tanda <code>;</code> tepat sebelum kata <code>else</code>, kompiler menganggap pernyataan <code>if</code> telah berakhir, sehingga saat membaca kata <code>else</code> akan melempar error:<br>\n  <code style=\"color: #F87171;\">Fatal: Syntax error, \";\" expected but \"ELSE\" found</code>\n</blockquote>\n\n<h4>4. Source Code Lengkap Praktikum 1: Uji Tahun Kabisat (latihan1_kabisat.pas)</h4>\n<pre><code>program uji_tahun_kabisat;\nuses crt;\n\nvar\n  tahun : integer;\n\nbegin\n  clrscr;\n  writeln('========================================');\n  writeln('       PROGRAM UJI TAHUN KABISAT        ');\n  writeln('========================================');\n  write('Masukkan angka tahun : ');\n  readln(tahun);\n\n  { Evaluasi kondisi kabisat kelipatan 4 }\n  if (tahun mod 4 = 0) then\n    writeln('Tahun ', tahun, ' adalah TAHUN KABISAT') { <--- TIDAK ADA TITIK KOMA }\n  else\n    writeln('Tahun ', tahun, ' BUKAN tahun kabisat');\n\n  writeln('========================================');\n  readln;\nend.</code></pre>\n\n<h4>5. Source Code Lengkap Praktikum 2: Mencari Angka Terbesar (latihan2_terbesar.pas)</h4>\n<pre><code>program cari_angka_terbesar;\nuses crt;\n\nvar\n  angka1, angka2, terbesar : integer;\n\nbegin\n  clrscr;\n  writeln('========================================');\n  writeln('     PROGRAM CARI DUA ANGKA TERBESAR    ');\n  writeln('========================================');\n  write('Input angka pertama : '); readln(angka1);\n  write('Input angka kedua   : '); readln(angka2);\n\n  if (angka1 > angka2) then\n    terbesar := angka1   { <--- TIDAK ADA TITIK KOMA }\n  else\n    terbesar := angka2;\n\n  writeln('----------------------------------------');\n  writeln('Angka terbesar yang dipilih adalah : ', terbesar);\n  writeln('========================================');\n  readln;\nend.</code></pre>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-pascal_m4",
        "subject_id": "subject-pascal",
        "meeting_number": 4,
        "date": "2026-10-07",
        "title": "Struktur Kontrol Percabangan Majemuk & Perhitungan Nilai Akhir",
        "description": "Percabangan majemuk IF-ELSE IF, program hitung nilai akhir mahasiswa Unindra, dan konversi suhu Celcius.",
        "notes": "Materi kuis & UTS: Kuasai bobot persentase perhitungan nilai akhir dan tangga konversi suhu.",
        "materials": [
          {
            "id": "mat_pascal_4_1",
            "type": "pdf",
            "title": "Modul Dosen P4: Pemilihan Selection IF Majemuk.pdf",
            "file_url": "/materials/pascal_p4_percabangan_if.pdf",
            "file_size": 424353,
            "date_added": "2026-10-07"
          },
          {
            "id": "mat_pascal_4_2",
            "type": "pdf",
            "title": "Latihan Studi Kasus Program Kasir Sederhana.pdf",
            "file_url": "/materials/pascal_studi_kasus_kasir.pdf",
            "file_size": 24943,
            "date_added": "2026-10-07"
          },
          {
            "id": "mat_pascal_4_3",
            "type": "pdf",
            "title": "Rangkuman Mandiri Pemrograman Pascal UTS.pdf",
            "file_url": "/materials/pascal_rangkuman_mandiri_uts.pdf",
            "file_size": 634444,
            "date_added": "2026-10-07"
          }
        ],
        "transcripts": [
          {
            "id": "trans_pascal_4",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Percabangan bertingkat digunakan untuk menentukan grade huruf mutu mahasiswa berdasarkan rumus bobot: 20% tugas, 30% UTS, dan 50% UAS.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Percabangan Majemuk (IF - THEN - ELSE IF - ELSE)</h4>\n<p>Percabangan majemuk digunakan saat terdapat lebih dari dua alternatif kondisi yang saling mengecualikan secara berurutan.</p>\n\n<h4>2. Source Code Lengkap Praktikum 3: Program Nilai Akhir Mahasiswa (latihan_nilai_akhir.pas)</h4>\n<pre><code>program hitung_nilai_akhir;\nuses crt;\n\nvar\n  tugas, uts, uas, nilai_akhir : real;\n  nilai_huruf                  : char;\n\nbegin\n  clrscr;\n  writeln('==========================================');\n  writeln('   PROGRAM HITUNG NILAI AKHIR MAHASISWA   ');\n  writeln('==========================================');\n\n  write('Input nilai Tugas (20%) : '); readln(tugas);\n  write('Input nilai UTS   (30%) : '); readln(uts);\n  write('Input nilai UAS   (50%) : '); readln(uas);\n\n  { Rumus pembobotan resmi Unindra }\n  nilai_akhir := (0.20 * tugas) + (0.30 * uts) + (0.50 * uas);\n\n  { Seleksi Tangga Nilai Huruf Mutu }\n  if (nilai_akhir >= 91) then\n    nilai_huruf := 'A'\n  else if (nilai_akhir >= 76) then\n    nilai_huruf := 'B'\n  else if (nilai_akhir >= 61) then\n    nilai_huruf := 'C'\n  else if (nilai_akhir >= 41) then\n    nilai_huruf := 'D'\n  else\n    nilai_huruf := 'E';\n\n  writeln('------------------------------------------');\n  writeln('Nilai Akhir Angka : ', nilai_akhir:0:2);\n  writeln('Nilai Mutu Huruf  : ', nilai_huruf);\n\n  { Seleksi Status Kelulusan }\n  if (nilai_akhir >= 70) then\n    writeln('Status Kelulusan  : SELAMAT ANDA DINYATAKAN LULUS')\n  else\n    writeln('Status Kelulusan  : MAAF ANDA DINYATAKAN TIDAK LULUS');\n\n  writeln('==========================================');\n  readln;\nend.</code></pre>\n\n<h4>3. Source Code Lengkap Praktikum 4: Program Konversi Suhu Celcius (Celcius.pas)</h4>\n<pre><code>program KonversiSuhuCelcius;\nuses crt;\n\nvar\n  celcius, reamur, fahrenheit : real;\n\nbegin\n  clrscr;\n  writeln('=========================================');\n  writeln('  PROGRAM KONVERSI SUHU CELCIUS (GENAP)  ');\n  writeln('=========================================');\n  writeln('NPM  : 202633500386 (Digit Terakhir Genap: 6)');\n  writeln('Nama : Muhammad Haikel Saleh');\n  writeln('-----------------------------------------');\n\n  write('Masukkan Nilai Suhu Celcius (°C) : ');\n  readln(celcius);\n\n  { Formula konversi suhu baku }\n  reamur := (4.0 / 5.0) * celcius;\n  fahrenheit := ((9.0 / 5.0) * celcius) + 32.0;\n\n  writeln('-----------------------------------------');\n  writeln('HASIL KONVERSI SUHU:');\n  writeln('Suhu Reamur     (R) : ', reamur:0:2, ' °R');\n  writeln('Suhu Fahrenheit (F) : ', fahrenheit:0:2, ' °F');\n  writeln('=========================================');\n  readln;\nend.</code></pre>",
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
    "color": "#14B8A6",
    "target_meetings": 16,
    "semester": "Semester 1",
    "academic_year": "2026/2027",
    "meetings": [
      {
        "id": "subject-inggris_m1",
        "subject_id": "subject-inggris",
        "meeting_number": 1,
        "date": "2026-09-18",
        "title": "Chapter I: Self-Introduction, Professional Profiling & Daily Activities",
        "description": "Subject-Verb agreement in IT context, simple present tense formulas, and professional software engineering profiling.",
        "notes": "Materi UTS: Kuasai penambahan s/es pada kata kerja orang ketiga tunggal (He/She/It).",
        "materials": [
          {
            "id": "mat_inggris_1_1",
            "type": "pdf",
            "title": "Dosen Chapter I: Self Introduction & IT Profiling.pdf",
            "file_url": "/materials/inggris_p1_chapter_1_self_intro.pdf",
            "file_size": 365541,
            "date_added": "2026-09-18"
          }
        ],
        "transcripts": [
          {
            "id": "trans_inggris_1",
            "audio_url": null,
            "content": "Lecture Transcript: Introduction in professional software engineering requires clarity of personal skills, current academic status, and proficiency in programming stacks.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Pola Baku Subject-Verb Agreement (Simple Present Tense)</h4>\n<p>Dalam tata bahasa Inggris akademis, bentuk kata kerja harus selalu bersesuaian dengan subjek kalimat:</p>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Subjek Kalimat</th><th>Bentuk To Be (Present)</th><th>Bentuk Verb 1 (Present Simple)</th><th>Contoh Kalimat Riil Bidang Komputasi</th></tr></thead>\n    <tbody>\n      <tr><td><strong>I</strong></td><td><code>am</code></td><td>Verb 1 murni (<code>develop</code>)</td><td><em>I develop responsive web interfaces using React.js.</em></td></tr>\n      <tr><td><strong>You / We / They</strong></td><td><code>are</code></td><td>Verb 1 murni (<code>analyze</code>)</td><td><em>They analyze relational database queries every Monday.</em></td></tr>\n      <tr><td><strong>He / She / It</strong></td><td><code>is</code></td><td>Verb 1 + <code>s/es</code> (<code>designs</code>)</td><td><em>He designs modern normalized database schemas for clients.</em></td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>2. Pola Kalimat Negatif dan Interogatif (Tanya)</h4>\n<ul>\n  <li><strong>Kalimat Negatif:</strong> <code>Subject + do/does not + Verb 1 murni</code><br>\n    <em>She does not write Pascal code on macOS.</em> (Kembali ke Verb 1 tanpa akhiran 's').</li>\n  <li><strong>Kalimat Tanya:</strong> <code>Do/Does + Subject + Verb 1 murni?</code><br>\n    <em>Do you study computer organization and architecture this semester?</em></li>\n</ul>\n\n<h4>3. Kosakata Profesional IT untuk Profil Portofolio</h4>\n<ul>\n  <li><em>\"I am an undergraduate student majoring in Information Systems at Indraprasta PGRI University.\"</em></li>\n  <li><em>\"My core technical proficiencies include Pascal algorithm development, SQL database design, and frontend styling.\"</em></li>\n</ul>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-inggris_m2",
        "subject_id": "subject-inggris",
        "meeting_number": 2,
        "date": "2026-09-25",
        "title": "Chapter II: Procedural Texts & Technical Instructions",
        "description": "Three mandatory components of procedural texts, imperative action verbs, and technical setup guides.",
        "notes": "Materi UTS: Urutan penulisan goal, materials, dan steps serta sequence connectors.",
        "materials": [
          {
            "id": "mat_inggris_2_1",
            "type": "pdf",
            "title": "Dosen Chapter II: How to Make Something.pdf",
            "file_url": "/materials/inggris_p2_chapter_2_how_to_make.pdf",
            "file_size": 399442,
            "date_added": "2026-09-25"
          }
        ],
        "transcripts": [
          {
            "id": "trans_inggris_2",
            "audio_url": null,
            "content": "Lecture Transcript: Procedural text explains how to accomplish a technical task step-by-step using action verbs and sequential connectors.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Tiga Komponen Struktur Wajib Teks Prosedural</h4>\n<ol>\n  <li><strong>Goal / Aim (Tujuan):</strong> Pernyataan eksplisit mengenai hasil akhir yang hendak dicapai (contoh: <em>How to Install and Configure Free Pascal on Windows 11</em>).</li>\n  <li><strong>Materials / Tools / Requirements (Persyaratan):</strong> Daftar perangkat keras, aplikasi pendukung, atau dependensi yang wajib dipersiapkan sebelum memulai proses.</li>\n  <li><strong>Steps / Methods (Urutan Langkah):</strong> Langkah-langkah instruksi berurutan menggunakan kalimat imperatif (perintah).</li>\n</ol>\n\n<h4>2. Penggunaan Kalimat Imperatif & Sequence Connectors</h4>\n<ul>\n  <li>Kalimat imperatif diawali langsung oleh kata kerja dasar (<em>Action Verbs</em>): <code>Download, click, extract, run, verify</code>.</li>\n  <li>Penghubung kronologis runtunan: <em>First</em>, <em>Second</em>, <em>Next</em>, <em>Then</em>, <em>After that</em>, <em>Finally</em>.</li>\n</ul>\n\n<h4>3. Studi Kasus Teknis IT: How to Initialize a Local Git Project</h4>\n<ol>\n  <li><em>First, open Windows Terminal and navigate to your project directory.</em></li>\n  <li><em>Second, execute the command <code>git init</code> to initialize an empty repository.</em></li>\n  <li><em>Next, create a <code>.gitignore</code> file to exclude node_modules and secret credentials.</em></li>\n  <li><em>Then, stage all changed files using <code>git add .</code> and commit with an informative message.</em></li>\n  <li><em>Finally, link your remote GitHub repository and push to the main branch.</em></li>\n</ol>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-inggris_m3",
        "subject_id": "subject-inggris",
        "meeting_number": 3,
        "date": "2026-10-02",
        "title": "Chapter III: Recount Texts & Talking about Past Holiday / Experiences",
        "description": "Simple past tense formulas, regular vs irregular verbs, and writing incident reports / retrospectives.",
        "notes": "Materi UTS: Perbedaan regular verbs akhiran -ed dengan irregular verbs.",
        "materials": [
          {
            "id": "mat_inggris_3_1",
            "type": "pdf",
            "title": "Dosen Chapter III: Talking about Holiday & Experiences.pdf",
            "file_url": "/materials/inggris_p3_chapter_3_holiday.pdf",
            "file_size": 420727,
            "date_added": "2026-10-02"
          }
        ],
        "transcripts": [
          {
            "id": "trans_inggris_3",
            "audio_url": null,
            "content": "Lecture Transcript: Recount text retells events or experiences in the past. In software teams, recount text format is heavily used during Sprint Retrospectives and Incident Post-Mortems.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Pola Formula Simple Past Tense</h4>\n<p>Digunakan untuk menceritakan peristiwa, aktivitas, atau eksperimen yang telah terjadi dan selesai pada masa lampau:</p>\n<ul>\n  <li><strong>Kalimat Positif:</strong> <code>Subject + Verb 2 (Past Form)</code></li>\n  <li><strong>Kalimat Negatif:</strong> <code>Subject + did not + Verb 1 murni</code> (<em>We did not deploy the build yesterday.</em>)</li>\n  <li><strong>Kalimat Tanya:</strong> <code>Did + Subject + Verb 1 murni?</code> (<em>Did you test the database migration?</em>)</li>\n</ul>\n\n<h4>2. Tabel Regular Verbs vs Irregular Verbs</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Kategori Verba</th><th>Verb 1 (Present)</th><th>Verb 2 (Past Form)</th><th>Arti Teknis</th></tr></thead>\n    <tbody>\n      <tr><td rowspan=\"3\"><strong>Regular Verbs (Akhiran -ed)</strong></td><td><code>install</code></td><td><code>installed</code></td><td>Memasang piranti lunak</td></tr>\n      <tr><td><code>compile</code></td><td><code>compiled</code></td><td>Mengompilasi kode sumber</td></tr>\n      <tr><td><code>configure</code></td><td><code>configured</code></td><td>Mengonfigurasi parameter sistem</td></tr>\n      <tr><td rowspan=\"4\"><strong>Irregular Verbs (Bentuk Khusus)</strong></td><td><code>write</code></td><td><code>wrote</code></td><td>Menulis algoritma</td></tr>\n      <tr><td><code>build</code></td><td><code>built</code></td><td>Membangun aplikasi</td></tr>\n      <tr><td><code>find</code></td><td><code>found</code></td><td>Menemukan bug/celah kerentanan</td></tr>\n      <tr><td><code>run</code></td><td><code>ran</code></td><td>Menjalankan proses terminal</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>3. Contoh Kasus: Penulisan Bug Tracking Retrospective</h4>\n<p><em>\"Last weekend, our development team encountered a syntax error in the Pascal compiler. Haikel inspected the source code and noticed a missing semicolon before the declaration block. After he resolved the syntax mismatch, the compilation succeeded with zero warnings.\"</em></p>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-inggris_m4",
        "subject_id": "subject-inggris",
        "meeting_number": 4,
        "date": "2026-10-09",
        "title": "Chapter IV: Talking about Future Intentions & Planning (Will vs Be Going To)",
        "description": "Comparative analysis between modal Will and Be Going To for decisions, predictions, and roadmap planning.",
        "notes": "Materi kritis UTS: Bedakan keputusan spontan (will) dengan rencana terjadwal (be going to).",
        "materials": [
          {
            "id": "mat_inggris_4_1",
            "type": "pdf",
            "title": "Dosen Chapter IV: Talking about Plans & Intentions.pdf",
            "file_url": "/materials/inggris_p4_chapter_4_plans.pdf",
            "file_size": 459737,
            "date_added": "2026-10-09"
          }
        ],
        "transcripts": [
          {
            "id": "trans_inggris_4",
            "audio_url": null,
            "content": "Lecture Transcript: Modal 'will' expresses spontaneous decisions or personal opinions about the future. Frasa 'be going to' is reserved for prior plans and predictions supported by present physical evidence.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Tabel Komparasi Fundamental: Will vs Be Going To</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Aspek Komparasi</th><th>Modal 'Will'</th><th>Frasa 'Be Going To'</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Karakteristik Keputusan</strong></td><td>Keputusan spontan saat berbicara tanpa rencana sebelumnya (<em>Spontaneous decision</em>).</td><td>Rencana atau niat yang telah dirancang sebelumnya (<em>Prior plan / arrangement</em>).</td></tr>\n      <tr><td><strong>Dasar Prediksi</strong></td><td>Prediksi berdasarkan opini pribadi, harapan, atau intuisi subjektif.</td><td>Prediksi berdasarkan bukti nyata yang tampak jelas di depan mata (<em>Present evidence</em>).</td></tr>\n      <tr><td><strong>Contoh Keputusan</strong></td><td><em>\"The server alarm is buzzing. I will check the CPU load right now.\"</em></td><td><em>\"I am going to submit my algorithm term paper tomorrow morning at 08:00 AM.\"</em></td></tr>\n      <tr><td><strong>Contoh Prediksi</strong></td><td><em>\"I believe AI will assist all developers by 2030.\"</em></td><td><em>\"Look at that memory leak graph! The server is going to crash in a few seconds.\"</em></td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>2. Pola Rumus Gramatikal</h4>\n<ul>\n  <li><strong>Formula Will:</strong> <code>Subject + will + Verb 1 murni</code> (Negatif: <code>will not / won't</code>)</li>\n  <li><strong>Formula Be Going To:</strong> <code>Subject + (am/is/are) + going to + Verb 1 murni</code></li>\n</ul>",
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
    "name": "Matematika Dasar (Kalkulus Sistem Informasi)",
    "code": "TI-106",
    "lecturer": "Dr. Munali, M.Pd. / Syifaafidah, M.Pd.",
    "schedule": "Kamis • 09:10 - 10:50 WIB • Ruang R.4.3-2",
    "room": "Ruang R.4.3-2",
    "color": "#06B6D4",
    "target_meetings": 16,
    "semester": "Semester 1",
    "academic_year": "2026/2027",
    "meetings": [
      {
        "id": "subject-matdas_m1",
        "subject_id": "subject-matdas",
        "meeting_number": 1,
        "date": "2026-09-18",
        "title": "Sistem Bilangan Real, Operasi Aljabar, dan Notasi Interval",
        "description": "Hierarki 10 himpunan bilangan, 5 sifat aksioma aljabar, aturan perkalian negatif pembalik tanda, dan notasi selang.",
        "notes": "Materi UTS: Gunakan notasi Unicode bersih tanpa kode LaTeX mentah yang berisiko broken-render.",
        "materials": [
          {
            "id": "mat_matdas_1_1",
            "type": "pdf",
            "title": "Modul Dosen P1: Sistem Bilangan Real (1789117602.pdf)",
            "file_url": "/materials/matdas_p1_sistem_bilangan_real.pdf",
            "file_size": 422280,
            "date_added": "2026-09-18"
          }
        ],
        "transcripts": [
          {
            "id": "trans_matdas_1",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Bilangan real mencakup rasional dan irasional. Aturan kritis ketaksamaan: mengalikan atau membagi kedua ruas dengan bilangan negatif WAJIB membalik arah tanda ketaksamaan.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Hierarki & Klasifikasi 10 Himpunan Bilangan</h4>\n<p>Hierarki Inklusi: <strong>ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ</strong></p>\n<ol>\n  <li><strong>Bilangan Asli (ℕ / Natural):</strong> Himpunan bilangan hitung bulat positif: <code>{ 1, 2, 3, 4, 5, ... }</code>. Digunakan sebagai indeks perulangan loop komputasi.</li>\n  <li><strong>Bilangan Cacah (𝕎 / Whole):</strong> Gabungan angka nol dan bilangan asli: <code>{ 0, 1, 2, 3, 4, ... }</code>. Indeks array berbasis nol (zero-based indexing).</li>\n  <li><strong>Bilangan Bulat (ℤ / Integers):</strong> Seluruh bilangan bulat negatif, nol, dan bulat positif: <code>{ ..., -3, -2, -1, 0, 1, 2, 3, ... }</code>.</li>\n  <li><strong>Bilangan Rasional (ℚ):</strong> Bilangan yang dapat dinyatakan dalam pecahan murni <code>p / q</code> dengan <code>p, q ∈ ℤ</code> dan <code>q ≠ 0</code>. Pola desimalnya berhenti (contoh: <code>3/8 = 0,375</code>) atau berulang teratur (contoh: <code>13/11 = 1,181818...</code>).</li>\n  <li><strong>Bilangan Irasional (ℚ'):</strong> Bilangan desimal tak berhingga yang tidak berulang periodik dan tidak dapat dibentuk dari rasio dua integer (contoh: <code>√2 ≈ 1,4142...</code>, <code>π ≈ 3,14159...</code>, <code>e ≈ 2,71828...</code>).</li>\n  <li><strong>Bilangan Real (ℝ):</strong> Gabungan lengkap seluruh bilangan rasional dan irasional (<code>ℝ = ℚ ∪ ℚ'</code>) yang mengisi garis bilangan secara kontinu.</li>\n  <li><strong>Bilangan Imajiner:</strong> Bilangan akar negatif <code>i = √(-1)</code> dengan sifat <code>i² = -1</code>.</li>\n  <li><strong>Bilangan Kompleks (ℂ):</strong> Pasangan bilangan riil dan imajiner dalam format <code>z = a + bi</code> dengan <code>a, b ∈ ℝ</code>.</li>\n  <li><strong>Bilangan Prima:</strong> Bilangan asli > 1 yang hanya memiliki tepat dua pembagi bulat: 1 dan dirinya sendiri: <code>{ 2, 3, 5, 7, 11, 13, 17, 19, ... }</code>. Fondasi algoritma kriptografi RSA.</li>\n  <li><strong>Bilangan Komposit:</strong> Bilangan asli > 1 selain bilangan prima: <code>{ 4, 6, 8, 9, 10, 12, ... }</code>.</li>\n</ol>\n\n<h4>2. Lima Sifat Aksioma Aljabar Bilangan Real</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Sifat Aljabar</th><th>Operasi Penjumlahan (+)</th><th>Operasi Perkalian (·)</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Komutatif (Pertukaran)</strong></td><td><code>x + y = y + x</code></td><td><code>x · y = y · x</code></td></tr>\n      <tr><td><strong>Asosiatif (Pengelompokan)</strong></td><td><code>(x + y) + z = x + (y + z)</code></td><td><code>(x · y) · z = x · (y · z)</code></td></tr>\n      <tr><td><strong>Distributif (Penyebaran)</strong></td><td colspan=\"2\" style=\"text-align: center;\"><code>x · (y + z) = (x · y) + (x · z)</code></td></tr>\n      <tr><td><strong>Elemen Identitas (Netral)</strong></td><td><code>x + 0 = x</code> (Elemen Netral Penjumlahan: 0)</td><td><code>x · 1 = x</code> (Elemen Netral Perkalian: 1)</td></tr>\n      <tr><td><strong>Elemen Invers (Balikan)</strong></td><td><code>x + (-x) = 0</code> (Invers Aditif / Lawan)</td><td><code>x · (1/x) = 1</code> untuk <code>x ≠ 0</code> (Invers Multiplikatif)</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>3. Empat Sifat Urutan Garis Bilangan Real</h4>\n<ul>\n  <li><strong>Trikotomi:</strong> Untuk dua bilangan real <code>x</code> dan <code>y</code>, pasti tepat satu relasi yang berlaku: <code>x < y</code>, <code>x = y</code>, atau <code>x > y</code>.</li>\n  <li><strong>Ketransitifan:</strong> Jika <code>x < y</code> dan <code>y < z</code>, maka pasti <code>x < z</code>.</li>\n  <li><strong>Penambahan:</strong> <code>x < y ⟺ x + z < y + z</code> (menambah bilangan pada kedua ruas tidak mengubah tanda).</li>\n  <li><strong>Perkalian (ATURAN EMAS KETAKSAMAAN):</strong>\n    <ul>\n      <li>Jika dikalikan bilangan <strong>positif (z > 0)</strong>: tanda ketaksamaan <strong>TETAP</strong> (<code>x < y ⟺ x·z < y·z</code>).</li>\n      <li>Jika dikalikan bilangan <strong>negatif (z < 0)</strong>: arah tanda ketaksamaan <strong>WAJIB DIBALIK</strong> (<code>x < y ⟺ x·z > y·z</code>).</li>\n    </ul>\n  </li>\n</ul>\n\n<h4>4. Tabel Notasi Selang (Interval) Garis Bilangan Real</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Notasi Selang</th><th>Definisi Notasi Himpunan</th><th>Karakteristik Titik Ujung</th></tr></thead>\n    <tbody>\n      <tr><td><code>(a, b)</code></td><td><code>{ x ∈ ℝ | a < x < b }</code></td><td>Selang Terbuka: titik a dan b TIDAK masuk (kurung biasa <code>()</code>, bulatan kosong ○).</td></tr>\n      <tr><td><code>[a, b]</code></td><td><code>{ x ∈ ℝ | a ≤ x ≤ b }</code></td><td>Selang Tertutup: titik a dan b IKUT masuk (kurung siku <code>[]</code>, bulatan penuh ●).</td></tr>\n      <tr><td><code>[a, b)</code></td><td><code>{ x ∈ ℝ | a ≤ x < b }</code></td><td>Setengah terbuka: a ikut masuk, b tidak masuk.</td></tr>\n      <tr><td><code>(a, b]</code></td><td><code>{ x ∈ ℝ | a < x ≤ b }</code></td><td>Setengah terbuka: a tidak masuk, b ikut masuk.</td></tr>\n      <tr><td><code>(-∞, b)</code></td><td><code>{ x ∈ ℝ | x < b }</code></td><td>Sayap tak hingga ke kiri tanpa titik b.</td></tr>\n      <tr><td><code>(-∞, b]</code></td><td><code>{ x ∈ ℝ | x ≤ b }</code></td><td>Sayap tak hingga ke kiri termasuk titik b.</td></tr>\n      <tr><td><code>(a, ∞)</code></td><td><code>{ x ∈ ℝ | x > a }</code></td><td>Sayap tak hingga ke kanan tanpa titik a.</td></tr>\n      <tr><td><code>[a, ∞)</code></td><td><code>{ x ∈ ℝ | x ≥ a }</code></td><td>Sayap tak hingga ke kanan termasuk titik a.</td></tr>\n    </tbody>\n  </table>\n</div>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-matdas_m2",
        "subject_id": "subject-matdas",
        "meeting_number": 2,
        "date": "2026-09-25",
        "title": "Pertidaksamaan Bilangan Real & Langkah Penentuan Himpunan Penyelesaian (HP)",
        "description": "Lima langkah baku penentuan HP, pertidaksamaan linier, ganda, kuadrat, pecahan rasional, dan pembahasan soal dosen.",
        "notes": "Materi inti UTS: Kuasai uji titik nol dan lingkaran kosong pada pembuat nol penyebut.",
        "materials": [
          {
            "id": "mat_matdas_2_1",
            "type": "pdf",
            "title": "Modul Dosen P2: Pertidaksamaan Bilangan Real (1789631769.pdf)",
            "file_url": "/materials/matdas_p2_pertidaksamaan_real.pdf",
            "file_size": 1837126,
            "date_added": "2026-09-25"
          }
        ],
        "transcripts": [
          {
            "id": "trans_matdas_2",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Pembagian penyebut pada pertidaksamaan pecahan tidak boleh langsung dikalikan silang jika belum diketahui tanda positif atau negatifnya. Pindahkan ke ruas kiri dan samakan penyebut.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Lima Langkah Baku Menentukan Himpunan Penyelesaian (HP)</h4>\n<ol>\n  <li><strong>Nolkan Ruas Kanan:</strong> Pindahkan semua suku ke ruas kiri sehingga ruas kanan menjadi nol (<code>f(x) < 0</code> atau <code>f(x) > 0</code>).</li>\n  <li><strong>Faktorkan / Samakan Penyebut:</strong> Faktorkan bentuk kuadrat menjadi faktor-faktor linier <code>(x - x₁)(x - x₂)</code>. Untuk pecahan aljabar, samakan penyebut menjadi satu pecahan tunggal <code>P(x) / Q(x)</code>.</li>\n  <li><strong>Tentukan Titik Pemecah (Split Points):</strong> Cari pembuat nol pembilang (<code>P(x) = 0</code>) dan pembuat nol penyebut (<code>Q(x) = 0</code>).\n    <br><em>Ingat Syarat Mutlak:</em> Titik pembuat nol penyebut SELALU berupa <strong>lingkaran kosong (○)</strong> karena pembagian dengan nol tidak terdefinisi!</li>\n  <li><strong>Plot pada Garis Bilangan & Lakukan Uji Titik:</strong> Pilih satu angka uji di luar titik pemecah (paling mudah <code>x = 0</code>) untuk menentukan tanda interval (<code>+</code> atau <code>-</code>).</li>\n  <li><strong>Tuliskan Himpunan Penyelesaian (HP):</strong> Jika tanda soal <code>> 0</code> atau <code>≥ 0</code>, pilih daerah bertanda positif (<code>+</code>). Jika tanda <code>< 0</code> atau <code>≤ 0</code>, pilih daerah bertanda negatif (<code>-</code>).</li>\n</ol>\n\n<h4>2. Pembahasan Lengkap Seluruh Latihan Soal Slide Dosen (Step-by-Step)</h4>\n\n<h5>Soal 1: Pertidaksamaan Linier</h5>\n<pre><code>2x - 7 < 4x - 2\n⟺ 2x - 4x < -2 + 7\n⟺ -2x < 5\n⟺ x > -5/2  (Kedua ruas dibagi -2, arah tanda < dibalik menjadi >)\nHP = { x ∈ ℝ | x > -2,5 } = ( -5/2, ∞ )</code></pre>\n\n<h5>Soal 2: Pertidaksamaan Ganda</h5>\n<pre><code>-5 ≤ 2x + 6 < 4\n⟺ -5 - 6 ≤ 2x < 4 - 6  (Kurangkan 6 pada ketiga ruas)\n⟺ -11 ≤ 2x < -2\n⟺ -11/2 ≤ x < -1       (Bagi 2 pada ketiga ruas)\nHP = [ -11/2, -1 )</code></pre>\n\n<h5>Soal 3: Pertidaksamaan Ganda Kedua</h5>\n<pre><code>13 ≥ 2x - 3 ≥ 5\n⟺ 16 ≥ 2x ≥ 8   (Tambah 3 pada ketiga ruas)\n⟺ 8 ≥ x ≥ 4     (Bagi 2 pada ketiga ruas, setara dengan 4 ≤ x ≤ 8)\nHP = [ 4, 8 ]</code></pre>\n\n<h5>Soal 4: Pertidaksamaan Kuadrat</h5>\n<pre><code>x² - x < 6\n⟺ x² - x - 6 < 0\n⟺ (x - 3)(x + 2) < 0\nTitik pemecah: x = 3 dan x = -2 (Keduanya lingkaran kosong ○)\nUji titik x = 0: (0 - 3)(0 + 2) = -6 (Tanda Negatif -)\nGaris Bilangan: (+) --- (-2) --- (-) --- (3) --- (+)\nKarena diminta < 0, ambil interval bertanda negatif:\nHP = { x ∈ ℝ | -2 < x < 3 } = ( -2, 3 )</code></pre>\n\n<h5>Soal 5: Pertidaksamaan Pecahan Rasional</h5>\n<pre><code>(x - 1) / (x + 2) ≥ 0\nPembuat nol pembilang: x - 1 = 0 ⟹ x = 1 (Lingkaran PENUH ● karena tanda ≥)\nPembuat nol penyebut : x + 2 = 0 ⟹ x = -2 (Lingkaran KOSONG ○ syarat penyebut ≠ 0)\nUji titik x = 0: (0 - 1) / (0 + 2) = -1/2 (Tanda Negatif -)\nGaris Bilangan: (+) --- (-2) --- (-) --- [1] --- (+)\nKarena diminta ≥ 0, ambil interval bertanda positif:\nHP = ( -∞, -2 ) ∪ [ 1, ∞ )</code></pre>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-matdas_m3",
        "subject_id": "subject-matdas",
        "meeting_number": 3,
        "date": "2026-10-02",
        "title": "Pertidaksamaan Nilai Mutlak & Konsep Pemetaan Fungsi",
        "description": "Delapan sifat nilai mutlak, metode pengkuadratan selisih kuadrat A² - B², domain alami, range, dan uji simetri fungsi.",
        "notes": "Materi UTS: Gunakan rumus faktorisasi selisih kuadrat (A + B)(A - B) untuk kasus nilai mutlak dua ruas.",
        "materials": [
          {
            "id": "mat_matdas_3_1",
            "type": "pdf",
            "title": "Modul Dosen P3: Pertidaksamaan Nilai Mutlak & Fungsi (1790406762.pdf)",
            "file_url": "/materials/matdas_p3_fungsi_dan_grafik.pdf",
            "file_size": 564156,
            "date_added": "2026-10-02"
          }
        ],
        "transcripts": [
          {
            "id": "trans_matdas_3",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Nilai mutlak geometrisnya adalah jarak titik dari nol. Menyelesaikan nilai mutlak pada kedua ruas paling cepat menggunakan faktorisasi selisih kuadrat.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Definisi Geometris & Delapan Sifat Utama Nilai Mutlak</h4>\n<p>Nilai mutlak <code>|x|</code> merepresentasikan jarak skalar titik <code>x</code> dari titik nol pada garis bilangan (selalu bernilai non-negatif <code>|x| ≥ 0</code>):</p>\n<ul>\n  <li><code>|x| = x</code> jika <code>x ≥ 0</code></li>\n  <li><code>|x| = -x</code> jika <code>x < 0</code></li>\n</ul>\n\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>No</th><th>Sifat Aljabar Nilai Mutlak</th><th>Penjelasan Penggunaan</th></tr></thead>\n    <tbody>\n      <tr><td>1</td><td><code>|a · b| = |a| · |b|</code></td><td>Nilai mutlak perkalian sama dengan perkalian nilai mutlak.</td></tr>\n      <tr><td>2</td><td><code>|a / b| = |a| / |b|</code> (untuk <code>b ≠ 0</code>)</td><td>Nilai mutlak pembagian sama dengan pembagian nilai mutlak.</td></tr>\n      <tr><td>3</td><td><code>|a + b| ≤ |a| + |b|</code></td><td><em>Ketaksamaan Segitiga (Triangle Inequality)</em>.</td></tr>\n      <tr><td>4</td><td><code>|a - b| ≥ ||a| - |b||</code></td><td>Batas bawah selisih nilai mutlak.</td></tr>\n      <tr><td>5</td><td><code>|x| = √(x²)</code></td><td>Hubungan akar kuadrat dengan nilai mutlak.</td></tr>\n      <tr><td>6</td><td><code>|x| < a ⟺ -a < x < a</code></td><td>Daerah selang berada di dalam interval pemecah.</td></tr>\n      <tr><td>7</td><td><code>|x| > a ⟺ x < -a atau x > a</code></td><td>Daerah selang berada di sayap luar garis bilangan.</td></tr>\n      <tr><td>8</td><td><code>|x| ≤ |y| ⟺ x² ≤ y²</code></td><td>Metode kuadrat kedua ruas untuk pertidaksamaan nilai mutlak ganda.</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>2. Pembahasan Latihan Soal Nilai Mutlak Slide Dosen (Step-by-Step)</h4>\n\n<h5>Kasus 1 Ruas: |3x - 5| ≥ 1</h5>\n<pre><code>Gunakan Sifat 7:\n3x - 5 ≤ -1   atau   3x - 5 ≥ 1\n⟺ 3x ≤ 4             ⟺ 3x ≥ 6\n⟺ x ≤ 4/3            ⟺ x ≥ 2\nHP = ( -∞, 4/3 ] ∪ [ 2, ∞ )</code></pre>\n\n<h5>Kasus 2 Ruas: |2x + 3| ≥ |4x + 5|</h5>\n<pre><code>Gunakan Sifat 8 (Kuadratkan kedua ruas):\n(2x + 3)² ≥ (4x + 5)²\n⟺ (2x + 3)² - (4x + 5)² ≥ 0\nFaktorkan dengan rumus selisih kuadrat: A² - B² = (A + B)(A - B)\n⟺ [(2x + 3) + (4x + 5)] · [(2x + 3) - (4x + 5)] ≥ 0\n⟺ (6x + 8)(-2x - 2) ≥ 0\nBagi kedua ruas dengan -4 (TANDA PERTIDAKSAMAAN WAJIB DIBALIK!):\n⟺ (3x + 4)(x + 1) ≤ 0\nTitik pemecah: x = -4/3 dan x = -1\nUji titik x = 0: (3(0) + 4)(0 + 1) = +4 (Positif)\nGaris Bilangan: (+) --- [-4/3] --- (-) --- [-1] --- (+)\nKarena diminta ≤ 0, ambil daerah negatif di antara dua pemecah:\nHP = [ -4/3, -1 ]</code></pre>\n\n<h4>3. Konsep Pemetaan Fungsi f : X ➔ Y</h4>\n<ul>\n  <li><strong>Definisi Fungsi:</strong> Aturan relasi yang memetakan setiap elemen <code>x</code> pada himpunan daerah asal (Domain / <code>D_f</code>) dengan TEPAT SATU elemen bayangan <code>f(x)</code> pada himpunan daerah kawan (Kodomain). Himpunan semua nilai bayangan keluaran disebut Range (<code>R_f</code>).</li>\n  <li><strong>Syarat Domain Alami (Natural Domain):</strong>\n    <ul>\n      <li>Bentuk Akar Irasional: <code>f(x) = √(p(x)) ⟹ Syarat: p(x) ≥ 0</code> (di dalam akar tidak boleh negatif).</li>\n      <li>Bentuk Pecahan Aljabar: <code>f(x) = p(x) / q(x) ⟹ Syarat: q(x) ≠ 0</code> (penyebut tidak boleh bernilai nol).</li>\n    </ul>\n  </li>\n  <li><strong>Uji Simetri Kurva Fungsi:</strong>\n    <ul>\n      <li><em>Fungsi Genap:</em> <code>f(-x) = f(x)</code> (Grafik kurva simetris terhadap sumbu Y). Contoh: <code>f(x) = x² - 4</code>.</li>\n      <li><em>Fungsi Ganjil:</em> <code>f(-x) = -f(x)</code> (Grafik kurva simetris terhadap titik pusat asal (0,0)). Contoh: <code>g(x) = x³ - 3x</code>.</li>\n    </ul>\n  </li>\n</ul>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-matdas_m4",
        "subject_id": "subject-matdas",
        "meeting_number": 4,
        "date": "2026-10-09",
        "title": "Persamaan Garis Lurus, Gradien & Grafik Parabola Kuadrat",
        "description": "Gradien garis m, garis sejajar vs tegak lurus, kurva parabola kuadrat, diskriminan D, titik puncak, dan definit positif/negatif.",
        "notes": "Materi inti UTS: Kuasai hubungan gradien tegak lurus m1 * m2 = -1 dan rumus titik puncak parabola (-b/2a, -D/4a).",
        "materials": [
          {
            "id": "mat_matdas_4_1",
            "type": "pdf",
            "title": "Modul Dosen P4: Persamaan Garis, Gradien & Parabola Kuadrat.pdf",
            "file_url": "/materials/matdas_p3_fungsi_dan_grafik.pdf",
            "file_size": 564156,
            "date_added": "2026-10-09"
          }
        ],
        "transcripts": [
          {
            "id": "trans_matdas_4",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Gradien menyatakan kemiringan garis delta y dibagi delta x. Dua garis saling tegak lurus jika perkalian gradiennya menghasilkan nilai minus satu. Pada parabola kuadrat, nilai a menentukan arah bukaan kurva.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Koordinat Kartesius 2D & Rumus Gradien (Kemiringan Garis m)</h4>\n<ul>\n  <li>Kuadran I (<code>+x, +y</code>), Kuadran II (<code>-x, +y</code>), Kuadran III (<code>-x, -y</code>), Kuadran IV (<code>+x, -y</code>).</li>\n  <li><strong>Rumus Gradien Garis Melalui Dua Titik (x₁, y₁) dan (x₂, y₂):</strong>\n    <blockquote style=\"border-left: 4px solid #06B6D4; padding-left: 14px; margin: 10px 0; color: #E0F2FE; font-family: monospace; background: rgba(6, 182, 212, 0.08); padding: 10px 14px; border-radius: 4px;\">\n      m = Δy / Δx = (y₂ - y₁) / (x₂ - x₁)\n    </blockquote>\n  </li>\n  <li><strong>Bentuk Persamaan Garis:</strong>\n    <ul>\n      <li><em>Bentuk Eksplisit:</em> <code>y = m·x + c</code> (gradien <code>m</code>, memotong sumbu Y di titik <code>(0, c)</code>).</li>\n      <li><em>Bentuk Implisit Umum:</em> <code>Ax + By + C = 0</code> ⟹ Gradien <code>m = -A / B</code>.</li>\n      <li><em>Persamaan Melalui Titik (x₁, y₁) Bergradien m:</em> <code>y - y₁ = m · (x - x₁)</code>.</li>\n    </ul>\n  </li>\n</ul>\n\n<h4>2. Hubungan Antar-Dua Garis Lurus</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Kondisi Geometri</th><th>Syarat Gradien Matematis</th><th>Karakteristik Hubungan</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Dua Garis Sejajar (Parallel)</strong></td><td><code>m₁ = m₂</code></td><td>Kedua garis memiliki kemiringan identik sama dan tidak akan pernah berpotongan di titik mana pun.</td></tr>\n      <tr><td><strong>Dua Garis Tegak Lurus (Perpendicular)</strong></td><td><code>m₁ · m₂ = -1 ⟺ m₂ = -1 / m₁</code></td><td>Kedua garis berpotongan saling membentuk sudut siku-siku 90° (Prinsip: \"Lawan dan Kebalikan\").</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>3. Karakteristik Kurva Parabola Fungsi Kuadrat f(x) = a·x² + b·x + c</h4>\n<ol>\n  <li><strong>Arah Bukaan Kurva:</strong>\n    <ul>\n      <li>Jika <code>a > 0</code>: Parabola terbuka ke ATAS (memiliki titik balik minimum lembah).</li>\n      <li>Jika <code>a < 0</code>: Parabola terbuka ke BAWAH (memiliki titik balik maksimum bukit).</li>\n    </ul>\n  </li>\n  <li><strong>Peran Diskriminan D = b² - 4·a·c:</strong>\n    <ul>\n      <li><code>D > 0</code>: Parabola memotong sumbu X di 2 titik riil berlainan (<code>x₁ ≠ x₂</code>).</li>\n      <li><code>D = 0</code>: Parabola menyinggung sumbu X di 1 titik kembar (<code>x₁ = x₂</code>).</li>\n      <li><code>D < 0</code>: Parabola tidak memotong sumbu X sama sekali (kurva melayang pasti/definit):\n        <ul>\n          <li><em>Definit Positif (selalu bernilai positif di atas sumbu X untuk semua x):</em> <code>a > 0</code> dan <code>D < 0</code>.</li>\n          <li><em>Definit Negatif (selalu bernilai negatif di bawah sumbu X untuk semua x):</em> <code>a < 0</code> dan <code>D < 0</code>.</li>\n        </ul>\n      </li>\n    </ul>\n  </li>\n  <li><strong>Titik Puncak (Titik Ekstrim) Parabola:</strong>\n    <blockquote style=\"border-left: 4px solid #06B6D4; padding-left: 14px; margin: 10px 0; color: #E0F2FE; font-family: monospace; background: rgba(6, 182, 212, 0.08); padding: 10px 14px; border-radius: 4px;\">\n      P(x_p, y_p) = ( -b / (2a) , -D / (4a) )\n    </blockquote>\n    Di mana <code>x_p = -b / (2a)</code> adalah sumbu simetri vertikal, dan <code>y_p = -D / (4a)</code> adalah nilai optimum ekstrem (minimum/maksimum).\n  </li>\n</ol>",
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
    "name": "Pendidikan Pancasila (MK02)",
    "code": "MK02",
    "lecturer": "Tim Dosen Pancasila Unindra (Pengembang RPS: Dr. Ida Rosida, MH., Dr. Julia Bea Kurniawaty, SH., MH., Dr. Iis Dewi Lestari, M.Pd.)",
    "schedule": "Jumat • 07:30 - 09:10 WIB • Ruang R.4.4-1",
    "room": "Ruang R.4.4-1",
    "color": "#EF4444",
    "target_meetings": 16,
    "semester": "Semester 1",
    "academic_year": "2026/2027",
    "meetings": [
      {
        "id": "subject-pancasila_m1",
        "subject_id": "subject-pancasila",
        "meeting_number": 1,
        "date": "2026-09-19",
        "title": "Landasan, Visi, Misi Pendidikan Pancasila & Proyek MKWK",
        "description": "Empat landasan filosofis kuliah Pancasila, UU No. 12/2012 Pasal 35, dan rancangan kolaborasi proyek lapangan MKWK.",
        "notes": "Materi UTS: Kuasai 4 landasan pendidikan Pancasila (historis, kultural, yuridis, filosofis).",
        "materials": [
          {
            "id": "mat_pancasila_1_1",
            "type": "pdf",
            "title": "Modul Dosen P1: Landasan Pendidikan Pancasila (1694442422.pdf)",
            "file_url": "/materials/pancasila_p1_landasan_pendidikan.pdf",
            "file_size": 452944,
            "date_added": "2026-09-19"
          },
          {
            "id": "mat_pancasila_1_2",
            "type": "pdf",
            "title": "RPS Kurikulum Resmi MK02 Pancasila Unindra (Gemini 2026).pdf",
            "file_url": "/materials/pancasila_rps_mk02_resmi_unindra.pdf",
            "file_size": 1120616,
            "date_added": "2026-09-19"
          }
        ],
        "transcripts": [
          {
            "id": "trans_pancasila_1",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Pancasila adalah Philosophische Grondslag yaitu dasar filsafat negara sekaligus Weltanschauung atau pandangan hidup bersama. Mahasiswa wajib memiliki landasan etika moral sebelum menguasai teknologi.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Empat Landasan Utama Penyelenggaraan Kuliah Pancasila</h4>\n<ol>\n  <li><strong>Landasan Historis:</strong> Nilai-nilai Pancasila tidak diciptakan secara mendadak pada tahun 1945, melainkan telah berurat-berakar dalam peradaban Nusantara ribuan tahun silam (kerukunan adat, kedermawanan prasasti Kutai, dan musyawarah mufakat desa).</li>\n  <li><strong>Landasan Kultural:</strong> Pancasila merupakan kristalisasi kepribadian dan pandangan hidup kultural bangsa Indonesia sendiri, bukan mengadopsi mentah ideologi asing individualis Barat maupun totalitarian Timur.</li>\n  <li><strong>Landasan Yuridis:</strong> Berdasarkan amanat konstitusi UUD NRI 1945 serta <strong>Undang-Undang No. 12 Tahun 2012 tentang Pendidikan Tinggi (Pasal 35 ayat 3)</strong>, Pancasila ditetapkan sebagai mata kuliah wajib kurikulum (MKWK) di seluruh perguruan tinggi Indonesia.</li>\n  <li><strong>Landasan Filosofis:</strong> Pancasila berkedudukan sebagai <em>Philosophische Grondslag</em> (dasar filsafat bernegara) dan <em>Weltanschauung</em> (pedoman pandangan hidup bangsa yang membimbing moralitas keilmuan).</li>\n</ol>\n\n<h4>2. Visi & Misi Pendidikan Pancasila di Perguruan Tinggi</h4>\n<ul>\n  <li><strong>Visi:</strong> Terwujudnya kepribadian civitas akademika yang bersumber pada nilai-nilai luhur Pancasila dalam mengembangkan iptek berwawasan kebangsaan.</li>\n  <li><strong>Misi:</strong> Menyiapkan mahasiswa beriman dan bertakwa, bermartabat, memiliki daya saing global, berintegritas anti-korupsi, serta peka terhadap keadilan sosial lingkungan hidup.</li>\n</ul>\n\n<h4>3. Kolaborasi Proyek Pengabdian Masyarakat MKWK</h4>\n<p>Mata kuliah Pancasila dirancang terintegrasi dengan Bahasa Indonesia, Agama Islam, dan Kewarganegaraan dalam format tugas proyek lapangan kemasyarakatan (contoh proyek kelas: <em>Proposal Digitalisasi Sistem Kasir UMKM Dapoer Uti Zaza</em> untuk memberdayakan ekonomi rakyat berbasis gotong royong).</p>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-pancasila_m2",
        "subject_id": "subject-pancasila",
        "meeting_number": 2,
        "date": "2026-09-26",
        "title": "Pancasila dalam Lintasan Sejarah [SEBELUM KEMERDEKAAN] • PRESENTASI KELOMPOK 1",
        "description": "Bahan presentasi Kelompok 1, jejak Kutai-Sriwijaya-Majapahit, sidang BPUPKI I, usulan Yamin-Soepomo-Soekarno, dan Piagam Jakarta.",
        "notes": "Materi presentasi resmi RPS: Kuasai usulan 3 tokoh perumus dasar negara dan naskah Piagam Jakarta 22 Juni 1945.",
        "materials": [
          {
            "id": "mat_pancasila_2_1",
            "type": "pdf",
            "title": "Modul Dosen P2: Pancasila Pra-Kemerdekaan (1695012147.pdf)",
            "file_url": "/materials/pancasila_p2_pra_kemerdekaan.pdf",
            "file_size": 1885189,
            "date_added": "2026-09-26"
          },
          {
            "id": "mat_pancasila_2_2",
            "type": "pdf",
            "title": "RPS Kurikulum Resmi MK02 Pancasila Unindra.pdf",
            "file_url": "/materials/pancasila_rps_mk02_resmi_unindra.pdf",
            "file_size": 1120616,
            "date_added": "2026-09-26"
          }
        ],
        "transcripts": [
          {
            "id": "trans_pancasila_2",
            "audio_url": null,
            "content": "Transkrip Sesi Presentasi Kelompok 1: Pembahasan komprehensif mengupas Sidang BPUPKI I dari pidato Mr. Yamin, gagasan integralistik Prof. Soepomo, hingga pidato Bung Karno 1 Juni 1945 yang melahirkan nama Pancasila.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Profil Presentasi Kelompok 1 (RPS Resmi MK02)</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Topik Bahan Kajian</th><th>Anggota Kelompok 1 Mahasiswa</th><th>Jadwal Sesi Perkuliahan</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Pancasila dalam Lintasan Sejarah: Periode Sebelum Kemerdekaan</strong><br><em>(Masa Kerajaan, Perjuangan Kolonial, Sidang BPUPKI I, Panitia Sembilan, Piagam Jakarta)</em></td><td>1. A ALIF ASSYAFIYYAH<br>2. AILA AZ ZAHRA ZAINUDDIN<br>3. ACHMAD MIKO AL TORIK<br>4. AINI KURNIA SARI</td><td>Pertemuan 2 (Jumat, 26 September 2026)</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>2. Nilai Religio-Kultural pada Era Kerajaan Nusantara Kuno</h4>\n<ul>\n  <li><strong>Kerajaan Kutai (400 M, Kalimantan Timur):</strong> Ditemukannya 7 Prasasti Yupa membuktikan praktik kedermawanan Raja Mulawarman yang menyedekahkan 20.000 ekor sapi kepada para Brahmana (manifestasi nilai Ketuhanan dan Kemanusiaan).</li>\n  <li><strong>Kerajaan Sriwijaya (Abad VII, Sumatera Selatan):</strong> Sebagai negara maritim kebangsaan pertama Nusantara, Sriwijaya mendirikan pusat perguruan tinggi agama Buddha dan menjunjung tinggi toleransi kerukunan antarpemeluk agama.</li>\n  <li><strong>Kerajaan Majapahit (Abad XIII–XVI, Jawa Timur):</strong>\n    <ul>\n      <li>Kitab <em>Sutasoma</em> karya <strong>Mpu Tantular</strong> melahirkan semboyan abadi: <em>\"Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa\"</em> (Berbeda-beda tetapi tetap satu, tiada kebenaran yang mendua).</li>\n      <li>Kitab <em>Negarakertagama</em> karya <strong>Mpu Prapanca</strong> memuat istilah <em>Pancasila</em> dalam konteks moral budi pekerti <em>Pancasila Krama</em> (5 larangan moral: dilarang membunuh, mencuri, berzina, berdusta, dan meminum minuman memabukkan).</li>\n    </ul>\n  </li>\n</ul>\n\n<h4>3. Sidang BPUPKI I (29 Mei – 1 Juni 1945): Tiga Tokoh Pengusul Dasar Negara</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Tokoh Bangsa</th><th>Tanggal Pidato</th><th>Gagasan Rumusan Dasar Negara</th><th>Esensi Filosofis</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Mr. Muhammad Yamin</strong></td><td>29 Mei 1945</td><td>1. Peri Kebangsaan<br>2. Peri Kemanusiaan<br>3. Peri Ketuhanan<br>4. Peri Kerakyatan<br>5. Kesejahteraan Rakyat</td><td>Menggabungkan gagasan hukum barat dengan kearifan adat istiadat kepulauan Nusantara.</td></tr>\n      <tr><td><strong>Prof. Dr. Soepomo</strong></td><td>31 Mei 1945</td><td>1. Persatuan<br>2. Kekeluargaan<br>3. Keseimbangan Lahir dan Batin<br>4. Musyawarah<br>5. Keadilan Rakyat</td><td><strong>Teori Negara Integralistik:</strong> Negara bukan untuk menjamin kepentingan individu kapitalis maupun kelas proletar, melainkan mengatasi seluruh golongan untuk persatuan utuh.</td></tr>\n      <tr><td><strong>Ir. Soekarno (Bung Karno)</strong></td><td>1 Juni 1945</td><td>1. Kebangsaan Indonesia (Nasionalisme)<br>2. Internasionalisme (Peri Kemanusiaan)<br>3. Mufakat atau Demokrasi<br>4. Kesejahteraan Sosial<br>5. Ketuhanan yang Berkebudayaan</td><td><strong>Lahirnya Istilah Pancasila:</strong> Diperas menjadi <em>Trisila</em> (Sosio-Nasionalisme, Sosio-Demokrasi, Ketuhanan), lalu diperas lagi menjadi <em>Ekasila</em>: <strong>GOTONG ROYONG</strong>.</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>4. Panitia Sembilan & Perumusan Piagam Jakarta (22 Juni 1945)</h4>\n<p>Untuk menyelaraskan pandangan kelompok kebangsaan dan kelompok Islam, dibentuklah Panitia Sembilan beranggotakan: Soekarno, Moh. Hatta, A.A. Maramis, Abikoesno Tjokrosoejoso, Abdoel Kahar Muzakir, Agus Salim, Achmad Soebardjo, K.H. Wachid Hasjim, dan Moh. Yamin.</p>\n<p>Hasil musyawarah melahirkan <strong>Piagam Jakarta (Jakarta Charter)</strong> dengan rumusan Sila Pertama yang berbunyi: <em>\"Ketuhanan dengan kewajiban menjalankan syari'at Islam bagi pemeluk-pemeluknya\"</em>.</p>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-pancasila_m3",
        "subject_id": "subject-pancasila",
        "meeting_number": 3,
        "date": "2026-10-03",
        "title": "Pancasila dalam Lintasan Sejarah [SESUDAH KEMERDEKAAN] • PRESENTASI KELOMPOK 2",
        "description": "Bahan presentasi Kelompok 2, konsensus PPKI 18 Agustus 1945, dinamika Orde Lama, Orde Baru, dan tantangan Reformasi.",
        "notes": "Materi presentasi resmi RPS: Kuasai alasan historis pencoretan 7 kata Piagam Jakarta dan dialektika 3 rezim.",
        "materials": [
          {
            "id": "mat_pancasila_3_1",
            "type": "pdf",
            "title": "Modul Dosen P3: Pancasila Pasca-Kemerdekaan (1695643952.pdf)",
            "file_url": "/materials/pancasila_p3_pasca_kemerdekaan.pdf",
            "file_size": 286525,
            "date_added": "2026-10-03"
          },
          {
            "id": "mat_pancasila_3_2",
            "type": "pdf",
            "title": "RPS Kurikulum Resmi MK02 Pancasila Unindra.pdf",
            "file_url": "/materials/pancasila_rps_mk02_resmi_unindra.pdf",
            "file_size": 1120616,
            "date_added": "2026-10-03"
          }
        ],
        "transcripts": [
          {
            "id": "trans_pancasila_3",
            "audio_url": null,
            "content": "Transkrip Sesi Presentasi Kelompok 2: Sidang PPKI 18 Agustus 1945 adalah bukti kenegarawanan para tokoh pendiri bangsa. Penggantian 7 kata Piagam Jakarta menjadi Ketuhanan Yang Maha Esa menyelamatkan integrasi wilayah Indonesia timur.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Profil Presentasi Kelompok 2 (RPS Resmi MK02)</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Topik Bahan Kajian</th><th>Anggota Kelompok 2 Mahasiswa</th><th>Jadwal Sesi Perkuliahan</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Pancasila dalam Lintasan Sejarah: Periode Sesudah Kemerdekaan</strong><br><em>(Sidang PPKI 18 Agustus 1945, Dinamika Orde Lama, Orde Baru, Era Reformasi)</em></td><td>1. AHMAD HAFIZH ISWHYUDI<br>2. DELYSIA VALA PUTRI DWI CALLISTA<br>3. AHMAD RAIHAN PRIMADIAWAN HERMANSYAH<br>4. HIKMATUS SHOLAWAT</td><td>Pertemuan 3 (Jumat, 3 Oktober 2026)</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>2. Sidang PPKI 18 Agustus 1945: Tiga Keputusan Bersejarah & Konsensus Luhur</h4>\n<ol>\n  <li><strong>Mengesahkan UUD 1945:</strong> Menetapkan Pembukaan UUD 1945 (yang memuat sila-sila Pancasila) dan Batang Tubuh konstitusi negara.</li>\n  <li><strong>Memilih Presiden dan Wakil Presiden:</strong> Mengangkat Ir. Soekarno dan Drs. Mohammad Hatta sebagai Presiden dan Wakil Presiden pertama RI secara aklamasi.</li>\n  <li><strong>Membentuk Komite Nasional Indonesia Pusat (KNIP):</strong> Untuk membantu tugas-tugas kepresidenan sebelum lembaga legislatif MPR/DPR terbentuk.</li>\n</ol>\n<blockquote style=\"border-left: 4px solid #EF4444; padding-left: 14px; margin: 12px 0; color: #FEE2E2; background: rgba(239, 68, 68, 0.1); padding: 12px 16px; border-radius: 6px;\">\n  <strong>KONSENSUS KEBANGSAAN BESAR:</strong><br>\n  Demi merajut keutuhan Republik Indonesia dari Sabang sampai Merauke dan merespons aspirasi saudara-saudara kita di Indonesia Bagian Timur (yang disampaikan melalui opsir AL Jepang kepada Bung Hatta), para tokoh Islam besar (Ki Bagoes Hadikoesoemo, Wahid Hasjim, Kasman Singodimedjo, Teuku Moh. Hasan) secara berjiwa besar menyepakati pencoretan 7 kata Piagam Jakarta dan menggantinya dengan rumusan inklusif: <strong>\"Ketuhanan Yang Maha Esa\"</strong>.\n</blockquote>\n\n<h4>3. Dialektika Tiga Rezim dalam Menjaga Eksistensi Pancasila</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Era Kepemimpinan</th><th>Rentang Masa</th><th>Ciri Khas & Dinamika Ideologi</th><th>Tantangan / Penyimpangan yang Terjadi</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Orde Lama (Bung Karno)</strong></td><td>1945 – 1965</td><td>Pencarian bentuk sistem politik (Demokrasi Parlementer RIS 1949, UUDS 1950, kembali ke UUD 1945 via Dekrit Presiden 5 Juli 1959).</td><td>Konsep Demokrasi Terpimpin, pemaksaan paham NASAKOM, pengangkatan presiden seumur hidup, dan tragedi kudeta G30S/PKI.</td></tr>\n      <tr><td><strong>Orde Baru (Soeharto)</strong></td><td>1966 – 1998</td><td>Tekad melaksanakan Pancasila dan UUD 1945 secara murni dan konsekuen melalui pembangunan Repelita.</td><td>Penataran P-4 yang kaku, pemaksaan Asas Tunggal, penafsiran tunggal kekuasaan, pembungkaman suara kritis, dan maraknya KKN.</td></tr>\n      <tr><td><strong>Era Reformasi</strong></td><td>1998 – Sekarang</td><td>Penetapan Pancasila sebagai ideologi terbuka, penguatan checks and balances lewat 4 kali amandemen UUD 1945.</td><td>Disrupsi era digital, polarisasi politik identitas di media sosial, radikalisme transnasional, serta pelemahan integritas moral bangsa.</td></tr>\n    </tbody>\n  </table>\n</div>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-pancasila_m4",
        "subject_id": "subject-pancasila",
        "meeting_number": 4,
        "date": "2026-10-10",
        "title": "Pancasila sebagai Dasar Negara • PRESENTASI KELOMPOK 3 & KISI-KISI RESMI UTS RPS",
        "description": "Bahan presentasi Kelompok 3, Pancasila sebagai Staatsfundamentalnorm, dan pembahasan lengkap 10 bank soal UTS RPS.",
        "notes": "Materi inti UTS: Kuasai 10 bank soal dan kunci jawaban analitis dari RPS resmi Unindra.",
        "materials": [
          {
            "id": "mat_pancasila_4_1",
            "type": "pdf",
            "title": "RPS Kurikulum Resmi MK02 Pancasila Unindra (Gemini 2026).pdf",
            "file_url": "/materials/pancasila_rps_mk02_resmi_unindra.pdf",
            "file_size": 1120616,
            "date_added": "2026-10-10"
          }
        ],
        "transcripts": [
          {
            "id": "trans_pancasila_4",
            "audio_url": null,
            "content": "Transkrip Sesi Presentasi Kelompok 3: Pancasila adalah norma fundamental negara atau Staatsfundamentalnorm. Seluruh produk perundang-undangan di bawahnya tidak boleh bertentangan dengan Pancasila.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Profil Presentasi Kelompok 3 (RPS Resmi MK02)</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Topik Bahan Kajian</th><th>Anggota Kelompok 3 Mahasiswa</th><th>Jadwal Sesi Perkuliahan</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Pancasila sebagai Dasar Negara</strong><br><em>(Konsep Staatsfundamentalnorm, Sumber Historis, Sosiologis, Politis, Hubungan dengan UUD 1945)</em></td><td>1. AKMAL THORIQ RAMADHAN<br>2. KIARA BREZENSKA<br>3. ALFI MUHIDIN MATDOAN<br>4. NABILA BERLIAN BRIZKY SIREGAR</td><td>Pertemuan 4 (Jumat, 10 Oktober 2026)</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>2. Kedudukan Yuridis: Pancasila sebagai Staatsfundamentalnorm</h4>\n<p>Dalam teori hierarki norma hukum Hans Kelsen (<em>Stufenbautheorie</em>) yang dikembangkan Hans Nawiasky, Pancasila berkedudukan sebagai <strong>Staatsfundamentalnorm (Norma Fundamental Negara)</strong>. Karakteristik yuridisnya:</p>\n<ul>\n  <li>Menjadi <strong>Sumber dari Segala Sumber Hukum Negara</strong> (Pasal 2 UU No. 12 Tahun 2011 tentang Pembentukan Peraturan Perundang-undangan).</li>\n  <li>Memiliki kedudukan hukum tertinggi dan bersifat tetap (*imperatif*), tidak dapat diubah oleh lembaga negara mana pun termasuk MPR hasil pemilu, karena mengubah dasar negara sama halnya membubarkan NKRI.</li>\n  <li>Menjadi landasan moralitas dan penguji materiil bagi seluruh Undang-Undang, Peraturan Pemerintah, hingga Perda di Mahkamah Konstitusi (MK).</li>\n</ul>\n\n<h4>3. PEMBAHASAN LENGKAP 10 BANK SOAL LATIHAN UTS RESMI DARI RPS UNINDRA</h4>\n<ol>\n  <li><strong>Jelaskan tujuan dan fungsi mempelajari Pancasila di perguruan tinggi:</strong><br>\n    <em>Jawaban Analitis Kompleks:</em> Bertujuan membangun karakter mahasiswa yang beriman, bermoral mulia, dan berintegritas ilmiah; menanamkan kesadaran bela negara; mencegah radikalisme transnasional; serta membekali sarjana komputasi dengan pedoman etika profesi agar keahlian teknologinya digunakan demi kemaslahatan masyarakat.</li>\n\n  <li><strong>Bagaimanakah upaya mempertahankan Pancasila sebagai ideologi negara di era disrupsi digital?</strong><br>\n    <em>Jawaban Analitis Kompleks:</em> Melalui transformasi literasi digital kritis, pengamalan nilai gotong royong dalam pemberdayaan ekonomi siber (digitalisasi UMKM), penegakan supremasi hukum yang adil tanpa tebang pilih, keteladanan etika para pejabat publik, serta penguatan wawasan kebangsaan di lingkungan kampus.</li>\n\n  <li><strong>Uraikan bunyi Sila Pertama dalam Piagam Jakarta dan jelaskan proses perubahannya pada 18 Agustus 1945:</strong><br>\n    <em>Jawaban Analitis Kompleks:</em> Berbunyi <em>\"Ketuhanan dengan kewajiban menjalankan syari'at Islam bagi pemeluk-pemeluknya\"</em>. Diubah menjadi <em>\"Ketuhanan Yang Maha Esa\"</em> melalui musyawarah konsensus yang dipimpin Bung Hatta bersama para tokoh Islam demi menyelamatkan integrasi wilayah Indonesia Timur yang mengancam memisahkan diri jika klausul 7 kata tersebut dipertahankan.</li>\n\n  <li><strong>Jelaskan kronologi proses perumusan Pancasila sebagai dasar negara:</strong><br>\n    <em>Jawaban Analitis Kompleks:</em> Dimulai dari Sidang BPUPKI I (29 Mei–1 Juni 1945: usulan Yamin, Soepomo, dan Soekarno), dilanjutkan perumusan Piagam Jakarta oleh Panitia Sembilan (22 Juni 1945), pembahasan oleh BPUPKI II (10–17 Juli 1945), hingga pengesahan final konstitusional oleh PPKI pada 18 Agustus 1945.</li>\n\n  <li><strong>Mengapa bangsa Indonesia memilih Pancasila sebagai dasar negara dan bukan paham liberalisme atau komunisme?</strong><br>\n    <em>Jawaban Analitis Kompleks:</em> Karena nilai-nilai Pancasila digali langsung dari kepribadian asli bangsa Indonesia sendiri yang religius dan komunal. Liberalisme terlalu mengagungkan kebebasan pasar modal privat yang menindas kaum lemah, sedangkan Komunisme mengingkari eksistensi Tuhan (ateisme) dan meniadakan hak milik pribadi. Pancasila menyeimbangkan hak privat dan keadilan sosial.</li>\n\n  <li><strong>Bandingkan kelemahan ideologi Kapitalisme Liberal dengan Sosialisme Komunis:</strong><br>\n    <em>Jawaban Analitis Kompleks:</em> Kapitalisme menciptakan kesenjangan ekonomi ekstrem, konsumerisme, dan eksploitasi alam; Komunisme menciptakan kekuasaan otoriter partai tunggal, pembunuhan kebebasan berpendapat, dan kemunduran inisiatif kreatif individu.</li>\n\n  <li><strong>Bagaimanakah evaluasi pelaksanaan demokrasi di Indonesia saat ini?</strong><br>\n    <em>Jawaban Analitis Kompleks:</em> Secara prosedural telah berjalan lewat pemilu berkala, namun secara substansial masih dibayangi politik uang transaksional, oligarki kekuasaan, polarisasi hoaks digital, dan melemahnya semangat musyawarah mufakat.</li>\n\n  <li><strong>Bagaimana sikap kita menghadapi keberagaman suku, bahasa, dan agama di Indonesia?</strong><br>\n    <em>Jawaban Analitis Kompleks:</em> Menerapkan toleransi aktif (menghormati perbedaan tanpa harus meleburkan keyakinan teologis), mengedepankan moderasi beragama, memupuk empati lintas budaya, dan menjunjung tinggi persaudaraan kebangsaan (<em>ukhuwah wathaniyyah</em>).</li>\n\n  <li><strong>Jelaskan hubungan hierarkis organis antara Pancasila dan Pembukaan UUD 1945:</strong><br>\n    <em>Jawaban Analitis Kompleks:</em> Sila-sila Pancasila tercantum secara sah pada alinea ke-4 Pembukaan UUD 1945. Hubungan keduanya bersifat organis dan timbal balik: Pembukaan UUD 1945 merupakan naskah proklamasi yang terperinci, sedangkan Pancasila adalah asas kerohanian negara yang menjiwai seluruh batang tubuh pasal konstitusi.</li>\n\n  <li><strong>Bagaimanakah pemanfaatan potensi demografi dan maritim Indonesia berdasarkan nilai gotong royong?</strong><br>\n    <em>Jawaban Analitis Kompleks:</em> Melalui optimalisasi bonus demografi pemuda via pendidikan teknologi tepat guna, penguatan konektivitas tol laut nusantara, proteksi nelayan tradisional, serta pemerataan hilirisasi sumber daya alam demi keadilan sosial bagi seluruh rakyat Indonesia.</li>\n</ol>",
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
    "code": "MK01",
    "lecturer": "Tim Dosen PAI FTIK Unindra",
    "schedule": "Jumat • 09:10 - 10:50 WIB • Ruang R.4.4-1",
    "room": "Ruang R.4.4-1",
    "color": "#10B981",
    "target_meetings": 16,
    "semester": "Semester 1",
    "academic_year": "2026/2027",
    "meetings": [
      {
        "id": "subject-pai_m1",
        "subject_id": "subject-pai",
        "meeting_number": 1,
        "date": "2026-09-19",
        "title": "Visi Perkuliahan Islam & Fondasi Tauhid Komprehensif",
        "description": "Dua sumber primer hukum Islam, trilogi tauhid (Rububiyyah, Uluhiyyah, Asma wa Shifat), dan epistemologi wahyu Iqra.",
        "notes": "Materi UTS: Pahami trilogi tauhid dan kedudukan Al-Qur'an serta Sunnah sebagai sumber primer.",
        "materials": [
          {
            "id": "mat_pai_1_1",
            "type": "pdf",
            "title": "Modul Dosen P1: Fondasi Tauhid & Visi Islam.pdf",
            "file_url": "/materials/pai_p1_tauhid_dan_visi_islam.pdf",
            "file_size": 561535,
            "date_added": "2026-09-19"
          },
          {
            "id": "mat_pai_1_2",
            "type": "pdf",
            "title": "Tugas Mandiri Scan Lembar Jawaban PAI - Haikel Saleh.pdf",
            "file_url": "/materials/pai_tugas_mandiri_scan_haikel.pdf",
            "file_size": 1052055,
            "date_added": "2026-09-19"
          }
        ],
        "transcripts": [
          {
            "id": "trans_pai_1",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Visi sarjana muslim FTIK adalah mengintegrasikan ilmu pengetahuan teknologi dengan nilai tauhid. Tauhid bukan sekadar meyakini keberadaan Tuhan, melainkan mengesakan-Nya dalam ibadah dan pemeliharaan alam semesta.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Visi, Misi & Dua Sumber Primer Hukum Islam</h4>\n<ul>\n  <li><strong>Visi:</strong> Membentuk sarjana komputasi yang berintegritas ilmiah, bertakwa, berakhlak mulia (<em>akhlakul karimah</em>), dan mampu memanfaatkan sains teknologi sebagai sarana pengabdian ibadah.</li>\n  <li><strong>Dua Sumber Primer Hukum Islam:</strong>\n    <ol>\n      <li><strong>Al-Qur'anul Karim:</strong> Kalamullah yang diwahyukan kepada Nabi Muhammad SAW melalui malaikat Jibril sebagai mukjizat abadi dan pedoman hidup komprehensif.</li>\n      <li><strong>As-Sunnah An-Nabawiyyah:</strong> Segala sabda (aqwal), perbuatan (af'al), dan ketetapan persetujuan (taqrir) Rasulullah SAW yang diriwayatkan melalui sanad yang shahih.</li>\n    </ol>\n  </li>\n</ul>\n\n<h4>2. Trilogi Tauhid Komprehensif</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Dimensi Tauhid</th><th>Makna Teologis</th><th>Manifestasi dalam Kehidupan & Iptek</th></tr></thead>\n    <tbody>\n      <tr><td><strong>1. Tauhid Rububiyyah</strong></td><td>Meyakini secara mutlak bahwa Allah SWT satu-satunya Pencipta (<em>Al-Khaliq</em>), Pemelihara, dan Pengatur seluruh alam semesta tanpa sekutu (QS. Al-Fatihah: 2).</td><td>Menyadari bahwa hukum-hukum fisika, matematika, dan logika komputasi adalah hukum sunnatullah ciptaan Allah.</td></tr>\n      <tr><td><strong>2. Tauhid Uluhiyyah</strong></td><td>Mengesakan Allah SWT dalam seluruh perbuatan peribadatan hamba (shalat, doa, tawakal, niat amal) murni hanya untuk-Nya (QS. Adz-Dzariyat: 56).</td><td>Meniatkan seluruh aktivitas belajar coding, membuat sistem informasi kasir, dan bekerja sebagai sarana ibadah.</td></tr>\n      <tr><td><strong>3. Tauhid Asma' wa Shifat</strong></td><td>Menetapkan nama-nama mulia (<em>Asma'ul Husna</em>) dan sifat-sifat kesempurnaan Allah tanpa menyerupakannya dengan makhluk (<em>bilaa tamtsil, bilaa ta'thil</em>).</td><td>Meneladani sifat adil, pengasih, dan amanah dalam mengelola basis data privasi pelanggan.</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>3. Wahyu Pertama Surat Al-'Alaq 1–5: Gerbang Epistemologi Komputasi</h4>\n<blockquote style=\"border-left: 4px solid #10B981; padding-left: 14px; margin: 12px 0; color: #D1FAE5; background: rgba(16, 185, 129, 0.08); padding: 12px 16px; border-radius: 6px;\">\n  \"Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan. Dia telah menciptakan manusia dari segumpal darah. Bacalah, dan Tuhanmulah Yang Mahamulia. Yang mengajar (manusia) dengan pena. Dia mengajarkan manusia apa yang tidak diketahuinya.\"<br>\n  <strong>— QS. Al-'Alaq [96]: 1–5</strong>\n</blockquote>\n<p>Perintah <strong>Iqra'</strong> (menghimpun, meneliti, menganalisis) dan instrumen <strong>Al-Qalam</strong> (pena, dokumentasi, pengkodean logika) menjadi pilar utama riset sains dan keilmuan teknologi informasi dalam peradaban Islam.</p>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-pai_m2",
        "subject_id": "subject-pai",
        "meeting_number": 2,
        "date": "2026-09-26",
        "title": "Aqidah Islam, Rukun Iman & Hakikat Ihsan",
        "description": "Empat ruang lingkup kajian aqidah Islam, enam pilar rukun iman, dan maqam ihsan muraqabatullah.",
        "notes": "Materi UTS: Pahami hakikat Ihsan (beribadah seakan-akan melihat Allah atau yakin senantiasa diawasi-Nya).",
        "materials": [
          {
            "id": "mat_pai_2_1",
            "type": "pdf",
            "title": "Modul Dosen P2: Aqidah, Iman & Ihsan.pdf",
            "file_url": "/materials/pai_p2_iman_dan_ihsan.pdf",
            "file_size": 423685,
            "date_added": "2026-09-26"
          },
          {
            "id": "mat_pai_2_2",
            "type": "pdf",
            "title": "Tugas Mandiri Scan Lembar Jawaban PAI - Haikel Saleh.pdf",
            "file_url": "/materials/pai_tugas_mandiri_scan_haikel.pdf",
            "file_size": 1052055,
            "date_added": "2026-09-26"
          }
        ],
        "transcripts": [
          {
            "id": "trans_pai_2",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Aqidah adalah ikatan keyakinan hati yang kokoh. Dari aqidah lahir rukun iman, dan puncaknya adalah ihsan—kesadaran batin bahwa Allah senantiasa mengawasi segala tindak-tanduk kita.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Hakikat Aqidah Islam & Empat Ruang Lingkup Kajian</h4>\n<p>Secara etimologi, <strong>Aqidah</strong> berakar dari kata <em>'aqada</em> yang bermakna ikatan simpul yang kokoh dan tidak mudah terurai. Dalam terminologi syar'i, aqidah adalah keimanan teguh tanpa keraguan sedikit pun terhadap perkara-perkara ghaib yang diwartakan wahyu.</p>\n<ul>\n  <li><strong>Empat Ruang Lingkup Kajian Aqidah:</strong>\n    <ol>\n      <li><strong>Ilahiyyat:</strong> Kajian mengenai Dzat, sifat, nama-nama mulia (Asma'ul Husna), dan perbuatan (af'al) Allah SWT.</li>\n      <li><strong>Nubuwwat:</strong> Kajian mengenai para Nabi dan Rasul Allah, mukjizat kenabian, dan kitab suci wahyu.</li>\n      <li><strong>Ruhaniyyat:</strong> Kajian mengenai alam ruhani, malaikat-malaikat, jin, dan iblis.</li>\n      <li><strong>Sam'iyyat:</strong> Kajian mengenai perkara akhirat yang hanya dapat diketahui melalui pendengaran wahyu (alam kubur, hisab, timbangan mizan, surga, dan neraka).</li>\n    </ol>\n  </li>\n</ul>\n\n<h4>2. Enam Pilar Rukun Iman</h4>\n<ol>\n  <li><strong>Iman kepada Allah SWT:</strong> Mentauhidkan-Nya dalam Rububiyyah, Uluhiyyah, dan Asma' wa Shifat.</li>\n  <li><strong>Iman kepada Malaikat-Malaikat Allah:</strong> Meyakini keberadaan makhluk ghaib yang taat mutlak menjalankan tugas ilahi.</li>\n  <li><strong>Iman kepada Kitab-Kitab Allah:</strong> Meyakini Taurat, Zabur, Injil, dan Al-Qur'anul Karim sebagai penyempurna pamungkas.</li>\n  <li><strong>Iman kepada Rasul-Rasul Allah:</strong> Meneladani para nabi yang diutus membawa risalah kebenaran.</li>\n  <li><strong>Iman kepada Hari Akhir (Kiamat):</strong> Meyakini adanya pertanggungjawaban mutlak atas seluruh amal perbuatan di dunia.</li>\n  <li><strong>Iman kepada Qadha dan Qadar:</strong> Meyakini ketentuan takdir dan ketetapan hukum Allah atas semesta alam.</li>\n</ol>\n\n<h4>3. Hakikat Tingkatan Ihsan dalam Hadits Jibril</h4>\n<blockquote style=\"border-left: 4px solid #10B981; padding-left: 14px; margin: 12px 0; color: #D1FAE5; font-style: italic; background: rgba(16, 185, 129, 0.08); padding: 12px 16px; border-radius: 6px;\">\n  \"Ihsan adalah engkau beribadah kepada Allah seakan-akan engkau melihat-Nya. Dan jika engkau tidak mampu melihat-Nya, maka sesungguhnya Dia senantiasa melihatmu.\"<br>\n  <strong>— HR. Muslim dari Umar bin Khattab RA</strong>\n</blockquote>\n<p>Konsep <strong>Muraqabatullah</strong> (merasa senantiasa diawasi Allah) menjadi benteng integritas bagi praktisi sistem informasi dari godaan mencuri data, menyisipkan celah backdoor, atau membocorkan rahasia perusahaan.</p>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-pai_m3",
        "subject_id": "subject-pai",
        "meeting_number": 3,
        "date": "2026-10-03",
        "title": "Syariah Islam, Dimensi Ibadah & 5 Hukum Taklifi",
        "description": "Maqashid syariah, 5 hukum taklifi (wajib, sunnah, mubah, makruh, haram), dan ibadah mahdhah vs ghairu mahdhah.",
        "notes": "Materi UTS: Pahami 5 hukum taklifi dan kaidah asal ibadah mahdhah vs ghairu mahdhah.",
        "materials": [
          {
            "id": "mat_pai_3_1",
            "type": "pdf",
            "title": "Modul Dosen P3: Syariah & 5 Hukum Taklifi.pdf",
            "file_url": "/materials/pai_p3_syariah_dan_ibadah.pdf",
            "file_size": 490900,
            "date_added": "2026-10-03"
          },
          {
            "id": "mat_pai_3_2",
            "type": "pdf",
            "title": "Tugas Mandiri Scan Lembar Jawaban PAI - Haikel Saleh.pdf",
            "file_url": "/materials/pai_tugas_mandiri_scan_haikel.pdf",
            "file_size": 1052055,
            "date_added": "2026-10-03"
          }
        ],
        "transcripts": [
          {
            "id": "trans_pai_3",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Syariah diturunkan demi kemaslahatan manusia melalui lima perlindungan pokok atau Maqashid Syariah. Hukum taklifi mengatur seluruh tindakan mukallaf dari ranah wajib hingga haram.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Hakikat Syariah & Lima Maqashid Syariah (Tujuan Perlindungan Hukum)</h4>\n<p>Syariah Islam diturunkan untuk memelihara lima kebutuhan pokok (<em>Adh-Dharuriyyat Al-Khamsah</em>) demi kemaslahatan umat di dunia dan akhirat:</p>\n<ol>\n  <li><strong>Hifzhud Din (Memelihara Agama):</strong> Menjaga kebebasan beriman dan beribadah secara murni.</li>\n  <li><strong>Hifzhun Nafs (Memelihara Jiwa):</strong> Melindungi keselamatan nyawa manusia dan mengharamkan pembunuhan.</li>\n  <li><strong>Hifzhul 'Aql (Memelihara Akal):</strong> Melindungi kecerdasan nalar pikiran dari zat memabukkan (narkoba/khamr) maupun pembodohan hoaks.</li>\n  <li><strong>Hifzhun Nasl (Memelihara Keturunan):</strong> Menjaga nasab kehormatan keluarga melalui ikatan pernikahan suci.</li>\n  <li><strong>Hifzhul Mal (Memelihara Harta):</strong> Melindungi hak kepemilikan harta halal dari pencurian, riba, korupsi, dan penipuan siber.</li>\n</ol>\n\n<h4>2. Lima Hukum Taklifi dalam Ushul Fiqih</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Hukum Taklifi</th><th>Konsekuensi Dikerjakan</th><th>Konsekuensi Ditinggalkan</th><th>Contoh Penerapan Nyata</th></tr></thead>\n    <tbody>\n      <tr><td><strong>1. Wajib (Fardhu)</strong></td><td>Mendapat pahala</td><td>Mendapat dosa dan sanksi</td><td>Shalat fardhu lima waktu, menepati perjanjian kontrak kerja, menjaga kerahasiaan data amanah.</td></tr>\n      <tr><td><strong>2. Sunnah (Mandub)</strong></td><td>Mendapat pahala</td><td>Tidak mendapat dosa</td><td>Shalat rawatib, puasa Senin-Kamis, mendokumentasikan kode pemrograman secara bersih dan rapi.</td></tr>\n      <tr><td><strong>3. Mubah (Ja'iz)</strong></td><td>Netral (tidak berpahala)</td><td>Netral (tidak berdosa)</td><td>Makan, minum, memilih warna template dashboard, memilih bahasa pemrograman.</td></tr>\n      <tr><td><strong>4. Makruh</strong></td><td>Tidak mendapat dosa (namun dibenci)</td><td>Mendapat pahala</td><td>Makan makanan berbau tajam sebelum berjamaah, membuang waktu bermain game tanpa faedah.</td></tr>\n      <tr><td><strong>5. Haram</strong></td><td>Mendapat dosa besar dan adzab</td><td>Mendapat pahala</td><td>Riba, judi online, menipu timbangan kasir, meretas sistem keamanan server orang lain secara ilegal.</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>3. Komparasi Ibadah Mahdhah vs Ghairu Mahdhah</h4>\n<ul>\n  <li><strong>Ibadah Mahdhah (Ibadah Khusus/Murni):</strong> Ibadah yang rukun, syarat, waktu, dan tata caranya telah ditentukan secara baku dan rinci oleh wahyu (contoh: shalat, zakat, puasa Ramadhan, haji).<br>\n    <em>Kaidah Fiqih:</em> <strong>\"Hukum asal dalam urusan ibadah mahdhah adalah haram (terlarang), kecuali ada dalil shahih yang memerintahkannya.\"</strong></li>\n  <li><strong>Ibadah Ghairu Mahdhah (Ibadah Umum/Keduniaan):</strong> Seluruh kegiatan muamalah duniawi yang halal (kuliah, merancang software kasir, menolong sesama) yang diniatkan ikhlas mencari ridha Allah SWT.<br>\n    <em>Kaidah Fiqih:</em> <strong>\"Hukum asal dalam segala urusan keduniaan dan muamalah adalah boleh (mubah), sampai ada dalil shahih yang mengharamkannya.\"</strong></li>\n</ul>",
          "ringkas": null,
          "detail": null
        },
        "progress": {
          "is_read": false,
          "is_summarized": true,
          "is_studied": false,
          "is_noted_in_binder": false
        }
      },
      {
        "id": "subject-pai_m4",
        "subject_id": "subject-pai",
        "meeting_number": 4,
        "date": "2026-10-10",
        "title": "Spektrum Akhlakul Karimah & Integrasi Etika IT / Keamanan Siber",
        "description": "Komparasi etika-moral-akhlak, spektrum akhlak mahmudah, dan kode etik profesional muslim di bidang komputasi.",
        "notes": "Materi penting UTS: Kuasai tanggung jawab moral profesional IT muslim terhadap integritas kode dan privasi data.",
        "materials": [
          {
            "id": "mat_pai_4_1",
            "type": "pdf",
            "title": "Modul Dosen P4: Akhlak & Etika Komputasi.pdf",
            "file_url": "/materials/pai_p4_akhlak_dan_etika_it.pdf",
            "file_size": 407826,
            "date_added": "2026-10-10"
          },
          {
            "id": "mat_pai_4_2",
            "type": "pdf",
            "title": "Tugas Mandiri Scan Lembar Jawaban PAI - Haikel Saleh.pdf",
            "file_url": "/materials/pai_tugas_mandiri_scan_haikel.pdf",
            "file_size": 1052055,
            "date_added": "2026-10-10"
          }
        ],
        "transcripts": [
          {
            "id": "trans_pai_4",
            "audio_url": null,
            "content": "Transkrip Perkuliahan Tatap Muka: Akhlak berakar dari wahyu ilahi, bukan sekadar etika buatan rasio manusia. Praktisi teknologi muslim terikat kewajiban syar'i untuk menjaga amanah data dan dilarang membuat malware yang merusak kemaslahatan umum.",
            "status": "completed"
          }
        ],
        "summaries": {
          "standar": "<h4>1. Komparasi Filosofis: Etika, Moral, dan Akhlak</h4>\n<div class=\"table-wrap\">\n  <table>\n    <thead><tr><th>Konsep</th><th>Sumber Acuan Otoritas</th><th>Sifat Standar</th><th>Ruang Lingkup Sanksi</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Etika</strong></td><td>Rasio akal budi dan kesepakatan asosiasi profesi manusia.</td><td>Kultural dan dapat berubah sesuai dinamika zaman.</td><td>Sanksi organisasi (pencabutan izin profesi/teguran asosiasi).</td></tr>\n      <tr><td><strong>Moral</strong></td><td>Adat istiadat, kebiasaan lokal, dan tradisi masyarakat tertentu.</td><td>Lokal kedaerahan dan bersifat relatif antarbudaya.</td><td>Sanksi sosial (dikucilkan/dicemooh lingkungan masyarakat).</td></tr>\n      <tr><td><strong>Akhlak</strong></td><td><strong>Wahyu Ilahi (Al-Qur'an dan As-Sunnah)</strong> yang diinternalisasi ke dalam jiwa secara ikhlas.</td><td><strong>Mutlak, transendental, dan universal sepanjang zaman.</strong></td><td>Sanksi batiniah duniawi dan pertanggungjawaban hisab di akhirat di hadapan Allah SWT.</td></tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>2. Tiga Spektrum Akhlakul Karimah (Akhlak Mahmudah)</h4>\n<ol>\n  <li><strong>Akhlak kepada Allah SWT:</strong> Mentauhidkan-Nya, tawakal, bersyukur atas limpahan rezeki akal, sabar menghadapi ujian eror kode, ikhlas beramal, dan bertaubat dari dosa.</li>\n  <li><strong>Akhlak kepada Sesama Manusia:</strong> Berbakti kepada kedua orang tua (<em>birrul walidain</em>), memuliakan guru/dosen, menjaga amanah perkataan, tidak menyebarkan fitnah siber, dan tolong-menolong dalam kebaikan.</li>\n  <li><strong>Akhlak kepada Lingkungan Semesta:</strong> Menjaga kelestarian ekosistem alam, tidak merusak bumi (<em>laa tufsidu fil ardh</em>), dan menghemat energi sumber daya.</li>\n</ol>\n\n<h4>3. Integrasi Etika Islam bagi Praktisi Sistem Informasi & Keamanan Siber</h4>\n<ul>\n  <li><strong>Amanah Kerahasiaan Data (Data Confidentiality):</strong> Database pengguna, password, nomor kontak, dan riwayat transaksi adalah amanah syariat. Membocorkan atau menjual data pribadi pelanggan tanpa izin merupakan tindakan khianat yang diancam dosa besar.</li>\n  <li><strong>Integritas Kode (No Malicious Software):</strong> Haram hukumnya memprogram perangkat lunak perusak (virus, trojan, ransomware), platform judi online, sistem penipuan phishing, atau situs pornografi.</li>\n  <li><strong>Teknologi sebagai Wasilah Kemaslahatan (Maslahah Mursalah):</strong> Menjadikan kemahiran rekayasa piranti lunak sebagai sarana dakwah, otomatisasi penghitungan zakat/infaq, peningkatan efisiensi kasir UMKM rakyat, dan penguatan transparansi pelayanan publik.</li>\n</ul>",
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
  "id": "usr_haikel_2026",
  "email": "haikel@unindra.ac.id",
  "full_name": "Muhammad Haikel Saleh",
  "university": "Universitas Indraprasta PGRI (Unindra)",
  "major": "Sistem Informasi • FTIK",
  "class_code": "R1G Reguler",
  "semester_active": "Semester 1",
  "academic_year": "2026/2027",
  "avatar_url": null
};

export const initialSemesters = [
  {
    "id": "sem-1",
    "name": "Semester 1",
    "academic_year": "2026/2027",
    "is_active": true
  },
  {
    "id": "sem-2",
    "name": "Semester 2",
    "academic_year": "2026/2027",
    "is_active": false
  },
  {
    "id": "sem-3",
    "name": "Semester 3",
    "academic_year": "2027/2028",
    "is_active": false
  }
];
