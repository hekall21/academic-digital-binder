program Diskon_Belanja_Gaya_Dosen;
uses crt;

{ Deklarasi variabel sesuai format singkatan dosen di kelas:
  tb = Total Belanja
  jb = Jumlah Belanja
  diskon = Potongan Diskon (di deklarasi dosen menulis d/diskon) }
var
  tb, jb, diskon : real;

begin
  clrscr;
  writeln('==============================================');
  writeln('       PROGRAM PERHITUNGAN DISKON BELANJA     ');
  writeln('          (Format Standar Dosen di Kelas)     ');
  writeln('==============================================');
  write('Masukkan jumlah belanja (jb) : Rp ');
  readln(jb);

  { Evaluasi kondisi percabangan sesuai gaya dosen:
    1. Belanja > 500000 -> diskon 15% (0.15 * jb)
    2. Belanja 300000 s.d 500000 -> diskon 10% (0.1 * jb)
    3. Belanja < 300000 -> tidak ada diskon (0) }
  if (jb > 500000) then
  begin
    diskon := 0.15 * jb;
  end
  else if (jb >= 300000) and (jb <= 500000) then
  begin
    diskon := 0.1 * jb;
  end
  else
  begin
    diskon := 0;
  end;

  { Rumus: Total Belanja = jumlah belanja - discount }
  tb := jb - diskon;

  writeln('----------------------------------------------');
  writeln('Diskon (d)        : Rp ', diskon:0:2);
  writeln('Total Belanja(tb) : Rp ', tb:0:2);
  writeln('==============================================');

  readln;
end.
