program Pola_Nested_Loop_Pertemuan14;
uses crt;

var
  i, j, n : integer;

begin
  clrscr;
  writeln('==============================================');
  writeln('         POLA BINTANG & ANGKA NESTED LOOP     ');
  writeln('==============================================');
  writeln;

  n := 5;

  { 1. Latihan 1: Pola Segitiga Bintang }
  writeln('--- Pola 1: Segitiga Bintang ---');
  for i := 1 to n do
  begin
    for j := 1 to i do
    begin
      write('* ');
    end;
    writeln;
  end;
  writeln;

  { 2. Latihan 2: Pola Angka 5..1 Maju }
  writeln('--- Pola 2: Angka Deret Maju ---');
  for i := 5 downto 1 do
  begin
    for j := 5 downto i do
    begin
      write(j, ' ');
    end;
    writeln;
  end;
  writeln;

  { 3. Latihan 3: Pola Piramida Terbalik Angka }
  writeln('--- Pola 3: Piramida Terbalik ---');
  for i := 5 downto 1 do
  begin
    for j := i downto 1 do
    begin
      write(j, ' ');
    end;
    writeln;
  end;
  writeln('==============================================');

  readln;
end.
