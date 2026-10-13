program Hitung_Nilai_Y;
uses crt;
var
  angka : integer;
  y     : integer;
begin
  clrscr;
  write('Masukkan angka : ');
  readln(angka);
  if (angka > 5) then
  begin
    y := (angka * 10) + 100;
    writeln('Nilai Y adalah : ', y);
  end;
  readln;
end.
