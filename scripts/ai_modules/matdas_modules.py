# -*- coding: utf-8 -*-
"""
Modul Pembelajaran Guru AI: Matematika Dasar (Pertemuan 1 - 4)
"""

MATDAS_MEETINGS = [
    {
        "meeting_no": 1,
        "filename": "matdas_p1_panduan_guru_ai",
        "title": "Master Guide: Sistem Bilangan Real, Aksioma Aljabar Medan & Notasi Selang",
        "subject_name": "Matematika Dasar",
        "lecturer": "Dr. Munali, M.Pd. / Syifaafidah, M.Pd.",
        "sections": [
            {
                "title": "The Big Picture: Mengapa Mahasiswa Sistem Informasi Wajib Belajar Bilangan Real?",
                "content_html": """
<p>Kalkulus dan matematika terapan adalah bahasa formal komputasi. Mulai dari alokasi memori array, pemodelan machine learning, optimasi biaya logistik, hingga grafika komputer (rasterization 3D) seluruhnya berdiri di atas fondasi <strong>Sistem Bilangan Real (&reals;)</strong>. Memahami struktur bilangan mencegah kesalahan komputasi kritis seperti <em>division by zero</em>, <em>loss of significance</em>, dan <em>arithmetic underflow</em>.</p>
"""
            },
            {
                "title": "Taksonomi 10 Himpunan Bilangan dalam Matematika",
                "content_html": """
<table>
  <thead><tr><th>Nama Himpunan</th><th>Simbol</th><th>Definisi Himpunan & Anggota</th><th>Relevansi Konkret di Ilmu Komputer</th></tr></thead>
  <tbody>
    <tr><td><strong>Bilangan Asli</strong></td><td>&naturals; (Natural)</td><td>{1, 2, 3, 4, 5, ...}</td><td>Indeks pencacah perulangan (loop index), jumlah node jaringan.</td></tr>
    <tr><td><strong>Bilangan Cacah</strong></td><td>Whole</td><td>{0, 1, 2, 3, 4, ...}</td><td>Pengalamatan array berbasis nol (<em>zero-based indexing</em>).</td></tr>
    <tr><td><strong>Bilangan Bulat</strong></td><td>&integers; (Integers)</td><td>{..., -2, -1, 0, 1, 2, ...}</td><td>Tipe data <code>Integer</code>, saldo debit-kredit bank.</td></tr>
    <tr><td><strong>Bilangan Rasional</strong></td><td>&rationals;</td><td>Bilangan yang dapat dinyatakan dalam pecahan p/q (q &ne; 0).</td><td>Perhitungan probabilitas, rasio aspek layar (16:9, 4:3).</td></tr>
    <tr><td><strong>Bilangan Irasional</strong></td><td>&rationals;'</td><td>Bilangan dengan desimal tak hingga dan tak berulang (&radic;2, &pi;, e).</td><td>Fungsi eksponensial alamiah AI (e), trigonometri grafika (&pi;).</td></tr>
    <tr><td><strong>Bilangan Real</strong></td><td>&reals;</td><td>Gabungan lengkap rasional dan irasional (&reals; = &rationals; &cup; &rationals;').</td><td>Domain utama variabel kontinu kalkulus dan machine learning.</td></tr>
    <tr><td><strong>Bilangan Imajiner</strong></td><td>i</td><td>Bilangan dengan sifat i<sup>2</sup> = -1 (akar bilangan negatif).</td><td>Pemrosesan sinyal digital (DSP), Transformasi Fourier Cepat (FFT).</td></tr>
    <tr><td><strong>Bilangan Kompleks</strong></td><td>&complexes;</td><td>Bentuk umum z = a + bi dengan a, b &in; &reals;.</td><td>Sistem kontrol robotika, komputasi kuantum (qubit).</td></tr>
    <tr><td><strong>Bilangan Prima</strong></td><td>Prime</td><td>Bilangan &gt; 1 yang hanya habis dibagi 1 dan dirinya {2, 3, 5, 7, ...}.</td><td>Kriptografi asimetris kunci publik (Enkripsi RSA, HTTPS, SSL).</td></tr>
    <tr><td><strong>Bilangan Komposit</strong></td><td>Composite</td><td>Bilangan asli &gt; 1 selain bilangan prima {4, 6, 8, 9, 10, ...}.</td><td>Faktorisasi prima untuk uji efisiensi algoritma komputasi.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Lima Aksioma Aljabar Medan Real & Notasi Selang (Interval)",
                "content_html": """
<div class=\"grid-2\">
  <div class=\"card\">
    <strong>5 Sifat Aksioma Aljabar Bilangan Real:</strong>
    <ol style=\"font-size: 7.7pt;\">
      <li><strong>Komutatif:</strong> a + b = b + a dan a &times; b = b &times; a</li>
      <li><strong>Asosiatif:</strong> (a + b) + c = a + (b + c) dan (a &times; b) &times; c = a &times; (b &times; c)</li>
      <li><strong>Distributif:</strong> a &times; (b + c) = (a &times; b) + (a &times; c)</li>
      <li><strong>Elemen Identitas:</strong> a + 0 = a (identitas tambah) dan a &times; 1 = a (identitas kali).</li>
      <li><strong>Elemen Invers:</strong> a + (-a) = 0 dan a &times; (1/a) = 1 (untuk a &ne; 0).</li>
    </ol>
  </div>

  <div class=\"card\">
    <strong>Tabel Notasi Selang (Interval Notation):</strong>
    <table>
      <thead><tr><th>Notasi Selang</th><th>Definisi Himpunan</th><th>Makna Titik Ujung</th></tr></thead>
      <tbody>
        <tr><td><strong>(a, b)</strong></td><td>{x &in; &reals; | a &lt; x &lt; b}</td><td>Selang Terbuka: a dan b <strong>tidak masuk</strong> (lingkaran kosong &cir;).</td></tr>
        <tr><td><strong>[a, b]</strong></td><td>{x &in; &reals; | a &le; x &le; b}</td><td>Selang Tertutup: a dan b <strong>ikut masuk</strong> (lingkaran penuh &bull;).</td></tr>
        <tr><td><strong>[a, b)</strong></td><td>{x &in; &reals; | a &le; x &lt; b}</td><td>Setengah terbuka: a masuk, b tidak masuk.</td></tr>
        <tr><td><strong>(-&infin;, b]</strong></td><td>{x &in; &reals; | x &le; b}</td><td>Sayap kiri hingga b termasuk b.</td></tr>
        <tr><td><strong>(a, &infin;)</strong></td><td>{x &in; &reals; | x &gt; a}</td><td>Sayap kanan dari a tanpa batas.</td></tr>
      </tbody>
    </table>
  </div>
</div>
"""
            },
            {
                "title": "Jebakan Soal UTS Pertemuan 1",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>⚠️ Jebakan Bilangan Nol & Tanda Kurung Tak Hingga:</strong><br>
  1. Apakah angka 0 termasuk bilangan genap? <strong>YA</strong>, karena 0 habis dibagi 2 (0 mod 2 = 0).<br>
  2. Lambang tak hingga (&plusmn;&infin;) <strong>SELALU menggunakan kurung biasa <code>(</code> atau <code>)</code>, TIDAK PERNAH menggunakan kurung siku <code>[</code> atau <code>]</code></strong>, karena tak hingga adalah sebuah konsep batas tanpa ujung, bukan sebuah angka terhingga yang dapat disentuh atau dimasukkan ke dalam himpunan.
</div>
"""
            }
        ],
        "references": [
            "Varberg, D., Purcell, E. J., & Rigdon, S. E. (2007). Calculus (9th ed.). Pearson Prentice Hall.",
            "Stewart, J. (2015). Calculus: Early Transcendentals (8th ed.). Cengage Learning.",
            "Slide Resmi Matematika Dasar Pertemuan 1: Sistem Bilangan Real, FTIK Unindra (2026)."
        ]
    },
    {
        "meeting_no": 2,
        "filename": "matdas_p2_panduan_guru_ai",
        "title": "Master Guide: Pertidaksamaan Bilangan Real & 5 Langkah Baku Penentuan HP",
        "subject_name": "Matematika Dasar",
        "lecturer": "Dr. Munali, M.Pd. / Syifaafidah, M.Pd.",
        "sections": [
            {
                "title": "The Big Picture: Konsep Relasi Urutan & Pembalikan Tanda",
                "content_html": """
<p>Berbeda dengan persamaan yang menghasilkan titik solusi diskrit (misal: x = 5), <strong>Pertidaksamaan</strong> menghasilkan rentang solusi kontinu tak hingga yang disebut <strong>Himpunan Penyelesaian (HP)</strong>. Pertidaksamaan adalah model dasar batas kapasitas (<em>capacity constraint</em>) dalam riset operasional dan arsitektur sistem.</p>
<div class=\"alert alert-danger\">
  <strong>🚨 HUKUM MUTLAK PERTIDAKSAMAAN:</strong><br>
  Jika kedua ruas dikalikan atau dibagi dengan <strong>bilangan negatif</strong>, arah tanda pertidaksamaan <strong>WAJIB DIBALIK</strong>!<br>
  Contoh: -2x &lt; 6 &rArr; kedua ruas dibagi -2 &rArr; <strong>x &gt; -3</strong> (tanda &lt; berbalik menjadi &gt;).
</div>
"""
            },
            {
                "title": "Lima Langkah Baku Menentukan Himpunan Penyelesaian (Metode Anti-Gagal)",
                "content_html": """
<ol style=\"font-size: 7.9pt;\">
  <li><strong>1. Nolkan Ruas Kanan:</strong> Pindahkan semua suku ke ruas kiri sehingga ruas kanan menjadi 0 (f(x) &lt; 0 atau f(x) &gt; 0). <em>Dilarang mengalikan silang variabel jika belum tahu tandanya!</em></li>
  <li><strong>2. Faktorisasi / Pecahan Tunggal:</strong> Ubah bentuk kuadrat menjadi faktor-faktor linier (x - x<sub>1</sub>)(x - x<sub>2</sub>). Untuk pecahan aljabar, samakan penyebut menjadi P(x) / Q(x).</li>
  <li><strong>3. Tentukan Titik Pemecah (Split Points):</strong> Cari pembuat nol pembilang (P(x) = 0) dan pembuat nol penyebut (Q(x) = 0). <strong>Ingat:</strong> Titik penyebut SELALU lingkaran kosong (&cir;) karena pembagian nol tidak terdefinisi!</li>
  <li><strong>4. Plot Garis Bilangan & Uji Titik:</strong> Tarik garis bilangan, letakkan titik pemecah, dan pilih angka uji di luar pemecah (paling mudah <strong>x = 0</strong>) untuk menentukan tanda interval (+ atau -).</li>
  <li><strong>5. Ambil Daerah Solusi:</strong> Jika soal &gt; 0 atau &ge; 0, ambil daerah positif (+). Jika soal &lt; 0 atau &le; 0, ambil daerah negatif (-).</li>
</ol>
"""
            },
            {
                "title": "Pembahasan Step-by-Step Latihan Soal Slide Dosen",
                "content_html": """
<div class=\"grid-2\">
  <div class=\"card-dark\">
    <span style=\"color: #38bdf8; font-weight: bold;\">Kasus 1: Pertidaksamaan Kuadrat</span><br>
    Soal: x<sup>2</sup> - x &lt; 6
    <pre><code>1. Nolkan ruas kanan:
   x<sup>2</sup> - x - 6 &lt; 0
2. Faktorkan:
   (x - 3)(x + 2) &lt; 0
3. Titik pemecah:
   x = 3 dan x = -2 (keduanya lingkaran kosong &cir;)
4. Uji titik x = 0:
   (0 - 3)(0 + 2) = -6 (Tanda Negatif -)
5. Garis Bilangan:
   (+) --- (-2) --- (-) --- (3) --- (+)
6. Karena diminta &lt; 0, ambil interval negatif (-):
   <span class=\"code-str\">HP = { x &in; &reals; | -2 &lt; x &lt; 3 } = ( -2, 3 )</span></code></pre>
  </div>

  <div class=\"card-dark\">
    <span style=\"color: #f59e0b; font-weight: bold;\">Kasus 2: Pecahan Rasional</span><br>
    Soal: (x - 1) / (x + 2) &ge; 0
    <pre><code>1. Ruas kanan sudah nol: (x - 1) / (x + 2) &ge; 0
2. Titik pemecah pembilang:
   x - 1 = 0 &rArr; x = 1 (lingkaran PENUH &bull; karena tanda &ge;)
3. Titik pemecah penyebut (Syarat Q(x) &ne; 0):
   x + 2 = 0 &rArr; x = -2 (lingkaran KOSONG &cir;)
4. Uji titik x = 0:
   (0 - 1) / (0 + 2) = -1/2 (Tanda Negatif -)
5. Garis Bilangan:
   (+) --- (-2) --- (-) --- [1] --- (+)
6. Karena diminta &ge; 0, ambil interval positif (+):
   <span class=\"code-str\">HP = ( -&infin;, -2 ) &cup; [ 1, &infin; )</span></code></pre>
  </div>
</div>
"""
            },
            {
                "title": "Kesalahan Fatal Mahasiswa yang Sering Menggugurkan Nilai UTS",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>⚠️ Dilarang Keras Perkalian Silang Pecahan Mengandung Variabel!</strong><br>
  Banyak mahasiswa menulis: <code>(x - 1) / (x + 2) &ge; 0 &rArr; x - 1 &ge; 0 &times; (x + 2) &rArr; x &ge; 1</code>. Ini adalah <strong>SALAH FATAL</strong> karena nilai <code>(x + 2)</code> bisa bernilai negatif (yang membalik tanda pertidaksamaan). Jika dikalikan silang, daerah penyelesaian <code>x &lt; -2</code> hilang seketika dan nilai soal langsung 0!
</div>
"""
            }
        ],
        "references": [
            "Purcell, E. J., Varberg, D., & Rigdon, S. E. (2007). Calculus (9th ed.), Chapter 0.1: Inequalities.",
            "Schaum's Outlines: Calculus (6th ed.). McGraw-Hill Education.",
            "Modul Kuliah Pertidaksamaan Bilangan Real, Program Studi Sistem Informasi Unindra (2026)."
        ]
    },
    {
        "meeting_no": 3,
        "filename": "matdas_p3_panduan_guru_ai",
        "title": "Master Guide: Pertidaksamaan Nilai Mutlak, Sifat Aljabar & Metode Faktorisasi",
        "subject_name": "Matematika Dasar",
        "lecturer": "Dr. Munali, M.Pd. / Syifaafidah, M.Pd.",
        "sections": [
            {
                "title": "The Big Picture: Makna Geometris Nilai Mutlak",
                "content_html": """
<p>Secara geometris, <strong>Nilai Mutlak |x|</strong> merepresentasikan <strong>jarak skalar suatu titik x dari titik nol pada garis bilangan</strong>. Karena jarak tidak pernah bernilai negatif, maka nilai mutlak selalu non-negatif (|x| &ge; 0). Definisi piecewise mutlak formal:</p>
<div class=\"card card-accent\">
  <code>|x| = x</code> jika x &ge; 0<br>
  <code>|x| = -x</code> jika x &lt; 0
</div>
"""
            },
            {
                "title": "Delapan Sifat Aljabar Utama Nilai Mutlak",
                "content_html": """
<table>
  <thead><tr><th>No</th><th>Teorema / Sifat Aljabar</th><th>Nama Sifat & Makna Operasional</th><th>Metode Penyelesaian di Ujian</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>|a &times; b| = |a| &times; |b|</td><td>Multiplikatif Nilai Mutlak</td><td>Nilai mutlak perkalian sama dengan perkalian nilai mutlak.</td></tr>
    <tr><td>2</td><td>|a / b| = |a| / |b| (b &ne; 0)</td><td>Pembagian Nilai Mutlak</td><td>Penyebut dipecah terpisah dengan syarat b &ne; 0.</td></tr>
    <tr><td>3</td><td>|a + b| &le; |a| + |b|</td><td><em>Triangle Inequality (Ketaksamaan Segitiga)</em></td><td>Fondasi pembuktian limit epsilon-delta di analisis riil.</td></tr>
    <tr><td>4</td><td>|a - b| &ge; ||a| - |b||</td><td>Batas Bawah Selisih</td><td>Estimasi galat aproksimasi komputasi.</td></tr>
    <tr><td>5</td><td>|x| = &radic;(x<sup>2</sup>)</td><td>Akar Kuadrat Sempurna</td><td>Jembatan konversi bentuk nilai mutlak ke aljabar akar.</td></tr>
    <tr><td><strong>6</strong></td><td><strong>|x| &lt; a &hArr; -a &lt; x &lt; a</strong></td><td><strong>Sifat Kurung Dalam (a &gt; 0)</strong></td><td>Himpunan penyelesaian berada di <strong>dalam interval pemecah</strong>.</td></tr>
    <tr><td><strong>7</strong></td><td><strong>|x| &gt; a &hArr; x &lt; -a atau x &gt; a</strong></td><td><strong>Sifat Sayap Luar (a &gt; 0)</strong></td><td>Himpunan penyelesaian berada di <strong>sayap luar garis bilangan</strong>.</td></tr>
    <tr><td><strong>8</strong></td><td><strong>|x| &le; |y| &hArr; x<sup>2</sup> &le; y<sup>2</sup></strong></td><td><strong>Metode Kuadrat Kedua Ruas</strong></td><td>Digunakan khusus jika <strong>kedua ruas mengandung nilai mutlak</strong>.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Metode Super Cepat Guru AI: Faktorisasi Selisih Kuadrat A² - B²",
                "content_html": """
<p>Jika kedua ruas memiliki nilai mutlak, <strong>JANGAN menjabarkan kuadrat suku per suku</strong> karena rawan salah hitung. Gunakan rumus faktorisasi selisih kuadrat:</p>
<div class=\"card-dark\">
  <strong>A<sup>2</sup> - B<sup>2</sup> = (A + B)(A - B)</strong><br><br>
  <span style=\"color: #38bdf8; font-weight: bold;\">Contoh Kasus 2 Ruas: |2x + 3| &ge; |4x + 5|</span>
  <pre><code>1. Kuadratkan kedua ruas (Sifat 8):
   (2x + 3)<sup>2</sup> &ge; (4x + 5)<sup>2</sup>
2. Pindahkan ke ruas kiri (Nolkan ruas kanan):
   (2x + 3)<sup>2</sup> - (4x + 5)<sup>2</sup> &ge; 0
3. Faktorkan dengan (A + B)(A - B):
   [(2x + 3) + (4x + 5)] &times; [(2x + 3) - (4x + 5)] &ge; 0
4. Sederhanakan suku sejenis:
   (6x + 8)(-2x - 2) &ge; 0
5. Bagi kedua ruas dengan -4 (INGAT: TANDA WAJIB DIBALIK DARI &ge; MENJADI &le;!):
   (3x + 4)(x + 1) &le; 0
6. Titik pemecah:
   x = -4/3 dan x = -1 (keduanya lingkaran penuh &bull;)
7. Uji titik x = 0: (3(0) + 4)(0 + 1) = +4 (Positif)
   Garis Bilangan: (+) --- [-4/3] --- (-) --- [-1] --- (+)
8. Karena diminta &le; 0, ambil daerah negatif di tengah:
   <span class=\"code-str\">HP = [ -4/3, -1 ]</span></code></pre>
</div>
"""
            },
            {
                "title": "Jebakan Soal UTS Pertemuan 3",
                "content_html": """
<div class=\"alert alert-danger\">
  <strong>⚠️ Jebakan Nilai Mutlak dengan Ruas Kanan Negatif:</strong><br>
  Perhatikan soal jebakan ujian:<br>
  1. <code>|2x - 5| &lt; -3</code> &rArr; <strong>HP = &empty; (Himpunan Kosong)</strong>, karena jarak mutlak mustahil lebih kecil dari bilangan negatif!<br>
  2. <code>|2x - 5| &gt; -3</code> &rArr; <strong>HP = &reals; (Seluruh Bilangan Real)</strong>, karena nilai mutlak selalu &ge; 0 sehingga pasti selalu lebih besar dari -3 untuk nilai x berapapun!
</div>
"""
            }
        ],
        "references": [
            "Varberg, D., Purcell, E. J., & Rigdon, S. E. (2007). Calculus (9th ed.), Chapter 0.2: Absolute Values.",
            "Spivak, M. (2006). Calculus (3rd ed.). Cambridge University Press.",
            "Diktat Matematika Dasar FTIK Unindra, Pertemuan 3: Pertidaksamaan Nilai Mutlak."
        ]
    },
    {
        "meeting_no": 4,
        "filename": "matdas_p4_panduan_guru_ai",
        "title": "Master Guide: Pemetaan Fungsi, Domain Alami, Uji Simetri & Difference Quotient",
        "subject_name": "Matematika Dasar",
        "lecturer": "Dr. Munali, M.Pd. / Syifaafidah, M.Pd.",
        "sections": [
            {
                "title": "The Big Picture: Fungsi Sebagai Mesin Pemroses Data Komputasi",
                "content_html": """
<p>Dalam ilmu komputer, fungsi matematika f(x) identik dengan fungsi pemrograman (<em>pure function</em>): sebuah mesin yang menerima satu nilai masukan (input) dari himpunan daerah asal (<strong>Domain / D<sub>f</sub></strong>) dan memetakan secara unik ke <strong>TEPAT SATU</strong> nilai keluaran (output) pada himpunan daerah hasil (<strong>Range / R<sub>f</sub></strong>).</p>
"""
            },
            {
                "title": "Kaidah Menentukan Domain Alami (Natural Domain)",
                "content_html": """
<p>Jika domain sebuah fungsi tidak disebutkan secara eksplisit, maka domain alaminya adalah himpunan terbesar bilangan real &reals; yang membuat rumus fungsi tersebut <strong>terdefinisi dan menghasilkan bilangan real</strong>:</p>
<table>
  <thead><tr><th>Bentuk Aljabar Fungsi</th><th>Syarat Mutlak Domain Alami</th><th>Alasan Ilmiah Matematis</th><th>Contoh Soal & Solusi</th></tr></thead>
  <tbody>
    <tr><td><strong>Pecahan Aljabar f(x) = P(x) / Q(x)</strong></td><td><strong>Penyebut Q(x) &ne; 0</strong></td><td>Pembagian dengan angka nol tidak terdefinisi (menghasilkan tak hingga/asimtot).</td><td>f(x) = 1/(x - 4) &rArr; Syarat x - 4 &ne; 0 &rArr; <strong>D<sub>f</sub> = &reals; \\ {4}</strong>.</td></tr>
    <tr><td><strong>Akar Pangkat Genap f(x) = &radic;(P(x))</strong></td><td><strong>Radikan P(x) &ge; 0</strong></td><td>Bilangan di dalam akar genap tidak boleh negatif agar tidak menjadi bilangan imajiner.</td><td>f(x) = &radic;(9 - x<sup>2</sup>) &rArr; 9 - x<sup>2</sup> &ge; 0 &rArr; (3-x)(3+x) &ge; 0 &rArr; <strong>D<sub>f</sub> = [-3, 3]</strong>.</td></tr>
    <tr><td><strong>Kombinasi Akar di Penyebut</strong></td><td><strong>P(x) &gt; 0</strong></td><td>Gabungan syarat: tidak boleh negatif dan tidak boleh nol.</td><td>f(x) = 1 / &radic;(x - 2) &rArr; x - 2 &gt; 0 &rArr; <strong>D<sub>f</sub> = (2, &infin;)</strong>.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Uji Simetri: Fungsi Genap (Even) vs Fungsi Ganjil (Odd)",
                "content_html": """
<div class=\"grid-2\">
  <div class=\"card\">
    <strong>Fungsi Genap (Even Function):</strong>
    <ul style=\"font-size: 7.7pt;\">
      <li>Syarat formal: <strong>f(-x) = f(x)</strong></li>
      <li>Ciri Geometris: Grafiknya <strong>simetris sempurna terhadap sumbu Y</strong>.</li>
      <li>Contoh: f(x) = x<sup>2</sup>, f(x) = x<sup>4</sup> - 3x<sup>2</sup>, f(x) = cos(x).</li>
      <li>Uji: f(-x) = (-x)<sup>2</sup> = x<sup>2</sup> = f(x) (Terbukti Genap).</li>
    </ul>
  </div>

  <div class=\"card\">
    <strong>Fungsi Ganjil (Odd Function):</strong>
    <ul style=\"font-size: 7.7pt;\">
      <li>Syarat formal: <strong>f(-x) = -f(x)</strong></li>
      <li>Ciri Geometris: Grafiknya <strong>simetris terhadap titik pusat asal (0,0)</strong> (rotasi 180&deg;).</li>
      <li>Contoh: g(x) = x<sup>3</sup>, g(x) = x<sup>3</sup> - 5x, g(x) = sin(x).</li>
      <li>Uji: g(-x) = (-x)<sup>3</sup> - 5(-x) = -x<sup>3</sup> + 5x = -(x<sup>3</sup> - 5x) = -g(x) (Terbukti Ganjil).</li>
    </ul>
  </div>
</div>
"""
            },
            {
                "title": "Hasil Bagi Selisih (Difference Quotient) & Persiapan Turunan UTS",
                "content_html": """
<p>Sebagaimana ditegaskan dosen di kelas daring Google Meet, evaluasi beda (<em>Difference Quotient</em>) adalah fondasi definisi formal turunan (<em>derivative</em>):</p>
<div class=\"card-dark\">
  <strong>Rumus Difference Quotient: [ f(x + h) - f(x) ] / h</strong> (untuk h &ne; 0)<br><br>
  <span style=\"color: #38bdf8; font-weight: bold;\">Contoh Soal: Tentukan Difference Quotient untuk f(x) = 2x<sup>2</sup> - 3x + 1</span>
  <pre><code>1. Cari f(x + h):
   f(x + h) = 2(x + h)<sup>2</sup> - 3(x + h) + 1
            = 2(x<sup>2</sup> + 2xh + h<sup>2</sup>) - 3x - 3h + 1
            = 2x<sup>2</sup> + 4xh + 2h<sup>2</sup> - 3x - 3h + 1

2. Kurangkan dengan f(x):
   f(x + h) - f(x) = [2x<sup>2</sup> + 4xh + 2h<sup>2</sup> - 3x - 3h + 1] - [2x<sup>2</sup> - 3x + 1]
                   = 4xh + 2h<sup>2</sup> - 3h
                   = h(4x + 2h - 3)

3. Bagi dengan h:
   [ f(x + h) - f(x) ] / h = [ h(4x + 2h - 3) ] / h = 4x + 2h - 3

<span class=\"code-str\">Hasil Akhir Evaluasi: 4x + 2h - 3</span>
(Jika h mendekati 0, hasilnya adalah turunan f'(x) = 4x - 3)</code></pre>
</div>
"""
            }
        ],
        "references": [
            "Purcell, E. J., Varberg, D., & Rigdon, S. E. (2007). Calculus (9th ed.), Chapter 0.5: Functions and Their Graphs.",
            "Notulen Live Google Meet Kelas Reguler RG Matematika Dasar, Unindra (2026).",
            "Larson, R., & Edwards, B. H. (2018). Calculus (11th ed.). Cengage Learning."
        ]
    }
]
