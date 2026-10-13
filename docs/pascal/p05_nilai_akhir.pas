program Hitung_Nilai_Akhir_Pertemuan5;
uses crt;

var
  nilai_tugas : real;
  nilai_uts   : real;
  nilai_uas   : real;
  nilai_akhir : real;
  grade       : char;
  status      : string;

begin
  clrscr;

  write('Input Nilai Tugas : '); readln(nilai_tugas);
  write('Input Nilai UTS   : '); readln(nilai_uts);
  write('Input Nilai UAS   : '); readln(nilai_uas);

  nilai_akhir := (0.20 * nilai_tugas) + (0.30 * nilai_uts) + (0.50 * nilai_uas);

  if (nilai_akhir >= 70.0) then
    status := 'LULUS'
  else
    status := 'TIDAK LULUS';


  if (nilai_akhir >= 85.0) then
    grade := 'A'
  else if (nilai_akhir >= 75.0) then
    grade := 'B'
  else if (nilai_akhir >= 60.0) then
    grade := 'C'
  else if (nilai_akhir >= 45.0) then
    grade := 'D'
  else
    grade := 'E';

  writeln;;
  writeln('Nilai Akhir    : ', nilai_akhir:0:2);
  writeln('Grade Huruf    : ', grade);
  writeln('Status         : ', status);

  readln;
end.
