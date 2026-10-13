program Diskon_Belanja_5jt;
uses crt;
var
  total_belanja : real;
  diskon        : real;
  total_bayar   : real;
begin
  clrscr;
  write('Masukkan total belanja : Rp ');
  readln(total_belanja);
  diskon := 0;
  if (total_belanja > 5000000) then
  begin
    diskon := 0.05 * total_belanja;
    writeln('Selamat! Anda mendapatkan diskon 5%');
  end;
  total_bayar := total_belanja - diskon;
  writeln('Potongan Diskon : Rp ', diskon:0:2);
  writeln('Total Bayar     : Rp ', total_bayar:0:2);
  readln;
end.
