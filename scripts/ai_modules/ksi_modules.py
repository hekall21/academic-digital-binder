# -*- coding: utf-8 -*-
"""
Modul Pembelajaran Guru AI: Konsep Sistem Informasi (KSI) (Pertemuan 1 - 4)
Semua klasifikasi, hierarki, dan perbandingan disajikan dalam TABEL terstruktur rapi.
"""

KSI_MEETINGS = [
    {
        "meeting_no": 1,
        "filename": "ksi_p1_panduan_guru_ai",
        "title": "Master Guide: Epistemologi Data, Informasi Gordon B. Davis & Hierarki DIKW",
        "subject_name": "Konsep Sistem Informasi",
        "lecturer": "Pak Dheni, M.Kom.",
        "sections": [
            {
                "title": "The Big Picture: Mengapa Organisasi Bisnis Membutuhkan Sistem Informasi?",
                "content_html": """
<p>Dalam era ekonomi digital berbasis data (<em>data-driven economy</em>), data adalah \"minyak bumi baru\" (<em>the new oil</em>). Namun seperti minyak mentah, data mentah tidak dapat langsung dimasukkan ke dalam mesin pengambilan keputusan. Tanpa proses pengolahan, penyaringan, dan pengorganisasian yang tepat, organisasi akan mengalami <em>Information Overload</em> (kebanjiran data mentah namun kelaparan wawasan bermakna).</p>
"""
            },
            {
                "title": "Hakikat Data & Definisi Legendaris Gordon B. Davis",
                "content_html": """
<table>
  <thead><tr><th>Entitas</th><th>Definisi Konseptual</th><th>Karakteristik Komputasi</th><th>Contoh Konkret di Lapangan</th></tr></thead>
  <tbody>
    <tr><td><strong>Data (Data)</strong></td><td>Kenyataan yang menggambarkan kejadian-kejadian dan kesatuan nyata (<em>raw facts</em>).</td><td>Atomik, belum diproses, berdiri sendiri, belum memiliki nilai langsung bagi manajer.</td><td><code>45, "2026-09-30", 120000, "RG"</code></td></tr>
    <tr><td><strong>Informasi (Information)</strong></td><td>Data yang telah diproses ke dalam bentuk yang bermakna (<em>meaningful</em>) dan bernilai nyata.</td><td>Terstruktur, teragregasi, mengurangi ketidakpastian pengambilan keputusan.</td><td>Laporan omset kasir harian cabang Pasar Rebo mencapai Rp 12.500.000 (naik 15%).</td></tr>
  </tbody>
</table>

<div class=\"card-dark\" style=\"margin-top: 6px;\">
  <blockquote style=\"margin: 0; color: #38bdf8; font-style: italic;\">
    \"Informasi adalah data yang telah diproses ke dalam suatu bentuk yang mempunyai arti bagi si penerima dan mempunyai nilai nyata serta terasa bagi pengambilan keputusan saat ini maupun keputusan masa mendatang.\"<br>
    <strong>&mdash; Gordon B. Davis, Management Information Systems</strong>
  </blockquote>
</div>
"""
            },
            {
                "title": "Tiga Sumbu Klasifikasi Data Resmi & Tiga Pilar Kualitas Data",
                "content_html": """
<p>Berdasarkan modul perkuliahan dan catatan kelas Pak Dheni, klasifikasi data terbagi atas 3 sumbu utama:</p>
<table>
  <thead><tr><th>Sumbu Klasifikasi</th><th>Kategori Data</th><th>Karakteristik & Alat Perolehan</th><th>Contoh Nyata di Kampus / Bisnis</th></tr></thead>
  <tbody>
    <tr><td rowspan=\"2\"><strong>Cara Perolehan</strong></td><td><strong>Data Hitung (Discrete)</strong></td><td>Diperoleh dari <strong>membilang satu per satu</strong>. Nilainya <strong>SELALU bilangan bulat murni (Integer)</strong>.</td><td>Jumlah mahasiswa kelas RG (43 orang), jumlah inventaris server (5 unit).</td></tr>
    <tr><td><strong>Data Ukur (Continuous)</strong></td><td>Diperoleh dari <strong>pengukuran memakai alat ukur</strong>. Bersifat kontinu dan berderajat desimal.</td><td>Berat paket (3,45 kg), suhu ruang server (21,8 &deg;C), waktu ping jaringan (14,2 ms).</td></tr>
    <tr><td rowspan=\"2\"><strong>Mutu Nilai</strong></td><td><strong>Data Kuantitatif</strong></td><td>Dinyatakan dalam angka mutlak yang dapat dihitung aritmatika.</td><td>Total omset harian kasir (Rp 5.200.000), kapasitas penyimpanan disk (1 TB).</td></tr>
    <tr><td><strong>Data Kualitatif</strong></td><td>Menyatakan mutu atau persepsi non-numerik.</td><td>Kepuasan pengguna (\"Sangat Puas\"), warna indikator status server (\"Hijau\").</td></tr>
    <tr><td rowspan=\"2\"><strong>Sumber Asal</strong></td><td><strong>Data Internal</strong></td><td>Timbul dari dalam batas organisasi sendiri.</td><td>Daftar presensi dosen, buku besar akuntansi internal perusahaan.</td></tr>
    <tr><td><strong>Data Eksternal</strong></td><td>Berasal dari lingkungan luar organisasi.</td><td>Tingkat inflasi BPS, regulasi perpajakan pemerintah, harga kompetitor pasar.</td></tr>
  </tbody>
</table>

<p style=\"margin-top: 8px;\"><strong>Tiga Pilar Mutu Data yang Menjamin Integritas Keputusan:</strong></p>
<table>
  <thead><tr><th>Pilar Mutu Data</th><th>Definisi Konseptual</th><th>Mekanisme Verifikasi & Validasi</th><th>Contoh Kasus Riil di Lapangan</th></tr></thead>
  <tbody>
    <tr><td><strong>1. Ketelitian (Accuracy)</strong></td><td>Bebas dari kesalahan kalkulasi, bebas bias, dan mencerminkan fakta objektif sesungguhnya.</td><td>Pengecekan digit pembagi, validasi checksum database.</td><td>Pencatatan saldo bank nasabah harus tepat hingga rupiah terakhir.</td></tr>
    <tr><td><strong>2. Komparabilitas (Comparability)</strong></td><td>Dapat dibandingkan secara adil (<em>apple-to-apple</em>) dengan standar konversi setara.</td><td>Standardisasi mata uang, penyesuaian satuan metrik/imperial.</td><td>Membandingkan laba Rp 10 juta vs RM 10 juta wajib dikonversi ke USD terlebih dahulu.</td></tr>
    <tr><td><strong>3. Validitas (Validity)</strong></td><td>Tingkat kebenaran alat ukur dalam mengukur apa yang sebenarnya seharusnya diukur.</td><td>Kalibrasi rutin instrumen, audit metodologi pengumpulan data.</td><td>Timbangan semangka yang terkalibrasi normal valid menunjukkan bobot 5 kg, bukan 7 kg.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Hierarki DIKW (Data - Information - Knowledge - Wisdom)",
                "content_html": """
<p>Piramida DIKW menggambarkan evolusi nilai data dari fakta mentah hingga kebijaksanaan strategis eksekutif:</p>
<table>
  <thead><tr><th>Tingkatan DIKW</th><th>Pertanyaan Kunci</th><th>Karakteristik Pengolahan Komputasi</th><th>Contoh Konkret Kasus Rekam Medis Pasien</th></tr></thead>
  <tbody>
    <tr><td><strong>1. Data</strong></td><td><em>What? (Fakta Mentah)</em></td><td>Catatan atomik diskrit tanpa konteks relasional pembungkus.</td><td><code>Pasien A, Tensi 170/100, Usia 58</code></td></tr>
    <tr><td><strong>2. Information</strong></td><td><em>Who, When, Where?</em></td><td>Data yang telah diagregasi, distrukturkan, dan diberi label bermakna.</td><td><code>Pasien A pada 1 Oktober 2026 terdiagnosis hipertensi stadium 2.</code></td></tr>
    <tr><td><strong>3. Knowledge</strong></td><td><em>How? (Pola & Kaidah)</em></td><td>Sintesis pemahaman kausalitas dari akumulasi data lintas waktu.</td><td><code>Pasien usia &gt;50 thn berdiet tinggi garam berisiko stroke 4x lebih tinggi jika tensi &gt;160.</code></td></tr>
    <tr><td><strong>4. Wisdom</strong></td><td><em>Why? (Visi & Kebijakan)</em></td><td>Kebijakan preventif jangka panjang untuk memecahkan akar persoalan.</td><td><code>Merancang program preventif diet rendah garam dan integrasi peringatan dini digital pada rekam medis.</code></td></tr>
  </tbody>
</table>
"""
            }
        ],
        "references": [
            "Davis, Gordon B., & Olson, M. H. (1985). Management Information Systems: Conceptual Foundations, Structure, and Development. McGraw-Hill.",
            "O'Brien, J. A., & Marakas, G. M. (2011). Management Information Systems (10th ed.). McGraw-Hill/Irwin.",
            "Modul Resmi Perkuliahan Konsep Sistem Informasi (SISTEM_INFORMASI_1.pdf), FTIK Unindra (2026)."
        ]
    },
    {
        "meeting_no": 2,
        "filename": "ksi_p2_panduan_guru_ai",
        "title": "Master Guide: Komponen Pembentuk Sistem Informasi & Model Cybernetic Sistem",
        "subject_name": "Konsep Sistem Informasi",
        "lecturer": "Pak Dheni, M.Kom.",
        "sections": [
            {
                "title": "The Big Picture: Anatomi Sosio-Teknis Sistem Informasi",
                "content_html": """
<p>Sistem Informasi adalah <strong>Sistem Sosio-Teknis (Socio-Technical System)</strong> yang memadukan komponen teknologis (hardware, software, data, network) dengan komponen sosial manusia (orang, peran, budaya organisasi, dan prosedur kerja bisnis).</p>
"""
            },
            {
                "title": "Enam Komponen Pokok Pembentuk Sistem Informasi Modern",
                "content_html": """
<table>
  <thead><tr><th>Komponen Pembentuk</th><th>Kategori Arsitektur</th><th>Fungsi Spesifik dalam Ekosistem SI</th><th>Contoh Nyata di Kampus Unindra</th></tr></thead>
  <tbody>
    <tr><td><strong>1. Hardware (Perangkat Keras)</strong></td><td>Fisik / Mesin</td><td>Menjalankan pemrosesan instruksi elektronik, media penyimpanan, dan transmisi sinyal data.</td><td>Server rak data center, PC lab komputer, router fiber optik, printer KRS.</td></tr>
    <tr><td><strong>2. Software (Perangkat Lunak)</strong></td><td>Instruksi / Logika</td><td>Kumpulan program dan instruksi yang mengarahkan operasi perangkat keras.</td><td>Sistem Operasi Linux Server, Database MySQL, Web Portal Akademik Kampus.</td></tr>
    <tr><td><strong>3. Data (Basis Data)</strong></td><td>Bahan Baku Informasi</td><td>Fakta mentah terstruktur yang tersimpan rapi dalam tabel relasional.</td><td>Tabel data mahasiswa (NPM, Nama, SKS), tabel presensi, katalog mata kuliah.</td></tr>
    <tr><td><strong>4. People (Brainware)</strong></td><td>Pengguna & Pengelola</td><td>Pihak yang mengoperasikan, mengembangkan, dan memanfaatkan keluaran sistem.</td><td>Mahasiswa (end-user), Dosen (input nilai), Admin Akademik, Database Administrator.</td></tr>
    <tr><td><strong>5. Process / Prosedur</strong></td><td>Tata Kelola Bisnis</td><td>SOP, aturan bisnis, dan tata cara tertulis yang mengatur aliran operasional.</td><td>SOP Pengisian KRS online, alur persetujuan skripsi, regulasi pembayaran SPP.</td></tr>
    <tr><td><strong>6. Network / Komunikasi</strong></td><td>Konektivitas</td><td>Media penghubung antar komputer dan transfer paket data tanpa kabel/kabel.</td><td>Jaringan Wi-Fi kampus, kabel serat optik (fiber optic), internet cloud hosting.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Model Cybernetic Sistem: Regulasi Umpan Balik & Pengendalian",
                "content_html": """
<p>Sistem Informasi modern bekerja sebagai <strong>Sistem Sibernetik (Cybernetic System)</strong> yang memiliki mekanisme regulasi mandiri (<em>self-regulating system</em>):</p>

<table>
  <thead><tr><th>Komponen Sibernetik</th><th>Fungsi Regulasi Sistem</th><th>Alur Informasi / Sinyal</th><th>Contoh Kasus Sistem Akademik Unindra</th></tr></thead>
  <tbody>
    <tr><td><strong>Feedback (Umpan Balik)</strong></td><td>Pengukuran dan pelaporan data deviasi kinerja aktual terhadap standar target.</td><td>Mengalir dari Output kembali ke Pengambil Keputusan.</td><td>Laporan rekap evaluasi: 35% mahasiswa kelas RG nilainya di bawah ambang batas kelulusan.</td></tr>
    <tr><td><strong>Control (Pengendali)</strong></td><td>Tindakan intervensi manajerial untuk menyesuaikan input/proses agar kembali ke jalur optimal.</td><td>Mengalir dari Pimpinan ke subsistem Input/Proses.</td><td>Ketua Program Studi menginstruksikan kelas tutorial responsi tambahan dan review kisi-kisi.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Jebakan Soal UTS Pertemuan 2",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>⚠️ Manakah Komponen Paling Kritis dalam Sistem Informasi?</strong><br>
  Banyak mahasiswa menjawab: <em>Hardware atau Software canggih</em>.<br>
  <strong>Jawaban Benar Dosen & Guru AI:</strong> <strong>PEOPLE (Brainware) dan PROSEDUR (Business Process)</strong>. Perangkat keras paling mahal dan perangkat lunak termahal di dunia akan menjadi sampah investasi (<em>failed investment</em>) jika orang yang mengoperasikannya tidak kompeten atau jika prosedur bisnisnya korup dan kacau. Lebih dari 70% kegagalan implementasi ERP disebabkan oleh faktor penolakan manusia (<em>change management</em>), bukan karena kerusakan server!
</div>
"""
            }
        ],
        "references": [
            "Laudon, K. C., & Laudon, J. P. (2020). Management Information Systems: Managing the Digital Firm (16th ed.). Pearson.",
            "Wiener, Norbert. (1948). Cybernetics: Or Control and Communication in the Animal and the Machine. MIT Press.",
            "Buku Materi Pokok Konsep Sistem Informasi (SISTEM_INFORMASI_2.pdf), Unindra (2026)."
        ]
    },
    {
        "meeting_no": 3,
        "filename": "ksi_p3_panduan_guru_ai",
        "title": "Master Guide: Delapan Karakteristik Sistem & Taksonomi Klasifikasi",
        "subject_name": "Konsep Sistem Informasi",
        "lecturer": "Pak Dheni, M.Kom.",
        "sections": [
            {
                "title": "The Big Picture: Teori Sistem Umum (General System Theory)",
                "content_html": """
<p>Konsep sistem modern berakar dari <em>General System Theory</em> yang dikembangkan oleh biolog Austria, <strong>Ludwig von Bertalanffy</strong> (1968). Pendekatan kesisteman (<em>systems approach</em>) menolak cara pandang reduksionisme sempit: kita tidak bisa memahami keseluruhan hanya dengan memecah-mecah bagian secara terpisah, karena <em>\"the whole is greater than the sum of its parts\"</em> (keseluruhan memiliki sifat sinergis yang melebihi jumlah bagian-bagiannya).</p>
"""
            },
            {
                "title": "Delapan Karakteristik Baku Sebuah Sistem",
                "content_html": """
<table>
  <thead><tr><th>Karakteristik Sistem</th><th>Definisi Konseptual</th><th>Contoh Nyata pada Sistem Akademik Kampus</th></tr></thead>
  <tbody>
    <tr><td><strong>1. Komponen (Components)</strong></td><td>Elemen-elemen pembentuk sistem yang saling berinteraksi (subsistem).</td><td>Subsistem KRS, subsistem presensi, subsistem pembayaran, subsistem nilai.</td></tr>
    <tr><td><strong>2. Batas Sistem (Boundary)</strong></td><td>Daerah pemisah antara sistem dengan lingkungan luarnya.</td><td>Aplikasi portal akademik yang hanya bisa diakses mahasiswa/dosen bertiket login resmi.</td></tr>
    <tr><td><strong>3. Lingkungan Luar (Environment)</strong></td><td>Segala hal di luar batas sistem yang memengaruhi operasi sistem.</td><td>Kementerian Pendidikan (PDDikti), bank mitra pembayaran, provider internet ISP.</td></tr>
    <tr><td><strong>4. Penghubung (Interface)</strong></td><td>Media yang menghubungkan satu subsistem dengan subsistem lain.</td><td>API payment gateway yang menghubungkan database kampus dengan server Bank Mandiri/BCA.</td></tr>
    <tr><td><strong>5. Masukan (Input)</strong></td><td>Energi atau bahan yang dimasukkan ke dalam sistem.</td><td>Input data mata kuliah pilihan mahasiswa saat periode pengisian KRS online.</td></tr>
    <tr><td><strong>6. Pengolahan (Process)</strong></td><td>Bagian yang mengubah masukan menjadi keluaran.</td><td>Kalkulasi validasi prasyarat SKS, verifikasi kuota kelas dosen.</td></tr>
    <tr><td><strong>7. Keluaran (Output)</strong></td><td>Hasil energi atau informasi yang dikeluarkan sistem.</td><td>Cetak Kartu Rencana Studi (KRS) sah ber-barcode, jadwal kuliah mingguan.</td></tr>
    <tr><td><strong>8. Sasaran / Tujuan (Goal)</strong></td><td>Target capaian akhir yang ingin diraih bersama oleh sistem.</td><td>Melayani administrasi akademik 30.000 mahasiswa secara cepat, tepat, dan transparan.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Taksonomi Klasifikasi Sistem di Industri",
                "content_html": """
<table>
  <thead><tr><th>Dasar Klasifikasi</th><th>Kategori Sistem</th><th>Karakteristik & Mekanisme Kerja</th><th>Contoh Sistem Nyata</th></tr></thead>
  <tbody>
    <tr><td rowspan=\"2\"><strong>Keterbukaan Lingkungan</strong></td><td><strong>Sistem Terbuka (Open System)</strong></td><td>Berinteraksi dinamis dengan lingkungan luar, menerima input, membuang output, dan beradaptasi.</td><td>Seluruh Sistem Informasi Bisnis (SIAKAD, E-Commerce Tokopedia, ERP SAP).</td></tr>
    <tr><td><strong>Sistem Tertutup (Closed System)</strong></td><td>Terisolasi total secara mandiri tanpa pertukaran energi atau informasi dengan luar.</td><td>Reaksi kimia laboratorium dalam tabung hampa tertutup rapat.</td></tr>
    <tr><td rowspan=\"2\"><strong>Kepastian Operasi</strong></td><td><strong>Sistem Deterministik</strong></td><td>Beroperasi menurut pola terdefinisi pasti; input sama selalu menghasilkan output sama 100%.</td><td>Program kompilasi Pascal, mesin kalkulator aritmatika kasir.</td></tr>
    <tr><td><strong>Sistem Probabilistik</strong></td><td>Mengandung faktor acak dan ketidakpastian; output dinyatakan dalam probabilitas statistik.</td><td>Sistem peramalan cuaca radar BMKG, sistem analisis pergerakan saham bursa efek.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Pertanyaan Wajib UTS: Mengapa Boundary (Batas) Sangat Penting?",
                "content_html": """
<div class=\"alert alert-info\">
  <strong>💡 Jawaban Master Guru AI:</strong><br>
  Batas sistem (<em>boundary</em>) sangat krusial karena: (1) Menentukan ruang lingkup (<em>scope</em>) tanggung jawab pengembang perangkat lunak, (2) Melindungi integritas data internal dari gangguan luar (keamanan siber), dan (3) Menjadi tempat penempatan <strong>Interface (Penghubung)</strong> yang terstandarisasi untuk bertukar data dengan pihak eksternal.
</div>
"""
            }
        ],
        "references": [
            "von Bertalanffy, L. (1968). General System Theory: Foundations, Development, Applications. George Braziller.",
            "Hall, J. A. (2018). Accounting Information Systems (10th ed.). Cengage Learning.",
            "Modul Kuliah Konsep Sistem Informasi Pertemuan 3 (SISTEM_INFORMASI_3.pdf), FTIK Unindra (2026)."
        ]
    },
    {
        "meeting_no": 4,
        "filename": "ksi_p4_panduan_guru_ai",
        "title": "Master Guide: Kualitas Informasi, 5 Aktivitas Pokok SI & Simbiosis SI-TI",
        "subject_name": "Konsep Sistem Informasi",
        "lecturer": "Pak Dheni, M.Kom.",
        "sections": [
            {
                "title": "The Big Picture: Informasi Berkualitas Sebagai Aset Strategis",
                "content_html": """
<p>Tidak semua informasi membawa manfaat. Informasi yang salah, usang, atau bertele-tele justru menimbulkan kerugian finansial yang fatal (<em>Garbage In, Garbage Out &mdash; GIGO</em>). Kualitas informasi menentukan apakah sebuah keputusan bisnis menghasilkan lompatan laba atau justru menyeret perusahaan ke jurang kebangkrutan.</p>
"""
            },
            {
                "title": "Empat Dimensi Utama Kualitas Informasi",
                "content_html": """
<table>
  <thead><tr><th>Dimensi Kualitas</th><th>Kriteria Baku</th><th>Dampak Negatif Jika Tidak Terpenuhi</th><th>Contoh Kasus Nyata di Lapangan</th></tr></thead>
  <tbody>
    <tr><td><strong>1. Akurat (Accurate)</strong></td><td>Bebas dari kesalahan kalkulasi, bebas bias, dan secara jujur mencerminkan keadaan fakta sesungguhnya.</td><td>Keputusan keliru karena data palsu / keliru hitung.</td><td>Saldo tabungan nasabah bank harus tepat hingga rupiah terakhir tanpa selisih 1 sen pun.</td></tr>
    <tr><td><strong>2. Tepat Waktu (Timeliness)</strong></td><td>Informasi harus tersedia di meja pengambil keputusan <strong>sebelum keputusan diambil</strong>, bukan setelahnya.</td><td>Informasi kadaluarsa menjadi tidak berguna (*obsolete*).</td><td>Laporan peringatan tsunami dari BMKG harus sampai dalam hitungan detik, bukan 2 jam setelah gempa.</td></tr>
    <tr><td><strong>3. Relevan (Relevance)</strong></td><td>Informasi harus sesuai secara langsung dengan kebutuhan spesifik dan ranah tanggung jawab pengguna.</td><td>Pemborosan waktu membaca hal-hal yang tidak berkaitan (*noise*).</td><td>Direktur Keuangan membutuhkan rekap ringkas arus kas bulanan, bukan daftar rincian 50.000 struk kasir toko.</td></tr>
    <tr><td><strong>4. Lengkap (Completeness)</strong></td><td>Menyajikan seluruh parameter fakta esensial tanpa menyembunyikan detail penentu kritis.</td><td>Keputusan pincang karena ada variabel penting yang hilang.</td><td>Laporan laba kotor tanpa menyertakan beban hutang pajak dapat menyesatkan investor.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Lima Aktivitas Pokok Sistem Informasi & Perbedaan Hakiki SI vs TI",
                "content_html": """
<p><strong>Lima Aktivitas Pokok Siklus Pengolahan Sistem Informasi:</strong></p>
<table>
  <thead><tr><th>No</th><th>Aktivitas Pokok</th><th>Tindakan Pemrosesan Komputasi</th><th>Komponen / Aset yang Terlibat</th><th>Contoh Nyata di Perusahaan</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><strong>Input (Masukan)</strong></td><td>Perekaman, pengumpulan, dan pemindaian data transaksi mentah ke format digital.</td><td>Barcode scanner, keyboard, form web, sensor IoT.</td><td>Kasir memindai barcode produk dan menginput jumlah item belanja.</td></tr>
    <tr><td>2</td><td><strong>Processing (Pemrosesan)</strong></td><td>Transformasi data melalui kalkulasi aritmatika, perbandingan logika, agregasi, dan pengurutan.</td><td>CPU, RAM, algoritma pemrogram, query database.</td><td>Sistem mengalikan harga satuan &times; kuantiti, memotong diskon, dan menghitung PPN 11%.</td></tr>
    <tr><td>3</td><td><strong>Storage (Penyimpanan)</strong></td><td>Pencatatan data secara terorganisir ke dalam media penyimpanan jangka panjang yang aman.</td><td>Basis data relasional (RDBMS), SSD server, cloud storage.</td><td>Menyimpan record transaksi ke tabel <code>penjualan_header</code> dan <code>penjualan_detail</code>.</td></tr>
    <tr><td>4</td><td><strong>Output (Keluaran)</strong></td><td>Penyajian dan pendistribusian informasi yang telah jadi kepada pengguna dalam bentuk bernilai.</td><td>Layar monitor, printer struk kasir, PDF laporan, dashboard API.</td><td>Mencetak struk belanja fisik untuk pembeli dan mengirim email invoice otomatis.</td></tr>
    <tr><td>5</td><td><strong>Control (Pengendalian)</strong></td><td>Pemantauan kinerja sistem, verifikasi integritas data, dan deteksi deviasi kesalahan.</td><td>Log audit trail, modul rekonsiliasi kas, hak akses user role.</td><td>Membandingkan total uang fisik di laci kasir dengan angka rekapitulasi sistem saat tutup toko.</td></tr>
  </tbody>
</table>

<p style=\"margin-top: 8px;\"><strong>Komparasi Filosofis Mendalam: Sistem Informasi (SI) vs Teknologi Informasi (TI):</strong></p>
<table>
  <thead><tr><th>Parameter Pembeda</th><th>Teknologi Informasi (TI)</th><th>Sistem Informasi (SI)</th></tr></thead>
  <tbody>
    <tr><td><strong>Hakikat</strong></td><td>Alat / Instrumen teknologi fisik dan logis (Hardware & Software).</td><td>Sistem Sosio-Teknis menyeluruh yang memadukan Orang, Proses Bisnis, dan TI.</td></tr>
    <tr><td><strong>Fokus Perhatian</strong></td><td>Kecepatan clock CPU, throughput jaringan, kapasitas disk, uptime server.</td><td>Efektivitas pencapaian tujuan organisasi bisnis dan kepuasan pengguna.</td></tr>
    <tr><td><strong>Analogi Riil</strong></td><td>Mesin mobil balap berkekuatan 500 tenaga kuda.</td><td>Sistem transportasi kota (mobil, pengemudi, aturan lalu lintas, penumpang, dan tujuan perjalanan).</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Notulen Eksklusif Kelas Dosen: Aturan UTS Open Book Unindra",
                "content_html": """
<div class=\"alert alert-success\">
  <strong>🎓 Catatan Khusus Live GMeet Pak Dheni (Kelas Reguler RG):</strong><br>
  1. <strong>Sifat Ujian UTS:</strong> Terkonfirmasi <strong>OPEN BOOK (Buka Buku / Catatan Fisik / Web Catatan Digital)</strong>.<br>
  2. <strong>Karakteristik Soal:</strong> Dosen menegaskan bahwa soal UTS <strong>BUKAN sekadar hafalan definisi kamus</strong>, melainkan <strong>penalaran analisis studi kasus nyata</strong>.<br>
  3. <strong>Kunci Jawaban Nilai 100:</strong> Saat menjawab soal, mahasiswa <strong>WAJIB menyertakan contoh konkret dunia industri atau kehidupan nyata</strong> (seperti sistem kasir Indomaret, sistem SIAKAD kampus Unindra, atau sistem Gojek) untuk menunjukkan pemahaman holistik, bukan sekadar menyalin teks slide.
</div>
"""
            }
        ],
        "references": [
            "O'Brien, J. A., & Marakas, G. M. (2011). Introduction to Information Systems (16th ed.). McGraw-Hill/Irwin.",
            "Notulen Kuliah Konsep Sistem Informasi Pertemuan 4 Live Google Meet, Dosen Pak Dheni, M.Kom. (2026).",
            "Modul Resmi Perkuliahan Konsep Sistem Informasi (SISTEM_INFORMASI_4.pdf), FTIK Unindra."
        ]
    }
]
