program Simulasi_Pantulan_Bola_Pertemuan11;
uses crt;

var
  tinggi_awal : real;
  tinggi      : real;
  pantulan    : integer;
  ulang       : char;

begin
  repeat
    clrscr;
    writeln('==============================================');
    writeln('     SIMULASI FISIKA PANTULAN BOLA            ');
    writeln('==============================================');
    writeln;

    write('Input ketinggian awal bola (cm): ');
    readln(tinggi_awal);

    tinggi   := tinggi_awal;
    pantulan := 0;

    writeln;
    writeln('Proses Pantulan:');
    writeln('----------------------------------------------');

    { Bola terus memantul jika tinggi > 20 cm }
    while (tinggi > 20.0) do
    begin
      tinggi := tinggi / 2.0; { Berkurang setengah tiap pantulan }
      pantulan := pantulan + 1;
      writeln('Pantulan ke-', pantulan, ' -> Ketinggian: ', tinggi:0:2, ' cm');
    end;

    writeln('----------------------------------------------');
    writeln('Bola berhenti memantul karena ketinggian <= 20 cm.');
    writeln('Total jumlah pantulan: ', pantulan, ' kali');
    writeln;

    write('Apakah ingin mencoba ketinggian lain? (y/t): ');
    readln(ulang);
  until (ulang = 't') or (ulang = 'T');

  writeln('Program selesai. Terima kasih!');
end.
