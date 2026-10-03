# -*- coding: utf-8 -*-
"""
Modul Pembelajaran Guru AI: Algoritma 1 (Pertemuan 1 - 4)
Bedah komprehensif seluruh materi PPT resmi Algoritma FTIK Unindra.
Struktur 3 Bagian:
  1. Penjelasan & Bedah Materi Slide/PPT Dosen (Step-by-Step)
  2. Tambahan Materi, Insight First Principles & Saran Guru AI (Paling Bawah)
  3. Sumber Dokumen Perkuliahan & Rujukan Resmi (Paling Bawah)
"""

ALGO_MEETINGS = [
    {
        "meeting_no": 1,
        "filename": "algo_p1_panduan_guru_ai",
        "title": "Master Guide: Pengantar Algoritma, Asal Usul Al-Khwarizmi, 5 Kriteria Knuth & 3 Notasi Komputasi",
        "subject_name": "Algoritma 1",
        "lecturer": "Pak Rizki / Tim Dosen Algoritma FTIK",
        "doc_filename": "algo_p1_pengantar_algoritma.pdf (Pengantar Algoritma Pertemuan Ke-1.pdf)",
        "slide_count": "14 Slide PPT Resmi Dosen",
        "sections": [
            {
                "title": "Pengantar & Urgensi Algoritma dalam Informatika (Slide 1 - 3 PPT Dosen)",
                "content_html": """
<p>Slide 3 menjelaskan bahwa <strong>Algoritma adalah jantung dari ilmu komputer atau informatika</strong>. Meskipun sangat identik dengan sistem komputasi, dalam kehidupan sehari-hari manusia sebenarnya telah berulang kali mempraktikkan algoritma tanpa disadari (misalnya resep membuat kue, petunjuk perakitan meja, atau alur transaksi di ATM).</p>
<div class=\"card card-accent\">
  <strong>Aksioma Fundamental Niklaus Wirth (1976):</strong><br>
  <code>Program = Algoritma + Struktur Data</code><br>
  Struktur Data menyediakan wadah penyimpanan informasi (variabel, array, record), sedangkan Algoritma merancang alur logika dan instruksi manipulasi datanya. Keduanya merupakan fondasi mutlak yang tidak terpisahkan.
</div>
"""
            },
            {
                "title": "Asal-Usul Nama & Definisi Baku Algoritma (Slide 4 - 5 PPT Dosen)",
                "content_html": """
<p>Slide 4 menguraikan sejarah kata <em>Algoritma</em> yang berakar dari nama ilmuwan muslim Persia terkemuka pada masa keemasan Islam di Baghdad (abad ke-9 Masehi), yaitu <strong>Abu Ja'far Muhammad bin Musa Al-Khwarizmi</strong> (780–846 M). Bangsa barat melafalkan namanya menjadi <em>Algorism</em> yang kemudian berubah menjadi <em>Algorithm</em>. Beliau juga merupakan peletak dasar aljabar modern melalui kitab legendarisnya <em>Al-Jabr wal-Muqabala</em>.</p>
<div class=\"card-dark\">
  <strong>Definisi Baku Algoritma (Slide 5 Modul Dosen):</strong><br>
  <blockquote style=\"margin: 4px 0 0 0; color: #38bdf8; font-style: italic;\">
    \"Algoritma adalah urutan aksi-aksi yang dinyatakan dengan jelas dan tidak rancu (unambiguous) untuk memecahkan suatu masalah dalam rentang langkah yang berhingga.\"
  </blockquote>
</div>
"""
            },
            {
                "title": "Lima Kriteria Baku Algoritma Menurut Donald E. Knuth (Slide 6 PPT Dosen)",
                "content_html": """
<p>Slide 6 menyajikan 5 syarat mutlak yang dirumuskan oleh pakar ilmu komputer legendaris <strong>Donald E. Knuth</strong> dalam karya monumentalnya <em>The Art of Computer Programming</em> agar sebuah urutan instruksi sah disebut sebagai algoritma:</p>
<table>
  <thead><tr><th>Kriteria Knuth</th><th>Definisi Konseptual Dosen</th><th>Dampak Fatal Jika Dilanggar</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>1. Input (Masukan &ge; 0)</strong></td>
      <td>Algoritma memiliki <strong>nol atau lebih masukan</strong> yang diberikan dari luar sebelum eksekusi dimulai.</td>
      <td>Algoritma tanpa input tetap sah (misal: algoritma penampil teks statis \"Hello World\").</td>
    </tr>
    <tr>
      <td><strong>2. Output (Keluaran &ge; 1)</strong></td>
      <td>Algoritma <strong>WAJIB menghasilkan minimal satu keluaran</strong> yang merupakan solusi dari permasalahan.</td>
      <td>Instruksi yang berjalan tanpa memproduksi hasil apapun adalah operasi komputasi yang sia-sia.</td>
    </tr>
    <tr>
      <td><strong>3. Definiteness (Kepastian)</strong></td>
      <td>Setiap langkah instruksi harus didefinisikan secara tepat, eksplisit, dan <strong>tidak menimbulkan makna ganda (tidak ambigu)</strong>.</td>
      <td>Instruksi samar seperti \"masukkan garam secukupnya\" tidak sah dalam algoritma komputasi.</td>
    </tr>
    <tr>
      <td><strong>4. Finiteness (Keterbatasan)</strong></td>
      <td>Algoritma <strong>harus berhenti (terminate)</strong> setelah mengerjakan sejumlah langkah terhingga.</td>
      <td>Terjadi <em>Infinite Loop</em> (perulangan tak terhingga), konsumsi memori tak terkontrol, dan sistem freeze.</td>
    </tr>
    <tr>
      <td><strong>5. Effectiveness (Efektivitas)</strong></td>
      <td>Setiap instruksi harus sangat sederhana dan mendasar sehingga dapat dikerjakan secara realistis dalam waktu wajar.</td>
      <td>Instruksi mustahil seperti membagi angka dengan nol (<em>division by zero</em>) melanggar asas efektivitas.</td>
    </tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Tiga Jenis Proses Alur Algoritma (Slide 7 PPT Dosen)",
                "content_html": """
<p>Slide 7 membagi seluruh proses penyelesaian masalah dalam algoritma ke dalam 3 jenis bentuk:</p>
<table>
  <thead><tr><th>Jenis Proses Algoritma</th><th>Mekanisme Eksekusi</th><th>Contoh Kasus</th></tr></thead>
  <tbody>
    <tr><td><strong>1. Sequence Process (Runtunan)</strong></td><td>Instruksi dikerjakan secara berurutan baris demi baris, dari baris pertama hingga baris terakhir tanpa ada yang terlewat.</td><td>Menghitung luas segitiga: baca alas &rarr; baca tinggi &rarr; hitung luas &rarr; tampilkan luas.</td></tr>
    <tr><td><strong>2. Selection Process (Pemilihan)</strong></td><td>Instruksi tertentu hanya akan dikerjakan apabila memenuhi persyaratan atau kondisi kriteria tertentu.</td><td>Menentukan kelulusan: jika nilai &ge; 60 maka lulus, jika tidak maka gagal.</td></tr>
    <tr><td><strong>3. Iteration / Repetition Process (Perulangan)</strong></td><td>Instruksi dikerjakan secara berulang-ulang selama suatu kondisi batas pengulangan masih terpenuhi.</td><td>Mencetak deret bilangan 1 sampai 100, pencarian data di database.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Definisi Program, Pemrograman & 3 Cara Penulisan Algoritma (Slide 8 - 9 PPT Dosen)",
                "content_html": """
<p>Slide 8 mendefinisikan <strong>Program</strong> sebagai kumpulan instruksi-instruksi tersendiri (source code) yang dibuat oleh programmer untuk memecahkan masalah. Sedangkan <strong>Pemrograman</strong> adalah proses menulis, menguji, dan memelihara kode tersebut.</p>
<p>Slide 9 menyajikan 3 cara representasi / notasi penulisan algoritma:</p>
<table>
  <thead><tr><th>Notasi Algoritma</th><th>Format Karakteristik</th><th>Kelebihan</th><th>Kelemahan</th></tr></thead>
  <tbody>
    <tr><td><strong>1. Bahasa Natural (Deskriptif)</strong></td><td>Narasi bahasa sehari-hari manusia (Indonesia/Inggris).</td><td>Sangat mudah dipahami orang awam.</td><td>Rentan multitafsir (ambigu) dan panjang bertele-tele.</td></tr>
    <tr><td><strong>2. Flowchart (Diagram Alir)</strong></td><td>Representasi visual menggunakan simbol-simbol bangun datar geometris standar ANSI/ISO.</td><td>Alur logika dan percabangan tampak seketika secara visual.</td><td>Membutuhkan bidang gambar luas; rumit jika logika bersarang banyak.</td></tr>
    <tr><td><strong>3. Pseudocode (Kode Semu)</strong></td><td>Teks terstruktur bergaya bahasa pemrograman tingkat tinggi tanpa terikat sintaks kaku.</td><td>Ringkas, presisi, dan sangat mudah ditranslasikan ke bahasa Pascal, C, atau Python.</td><td>Tidak dapat dieksekusi langsung oleh mesin sebelum diketik ke kode program nyata.</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Studi Kasus Dosen: Menentukan Bilangan Terbesar dari 3 Bilangan (Slide 10 - 12 PPT Dosen)",
                "content_html": """
<p>Slide 10-12 memperlihatkan contoh algoritma untuk menentukan bilangan terbesar di antara 3 buah bilangan masukan (A, B, dan C):</p>
<div class=\"card-dark\">
  <span style=\"color: #38bdf8; font-weight: bold;\">// Algoritma Menentukan Nilai Maksimum (Slide 11):</span>
  <pre><code><span class=\"code-kw\">PROGRAM</span> BilanganTerbesar
<span class=\"code-kw\">DEKLARASI</span>:
  A, B, C, max : <span class=\"code-type\">integer</span>

<span class=\"code-kw\">ALGORITMA</span>:
  <span class=\"code-fn\">read</span>(A, B, C)
  max &larr; A                <span class=\"code-cmt\">{ Asumsikan sementara bahwa A adalah nilai terbesar }</span>
  <span class=\"code-kw\">IF</span> (B &gt; max) <span class=\"code-kw\">THEN</span>
    max &larr; B              <span class=\"code-cmt\">{ Jika ternyata B lebih besar, mutasi max dengan B }</span>
  <span class=\"code-kw\">IF</span> (C &gt; max) <span class=\"code-kw\">THEN</span>
    max &larr; C              <span class=\"code-cmt\">{ Jika ternyata C lebih besar, mutasi max dengan C }</span>
  <span class=\"code-fn\">write</span>(<span class=\"code-str\">'Bilangan Terbesar Adalah: '</span>, max)
<span class=\"code-kw\">END PROGRAM</span></code></pre>
</div>
"""
            }
        ],
        "ai_insights": [
            {
                "title": "Intuisi First Principles: Mengapa Finiteness Sangat Krusial Bagi CPU Komputer",
                "content_html": """
<p>Di balik kriteria <em>Finiteness</em> Donald Knuth tersimpan batasan fisik arsitektur komputasi. Jika sebuah program tidak memiliki kondisi berhenti (<em>halting condition</em>), CPU akan terus mengeksekusi instruksi perulangan pada kecepatan GHz hingga menghabiskan alokasi memori tumpukan (<em>Stack Overflow</em>) atau mengunci alokasi thread sistem operasi. Karena itu, perancangan algoritma wajib menjamin adanya langkah terminasi yang pasti.</p>
"""
            },
            {
                "title": "Tips Menjawab Soal Kuis & UTS Algoritma 1",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>🎯 Bedah Jebakan Ujian Khas Pertemuan 1:</strong><br>
  <strong>Soal Jebakan:</strong> <em>\"Apakah sebuah algoritma yang benar WAJIB memiliki masukan (input) dari pengguna?\"</em><br>
  <strong>Jawaban Salah:</strong> Ya, wajib ada input.<br>
  <strong>Jawaban Benar & Pembahasan Dosen:</strong> <strong>TIDAK WAJIB.</strong> Syarat Knuth menetapkan jumlah input adalah <strong>nol atau lebih (&ge; 0)</strong>. Contoh: algoritma penampil teks statis atau pembangkit bilangan acak seed statis memiliki 0 input dan tetap sah sebagai algoritma. Sebaliknya, <strong>OUTPUT MUTLAK WAJIB MINIMAL SATU (&ge; 1)</strong>!
</div>
"""
            }
        ],
        "references": [
            "Berkas Resmi Perkuliahan: algo_p1_pengantar_algoritma.pdf (Pengantar Algoritma Pertemuan Ke-1, 14 Slide PPT Dosen FTIK Unindra).",
            "Anita Sindar RMS, S.T.M.T.I. (2019). Struktur Data Dan Algoritma Dengan C++. Penerbit Pustaka.",
            "Knuth, Donald E. (1997). The Art of Computer Programming, Vol. 1: Fundamental Algorithms (3rd ed.). Addison-Wesley.",
            "Silabus Resmi Mata Kuliah Algoritma & Pemrograman 1, Program Studi Sistem Informasi FTIK Unindra (2026)."
        ]
    },
    {
        "meeting_no": 2,
        "filename": "algo_p2_panduan_guru_ai",
        "title": "Master Guide: Tipe Data Sederhana, Variabel, Konstanta, Ekspresi & Operator Komputasi",
        "subject_name": "Algoritma 1",
        "lecturer": "Pak Rizki / Tim Dosen Algoritma FTIK",
        "doc_filename": "algo_p2_tipe_data_operator.pdf (Algoritma 1 - Tipe data dan Operator Pertemuan Ke-2.pdf)",
        "slide_count": "16 Slide PPT Resmi Dosen",
        "sections": [
            {
                "title": "Tipe Data Sederhana & Karakteristik Integer (Slide 2 - 4 PPT Dosen)",
                "content_html": """
<p>Slide 2 menjelaskan bahwa tipe data dasar sederhana yang paling sering digunakan dalam program meliputi: <strong>Integer, Real, Char, String, dan Boolean</strong>.</p>
<p>Slide 3-4 menegaskan aturan baku <strong>Integer</strong>:</p>
<ul>
  <li>Integer menampung bilangan bulat tanpa pecahan desimal.</li>
  <li>Dalam tipe data ini <strong>TIDAK DIPERKENANKAN menggunakan tanda koma</strong> antar dua digit angka.</li>
  <li><strong>Operator pada Tipe Integer (Slide 4):</strong> Penjumlahan (<code>+</code>), Pengurangan (<code>-</code>), Perkalian (<code>*</code>), Pembagian Bulat (<code>div</code>), dan Sisa Bagi / Modulo (<code>mod</code>). Contoh: <code>13 + 4 = 17</code>, <code>10 div 3 = 3</code>, <code>10 mod 3 = 1</code>.</li>
</ul>
"""
            },
            {
                "title": "Tipe Data Real & Tabel Jangkauan Ukuran Memori (Slide 5 - 6 PPT Dosen)",
                "content_html": """
<p>Slide 5 menerangkan bahwa penulisan untuk jenis data Real <strong>selalu menggunakan titik desimal</strong> (bukan koma). Nilai konstanta numerik real standar berkisar dari 1E-38 s.d 1E+38.</p>
<table>
  <thead><tr><th>Tipe Real (Slide 6)</th><th>Jangkauan Nilai</th><th>Digit Presisi</th><th>Ukuran Memori</th></tr></thead>
  <tbody>
    <tr><td><strong>Single</strong></td><td>1.5E-45 s.d 3.4E+38</td><td>7 - 8 digit</td><td>4 Byte</td></tr>
    <tr><td><strong>Real</strong></td><td>2.9E-39 s.d 1.7E+38</td><td>11 - 12 digit</td><td>6 Byte</td></tr>
    <tr><td><strong>Double</strong></td><td>5.0E-324 s.d 1.7E+308</td><td>15 - 16 digit</td><td>8 Byte</td></tr>
    <tr><td><strong>Extended</strong></td><td>3.4E-4932 s.d 1.1E+4932</td><td>19 - 20 digit</td><td>10 Byte</td></tr>
    <tr><td><strong>Comp</strong></td><td>-2E+63 + 1 s.d 2E+63 - 1</td><td>19 - 20 digit</td><td>8 Byte</td></tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Tipe Data Karakter (Char), String & Boolean (Slide 7 - 10 PPT Dosen)",
                "content_html": """
<p>Slide 7-8 membedakan Char dan String:</p>
<table>
  <thead><tr><th>Tipe Data Teks</th><th>Kapasitas & Karakteristik</th><th>Kaidah Penulisan Baku</th><th>Jumlah Variasi</th></tr></thead>
  <tbody>
    <tr><td><strong>Char</strong></td><td>Menyimpan tepat <strong>hanya 1 karakter tunggal</strong> yang diketikkan dari keyboard.</td><td>Diapit tanda petik tunggal: <code>'A'</code>, <code>'9'</code>, <code>'%'</code>.</td><td>Memiliki 256 macam variasi karakter ASCII (0..255).</td></tr>
    <tr><td><strong>String</strong></td><td>Terdiri dari <strong>beberapa rangkaian karakter</strong> yang membentuk teks kata/kalimat.</td><td>Diapit tanda petik tunggal: <code>'FTIK Unindra'</code>.</td><td>Dinamis hingga 255 karakter (ShortString) atau tak terbatas.</td></tr>
  </tbody>
</table>
<p>Slide 9-10 menguraikan tipe <strong>Boolean</strong>: tipe data logika yang hanya berisi dua kemungkinan nilai: <code>TRUE</code> (Benar) atau <code>FALSE</code> (Salah). Slide 10 menampilkan contoh program <code>display_bool</code> menggunakan unit <code>wincrt</code> untuk mencetak status boolean.</p>
"""
            },
            {
                "title": "Konsep Variabel, Konstanta & Ekspresi (Slide 11 - 13 PPT Dosen)",
                "content_html": """
<table>
  <thead><tr><th>Entitas Komputasi</th><th>Definisi Konseptual Modul Dosen</th><th>Sifat Mutabilitas</th><th>Contoh Penulisan</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>Variabel (Slide 11)</strong></td>
      <td>Suatu lokasi memori komputer yang digunakan untuk menampung dan menyimpan data yang akan diolah.</td>
      <td><strong>Dinamis</strong> (dapat diubah nilainya sewaktu-waktu selama program berjalan).</td>
      <td><code>var nama: string; total: integer;</code></td>
    </tr>
    <tr>
      <td><strong>Konstanta (Slide 12)</strong></td>
      <td>Besaran yang mempunyai nilai tetap selama program dijalankan. Nilai disimpan sebelum dieksekusi.</td>
      <td><strong>Statik / Imutabel</strong> (terkunci permanen; tidak dapat diubah).</td>
      <td><code>const pi = 3.14; kurs = 15500;</code></td>
    </tr>
    <tr>
      <td><strong>Ekspresi (Slide 13)</strong></td>
      <td>Pernyataan yang mentransformasikan nilai menjadi keluaran yang diinginkan melalui proses perhitungan (komputasi).</td>
      <td>Hasil evaluasi dari operand yang dihubungkan oleh operator.</td>
      <td><code>luas := panjang * lebar;</code></td>
    </tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Klasifikasi Operator & Urutan Presedensi (Slide 14 PPT Dosen)",
                "content_html": """
<p>Slide 14 membagi operator komputasi menjadi:</p>
<ol>
  <li><strong>Operator Aritmatika:</strong> Pangkat, perkalian (<code>*</code>), pembagian real (<code>/</code>), pembagian bulat (<code>div</code>), sisa bagi (<code>mod</code>), penjumlahan (<code>+</code>), pengurangan (<code>-</code>).</li>
  <li><strong>Operator Relasional:</strong> <code>=</code>, <code>&lt;&gt;</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>.</li>
  <li><strong>Operator Logika:</strong> <code>NOT</code> (ingkaran), <code>AND</code> (dan), <code>OR</code> (atau), <code>XOR</code> (exclusive or).</li>
</ol>
"""
            }
        ],
        "ai_insights": [
            {
                "title": "Intuisi First Principles: Memori Komputer & Alamat Heksadesimal",
                "content_html": """
<p>RAM pada hakikatnya adalah jajaran sel transistor beralamat heksadesimal acak (misal <code>0x00FF2A</code>). Variabel bertindak sebagai \"nama alias\" yang memudahkan programmer manusia untuk menunjuk alamat fisik memori tersebut tanpa harus menghafal nomor register heksadesimal.</p>
"""
            },
            {
                "title": "Tips Menjawab Soal UTS: Pembagian Real (/) vs Pembagian Bulat (div)",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>🎯 Bedah Soal Jebakan Ujian:</strong><br>
  <strong>Soal:</strong> Apakah perbedaan hasil antara <code>7 / 2</code> dan <code>7 div 2</code>?<br>
  <strong>Pembahasan:</strong><br>
  &bull; Operator <code>/</code> adalah pembagian real matematika murni, menghasilkan <strong>3.5</strong> bertipe <strong>Real</strong>.<br>
  &bull; Operator <code>div</code> adalah pembagian bilangan bulat (<em>integer division</em>) yang membuang sisa pecahan, menghasilkan <strong>3</strong> bertipe <strong>Integer</strong>.<br>
  &bull; Sisa pecahan yang dibuang dapat diambil dengan operator <code>mod</code>: <code>7 mod 2 = 1</code>.
</div>
"""
            }
        ],
        "references": [
            "Berkas Resmi Perkuliahan: algo_p2_tipe_data_operator.pdf (Algoritma 1 - Tipe data dan Operator Pertemuan Ke-2, 16 Slide PPT Dosen FTIK Unindra).",
            "Anita Sindar RMS, S.T.M.T.I. (2019). Struktur Data Dan Algoritma Dengan C++. Penerbit Pustaka.",
            "Silabus Resmi Mata Kuliah Algoritma & Pemrograman 1, Program Studi Sistem Informasi FTIK Unindra (2026)."
        ]
    },
    {
        "meeting_no": 3,
        "filename": "algo_p3_panduan_guru_ai",
        "title": "Master Guide: Flowchart (Diagram Alir), Simbol Standar ANSI/ISO & Kaidah Perancangan Logika",
        "subject_name": "Algoritma 1",
        "lecturer": "Pak Rizki / Tim Dosen Algoritma FTIK",
        "doc_filename": "algo_p3_flowchart_ansi.pdf (Algoritma 1 - Flowchart Pertemuan Ke-3.pdf)",
        "slide_count": "25 Slide PPT Resmi Dosen",
        "sections": [
            {
                "title": "Definisi Flowchart & Konsep Input-Proses-Output (Slide 2 - 3 PPT Dosen)",
                "content_html": """
<p>Slide 2 mendefinisikan <strong>Flowchart</strong> sebagai bagan-bagan yang mempunyai arus yang menggambarkan langkah-langkah penyelesaian suatu masalah secara visual.</p>
<p>Slide 3 menegaskan konsep dasar pemrograman yang selalu berpijak pada siklus tritunggal: <strong>Input &rarr; Proses &rarr; Output</strong>.</p>
"""
            },
            {
                "title": "Jenis-Jenis Flowchart: System Flowchart vs Program Flowchart (Slide 4 - 6 PPT Dosen)",
                "content_html": """
<table>
  <thead><tr><th>Jenis Flowchart</th><th>Definisi Konseptual Modul Dosen</th><th>Tingkat Kedalaman & Audiens</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>1. System Flowchart (Bagan Alir Sistem)</strong></td>
      <td>Bagan yang menggambarkan urutan proses dalam sistem secara makro dengan menunjukkan alat media input, output, serta jenis media penyimpanan (storage).</td>
      <td>Tingkat makro konseptual; digunakan oleh Analis Sistem (System Analyst) dan pemangku kepentingan manajemen.</td>
    </tr>
    <tr>
      <td><strong>2. Program Flowchart (Bagan Alir Program)</strong></td>
      <td>Bagan yang menggambarkan urutan instruksi logika penyelesaian masalah secara rinci langkah demi langkah di dalam suatu modul program.</td>
      <td>Tingkat mikro teknis; menjadi acuan langsung programmer sebelum mengetik kode sumber.</td>
    </tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Simbol-Simbol Standar Flowchart ANSI / ISO 5807 (Slide 7 - 12 PPT Dosen)",
                "content_html": """
<p>Slide 7-12 mengklasifikasikan simbol flowchart ke dalam 3 kelompok geometri:</p>
<table>
  <thead><tr><th>Bentuk Geometri Simbol</th><th>Nama Simbol Standar</th><th>Kategori</th><th>Fungsi Spesifik dalam Algoritma</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>Kapsul / Oval (Terminator)</strong></td>
      <td>Terminator</td>
      <td>Flow Direction</td>
      <td>Menandai awal (START/BEGIN) dan akhir (STOP/END) dari sebuah diagram alir.</td>
    </tr>
    <tr>
      <td><strong>Garis Berpanah (Flowline)</strong></td>
      <td>Flow Direction Line</td>
      <td>Flow Direction</td>
      <td>Menunjukkan arah arus aliran instruksi yang sedang diproses.</td>
    </tr>
    <tr>
      <td><strong>Persegi Panjang (Rectangle)</strong></td>
      <td>Processing Symbol</td>
      <td>Processing</td>
      <td>Menyatakan operasi pemrosesan aritmatika, kalkulasi rumus, atau manipulasi data di CPU.</td>
    </tr>
    <tr>
      <td><strong>Jajar Genjang (Parallelogram)</strong></td>
      <td>Input / Output (I/O)</td>
      <td>I/O Symbols</td>
      <td>Menyatakan operasi pembacaan data masukan (read) atau pencetakan keluaran (write).</td>
    </tr>
    <tr>
      <td><strong>Belah Ketupat (Diamond)</strong></td>
      <td>Decision (Keputusan)</td>
      <td>Processing</td>
      <td>Menyatakan pengujian kondisi boolean (percabangan IF). Memiliki minimal dua jalur keluar (Yes/True dan No/False).</td>
    </tr>
    <tr>
      <td><strong>Segienam (Preparation)</strong></td>
      <td>Preparation</td>
      <td>Processing</td>
      <td>Inisialisasi nilai awal variabel pencacah (counter) pada struktur perulangan looping.</td>
    </tr>
    <tr>
      <td><strong>Lingkaran Kecil (Connector)</strong></td>
      <td>On-Page Connector</td>
      <td>Flow Direction</td>
      <td>Penghubung alur diagram yang terputus pada lembar halaman yang sama.</td>
    </tr>
    <tr>
      <td><strong>Segilima (Off-page Connector)</strong></td>
      <td>Off-Page Connector</td>
      <td>Flow Direction</td>
      <td>Penghubung alur diagram yang berpindah ke halaman kertas/layar berbeda.</td>
    </tr>
  </tbody>
</table>
"""
            },
            {
                "title": "Kaidah Pembuatan & Contoh Flowchart Dosen (Slide 13 - 23 PPT Dosen)",
                "content_html": """
<p>Slide 13-17 menegaskan aturan baku penggambaran flowchart:</p>
<ul>
  <li>Flowchart selalu diawali dengan simbol <strong>BEGIN / START</strong> dan diakhiri dengan <strong>END / STOP</strong>.</li>
  <li>Arah aliran standar bergerak dari <strong>atas ke bawah</strong> atau dari <strong>kiri ke kanan</strong>.</li>
  <li>Garis alur panah tidak boleh saling berpotongan tanpa menggunakan simbol konektor lingkaran.</li>
</ul>
<p><strong>Contoh Kasus Dosen (Slide 18 & 19):</strong></p>
<ol>
  <li><strong>Menghitung Luas Persegi Panjang:</strong> START &rarr; Masukkan Panjang & Lebar (Jajar Genjang) &rarr; Luas = Panjang * Lebar (Persegi Panjang) &rarr; Tampilkan Luas (Jajar Genjang) &rarr; STOP.</li>
  <li><strong>Deret Bilangan Ganjil 1 - 100:</strong> Inisialisasi <code>bil = 1</code> &rarr; Cetak <code>bil</code> &rarr; <code>bil = bil + 2</code> &rarr; Uji Decision <code>bil &le; 100</code> (jika Ya kembali looping, jika Tidak selesai).</li>
</ol>
"""
            }
        ],
        "ai_insights": [
            {
                "title": "Intuisi First Principles: Mengapa Bentuk Geometri Flowchart Wajib Standar?",
                "content_html": """
<p>Standar ANSI/ISO 5807 diciptakan agar arsitektur logika sistem dapat dibaca secara universal lintas programmer di seluruh dunia tanpa batasan bahasa manusia. Simbol jajar genjang memberi sinyal seketika kepada pembaca bahwa ada interaksi dengan perangkat luar (I/O), sedangkan belah ketupat memberi peringatan adanya potensi percabangan alur logika sistem.</p>
"""
            },
            {
                "title": "Tips Menjawab Soal UTS Flowchart",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>🎯 Bedah Jebakan Ujian Flowchart:</strong><br>
  <strong>1. Simbol Decision Tanpa Label Keluar:</strong> Simbol belah ketupat (Decision) <strong>WAJIB memiliki label keterangan</strong> pada cabang keluarnya (misal: tulisan <code>Ya / Tidak</code> atau <code>True / False</code>). Jika panah keluar tidak berlabel, nilai jawaban di lembar ujian akan dikurangi.<br>
  <strong>2. Tertukar Persegi Panjang dan Jajar Genjang:</strong> Instruksi masukan seperti <code>Input Alas</code> WAJIB memakai jajar genjang. Menempatkan input ke dalam persegi panjang adalah kesalahan fatal konvensi diagram alir.
</div>
"""
            }
        ],
        "references": [
            "Berkas Resmi Perkuliahan: algo_p3_flowchart_ansi.pdf (Algoritma 1 - Flowchart Pertemuan Ke-3, 25 Slide PPT Dosen FTIK Unindra).",
            "ANSI X3.5-1970 / ISO 5807: Information Processing - Documentation Symbols and Conventions.",
            "Anita Sindar RMS, S.T.M.T.I. (2019). Struktur Data Dan Algoritma Dengan C++. Penerbit Pustaka."
        ]
    },
    {
        "meeting_no": 4,
        "filename": "algo_p4_panduan_guru_ai",
        "title": "Master Guide: Tiga Struktur Kontrol Algoritma (Sequence, Selection, Looping For/While/Repeat)",
        "subject_name": "Algoritma 1",
        "lecturer": "Pak Rizki / Tim Dosen Algoritma FTIK",
        "doc_filename": "algo_p4_struktur_kontrol.pdf (Struktur Dasar Algoritma Pertemuan Ke-4.pdf)",
        "slide_count": "29 Slide PPT Resmi Dosen",
        "sections": [
            {
                "title": "Tiga Struktur Kontrol Dasar Algoritma (Slide 1 - 2 PPT Dosen)",
                "content_html": """
<p>Slide 2 menetapkan 3 struktur kontrol fundamental yang menjadi fondasi seluruh bahasa pemrograman di dunia:</p>
<ol>
  <li><strong>Struktur Sequence (Runtunan)</strong></li>
  <li><strong>Struktur Selection (Pemilihan)</strong></li>
  <li><strong>Struktur Looping / Repetition (Perulangan)</strong></li>
</ol>
"""
            },
            {
                "title": "Struktur Sequence & Bukti Pentingnya Urutan Instruksi (Slide 3 - 7 PPT Dosen)",
                "content_html": """
<p>Slide 3 menjelaskan bahwa pada struktur sequence, instruksi dikerjakan <strong>secara berurutan baris demi baris</strong>, mulai dari baris pertama hingga baris terakhir.</p>
<div class=\"alert alert-warning\">
  <strong>Peringatan Penting Dosen (Slide 7):</strong><br>
  Jika urutan baris instruksi ditukarkan, algoritma akan menghasilkan keluaran yang <strong>BERBEDA TOTAL atau bahkan ERROR</strong>! Contoh: mencoba menghitung <code>luas := panjang * lebar</code> sebelum membaca nilai variabel <code>panjang</code> dan <code>lebar</code> akan menghasilkan nilai nol atau sampah memori (garbage value).
</div>
"""
            },
            {
                "title": "Struktur Selection (Pemilihan Kondisi) & Logika AND/OR (Slide 8 - 13 PPT Dosen)",
                "content_html": """
<p>Slide 8-10 menerangkan bahwa tidak setiap baris program harus dikerjakan. Baris program tertentu hanya akan diproses jika memenuhi syarat/kondisi boolean yang bernilai <code>True</code>.</p>
<p>Slide 12 menampilkan contoh program penentuan kelulusan siswa: baris pencetakan kata \"Lulus\" hanya akan diproses jika kondisi <code>nilai &ge; 60</code> terpenuhi.</p>
"""
            },
            {
                "title": "Struktur Perulangan (Looping): For-Do, While-Do & Repeat-Until (Slide 14 - 27 PPT Dosen)",
                "content_html": """
<p>Slide 14-27 mengupas tuntas tiga bentuk instruksi perulangan:</p>
<table>
  <thead><tr><th>Bentuk Perulangan</th><th>Posisi Evaluasi Kondisi</th><th>Karakteristik & Perilaku Eksekusi</th><th>Contoh Kode Dosen</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>1. For - Do</strong></td>
      <td>Perulangan pasti (<em>counted loop</em>).</td>
      <td>Jumlah perulangan <strong>sudah diketahui secara pasti</strong> sejak awal melalui nilai awal dan nilai akhir pencacah (counter).</td>
      <td>Mencetak tulisan \"Saya Mahasiswa Unindra\" sebanyak 100 kali (Slide 17-19):<br><code>for i := 1 to 100 do writeln('Saya Mahasiswa Unindra');</code></td>
    </tr>
    <tr>
      <td><strong>2. While - Do</strong></td>
      <td>Evaluasi kondisi berada <strong>di AWAL perulangan</strong>.</td>
      <td>Instruksi hanya akan dikerjakan <strong>SELAMA kondisi bernilai TRUE</strong>. Jika pada evaluasi pertama kondisi sudah bernilai False, maka badan perulangan <strong>TIDAK PERNAH DIKERJAKAN SAMA SEKALI (0 kali)</strong>.</td>
      <td>Mencetak angka 1 s.d 10 (Slide 20-22):<br><code>i := 1;<br>while (i &le; 10) do<br>begin write(i); i := i + 1; end;</code></td>
    </tr>
    <tr>
      <td><strong>3. Repeat - Until</strong></td>
      <td>Evaluasi kondisi berada <strong>di AKHIR perulangan</strong>.</td>
      <td>Perulangan berjalan terus <strong>SAMPAI kondisi bernilai TRUE</strong> (berhenti jika kondisi True). Karena evaluasi di akhir, badan perulangan <strong>PASTI DIKERJAKAN MINIMAL 1 KALI</strong>!</td>
      <td>Slide 26-27:<br><code>i := 1;<br>repeat write(i); i := i + 1; until (i &gt; 10);</code></td>
    </tr>
  </tbody>
</table>
"""
            }
        ],
        "ai_insights": [
            {
                "title": "Intuisi First Principles: Perbedaan Mendasar While-Do vs Repeat-Until",
                "content_html": """
<p>Dua perbedaan esensial yang paling sering ditanyakan dosen:</p>
<ol>
  <li><strong>Kondisi Berhenti:</strong> <code>while (kondisi) do</code> terus mengulang selama kondisi bernilai <strong>TRUE</strong>. Sebaliknya, <code>repeat ... until (kondisi)</code> berhenti berulang ketika kondisi bernilai <strong>TRUE</strong> (ia mengulang selama False).</li>
  <li><strong>Jumlah Eksekusi Minimum:</strong> <code>while-do</code> minimal dieksekusi <strong>0 kali</strong>. <code>repeat-until</code> minimal dieksekusi <strong>1 kali</strong>.</li>
</ol>
"""
            },
            {
                "title": "Tips Menjawab Soal UTS Struktur Perulangan",
                "content_html": """
<div class=\"alert alert-warning\">
  <strong>🎯 Bedah Jebakan Infinite Loop pada Looping:</strong><br>
  Saat menggunakan <code>while-do</code> atau <code>repeat-until</code>, Anda <strong>WAJIB menyertakan instruksi pengubah pencacah (misal: <code>i := i + 1;</code>)</strong> di dalam badan perulangan! Jika lupa menyertakan increment, nilai <code>i</code> akan tetap selamanya sehingga kondisi terminasi tidak pernah tercapai, memicu <em>Infinite Loop</em> yang membuat program membeku (hang).
</div>
"""
            }
        ],
        "references": [
            "Berkas Resmi Perkuliahan: algo_p4_struktur_kontrol.pdf (Struktur Dasar Algoritma Pertemuan Ke-4, 29 Slide PPT Dosen FTIK Unindra).",
            "Anita Sindar RMS, S.T.M.T.I. (2019). Struktur Data Dan Algoritma Dengan C++. Penerbit Pustaka.",
            "Silabus Resmi Mata Kuliah Algoritma & Pemrograman 1, Program Studi Sistem Informasi FTIK Unindra (2026)."
        ]
    }
]
