program Menentukan_Nama_Bulan;
uses crt;

{ Tugas 1 Slide Pertemuan 7 Algoritma 1
  Membaca angka bulan (integer 1..12) lalu menampilkan nama bulan.
  Jika angka di luar rentang 1..12, menampilkan pesan error validasi. }

var
  angka_bulan : integer;

begin
  writeln;
  writeln('==============================================');
  writeln('        PROGRAM MENENTUKAN NAMA BULAN         ');
  writeln('        (Tugas 1 Slide P7 Algoritma 1)        ');
  writeln('==============================================');
  write('Masukkan nomor bulan (1..12): ');
  readln(angka_bulan);
  writeln('----------------------------------------------');

  write('Nama Bulan: ');
  case angka_bulan of
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
    writeln('Bukan nomor bulan yang benar');
  end;

  writeln('==============================================');
  writeln;
  write('Tekan [Enter] untuk keluar program...');
  readln;
end.
