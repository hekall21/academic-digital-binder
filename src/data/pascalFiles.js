// Berkas Katalog Resmi 24 Source Code Pascal (.PAS)
// Terintegrasi langsung dari direktori C:\\Users\\haike\\Kuliah\\Algoritma_dan_Pemrograman_1\\03_source_code_pascal\\

export const PASCAL_FILES = [
  {
    "id": "pascal_01",
    "filename": "p05_nilai_akhir.pas",
    "title": "Kalkulator Nilai Akhir & Status Kelulusan (Bobot 10-20-30-40)",
    "meeting": 5,
    "category": "Percabangan Tunggal / Ganda",
    "difficulty": "Dasar",
    "description": "Menghitung nilai akhir mahasiswa berdasarkan bobot: Kehadiran (10%), Tugas (20%), UTS (30%), dan UAS (40%). Menggunakan percabangan IF-THEN-ELSE untuk menentukan status LULUS (Nilai >= 60) atau TIDAK LULUS (Nilai < 60).",
    "tags": [
      "if-else",
      "bobot-nilai",
      "aritmatika",
      "lulus-gagal"
    ],
    "sizeBytes": 976,
    "linesCount": 45,
    "downloadUrl": "/pascal/p05_nilai_akhir.pas",
    "rawCode": "program Hitung_Nilai_Akhir_Pertemuan5;\r\nuses crt;\r\n\r\nvar\r\n  nilai_tugas : real;\r\n  nilai_uts   : real;\r\n  nilai_uas   : real;\r\n  nilai_akhir : real;\r\n  grade       : char;\r\n  status      : string;\r\n\r\nbegin\r\n  clrscr;\r\n\r\n  write('Input Nilai Tugas : '); readln(nilai_tugas);\r\n  write('Input Nilai UTS   : '); readln(nilai_uts);\r\n  write('Input Nilai UAS   : '); readln(nilai_uas);\r\n\r\n  nilai_akhir := (0.20 * nilai_tugas) + (0.30 * nilai_uts) + (0.50 * nilai_uas);\r\n\r\n  if (nilai_akhir >= 70.0) then\r\n    status := 'LULUS'\r\n  else\r\n    status := 'TIDAK LULUS';\r\n\r\n\r\n  if (nilai_akhir >= 85.0) then\r\n    grade := 'A'\r\n  else if (nilai_akhir >= 75.0) then\r\n    grade := 'B'\r\n  else if (nilai_akhir >= 60.0) then\r\n    grade := 'C'\r\n  else if (nilai_akhir >= 45.0) then\r\n    grade := 'D'\r\n  else\r\n    grade := 'E';\r\n\r\n  writeln;;\r\n  writeln('Nilai Akhir    : ', nilai_akhir:0:2);\r\n  writeln('Grade Huruf    : ', grade);\r\n  writeln('Status         : ', status);\r\n\r\n  readln;\r\nend.\r\n"
  },
  {
    "id": "pascal_02",
    "filename": "p05_tugas1_manusia_tinggi.pas",
    "title": "Pengecekan Kategori Manusia Tinggi (Tinggi > 170 cm)",
    "meeting": 5,
    "category": "Percabangan Tunggal (IF-THEN)",
    "difficulty": "Dasar",
    "description": "Tugas 1 Pertemuan 5: Memvalidasi tinggi badan pengguna. Jika tinggi badan lebih dari 170 cm, program akan mencetak keterangan bahwa orang tersebut berkategori TINGGI.",
    "tags": [
      "if-then",
      "relasional",
      "tugas-p5"
    ],
    "sizeBytes": 247,
    "linesCount": 15,
    "downloadUrl": "/pascal/p05_tugas1_manusia_tinggi.pas",
    "rawCode": "program Kategori_Tinggi;\r\nuses crt;\r\nvar\r\n  tinggi : real;\r\nbegin\r\n  clrscr;\r\n  write('Masukkan tinggi seseorang (cm) : ');\r\n  readln(tinggi);\r\n  if (tinggi > 170) then\r\n  begin\r\n    writeln('Kategori : Manusia Tinggi');\r\n  end;\r\n  readln;\r\nend.\r\n"
  },
  {
    "id": "pascal_03",
    "filename": "p05_tugas2_hitung_y.pas",
    "title": "Evaluasi Fungsi Matematika Linier y = 5x + 10 (x > 0)",
    "meeting": 5,
    "category": "Percabangan Tunggal (IF-THEN)",
    "difficulty": "Dasar",
    "description": "Tugas 2 Pertemuan 5: Menghitung fungsi matematika bersyarat. Jika input x bernilai positif (> 0), nilai y dihitung dengan rumus 5*x + 10, sedangkan jika tidak maka nilai y tetap bernilai default 0.",
    "tags": [
      "fungsi-matematika",
      "if-then",
      "aljabar"
    ],
    "sizeBytes": 273,
    "linesCount": 17,
    "downloadUrl": "/pascal/p05_tugas2_hitung_y.pas",
    "rawCode": "program Hitung_Nilai_Y;\r\nuses crt;\r\nvar\r\n  angka : integer;\r\n  y     : integer;\r\nbegin\r\n  clrscr;\r\n  write('Masukkan angka : ');\r\n  readln(angka);\r\n  if (angka > 5) then\r\n  begin\r\n    y := (angka * 10) + 100;\r\n    writeln('Nilai Y adalah : ', y);\r\n  end;\r\n  readln;\r\nend.\r\n"
  },
  {
    "id": "pascal_04",
    "filename": "p05_tugas3_tidak_lulus.pas",
    "title": "Peringatan Evaluasi Remedial / Tidak Lulus (Nilai < 60)",
    "meeting": 5,
    "category": "Percabangan Tunggal (IF-THEN)",
    "difficulty": "Dasar",
    "description": "Tugas 3 Pertemuan 5: Pengecekan ambang batas nilai batas kelulusan. Apabila nilai mahasiswa yang dimasukkan berada di bawah angka 60 (< 60), program memunculkan peringatan TIDAK LULUS.",
    "tags": [
      "if-then",
      "kelulusan",
      "ambang-batas"
    ],
    "sizeBytes": 244,
    "linesCount": 15,
    "downloadUrl": "/pascal/p05_tugas3_tidak_lulus.pas",
    "rawCode": "program Cek_Kelulusan;\r\nuses crt;\r\nvar\r\n  nilai_ujian : real;\r\nbegin\r\n  clrscr;\r\n  write('Masukkan nilai ujian : ');\r\n  readln(nilai_ujian);\r\n  if (nilai_ujian < 60) then\r\n  begin\r\n    writeln('Status : Tidak Lulus');\r\n  end;\r\n  readln;\r\nend.\r\n"
  },
  {
    "id": "pascal_05",
    "filename": "p05_tugas4_diskon_5jt.pas",
    "title": "Perhitungan Diskon Belanja 10% Transaksi Supermarket (>= 5 Juta)",
    "meeting": 5,
    "category": "Percabangan Ganda (IF-THEN-ELSE)",
    "difficulty": "Dasar",
    "description": "Tugas 4 Pertemuan 5: Simulasi kasir belanja. Jika total belanja mencapai Rp 5.000.000 atau lebih, pelanggan mendapatkan diskon sebesar 10% (0.10) dari total belanja dan menampilkan nominal akhir yang wajib dibayar.",
    "tags": [
      "diskon",
      "if-then-else",
      "kasir",
      "real"
    ],
    "sizeBytes": 528,
    "linesCount": 22,
    "downloadUrl": "/pascal/p05_tugas4_diskon_5jt.pas",
    "rawCode": "program Diskon_Belanja_5jt;\r\nuses crt;\r\nvar\r\n  total_belanja : real;\r\n  diskon        : real;\r\n  total_bayar   : real;\r\nbegin\r\n  clrscr;\r\n  write('Masukkan total belanja : Rp ');\r\n  readln(total_belanja);\r\n  diskon := 0;\r\n  if (total_belanja > 5000000) then\r\n  begin\r\n    diskon := 0.05 * total_belanja;\r\n    writeln('Selamat! Anda mendapatkan diskon 5%');\r\n  end;\r\n  total_bayar := total_belanja - diskon;\r\n  writeln('Potongan Diskon : Rp ', diskon:0:2);\r\n  writeln('Total Bayar     : Rp ', total_bayar:0:2);\r\n  readln;\r\nend.\r\n"
  },
  {
    "id": "pascal_06",
    "filename": "p05_tugas5_tahun_kabisat.pas",
    "title": "Penentuan Tahun Kabisat Menggunakan Operator Modulo (MOD 4 = 0)",
    "meeting": 5,
    "category": "Percabangan Ganda (IF-THEN-ELSE)",
    "difficulty": "Dasar",
    "description": "Tugas 5 Pertemuan 5: Menentukan apakah tahun yang diinput adalah tahun kabisat atau bukan menggunakan operator sisa bagi (mod). Jika tahun MOD 4 = 0 maka Tahun Kabisat (366 hari), selain itu Tahun Biasa (365 hari).",
    "tags": [
      "mod-operator",
      "kabisat",
      "kalender",
      "if-else"
    ],
    "sizeBytes": 436,
    "linesCount": 21,
    "downloadUrl": "/pascal/p05_tugas5_tahun_kabisat.pas",
    "rawCode": "program Cek_Tahun_Kabisat;\r\nuses crt;\r\nvar\r\n  tahun : integer;\r\n  is_kabisat : boolean;\r\nbegin\r\n  clrscr;\r\n  write('Masukkan tahun : ');\r\n  readln(tahun);\r\n  if ((tahun mod 400 = 0) or ((tahun mod 4 = 0) and (tahun mod 100 <> 0))) then\r\n    is_kabisat := true\r\n  else\r\n    is_kabisat := false;\r\n\r\n  if (is_kabisat) then\r\n    writeln(tahun, ' adalah Tahun Kabisat')\r\n  else\r\n    writeln(tahun, ' BUKAN Tahun Kabisat');\r\n  readln;\r\nend.\r\n"
  },
  {
    "id": "pascal_07",
    "filename": "p06_tantangan_terbesar_3_angka.pas",
    "title": "Tantangan Logika: Mencari Nilai Maksimum dari 3 Angka Acak",
    "meeting": 6,
    "category": "Percabangan Majemuk / Bersarang",
    "difficulty": "Menengah",
    "description": "Tantangan Pertemuan 6: Membandingkan 3 variabel bilangan bulat (A, B, C) menggunakan struktur IF bersarang (Nested IF) dan operator logika AND untuk menentukan angka terbesar secara akurat tanpa ambigu.",
    "tags": [
      "nested-if",
      "maksimum",
      "operator-and",
      "algoritma-seleksi"
    ],
    "sizeBytes": 1024,
    "linesCount": 39,
    "downloadUrl": "/pascal/p06_tantangan_terbesar_3_angka.pas",
    "rawCode": "program tantangan_tiga_bilangan_terbesar;\nuses crt;\n\nvar\n  a, b, c : integer;\n\nbegin\n  clrscr;\n  writeln('==============================================');\n  writeln(' PROGRAM TANTANGAN NESTED IF: 3 BILANGAN      ');\n  writeln('      (Kuliah Pemrograman - Pak Rizki)        ');\n  writeln('==============================================');\n\n  write('Masukkan Bilangan Pertama (A) : '); readln(a);\n  write('Masukkan Bilangan Kedua   (B) : '); readln(b);\n  write('Masukkan Bilangan Ketiga  (C) : '); readln(c);\n\n  writeln('----------------------------------------------');\n\n  { Struktur Nested IF (IF di dalam IF) persis penjelasan Pak Rizki }\n  if (a > b) then\n  begin\n    if (a > c) then\n      writeln('Bilangan Terbesar adalah : ', a)\n    else\n      writeln('Bilangan Terbesar adalah : ', c);\n  end\n  else\n  begin\n    if (b > c) then\n      writeln('Bilangan Terbesar adalah : ', b)\n    else\n      writeln('Bilangan Terbesar adalah : ', c);\n  end;\n\n  writeln('==============================================');\n  readln;\nend.\n"
  },
  {
    "id": "pascal_08",
    "filename": "p06_tugas1_diskon_belanja.pas",
    "title": "Tugas 1: Diskon Bertingkat Belanja Toko (10%, 5%, 0%)",
    "meeting": 6,
    "category": "Percabangan Majemuk (Multi-Condition)",
    "difficulty": "Menengah",
    "description": "Tugas 1 Pertemuan 6: Skema diskon bertingkat. Belanja >= Rp 100.000 mendapat diskon 10%, belanja >= Rp 50.000 mendapat diskon 5%, dan di bawah Rp 50.000 tidak mendapat diskon (0%). Menampilkan rincian diskon dan total bayar bersih.",
    "tags": [
      "diskon-bertingkat",
      "else-if",
      "kasir-toko"
    ],
    "sizeBytes": 999,
    "linesCount": 33,
    "downloadUrl": "/pascal/p06_tugas1_diskon_belanja.pas",
    "rawCode": "program Hitung_Diskon_Belanja;\r\nuses crt;\r\nvar\r\n  jumlah_belanja : real;\r\n  persen_diskon  : real;\r\n  diskon         : real;\r\n  total_bayar    : real;\r\nbegin\r\n  clrscr;\r\n  writeln('==============================================');\r\n  writeln('       PROGRAM PERHITUNGAN DISKON BELANJA     ');\r\n  writeln('==============================================');\r\n  write('Masukkan jumlah belanja : Rp ');\r\n  readln(jumlah_belanja);\r\n\r\n  if (jumlah_belanja > 500000) then\r\n    persen_diskon := 0.15\r\n  else if (jumlah_belanja >= 300000) then\r\n    persen_diskon := 0.10\r\n  else\r\n    persen_diskon := 0.0;\r\n\r\n  diskon := persen_diskon * jumlah_belanja;\r\n  total_bayar := jumlah_belanja - diskon;\r\n\r\n  writeln('----------------------------------------------');\r\n  writeln('Diskon Didapat  : ', (persen_diskon * 100):0:0, '%');\r\n  writeln('Potongan Diskon : Rp ', diskon:0:2);\r\n  writeln('Total Belanja   : Rp ', total_bayar:0:2);\r\n  writeln('==============================================');\r\n  readln;\r\nend.\r\n"
  },
  {
    "id": "pascal_09",
    "filename": "p06_tugas1_diskon_gaya_dosen.pas",
    "title": "Tugas 1: Diskon Bertingkat Implementasi Standar Dosen Pak Rizki",
    "meeting": 6,
    "category": "Percabangan Majemuk (Multi-Condition)",
    "difficulty": "Menengah",
    "description": "Implementasi baku struktur kode sesuai arahan dosen Pak Rizki di kelas. Menggunakan deklarasi unit CRT, clrscr, variabel total, diskon, dan bayar bertipe real dengan format desimal :0:0.",
    "tags": [
      "standar-dosen",
      "pak-rizki",
      "clrscr",
      "format-desimal"
    ],
    "sizeBytes": 1280,
    "linesCount": 47,
    "downloadUrl": "/pascal/p06_tugas1_diskon_gaya_dosen.pas",
    "rawCode": "program Diskon_Belanja_Gaya_Dosen;\nuses crt;\n\n{ Deklarasi variabel sesuai format singkatan dosen di kelas:\n  tb = Total Belanja\n  jb = Jumlah Belanja\n  diskon = Potongan Diskon (di deklarasi dosen menulis d/diskon) }\nvar\n  tb, jb, diskon : real;\n\nbegin\n  clrscr;\n  writeln('==============================================');\n  writeln('       PROGRAM PERHITUNGAN DISKON BELANJA     ');\n  writeln('          (Format Standar Dosen di Kelas)     ');\n  writeln('==============================================');\n  write('Masukkan jumlah belanja (jb) : Rp ');\n  readln(jb);\n\n  { Evaluasi kondisi percabangan sesuai gaya dosen:\n    1. Belanja > 500000 -> diskon 15% (0.15 * jb)\n    2. Belanja 300000 s.d 500000 -> diskon 10% (0.1 * jb)\n    3. Belanja < 300000 -> tidak ada diskon (0) }\n  if (jb > 500000) then\n  begin\n    diskon := 0.15 * jb;\n  end\n  else if (jb >= 300000) and (jb <= 500000) then\n  begin\n    diskon := 0.1 * jb;\n  end\n  else\n  begin\n    diskon := 0;\n  end;\n\n  { Rumus: Total Belanja = jumlah belanja - discount }\n  tb := jb - diskon;\n\n  writeln('----------------------------------------------');\n  writeln('Diskon (d)        : Rp ', diskon:0:2);\n  writeln('Total Belanja(tb) : Rp ', tb:0:2);\n  writeln('==============================================');\n\n  readln;\nend.\n"
  },
  {
    "id": "pascal_10",
    "filename": "p06_tugas1_diskon_pak_rizki_var_d.pas",
    "title": "Tugas 1: Diskon Kasir Varian Variabel Singkat (d: Real)",
    "meeting": 6,
    "category": "Percabangan Majemuk (Multi-Condition)",
    "difficulty": "Dasar",
    "description": "Versi ringkas penulisan dosen di papan tulis / presentasi kelas menggunakan nama variabel singkat d untuk menampung persentase desimal potongan harga.",
    "tags": [
      "variabel-singkat",
      "gaya-kelas",
      "free-pascal"
    ],
    "sizeBytes": 523,
    "linesCount": 32,
    "downloadUrl": "/pascal/p06_tugas1_diskon_pak_rizki_var_d.pas",
    "rawCode": "program Diskon_Belanja_Pak_Rizki_Var_D;\r\nuses crt;\r\n\r\nvar\r\n  tb, jb, d : real;\r\n\r\nbegin\r\n  clrscr;\r\n  write('masukkan jumlah belanja : ');\r\n  readln(jb);\r\n\r\n  if (jb > 500000) then\r\n  begin\r\n    d := 0.15 * jb;\r\n  end\r\n  else if (jb >= 300000) and (jb <= 500000) then\r\n  begin\r\n    d := 0.1 * jb;\r\n  end\r\n  else\r\n  begin\r\n    d := 0;\r\n  end;\r\n\r\n  tb := jb - d;\r\n\r\n  writeln('-----------------------------------');\r\n  writeln('diskon (d)          : ', d:0:2);\r\n  writeln('jumlah total bayar  : ', tb:0:2);\r\n  readln;\r\nend.\r\n"
  },
  {
    "id": "pascal_11",
    "filename": "p06_tugas1_diskon_pak_rizki_var_diskon.pas",
    "title": "Tugas 1: Diskon Kasir Varian Variabel Eksplisit (diskon: Real)",
    "meeting": 6,
    "category": "Percabangan Majemuk (Multi-Condition)",
    "difficulty": "Dasar",
    "description": "Versi penamaan variabel semantik bersih rekomendasi clean-code dengan variabel diskon bertipe real untuk mempermudah pemahaman mahasiswa.",
    "tags": [
      "clean-code",
      "semantik",
      "pilihan-alternatif"
    ],
    "sizeBytes": 558,
    "linesCount": 32,
    "downloadUrl": "/pascal/p06_tugas1_diskon_pak_rizki_var_diskon.pas",
    "rawCode": "program Diskon_Belanja_Pak_Rizki_Var_Diskon;\r\nuses crt;\r\n\r\nvar\r\n  tb, jb, diskon : real;\r\n\r\nbegin\r\n  clrscr;\r\n  write('masukkan jumlah belanja : ');\r\n  readln(jb);\r\n\r\n  if (jb > 500000) then\r\n  begin\r\n    diskon := 0.15 * jb;\r\n  end\r\n  else if (jb >= 300000) and (jb <= 500000) then\r\n  begin\r\n    diskon := 0.1 * jb;\r\n  end\r\n  else\r\n  begin\r\n    diskon := 0;\r\n  end;\r\n\r\n  tb := jb - diskon;\r\n\r\n  writeln('-----------------------------------');\r\n  writeln('diskon              : ', diskon:0:2);\r\n  writeln('jumlah total bayar  : ', tb:0:2);\r\n  readln;\r\nend.\r\n"
  },
  {
    "id": "pascal_12",
    "filename": "p06_tugas2_jabatan_pegawai.pas",
    "title": "Tugas 2: Penentuan Gaji Pokok Berdasarkan Nama Jabatan Pegawai",
    "meeting": 6,
    "category": "Percabangan Majemuk (Multi-Condition String)",
    "difficulty": "Menengah",
    "description": "Tugas 2 Pertemuan 6: Menginput nama jabatan karyawan (Direktur, Manajer, Staf, Honorer) dalam format tipe data string, lalu menentukan besaran gaji pokok menggunakan serangkaian pengecekan IF-THEN-ELSE bertingkat.",
    "tags": [
      "string-condition",
      "gaji-pokok",
      "sdm-hrd",
      "tugas-p6"
    ],
    "sizeBytes": 1036,
    "linesCount": 34,
    "downloadUrl": "/pascal/p06_tugas2_jabatan_pegawai.pas",
    "rawCode": "program Menentukan_Jabatan;\r\nuses crt;\r\nvar\r\n  id_jabatan   : string;\r\n  nama_jabatan : string;\r\nbegin\r\n  clrscr;\r\n  writeln('==============================================');\r\n  writeln('        PROGRAM PENENTUAN JABATAN             ');\r\n  writeln('==============================================');\r\n  write('Masukkan ID Jabatan (contoh: JF001) : ');\r\n  readln(id_jabatan);\r\n\r\n  { Normalisasi string ke uppercase }\r\n  id_jabatan := upcase(id_jabatan);\r\n\r\n  if (id_jabatan = 'JF001') then\r\n    nama_jabatan := 'Manager'\r\n  else if (id_jabatan = 'JF002') then\r\n    nama_jabatan := 'Programmer'\r\n  else if (id_jabatan = 'JF003') then\r\n    nama_jabatan := 'Finance'\r\n  else if (id_jabatan = 'JF004') then\r\n    nama_jabatan := 'Staff'\r\n  else\r\n    nama_jabatan := 'ID Jabatan Tidak Valid / Tidak Ditemukan';\r\n\r\n  writeln('----------------------------------------------');\r\n  writeln('ID Jabatan   : ', id_jabatan);\r\n  writeln('Nama Jabatan : ', nama_jabatan);\r\n  writeln('==============================================');\r\n  readln;\r\nend.\r\n"
  },
  {
    "id": "pascal_13",
    "filename": "p11_pantulan_bola.pas",
    "title": "Simulasi Fisika Pantulan Bola Karet (Looping WHILE-DO)",
    "meeting": 11,
    "category": "Perulangan (Looping)",
    "difficulty": "Menengah",
    "description": "Pertemuan 11: Menghitung lintasan dan jumlah pantulan bola yang dijatuhkan dari ketinggian awal tertentu dengan koefisien restitusi (tinggi memantul 75% dari tinggi sebelumnya) sampai bola berhenti (tinggi < 0.01 m).",
    "tags": [
      "while-do",
      "simulasi-fisika",
      "floating-point",
      "looping"
    ],
    "sizeBytes": 1263,
    "linesCount": 47,
    "downloadUrl": "/pascal/p11_pantulan_bola.pas",
    "rawCode": "program Simulasi_Pantulan_Bola_Pertemuan11;\nuses crt;\n\nvar\n  tinggi_awal : real;\n  tinggi      : real;\n  pantulan    : integer;\n  ulang       : char;\n\nbegin\n  repeat\n    clrscr;\n    writeln('==============================================');\n    writeln('     SIMULASI FISIKA PANTULAN BOLA            ');\n    writeln('==============================================');\n    writeln;\n\n    write('Input ketinggian awal bola (cm): ');\n    readln(tinggi_awal);\n\n    tinggi   := tinggi_awal;\n    pantulan := 0;\n\n    writeln;\n    writeln('Proses Pantulan:');\n    writeln('----------------------------------------------');\n\n    { Bola terus memantul jika tinggi > 20 cm }\n    while (tinggi > 20.0) do\n    begin\n      tinggi := tinggi / 2.0; { Berkurang setengah tiap pantulan }\n      pantulan := pantulan + 1;\n      writeln('Pantulan ke-', pantulan, ' -> Ketinggian: ', tinggi:0:2, ' cm');\n    end;\n\n    writeln('----------------------------------------------');\n    writeln('Bola berhenti memantul karena ketinggian <= 20 cm.');\n    writeln('Total jumlah pantulan: ', pantulan, ' kali');\n    writeln;\n\n    write('Apakah ingin mencoba ketinggian lain? (y/t): ');\n    readln(ulang);\n  until (ulang = 't') or (ulang = 'T');\n\n  writeln('Program selesai. Terima kasih!');\nend.\n"
  },
  {
    "id": "pascal_14",
    "filename": "p14_pola_bintang.pas",
    "title": "Generator Pola Segitiga & Piramida Karakter (Nested Loop FOR)",
    "meeting": 14,
    "category": "Nested Loop (Perulangan Bersarang)",
    "difficulty": "Lanjutan",
    "description": "Pertemuan 14: Membuat formasi visual segitiga siku-siku dan piramida karakter bintang (*) di layar konsol menggunakan teknik loop bersarang (outer loop baris i dan inner loop kolom j).",
    "tags": [
      "nested-loop",
      "for-to-do",
      "pola-bintang",
      "matriks-karakter"
    ],
    "sizeBytes": 1022,
    "linesCount": 54,
    "downloadUrl": "/pascal/p14_pola_bintang.pas",
    "rawCode": "program Pola_Nested_Loop_Pertemuan14;\nuses crt;\n\nvar\n  i, j, n : integer;\n\nbegin\n  clrscr;\n  writeln('==============================================');\n  writeln('         POLA BINTANG & ANGKA NESTED LOOP     ');\n  writeln('==============================================');\n  writeln;\n\n  n := 5;\n\n  { 1. Latihan 1: Pola Segitiga Bintang }\n  writeln('--- Pola 1: Segitiga Bintang ---');\n  for i := 1 to n do\n  begin\n    for j := 1 to i do\n    begin\n      write('* ');\n    end;\n    writeln;\n  end;\n  writeln;\n\n  { 2. Latihan 2: Pola Angka 5..1 Maju }\n  writeln('--- Pola 2: Angka Deret Maju ---');\n  for i := 5 downto 1 do\n  begin\n    for j := 5 downto i do\n    begin\n      write(j, ' ');\n    end;\n    writeln;\n  end;\n  writeln;\n\n  { 3. Latihan 3: Pola Piramida Terbalik Angka }\n  writeln('--- Pola 3: Piramida Terbalik ---');\n  for i := 5 downto 1 do\n  begin\n    for j := i downto 1 do\n    begin\n      write(j, ' ');\n    end;\n    writeln;\n  end;\n  writeln('==============================================');\n\n  readln;\nend.\n"
  },
  {
    "id": "pascal_15",
    "filename": "p15_array_1d_analisis.pas",
    "title": "Analisis Statistik Data Larik Satu Dimensi (Min, Max, Rata-rata)",
    "meeting": 15,
    "category": "Array Satu Dimensi (Larik 1D)",
    "difficulty": "Lanjutan",
    "description": "Pertemuan 15: Menginput sekumpulan data nilai mahasiswa ke dalam struktur data Array 1 Dimensi (1..100), kemudian melakukan traversal perulangan untuk menghitung total nilai, rata-rata (mean), nilai tertinggi (maksimum), dan nilai terendah (minimum).",
    "tags": [
      "array-1d",
      "statistik",
      "min-max",
      "traversal-larik"
    ],
    "sizeBytes": 1424,
    "linesCount": 64,
    "downloadUrl": "/pascal/p15_array_1d_analisis.pas",
    "rawCode": "program Pengolahan_Array_1D_Pertemuan15;\nuses crt;\n\ntype\n  larik_angka = array[1..5] of integer;\n\nvar\n  data_angka : larik_angka;\n  i          : integer;\n  jumlah     : integer;\n  tertinggi  : integer;\n  terendah   : integer;\n  rata_rata  : real;\n\nbegin\n  clrscr;\n  writeln('==============================================');\n  writeln('   PENGOLAHAN DATA ARRAY 1 DIMENSI (LARIK)    ');\n  writeln('==============================================');\n  writeln;\n\n  { Input 5 data array }\n  for i := 1 to 5 do\n  begin\n    write('Input data ke-', i, ' : ');\n    readln(data_angka[i]);\n  end;\n\n  { Inisialisasi awal }\n  jumlah    := data_angka[1];\n  tertinggi := data_angka[1];\n  terendah  := data_angka[1];\n\n  { Hitung total, min, max }\n  for i := 2 to 5 do\n  begin\n    jumlah := jumlah + data_angka[i];\n\n    if data_angka[i] > tertinggi then\n      tertinggi := data_angka[i];\n\n    if data_angka[i] < terendah then\n      terendah := data_angka[i];\n  end;\n\n  rata_rata := jumlah / 5.0;\n\n  writeln;\n  writeln('---------------- HASIL ANALISIS --------------');\n  write('Elemen Array      : ');\n  for i := 1 to 5 do\n  begin\n    write(data_angka[i], ' ');\n  end;\n  writeln;\n  writeln('Jumlah Total Data : ', jumlah);\n  writeln('Nilai Tertinggi   : ', tertinggi);\n  writeln('Nilai Terendah    : ', terendah);\n  writeln('Rata-rata         : ', rata_rata:0:2);\n  writeln('==============================================');\n\n  readln;\nend.\n"
  },
  {
    "id": "pascal_16",
    "filename": "p15_array_2d_matriks.pas",
    "title": "Operasi Aljabar Matriks Dua Dimensi (Penjumlahan Matriks 3x3)",
    "meeting": 15,
    "category": "Array Dua Dimensi (Matriks 2D)",
    "difficulty": "Lanjutan",
    "description": "Pertemuan 15: Pemrosesan tabel matematika matriks berukuran [1..3, 1..3]. Program menerima input elemen matriks A dan matriks B, lalu melakukan operasi penjumlahan matriks C[i,j] = A[i,j] + B[i,j] serta mencetaknya dalam bentuk tabel rapi.",
    "tags": [
      "array-2d",
      "matriks",
      "aljabar-linier",
      "nested-array"
    ],
    "sizeBytes": 1361,
    "linesCount": 58,
    "downloadUrl": "/pascal/p15_array_2d_matriks.pas",
    "rawCode": "program Matriks_Array_2D_Pertemuan15;\nuses crt;\n\nconst\n  JML_MHS = 3;\n  JML_MATKUL = 3;\n\ntype\n  MatriksNilai = array[1..JML_MHS, 1..JML_MATKUL] of integer;\n\nvar\n  nilai     : MatriksNilai;\n  mhs, mk   : integer;\n  total_mhs : integer;\n  rerata    : real;\n\nbegin\n  clrscr;\n  writeln('==============================================');\n  writeln('   MATRIKS NILAI MAHASISWA (ARRAY 2 DIMENSI)  ');\n  writeln('==============================================');\n  writeln;\n\n  { Input data matriks }\n  for mhs := 1 to JML_MHS do\n  begin\n    writeln('--- Mahasiswa Ke-', mhs, ' ---');\n    for mk := 1 to JML_MATKUL do\n    begin\n      write('  Nilai Mata Kuliah ', mk, ' : ');\n      readln(nilai[mhs, mk]);\n    end;\n    writeln;\n  end;\n\n  { Menampilkan tabel matriks dan rata-rata per mahasiswa }\n  writeln('==============================================');\n  writeln('TABEL REKAPITULASI NILAI:');\n  writeln('Mhs | MK 1 | MK 2 | MK 3 | Rata-rata');\n  writeln('------------------------------------');\n\n  for mhs := 1 to JML_MHS do\n  begin\n    total_mhs := 0;\n    write(' ', mhs, '  | ');\n    for mk := 1 to JML_MATKUL do\n    begin\n      write(nilai[mhs, mk]:4, ' | ');\n      total_mhs := total_mhs + nilai[mhs, mk];\n    end;\n    rerata := total_mhs / JML_MATKUL;\n    writeln(rerata:6:2);\n  end;\n\n  writeln('==============================================');\n  readln;\nend.\n"
  },
  {
    "id": "pascal_17",
    "filename": "pemro_p05_contoh1_bilangan.pas",
    "title": "Klasifikasi Jenis Bilangan Bulat (Positif, Negatif, atau Nol)",
    "meeting": 5,
    "category": "Percabangan Majemuk (3 Kondisi)",
    "difficulty": "Dasar",
    "description": "Contoh live-coding dosen Pak Rizki di Google Meet: Menginput 1 buah bilangan bulat integer, lalu menguji apakah angka < 0 (Negatif), angka = 0 (Nol), atau selainnya yaitu angka > 0 (Positif) tanpa perlu kondisi ketiga berulang.",
    "tags": [
      "contoh-dosen",
      "gmeet",
      "positif-negatif-nol",
      "if-else"
    ],
    "sizeBytes": 633,
    "linesCount": 32,
    "downloadUrl": "/pascal/pemro_p05_contoh1_bilangan.pas",
    "rawCode": "program belajar_if_then_else_if;\r\nuses crt;\r\n\r\nvar\r\n  bilangan : integer;\r\n\r\nbegin\r\n  clrscr;\r\n  writeln('==============================================');\r\n  writeln('  PROGRAM MENENTUKAN BILANGAN POSITIF/NEGATIF ');\r\n  writeln('         (Slide 4 PPT Pemrograman P5)          ');\r\n  writeln('==============================================');\r\n  \r\n  write('Input Bilangan : ');\r\n  readln(bilangan);\r\n\r\n  if (bilangan > 0) then\r\n  begin\r\n    writeln('Bilangan Positif');\r\n  end\r\n  else if (bilangan < 0) then\r\n  begin\r\n    writeln('Bilangan Negatif');\r\n  end\r\n  else\r\n  begin\r\n    writeln('Bilangan Nol');\r\n  end;\r\n\r\n  readln;\r\nend.\r\n"
  },
  {
    "id": "pascal_18",
    "filename": "pemro_p05_contoh2_bmi.pas",
    "title": "Kalkulator Indeks Massa Tubuh (BMI / Body Mass Index)",
    "meeting": 5,
    "category": "Percabangan Majemuk Berkelanjutan",
    "difficulty": "Menengah",
    "description": "Contoh 2 dosen di sesi praktik: Menghitung status gizi seseorang dengan rumus BMI = BB / (TB * TB) di mana TB dalam meter. Mengkategorikan hasil menjadi Kurus (< 18.5), Normal (18.5 - 24.9), Gemuk (25 - 29.9), atau Obesitas (>= 30).",
    "tags": [
      "kesehatan",
      "rumus-bmi",
      "real-division",
      "live-demo"
    ],
    "sizeBytes": 679,
    "linesCount": 33,
    "downloadUrl": "/pascal/pemro_p05_contoh2_bmi.pas",
    "rawCode": "program hitung_indeks_massa_tubuh_bmi;\r\nuses crt;\r\n\r\nvar\r\n  bmi, berat, tinggi : real;\r\n  kategori           : string;\r\n\r\nbegin\r\n\r\n  write('Input berat badan anda (kg) : ');\r\n  readln(berat);\r\n  write('Input tinggi badan anda (m)  : ');\r\n  readln(tinggi);\r\n\r\n  bmi := berat / (tinggi * tinggi);\r\n\r\n  if (bmi > 30.0) then\r\n    kategori := 'Berat Badan Obesitas'\r\n  else if (bmi > 23.0) then\r\n    kategori := 'Berat Badan Berlebih'\r\n  else if (bmi > 18.5) then\r\n    kategori := 'Berat Badan Normal'\r\n  else\r\n    kategori := 'Berat Badan Kurang';\r\n\r\n\r\n  writeln('Nilai BMI anda adalah      : ', bmi:0:2);\r\n  writeln('Kategori berat badan anda  : ', kategori);\r\n\r\n\r\n  readln;\r\nend.\r\n"
  },
  {
    "id": "pascal_19",
    "filename": "pemro_p05_nilai_gaya_dosen.pas",
    "title": "Format Nilai Akhir Perkuliahan Versi Asli Kelas Tatap Muka",
    "meeting": 5,
    "category": "Percabangan Tunggal / Ganda",
    "difficulty": "Dasar",
    "description": "Implementasi kode nilai akhir dengan tata letak penulisan yang persis ditampilkan pada layar proyektor perkuliahan tatap muka oleh dosen pengampu.",
    "tags": [
      "arsip-kuliah",
      "standar-unindra",
      "pascal-murni"
    ],
    "sizeBytes": 736,
    "linesCount": 40,
    "downloadUrl": "/pascal/pemro_p05_nilai_gaya_dosen.pas",
    "rawCode": "program nilai;\nuses crt;\n\nvar\n  tgs, uts, uas, na : real;\n  huruf             : string;\n\nbegin\n  clrscr;\n\n  write('nilai tugas   : '); readln(tgs);\n  write('nilai uts     : '); readln(uts);\n  write('nilai uas     : '); readln(uas);\n\n  na := (0.2 * tgs) + (0.3 * uts) + (0.5 * uas);\n\n  writeln('nilai akhir   : ', na:0:0);\n\n  { Percabangan bertingkat (if-else berantai ala dosen) }\n  if na <= 40 then\n    huruf := 'E'\n  else if na <= 60 then\n    huruf := 'D'\n  else if na <= 75 then\n    huruf := 'C'\n  else if na <= 90 then\n    huruf := 'B'\n  else\n    huruf := 'A';\n\n  writeln('nilai huruf   : ', huruf);\n\n  if na >= 70 then\n    writeln('selamat anda dinyatakan lulus')\n  else\n    writeln('anda tidak dinyatakan lulus');\n\n  readln;\nend.\n"
  },
  {
    "id": "pascal_20",
    "filename": "pemro_p05_tugas_nilai_akhir.pas",
    "title": "Sistem Konversi Nilai Lengkap: Angka Mutu, Huruf (A-E) & Status",
    "meeting": 5,
    "category": "Percabangan Majemuk Bertingkat (Grade)",
    "difficulty": "Menengah",
    "description": "Program komprehensif penghitungan nilai akhir mahasiswa dengan skala standar Unindra: Grade A (>= 85), Grade B (70 - 84), Grade C (56 - 69), Grade D (40 - 55), dan Grade E (< 40) beserta status LULUS atau GAGAL.",
    "tags": [
      "skala-nilai",
      "grade-huruf",
      "konversi-akademik",
      "lengkap"
    ],
    "sizeBytes": 1595,
    "linesCount": 55,
    "downloadUrl": "/pascal/pemro_p05_tugas_nilai_akhir.pas",
    "rawCode": "program hitung_nilai_akhir_mahasiswa;\r\nuses crt;\r\n\r\nvar\r\n  tugas, uts, uas : real;\r\n  nilai_akhir     : real;\r\n  nilai_huruf     : char;\r\n  status          : string;\r\n\r\nbegin\r\n  clrscr;\r\n  writeln('==============================================');\r\n  writeln('       PROGRAM EVALUASI NILAI AKHIR           ');\r\n  writeln('         (Latihan Slide 7 Pemrograman P5)      ');\r\n  writeln('==============================================');\r\n\r\n  write('Input nilai Tugas : '); readln(tugas);\r\n  write('Input nilai UTS   : '); readln(uts);\r\n  write('Input nilai UAS   : '); readln(uas);\r\n\r\n  { Rumus: Nilai akhir = (20% * tugas) + (30% * UTS) + (50% * UAS) }\r\n  nilai_akhir := (0.20 * tugas) + (0.30 * uts) + (0.50 * uas);\r\n\r\n  { Penentuan Nilai Huruf Berdasarkan Tabel Slide:\r\n    91 - 100 : A\r\n    76 - 90  : B\r\n    61 - 75  : C\r\n    41 - 60  : D\r\n    0  - 40  : E }\r\n  if (nilai_akhir >= 91.0) then\r\n    nilai_huruf := 'A'\r\n  else if (nilai_akhir >= 76.0) then\r\n    nilai_huruf := 'B'\r\n  else if (nilai_akhir >= 61.0) then\r\n    nilai_huruf := 'C'\r\n  else if (nilai_akhir >= 41.0) then\r\n    nilai_huruf := 'D'\r\n  else\r\n    nilai_huruf := 'E';\r\n\r\n  { Penentuan Status Kelulusan: >= 70 Lulus, < 70 Tidak Lulus }\r\n  if (nilai_akhir >= 70.0) then\r\n    status := 'Selamat anda dinyatakan lulus'\r\n  else\r\n    status := 'Anda dinyatakan tidak lulus';\r\n\r\n  writeln('----------------------------------------------');\r\n  writeln('Nilai Akhir : ', nilai_akhir:0:0);\r\n  writeln('Nilai Huruf : ', nilai_huruf);\r\n  writeln(status);\r\n  writeln('==============================================');\r\n\r\n  readln;\r\nend.\r\n"
  },
  {
    "id": "pascal_21",
    "filename": "pemro_p06_contoh1_tiga_bilangan_terbesar.pas",
    "title": "Praktik Pemrograman 1: Penentuan Angka Maksimum 3 Variabel",
    "meeting": 6,
    "category": "Percabangan Majemuk / Logika Boolean",
    "difficulty": "Menengah",
    "description": "Studi kasus Pertemuan 6 mata kuliah Pemrograman 1: Menganalisis 3 bilangan bulat a, b, dan c untuk menentukan bilangan terbesar menggunakan kombinasi operator logika AND.",
    "tags": [
      "pemrograman-1",
      "operator-and",
      "algoritma-maksimum"
    ],
    "sizeBytes": 836,
    "linesCount": 36,
    "downloadUrl": "/pascal/pemro_p06_contoh1_tiga_bilangan_terbesar.pas",
    "rawCode": "program tiga_bilangan_terbesar;\r\nuses crt;\r\n\r\nvar\r\n  a, b, c : integer;\r\n\r\nbegin\r\n  clrscr;\r\n  writeln('==============================================');\r\n  writeln('     PROGRAM TIGA BILANGAN TERBESAR           ');\r\n  writeln('         (Slide 5 PPT Pemrograman P6)          ');\r\n  writeln('==============================================');\r\n\r\n  write('Input Bilangan Pertama : '); readln(a);\r\n  write('Input Bilangan Kedua   : '); readln(b);\r\n  write('Input Bilangan Ketiga  : '); readln(c);\r\n\r\n  { Struktur Nested IF persis Slide 5 }\r\n  if (a > b) then\r\n  begin\r\n    if (a > c) then\r\n      writeln('Angka Terbesar : ', a)\r\n    else\r\n      writeln('Angka Terbesar : ', c);\r\n  end\r\n  else\r\n  begin\r\n    if (b > c) then\r\n      writeln('Angka Terbesar : ', b)\r\n    else\r\n      writeln('Angka Terbesar : ', c);\r\n  end;\r\n\r\n  readln;\r\nend.\r\n"
  },
  {
    "id": "pascal_22",
    "filename": "pemro_p06_tugas_gaji_karyawan_mobile_friendly.pas",
    "title": "Sistem Slip Gaji Karyawan Rapi (Format Tampilan Layar Responsif / Mobile)",
    "meeting": 6,
    "category": "Percabangan Majemuk & Pemformatan UI Terminal",
    "difficulty": "Lanjutan",
    "description": "Program penggajian lengkap dengan penataan output terminal yang tidak terpotong pada layar sempit/HP. Menghitung Gaji Pokok per Golongan (IA, IB, IIA, IIB), Tunjangan Keluarga, Tunjangan Anak, Potongan Asuransi/Pajak, dan Gaji Bersih (Take Home Pay).",
    "tags": [
      "slip-gaji",
      "mobile-friendly",
      "terminal-ui",
      "nested-logic"
    ],
    "sizeBytes": 1853,
    "linesCount": 79,
    "downloadUrl": "/pascal/pemro_p06_tugas_gaji_karyawan_mobile_friendly.pas",
    "rawCode": "program hitung_gaji_karyawan_mobile_friendly;\nuses crt;\n\nvar\n  golongan   : string;\n  pendidikan : string;\n  gaji_pokok : longint;\n  tunjangan  : longint;\n  total_gaji : longint;\n  valid      : boolean;\n\nbegin\n  clrscr;\n\n  { Pakai writeln agar di HP teks input tidak saling menumpuk/dempet }\n  writeln('Input Golongan Karyawan (A/B):');\n  readln(golongan);\n\n  writeln('Input Pendidikan Karyawan (SMA/S1):');\n  readln(pendidikan);\n\n  { Otomatis ubah jadi huruf kapital }\n  golongan := upcase(golongan);\n  pendidikan := upcase(pendidikan);\n\n  gaji_pokok := 0;\n  tunjangan  := 0;\n  valid      := true;\n\n  { Antisipasi jika keyboard HP otomatis menambahkan spasi di akhir kata }\n  if (golongan = 'A') or (golongan = 'A ') then\n  begin\n    if (pendidikan = 'SMA') or (pendidikan = 'SMA ') then\n    begin\n      gaji_pokok := 3000000;\n      tunjangan  := 2000000;\n    end\n    else if (pendidikan = 'S1') or (pendidikan = 'S1 ') then\n    begin\n      gaji_pokok := 4000000;\n      tunjangan  := 3000000;\n    end\n    else\n      valid := false;\n  end\n  else if (golongan = 'B') or (golongan = 'B ') then\n  begin\n    if (pendidikan = 'SMA') or (pendidikan = 'SMA ') then\n    begin\n      gaji_pokok := 4000000;\n      tunjangan  := 3000000;\n    end\n    else if (pendidikan = 'S1') or (pendidikan = 'S1 ') then\n    begin\n      gaji_pokok := 6000000;\n      tunjangan  := 5000000;\n    end\n    else\n      valid := false;\n  end\n  else\n    valid := false;\n\n  writeln('----------------------------------------------');\n  if (valid) then\n  begin\n    total_gaji := gaji_pokok + tunjangan;\n    writeln('Gaji Pokok               : Rp ', gaji_pokok);\n    writeln('Tunjangan                : Rp ', tunjangan);\n    writeln('Gaji yang didapat adalah : Rp ', total_gaji);\n  end\n  else\n  begin\n    writeln('Error: Golongan atau Pendidikan tidak sesuai tabel!');\n  end;\n\n  readln;\nend.\n"
  },
  {
    "id": "pascal_23",
    "filename": "pemro_p06_tugas_gaji_karyawan_nested_if.pas",
    "title": "Sistem Penggajian Lengkap dengan Struktur Nested IF (Golongan & Status)",
    "meeting": 6,
    "category": "Percabangan Bersarang (Nested IF-THEN-ELSE)",
    "difficulty": "Lanjutan",
    "description": "Implementasi baku struktur IF di dalam IF (Nested IF) untuk sistem penggajian perusahaan: Kondisi tingkat pertama mengecek Golongan jabatan, dan kondisi tingkat kedua di dalamnya mengecek Status Pernikahan untuk menentukan persentase tunjangan istri dan anak.",
    "tags": [
      "nested-if",
      "tunjangan-keluarga",
      "perusahaan",
      "kompleks"
    ],
    "sizeBytes": 1594,
    "linesCount": 82,
    "downloadUrl": "/pascal/pemro_p06_tugas_gaji_karyawan_nested_if.pas",
    "rawCode": "program hitung_gaji_karyawan_nested_if;\r\nuses crt;\r\n\r\nvar\r\n  golongan   : char;\r\n  pendidikan : string;\r\n  gaji_pokok : longint;\r\n  tunjangan  : longint;\r\n  total_gaji : longint;\r\n  valid      : boolean;\r\n\r\nbegin\r\n  clrscr;\r\n\r\n  write('Input Golongan Karyawan (A/B)     : ');\r\n  readln(golongan);\r\n  write('Input Pendidikan Karyawan (SMA/S1): ');\r\n  readln(pendidikan);\r\n\r\n  golongan := upcase(golongan);\r\n  pendidikan := upcase(pendidikan);\r\n\r\n  gaji_pokok := 0;\r\n  tunjangan  := 0;\r\n  valid      := true;\r\n\r\n\r\n  if (golongan = 'A') then\r\n  begin\r\n    if (pendidikan = 'SMA') then\r\n    begin\r\n      gaji_pokok := 3000000;\r\n      tunjangan  := 2000000;\r\n    end\r\n    else if (pendidikan = 'S1') then\r\n    begin\r\n      gaji_pokok := 4000000;\r\n      tunjangan  := 3000000;\r\n    end\r\n    else\r\n    begin\r\n      valid := false;\r\n    end;\r\n  end\r\n  else if (golongan = 'B') then\r\n  begin\r\n    if (pendidikan = 'SMA') then\r\n    begin\r\n      gaji_pokok := 4000000;\r\n      tunjangan  := 3000000;\r\n    end\r\n    else if (pendidikan = 'S1') then\r\n    begin\r\n      gaji_pokok := 6000000;\r\n      tunjangan  := 5000000;\r\n    end\r\n    else\r\n    begin\r\n      valid := false;\r\n    end;\r\n  end\r\n  else\r\n  begin\r\n    valid := false;\r\n  end;\r\n\r\n  if (valid) then\r\n  begin\r\n    total_gaji := gaji_pokok + tunjangan;\r\n    writeln('Gaji Pokok               : Rp ', gaji_pokok);\r\n    writeln('Tunjangan                : Rp ', tunjangan);\r\n    writeln('Gaji yang didapat adalah : ', total_gaji);\r\n  end\r\n  else\r\n  begin\r\n    writeln('Error: Golongan atau Pendidikan tidak sesuai tabel!');\r\n  end;\r\n\r\n\r\n  readln;\r\nend.\r\n"
  },
  {
    "id": "pascal_24",
    "filename": "program_if.pas",
    "title": "Struktur Fondasi Sintaks Dasar Percabangan Pascal (IF-THEN Standar)",
    "meeting": 5,
    "category": "Fondasi Bahasa Pascal",
    "difficulty": "Dasar",
    "description": "Template dasar sintaks IF-THEN dan IF-THEN-ELSE di bahasa Pascal standar Free Pascal / Turbo Pascal. Sangat cocok dijadikan bahan hafalan mahasiswa baru mengenai penempatan titik-koma (;) sebelum ELSE yang tidak boleh digunakan.",
    "tags": [
      "fondasi",
      "aturan-sintaks",
      "no-semicolon-before-else",
      "pemula"
    ],
    "sizeBytes": 460,
    "linesCount": 27,
    "downloadUrl": "/pascal/program_if.pas",
    "rawCode": " program belajar_if_then_else_if;\r\n    uses crt;\r\n\r\n    var\r\n      bilangan : integer;\r\n\r\n    begin\r\n      clrscr;\r\n\r\n write('Input Bilangan : ');\r\n      readln(bilangan);\r\n\r\n      if (bilangan > 0) then\r\n      begin\r\n        writeln('Bilangan Positif');\r\n      end\r\n      else if (bilangan < 0) then\r\n      begin\r\n        writeln('Bilangan Negatif');\r\n      end\r\n      else\r\n      begin\r\n        writeln('Bilangan Nol');\r\n      end;\r\n\r\n      readln;\r\n    end."
  },
  {
  "id": "pascal_25",
  "filename": "p07_contoh_angka_kata.pas",
  "title": "Konversi Angka Bulat ke Kata (1..4) Menggunakan CASE-OF",
  "meeting": 7,
  "category": "Struktur Pemilihan CASE-OF",
  "difficulty": "Dasar",
  "description": "Contoh materi Slide 4-6 Pertemuan 7: Mengonversi input integer 1 s.d. 4 menjadi representasi kata (satu, dua, tiga, empat). Menggunakan klausa ELSE untuk menangani input di luar rentang.",
  "tags": [
    "case-of",
    "ordinal",
    "konversi-angka",
    "pertemuan-7"
  ],
  "sizeBytes": 865,
  "linesCount": 32,
  "downloadUrl": "/pascal/p07_contoh_angka_kata.pas",
  "rawCode": "program Konversi_Angka_Ke_Kata;\nuses crt;\n\n{ Program Contoh Materi Slide Pertemuan 7 Algoritma 1\n  Mengonversi input angka 1..4 menjadi kata menggunakan struktur CASE-OF }\n\nvar\n  angka : integer;\n\nbegin\n  clrscr;\n  writeln('==============================================');\n  writeln('   PROGRAM KONVERSI ANGKA KE KATA (CASE-OF)   ');\n  writeln('        (Materi Slide P7 Algoritma 1)         ');\n  writeln('==============================================');\n  write('Masukkan sebuah angka bulat (1..4): ');\n  readln(angka);\n  writeln('----------------------------------------------');\n\n  write('Hasil Konversi: ');\n  case angka of\n    1 : writeln('satu');\n    2 : writeln('dua');\n    3 : writeln('tiga');\n    4 : writeln('empat');\n  else\n    writeln('Angka yang dimasukkan salah');\n  end;\n\n  writeln('==============================================');\n  readln;\nend.\n"
},
  {
  "id": "pascal_26",
  "filename": "p07_tugas1_nama_bulan.pas",
  "title": "Tugas 1: Penentuan Nama Bulan (1..12) & Validasi Kalender",
  "meeting": 7,
  "category": "Struktur Pemilihan CASE-OF",
  "difficulty": "Dasar",
  "description": "Tugas 1 Slide 9 Pertemuan 7: Membaca angka bulan 1 s.d. 12 dan memetakan ke nama bulan Masehi (Januari s.d. Desember). Menampilkan pesan error validasi jika angka bulan di luar 1..12.",
  "tags": [
    "case-of",
    "nama-bulan",
    "validasi",
    "tugas-p7"
  ],
  "sizeBytes": 1162,
  "linesCount": 41,
  "downloadUrl": "/pascal/p07_tugas1_nama_bulan.pas",
  "rawCode": "program Menentukan_Nama_Bulan;\nuses crt;\n\n{ Tugas 1 Slide Pertemuan 7 Algoritma 1\n  Membaca angka bulan (integer 1..12) lalu menampilkan nama bulan.\n  Jika angka di luar rentang 1..12, menampilkan pesan error validasi. }\n\nvar\n  angka_bulan : integer;\n\nbegin\n  clrscr;\n  writeln('==============================================');\n  writeln('        PROGRAM MENENTUKAN NAMA BULAN         ');\n  writeln('        (Tugas 1 Slide P7 Algoritma 1)        ');\n  writeln('==============================================');\n  write('Masukkan nomor bulan (1..12): ');\n  readln(angka_bulan);\n  writeln('----------------------------------------------');\n\n  write('Nama Bulan: ');\n  case angka_bulan of\n    1  : writeln('Januari');\n    2  : writeln('Februari');\n    3  : writeln('Maret');\n    4  : writeln('April');\n    5  : writeln('Mei');\n    6  : writeln('Juni');\n    7  : writeln('Juli');\n    8  : writeln('Agustus');\n    9  : writeln('September');\n    10 : writeln('Oktober');\n    11 : writeln('November');\n    12 : writeln('Desember');\n  else\n    writeln('Bukan nomor bulan yang benar');\n  end;\n\n  writeln('==============================================');\n  readln;\nend.\n"
},
  {
  "id": "pascal_27",
  "filename": "p07_tugas2_menu_data.pas",
  "title": "Tugas 2: Sistem Menu Interaktif Manajemen Data 5 Opsi",
  "meeting": 7,
  "category": "Menu Interaktif CASE-OF",
  "difficulty": "Menengah",
  "description": "Tugas 2 Slide 9 Pertemuan 7: Menampilkan antarmuka menu CLI (1. Baca data, 2. Cetak data, 3. Ubah data, 4. Hapus data, 5. Keluar program) dan mencetak pesan konfirmasi menu yang dipilih.",
  "tags": [
    "case-of",
    "menu-cli",
    "manajemen-data",
    "tugas-p7"
  ],
  "sizeBytes": 1342,
  "linesCount": 37,
  "downloadUrl": "/pascal/p07_tugas2_menu_data.pas",
  "rawCode": "program Menu_Pengelolaan_Data;\nuses crt;\n\n{ Tugas 2 Slide Pertemuan 7 Algoritma 1\n  Menampilkan menu 5 pilihan pengolahan data, membaca nomor pilihan,\n  dan mencetak pesan konfirmasi menu yang dipilih menggunakan CASE-OF. }\n\nvar\n  pilihan : integer;\n\nbegin\n  clrscr;\n  writeln('==============================================');\n  writeln('               ===== MENU =====               ');\n  writeln('               1. Baca data                   ');\n  writeln('               2. Cetak data                  ');\n  writeln('               3. Ubah data                   ');\n  writeln('               4. Hapus data                  ');\n  writeln('               5. Keluar program              ');\n  writeln('==============================================');\n  write('Pilihan Anda = ');\n  readln(pilihan);\n  writeln('----------------------------------------------');\n\n  case pilihan of\n    1 : writeln('Anda memilih menu nomor 1 : Baca data');\n    2 : writeln('Anda memilih menu nomor 2 : Cetak data');\n    3 : writeln('Anda memilih menu nomor 3 : Ubah data');\n    4 : writeln('Anda memilih menu nomor 4 : Hapus data');\n    5 : writeln('Anda memilih menu nomor 5 : Keluar program');\n  else\n    writeln('Nomor menu tidak valid! Silakan pilih angka 1 sampai 5.');\n  end;\n\n  writeln('==============================================');\n  readln;\nend.\n"
},
  {
  "id": "pascal_28",
  "filename": "p07_tugas3_menu_persegi_panjang.pas",
  "title": "Tugas 3: Menu Kalkulator Geometri Persegi Panjang (Luas, Keliling, Diagonal)",
  "meeting": 7,
  "category": "Menu Interaktif & Matematika",
  "difficulty": "Menengah",
  "description": "Tugas 3 Slide 9 Pertemuan 7: Program menu pemilihan untuk menghitung Luas (P*L), Keliling (2*P + 2*L), dan Panjang Diagonal (sqrt(P*P + L*L)) dari input Panjang dan Lebar empat persegi panjang.",
  "tags": [
    "case-of",
    "geometri",
    "persegi-panjang",
    "sqrt",
    "tugas-p7"
  ],
  "sizeBytes": 2344,
  "linesCount": 72,
  "downloadUrl": "/pascal/p07_tugas3_menu_persegi_panjang.pas",
  "rawCode": "program Menu_Persegi_Panjang;\nuses crt;\n\n{ Tugas 3 Slide Pertemuan 7 Algoritma 1\n  Program menu kalkulasi geometri Empat Persegi Panjang:\n  1) Luas = P * L\n  2) Keliling = 2*P + 2*L\n  3) Panjang diagonal = sqrt(P*P + L*L)\n  4) Keluar program }\n\nvar\n  pilihan  : integer;\n  panjang  : real;\n  lebar    : real;\n  luas     : real;\n  keliling : real;\n  diagonal : real;\n\nbegin\n  clrscr;\n  writeln('==============================================');\n  writeln('   PROGRAM MENU PERHITUNGAN PERSEGI PANJANG   ');\n  writeln('        (Tugas 3 Slide P7 Algoritma 1)        ');\n  writeln('==============================================');\n  writeln('1. Luas');\n  writeln('2. Keliling');\n  writeln('3. Panjang diagonal');\n  writeln('4. Keluar program');\n  writeln('==============================================');\n  write('Pilihan Anda [1..4] : ');\n  readln(pilihan);\n  writeln('----------------------------------------------');\n\n  case pilihan of\n    1 :\n      begin\n        writeln('>> 1. HITUNG LUAS PERSEGI PANJANG');\n        write('Masukkan Panjang (P) : '); readln(panjang);\n        write('Masukkan Lebar   (L) : '); readln(lebar);\n        luas := panjang * lebar;\n        writeln('----------------------------------------------');\n        writeln('Luas Persegi Panjang (P * L) = ', luas:0:2);\n      end;\n    2 :\n      begin\n        writeln('>> 2. HITUNG KELILING PERSEGI PANJANG');\n        write('Masukkan Panjang (P) : '); readln(panjang);\n        write('Masukkan Lebar   (L) : '); readln(lebar);\n        keliling := (2 * panjang) + (2 * lebar);\n        writeln('----------------------------------------------');\n        writeln('Keliling Persegi Panjang (2*P + 2*L) = ', keliling:0:2);\n      end;\n    3 :\n      begin\n        writeln('>> 3. HITUNG PANJANG DIAGONAL');\n        write('Masukkan Panjang (P) : '); readln(panjang);\n        write('Masukkan Lebar   (L) : '); readln(lebar);\n        diagonal := sqrt((panjang * panjang) + (lebar * lebar));\n        writeln('----------------------------------------------');\n        writeln('Panjang Diagonal sqrt(P^2 + L^2) = ', diagonal:0:2);\n      end;\n    4 :\n      begin\n        writeln('Keluar dari program. Terima kasih!');\n      end;\n  else\n    writeln('Pilihan menu salah! Silakan pilih menu antara 1 sampai 4.');\n  end;\n\n  writeln('==============================================');\n  readln;\nend.\n"
},
  {
  "id": "pascal_29",
  "filename": "p07_master_case_menu.pas",
  "title": "Master Workspace Praktikum CASE-OF Terpadu (4 Modul P7 Lengkap)",
  "meeting": 7,
  "category": "Aplikasi Praktikum Terpadu",
  "difficulty": "Lanjutan",
  "description": "Aplikasi konsol terpadu yang menggabungkan seluruh materi dan tugas Pertemuan 7 dalam satu sistem modular (Procedure + Repeat-Until + Nested Case-Of + CRT Screen Handler).",
  "tags": [
    "master-program",
    "case-of",
    "procedure",
    "repeat-until",
    "crt"
  ],
  "sizeBytes": 6239,
  "linesCount": 201,
  "downloadUrl": "/pascal/p07_master_case_menu.pas",
  "rawCode": "program Master_Pertemuan_7_Case_Of;\nuses crt;\n\n{ Program Terpadu Praktikum Algoritma & Pemrograman 1\n  Pertemuan Ke-7: Struktur Pemilihan Diskrit CASE - OF\n  Universitas Indraprasta PGRI (UNINDRA)\n  \n  Mencakup 4 Modul Interaktif:\n  1. Konversi Angka ke Kata (1..4)\n  2. Penentuan Nama Bulan (1..12)\n  3. Simulasi Menu Manajemen Data (1..5)\n  4. Geometri Persegi Panjang (Luas, Keliling, Diagonal) }\n\nvar\n  menu_utama : integer;\n  ulang      : char;\n\n  { Variabel Modul 1 }\n  v_angka    : integer;\n\n  { Variabel Modul 2 }\n  v_bulan    : integer;\n\n  { Variabel Modul 3 }\n  v_submenu  : integer;\n\n  { Variabel Modul 4 }\n  v_geomenu  : integer;\n  p, l       : real;\n  hasil_geo  : real;\n\nprocedure JalankanModul1;\nbegin\n  clrscr;\n  writeln('==============================================');\n  writeln('   MODUL 1: KONVERSI ANGKA BULAT KE KATA      ');\n  writeln('==============================================');\n  write('Masukkan sebuah angka bulat (1..4): ');\n  readln(v_angka);\n  writeln('----------------------------------------------');\n  write('Hasil Konversi Kata: ');\n  case v_angka of\n    1 : writeln('satu');\n    2 : writeln('dua');\n    3 : writeln('tiga');\n    4 : writeln('empat');\n  else\n    writeln('Angka yang dimasukkan salah!');\n  end;\n  writeln('==============================================');\nend;\n\nprocedure JalankanModul2;\nbegin\n  clrscr;\n  writeln('==============================================');\n  writeln('   MODUL 2: PENENTUAN NAMA BULAN DARI ANGKA   ');\n  writeln('==============================================');\n  write('Masukkan nomor bulan (1..12): ');\n  readln(v_bulan);\n  writeln('----------------------------------------------');\n  write('Nama Bulan: ');\n  case v_bulan of\n    1  : writeln('Januari');\n    2  : writeln('Februari');\n    3  : writeln('Maret');\n    4  : writeln('April');\n    5  : writeln('Mei');\n    6  : writeln('Juni');\n    7  : writeln('Juli');\n    8  : writeln('Agustus');\n    9  : writeln('September');\n    10 : writeln('Oktober');\n    11 : writeln('November');\n    12 : writeln('Desember');\n  else\n    writeln('Bukan nomor bulan yang benar!');\n  end;\n  writeln('==============================================');\nend;\n\nprocedure JalankanModul3;\nbegin\n  clrscr;\n  writeln('==============================================');\n  writeln('   MODUL 3: SIMULASI MENU MANAJEMEN DATA      ');\n  writeln('==============================================');\n  writeln('1. Baca data');\n  writeln('2. Cetak data');\n  writeln('3. Ubah data');\n  writeln('4. Hapus data');\n  writeln('5. Kembali ke menu utama');\n  writeln('----------------------------------------------');\n  write('Pilihan Anda [1..5] : ');\n  readln(v_submenu);\n  writeln('----------------------------------------------');\n  case v_submenu of\n    1 : writeln('>> Anda memilih menu nomor 1: Baca data');\n    2 : writeln('>> Anda memilih menu nomor 2: Cetak data');\n    3 : writeln('>> Anda memilih menu nomor 3: Ubah data');\n    4 : writeln('>> Anda memilih menu nomor 4: Hapus data');\n    5 : writeln('>> Anda memilih menu nomor 5: Keluar ke menu utama');\n  else\n    writeln('>> Peringatan: Nomor menu tidak valid (1..5)');\n  end;\n  writeln('==============================================');\nend;\n\nprocedure JalankanModul4;\nbegin\n  clrscr;\n  writeln('==============================================');\n  writeln('   MODUL 4: GEOMETRI EMPAT PERSEGI PANJANG    ');\n  writeln('==============================================');\n  writeln('1. Luas             (L = P * L)');\n  writeln('2. Keliling         (K = 2*P + 2*L)');\n  writeln('3. Panjang Diagonal (D = sqrt(P^2 + L^2))');\n  writeln('4. Kembali ke menu utama');\n  writeln('----------------------------------------------');\n  write('Pilihan Menu [1..4] : ');\n  readln(v_geomenu);\n\n  if (v_geomenu >= 1) and (v_geomenu <= 3) then\n  begin\n    writeln('----------------------------------------------');\n    write('Masukkan Panjang (P) : '); readln(p);\n    write('Masukkan Lebar   (L) : '); readln(l);\n    writeln('----------------------------------------------');\n  end;\n\n  case v_geomenu of\n    1 :\n      begin\n        hasil_geo := p * l;\n        writeln('Hasil Luas Persegi Panjang     : ', hasil_geo:0:2);\n      end;\n    2 :\n      begin\n        hasil_geo := (2 * p) + (2 * l);\n        writeln('Hasil Keliling Persegi Panjang : ', hasil_geo:0:2);\n      end;\n    3 :\n      begin\n        hasil_geo := sqrt((p * p) + (l * l));\n        writeln('Hasil Panjang Diagonal (Hypot) : ', hasil_geo:0:2);\n      end;\n    4 :\n      begin\n        writeln('Kembali ke menu utama.');\n      end;\n  else\n    writeln('Pilihan tidak valid! Masukkan angka 1 sampai 4.');\n  end;\n  writeln('==============================================');\nend;\n\nbegin\n  repeat\n    clrscr;\n    writeln('========================================================');\n    writeln('   MASTER WORKSPACE ALGORITMA & PEMROGRAMAN 1          ');\n    writeln('   PERTEMUAN 7: STRUKTUR PEMILIHAN DISKRIT CASE - OF   ');\n    writeln('   Universitas Indraprasta PGRI (UNINDRA)              ');\n    writeln('========================================================');\n    writeln('1. Contoh Slide Dosen : Konversi Angka ke Kata (1..4)   ');\n    writeln('2. Tugas 1 Dosen      : Menentukan Nama Bulan (1..12)   ');\n    writeln('3. Tugas 2 Dosen      : Menu Interaktif Data (1..5)     ');\n    writeln('4. Tugas 3 Dosen      : Geometri Empat Persegi Panjang  ');\n    writeln('5. Keluar Program                                       ');\n    writeln('========================================================');\n    write('Pilih Modul Praktikum [1..5]: ');\n    readln(menu_utama);\n\n    case menu_utama of\n      1 : JalankanModul1;\n      2 : JalankanModul2;\n      3 : JalankanModul3;\n      4 : JalankanModul4;\n      5 : \n        begin\n          clrscr;\n          writeln('Terima kasih telah menggunakan program praktikum Pertemuan 7!');\n          writeln('Tekan [Enter] untuk menutup terminal...');\n          readln;\n          halt;\n        end;\n    else\n      begin\n        writeln('Pilihan salah! Masukkan angka 1 s.d. 5.');\n      end;\n    end;\n\n    writeln;\n    write('Apakah ingin kembali ke Menu Utama? (Y/T): ');\n    readln(ulang);\n  until (ulang = 'T') or (ulang = 't');\n\n  clrscr;\n  writeln('Program selesai. Sampai jumpa!');\n  readln;\nend.\n"
}
];

export const getPascalFilesByMeeting = (meetingNumber) => {
  return PASCAL_FILES.filter((f) => f.meeting === Number(meetingNumber));
};

export const getPascalFileById = (id) => {
  return PASCAL_FILES.find((f) => f.id === id);
};
