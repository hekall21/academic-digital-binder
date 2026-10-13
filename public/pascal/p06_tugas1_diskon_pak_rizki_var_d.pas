program Diskon_Belanja_Pak_Rizki_Var_D;
uses crt;

var
  tb, jb, d : real;

begin
  clrscr;
  write('masukkan jumlah belanja : ');
  readln(jb);

  if (jb > 500000) then
  begin
    d := 0.15 * jb;
  end
  else if (jb >= 300000) and (jb <= 500000) then
  begin
    d := 0.1 * jb;
  end
  else
  begin
    d := 0;
  end;

  tb := jb - d;

  writeln('-----------------------------------');
  writeln('diskon (d)          : ', d:0:2);
  writeln('jumlah total bayar  : ', tb:0:2);
  readln;
end.
