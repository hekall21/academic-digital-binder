program hitung_indeks_massa_tubuh_bmi;
uses crt;

var
  bmi, berat, tinggi : real;
  kategori           : string;

begin

  write('Input berat badan anda (kg) : ');
  readln(berat);
  write('Input tinggi badan anda (m)  : ');
  readln(tinggi);

  bmi := berat / (tinggi * tinggi);

  if (bmi > 30.0) then
    kategori := 'Berat Badan Obesitas'
  else if (bmi > 23.0) then
    kategori := 'Berat Badan Berlebih'
  else if (bmi > 18.5) then
    kategori := 'Berat Badan Normal'
  else
    kategori := 'Berat Badan Kurang';


  writeln('Nilai BMI anda adalah      : ', bmi:0:2);
  writeln('Kategori berat badan anda  : ', kategori);


  readln;
end.
