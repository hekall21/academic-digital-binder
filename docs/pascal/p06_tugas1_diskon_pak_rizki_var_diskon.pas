program Diskon_Belanja_Pak_Rizki_Var_Diskon;
uses crt;

var
  tb, jb, diskon : real;

begin
  clrscr;
  write('masukkan jumlah belanja : ');
  readln(jb);

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

  tb := jb - diskon;

  writeln('-----------------------------------');
  writeln('diskon              : ', diskon:0:2);
  writeln('jumlah total bayar  : ', tb:0:2);
  readln;
end.
