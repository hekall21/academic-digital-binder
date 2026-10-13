program hitung_gaji_karyawan_nested_if;
uses crt;

var
  golongan   : char;
  pendidikan : string;
  gaji_pokok : longint;
  tunjangan  : longint;
  total_gaji : longint;
  valid      : boolean;

begin
  clrscr;

  write('Input Golongan Karyawan (A/B)     : ');
  readln(golongan);
  write('Input Pendidikan Karyawan (SMA/S1): ');
  readln(pendidikan);

  golongan := upcase(golongan);
  pendidikan := upcase(pendidikan);

  gaji_pokok := 0;
  tunjangan  := 0;
  valid      := true;


  if (golongan = 'A') then
  begin
    if (pendidikan = 'SMA') then
    begin
      gaji_pokok := 3000000;
      tunjangan  := 2000000;
    end
    else if (pendidikan = 'S1') then
    begin
      gaji_pokok := 4000000;
      tunjangan  := 3000000;
    end
    else
    begin
      valid := false;
    end;
  end
  else if (golongan = 'B') then
  begin
    if (pendidikan = 'SMA') then
    begin
      gaji_pokok := 4000000;
      tunjangan  := 3000000;
    end
    else if (pendidikan = 'S1') then
    begin
      gaji_pokok := 6000000;
      tunjangan  := 5000000;
    end
    else
    begin
      valid := false;
    end;
  end
  else
  begin
    valid := false;
  end;

  if (valid) then
  begin
    total_gaji := gaji_pokok + tunjangan;
    writeln('Gaji Pokok               : Rp ', gaji_pokok);
    writeln('Tunjangan                : Rp ', tunjangan);
    writeln('Gaji yang didapat adalah : ', total_gaji);
  end
  else
  begin
    writeln('Error: Golongan atau Pendidikan tidak sesuai tabel!');
  end;


  readln;
end.
