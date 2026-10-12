# -*- coding: utf-8 -*-
"""
Academic Data for Pertemuan 5 and 6 (8 Subjects - Semester 1 FTIK Unindra)
Clean typography, 0 raw LaTeX dollar markers, standard HTML/Unicode.
"""

P5_P6_SPECS = {
    # =========================================================================
    # 1. KONSEP SISTEM INFORMASI (KSI)
    # =========================================================================
    "subject-ksi": {
        5: {
            "title": "Sistem Pendukung Keputusan & Kecerdasan Bisnis (DSS, ES, CSCW, GDSS & ESS)",
            "date": "2026-10-13",
            "desc": "Arsitektur Decision Support Systems (DSS), pemodelan analitik, Expert System berbasis aturan (knowledge base & inference engine), CSCW/GDSS kolaboratif, dan Executive Support Systems (ESS).",
            "notes": "Materi Pokok UTS: Pahami perbedaan mendasar TPS (operasional terstruktur) vs DSS (manajerial semi-terstruktur), serta 3 komponen utama sistem pakar.",
            "materials": [
                {
                    "id": "mat_ksi_5_1",
                    "type": "pdf",
                    "title": "Modul Dosen P5: Decision Support & Expert Systems (SISTEM_INFORMASI_5.pdf)",
                    "file_url": "/materials/ksi_p5_sistem_informasi_5.pdf",
                    "file_size": 1645686,
                    "date_added": "2026-10-13"
                }
            ],
            "transcripts": "Transkrip Perkuliahan Tatap Muka: Dosen Pak Dheni menerangkan bahwa Decision Support System (DSS) dirancang untuk membantu manajer memecahkan masalah semi-terstruktur dengan memanfaatkan model matematis dan simulasi what-if analysis. Sistem Pakar (Expert System) mengadopsi keahlian pakar manusia ke dalam basis pengetahuan komputer.",
            "sections": [
                {
                    "title": "1. Decision Support Systems (DSS) & Karakteristik Utama",
                    "html": """<p><strong>Decision Support System (DSS)</strong> adalah sistem informasi berbasis komputer yang menyediakan dukungan pemecahan masalah interaktif bagi manajer dalam mengambil keputusan terhadap masalah <em>semi-terstruktur</em> dan <em>tidak terstruktur</em>.</p>
<ul>
  <li><strong>Tujuan Utama:</strong> Membantu manajer membuat keputusan yang berkualitas dan efektif, bukan menggantikan pertimbangan manusia.</li>
  <li><strong>Tiga Komponen Arsitektur DSS:</strong>
    <ol>
      <li><strong>Database Management System (DBMS):</strong> Menyimpan data historis organisasi dan data eksternal.</li>
      <li><strong>Model Base Management System (MBMS):</strong> Berisi model-model kuantitatif, analisis finansial, optimasi, dan statistika.</li>
      <li><strong>User Interface (Dialog Generation and Management System):</strong> Antarmuka interaktif yang memudahkan manajer melakukan simulasi <em>what-if analysis</em>, <em>goal-seeking analysis</em>, dan <em>sensitivity analysis</em>.</li>
    </ol>
  </li>
</ul>"""
                },
                {
                    "title": "2. Sistem Pakar (Expert System / ES)",
                    "html": """<p><strong>Expert System (ES)</strong> adalah cabang kecerdasan buatan (Artificial Intelligence) yang mengemulasi kemampuan penalaran seorang pakar manusia dalam domain pengetahuan yang spesifik.</p>
<div class="table-wrap">
  <table>
    <thead><tr><th>Komponen Sistem Pakar</th><th>Fungsi Utama</th><th>Contoh Penerapan</th></tr></thead>
    <tbody>
      <tr><td><strong>Knowledge Base (Basis Pengetahuan)</strong></td><td>Menyimpan fakta, aturan logika (IF-THEN rules), dan heuristik dari pakar manusia.</td><td>Kumpulan aturan gejala kerusakan server jaringan.</td></tr>
      <tr><td><strong>Inference Engine (Motor Inferensi)</strong></td><td>Otak penalaran yang menarik kesimpulan logis berdasarkan fakta yang dimasukkan pengguna (menggunakan <em>Forward Chaining</em> atau <em>Backward Chaining</em>).</td><td>Algoritma deduksi penentuan jenis penyakit tanaman atau kerusakan perangkat keras.</td></tr>
      <tr><td><strong>User Interface & Explanation Facility</strong></td><td>Menyajikan dialog tanya-jawab kepada pengguna dan memberikan penjelasan (alasan mengapa saran tersebut diberikan).</td><td>Layar konsultasi interaktif teknisi IT.</td></tr>
    </tbody>
  </table>
</div>"""
                },
                {
                    "title": "3. CSCW, Group Decision Support Systems (GDSS) & Executive Support Systems (ESS)",
                    "html": """<p>Teknologi kolaboratif dan sistem tingkat eksekutif melengkapi infrastruktur pengambilan keputusan modern:</p>
<ul>
  <li><strong>CSCW (Computer Supported Collaborative Work):</strong> Lingkungan kerja bersama yang difasilitasi perangkat lunak (groupware), memungkinkan tim berkolaborasi tanpa kendala ruang dan waktu.</li>
  <li><strong>GDSS (Group Decision Support System):</strong> Sistem interaktif berbasis komputer yang memfasilitasi solusi masalah tidak terstruktur oleh sekelompok pengambil keputusan yang bekerja bersama sebagai sebuah tim (contoh: voting elektronik terenkripsi, brainstorming anonim).</li>
  <li><strong>ESS (Executive Support System / EIS):</strong> Sistem informasi tingkat strategis yang dirancang khusus untuk pimpinan puncak (C-Level). Menyajikan ringkasan visual performa perusahaan (Dashboard KPI), drill-down data grafik, dan integrasi tren makroekonomi eksternal.</li>
</ul>"""
                }
            ],
            "insights": [
                "<strong>First Principles DSS:</strong> DSS tidak pernah membuat keputusan sendiri secara otomatis; DSS bertindak sebagai <em>cognitive augmentor</em> (penguat daya pikir) pimpinan.",
                "<strong>Jebakan UTS:</strong> Jangan tertukar antara Forward Chaining (data-driven: dari fakta gejala menuju kesimpulan) dengan Backward Chaining (goal-driven: dari hipotesis penyakit menuju pengujian fakta pendukung).",
                "<strong>Standar Industri:</strong> DSS modern saat ini telah berevolusi menjadi Business Intelligence (BI) dan platform data modern seperti Tableau, Power BI, serta integrasi LLM analitik."
            ],
            "doc_ref": "SISTEM_INFORMASI_5.pdf (15 Slide)",
            "lecturer": "Pak Dheni, M.Kom.",
            "standar_html": """<h4>1. Hakikat Decision Support System (DSS)</h4>
<p>DSS berfokus pada masalah semi-terstruktur. Keputusan semi-terstruktur adalah keputusan yang sebagian prosedur penentuannya jelas/terprogram, namun sebagian lainnya masih membutuhkan intuisi dan penilaian subjektif pimpinan.</p>
<h4>2. Tiga Subsistem Inti DSS</h4>
<ul>
  <li>Subsistem Data (Database DSS)</li>
  <li>Subsistem Model (Model Base: regresi, linear programming, forecasting)</li>
  <li>Subsistem Antarmuka Pengguna (Grafik, Dashboard interaktif)</li>
</ul>
<h4>3. Expert System (Sistem Pakar) & Komponennya</h4>
<p>Komponen: Knowledge Base (aturan IF-THEN), Inference Engine (mesin logika penarik konklusi), User Interface, dan Explanation Subsystem.</p>""",
            "cheatsheet_pts": [
                ("Definisi DSS", "Sistem komputer interaktif yang membantu manajer menyelesaikan keputusan semi-terstruktur dengan memanfaatkan data dan model analitik."),
                ("Tiga Blok Arsitektur DSS", "1. Database Management System (DBMS), 2. Model Base Management System (MBMS), 3. User Interface / Dialog Subsystem."),
                ("Komponen Utama Expert System", "Knowledge Base (basis pengetahuan fakta & aturan), Inference Engine (motor penalaran logika), dan Explanation Facility."),
                ("Forward vs Backward Chaining", "Forward Chaining bernalar dari fakta menuju kesimpulan (data-driven); Backward Chaining bernalar dari tujuan/hipotesis mundur ke fakta pembuktian (goal-driven)."),
                ("Fungsi Utama Executive Support System (ESS)", "Menyediakan informasi strategis ringkas tingkat tinggi (Dashboard KPI, grafik eksekutif, analisis tren makro) bagi pimpinan puncak.")
            ],
            "tip": "Ingat rumus piramida keputusan: Semakin tinggi jenjang manajemen, masalah semakin tidak terstruktur, sehingga membutuhkan DSS dan ESS."
        },
        6: {
            "title": "Taksonomi Sistem Informasi Berdasarkan Level Organisasi (TPS, OAS, KWS & MIS)",
            "date": "2026-10-20",
            "desc": "Karakteristik Transaction Processing System (TPS) berkecepatan tinggi dengan integritas ACID, Office Automation System (OAS), Knowledge Work Systems (KWS), dan Management Information System (MIS) untuk pelaporan berkala.",
            "notes": "Materi Pokok UTS: Hafalkan 4 tingkatan piramida sistem informasi organisasi (Operasional -> Pengetahuan -> Taktis -> Strategis) dan mekanisme integrasi aliran data antar level.",
            "materials": [
                {
                    "id": "mat_ksi_6_1",
                    "type": "pdf",
                    "title": "Modul Dosen P6: TPS, OAS, KWS dan MIS (SISTEM_INFORMASI_6.pdf)",
                    "file_url": "/materials/ksi_p6_sistem_informasi_6.pdf",
                    "file_size": 325043,
                    "date_added": "2026-10-20"
                }
            ],
            "transcripts": "Transkrip Perkuliahan Tatap Muka: Dosen menerangkan piramida sistem informasi. Di tingkat paling dasar terdapat TPS yang memproses transaksi atomik sehari-hari seperti kasir toko dan transfer ATM. Data TPS kemudian diagregasi dan disaring untuk menjadi masukan bagi MIS di tingkat manajemen menengah.",
            "sections": [
                {
                    "title": "1. Transaction Processing System (TPS) Fondasi Operasional",
                    "html": """<p><strong>TPS (Transaction Processing System)</strong> adalah sistem informasi terkomputerisasi yang menjalankan dan mencatat transaksi rutin harian yang penting untuk menjalankan bisnis pada level operasional.</p>
<ul>
  <li><strong>Karakteristik Utama:</strong> Pemrosesan volume data sangat besar (high volume), kecepatan pemrosesan tinggi, toleransi kesalahan nol, dan kepatuhan prinsip ACID (<em>Atomicity, Consistency, Isolation, Durability</em>).</li>
  <li><strong>Dua Metode Pemrosesan Transaksi:</strong>
    <ul>
      <li><strong>Batch Processing:</strong> Data transaksi dikumpulkan dalam kelompok (batch) selama periode tertentu, lalu diproses serentak di akhir waktu (misal: rekap payroll gaji bulanan).</li>
      <li><strong>Online Transaction Processing (OLTP):</strong> Transaksi diproses seketika saat kejadian berlangsung secara real-time (misal: sistem reservasi tiket pesawat, penarikan uang di ATM).</li>
    </ul>
  </li>
</ul>"""
                },
                {
                    "title": "2. Office Automation System (OAS) & Knowledge Work Systems (KWS)",
                    "html": """<p>Dua sistem yang melayani tingkatan pekerja berpengetahuan (Knowledge Level):</p>
<div class="table-wrap">
  <table>
    <thead><tr><th>Aspek Komparasi</th><th>Office Automation System (OAS)</th><th>Knowledge Work Systems (KWS)</th></tr></thead>
    <tbody>
      <tr><td><strong>Target Pengguna</strong></td><td>Pekerja data klerikal (staf administrasi, sekretaris, operator).</td><td>Pekerja berpengetahuan profesional (insinyur, perancang, saintis, analis hukum).</td></tr>
      <tr><td><strong>Fungsi Utama</strong></td><td>Mendigitalkan dan mengotomatisasi dokumen kantor, komunikasi, dan koordinasi jadwal.</td><td>Membantu penciptaan dan integrasi pengetahuan baru ke dalam organisasi bisnis.</td></tr>
      <tr><td><strong>Contoh Perangkat Lunak</strong></td><td>Microsoft Office 365, Google Workspace, aplikasi pengarsipan digital, email korporat.</td><td>Stasiun kerja CAD/CAM (Computer-Aided Design), workstation permodelan keuangan, simulasi virtual reality.</td></tr>
    </tbody>
  </table>
</div>"""
                },
                {
                    "title": "3. Management Information System (MIS) di Tingkat Taktis",
                    "html": """<p><strong>MIS (Management Information System)</strong> melayani level manajemen menengah (Middle Management) dengan menyediakan laporan terstruktur berkala mengenai kinerja internal organisasi:</p>
<ul>
  <li><strong>Input Utama:</strong> Mengambil dan merangkum data ringkasan dari sistem TPS di tingkat operasional.</li>
  <li><strong>Format Pelaporan Baku MIS:</strong>
    <ol>
      <li><strong>Scheduled Reports (Laporan Terjadwal):</strong> Dihasilkan otomatis secara berkala (harian, mingguan, bulanan), misal rekapitulasi penjualan mingguan cabang.</li>
      <li><strong>Exception Reports (Laporan Pengecualian):</strong> Dihasilkan hanya ketika terjadi anomali atau kondisi yang melewati ambang batas toleransi (misal: daftar stok barang di bawah kuota minimum).</li>
      <li><strong>On-Demand Reports (Laporan Berdasarkan Permintaan):</strong> Dibuat sewaktu-waktu sesuai kebutuhan spesifik manajer saat pemeriksaan mendadak.</li>
    </ol>
  </li>
</ul>"""
                }
            ],
            "insights": [
                "<strong>Integritas Data ACID:</strong> Pada sistem TPS perbankan, Atomicity menjamin bila proses debet rekening pengirim berhasil namun kredit rekening penerima gagal karena koneksi terputus, maka seluruh transaksi dibatalkan kembali (rollback).",
                "<strong>Jebakan Ujian:</strong> Jangan menyamakan MIS dengan DSS. MIS menghasilkan laporan statis terstruktur dari data historis internal; sedangkan DSS menyediakan analisis interaktif berbasis model simulasi.",
                "<strong>Arsitektur Modern:</strong> Dalam sistem ERP (Enterprise Resource Planning) seperti SAP atau Odoo, keempat sistem ini (TPS, OAS, MIS, DSS) telah diintegrasikan dalam satu basis data terpusat."
            ],
            "doc_ref": "SISTEM_INFORMASI_6.pdf (16 Slide)",
            "lecturer": "Pak Dheni, M.Kom.",
            "standar_html": """<h4>1. Empat Tingkatan Piramida Organisasi & Sistem Informasi</h4>
<ul>
  <li>Tingkat Strategis (Pimpinan Puncak) &rarr; ESS (Executive Support System)</li>
  <li>Tingkat Taktis / Manajemen (Manajer Menengah) &rarr; MIS & DSS</li>
  <li>Tingkat Pengetahuan (Knowledge Level) &rarr; OAS & KWS</li>
  <li>Tingkat Operasional (Staf Teknis Kasir/Pabrik) &rarr; TPS (Transaction Processing System)</li>
</ul>
<h4>2. Karakteristik TPS</h4>
<p>Volume data besar, operasi rutin, keakuratan mutlak, terikat prinsip ACID, dan terbagi menjadi pemrosesan Batch vs Real-time (OLTP).</p>
<h4>3. Tiga Jenis Laporan MIS</h4>
<p>Scheduled Reports (rutin berkala), Exception Reports (pengecualian jika ada anomali), dan On-Demand Reports (sesuai permintaan insidental).</p>""",
            "cheatsheet_pts": [
                ("Hakikat TPS", "Sistem tingkat operasional yang bertugas mencatat dan memproses transaksi rutin harian bervolume tinggi dengan kepatuhan prinsip ACID."),
                ("Batch vs OLTP", "Batch Processing memproses kumpulan transaksi secara periodik serentak; OLTP memproses transaksi seketika saat kejadian (real-time)."),
                ("OAS vs KWS", "OAS melayani pekerja data klerikal untuk digitalisasi dokumen kantor; KWS melayani profesional (insinyur, analis) untuk menciptakan pengetahuan baru (CAD, simulasi)."),
                ("Peran Pokok MIS", "Merangkum data transaksional dari TPS menjadi laporan berkala terstruktur untuk membantu manajer menengah memantau kinerja organisasi."),
                ("Tiga Laporan Standar MIS", "1. Scheduled Reports (terjadwal rutin), 2. Exception Reports (pengecualian/anomali batas kritis), 3. On-Demand Reports (insidental atas permintaan).")
            ],
            "tip": "Hafalkan piramida organisasi dari bawah ke atas: Operasional (TPS) -> Pengetahuan (OAS/KWS) -> Taktis (MIS/DSS) -> Strategis (ESS)."
        }
    },

    # =========================================================================
    # 2. BAHASA INDONESIA (MKWK107)
    # =========================================================================
    "subject-indo": {
        5: {
            "title": "Sistematika Penulisan Proposal Kegiatan Ilmiah & Pengabdian Masyarakat",
            "date": "2026-10-13",
            "desc": "Definisi proposal sebagai rancangan kerja tertulis, anatomi baku proposal kegiatan kemahasiswaan/MKWK, susunan kepanitiaan, hingga Rencana Anggaran Biaya (RAB) logis terperinci.",
            "notes": "Tugas Proyek MKWK: Format penyusunan proposal kegiatan wajib patuh pada sistematika baku akademik Unindra, perhatikan perhitungan RAB matematis bulat dan rincian kuantitas terukur.",
            "materials": [
                {
                    "id": "mat_indo_5_1",
                    "type": "pdf",
                    "title": "Modul Dosen P5: Sistematika Proposal Kegiatan (Pertemuan 5-Bahasa Indonesia Unindra.pdf)",
                    "file_url": "/materials/indo_p5_proposal_kegiatan.pdf",
                    "file_size": 1206666,
                    "date_added": "2026-10-13"
                }
            ],
            "transcripts": "Transkrip Perkuliahan Tatap Muka: Dosen Bahasa Indonesia menjelaskan bahwa proposal kegiatan adalah usulan resmi yang berisi rancangan rencana kerja yang disusun secara sistematis dan logis. Dalam proposal kegiatan mahasiswa, bagian latar belakang harus menyajikan urgensi masalah nyata di masyarakat, dan anggaran biaya harus rasional dan akuntabel.",
            "sections": [
                {
                    "title": "1. Hakikat, Fungsi, dan Karakteristik Proposal Kegiatan",
                    "html": """<p><strong>Proposal Kegiatan</strong> adalah dokumen rancangan kerja yang disusun secara tertulis, sistematis, objektif, dan terperinci untuk menjelaskan rencana pelaksanaan suatu kegiatan kepada pihak yang berwenang demi memperoleh izin, persetujuan, atau bantuan dana.</p>
<ul>
  <li><strong>Fungsi Pokok Proposal:</strong>
    <ol>
      <li>Sebagai cetak biru (blueprint) pedoman teknis kerja panitia pelaksana.</li>
      <li>Sebagai sarana pengajuan izin resmi kepada birokrasi perguruan tinggi atau instansi mitra.</li>
      <li>Sebagai instrumen permohonan pendanaan sponsor atau anggaran operasional kampus.</li>
    </ol>
  </li>
  <li><strong>Karakteristik Teks Proposal Ilmiah:</strong> Menggunakan ragam bahasa resmi/baku, kalimat denotatif lugas, argumen berbasis data faktual, serta sistematika penomoran bab yang baku.</li>
</ul>"""
                },
                {
                    "title": "2. Anatomi Sistematika Proposal Kegiatan Resmi (Standar MKWK)",
                    "html": """<div class="table-wrap">
  <table>
    <thead><tr><th>Bab / Bagian</th><th>Komponen Baku</th><th>Uraian Isi yang Wajib Disajikan</th></tr></thead>
    <tbody>
      <tr><td><strong>Bagian Awal</strong></td><td>Halaman Judul & Pengesahan</td><td>Judul kegiatan spesifik, logo perguruan tinggi, data kelompok pengusul, serta lembar tanda tangan pengesahan (Ketua Pelaksana & Dosen Pendamping).</td></tr>
      <tr><td><strong>BAB I: Pendahuluan</strong></td><td>Latar Belakang & Rasionalitas</td><td>Urgensi masalah nyata di masyarakat, landasan pemikiran mengapa kegiatan perlu diadakan, serta keterkaitan dengan tujuan pendidikan.</td></tr>
      <tr><td><strong>BAB II: Deskripsi Kegiatan</strong></td><td>Nama, Tema, Bentuk & Sasaran</td><td>Nama resmi kegiatan, tema pokok, format metode pelaksanaan (seminar, edukasi langsung, workshop), sasaran peserta terukur (misal: 30 siswa MI), serta target capaian.</td></tr>
      <tr><td><strong>BAB III: Teknis & Anggaran</strong></td><td>Waktu, Tempat, Susunan Panitia & RAB</td><td>Jadwal tanggal dan lokasi pelaksanaan, struktur tim pelaksana (Ketua, Sekretaris, Bendahara, Divisi), dan tabel Rencana Anggaran Biaya (RAB) terperinci.</td></tr>
      <tr><td><strong>BAB IV: Penutup</strong></td><td>Simpulan Harapan & Lampiran</td><td>Pernyataan penutup mengharap kerja sama pihak mitra, serta lampiran rundown acara dan instrumen materi.</td></tr>
    </tbody>
  </table>
</div>"""
                },
                {
                    "title": "3. Kaidah Penyusunan Rencana Anggaran Biaya (RAB) yang Akuntabel",
                    "html": """<p>Dalam penyusunan RAB proposal kegiatan, terdapat aturan ketat audit akademik yang harus dipenuhi:</p>
<ul>
  <li><strong>Kelengkapan Kolom Wajib:</strong> Tabel anggaran harus memuat 5 kolom baku: No, Keterangan/Uraian Kebutuhan, Harga Satuan, Volume/Kuantitas, dan Jumlah.</li>
  <li><strong>Larangan Tanda Strip (-) pada Volume Terukur:</strong> Jika volume tertulis dalam angka satuan (misal: 10 pcs, 30 porsi), kolom Harga Satuan <strong>WAJIB DIISI</strong> angka nominal rupiah. Tanda strip hanya diizinkan untuk item paket gabungan (lump sum 1 paket).</li>
  <li><strong>Ketelitian Perhitungan:</strong> Seluruh perkalian antara Volume dan Harga Satuan harus menghasilkan bilangan bulat riil tanpa pecahan desimal ganjil.</li>
</ul>"""
                }
            ],
            "insights": [
                "<strong>Kaidah Proposal MKWK Unindra:</strong> Proposal pengabdian masyarakat mahasiswa diwajibkan menyertakan surat mitra kerja sama atau izin lokasi sekolah/komunitas sasaran.",
                "<strong>Jebakan Penulisan RAB:</strong> Seringkali mahasiswa menulis 'Konsumsi: 30 pcs, Harga Satuan: -, Jumlah: Rp80.000'. Format ini keliru karena Rp80.000 / 30 = Rp2.666,67 (tidak ada pecahan uang tersebut). Solusinya diubah menjadi '1 paket @ Rp80.000' atau disesuaikan menjadi harga bulat per porsi.",
                "<strong>Kohesi Judul:</strong> Judul proposal harus informatif dan memuat unsur 5W+1H ringkas (kegiatan apa, untuk siapa, dan di mana diadakan)."
            ],
            "doc_ref": "Pertemuan 5-Bahasa Indonesia Unindra.pdf (18 Halaman)",
            "lecturer": "Tim Dosen MKWK Bahasa Indonesia Unindra",
            "standar_html": """<h4>1. Definisi & Hakikat Proposal</h4>
<p>Proposal merupakan usulan tertulis terencana untuk menyelenggarakan suatu kegiatan ilmiah, pengabdian masyarakat, atau penelitian, guna memperoleh persetujuan dan legitimasi pihak terkait.</p>
<h4>2. Struktur Sistematika Baku Proposal</h4>
<ol>
  <li>Latar Belakang Kegiatan (mengapa kegiatan ini penting dilakukan)</li>
  <li>Dasar Hukum / Landasan Kegiatan</li>
  <li>Nama dan Tema Kegiatan</li>
  <li>Maksud dan Tujuan Kegiatan</li>
  <li>Sasaran Peserta / Penerima Manfaat</li>
  <li>Waktu dan Tempat Pelaksanaan</li>
  <li>Susunan Kepanitiaan (Organizing Committee)</li>
  <li>Susunan Acara (Rundown Kegiatan)</li>
  <li>Rencana Anggaran Biaya (RAB) yang Rinci dan Rasional</li>
  <li>Penutup dan Lembar Pengesahan</li>
</ol>""",
            "cheatsheet_pts": [
                ("Hakikat Proposal", "Rancangan kerja sistematis tertulis yang diajukan untuk mendapatkan persetujuan, legalitas, atau pendanaan dari pihak pembina/sponsor."),
                ("Fungsi Latar Belakang", "Menyajikan fakta dan argumentasi logis urgensi masalah yang melandasi pentingnya kegiatan tersebut segera dilaksanakan."),
                ("Kaidah Penyusunan RAB", "Wajib memuat rincian kuantitas volume, harga satuan logis terukur, dan hasil perkalian bulat akuntabel tanpa kolom harga satuan kosong."),
                ("Ragam Bahasa Proposal", "Menggunakan ragam bahasa baku akademik, kalimat lugas bermakna denotatif, tanpa ungkapan hiperbolis atau emosional subjektif."),
                ("Lembar Pengesahan", "Bukti legalitas formal yang memuat persetujuan Ketua Panitia, Sekretaris, Pembina Kemahasiswaan, dan Pejabat Kampus terkait.")
            ],
            "tip": "Dalam menyusun proposal, pastikan bagian Anggaran Biaya terhubung logis dengan jumlah peserta pada bagian Sasaran Kegiatan."
        },
        6: {
            "title": "Tata Kalimat Efektif & Paragraf Akademik Ilmiah",
            "date": "2026-10-20",
            "desc": "Tujuh pilar kalimat efektif ilmiah (kesepadanan, keparalelan, ketegasan, kehematan, kecermatan, kepaduan, kelogisan) dan struktur kohesi-koherensi paragraf akademik.",
            "notes": "Materi Pokok UTS: Analisis kesalahan kalimat majemuk tanpa subjek atau predikat ganda, perbaikan kalimat pleonastis (misal: 'agar supaya', 'banyak mahasiswa-mahasiswa').",
            "materials": [
                {
                    "id": "mat_indo_6_1",
                    "type": "pdf",
                    "title": "Modul Dosen P6: Diksi, Kalimat Efektif & Paragraf (Pertemuan 6-Bahasa Indonesia Unindra.pdf)",
                    "file_url": "/materials/indo_p6_pilihan_kata_diksi.pdf",
                    "file_size": 415095,
                    "date_added": "2026-10-20"
                }
            ],
            "transcripts": "Transkrip Perkuliahan Tatap Muka: Dosen menjelaskan bahwa kalimat efektif adalah kalimat yang mampu menyampaikan gagasan penulis kepada pembaca secara tepat tanpa menimbulkan salah tafsir. Dalam karya ilmiah, kalimat wajib memiliki keutuhan struktur Subjek dan Predikat, hemat kata tanpa pleonasme, dan membentuk paragraf yang kohesif.",
            "sections": [
                {
                    "title": "1. Definisi & Tujuh Ciri Utama Kalimat Efektif",
                    "html": """<p><strong>Kalimat Efektif</strong> adalah kalimat yang dapat mengungkapkan gagasan pembicara atau penulis secara tepat sehingga dapat dipahami oleh pendengar atau pembaca secara tepat pula (tidak ambigu dan berdaya guna).</p>
<div class="table-wrap">
  <table>
    <thead><tr><th>Ciri Kalimat Efektif</th><th>Kaidah Penulisan</th><th>Contoh Salah &rarr; Pembetulan Benar</th></tr></thead>
    <tbody>
      <tr><td><strong>1. Kesepadanan Struktur</strong></td><td>Memiliki kejelasan Subjek (S) dan Predikat (P). Tidak menempatkan kata depan di muka subjek.</td><td><em>Bagi seluruh mahasiswa wajib hadir.</em> &rarr; <strong>Seluruh mahasiswa wajib hadir.</strong></td></tr>
      <tr><td><strong>2. Keparalelan Bentuk</strong></td><td>Kesamaan bentuk gramatikal/afiksasi pada unsur rincian. Jika unsur pertama kata kerja berawalan <em>me-</em>, berikutnya harus <em>me-</em>.</td><td><em>Tahapan meliputi perencanaan, pengerjaan, dan pengujian.</em> (Bentuk imbuhan konsisten nomina pe-an).</td></tr>
      <tr><td><strong>3. Ketegasan Fokus</strong></td><td>Menonjolkan gagasan pokok dengan menempatkan kata penting di awal kalimat.</td><td><strong>Harapan kami</strong> adalah agar teknologi ini dapat dimanfaatkan secara optimal oleh masyarakat.</td></tr>
      <tr><td><strong>4. Kehematan Kata</strong></td><td>Menghindari kata bersinonim ganda (pleonasme) dan pengulangan jamak yang mubazir.</td><td><em>Demi untuk keberhasilan kita...</em> &rarr; <strong>Demi keberhasilan kita...</strong> / <em>Banyak anak-anak...</em> &rarr; <strong>Banyak anak...</strong></td></tr>
      <tr><td><strong>5. Kecermatan Nalar</strong></td><td>Memilih kata tepat tanpa menimbulkan tafsiran ganda (ambiguitas sintaktis).</td><td><em>Mahasiswa perguruan tinggi yang terkenal itu...</em> (Ambigu: mahasiswanya atau kampusnya yang terkenal).</td></tr>
      <tr><td><strong>6. Kepaduan Gagasan</strong></td><td>Pernyataan tidak terpecah-pecah; tidak menyisipkan kata depan di antara predikat transitif dan objek.</td><td><em>Panitia mendiskusikan tentang proposal.</em> &rarr; <strong>Panitia mendiskusikan proposal.</strong></td></tr>
      <tr><td><strong>7. Kelogisan Nalar</strong></td><td>Jalan pikiran dapat diterima oleh akal sehat dan kaidah penalaran ilmiah.</td><td><em>Waktu dan tempat kami persilakan.</em> &rarr; <strong>Bapak Rektor kami persilakan.</strong> (Waktu dan tempat tidak bisa berjalan/dipersilakan).</td></tr>
    </tbody>
  </table>
</div>"""
                },
                {
                    "title": "2. Struktur & Syarat Paragraf Akademik yang Baik",
                    "html": """<p>Paragraf adalah satuan bahasa yang terdiri atas kumpulan kalimat yang mengembangkan satu pokok pikiran utama:</p>
<ul>
  <li><strong>Syarat Paragraf Akademik yang Baik:</strong>
    <ol>
      <li><strong>Kesatuan (Unity):</strong> Seluruh kalimat penjelas hanya berfokus menerangkan satu gagasan utama (tidak boleh ada kalimat sumbang/keluar topik).</li>
      <li><strong>Kepaduan (Cohesion & Coherence):</strong>
        <ul>
          <li><em>Kohesi:</em> Kepaduan bentuk gramatikal melalui penggunaan kata ganti (promina), repetisi kata kunci, dan kata transisi (konjungsi antarkalimat).</li>
          <li><em>Koherensi:</em> Kepaduan alur nalar berpikir logis dari umum ke khusus atau kronologis.</li>
        </ul>
      </li>
      <li><strong>Kelengkapan Pengembangan:</strong> Gagasan utama dijelaskan tuntas dengan kalimat penjelas mayor dan bukti konkret.</li>
    </ol>
  </li>
</ul>"""
                }
            ],
            "insights": [
                "<strong>Kesalahan Paling Sering:</strong> Menggunakan konjungsi subordinatif 'sehingga' atau 'karena' di awal kalimat tunggal tanpa klausa induk (contoh: 'Sehingga nilai mahasiswa turun.'). Kalimat tersebut tidak memiliki Subjek dan Predikat lengkap.",
                "<strong>Jebakan Pleonasme:</strong> Kata jamak seperti 'daftar nama-nama peserta' adalah pleonastis; bentuk yang benar adalah 'daftar nama peserta' atau 'nama-nama peserta'.",
                "<strong>Standar Karya Ilmiah:</strong> Dalam menulis makalah akademik, panjang satu paragraf ideal terdiri dari 3 hingga 5 kalimat efektif utuh."
            ],
            "doc_ref": "Pertemuan 6-Bahasa Indonesia Unindra.pdf (14 Halaman)",
            "lecturer": "Tim Dosen MKWK Bahasa Indonesia Unindra",
            "standar_html": """<h4>1. Hakikat Kalimat Efektif</h4>
<p>Kalimat yang secara tepat menyampaikan informasi dan maksud penutur/penulis kepada mitra tutur/pembaca tanpa menimbulkan kerancuan makna.</p>
<h4>2. Tujuh Syarat Kalimat Efektif</h4>
<ol>
  <li>Kesepadanan (S-P jelas, tidak meletakkan preposisi di depan subjek)</li>
  <li>Keparalelan bentuk gramatikal</li>
  <li>Ketegasan gagasan pokok</li>
  <li>Kehematan kata (anti-pleonasme)</li>
  <li>Kecermatan diksi (tidak ambigu)</li>
  <li>Kepaduan gagasan kalimat</li>
  <li>Kelogisan nalar (masuk akal)</li>
</ol>
<h4>3. Syarat Paragraf Ilmiah</h4>
<p>Memiliki Kesatuan (satu gagasan pokok), Kepaduan Kohesif dan Koheren, serta Pengembangan kalimat penjelas yang tuntas.</p>""",
            "cheatsheet_pts": [
                ("Hakikat Kalimat Efektif", "Kalimat yang berhasil menyampaikan pesan secara utuh, ringkas, dan tepat sasaran tanpa menimbulkan tafsir ganda bagi pembaca."),
                ("Kaidah Kesepadanan", "Subjek dan Predikat wajib jelas; dilarang meletakkan kata depan (bagi, untuk, dalam) di depan kata benda subjek."),
                ("Keparalelan Bentuk", "Unsur-unsur rincian dalam kalimat harus menggunakan bentuk imbuhan yang sejajar dan konsisten (misal: semuanya kata kerja aktif berawalan me-)."),
                ("Anti-Pleonasme", "Hindari pemakaian kata mubazir bersinonim ganda (misal: 'agar supaya', 'sejak dari', 'adalah merupakan')."),
                ("Kohesi vs Koherensi", "Kohesi adalah keterikatan bentuk gramatikal (kata transisi, repetisi); Koherensi adalah keterpaduan alur pikiran logis antarkalimat.")
            ],
            "tip": "Saat memeriksa kalimat: Pastikan kalimat memiliki Subjek yang jelas dan tidak diawali preposisi seperti 'Untuk', 'Bagi', atau 'Dalam'."
        }
    },

    # =========================================================================
    # 3. ALGORITMA 1
    # =========================================================================
    "subject-algo": {
        5: {
            "title": "Struktur Pemilihan Satu & Dua Kasus (IF-THEN & IF-THEN-ELSE)",
            "date": "2026-10-14",
            "desc": "Logika percabangan seleksi berbasis ekspresi Boolean, pemetaan diagram alir Flowchart dengan simbol Decision Diamond, dan pseudocode terstruktur satu kasus dan dua kasus.",
            "notes": "Kaidah Algoritma: Simbol percabangan Decision WAJIB memiliki minimal 2 jalur keluar ('Ya' / 'Tidak'). Aksi pada blok THEN hanya dijalankan bila kondisi bernilai TRUE, sedangkan blok ELSE dijalankan bila FALSE.",
            "materials": [
                {
                    "id": "mat_algo_5_1",
                    "type": "pdf",
                    "title": "Modul Dosen P5: Statement Pemilihan IF (Algo1_Pertemuan Ke-5.pptx)",
                    "file_url": "/materials/algo_p4_struktur_kontrol.pdf",
                    "file_size": 657568,
                    "date_added": "2026-10-14"
                }
            ],
            "transcripts": "Transkrip Perkuliahan Tatap Muka: Dosen Algoritma menegaskan bahwa struktur pemilihan memungkinkan komputer mengambil keputusan alur instruksi berdasarkan evaluasi kondisi logika. Pada pemilihan satu kasus (IF-THEN), aksi hanya dieksekusi bila kondisi bernilai benar. Pada pemilihan dua kasus (IF-THEN-ELSE), ada jalur alternatif pasti saat kondisi salah.",
            "sections": [
                {
                    "title": "1. Konsep Dasar Struktur Pemilihan (Selection)",
                    "html": """<p><strong>Struktur Pemilihan (Selection Control Structure)</strong> adalah struktur kontrol algoritma yang digunakan untuk mengevaluasi suatu kondisi logika (ekspresi Boolean) guna menentukan jalur instruksi mana yang akan dieksekusi selanjutnya oleh sistem.</p>
<ul>
  <li><strong>Ekspresi Kondisi:</strong> Pernyataan relasional yang selalu menghasilkan nilai bertipe Boolean: <code>TRUE</code> (Benar) atau <code>FALSE</code> (Salah).</li>
  <li><strong>Operator Relasional:</strong> <code>=</code> (sama dengan), <code>&ne;</code> (tidak sama dengan), <code>&lt;</code> (kurang dari), <code>&gt;</code> (lebih dari), <code>&le;</code> (kurang dari atau sama dengan), <code>&ge;</code> (lebih dari atau sama dengan).</li>
  <li><strong>Simbol Flowchart:</strong> Direpresentasikan oleh simbol belah ketupat (<em>Decision Diamond</em>) dengan satu jalur panah masuk dan dua jalur panah keluar bertanda label <strong>Ya (True)</strong> dan <strong>Tidak (False)</strong>.</li>
</ul>"""
                },
                {
                    "title": "2. Pemilihan Satu Kasus (Struktur IF-THEN)",
                    "html": """<p>Pada struktur satu kasus, instruksi hanya akan dikerjakan jika kondisi yang diuji terpenuhi (bernilai TRUE). Jika kondisi tidak terpenuhi (FALSE), instruksi tersebut dilewati dan alur berlanjut ke baris berikutnya:</p>
<pre class="bg-slate-900 p-4 rounded-lg overflow-x-auto text-emerald-400 font-mono text-sm"><code>{ Notasi Pseudocode Pemilihan Satu Kasus }
if (kondisi) then
    aksi_instruksi
endif</code></pre>
<p><strong>Contoh Studi Kasus:</strong> Menentukan diskon belanja pelanggan jika total belanja minimal Rp 100.000.</p>
<pre class="bg-slate-900 p-4 rounded-lg overflow-x-auto text-emerald-400 font-mono text-sm"><code>diskon &larr; 0
if (total_belanja &ge; 100000) then
    diskon &larr; 0.10 * total_belanja
endif
total_bayar &larr; total_belanja - diskon</code></pre>"""
                },
                {
                    "title": "3. Pemilihan Dua Kasus (Struktur IF-THEN-ELSE)",
                    "html": """<p>Pada struktur dua kasus, terdapat dua alternatif tindakan yang saling menegasikan (komplementer). Jika kondisi bernilai TRUE maka aksi-1 dieksekusi; namun jika bernilai FALSE maka aksi-2 yang akan dieksekusi:</p>
<pre class="bg-slate-900 p-4 rounded-lg overflow-x-auto text-emerald-400 font-mono text-sm"><code>{ Notasi Pseudocode Pemilihan Dua Kasus }
if (kondisi) then
    aksi_1   { dikerjakan jika kondisi bernilai TRUE }
else
    aksi_2   { dikerjakan jika kondisi bernilai FALSE }
endif</code></pre>
<p><strong>Contoh Studi Kasus:</strong> Menentukan bilangan bulat genap atau ganjil menggunakan operator modulus.</p>
<pre class="bg-slate-900 p-4 rounded-lg overflow-x-auto text-emerald-400 font-mono text-sm"><code>if (bilangan mod 2 = 0) then
    output("Bilangan Genap")
else
    output("Bilangan Ganjil")
endif</code></pre>"""
                }
            ],
            "insights": [
                "<strong>Prinsip First Principles:</strong> Struktur percabangan mengubah alur eksekusi komputasi dari sekuensial linear menjadi graph terarah (directed acyclic graph).",
                "<strong>Jebakan UTS:</strong> Pada penulisan pseudocode baku ANSI, setiap blok <code>if</code> wajib ditutup dengan <code>endif</code> agar cakupan aksi memiliki batasan yang tegas.",
                "<strong>Optimasi Logika:</strong> Kondisi yang paling sering bernilai TRUE sebaiknya diuji terlebih dahulu untuk meminimalkan beban evaluasi siklus instruksi CPU."
            ],
            "doc_ref": "Algo1_Pertemuan Ke-5.pptx (18 Slide)",
            "lecturer": "Tim Dosen Algoritma FTIK Unindra",
            "standar_html": """<h4>1. Pengertian Struktur Percabangan (Selection)</h4>
<p>Konstruksi kontrol alur logika yang menentukan pilihan instruksi berdasarkan hasil evaluasi kondisi Boolean.</p>
<h4>2. Struktur Satu Kasus (IF-THEN)</h4>
<p>Format: <code>if kondisi then aksi endif</code>. Aksi hanya dijalankan jika kondisi benar; jika salah diabaikan.</p>
<h4>3. Struktur Dua Kasus (IF-THEN-ELSE)</h4>
<p>Format: <code>if kondisi then aksi1 else aksi2 endif</code>. Menjamin salah satu dari kedua aksi pasti terpilih secara eksklusif.</p>""",
            "cheatsheet_pts": [
                ("Hakikat Struktur Seleksi", "Struktur algoritma yang menentukan eksekusi perintah berdasarkan hasil evaluasi kondisi logika Boolean (TRUE / FALSE)."),
                ("Simbol Decision Flowchart", "Bentuk belah ketupat (diamond) yang wajib memiliki dua cabang arah panah keluar: Ya (True) dan Tidak (False)."),
                ("Aturan IF-THEN Satu Kasus", "Aksi hanya dieksekusi saat kondisi bernilai TRUE. Bila FALSE, sistem langsung melanjutkan ke instruksi berikutnya tanpa aksi."),
                ("Aturan IF-THEN-ELSE Dua Kasus", "Menyediakan dua jalur aksi mutually exclusive: aksi-1 dijalankan bila kondisi TRUE, dan aksi-2 dijalankan bila kondisi FALSE."),
                ("Operator Relasional Baku", "Sama dengan (=), Tidak sama dengan (&ne; / &lt;&gt;), Kurang dari (&lt;), Lebih dari (&gt;), Kurang sama dengan (&le;), Lebih sama dengan (&ge;).")
            ],
            "tip": "Gunakan operator mod 2 = 0 untuk menguji bilangan genap, dan mod 2 &ne; 0 untuk bilangan ganjil."
        },
        6: {
            "title": "Struktur Pemilihan Majemuk & Bersarang (Nested IF & Multikasus)",
            "date": "2026-10-21",
            "desc": "Konstruksi pemilihan banyak kasus bertingkat (IF-THEN-ELSE IF-THEN-ELSE), penelusuran tabel kebenaran, penentuan grade nilai akademik, dan perhitungan tunjangan gaji karyawan.",
            "notes": "Materi Pokok UTS: Uji logika Nested IF. Pastikan rentang nilai tidak tumpang tindih (overlap) dan selalu sertakan kondisi penutup (fallback ELSE) untuk menangani input tidak valid.",
            "materials": [
                {
                    "id": "mat_algo_6_1",
                    "type": "pdf",
                    "title": "Modul Dosen P6: Pemilihan Lanjutan & Multikasus (Algo1_Pertemuan Ke-6.pptx)",
                    "file_url": "/materials/algo_p4_struktur_kontrol.pdf",
                    "file_size": 657568,
                    "date_added": "2026-10-21"
                }
            ],
            "transcripts": "Transkrip Perkuliahan Tatap Muka: Dosen menjelaskan bahwa dalam dunia nyata keputusan seringkali memiliki lebih dari dua pilihan. Untuk kasus seperti grade nilai A, B, C, D, E atau tarif golongan listrik, kita menggunakan pemilihan majemuk IF-THEN-ELSE IF. Evaluasi kondisi berjalan dari atas ke bawah secara berurutan.",
            "sections": [
                {
                    "title": "1. Konsep Pemilihan Majemuk (Banyak Kasus)",
                    "html": """<p><strong>Pemilihan Majemuk</strong> digunakan ketika persoalan memiliki tiga alternatif pilihan atau lebih. Struktur ini dibentuk dengan menggabungkan instruksi <code>if</code> di dalam bagian <code>else</code> dari instruksi sebelumnya:</p>
<pre class="bg-slate-900 p-4 rounded-lg overflow-x-auto text-emerald-400 font-mono text-sm"><code>{ Pola Pemilihan Majemuk Bertingkat }
if (kondisi_1) then
    aksi_1
else if (kondisi_2) then
    aksi_2
else if (kondisi_3) then
    aksi_3
else
    aksi_default  { penanganan kondisi fallback / nilai default }
endif</code></pre>
<ul>
  <li><strong>Mekanisme Evaluasi:</strong> Kondisi diuji secara berurutan dari atas ke bawah. Begitu salah satu kondisi bernilai TRUE, aksinya langsung dieksekusi dan seluruh cabang di bawahnya dilewati (tidak diuji lagi).</li>
</ul>"""
                },
                {
                    "title": "2. Studi Kasus Konversi Grade Nilai Akademik",
                    "html": """<p>Mengonversi nilai angka mahasiswa (0 &ndash; 100) menjadi indeks huruf mutu berdasarkan standar akademik Unindra:</p>
<pre class="bg-slate-900 p-4 rounded-lg overflow-x-auto text-emerald-400 font-mono text-sm"><code>{ Algoritma Konversi Grade Nilai }
input(nilai)
if (nilai &ge; 80) then
    grade &larr; 'A'
else if (nilai &ge; 70) then
    grade &larr; 'B'
else if (nilai &ge; 60) then
    grade &larr; 'C'
else if (nilai &ge; 50) then
    grade &larr; 'D'
else
    grade &larr; 'E'
endif
output("Grade Mutu: ", grade)</code></pre>
<p><strong>Catatan Kritis:</strong> Perhatikan bahwa pada <code>else if (nilai &ge; 70)</code> tidak perlu lagi ditulis <code>and (nilai &lt; 80)</code>, karena nilai yang mencapai 80 ke atas sudah tersaring dan dieksekusi pada cabang pertama.</p>"""
                },
                {
                    "title": "3. Percabangan Bersarang (Nested IF)",
                    "html": """<p><strong>Nested IF</strong> adalah struktur di mana di dalam blok aksi suatu pernyataan <code>if</code> terdapat struktur <code>if</code> lainnya. Sangat berguna untuk pengujian bersyarat bertingkat (misal: syarat golongan kerja dan status pernikahan):</p>
<pre class="bg-slate-900 p-4 rounded-lg overflow-x-auto text-emerald-400 font-mono text-sm"><code>if (golongan = "III") then
    gaji_pokok &larr; 4000000
    if (status_nikah = "Y") then
        tunjangan &larr; 500000
    else
        tunjangan &larr; 0
    endif
else
    gaji_pokok &larr; 3000000
    tunjangan &larr; 0
endif
total_gaji &larr; gaji_pokok + tunjangan</code></pre>"""
                }
            ],
            "insights": [
                "<strong>Anti-Redundansi:</strong> Menulis <code>if (x &ge; 70 and x &lt; 80)</code> pada blok <code>else if</code> adalah pemborosan evaluasi logika jika cabang atas sudah menyaring <code>x &ge; 80</code>.",
                "<strong>Jebakan Kasus Overlap:</strong> Pastikan urutan kondisi tersusun logis dari angka tertinggi ke terendah saat menggunakan operator <code>&ge;</code>. Jika dibalik (misal <code>if (x &ge; 50)</code> di awal), maka nilai 90 akan salah didiagnosis masuk ke grade D!",
                "<strong>Kompilasi Mesin:</strong> Struktur IF bertingkat yang teratur dapat dioptimasi oleh compiler menjadi instruksi jump table assembly berkecepatan tinggi."
            ],
            "doc_ref": "Algo1_Pertemuan Ke-6.pptx (16 Slide)",
            "lecturer": "Tim Dosen Algoritma FTIK Unindra",
            "standar_html": """<h4>1. Struktur Pemilihan Majemuk (Multikasus)</h4>
<p>Digunakan untuk menangani persoalan dengan tiga cabang alternatif atau lebih menggunakan konstruksi <code>IF - ELSE IF - ELSE</code>.</p>
<h4>2. Prinsip Hirarki Penilaian</h4>
<p>Kondisi dievaluasi dari atas ke bawah. Kondisi teratas yang bernilai TRUE langsung menghentikan evaluasi kondisi di bawahnya.</p>
<h4>3. Percabangan Bersarang (Nested IF)</h4>
<p>Pernyataan IF yang berada di dalam blok pernyataan IF lainnya untuk memverifikasi beberapa lapis kriteria keputusan.</p>""",
            "cheatsheet_pts": [
                ("Definisi Multikasus", "Struktur seleksi yang menangani tiga kondisi alternatif atau lebih menggunakan kombinasi IF-THEN-ELSE IF."),
                ("Urutan Evaluasi Logika", "Dievaluasi dari atas ke bawah; ketika satu kondisi bernilai TRUE, aksinya dijalankan dan sisa cabang diabaikan."),
                ("Kaidah Rentang Grade Nilai", "Wajib diurutkan dari nilai paling tinggi ke paling rendah bila menggunakan tanda &ge; (A: &ge;80, B: &ge;70, C: &ge;60)."),
                ("Pencegahan Redundansi", "Pada cabang ELSE IF, tidak perlu mengulang batas atas yang telah disaring oleh kondisi pada cabang sebelumnya."),
                ("Nested IF (Bersarang)", "Struktur pengujian kondisi di mana sebuah pernyataan IF berada di dalam blok THEN atau ELSE dari IF lainnya.")
            ],
            "tip": "Ingat: jika menggunakan operator &ge;, urutkan batas dari angka terbesar ke terkecil agar tidak terjadi salah eksekusi."
        }
    },

    # =========================================================================
    # 4. PEMROGRAMAN 1 (PASCAL)
    # =========================================================================
    "subject-pascal": {
        5: {
            "title": "Pemilihan Majemuk (IF-THEN-ELSE IF) & Perhitungan Nilai Akhir",
            "date": "2026-10-14",
            "desc": "Sintaks formal percabangan majemuk dalam Pascal, pantangan mutlak tanda titik koma (;) sebelum kata kunci ELSE, pengelompokan compound statement, dan kalkulasi nilai akhir berbobot.",
            "notes": "PANTANGAN RESMI DOSEN: JANGAN PERNAH meletakkan titik koma (;) sebelum ELSE! Titik koma mengakhiri pernyataan, sehingga compiler Free Pascal akan memunculkan error 'Fatal: Syntax error, \";\" unexpected but \"ELSE\" found'.",
            "materials": [
                {
                    "id": "mat_pascal_5_1",
                    "type": "pdf",
                    "title": "Modul Dosen P5: Pemilihan Majemuk IF then else IF (Pertemuan 5.pdf)",
                    "file_url": "/materials/pascal_p5_pemilihan_majemuk_if.pdf",
                    "file_size": 423731,
                    "date_added": "2026-10-14"
                }
            ],
            "transcripts": "Transkrip Perkuliahan Tatap Muka: Dosen Pemrograman menekankan pantangan mutlak di bahasa Pascal: Jangan meletakkan tanda titik koma sebelum kata ELSE! Struktur IF-THEN-ELSE adalah satu kalimat instruksi utuh. Jika ada lebih dari satu baris instruksi di dalam suatu cabang, wajib dibungkus dengan blok begin dan end.",
            "sections": [
                {
                    "title": "1. Sintaks Baku IF-THEN-ELSE IF dalam Bahasa Pascal",
                    "html": """<p>Dalam bahasa pemrograman Pascal (Free Pascal / Turbo Pascal), percabangan majemuk memiliki aturan tata bahasa yang sangat presisi dan ketat:</p>
<pre class="bg-slate-900 p-4 rounded-lg overflow-x-auto text-emerald-400 font-mono text-sm"><code>if (kondisi_1) then
  pernyataan_1
else if (kondisi_2) then
  pernyataan_2
else if (kondisi_3) then
  pernyataan_3
else
  pernyataan_default;</code></pre>
<div class="alert alert-danger" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 12px 16px; border-radius: 8px; margin: 14px 0;">
  <strong style="color: #F87171;">⚠️ HUKUM MUTLAK PASCAL:</strong> 
  <span style="color: #FECACA;">Dilarang keras mengetik tanda titik koma (<code>;</code>) tepat sebelum kata kunci <code>else</code>! Tanda titik koma dianggap oleh kompilator sebagai akhir dari seluruh pernyataan IF, sehingga bila kata <code>else</code> ditemukan setelahnya, kompilator akan memunculkan galat sintaks fatal: <code>Fatal: Syntax error, ";" unexpected but "ELSE" found</code>.</span>
</div>"""
                },
                {
                    "title": "2. Compound Statement (Blok begin ... end;)",
                    "html": """<p>Bila suatu cabang keputusan memuat lebih dari satu instruksi, seluruh baris instruksi tersebut <strong>WAJIB</strong> dikelompokkan ke dalam blok majemuk menggunakan kata kunci <code>begin</code> dan diakhiri dengan <code>end</code>:</p>
<pre class="bg-slate-900 p-4 rounded-lg overflow-x-auto text-emerald-400 font-mono text-sm"><code>if (nilai &ge; 60) then
begin
  status := 'LULUS';
  keterangan := 'Selamat, pertahankan prestasi Anda!';
end  { &lt;-- PERHATIKAN: Tidak ada titik koma sebelum kata else! }
else
begin
  status := 'GAGAL';
  keterangan := 'Mohon belajar lebih giat untuk semester depan.';
end; { &lt;-- Titik koma diletakkan di akhir seluruh struktur }</code></pre>"""
                },
                {
                    "title": "3. Program Lengkap: Perhitungan Nilai Akhir & Grade Mahasiswa",
                    "html": """<p>Implementasi studi kasus nyata sesuai berkas modul kuliah perkuliahan Unindra (Bobot: Tugas 20%, UTS 30%, UAS 50%):</p>
<pre class="bg-slate-900 p-4 rounded-lg overflow-x-auto text-emerald-400 font-mono text-sm"><code>program HitungNilaiAkhir;
uses crt;

var
  nama: string[30];
  tugas, uts, uas, na: real;
  grade: char;
  status: string[10];

begin
  clrscr;
  writeln('========================================');
  writeln('   SISTEM PENILAIAN AKADEMIK MAHASISWA  ');
  writeln('========================================');
  write('Masukkan Nama Mahasiswa : '); readln(nama);
  write('Masukkan Nilai Tugas    : '); readln(tugas);
  write('Masukkan Nilai UTS      : '); readln(uts);
  write('Masukkan Nilai UAS      : '); readln(uas);

  { Rumus Bobot Nilai Akhir }
  na := (0.20 * tugas) + (0.30 * uts) + (0.50 * uas);

  { Penentuan Grade Mutu }
  if (na &ge; 80) then
    grade := 'A'
  else if (na &ge; 70) then
    grade := 'B'
  else if (na &ge; 60) then
    grade := 'C'
  else if (na &ge; 50) then
    grade := 'D'
  else
    grade := 'E';

  { Penentuan Status Kelulusan }
  if (na &ge; 60) then
    status := 'LULUS'
  else
    status := 'TIDAK LULUS';

  writeln('----------------------------------------');
  writeln('Nama Mahasiswa : ', nama);
  writeln('Nilai Akhir    : ', na:0:2);
  writeln('Grade Mutu     : ', grade);
  writeln('Status Akhir   : ', status);
  writeln('========================================');
  readln; { Menahan jendela layar konsol }
end.</code></pre>"""
                }
            ],
            "insights": [
                "<strong>Kaidah Pemformatan Real:</strong> Sintaks <code>na:0:2</code> membulatkan angka pecahan desimal agar tercetak rapi dengan tepat dua angka di belakang koma (misal: <code>82.50</code> bukannya format saintifik <code>8.2500000000E+01</code>).",
                "<strong>Tipe Data Grade:</strong> Menggunakan tipe data <code>char</code> untuk grade (karena hanya satu karakter 'A' s.d. 'E') jauh lebih hemat memori dibanding <code>string</code>.",
                "<strong>Penanganan Input Nilai:</strong> Dalam Free Pascal, jika pengguna mengetik huruf pada input variabel <code>real</code>, program akan menghasilkan <em>Runtime error 106 (Invalid numeric format)</em>."
            ],
            "doc_ref": "Pertemuan 5  Pemilihan Majemuk (Selection) – IF then else IF.pdf (16 Halaman)",
            "lecturer": "Tim Dosen Pemrograman FTIK Unindra",
            "standar_html": """<h4>1. Sintaks IF Majemuk dalam Pascal</h4>
<p>Format dasar: <code>if kondisi1 then perintah1 else if kondisi2 then perintah2 else perintah_default;</code></p>
<h4>2. Pantangan Titik Koma (;) Sebelum ELSE</h4>
<p>Titik koma sebelum kata ELSE akan memicu syntax error fatal karena dianggap memutuskan kesatuan pernyataan IF.</p>
<h4>3. Penggunaan Compound Statement (begin ... end)</h4>
<p>Wajib dipakai jika di dalam cabang IF terdapat lebih dari satu perintah.</p>
<h4>4. Rumus Nilai Akhir</h4>
<p><code>na := (0.2 * tugas) + (0.3 * uts) + (0.5 * uas);</code></p>""",
            "cheatsheet_pts": [
                ("Pantangan Titik Koma", "DILARANG meletakkan tanda titik koma (;) tepat sebelum kata kunci ELSE! Ini adalah kesalahan paling sering pada ujian Pascal."),
                ("Compound Statement", "Jika satu cabang blok IF memiliki lebih dari 1 instruksi, wajib diapit pasangan kata kunci begin dan end."),
                ("Sintaks Pemformatan Real", "Gunakan variabel:lebar:desimal (misal na:0:2) agar angka desimal tercetak normal bukan eksponen ilmiah."),
                ("Tipe Data Nilai Akhir", "Variabel nilai tugas, UTS, UAS, dan Nilai Akhir wajib bertipe real karena melibatkan perkalian pecahan bobot desimal."),
                ("Fungsi readln di Akhir", "Instruksi readln; tanpa parameter tepat sebelum end. berfungsi menahan jendela command prompt agar tidak langsung menutup otomatis.")
            ],
            "tip": "Periksa selalu tanda titik koma: Hanya letakkan titik koma pada akhir seluruh rangkaian blok percabangan IF."
        },
        6: {
            "title": "Struktur Seleksi Majemuk Terstruktur (CASE-OF) & Nested Selection",
            "date": "2026-10-21",
            "desc": "Struktur kontrol case-of untuk tipe ordinal (Integer, Char), perbedaannya dengan IF majemuk, penggunaan penanda rentang nilai (..), klausa else, dan program kasir menu interaktif.",
            "notes": "Kaidah Kompilator: Variabel pemilih pada CASE-OF HANYA boleh bertipe data ordinal (Integer, Char, Boolean). Tipe data Real (pecahan) dan String DILARANG KERAS digunakan sebagai selector CASE-OF dalam Pascal standar.",
            "materials": [
                {
                    "id": "mat_pascal_6_1",
                    "type": "pdf",
                    "title": "Modul Dosen P6: Pemilihan Terstruktur CASE-OF (Pertemuan_6.pdf)",
                    "file_url": "/materials/pascal_p6_pemilihan_case_of.pdf",
                    "file_size": 376646,
                    "date_added": "2026-10-21"
                }
            ],
            "transcripts": "Transkrip Perkuliahan Tatap Muka: Dosen menjelaskan bahwa struktur CASE-OF membuat kode program yang memiliki banyak pilihan menjadi jauh lebih rapi dan mudah dibaca dibanding tumpukan IF-THEN-ELSE IF yang panjang. Namun ingat batasannya: variabel pemilih CASE-OF hanya boleh tipe ordinal, tidak boleh tipe Real atau String.",
            "sections": [
                {
                    "title": "1. Karakteristik & Batasan Struktur CASE-OF",
                    "html": """<p><strong>Struktur CASE-OF</strong> adalah struktur percabangan yang digunakan untuk memilih satu aksi dari sekumpulan alternatif berdasarkan pencocokan nilai suatu ekspresi pemilih (<em>selector</em>):</p>
<ul>
  <li><strong>Syarat Mutlak Variabel Pemilih:</strong> Tipe data variabel pemilih <strong>WAJIB BERTIPE ORDINAL</strong> (tipe data yang urutan elemennya pasti dan dapat dihitung: <code>integer</code>, <code>char</code>, <code>boolean</code>, atau enumerasi).</li>
  <li><strong>Larangan Keras:</strong> Tipe data <code>real</code> (pecahan berkoma) dan <code>string</code> <strong>DILARANG</strong> dijadikan variabel pemilih dalam CASE-OF standar.</li>
  <li><strong>Keunggulan:</strong> Struktur kode jauh lebih rapi, terhindar dari indentasi tangga yang terlalu dalam, serta waktu kompilasi yang efisien.</li>
</ul>"""
                },
                {
                    "title": "2. Sintaks Formal & Ragam Format Selector CASE-OF",
                    "html": """<pre class="bg-slate-900 p-4 rounded-lg overflow-x-auto text-emerald-400 font-mono text-sm"><code>case variabel_pemilih of
  nilai_tunggal : aksi_1;
  nilai_a, nilai_b : aksi_2;         { Daftar nilai jamak dipisah koma }
  nilai_awal..nilai_akhir : aksi_3;  { Menggunakan rentang subrange (..) }
else
  aksi_default;                      { Dikerjakan bila tidak ada nilai yang cocok }
end;</code></pre>
<p><strong>Contoh Format Nilai Pemilih:</strong></p>
<ul>
  <li>Nilai tunggal integer: <code>1: writeln('Hari Senin');</code></li>
  <li>Nilai jamak karakter char: <code>'y', 'Y': writeln('Anda menyetujui syarat.');</code></li>
  <li>Rentang subjangkauan (subrange): <code>80..100: writeln('Grade A');</code></li>
</ul>"""
                },
                {
                    "title": "3. Program Lengkap: Menu Pembelian & Kasir Interaktif",
                    "html": """<pre class="bg-slate-900 p-4 rounded-lg overflow-x-auto text-emerald-400 font-mono text-sm"><code>program MenuResto;
uses crt;

var
  pilihan, jumlah: integer;
  harga, total: real;
  nama_menu: string[30];

begin
  clrscr;
  writeln('========================================');
  writeln('       DAFTAR MENU KANTIN MAHASISWA     ');
  writeln('========================================');
  writeln('1. Paket Nasi Ayam Geprek  (Rp 15.000)  ');
  writeln('2. Paket Nasi Soto Ayam    (Rp 12.000)  ');
  writeln('3. Mie Goreng Spesial      (Rp 10.000)  ');
  writeln('4. Es Teh Manis Jumbo      (Rp  4.000)  ');
  writeln('========================================');
  write('Pilih Nomor Menu [1-4] : '); readln(pilihan);

  case pilihan of
    1: begin
         nama_menu := 'Paket Nasi Ayam Geprek';
         harga := 15000;
       end;
    2: begin
         nama_menu := 'Paket Nasi Soto Ayam';
         harga := 12000;
       end;
    3: begin
         nama_menu := 'Mie Goreng Spesial';
         harga := 10000;
       end;
    4: begin
         nama_menu := 'Es Teh Manis Jumbo';
         harga := 4000;
       end;
  else
    begin
      writeln('Nomor menu tidak terdaftar!');
      readln;
      exit; { Keluar dari program }
    end;
  end;

  write('Jumlah Porsi yang Dipesan : '); readln(jumlah);
  total := harga * jumlah;

  writeln('----------------------------------------');
  writeln('Pesanan Anda  : ', nama_menu);
  writeln('Harga Satuan  : Rp ', harga:0:0);
  writeln('Jumlah Porsi  : ', jumlah);
  writeln('Total Tagihan : Rp ', total:0:0);
  writeln('========================================');
  writeln('Terima kasih atas pesanan Anda!');
  readln;
end.</code></pre>"""
                }
            ],
            "insights": [
                "<strong>Perbedaan IF vs CASE-OF:</strong> Gunakan <code>if-then-else</code> jika kondisi melibatkan perbandingan relasional kompleks dengan variabel bertipe real/string (misal: <code>ipk &ge; 3.50</code>). Gunakan <code>case-of</code> jika pemilih berupa pilihan diskrit ordinal (menu 1-4, karakter pilihan Y/N).",
                "<strong>Penutup Struktur CASE:</strong> Seluruh blok <code>case ... of</code> ditutup dengan kata kunci <code>end;</code> (tanpa membutuhkan <code>begin</code> di awal case).",
                "<strong>Rentang Char:</strong> Pada Free Pascal, selector char mendukung subrange alfabet: <code>'a'..'z': writeln('Huruf kecil');</code>."
            ],
            "doc_ref": "Pertemuan_6.pdf (14 Halaman)",
            "lecturer": "Tim Dosen Pemrograman FTIK Unindra",
            "standar_html": """<h4>1. Struktur Kontrol CASE-OF</h4>
<p>Struktur seleksi banyak kondisi untuk memilih cabang instruksi berdasarkan nilai variabel ordinal.</p>
<h4>2. Syarat Variabel Pemilih</h4>
<p>Wajib bertipe ordinal (Integer, Char, Boolean). DILARANG menggunakan tipe Real atau String.</p>
<h4>3. Format Rentang & ELSE</h4>
<p>Mendukung nilai tunggal, daftar koma, rentang subrange titik dua kali (<code>1..10</code>), dan cabang cadangan <code>else</code>.</p>
<h4>4. Akhir Struktur</h4>
<p>Struktur case diakhiri langsung dengan kata <code>end;</code>.</p>""",
            "cheatsheet_pts": [
                ("Syarat Selector CASE-OF", "Variabel pemilih HANYA boleh bertipe data ordinal (Integer, Char, Boolean). Tipe Real dan String dilarang mutlak."),
                ("Format Subrange (..)", "Gunakan dua tanda titik berturut-turut untuk menyatakan rentang nilai kontinu (misal: 1..5 atau 'A'..'Z')."),
                ("Daftar Nilai Koma", "Nilai pemilih yang menjalankan aksi serupa dapat ditulis dengan pemisah tanda koma (misal: 'y', 'Y': aksi;)."),
                ("Klausa ELSE pada CASE", "Klausa opsional penanganan fallback yang akan dieksekusi bila nilai selector tidak cocok dengan semua label case di atasnya."),
                ("Penutup Struktur CASE", "Struktur case ... of ditutup dengan end; (tidak memerlukan pasangan begin pembuka di awal case).")
            ],
            "tip": "Ingat: CASE-OF ditutup dengan kata end;, tanpa perlu begin sebelum kata case."
        }
    },

    # =========================================================================
    # 5. BAHASA INGGRIS 1
    # =========================================================================
    "subject-inggris": {
        5: {
            "title": "Chapter V: What Are You Doing? (Present Continuous Tense & IT Activities)",
            "date": "2026-10-16",
            "desc": "Formulasi Present Continuous Tense (Subject + Be + Verb-ing), aturan ortografi akhiran -ing, dynamic action verbs vs stative verbs, dan dialog aktivitas teknis developer.",
            "notes": "Exam Rule: Stative verbs (e.g. understand, want, need, believe) tidak boleh digunakan dalam bentuk continuous (-ing) dalam konteks formal tata bahasa Inggris.",
            "materials": [
                {
                    "id": "mat_inggris_5_1",
                    "type": "pdf",
                    "title": "Modul Dosen P5: Chapter V What Are You Doing (5. Chapter V_What are You Doing.pdf)",
                    "file_url": "/materials/inggris_p5_chapter_5_what_are_you_doing.pdf",
                    "file_size": 573246,
                    "date_added": "2026-10-16"
                }
            ],
            "transcripts": "Transkrip Perkuliahan Tatap Muka: Dosen Bahasa Inggris menerangkan fungsi Present Continuous Tense untuk mengekspresikan kegiatan yang sedang berlangsung saat pembicaraan terjadi (right now / at the moment). Dosen juga menjelaskan perbedaan kata kerja aksi (dynamic) dengan kata kerja keadaan (stative verbs).",
            "sections": [
                {
                    "title": "1. Struktur Gramatikal Present Continuous Tense",
                    "html": """<p><strong>Present Continuous Tense</strong> digunakan untuk menyatakan tindakan atau peristiwa yang sedang berlangsung tepat pada saat ini (<em>at the moment of speaking</em>) atau peristiwa sementara dalam kurun waktu saat ini.</p>
<div class="table-wrap">
  <table>
    <thead><tr><th>Bentuk Kalimat</th><th>Pola Struktur / Rumus</th><th>Contoh Kalimat Teknis IT</th></tr></thead>
    <tbody>
      <tr><td><strong>Positif (+)</strong></td><td><code>Subject + to be (am/is/are) + Verb-ing</code></td><td><em>The engineer is configuring the router firewall.</em></td></tr>
      <tr><td><strong>Negatif (-)</strong></td><td><code>Subject + to be + not + Verb-ing</code></td><td><em>The database server is not responding to requests.</em></td></tr>
      <tr><td><strong>Tanya (?)</strong></td><td><code>To be (am/is/are) + Subject + Verb-ing?</code></td><td><em>Are they compiling the source code right now?</em></td></tr>
    </tbody>
  </table>
</div>
<ul>
  <li><strong>Pasangan To Be:</strong> <code>I &rarr; am</code>, <code>He/She/It &rarr; is</code>, <code>You/We/They &rarr; are</code>.</li>
  <li><strong>Time Signals:</strong> <em>now, right now, at present, at the moment, currently, this week</em>.</li>
</ul>"""
                },
                {
                    "title": "2. Aturan Ortografi Penambahan Akhiran -ing",
                    "html": """<ul>
  <li><strong>Kata kerja berakhiran huruf vokal 'e' tunggal:</strong> Hilangkan huruf 'e' lalu tambahkan <code>-ing</code> (contoh: <em>write &rarr; writing</em>, <em>create &rarr; creating</em>).</li>
  <li><strong>Kata kerja bersuku kata satu berakhiran Konsonan-Vokal-Konsonan (CVC):</strong> Gandakan konsonan terakhir (contoh: <em>run &rarr; running</em>, <em>stop &rarr; stopping</em>).</li>
  <li><strong>Kata kerja berakhiran 'ie':</strong> Ubah 'ie' menjadi 'y' lalu tambahkan <code>-ing</code> (contoh: <em>lie &rarr; lying</em>).</li>
</ul>"""
                },
                {
                    "title": "3. Dynamic Verbs vs Stative Verbs",
                    "html": """<p>Tidak semua kata kerja dalam bahasa Inggris dapat diubah menjadi bentuk <em>continuous (-ing)</em>:</p>
<ul>
  <li><strong>Dynamic Verbs (Action Verbs):</strong> Kata kerja yang melibatkan tindakan fisik nyata. Boleh menggunakan continuous: <em>typing, debugging, running, testing</em>.</li>
  <li><strong>Stative Verbs (State Verbs):</strong> Kata kerja yang menggambarkan keadaan batin, kepemilikan, persepsi, atau emosi. <strong>DILARANG</strong> menggunakan continuous:
    <ul>
      <li><em>Persepsi & Pikiran:</em> <code>know, understand, believe, remember, think</code> (salah: <em>I am knowing the answer</em> &rarr; benar: <strong>I know the answer</strong>).</li>
      <li><em>Emosi & Perasaan:</em> <code>love, like, hate, want, need, prefer</code>.</li>
      <li><em>Kepemilikan:</em> <code>have, own, possess, belong</code>.</li>
    </ul>
  </li>
</ul>"""
                }
            ],
            "insights": [
                "<strong>Konteks Standup IT:</strong> Dalam metodologi Agile, anggota tim menggunakan present continuous untuk menjawab pertanyaan harian: <em>'What are you working on today?' &rarr; 'I am developing the authentication API.'</em>",
                "<strong>Jebakan Ujian:</strong> Jangan gunakan to be rangkap atau lupa to be (contoh salah: <em>'He working'</em> atau <em>'He is work'</em> &rarr; benar: <em>'He is working'</em>).",
                "<strong>Perubahan Makna Kata 'Think':</strong> Bila bermakna opini (<em>I think it is good</em>) berbentuk stative; bila proses memikirkan (<em>I am thinking about the problem</em>) berbentuk dynamic."
            ],
            "doc_ref": "5. Chapter V_What are You Doing.pdf (12 Halaman)",
            "lecturer": "Tim Dosen Bahasa Inggris FTIK Unindra",
            "standar_html": """<h4>1. Rumus Present Continuous Tense</h4>
<p>S + to be (am/is/are) + V-ing. Dipakai untuk aktivitas yang sedang terjadi saat ini.</p>
<h4>2. Keterangan Waktu Khas</h4>
<p>Now, right now, at the moment, currently, look!, listen!.</p>
<h4>3. Stative Verbs</h4>
<p>Kata kerja emosi dan kognisi (understand, know, like, want, belong) tidak boleh menggunakan akhiran -ing.</p>""",
            "cheatsheet_pts": [
                ("Rumus Dasar", "Subject + am/is/are + Verb-ing untuk menyatakan peristiwa yang sedang berlangsung sekarang."),
                ("Pasangan To Be", "I berpasangan dengan am; He/She/It dengan is; You/We/They dengan are."),
                ("Aturan Silent-e", "Kata berakhiran e dihilangkan huruf e-nya sebelum ditambah -ing (write &rarr; writing, code &rarr; coding)."),
                ("Kaidah CVC Doubling", "Kata satu suku kata dengan pola konsonan-vokal-konsonan menggandakan konsonan akhir (run &rarr; running)."),
                ("Larangan Stative Verbs", "Kata kerja keadaan mental dan rasa (know, understand, believe, want) tidak boleh memakai bentuk -ing.")
            ],
            "tip": "Ingat rumus 3 komponen: Subject + To Be + Verb-ing. Jangan sampai to be tertinggal!"
        },
        6: {
            "title": "Chapter VI: Talking About Past Experience & Achievements (Present Perfect vs Simple Past)",
            "date": "2026-10-23",
            "desc": "Perbandingan Present Perfect Tense (Subject + have/has + Verb 3) untuk pengalaman hidup tanpa waktu spesifik versus Simple Past (waktu lampau tuntas spesifik).",
            "notes": "Exam Rule: Gunakan Simple Past jika ada keterangan waktu lampau spesifik ('yesterday', 'in 2024'). Gunakan Present Perfect jika waktu tidak disebutkan atau menggunakan rentang 'since' / 'for'.",
            "materials": [
                {
                    "id": "mat_inggris_6_1",
                    "type": "pdf",
                    "title": "Modul Dosen P6: Chapter VI Talking about Experience (6. Chapter VI_Talking about Experience.pdf)",
                    "file_url": "/materials/inggris_p6_chapter_6_talking_about_experience.pdf",
                    "file_size": 453613,
                    "date_added": "2026-10-23"
                }
            ],
            "transcripts": "Transkrip Perkuliahan Tatap Muka: Dosen menjelaskan perbedaan mendasar kapan menggunakan Simple Past dan Present Perfect. Bila kita menceritakan pencapaian atau pengalaman hidup di mana waktu kejadiannya tidak penting atau belum selesai dampaknya, gunakan Present Perfect (have/has + V3). Bila waktunya spesifik di masa lalu, gunakan Simple Past (V2).",
            "sections": [
                {
                    "title": "1. Struktur Gramatikal Present Perfect Tense",
                    "html": """<p><strong>Present Perfect Tense</strong> menghubungkan masa lalu dengan masa sekarang. Digunakan untuk menyatakan peristiwa yang telah terjadi di masa lampau namun akibat, hasil, atau relevansinya masih berpengaruh saat ini:</p>
<div class="table-wrap">
  <table>
    <thead><tr><th>Bentuk Kalimat</th><th>Pola Struktur / Rumus</th><th>Contoh Kalimat Profesional IT</th></tr></thead>
    <tbody>
      <tr><td><strong>Positif (+)</strong></td><td><code>Subject + have / has + Verb 3 (Past Participle)</code></td><td><em>She has deployed the mobile application to production.</em></td></tr>
      <tr><td><strong>Negatif (-)</strong></td><td><code>Subject + have / has + not + Verb 3</code></td><td><em>We have not received the server security credentials.</em></td></tr>
      <tr><td><strong>Tanya (?)</strong></td><td><code>Have / Has + Subject + Verb 3?</code></td><td><em>Have you ever worked with PostgreSQL database?</em></td></tr>
    </tbody>
  </table>
</div>
<ul>
  <li><strong>Subjek have:</strong> <code>I, You, We, They</code></li>
  <li><strong>Subjek has:</strong> <code>He, She, It</code></li>
</ul>"""
                },
                {
                    "title": "2. Matriks Komparasi: Present Perfect vs Simple Past",
                    "html": """<div class="table-wrap">
  <table>
    <thead><tr><th>Aspek Pembeda</th><th>Simple Past Tense</th><th>Present Perfect Tense</th></tr></thead>
    <tbody>
      <tr><td><strong>Fokus Peristiwa</strong></td><td>Menekankan <em>kapan</em> peristiwa lampau itu terjadi secara spesifik.</td><td>Menekankan <em>pengalaman</em> atau <em>hasil</em> pencapaian tanpa waktu spesifik.</td></tr>
      <tr><td><strong>Bentuk Kata Kerja</strong></td><td>Verb 2 (contoh: <em>wrote, bought, studied</em>).</td><td>Have/Has + Verb 3 (contoh: <em>have written, has bought</em>).</td></tr>
      <tr><td><strong>Keterangan Waktu</strong></td><td>Spesifik: <em>yesterday, last night, two days ago, in 2023</em>.</td><td>Tidak spesifik / rentang waktu: <em>already, yet, ever, never, just, since 2020, for 3 years</em>.</td></tr>
      <tr><td><strong>Contoh Komparasi</strong></td><td><em>I built this website last year.</em> (Waktu jelas tahun lalu).</td><td><em>I have built three e-commerce websites.</em> (Pengalaman hidup).</td></tr>
    </tbody>
  </table>
</div>"""
                },
                {
                    "title": "3. Penggunaan Khas: Since vs For",
                    "html": """<ul>
  <li><strong>Since (Sejak):</strong> Menunjukkan titik awal dimulainya suatu peristiwa di masa lampau (<em>starting point</em>). Contoh: <em>He has studied computer science since 2022.</em></li>
  <li><strong>For (Selama):</strong> Menunjukkan durasi atau panjangnya rentang waktu berlangsungnya peristiwa (<em>duration of time</em>). Contoh: <em>They have worked at Google for five years.</em></li>
</ul>"""
                }
            ],
            "insights": [
                "<strong>Wawancara Kerja IT:</strong> Pewawancara sering bertanya: <em>'Have you ever designed a relational database?'</em> Jawablah dengan Present Perfect untuk merangkum pengalaman, lalu jabarkan rincian teknisnya menggunakan Simple Past: <em>'Yes, I have. Last semester, I designed an inventory schema for a local pharmacy.'</em>",
                "<strong>Jebakan Ujian:</strong> Jangan gunakan Present Perfect bila terdapat keterangan waktu lampau spesifik seperti <em>yesterday</em> (salah: <em>'I have seen him yesterday'</em> &rarr; benar: <strong>'I saw him yesterday'</strong>).",
                "<strong>Irregular Verbs:</strong> Kuasai bentuk Verb 3 dari kata kerja umum IT: <em>build &rarr; built &rarr; built</em>, <em>write &rarr; wrote &rarr; written</em>, <em>run &rarr; ran &rarr; run</em>."
            ],
            "doc_ref": "6. Chapter VI_Talking about Experience.pdf (14 Halaman)",
            "lecturer": "Tim Dosen Bahasa Inggris FTIK Unindra",
            "standar_html": """<h4>1. Rumus Present Perfect Tense</h4>
<p>Subject + have/has + Verb 3 (Past Participle). Menjelaskan pengalaman yang telah tuntas.</p>
<h4>2. Perbedaan dengan Simple Past</h4>
<p>Simple Past memakai keterangan waktu lampau spesifik (yesterday, in 2024). Present Perfect tidak mencantumkan waktu spesifik.</p>
<h4>3. Since vs For</h4>
<p>Since untuk titik awal waktu (since 2021); For untuk durasi lamanya waktu (for 4 years).</p>""",
            "cheatsheet_pts": [
                ("Rumus Present Perfect", "Subject + have/has + Verb 3 untuk pengalaman hidup atau hasil tindakan yang masih relevan saat ini."),
                ("Subjek Has vs Have", "Has digunakan untuk He, She, It; Have digunakan untuk I, You, We, They."),
                ("Ciri Simple Past", "Menggunakan Verb 2 dan keterangan waktu lampau spesifik (yesterday, last month, ago, in 2023)."),
                ("Fungsi Since", "Menyatakan titik awal mula waktu suatu peristiwa dimulai (contoh: since Monday, since 2020)."),
                ("Fungsi For", "Menyatakan panjang durasi lamanya waktu peristiwa berlangsung (contoh: for two hours, for three years).")
            ],
            "tip": "Kunci ujian: Jika melihat kata 'yesterday' atau 'last...', gunakan Verb 2 (Past). Jika melihat kata 'since', 'for', 'already', gunakan have/has + Verb 3."
        }
    },

    # =========================================================================
    # 6. MATEMATIKA DASAR (KALKULUS SI)
    # =========================================================================
    "subject-matdas": {
        5: {
            "title": "Limit Fungsi Aljabar: Konsep Intuitif, Sifat Operasi & Metode Penyelesaian",
            "date": "2026-10-16",
            "desc": "Definisi intuitif limit fungsi ketika x mendekati c, limit kiri dan kanan, sifat-sifat dasar operasi limit aljabar, teknik substitusi langsung, pemfaktoran selisih kuadrat, perkalian bentuk sekawan akar, serta limit menuju tak hingga.",
            "notes": "Materi UTS: Bentuk 0/0 adalah BENTUK TAK TENTU (bukan 0 dan bukan tak hingga). Selalu faktorkan atau kalikan dengan bentuk akar sekawan terlebih dahulu sebelum melakukan substitusi nilai x.",
            "materials": [
                {
                    "id": "mat_matdas_5_1",
                    "type": "pdf",
                    "title": "Modul Dosen P5: Limit Fungsi Aljabar (KULIAH_MINGGU_KE-V.pptx)",
                    "file_url": "/materials/matdas_p3_fungsi_dan_grafik.pdf",
                    "file_size": 564156,
                    "date_added": "2026-10-16"
                }
            ],
            "transcripts": "Transkrip Perkuliahan Tatap Muka: Dosen Dr. Munali menjelaskan bahwa limit meneliti perilaku nilai f(x) ketika x bergerak mendekati suatu titik tertentu c dari kedua sisi, baik kiri maupun kanan. Jika hasil substitusi langsung menghasilkan bentuk tak tentu 0 dibagi 0, kita wajib menguraikan bentuk aljabar dengan pemfaktoran atau perkalian sekawan akar.",
            "sections": [
                {
                    "title": "1. Definisi Intuitif & Teorema Keberadaan Limit",
                    "html": """<p>Secara intuitif, pernyataan <code>lim<sub>x &rarr; c</sub> f(x) = L</code> berarti bahwa ketika nilai <code>x</code> bergerak mendekati bilangan <code>c</code> (tetapi <code>x &ne; c</code>), maka nilai <code>f(x)</code> akan bergerak mendekati nilai riil <code>L</code>.</p>
<ul>
  <li><strong>Limit Kiri:</strong> <code>lim<sub>x &rarr; c⁻</sub> f(x)</code> (nilai x mendekati c dari arah kiri atau nilai yang lebih kecil dari c).</li>
  <li><strong>Limit Kanan:</strong> <code>lim<sub>x &rarr; c⁺</sub> f(x)</code> (nilai x mendekati c dari arah kanan atau nilai yang lebih besar dari c).</li>
  <li><strong>Syarat Mutlak Keberadaan Limit:</strong> Suatu fungsi memiliki limit di titik <code>c</code> jika dan hanya jika limit kiri dan limit kanannya bernilai sama:
    <div style="background: rgba(6, 182, 212, 0.1); border-left: 4px solid #06B6D4; padding: 10px 14px; margin: 10px 0; border-radius: 6px; font-weight: bold; color: #38BDF8;">
      lim<sub>x &rarr; c</sub> f(x) = L &nbsp;&hArr;&nbsp; lim<sub>x &rarr; c⁻</sub> f(x) = lim<sub>x &rarr; c⁺</sub> f(x) = L
    </div>
  </li>
</ul>"""
                },
                {
                    "title": "2. Sifat-Sifat Pokok Teorema Limit Aljabar",
                    "html": """<p>Misalkan <code>k</code> adalah konstanta dan limit fungsi <code>f(x)</code> serta <code>g(x)</code> keduanya ada di <code>x &rarr; c</code>:</p>
<ol>
  <li><strong>Limit Konstanta:</strong> <code>lim<sub>x &rarr; c</sub> k = k</code></li>
  <li><strong>Limit Fungsi Identitas:</strong> <code>lim<sub>x &rarr; c</sub> x = c</code></li>
  <li><strong>Perkalian Konstanta:</strong> <code>lim<sub>x &rarr; c</sub> [k &middot; f(x)] = k &middot; lim<sub>x &rarr; c</sub> f(x)</code></li>
  <li><strong>Penjumlahan & Pengurangan:</strong> <code>lim<sub>x &rarr; c</sub> [f(x) &plusmn; g(x)] = lim<sub>x &rarr; c</sub> f(x) &plusmn; lim<sub>x &rarr; c</sub> g(x)</code></li>
  <li><strong>Perkalian Dua Fungsi:</strong> <code>lim<sub>x &rarr; c</sub> [f(x) &middot; g(x)] = lim<sub>x &rarr; c</sub> f(x) &middot; lim<sub>x &rarr; c</sub> g(x)</code></li>
  <li><strong>Pembagian Dua Fungsi:</strong> <code>lim<sub>x &rarr; c</sub> [f(x) / g(x)] = lim<sub>x &rarr; c</sub> f(x) / lim<sub>x &rarr; c</sub> g(x)</code>, asalkan <code>lim<sub>x &rarr; c</sub> g(x) &ne; 0</code>.</li>
  <li><strong>Perpangkatan & Akar:</strong> <code>lim<sub>x &rarr; c</sub> [f(x)]ⁿ = [lim<sub>x &rarr; c</sub> f(x)]ⁿ</code></li>
</ol>"""
                },
                {
                    "title": "3. Tiga Metode Evaluasi Limit Aljabar (Contoh Langkah demi Langkah)",
                    "html": """<p><strong>Metode 1: Substitusi Langsung</strong><br>
Jika fungsi terdefinisi di <code>x = c</code> dan menghasilkan bilangan real, maka nilai tersebut adalah nilai limitnya.<br>
<em>Contoh:</em> <code>lim<sub>x &rarr; 2</sub> (3x² - 5x + 4) = 3(2)² - 5(2) + 4 = 12 - 10 + 4 = 6</code>.</p>

<p><strong>Metode 2: Pemfaktoran Aljabar (Mengatasi Bentuk 0 / 0)</strong><br>
Bila substitusi langsung menghasilkan <code>0 / 0</code>, faktorkan pembilang dan penyebut untuk mengeliminasi pembuat nol <code>(x - c)</code>.<br>
<em>Contoh:</em> Hitunglah <code>lim<sub>x &rarr; 2</sub> (x² - 4) / (x - 2)</code>.<br>
Langkah penyelesaian:<br>
1. Substitusi awal: <code>(2² - 4) / (2 - 2) = 0 / 0</code> (Bentuk tak tentu).<br>
2. Faktorkan selisih kuadrat: <code>x² - 4 = (x - 2)(x + 2)</code>.<br>
3. Bentuk limit menjadi: <code>lim<sub>x &rarr; 2</sub> [(x - 2)(x + 2)] / (x - 2) = lim<sub>x &rarr; 2</sub> (x + 2)</code>.<br>
4. Substitusi kembali nilai x = 2: <code>2 + 2 = 4</code>.</p>

<p><strong>Metode 3: Perkalian Sekawan Bentuk Akar</strong><br>
Digunakan ketika bentuk memuat selisih akar kuadrat yang menghasilkan <code>0 / 0</code>.<br>
<em>Contoh:</em> Hitunglah <code>lim<sub>x &rarr; 4</sub> (x - 4) / (&radic;x - 2)</code>.<br>
Langkah penyelesaian:<br>
1. Kalikan pembilang dan penyebut dengan sekawan penyebut yaitu <code>(&radic;x + 2)</code>:<br>
<code>lim<sub>x &rarr; 4</sub> [(x - 4)(&radic;x + 2)] / [(&radic;x - 2)(&radic;x + 2)]</code><br>
2. Perhatikan penyebut: <code>(&radic;x - 2)(&radic;x + 2) = (&radic;x)² - 2² = x - 4</code>.<br>
3. Bentuk disederhanakan: <code>lim<sub>x &rarr; 4</sub> [(x - 4)(&radic;x + 2)] / (x - 4) = lim<sub>x &rarr; 4</sub> (&radic;x + 2)</code>.<br>
4. Substitusi nilai x = 4: <code>&radic;4 + 2 = 2 + 2 = 4</code>.</p>

<p><strong>Metode 4: Limit Menuju Tak Hingga (x &rarr; &infin;)</strong><br>
Bagi seluruh suku pembilang dan penyebut dengan variabel berpangkat tertinggi dari penyebut.<br>
<em>Contoh:</em> <code>lim<sub>x &rarr; &infin;</sub> (4x² + 3x - 1) / (2x² - 5)</code><br>
Bagi seluruh suku dengan <code>x²</code>:<br>
<code>= lim<sub>x &rarr; &infin;</sub> (4 + 3/x - 1/x²) / (2 - 5/x²) = (4 + 0 - 0) / (2 - 0) = 4 / 2 = 2</code>.</p>"""
                }
            ],
            "insights": [
                "<strong>Makna 0/0:</strong> Dalam kalkulus, <code>0 / 0</code> dinamakan <em>Indeterminate Form</em> (Bentuk Tak Tentu), artinya limit tersebut masih menyimpan nilai riil pasti yang harus diungkap melalui operasi aljabar.",
                "<strong>Trik Cepat Limit Tak Hingga:</strong> Jika derajat polinomial pembilang sama dengan penyebut (misal sama-sama berpangkat 2), nilai limit tak hingga cukup diambil dari rasio koefisien pangkat tertingginya: <code>4 / 2 = 2</code>.",
                "<strong>Penerapan Sistem Informasi:</strong> Konsep limit adalah fondasi analisis kompleksitas algoritma Big-O, di mana kita menganalisis batas pertumbuhan waktu komputasi saat ukuran input data (n) mendekati tak hingga."
            ],
            "doc_ref": "1698851800_KULIAH_MINGGU_KE-V_(LIMIT_FUNGSI_ALJABAR).pptx (18 Slide)",
            "lecturer": "Dr. Munali, M.Pd. / Syifaafidah, M.Pd.",
            "standar_html": """<h4>1. Hakikat Konsep Limit</h4>
<p>Limit mengamati nilai f(x) ketika x mendekati suatu nilai c. Syarat limit ada: Limit Kiri = Limit Kanan.</p>
<h4>2. Mengatasi Bentuk Tak Tentu (0/0)</h4>
<ul>
  <li>Metode Pemfaktoran: Faktorkan bentuk suku selisih kuadrat atau persamaan kuadrat.</li>
  <li>Metode Perkalian Sekawan: Kalikan dengan pasangan akar (+ atau -) untuk mengeliminasi akar di penyebut.</li>
</ul>
<h4>3. Limit Tak Hingga</h4>
<p>Bagi pembilang dan penyebut dengan variabel pangkat tertinggi penyebut. Gunakan teorema lim (1/xⁿ) = 0.</p>""",
            "cheatsheet_pts": [
                ("Syarat Keberadaan Limit", "Limit ada jika dan hanya jika Limit Kiri bernilai sama dengan Limit Kanan: lim_{x &rarr; c⁻} f(x) = lim_{x &rarr; c⁺} f(x)."),
                ("Bentuk Tak Tentu 0/0", "Hasil 0/0 BUKAN nol dan bukan tak hingga; wajib diselesaikan dengan pemfaktoran atau perkalian sekawan akar."),
                ("Rumus Selisih Kuadrat", "x² - a² = (x - a)(x + a). Sangat sering keluar untuk mencoret pembuat nol (x - a)."),
                ("Sekawan Bentuk Akar", "Sekawan dari (&radic;x - a) adalah (&radic;x + a). Perkalian keduanya menghasilkan: (&radic;x)² - a² = x - a²."),
                ("Trik Cepat Limit Tak Hingga", "Bila derajat pangkat pembilang = penyebut, nilai limit adalah koefisien tertinggi pembilang dibagi koefisien tertinggi penyebut.")
            ],
            "tip": "Jika substitusi menghasilkan 0/0, jangan panik: cari faktor pembuat nol pada pembilang dan coret dengan penyebut."
        },
        6: {
            "title": "Turunan Fungsi Aljabar (Diferensial): Definisi Limit, Aturan Pangkat & Turunan Operasi",
            "date": "2026-10-23",
            "desc": "Definisi formal turunan melalui limit selisih beda, aturan dasar turunan pangkat d/dx(xⁿ) = n·xⁿ⁻¹, aturan perkalian dan pembagian fungsi, serta penentuan gradien garis singgung kurva.",
            "notes": "Materi UTS: Pada turunan pembagian (u/v), penyebut adalah v² (tanpa turunan) dan tanda operasi pembilang adalah KURANG (-), bukan tambah (+). Rumus: (u'·v - u·v') / v².",
            "materials": [
                {
                    "id": "mat_matdas_6_1",
                    "type": "pdf",
                    "title": "Modul Dosen P6: Turunan Fungsi Aljabar (KULIAH_MINGGU_KE-VI.pptx)",
                    "file_url": "/materials/matdas_p3_fungsi_dan_grafik.pdf",
                    "file_size": 564156,
                    "date_added": "2026-10-23"
                }
            ],
            "transcripts": "Transkrip Perkuliahan Tatap Muka: Dosen menerangkan bahwa turunan fungsi f'(x) diturunkan secara langsung dari konsep limit perbandingan selisih beda (Difference Quotient) ketika h mendekati nol. Turunan merepresentasikan laju perubahan sesaat sekaligus gradien kemiringan garis singgung grafik kurva.",
            "sections": [
                {
                    "title": "1. Definisi Formal Turunan dari Limit Selisih Beda",
                    "html": """<p><strong>Turunan (Derivatif)</strong> dari fungsi <code>f(x)</code> pada titik <code>x</code> didefinisikan secara formal sebagai limit dari rasio selisih beda ketika interval <code>h</code> mendekati nol:</p>
<div style="background: rgba(6, 182, 212, 0.1); border-left: 4px solid #06B6D4; padding: 12px 16px; margin: 12px 0; border-radius: 6px; font-weight: bold; color: #38BDF8; font-family: monospace;">
  f'(x) = dy/dx = lim<sub>h &rarr; 0</sub> [f(x + h) - f(x)] / h
</div>
<ul>
  <li><strong>Makna Geometris:</strong> Nilai <code>f'(c)</code> menyatakan gradien (kemiringan <code>m</code>) dari garis singgung kurva <code>y = f(x)</code> tepat pada titik singgung <code>(c, f(c))</code>.</li>
  <li><strong>Makna Fisis:</strong> Menyatakan laju perubahan nilai sesaat (<em>instantaneous rate of change</em>).</li>
</ul>"""
                },
                {
                    "title": "2. Aturan-Aturan Dasar Turunan Aljabar",
                    "html": """<div class="table-wrap">
  <table>
    <thead><tr><th>Nama Aturan</th><th>Notasi Formula Turunan</th><th>Contoh Perhitungan Konkret</th></tr></thead>
    <tbody>
      <tr><td><strong>Aturan Konstanta</strong></td><td><code>d/dx (c) = 0</code></td><td>Turunan dari <code>f(x) = 7</code> adalah <code>f'(x) = 0</code>.</td></tr>
      <tr><td><strong>Aturan Fungsi Identitas</strong></td><td><code>d/dx (x) = 1</code></td><td>Turunan dari <code>f(x) = x</code> adalah <code>f'(x) = 1</code>.</td></tr>
      <tr><td><strong>Aturan Pangkat</strong></td><td><code>d/dx (xⁿ) = n &middot; xⁿ⁻¹</code></td><td>Turunan dari <code>x⁴</code> adalah <code>4x³</code>; turunan dari <code>x⁻²</code> adalah <code>-2x⁻³</code>.</td></tr>
      <tr><td><strong>Kelipatan Konstanta</strong></td><td><code>d/dx [c &middot; f(x)] = c &middot; f'(x)</code></td><td>Turunan dari <code>5x³</code> adalah <code>5 &middot; (3x²) = 15x²</code>.</td></tr>
      <tr><td><strong>Penjumlahan & Pengurangan</strong></td><td><code>[f(x) &plusmn; g(x)]' = f'(x) &plusmn; g'(x)</code></td><td>Turunan dari <code>2x³ - 4x² + 5x - 9</code> adalah <code>6x² - 8x + 5</code>.</td></tr>
    </tbody>
  </table>
</div>"""
                },
                {
                    "title": "3. Aturan Perkalian & Pembagian Fungsi",
                    "html": """<p><strong>A. Aturan Hasil Kali Dua Fungsi (Product Rule):</strong><br>
Jika <code>y = u &middot; v</code> di mana <code>u = u(x)</code> dan <code>v = v(x)</code>, maka:<br>
<strong style="color: #38BDF8;">y' = (u &middot; v)' = u' &middot; v + u &middot; v'</strong></p>
<p><em>Contoh Kasus:</em> Tentukan turunan dari <code>y = (2x + 1)(x² - 3)</code>.<br>
1. Tentukan <code>u = 2x + 1</code> &rarr; <code>u' = 2</code>.<br>
2. Tentukan <code>v = x² - 3</code> &rarr; <code>v' = 2x</code>.<br>
3. Masukkan rumus: <code>y' = 2(x² - 3) + (2x + 1)(2x) = 2x² - 6 + 4x² + 2x = 6x² + 2x - 6</code>.</p>

<p><strong>B. Aturan Hasil Bagi Dua Fungsi (Quotient Rule):</strong><br>
Jika <code>y = u / v</code> dengan <code>v(x) &ne; 0</code>, maka:<br>
<strong style="color: #F87171;">y' = (u / v)' = (u' &middot; v - u &middot; v') / v²</strong></p>
<p><em>Contoh Kasus:</em> Tentukan turunan dari <code>y = (3x - 2) / (x + 1)</code>.<br>
1. Tentukan <code>u = 3x - 2</code> &rarr; <code>u' = 3</code>.<br>
2. Tentukan <code>v = x + 1</code> &rarr; <code>v' = 1</code>.<br>
3. Masukkan rumus:<br>
<code>y' = [3(x + 1) - (3x - 2)(1)] / (x + 1)² = [3x + 3 - 3x + 2] / (x + 1)² = 5 / (x + 1)²</code>.</p>"""
                },
                {
                    "title": "4. Aplikasi: Persamaan Garis Singgung Kurva",
                    "html": """<p>Untuk mencari persamaan garis singgung kurva <code>y = f(x)</code> pada titik berabsis <code>x = x₁</code>:</p>
<ol>
  <li>Hitung ordinat titik singgung: <code>y₁ = f(x₁)</code>.</li>
  <li>Hitung gradien kemiringan garis singgung dengan turunan pertama: <code>m = f'(x₁)</code>.</li>
  <li>Gunakan rumus persamaan garis melalui satu titik: <strong>y - y₁ = m &middot; (x - x₁)</strong>.</li>
</ol>
<p><em>Contoh:</em> Tentukan persamaan garis singgung kurva <code>y = x² - 4x + 3</code> di titik <code>x = 3</code>.<br>
1. Nilai y₁: <code>y₁ = 3² - 4(3) + 3 = 9 - 12 + 3 = 0</code>. Titik singgung adalah <code>(3, 0)</code>.<br>
2. Turunan kurva: <code>y' = 2x - 4</code>.<br>
3. Gradien m pada x = 3: <code>m = 2(3) - 4 = 6 - 4 = 2</code>.<br>
4. Persamaan garis singgung: <code>y - 0 = 2(x - 3) &rarr; y = 2x - 6</code>.</p>"""
                }
            ],
            "insights": [
                "<strong>Tanda Operasi Pembagian:</strong> Ingat rumus turunan pembagian WAJIB bertanda KURANG (<code>u'v - uv'</code>), bukan tambah! Tertukar tanda adalah penyebab kesalahan terbanyak saat ujian.",
                "<strong>Turunan Bentuk Akar:</strong> Bentuk <code>&radic;x</code> dapat diubah menjadi pangkat pecahan <code>x^(1/2)</code>. Turunannya adalah <code>(1/2)x^(-1/2) = 1 / (2&radic;x)</code>.",
                "<strong>Penerapan Optimasi di SI:</strong> Titik stasioner diperoleh ketika turunan pertama bernilai nol: <code>f'(x) = 0</code>. Konsep ini digunakan dalam algoritma Gradient Descent pada machine learning untuk meminimalkan loss function."
            ],
            "doc_ref": "1697637880_KULIAH_MINGGU_KE-VI_(TURUNAN_FUNGSI_ALJABAR).pptx (16 Slide)",
            "lecturer": "Dr. Munali, M.Pd. / Syifaafidah, M.Pd.",
            "standar_html": """<h4>1. Definisi Turunan</h4>
<p>f'(x) = lim_{h &rarr; 0} [f(x + h) - f(x)] / h. Menyatakan gradien garis singgung dan laju perubahan sesaat.</p>
<h4>2. Aturan Dasar Pangkat</h4>
<p>d/dx (xⁿ) = n &middot; xⁿ⁻¹. Turunan konstanta angka adalah 0.</p>
<h4>3. Aturan Perkalian & Pembagian</h4>
<ul>
  <li>Perkalian: (u &middot; v)' = u'v + uv'</li>
  <li>Pembagian: (u / v)' = (u'v - uv') / v²</li>
</ul>
<h4>4. Persamaan Garis Singgung</h4>
<p>y - y₁ = m(x - x₁), di mana gradien m = f'(x₁).</p>""",
            "cheatsheet_pts": [
                ("Definisi Limit Turunan", "f'(x) = lim_{h &rarr; 0} [f(x+h) - f(x)] / h (rasio selisih beda / difference quotient)."),
                ("Rumus Dasar Pangkat", "d/dx (xⁿ) = n &middot; xⁿ⁻¹. Pangkat dikalikan ke depan, lalu pangkat berkurang satu."),
                ("Turunan Konstanta", "Turunan dari konstanta angka berapapun tanpa variabel selalu sama dengan nol: d/dx (c) = 0."),
                ("Rumus Perkalian (u &middot; v)'", "(u &middot; v)' = u'v + uv' (turunan suku pertama kali kedua, ditambah suku pertama kali turunan kedua)."),
                ("Rumus Pembagian (u / v)'", "(u / v)' = (u'v - uv') / v² (pembilang bertanda kurang, penyebut dikuadratkan tanpa turunan)."),
                ("Gradien Garis Singgung", "Gradien garis singgung kurva f(x) pada titik x₁ diperoleh dengan menghitung m = f'(x₁).")
            ],
            "tip": "Hafalkan mantra turunan pembagian: 'u aksen v dikurang u v aksen, per v kuadrat'."
        }
    },

    # =========================================================================
    # 7. PENDIDIKAN PANCASILA (MK02)
    # =========================================================================
    "subject-pancasila": {
        5: {
            "title": "Pancasila sebagai Ideologi Negara & Implementasi Nilai-Nilai Luhur",
            "date": "2026-10-17",
            "desc": "Pengertian ideologi, perbandingan ideologi terbuka Pancasila versus ideologi tertutup, tiga dimensi ideologi Pancasila (realitas, idealitas, fleksibilitas), dan implementasi Sila 1 s.d. 5.",
            "notes": "Materi UTS: Pahami tiga dimensi Pancasila sebagai ideologi terbuka: Realitas (berakar dari budaya nyata rakyat), Idealitas (memuat cita-cita masa depan luhur), dan Fleksibilitas (mampu beradaptasi dengan dinamika zaman tanpa kehilangan jati diri).",
            "materials": [
                {
                    "id": "mat_pancasila_5_1",
                    "type": "pdf",
                    "title": "Modul Dosen P5: Pancasila sebagai Ideologi Negara (1696678544_5.pptx)",
                    "file_url": "/materials/pancasila_rps_mk02_resmi_unindra.pdf",
                    "file_size": 1120616,
                    "date_added": "2026-10-17"
                }
            ],
            "transcripts": "Transkrip Perkuliahan Tatap Muka: Dosen Pancasila menguraikan makna ideologi sebagai sistem keyakinan cita-cita bangsa. Pancasila berkedudukan sebagai ideologi terbuka yang dinamis, tidak dogmatis, dan mampu menjawab perkembangan ilmu pengetahuan serta transformasi teknologi digital tanpa melunturkan nilai kepribadian bangsa.",
            "sections": [
                {
                    "title": "1. Hakikat & Definisi Ideologi Negara",
                    "html": """<p>Secara etimologis, <strong>Ideologi</strong> berasal dari kata Yunani <em>idea</em> (gagasan, konsep, cita-cita) dan <em>logos</em> (ilmu, pengetahuan). Dalam konteks ketatanegaraan, ideologi negara adalah kesatuan gagasan-gagasan dasar yang sistematis dan menyeluruh mengenai manusia dan kehidupannya yang dijadikan pedoman bagi suatu bangsa dalam mencapai tujuan nasional.</p>
<ul>
  <li><strong>Fungsi Pokok Ideologi:</strong>
    <ol>
      <li>Sebagai orientasi dasar pemberi makna hidup bagi warga negara.</li>
      <li>Sebagai norma pemersatu dan pedoman bertindak dalam kehidupan berbangsa.</li>
      <li>Sebagai kekuatan pendorong (motivator) dalam mencapai cita-cita kemerdekaan.</li>
    </ol>
  </li>
</ul>"""
                },
                {
                    "title": "2. Perbandingan Ideologi Terbuka vs Ideologi Tertutup",
                    "html": """<div class="table-wrap">
  <table>
    <thead><tr><th>Aspek Karakteristik</th><th>Ideologi Terbuka (Pancasila)</th><th>Ideologi Tertutup (Komunisme, Fasisme)</th></tr></thead>
    <tbody>
      <tr><td><strong>Sumber Nilai</strong></td><td>Digali dari nilai kearifan lokal, budaya, dan cita-cita moral masyarakat sendiri.</td><td>Diciptakan dan dipaksakan secara dogmatis oleh kelompok elit penguasa.</td></tr>
      <tr><td><strong>Sifat Sikap</strong></td><td>Dinamis, demokratis, dialogis, dan terbuka terhadap perubahan iptek.</td><td>Otoriter, kaku, memutlakkan kepatuhan tanpa boleh ada kritik.</td></tr>
      <tr><td><strong>Operasionalisasi</strong></td><td>Nilai dasar tetap, penjabaran nilai instrumental fleksibel sesuai zaman.</td><td>Totaliter, membatasi hak asasi individu demi kekuasaan negara.</td></tr>
    </tbody>
  </table>
</div>"""
                },
                {
                    "title": "3. Tiga Dimensi Pancasila sebagai Ideologi Terbuka (Koento Wibisono)",
                    "html": """<ol>
  <li><strong>Dimensi Realitas:</strong> Nilai-nilai dasar yang terkandung di dalam Pancasila bersumber dan hidup berakar di dalam masyarakat Indonesia secara nyata (religiositas, gotong royong, musyawarah).</li>
  <li><strong>Dimensi Idealitas:</strong> Nilai-nilai dasar Pancasila memuat tujuan luhur, harapan, dan cita-cita masa depan yang ingin diwujudkan secara berkelanjutan (masyarakat adil dan makmur).</li>
  <li><strong>Dimensi Fleksibilitas / Pengembangan:</strong> Ideologi memiliki keluwesan intelektual untuk merefleksikan dan merespons tantangan zaman baru (era kecerdasan buatan dan globalisasi) melalui ijtihad kebijakan instrumental.</li>
</ol>"""
                }
            ],
            "insights": [
                "<strong>Batasan Keterbukaan:</strong> Meskipun Pancasila adalah ideologi terbuka, keterbukaannya memiliki batasan tegas: melarang ideologi komunisme/marxisme, menolak liberalisme ekstrim yang mengabaikan keadilan sosial, dan menolak sektarianisme radikal.",
                "<strong>Implementasi Bidang IT:</strong> Implementasi Sila ke-2 (Kemanusiaan yang Adil dan Beradab) dalam teknologi mencakup perlindungan privasi data pribadi warga negara dari penyalahgunaan algoritma komersial.",
                "<strong>Jebakan Ujian:</strong> Nilai dasar Pancasila bersifat abadi (tidak boleh diubah), sedangkan yang dapat berkembang dinamis adalah nilai instrumental (pasal undang-undang) dan nilai praksis (penerapan nyata sehari-hari)."
            ],
            "doc_ref": "1696678544_5.pptx (20 Slide)",
            "lecturer": "Tim Dosen Pancasila Unindra",
            "standar_html": """<h4>1. Pengertian Ideologi</h4>
<p>Kumpulan konsep dan cita-cita sistematis yang memandu kehidupan berbangsa dan bernegara.</p>
<h4>2. Karakteristik Ideologi Terbuka Pancasila</h4>
<p>Berasal dari masyarakat sendiri, terbuka terhadap kemajuan iptek, demokratis, dan menolak pemaksaan kehendak.</p>
<h4>3. Tiga Dimensi Ideologi Terbuka</h4>
<ul>
  <li>Dimensi Realitas (berakar dari budaya nyata bangsa)</li>
  <li>Dimensi Idealitas (memuat cita-cita masa depan luhur)</li>
  <li>Dimensi Fleksibilitas (mampu merespons dinamika perubahan zaman)</li>
</ul>""",
            "cheatsheet_pts": [
                ("Hakikat Ideologi", "Sistem gagasan terpadu mengenai cita-cita dasar dan pedoman hidup bagi suatu bangsa untuk mencapai tujuan nasional."),
                ("Ideologi Terbuka vs Tertutup", "Ideologi terbuka digali dari budaya rakyat sendiri dan bersifat demokratis; ideologi tertutup dipaksakan sepihak oleh penguasa otoriter."),
                ("Dimensi Realitas", "Nilai-nilai Pancasila secara faktual telah hidup dan diamalkan oleh bangsa Indonesia dalam tradisi keseharian sejak dahulu."),
                ("Dimensi Idealitas", "Nilai Pancasila memuat gambaran masa depan ideal yang membangkitkan optimisme masyarakat menuju keadilan dan kemakmuran."),
                ("Dimensi Fleksibilitas", "Kemampuan ideologi Pancasila untuk menyesuaikan tafsir instrumentalnya dengan perkembangan ilmu pengetahuan dan teknologi digital.")
            ],
            "tip": "Hafalkan tiga dimensi Pancasila: Realitas (masa lalu & nyata), Idealitas (masa depan), Fleksibilitas (adaptasi masa kini)."
        },
        6: {
            "title": "Pancasila sebagai Sistem Etika Nasional & Moralitas Publik",
            "date": "2026-10-24",
            "desc": "Konsep etika dan moralitas publik, urgensi Pancasila sebagai sistem etika penuntun perilaku berbangsa, perbandingan aliran etika, dekadensi moral, dan peran mahasiswa sebagai moral force.",
            "notes": "Materi UTS: Etika Pancasila mendudukkan nilai Ketuhanan, Kemanusiaan, Persatuan, Kerakyatan, dan Keadilan sebagai satu kesatuan hierarkis organis dalam memandu pertimbangan moral bangsa.",
            "materials": [
                {
                    "id": "mat_pancasila_6_1",
                    "type": "pdf",
                    "title": "Modul Dosen P6: Pancasila sebagai Sistem Etika (Pertemuan 6 dan 7.pdf)",
                    "file_url": "/materials/pancasila_p6_etika_pancasila.pdf",
                    "file_size": 997548,
                    "date_added": "2026-10-24"
                }
            ],
            "transcripts": "Transkrip Perkuliahan Tatap Muka: Dosen menerangkan bahwa hukum saja tidak cukup untuk mengatur ketertiban masyarakat tanpa dilandasi oleh sistem etika yang kokoh. Etika Pancasila menempatkan moralitas spiritual Ketuhanan dan Kemanusiaan sebagai kompas utama dalam mencegah korupsi, penyalahgunaan wewenang, dan perpecahan sosial.",
            "sections": [
                {
                    "title": "1. Konsep Etika, Moral, & Urgensi Etika Pancasila",
                    "html": """<p><strong>Etika</strong> adalah cabang filsafat yang membahas tentang nilai (<em>values</em>) dan norma moral yang menjadi penuntun bagi manusia dalam bersikap dan bertindak secara benar dalam kehidupan bermasyarakat.</p>
<ul>
  <li><strong>Perbedaan Etika dan Hukum:</strong> Hukum bersifat mengatur secara formal dari luar dengan sanksi fisik nyata dari aparat; sedangkan etika mengatur batiniah nurani manusia dengan sanksi rasa bersalah, malu, dan pengucilan sosial.</li>
  <li><strong>Urgensi Sistem Etika Pancasila:</strong> Diperlukan untuk mengatasi degradasi moral, praktik korupsi, kolusi, nepotisme (KKN), intoleransi, dekadensi sopan santun di ruang siber, serta ketimpangan penegakan hukum.</li>
</ul>"""
                },
                {
                    "title": "2. Aliran-Aliran Etika Besar Dunia & Posisi Pancasila",
                    "html": """<div class="table-wrap">
  <table>
    <thead><tr><th>Aliran Etika</th><th>Tolok Ukur Kebenaran Tindakan</th><th>Kritik / Pandangan Pancasila</th></tr></thead>
    <tbody>
      <tr><td><strong>Etika Deontologi (Immanuel Kant)</strong></td><td>Kewajiban mutlak (kewajiban moral tanpa memandang hasil akhir).</td><td>Pancasila menghargai kewajiban moral luhur, namun juga menimbang rasa kemanusiaan dan keadilan nyata.</td></tr>
      <tr><td><strong>Etika Teleologi / Utilitarianisme</strong></td><td>Tujuan dan akibat tindakan (manfaat terbanyak bagi jumlah terbesar).</td><td>Jika hanya mengejar manfaat mayoritas, hak asasi kaum minoritas berisiko tertindas. Pancasila menolak penindasan minoritas.</td></tr>
      <tr><td><strong>Etika Keutamaan (Virtue Ethics)</strong></td><td>Karakter dan watak kebajikan moral yang melekat pada diri pribadi seseorang.</td><td>Sangat selaras dengan pembentukan karakter manusia berakhlak mulia dan berintegritas berlandaskan sila Ketuhanan dan Kemanusiaan.</td></tr>
    </tbody>
  </table>
</div>"""
                },
                {
                    "title": "3. Lima Nilai Etika Pancasila dalam Praktik Profesional Mahasiswa IT",
                    "html": """<ol>
  <li><strong>Sila 1 (Etika Spiritual):</strong> Menghadirkan rasa pengawasan Tuhan dalam bekerja; kejujuran akademik, tidak plagiat, tidak membuat software berbahaya (malware/judi online).</li>
  <li><strong>Sila 2 (Etika Humanis):</strong> Menghormati privasi dan martabat pengguna; tidak menyebarkan kebencian (hate speech) atau perundungan siber (cyberbullying).</li>
  <li><strong>Sila 3 (Etika Nasionalis):</strong> Mengutamakan persatuan bangsa di ruang digital; melawan disinformasi dan hoaks yang memecah belah keutuhan NKRI.</li>
  <li><strong>Sila 4 (Etika Demokratis):</strong> Menghargai perbedaan pendapat dalam forum daring dan mengedepankan musyawarah mufakat.</li>
  <li><strong>Sila 5 (Etika Keadilan Sosial):</strong> Memastikan akses teknologi yang inklusif bagi seluruh lapisan masyarakat dan menolak monopoli digital yang merugikan rakyat kecil.</li>
</ol>"""
                }
            ],
            "insights": [
                "<strong>Peran Mahasiswa:</strong> Mahasiswa berperan sebagai <em>Moral Force</em> (kekuatan moral penjaga integritas) dan <em>Social Control</em> (pengawas kebijakan publik yang menyimpang dari moral Pancasila).",
                "<strong>Etika Kecerdasan Buatan:</strong> Prinsip etika Pancasila saat ini dirujuk dalam merumuskan tata kelola regulasi AI di Indonesia agar sistem cerdas tidak mendiskriminasi kelompok rentan.",
                "<strong>Jebakan Ujian:</strong> Jangan mereduksi etika Pancasila sebatas formalitas kesopanan; etika Pancasila adalah kompas aksiologis penyelamat kedaulatan moral bangsa."
            ],
            "doc_ref": "Pancasila_pertemuan_6_dan_7.pdf (22 Halaman)",
            "lecturer": "Tim Dosen Pancasila Unindra",
            "standar_html": """<h4>1. Hakikat Etika Pancasila</h4>
<p>Sistem etika yang mendasarkan penilaian baik-buruk perbuatan pada nilai-nilai Ketuhanan, Kemanusiaan, Persatuan, Kerakyatan, dan Keadilan.</p>
<h4>2. Perbandingan Aliran Etika</h4>
<ul>
  <li>Deontologi: Berbasis kewajiban mutlak.</li>
  <li>Teleologi: Berbasis tujuan dan konsekuensi hasil.</li>
  <li>Keutamaan: Berbasis watak moral kebajikan kepribadian.</li>
</ul>
<h4>3. Aktualisasi Moralitas</h4>
<p>Mencegah korupsi, menjaga integritas akademik, mematuhi etika siber, dan menjadi kekuatan moral perubahan positif.</p>""",
            "cheatsheet_pts": [
                ("Hakikat Etika", "Refleksi kritis filosofis mengenai norma, nilai, dan moral yang memandu perbuatan benar manusia dalam kehidupan bermasyarakat."),
                ("Keunggulan Etika Pancasila", "Memadukan nilai spiritual transendental, hak martabat kemanusiaan, persatuan kebangsaan, demokrasi musyawarah, dan keadilan sosial."),
                ("Etika Deontologi vs Teleologi", "Deontologi menilai tindakan berdasarkan kepatuhan kewajiban mutlak; Teleologi menilai tindakan berdasarkan kemanfaatan hasil akhir."),
                ("Etika Keutamaan (Virtue)", "Aliran etika yang berfokus pada pembentukan karakter kebajikan moral yang terinternalisasi dalam diri individu."),
                ("Fungsi Mahasiswa Moral Force", "Mahasiswa sebagai penegak integritas moral yang menolak budaya korupsi, manipulasi, dan kecurangan akademik.")
            ],
            "tip": "Ingat: Etika mengatur nurani dari dalam; hukum mengatur tindakan dari luar melalui sanksi aparat."
        }
    },

    # =========================================================================
    # 8. PENDIDIKAN AGAMA ISLAM (PAI)
    # =========================================================================
    "subject-pai": {
        5: {
            "title": "Agama Islam dan Hukum Islam: Sumber Hukum, Ijtihad & Maqashid Syari'ah",
            "date": "2026-10-17",
            "desc": "Kedudukan Al-Qur'an dan As-Sunnah sebagai sumber primer hukum Islam, peranan Ijma' dan Qiyas sebagai instrumen ijtihad ulama, dan lima pilar Maqashid Syari'ah.",
            "notes": "Materi UTS: Lima pilar Maqashid Syari'ah (Menjaga Agama, Jiwa, Akal, Keturunan, dan Harta) merupakan tolok ukur kemaslahatan publik dalam setiap perumusan fatwa hukum Islam kontemporer.",
            "materials": [
                {
                    "id": "mat_pai_5_1",
                    "type": "pdf",
                    "title": "Modul Dosen P5: Hukum Islam dan Sumber Ijtihad (Agama_Pertemuan Ke-5.pptx)",
                    "file_url": "/materials/pai_p3_syariah_dan_ibadah.pdf",
                    "file_size": 490900,
                    "date_added": "2026-10-17"
                }
            ],
            "transcripts": "Transkrip Perkuliahan Tatap Muka: Dosen PAI menguraikan hierarki sumber hukum Islam. Dua sumber mutlak yang tidak dapat diganggu gugat adalah Al-Qur'an dan As-Sunnah Shahihah. Untuk masalah-masalah modern kontemporer yang belum ada teks eksplisitnya, para ulama berijtihad menggunakan instrumen Ijma' dan Qiyas dengan berpatokan pada Maqashid Syari'ah.",
            "sections": [
                {
                    "title": "1. Sumber-Sumber Hukum Islam (Primer & Sekunder)",
                    "html": """<p>Hukum Islam (Syariat) bersumber dari wahyu Ilahi dan ijtihad para mujtahid dengan urutan hierarki yang baku:</p>
<div class="table-wrap">
  <table>
    <thead><tr><th>Tingkatan Sumber</th><th>Nama Sumber Hukum</th><th>Karakteristik & Kedudukan</th></tr></thead>
    <tbody>
      <tr><td rowspan="2"><strong>Sumber Primer (Mutlak)</strong></td><td><strong>1. Al-Qur'anul Karim</strong></td><td>Kalamullah yang diwahyukan kepada Nabi Muhammad SAW; sumber primer tertinggi yang memuat prinsip-prinsip aqidah, syariah, dan akhlak abadi.</td></tr>
      <tr><td><strong>2. As-Sunnah An-Nabawiyyah</strong></td><td>Segala sabda, perbuatan, dan ketetapan (taqrir) Rasulullah SAW yang shahih; berfungsi merinci dan menjelaskan ayat-ayat Al-Qur'an yang masih bersifat mujmal (global).</td></tr>
      <tr><td rowspan="2"><strong>Sumber Sekunder (Instrumen Ijtihad)</strong></td><td><strong>3. Ijma' (Konsensus)</strong></td><td>Kesepakatan bulat para mujtahid dari umat Islam pada suatu masa setelah wafatnya Rasulullah SAW mengenai suatu hukum syar'i.</td></tr>
      <tr><td><strong>4. Qiyas (Analogi Hukum)</strong></td><td>Menetapkan hukum suatu perkara baru yang belum ada nashnya dengan menganalogikannya pada perkara asal yang sudah ada nashnya karena adanya kesamaan <em>'illat</em> (sebab hukum).</td></tr>
    </tbody>
  </table>
</div>"""
                },
                {
                    "title": "2. Rukun-Rukun Qiyas dalam Metode Penalaran Fikih",
                    "html": """<p>Analogi hukum (Qiyas) hanya sah jika memenuhi empat rukun mutlak:</p>
<ol>
  <li><strong>Al-Asl (Perkara Asal):</strong> Kasus dasar yang sudah ada ketetapan hukumnya secara eksplisit di dalam nash Al-Qur'an atau Hadits (contoh: khamar / minuman anggur yang memabukkan).</li>
  <li><strong>Al-Far'u (Perkara Cabang):</strong> Kasus baru yang belum ada teks hukum eksplisitnya (contoh: narkotika sabu-sabu atau pil ekstasi).</li>
  <li><strong>Hukm Al-Asl (Hukum Pokok Asal):</strong> Ketetapan hukum syar'i pada kasus asal (contoh: keharaman meminum khamar).</li>
  <li><strong>Al-'Illah (Sebab Hukum yang Sama):</strong> Sifat esensial yang menjadi alasan ditetapkannya hukum tersebut (contoh: sifat merusak kesadaran akal dan memabukkan / <em>iskar</em>). Karena 'illatnya sama-sama merusak akal, maka narkotika dihukumi <strong>HARAM</strong> sebagaimana khamar.</li>
</ol>"""
                },
                {
                    "title": "3. Lima Pilar Pokok Maqashid Syari'ah (Tujuan Hukum Islam)",
                    "html": """<p>Seluruh aturan hukum Islam diturunkan untuk mewujudkan kemaslahatan umat manusia (<em>jalbul mashalih</em>) dan menolak segala bentuk marabahaya (<em>dar'ul mafasid</em>) melalui pemeliharaan lima kebutuhan dasar (<em>Al-Kulliyyat Al-Khams</em>):</p>
<ol>
  <li><strong>Hifzh Ad-Din (Menjaga Agama):</strong> Menjamin kebebasan beribadah dan menjaga kemurnian aqidah dari kemusyrikan.</li>
  <li><strong>Hifzh An-Nafs (Menjaga Jiwa):</strong> Mengharamkan pembunuhan, aborsi tanpa indikasi medis, dan melindungi keselamatan raga.</li>
  <li><strong>Hifzh Al-'Aql (Menjaga Akal):</strong> Mengharamkan segala zat atau konten yang merusak akal budi (narkoba, miras, pornografi) dan mewajibkan menuntut ilmu.</li>
  <li><strong>Hifzh An-Nasl (Menjaga Keturunan / Kehormatan):</strong> Mengatur hukum pernikahan yang sah dan mengharamkan perzinaan demi kejelasan nasab.</li>
  <li><strong>Hifzh Al-Mal (Menjaga Harta):</strong> Mengatur muamalah yang adil, mengharamkan riba, penipuan, judi online, dan pencurian.</li>
</ol>"""
                }
            ],
            "insights": [
                "<strong>Relevansi Fikih Teknologi Informasi:</strong> Kejahatan siber seperti ransomware, pencurian data perbankan (phishing), dan penyebaran konten hoaks bertentangan langsung dengan prinsip <em>Hifzh Al-Mal</em>, <em>Hifzh An-Nafs</em>, dan <em>Hifzh Ad-Din</em>.",
                "<strong>Jebakan Ujian:</strong> Pahami bahwa Ijtihad HANYA berlaku untuk masalah-masalah furu'iyyah (cabang praktis kehidupan) yang tidak memiliki dalil nash sharih yang qath'i (pasti). Masalah aqidah tauhid dan rukun shalat tidak membuka ruang ijtihad baru.",
                "<strong>Tingkatan Kemaslahatan:</strong> Kebutuhan manusia menurut syariat terbagi menjadi tiga: Dhoruriyyat (kebutuhan primer mutlak), Hajiyyat (kebutuhan sekunder pelonggar beban), dan Tahsiniyyat (kebutuhan komplementer penyempurna estetika)."
            ],
            "doc_ref": "Agama_Pertemuan Ke-5.pptx (18 Slide)",
            "lecturer": "Tim Dosen PAI FTIK Unindra",
            "standar_html": """<h4>1. Hierarki Sumber Hukum Islam</h4>
<p>Al-Qur'an (sumber primer pertama), As-Sunnah (penjelas Al-Qur'an), Ijma' (kesepakatan ulama), dan Qiyas (analogi hukum).</p>
<h4>2. Rukun Qiyas</h4>
<p>Al-Asl (kasus asal), Al-Far'u (kasus baru), Hukum Al-Asl (ketetapan asal), dan Al-'Illat (sebab persamaan hukum).</p>
<h4>3. Maqashid Syari'ah (Al-Kulliyyat Al-Khams)</h4>
<p>Menjaga Agama (Din), Jiwa (Nafs), Akal ('Aql), Keturunan (Nasl), dan Harta (Mal).</p>""",
            "cheatsheet_pts": [
                ("Hierarki Sumber Hukum", "1. Al-Qur'anul Karim, 2. As-Sunnah Ash-Shahihah, 3. Ijma' (kesepakatan ulama), 4. Qiyas (analogi penalaran hukum)."),
                ("Fungsi As-Sunnah", "Menegaskan hukum Al-Qur'an, menafsirkan ayat yang global, serta menetapkan hukum perkara baru yang belum termaktub di Al-Qur'an."),
                ("Empat Rukun Qiyas", "Al-Asl (kasus asal), Al-Far'u (kasus cabang baru), Hukm Al-Asl (hukum perkara asal), dan 'Illat (titik kesamaan sebab hukum)."),
                ("Lima Maqashid Syari'ah", "Hifzhud-Din (Agama), Hifzhun-Nafs (Jiwa), Hifzhul-'Aql (Akal), Hifzhun-Nasl (Keturunan), Hifzhul-Mal (Harta)."),
                ("Kaidah Kemaslahatan", "Tujuan syariat Islam adalah mendatangkan kemaslahatan dan menolak segala kerusakan bagi manusia di dunia dan akhirat.")
            ],
            "tip": "Hafalkan 5 pilar Maqashid Syari'ah: Agama, Jiwa, Akal, Keturunan, dan Harta."
        },
        6: {
            "title": "HAM, Kerukunan Antarumat Beragama & Demokrasi dalam Perspektif Islam",
            "date": "2026-10-24",
            "desc": "Prinsip dasar HAM dalam Islam, Piagam Madinah sebagai konstitusi tertulis pertama perlindungan masyarakat majemuk, prinsip musyawarah (Asy-Syura), dan toleransi aktif (Tasamuh).",
            "notes": "Materi UTS: Piagam Madinah meletakkan dasar prinsip kewarganegaraan inklusif (muwathanah), di mana seluruh kabilah dan kelompok agama bersatu dalam satu ikatan komunitas pertahanan bersama.",
            "materials": [
                {
                    "id": "mat_pai_6_1",
                    "type": "pdf",
                    "title": "Modul Dosen P6: HAM, Kerukunan & Demokrasi Islam (Agama_Pertemuan Ke-6.pptx)",
                    "file_url": "/materials/pai_p4_akhlak_dan_etika_it.pdf",
                    "file_size": 407826,
                    "date_added": "2026-10-24"
                }
            ],
            "transcripts": "Transkrip Perkuliahan Tatap Muka: Dosen menerangkan bahwa Islam telah memperkenalkan perlindungan hak asasi manusia jauh sebelum deklarasi universal PBB 1948. Piagam Madinah yang disusun oleh Rasulullah SAW menjadi bukti otentik peradaban Islam yang menjunjung tinggi toleransi, kebebasan beragama, dan kesetaraan hak sosial warga negara di bawah naungan hukum.",
            "sections": [
                {
                    "title": "1. Konsep Hak Asasi Manusia (HAM) dalam Ajaran Islam",
                    "html": """<p>Dalam Islam, <strong>Hak Asasi Manusia</strong> dipandang sebagai anugerah suci dari Allah SWT yang melekat pada fitrah setiap manusia sejak lahir, bukan semata-mata pemberian dari penguasa atau negara:</p>
<ul>
  <li><strong>Hak Hidup:</strong> Islam memandang membunuh satu nyawa tanpa hak sama dosanya dengan membunuh seluruh umat manusia (QS. Al-Ma'idah: 32).</li>
  <li><strong>Hak Kebebasan Beragama:</strong> Tidak ada paksaan untuk memeluk agama Islam (<em>Laa ikraaha fid-diin</em>, QS. Al-Baqarah: 256). Setiap insan bebas menjalankan ibadah sesuai keyakinannya.</li>
  <li><strong>Hak Persamaan Derajat (Al-Musawah):</strong> Seluruh manusia sederajat tanpa diskriminasi ras, warna kulit, atau suku; tolok ukur kemuliaan di sisi Allah hanyalah tingkat ketakwaan (QS. Al-Hujurat: 13).</li>
  <li><strong>Hak Memperoleh Keadilan Hukum:</strong> Penegakan hukum wajib berdiri objektif tanpa pandang bulu, bahkan terhadap kerabat sendiri atau kelompok yang tidak disukai.</li>
</ul>"""
                },
                {
                    "title": "2. Piagam Madinah (Shahifah Al-Madinah) sebagai Tonggak Konstitusi Plural",
                    "html": """<p>Disusun oleh Nabi Muhammad SAW pada tahun 622 Masehi untuk mengatur tata kelola masyarakat kota Madinah yang sangat heterogen (terdiri atas kaum Muhajirin, Anshar, serta berbagai kabilah Yahudi dan pagan):</p>
<div class="table-wrap">
  <table>
    <thead><tr><th>Prinsip Konstitusi Piagam Madinah</th><th>Kandungan Pasal Piagam</th><th>Relevansi dengan Konstitusi Modern</th></tr></thead>
    <tbody>
      <tr><td><strong>Prinsip Kewarganegaraan Tunggal (Ummah Wahidah)</strong></td><td>Seluruh penduduk Madinah dari berbagai latar belakang suku dan agama membentuk satu kesatuan bangsa komunitas bersama.</td><td>Konsep integrasi nasional dalam Negara Kesatuan Republik Indonesia (NKRI).</td></tr>
      <tr><td><strong>Kebebasan Menjalankan Ibadah Agama</strong></td><td>Kaum Yahudi berhak atas agama mereka, dan kaum Muslimin berhak atas agama mereka sendiri tanpa ada intimidasi.</td><td>Jaminan kemerdekaan beragama sesuai Pasal 29 UUD 1945.</td></tr>
      <tr><td><strong>Kewajiban Bela Negara Bersama</strong></td><td>Seluruh kabilah wajib bahu-membahu menanggung biaya dan mempertahankan Madinah dari agresi musuh luar.</td><td>Kewajiban bela negara segenap tumpah darah warga negara.</td></tr>
      <tr><td><strong>Penyelesaian Konflik secara Damai</strong></td><td>Jika timbul perselisihan antarwarga, penyelesaian akhir diserahkan kepada hukum yang dipimpin Nabi Muhammad SAW secara adil.</td><td>Prinsip supremasi hukum (Rule of Law) dalam peradilan yang independen.</td></tr>
    </tbody>
  </table>
</div>"""
                },
                {
                    "title": "3. Musyawarah (Asy-Syura) & Nilai Demokrasi dalam Islam",
                    "html": """<p>Islam menjunjung tinggi mekanisme <strong>Asy-Syura (Musyawarah)</strong> dalam tata kelola pemerintahan dan kepemimpinan publik (QS. Asy-Syura: 38 dan QS. Ali 'Imran: 159):</p>
<ul>
  <li><strong>Tiga Pilar Demokrasi Syura:</strong>
    <ol>
      <li><strong>Al-Amanah (Integritas Kekuasaan):</strong> Jabatan kepemimpinan adalah amanah titipan rakyat dan Allah yang kelak dipertanggungjawabkan, bukan fasilitas privileges pribadi.</li>
      <li><strong>Al-'Adl (Penegakan Keadilan):</strong> Mewajibkan pimpinan menegakkan keadilan distributif bagi segenap rakyat tanpa diskriminasi.</li>
      <li><strong>Al-Hurriyyah (Kebebasan Berpendapat yang Bertanggung Jawab):</strong> Rakyat berhak memberikan nasihat, kritik yang konstruktif (amar ma'ruf nahi munkar), dan menyampaikan aspirasi kebaikan.</li>
    </ol>
  </li>
  <li><strong>Toleransi Aktif (Tasamuh):</strong> Berbuat baik dan berlaku adil kepada orang-orang non-muslim yang tidak memerangi umat Islam (QS. Al-Mumtahanah: 8).</li>
</ul>"""
                }
            ],
            "insights": [
                "<strong>Toleransi Berkehidupan (Bukan Toleransi Akidah):</strong> Dalam Islam, toleransi diwujudkan dalam bidang muamalah sosial, tolong-menolong kemanusiaan, dan perdamaian bernegara. Namun dalam ranah aqidah dan ibadah ritual berlaku prinsip tegas: <em>'Lakum diinukum wa liya diin'</em> (Untukmu agamamu, dan untukku agamaku).",
                "<strong>Piagam Madinah Diakui Sejarawan Dunia:</strong> Prof. Robert N. Bellah dan Bernard Lewis mengakui Piagam Madinah sebagai konstitusi modern pertama yang meletakkan dasar masyarakat sipil (civil society / masyarakat madani).",
                "<strong>Peran di Era Medsos:</strong> Mahasiswa muslim wajib menjaga adab bertutur kata di media sosial, menghindari fitnah dan doxing, serta mengutamakan tabayyun (klarifikasi kebenaran informasi)."
            ],
            "doc_ref": "Agama_Pertemuan Ke-6.pptx (20 Slide)",
            "lecturer": "Tim Dosen PAI FTIK Unindra",
            "standar_html": """<h4>1. Prinsip Hak Asasi Manusia dalam Islam</h4>
<p>HAM bersumber langsung dari anugerah Allah SWT: Hak Hidup, Hak Kebebasan Beragama (tidak ada paksaan), dan Kesetaraan Derajat manusia.</p>
<h4>2. Piagam Madinah (622 M)</h4>
<p>Konstitusi tertulis pertama yang menyatukan masyarakat majemuk Madinah dalam satu komunitas kewarganegaraan dengan jaminan hak beragama dan bela negara bersama.</p>
<h4>3. Demokrasi dan Asy-Syura</h4>
<p>Musyawarah, amanah kepemimpinan, keadilan sosial, dan toleransi aktif (Tasamuh) dalam kehidupan bermasyarakat.</p>""",
            "cheatsheet_pts": [
                ("Hakikat HAM dalam Islam", "HAM adalah hak fundamental anugerah Allah SWT yang melekat pada setiap manusia tanpa memandang ras, suku, atau status sosial."),
                ("Prinsip Kebebasan Beragama", "QS. Al-Baqarah: 256 menegaskan 'Laa ikraaha fid-diin' (tidak ada paksaan dalam memeluk agama Islam)."),
                ("Piagam Madinah (622 M)", "Dokumen konstitusi tertulis pertama dunia yang meletakkan fondasi masyarakat majemuk, kebebasan beragama, dan bela negara bersama."),
                ("Prinsip Asy-Syura (Musyawarah)", "Mekanisme pengambilan keputusan musyawarah mufakat demi mewujudkan kemaslahatan publik secara transparan."),
                ("Prinsip Tasamuh (Toleransi)", "Sikap menghormati dan berbuat baik kepada sesama manusia yang berbeda keyakinan dalam ranah muamalah sosial berbangsa.")
            ],
            "tip": "Ingat: Piagam Madinah adalah rujukan utama sejarah Islam tentang kerukunan dan hak asasi masyarakat majemuk."
        }
    }
}
