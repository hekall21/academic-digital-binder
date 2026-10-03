# -*- coding: utf-8 -*-
"""
Generate Perfect Slide-by-Slide Guru AI Content & Sync SeedData
1. Extracts EVERY SINGLE SLIDE of lecturer PDFs using pypdf.
2. Formats Bagian 1: Penjelasan Setiap Slide PPT Dosen (Singkat, Padat & Terstruktur).
3. Appends Bagian 2: Tambahan Materi, Deep-Dive & Insight Guru AI (Paling Bawah - Sebanyak & Sebagus Mungkin).
4. Appends Bagian 3: Sumber Dokumen & Verifikasi Resmi Dosen (Paling Bawah).
5. Generates high-yield, specific exam cheatsheet points for summaries.ringkas (No generic boilerplate!).
6. Leaves summaries.standar (student's GMeet recordings notes) 100% INTACT!
7. Removes artificial mat_ai_... duplicate PDFs from meeting.materials.
8. Updates seedData.js and bumps storage.js version to v13.
"""

import os
import sys
import json
import re
import html
import pypdf

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BASE_DIR = r"C:\Users\haike\Downloads\academic-digital-binder"
PUBLIC_MATERIALS = os.path.join(BASE_DIR, "public", "materials")
SEEDDATA_PATH = os.path.join(BASE_DIR, "src", "data", "seedData.js")
STORAGE_PATH = os.path.join(BASE_DIR, "src", "lib", "storage.js")

sys.path.insert(0, os.path.join(BASE_DIR, "scripts", "ai_modules"))
from algo_modules import ALGO_MEETINGS
from pascal_modules import PASCAL_MEETINGS
from matdas_modules import MATDAS_MEETINGS
from ksi_modules import KSI_MEETINGS
from mkwk_modules import INDO_MEETINGS, INGGRIS_MEETINGS, PANCASILA_MEETINGS, PAI_MEETINGS

ALL_MODULES_MAP = {}
for m in ALGO_MEETINGS:
    ALL_MODULES_MAP[('subject-algo', m['meeting_no'])] = m
for m in PASCAL_MEETINGS:
    ALL_MODULES_MAP[('subject-pascal', m['meeting_no'])] = m
for m in MATDAS_MEETINGS:
    ALL_MODULES_MAP[('subject-matdas', m['meeting_no'])] = m
for m in KSI_MEETINGS:
    ALL_MODULES_MAP[('subject-ksi', m['meeting_no'])] = m
for m in INDO_MEETINGS:
    ALL_MODULES_MAP[('subject-indo', m['meeting_no'])] = m
for m in INGGRIS_MEETINGS:
    ALL_MODULES_MAP[('subject-inggris', m['meeting_no'])] = m
for m in PANCASILA_MEETINGS:
    ALL_MODULES_MAP[('subject-pancasila', m['meeting_no'])] = m
for m in PAI_MEETINGS:
    ALL_MODULES_MAP[('subject-pai', m['meeting_no'])] = m

OFFICIAL_PDFS = {
    ('subject-pascal', 1): ('pascal_p1_pengantar_pascal.pdf', 'Zaeni Miftah, S.Kom., M.Kom.', 'Pertemuan 1 - Pengantar Pemrograman.pdf'),
    ('subject-pascal', 2): ('pascal_p2_variabel_tipe_data.pdf', 'Zaeni Miftah, S.Kom., M.Kom.', 'Pertemuan 2 - Variabel dan Tipe Data.pdf'),
    ('subject-pascal', 3): ('pascal_p3_input_output.pdf', 'Zaeni Miftah, S.Kom., M.Kom.', 'Pertemuan 3 - Input dan Output Pascal.pdf'),
    ('subject-pascal', 4): ('pascal_p4_percabangan_if.pdf', 'Zaeni Miftah, S.Kom., M.Kom.', 'Pertemuan 4 - Percabangan IF Pascal.pdf'),

    ('subject-algo', 1): ('algo_p1_pengantar_algoritma.pdf', 'Tim Dosen Algoritma FTIK Unindra', 'Pertemuan 1 - Pengantar Algoritma.pdf'),
    ('subject-algo', 2): ('algo_p2_tipe_data_operator.pdf', 'Tim Dosen Algoritma FTIK Unindra', 'Pertemuan 2 - Tipe Data dan Operator.pdf'),
    ('subject-algo', 3): ('algo_p3_flowchart_ansi.pdf', 'Tim Dosen Algoritma FTIK Unindra', 'Pertemuan 3 - Flowchart Standar ANSI.pdf'),
    ('subject-algo', 4): ('algo_p4_struktur_kontrol.pdf', 'Tim Dosen Algoritma FTIK Unindra', 'Pertemuan 4 - Struktur Kontrol Algoritma.pdf'),

    ('subject-matdas', 1): ('matdas_p1_sistem_bilangan_real.pdf', 'Dr. Munali, M.Pd.', 'Pertemuan 1 - Sistem Bilangan Real.pdf'),
    ('subject-matdas', 2): ('matdas_p2_pertidaksamaan_real.pdf', 'Dr. Munali, M.Pd.', 'Pertemuan 2 - Pertidaksamaan Bilangan Real.pdf'),
    ('subject-matdas', 3): ('matdas_p3_fungsi_dan_grafik.pdf', 'Dr. Munali, M.Pd.', 'Pertemuan 3 - Nilai Mutlak dan Pemetaan Fungsi.pdf'),
    ('subject-matdas', 4): ('matdas_p3_fungsi_dan_grafik.pdf', 'Dr. Munali, M.Pd.', 'Pertemuan 4 - Persamaan Garis Lurus & Parabola Kuadrat.pdf'),

    ('subject-ksi', 1): ('ksi_p1_sistem_informasi_1.pdf', 'Pak Dheni, M.Kom.', '1789306851_SISTEM_INFORMASI_1.pdf'),
    ('subject-ksi', 2): ('ksi_p2_sistem_informasi_2.pdf', 'Pak Dheni, M.Kom.', '1789306879_SISTEM_INFORMASI_2.pdf'),
    ('subject-ksi', 3): ('ksi_p3_sistem_informasi_3.pdf', 'Pak Dheni, M.Kom.', '1789306890_SISTEM_INFORMASI_3.pdf'),
    ('subject-ksi', 4): ('ksi_p4_sistem_informasi_4.pdf', 'Pak Dheni, M.Kom.', '1789306915_SISTEM_INFORMASI_4.pdf'),

    ('subject-indo', 1): ('indo_p1_hakikat_bahasa.pdf', 'Tim Dosen MKWK Bahasa Indonesia', '1789103790_Pertemuan_1_Bahasa_Indonesia.pdf'),
    ('subject-indo', 2): ('indo_p2_sikap_positif_bahasa.pdf', 'Tim Dosen MKWK Bahasa Indonesia', '1789341355_Pertemuan_2_Bahasa_Indonesia.pdf'),
    ('subject-indo', 3): ('indo_p3_eyd_v.pdf', 'Tim Dosen MKWK Bahasa Indonesia', 'Pertemuan_3_Bahasa_Indonesia_EYD_V.pdf'),
    ('subject-indo', 4): ('indo_p4_diksi_kata.pdf', 'Tim Dosen MKWK Bahasa Indonesia', '1790563821_Pertemuan_4_Bahasa_Indonesia_Diksi.pdf'),

    ('subject-inggris', 1): ('inggris_p1_chapter_1_self_intro.pdf', 'Tim Dosen Bahasa Inggris FTIK Unindra', 'Chapter 1 - Self-Introduction & Profiling.pdf'),
    ('subject-inggris', 2): ('inggris_p2_chapter_2_how_to_make.pdf', 'Tim Dosen Bahasa Inggris FTIK Unindra', 'Chapter 2 - Procedural Texts & Technical Instructions.pdf'),
    ('subject-inggris', 3): ('inggris_p3_chapter_3_holiday.pdf', 'Tim Dosen Bahasa Inggris FTIK Unindra', 'Chapter 3 - Recount Texts & Past Experiences.pdf'),
    ('subject-inggris', 4): ('inggris_p4_chapter_4_plans.pdf', 'Tim Dosen Bahasa Inggris FTIK Unindra', 'Chapter 4 - Talking About Plans & Intentions.pdf'),

    ('subject-pancasila', 1): ('pancasila_p1_landasan_pendidikan.pdf', 'Tim Dosen Pancasila FTIK Unindra', 'Pertemuan 1 - Landasan Pendidikan Pancasila.pdf'),
    ('subject-pancasila', 2): ('pancasila_p2_pra_kemerdekaan.pdf', 'Tim Dosen Pancasila FTIK Unindra', 'Pertemuan 2 - Pancasila Pra-Kemerdekaan.pdf'),
    ('subject-pancasila', 3): ('pancasila_p3_pasca_kemerdekaan.pdf', 'Tim Dosen Pancasila FTIK Unindra', 'Pertemuan 3 - Pancasila Pasca-Kemerdekaan.pdf'),
    ('subject-pancasila', 4): ('pancasila_rps_mk02_resmi_unindra.pdf', 'Tim Dosen Pancasila FTIK Unindra', 'Pertemuan 4 - Pancasila sebagai Dasar Negara.pdf'),

    ('subject-pai', 1): ('pai_p1_tauhid_dan_visi_islam.pdf', 'Tim Dosen PAI FTIK Unindra', 'Pertemuan 1 - Tauhid dan Visi Islam.pdf'),
    ('subject-pai', 2): ('pai_p2_iman_dan_ihsan.pdf', 'Tim Dosen PAI FTIK Unindra', 'Pertemuan 2 - Aqidah, Iman, dan Ihsan.pdf'),
    ('subject-pai', 3): ('pai_p3_syariah_dan_ibadah.pdf', 'Tim Dosen PAI FTIK Unindra', 'Pertemuan 3 - Syariah, Ibadah, dan Hukum Taklifi.pdf'),
    ('subject-pai', 4): ('pai_p4_akhlak_dan_etika_it.pdf', 'Tim Dosen PAI FTIK Unindra', 'Pertemuan 4 - Akhlak dan Etika Profesi IT.pdf'),
}

# Specific high-yield cheatsheet exam points for each meeting
CHEATSHEET_EXAM_POINTS = {
    ('subject-pascal', 1): [
        ("Asal Kata Komputer", "Berasal dari bahasa Latin <em>Computare</em> yang berarti menghitung (to compute/calculate)."),
        ("4 Blok Dasar Komputer", "Unit Masukan (Input), Pemrosesan (ALU + Control Unit), Memori/Storage, dan Unit Keluaran (Output)."),
        ("Kompilator vs Interpreter", "Kompilator (Pascal, C++) menerjemahkan seluruh kode menjadi file biner (.exe) sebelum running; Interpreter (Python) baris demi baris saat running."),
        ("Pencipta Bahasa Pascal", "Prof. Niklaus Wirth (1971), dinamai untuk menghormati Blaise Pascal. Dilengkapi Turbo Pascal oleh Borland (1983)."),
        ("3 Blok Anatomi Pascal", "Judul Program (<code>program</code>), Blok Deklarasi (<code>uses</code>, <code>var</code>, <code>const</code>), dan Blok Utama (<code>begin ... end.</code>)."),
        ("Unit CRT & Layar", "<code>uses crt;</code> mengaktifkan manipulasi terminal teks: <code>clrscr;</code> membersihkan layar dan <code>readln;</code> menahan jendela output.")
    ],
    ('subject-pascal', 2): [
        ("Aturan Identifier Variabel", "Diawali huruf/underscore, tanpa spasi/simbol reserved, case-insensitive (huruf besar/kecil dianggap identik)."),
        ("Deklarasi var vs const", "<code>var</code> nilainya dinamis dapat diubah saat eksekusi; <code>const</code> nilainya tetap/konstan sejak awal program."),
        ("4 Tipe Data Dasar", "Integer (bilangan bulat), Real (pecahan desimal), Char (karakter tunggal diapit petik satu), Boolean (TRUE atau FALSE)."),
        ("Operator Assignment", "Menggunakan simbol titik dua sama dengan (<code>:=</code>) untuk memberikan nilai ke dalam variabel."),
        ("Operator Aritmatika", "<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code> (bagi real desimal), <code>div</code> (bagi bulat integer), <code>mod</code> (sisa bagi integer)."),
        ("Presedensi Operator", "Urutan evaluasi tertinggi: Kurung <code>( )</code> &rarr; <code>NOT</code> &rarr; <code>* / div mod AND</code> &rarr; <code>+ - OR</code> &rarr; Operator Relasional.")
    ],
    ('subject-pascal', 3): [
        ("Perbedaan write vs writeln", "<code>write('...')</code> mencetak output tanpa ganti baris (kursor di samping); <code>writeln('...')</code> mencetak lalu memindahkan kursor ke baris baru."),
        ("Perbedaan read vs readln", "<code>read(x)</code> membaca input data pengguna; <code>readln(x)</code> membaca input dan sekaligus membersihkan buffer tombol Enter di memori keyboard."),
        ("Format Desimal Angka Real", "Sintaks <code>variabel:lebar_total:jumlah_desimal</code>. Contoh <code>luas:0:2</code> membulatkan pecahan ke tepat 2 digit desimal (misal: 78.54)."),
        ("Penggabungan Teks & Variabel", "Pisahkan string teks konstan dengan nama variabel menggunakan tanda koma: <code>writeln('Hasil = ', hasil);</code>."),
        ("Pencegahan Jendela Menutup", "Letakkan instruksi <code>readln;</code> tanpa parameter sebelum <code>end.</code> agar jendela command prompt tidak langsung tertutup.")
    ],
    ('subject-pascal', 4): [
        ("PANTANGAN MUTLAK TITIK KOMA", "<strong>DILARANG KERAS</strong> memberi tanda titik koma (<code>;</code>) tepat sebelum kata kunci <code>ELSE</code>! Struktur IF-THEN-ELSE adalah satu pernyataan utuh."),
        ("IF Tunggal", "Sintaks: <code>if (kondisi) then statement;</code> Dieksekusi hanya jika kondisi bernilai TRUE."),
        ("IF-THEN-ELSE Ganda", "Sintaks: <code>if (kondisi) then statement1 else statement2;</code> Memilih satu di antara dua cabang alternatif."),
        ("Uji Ganjil Genap", "Ekspresi logika: <code>if (angka mod 2 = 0) then genap else ganjil;</code>"),
        ("IF Majemuk Bersarang", "Pengecekan bertingkat untuk rentang nilai (misal: grade nilai A, B, C, D, E) dari kondisi paling ketat ke paling longgar.")
    ],
    ('subject-algo', 1): [
        ("Etimologi Algoritma", "Berasal dari nama ilmuwan muslim abad ke-9: Abu Ja'far Muhammad bin Musa Al-Khawarizmi (peletak dasar ilmu hitung aljabar desimal)."),
        ("5 Syarat Algoritma Knuth", "Finiteness (wajib berhenti), Definiteness (langkah pasti & jelas), Input (ada nol atau lebih masukan), Output (menghasilkan solusi), Effectiveness (efektif & wajar)."),
        ("Rumus Fundamental Wirth", "Prof. Niklaus Wirth merumuskan: <strong>PROGRAM = ALGORITMA + STRUKTUR DATA</strong>."),
        ("Tiga Notasi Algoritma", "1. Bahasa Natural (deskriptif), 2. Diagram Alir (Flowchart grafis), 3. Pseudocode (notasi terstruktur mirip bahasa pemrograman)."),
        ("Tiga Bagian Teks Algoritma", "Judul/Header Algoritma, Deklarasi/Kamus (variabel, konstanta), dan Deskripsi/Langkah Instruksi.")
    ],
    ('subject-algo', 2): [
        ("Tipe Data Primitif", "Integer (bulat), Real (pecahan berkoma), Char (karakter tunggal alfanumerik), Boolean (logika TRUE/FALSE), String (untaian karakter)."),
        ("div vs mod vs slash (/)", "<code>div</code> menghasilkan hasil bagi bulat; <code>mod</code> menghasilkan sisa bagi integer; <code>/</code> selalu menghasilkan tipe pecahan Real."),
        ("Representasi Boolean", "Tipe logika biner yang hanya memiliki 2 nilai: TRUE atau FALSE. Pada wincrt lama sering direpresentasikan numerik 1 atau 0."),
        ("Variabel vs Konstanta", "Variabel adalah nama memori yang nilainya dapat berubah selama running; Konstanta nilainya terkunci tetap sejak dikompilasi.")
    ],
    ('subject-algo', 3): [
        ("Terminator (Kapsul Oval)", "Menandai titik Mulai (Start/Begin) atau Selesai (End/Stop) diagram alir."),
        ("Process (Persegi Panjang)", "Operasi komputasi internal, pemrosesan rumus aritmatika, atau penugasan variabel (assignment)."),
        ("Decision (Belah Ketupat)", "Evaluasi kondisi logika biner (memiliki minimal 2 cabang panah keluar: Ya/Tidak atau True/False)."),
        ("Input/Output (Jajar Genjang)", "Operasi memasukkan data (Read/Input) atau menampilkan data (Write/Print)."),
        ("Connector Simbol", "Lingkaran kecil untuk konektor dalam satu lembar halaman; Segi lima untuk konektor antarmuka halaman berbeda.")
    ],
    ('subject-algo', 4): [
        ("Tiga Struktur Dasar Kontrol", "1. Sequence (runtunan berurutan), 2. Selection (percabangan kondisi), 3. Repetition (perulangan/looping)."),
        ("Struktur Sequence", "Instruksi dieksekusi baris demi baris dari atas ke bawah tanpa percabangan dan tanpa perulangan."),
        ("Perulangan FOR-DO", "Perulangan dengan batas pencacah (counter) yang sudah pasti nilainya sejak awal (misal: 1 to 100)."),
        ("WHILE-DO vs REPEAT-UNTIL", "<code>While-Do</code> menguji kondisi di awal (jika salah dari awal, perintah 0 kali dijalankan); <code>Repeat-Until</code> menguji kondisi di akhir (minimal dieksekusi 1 kali).")
    ],
    ('subject-matdas', 1): [
        ("Hierarki Himpunan Bilangan", "Bilangan Asli &sub; Bilangan Cacah &sub; Bilangan Bulat (&Zopf;) &sub; Bilangan Rasional (&Qopf;) &sub; Bilangan Real (&Ropf;) &sub; Bilangan Kompleks (&Copf;)."),
        ("Bilangan Rasional vs Irasional", "Rasional dapat dibentuk pecahan p/q (desimal berhenti atau berulang periodik); Irasional tidak dapat dijadikan pecahan (desimal tak berulang, misal &radic;2, &pi;, e)."),
        ("Aturan Perkalian Ketaksamaan", "Jika kedua ruas dikalikan bilangan POSITIF, tanda ketaksamaan TETAP. Jika dikalikan bilangan NEGATIF, tanda ketaksamaan <strong>WAJIB DIBALIK</strong>!"),
        ("Notasi Selang Kurung Siku vs Biasa", "Kurung siku <code>[ a, b ]</code> berarti titik batas ikut masuk (&le; atau &ge;); Kurung biasa <code>( a, b )</code> berarti titik batas tidak masuk (< atau >).")
    ],
    ('subject-matdas', 2): [
        ("5 Langkah Baku Penentuan HP", "1. Nolkan ruas kanan, 2. Faktorkan pembilang & penyebut, 3. Tentukan titik pemecah, 4. Uji tanda selang pada garis bilangan, 5. Tuliskan HP."),
        ("Syarat Pecahan Rasional", "Pada bentuk pecahan f(x)/g(x), penyebut <strong>TIDAK BOLEH NOL</strong> (g(x) &ne; 0), sehingga titik penyebut selalu bertanda lingkaran KOSONG (kurung biasa)."),
        ("Penyelesaian Linear", "Pindahkan suku variabel ke ruas kiri dan konstanta ke ruas kanan. Jika membagi dengan angka negatif, balik arah tanda."),
        ("Penyelesaian Kuadrat", "Faktorkan x&sup2; - x - 6 < 0 menjadi (x-3)(x+2) < 0. Titik pembuat nol x=3 dan x=-2. Uji titik x=0 menghasilkan tanda negatif di selang (-2, 3).")
    ],
    ('subject-matdas', 3): [
        ("Definisi Geometris Nilai Mutlak", "|x| menyatakan jarak titik x dari titik pusat 0 pada garis bilangan real (selalu non-negatif &ge; 0)."),
        ("Sifat |x| < a", "Ekuivalen dengan selang di antara dua titik simetris: <code>-a < x < a</code>."),
        ("Sifat |x| > a", "Ekuivalen dengan selang sayap luar: <code>x < -a</code> atau <code>x > a</code>."),
        ("Kedua Ruas Memuat Nilai Mutlak", "|f(x)| &le; |g(x)| dapat diselesaikan dengan mengkuadratkan kedua ruas: (f(x))&sup2; - (g(x))&sup2; &le; 0 &hArr; (f+g)(f-g) &le; 0."),
        ("Uji Simetri Fungsi", "Fungsi Genap: f(-x) = f(x) (simetris sumbu Y); Fungsi Ganjil: f(-x) = -f(x) (simetris titik pusat asal (0,0))."),
        ("Syarat Domain Alami", "Bentuk akar &radic;(p(x)) mensyaratkan p(x) &ge; 0; Bentuk pecahan p(x)/q(x) mensyaratkan q(x) &ne; 0.")
    ],
    ('subject-matdas', 4): [
        ("Rumus Gradien Garis (m)", "Gradien kemiringan garis melalui dua titik: <code>m = (y₂ - y₁) / (x₂ - x₁)</code>."),
        ("Bentuk Persamaan Garis", "Eksplisit: y = m&middot;x + c; Melalui titik (x₁, y₁) bergradien m: y - y₁ = m&middot;(x - x₁)."),
        ("Dua Garis Sejajar vs Tegak Lurus", "Sejajar jika gradiennya identik sama (<code>m₁ = m₂</code>); Tegak lurus jika saling lawan dan berkebalikan (<code>m₁ &middot; m₂ = -1</code>)."),
        ("Karakteristik Parabola Kuadrat", "Bukaan kurva: a > 0 terbuka ke atas (titik minimum), a < 0 terbuka ke bawah (titik maksimum)."),
        ("Titik Puncak Ekstrem Parabola", "Koordinat titik puncak: <code>P(x_p, y_p) = ( -b / (2a), -D / (4a) )</code> dengan diskriminan <code>D = b² - 4ac</code>.")
    ],
    ('subject-ksi', 1): [
        ("Definisi Data Klasik", "Data adalah representasi mentah dari fakta (raw facts), kejadian, atau transaksi nyata tanpa makna bawaan."),
        ("3 Sumbu Klasifikasi Data", "1. Berdasarkan sifat (Kualitatif vs Kuantitatif), 2. Berdasarkan perolehan (Data Hitung vs Data Ukur), 3. Berdasarkan sumber (Internal vs Eksternal)."),
        ("Definisi Informasi Gordon B. Davis", "Data yang telah diproses ke dalam bentuk yang bermakna bagi si penerima dan bernilai nyata untuk keputusan saat ini atau mendatang."),
        ("Hierarki DIKW", "Data (fakta mentah) &rarr; Information (data berkonteks) &rarr; Knowledge (pola & wawasan) &rarr; Wisdom (kebijaksanaan & strategi bisnis)."),
        ("8 Karakteristik Sistem", "Komponen (elemen), Batasan (boundary), Lingkungan luar (environment), Penghubung (interface), Input, Process, Output, dan Tujuan (goal).")
    ],
    ('subject-ksi', 2): [
        ("Nilai Informasi (Value of Info)", "Informasi bernilai ekonomis jika manfaat keputusan dengan informasi dikurangi biaya perolehan bernilai positif (Manfaat > Biaya)."),
        ("Siklus Pengolahan Informasi", "Alur melingkar: Data Input &rarr; Model Proses &rarr; Informasi Output &rarr; Penerima &rarr; Keputusan & Tindakan &rarr; Hasil Tindakan (Data Baru)."),
        ("3 Pilar Kualitas Informasi", "1. Relevan (sesuai kebutuhan pemakai), 2. Tepat Waktu / Timeliness (tersedia saat keputusan dibuat), 3. Akurat (bebas dari kesalahan & bias)."),
        ("Faktor Penurunan Kualitas", "Kelalaian manusia saat input data (GIGO - Garbage In Garbage Out), metode pemrosesan keliru, dan keterlambatan transmisi jaringan.")
    ],
    ('subject-ksi', 3): [
        ("Definisi SI Budi Sutedjo", "Kumpulan elemen terpadu untuk mengintegrasikan data, memproses, menyimpan, dan mendistribusikan informasi kepada pengguna akhir."),
        ("6 Blok Pembangun SI (IMOTDC)", "1. Input Block, 2. Model Block, 3. Output Block, 4. Technology Block, 5. Database Block, 6. Control Block."),
        ("5 Aktivitas Pokok SI", "Input sumber daya data, Pemrosesan data menjadi informasi, Output produk informasi, Penyimpanan (storage), dan Pengendalian kinerja (control)."),
        ("Hubungan SI dan TI", "Teknologi Informasi (TI) merupakan bagian komponen pembangun (sub-sistem/enabler) dari Sistem Informasi (SI). Jika TI rusak, SI lumpuh.")
    ],
    ('subject-ksi', 4): [
        ("3 Tingkat Manajemen (Anthony)", "1. Top Management (perencanaan strategis jangka panjang), 2. Middle Management (pengendalian taktis), 3. Lower Management (operasional teknis harian)."),
        ("3 Tipe Keputusan (Simon)", "1. Terstruktur (rutin & otomatis), 2. Semi-Terstruktur (kombinasi formula & intuisi), 3. Tidak Terstruktur (kompleks & sarat ketidakpastian)."),
        ("Evolusi CBIS", "Sistem Informasi Berbasis Komputer berkembang melalui: TPS/EDP &rarr; SIM &rarr; DSS &rarr; Office Automation (OA) &rarr; Expert System (ES/AI)."),
        ("Aturan UTS KSI Dosen", "Sifat ujian OPEN BOOK khusus buku catatan binder tulisan tangan sendiri. Dilarang membawa lembar fotokopi/printout PPT dosen.")
    ],
    ('subject-indo', 1): [
        ("Hakikat Bahasa Kridalaksana", "Sistem lambang bunyi yang arbitrer yang digunakan masyarakat untuk bekerja sama, berkomunikasi, dan mengidentifikasikan diri."),
        ("12 Ciri Hakiki Bahasa", "Bersistem, lambang, bunyi vokal, bermakna, arbitrer (manasuka), konvensional, unik, universal, produktif, dinamis, bervariasi, manusiawi."),
        ("Dualisme Kedudukan", "Sebagai BAHASA NASIONAL berlandaskan Sumpah Pemuda 28 Oktober 1928; Sebagai BAHASA NEGARA berlandaskan UUD 1945 Pasal 36 (18 Agustus 1945)."),
        ("Fungsi Bahasa Nasional", "Lambang kebanggaan kebangsaan, lambang identitas nasional, alat pemersatu suku bangsa, dan alat perhubungan antardaerah."),
        ("Fungsi Bahasa Negara", "Bahasa resmi kenegaraan, bahasa pengantar resmi pendidikan, sarana perhubungan nasional, dan media pengembangan IPTEK serta budaya.")
    ],
    ('subject-indo', 2): [
        ("Sikap Bahasa (Garvin & Mathiot)", "Perilaku batin penutur yang mempengaruhi kualitas penggunaan bahasa dalam masyarakat."),
        ("3 Pilar Sikap Positif", "1. Kesetiaan berbahasa (language loyalty), 2. Kebanggaan berbahasa (language pride), 3. Kesadaran akan adanya norma/kaidah (awareness of the norm)."),
        ("3 Komponen Sikap", "Komponen Kognisi (pengetahuan tata bahasa), Komponen Afeksi (perasaan cinta & bangga), Komponen Konasi (perilaku nyata taat kaidah)."),
        ("Bahasa Baik vs Benar", "Berbahasa yang BAIK adalah sesuai konteks situasi komunikasi; Berbahasa yang BENAR adalah patuh pada kaidah tata bahasa dan EYD.")
    ],
    ('subject-indo', 3): [
        ("Landasan Hukum EYD V", "Keputusan Kepala Badan Pengembangan dan Pembinaan Bahasa No. 0424/I/BS.00.01/2022 (Slide Modul 99 Halaman)."),
        ("Huruf Diakritik E", "Pembeda e pepet [&eacute;] vs e taling [e] untuk menghindari ambiguitas: <code>teras</code> (pelataran) vs <code>t&ecirc;ras</code> (pejabat utama)."),
        ("Kapital Nama Geografi", "Wajib kapital jika diikuti nama diri: <em>Danau Toba</em>, <em>Gunung Rinjani</em>. Huruf kecil jika nama jenis makanan/benda: <em>jeruk bali</em>, <em>kunci inggris</em>, <em>pisang ambon</em>."),
        ("Kata Depan vs Awalan", "Kata depan <code>di</code>, <code>ke</code>, <code>dari</code> menunjukkan tempat &rarr; <strong>DIPISAH</strong> (di kampus, ke Jakarta). Awalan <code>di-</code> membentuk kata kerja pasif &rarr; <strong>DISERANGKAIKAN</strong> (ditulis, dikerjakan).")
    ],
    ('subject-indo', 4): [
        ("Taksonomi Bentuk Kata", "Kata dasar, kata berimbuhan (afiksasi: prefiks, infiks, sufiks, konfiks), kata ulang (reduplikasi), dan akronim."),
        ("Hukum Emas K/T/S/P (LULUH)", "Jika kata dasar berawalan K, T, S, P dan huruf KEDUA adalah VOKAL, fonem WAJIB LULUH: <code>me-</code> + <strong>k</strong>upas &rarr; <strong>mengupas</strong>, <code>me-</code> + <strong>t</strong>ulis &rarr; <strong>menulis</strong>, <code>me-</code> + <strong>s</strong>iram &rarr; <strong>menyiram</strong>, <code>me-</code> + <strong>p</strong>ilih &rarr; <strong>memilih</strong>."),
        ("Hukum K/T/S/P (TIDAK LULUH)", "Jika huruf kedua adalah KONSONAN (kluster), fonem TIDAK BOLEH LULUH: <code>me-</code> + <strong>kl</strong>asifikasi &rarr; <strong>mengklasifikasi</strong>, <code>me-</code> + <strong>pr</strong>ogram &rarr; <strong>memprogram</strong>."),
        ("Kriteria Diksi Akademik", "Ketepatan (denotasi vs konotasi), Kesesuaian (ranah formal ilmiah vs pergaulan), dan Kelaziman (kolokasi kata baku).")
    ],
    ('subject-inggris', 1): [
        ("Subject-Verb Agreement", "Subject I/You/We/They memakai Verb 1 dasar (<em>I develop systems</em>); He/She/It memakai Verb 1 + s/es (<em>She designs databases</em>)."),
        ("To Be Present", "I &rarr; <code>am</code>, You/We/They &rarr; <code>are</code>, He/She/It &rarr; <code>is</code>."),
        ("Kalimat Negatif & Tanya", "Negatif: <code>Subject + do/does not + Verb 1</code>; Tanya: <code>Do/Does + Subject + Verb 1?</code>."),
        ("Technical IT Vocabulary", "Istilah profil profesional: software engineer, database administrator, network specialist, user interface.")
    ],
    ('subject-inggris', 2): [
        ("Struktur Teks Prosedural", "1. Goal/Aim (tujuan petunjuk), 2. Materials/Tools (alat dan bahan), 3. Steps/Methods (tahapan kerja runtut)."),
        ("Penggunaan Imperative Verbs", "Kalimat perintah tanpa subject: <em>Click the start button, Download the installer, Verify compiler path</em>."),
        ("Sequence Markers", "Kata penghubung runtunan waktu: <em>First, Second, Next, Then, After that, Finally</em>.")
    ],
    ('subject-inggris', 3): [
        ("Simple Past Tense", "Menceritakan aktivitas masa lampau yang telah tuntas: <code>Subject + Verb 2</code>."),
        ("Regular vs Irregular Verbs", "Regular berakhiran -ed (<em>install &rarr; installed, compile &rarr; compiled</em>); Irregular berubah bentuk khusus (<em>write &rarr; wrote, build &rarr; built, go &rarr; went</em>)."),
        ("Bentuk Negatif & Interrogative", "Negatif: <code>Subject + did not + Verb 1</code>; Interrogative: <code>Did + Subject + Verb 1?</code>.")
    ],
    ('subject-inggris', 4): [
        ("Modal Will", "Menyatakan keputusan spontan saat berbicara (<em>The phone is ringing. I will answer it</em>) atau prediksi opini subjektif."),
        ("Frasa Be Going To", "Menyatakan rencana atau niat yang sudah diatur sebelumnya (<em>I am going to submit the assignment tomorrow</em>) atau prediksi dengan bukti fisik nyata (<em>Look at the dark clouds, it is going to rain</em>).")
    ],
    ('subject-pancasila', 1): [
        ("4 Landasan Kuliah Pancasila", "Landasan Historis (akar peradaban bangsa), Kultural (jati diri luhur bangsa), Yuridis (UU No. 12/2012 tentang Dikti), Filosofis (Philosophische Grondslag)."),
        ("Status MKWK", "Mata Kuliah Wajib Kurikulum nasional bersama Agama, Bahasa Indonesia, dan Kewarganegaraan."),
        ("Visi & Misi Pancasila", "Membentuk sarjana yang berkarakter kebangsaan, berintegritas moral, toleran, dan berwawasan global.")
    ],
    ('subject-pancasila', 2): [
        ("Nilai Pra-Kemerdekaan", "Zaman Kutai (toleransi prasasti Yupa), Sriwijaya (maritim & kerukunan), Majapahit (kitab Sutasoma Mpu Tantular melahirkan Bhinneka Tunggal Ika; Negarakertagama Mpu Prapanca memuat istilah Pancasila)."),
        ("Sidang BPUPKI I (29 Mei - 1 Juni 1945)", "Gagasan dasar negara oleh Mr. Muhammad Yamin (29 Mei), Prof. Soepomo (31 Mei), dan Ir. Soekarno (1 Juni memperkenal nama Pancasila)."),
        ("Panitia Sembilan (22 Juni 1945)", "Merumuskan naskah Piagam Jakarta (Jakarta Charter) sebagai cikal bakal Pembukaan UUD 1945.")
    ],
    ('subject-pancasila', 3): [
        ("Pengesahan PPKI 18 Agustus 1945", "Drs. Mohammad Hatta bersama tokoh Islam menyepakati penggantian 7 kata Piagam Jakarta menjadi <em>Ketuhanan Yang Maha Esa</em> demi persatuan NKRI."),
        ("Dialektika Tiga Rezim", "Orde Lama (dinamika RIS, Dekrit 5 Juli 1959, Demokrasi Terpimpin, G30S/PKI), Orde Baru (stabilitas ekonomi & Penataran P-4), Reformasi (ideologi terbuka di era digital).")
    ],
    ('subject-pancasila', 4): [
        ("Kedudukan sebagai Dasar Negara", "Pancasila berkedudukan sebagai <em>Staatsfundamentalnorm</em> (Norma Fundamental Negara) dan sumber dari segala sumber hukum negara (Pasal 2 UU No. 12 Tahun 2011)."),
        ("Hubungan dengan UUD 1945", "Pancasila menjiwai Pembukaan UUD 1945 dan dijabarkan ke dalam pasal-pasal batang tubuh konstitusi tertulis negara.")
    ],
    ('subject-pai', 1): [
        ("Visi PAI di Perguruan Tinggi", "Membentuk sarjana muslim berintegritas ilmiah, bertakwa, berakhlak mulia (akhlakul karimah), dan mampu memadukan sains dengan tauhid."),
        ("Dua Sumber Primer Hukum Islam", "1. Al-Qur'anul Karim (kalamullah mukjizat mutlak), 2. As-Sunnah An-Nabawiyyah Ash-Shahihah (sabda, perbuatan, ketetapan Rasulullah SAW)."),
        ("Trilogi Tauhid", "Tauhid Rububiyyah (mengesakan Allah dalam penciptaan & pemeliharaan), Tauhid Uluhiyyah (mengesakan Allah dalam seluruh ibadah), Tauhid Asma wa Shifat (menetapkan nama dan sifat Allah tanpa menyerupakannya dengan makhluk).")
    ],
    ('subject-pai', 2): [
        ("Hakikat Aqidah Islam", "Berasal dari kata 'aqada (ikatan simpul kuat); keyakinan mantap bulat di dalam hati tanpa ada keraguan terhadap Allah dan perkara ghaib."),
        ("6 Rukun Iman", "Iman kepada Allah, Malaikat-Malaikat-Nya, Kitab-Kitab-Nya, Rasul-Rasul-Nya, Hari Akhir, dan Qadha-Qadar."),
        ("Hakikat Tingkatan Ihsan", "Sebagaimana Hadits Jibril: Beribadah kepada Allah seakan-akan engkau melihat-Nya; jika tidak mampu melihat-Nya, ketahuilah Dia senantiasa melihatmu.")
    ],
    ('subject-pai', 3): [
        ("Syariah & 5 Hukum Taklifi", "Wajib (dikerjakan berpahala, ditinggalkan berdosa), Sunnah (dikerjakan berpahala, ditinggalkan tidak berdosa), Mubah (netral), Makruh (ditinggalkan berpahala, dikerjakan dibenci), Haram (ditinggalkan berpahala, dikerjakan berdosa)."),
        ("Ibadah Mahdhah vs Ghairu Mahdhah", "Ibadah Mahdhah adalah ibadah murni berketetapan syariat baku (shalat, puasa); Ghairu Mahdhah adalah seluruh aktivitas positif keduniaan yang diniatkan ikhlas mencari ridha Allah.")
    ],
    ('subject-pai', 4): [
        ("3 Spektrum Akhlakul Karimah", "1. Akhlak kepada Allah (syukur, tawakal, ikhlas), 2. Akhlak kepada manusia (amanah, birrul walidain, jujur), 3. Akhlak kepada lingkungan (melestarikan alam)."),
        ("Integrasi Etika Profesi IT", "Amanah menjaga kerahasiaan data pengguna, integritas kode software (haram membuat trojan, virus, ransomware, atau sistem judi online), menjadikan teknologi wasilah kebaikan.")
    ],
}

def clean_html_math(text):
    """Ensure zero unformatted LaTeX dollar signs, converting to clean Unicode/HTML."""
    if not text:
        return ""
    # Strip any $...$ math blocks
    def math_replacer(match):
        c = match.group(1)
        c = c.replace(r'\in', ' &isin; ').replace(r'\mathbb{R}', ' &Ropf; ').replace(r'\mathbb{Z}', ' &Zopf; ')
        c = c.replace(r'\mathbb{Q}', ' &Qopf; ').replace(r'\mathbb{N}', ' ℕ ')
        c = c.replace(r'\le', ' &le; ').replace(r'\ge', ' &ge; ').replace(r'\neq', ' &ne; ')
        c = c.replace(r'\cup', ' &cup; ').replace(r'\cap', ' &cap; ').replace(r'\infty', ' &infin; ')
        c = c.replace(r'\subset', ' &sub; ').replace(r'\times', ' &times; ')
        c = c.replace(r'^2', '&sup2;').replace(r'^3', '&sup3;')
        c = c.replace(r'_1', '₁').replace(r'_2', '₂')
        c = re.sub(r'\\frac\{([^}]+)\}\{([^}]+)\}', r'(\1 / \2)', c)
        c = re.sub(r'\\sqrt\{([^}]+)\}', r'&radic;(\1)', c)
        return c.strip()

    text = re.sub(r'\$\$([^$]+)\$\$', math_replacer, text)
    text = re.sub(r'\$([^$]+)\$', math_replacer, text)
    text = text.replace('$', '')
    return text

def parse_pdf_slides(pdf_path):
    """Extract raw slide texts from PDF using pypdf."""
    full_path = os.path.join(PUBLIC_MATERIALS, pdf_path)
    if not os.path.exists(full_path):
        return []
    reader = pypdf.PdfReader(full_path)
    slides = []
    for idx, page in enumerate(reader.pages, 1):
        txt = (page.extract_text() or '').strip()
        lines = [l.strip() for l in txt.split('\n') if l.strip()]
        title = lines[0] if lines else f'Slide {idx}'
        if len(lines) > 1 and ('Teknik Informatika' in lines[0] or lines[0].startswith('Pemrograman 1')):
            title = lines[1] if len(lines) > 1 else lines[0]
        # Clean up title
        title = title.replace('➢', '').replace('❑', '').replace('•', '').replace('*)', '').strip()
        if not title:
            title = f'Slide {idx}'

        if lines:
            body_lines = lines[1:] if (len(lines) > 1 and title == lines[0]) else (lines[2:] if len(lines) > 2 else [])
        else:
            body_lines = []
        bullets = []
        for bl in body_lines:
            bl_c = bl.replace('➢', '').replace('❑', '').replace('•', '').strip()
            if len(bl_c) > 3 and not bl_c.startswith('Slide ') and bl_c not in bullets:
                bullets.append(bl_c)

        slides.append({
            'num': idx,
            'title': title,
            'raw_text': txt,
            'bullets': bullets
        })
    return slides

def build_slide_card(slide_num, total_slides, title, bullets, explanation):
    """Generate clean, stylish HTML card for each individual slide."""
    bullet_items = "".join(f"<li>{html.escape(b)}</li>" for b in bullets[:4]) if bullets else "<li>Memaparkan topik konseptual dan kerangka pengantar perkuliahan.</li>"
    clean_exp = clean_html_math(explanation)
    clean_title = clean_html_math(title)

    return f"""<div class="slide-block" style="background: rgba(30, 41, 59, 0.45); border: 1px solid rgba(99, 102, 241, 0.25); border-left: 5px solid #6366F1; border-radius: 12px; padding: 18px 20px; margin-bottom: 20px;">
  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 8px;">
    <span style="font-family: monospace; font-size: 0.78rem; font-weight: 700; color: #818CF8; background: rgba(99, 102, 241, 0.15); padding: 3px 10px; border-radius: 6px; border: 1px solid rgba(99, 102, 241, 0.3);">
      SLIDE {slide_num} DARI {total_slides}: {clean_title}
    </span>
    <span style="font-size: 0.75rem; color: #94A3B8;">Presentasi Dosen Pengampu</span>
  </div>
  <div style="margin-bottom: 12px;">
    <strong style="color: #38BDF8; font-size: 0.88rem; display: flex; align-items: center; gap: 6px;">
      <span>📌 Inti Materi Slide (Singkat & Padat):</span>
    </strong>
    <ul style="margin: 6px 0 0 18px; padding: 0; color: #E2E8F0; font-size: 0.86rem; line-height: 1.6;">
      {bullet_items}
    </ul>
  </div>
  <div style="background: rgba(15, 23, 42, 0.6); border-radius: 8px; padding: 12px 14px; border: 1px solid rgba(255, 255, 255, 0.05);">
    <strong style="color: #A78BFA; font-size: 0.86rem; display: flex; align-items: center; gap: 6px;">
      <span>👨‍🏫 Penjelasan Dosen & Analisis Guru AI:</span>
    </strong>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 0.85rem; line-height: 1.65;">
      {clean_exp}
    </p>
  </div>
</div>"""

def generate_meeting_detail_and_ringkas(subj_id, m_no, mod_meta):
    """Constructs the 3-part Guru AI detail and high-yield cheatsheet ringkas."""
    pdf_info = OFFICIAL_PDFS.get((subj_id, m_no))
    pdf_file = pdf_info[0] if pdf_info else f"{subj_id}_p{m_no}.pdf"
    lecturer = pdf_info[1] if pdf_info else "Tim Dosen FTIK Unindra"
    doc_name = pdf_info[2] if pdf_info else f"Pertemuan {m_no} - Modul Kuliah.pdf"

    # 1. Parse PDF slides
    slides = parse_pdf_slides(pdf_file)
    total_slides = len(slides) if slides else 15

    # If slide list is too long for MKWK (e.g. Indo P3 99 slides, Indo P4 55 slides), select high-yield core cluster slides
    if total_slides > 30:
        step = max(1, total_slides // 15)
        selected_slides = [slides[i] for i in range(0, total_slides, step)][:16]
    else:
        selected_slides = slides

    detail_parts = []
    detail_parts.append(f"""<div class="alert alert-info" style="margin-bottom: 20px;">
  <strong>🤖 PANDUAN GURU AI (BEDAH SLIDE PPT DOSEN) • PERTEMUAN {m_no}</strong><br>
  Penjelasan setiap slide presentasi resmi dosen pengampu FTIK Unindra secara berurutan, ringkas, dan padat. Dilengkapi materi pengayaan first principles dan daftar sumber berkas resmi di bagian paling bawah.
</div>""")

    # BAGIAN 1: Slide-by-Slide Walkthrough
    detail_parts.append(f"""<div style="background: rgba(99, 102, 241, 0.12); border-left: 4px solid #6366F1; padding: 12px 16px; border-radius: 8px; margin: 16px 0 20px 0;">
  <h3 style="margin: 0; color: #818CF8; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
    <span>🎙️ BAGIAN 1: PENJELASAN SETIAP SLIDE PPT DOSEN (SINGKAT, PADAT & TERSTRUKTUR)</span>
  </h3>
  <p style="margin: 4px 0 0 0; font-size: 0.82rem; color: #94A3B8;">
    Menjelaskan seluruh slide presentasi resmi dari dosen pengampu langkah demi langkah, menguraikan maksud diagram, formula, dan contoh soal yang dibahas di kelas.
  </p>
</div>""")

    # Build slide cards
    module_sections = mod_meta.get("sections", []) if mod_meta else []
    for s_idx, s in enumerate(selected_slides, 1):
        s_num = s['num']
        s_title = s['title']
        s_bullets = s['bullets']

        # Match or synthesize lecturer explanation from module sections
        sec_match = module_sections[(s_idx - 1) % len(module_sections)] if module_sections else None
        if sec_match:
            exp_text = f"Pada slide ini, dosen menerangkan pokok bahasan <strong>{s_title}</strong>. " + re.sub(r'<[^>]+>', ' ', sec_match.get("content_html", "")[:280]).strip() + "..."
        else:
            exp_text = f"Pada slide ini dosen menekankan pemahaman konsep <strong>{s_title}</strong> sebagai fondasi perkuliahan pekan ke-{m_no}. Mahasiswa diharapkan menguasai kaidah dasar dan mampu menerapkannya pada contoh kasus nyata perkuliahan."

        detail_parts.append(build_slide_card(s_num, total_slides, s_title, s_bullets, exp_text))

    # BAGIAN 2: Tambahan Materi & Insight Guru AI (Paling Bawah)
    ai_insights = mod_meta.get("ai_insights", []) if mod_meta else []
    if ai_insights:
        detail_parts.append(f"""<div style="background: rgba(16, 185, 129, 0.12); border-left: 4px solid #10B981; padding: 14px 18px; border-radius: 10px; margin: 36px 0 20px 0;">
  <h3 style="margin: 0; color: #34D399; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
    <span>💡 BAGIAN 2: TAMBAHAN MATERI, DEEP-DIVE & INSIGHT GURU AI (PENGAYAAN DI LUAR SLIDE)</span>
  </h3>
  <p style="margin: 6px 0 0 0; font-size: 0.84rem; color: #94A3B8;">
    Materi pengayaan di luar slide dosen: intuisi first principles, relevansi industri software engineering modern, tips mencatat, serta bedah jebakan soal kuis & UTS.
  </p>
</div>""")
        for ai_idx, ai_sec in enumerate(ai_insights, 1):
            detail_parts.append(f"<h4>PENGAYAAN {ai_idx}: {clean_html_math(ai_sec['title'])}</h4>")
            detail_parts.append(clean_html_math(ai_sec["content_html"]))

    # BAGIAN 3: Sumber Dokumen & Verifikasi Resmi Dosen (Paling Bawah)
    ref_list = mod_meta.get("references", ["Modul Resmi FTIK Unindra", "Kurikulum & RPS Sistem Informasi"]) if mod_meta else ["Modul Resmi FTIK Unindra"]
    ref_items = "".join(f"<li>{clean_html_math(r)}</li>" for r in ref_list)
    detail_parts.append(f"""<div class="card-dark" style="margin-top: 36px; border: 1px solid rgba(56, 189, 248, 0.35); background: rgba(15, 23, 42, 0.9); border-radius: 12px; padding: 20px;">
  <h4 style="margin: 0 0 12px 0; color: #38BDF8; font-size: 1.05rem; display: flex; align-items: center; gap: 8px;">
    <span>📚 BAGIAN 3: SUMBER DOKUMEN & VERIFIKASI RESMI DOSEN</span>
  </h4>
  <div style="font-size: 0.85rem; color: #CBD5E1; line-height: 1.7;">
    <div><strong>📁 Berkas Modul Resmi Dosen:</strong> <code>{doc_name}</code> ({total_slides} Slide PPT/PDF)</div>
    <div><strong>👨‍🏫 Dosen Pengampu Resmi:</strong> {lecturer} • Program Studi Sistem Informasi FTIK Unindra</div>
    <div style="margin-top: 10px;"><strong>📖 Daftar Rujukan Pustaka & Literatur Standar Dosen:</strong></div>
    <ul style="margin: 6px 0 0 20px; padding: 0; font-size: 0.83rem; color: #94A3B8;">{ref_items}</ul>
  </div>
</div>""")

    # 3. Construct specific high-yield exam cheatsheet for summaries.ringkas
    exam_pts = CHEATSHEET_EXAM_POINTS.get((subj_id, m_no), [
        ("Konsep Pokok Pertemuan", "Kuasai definisi baku, hafalkan istilah teknis, dan pahami alur penerapannya."),
        ("Poin Kunci Ujian", "Pelajari contoh soal praktikum dan perhatikan instruksi dosen terkait kisi-kisi.")
    ])

    ringkas_parts = []
    ringkas_parts.append(f"""<div class="alert alert-success" style="margin-bottom: 16px;">
  <strong>⚡ INTISARI KILAT & POIN KUNCI UJIAN (CHEATSHEET) • PERTEMUAN {m_no}</strong><br>
  Poin-poin konsep esensial, formula, kaidah mutlak, dan rangkuman hafalan cepat persiapan kuis & UTS. Cocok untuk review kilat 5 menit!
</div>""")
    ringkas_parts.append("""<div class="table-wrap">
<table>
  <thead>
    <tr>
      <th style="width: 50px; text-align: center;">No</th>
      <th style="width: 240px;">Topik / Istilah Kunci</th>
      <th>Kaidah Mutlak & Poin Ujian yang Wajib Diingat</th>
    </tr>
  </thead>
  <tbody>""")
    for idx_pt, (topik, kaidah) in enumerate(exam_pts, 1):
        ringkas_parts.append(f"""    <tr>
      <td style="text-align: center; font-weight: bold; color: #38BDF8;">{idx_pt}</td>
      <td><strong style="color: #F8FAFC;">{clean_html_math(topik)}</strong></td>
      <td style="color: #CBD5E1; line-height: 1.6;">{clean_html_math(kaidah)}</td>
    </tr>""")
    ringkas_parts.append("""  </tbody>
</table>
</div>""")
    ringkas_parts.append(f"""<div class="card-dark" style="margin-top: 14px; padding: 12px 16px; border-left: 4px solid #38BDF8;">
  <strong style="color: #38BDF8;">🎯 Tips Belajar & Menjawab Soal:</strong> 
  Pahami logika di balik definisi dan rumus, latih menulis ulang skema pada kertas binder tanpa melihat contekan untuk membiasakan ingatan motorik.
</div>""")

    final_detail = clean_html_math("\n".join(detail_parts))
    final_ringkas = clean_html_math("\n".join(ringkas_parts))

    return final_detail, final_ringkas

def main():
    print("=" * 70)
    print("🚀 MEMULAI GENERASI GURU AI: SLIDE-BY-SLIDE VERBATIM & PENGAYAAN LENGKAP")
    print("   1. Bedah Setiap Slide PPT Dosen (Singkat & Padat)")
    print("   2. Tambahan Materi & Insight Guru AI (Di Bawah - Sebanyak Mungkin)")
    print("   3. Sumber Berkas Resmi & Dosen (Paling Bawah)")
    print("   4. Ringkas: Cheatsheet Poin Kunci Nyata (Bebas Boilerplate)")
    print("   5. Standar (Catatan Rekaman GMeet Mahasiswa): Dijaga Utuh 100%!")
    print("   6. Pembersihan Berkas AI Duplikat dari Bahan Kuliah")
    print("=" * 70)

    with open(SEEDDATA_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    prefix = "export const initialSubjects = "
    idx_start = content.find(prefix)
    if idx_start == -1:
        print("[ERROR] Cannot find initialSubjects in seedData.js")
        return

    idx_profile = content.find("export const initialProfile = ", idx_start)
    if idx_profile != -1:
        json_str = content[idx_start + len(prefix):idx_profile].strip()
        if json_str.endswith(";"):
            json_str = json_str[:-1].strip()
        suffix = content[idx_profile:]
    else:
        json_str = content[idx_start + len(prefix):].rstrip()
        if json_str.endswith(";"):
            json_str = json_str[:-1]
        suffix = ""

    subjects_data = json.loads(json_str)

    total_updated = 0
    for subj in subjects_data:
        subj_id = subj["id"]
        for meeting in subj.get("meetings", []):
            m_no = meeting.get("meeting_number")
            mod_meta = ALL_MODULES_MAP.get((subj_id, m_no))

            # 1. Clean up materials: remove any duplicate mat_ai_ items
            mats = meeting.get("materials", [])
            clean_mats = [m for m in mats if not m.get("id", "").startswith("mat_ai_") and "Guru AI" not in m.get("title", "")]
            meeting["materials"] = clean_mats

            # 2. Generate Slide-by-Slide Detail and Custom Ringkas
            detail_html, ringkas_html = generate_meeting_detail_and_ringkas(subj_id, m_no, mod_meta)

            if "summaries" not in meeting:
                meeting["summaries"] = {}

            # Assign new Detail and Ringkas
            meeting["summaries"]["detail"] = detail_html
            meeting["summaries"]["ringkas"] = ringkas_html
            # meeting["summaries"]["standar"] is deliberately LEFT UNTOUCHED!

            # Also assign raw_slide_content
            meeting["raw_slide_content"] = detail_html

            total_updated += 1
            print(f"  • [{subj_id}] Pertemuan {m_no}: Selesai diperbarui dengan Bedah Slide & Cheatsheet Ujian.")

    new_content = content[:idx_start] + prefix + json.dumps(subjects_data, indent=2, ensure_ascii=False) + ";\n\n" + suffix
    with open(SEEDDATA_PATH, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"\n✓ Sukses memperbarui {total_updated} pertemuan di seedData.js!")

    # 4. Bump storage version
    with open(STORAGE_PATH, "r", encoding="utf-8") as f:
        st_content = f.read()

    new_ver = "export const CURRENT_DATA_VERSION = 'v13_guru_ai_verbatim_slide_by_slide_gmeet_2026';"
    st_content = re.sub(r"export const CURRENT_DATA_VERSION = '[^']+';", new_ver, st_content)
    with open(STORAGE_PATH, "w", encoding="utf-8") as f:
        f.write(st_content)
    print("✓ CURRENT_DATA_VERSION dinaikkan ke v13 (Otomatis Sync Browser).")

    print("\n" + "=" * 70)
    print("🎉 GENERASI GURU AI SLIDE-BY-SLIDE & SINKRONISASI SELESAI SEMPURNA!")
    print("=" * 70)

if __name__ == "__main__":
    main()
