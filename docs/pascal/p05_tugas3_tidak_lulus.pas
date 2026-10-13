program Cek_Kelulusan;
uses crt;
var
  nilai_ujian : real;
begin
  clrscr;
  write('Masukkan nilai ujian : ');
  readln(nilai_ujian);
  if (nilai_ujian < 60) then
  begin
    writeln('Status : Tidak Lulus');
  end;
  readln;
end.
