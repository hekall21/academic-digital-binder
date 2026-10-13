// src/lib/pascalLineExplainer.js
// Mesin Cerdas Penjelas Logika Baris-per-Baris Kode Pascal (Free Pascal / Turbo Pascal)
// Menjawab kebutuhan mahasiswa: fungsi baris, kenapa sintaksnya begini, kenapa begin tanpa ;, kenapa writeln, kenapa sebelum else dilarang ;, dll.

/**
 * Menganalisis satu baris kode Pascal dan menghasilkan penjelasan mendalam
 * @param {string} rawLine Baris kode teks asli
 * @param {number} lineIndex Indeks baris (0-based)
 * @param {string[]} allLines Seluruh baris kode program
 * @param {object} fileContext Metadata berkas (filename, title, meeting, category)
 * @returns {object} Detail inspeksi baris
 */
export function explainPascalLine(rawLine, lineIndex, allLines = [], fileContext = {}) {
  const lineNum = lineIndex + 1;
  const trimmed = (rawLine || '').trim();

  // 1. Baris Kosong
  if (!trimmed) {
    return {
      lineNum,
      code: '',
      isEmpty: true,
      category: 'Spasi / Pemisah',
      badge: 'Pemisah',
      badgeColor: 'slate',
      purpose: 'Baris kosong sebagai pemisah visual antar-bagian program.',
      whySyntax: 'Pascal mengabaikan spasi kosong (whitespace). Baris kosong dibuat oleh programmer agar kode enak dibaca manusia dan tidak padat menumpuk.',
      dosenTip: 'Gunakan 1 baris kosong untuk memisahkan bagian deklarasi var dengan blok begin.',
    };
  }

  // 2. Baris Komentar ({...} atau //...)
  if (trimmed.startsWith('{') || trimmed.startsWith('//') || trimmed.startsWith('(*')) {
    return {
      lineNum,
      code: trimmed,
      category: 'Komentar Penjelas',
      badge: 'Komentar',
      badgeColor: 'emerald',
      purpose: 'Catatan dokumentasi atau instruksi logika yang ditulis untuk dibaca oleh manusia/mahasiswa.',
      whySyntax: 'Compiler Free Pascal akan mengabaikan seluruh teks di dalam kurung kurawal {...} atau setelah garis miring ganda // dan tidak akan memprosesnya ke dalam file biner .exe.',
      dosenTip: 'Sangat disarankan oleh dosen untuk mencantumkan Nama, NIM, dan Judul Tugas di baris komentar atas.',
    };
  }

  // 3. Kepala Program (program ...)
  if (/^program\s+/i.test(trimmed)) {
    const matchName = trimmed.match(/^program\s+([a-zA-Z0-9_]+)/i);
    const progName = matchName ? matchName[1] : 'Program';
    return {
      lineNum,
      code: trimmed,
      category: 'Kepala Program (Header)',
      badge: 'Header',
      badgeColor: 'cyan',
      purpose: `Mendeklarasikan judul resmi program ('${progName}') kepada compiler Free Pascal.`,
      whySyntax: "Diawali kata kunci baku 'program', diikuti satu kata pengenal tanpa spasi (gunakan underscore '_' jika ada pemisah), dan diakhiri tanda titik koma (;).",
      dosenTip: 'Nama program tidak boleh diawali dengan angka, tidak boleh ada spasi, dan tidak boleh memakai karakter spesial (!@#$%^&*).',
    };
  }

  // 4. Impor Pustaka (uses crt;)
  if (/^uses\s+/i.test(trimmed)) {
    return {
      lineNum,
      code: trimmed,
      category: 'Impor Modul / Unit',
      badge: 'Uses CRT',
      badgeColor: 'purple',
      purpose: 'Mengimpor unit pustaka CRT (Cathode Ray Tube) agar program memiliki akses ke fitur manipulasi console monitor dan keyboard.',
      whySyntax: "KENAPA BUTUH 'uses crt;'? Tanpa baris ini, perintah membersihkan layar ('clrscr') dan membaca tombol jeda ('readkey') akan menghasilkan ERROR kompilasi: 'Identifier not found: clrscr'.",
      dosenTip: 'Wajib ditaruh tepat di baris kedua setelah baris judul program.',
    };
  }

  // 5. Blok Deklarasi Variabel (var)
  if (/^var$/i.test(trimmed)) {
    return {
      lineNum,
      code: trimmed,
      category: 'Deklarasi Variabel',
      badge: 'Blok VAR',
      badgeColor: 'indigo',
      purpose: 'Membuka blok deklarasi wadah variabel. Memberitahu CPU & memori RAM untuk bersiap mengalokasikan ruang data.',
      whySyntax: "KENAPA 'var' TIDAK PAKAI TITIK KOMA (;)? Karena 'var' adalah penanda awal blok deklarasi (keyword pembuka), bukan baris instruksi yang berdiri sendiri. Titik koma baru dipakai saat nama variabel dan tipe datanya ditulis di baris bawahnya.",
      dosenTip: 'Pascal bersifat Strict Static Typing. Semua variabel WAJIB didaftarkan di sini terlebih dahulu sebelum kata kunci begin. Variabel tidak boleh dibuat tiba-tiba di tengah jalannya program.',
    };
  }

  // 6. Deklarasi Konstanta (const ...)
  if (/^const$/i.test(trimmed) || /^const\s+/i.test(trimmed)) {
    return {
      lineNum,
      code: trimmed,
      category: 'Deklarasi Konstanta',
      badge: 'Konstanta',
      badgeColor: 'amber',
      purpose: 'Mendefinisikan tetapan nilai konstan yang terkunci permanen dan tidak dapat diubah selama program dieksekusi.',
      whySyntax: "Pada blok const, pengisian nilai menggunakan tanda sama dengan biasa '=' (misal: PHI = 3.14;), BUKAN operator assignment ':='.",
      dosenTip: 'Gunakan huruf kapital semua untuk nama konstanta agar mudah dibedakan dengan variabel biasa.',
    };
  }

  // 7. Deklarasi Tipe Bentukan (type ...)
  if (/^type\s+/i.test(trimmed) || /^type$/i.test(trimmed) || /array\[.*\]\s+of/i.test(trimmed)) {
    return {
      lineNum,
      code: trimmed,
      category: 'Tipe Data Bentukan (Larik/Array)',
      badge: 'Type Def',
      badgeColor: 'sky',
      purpose: 'Mendefinisikan tipe data bentukan kustom, umumnya berupa struktur larik (Array) dengan rentang indeks tertentu.',
      whySyntax: "Format baku: 'type nama_tipe = array[1..N] of tipe_data;'. Tanda '..' (titik dua kali) mendefinisikan rentang indeks awal hingga akhir.",
      dosenTip: 'Sangat sering diujikan di materi Pertemuan 15 (Array 1D dan 2D Matriks).',
    };
  }

  // 8. Deklarasi Variabel Spesifik (misal: x : real; atau i : integer;)
  if (/^[a-zA-Z0-9_,\s]+\s*:\s*[a-zA-Z0-9_\[\].\s]+;/i.test(trimmed)) {
    const parts = trimmed.split(':');
    const varNames = parts[0].trim();
    const typePart = parts[1].replace(';', '').trim().toLowerCase();

    let typeDesc = '';
    let whyType = '';

    if (typePart.includes('real')) {
      typeDesc = 'Bilangan desimal/pecahan berkoma (contoh: 85.50, 3.14).';
      whyType = "Dipilih karena menampung hasil perhitungan yang memiliki nilai bagi/persentase pecahan, mencegah pembulatan angka menjadi nol.";
    } else if (typePart.includes('longint')) {
      typeDesc = 'Bilangan bulat berkapasitas besar (-2 miliar s/d +2 miliar).';
      whyType = "Dipilih karena variabel menampung nominal uang/gaji jutaan rupiah yang melebihi batas tipe integer biasa (maks 32.767).";
    } else if (typePart.includes('integer') || typePart.includes('byte') || typePart.includes('word')) {
      typeDesc = 'Bilangan bulat tanpa koma.';
      whyType = "Cocok untuk variabel indeks perulangan, pencacah (counter), atau jumlah barang diskrit.";
    } else if (typePart.includes('string')) {
      typeDesc = 'Untaian teks / kalimat huruf majemuk.';
      whyType = "Digunakan untuk menampung kata atau status seperti 'LULUS', 'TIDAK LULUS', 'SMA', atau 'S1'.";
    } else if (typePart.includes('char')) {
      typeDesc = 'Karakter tunggal tepat 1 huruf/simbol.';
      whyType = "Sangat hemat memori, ideal untuk grade nilai ('A', 'B', 'C') atau konfirmasi pilihan ('Y' / 'T').";
    } else if (typePart.includes('boolean')) {
      typeDesc = 'Tipe logika benar/salah (hanya bernilai TRUE atau FALSE).';
      whyType = "Digunakan sebagai flag penanda status validasi input sebelum rumus diproses.";
    } else {
      typeDesc = `Tipe data bentukan '${typePart}'.`;
      whyType = 'Menampung struktur data sesuai definisi program.';
    }

    return {
      lineNum,
      code: trimmed,
      category: 'Pendaftaran Variabel RAM',
      badge: `Tipe: ${typePart.toUpperCase()}`,
      badgeColor: 'violet',
      purpose: `Mendaftarkan variabel '${varNames}' sebagai wadah penyimpan ${typeDesc}`,
      whySyntax: `Struktur penulisan: 'nama_variabel : tipe_data;'. Tanda titik dua (:) bertindak sebagai pengait tipe, dan titik koma (;) sebagai penutup deklarasi baris tersebut. ${whyType}`,
      dosenTip: 'Jika ada beberapa variabel bertipe sama, bisa digabung menggunakan koma, contoh: a, b, c : integer;',
    };
  }

  // 9. Kata Kunci begin
  if (/^begin$/i.test(trimmed)) {
    // Cek apakah ini begin program utama atau begin di dalam blok control
    const isMainBegin = lineNum <= 20 && !allLines.slice(0, lineIndex).some(l => /^begin$/i.test(l.trim()));
    return {
      lineNum,
      code: trimmed,
      category: isMainBegin ? 'Blok Utama Program' : 'Pembuka Blok Majemuk',
      badge: 'BEGIN',
      badgeColor: 'rose',
      purpose: isMainBegin
        ? 'Menandai titik awal eksekusi program utama yang akan diproses oleh prosesor.'
        : 'Membuka blok instruksi majemuk (compound statement) di dalam percabangan IF atau perulangan.',
      whySyntax: "KENAPA 'begin' TIDAK PAKAI TITIK KOMA (;)? Karena 'begin' adalah KATA PEMBUKA BLOK, bukan baris perintah yang selesai. Memberi titik koma pada 'begin;' secara logika tidak perlu. Pasangan penutupnya adalah kata 'end;' (atau 'end.' di akhir program).",
      dosenTip: 'Ingat rumus emas: Setiap ada 1 kata begin, pastikan ada 1 kata end penutupnya di bawah agar tidak terjadi error fatal: Fatal: Unexpected end of file.',
    };
  }

  // 10. clrscr;
  if (/^clrscr;/i.test(trimmed)) {
    return {
      lineNum,
      code: trimmed,
      category: 'Perintah Layar (CRT)',
      badge: 'Clear Screen',
      badgeColor: 'amber',
      purpose: "Singkatan dari 'Clear Screen'. Membersihkan dan mengosongkan seluruh tampilan layar monitor terminal CMD.",
      whySyntax: "Diakhiri titik koma (;) sebagai perintah utuh. Dijalankan di awal eksekusi agar pengguna melihat antarmuka yang bersih tanpa tercampur teks dari program lain sebelumnya.",
      dosenTip: 'Perintah ini hanya bekerja jika unit uses crt; sudah dipanggil di atas.',
    };
  }

  // 11. write(...)
  if (/^write\s*\(/i.test(trimmed)) {
    return {
      lineNum,
      code: trimmed,
      category: 'Input/Output (Tampilan)',
      badge: 'WRITE (No Enter)',
      badgeColor: 'sky',
      purpose: 'Mencetak teks label atau prompt ke layar monitor TANPA membuat baris baru (kursor tetap berada di samping kanan).',
      whySyntax: "KENAPA PAKAI 'write' (BUKAN 'writeln')? Karena ini adalah label pertanyaan input! Dengan 'write', saat pengguna mengetik data dari keyboard, ketikan pengguna berada persis di sebelah tanda titik dua (:), bukan turun anjlok ke baris bawahnya.",
      dosenTip: 'Gunakan write() saat meminta input form, dan gunakan writeln() saat menampilkan hasil akhir.',
    };
  }

  // 12. writeln(...) dengan parameter
  if (/^writeln\s*\(/i.test(trimmed)) {
    const hasFormat = /:\s*\d+\s*:\s*\d+/.test(trimmed);
    const whyFormat = hasFormat
      ? "Perhatikan format ':0:2' di dalamnya: Format ini berguna membatasi angka desimal riil agar tampil rapi dengan 2 angka di belakang koma (misal: 85.50), bukan format eksponensial ilmiah (8.55E+001)."
      : "Kursor akan otomatis dipindahkan ke baris berikutnya setelah teks dicetak.";

    return {
      lineNum,
      code: trimmed,
      category: 'Input/Output (Tampilan)',
      badge: 'WRITELN (Enter)',
      badgeColor: 'teal',
      purpose: 'Mencetak teks/nilai variabel ke layar console terminal lalu LANGSUNG PINDAH KE BARIS BARU (membuat enter).',
      whySyntax: `KENAPA 'writeln'? Singkatan dari 'Write Line'. Perintah ini mencetak data lalu mengirimkan karakter newline (CR/LF) ke terminal. ${whyFormat}`,
      dosenTip: 'Koma (,) di dalam writeln berfungsi untuk menggabungkan string statis dengan variabel dinamis, contoh: writeln(\'Nilai : \', nilai);',
    };
  }

  // 13. writeln; (tanpa parameter / baris kosong)
  if (/^writeln\s*;?$/i.test(trimmed)) {
    return {
      lineNum,
      code: trimmed,
      category: 'Format Antarmuka',
      badge: 'Enter Kosong',
      badgeColor: 'slate',
      purpose: 'Mencetak satu baris kosong (karakter Enter) ke layar monitor terminal.',
      whySyntax: "Digunakan sebagai pemisah ruang kosong (*spacing*) agar antarmuka console rapi dan teks output tidak menempel rapat dengan teks input sebelumnya.",
      dosenTip: 'Trik desain terminal dosen: Beri writeln; sebelum dan sesudah tabel hasil untuk estetika antarmuka.',
    };
  }

  // 14. readln(...) dengan variabel
  if (/^readln\s*\(/i.test(trimmed)) {
    const matchVar = trimmed.match(/^readln\s*\(([^)]+)\)/i);
    const vName = matchVar ? matchVar[1].trim() : 'variabel';
    return {
      lineNum,
      code: trimmed,
      category: 'Input Keyboard',
      badge: 'READLN',
      badgeColor: 'cyan',
      purpose: `Menghentikan sejenak program untuk membaca masukan ketikan pengguna dari keyboard, lalu menyimpannya ke variabel '${vName}'.`,
      whySyntax: "KENAPA 'readln' (BUKAN 'read')? 'readln' (Read Line) akan membaca data hingga tombol Enter ditekan dan langsung mengosongkan antrean penyangga keyboard (buffer), sehingga input di baris berikutnya tidak akan loncat.",
      dosenTip: 'Pastikan tipe data yang diinput pengguna cocok dengan tipe variabelnya. Jika variabel integer diisi huruf, program akan crash dengan error Run-time error 106.',
    };
  }

  // 15. Operasi Assignment (:=)
  if (/:=/.test(trimmed) && !/if\s+/i.test(trimmed) && !/for\s+/i.test(trimmed)) {
    const leftVar = trimmed.split(':=')[0].trim();
    return {
      lineNum,
      code: trimmed,
      category: 'Aritmatika & Assignment',
      badge: 'Assignment (:=)',
      badgeColor: 'orange',
      purpose: `Menghitung operasi ekspresi di sisi kanan tanda ':=', lalu memasukkan hasilnya ke wadah variabel '${leftVar}'.`,
      whySyntax: "KENAPA TITIK DUA SAMA DENGAN (:=)? Di Pascal, ':=' adalah operator ASSIGNMENT (pengisian nilai). Tanda '=' tunggal hanya untuk perbandingan relasional (seperti pada IF) atau deklarasi konstanta. Menulis 'a = b + c;' akan langsung memicu error kompilasi.",
      dosenTip: 'Tanda kurung () digunakan untuk mengatur prioritas urutan perkalian dan penjumlahan matematika.',
    };
  }

  // 16. Percabangan IF-THEN
  if (/^if\s+/i.test(trimmed)) {
    const nextLine = (allLines[lineIndex + 1] || '').trim();
    const isFollowedByElse = /^else/i.test(nextLine);

    let semicolonWarning = '';
    if (trimmed.endsWith(';') && isFollowedByElse) {
      semicolonWarning = " ⚠️ BAHAYA: Baris ini diakhiri titik koma padahal baris berikutnya adalah ELSE!";
    }

    return {
      lineNum,
      code: trimmed,
      category: 'Logika Percabangan (Decision)',
      badge: 'IF-THEN',
      badgeColor: 'yellow',
      purpose: 'Mengevaluasi kondisi logika apakah bernilai TRUE (benar) atau FALSE (salah). Mengarahkan alur program bercabang.',
      whySyntax: `Struktur: 'if (kondisi) then'. Jika kondisi bernilai TRUE, aksi setelah kata 'then' akan diproses CPU.${semicolonWarning}`,
      dosenTip: 'Gunakan operator pembanding: > (lebih besar), < (lebih kecil), >= (lebih besar sama dengan), <=, = (sama dengan), <> (tidak sama dengan).',
    };
  }

  // 17. Baris persis sebelum kata 'else' (ATURAN KRITIS SEMICOLON)
  const nextLineTrimmed = (allLines[lineIndex + 1] || '').trim();
  if (nextLineTrimmed.startsWith('else') && !trimmed.startsWith('begin') && !trimmed.startsWith('//')) {
    return {
      lineNum,
      code: trimmed,
      category: 'Aksi IF (Sebelum ELSE)',
      badge: 'Anti-Semicolon Rule',
      badgeColor: 'red',
      purpose: 'Instruksi aksi yang dijalankan apabila kondisi IF di atasnya terpenuhi (TRUE).',
      whySyntax: "🚨 ATURAN MUTLAK DOSEN & PASCAL: Baris tepat sebelum kata 'else' DILARANG KERAS MENGGUNAKAN TITIK KOMA (;)! Mengapa? Titik koma menandakan sebuah pernyataan sudah berakhir total. Padahal rangkaian 'if-then-else' adalah satu kesatuan instruksi tunggal. Jika Anda nekat memberi titik koma sebelum else, compiler akan memunculkan error fatal: 'Syntax error, ; expected but ELSE found'.",
      dosenTip: 'Ini adalah jebakan error nomor 1 yang paling sering menjatuhkan mahasiswa saat ujian lab praktikum!',
    };
  }

  // 18. else if ... then
  if (/^else\s+if\s+/i.test(trimmed)) {
    return {
      lineNum,
      code: trimmed,
      category: 'Percabangan Majemuk',
      badge: 'ELSE IF',
      badgeColor: 'amber',
      purpose: 'Menguji kondisi alternatif berikutnya apabila kondisi IF sebelumnya tidak terpenuhi (bernilai FALSE).',
      whySyntax: "Memungkinkan pengecekan bertingkat multi-kasus secara teratur dari atas ke bawah. Begitu satu kondisi terpenuhi, kondisi di bawahnya tidak akan diuji lagi.",
      dosenTip: 'Urutkan kondisi dari rentang tertinggi ke terendah saat membuat grading nilai (misal: >= 85, lalu >= 75, lalu >= 60).',
    };
  }

  // 19. else
  if (/^else$/i.test(trimmed) || /^else\s+/i.test(trimmed)) {
    return {
      lineNum,
      code: trimmed,
      category: 'Jalur Alternatif Terakhir',
      badge: 'ELSE',
      badgeColor: 'rose',
      purpose: 'Jalur fallback eksekusi apabila SEMUA kondisi IF dan ELSE IF di atasnya bernilai salah (FALSE).',
      whySyntax: "Kata kunci 'else' tidak memerlukan pengecekan kondisi apa pun lagi. Instruksi di bawahnya akan langsung dieksekusi sebagai jalan keluar terakhir.",
      dosenTip: 'Sangat baik untuk penanganan error atau nilai tidak valid di luar pilihan yang disediakan.',
    };
  }

  // 20. for ... to / downto ... do
  if (/^for\s+/i.test(trimmed)) {
    const isDownto = /downto/i.test(trimmed);
    return {
      lineNum,
      code: trimmed,
      category: 'Perulangan Terhitung (Loop)',
      badge: isDownto ? 'FOR DOWNTO' : 'FOR TO DO',
      badgeColor: 'emerald',
      purpose: `Perulangan terhitung (*definite loop*). Menjalankan blok instruksi secara berulang ${isDownto ? 'mundur' : 'maju'} dengan jumlah putaran yang sudah pasti.`,
      whySyntax: `Variabel pencacah (counter) otomatis bertambah +1 (jika TO) atau berkurang -1 (jika DOWNTO) pada setiap akhir putaran tanpa perlu di-increment manual.`,
      dosenTip: 'Variabel indeks for (misal: i) wajib bertipe ordinal seperti integer, char, atau byte.',
    };
  }

  // 21. while ... do
  if (/^while\s+/i.test(trimmed)) {
    return {
      lineNum,
      code: trimmed,
      category: 'Perulangan Bersyarat di Awal',
      badge: 'WHILE-DO',
      badgeColor: 'cyan',
      purpose: 'Perulangan yang mengecek syarat di AWAL (*pre-condition*). Selama kondisi di dalam kurung bernilai TRUE, blok kode akan terus diulang.',
      whySyntax: "Jika sejak awal kondisi sudah bernilai FALSE, isi loop sama sekali TIDAK AKAN PERNAH DIJALANKAN (0 kali eksekusi).",
      dosenTip: 'Wajib ada instruksi di dalam loop yang mengubah kondisi (seperti i := i + 1) agar tidak terjadi Infinite Loop (perulangan macet tiada henti).',
    };
  }

  // 22. repeat ... until
  if (/^repeat$/i.test(trimmed)) {
    return {
      lineNum,
      code: trimmed,
      category: 'Perulangan Evaluasi di Akhir',
      badge: 'REPEAT',
      badgeColor: 'purple',
      purpose: 'Membuka blok perulangan dengan evaluasi di AKHIR (*post-condition*). Menjamin blok instruksi DIJALANKAN MINIMAL 1 KALI.',
      whySyntax: "Keistimewaan 'repeat': Tidak memerlukan kata kunci 'begin' dan 'end' untuk membungkus banyak instruksi. Penutupnya adalah kata 'until (kondisi);'.",
      dosenTip: 'Sangat cocok untuk simulasi permainan atau program yang menanyakan: "Apakah ingin mengulang lagi? (Y/T)".',
    };
  }

  if (/^until\s+/i.test(trimmed)) {
    return {
      lineNum,
      code: trimmed,
      category: 'Pemberhentian Perulangan',
      badge: 'UNTIL',
      badgeColor: 'purple',
      purpose: 'Syarat henti perulangan REPEAT. Perulangan AKAN BERHENTI saat kondisi di baris ini bernilai TRUE.',
      whySyntax: "Berlawanan dengan WHILE yang terus berputar saat TRUE, REPEAT-UNTIL terus berputar selama kondisi FALSE dan baru berhenti saat kondisi menjadi TRUE.",
      dosenTip: 'Gunakan operator logika OR jika menerima huruf kecil dan kapital, misal: until (ulang = \'t\') or (ulang = \'T\');',
    };
  }

  // 23. readln; di akhir (penahan layar console)
  if (/^readln;?$/i.test(trimmed)) {
    return {
      lineNum,
      code: trimmed,
      category: 'Penahan Layar Console',
      badge: 'Jeda Layar',
      badgeColor: 'emerald',
      purpose: 'Menahan jendela layar terminal console command prompt agar tidak langsung otomatis menutup seketika setelah selesai menghitung.',
      whySyntax: "KENAPA BUTUH 'readln;' DI AKHIR? Saat Anda mengompilasi program di Windows, begitu instruksi terakhir tuntas, OS akan langsung menutup jendela console dalam hitungan milidetik. Perintah 'readln;' memaksa komputer berhenti dan menunggu mahasiswa menekan tombol Enter di keyboard.",
      dosenTip: 'Wajib ditaruh di baris tepat sebelum kata kunci penutup end.',
    };
  }

  // 24. end. (dengan titik - akhir mutlak)
  if (/^end\.$/i.test(trimmed)) {
    return {
      lineNum,
      code: trimmed,
      category: 'Penutup Mutlak Program',
      badge: 'END. (Titik)',
      badgeColor: 'rose',
      purpose: 'Menandai akhir mutlak (End of File / EOF) dari seluruh rangkaian kode program Pascal.',
      whySyntax: "KENAPA MENGGUNAKAN TANDA TITIK (.) BUKAN TITIK KOMA (;)? Tanda titik memberitahu compiler Free Pascal bahwa pembacaan file kode sumber telah selesai total. Teks apa pun yang Anda tulis setelah tanda 'end.' akan diabaikan oleh compiler.",
      dosenTip: 'Setiap program Pascal yang valid hanya memiliki tepat 1 buah kata end yang diakhiri tanda titik.',
    };
  }

  // 25. end; (dengan titik koma - penutup sub-blok)
  if (/^end;?$/i.test(trimmed)) {
    return {
      lineNum,
      code: trimmed,
      category: 'Penutup Blok Anak',
      badge: 'END; (Semicolon)',
      badgeColor: 'slate',
      purpose: 'Menutup blok instruksi majemuk lokal (seperti blok begin di dalam IF, ELSE, FOR, atau WHILE).',
      whySyntax: "Menggunakan tanda titik koma (;) karena setelah blok anak ini ditutup, alur eksekusi program masih berlanjut ke baris perintah berikutnya.",
      dosenTip: 'Pastikan penataan spasi indentasi lurus dengan kata begin pasangannya agar kode mudah ditelusuri.',
    };
  }

  // 26. Default Fallback untuk instruksi umum lainnya
  return {
    lineNum,
    code: trimmed,
    category: 'Instruksi Eksekusi',
    badge: 'Statement',
    badgeColor: 'indigo',
    purpose: 'Menjalankan instruksi spesifik dalam alur logika sekuensial program.',
    whySyntax: 'Diakhiri tanda titik koma (;) sebagai pemisah standar antar-pernyataan di bahasa Pascal.',
    dosenTip: 'Pastikan setiap variabel yang digunakan dalam baris ini sudah dideklarasikan di bagian var.',
  };
}

/**
 * Menganalisis seluruh baris berkas Pascal sekaligus
 * @param {string} rawCode Kode mentah program
 * @param {object} fileContext Metadata berkas
 * @returns {Array} Kumpulan analisis baris
 */
export function analyzeAllPascalLines(rawCode = '', fileContext = {}) {
  if (!rawCode) return [];
  const lines = rawCode.split('\n');
  return lines.map((line, idx) => explainPascalLine(line, idx, lines, fileContext));
}
