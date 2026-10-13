program Matriks_Array_2D_Pertemuan15;
uses crt;

const
  JML_MHS = 3;
  JML_MATKUL = 3;

type
  MatriksNilai = array[1..JML_MHS, 1..JML_MATKUL] of integer;

var
  nilai     : MatriksNilai;
  mhs, mk   : integer;
  total_mhs : integer;
  rerata    : real;

begin
  clrscr;
  writeln('==============================================');
  writeln('   MATRIKS NILAI MAHASISWA (ARRAY 2 DIMENSI)  ');
  writeln('==============================================');
  writeln;

  { Input data matriks }
  for mhs := 1 to JML_MHS do
  begin
    writeln('--- Mahasiswa Ke-', mhs, ' ---');
    for mk := 1 to JML_MATKUL do
    begin
      write('  Nilai Mata Kuliah ', mk, ' : ');
      readln(nilai[mhs, mk]);
    end;
    writeln;
  end;

  { Menampilkan tabel matriks dan rata-rata per mahasiswa }
  writeln('==============================================');
  writeln('TABEL REKAPITULASI NILAI:');
  writeln('Mhs | MK 1 | MK 2 | MK 3 | Rata-rata');
  writeln('------------------------------------');

  for mhs := 1 to JML_MHS do
  begin
    total_mhs := 0;
    write(' ', mhs, '  | ');
    for mk := 1 to JML_MATKUL do
    begin
      write(nilai[mhs, mk]:4, ' | ');
      total_mhs := total_mhs + nilai[mhs, mk];
    end;
    rerata := total_mhs / JML_MATKUL;
    writeln(rerata:6:2);
  end;

  writeln('==============================================');
  readln;
end.
