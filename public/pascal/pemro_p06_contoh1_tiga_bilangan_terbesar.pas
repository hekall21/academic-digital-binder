program tiga_bilangan_terbesar;
uses crt;

var
  a, b, c : integer;

begin
  clrscr;
  writeln('==============================================');
  writeln('     PROGRAM TIGA BILANGAN TERBESAR           ');
  writeln('         (Slide 5 PPT Pemrograman P6)          ');
  writeln('==============================================');

  write('Input Bilangan Pertama : '); readln(a);
  write('Input Bilangan Kedua   : '); readln(b);
  write('Input Bilangan Ketiga  : '); readln(c);

  { Struktur Nested IF persis Slide 5 }
  if (a > b) then
  begin
    if (a > c) then
      writeln('Angka Terbesar : ', a)
    else
      writeln('Angka Terbesar : ', c);
  end
  else
  begin
    if (b > c) then
      writeln('Angka Terbesar : ', b)
    else
      writeln('Angka Terbesar : ', c);
  end;

  readln;
end.
