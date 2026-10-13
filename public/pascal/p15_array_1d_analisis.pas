program Pengolahan_Array_1D_Pertemuan15;
uses crt;

type
  larik_angka = array[1..5] of integer;

var
  data_angka : larik_angka;
  i          : integer;
  jumlah     : integer;
  tertinggi  : integer;
  terendah   : integer;
  rata_rata  : real;

begin
  clrscr;
  writeln('==============================================');
  writeln('   PENGOLAHAN DATA ARRAY 1 DIMENSI (LARIK)    ');
  writeln('==============================================');
  writeln;

  { Input 5 data array }
  for i := 1 to 5 do
  begin
    write('Input data ke-', i, ' : ');
    readln(data_angka[i]);
  end;

  { Inisialisasi awal }
  jumlah    := data_angka[1];
  tertinggi := data_angka[1];
  terendah  := data_angka[1];

  { Hitung total, min, max }
  for i := 2 to 5 do
  begin
    jumlah := jumlah + data_angka[i];

    if data_angka[i] > tertinggi then
      tertinggi := data_angka[i];

    if data_angka[i] < terendah then
      terendah := data_angka[i];
  end;

  rata_rata := jumlah / 5.0;

  writeln;
  writeln('---------------- HASIL ANALISIS --------------');
  write('Elemen Array      : ');
  for i := 1 to 5 do
  begin
    write(data_angka[i], ' ');
  end;
  writeln;
  writeln('Jumlah Total Data : ', jumlah);
  writeln('Nilai Tertinggi   : ', tertinggi);
  writeln('Nilai Terendah    : ', terendah);
  writeln('Rata-rata         : ', rata_rata:0:2);
  writeln('==============================================');

  readln;
end.
