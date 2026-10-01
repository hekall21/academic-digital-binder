# -*- coding: utf-8 -*-
"""
Modul Pembelajaran Guru AI: Algoritma 1 (Pertemuan 1 - 4)
"""

ALGO_MEETINGS = [
    {
        "meeting_no": 1,
        "filename": "algo_p1_panduan_guru_ai",
        "title": "Master Guide: Fondasi Algoritma, Karakteristik Knuth & Notasi Komputasi",
        "subject_name": "Algoritma 1",
        "lecturer": "Pak Rizki / Tim Dosen Algoritma FTIK",
        "sections": [
            {
                "title": "The Big Picture & Intuisi Pertama (Mengapa Belajar Algoritma?)",
                "content_html": """
<p>Komputer pada dasarnya adalah mesin penghitung yang sangat cepat namun tidak memiliki inisiatif logis (<em>ultra-fast dumb machine</em>). Komputer tidak dapat memecahkan masalah tanpa instruksi presisi langkah-demi-langkah. Di sinilah letak <strong>Algoritma</strong> sebagai cetak biru (<em>blueprint</em>) berpikir logis sebelum kita menyentuh kode pemrograman apapun.</p>
<div class=\"card card-accent\">
  <strong>Aksioma Fundamental Niklaus Wirth (1976):</strong><br>
  <code>Program = Algoritma + Struktur Data</code><br>
  Jika Struktur Data adalah bahan baku material (batu bata, semen, baja), maka Algoritma adalah rancangan arsitektur dan instruksi perakitannya. Keduanya tidak terpisahkan.
</div>
<p>Asal kata <em>algoritma</em> berakar dari nama ilmuwan muslim Persia abad ke-9, <strong>Abu Ja'far Muhammad bin Musa Al-Khwarizmi</strong>, penulis kitab legendaris <em>Al-Jabr wal-Muqabala</em> yang menjadi peletak dasar aljabar modern.</p>
"""
            },
            {
                "title": "Bedah Materi Dosen: 5 Kriteria Baku Algoritma Donald E. Knuth",
                "content_html": """
<p>Pakar ilmu komputer terkemuka Donald E. Knuth dalam magnum opus-nya <em>The Art of Computer Programming</em> menetapkan bahwa sebuah urutan instruksi hanya sah disebut <strong>Algoritma</strong> apabila memenuhi 5 syarat mutlak:</p>
<table>
  <thead><tr><th>Kriteria Knuth</th><th>Definisi Konseptual</th><th>Dampak Fatal Jika Dilanggar</th></tr></thead>
  <tbody>
    <tr><td><strong>1. Finiteness (Keterbatasan)</strong></td><td>Algoritma harus berhenti (<em>terminate</em>) setelah mengerjakan sejumlah langkah terhingga.</td><td>Menyebabkan <em>Infinite Loop</em>, konsumsi memori tak terbatas, program membeku (<em>freeze / crash</em>).</td></tr>
    <tr><td><strong>2. Definiteness (Kepastian)</strong></td><td>Setiap langkah harus didefinisikan secara tepat, eksplisit, dan tidak menimbulkan makna ganda (<em>unambiguous</em>).</td><td>Instruksi seperti \"tambahkan garam secukupnya\" tidak sah dalam algoritma komputer karena ambigu bagi CPU.</td></tr>
    <tr><td><strong>3. Input (Masukan &ge; 0)</strong></td><td>Algoritma memiliki nol atau lebih masukan yang diberikan dari luar sebelum eksekusi dimulai.</td><td>Algoritma tanpa input tetap sah (misal: algoritma mencetak konstanta Pi atau teks statis).</td></tr>
    <tr><td><strong>4. Output (Keluaran &ge; 1)</strong></td><td>Algoritma harus menghasilkan minimal satu keluaran yang merupakan solusi permasalahan.</td><td>Algoritma yang berjalan tanpa memproduksi hasil apapun adalah operasi komputasi sia-sia.</td></tr>
    <tr><td><strong>5. Effectiveness (Efektivitas)</strong></td><td>Setiap instruksi harus sangat sederhana dan mendasar sehingga dapat dikerjakan manusia dengan kertas & pensil dalam waktu wajar.</td><td>Instruksi mustahil (misal: \"bagi angka dengan nol\") melanggar prinsip efektivitas.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Tiga Notasi Baku Penyajian Algoritma (Komparasi & Implementasi)",
                "content_html": """
<div class=\"grid-3\">
  <div class=\"card\">
    <strong>1. Bahasa Alami (Deskriptif)</strong><br>
    <span style=\"font-size: 7.5pt; color: #64748b;\">Menggunakan narasi bahasa manusia (Indonesia/Inggris).</span>
    <ul style=\"margin: 4px 0 0 0; padding-left: 14px; font-size: 7.6pt;\">
      <li>Kelebihan: Mudah dipahami orang awam.</li>
      <li>Kelemahan: Sering bertele-tele dan rentan ambiguitas istilah.</li>
    </ul>
  </div>
  <div class=\"card\">
    <strong>2. Pseudocode (Kode Semu)</strong><br>
    <span style=\"font-size: 7.5pt; color: #64748b;\">Notasi terstruktur mirip bahasa pemrograman tingkat tinggi.</span>
    <ul style=\"margin: 4px 0 0 0; padding-left: 14px; font-size: 7.6pt;\">
      <li>Kelebihan: Rapi, ringkas, independen dari bahasa apapun.</li>
      <li>Kelemahan: Tidak dapat dieksekusi langsung oleh mesin compiler.</li>
    </ul>
  </div>
  <div class=\"card\">
    <strong>3. Flowchart (Diagram Alir)</strong><br>
    <span style=\"font-size: 7.5pt; color: #64748b;\">Bagan visual geometris standar ANSI/ISO.</span>
    <ul style=\"margin: 4px 0 0 0; padding-left: 14px; font-size: 7.6pt;\">
      <li>Kelebihan: Alur logika percabangan terlihat seketika.</li>
      <li>Kelemahan: Memakan ruang luas jika logika sangat rumit.</li>
    </ul>
  </div>
</div>

<div class=\"card-dark\">
  <span style=\"color: #38bdf8; font-weight: bold;\">// Contoh Pseudocode Baku Menghitung Luas Segitiga:</span>
  <pre><code><span class=\"code-kw\">PROGRAM</span> HitungLuasSegitiga
<span class=\"code-kw\">DEKLARASI</span>:
  alas, tinggi, luas : <span class=\"code-type\">real</span>

<span class=\"code-kw\">ALGORITMA</span>:
  <span class=\"code-fn\">read</span>(alas)
  <span class=\"code-fn\">read</span>(tinggi)
  luas &larr; 0.5 * alas * tinggi
  <span class=\"code-fn\">write</span>(luas)
<span class=\"code-kw\">END PROGRAM</span></code></pre>
</div>
"""
            },
            {
                "title": "Bedah Jebakan Soal UTS & Tips Menjawab",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>⚠️ Jebakan Soal UTS Khas Unindra:</strong><br>
  <em>\"Apakah sebuah algoritma wajib memiliki masukan (input)?\"</em><br>
  <strong>Jawaban Salah:</strong> Ya, harus memiliki masukan.<br>
  <strong>Jawaban Benar & Pembahasan Sempurna:</strong> <strong>TIDAK WAJIB.</strong> Syarat Knuth menyatakan jumlah input adalah <strong>nol atau lebih (&ge; 0)</strong>. Contoh: algoritma pembangkit bilangan acak seed statis atau program penampil teks \"Hello World\" memiliki 0 masukan namun tetap sah sebagai algoritma. Sebaliknya, <strong>output WAJIB minimal satu (&ge; 1)</strong>.
</div>
"""
            }
        ],
        "references": [
            "Knuth, Donald E. (1997). The Art of Computer Programming, Vol. 1: Fundamental Algorithms (3rd ed.). Addison-Wesley.",
            "Wirth, Niklaus. (1976). Algorithms + Data Structures = Programs. Prentice-Hall.",
            "Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2022). Introduction to Algorithms (4th ed.). MIT Press.",
            "Silabus Resmi Mata Kuliah Algoritma & Pemrograman 1, Program Studi Sistem Informasi Unindra (2026)."
        ]
    },
    {
        "meeting_no": 2,
        "filename": "algo_p2_panduan_guru_ai",
        "title": "Master Guide: Tipe Data, Variabel, Konstanta & Presedensi Operator Komputasi",
        "subject_name": "Algoritma 1",
        "lecturer": "Pak Rizki / Tim Dosen Algoritma FTIK",
        "sections": [
            {
                "title": "The Big Picture: Memori Komputer, Variabel, dan Wadah Data",
                "content_html": """
<p>Dalam arsitektur Von Neumann, memori utama (RAM) adalah deretan sel biner beralamat heksadesimal (misal: <code>0x7FFE001A</code>). Manusia mustahil mengingat alamat acak tersebut saat menulis program. Di sinilah peran <strong>Variabel</strong> sebagai label simbolik yang manusiawi untuk memesan dan merujuk lokasi memori tersebut.</p>
<div class=\"grid-2\">
  <div class=\"card\">
    <strong>Variabel (Variable):</strong><br>
    Pengenal (identifier) di memori yang nilainya <strong>dapat berubah-ubah</strong> secara dinamis sepanjang eksekusi program. Contoh: <code>counter &larr; counter + 1</code>.
  </div>
  <div class=\"card\">
    <strong>Konstanta (Constant):</strong><br>
    Pengenal di memori yang nilainya <strong>dikunci permanen (read-only)</strong> sejak deklarasi awal. Contoh: <code>PI = 3.14159</code>, <code>PPN = 0.11</code>.
  </div>
</div>
"""
            },
            {
                "title": "Klasifikasi Tipe Data Primitif Standar Komputasi",
                "content_html": """
<table>
  <thead><tr><th>Kategori Tipe Data</th><th>Contoh di Pemrograman</th><th>Alokasi Memori Standar</th><th>Rentang Nilai & Domain Karakteristik</th></tr></thead>
  <tbody>
    <tr><td><strong>Integer (Bilangan Bulat)</strong></td><td><code>Integer</code>, <code>Longint</code>, <code>Byte</code></td><td>1 s.d 8 Byte (8 - 64 bit)</td><td>Bilangan bulat tanpa pecahan (..., -2, -1, 0, 1, 2, ...). Operasi pembagian bilangan bulat menghasilkan sisa bagi (modulo).</td></tr>
    <tr><td><strong>Real / Float (Pecahan Desimal)</strong></td><td><code>Real</code>, <code>Single</code>, <code>Double</code></td><td>4 s.d 8 Byte IEEE 754</td><td>Bilangan kontinu dengan pecahan desimal (3.14, -0.005). Memiliki keterbatasan presisi floating-point.</td></tr>
    <tr><td><strong>Character (Karakter Tunggal)</strong></td><td><code>Char</code></td><td>1 Byte (8 bit ASCII)</td><td>Satu simbol grafis yang diapit tanda petik tunggal: <code>'A'</code>, <code>'9'</code>, <code>'$'</code>.</td></tr>
    <tr><td><strong>Boolean (Logika Biner)</strong></td><td><code>Boolean</code></td><td>1 Byte (1 bit efektif)</td><td>Hanya memiliki dua keadaan kebenaran mutlak: <code>TRUE</code> (Benar) atau <code>FALSE</code> (Salah).</td></tr>
    <tr><td><strong>String (Rangkaian Teks)</strong></td><td><code>String</code></td><td>Dinamis (panjang teks + 1)</td><td>Rangkaian karakter: <code>'Universitas Indraprasta PGRI'</code>.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Hierarki Presedensi Operator & Tabel Kebenaran Logika",
                "content_html": """
<p>Ketika sebuah ekspresi matematika mengandung banyak operator sekaligus, komputer mengeksekusinya berdasarkan <strong>Tingkat Presedensi (Precedence Order)</strong>, bukan semata dari kiri ke kanan:</p>
<div class=\"card-dark\">
  <strong>Urutan Prioritas Eksekusi Operator (Tertinggi ke Terendah):</strong>
  <ol style=\"margin: 4px 0; padding-left: 20px; font-size: 7.8pt;\">
    <li>Tanda Kurung <code>( ... )</code> &mdash; Mengabaikan semua urutan di bawahnya.</li>
    <li>Operator Unary & NOT: <code>+</code> (positif), <code>-</code> (negatif), <code>NOT</code>.</li>
    <li>Operator Perkalian & Pembagian: <code>*</code>, <code>/</code>, <code>div</code> (bagi bulat), <code>mod</code> (sisa bagi).</li>
    <li>Operator Penjumlahan & Pengurangan: <code>+</code>, <code>-</code>.</li>
    <li>Operator Relasional / Perbandingan: <code>=</code>, <code>&ne;</code>, <code>&lt;</code>, <code>&le;</code>, <code>&gt;</code>, <code>&ge;</code>.</li>
    <li>Operator Logika AND: <code>AND</code>.</li>
    <li>Operator Logika OR & XOR: <code>OR</code>, <code>XOR</code>.</li>
  </ol>
</div>

<div class=\"card\">
  <strong>Tabel Kebenaran Logika (Truth Table):</strong>
  <table>
    <thead><tr><th>A</th><th>B</th><th>NOT A</th><th>A AND B</th><th>A OR B</th><th>A XOR B</th></tr></thead>
    <tbody>
      <tr><td>TRUE</td><td>TRUE</td><td>FALSE</td><td><strong>TRUE</strong></td><td>TRUE</td><td>FALSE</td></tr>
      <tr><td>TRUE</td><td>FALSE</td><td>FALSE</td><td>FALSE</td><td><strong>TRUE</strong></td><td><strong>TRUE</strong></td></tr>
      <tr><td>FALSE</td><td>TRUE</td><td>TRUE</td><td>FALSE</td><td><strong>TRUE</strong></td><td><strong>TRUE</strong></td></tr>
      <tr><td>FALSE</td><td>FALSE</td><td>TRUE</td><td>FALSE</td><td>FALSE</td><td>FALSE</td></tr>
    </tbody>
  </table>
</div>
"""
            },
            {
                "title": "Contoh Soal Tracing Aritmatika UTS Beserta Pembahasan",
                "content_html": """
<div class=\"card-dark\">
  <span style=\"color: #f59e0b; font-weight: bold;\">Soal Ujian: Tentukan hasil akhir variabel X dari ekspresi berikut jika A = 10, B = 3, C = 2:</span><br>
  <code>X &larr; A + B * C - A mod B * C</code>
  <pre><code><span class=\"code-cmt\">// Langkah Eksekusi Berdasarkan Presedensi:</span>
1. Evaluasi perkalian pertama : B * C = 3 * 2 = 6
2. Evaluasi modulo             : A mod B = 10 mod 3 = 1  (karena 10 / 3 = 3 sisa 1)
3. Evaluasi perkalian kedua    : (A mod B) * C = 1 * 2 = 2
4. Masukkan kembali ke ekspresi: X = 10 + 6 - 2
5. Evaluasi dari kiri ke kanan : 16 - 2 = 14
<span class=\"code-str\">Hasil Akhir: X = 14</span></code></pre>
</div>
"""
            }
        ],
        "references": [
            "Brookshear, J. G., & Brylow, D. (2019). Computer Science: An Overview (13th ed.). Pearson.",
            "Kernighan, B. W., & Ritchie, D. M. (1988). The C Programming Language. Prentice Hall.",
            "Modul Praktikum Algoritma 1 Pertemuan 2, Laboratorium Komputer FTIK Unindra."
        ]
    },
    {
        "meeting_no": 3,
        "filename": "algo_p3_panduan_guru_ai",
        "title": "Master Guide: Standar Bagan Alir (Flowchart ANSI/ISO), Tracing & Analisis Putaran",
        "subject_name": "Algoritma 1",
        "lecturer": "Pak Rizki / Tim Dosen Algoritma FTIK",
        "sections": [
            {
                "title": "The Big Picture: Bahasa Visual Rekayasa Perangkat Lunak",
                "content_html": """
<p>Bagan Alir (<em>Flowchart</em>) adalah notasi grafis dua dimensi yang menggunakan simbol-simbol geometris baku standar <strong>ANSI (American National Standards Institute)</strong> dan <strong>ISO 5807</strong>. Flowchart berfungsi sebagai dokumen komunikasi lintas disiplin antara analis sistem, pemrogram (programmer), dan pengguna bisnis untuk memvalidasi alur kontrol tanpa terikat sintaks bahasa pemrograman tertentu.</p>
"""
            },
            {
                "title": "Tujuh Simbol Baku Flowchart ANSI & Fungsinya",
                "content_html": """
<table>
  <thead><tr><th>Bentuk Geometri</th><th>Nama Simbol ANSI</th><th>Fungsi Spesifik dalam Eksekusi</th><th>Contoh Penulisan Baku</th></tr></thead>
  <tbody>
    <tr><td><strong>Oval / Kapsul</strong></td><td>Terminator</td><td>Menandai titik awal (<code>START / MULAI</code>) dan titik henti akhir (<code>END / SELESAI</code>) dari program.</td><td><code>[ MULAI ]</code>, <code>[ SELESAI ]</code></td></tr>
    <tr><td><strong>Jajar Genjang</strong></td><td>Input / Output</td><td>Membaca data masukan dari keyboard/file atau mencetak keluaran ke layar/printer.</td><td><code>[/ Input Nilai A, B /]</code>, <code>[/ Cetak Hasil /]</code></td></tr>
    <tr><td><strong>Persegi Panjang</strong></td><td>Process</td><td>Operasi pemrosesan aritmatika, manipulasi data, atau inisialisasi variabel internal.</td><td><code>[ Luas = 0.5 * a * t ]</code>, <code>[ i = i + 1 ]</code></td></tr>
    <tr><td><strong>Belah Ketupat (Diamond)</strong></td><td>Decision</td><td>Pengujian kondisi logika percabangan. Menghasilkan cabang bercabang dua: <code>YA (TRUE)</code> atau <code>TIDAK (FALSE)</code>.</td><td><code>&lt; Apakah Nilai &ge; 70 ? &gt;</code></td></tr>
    <tr><td><strong>Segienam Horisontal</strong></td><td>Preparation</td><td>Inisialisasi atau pengaturan parameter perulangan (pemberian harga awal indeks loop).</td><td><code>[ FOR i = 1 TO 100 ]</code></td></tr>
    <tr><td><strong>Lingkaran Kecil</strong></td><td>On-Page Connector</td><td>Penyambung alur yang terputus pada lembar / halaman yang <strong>sama</strong>.</td><td><code>( A )</code>, <code>( 1 )</code></td></tr>
    <tr><td><strong>Segilima Terbalik</strong></td><td>Off-Page Connector</td><td>Penyambung alur ke lembar / halaman <strong>berbeda</strong>.</td><td><code>&lang; Hal 2 &rang;</code></td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Studi Kasus Analisis: Flowchart Deret Ganjil 1 s.d. 100",
                "content_html": """
<p>Kasus yang dipraktikkan langsung di kelas oleh Pak Rizki adalah algoritma mencetak deret bilangan ganjil dari angka 1 sampai 100. Berikut diagram logika ANSI dan analisis tracing-nya:</p>

<div class=\"grid-2\">
  <div class=\"card-dark\" style=\"font-size: 7.2pt;\">
<pre><code>[ MULAI ] (Oval)
   │
   ▼
[ i = 1 ] (Preparation)
   │
   ├───────────────────────────────┐
   ▼                               │ (Looping Back)
&lt; Apakah i mod 2 = 1 ? &gt; (Decision)│
   ├── YA    ──> [/ Cetak i /]     │
   └── TIDAK ──> (Lewati Cetak)    │
           │                       │
           ▼                       │
     [ i = i + 1 ] (Proses)        │
           │                       │
           ▼                       │
     &lt; Apakah i &gt; 100 ? &gt;          │
           ├── TIDAK ──────────────┘
           └── YA
                 │
                 ▼
           [ SELESAI ] (Oval)</code></pre>
  </div>

  <div class=\"card\">
    <strong>Tabel Tracing Eksekusi (Putaran Demi Putaran):</strong>
    <table>
      <thead><tr><th>Putaran</th><th>Nilai i</th><th>i mod 2 = 1 ?</th><th>Aksi Eksekusi</th><th>i Baru</th><th>i &gt; 100 ?</th></tr></thead>
      <tbody>
        <tr><td><strong>1</strong></td><td>1</td><td>1 mod 2 = 1 (YA)</td><td><strong>Cetak 1</strong></td><td>2</td><td>2 &gt; 100 (TIDAK) &rarr; Loop</td></tr>
        <tr><td><strong>2</strong></td><td>2</td><td>2 mod 2 = 0 (TIDAK)</td><td>Lewati Cetak</td><td>3</td><td>3 &gt; 100 (TIDAK) &rarr; Loop</td></tr>
        <tr><td><strong>3</strong></td><td>3</td><td>3 mod 2 = 1 (YA)</td><td><strong>Cetak 3</strong></td><td>4</td><td>4 &gt; 100 (TIDAK) &rarr; Loop</td></tr>
        <tr><td><strong>...</strong></td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td><strong>99</strong></td><td>99</td><td>99 mod 2 = 1 (YA)</td><td><strong>Cetak 99</strong></td><td>100</td><td>100 &gt; 100 (TIDAK) &rarr; Loop</td></tr>
        <tr><td><strong>100</strong></td><td>100</td><td>100 mod 2 = 0 (TIDAK)</td><td>Lewati Cetak</td><td>101</td><td>101 &gt; 100 (YA) &rarr; <strong>STOP</strong></td></tr>
      </tbody>
    </table>
    <div class=\"alert alert-success\" style=\"margin-top: 4px;\">
      <strong>Optimasi Guru AI:</strong> Algoritma di atas memutar loop sebanyak 100 kali. Logika ini dapat dioptimasi menjadi 50 kali putaran tanpa operator modulo dan tanpa decision tengah dengan mengubah step proses menjadi <code>i = i + 2</code> setelah inisialisasi <code>i = 1</code>.
    </div>
  </div>
</div>
"""
            },
            {
                "title": "Kaidah Mutlak Penggambaran Flowchart Bebas Error",
                "content_html": """
<ol style=\"font-size: 7.9pt;\">
  <li><strong>Arah Aliran Baku:</strong> Alur utama harus mengalir dari <strong>atas ke bawah (top-to-bottom)</strong> atau dari <strong>kiri ke kanan (left-to-right)</strong>.</li>
  <li><strong>Cabang Decision:</strong> Setiap simbol Decision (Belah Ketupat) <strong>WAJIB memiliki minimal 2 jalur keluar</strong> dengan label kebenaran yang jelas (<code>YA/TIDAK</code> atau <code>TRUE/FALSE</code>). Dilarang hanya memiliki satu jalur keluar.</li>
  <li><strong>Dilarang Garis Berpotongan:</strong> Garis alir tidak boleh saling memotong tanpa tanda konektor (Connector).</li>
</ol>
"""
            }
        ],
        "references": [
            "ISO 5807:1985 - Information processing -- Documentation symbols and conventions for data, program and system flowcharts.",
            "ANSI X3.5-1970 - Standard Flowchart Symbols and Their Usage in Information Processing.",
            "Buku Modul Algoritma & Flowcharting, Program Studi Sistem Informasi Unindra (2026)."
        ]
    },
    {
        "meeting_no": 4,
        "filename": "algo_p4_panduan_guru_ai",
        "title": "Master Guide: Struktur Kontrol Percabangan Kompleks & Pemilihan Kondisi",
        "subject_name": "Algoritma 1",
        "lecturer": "Pak Rizki / Tim Dosen Algoritma FTIK",
        "sections": [
            {
                "title": "The Big Picture: Bagaimana Komputer Mengambil Keputusan",
                "content_html": """
<p>Dalam eksekusi sekuensial murni, instruksi dijalankan baris demi baris dari awal hingga akhir. Namun, dunia nyata penuh dengan kondisi selektif: <em>\"Jika nilai &ge; 70 maka lulus, jika tidak maka perbaikan\"</em>. Struktur kontrol percabangan (<em>selection / branching</em>) memberikan kecerdasan adaptif bagi program untuk melompati atau memilih blok instruksi tertentu berdasarkan kebenaran ekspresi logika.</p>
"""
            },
            {
                "title": "Empat Pola Baku Struktur Percabangan Komputasi",
                "content_html": """
<div class=\"grid-2\">
  <div class=\"card\">
    <strong>1. Percabangan Tunggal (IF - THEN)</strong><br>
    Hanya mengeksekusi aksi jika kondisi bernilai <code>TRUE</code>. Jika <code>FALSE</code>, tidak ada aksi alternatif yang dijalankan.
    <pre><code><span class=\"code-kw\">IF</span> (total_belanja &gt; 100000) <span class=\"code-kw\">THEN</span>
  diskon &larr; 0.1 * total_belanja;
<span class=\"code-kw\">END IF</span></code></pre>
  </div>

  <div class=\"card\">
    <strong>2. Percabangan Ganda (IF - THEN - ELSE)</strong><br>
    Menyediakan dua alternatif eksklusif: blok YA jika <code>TRUE</code>, dan blok TIDAK jika <code>FALSE</code>.
    <pre><code><span class=\"code-kw\">IF</span> (nilai &ge; 60) <span class=\"code-kw\">THEN</span>
  status &larr; 'LULUS'
<span class=\"code-kw\">ELSE</span>
  status &larr; 'TIDAK LULUS';
<span class=\"code-kw\">END IF</span></code></pre>
  </div>

  <div class=\"card\">
    <strong>3. Percabangan Majemuk / Bertingkat (Nested IF)</strong><br>
    Kondisi IF di dalam blok IF lainnya untuk menguji hierarki kriteria bersarang.
    <pre><code><span class=\"code-kw\">IF</span> (nilai &ge; 80) <span class=\"code-kw\">THEN</span>
  grade &larr; 'A'
<span class=\"code-kw\">ELSE IF</span> (nilai &ge; 70) <span class=\"code-kw\">THEN</span>
  grade &larr; 'B'
<span class=\"code-kw\">ELSE IF</span> (nilai &ge; 60) <span class=\"code-kw\">THEN</span>
  grade &larr; 'C'
<span class=\"code-kw\">ELSE</span>
  grade &larr; 'E';</code></pre>
  </div>

  <div class=\"card\">
    <strong>4. Pemilihan Multi-Kondisi (CASE - OF)</strong><br>
    Struktur elegan untuk memilih satu dari banyak cabang berdasarkan nilai pencocokan suatu variabel pemilih (<em>selector</em>).
    <pre><code><span class=\"code-kw\">CASE</span> (nomor_hari) <span class=\"code-kw\">OF</span>
  1 : nama &larr; 'Senin';
  2 : nama &larr; 'Selasa';
  3 : nama &larr; 'Rabu';
  <span class=\"code-kw\">ELSE</span> nama &larr; 'Hari Libur';
<span class=\"code-kw\">END CASE</span></code></pre>
  </div>
</div>
"""
            },
            {
                "title": "Analisis Efisiensi: Kapan Memakai IF Bertingkat vs CASE-OF?",
                "content_html": """
<table>
  <thead><tr><th>Parameter Perbandingan</th><th>Struktur IF - ELSE IF Majemuk</th><th>Struktur CASE - OF</th></tr></thead>
  <tbody>
    <tr><td><strong>Tipe Data Kondisi</strong></td><td>Fleksibel: dapat menguji tipe bilangan riil pecahan (<code>Real</code>), rentang interval dinamis (<code>x &gt; 10 AND y &lt; 5</code>), dan logika relasional majemuk.</td><td><strong>Ketat:</strong> Selector <strong>wajib bertipe Ordinal</strong> (Integer, Char, Boolean, Enumerasi). <strong>Dilarang keras memakai tipe Real/Float!</strong></td></tr>
    <tr><td><strong>Evaluasi di CPU</strong></td><td>Linear Search: diuji satu persatu dari atas ke bawah ($O(n)$).</td><td>Jump Table / Branch Table: kompiler dapat mengoptimasi lompatan langsung ($O(1)$).</td></tr>
    <tr><td><strong>Keterbacaan Kode</strong></td><td>Rentan rumit jika cabang bersarang terlalu dalam (<em>Spaghetti Code</em>).</td><td>Sangat bersih, elegan, dan mudah dipelihara (<em>maintainable</em>).</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Jebakan Soal UTS: Error Logika Percabangan",
                "content_html": """
<div class=\"alert alert-danger\">
  <strong>⚠️ Jebakan Urutan Pengujian Kondisi (Condition Ordering):</strong><br>
  Perhatikan kode salah berikut yang sering ditulis mahasiswa:<br>
  <code>IF (nilai &gt;= 60) THEN grade := 'C' ELSE IF (nilai &gt;= 80) THEN grade := 'A';</code><br>
  Jika mahasiswa mendapat nilai 95, maka kondisi pertama (<code>95 &gt;= 60</code>) langsung bernilai TRUE sehingga ia mendapatkan grade 'C'!<br>
  <strong>Kaidah Baku Guru AI:</strong> Pada percabangan rentang bertingkat, pengujian <strong>WAJIB diurutkan dari batas nilai paling ekstrem/tinggi ke batas terendah</strong>, atau sebaliknya dengan pendefinisian interval tertutup yang presisi.
</div>
"""
            }
        ],
        "references": [
            "McConnell, Steve. (2004). Code Complete: A Practical Handbook of Software Construction (2nd ed.). Microsoft Press.",
            "Sedgewick, R., & Wayne, K. (2016). Computer Science: An Interdisciplinary Approach. Addison-Wesley.",
            "Diktat Struktur Kontrol Percabangan, Jurusan Teknik Informatika / Sistem Informasi Unindra."
        ]
    }
]
