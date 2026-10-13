program hitung_gaji_karyawan_mobile_friendly;
uses crt;

var
  golongan   : string;
  pendidikan : string;
  gaji_pokok : longint;
  tunjangan  : longint;
  total_gaji : longint;
  valid      : boolean;

begin
  clrscr;

  { Pakai writeln agar di HP teks input tidak saling menumpuk/dempet }
  writeln('Input Golongan Karyawan (A/B):');
  readln(golongan);

  writeln('Input Pendidikan Karyawan (SMA/S1):');
  readln(pendidikan);

  { Otomatis ubah jadi huruf kapital }
  golongan := upcase(golongan);
  pendidikan := upcase(pendidikan);

  gaji_pokok := 0;
  tunjangan  := 0;
  valid      := true;

  { Antisipasi jika keyboard HP otomatis menambahkan spasi di akhir kata }
  if (golongan = 'A') or (golongan = 'A ') then
  begin
    if (pendidikan = 'SMA') or (pendidikan = 'SMA ') then
    begin
      gaji_pokok := 3000000;
      tunjangan  := 2000000;
    end
    else if (pendidikan = 'S1') or (pendidikan = 'S1 ') then
    begin
      gaji_pokok := 4000000;
      tunjangan  := 3000000;
    end
    else
      valid := false;
  end
  else if (golongan = 'B') or (golongan = 'B ') then
  begin
    if (pendidikan = 'SMA') or (pendidikan = 'SMA ') then
    begin
      gaji_pokok := 4000000;
      tunjangan  := 3000000;
    end
    else if (pendidikan = 'S1') or (pendidikan = 'S1 ') then
    begin
      gaji_pokok := 6000000;
      tunjangan  := 5000000;
    end
    else
      valid := false;
  end
  else
    valid := false;

  writeln('----------------------------------------------');
  if (valid) then
  begin
    total_gaji := gaji_pokok + tunjangan;
    writeln('Gaji Pokok               : Rp ', gaji_pokok);
    writeln('Tunjangan                : Rp ', tunjangan);
    writeln('Gaji yang didapat adalah : Rp ', total_gaji);
  end
  else
  begin
    writeln('Error: Golongan atau Pendidikan tidak sesuai tabel!');
  end;

  readln;
end.
