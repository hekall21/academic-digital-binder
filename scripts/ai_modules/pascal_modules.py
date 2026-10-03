# -*- coding: utf-8 -*-
"""
Modul Pembelajaran Guru AI: Pemrograman 1 (Pascal) (Pertemuan 1 - 4)
Bedah komprehensif seluruh materi PPT resmi Zaeni Miftah (FTIK Unindra).
Struktur 3 Bagian:
  1. Penjelasan & Bedah Materi Slide/PPT Dosen (Step-by-Step)
  2. Tambahan Materi, Insight First Principles & Saran Guru AI (Paling Bawah)
  3. Sumber Dokumen Perkuliahan & Rujukan Resmi (Paling Bawah)
"""

PASCAL_MEETINGS = [
    {
        "meeting_no": 1,
        "filename": "pascal_p1_panduan_guru_ai",
        "title": "Master Guide: Pengantar Pemrograman, Blok Komputer, Penerjemah Bahasa & Struktur Dasar Pascal",
        "subject_name": "Pemrograman 1 (Pascal)",
        "lecturer": "Zaeni Miftah / Tim Dosen Pemrograman FTIK",
        "doc_filename": "pascal_p1_pengantar_pascal.pdf (Pertemuan 1 1ZaeniPemrogramanPascal.pdf)",
        "slide_count": "19 Slide PPT Resmi Dosen",
        "sections": [
            {
                "title": "Pengantar Pemrograman & Hakikat Komputer (Slide 3 PPT Dosen)",
                "content_html": """
<p>Berdasarkan slide pengantar Pak Zaeni Miftah, istilah <strong>Komputer</strong> berakar dari bahasa Latin <em>Computare</em> yang bermakna \"menghitung\" (<em>to compute / to calculate</em>). Komputer pada mulanya dirancang sebagai alat bantu kalkulasi matematis cepat, namun telah berevolusi menjadi sistem pemroses informasi elektronik digital.</p>
<table>
  <thead><tr><th>Komponen Pembentuk</th><th>Definisi Konseptual</th><th>Fungsi Utama dalam Pemrograman</th></tr></thead>
  <tbody>
    <tr><td><strong>Perangkat Keras (Hardware)</strong></td><td>Komponen fisik elektronik yang dapat disentuh (CPU, RAM, Storage, I/O).</td><td>Mengeksekusi sinyal listrik biner (0 dan 1) sesuai instruksi clock CPU.</td></tr>
    <tr><td><strong>Perangkat Lunak (Software)</strong></td><td>Kumpulan instruksi / program yang mengontrol kerja hardware.</td><td>Memberi petunjuk langkah demi langkah apa yang harus dihitung dan ditampilkan.</td></tr>
    <tr><td><strong>Pemrogram (Programmer)</strong></td><td>Manusia yang menganalisis masalah dan menyusun kode sumber (source code).</td><td>Merancang logika algoritmik agar dapat diterjemahkan ke bahasa mesin.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Blok Dasar Arsitektur Komputer (Slide 4 - 7 PPT Dosen)",
                "content_html": """
<p>Slide 5 menjelaskan bahwa pada dasarnya seluruh jenis komputer di dunia tersusun atas 4 blok subsistem utama yang saling terintegrasi:</p>
<table>
  <thead><tr><th>Blok Dasar Komputer</th><th>Fungsi Utama</th><th>Contoh Perangkat Riil</th><th>Hubungan dengan Kode Pascal</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>1. INPUT (Masukan)</strong></td>
      <td>Menerima data dari pengguna luar untuk dikirim ke dalam memori komputer.</td>
      <td>Keyboard, Mouse, Barcode Scanner, Mikrofon.</td>
      <td>Diwakili oleh instruksi pembacaan data: <code>read</code> dan <code>readln</code>.</td>
    </tr>
    <tr>
      <td><strong>2. PROSES: ALU & CU</strong></td>
      <td><strong>ALU (Arithmetic Logic Unit):</strong> menghitung operasi aritmatika (+, -, *, /) dan logika.<br><strong>CU (Control Unit):</strong> pengendali aliran instruksi dan sinkronisasi seluruh perangkat.</td>
      <td>Microprocessor (Intel Core, AMD Ryzen, Apple Silicon).</td>
      <td>Diwakili oleh operator perhitungan dan struktur percabangan (<code>if ... then</code>).</td>
    </tr>
    <tr>
      <td><strong>3. MEMORY / STORAGE</strong></td>
      <td><strong>RAM:</strong> penyimpanan sementara berkecepatan tinggi.<br><strong>Secondary Storage:</strong> penyimpanan permanen data & berkas.</td>
      <td>DDR4/DDR5 RAM, SSD NVMe, Harddisk.</td>
      <td>Diwakili oleh deklarasi <strong>variabel</strong> (<code>var</code>) dan <strong>konstanta</strong> (<code>const</code>).</td>
    </tr>
    <tr>
      <td><strong>4. OUTPUT (Keluaran)</strong></td>
      <td>Menampilkan atau memproduksi hasil pengolahan data kepada pengguna.</td>
      <td>Monitor, Printer, Speaker, Proyektor.</td>
      <td>Diwakili oleh instruksi pencetakan data: <code>write</code> dan <code>writeln</code>.</td>
    </tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Tingkatan Bahasa Pemrograman: Mesin, Assembly & Tingkat Tinggi (Slide 8 - 9 PPT Dosen)",
                "content_html": """
<p>Komputer hanya memahami bahasa mesin berbentuk sinyal biner. Oleh karena itu, perkembangan bahasa pemrograman dibagi ke dalam tiga generasi tingkatan:</p>
<table>
  <thead><tr><th>Tingkatan Bahasa</th><th>Karakteristik & Format Notasi</th><th>Kelebihan</th><th>Kelemahan</th><th>Contoh Bahasa</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>1. Bahasa Mesin (Machine Language)</strong></td>
      <td>Instruksi biner murni berupa angka <code>0</code> dan <code>1</code> yang langsung diproses transistor CPU.</td>
      <td>Eksekusi tercepat tanpa proses translasi apapun.</td>
      <td>Sangat sulit dipahami manusia; rawan kesalahan fatal.</td>
      <td>Kode biner CPU (opcode hex/biner).</td>
    </tr>
    <tr>
      <td><strong>2. Bahasa Tingkat Rendah (Low-Level / Assembly)</strong></td>
      <td>Menggunakan kode mnemonik singkat yang mewakili instruksi mesin langsung.</td>
      <td>Sangat hemat memori dan memiliki kontrol perangkat keras mutlak.</td>
      <td>Terikat kuat pada arsitektur prosesor tertentu (tidak portabel).</td>
      <td>Bahasa Assembly (NASM, MASM, TASM).</td>
    </tr>
    <tr>
      <td><strong>3. Bahasa Tingkat Tinggi (High-Level Language)</strong></td>
      <td>Menggunakan kosakata bahasa manusia (bahasa Inggris) seperti <code>begin</code>, <code>if</code>, <code>write</code>.</td>
      <td>Mudah dipelajari, dibaca, dan dipindahkan antar sistem (portabel).</td>
      <td>Membutuhkan program penerjemah (kompiler / interpreter) ke bahasa mesin.</td>
      <td><strong>Pascal</strong>, C, C++, Java, Python, Go.</td>
    </tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Penerjemah Bahasa: Interpreter vs Kompiler (Slide 10 - 11 PPT Dosen)",
                "content_html": """
<p>Slide 10 menerangkan bagaimana program yang ditulis programmer diubah menjadi bahasa mesin:</p>
<table>
  <thead><tr><th>Parameter Pembeda</th><th>Kompiler (Compiler) - Digunakan Pascal</th><th>Interpreter (Penerjemah Langsung)</th></tr></thead>
  <tbody>
    <tr><td><strong>Mekanisme Kerja</strong></td><td>Menerjemahkan <strong>seluruh kode sumber sekaligus</strong> ke dalam berkas mesin executable (<code>.exe</code>).</td><td>Menerjemahkan dan mengeksekusi instruksi <strong>baris demi baris secara berurutan</strong>.</td></tr>
    <tr><td><strong>Penanganan Kesalahan (Error)</strong></td><td>Jika ada 1 saja kesalahan sintaks, program tidak dapat dikompilasi hingga seluruhnya diperbaiki.</td><td>Program langsung berjalan; eksekusi terhenti seketika saat menemukan baris yang bermasalah.</td></tr>
    <tr><td><strong>Kecepatan Eksekusi</strong></td><td>Sangat cepat saat dijalankan berulang kali karena sudah berbentuk berkas biner mandiri.</td><td>Lebih lambat karena setiap kali dijalankan harus melalui proses penerjemahan ulang.</td></tr>
    <tr><td><strong>Contoh Bahasa</strong></td><td><strong>Pascal (Free Pascal / Turbo Pascal)</strong>, C, C++, Rust, Go.</td><td>Python, JavaScript, PHP, Ruby.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Sejarah & Filosofi Bahasa Pascal (Slide 12 - 13 PPT Dosen)",
                "content_html": """
<p>Slide 12-13 menguraikan tonggak sejarah lahirnya Pascal:</p>
<ul>
  <li><strong>Pencipta:</strong> Dirancang oleh <strong>Prof. Niklaus Wirth</strong> di Federal Institute of Technology (ETH) Zurich, Swiss pada tahun 1971.</li>
  <li><strong>Asal Nama:</strong> Diambil dari nama <strong>Blaise Pascal</strong> (1623–1662), matematikawan dan fisikawan Prancis penemu kalkulator mekanik pertama di dunia yang disebut <em>Pascaline</em>.</li>
  <li><strong>Tujuan Perancangan:</strong> Diciptakan khusus sebagai bahasa untuk <strong>mengajarkan konsep pemrograman terstruktur (Structured Programming)</strong> secara disiplin bagi mahasiswa komputasi.</li>
  <li><strong>Era Turbo Pascal:</strong> Pada tahun 1983, Borland International meluncurkan <strong>Turbo Pascal</strong> yang merevolusi dunia TI karena memiliki Integrated Development Environment (IDE) terpadu dengan kecepatan kompilasi luar biasa.</li>
</ul>
"""
            },
            {
                "title": "Tiga Blok Anatomi Struktur Program Pascal (Slide 14 - 15 PPT Dosen)",
                "content_html": """
<p>Sesuai modul perkuliahan FTIK Unindra, program Pascal wajib memiliki struktur tiga blok berurutan:</p>
<table>
  <thead><tr><th>Bagian Blok Program</th><th>Kata Kunci Penanda</th><th>Deskripsi & Aturan Penulisan</th><th>Contoh Kode</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>1. Judul Program (Header)</strong></td>
      <td><code>program &lt;nama&gt;;</code></td>
      <td>Memberi nama identitas program. Nama tidak boleh berspasi dan wajib diakhiri titik koma (;).</td>
      <td><code>program TampilBiodata;</code></td>
    </tr>
    <tr>
      <td><strong>2. Bagian Deklarasi</strong></td>
      <td><code>uses</code>, <code>const</code>, <code>type</code>, <code>var</code></td>
      <td>Mendaftarkan unit modul pustaka (misal: <code>uses crt;</code>), mendeklarasikan konstanta, dan memesan tipe variabel ke memori RAM.</td>
      <td><code>uses crt;<br>var nama: string;<br>    umur: integer;</code></td>
    </tr>
    <tr>
      <td><strong>3. Bagian Pernyataan (Body)</strong></td>
      <td><code>begin ... end.</code></td>
      <td>Blok eksekusi tempat instruksi algoritmik dijalankan oleh CPU baris demi baris. Diawali <code>begin</code> dan <strong>MUTLAK DIAKHIRI <code>end.</code> (titik)</strong>.</td>
      <td><code>begin<br>  clrscr;<br>  writeln('Halo');<br>  readln;<br>end.</code></td>
    </tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Bedah Contoh Program Lengkap Dosen: tampilNama (Slide 16 - 18 PPT Dosen)",
                "content_html": """
<p>Berikut adalah kode program resmi yang dicontohkan Pak Zaeni pada slide 16 dan 18 beserta pembedahan barisnya:</p>
<div class=\"card-dark\">
  <span style=\"color: #38bdf8; font-weight: bold;\">// Program tampilNama (Slide 18 Modul Dosen):</span>
  <pre><code><span class=\"code-kw\">program</span> tampilNama;       <span class=\"code-cmt\">{ Judul Program }</span>
<span class=\"code-kw\">uses</span> crt;                 <span class=\"code-cmt\">{ Panggil unit CRT untuk manajemen layar terminal }</span>

<span class=\"code-kw\">begin</span>
  clrscr;                 <span class=\"code-cmt\">{ Clear Screen: Bersihkan layar console }</span>
  writeln(<span class=\"code-str\">'Nama Saya: Zaeni Miftah'</span>);
  writeln(<span class=\"code-str\">'Mata Kuliah: Pemrograman 1'</span>);
  readln;                 <span class=\"code-cmt\">{ Menahan tampilan layar console sebelum program keluar }</span>
<span class=\"code-kw\">end</span>.                      <span class=\"code-cmt\">{ Tanda titik menandakan akhir mutlak berkas program }</span></code></pre>
</div>
<p><strong>Pembedahan Alur Logika Dosen:</strong></p>
<ol>
  <li><code>program tampilNama;</code>: Menyatakan kepada OS bahwa berkas ini membentuk satu kesatuan unit executable bernama tampilNama.</li>
  <li><code>uses crt;</code>: Unit runtime library wajib di Unindra agar perintah <code>clrscr</code> dapat berfungsi.</li>
  <li><code>clrscr;</code>: Menghapus output program sebelumnya agar layar terminal bersih saat eksekusi baru dimulai.</li>
  <li><code>writeln(...);</code>: Mencetak string teks ke monitor lalu memindahkan posisi kursor ke baris baru di bawahnya.</li>
  <li><code>readln;</code>: Menunggu mahasiswa menekan tombol Enter pada keyboard sehingga hasil output di layar tidak langsung lenyap menutup sendiri.</li>
  <li><code>end.</code>: Titik setelah end mutlak diperlukan; jika diganti titik koma (<code>end;</code>) kompiler akan menghasilkan error.</li>
</ol>
"""
            }
        ],
        "ai_insights": [
            {
                "title": "Intuisi First Principles: Memori RAM & Mengapa Komputer Butuh Pemrograman",
                "content_html": """
<p>Secara arsitektur mesin Von Neumann, CPU tidak memiliki kecerdasan inisiatif (<em>zero initiative</em>). CPU hanyalah mesin penghitung biner super cepat yang mengeksekusi siklus <em>Fetch-Decode-Execute</em>. Kode sumber Pascal yang kita tulis adalah jembatan logika agar otak manusia dapat memerintah jutaan saklar transistor mikroskopis di dalam CPU secara tertib dan terstruktur.</p>
"""
            },
            {
                "title": "Tips Belajar, Praktikum Lab & Bedah Jebakan UTS Pemrograman 1",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>🎯 Bedah Jebakan Ujian Khas Pemrograman 1:</strong><br>
  <strong>1. Perbedaan Tanda Akhir:</strong> Penutup program utama WAJIB menggunakan <strong>tanda titik (<code>end.</code>)</strong>. Sedangkan penutup blok percabangan/perulangan majemuk menggunakan <strong>titik koma (<code>end;</code>)</strong>.<br>
  <strong>2. Lupa Unit CRT:</strong> Menggunakan perintah <code>clrscr;</code> tanpa menuliskan <code>uses crt;</code> di bagian deklarasi akan menyebabkan error kompilasi: <em>\"Identifier not found: clrscr\"</em>.<br>
  <strong>3. Sifat Case-Insensitive:</strong> Pascal bersifat tidak membedakan huruf besar dan kecil (<em>case-insensitive</em>). Penulisan <code>WRITELN</code>, <code>writeln</code>, dan <code>WriteLn</code> dianggap identik oleh kompiler.
</div>
"""
            }
        ],
        "references": [
            "Berkas Resmi Perkuliahan: pascal_p1_pengantar_pascal.pdf (Pertemuan 1 1ZaeniPemrogramanPascal.pdf, 19 Slide PPT Zaeni Miftah, FTIK Unindra).",
            "Wirth, Niklaus. (1976). Algorithms + Data Structures = Programs. Prentice-Hall.",
            "Jogiyanto, H.M. (2005). Teori dan Aplikasi Program Komputer Bahasa Pascal. Yogyakarta: Andi Offset.",
            "Silabus Resmi Mata Kuliah Pemrograman 1, Program Studi Sistem Informasi FTIK Unindra (2026)."
        ]
    },
    {
        "meeting_no": 2,
        "filename": "pascal_p2_panduan_guru_ai",
        "title": "Master Guide: Variabel, Konstanta, 4 Tipe Data Dasar & Klasifikasi Operator Pascal",
        "subject_name": "Pemrograman 1 (Pascal)",
        "lecturer": "Zaeni Miftah / Tim Dosen Pemrograman FTIK",
        "doc_filename": "pascal_p2_variabel_tipe_data.pdf (Pertemuan 2 Variabel Konstanta Tipe Data Operator.pdf)",
        "slide_count": "24 Slide PPT Resmi Dosen",
        "sections": [
            {
                "title": "Konsep Variabel & Aturan Penulisan Identifier (Slide 2 - 3 PPT Dosen)",
                "content_html": """
<p>Slide 2 menjelaskan bahwa <strong>Variabel</strong> adalah penanda identitas (identifier) yang digunakan untuk menampung data di dalam memori komputer, di mana nilainya bersifat dinamis dan dapat berubah-ubah selama program dijalankan.</p>
<p><strong>Aturan Baku Penulisan Identifier Variabel pada Pascal (Slide 3):</strong></p>
<ol>
  <li>Harus diawali dengan <strong>karakter huruf alfabet (A-Z, a-z)</strong> atau garis bawah (<em>underscore</em> <code>_</code>). Tidak boleh diawali angka!</li>
  <li>Karakter berikutnya dapat berupa huruf, angka, atau underscore.</li>
  <li><strong>DILARANG menggunakan spasi</strong>. Untuk nama variabel dua kata, gunakan underscore (misal: <code>total_harga</code>) atau camelCase (<code>totalHarga</code>).</li>
  <li>Dilarang menggunakan simbol khusus atau karakter matematis seperti: <code>! @ # $ % ^ & * ( ) + - = / { } [ ] : ; \" ' &lt; &gt; , . ?</code>.</li>
  <li>Dilarang menggunakan kata kunci baku yang sudah dipesan oleh bahasa Pascal (<em>Reserved Words</em>), seperti <code>program</code>, <code>begin</code>, <code>end</code>, <code>var</code>, <code>const</code>, <code>if</code>, <code>then</code>, <code>while</code>.</li>
</ol>
"""
            },
            {
                "title": "Deklarasi, Pemberian Nilai & Menampilkan Variabel (Slide 3 - 5 PPT Dosen)",
                "content_html": """
<table>
  <thead><tr><th>Operasi Variabel</th><th>Kata Kunci / Sintaks</th><th>Contoh Penulisan Kode</th><th>Keterangan Kompiler</th></tr></thead>
  <tbody>
    <tr><td><strong>1. Deklarasi</strong></td><td><code>var nama: tipe;</code></td><td><code>var umur: integer; nama: string;</code></td><td>Memesan ruang memori RAM berlabel sesuai tipe data yang dialokasikan.</td></tr>
    <tr><td><strong>2. Assignment (Penugasan)</strong></td><td><code>:=</code> (titik dua sama dengan)</td><td><code>umur := 19;<br>nama := 'Budi';</code></td><td>Memasukkan nilai di sebelah kanan ke dalam wadah variabel di sebelah kiri.</td></tr>
    <tr><td><strong>3. Menampilkan Nilai</strong></td><td><code>write / writeln</code></td><td><code>writeln('Umur: ', umur);</code></td><td>Mencetak isi memori variabel ke layar monitor console.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Konsep Konstanta (Constant) (Slide 6 - 7 PPT Dosen)",
                "content_html": """
<p>Slide 6 mendefinisikan <strong>Konstanta</strong> sebagai variabel khusus yang nilainya <strong>bersifat tetap dan tidak dapat diubah-ubah</strong> sepanjang program berjalan setelah diinisialisasi.</p>
<div class=\"card-dark\">
  <pre><code><span class=\"code-kw\">const</span>
  PI = <span class=\"code-num\">3.14159</span>;
  KURS_DOLLAR = <span class=\"code-num\">15500</span>;
  NAMA_TOKO = <span class=\"code-str\">'Minimarket Unindra'</span>;</code></pre>
</div>
<p>Jika seorang pemrogram mencoba mengubah nilai konstanta di dalam blok pernyataan (misal menuliskan <code>PI := 3.15;</code>), kompiler akan menolak dan memunculkan pesan error: <em>\"Variable identifier expected\"</em>.</p>
"""
            },
            {
                "title": "Empat Tipe Data Dasar Pascal & Tipe Bentukan (Slide 8 - 14 PPT Dosen)",
                "content_html": """
<p>Slide 9-14 menguraikan 4 tipe data dasar (primitif) dan tipe data bentukan di dalam Pascal:</p>
<table>
  <thead><tr><th>Tipe Data Dasar</th><th>Definisi & Karakteristik</th><th>Ukuran Memori</th><th>Rentang Nilai</th><th>Contoh Penulisan</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>1. Integer</strong></td>
      <td>Menampung bilangan bulat tanpa pecahan desimal.</td>
      <td>2 Byte (standar) / 4 Byte</td>
      <td>-32.768 s.d 32.767 (Integer) / s.d 2 Miliar (Longint)</td>
      <td><code>10</code>, <code>-25</code>, <code>1500</code></td>
    </tr>
    <tr>
      <td><strong>2. Real</strong></td>
      <td>Menampung bilangan pecahan atau angka berkoma desimal (ditulis dengan titik desimal).</td>
      <td>4 s.d 8 Byte</td>
      <td>1.5E-45 s.d 3.4E+38</td>
      <td><code>3.14</code>, <code>0.005</code>, <code>-12.75</code></td>
    </tr>
    <tr>
      <td><strong>3. Char (Karakter)</strong></td>
      <td>Menampung satu karakter alfabet, angka, atau simbol tunggal. Wajib diapit tanda petik satu (<code>' '</code>).</td>
      <td>1 Byte (8 bit)</td>
      <td>256 karakter kode ASCII (0..255)</td>
      <td><code>'A'</code>, <code>'8'</code>, <code>'%'</code>, <code>' '</code></td>
    </tr>
    <tr>
      <td><strong>4. Boolean</strong></td>
      <td>Tipe data logika yang hanya mengenal dua nilai kebenaran.</td>
      <td>1 Byte</td>
      <td><code>True</code> (Benar) atau <code>False</code> (Salah)</td>
      <td><code>status := True;</code></td>
    </tr>
    <tr>
      <td><strong>5. String (Bentukan)</strong></td>
      <td>Kumpulan deretan karakter yang membentuk teks kalimat. Diapit tanda petik tunggal.</td>
      <td>Dinamis (1 s.d 255 byte)</td>
      <td>Teks hingga 255 karakter</td>
      <td><code>'Teknik Informatika'</code></td>
    </tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Klasifikasi Operator Pascal: Assignment, Aritmatika, Relasional & Logika (Slide 15 - 21 PPT Dosen)",
                "content_html": """
<p>Slide 15 mendefinisikan <strong>Operator</strong> sebagai simbol atau tanda yang diletakkan di antara operand untuk melakukan suatu operasi manipulasi data tertentu:</p>
<table>
  <thead><tr><th>Kelompok Operator</th><th>Simbol Operator</th><th>Makna Operasi</th><th>Contoh Ekspresi</th><th>Hasil</th></tr></thead>
  <tbody>
    <tr><td><strong>Assignment</strong></td><td><code>:=</code></td><td>Penugasan nilai ke variabel</td><td><code>A := 5;</code></td><td>Nilai 5 disimpan di A</td></tr>
    <tr><td rowspan=\"6\"><strong>Aritmatika</strong></td><td><code>+</code></td><td>Penjumlahan</td><td><code>7 + 3</code></td><td><code>10</code></td></tr>
    <tr><td><code>-</code></td><td>Pengurangan</td><td><code>10 - 4</code></td><td><code>6</code></td></tr>
    <tr><td><code>*</code></td><td>Perkalian</td><td><code>5 * 4</code></td><td><code>20</code></td></tr>
    <tr><td><code>/</code></td><td>Pembagian Real (menghasilkan pecahan)</td><td><code>10 / 4</code></td><td><code>2.5</code> (Tipe Real)</td></tr>
    <tr><td><code>div</code></td><td>Pembagian Bulat (membuang sisa pecahan)</td><td><code>10 div 4</code></td><td><code>2</code> (Tipe Integer)</td></tr>
    <tr><td><code>mod</code></td><td>Sisa Pembagian (Modulo)</td><td><code>10 mod 4</code></td><td><code>2</code> (Tipe Integer)</td></tr>
    <tr><td rowspan=\"6\"><strong>Relasional (Perbandingan)</strong></td><td><code>=</code></td><td>Sama dengan</td><td><code>5 = 5</code></td><td><code>True</code></td></tr>
    <tr><td><code>&lt;&gt;</code></td><td>Tidak sama dengan</td><td><code>5 &lt;&gt; 3</code></td><td><code>True</code></td></tr>
    <tr><td><code>&lt;</code>, <code>&gt;</code></td><td>Kurang dari, Lebih dari</td><td><code>4 &lt; 2</code></td><td><code>False</code></td></tr>
    <tr><td><code>&lt;=</code>, <code>&gt;=</code></td><td>Kurang dari sama dengan, Lebih dari sama dengan</td><td><code>7 &gt;= 7</code></td><td><code>True</code></td></tr>
    <tr><td><code>NOT</code></td><td>Negasi / Kebalikan nilai logika</td><td><code>NOT True</code></td><td><code>False</code></td></tr>
    <tr><td><code>AND</code>, <code>OR</code></td><td>Konjungsi dan Disjungsi logika</td><td><code>(5 &gt; 2) AND (3 &lt; 1)</code></td><td><code>False</code></td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Urutan Prioritas / Presedensi Operator Pascal (Slide 22 PPT Dosen)",
                "content_html": """
<p>Slide 22 menyajikan urutan tingkatan prioritas evaluasi operator saat beberapa operator berada dalam satu baris ekspresi:</p>
<table>
  <thead><tr><th>Tingkat Prioritas</th><th>Kelompok Operator</th><th>Simbol Operator</th><th>Urutan Pengerjaan</th></tr></thead>
  <tbody>
    <tr><td><strong>Prioritas 1 (Tertinggi)</strong></td><td>Tanda Kurung</td><td><code>( ... )</code></td><td>Dikerjakan pertama kali, mulai dari kurung terdalam</td></tr>
    <tr><td><strong>Prioritas 2</strong></td><td>Operator NOT & Unary</td><td><code>NOT</code>, tanda minus <code>-</code></td><td>Dikerjakan sebelum perkalian</td></tr>
    <tr><td><strong>Prioritas 3</strong></td><td>Operator Perkalian & Pembagian</td><td><code>*</code>, <code>/</code>, <code>div</code>, <code>mod</code>, <code>AND</code></td><td>Dikerjakan dari kiri ke kanan</td></tr>
    <tr><td><strong>Prioritas 4</strong></td><td>Operator Penjumlahan & Pengurangan</td><td><code>+</code>, <code>-</code>, <code>OR</code></td><td>Dikerjakan dari kiri ke kanan</td></tr>
    <tr><td><strong>Prioritas 5 (Terendah)</strong></td><td>Operator Perbandingan / Relasional</td><td><code>=</code>, <code>&lt;&gt;</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code></td><td>Dikerjakan paling akhir untuk menghasilkan Boolean</td></tr>
  </tbody>
</table>
"""
            }
        ],
        "ai_insights": [
            {
                "title": "Intuisi First Principles: Mengapa Operator / Selalu Menghasilkan Tipe Real?",
                "content_html": """
<p>Di bahasa Pascal, operator garis miring biasa (<code>/</code>) didefinisikan secara matematis murni. Meskipun kedua operannya adalah integer murni (misal: <code>4 / 2</code>), hasilnya secara internal bertipe data <strong>Real</strong> (<code>2.0000000000E+00</code>). Jika Anda mencoba menampung hasil <code>4 / 2</code> ke variabel bertipe integer, kompiler akan menolak dengan error <em>\"Type mismatch\"</em>. Untuk pembagian sesama integer yang menghasilkan integer, <strong>selalu gunakan <code>div</code></strong>!</p>
"""
            },
            {
                "title": "Tips Menjawab Soal Kuis & UTS Variabel dan Operator",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>🎯 Bedah Soal Jebakan UTS:</strong><br>
  <strong>Soal:</strong> Tentukan hasil dari evaluasi ekspresi: <code>15 - 3 * 2 + 8 div 2</code><br>
  <strong>Langkah Pengerjaan yang Benar:</strong><br>
  1. Dahulukan perkalian dan pembagian (prioritas tinggi): <code>3 * 2 = 6</code> dan <code>8 div 2 = 4</code>.<br>
  2. Ekspresi menjadi: <code>15 - 6 + 4</code>.<br>
  3. Kerjakan penjumlahan dan pengurangan dari kiri ke kanan: <code>(15 - 6) = 9</code>, lalu <code>9 + 4 = 13</code>.<br>
  <strong>Jawaban Akhir:</strong> <code>13</code>.
</div>
"""
            }
        ],
        "references": [
            "Berkas Resmi Perkuliahan: pascal_p2_variabel_tipe_data.pdf (Pertemuan 2 Variabel Konstanta Tipe Data Operator.pdf, 24 Slide PPT Zaeni Miftah, FTIK Unindra).",
            "Jogiyanto, H.M. (2005). Teori dan Aplikasi Program Komputer Bahasa Pascal. Yogyakarta: Andi Offset.",
            "Silabus Resmi Mata Kuliah Pemrograman 1, Program Studi Sistem Informasi FTIK Unindra (2026)."
        ]
    },
    {
        "meeting_no": 3,
        "filename": "pascal_p3_panduan_guru_ai",
        "title": "Master Guide: Instruksi Input & Output (Write, Writeln, Read, Readln) dan Pemformatan Nilai",
        "subject_name": "Pemrograman 1 (Pascal)",
        "lecturer": "Zaeni Miftah / Tim Dosen Pemrograman FTIK",
        "doc_filename": "pascal_p3_input_output.pdf (Pertemuan 3 Write & Writeln Read & Readln.pdf)",
        "slide_count": "13 Slide PPT Resmi Dosen",
        "sections": [
            {
                "title": "Perbedaan Mendasar Write vs Writeln (Slide 2 - 5 PPT Dosen)",
                "content_html": """
<p>Slide 2 menjelaskan bahwa perintah <code>write</code> dan <code>writeln</code> sama-sama berfungsi untuk menampilkan data (output) ke layar monitor, namun memiliki perbedaan krusial pada <strong>posisi akhir kursor teks</strong>:</p>
<table>
  <thead><tr><th>Perintah Output</th><th>Perilaku Kursor Layar</th><th>Contoh Kode</th><th>Tampilan Hasil di Layar Console</th></tr></thead>
  <tbody>
    <tr>
      <td><strong><code>write(...)</code></strong></td>
      <td>Setelah mencetak teks/nilai, <strong>kursor TETAP BERADA di baris yang sama</strong> (tepat di sebelah karakter terakhir).</td>
      <td><code>write('Nama: ');<br>write('Budi');</code></td>
      <td><code>Nama: Budi</code> (Tersambung dalam 1 baris)</td>
    </tr>
    <tr>
      <td><strong><code>writeln(...)</code></strong></td>
      <td>Setelah mencetak teks/nilai, kursor <strong>OTOMATIS BERPINDAH ke awal baris baru berikutnya</strong> (<em>newline / line feed</em>). Singkatan dari <em>Write Line</em>.</td>
      <td><code>writeln('Nama: ');<br>writeln('Budi');</code></td>
      <td><code>Nama: <br>Budi</code> (Terpisah menjadi 2 baris)</td>
    </tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Pemformatan Bilangan Desimal Real (Formatting Output) (Slide 6 PPT Dosen)",
                "content_html": """
<p>Slide 6 menerangkan cara memformat bilangan pecahan <code>Real</code> agar tidak ditampilkan dalam notasi ilmiah eksponensial standar (misal: <code>3.1400000000E+00</code>):</p>
<div class=\"card-dark\">
  <strong>Rumus Sintaks Pemformatan Real:</strong><br>
  <code>nilai_real : total_lebar_kolom : jumlah_angka_desimal</code>
</div>
<table>
  <thead><tr><th>Contoh Penulisan Kode</th><th>Nilai Riil Awal</th><th>Hasil Tampilan Layar</th><th>Penjelasan</th></tr></thead>
  <tbody>
    <tr><td><code>write(luas);</code></td><td><code>12.5</code></td><td><code>1.25000000000000E+001</code></td><td>Notasi ilmiah eksponensial default kompiler Pascal.</td></tr>
    <tr><td><code>write(luas : 0 : 2);</code></td><td><code>12.5</code></td><td><code>12.50</code></td><td>Dicetak dengan tepat 2 digit angka di belakang koma desimal.</td></tr>
    <tr><td><code>write(luas : 8 : 2);</code></td><td><code>12.5</code></td><td><code>___12.50</code></td><td>Diberi alokasi lebar 8 kolom (rata kanan dengan 3 spasi kosong di depan).</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Instruksi Input: Read vs Readln & Fungsi Penahan Layar (Slide 8 - 10 PPT Dosen)",
                "content_html": """
<p>Slide 8 mendefinisikan <code>read</code> dan <code>readln</code> sebagai perintah untuk membaca input data dari keyboard pengguna ke dalam variabel:</p>
<table>
  <thead><tr><th>Perintah Input</th><th>Perilaku Pembacaan Data</th><th>Contoh Pemakaian Ideal</th></tr></thead>
  <tbody>
    <tr>
      <td><strong><code>read(variabel)</code></strong></td>
      <td>Membaca nilai masukan dari keyboard tanpa memindahkan kursor ke baris baru. Pembacaan berikutnya akan melanjutkan dari sisa baris yang sama.</td>
      <td>Membaca beberapa angka sekaligus dalam satu baris: <code>read(a, b);</code></td>
    </tr>
    <tr>
      <td><strong><code>readln(variabel)</code></strong></td>
      <td>Membaca nilai masukan, menunggu pengguna menekan tombol <strong>Enter</strong>, dan langsung memindahkan kursor ke baris baru berikutnya.</td>
      <td>Formulir interaktif umum: <code>write('Nama: '); readln(nama);</code></td>
    </tr>
    <tr>
      <td><strong><code>readln;</code> (tanpa parameter)</strong></td>
      <td>Menunggu satu ketukan tombol Enter dari pengguna. <strong>Fungsi vital:</strong> Digunakan di baris terakhir sebelum <code>end.</code> untuk <strong>menahan layar console terminal</strong> agar jendela hasil program tidak langsung menutup seketika saat selesai eksekusi.</td>
      <td>Baris wajib di akhir program praktikum Unindra: <code>readln; end.</code></td>
    </tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Bedah Program Praktikum Dosen: Input Biodata & Hitung Nilai (Slide 11 - 12 PPT Dosen)",
                "content_html": """
<div class=\"card-dark\">
  <span style=\"color: #38bdf8; font-weight: bold;\">// Contoh Kode Standar Praktikum Slide 11:</span>
  <pre><code><span class=\"code-kw\">program</span> HitungNilaiAkhir;
<span class=\"code-kw\">uses</span> crt;

<span class=\"code-kw\">var</span>
  nama : <span class=\"code-type\">string</span>;
  nilai_tugas, nilai_uts, nilai_akhir : <span class=\"code-type\">real</span>;

<span class=\"code-kw\">begin</span>
  clrscr;
  writeln(<span class=\"code-str\">'=== PROGRAM PERHITUNGAN NILAI FTIK ==='</span>);
  write(<span class=\"code-str\">'Masukkan Nama Mahasiswa : '</span>); readln(nama);
  write(<span class=\"code-str\">'Masukkan Nilai Tugas     : '</span>); readln(nilai_tugas);
  write(<span class=\"code-str\">'Masukkan Nilai UTS       : '</span>); readln(nilai_uts);

  nilai_akhir := (<span class=\"code-num\">0.4</span> * nilai_tugas) + (<span class=\"code-num\">0.6</span> * nilai_uts);

  writeln;
  writeln(<span class=\"code-str\">'--- HASIL PENGOLAHAN DATA ---'</span>);
  writeln(<span class=\"code-str\">'Mahasiswa Bernama : '</span>, nama);
  writeln(<span class=\"code-str\">'Nilai Akhir       : '</span>, nilai_akhir : <span class=\"code-num\">0</span> : <span class=\"code-num\">2</span>);

  writeln;
  write(<span class=\"code-str\">'Tekan [ENTER] untuk keluar program...'</span>);
  readln;
<span class=\"code-kw\">end</span>.</code></pre>
</div>
"""
            }
        ],
        "ai_insights": [
            {
                "title": "Intuisi First Principles: Mekanisme Buffer Keyboard pada Read vs Readln",
                "content_html": """
<p>Ketika pengguna mengetik di keyboard, karakter tidak langsung dikirim ke variabel, melainkan disimpan di penampung sementara (<em>Keyboard Input Buffer</em>). Perintah <code>read</code> hanya mengambil data yang cocok dan membiarkan karakter <em>newline</em> (Enter) tersisa di dalam buffer. Akibatnya, perintah pembacaan string berikutnya akan langsung menyerap sisa tombol Enter tersebut dan tampak seperti \"melompati\" input (<em>input skipping bug</em>). Karena itu, <strong>selalu prioritaskan penggunaan <code>readln</code></strong> daripada <code>read</code> saat membuat aplikasi interaktif!</p>
"""
            },
            {
                "title": "Tips Belajar & Bedah Jebakan UTS Perintah I/O",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>🎯 Bedah Jebakan Ujian Perintah I/O:</strong><br>
  <strong>1. Memisahkan String dan Variabel:</strong> Di dalam parameter <code>write</code> atau <code>writeln</code>, teks literal wajib diapit petik satu, sedangkan variabel <strong>DILARANG diapit petik</strong> dan harus dipisahkan oleh tanda koma. Contoh benar: <code>writeln('Halo ', nama);</code>. Jika ditulis <code>writeln('Halo nama');</code>, maka teks yang tercetak adalah kata literal \"nama\", bukan isi variabelnya!<br>
  <strong>2. Format Real Tanpa Desimal:</strong> Jika Anda menulis <code>nilai : 5</code> untuk variabel real, kompiler akan tetap menampilkan bentuk eksponensial. Format desimal wajib menyertakan dua titik dua: <code>nilai : total_lebar : desimal</code>.
</div>
"""
            }
        ],
        "references": [
            "Berkas Resmi Perkuliahan: pascal_p3_input_output.pdf (Pertemuan 3 Write & Writeln Read & Readln.pdf, 13 Slide PPT Zaeni Miftah, FTIK Unindra).",
            "Jogiyanto, H.M. (2005). Teori dan Aplikasi Program Komputer Bahasa Pascal. Yogyakarta: Andi Offset.",
            "Silabus Resmi Mata Kuliah Pemrograman 1, Program Studi Sistem Informasi FTIK Unindra (2026)."
        ]
    },
    {
        "meeting_no": 4,
        "filename": "pascal_p4_panduan_guru_ai",
        "title": "Master Guide: Struktur Percabangan Selection IF (IF Tunggal, IF-THEN-ELSE & IF Majemuk)",
        "subject_name": "Pemrograman 1 (Pascal)",
        "lecturer": "Zaeni Miftah / Tim Dosen Pemrograman FTIK",
        "doc_filename": "pascal_p4_percabangan_if.pdf (Pertemuan 4 Pemilihan (Selection) - IF.pdf)",
        "slide_count": "8 Slide PPT Resmi Dosen",
        "sections": [
            {
                "title": "Konsep Dasar Struktur Pemilihan / Percabangan (Slide 2 PPT Dosen)",
                "content_html": """
<p>Slide 2 menjelaskan bahwa dalam pembuatan program nyata, alur eksekusi tidak selalu berjalan lurus runtut dari atas ke bawah. Seringkali komputer harus <strong>memilih salah satu jalur instruksi</strong> berdasarkan terpenuhi atau tidaknya suatu kondisi (<em>decision making</em>).</p>
<div class=\"card card-accent\">
  <strong>Kaidah Dasar Percabangan:</strong><br>
  Kondisi percabangan selalu berupa <strong>Ekspresi Boolean</strong> yang menghasilkan nilai <code>True</code> (Benar) atau <code>False</code> (Salah). Jalur instruksi tertentu hanya akan dikerjakan jika kondisi bernilai <code>True</code>.
</div>
"""
            },
            {
                "title": "Bentuk 1: Percabangan IF Tunggal (Satu Kasus) (Slide 3 PPT Dosen)",
                "content_html": """
<p>IF Tunggal digunakan saat program hanya ingin mengambil tindakan khusus jika kondisi terpenuhi, dan <strong>tidak melakukan tindakan apapun jika kondisi tidak terpenuhi</strong>.</p>
<div class=\"card-dark\">
  <strong>Sintaks Baku IF Tunggal:</strong><br>
  <pre><code><span class=\"code-kw\">if</span> (kondisi) <span class=\"code-kw\">then</span>
  pernyataan;</code></pre>
</div>
<p><strong>Contoh Kasus Dosen:</strong> Program Diskon Belanja. Jika total belanja &ge; 100.000, berikan potongan harga Rp 10.000. Jika di bawah itu, tidak ada potongan.</p>
"""
            },
            {
                "title": "Bentuk 2: Percabangan IF-THEN-ELSE (Dua Kasus) & ATURAN MUTLAK TITIK KOMA (Slide 4 - 5 PPT Dosen)",
                "content_html": """
<p>Slide 4 menerangkan kondisi IF-THEN-ELSE di mana terdapat dua alternatif tindakan: aksi 1 jika kondisi bernilai <code>True</code>, atau aksi 2 jika kondisi bernilai <code>False</code>.</p>
<div class=\"card-dark\">
  <strong>Sintaks Baku IF-THEN-ELSE:</strong><br>
  <pre><code><span class=\"code-kw\">if</span> (kondisi) <span class=\"code-kw\">then</span>
  pernyataan_1          <span class=\"code-cmt\">{ DILARANG MENGGUNAKAN TITIK KOMA (;) DI SINI! }</span>
<span class=\"code-kw\">else</span>
  pernyataan_2;</code></pre>
</div>
<div class=\"alert alert-danger\">
  <strong>🚨 ATURAN EMAS KOMPILER PASCAL:</strong><br>
  Sebelum kata kunci <code>else</code>, <strong>MUTLAK TIDAK BOLEH ADA TANDA TITIK KOMA (;)</strong>!<br>
  Tanda titik koma dianggap oleh kompiler Pascal sebagai akhir dari keseluruhan pernyataan IF. Jika Anda menulis <code>pernyataan_1; else</code>, kompiler akan langsung error dengan pesan: <em>\"Syntax error, ';' expected but 'ELSE' found\"</em>.
</div>
"""
            },
            {
                "title": "Bedah Program Dosen: Penentuan Kelulusan Nilai Siswa (Slide 5 PPT Dosen)",
                "content_html": """
<div class=\"card-dark\">
  <span style=\"color: #38bdf8; font-weight: bold;\">// Program Menentukan Kelulusan (Slide 5 Modul Dosen):</span>
  <pre><code><span class=\"code-kw\">program</span> CekKelulusan;
<span class=\"code-kw\">uses</span> crt;

<span class=\"code-kw\">var</span>
  nilai : <span class=\"code-type\">integer</span>;

<span class=\"code-kw\">begin</span>
  clrscr;
  write(<span class=\"code-str\">'Masukkan Nilai Ujian Siswa (0..100): '</span>);
  readln(nilai);

  <span class=\"code-kw\">if</span> (nilai &gt;= <span class=\"code-num\">60</span>) <span class=\"code-kw\">then</span>
    writeln(<span class=\"code-str\">'SELAMAT, ANDA DINYATAKAN LULUS!'</span>)   <span class=\"code-cmt\">{ Tanpa titik koma }</span>
  <span class=\"code-kw\">else</span>
    writeln(<span class=\"code-str\">'MOHON MAAF, ANDA TIDAK LULUS.'</span>);   <span class=\"code-cmt\">{ Titik koma di penutup akhir }</span>

  readln;
<span class=\"code-kw\">end</span>.</code></pre>
</div>
"""
            },
            {
                "title": "Bentuk 3: Percabangan Majemuk / Bersarang (Nested IF) & Studi Kasus Bilangan Genap/Ganjil (Slide 6 - 7 PPT Dosen)",
                "content_html": """
<p>Slide 6-7 memperlihatkan program untuk menguji sifat bilangan bulat (ganjil/genap) dan pengelompokan grade nilai:</p>
<table>
  <thead><tr><th>Studi Kasus Percabangan</th><th>Kondisi Logika Boolean</th><th>Implementasi Kode Pascal</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>Uji Bilangan Genap / Ganjil</strong></td>
      <td>Bilangan genap jika habis dibagi 2 (sisa bagi / modulo = 0).</td>
      <td><code>if (bil mod 2 = 0) then<br>  writeln('Bilangan Genap')<br>else<br>  writeln('Bilangan Ganjil');</code></td>
    </tr>
    <tr>
      <td><strong>Konversi Grade Nilai Majemuk</strong></td>
      <td>Memiliki lebih dari 2 rentang nilai (Grade A, B, C, D, E).</td>
      <td><code>if (nilai &gt;= 80) then grade := 'A'<br>else if (nilai &gt;= 70) then grade := 'B'<br>else if (nilai &gt;= 60) then grade := 'C'<br>else grade := 'E';</code></td>
    </tr>
    <tr>
      <td><strong>Uji Tahun Kabisat</strong></td>
      <td>Habis dibagi 400 atau (habis dibagi 4 dan tidak habis dibagi 100).</td>
      <td><code>if ((tahun mod 400 = 0) or ((tahun mod 4 = 0) and (tahun mod 100 &lt;&gt; 0))) then writeln('Kabisat');</code></td>
    </tr>
  </tbody>
</table>
"""
            }
        ],
        "ai_insights": [
            {
                "title": "Intuisi First Principles: Blok Majemuk (Begin - End) dalam Percabangan",
                "content_html": """
<p>Secara default, kata kunci <code>then</code> dan <code>else</code> hanya mengikat <strong>satu baris pernyataan tunggal</strong>. Jika Anda ingin mengeksekusi lebih dari satu instruksi di dalam satu cabang (misalnya menghitung potongan, menampilkan pesan, dan mengubah status sekaligus), Anda <strong>WAJIB membungkusnya dengan blok majemuk <code>begin ... end</code></strong>:</p>
<pre><code><span class=\"code-kw\">if</span> (nilai &gt;= <span class=\"code-num\">60</span>) <span class=\"code-kw\">then</span>
<span class=\"code-kw\">begin</span>
  status := <span class=\"code-str\">'Lulus'</span>;
  writeln(<span class=\"code-str\">'Status: '</span>, status);
  poin := poin + <span class=\"code-num\">10</span>;
<span class=\"code-kw\">end</span>                  <span class=\"code-cmt\">{ Perhatikan: TIDAK ADA titik koma sebelum else! }</span>
<span class=\"code-kw\">else</span>
<span class=\"code-kw\">begin</span>
  status := <span class=\"code-str\">'Gagal'</span>;
  writeln(<span class=\"code-str\">'Silakan Remedial'</span>);
<span class=\"code-kw\">end</span>;</code></pre>
"""
            },
            {
                "title": "Tips Menjawab Soal UTS Percabangan IF Pascal",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>🎯 Bedah Jebakan Ujian Soal IF:</strong><br>
  <strong>1. Kesalahan Fatal Tanda Sama Dengan:</strong> Dalam kondisi IF, operator perbandingan sama dengan ditulis dengan tanda sama dengan tunggal <code>=</code> (contoh: <code>if a = 5 then</code>), <strong>BUKAN</strong> operator assignment <code>:=</code>!<br>
  <strong>2. Tanda Kurung Ekspresi Logika Majemuk:</strong> Jika menggabungkan dua kondisi dengan operator <code>AND</code> atau <code>OR</code>, setiap kondisi <strong>WAJIB diapit tanda kurung</strong>. Contoh benar: <code>if (a &gt; 5) and (b &lt; 10) then</code>. Jika kurung dihilangkan (<code>if a &gt; 5 and b &lt; 10 then</code>), kompiler akan error karena operator <code>and</code> memiliki presedensi lebih tinggi daripada <code>&gt;</code>!
</div>
"""
            }
        ],
        "references": [
            "Berkas Resmi Perkuliahan: pascal_p4_percabangan_if.pdf (Pertemuan 4 Pemilihan (Selection) - IF.pdf, 8 Slide PPT Zaeni Miftah, FTIK Unindra).",
            "Jogiyanto, H.M. (2005). Teori dan Aplikasi Program Komputer Bahasa Pascal. Yogyakarta: Andi Offset.",
            "Silabus Resmi Mata Kuliah Pemrograman 1, Program Studi Sistem Informasi FTIK Unindra (2026)."
        ]
    }
]
