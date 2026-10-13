program Kategori_Tinggi;
uses crt;
var
  tinggi : real;
begin
  clrscr;
  write('Masukkan tinggi seseorang (cm) : ');
  readln(tinggi);
  if (tinggi > 170) then
  begin
    writeln('Kategori : Manusia Tinggi');
  end;
  readln;
end.
