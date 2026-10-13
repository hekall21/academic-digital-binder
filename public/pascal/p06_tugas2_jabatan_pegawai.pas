program Menentukan_Jabatan;
uses crt;
var
  id_jabatan   : string;
  nama_jabatan : string;
begin
  clrscr;
  writeln('==============================================');
  writeln('        PROGRAM PENENTUAN JABATAN             ');
  writeln('==============================================');
  write('Masukkan ID Jabatan (contoh: JF001) : ');
  readln(id_jabatan);

  { Normalisasi string ke uppercase }
  id_jabatan := upcase(id_jabatan);

  if (id_jabatan = 'JF001') then
    nama_jabatan := 'Manager'
  else if (id_jabatan = 'JF002') then
    nama_jabatan := 'Programmer'
  else if (id_jabatan = 'JF003') then
    nama_jabatan := 'Finance'
  else if (id_jabatan = 'JF004') then
    nama_jabatan := 'Staff'
  else
    nama_jabatan := 'ID Jabatan Tidak Valid / Tidak Ditemukan';

  writeln('----------------------------------------------');
  writeln('ID Jabatan   : ', id_jabatan);
  writeln('Nama Jabatan : ', nama_jabatan);
  writeln('==============================================');
  readln;
end.
