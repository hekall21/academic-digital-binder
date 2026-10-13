program Hitung_Diskon_Belanja;
uses crt;
var
  jumlah_belanja : real;
  persen_diskon  : real;
  diskon         : real;
  total_bayar    : real;
begin
  clrscr;
  writeln('==============================================');
  writeln('       PROGRAM PERHITUNGAN DISKON BELANJA     ');
  writeln('==============================================');
  write('Masukkan jumlah belanja : Rp ');
  readln(jumlah_belanja);

  if (jumlah_belanja > 500000) then
    persen_diskon := 0.15
  else if (jumlah_belanja >= 300000) then
    persen_diskon := 0.10
  else
    persen_diskon := 0.0;

  diskon := persen_diskon * jumlah_belanja;
  total_bayar := jumlah_belanja - diskon;

  writeln('----------------------------------------------');
  writeln('Diskon Didapat  : ', (persen_diskon * 100):0:0, '%');
  writeln('Potongan Diskon : Rp ', diskon:0:2);
  writeln('Total Belanja   : Rp ', total_bayar:0:2);
  writeln('==============================================');
  readln;
end.
