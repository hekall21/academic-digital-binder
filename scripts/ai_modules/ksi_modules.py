# -*- coding: utf-8 -*-
"""
Modul Pembelajaran Guru AI: Konsep Sistem Informasi (KSI) (Pertemuan 1 - 4)
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
<div class=\"grid-2\">
  <div class=\"card\">
    <strong>Hakikat Data (Data):</strong><br>
    Fakta mentah (<em>raw facts</em>), catatan transaksi atomik, atau representasi kejadian nyata yang berdiri sendiri tanpa makna relasional. Contoh: <code>45, \"2026-09-30\", 120000</code>.
  </div>
  <div class=\"card\">
    <strong>Hakikat Informasi (Information):</strong><br>
    Data yang telah diproses, diklasifikasikan, dan diberi konteks sehingga memiliki arti (<em>meaningful</em>) dan nilai nyata untuk mengurangi ketidakpastian pengambilan keputusan.
  </div>
</div>

<div class=\"card-dark\">
  <blockquote style=\"margin: 0; color: #38bdf8; font-style: italic;\">
    \"Informasi adalah data yang telah diproses ke dalam suatu bentuk yang mempunyai arti bagi si penerima dan mempunyai nilai nyata serta terasa bagi pengambilan keputusan saat ini maupun keputusan masa mendatang.\"<br>
    <strong>&mdash; Gordon B. Davis, Management Information Systems</strong>
  </blockquote>
</div>
"""
            },
            {
                "title": "Tiga Sumbu Klasifikasi Data Resmi & 3 Pilar Kualitas Data",
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

<div class=\"grid-3\" style=\"margin-top: 6px;\">
  <div class=\"card\">
    <strong>1. Ketelitian (Accuracy)</strong><br>
    Bebas dari kesalahan kalkulasi, bebas bias, dan mencerminkan kebenaran fakta objektif.
  </div>
  <div class=\"card\">
    <strong>2. Komparabilitas (Comparability)</strong><br>
    Dapat dibandingkan secara adil (*apple-to-apple*) dengan standar konversi setara.
  </div>
  <div class=\"card\">
    <strong>3. Validitas (Validity)</strong><br>
    Tingkat kebenaran alat ukur dalam mengukur apa yang sebenarnya harus diukur.
  </div>
</div>
"""
            },
            {
                "title": "Hierarki DIKW (Data - Information - Knowledge - Wisdom)",
                "content_html": """
<div class=\"card\">
  <strong>Piramida DIKW Komputasi:</strong>
  <ul style=\"font-size: 7.7pt;\">
    <li><strong>Data (What?):</strong> Catatan atomik fakta: <code>\"Pasien A, Tensi 170/100, Usia 58\"</code>.</li>
    <li><strong>Information (Who, When, Where?):</strong> Data diberi label medis: <code>\"Pasien A pada tanggal 1 Oktober 2026 mengalami hipertensi stadium 2.\"</code></li>
    <li><strong>Knowledge (How?):</strong> Pemahaman pola hubungan: <code>\"Pasien usia &gt;50 tahun dengan pola makan asin memiliki risiko stroke 4x lebih tinggi jika tensi &gt;160.\"</code></li>
    <li><strong>Wisdom (Why?):</strong> Kebijakan visioner jangka panjang: <code>\"Merancang program preventif diet rendah garam di puskesmas dan sistem peringatan dini digital pada rekam medis.\"</code></li>
  </ul>
</div>
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
<p>Sering terjadi salah kaprah bahwa Sistem Informasi adalah melulu tentang komputer dan perangkat lunak. Pandangan modern menegaskan bahwa Sistem Informasi adalah <strong>Sistem Sosio-Teknis (Socio-Technical System)</strong> yang memadukan komponen teknologis (hardware, software, data, network) dengan komponen sosial manusia (orang, peran, budaya organisasi, dan prosedur kerja bisnis).</p>
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
                "title": "Model Cybernetic Sistem: Input, Proses, Output, Feedback & Control",
                "content_html": """
<p>Sistem Informasi modern bukan sekadar sistem linier searah, melainkan sebuah <strong>Sistem Sibernetik (Cybernetic System)</strong> yang memiliki mekanisme regulasi mandiri (<em>self-regulating system</em>):</p>

<div class=\"card-dark\">
  <strong>Alur Kontrol Sibernetik:</strong>
  <pre><code>[ INPUT: Data Transaksi Mentah ] ──> [ PROSES: Validasi, Agregasi, Kalkulasi ] ──> [ OUTPUT: Informasi / Laporan ]
                                                                                              │
                                                                                              ▼
        [ KONTROL: Penyesuaian Tindakan ] <── [ FEEDBACK: Evaluasi Deviasi Kinerja vs Standar Target ]</code></pre>
</div>

<div class=\"grid-2\">
  <div class=\"card\">
    <strong>Feedback (Umpan Balik):</strong><br>
    Data tentang kinerja operasional sistem yang dikirimkan kembali untuk dievaluasi. Contoh: Laporan IPK semesteran mahasiswa menunjukkan 40% mahasiswa kelas mendapat nilai C di mata kuliah X.
  </div>
  <div class=\"card\">
    <strong>Control (Pengendali):</strong><br>
    Aksi korektif yang diambil pengambil keputusan jika performa menyimpang dari standar target yang ditetapkan. Contoh: Ketua Program Studi mengevaluasi silabus dan menambahkan sesi responsi tutorial tambahan.
  </div>
</div>
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
<div class=\"grid-2\">
  <div class=\"card\">
    <strong>Berdasarkan Keterbukaan terhadap Lingkungan:</strong>
    <ul style=\"font-size: 7.7pt;\">
      <li><strong>Sistem Tertutup (Closed System):</strong> Sistem yang terisolasi secara mutlak dari lingkungan luar dan tidak menerima input eksternal. Secara murni hanya ada di fisika teoritis (reaksi kimia dalam tabung hampa kedap udara).</li>
      <li><strong>Sistem Terbuka (Open System):</strong> Sistem yang berinteraksi bebas dengan lingkungan, menerima input, membuang output, dan beradaptasi terhadap perubahan lingkungan luar. <strong>Seluruh Sistem Informasi Bisnis adalah Sistem Terbuka</strong>.</li>
    </ul>
  </div>

  <div class=\"card\">
    <strong>Berdasarkan Kepastian Hasil Operasi:</strong>
    <ul style=\"font-size: 7.7pt;\">
      <li><strong>Sistem Deterministik:</strong> Sistem yang operasinya dapat diprediksi secara tepat dan pasti 100%. Contoh: Program kalkulator aritmatika, sistem kompilasi kode Pascal.</li>
      <li><strong>Sistem Probabilistik:</strong> Sistem yang perilakunya mengandung ketidakpastian dan perkiraan peluang statistik. Contoh: Sistem ramalan cuaca cuaca harian, sistem analisis pergerakan saham di bursa efek.</li>
    </ul>
  </div>
</div>
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
<div class=\"grid-2\">
  <div class=\"card\">
    <strong>5 Aktivitas Dasar Sistem Informasi:</strong>
    <ol style=\"font-size: 7.7pt;\">
      <li><strong>Input:</strong> Perekaman dan pemasukan data transaksi mentah ke dalam sistem.</li>
      <li><strong>Processing:</strong> Pengolahan data (penghitungan aritmatika, klasifikasi, agregasi, pengurutan).</li>
      <li><strong>Storage:</strong> Penyimpanan data secara teratur dan aman dalam media basis data.</li>
      <li><strong>Output:</strong> Penyajian informasi yang telah jadi dalam bentuk laporan, grafik dashboard, notifikasi.</li>
      <li><strong>Control:</strong> Pemantauan dan pengendalian kinerja sistem agar sesuai target kualitas.</li>
    </ol>
  </div>

  <div class=\"card\">
    <strong>Komparasi Filosofis: SI vs TI</strong>
    <table>
      <thead><tr><th>Parameter</th><th>Teknologi Informasi (TI)</th><th>Sistem Informasi (SI)</th></tr></thead>
      <tbody>
        <tr><td><strong>Hakikat</strong></td><td>Alat / Instrumen teknologi (Hardware & Software).</td><td>Sistem Sosio-Teknis menyeluruh (Orang + Proses + TI).</td></tr>
        <tr><td><strong>Fokus</strong></td><td>Kecepatan pemrosesan, throughput, konektivitas kabel, uptime server.</td><td>Efektivitas pencapaian tujuan bisnis dan kepuasan pengguna.</td></tr>
        <tr><td><strong>Analogi</strong></td><td>Mobil balap berkecepatan tinggi.</td><td>Sistem transportasi kota (mobil, sopir, rambu lalu lintas, penumpang, dan tujuan perjalanan).</td></tr>
      </tbody>
    </table>
  </div>
</div>
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
