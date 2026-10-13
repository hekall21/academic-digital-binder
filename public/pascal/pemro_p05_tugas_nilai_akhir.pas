program hitung_nilai_akhir_mahasiswa;
uses crt;

var
  tugas, uts, uas : real;
  nilai_akhir     : real;
  nilai_huruf     : char;
  status          : string;

begin
  clrscr;
  writeln('==============================================');
  writeln('       PROGRAM EVALUASI NILAI AKHIR           ');
  writeln('         (Latihan Slide 7 Pemrograman P5)      ');
  writeln('==============================================');

  write('Input nilai Tugas : '); readln(tugas);
  write('Input nilai UTS   : '); readln(uts);
  write('Input nilai UAS   : '); readln(uas);

  { Rumus: Nilai akhir = (20% * tugas) + (30% * UTS) + (50% * UAS) }
  nilai_akhir := (0.20 * tugas) + (0.30 * uts) + (0.50 * uas);

  { Penentuan Nilai Huruf Berdasarkan Tabel Slide:
    91 - 100 : A
    76 - 90  : B
    61 - 75  : C
    41 - 60  : D
    0  - 40  : E }
  if (nilai_akhir >= 91.0) then
    nilai_huruf := 'A'
  else if (nilai_akhir >= 76.0) then
    nilai_huruf := 'B'
  else if (nilai_akhir >= 61.0) then
    nilai_huruf := 'C'
  else if (nilai_akhir >= 41.0) then
    nilai_huruf := 'D'
  else
    nilai_huruf := 'E';

  { Penentuan Status Kelulusan: >= 70 Lulus, < 70 Tidak Lulus }
  if (nilai_akhir >= 70.0) then
    status := 'Selamat anda dinyatakan lulus'
  else
    status := 'Anda dinyatakan tidak lulus';

  writeln('----------------------------------------------');
  writeln('Nilai Akhir : ', nilai_akhir:0:0);
  writeln('Nilai Huruf : ', nilai_huruf);
  writeln(status);
  writeln('==============================================');

  readln;
end.
