# -*- coding: utf-8 -*-
"""
Modul Pembelajaran Guru AI: Pemrograman 1 (Pascal) (Pertemuan 1 - 4)
"""

PASCAL_MEETINGS = [
    {
        "meeting_no": 1,
        "filename": "pascal_p1_panduan_guru_ai",
        "title": "Master Guide: Anatomi Bahasa Pascal, Struktur Blok & Kompiler Modern",
        "subject_name": "Pemrograman 1 (Pascal)",
        "lecturer": "Pak Rizki / Tim Dosen Pemrograman FTIK",
        "sections": [
            {
                "title": "The Big Picture: Sejarah & Filosofi Bahasa Pascal",
                "content_html": """
<p>Bahasa Pascal dirancang oleh <strong>Prof. Niklaus Wirth</strong> di ETH Zurich pada tahun 1970. Nama \"Pascal\" diambil sebagai penghormatan kepada matematikawan Prancis abad ke-17, <strong>Blaise Pascal</strong>, penemu mesin hitung mekanis pertama (<em>Pascaline</em>).</p>
<div class=\"card card-accent\">
  <strong>Filosofi Rancangan Niklaus Wirth:</strong><br>
  Pascal diciptakan khusus sebagai bahasa untuk <strong>mengajarkan pemrograman terstruktur (Structured Programming)</strong> secara disiplin. Struktur sintaksnya yang tegas dan ketat (<em>strict</em>) memaksa mahasiswa menulis kode yang bersih, terdokumentasi, dan bebas dari lompatan tak tentu (<em>spaghetti code</em>) sebelum melangkah ke bahasa industri seperti C++, Java, atau Rust.
</div>
"""
            },
            {
                "title": "Tiga Blok Anatomi Program Baku Pascal",
                "content_html": """
<div class=\"grid-3\">
  <div class=\"card\">
    <strong>1. Kepala Program (Heading)</strong><br>
    Diawali kata kunci <code>program</code> diikuti nama pengenal program dan diakhiri titik koma (<code>;</code>). Sifatnya opsional di compiler modern namun wajib dalam etika akademik Unindra.
  </div>
  <div class=\"card\">
    <strong>2. Bagian Deklarasi</strong><br>
    Wadah pendaftaran komponen sebelum dieksekusi: unit library (<code>uses</code>), konstanta (<code>const</code>), tipe bentukan (<code>type</code>), dan variabel (<code>var</code>).
  </div>
  <div class=\"card\">
    <strong>3. Bagian Pernyataan (Body)</strong><br>
    Blok instruksi utama yang diapit pasangan kata kunci <code>begin</code> dan diakhiri <strong><code>end.</code> (titik mutlak penutup program)</strong>.
  </div>
</div>

<div class=\"card-dark\">
  <span style=\"color: #38bdf8; font-weight: bold;\">// Kerangka Program Pascal Baku Sesuai Standar Dosen:</span>
  <pre><code><span class=\"code-kw\">program</span> KerangkaProgramBaku;
<span class=\"code-kw\">uses</span> crt;          <span class=\"code-cmt\">{ Memanggil unit crt untuk manipulasi layar console }</span>

<span class=\"code-kw\">const</span>
  KAMPUS = <span class=\"code-str\">'UNINDRA PGRI'</span>;  <span class=\"code-cmt\">{ Deklarasi nilai konstan }</span>

<span class=\"code-kw\">var</span>
  nama_mhs : <span class=\"code-type\">string</span>;       <span class=\"code-cmt\">{ Deklarasi variabel penampung data }</span>

<span class=\"code-kw\">begin</span>
  clrscr;                  <span class=\"code-cmt\">{ Membersihkan layar console terminal }</span>
  writeln(<span class=\"code-str\">'Selamat Datang di '</span>, KAMPUS);
  write(<span class=\"code-str\">'Masukkan Nama Anda: '</span>);
  readln(nama_mhs);
  writeln(<span class=\"code-str\">'Halo, '</span>, nama_mhs, <span class=\"code-str\">'! Sukses Praktikum Pascal.'</span>);
  readln;                  <span class=\"code-cmt\">{ Menahan tampilan console agar tidak langsung tertutup }</span>
<span class=\"code-kw\">end</span>.</code></pre>
</div>
"""
            },
            {
                "title": "Kompiler Turbo Pascal vs Free Pascal (FPC)",
                "content_html": """
<table>
  <thead><tr><th>Fitur Kompiler</th><th>Turbo Pascal 7.0 (Borland Clasic)</th><th>Free Pascal Compiler (FPC / Lazarus Modern)</th></tr></thead>
  <tbody>
    <tr><td><strong>Arsitektur Sistem</strong></td><td>16-bit MS-DOS (memerlukan emulator DOSBox di Windows 64-bit).</td><td><strong>32-bit / 64-bit Native</strong> (berjalan langsung di Windows 10/11, Linux, macOS).</td></tr>
    <tr><td><strong>Batas Alokasi Memori</strong></td><td>Terbatas segmen 64 KB per variabel (arsitektur real mode DOS).</td><td>Memori tak terbatas mengikuti kapasitas RAM fisik sistem (gigabyte).</td></tr>
    <tr><td><strong>Tipe Integer 64-bit</strong></td><td>Tidak mendukung tipe <code>Int64</code>.</td><td>Mendukung penuh <code>Int64</code> (rentang hingga &plusmn; 9,22 &times; 10<sup>18</sup>).</td></tr>
    <tr><td><strong>Perintah Wajib Eksekusi</strong></td><td>Wajib <code>readln;</code> sebelum <code>end.</code> agar jendela output tidak langsung hilang.</td><td>Tetap disarankan memakai <code>readln;</code> untuk kompatibilitas praktikum di CLI.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Tips Menjawab Soal Teori UTS Pemrograman 1",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>⚠️ Jebakan Titik Penutup:</strong><br>
  Semua pernyataan di Pascal diakhiri titik koma (<code>;</code>), <strong>KECUALI baris <code>end</code> paling akhir program yang WAJIB diakhiri tanda TITIK (<code>end.</code>)</strong>. Jika ditulis <code>end;</code> di akhir program, kompiler akan menampilkan pesan fatal: <em>\"Unexpected end of file\"</em> atau <em>\"Fatal: Syntax error, . expected\"</em>.
</div>
"""
            }
        ],
        "references": [
            "Wirth, Niklaus. (1971). The Programming Language Pascal. Acta Informatica, 1(1), 35-63.",
            "Free Pascal Team. (2024). Free Pascal Reference Guide (v3.2.2). Free Pascal Foundation.",
            "Buku Petunjuk Praktikum Pemrograman 1 (Pascal), Laboratorium Komputer FTIK Unindra."
        ]
    },
    {
        "meeting_no": 2,
        "filename": "pascal_p2_panduan_guru_ai",
        "title": "Master Guide: Tipe Data Pascal, Hierarki Memori & Kaidah Identifier",
        "subject_name": "Pemrograman 1 (Pascal)",
        "lecturer": "Pak Rizki / Tim Dosen Pemrograman FTIK",
        "sections": [
            {
                "title": "The Big Picture: Konsep Strongly Typed & Case-Insensitive",
                "content_html": """
<p>Dua karakteristik paling fundamental dari bahasa Pascal yang wajib diresapi setiap mahasiswa:</p>
<div class=\"grid-2\">
  <div class=\"card\">
    <strong>1. Strongly Typed Language:</strong><br>
    Setiap variabel <strong>wajib dideklarasikan tipe datanya secara eksplisit</strong> sebelum blok <code>begin</code>. Kompiler tidak mengizinkan penugasan data yang tidak kompatibel (misal: memasukkan teks ke variabel bertipe bilangan bulat).
  </div>
  <div class=\"card\">
    <strong>2. Case-Insensitive:</strong><br>
    Pascal <strong>tidak membedakan huruf besar dan huruf kecil</strong>. Variabel <code>TotalGaji</code>, <code>totalgaji</code>, dan <code>TOTALGAJI</code> dianggap sebagai satu entitas yang sama persis oleh kompiler.
  </div>
</div>
"""
            },
            {
                "title": "Kaidah Baku Penamaan Pengenal (Identifier Rules)",
                "content_html": """
<div class=\"card\">
  <strong>Empat Hukum Baku Identifier Pascal:</strong>
  <ol style=\"font-size: 7.8pt;\">
    <li><strong>Karakter Pertama:</strong> Wajib berupa <strong>huruf alfabet (A-Z / a-z) atau garis bawah (underscore <code>_</code>)</strong>. Dilarang diawali angka (contoh salah: <code>1nilai</code>, contoh benar: <code>nilai1</code>, <code>_nilai</code>).</li>
    <li><strong>Karakter Berikutnya:</strong> Boleh berupa kombinasi huruf, angka, dan underscore.</li>
    <li><strong>Dilarang Mengandung Spasi:</strong> Spasi akan dianggap sebagai pemisah token baru. Gunakan underscore (<code>total_bayar</code>) atau CamelCase (<code>totalBayar</code>).</li>
    <li><strong>Dilarang Simbol Khusus & Reserved Words:</strong> Dilarang memakai simbol matematika/karakter unik (<code>+, -, *, /, @, #, $, %</code>) dan kata kunci yang sudah dipesan bahasa (<code>program, begin, end, var, if, then</code>).</li>
  </ol>
</div>
"""
            },
            {
                "title": "Tabel Komprehensif Seluruh Tipe Data Pascal & Rentang Memori",
                "content_html": """
<table>
  <thead><tr><th>Tipe Data</th><th>Ukuran Memori</th><th>Rentang Nilai Valid</th><th>Karakteristik & Kasus Penggunaan Ideal</th></tr></thead>
  <tbody>
    <tr><td><code>Byte</code></td><td>1 Byte (8 bit)</td><td><code>0 s.d 255</code></td><td>Bilangan cacah positif tanpa tanda (usia manusia, tanggal, bulan).</td></tr>
    <tr><td><code>Shortint</code></td><td>1 Byte (8 bit)</td><td><code>-128 s.d 127</code></td><td>Bilangan bulat bertanda skala kecil.</td></tr>
    <tr><td><code>Integer</code></td><td>2 Byte (16 bit)</td><td><code>-32.768 s.d 32.767</code></td><td>Tipe standar bilangan bulat (cacah indeks loop, jumlah barang).</td></tr>
    <tr><td><code>Word</code></td><td>2 Byte (16 bit)</td><td><code>0 s.d 65.535</code></td><td>Bilangan bulat positif 16 bit.</td></tr>
    <tr><td><code>Longint</code></td><td>4 Byte (32 bit)</td><td><code>-2.147.483.648 s.d 2.147.483.647</code></td><td>Bilangan bulat besar (populasi penduduk, nominal uang rupiah).</td></tr>
    <tr><td><code>Int64</code></td><td>8 Byte (64 bit)</td><td>&plusmn; 9,22 &times; 10<sup>18</sup></td><td>Komputasi astronomi, transaksi kriptografi besar.</td></tr>
    <tr><td><code>Real</code></td><td>6 s.d 8 Byte</td><td><code>2.9e-39 s.d 1.7e+38</code></td><td>Bilangan pecahan floating-point desimal (IPK, rata-rata, suhu).</td></tr>
    <tr><td><code>Char</code></td><td>1 Byte</td><td>1 Karakter ASCII</td><td>Satu karakter tunggal: <code>'A'</code>, <code>'B'</code>, <code>'9'</code>.</td></tr>
    <tr><td><code>String</code></td><td>Dinamis</td><td>1 s.d 255 Karakter</td><td>Rangkaian teks yang diapit petik satu: <code>'Haikel Saleh'</code>.</td></tr>
    <tr><td><code>Boolean</code></td><td>1 Byte</td><td><code>TRUE</code> atau <code>FALSE</code></td><td>Pengujian logika biner percabangan dan perulangan.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Jebakan Overflow Tipe Data & Solusi Guru AI",
                "content_html": """
<div class=\"alert alert-danger\">
  <strong>⚠️ Fenomena Integer Overflow:</strong><br>
  Jika sebuah variabel dideklarasikan bertipe <code>Integer</code> (maksimal 32.767) lalu diberi nilai kalkulasi <code>gaji := 50000;</code>, pada kompiler Turbo Pascal akan terjadi <em>Integer Overflow</em> yang menghasilkan angka negatif aneh (misal: <code>-15536</code>)!<br>
  <strong>Solusi Guru AI:</strong> Untuk penampung nominal uang, NPM mahasiswa, atau perkalian ribuan, <strong>selalu gunakan tipe <code>Longint</code> atau <code>Int64</code></strong>.
</div>
"""
            }
        ],
        "references": [
            "ISO/IEC 7185:1990 - Information technology -- Programming languages -- Pascal.",
            "Free Pascal Programmer's Manual (v3.2.2).",
            "Materi Kuliah Tipe Data & Identifier, Laboratorium Teknik Informatika Unindra."
        ]
    },
    {
        "meeting_no": 3,
        "filename": "pascal_p3_panduan_guru_ai",
        "title": "Master Guide: Operasi Input/Output, Assignment & Pemformatan Bilangan Riil",
        "subject_name": "Pemrograman 1 (Pascal)",
        "lecturer": "Pak Rizki / Tim Dosen Pemrograman FTIK",
        "sections": [
            {
                "title": "The Big Picture: Aliran I/O Standard Stream",
                "content_html": """
<p>Sebuah program komputer tidak akan berguna jika tidak mampu berinteraksi dengan dunia luar. Di Pascal, komunikasi antara pemakai (user) dan komputer dikelola melalui dua saluran standar: <strong>Standard Input (Keyboard)</strong> melalui prosedur <code>read/readln</code> dan <strong>Standard Output (Layar Monitor)</strong> melalui prosedur <code>write/writeln</code>.</p>
"""
            },
            {
                "title": "Perbedaan Hakiki: write vs writeln & read vs readln",
                "content_html": """
<div class=\"grid-2\">
  <div class=\"card\">
    <strong>1. Prosedur Output (Mencetak ke Layar):</strong>
    <ul style=\"font-size: 7.7pt;\">
      <li><code>write(x);</code> &mdash; Mencetak nilai <code>x</code> ke layar, dan <strong>kursor TETAP BERADA di baris yang sama</strong> tepat di sebelah karakter terakhir. Cocok untuk membuat prompt input (misal: <code>write('Masukkan Nama : ');</code>).</li>
      <li><code>writeln(x);</code> &mdash; Mencetak nilai <code>x</code> ke layar, kemudian <strong>kursor PINDAH KE BARIS BARU (Line Feed + Carriage Return)</strong>. Perintah <code>writeln;</code> tanpa parameter berfungsi membuat satu baris kosong.</li>
    </ul>
  </div>

  <div class=\"card\">
    <strong>2. Prosedur Input (Membaca dari Keyboard):</strong>
    <ul style=\"font-size: 7.7pt;\">
      <li><code>read(v);</code> &mdash; Membaca masukan karakter dan menyimpannya ke variabel <code>v</code>, namun <strong>TIDAK membuang tombol Enter (karakter enter buffer masih tertinggal)</strong>. Hal ini sering memicu bug pada pembacaan string berikutnya!</li>
      <li><code>readln(v);</code> &mdash; Membaca masukan hingga tombol Enter ditekan dan <strong>SECARA OTOMATIS membersihkan buffer baris masukan</strong>. Inilah prosedur input yang paling direkomendasikan.</li>
    </ul>
  </div>
</div>
"""
            },
            {
                "title": "Operator Penugasan (:=) vs Format Angka Pecahan Real",
                "content_html": """
<p>Dalam Pascal, operator pengisian nilai ke variabel menggunakan simbol titik dua sama dengan <code>:=</code> (<em>Assignment Operator</em>), bukan tanda sama dengan tunggal <code>=</code> (simbol <code>=</code> hanya digunakan untuk konstanta dan perbandingan logika relasional):</p>
<div class=\"card-dark\">
  <pre><code><span class=\"code-kw\">var</span>
  alas, tinggi, luas : <span class=\"code-type\">real</span>;
<span class=\"code-kw\">begin</span>
  alas := 10.5;   <span class=\"code-cmt\">{ Menggunakan := }</span>
  tinggi := 4.2;  <span class=\"code-cmt\">{ Menggunakan := }</span>
  luas := 0.5 * alas * tinggi;</code></pre>
</div>

<div class=\"card\">
  <strong>Sintaks Pemformatan Angka Pecahan Real di Layar:</strong><br>
  Jika dicetak langsung dengan <code>writeln(luas);</code>, Pascal akan menampilkannya dalam notasi eksponensial ilmiah: <code>2.2050000000E+01</code> (sangat sulit dibaca).<br>
  Gunakan rumus format baku: <code>variabel : lebar_kolom : jumlah_desimal</code>
  <pre><code>writeln(<span class=\"code-str\">'Luas Segitiga : '</span>, luas:0:2);  <span class=\"code-cmt\">{ Output bersih: 22.05 }</span></code></pre>
  <span style=\"font-size: 7.5pt; color: #64748b;\">Arti <code>:0:2</code> adalah: gunakan lebar kolom minimal otomatis (0) dan kunci tepat 2 digit angka di belakang koma (2).</span>
</div>
"""
            },
            {
                "title": "Program Lengkap Praktikum I/O Bersih Bebas Error",
                "content_html": """
<div class=\"card-dark\">
  <pre><code><span class=\"code-kw\">program</span> DemoOperasiIO;
<span class=\"code-kw\">uses</span> crt;

<span class=\"code-kw\">var</span>
  nama_barang : <span class=\"code-type\">string</span>[30];
  harga       : <span class=\"code-type\">longint</span>;
  jumlah      : <span class=\"code-type\">integer</span>;
  total_bayar : <span class=\"code-type\">real</span>;

<span class=\"code-kw\">begin</span>
  clrscr;
  writeln(<span class=\"code-str\">'=== TOKO SISTEM INFORMASI UNINDRA ==='</span>);
  write(<span class=\"code-str\">'Nama Produk  : '</span>); readln(nama_barang);
  write(<span class=\"code-str\">'Harga Satuan : Rp '</span>); readln(harga);
  write(<span class=\"code-str\">'Jumlah Beli  : '</span>); readln(jumlah);

  total_bayar := harga * jumlah;

  writeln;
  writeln(<span class=\"code-str\">'--- STRUK PEMBAYARAN KASIR ---'</span>);
  writeln(<span class=\"code-str\">'Barang Dibeli: '</span>, nama_barang);
  writeln(<span class=\"code-str\">'Total Bayar  : Rp '</span>, total_bayar:0:2);
  writeln(<span class=\"code-str\">'===================================='</span>);
  write(<span class=\"code-str\">'Tekan ENTER untuk keluar...'</span>); readln;
<span class=\"code-kw\">end</span>.</code></pre>
</div>
"""
            }
        ],
        "references": [
            "Jensen, K., & Wirth, N. (1974). Pascal User Manual and Report. Springer-Verlag.",
            "Modul Praktikum Operasi Masukan & Keluaran Pascal, FTIK Unindra (2026)."
        ]
    },
    {
        "meeting_no": 4,
        "filename": "pascal_p4_panduan_guru_ai",
        "title": "Master Guide: Struktur Percabangan IF-THEN-ELSE & Studi Kasus Suhu Celcius",
        "subject_name": "Pemrograman 1 (Pascal)",
        "lecturer": "Pak Rizki / Tim Dosen Pemrograman FTIK",
        "sections": [
            {
                "title": "The Big Picture: Logika Keputusan & Jalur Eksekusi",
                "content_html": """
<p>Percabangan <code>if ... then ... else</code> adalah tulang punggung pengambilan keputusan dalam perangkat lunak. Program mengevaluasi ekspresi boolean: jika bernilai <code>TRUE</code>, instruksi di blok <code>then</code> dijalankan; jika <code>FALSE</code>, eksekusi melompat ke blok <code>else</code>.</p>
"""
            },
            {
                "title": "HUKUM KRITIS MUTLAK PASCAL: Aturan Titik Koma Sebelum ELSE",
                "content_html": """
<div class=\"alert alert-danger\">
  <strong>🚨 ATURAN NOMOR SATU PASCAL (WAJIB DIINGAT SEUMUR HIDUP):</strong><br>
  Baris tepat <strong>SEBELUM KATA KUNCI ELSE DILARANG KERAS MENGGUNAKAN TITIK KOMA (;)</strong>!<br>
  Di Pascal, titik koma (<code>;</code>) berfungsi sebagai <em>statement separator</em> (pemisah instruksi utuh). Meletakkan titik koma sebelum <code>else</code> memberi tahu kompiler bahwa blok IF telah selesai, sehingga ketika kompiler membaca kata <code>else</code> yang menggantung tanpa pasangan IF, kompiler akan langsung melempar pesan error fatal:<br>
  <code>Fatal: Syntax error, ; expected but ELSE found</code>
</div>

<div class=\"grid-2\">
  <div class=\"card\" style=\"border-color: #ef4444; background: #fff5f5;\">
    <strong style=\"color: #b91c1c;\">❌ KODE SALAH (MENYEBABKAN ERROR KOMPILASI):</strong>
    <pre style=\"background: #090d16;\"><code><span class=\"code-kw\">if</span> (nilai &gt;= 60) <span class=\"code-kw\">then</span>
  writeln(<span class=\"code-str\">'Anda Lulus'</span>);  <span class=\"code-cmt\">{ &lt;-- SALAH FATAL! ADA TITIK KOMA }</span>
<span class=\"code-kw\">else</span>
  writeln(<span class=\"code-str\">'Anda Tidak Lulus'</span>);</code></pre>
  </div>

  <div class=\"card\" style=\"border-color: #10b981; background: #f0fdf4;\">
    <strong style=\"color: #047857;\">✅ KODE BENAR (KOMPILASI SUKSES 100%):</strong>
    <pre style=\"background: #090d16;\"><code><span class=\"code-kw\">if</span> (nilai &gt;= 60) <span class=\"code-kw\">then</span>
  writeln(<span class=\"code-str\">'Anda Lulus'</span>)   <span class=\"code-cmt\">{ &lt;-- BENAR! TIDAK ADA TITIK KOMA }</span>
<span class=\"code-kw\">else</span>
  writeln(<span class=\"code-str\">'Anda Tidak Lulus'</span>);</code></pre>
  </div>
</div>
"""
            },
            {
                "title": "Penggunaan Blok Pernyataan Majemuk (begin ... end)",
                "content_html": """
<p>Jika di dalam cabang terdapat lebih dari satu baris instruksi yang harus dijalankan, seluruh baris tersebut <strong>wajib dibungkus dengan pasangan kata kunci <code>begin ... end</code></strong>:</p>
<div class=\"card-dark\">
  <pre><code><span class=\"code-kw\">if</span> (nilai &gt;= 60) <span class=\"code-kw\">then</span>
<span class=\"code-kw\">begin</span>
  writeln(<span class=\"code-str\">'Status: Lulus'</span>);
  writeln(<span class=\"code-str\">'Selamat atas kelulusan Anda!'</span>);
<span class=\"code-kw\">end</span>  <span class=\"code-cmt\">{ &lt;-- PERHATIKAN: end DI SINI TIDAK MENGGUNAKAN TITIK KOMA KARENA SEBELUM ELSE! }</span>
<span class=\"code-kw\">else</span>
<span class=\"code-kw\">begin</span>
  writeln(<span class=\"code-str\">'Status: Gagal'</span>);
  writeln(<span class=\"code-str\">'Silakan mengikuti ujian perbaikan semester depan.'</span>);
<span class=\"code-kw\">end</span>; <span class=\"code-cmt\">{ &lt;-- end DI SINI MENGGUNAKAN TITIK KOMA KARENA AKHIR STRUKTUR }</span></code></pre>
</div>
"""
            },
            {
                "title": "Studi Kasus Nyata Mahasiswa: Program Konversi Suhu Celcius (Celcius.pas)",
                "content_html": """
<p>Berikut adalah source code utuh tugas praktikum Pertemuan 4 Muhammad Haikel Saleh (NPM Genap: 202633500386) yang menghitung konversi suhu Celcius ke Reamur dan Fahrenheit lengkap dengan header banner:</p>

<div class=\"card-dark\">
  <pre><code><span class=\"code-kw\">program</span> KonversiSuhuCelcius;
<span class=\"code-kw\">uses</span> crt;

<span class=\"code-kw\">var</span>
  celcius, reamur, fahrenheit : <span class=\"code-type\">real</span>;

<span class=\"code-kw\">begin</span>
  clrscr;
  writeln(<span class=\"code-str\">'========================================='</span>);
  writeln(<span class=\"code-str\">'  PROGRAM KONVERSI SUHU CELCIUS (GENAP)  '</span>);
  writeln(<span class=\"code-str\">'========================================='</span>);
  writeln(<span class=\"code-str\">'NPM  : 202633500386 (Digit Akhir Genap: 6)'</span>);
  writeln(<span class=\"code-str\">'Nama : Muhammad Haikel Saleh'</span>);
  writeln(<span class=\"code-str\">'-----------------------------------------'</span>);

  write(<span class=\"code-str\">'Masukkan Nilai Suhu Celcius (C) : '</span>);
  readln(celcius);

  <span class=\"code-cmt\">{ Rumus konversi suhu baku fisika-komputasi }</span>
  reamur     := (4.0 / 5.0) * celcius;
  fahrenheit := ((9.0 / 5.0) * celcius) + 32.0;

  writeln(<span class=\"code-str\">'-----------------------------------------'</span>);
  writeln(<span class=\"code-str\">'HASIL KONVERSI SUHU:'</span>);
  writeln(<span class=\"code-str\">'Suhu Reamur     (R) : '</span>, reamur:0:2, <span class=\"code-str\">' R'</span>);
  writeln(<span class=\"code-str\">'Suhu Fahrenheit (F) : '</span>, fahrenheit:0:2, <span class=\"code-str\">' F'</span>);
  writeln(<span class=\"code-str\">'========================================='</span>);

  <span class=\"code-cmt\">{ Seleksi evaluasi suhu ekstrem }</span>
  <span class=\"code-kw\">if</span> (celcius &gt;= 100.0) <span class=\"code-kw\">then</span>
    writeln(<span class=\"code-str\">'Status Air: MENDIDIH'</span>)
  <span class=\"code-kw\">else if</span> (celcius &lt;= 0.0) <span class=\"code-kw\">then</span>
    writeln(<span class=\"code-str\">'Status Air: MEMBEKU'</span>)
  <span class=\"code-kw\">else</span>
    writeln(<span class=\"code-str\">'Status Air: CAIR (NORMAL)'</span>);

  writeln;
  write(<span class=\"code-str\">'Tekan ENTER untuk mengakhiri program...'</span>);
  readln;
<span class=\"code-kw\">end</span>.</code></pre>
</div>
"""
            }
        ],
        "references": [
            "Dale, N., & Weems, C. (2000). Pascal (5th ed.). Jones & Bartlett Learning.",
            "Berkas Tugas Praktikum 4 Pascal Mahasiswa, Muhammad Haikel Saleh, NPM 202633500386.",
            "Silabus Resmi Mata Kuliah Praktikum Pemrograman 1, Unindra (2026)."
        ]
    }
]
