program Menu_Persegi_Panjang;
uses crt;

{ Tugas 3 Slide Pertemuan 7 Algoritma 1
  Program menu kalkulasi geometri Empat Persegi Panjang:
  1) Luas = P * L
  2) Keliling = 2*P + 2*L
  3) Panjang diagonal = sqrt(P*P + L*L)
  4) Keluar program }

var
  pilihan  : integer;
  panjang  : real;
  lebar    : real;
  luas     : real;
  keliling : real;
  diagonal : real;

begin
  writeln;
  writeln('==============================================');
  writeln('   PROGRAM MENU PERHITUNGAN PERSEGI PANJANG   ');
  writeln('        (Tugas 3 Slide P7 Algoritma 1)        ');
  writeln('==============================================');
  writeln('1. Luas');
  writeln('2. Keliling');
  writeln('3. Panjang diagonal');
  writeln('4. Keluar program');
  writeln('==============================================');
  write('Pilihan Anda [1..4] : ');
  readln(pilihan);
  writeln('----------------------------------------------');

  case pilihan of
    1 :
      begin
        writeln('>> 1. HITUNG LUAS PERSEGI PANJANG');
        write('Masukkan Panjang (P) : '); readln(panjang);
        write('Masukkan Lebar   (L) : '); readln(lebar);
        luas := panjang * lebar;
        writeln('----------------------------------------------');
        writeln('Luas Persegi Panjang (P * L) = ', luas:0:2);
      end;
    2 :
      begin
        writeln('>> 2. HITUNG KELILING PERSEGI PANJANG');
        write('Masukkan Panjang (P) : '); readln(panjang);
        write('Masukkan Lebar   (L) : '); readln(lebar);
        keliling := (2 * panjang) + (2 * lebar);
        writeln('----------------------------------------------');
        writeln('Keliling Persegi Panjang (2*P + 2*L) = ', keliling:0:2);
      end;
    3 :
      begin
        writeln('>> 3. HITUNG PANJANG DIAGONAL');
        write('Masukkan Panjang (P) : '); readln(panjang);
        write('Masukkan Lebar   (L) : '); readln(lebar);
        diagonal := sqrt((panjang * panjang) + (lebar * lebar));
        writeln('----------------------------------------------');
        writeln('Panjang Diagonal sqrt(P^2 + L^2) = ', diagonal:0:2);
      end;
    4 :
      begin
        writeln('Keluar dari program. Terima kasih!');
      end;
  else
    writeln('Pilihan menu salah! Silakan pilih menu antara 1 sampai 4.');
  end;

  writeln('==============================================');
  writeln;
  write('Tekan [Enter] untuk keluar program...');
  readln;
end.
