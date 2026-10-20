program Master_Pertemuan_7_Case_Of;
uses crt;

{ Program Terpadu Praktikum Algoritma & Pemrograman 1
  Pertemuan Ke-7: Struktur Pemilihan Diskrit CASE - OF
  Universitas Indraprasta PGRI (UNINDRA)
  
  Mencakup 4 Modul Interaktif:
  1. Konversi Angka ke Kata (1..4)
  2. Penentuan Nama Bulan (1..12)
  3. Simulasi Menu Manajemen Data (1..5)
  4. Geometri Persegi Panjang (Luas, Keliling, Diagonal) }

var
  menu_utama : integer;
  ulang      : char;

  { Variabel Modul 1 }
  v_angka    : integer;

  { Variabel Modul 2 }
  v_bulan    : integer;

  { Variabel Modul 3 }
  v_submenu  : integer;

  { Variabel Modul 4 }
  v_geomenu  : integer;
  p, l       : real;
  hasil_geo  : real;

procedure JalankanModul1;
begin
  writeln;
  writeln('--------------------------------------------------------');
  writeln('   MODUL 1: KONVERSI ANGKA BULAT KE KATA                ');
  writeln('--------------------------------------------------------');
  write('Masukkan sebuah angka bulat (1..4): ');
  readln(v_angka);
  writeln('--------------------------------------------------------');
  write('Hasil Konversi Kata: ');
  case v_angka of
    1 : writeln('satu');
    2 : writeln('dua');
    3 : writeln('tiga');
    4 : writeln('empat');
  else
    writeln('Angka yang dimasukkan salah!');
  end;
  writeln('--------------------------------------------------------');
  writeln;
  write('Tekan [Enter] untuk kembali ke Menu Utama...');
  readln;
end;

procedure JalankanModul2;
begin
  writeln;
  writeln('--------------------------------------------------------');
  writeln('   MODUL 2: PENENTUAN NAMA BULAN DARI ANGKA             ');
  writeln('--------------------------------------------------------');
  write('Masukkan nomor bulan (1..12): ');
  readln(v_bulan);
  writeln('--------------------------------------------------------');
  write('Nama Bulan: ');
  case v_bulan of
    1  : writeln('Januari');
    2  : writeln('Februari');
    3  : writeln('Maret');
    4  : writeln('April');
    5  : writeln('Mei');
    6  : writeln('Juni');
    7  : writeln('Juli');
    8  : writeln('Agustus');
    9  : writeln('September');
    10 : writeln('Oktober');
    11 : writeln('November');
    12 : writeln('Desember');
  else
    writeln('Bukan nomor bulan yang benar!');
  end;
  writeln('--------------------------------------------------------');
  writeln;
  write('Tekan [Enter] untuk kembali ke Menu Utama...');
  readln;
end;

procedure JalankanModul3;
begin
  writeln;
  writeln('--------------------------------------------------------');
  writeln('   MODUL 3: SIMULASI MENU MANAJEMEN DATA                ');
  writeln('--------------------------------------------------------');
  writeln('1. Baca data');
  writeln('2. Cetak data');
  writeln('3. Ubah data');
  writeln('4. Hapus data');
  writeln('5. Kembali ke menu utama');
  writeln('--------------------------------------------------------');
  write('Pilihan Anda [1..5] : ');
  readln(v_submenu);
  writeln('--------------------------------------------------------');
  case v_submenu of
    1 : writeln('>> Anda memilih menu nomor 1: Baca data');
    2 : writeln('>> Anda memilih menu nomor 2: Cetak data');
    3 : writeln('>> Anda memilih menu nomor 3: Ubah data');
    4 : writeln('>> Anda memilih menu nomor 4: Hapus data');
    5 : writeln('>> Anda memilih menu nomor 5: Keluar ke menu utama');
  else
    writeln('>> Peringatan: Nomor menu tidak valid (1..5)');
  end;
  writeln('--------------------------------------------------------');
  writeln;
  write('Tekan [Enter] untuk kembali ke Menu Utama...');
  readln;
end;

procedure JalankanModul4;
begin
  writeln;
  writeln('--------------------------------------------------------');
  writeln('   MODUL 4: GEOMETRI EMPAT PERSEGI PANJANG              ');
  writeln('--------------------------------------------------------');
  writeln('1. Luas             (L = P * L)');
  writeln('2. Keliling         (K = 2*P + 2*L)');
  writeln('3. Panjang Diagonal (D = sqrt(P^2 + L^2))');
  writeln('4. Kembali ke menu utama');
  writeln('--------------------------------------------------------');
  write('Pilihan Menu [1..4] : ');
  readln(v_geomenu);

  if (v_geomenu >= 1) and (v_geomenu <= 3) then
  begin
    writeln('--------------------------------------------------------');
    write('Masukkan Panjang (P) : '); readln(p);
    write('Masukkan Lebar   (L) : '); readln(l);
    writeln('--------------------------------------------------------');
  end;

  case v_geomenu of
    1 :
      begin
        hasil_geo := p * l;
        writeln('Hasil Luas Persegi Panjang     : ', hasil_geo:0:2);
      end;
    2 :
      begin
        hasil_geo := (2 * p) + (2 * l);
        writeln('Hasil Keliling Persegi Panjang : ', hasil_geo:0:2);
      end;
    3 :
      begin
        hasil_geo := sqrt((p * p) + (l * l));
        writeln('Hasil Panjang Diagonal (Hypot) : ', hasil_geo:0:2);
      end;
    4 :
      begin
        writeln('Kembali ke menu utama.');
      end;
  else
    writeln('Pilihan tidak valid! Masukkan angka 1 sampai 4.');
  end;
  writeln('--------------------------------------------------------');
  writeln;
  write('Tekan [Enter] untuk kembali ke Menu Utama...');
  readln;
end;

begin
  repeat
    writeln;
    writeln('========================================================');
    writeln('   MASTER WORKSPACE ALGORITMA & PEMROGRAMAN 1          ');
    writeln('   PERTEMUAN 7: STRUKTUR PEMILIHAN DISKRIT CASE - OF   ');
    writeln('   Universitas Indraprasta PGRI (UNINDRA)              ');
    writeln('========================================================');
    writeln('1. Contoh Slide Dosen : Konversi Angka ke Kata (1..4)   ');
    writeln('2. Tugas 1 Dosen      : Menentukan Nama Bulan (1..12)   ');
    writeln('3. Tugas 2 Dosen      : Menu Interaktif Data (1..5)     ');
    writeln('4. Tugas 3 Dosen      : Geometri Empat Persegi Panjang  ');
    writeln('5. Keluar Program                                       ');
    writeln('========================================================');
    write('Pilih Modul Praktikum [1..5]: ');
    readln(menu_utama);

    case menu_utama of
      1 : JalankanModul1;
      2 : JalankanModul2;
      3 : JalankanModul3;
      4 : JalankanModul4;
      5 : 
        begin
          writeln;
          writeln('========================================================');
          writeln('Terima kasih telah menggunakan program praktikum Pertemuan 7!');
          writeln('Tekan [Enter] untuk menutup terminal...');
          readln;
          halt;
        end;
    else
      begin
        writeln('Pilihan salah! Masukkan angka 1 s.d. 5.');
        writeln;
        write('Tekan [Enter] untuk mengulang...');
        readln;
      end;
    end;

    writeln;
    write('Apakah ingin kembali ke Menu Utama? (Y/T): ');
    readln(ulang);
  until (ulang = 'T') or (ulang = 't');

  writeln;
  writeln('========================================================');
  writeln('Program selesai. Sampai jumpa!');
  writeln('========================================================');
  writeln;
  write('Tekan [Enter] untuk keluar...');
  readln;
end.
