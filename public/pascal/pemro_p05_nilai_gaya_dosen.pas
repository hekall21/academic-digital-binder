program nilai;
uses crt;

var
  tgs, uts, uas, na : real;
  huruf             : string;

begin
  clrscr;

  write('nilai tugas   : '); readln(tgs);
  write('nilai uts     : '); readln(uts);
  write('nilai uas     : '); readln(uas);

  na := (0.2 * tgs) + (0.3 * uts) + (0.5 * uas);

  writeln('nilai akhir   : ', na:0:0);

  { Percabangan bertingkat (if-else berantai ala dosen) }
  if na <= 40 then
    huruf := 'E'
  else if na <= 60 then
    huruf := 'D'
  else if na <= 75 then
    huruf := 'C'
  else if na <= 90 then
    huruf := 'B'
  else
    huruf := 'A';

  writeln('nilai huruf   : ', huruf);

  if na >= 70 then
    writeln('selamat anda dinyatakan lulus')
  else
    writeln('anda tidak dinyatakan lulus');

  readln;
end.
