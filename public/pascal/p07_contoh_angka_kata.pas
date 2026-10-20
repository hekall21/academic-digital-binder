program Konversi_Angka_Ke_Kata;
uses crt;

{ Program Contoh Materi Slide Pertemuan 7 Algoritma 1
  Mengonversi input angka 1..4 menjadi kata menggunakan struktur CASE-OF }

var
  angka : integer;

begin
  writeln;
  writeln('==============================================');
  writeln('   PROGRAM KONVERSI ANGKA KE KATA (CASE-OF)   ');
  writeln('        (Materi Slide P7 Algoritma 1)         ');
  writeln('==============================================');
  write('Masukkan sebuah angka bulat (1..4): ');
  readln(angka);
  writeln('----------------------------------------------');

  write('Hasil Konversi: ');
  case angka of
    1 : writeln('satu');
    2 : writeln('dua');
    3 : writeln('tiga');
    4 : writeln('empat');
  else
    writeln('Angka yang dimasukkan salah');
  end;

  writeln('==============================================');
  writeln;
  write('Tekan [Enter] untuk keluar program...');
  readln;
end.
