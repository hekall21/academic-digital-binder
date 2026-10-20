program Menu_Pengelolaan_Data;
uses crt;

{ Tugas 2 Slide Pertemuan 7 Algoritma 1
  Menampilkan menu 5 pilihan pengolahan data, membaca nomor pilihan,
  dan mencetak pesan konfirmasi menu yang dipilih menggunakan CASE-OF. }

var
  pilihan : integer;

begin
  writeln;
  writeln('==============================================');
  writeln('               ===== MENU =====               ');
  writeln('               1. Baca data                   ');
  writeln('               2. Cetak data                  ');
  writeln('               3. Ubah data                   ');
  writeln('               4. Hapus data                  ');
  writeln('               5. Keluar program              ');
  writeln('==============================================');
  write('Pilihan Anda = ');
  readln(pilihan);
  writeln('----------------------------------------------');

  case pilihan of
    1 : writeln('Anda memilih menu nomor 1 : Baca data');
    2 : writeln('Anda memilih menu nomor 2 : Cetak data');
    3 : writeln('Anda memilih menu nomor 3 : Ubah data');
    4 : writeln('Anda memilih menu nomor 4 : Hapus data');
    5 : writeln('Anda memilih menu nomor 5 : Keluar program');
  else
    writeln('Nomor menu tidak valid! Silakan pilih angka 1 sampai 5.');
  end;

  writeln('==============================================');
  writeln;
  write('Tekan [Enter] untuk keluar program...');
  readln;
end.
