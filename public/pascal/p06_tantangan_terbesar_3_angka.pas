program tantangan_tiga_bilangan_terbesar;
uses crt;

var
  a, b, c : integer;

begin
  clrscr;
  writeln('==============================================');
  writeln(' PROGRAM TANTANGAN NESTED IF: 3 BILANGAN      ');
  writeln('      (Kuliah Pemrograman - Pak Rizki)        ');
  writeln('==============================================');

  write('Masukkan Bilangan Pertama (A) : '); readln(a);
  write('Masukkan Bilangan Kedua   (B) : '); readln(b);
  write('Masukkan Bilangan Ketiga  (C) : '); readln(c);

  writeln('----------------------------------------------');

  { Struktur Nested IF (IF di dalam IF) persis penjelasan Pak Rizki }
  if (a > b) then
  begin
    if (a > c) then
      writeln('Bilangan Terbesar adalah : ', a)
    else
      writeln('Bilangan Terbesar adalah : ', c);
  end
  else
  begin
    if (b > c) then
      writeln('Bilangan Terbesar adalah : ', b)
    else
      writeln('Bilangan Terbesar adalah : ', c);
  end;

  writeln('==============================================');
  readln;
end.
