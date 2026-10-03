# -*- coding: utf-8 -*-
"""
Modul Pembelajaran Guru AI: Matematika Dasar (Kalkulus Sistem Informasi) (Pertemuan 1 - 4)
Bedah komprehensif seluruh materi PPT resmi Matematika Dasar FTIK Unindra.
Tipografi matematika 100% bersih (zero raw LaTeX symbols), berbasis HTML & simbol Unicode standar.
Struktur 3 Bagian:
  1. Penjelasan & Bedah Materi Slide/PPT Dosen (Step-by-Step)
  2. Tambahan Materi, Insight First Principles & Saran Guru AI (Paling Bawah)
  3. Sumber Dokumen Perkuliahan & Rujukan Resmi (Paling Bawah)
"""

MATDAS_MEETINGS = [
    {
        "meeting_no": 1,
        "filename": "matdas_p1_panduan_guru_ai",
        "title": "Master Guide: Sistem Bilangan Real, Aksioma Medan Aljabar & Notasi Selang Interval",
        "subject_name": "Matematika Dasar",
        "lecturer": "Tim Dosen Matematika FTIK Unindra",
        "doc_filename": "matdas_p1_sistem_bilangan_real.pdf (Sistem Bilangan Real Pertemuan Ke-1.pdf)",
        "slide_count": "17 Slide PPT Resmi Dosen",
        "sections": [
            {
                "title": "Urgensi Matematika bagi Mahasiswa Sistem Informasi (Slide 2 - 9 PPT Dosen)",
                "content_html": """
<p>Slide 9 menegaskan bahwa <strong>mahasiswa Sistem Informasi perlu mempelajari matematika sebagai fondasi bernalar logis, analitis, dan sistematis</strong>. Seluruh arsitektur basis data relasional, algoritma pencarian, kompresi data, enkripsi kriptografi, dan machine learning berakar langsung pada kalkulus dan aljabar sistem bilangan real.</p>
"""
            },
            {
                "title": "Hierarki Sistem Bilangan Real (Slide 10 - 11 PPT Dosen)",
                "content_html": """
<p>Slide 10-11 menyajikan struktur pohon himpunan bilangan dalam matematika:</p>
<table>
  <thead><tr><th>Simbol Himpunan</th><th>Nama Himpunan Bilangan</th><th>Definisi Konseptual Dosen</th><th>Contoh Anggota Himpunan</th></tr></thead>
  <tbody>
    <tr><td><strong>&Nopf; (Natural)</strong></td><td>Bilangan Asli</td><td>Bilangan bulat positif yang digunakan untuk mencacah objek nyata mulai dari satu.</td><td><code>{1, 2, 3, 4, ...}</code></td></tr>
    <tr><td><strong>&Wopf; (Whole)</strong></td><td>Bilangan Cacah</td><td>Gabungan antara angka nol dan seluruh bilangan asli.</td><td><code>{0, 1, 2, 3, ...}</code></td></tr>
    <tr><td><strong>&Zopf; (Zahlen)</strong></td><td>Bilangan Bulat</td><td>Himpunan yang terdiri dari bilangan bulat negatif, nol, dan bilangan bulat positif.</td><td><code>{..., -2, -1, 0, 1, 2, ...}</code></td></tr>
    <tr><td><strong>&Qopf; (Quotient)</strong></td><td>Bilangan Rasional</td><td>Bilangan yang dapat dinyatakan dalam bentuk pecahan <code>a / b</code>, di mana <code>a, b &isin; &Zopf;</code> dan <code>b &ne; 0</code>.</td><td><code>1/2, -3/4, 5 (karena 5/1), 0.25</code></td></tr>
    <tr><td><strong>&Iopf; (Irrational)</strong></td><td>Bilangan Irasional</td><td>Bilangan riil yang <strong>TIDAK DAPAT</strong> dinyatakan dalam bentuk pecahan <code>a / b</code>.</td><td><code>&radic;2, &radic;3, &pi; (3.14159...), e (2.71828...)</code></td></tr>
    <tr><td><strong>&Ropf; (Real)</strong></td><td>Bilangan Real</td><td>Gabungan menyeluruh antara himpunan bilangan rasional dan irasional: <code>&Ropf; = &Qopf; &cup; &Iopf;</code>.</td><td>Semua titik koordinat pada garis bilangan kontinu.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Bentuk Desimal Bilangan Real (Slide 12 PPT Dosen)",
                "content_html": """
<p>Slide 12 menerangkan cara membedakan bilangan rasional dan irasional melalui representasi desimalnya:</p>
<table>
  <thead><tr><th>Kategori Desimal</th><th>Karakteristik Pola Angka Desimal</th><th>Klasifikasi Himpunan</th><th>Contoh</th></tr></thead>
  <tbody>
    <tr><td><strong>Desimal Berhenti (Terminating)</strong></td><td>Angka di belakang koma terhenti pada digit tertentu.</td><td><strong>Bilangan Rasional (&Qopf;)</strong></td><td><code>3/4 = 0.75</code>; <code>1/8 = 0.125</code></td></tr>
    <tr><td><strong>Desimal Berulang (Repeating)</strong></td><td>Angka di belakang koma berulang tanpa henti dengan pola siklus teratur.</td><td><strong>Bilangan Rasional (&Qopf;)</strong></td><td><code>1/3 = 0.3333...</code>; <code>2/7 = 0.285714285714...</code></td></tr>
    <tr><td><strong>Desimal Tak Berhenti & Tak Berulang</strong></td><td>Angka di belakang koma tak terhingga dan tidak pernah membentuk pola perulangan.</td><td><strong>Bilangan Irasional (&Iopf;)</strong></td><td><code>&radic;2 = 1.41421356...</code>; <code>&pi; = 3.14159265...</code></td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Aksioma Medan Aljabar & Operasi Hitung Real (Slide 13 PPT Dosen)",
                "content_html": """
<p>Slide 13 menyajikan aksioma medan yang berlaku mutlak untuk setiap bilangan real <code>x, y, z &isin; &Ropf;</code>:</p>
<table>
  <thead><tr><th>Hukum / Sifat Aljabar</th><th>Operasi Penjumlahan (Addition)</th><th>Operasi Perkalian (Multiplication)</th></tr></thead>
  <tbody>
    <tr><td><strong>1. Sifat Komutatif</strong></td><td><code>x + y = y + x</code></td><td><code>x &times; y = y &times; x</code></td></tr>
    <tr><td><strong>2. Sifat Asosiatif</strong></td><td><code>(x + y) + z = x + (y + z)</code></td><td><code>(x &times; y) &times; z = x &times; (y &times; z)</code></td></tr>
    <tr><td><strong>3. Sifat Distributif</strong></td><td colspan=\"2\" style=\"text-align: center;\"><code>x &times; (y + z) = (x &times; y) + (x &times; z)</code></td></tr>
    <tr><td><strong>4. Elemen Identitas</strong></td><td>Ada bilangan <code>0</code> sehingga: <code>x + 0 = x</code></td><td>Ada bilangan <code>1</code> sehingga: <code>x &times; 1 = x</code></td></tr>
    <tr><td><strong>5. Elemen Invers</strong></td><td>Setiap <code>x</code> memiliki invers aditif <code>(-x)</code>: <code>x + (-x) = 0</code></td><td>Setiap <code>x &ne; 0</code> memiliki invers perkalian <code>(1/x)</code>: <code>x &times; (1/x) = 1</code></td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Garis Bilangan Real & Notasi Selang Interval (Slide 14 - 16 PPT Dosen)",
                "content_html": """
<p>Slide 14-15 menjelaskan bahwa setiap bilangan real berkorespondensi satu-satu dengan suatu titik pada garis bilangan. Notasi <code>x &lt; y</code> berarti titik <code>x</code> berada di sebelah kiri titik <code>y</code>.</p>
<p>Slide 16 merangkum penulisan <strong>Notasi Selang (Interval Notation)</strong> yang menjadi bahasa baku penulisan himpunan penyelesaian:</p>
<table>
  <thead><tr><th>Jenis Selang</th><th>Notasi Interval</th><th>Notasi Pembentuk Himpunan</th><th>Karakteristik Ujung Titik</th></tr></thead>
  <tbody>
    <tr><td><strong>Selang Terbuka</strong></td><td><code>(a, b)</code></td><td><code>{ x &isin; &Ropf; | a &lt; x &lt; b }</code></td><td>Kedua titik ujung <code>a</code> dan <code>b</code> <strong>TIDAK IKUT</strong> (lingkaran kosong).</td></tr>
    <tr><td><strong>Selang Tertutup</strong></td><td><code>[a, b]</code></td><td><code>{ x &isin; &Ropf; | a &le; x &le; b }</code></td><td>Kedua titik ujung <code>a</code> dan <code>b</code> <strong>IKUT SERTA</strong> (lingkaran penuh).</td></tr>
    <tr><td><strong>Setengah Terbuka (Kiri)</strong></td><td><code>(a, b]</code></td><td><code>{ x &isin; &Ropf; | a &lt; x &le; b }</code></td><td>Titik <code>a</code> tidak ikut, titik <code>b</code> ikut serta.</td></tr>
    <tr><td><strong>Setengah Terbuka (Kanan)</strong></td><td><code>[a, b)</code></td><td><code>{ x &isin; &Ropf; | a &le; x &lt; b }</code></td><td>Titik <code>a</code> ikut serta, titik <code>b</code> tidak ikut.</td></tr>
    <tr><td><strong>Selang Tak Hingga Positif</strong></td><td><code>(a, &infin;)</code></td><td><code>{ x &isin; &Ropf; | x &gt; a }</code></td><td>Membentang ke kanan tanpa batas.</td></tr>
    <tr><td><strong>Selang Tak Hingga Negatif</strong></td><td><code>(-&infin;, b]</code></td><td><code>{ x &isin; &Ropf; | x &le; b }</code></td><td>Membentang ke kiri tanpa batas, ujung <code>b</code> tertutup.</td></tr>
  </tbody>
</table>
"""
            }
        ],
        "ai_insights": [
            {
                "title": "Intuisi First Principles: Representasi Bilangan Real di Memori Komputer",
                "content_html": """
<p>Dalam ilmu komputer, bilangan riil direpresentasikan menggunakan standar biner <strong>IEEE 754 Floating-Point</strong> (1 bit tanda, 8 bit eksponen, 23 bit mantisa pada presisi tunggal 32-bit). Karena keterbatasan digit biner, bilangan desimal seperti <code>0.1</code> tidak dapat direpresentasikan secara eksak sempurna dalam biner, melahirkan fenomena pembulatan kecil (<em>floating-point precision error</em>). Itulah sebabnya dalam sistem keuangan perbankan, penghitungan saldo selalu menggunakan tipe fixed-point atau integer satuan sen.</p>
"""
            },
            {
                "title": "Tips Menjawab Soal UTS Notasi Selang",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>🎯 Bedah Jebakan Ujian Notasi Selang:</strong><br>
  <strong>1. Kurung Siku vs Kurung Biasa:</strong> Simbol pertidaksamaan <code>&lt;</code> dan <code>&gt;</code> (tanpa tanda sama dengan) <strong>SELALU menggunakan kurung biasa <code>( )</code></strong>. Simbol <code>&le;</code> dan <code>&ge;</code> menggunakan kurung siku <code>[ ]</code>.<br>
  <strong>2. Simbol Tak Hingga (&infin;):</strong> Titik tak hingga <code>&infin;</code> atau <code>-&infin;</code> <strong>MUTLAK SELALU menggunakan kurung biasa <code>( )</code></strong> dan tidak pernah boleh menggunakan kurung siku karena tak hingga bukanlah sebuah angka terhenti!
</div>
"""
            }
        ],
        "references": [
            "Berkas Resmi Perkuliahan: matdas_p1_sistem_bilangan_real.pdf (Sistem Bilangan Real Pertemuan Ke-1, 17 Slide PPT Dosen FTIK Unindra).",
            "Varberg, D., Purcell, E. J., & Rigdon, S. E. (2010). Calculus (9th ed.). Pearson Prentice Hall.",
            "Silabus Resmi Mata Kuliah Matematika Dasar, Program Studi Sistem Informasi FTIK Unindra (2026)."
        ]
    },
    {
        "meeting_no": 2,
        "filename": "matdas_p2_panduan_guru_ai",
        "title": "Master Guide: Pertidaksamaan Bilangan Real, Pembalikan Tanda & 5 Langkah Baku Menentukan HP",
        "subject_name": "Matematika Dasar",
        "lecturer": "Tim Dosen Matematika FTIK Unindra",
        "doc_filename": "matdas_p2_pertidaksamaan_real.pdf (Pertidaksamaan Bilangan Real Pertemuan Ke-2.pdf)",
        "slide_count": "14 Slide PPT Resmi Dosen",
        "sections": [
            {
                "title": "Konsep Dasar Pertidaksamaan & Sifat Pembalikan Tanda (Slide 2 - 4 PPT Dosen)",
                "content_html": """
<p>Slide 6 mendefinisikan penyelesaian pertidaksamaan sebagai proses mencari <strong>seluruh himpunan bilangan real yang membuat pertidaksamaan tersebut bernilai benar</strong>. Himpunan ini disebut <strong>Himpunan Penyelesaian (HP)</strong>.</p>
<div class=\"alert alert-danger\">
  <strong>🚨 HUKUM MUTLAK PERTIDAKSAMAAN:</strong><br>
  Jika kedua ruas pertidaksamaan <strong>DIKALI ATAU DIBAGI DENGAN BILANGAN NEGATIF</strong>, maka <strong>ARAH TANDA KETAKSAMAAN WAJIB DIBALIK</strong>!<br>
  &bull; Tanda <code>&lt;</code> berbalik menjadi <code>&gt;</code>.<br>
  &bull; Tanda <code>&le;</code> berbalik menjadi <code>&ge;</code>.<br>
  <em>Contoh:</em> <code>-2x &lt; 6</code> &rarr; kedua ruas dibagi -2 &rarr; <code>x &gt; -3</code>.
</div>
"""
            },
            {
                "title": "Lima Langkah Baku Menentukan Himpunan Penyelesaian (HP) (Slide 6 - 8 PPT Dosen)",
                "content_html": """
<p>Metode terstruktur yang diajarkan dosen FTIK Unindra untuk menyelesaikan pertidaksamaan kuadrat dan rasional:</p>
<table>
  <thead><tr><th>Tahapan</th><th>Nama Langkah Baku</th><th>Aksi Matematis</th></tr></thead>
  <tbody>
    <tr><td><strong>Langkah 1</strong></td><td><strong>Nolkan Ruas Kanan</strong></td><td>Pindahkan seluruh suku di ruas kanan ke ruas kiri sehingga ruas kanan menjadi sama dengan nol: <code>f(x) &lt; 0</code> atau <code>f(x) &ge; 0</code>. Dilarang mengalikan silang penyebut yang memuat variabel!</td></tr>
    <tr><td><strong>Langkah 2</strong></td><td><strong>Faktorkan Suku Aljabar</strong></td><td>Ubah bentuk ruas kiri menjadi perkalian faktor-faktor linear: <code>(x - a)(x - b)</code> atau pecahan linear <code>(x - a) / (x - b)</code>.</td></tr>
    <tr><td><strong>Langkah 3</strong></td><td><strong>Tentukan Titik Kritis (Pembuat Nol)</strong></td><td>Cari nilai <code>x</code> yang membuat pembilang sama dengan nol dan penyebut sama dengan nol.</td></tr>
    <tr><td><strong>Langkah 4</strong></td><td><strong>Garis Bilangan & Uji Tanda</strong></td><td>Letakkan titik kritis pada garis bilangan, bagi menjadi beberapa interval selang, ambil satu titik uji acak di setiap selang untuk menentukan tanda positif (+) atau negatif (-).</td></tr>
    <tr><td><strong>Langkah 5</strong></td><td><strong>Tuliskan Himpunan Penyelesaian (HP)</strong></td><td>Arsir daerah yang sesuai dengan tanda pertidaksamaan soal. Tuliskan HP dalam notasi himpunan dan notasi interval selang.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Pembahasan Latihan Soal Linear Dosen: 2x - 7 < 4x - 2 (Slide 7 PPT Dosen)",
                "content_html": """
<div class=\"card-dark\">
  <span style=\"color: #38bdf8; font-weight: bold;\">// Pembahasan Langkah Demi Langkah Soal Slide 7:</span><br>
  <strong>Soal:</strong> Selesaikanlah pertidaksamaan <code>2x - 7 &lt; 4x - 2</code> dan tentukan HP-nya!<br><br>
  <strong>Langkah 1:</strong> Kumpulkan suku bervariabel ke ruas kiri dan konstanta ke ruas kanan:<br>
  <code>2x - 4x &lt; -2 + 7</code><br>
  <code>-2x &lt; 5</code><br><br>
  <strong>Langkah 2:</strong> Bagi kedua ruas dengan angka <code>-2</code> (INGAT: Tanda ketaksamaan wajib berbalik arah!):<br>
  <code>x &gt; 5 / (-2)</code><br>
  <code>x &gt; -2.5</code> atau <code>x &gt; -5/2</code><br><br>
  <strong>Hasil Akhir HP:</strong><br>
  &bull; Notasi Himpunan: <code>HP = { x &isin; &Ropf; | x &gt; -5/2 }</code><br>
  &bull; Notasi Selang: <code>HP = (-5/2, &infin;)</code>
</div>
"""
            },
            {
                "title": "Pengantar Nilai Mutlak & Pertidaksamaan Pecahan (Slide 9 - 13 PPT Dosen)",
                "content_html": """
<p>Slide 9 mendefinisikan <strong>Nilai Mutlak <code>|x|</code></strong> secara geometris sebagai <strong>jarak antara titik <code>x</code> dengan titik pusat 0 pada garis bilangan real</strong>. Karena jarak tidak pernah bernilai negatif, maka nilai mutlak selalu non-negatif (<code>|x| &ge; 0</code>).</p>
<div class=\"card card-accent\">
  <strong>Definisi Aljabar Nilai Mutlak:</strong><br>
  <code>|x| = x</code> jika <code>x &ge; 0</code><br>
  <code>|x| = -x</code> jika <code>x &lt; 0</code>
</div>
<p>Slide 13 menyajikan latihan pertidaksamaan pecahan: <code>(x - 1) / (x + 2) &ge; 0</code>. Titik pembuat nol pembilang adalah <code>x = 1</code> dan pembuat nol penyebut adalah <code>x = -2</code>. Catatan krusial: <strong>penyebut tidak boleh nol</strong> (<code>x &ne; -2</code>), sehingga di titik <code>-2</code> selang harus terbuka!</p>
"""
            }
        ],
        "ai_insights": [
            {
                "title": "Intuisi First Principles: Bahaya Fatal Mengalikan Silang Pertidaksamaan",
                "content_html": """
<p>Banyak mahasiswa salah saat menyelesaikan pertidaksamaan pecahan seperti <code>1 / (x - 2) &lt; 3</code> dengan langsung mengalikan silang kedua ruas dengan <code>(x - 2)</code>. Hal ini <strong>SALAH BESAR</strong> karena tanda dari <code>(x - 2)</code> belum diketahui: bisa positif atau negatif tergantung nilai <code>x</code>! Jika ternyata negatif, arah pertidaksamaan harus berbalik. Oleh sebab itu, <strong>wajib nolkan ruas kanan</strong>, samakan penyebut, dan gunakan garis bilangan uji tanda.</p>
"""
            },
            {
                "title": "Tips Menjawab Soal UTS Pertidaksamaan Pecahan",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>🎯 Bedah Jebakan Ujian Syarat Penyebut:</strong><br>
  Meskipun tanda pertidaksamaan soal menyertakan tanda sama dengan (<code>&le;</code> atau <code>&ge;</code>), titik kritis yang berasal dari <strong>PENYEBUT MUTLAK SELALU MENGGUNAKAN BULATAN KOSONG / KURUNG BIASA <code>( )</code></strong>! Contoh pada <code>(x - 1) / (x + 2) &ge; 0</code>, titik <code>x = 1</code> diberi kurung siku tertutup <code>[1, &infin;)</code>, namun titik <code>x = -2</code> wajib kurung biasa terbuka <code>(-&infin;, -2)</code> karena penyebut nol membuat nilai tidak terdefinisi.
</div>
"""
            }
        ],
        "references": [
            "Berkas Resmi Perkuliahan: matdas_p2_pertidaksamaan_real.pdf (Pertidaksamaan Bilangan Real Pertemuan Ke-2, 14 Slide PPT Dosen FTIK Unindra).",
            "Varberg, D., Purcell, E. J., & Rigdon, S. E. (2010). Calculus (9th ed.). Pearson Prentice Hall.",
            "Silabus Resmi Mata Kuliah Matematika Dasar, Program Studi Sistem Informasi FTIK Unindra (2026)."
        ]
    },
    {
        "meeting_no": 3,
        "filename": "matdas_p3_panduan_guru_ai",
        "title": "Master Guide: Pertidaksamaan Nilai Mutlak, Definisi Fungsi & Sifat Pemetaan",
        "subject_name": "Matematika Dasar",
        "lecturer": "Tim Dosen Matematika FTIK Unindra",
        "doc_filename": "matdas_p3_fungsi_dan_grafik.pdf (Pertidaksamaan Nilai Mutlak dan Fungsi Pertemuan Ke-3.pdf)",
        "slide_count": "18 Slide PPT Resmi Dosen",
        "sections": [
            {
                "title": "Sifat-Sifat Pertidaksamaan Nilai Mutlak (Slide 2 - 3 PPT Dosen)",
                "content_html": """
<p>Slide 2 menguraikan teorema dasar pertidaksamaan nilai mutlak untuk <code>a &gt; 0</code>:</p>
<table>
  <thead><tr><th>Bentuk Pertidaksamaan</th><th>Ekuivalensi Tanpa Nilai Mutlak</th><th>Makna Geometris</th></tr></thead>
  <tbody>
    <tr><td><strong><code>|x| &lt; a</code></strong></td><td><code>-a &lt; x &lt; a</code></td><td>Jarak <code>x</code> dari titik pusat nol kurang dari <code>a</code> (berada di dalam interval).</td></tr>
    <tr><td><strong><code>|x| &le; a</code></strong></td><td><code>-a &le; x &le; a</code></td><td>Interval tertutup dari <code>-a</code> sampai <code>a</code>.</td></tr>
    <tr><td><strong><code>|x| &gt; a</code></strong></td><td><code>x &lt; -a</code> atau <code>x &gt; a</code></td><td>Jarak <code>x</code> lebih dari <code>a</code> (berada di luar rentang, terbagi dua cabang sayap).</td></tr>
    <tr><td><strong><code>|x| &ge; a</code></strong></td><td><code>x &le; -a</code> atau <code>x &ge; a</code></td><td>Cabang terpisah dengan batas titik ikut serta.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Pembahasan Latihan Soal Nilai Mutlak Dosen (Slide 3 PPT Dosen)",
                "content_html": """
<div class=\"card-dark\">
  <strong>Latihan 1 (Slide 3a): Selesaikan <code>|2x - 1| &lt; 3</code></strong><br>
  Berdasarkan sifat <code>|u| &lt; a &hArr; -a &lt; u &lt; a</code>:<br>
  <code>-3 &lt; 2x - 1 &lt; 3</code><br>
  Tambahkan 1 ke ketiga ruas:<br>
  <code>-2 &lt; 2x &lt; 4</code><br>
  Bagi 2 ketiga ruas:<br>
  <code>-1 &lt; x &lt; 2</code><br>
  <strong>HP = { x &isin; &Ropf; | -1 &lt; x &lt; 2 } = (-1, 2)</strong>
</div>

<div class=\"card-dark\" style=\"margin-top: 8px;\">
  <strong>Latihan 2 (Slide 3b): Selesaikan <code>|3x - 5| &ge; 1</code></strong><br>
  Berdasarkan sifat <code>|u| &ge; a &hArr; u &le; -a</code> atau <code>u &ge; a</code>:<br>
  &bull; Cabang 1: <code>3x - 5 &le; -1 &rArr; 3x &le; 4 &rArr; x &le; 4/3</code><br>
  &bull; Cabang 2: <code>3x - 5 &ge; 1 &rArr; 3x &ge; 6 &rArr; x &ge; 2</code><br>
  <strong>HP = { x &isin; &Ropf; | x &le; 4/3 atau x &ge; 2 } = (-&infin;, 4/3] &cup; [2, &infin;)</strong>
</div>
"""
            },
            {
                "title": "Definisi Formal & Sifat-Sifat Pemetaan Fungsi (Slide 4 - 5 PPT Dosen)",
                "content_html": """
<p>Slide 4 mendefinisikan <strong>Fungsi <code>f</code></strong> dari himpunan <code>X</code> ke <code>Y</code> sebagai suatu aturan korespondensi yang menghubungkan <strong>setiap anggota himpunan <code>X</code> dengan TEPAT SATU anggota himpunan <code>Y</code></strong>.</p>
<p><strong>Dua Syarat Mutlak Fungsi (Slide 5):</strong></p>
<ol>
  <li>Setiap anggota himpunan domain <code>X</code> memiliki pasangan di himpunan kodomain <code>Y</code> (tidak boleh ada anggota domain yang \"jomblo\").</li>
  <li>Setiap anggota domain <code>X</code> memiliki pasangan <strong>TEPAT SATU</strong> di <code>Y</code> (tidak boleh bercabang / tidak boleh mendua).</li>
</ol>
"""
            },
            {
                "title": "Evaluasi Nilai Fungsi & Sifat Fungsi Ganjil/Genap (Slide 6 - 7 PPT Dosen)",
                "content_html": """
<p>Slide 6 menyajikan latihan evaluasi fungsi <code>f(x) = x^2 - 2x</code>:</p>
<ul>
  <li><code>f(4) = (4)^2 - 2(4) = 16 - 8 = 8</code></li>
  <li><code>f(4 + h) = (4 + h)^2 - 2(4 + h) = 16 + 8h + h^2 - 8 - 2h = h^2 + 6h + 8</code></li>
</ul>
<p>Slide 7 menguraikan simetri fungsi:</p>
<table>
  <thead><tr><th>Kategori Simetri</th><th>Syarat Aljabar</th><th>Simetri Geometris Grafik</th><th>Contoh Fungsi Dosen</th></tr></thead>
  <tbody>
    <tr><td><strong>Fungsi Genap (Even)</strong></td><td><code>f(-x) = f(x)</code></td><td>Simetris terhadap <strong>Sumbu Y</strong> (seperti cermin).</td><td><code>f(x) = x^2 - 2</code></td></tr>
    <tr><td><strong>Fungsi Ganjil (Odd)</strong></td><td><code>f(-x) = -f(x)</code></td><td>Simetris terhadap <strong>Titik Pusat Asal (0,0)</strong> (diputar 180&deg;).</td><td><code>f(x) = x^3 - 3x</code></td></tr>
  </tbody>
</table>
"""
            }
        ],
        "ai_insights": [
            {
                "title": "Intuisi First Principles: Uji Garis Vertikal (Vertical Line Test)",
                "content_html": """
<p>Untuk menguji apakah suatu kurva grafik merupakan fungsi secara geometris, bayangkan sebuah garis lurus vertikal yang digeser melintasi grafik dari kiri ke kanan. Jika garis vertikal tersebut <strong>memotong kurva lebih dari 1 titik pada posisi x mana pun</strong>, maka kurva tersebut <strong>BUKAN FUNGSI</strong> (misalnya grafik lingkaran penuh <code>x^2 + y^2 = r^2</code> bukanlah fungsi karena untuk satu nilai x menghasilkan dua nilai y).</p>
"""
            },
            {
                "title": "Tips Menjawab Soal UTS Nilai Mutlak Dua Sisi",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>🎯 Trik Cepat Soal <code>|f(x)| &lt; |g(x)|</code>:</strong><br>
  Jika kedua ruas sama-sama memiliki tanda nilai mutlak, selesaikan dengan cara <strong>mengkuadratkan kedua ruas</strong> lalu gunakan faktorisasi selisih dua kuadrat <code>(A^2 - B^2) = (A + B)(A - B)</code>:<br>
  <code>(f(x) + g(x))(f(x) - g(x)) &lt; 0</code>.<br>
  Metode ini jauh lebih cepat dan aman daripada memecah ke dalam 4 kasus definisi!
</div>
"""
            }
        ],
        "references": [
            "Berkas Resmi Perkuliahan: matdas_p3_fungsi_dan_grafik.pdf (Pertidaksamaan Nilai Mutlak dan Fungsi Pertemuan Ke-3, 18 Slide PPT Dosen FTIK Unindra).",
            "Varberg, D., Purcell, E. J., & Rigdon, S. E. (2010). Calculus (9th ed.). Pearson Prentice Hall.",
            "Silabus Resmi Mata Kuliah Matematika Dasar, Program Studi Sistem Informasi FTIK Unindra (2026)."
        ]
    },
    {
        "meeting_no": 4,
        "filename": "matdas_p4_panduan_guru_ai",
        "title": "Master Guide: Koordinat Kartesius, Grafik Fungsi Linear/Kuadrat, Domain & Komposisi Invers",
        "subject_name": "Matematika Dasar",
        "lecturer": "Tim Dosen Matematika FTIK Unindra",
        "doc_filename": "matdas_p3_fungsi_dan_grafik.pdf (Lanjutan Slide 9 - 18: Grafik, Domain & Invers.pdf)",
        "slide_count": "18 Slide PPT Resmi Dosen",
        "sections": [
            {
                "title": "Sistem Koordinat Kartesius 2D & Pembagian Kuadran (Slide 9 - 10 PPT Dosen)",
                "content_html": """
<p>Slide 9-10 menjelaskan sistem koordinat bidang dua dimensi (2D) yang membagi ruang menjadi 4 kuadran:</p>
<table>
  <thead><tr><th>Kuadran</th><th>Tanda Koordinat X</th><th>Tanda Koordinat Y</th><th>Posisi Relatif Titik</th></tr></thead>
  <tbody>
    <tr><td><strong>Kuadran I</strong></td><td><code>x &gt; 0</code> (Positif)</td><td><code>y &gt; 0</code> (Positif)</td><td>Kanan Atas</td></tr>
    <tr><td><strong>Kuadran II</strong></td><td><code>x &lt; 0</code> (Negatif)</td><td><code>y &gt; 0</code> (Positif)</td><td>Kiri Atas</td></tr>
    <tr><td><strong>Kuadran III</strong></td><td><code>x &lt; 0</code> (Negatif)</td><td><code>y &lt; 0</code> (Negatif)</td><td>Kiri Bawah</td></tr>
    <tr><td><strong>Kuadran IV</strong></td><td><code>x &gt; 0</code> (Positif)</td><td><code>y &lt; 0</code> (Negatif)</td><td>Kanan Bawah</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Grafik Fungsi Linear & Fungsi Kuadrat (Slide 11 PPT Dosen)",
                "content_html": """
<p>Slide 11 menguraikan dua bentuk grafik dasar:</p>
<table>
  <thead><tr><th>Jenis Fungsi</th><th>Bentuk Persamaan Umum</th><th>Bentuk Geometri Grafik</th><th>Parameter Kunci</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>Fungsi Linear</strong></td>
      <td><code>f(x) = mx + b</code></td><td>Garis Lurus</td>
      <td><code>m</code> = kemiringan garis (gradien), <code>b</code> = titik potong sumbu Y. Rumus gradien: <code>m = (y2 - y1) / (x2 - x1)</code>.</td>
    </tr>
    <tr>
      <td><strong>Fungsi Kuadrat</strong></td>
      <td><code>f(x) = ax^2 + bx + c</code></td><td>Kurva Parabola</td>
      <td>Terbuka ke atas jika <code>a &gt; 0</code>; terbuka ke bawah jika <code>a &lt; 0</code>. Titik puncak: <code>(-b / (2a), -D / (4a))</code> dengan <code>D = b^2 - 4ac</code>.</td>
    </tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Daerah Asal Alami (Domain) & Daerah Hasil (Range) (Slide 12 - 14 PPT Dosen)",
                "content_html": """
<p>Slide 12-14 menjelaskan <strong>Domain Alami</strong> sebagai himpunan seluruh bilangan real yang mungkin dimasukkan ke dalam fungsi sehingga menghasilkan nilai real yang sah.</p>
<div class=\"alert alert-info\">
  <strong>Dua Syarat Mutlak Penentuan Domain Alami:</strong><br>
  1. <strong>Bentuk Pecahan <code>f(x) / g(x)</code>:</strong> Penyebut <strong>TIDAK BOLEH SAMA DENGAN NOL</strong> (<code>g(x) &ne; 0</code>).<br>
  2. <strong>Bentuk Akar Genap <code>&radic;g(x)</code>:</strong> Nilai di bawah tanda akar <strong>WAJIB NON-NEGATIF</strong> (<code>g(x) &ge; 0</code>).
</div>
<p><strong>Pembahasan Contoh Soal Dosen (Slide 14):</strong></p>
<ul>
  <li><code>f(x) = &radic;(x - 5)</code> &rarr; Syarat: <code>x - 5 &ge; 0 &rArr; x &ge; 5</code>. <strong>Domain = [5, &infin;)</strong>.</li>
  <li><code>f(x) = &radic;(4 - x)</code> &rarr; Syarat: <code>4 - x &ge; 0 &rArr; x &le; 4</code>. <strong>Domain = (-&infin;, 4]</strong>.</li>
</ul>
"""
            },
            {
                "title": "Operasi Aljabar, Komposisi Fungsi & Invers Fungsi (Slide 15 - 17 PPT Dosen)",
                "content_html": """
<p>Slide 15-17 menguraikan operasi fungsi:</p>
<ol>
  <li><strong>Operasi Aljabar:</strong> <code>(f &plusmn; g)(x) = f(x) &plusmn; g(x)</code>; <code>(f &times; g)(x) = f(x) &times; g(x)</code>; <code>(f / g)(x) = f(x) / g(x)</code> dengan <code>g(x) &ne; 0</code>.</li>
  <li><strong>Komposisi Fungsi:</strong> <code>(f &comp; g)(x) = f(g(x))</code> (masukkan fungsi <code>g(x)</code> ke dalam variabel <code>x</code> pada fungsi <code>f</code>).</li>
  <li><strong>Invers Fungsi:</strong> <code>f^(-1)(x)</code>. Pembahasan Soal Dosen (Slide 17):<br>
    Cari invers dari <code>f(x) = 2x + 3</code>:<br>
    Misalkan <code>y = 2x + 3 &rArr; y - 3 = 2x &rArr; x = (y - 3) / 2</code>.<br>
    Tukar variabel: <strong><code>f^(-1)(x) = (x - 3) / 2</code></strong>.
  </li>
</ol>
"""
            }
        ],
        "ai_insights": [
            {
                "title": "Intuisi First Principles: Hubungan Gradien Garis Tegak Lurus & Sejajar",
                "content_html": """
<p>Dua konsep analitis geometri yang sering diujikan:</p>
<ul>
  <li>Dua garis saling <strong>sejajar</strong> jika gradiennya sama: <code>m1 = m2</code>.</li>
  <li>Dua garis saling <strong>tegak lurus</strong> jika hasil kali gradiennya sama dengan -1: <code>m1 &times; m2 = -1</code> atau <code>m2 = -1 / m1</code>.</li>
</ul>
"""
            },
            {
                "title": "Tips Menjawab Soal UTS Invers Fungsi Pecahan Linear",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>🎯 Rumus Cepat Invers Fungsi Pecahan Linear:</strong><br>
  Jika diberikan fungsi <code>f(x) = (ax + b) / (cx + d)</code>, maka inversnya dapat dihitung seketika dengan menukar posisi <code>a</code> dan <code>d</code> serta mengubah tandanya menjadi negatif:<br>
  <code>f^(-1)(x) = (-dx + b) / (cx - a)</code>.<br>
  Rumus ini sangat menghemat waktu saat mengerjakan ujian pilihan ganda atau esai kalkulus!
</div>
"""
            }
        ],
        "references": [
            "Berkas Resmi Perkuliahan: matdas_p3_fungsi_dan_grafik.pdf (Lanjutan Slide 9 - 18, 18 Slide PPT Dosen FTIK Unindra).",
            "Varberg, D., Purcell, E. J., & Rigdon, S. E. (2010). Calculus (9th ed.). Pearson Prentice Hall.",
            "Silabus Resmi Mata Kuliah Matematika Dasar, Program Studi Sistem Informasi FTIK Unindra (2026)."
        ]
    }
]
