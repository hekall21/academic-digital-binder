program Cek_Tahun_Kabisat;
uses crt;
var
  tahun : integer;
  is_kabisat : boolean;
begin
  clrscr;
  write('Masukkan tahun : ');
  readln(tahun);
  if ((tahun mod 400 = 0) or ((tahun mod 4 = 0) and (tahun mod 100 <> 0))) then
    is_kabisat := true
  else
    is_kabisat := false;

  if (is_kabisat) then
    writeln(tahun, ' adalah Tahun Kabisat')
  else
    writeln(tahun, ' BUKAN Tahun Kabisat');
  readln;
end.
