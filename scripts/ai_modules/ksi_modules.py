# -*- coding: utf-8 -*-
"""
Modul Pembelajaran Guru AI: Konsep Sistem Informasi (KSI) (Pertemuan 1 - 4)
Bedah komprehensif seluruh materi PPT/Modul resmi Konsep Sistem Informasi FTIK Unindra.
Struktur 3 Bagian:
  1. Penjelasan & Bedah Materi Slide/PPT Dosen (Step-by-Step)
  2. Tambahan Materi, Insight First Principles & Saran Guru AI (Paling Bawah)
  3. Sumber Dokumen Perkuliahan & Rujukan Resmi (Paling Bawah)
"""

KSI_MEETINGS = [
    {
        "meeting_no": 1,
        "filename": "ksi_p1_panduan_guru_ai",
        "title": "Master Guide: Konsep Dasar Data, Gordon B. Davis, 3 Sumbu Klasifikasi & Karakteristik Sistem",
        "subject_name": "Konsep Sistem Informasi",
        "lecturer": "Pak Dheni, M.Kom. / Tim Dosen KSI FTIK",
        "doc_filename": "ksi_p1_sistem_informasi_1.pdf (Sistem Informasi 1 Pertemuan 1.pdf)",
        "slide_count": "26 Slide Modul Resmi Dosen",
        "sections": [
            {
                "title": "Konsep Dasar Data & Definisi Gordon B. Davis (Slide 2 - 5 Modul Dosen)",
                "content_html": """
<p>Slide 3-5 menguraikan perdebatan fundamental antara Data dan Informasi. Slide 5 menyajikan definisi baku data:</p>
<div class=\"card-dark\">
  <blockquote style=\"margin: 0; color: #38bdf8; font-style: italic;\">
    \"Istilah data adalah suatu istilah majemuk yang berarti fakta atau bagian dari fakta yang mengandung arti yang dihubungkan dengan kenyataan, simbol-simbol, gambar-gambar, kata-kata, angka-angka, huruf-huruf, atau simbol yang menunjukkan suatu ide, objek, kondisi, atau situasi.\"<br>
    <strong>&mdash; Gordon B. Davis, Management Information Systems</strong>
  </blockquote>
</div>
<table>
  <thead><tr><th>Entitas</th><th>Definisi Konseptual Dosen</th><th>Karakteristik Komputasi</th><th>Contoh Riil di Kampus / Bisnis</th></tr></thead>
  <tbody>
    <tr><td><strong>Data (Fakta Mentah)</strong></td><td>Kenyataan yang menggambarkan kejadian-kejadian dan kesatuan nyata yang belum diolah.</td><td>Atomik, belum memiliki makna langsung bagi pengambilan keputusan manajemen.</td><td><code>45, \"2026-10-01\", 150000, \"RG\"</code></td></tr>
    <tr><td><strong>Informasi (Terproses)</strong></td><td>Data yang telah diproses ke dalam bentuk yang bermakna dan bernilai nyata bagi si penerima.</td><td>Terstruktur, teragregasi, dan mengurangi ketidakpastian pengambilan keputusan.</td><td>Laporan omset kasir harian cabang Pasar Rebo mencapai Rp 15.500.000 (naik 12%).</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Tiga Sumbu Klasifikasi Data Resmi Dosen (Slide 6 Modul Dosen)",
                "content_html": """
<p>Slide 6 mengklasifikasikan data berdasarkan 3 sumbu utama:</p>
<table>
  <thead><tr><th>Sumbu Klasifikasi</th><th>Kategori Data</th><th>Karakteristik & Mekanisme Perolehan</th><th>Contoh Nyata</th></tr></thead>
  <tbody>
    <tr><td rowspan=\"2\"><strong>1. Cara Perolehan</strong></td><td><strong>Data Hitung (Discrete)</strong></td><td>Diperoleh dari <strong>membilang satu per satu</strong>. Nilainya <strong>SELALU bilangan bulat murni (Integer)</strong>.</td><td>Jumlah mahasiswa kelas RG (43 orang), jumlah server aktif (8 unit).</td></tr>
    <tr><td><strong>Data Ukur (Continuous)</strong></td><td>Diperoleh dari <strong>pengukuran memakai alat ukur</strong>. Bersifat kontinu dan berderajat desimal pecahan.</td><td>Berat paket logistik (3,45 kg), suhu ruang server (21,8 &deg;C).</td></tr>
    <tr><td rowspan=\"2\"><strong>2. Mutu Nilai</strong></td><td><strong>Data Kuantitatif</strong></td><td>Dinyatakan dalam bentuk angka mutlak yang dapat dihitung secara aritmatika.</td><td>Total omset penjualan harian (Rp 8.500.000), kapasitas RAM (32 GB).</td></tr>
    <tr><td><strong>Data Kualitatif</strong></td><td>Menyatakan mutu, sifat, atau persepsi non-numerik.</td><td>Kepuasan pelanggan (\"Sangat Puas\"), status server (\"Normal\").</td></tr>
    <tr><td rowspan=\"2\"><strong>3. Sumber Asal</strong></td><td><strong>Data Internal</strong></td><td>Berasal dan timbul dari dalam batas internal organisasi sendiri.</td><td>Daftar presensi dosen, catatan buku besar keuangan internal.</td></tr>
    <tr><td><strong>Data Eksternal</strong></td><td>Berasal dari lingkungan di luar batas organisasi.</td><td>Data kurs dollar BI, tingkat inflasi BPS, harga kompetitor pasar.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Tiga Pilar Kualitas Nilai Data (Slide 7 - 8 Modul Dosen)",
                "content_html": """
<p>Slide 7-8 merumuskan 3 pilar yang menentukan mutu dan keandalan data:</p>
<table>
  <thead><tr><th>Pilar Mutu Data</th><th>Definisi Konseptual</th><th>Mekanisme Pengujian</th><th>Contoh Pelanggaran Mutu</th></tr></thead>
  <tbody>
    <tr><td><strong>1. Ketelitian (Accuracy)</strong></td><td>Bebas dari kesalahan kalkulasi, bebas bias, dan mencerminkan fakta objektif sesungguhnya.</td><td>Pengecekan digit pembagi, validasi checksum database.</td><td>Pencatatan saldo tabungan nasabah salah ketik bertambah satu nol (10x lipat).</td></tr>
    <tr><td><strong>2. Komparabilitas (Comparability)</strong></td><td>Dapat dibandingkan secara adil (<em>apple-to-apple</em>) dengan standar konversi setara.</td><td>Standardisasi mata uang, penyesuaian satuan metrik.</td><td>Membandingkan laba Rp 50 juta dengan USD 50 ribu tanpa konversi kurs terlebih dahulu.</td></tr>
    <tr><td><strong>3. Validitas (Validity)</strong></td><td>Tingkat kebenaran alat ukur dalam mengukur apa yang sebenarnya seharusnya diukur.</td><td>Kalibrasi rutin instrumen, audit metodologi pengumpulan.</td><td>Mengukur kecerdasan programmer hanya dari kecepatan mengetik keyboard per menit.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Konsep Dasar Sistem, Pendekatan & Karakteristik (Slide 9 - 18 Modul Dosen)",
                "content_html": """
<p>Slide 10-16 mendefinisikan <strong>Sistem</strong> sebagai kumpulan atau himpunan dari unsur, komponen, atau variabel yang terorganisasi, saling berinteraksi, saling bergantung, dan terpadu untuk mencapai <strong>satu tujuan bersama (goal)</strong>.</p>
<p>Slide 17 menyajikan dua pendekatan pendefinisian sistem:</p>
<ul>
  <li><strong>Pendekatan Prosedur:</strong> Sistem adalah jaringan kerja dari prosedur-prosedur yang saling berhubungan untuk menyelesaikan suatu sasaran.</li>
  <li><strong>Pendekatan Komponen:</strong> Sistem adalah kumpulan elemen-elemen fisik/konseptual yang saling berinteraksi mencapai tujuan.</li>
</ul>
<p>Slide 18 merangkum <strong>8 Karakteristik Sistem</strong>: Komponen (Components), Batas Sistem (Boundary), Lingkungan Luar (Environment), Penghubung (Interface), Masukan (Input), Pengolahan (Process), Keluaran (Output), dan Sasaran / Tujuan (Objective/Goal).</p>
"""
            },
            {
                "title": "Klasifikasi Sistem & Daur Hidup Sistem (SLC) (Slide 19 - 25 Modul Dosen)",
                "content_html": """
<p>Slide 19-22 membagi klasifikasi sistem ke dalam beberapa sudut pandang:</p>
<table>
  <thead><tr><th>Klasifikasi Sistem</th><th>Kategori Pembeda</th><th>Ciri Khas & Karakteristik</th><th>Contoh Riil</th></tr></thead>
  <tbody>
    <tr><td rowspan=\"2\"><strong>Wujud Fisik</strong></td><td><strong>Sistem Abstrak</strong></td><td>Tersusun atas gagasan, konsep, atau pemikiran ideologis yang tidak berwujud fisik.</td><td>Sistem teologi ketuhanan, model matematika aljabar.</td></tr>
    <tr><td><strong>Sistem Fisik</strong></td><td>Tersusun atas elemen-elemen materi nyata yang dapat dilihat dan disentuh.</td><td>Sistem komputer, sistem otomotif mobil.</td></tr>
    <tr><td rowspan=\"2\"><strong>Asal Usul</strong></td><td><strong>Sistem Alamiah</strong></td><td>Terbentuk melalui proses alami di alam semesta tanpa campur tangan manusia.</td><td>Sistem peredaran darah manusia, tata surya galaksi.</td></tr>
    <tr><td><strong>Sistem Buatan Manusia</strong></td><td>Dirancang dan dibangun sengaja oleh manusia melibatkan interaksi mesin-manusia.</td><td>Sistem informasi akademik kampus, sistem POS kasir.</td></tr>
    <tr><td rowspan=\"2\"><strong>Hubungan Lingkungan</strong></td><td><strong>Sistem Terbuka</strong></td><td>Berinteraksi dan dipengaruhi secara dinamis oleh lingkungan luarnya.</td><td>Sistem organisasi bisnis perusahaan dagang.</td></tr>
    <tr><td><strong>Sistem Tertutup</strong></td><td>Bekerja secara otomatis mandiri tanpa dipengaruhi lingkungan luarnya secara langsung.</td><td>Reaksi kimia di tabung kedap isolasi laboratorium.</td></tr>
  </tbody>
</table>
<p>Slide 24-25 menguraikan <strong>Daur Hidup Sistem (System Life Cycle / SLC)</strong> yang dimulai dari: 1. Mengenali adanya kebutuhan, 2. Pembangunan sistem, 3. Penerapan, dan 4. Pemeliharaan sistem.</p>
"""
            }
        ],
        "ai_insights": [
            {
                "title": "Intuisi First Principles: Piramida Hierarki DIKW (Data - Info - Knowledge - Wisdom)",
                "content_html": """
<p>Evolusi nilai data dalam rekayasa sistem informasi digambarkan dalam piramida DIKW:</p>
<ol>
  <li><strong>Data (What):</strong> Catatan transaksi atomik mentah (misal: <code>Pelanggan X beli obat flu</code>).</li>
  <li><strong>Information (Who, When, Where):</strong> Data terstruktur bermakna (misal: <code>Penjualan obat flu melonjak 40% di Jakarta Timur pada Oktober</code>).</li>
  <li><strong>Knowledge (How):</strong> Pemahaman pola kausalitas (misal: <code>Setiap awal musim hujan, permintaan obat flu selalu naik 4x lipat</code>).</li>
  <li><strong>Wisdom (Why):</strong> Kebijakan strategis (misal: <code>Menyiapkan stok preventif obat flu 2 minggu sebelum musim hujan dan merilis promo bundle vitamin</code>).</li>
</ol>
"""
            },
            {
                "title": "Tips Menjawab Soal UTS Klasifikasi Data",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>🎯 Bedah Soal Jebakan Ujian Klasifikasi Data:</strong><br>
  <strong>Soal:</strong> Manakah yang termasuk data hitung (diskrit) dan data ukur (kontinu)?<br>
  <strong>1. Jumlah unit printer di lab komputer (5 unit):</strong> DATA HITUNG (karena diperoleh dari membilang dan tidak mungkin desimal).<br>
  <strong>2. Suhu ruangan server (21.5 &deg;C):</strong> DATA UKUR (karena diperoleh dari alat ukur termometer dan bernilai kontinu desimal).
</div>
"""
            }
        ],
        "references": [
            "Berkas Resmi Perkuliahan: ksi_p1_sistem_informasi_1.pdf (Sistem Informasi 1 Pertemuan 1, 26 Slide Modul Resmi Dosen FTIK Unindra).",
            "Davis, Gordon B., & Olson, M. H. (1985). Management Information Systems: Conceptual Foundations, Structure, and Development. McGraw-Hill.",
            "Budi Sutedjo Dharma Oetomo. (2002). Perencanaan & Pembangunan Sistem Informasi. Yogyakarta: Andi Offset."
        ]
    },
    {
        "meeting_no": 2,
        "filename": "ksi_p2_panduan_guru_ai",
        "title": "Master Guide: Nilai & Kualitas Informasi, Siklus Informasi, 6 Blok Pembangun Sistem Informasi",
        "subject_name": "Konsep Sistem Informasi",
        "lecturer": "Pak Dheni, M.Kom. / Tim Dosen KSI FTIK",
        "doc_filename": "ksi_p2_sistem_informasi_2.pdf (Sistem Informasi 2 Pertemuan 2.pdf)",
        "slide_count": "20 Slide Modul Resmi Dosen",
        "sections": [
            {
                "title": "Hakikat & Nilai Informasi dalam Pengambilan Keputusan (Slide 2 - 4 Modul Dosen)",
                "content_html": """
<p>Slide 3 mendefinisikan <strong>Informasi</strong> sebagai data yang telah diklasifikasikan atau diinterpretasikan untuk digunakan dalam proses pengambilan keputusan manajemen.</p>
<div class=\"card card-accent\">
  <strong>Prinsip Nilai Informasi (Slide 4 & 9 Modul Dosen):</strong><br>
  Suatu informasi dikatakan <strong>bernilai nyata (valuable)</strong> apabila <strong>manfaat (benefit) yang dihasilkan lebih besar dibandingkan dengan biaya (cost) untuk memperolehnya</strong>:<br>
  <code>Nilai Informasi = Manfaat Keputusan - Biaya Perolehan Informasi</code><br>
  Jika sebuah laporan riset pasar menghabiskan biaya Rp 50 juta namun hanya menghasilkan penghematan biaya Rp 10 juta, maka informasi tersebut secara ekonomis tidak bernilai.
</div>
"""
            },
            {
                "title": "Siklus Pengolahan Informasi (Information Cycle) (Slide 5 - 7 Modul Dosen)",
                "content_html": """
<p>Slide 7 menguraikan perputaran siklus informasi yang terus berulang tanpa henti dalam kegiatan organisasi:</p>
<ol>
  <li><strong>Data Mentah:</strong> Ditangkap dari aktivitas transaksi operasional nyata (misal: struk belanja kasir).</li>
  <li><strong>Blok Input:</strong> Data dimasukkan ke dalam sistem komputer.</li>
  <li><strong>Blok Model / Proses:</strong> Data diolah, difilter, dikalkulasi, dan dianalisis menggunakan rumus model bisnis tertentu.</li>
  <li><strong>Blok Output:</strong> Menghasilkan produk informasi berupa laporan visual, grafik, atau tabel.</li>
  <li><strong>Penerima (Receiver):</strong> Manajer atau eksekutif membaca informasi tersebut.</li>
  <li><strong>Keputusan & Tindakan:</strong> Penerima mengambil tindakan strategis bisnis.</li>
  <li><strong>Hasil Tindakan Menghasilkan Data Baru:</strong> Tindakan tersebut memicu transaksi baru yang kembali menjadi data mentah siklus berikutnya.</li>
</ol>
"""
            },
            {
                "title": "Tiga Pilar Kualitas Informasi Resmi Dosen (Slide 11 Modul Dosen)",
                "content_html": """
<p>Slide 11 menetapkan 3 pilar yang menentukan kualitas suatu informasi:</p>
<table>
  <thead><tr><th>Pilar Kualitas Informasi</th><th>Definisi Konseptual Modul Dosen</th><th>Alasan Krusial bagi Manajemen</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>1. Akurat (Accurate)</strong></td>
      <td>Informasi harus bebas dari kesalahan, tidak menyesatkan, dan jelas mencerminkan maksud data aslinya.</td>
      <td>Keputusan bisnis yang didasarkan pada data keliru akan memicu kerugian finansial yang fatal.</td>
    </tr>
    <tr>
      <td><strong>2. Tepat Waktu (Timeliness)</strong></td>
      <td>Informasi yang datang pada penerima tidak boleh terlambat (harus tersedia saat keputusan butuh dibuat).</td>
      <td>Informasi yang basi sudah tidak memiliki nilai kompetitif dalam persaingan pasar yang cepat.</td>
    </tr>
    <tr>
      <td><strong>3. Relevan (Relevance)</strong></td>
      <td>Informasi mempunyai manfaat langsung bagi pihak yang menerimanya (sesuai peran jabatannya).</td>
      <td>Laporan detail teknis kabel jaringan tidak relevan bagi Manajer Keuangan yang membutuhkan ringkasan laba rugi.</td>
    </tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Enam Blok Pembangun Sistem Informasi (Building Blocks) (Slide 14 - 15 Modul Dosen)",
                "content_html": """
<p>Slide 14 mendefinisikan <strong>Sistem Informasi</strong> sebagai suatu sistem di dalam suatu organisasi yang mempertemukan kebutuhan pengolahan transaksi harian, mendukung operasi, bersifat manajerial, dan menyediakan pihak luar tertentu dengan laporan yang diperlukan.</p>
<p>Slide 15 merumuskan <strong>6 Blok Komponen Sistem Informasi</strong>:</p>
<table>
  <thead><tr><th>Blok Komponen SI</th><th>Fungsi Konseptual</th><th>Elemen Fisik / Representasi</th></tr></thead>
  <tbody>
    <tr><td><strong>1. Blok Masukan (Input Block)</strong></td><td>Metode dan media untuk menangkap data yang dimasukkan.</td><td>Formulir digital, keyboard, barcode scanner, sensor IoT.</td></tr>
    <tr><td><strong>2. Blok Model (Model Block)</strong></td><td>Kombinasi prosedur, logika, dan model matematika yang memanipulasi data masukan menjadi keluaran.</td><td>Algoritma perhitungan diskon, model forecasting tren omset.</td></tr>
    <tr><td><strong>3. Blok Keluaran (Output Block)</strong></td><td>Produk sistem berupa informasi berkualitas dan dokumentasi kerja.</td><td>Dashboard analitik web, laporan PDF cetak, invoice tagihan.</td></tr>
    <tr><td><strong>4. Blok Teknologi (Technology Block)</strong></td><td>\"Kotak alat\" yang mempercepat penerimaan masukan, pemrosesan model, dan transmisi keluaran.</td><td>Server CPU, jaringan LAN/Internet, sistem operasi, software backend.</td></tr>
    <tr><td><strong>5. Blok Basis Data (Database Block)</strong></td><td>Wadah kumpulan data yang saling terhubung yang tersimpan secara aman di perangkat penyimpanan.</td><td>RDBMS (PostgreSQL, MySQL), tabel relasional, media SSD.</td></tr>
    <tr><td><strong>6. Blok Kendali (Control Block)</strong></td><td>Mekanisme pencegah, pendeteksi, dan pemulih dari ancaman kerusakan, sabotase, dan kegagalan sistem.</td><td>Enkripsi data, sistem login otentikasi 2FA, backup terjadwal, log audit.</td></tr>
  </tbody>
</table>
"""
            }
        ],
        "ai_insights": [
            {
                "title": "Intuisi First Principles: Menghindari Information Overload di Era Digital",
                "content_html": """
<p>Di era modern, tantangan eksekutif bukan lagi mencari data, melainkan <strong>menyaring data berlebih (Information Overload)</strong>. Sistem informasi yang unggul bukan sistem yang memuntahkan ribuan baris data ke layar manajer, melainkan sistem yang menerapkan prinsip <em>Management by Exception</em>: hanya menampilkan penyimpangan penting dan indikator utama (KPI) yang memerlukan tindakan cepat.</p>
"""
            },
            {
                "title": "Tips Menjawab Soal UTS 6 Blok Sistem Informasi",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>🎯 Bedah Soal Pilihan Ganda & Esai UTS:</strong><br>
  <strong>Soal:</strong> Sebutkan dan jelaskan 6 blok pembangun sistem informasi!<br>
  <strong>Trik Menghafal Cepat:</strong> Ingat singkatan <strong>I - M - O - T - D - C</strong> (Input, Model, Output, Technology, Database, Control). Pastikan menjelaskan bahwa keenam blok tersebut saling berhubungan erat dan tidak dapat bekerja mandiri jika salah satu blok ditiadakan.
</div>
"""
            }
        ],
        "references": [
            "Berkas Resmi Perkuliahan: ksi_p2_sistem_informasi_2.pdf (Sistem Informasi 2 Pertemuan 2, 20 Slide Modul Resmi Dosen FTIK Unindra).",
            "Davis, Gordon B. (1985). Management Information Systems. McGraw-Hill.",
            "Budi Sutedjo Dharma Oetomo. (2002). Perencanaan & Pembangunan Sistem Informasi. Yogyakarta: Andi Offset."
        ]
    },
    {
        "meeting_no": 3,
        "filename": "ksi_p3_panduan_guru_ai",
        "title": "Master Guide: Komponen SI, Aktivitas Pokok, dan Hubungan Antara SI & Teknologi Informasi (TI)",
        "subject_name": "Konsep Sistem Informasi",
        "lecturer": "Pak Dheni, M.Kom. / Tim Dosen KSI FTIK",
        "doc_filename": "ksi_p3_sistem_informasi_3.pdf (Sistem Informasi 3 Pertemuan 3.pdf)",
        "slide_count": "18 Slide Modul Resmi Dosen",
        "sections": [
            {
                "title": "Definisi Sistem Informasi menurut Budi Sutedjo (Slide 2 - 5 Modul Dosen)",
                "content_html": """
<p>Slide 3 menyajikan definisi Sistem Informasi menurut pakar Budi Sutedjo (2002):</p>
<div class=\"card-dark\">
  <blockquote style=\"margin: 0; color: #38bdf8; font-style: italic;\">
    \"Sistem informasi dapat didefinisikan sebagai kumpulan elemen yang saling berhubungan satu sama lain yang membentuk satu kesatuan untuk mengintegrasikan data, memproses dan menyimpan serta mendistribusikan informasi.\"<br>
    <strong>&mdash; Budi Sutedjo, 2002</strong>
  </blockquote>
</div>
<p>Slide 6 menegaskan 2 sifat mutlak yang harus dimiliki oleh sistem informasi:</p>
<ol>
  <li><strong>Pemrosesan Informasi yang Efektif:</strong> Mampu mengolah data secara cepat dan tepat sasaran.</li>
  <li><strong>Manajemen Informasi yang Efektif:</strong> Mampu mengorganisasikan dan mengamankan informasi agar mudah diakses pemangku kepentingan yang berhak.</li>
</ol>
"""
            },
            {
                "title": "Lima Aktivitas Pokok Sistem Informasi (Slide 8 - 9 Modul Dosen)",
                "content_html": """
<p>Slide 8-9 merinci 5 aktivitas alur kerja operasional sistem informasi:</p>
<table>
  <thead><tr><th>Aktivitas Pokok SI</th><th>Tindakan Operasional</th><th>Contoh Konkret di Sistem Kampus</th></tr></thead>
  <tbody>
    <tr><td><strong>1. Aktivitas Input</strong></td><td>Merekam dan mengumpulkan sumber daya data mentah dari transaksi.</td><td>Mahasiswa mengisi formulir Kartu Rencana Studi (KRS) online.</td></tr>
    <tr><td><strong>2. Aktivitas Pemrosesan</strong></td><td>Mengubah, mengkalkulasi, menyortir, dan memvalidasi data masukan.</td><td>Server mengecek kuota kelas mata kuliah dan validasi prasyarat SKS.</td></tr>
    <tr><td><strong>3. Aktivitas Output</strong></td><td>Menyajikan dan mendistribusikan produk informasi kepada pemakai.</td><td>Menampilkan jadwal kuliah resmi dan mencetak kartu ujian ber-QR Code.</td></tr>
    <tr><td><strong>4. Aktivitas Penyimpanan (Storage)</strong></td><td>Memelihara data secara terorganisir dalam basis data untuk penggunaan jangka panjang.</td><td>Menyimpan riwayat transkrip nilai mahasiswa di database PostgreSQL kampus.</td></tr>
    <tr><td><strong>5. Aktivitas Pengendalian (Control)</strong></td><td>Memonitor dan mengevaluasi kinerja sistem untuk memastikan tidak terjadi pelanggaran keamanan.</td><td>Audit log aktivitas admin, pembatasan hak akses berbasis token otentikasi.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Klasifikasi Sistem Informasi Berdasarkan Level Organisasi (Slide 10 - 12 Modul Dosen)",
                "content_html": """
<p>Slide 11-12 mengelompokkan sistem informasi berdasarkan cakupan pemakainya:</p>
<table>
  <thead><tr><th>Level Sistem Informasi</th><th>Cakupan Pengguna</th><th>Karakteristik & Infrastruktur</th><th>Contoh Nyata</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>1. SI Pribadi (Personal SI)</strong></td>
      <td>Digunakan oleh <strong>satu orang pengguna individu</strong> untuk meningkatkan produktivitas kerja sendiri.</td>
      <td>Perangkat keras pribadi (laptop/smartphone), aplikasi standalone tanpa dependensi jaringan rumit.</td>
      <td>Aplikasi pengatur jadwal tugas kuliah (Todoist, Notion), spreadsheet anggaran pribadi.</td>
    </tr>
    <tr>
      <td><strong>2. SI Workgroup (Kelompok Kerja)</strong></td>
      <td>Digunakan oleh <strong>sebuah tim kerja atau departemen tertentu</strong> untuk berkolaborasi menyelesaikan proyek bersama.</td>
      <td>Data bersama terhubung jaringan LAN/cloud, kolaborasi dokumen multipemakai.</td>
      <td>Sistem manajemen proyek tim pengembang software (Jira, Trello, Git repository tim).</td>
    </tr>
    <tr>
      <td><strong>3. SI Enterprise (Organisasi Penuh)</strong></td>
      <td>Digunakan oleh <strong>seluruh jajaran organisasi korporasi lintas divisi</strong> secara terintegrasi penuh.</td>
      <td>Basis data terpusat skala besar, arsitektur client-server terpadu, keamanan tingkat tinggi.</td>
      <td>Sistem Enterprise Resource Planning (ERP SAP, SIAKAD Terpadu Unindra).</td>
    </tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Hubungan Sistem Informasi (SI) dan Teknologi Informasi (TI) (Slide 13 - 17 Modul Dosen)",
                "content_html": """
<p>Slide 13-17 membedah hubungan yang seringkali disalahpahami masyarakat awam antara SI dan TI:</p>
<table>
  <thead><tr><th>Parameter Komparasi</th><th>SISTEM INFORMASI (SI)</th><th>TEKNOLOGI INFORMASI (TI)</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>Orientasi Fokus</strong></td>
      <td>Berorientasi pada <strong>proses bisnis, aliran informasi, pemakai manusia, dan efektivitas manajemen keputusan</strong>.</td>
      <td>Berorientasi pada <strong>perangkat teknologi fisik pendukung teknis (hardware, software, networking, database engine)</strong>.</td>
    </tr>
    <tr>
      <td><strong>Pertanyaan Utama</strong></td>
      <td><em>\"Informasi apa yang dibutuhkan manajer agar bisnis berjalan efektif dan bagaimana data harus mengalir?\"</em></td>
      <td><em>\"Teknologi apa yang paling cepat, aman, dan efisien untuk memproses dan mentransmisikan data tersebut?\"</em></td>
    </tr>
    <tr>
      <td><strong>Ruang Lingkup</strong></td>
      <td>Lebih luas: mencakup manusia (people), prosedur operasional, struktur organisasi, dan strategi bisnis.</td>
      <td>Sebagai subsistem / pilar teknologi pendukung (enabler) bagi sistem informasi.</td>
    </tr>
    <tr>
      <td><strong>Hubungan Interaksi (Slide 17)</strong></td>
      <td colspan=\"2\" style=\"text-align: center;\"><strong>Saling Melengkapi & Membutuhkan:</strong> TI menyediakan infrastruktur perangkat keras dan jaringan, sedangkan SI memanfaatkan infrastruktur tersebut untuk menggerakkan operasi bisnis yang bernilai ekonomis.</td>
    </tr>
  </tbody>
</table>
"""
            }
        ],
        "ai_insights": [
            {
                "title": "Intuisi First Principles: Analogi Rumah untuk Memahami SI vs TI",
                "content_html": """
<p>Bayangkan Anda sedang membangun sebuah rumah:</p>
<ul>
  <li><strong>Teknologi Informasi (TI)</strong> adalah bahan material bangunannya: batu bata, semen, paku, pipa air, kabel listrik, dan perkakas tukang.</li>
  <li><strong>Sistem Informasi (SI)</strong> adalah arsitektur tata ruang dan kenyamanan penghuninya: penentuan di mana letak ruang keluarga, bagaimana sirkulasi udara mengalir, dan bagaimana penghuni dapat hidup produktif dan bahagia di dalam rumah tersebut.</li>
</ul>
<p>Material canggih (TI) akan menjadi tumpukan benda mati yang tidak berguna tanpa perancangan tata ruang fungsional yang matang (SI).</p>
"""
            },
            {
                "title": "Tips Menjawab Soal UTS Hubungan SI dan TI",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>🎯 Bedah Soal Esai UTS:</strong><br>
  <strong>Soal:</strong> Jelaskan perbedaan dan keterkaitan antara Sistem Informasi dan Teknologi Informasi!<br>
  <strong>Jawaban Poin Penuh:</strong> Tekankan bahwa TI adalah instrumen teknologinya (komputer, kabel, OS), sedangkan SI adalah sistem pemanfaatannya dalam konteks organisasi yang melibatkan aspek manusia, data, dan prosedur bisnis. TI adalah subsistem pembangun dari Sistem Informasi.
</div>
"""
            }
        ],
        "references": [
            "Berkas Resmi Perkuliahan: ksi_p3_sistem_informasi_3.pdf (Sistem Informasi 3 Pertemuan 3, 18 Slide Modul Resmi Dosen FTIK Unindra).",
            "Budi Sutedjo Dharma Oetomo. (2002). Perencanaan & Pembangunan Sistem Informasi. Yogyakarta: Andi Offset.",
            "O'Brien, J. A., & Marakas, G. M. (2011). Management Information Systems (10th ed.). McGraw-Hill/Irwin."
        ]
    },
    {
        "meeting_no": 4,
        "filename": "ksi_p4_panduan_guru_ai",
        "title": "Master Guide: Computer-Based Information System (CBIS), 5 Sub-Sistem & Evolusi Komputasi Bisnis",
        "subject_name": "Konsep Sistem Informasi",
        "lecturer": "Pak Dheni, M.Kom. / Tim Dosen KSI FTIK",
        "doc_filename": "ksi_p4_sistem_informasi_4.pdf (Computer Based Information System CBIS Pertemuan 4.pdf)",
        "slide_count": "14 Slide Modul Resmi Dosen",
        "sections": [
            {
                "title": "Konsep Dasar Computer-Based Information System (CBIS) (Slide 2 - 4 Modul Dosen)",
                "content_html": """
<p>Slide 2 mendefinisikan <strong>Computer-Based Information System (CBIS)</strong> atau Sistem Informasi Berbasis Komputer:</p>
<div class=\"card card-accent\">
  <strong>Definisi CBIS:</strong><br>
  Sistem informasi yang mengandung arti bahwa <strong>komputer memainkan peranan penting dan sentral</strong> dalam sebuah sistem informasi untuk mengolah data secara cepat, akurat, dan terpadu.
</div>
<p>Slide 4 merangkum manfaat utama CBIS bagi pengendalian manajemen organisasi:</p>
<ol>
  <li><strong>Penghematan Waktu (Time Saving):</strong> Pemrosesan transaksi jutaan baris dalam hitungan detik.</li>
  <li><strong>Tingkat Akurasi Tinggi (High Accuracy):</strong> Mengurangi risiko kesalahan manusiawi (<em>human error</em>) dalam kalkulasi angka.</li>
  <li><strong>Efisiensi Operasional:</strong> Mengurangi kebutuhan kertas fisik (<em>paperless</em>) dan menekan biaya operasional rutin.</li>
  <li><strong>Pengendalian Manajemen yang Lebih Baik:</strong> Pimpinan organisasi dapat memantau status persediaan, keuangan, dan kinerja secara real-time.</li>
</ol>
"""
            },
            {
                "title": "Cara Kerja CBIS & Hubungan Komputer-Informasi (Slide 5 - 7 Modul Dosen)",
                "content_html": """
<p>Slide 5-7 menjelaskan bahwa kunci keberhasilan CBIS terletak pada integrasi dua pilar utama:</p>
<ul>
  <li><strong>Sistem Komputer (Computer System):</strong> Infrastruktur perangkat keras CPU, memori, media penyimpanan, dan perangkat lunak sistem operasi.</li>
  <li><strong>Sistem Informasi (Information System):</strong> Prosedur bisnis dan logika pemrosesan data yang mengarahkan kerja komputer untuk tujuan manajemen.</li>
</ul>
"""
            },
            {
                "title": "Lima Jenis Sub-Sistem CBIS (Slide 8 - 10 Modul Dosen)",
                "content_html": """
<p>Slide 8-10 memetakan 5 subsistem utama yang membentuk arsitektur CBIS dalam organisasi korporasi:</p>
<table>
  <thead><tr><th>Sub-Sistem CBIS</th><th>Fokus Pengolahan Data</th><th>Karakteristik Keputusan</th><th>Contoh Aplikasi di Dunia Industri</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>1. TPS (Transaction Processing System)</strong></td>
      <td>Mencatat dan memproses <strong>data transaksi operasional rutin harian</strong> bisnis secara cepat dan terus-menerus.</td>
      <td>Operasional harian terstruktur tingkat bawah (staf & kasir).</td>
      <td>Sistem kasir Point of Sale (POS) minimarket, mesin ATM perbankan, sistem check-in tiket penerbangan.</td>
    </tr>
    <tr>
      <td><strong>2. SIM / MIS (Management Information System)</strong></td>
      <td>Mengubah data mentah transaksi dari TPS menjadi <strong>laporan manajerial berkala yang terstruktur dan terpadu</strong>.</td>
      <td>Taktis manajerial terstruktur tingkat menengah (manajer divisi).</td>
      <td>Laporan rekap penjualan bulanan, laporan analisis persediaan barang gudang semesteran.</td>
    </tr>
    <tr>
      <td><strong>3. DSS (Decision Support System)</strong></td>
      <td>Menyediakan sarana analitis interaktif untuk membantu manajer dalam <strong>memecahkan masalah semi-terstruktur</strong>.</td>
      <td>Semi-terstruktur analitis (eksekutif madya dan analis bisnis).</td>
      <td>Aplikasi simulasi anggaran promosi, sistem penentuan rute logistik pengiriman barang terhemat.</td>
    </tr>
    <tr>
      <td><strong>4. OA (Office Automation)</strong></td>
      <td>Mempermudah komunikasi dan otomatisasi aliran tugas administrasi perkantoran antarpegawai.</td>
      <td>Komunikasi dan pertukaran informasi lintas divisi.</td>
      <td>Email korporat, sistem persuratan dinas digital, Google Workspace / Microsoft 365 kolaboratif.</td>
    </tr>
    <tr>
      <td><strong>5. ES / AI (Expert System / Sistem Pakar)</strong></td>
      <td>Menirukan pola penalaran dan logika <strong>kepakaran seorang ahli manusia</strong> untuk konsultasi masalah kompleks.</td>
      <td>Konsultasi spesifik tingkat tinggi (eksekutif dan spesialis).</td>
      <td>Sistem diagnosis penyakit medis, sistem rekomendasi kelayakan kredit pinjaman perbankan.</td>
    </tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Evolusi CBIS & Peranan Spesialis Informasi (Slide 11 - 13 Modul Dosen)",
                "content_html": """
<p>Slide 11 mencatat sejarah evolusi gelombang fokus CBIS:</p>
<ol>
  <li><strong>Fokus Awal pada Data (EDP - Electronic Data Processing):</strong> Komputer pertama kali hanya dipakai untuk menghitung pembukuan akuntansi dan penggajian karyawan secara otomatis.</li>
  <li><strong>Fokus pada Informasi (SIM):</strong> Komputer mulai dipakai menyajikan laporan informasi bagi manajer.</li>
  <li><strong>Fokus pada Pendukung Keputusan (DSS):</strong> Komputer menjadi partner simulasi pemecahan masalah keputusan bisnis.</li>
  <li><strong>Fokus pada Komunikasi (OA):</strong> Komputer menghubungkan aliran surat dan komunikasi antarruang kantor.</li>
  <li><strong>Fokus pada Konsultasi Cerdas (AI / Expert System):</strong> Komputer menerapkan logika kepakaran tiruan untuk memberikan rekomendasi solusi mandiri.</li>
</ol>
<p>Slide 12-13 menguraikan kolaborasi antara <strong>Manajer</strong> (pemilik masalah bisnis) dan <strong>Spesialis Informasi</strong> (System Analyst, Programmer, Database Administrator / DBA, dan Network Specialist) dalam setiap siklus System Life Cycle (SLC).</p>
"""
            }
        ],
        "ai_insights": [
            {
                "title": "Intuisi First Principles: Kolaborasi Manajer Bisnis vs System Analyst",
                "content_html": """
<p>Kegagalan implementasi CBIS di industri jarang disebabkan oleh kode program yang lambat, melainkan <strong>kegagalan komunikasi antara Manajer Bisnis dan System Analyst</strong>. Manajer memahami seluk-beluk masalah bisnis namun tidak paham istilah teknis basis data. Sebaliknya, programmer paham arsitektur kode namun buta alur transaksi bisnis. Di sinilah peran krusial System Analyst sebagai penerjemah kebutuhan bisnis menjadi spesifikasi teknis perangkat lunak.</p>
"""
            },
            {
                "title": "Tips Menjawab Soal UTS Matriks Perbandingan Sub-Sistem CBIS",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>🎯 Bedah Soal Klasik UTS:</strong><br>
  <strong>Soal:</strong> Bandingkan antara TPS, SIM, dan DSS dari aspek tipe keputusan dan pemakainya!<br>
  &bull; <strong>TPS:</strong> Keputusan terstruktur, tingkat operasional, pemakai: kasir/staf operasional.<br>
  &bull; <strong>SIM:</strong> Keputusan terstruktur berkala, tingkat manajerial madya, pemakai: manajer divisi.<br>
  &bull; <strong>DSS:</strong> Keputusan semi-terstruktur interaktif, tingkat taktis/strategis, pemakai: analis & manajer senior.
</div>
"""
            }
        ],
        "references": [
            "Berkas Resmi Perkuliahan: ksi_p4_sistem_informasi_4.pdf (Computer Based Information System CBIS Pertemuan 4, 14 Slide Modul Resmi Dosen FTIK Unindra).",
            "McLeod, Raymond, & Schell, George P. (2007). Management Information Systems (10th ed.). Pearson Prentice Hall.",
            "Turban, E., Volonino, L., & Wood, G. R. (2015). Information Technology for Management: Advancing Sustainable, Profitable Business Growth. Wiley."
        ]
    }
]
