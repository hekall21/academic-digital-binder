# 🎓 BUKU CATATAN BINDER UTS: KOMPENDIUM LENGKAP 8 MATA KULIAH (PERTEMUAN 1 – 4)

> **Institusi:** Universitas Indraprasta PGRI (UNINDRA)  
> **Fakultas / Program Studi:** Teknik & Ilmu Komputer (FTIK) / Sistem Informasi  
> **Kelas / Semester:** R1G / Semester 1 (Reguler RG)  
> **Status:** Kompendium Lengkap & Terpadu Persiapan Ujian Tengah Semester (UTS)  
> **Acuan Kurikulum & Berkas:** Master RPS, Modul Praktikum PDF, Slide Dosen di `Tugas_Kuliah/`, dan Rekaman Perkuliahan.  
> **Standar Notasi:** Unicode Math Presisi Tinggi (Bebas dari kode LaTeX mentah / broken escape), Siap Salin ke Lembar Catatan Binder Fisik.

---

## 📌 DAFTAR ISI MATA KULIAH
1. [🌐 Konsep Sistem Informasi (Senin 07:30)](#1-konsep-sistem-informasi-ksi)
2. [🔤 Bahasa Indonesia (Senin 10:00)](#2-bahasa-indonesia-mkwk107)
3. [⚡ Algoritma 1 (Selasa 07:30)](#3-algoritma-1)
4. [💻 Pemrograman 1 - Pascal (Selasa 09:10)](#4-pemrograman-1-pascal)
5. [🇬🇧 Bahasa Inggris 1 (Kamis 07:30)](#5-bahasa-inggris-1)
6. [📐 Matematika Dasar (Kamis 09:10)](#6-matematika-dasar-kalkulus-sistem-informasi)
7. [🇮🇩 Pendidikan Pancasila (Jumat 07:30)](#7-pendidikan-pancasila-mk02--berbasis-rps--tugas-presentasi-kelompok)
8. [🕌 Pendidikan Agama Islam (Jumat 09:10)](#8-pendidikan-agama-islam-pai)

---
## 1. Konsep Sistem Informasi (KSI)
* **Dosen Pengampu:** Pak Dheni, M.Kom.
* **Jadwal & Ruang:** Senin • 07:30 - 10:00 WIB • Ruang R.4.4-4
* **Berkas Rujukan:** `1789306851_SISTEM_INFORMASI_1.pdf` & `1789306879_SISTEM_INFORMASI_2.pdf`

---

### Pertemuan 1: Konsep Dasar Data, Karakteristik Sistem & Transformasi Pengetahuan
- [ ] *Sudah disalin ke lembar binder fisik*

#### 1. Definisi Data Menurut Konsep Klasik Komputasi
Data adalah kenyataan yang menggambarkan kejadian-kejadian nyata (*raw facts*), berupa representasi simbol, angka, huruf, gambar, atau suara yang berdiri sendiri tanpa makna intrinsik sebelum diolah.
* **Sifat Dasar Data:** Bersifat atomik, mentah (*unprocessed*), statis, dan belum memiliki nilai langsung untuk pengambilan keputusan.
* **Contoh Data Mentah:** Angka `45`, teks `"2026-09-30"`, kode barang `"KSR-01"`.

#### 2. Tiga Sumbu Klasifikasi Data (Slide 6 - 1789306851):
| Sumbu Klasifikasi | Kategori Data | Penjelasan Konseptual | Contoh Kasus Nyata |
| :--- | :--- | :--- | :--- |
| **Berdasarkan Jenis / Cara Perolehan** | **Data Hitung (Discrete)** | Diperoleh dari hasil mencacah / membilang unit bilangan bulat. | Jumlah mahasiswa kelas R1G (45 orang), jumlah printer (3 unit). |
| | **Data Ukur (Continuous)** | Diperoleh dari pengukuran alat ukur berskala kontinu/desimal. | Berat paket (4,75 kg), suhu server room (21,5°C), jarak kabel (12,8 meter). |
| **Berdasarkan Sifat Mutu** | **Data Kualitatif** | Menggambarkan mutu, kualitas, atau kategori non-numerik. | Kualitas layanan ("Sangat Memuaskan"), warna casing ("Hitam Doff"). |
| | **Data Kuantitatif** | Dinyatakan dalam angka pasti yang dapat dihitung secara matematis. | Total pendapatan kasir (Rp 4.500.000), stok barang (150 pcs). |
| **Berdasarkan Sumber Asal** | **Data Internal** | Bersumber dari dalam lingkungan organisasi itu sendiri. | Data absensi karyawan, catatan persediaan gudang internal. |
| | **Data Eksternal** | Bersumber dari luar lingkungan organisasi. | Data inflasi dari BPS, kurs valuta asing Bank Indonesia, harga kompetitor. |

#### 3. Definisi Informasi Menurut Gordon B. Davis
Dalam buku legendaris *Management Information Systems*, Gordon B. Davis merumuskan definisi standar:
> *"Informasi adalah data yang telah diproses ke dalam suatu bentuk yang mempunyai arti bagi si penerima (meaningful) dan mempunyai nilai nyata serta terasa bagi keputusan saat itu atau keputusan mendatang."*

Tiga kata kunci Gordon B. Davis:
1. **Telah Diproses (*Processed*):** Melalui seleksi, pengurutan, agregasi, atau perhitungan rumus.
2. **Mempunyai Arti (*Meaningful*):** Memiliki konteks relevan bagi penerimanya.
3. **Mengurangi Ketidakpastian (*Reducing Uncertainty*):** Membantu pimpinan mengambil keputusan dengan risiko lebih kecil.

#### 4. Hierarki DIKW (Data ➔ Information ➔ Knowledge ➔ Wisdom)
* **Data (Fakta Mentah):** Angka penjualan harian tanpa ringkasan (`Rp 150.000`, `Rp 200.000`).
* **Information (Data Berkonteks):** Rekapitulasi penjualan mingguan cabang Pasar Rebo mencapai Rp 15.000.000.
* **Knowledge (Pola & Wawasan):** Mengetahui bahwa setiap akhir pekan penjualan melonjak karena banyak pembeli keluarga.
* **Wisdom (Kebijaksanaan & Strategi):** Menambah shift kasir dan stok produk terlaris setiap hari Jumat sore untuk memaksimalkan omset.

---

### Pertemuan 2: Konsep Dasar Informasi, Nilai Informasi & Siklus Pengolahan Data
- [ ] *Sudah disalin ke lembar binder fisik*

#### 1. Transformasi Data Menjadi Informasi (Slide 3 - 1789306879)
Sistem pengolahan informasi bertugas mengolah data dari **bentuk tidak berguna** menjadi **bentuk yang berguna** bagi penerimanya.
* **Contoh Kasus Salesman:** Faktur-faktur penjualan individu dari puluhan salesman merupakan data mentah. Setelah diolah oleh sistem, dihasilkan *Laporan Kinerja Penjualan Bulanan* dan *Laporan Komisi Salesman* yang siap digunakan direktur untuk evaluasi bonus.

#### 2. Siklus Informasi (Information Processing Cycle)
```text
[ DATA INPUT ] ────> [ MODEL PROSES / LOGIKA ] ────> [ INFORMASI OUTPUT ]
      ▲                                                      │
      │                                                      ▼
[ HASIL TINDAKAN ] <─── [ KEPUTUSAN & TINDAKAN ] <─── [ PENERIMA KEPUTUSAN ]
```
Siklus ini bersifat melingkar tanpa henti: keputusan yang dieksekusi menghasilkan realitas baru yang dicatat kembali sebagai data baru.

#### 3. Nilai Informasi (Value of Information)
Nilai informasi ditentukan oleh pengaruhnya terhadap perbaikan kualitas keputusan.
* **Rumus Nilai Bersih Informasi:**
  `Nilai Bersih Informasi = (Manfaat Keputusan DENGAN Informasi - Manfaat Keputusan TANPA Informasi) - Biaya Memperoleh Informasi`
* Informasi dikatakan bernilai ekonomis apabila manfaat tambahan yang didapat melampaui seluruh biaya yang dikeluarkan untuk mengumpulkan dan memproses data tersebut.

---

### Pertemuan 3: Sumber, Kualitas Informasi & Arsitektur 6 Blok Pembangun SI
- [ ] *Sudah disalin ke lembar binder fisik*

#### 1. Empat Pilar Kualitas Informasi
1. **Akurat (Accurate):** Bebas dari kesalahan, tidak menyesatkan, dan mencerminkan maksud sebenarnya.
2. **Tepat Waktu (Timeliness):** Tiba sebelum keputusan diambil (informasi yang basi tidak memiliki nilai guna).
3. **Relevan (Relevance):** Sesuai dengan kebutuhan spesifik pihak pemakai (kebutuhan kasir berbeda dengan kebutuhan direktur).
4. **Ekonomis (Economical):** Biaya produksi informasi tidak boleh melebihi nilai manfaatnya.

#### 2. 6 Blok Pembangun Sistem Informasi (John Burch Framework)
| Blok Pembangun | Peran & Fungsi | Komponen Nyata |
| :--- | :--- | :--- |
| **1. Blok Masukan (Input)** | Menangkap data mentah dari transaksi | Barcode scanner, formulir web, keyboard, file excel |
| **2. Blok Model (Model)** | Logika matematika dan aturan bisnis | Rumus diskon, formula laba, algoritma pengurutan |
| **3. Blok Keluaran (Output)** | Menyajikan informasi berkualitas | Struk kasir, dashboard analitik grafik, laporan PDF |
| **4. Blok Teknologi (Technology)** | Mesin penggerak perangkat keras & lunak | Server, PC kasir, sistem operasi Linux/Windows, router Wi-Fi |
| **5. Blok Basis Data (Database)** | Menyimpan data secara aman dan terstruktur | PostgreSQL, MySQL, tabel relasional, media storage SSD |
| **6. Blok Kendali (Control)** | Melindungi sistem dari kerusakan & serangan | Password bcrypt, otentikasi peran (RBAC), backup berkala |

---

### Pertemuan 4: Tingkat Manajemen & Karakteristik Pengambilan Keputusan
- [ ] *Sudah disalin ke lembar binder fisik*

#### 1. Piramida Tiga Tingkat Manajemen (Robert N. Anthony)
1. **Top Management (Manajemen Puncak):**
   * *Aktor:* Direktur Utama, CEO, Rektor.
   * *Fokus:* Perencanaan strategis jangka panjang (3–5 tahun).
   * *Karakteristik Informasi:* Ringkasan global, tren eksternal, berorientasi masa depan.
2. **Middle Management (Manajemen Madya):**
   * *Aktor:* Kepala Cabang, Manajer Pemasaran, Dekan.
   * *Fokus:* Pengendalian manajemen taktis (bulanan s.d tahunan).
   * *Karakteristik Informasi:* Laporan perbandingan realisasi vs anggaran biaya, tren divisi.
3. **Lower Management (Manajemen Lini Pertama):**
   * *Aktor:* Supervisor shift kasir, kepala regu operasional.
   * *Fokus:* Pengendalian operasional teknis harian.
   * *Karakteristik Informasi:* Terperinci, detail, bersumber internal, real-time transaksi harian.

#### 2. Taksonomi Tipe Pengambilan Keputusan (Herbert A. Simon)
* **Keputusan Terstruktur (Structured):** Berulang, rutin, memiliki SOP baku, dapat diotomatisasi 100% oleh software (contoh: kalkulasi denda keterlambatan buku, diskon member).
* **Keputusan Semi-Terstruktur (Semi-Structured):** Memerlukan kombinasi kalkulasi sistem dan intuisi manajer (contoh: persetujuan limit kredit pelanggan, penentuan alokasi anggaran promo).
* **Keputusan Tidak Terstruktur (Unstructured):** Kompleks, tidak berpola, sarat ketidakpastian, mengandalkan visi kepemimpinan manusia (contoh: membuka cabang baru di luar negeri, pergantian model bisnis).

---
## 2. Bahasa Indonesia (MKWK107)
* **Dosen Pengampu:** Tim Dosen MKWK Bahasa Indonesia Universitas Indraprasta PGRI
* **Jadwal & Ruang:** Senin • 10:00 - 11:40 WIB • Ruang R.4.4-4
* **Berkas Rujukan Asli:** Slide PDF Pertemuan 1–4 di `Tugas_Kuliah/03_Bahasa_Indonesia/Materi_dan_Rangkuman/`

---

### Pertemuan 1: Hakikat, Kedudukan & Fungsi Bahasa Indonesia
- [ ] *Sudah disalin ke lembar binder fisik*

#### 1. Hakikat Bahasa Menurut Pakar Linguistik (Slide PDF 1789103790)
* **Harimurti Kridalaksana:** *"Bahasa adalah sistem lambang bunyi yang arbitrer yang digunakan oleh para anggota kelompok sosial untuk bekerja sama, berkomunikasi, dan mengidentifikasikan diri."*
* **Jos Daniel Parera:** Bahasa sebagai alat komunikasi berperan utama memudahkan interaksi antarmanusia.
* **KBBI:** Bahasa diartikan sebagai sistem lambang bunyi yang arbitrer yang disepakati untuk berinteraksi.

#### 2. Dua Belas Ciri Hakiki Bahasa:
1. **Bersistem:** Memiliki pola keteraturan terstruktur (S-P-O-K). Kalimat bermakna harus mematuhi kaidah sistematis.
2. **Lambang:** Berwujud satuan simbol bunyi yang mewakili benda, konsep, atau perbuatan nyata.
3. **Bunyi:** Berupa getaran udara yang dihasilkan oleh alat ucap manusia (*organs of speech*).
4. **Bermakna:** Memiliki konsep rujukan semantik yang dapat dipahami lawan bicara.
5. **Arbitrer (Manasuka):** Tidak ada hubungan wajib alami antara lambang bunyi dengan wujud bendanya (mengapa disebut "kuda", bukan "kursi").
6. **Konvensional:** Berdasarkan kesepakatan mufakat antarpengguna bahasa dalam masyarakat tutur.
7. **Produktif:** Dari 26 huruf alfabet dapat dibentuk kata dan kalimat dalam jumlah tak terhingga.
8. **Unik:** Memiliki ciri struktur spesifik (misal: bahasa Indonesia tidak mengenal konjugasi waktu/tenses seperti bahasa Inggris).
9. **Universal:** Semua bahasa memiliki unsur universal dasar (memiliki vokal dan konsonan, memiliki pola kalimat).
10. **Dinamis:** Terus tumbuh dan berkembang menyerap kosakata baru seiring kemajuan ilmu pengetahuan dan teknologi.
11. **Bervariasi:** Memiliki aneka ragam dialek geografis, kronolek waktu, dan sosiolek jabatan.
12. **Manusiawi:** Hanya dimiliki dan digunakan secara sempurna oleh manusia.

#### 3. Dualisme Kedudukan Bahasa Indonesia:
| Aspek Pembeda | Bahasa Nasional | Bahasa Negara |
| :--- | :--- | :--- |
| **Landasan Yuridis** | **Ikrar Sumpah Pemuda 28 Oktober 1928** (Butir 3) | **UUD 1945 Bab XV Pasal 36** (18 Agustus 1945) |
| **Fungsi 1** | Lambang kebanggaan kebangsaan | Bahasa resmi kenegaraan dalam administrasi publik |
| **Fungsi 2** | Lambang identitas nasional di forum dunia | Bahasa pengantar resmi di institusi pendidikan |
| **Fungsi 3** | Alat perhubungan antardaerah dan antarsuku | Alat perhubungan tingkat nasional (perencanaan & pembangunan) |
| **Fungsi 4** | Alat pemersatu aneka ragam suku bangsa | Media pengembangan ilmu pengetahuan, teknologi & kebudayaan |

*Catatan Sejarah Rumpun:* Bahasa Indonesia berakar dari rumpun **Austronesia**, tepatnya dialek **Melayu Riau Tinggi** yang menjadi *Lingua Franca* perdagangan Nusantara dan dibuktikan secara epigrafi pada Prasasti Kedukan Bukit (683 M) serta Talang Tuwo (684 M) Sriwijaya.

---

### Pertemuan 2: Menumbuhkan Sikap Positif Terhadap Bahasa Indonesia
- [ ] *Sudah disalin ke lembar binder fisik*

#### 1. Urgensi Sikap Positif dalam Keberhasilan (Slide PDF 1789341355)
Mengutip temuan riset Harvard University & pakar Urban: **85% kesuksesan seseorang ditentukan oleh sikapnya (attitude)**, sedangkan hanya 15% ditentukan oleh kecerdasan teknis semata. Titik awal kesuksesan mahasiswa diawali oleh sikap positif terhadap bahasa persatuannya.

#### 2. Tiga Pilar Sikap Positif Bahasa (E. Zaenal Arifin, 2009):
1. **Kesetiaan Berbahasa (*Language Loyalty*):** Keinginan batin untuk mempertahankan kemandirian bahasa Indonesia, mencegah campur aduk istilah asing secara latah tanpa alasan ilmiah.
2. **Kebanggaan Berbahasa (*Language Pride*):** Rasa bangga mengutamakan bahasa Indonesia sebagai lambang jati diri dan kedaulatan bangsa.
3. **Kesadaran akan Kaidah Bahasa (*Awareness of Norms*):** Kesadaran sukarela untuk selalu menggunakan kaidah ejaan baku (EYD V) dan tata bahasa yang benar dalam situasi resmi.

#### 3. Tiga Komponen Sikap (Lambert & Chaer):
* **Komponen Kognisi (Pengetahuan):** Pemahaman akan aturan ejaan, pilihan kata, dan struktur tata bahasa.
* **Komponen Afeksi (Emosi/Perasaan):** Rasa cinta, bangga, dan menghargai nilai luhur bahasa Indonesia.
* **Komponen Konasi (Perilaku Nyata):** Tindakan konkret menulis dan berbicara secara santun, tertib kaidah, dan tidak menyalahi aturan tata tulis.

#### 4. Kaidah Emas: Berbahasa yang BAIK dan BENAR
* **Bahasa yang Baik:** Sesuai konteks situasi komunikasi (santai dengan kawan sebaya, formal saat presentasi kelas).
* **Bahasa yang Benar:** Tunduk patuh pada kaidah tata bahasa, ejaan resmi EYD V, dan kamus resmi KBBI.

---

### Pertemuan 3: EYD Edisi V (Pemakaian Huruf, Tanda Baca & Penulisan Kata)
- [ ] *Sudah disalin ke lembar binder fisik*
* **Acuan Resmi:** *Keputusan Kepala Badan Pengembangan dan Pembinaan Bahasa No. 0424/I/BS.00.01/2022* (Slide Modul 99 Halaman).

#### 1. Pemakaian Huruf dalam EYD Edisi V
* **26 Huruf Alfabet:** Terdiri dari 5 huruf vokal (A, E, I, O, U) dan 21 konsonan.
* **Diakritik Huruf E Pepet [ə] vs E Taling [e]:**
  Untuk menghindari salah tafsir makna, tanda diakritik (ê) dapat dicantumkan pada e pepet:
  * `teras` (lantai pelataran rumah) vs `têras` (pejabat utama bank/pemerintahan).
  * `seri` (berurutan) vs `sêri` (imbang tanpa pemenang).
  * `seret` (menarik paksa benda berat) vs `sêrêt` (tersendat di kerongkongan).
* **Huruf Konsonan Khusus Q dan X:** Khusus untuk nama diri atau istilah ilmiah. Huruf `x` di awal kata dilafalkan [s] (contoh: *xenon* dibaca *senon*), di tengah/akhir dilafalkan [ks] (contoh: *kompleks*).
* **1 Monoftong Baru:** Gabungan vokal `eu` yang dilafalkan [ɘ] khas serapan bahasa daerah (contoh: *eurih*, *seudati*, *sadeu*).
* **4 Diftong Resmi:** Gabungan vokal `ai`, `au`, `ei`, `oi` (contoh: *aikido*, *kailan*, *pandai*, *taufik*, *survei*, *amboi*).

#### 2. Kaidah Kritis Huruf Kapital, Miring, dan Tebal
* **Kapital Nama Geografi:**
  * Wajib kapital jika diikuti nama diri geografis: *Gunung Rinjani*, *Danau Toba*, *Selat Sunda*, *Jalan Margonda*.
  * Tulis huruf kecil jika bukan nama diri: *berlayar ke selat*, *mendaki gunung*.
  * **Jebakan Ujian:** Nama diri geografi yang menjadi nama jenis makanan/benda ditulis huruf kecil: *jeruk bali*, *kunci inggris*, *petai cina*, *pisang ambon*, *gula jawa*.
  * Tetapi corak khas budaya daerah tetap kapital: *batik Pekalongan*, *tarian Bali*, *soto Madura*.
* **Huruf Miring (Italics):** Judul buku/majalah yang dikutip (*Buku Algoritma Pemrograman*), kata asing/daerah yang belum diserap (*metode waterfall*, *online*).

#### 3. Penulisan Kata Depan (Preposisi) vs Awalan (Prefiks)
| Kategori | Posisi & Bentuk | Aturan Baku EYD | Contoh Benar | Jebakan Salah (UTS) |
| :--- | :--- | :--- | :--- | :--- |
| **Kata Depan (`di`, `ke`, `dari`)** | Menunjukkan arah/tempat | **DIPISAH** dengan spasi | `di kampus`, `ke Jakarta`, `dari Depok` | ❌ *dikampus*, *keatas* |
| **Awalan (`di-`, `ke-`)** | Membentuk kata kerja/benda | **DISERANGKAIKAN** (menyatu) | `ditulis`, `dikerjakan`, `ketua`, `kehendak` | ❌ *di tulis*, *di kerjakan* |

#### 4. Kaidah Tanda Baca Penting
* **Tanda Koma (`,`):** Wajib dipakai sebelum konjungsi perincian terakhir (*buku, pena, dan penggaris*), serta setelah konjungsi antarkalimat (*Oleh karena itu, ...*, *Namun, ...*).
* **Tanda Titik Dua (`:`):** Dipakai di akhir pernyataan lengkap yang diikuti rincian. Jika perincian itu kelanjutan langsung kalimat, tanda titik dua TIDAK boleh digunakan.
* **Tanda Hubung (`-`) vs Tanda Pisah (`—` / em dash):** Tanda hubung merangkai kata ulang (*anak-anak*) atau se-Indonesia (*se-DKI*). Tanda pisah membatasi penyisipan keterangan tambahan (*kemerdekaan bangsa—saya yakin akan tercapai—diperjuangkan oleh rakyat*).

---

### Pertemuan 4: Bentuk dan Pilihan Kata (Diksi) & Aturan Hukum K/T/S/P
- [ ] *Sudah disalin ke lembar binder fisik*
* **Acuan Resmi:** `1790563821_Pertemuan_4-Bahasa_Indonesia_Unindra_OBE.pdf` (55 Slide Lengkap).

#### 1. Taksonomi Bentuk Kata
1. **Kata Dasar:** Satuan bahasa paling sederhana yang belum memiliki afiksasi (contoh: *nanti*, *siang*, *pergi*, *kampus*).
2. **Kata Berimbuhan (Afiksasi):** Penambahan morfem terikat pada bentuk dasar:
   * **Prefiks (Awalan):** `ber-`, `di-`, `ke-`, `me-`, `pe-`, `se-`, `ter-`.
   * **Infiks (Sisipan):** `-el-` (telunjuk), `-er-` (gerigi), `-em-` (gemetar).
   * **Sufiks (Akhiran):** `-an`, `-kan`, `-i`.
   * **Konfiks (Gabungan Serentak):** `ke-...-an`, `pe-...-an`, `per-...-an`.
3. **Kata Ulang (Reduplikasi):** Dwipurwa (pepohonan), dwilingga (buku-buku), salin suara (sayur-mayur).
4. **Akronim:** Singkatan yang dilafalkan sebagai kata wajar (contoh: *Unindra*, *kaltim*, *pemilu*).

#### 2. HUKUM EMAS PELULUHAN FONEM K / T / S / P (SANGAT SERING KELUAR DI UTS!)
Aturan baku pengimbuhan awalan `me-` atau `pe-` pada kata dasar:

##### Aturan A (LULUH):
Jika kata dasar diawali fonem **K, T, S, P** dan huruf KEDUA adalah **VOKAL (a, i, u, e, o)**, maka fonem tersebut **WAJIB LULUH** menjadi bunyi sengau:
* **K + Vokal ➔ Luluh Menjadi Meng- / Peng-:**
  * `me-` + **k**upas ➔ **mengupas** (BUKAN *mengkupas*)
  * `pe-` + **k**elola ➔ **pengelola** (BUKAN *pengkelola*)
* **T + Vokal ➔ Luluh Menjadi Men- / Pen-:**
  * `me-` + **t**ulis ➔ **menulis** (BUKAN *mentulis*)
  * `pe-` + **t**olong ➔ **penolong** (BUKAN *pentolong*)
* **S + Vokal ➔ Luluh Menjadi Meny- / Peny-:**
  * `me-` + **s**iram ➔ **menyiram** (BUKAN *mensiram*)
  * `pe-` + **s**ewa ➔ **penyewa** (BUKAN *ponsewa / pensewa*)
* **P + Vokal ➔ Luluh Menjadi Mem- / Pem-:**
  * `me-` + **p**ilih ➔ **memilih** (BUKAN *mempilih*)
  * `pe-` + **p**andu ➔ **pemandu** (BUKAN *pempandu*)

##### Aturan B (TIDAK LULUH / KEKAL):
Jika kata dasar diawali fonem **K, T, S, P** dan huruf KEDUA adalah **KONSONAN (Kluster / Gugus Konsonan)**, maka fonem tersebut **TIDAK BOLEH LULUH**:
* `me-` + **kl**asifikasi ➔ **mengklasifikasi** (huruf kedua konsonan 'l')
* `me-` + **tr**ansfer ➔ **mentransfer** (huruf kedua konsonan 'r')
* `me-` + **st**empel ➔ **menstempel** (huruf kedua konsonan 't')
* `me-` + **pr**ogram ➔ **memprogram** (huruf kedua konsonan 'r')
* *Pengecualian Pelaku:* Kata turunan `pe-` + program dapat membentuk nomina pelaku: **pemrogram** atau proses: **pemrograman**.

#### 3. Syarat Pemilihan Kata (Diksi) dalam Tulisan Akademik
1. **Ketepatan (Accuracy):** Membedakan makna denotasi (makna lugas kamus) vs konotasi (makna asosiatif emosional). Menghindari kata ambigu.
2. **Kesesuaian (Appropriateness):** Memilih kata yang cocok dengan ranah ilmiah (gunakan *membuat*, bukan *bikin*; gunakan *karena*, bukan *lantaran*).
3. **Kelaziman (Idiomatic Usage):** Memperhatikan kolokasi kata yang lazim (contoh: *menyampaikan pendapat*, *mengambil keputusan*).

---
## 3. Algoritma 1
* **Dosen Pengampu:** Tim Dosen Algoritma FTIK Unindra
* **Jadwal & Ruang:** Selasa • 07:30 - 09:10 WIB • Ruang R.4.5-3
* **Berkas Rujukan:** Slide Pertemuan 1–4 di `Tugas_Kuliah/01_Algoritma_dan_Pemrograman_1/Rangkuman/`

---

### Pertemuan 1: Pengantar Logika Komputasi, Etimologi & Kriteria Algoritma
- [ ] *Sudah disalin ke lembar binder fisik*

#### 1. Sejarah & Asal-Usul Etimologi Algoritma
Kata **Algoritma** berasal dari nama matematikawan muslim abad ke-9, **Abu Ja'far Muhammad bin Musa Al-Khawarizmi** (780–850 M). Melalui karyanya *Al-Kitab al-mukhtasar fi hisab al-jabr wa'l-muqabala*, beliau meletakkan fondasi ilmu hitung desimal dan Aljabar modern. Di dunia barat, namanya dilafalkan sebagai *Algorismus*, lalu berevolusi menjadi istilah *algorithm*.

#### 2. Definisi & Rumus Klasik Niklaus Wirth
Prof. Niklaus Wirth merumuskan kaitan fundamental pemrograman:
> **PROGRAM = ALGORITMA + STRUKTUR DATA**
* *Algoritma:* Langkah logika terstruktur pemecah masalah.
* *Struktur Data:* Cara pengorganisasian data dalam memori komputer.

#### 3. Lima Kriteria Mutlak Algoritma Baik (Donald E. Knuth):
1. **Finiteness (Keterbatasan):** Algoritma wajib berhenti setelah sejumlah langkah berhingga (dilarang *infinite loop*).
2. **Definiteness (Kepastian):** Setiap instruksi harus jelas, eksplisit, dan tidak menimbulkan makna ganda.
3. **Input (Masukan):** Memiliki nol atau lebih nilai masukan yang diberikan dari luar.
4. **Output (Keluaran):** Memiliki satu atau lebih hasil keluaran sebagai solusi masalah.
5. **Effectiveness (Efektivitas):** Setiap langkah harus cukup sederhana sehingga dapat dikerjakan dalam waktu yang wajar.

---

### Pertemuan 2: Tipe Data Primitif, Operator Komputasi & Hierarki Presedensi
- [ ] *Sudah disalin ke lembar binder fisik*

#### 1. Klasifikasi Tipe Data Standar
* **Integer:** Bilangan bulat tanpa koma desimal (`Shortint`, `Integer`, `Longint`).
* **Real:** Bilangan pecahan/desimal berkoma mengambang (`Real`, `Single`, `Double`).
* **Char:** Karakter tunggal alfanumerik (diapit petik tunggal, misal `'A'`, `'9'`).
* **String:** Untaian beberapa karakter teks (misal `'Universitas Indraprasta'`).
* **Boolean:** Nilai logika kebenaran biner (`TRUE` atau `FALSE`).

#### 2. Operator Komputasi & Presedensi:
* **Aritmatika:** `+` (tambah), `-` (kurang), `*` (kali), `/` (bagi real), `div` (bagi bulat integer), `mod` (sisa bagi modulo).
* **Relasional:** `=` (sama dengan), `<>` (tidak sama dengan), `<`, `>`, `<=`, `>=`.
* **Logika:** `NOT` (kebalikan), `AND` (keduanya benar), `OR` (salah satu benar).
* **Urutan Presedensi Tertinggi ke Terendah:**
  1. Ekspresi di dalam kurung `( )`
  2. Operator `NOT`
  3. Operator perkalian/pembagian: `*`, `/`, `div`, `mod`, `AND`
  4. Operator penjumlahan/pengurangan: `+`, `-`, `OR`
  5. Operator relasional: `=`, `<>`, `<`, `>`, `<=`, `>=`

---

### Pertemuan 3: Standar Simbol Flowchart ANSI & Logika Alur
- [ ] *Sudah disalin ke lembar binder fisik*

#### Simbol Standar ANSI (American National Standards Institute):
| Nama Simbol | Bentuk Geometris | Fungsi Spesifik |
| :--- | :--- | :--- |
| **Terminator** | Kapsul Oval | Menandai titik Mulai (*Start*) atau Selesai (*End/Stop*) alur program. |
| **Process** | Persegi Panjang | Operasi kalkulasi internal, penugasan variabel (`x := y + 2`). |
| **Decision** | Belah Ketupat (Diamond) | Evaluasi kondisi logika; memiliki 2 jalur panah keluar (*Yes/No* atau *True/False*). |
| **Input / Output** | Jajar Genjang | Operasi masukan data (`Read`) atau keluaran data (`Write/Print`). |
| **On-Page Connector** | Lingkaran Kecil | Titik temu penyambung alur panah dalam lembar halaman yang sama. |
| **Off-Page Connector**| Bentuk Segi Lima | Penyambung alur panah antarhalaman yang berbeda. |
| **Flow Line** | Garis Panah Berarah | Menunjukkan arah runtunan urutan eksekusi langkah komputasi. |

---

### Pertemuan 4: Tiga Struktur Kontrol Algoritma (Sequence, Selection, Repetition)
- [ ] *Sudah disalin ke lembar binder fisik*

1. **Struktur Runtunan (Sequence):** Langkah instruksi dijalankan berurutan dari atas ke bawah tanpa lompatan.
2. **Struktur Percabangan (Selection):** Memilih blok perintah berdasarkan hasil kondisi:
   * Percabangan tunggal (`IF - THEN`)
   * Percabangan ganda (`IF - THEN - ELSE`)
   * Percabangan majemuk / bertingkat (`IF - ELSE IF - ELSE` atau `CASE - OF`)
3. **Struktur Perulangan (Repetition / Looping):** Mengulang eksekusi instruksi:
   * `FOR ... TO ... DO` (perulangan dengan batas hitungan pasti).
   * `WHILE ... DO` (evaluasi kondisi di awal; jika salah dari awal, tidak dijalankan).
   * `REPEAT ... UNTIL` (evaluasi kondisi di akhir; minimal dieksekusi 1 kali).

---
## 4. Pemrograman 1 (Pascal)
* **Dosen Pengampu:** Tim Dosen Pemrograman FTIK Unindra
* **Jadwal & Ruang:** Selasa • 09:10 - 10:50 WIB • Ruang R.4.5-3
* **Kompiler Standar:** Free Pascal Compiler (FPC 3.2.2) & Lazarus IDE
* **Berkas Praktikum:** Kode sumber `.pas` di `Tugas_Kuliah/01_Algoritma_dan_Pemrograman_1/Tugas_dan_Praktikum/`

---

### Pertemuan 1: Filosofi Bahasa Pascal & Struktur Anatomi Program
- [ ] *Sudah disalin ke lembar binder fisik*

#### Anatomi Tiga Blok Struktur Pascal:
```pascal
{ 1. BLOK JUDUL PROGRAM }
program NamaProgram;

{ 2. BLOK DEKLARASI }
uses crt;          { Mengimpor unit CRT untuk manipulasi layar terminal }
const
  PI = 3.14159;    { Nilai konstanta tetap }
var
  jari_jari, luas : real;  { Deklarasi variabel dan tipe data }

{ 3. BLOK PROGRAM UTAMA }
begin
  clrscr;          { Membersihkan layar konsol }
  write('Masukkan jari-jari lingkaran: ');
  readln(jari_jari);
  luas := PI * jari_jari * jari_jari;
  writeln('Luas Lingkaran = ', luas:0:2);
  readln;          { Menahan jendela terminal sebelum keluar }
end.               { Titik '.' menandakan akhir mutlak program }
```

---

### Pertemuan 2: Variabel, Konstanta, Tipe Data & Penugasan
- [ ] *Sudah disalin ke lembar binder fisik*

* **Karakteristik Pascal:** Bersifat *Strongly Typed* (tipe variabel harus dideklarasikan sebelum dipakai) dan *Case Insensitive* (`A` sama dengan `a`).
* **Operator Penugasan (Assignment):** Menggunakan simbol `:=` (titik dua sama dengan).
* **Perbedaan `write` vs `writeln`:**
  * `write('...')` mencetak teks tanpa ganti baris (kursor tetap di sebelah kanan).
  * `writeln('...')` mencetak teks lalu memindahkan kursor ke baris baru di bawahnya.
* **Format Penulisan Angka Real:** `variabel:lebar_total:jumlah_desimal` (contoh `luas:0:2` membulatkan hasil cetak ke 2 digit desimal).

---

### Pertemuan 3: Struktur Kontrol Percabangan (IF-THEN, IF-THEN-ELSE)
- [ ] *Sudah disalin ke lembar binder fisik*

> [!CAUTION]
> **🚨 ATURAN EMAS KOMPILER PASCAL: PANTANGAN TITIK KOMA SEBELUM ELSE!**  
> Di dalam tata bahasa sintaks Pascal, tanda titik koma (`;`) bertindak sebagai pemisah instruksi (*statement separator*). Struktur `if ... then ... else` merupakan **SATU KALIMAT UTUH**. Jika Anda memberi tanda `;` tepat sebelum kata `else`, kompiler menganggap pernyataan `if` telah selesai, sehingga saat membaca `else` akan melempar error: **Fatal: Syntax error, ";" expected but "ELSE" found**.

#### Praktikum Nyata 1: Uji Tahun Kabisat (`latihan1_kabisat.pas`)
```pascal
program tahun_kabisat;
uses crt;

var
  tahun : integer;

begin
  clrscr;
  writeln('   PROGRAM CEK TAHUN KABISAT       ');
  write('Masukkan tahun : ');
  readln(tahun);

  if (tahun mod 4 = 0) then
    writeln('Tahun ', tahun, ' adalah TAHUN KABISAT') { <--- TIDAK ADA TITIK KOMA }
  else
    writeln('Tahun ', tahun, ' BUKAN TAHUN KABISAT');

  readln;
end.
```

#### Praktikum Nyata 2: Menentukan Angka Terbesar (`latihan2_terbesar.pas`)
```pascal
program cari_angka_terbesar;
uses crt;

var
  angka1, angka2, terbesar : integer;

begin
  clrscr;
  write('Input angka pertama : '); readln(angka1);
  write('Input angka kedua   : '); readln(angka2);

  if (angka1 > angka2) then
    terbesar := angka1   { <--- TIDAK ADA TITIK KOMA }
  else
    terbesar := angka2;

  writeln('Angka terbesar adalah ', terbesar);
  readln;
end.
```

---

### Pertemuan 4: Percabangan Majemuk & Perhitungan Nilai Akhir
- [ ] *Sudah disalin ke lembar binder fisik*

#### Praktikum Nyata 3: Program Perhitungan Nilai Akhir (`latihan_nilai_akhir.pas`)
```pascal
program hitung_nilai_akhir;
uses crt;

var
  tugas, uts, uas, nilai_akhir : real;
  nilai_huruf                  : char;

begin
  clrscr;
  writeln('==========================================');
  writeln('   PROGRAM HITUNG NILAI AKHIR MAHASISWA   ');
  writeln('==========================================');

  write('Input nilai Tugas : '); readln(tugas);
  write('Input nilai UTS   : '); readln(uts);
  write('Input nilai UAS   : '); readln(uas);

  { Bobot: Tugas 20%, UTS 30%, UAS 50% }
  nilai_akhir := (0.20 * tugas) + (0.30 * uts) + (0.50 * uas);

  { Seleksi Nilai Huruf }
  if (nilai_akhir >= 91) then
    nilai_huruf := 'A'
  else if (nilai_akhir >= 76) then
    nilai_huruf := 'B'
  else if (nilai_akhir >= 61) then
    nilai_huruf := 'C'
  else if (nilai_akhir >= 41) then
    nilai_huruf := 'D'
  else
    nilai_huruf := 'E';

  writeln('------------------------------------------');
  writeln('Nilai Akhir       : ', nilai_akhir:0:2);
  writeln('Nilai Huruf       : ', nilai_huruf);

  { Seleksi Kelulusan }
  if (nilai_akhir >= 70) then
    writeln('Selamat anda dinyatakan lulus')
  else
    writeln('Maaf anda dinyatakan tidak lulus');

  readln;
end.
```

#### Praktikum Nyata 4: Konversi Suhu Celcius (`Celcius.pas`)
```pascal
program KonversiSuhuCelcius;
uses crt;

var
  celcius, reamur, fahrenheit : real;

begin
  clrscr;
  writeln('=========================================');
  writeln('  PROGRAM KONVERSI SUHU CELCIUS (GENAP)  ');
  writeln('=========================================');
  writeln('NPM  : 202633500386 (Digit Genap: 6)');
  writeln('Nama : Muhammad Haikel Saleh');
  writeln('-----------------------------------------');

  write('Masukkan Nilai Suhu Celcius (C) : ');
  readln(celcius);

  { Rumus konversi suhu }
  reamur := (4.0 / 5.0) * celcius;
  fahrenheit := ((9.0 / 5.0) * celcius) + 32.0;

  writeln('-----------------------------------------');
  writeln('HASIL KONVERSI SUHU:');
  writeln('Suhu Reamur     (R) : ', reamur:0:2, ' R');
  writeln('Suhu Fahrenheit (F) : ', fahrenheit:0:2, ' F');
  writeln('=========================================');
  readln;
end.
```

---
## 5. Bahasa Inggris 1
* **Dosen Pengampu:** Tim Dosen Bahasa Inggris FTIK Unindra
* **Jadwal & Ruang:** Kamis • 07:30 - 09:10 WIB • Ruang R.4.4-4

---

### Chapter I: Self-Introduction, Professional Profiling & Daily Activities
- [ ] *Sudah disalin ke lembar binder fisik*

#### 1. Pola Baku Subject-Verb Agreement
| Subject Pronoun | To Be (Present) | Verb Form (Present Simple) | Contoh Kalimat IT |
| :--- | :--- | :--- | :--- |
| **I** | `am` | Verb 1 (*work*) | *I develop web applications using React.* |
| **You / We / They** | `are` | Verb 1 (*code*) | *They analyze database queries every Monday.* |
| **He / She / It** | `is` | Verb 1 + `s/es` (*analyzes*) | *He designs modern database schemas.* |

*Pola Kalimat Negatif & Tanya:*
* Negatif: `Subject + do/does not + Verb 1` (*She does not write Pascal code.*)
* Tanya: `Do/Does + Subject + Verb 1?` (*Do you study system architecture?*)

---

### Chapter II: Procedural Texts & Technical Instructions
- [ ] *Sudah disalin ke lembar binder fisik*

#### Struktur Tiga Bagian Teks Prosedural:
1. **Goal / Aim:** Menyatakan tujuan (*How to Install Free Pascal on Windows 11*).
2. **Materials / Tools:** Menyebutkan alat dan bahan yang dibutuhkan (*PC, Installer setup file, Internet connection*).
3. **Steps / Methods:** Runtunan instruksi menggunakan kalimat imperatif (*First, download the installer. Second, run setup.exe. Finally, verify the compiler path.*).

---

### Chapter III: Recount Texts & Talking about Past Holiday / Experiences
- [ ] *Sudah disalin ke lembar binder fisik*

#### Pola Simple Past Tense (Kejadian Masa Lampau)
* **Kalimat Positif:** `Subject + Verb 2`
  * Regular Verbs: `install` ➔ `installed`, `compile` ➔ `compiled`.
  * Irregular Verbs: `write` ➔ `wrote`, `build` ➔ `built`, `see` ➔ `saw`, `go` ➔ `went`.
* **Kalimat Negatif:** `Subject + did not + Verb 1` (*We did not encounter any runtime errors yesterday.*)
* **Kalimat Tanya:** `Did + Subject + Verb 1?` (*Did you finish the algorithm assignment?*)

---

### Chapter IV: Talking about Future Intentions & Planning (Will vs Be Going To)
- [ ] *Sudah disalin ke lembar binder fisik*

| Aspek Komparasi | Modal `Will` | Frasa `Be Going To` |
| :--- | :--- | :--- |
| **Karakteristik Keputusan** | Keputusan spontan saat berbicara (*Spontaneous decision*) | Rencana yang telah diatur sebelumnya (*Prior plan/arrangement*) |
| **Bentuk Prediksi** | Prediksi berdasarkan opini atau firasat subjektif | Prediksi berdasarkan bukti nyata yang tampak di depan mata |
| **Contoh 1 (Keputusan)** | *"The phone is ringing. I will answer it."* | *"I am going to submit my algorithm proposal tomorrow morning."* |
| **Contoh 2 (Prediksi)** | *"I think technology will change education in 2030."* | *"Look at those dark clouds! It is going to rain in a few minutes."* |

---
## 6. Matematika Dasar (Kalkulus Sistem Informasi)
* **Dosen Pengampu:** Dr. Munali, M.Pd. / Syifaafidah, M.Pd. (Dosen Pengajar Kelas Reguler RG)
* **Jadwal & Ruang:** Kamis • 09:10 - 10:50 WIB • Ruang R.4.3-2
* **Berkas Rujukan Asli:** Slide PDF & PPT Dosen di `Tugas_Kuliah/06_Matematika_Dasar/Materi_dan_Rangkuman/`
* **Standar Notasi:** Pure Unicode Symbols (Bebas dari kode LaTeX mentah pecahan atau simbol himpunan).

---

### Pertemuan 1: Sistem Bilangan Real, Operasi Aljabar & Notasi Interval
- [ ] *Sudah disalin ke lembar binder fisik*
* **Acuan:** `1789117602_Pert_1_Matematika_-_Sistem_Bilangan_Real (1).pdf` (17 Slide).

#### 1. Klasifikasi 10 Himpunan Bilangan:
Hierarki Himpunan: **ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ**
1. **Bilangan Asli (ℕ / Natural):** Himpunan bilangan hitung bulat positif: `{ 1, 2, 3, 4, 5, ... }`.
2. **Bilangan Cacah (𝕎 / Whole):** Gabungan bilangan nol dan bilangan asli: `{ 0, 1, 2, 3, 4, ... }`.
3. **Bilangan Bulat (ℤ / Integers):** Seluruh bilangan bulat negatif, nol, dan positif: `{ ..., -3, -2, -1, 0, 1, 2, 3, ... }`.
4. **Bilangan Rasional (ℚ / Rational):** Bilangan yang dapat dinyatakan dalam bentuk pecahan `p / q` dengan `p, q ∈ ℤ` dan `q ≠ 0`.
   * *Desimal Berhenti:* `3/8 = 0,375`.
   * *Desimal Berulang Teratur:* `13/11 = 1,181818...`.
5. **Bilangan Irasional (ℚ' / Irrational):** Bilangan desimal tak terhingga yang tidak pernah berulang periodik dan tidak dapat dijadikan pecahan rasio dua bilangan bulat.
   * *Contoh:* `√2 ≈ 1,41421356...`, `π ≈ 3,14159265...`, `e ≈ 2,71828182...`.
6. **Bilangan Real (ℝ / Real Numbers):** Gabungan seluruh bilangan rasional dan irasional (`ℝ = ℚ ∪ ℚ'`). Mengisi setiap titik kontinu pada garis bilangan real.
7. **Bilangan Imajiner:** Satuan akar bilangan negatif `i = √(-1)` dimana `i² = -1`.
8. **Bilangan Kompleks (ℂ / Complex):** Pasangan bilangan riil dan imajiner dalam bentuk `z = a + bi` (dengan `a, b ∈ ℝ`).
9. **Bilangan Prima:** Bilangan bulat positif > 1 yang hanya memiliki tepat 2 pembagi bulat: `{ 2, 3, 5, 7, 11, 13, 17, 19, ... }`.
10. **Bilangan Komposit:** Bilangan asli > 1 selain bilangan prima: `{ 4, 6, 8, 9, 10, 12, 14, ... }`.

#### 2. Lima Sifat Operasi Hitung Aljabar Bilangan Real:
| Sifat Aljabar | Operasi Penjumlahan | Operasi Perkalian |
| :--- | :--- | :--- |
| **1. Komutatif (Pertukaran)** | `x + y = y + x` | `x · y = y · x` |
| **2. Asosiatif (Pengelompokan)** | `(x + y) + z = x + (y + z)` | `(x · y) · z = x · (y · z)` |
| **3. Distributif (Penyebaran)** | `x · (y + z) = (x · y) + (x · z)` | |
| **4. Elemen Identitas (Netral)** | `x + 0 = x` (identitas penjumlahan: 0) | `x · 1 = x` (identitas perkalian: 1) |
| **5. Elemen Invers (Balikan)** | `x + (-x) = 0` (invers aditif / lawan) | `x · (1/x) = 1` untuk `x ≠ 0` (invers multiplikatif / kebalikan) |

#### 3. Empat Sifat Urutan Garis Bilangan Real:
1. **Trikotomi:** Untuk dua bilangan real sembarang `x` dan `y`, pasti tepat satu relasi yang berlaku: `x < y`, `x = y`, atau `x > y`.
2. **Ketransitifan:** Jika `x < y` dan `y < z`, maka pasti `x < z`.
3. **Penambahan:** `x < y ⟺ x + z < y + z` (menambah bilangan yang sama pada kedua ruas tidak mengubah arah pertidaksamaan).
4. **Perkalian (ATURAN EMAS KETAKSAMAAN):**
   * Jika dikalikan bilangan **positif (`z > 0`)**: tanda ketaksamaan **TETAP** (`x < y ⟺ x·z < y·z`).
   * Jika dikalikan bilangan **negatif (`z < 0`)**: arah tanda ketaksamaan **WAJIB DIBALIK** (`x < y ⟺ x·z > y·z`).

#### 4. Notasi Selang (Interval) Garis Bilangan:
| Notasi Interval | Definisi Notasi Himpunan | Penjelasan Batas & Bentuk Kurung |
| :--- | :--- | :--- |
| `(a, b)` | `{ x ∈ ℝ \| a < x < b }` | Selang terbuka: titik a dan b TIDAK masuk (kurung biasa). |
| `[a, b]` | `{ x ∈ ℝ \| a ≤ x ≤ b }` | Selang tertutup: titik a dan b IKUT masuk (kurung siku). |
| `[a, b)` | `{ x ∈ ℝ \| a ≤ x < b }` | Setengah terbuka: a ikut masuk, b tidak masuk. |
| `(a, b]` | `{ x ∈ ℝ \| a < x ≤ b }` | Setengah terbuka: a tidak masuk, b ikut masuk. |
| `(-∞, b)` | `{ x ∈ ℝ \| x < b }` | Selang tak hingga ke kiri tanpa titik b. |
| `(-∞, b]` | `{ x ∈ ℝ \| x ≤ b }` | Selang tak hingga ke kiri termasuk titik b. |
| `(a, ∞)` | `{ x ∈ ℝ \| x > a }` | Selang tak hingga ke kanan tanpa titik a. |
| `[a, ∞)` | `{ x ∈ ℝ \| x ≥ a }` | Selang tak hingga ke kanan termasuk titik a. |

---

### Pertemuan 2: Pertidaksamaan Bilangan Real & Langkah Penentuan HP
- [ ] *Sudah disalin ke lembar binder fisik*
* **Acuan:** `1789631769_Pert_2_Matematika_-_Pertidaksamaan_Bilangan_Real_RG (1).pdf` (14 Slide).

#### 1. Lima Langkah Baku Menentukan Himpunan Penyelesaian (HP):
1. **Sederhanakan Ruas:** Pindahkan semua suku ke ruas kiri sehingga ruas kanan menjadi nol (`f(x) < 0` atau `f(x) > 0`).
2. **Faktorkan Persamaan:** Cari pembuat nol pembilang dan pembuat nol penyebut untuk memperoleh titik-titik pemecah.
3. **Plot pada Garis Bilangan:** Letakkan seluruh titik pemecah pada garis bilangan real terurut dari terkecil ke terbesar.
4. **Lakukan Uji Titik:** Pilih satu angka uji (paling mudah `x = 0`) untuk menentukan tanda interval (`+` atau `-`).
5. **Tentukan HP:** Jika tanda soal `> 0` atau `≥ 0`, ambil daerah bertanda `(+)`. Jika tanda `< 0` atau `≤ 0`, ambil daerah bertanda `(-)`. Tuliskan dalam notasi selang.

#### 2. Pembahasan Lengkap Latihan Soal Slide Dosen (Step-by-Step):
* **Soal a (Pertidaksamaan Linier):**
  `2x - 7 < 4x - 2`  
  ⟺ `2x - 4x < -2 + 7`  
  ⟺ `-2x < 5`  
  ⟺ `x > -5/2` (dibagi -2, tanda `<` dibalik menjadi `>`)  
  **HP = { x ∈ ℝ | x > -2,5 } = ( -5/2, ∞ )**

* **Soal b (Pertidaksamaan Ganda):**
  `-5 ≤ 2x + 6 < 4`  
  ⟺ `-5 - 6 ≤ 2x < 4 - 6`  
  ⟺ `-11 ≤ 2x < -2`  
  ⟺ `-11/2 ≤ x < -1` (dibagi 2 ketiga ruas)  
  **HP = [ -11/2, -1 )**

* **Soal c:**
  `13 ≥ 2x - 3 ≥ 5`  
  ⟺ `16 ≥ 2x ≥ 8`  
  ⟺ `8 ≥ x ≥ 4`  (ekuivalen dengan: `4 ≤ x ≤ 8`)  
  **HP = [ 4, 8 ]**

* **Soal g (Pertidaksamaan Kuadrat):**
  `x² - x < 6`  
  ⟺ `x² - x - 6 < 0`  
  ⟺ `(x - 3)(x + 2) < 0`  
  Titik pemecah: `x = 3` dan `x = -2`  
  Uji titik `x = 0`: `(0 - 3)(0 + 2) = -6` (Tanda Negatif `-`)  
  Garis bilangan: `(+) --- (-2) --- (-) --- (3) --- (+)`  
  Karena yang diminta `< 0`, ambil daerah negatif:  
  **HP = { x ∈ ℝ | -2 < x < 3 } = ( -2, 3 )**

* **Soal Pecahan Rasional (Slide 13 a):**
  `(x - 1) / (x + 2) ≥ 0`  
  Pembuat nol pembilang: `x - 1 = 0 ⟹ x = 1` (lingkaran penuh, ikut masuk karena `≥`).  
  Pembuat nol penyebut: `x + 2 = 0 ⟹ x = -2` (lingkaran KOSONG, syarat penyebut `≠ 0`).  
  Uji titik `x = 0`: `(0 - 1) / (0 + 2) = -1/2` (Negatif).  
  Garis bilangan: `(+) --- (-2) --- (-) --- [1] --- (+)`  
  Karena diminta `≥ 0`, ambil daerah positif:  
  **HP = ( -∞, -2 ) ∪ [ 1, ∞ )**

---

### Pertemuan 3: Pertidaksamaan Nilai Mutlak & Teorema Aljabar Pengkuadratan Dua Ruas
- [ ] *Sudah disalin ke lembar binder fisik*
* **Acuan:** `1790406762_Pert_3_Matematika_-_Fungsi_RegPagi.pdf` (Slide 1 - 3).

#### 1. Definisi Geometris & Delapan Sifat Nilai Mutlak:
Nilai mutlak `|x|` menyatakan jarak titik `x` dari titik pusat (0) pada garis bilangan real (selalu bernilai non-negatif `|x| ≥ 0`):
* `|x| = x` jika `x ≥ 0`
* `|x| = -x` jika `x < 0`

**Delapan Sifat Utama:**
1. `|a · b| = |a| · |b|`
2. `|a / b| = |a| / |b|` (untuk `b ≠ 0`)
3. `|a + b| ≤ |a| + |b|` (*Ketaksamaan Segitiga*)
4. `|a - b| ≥ ||a| - |b||`
5. `|x| = √(x²)`
6. `|x| < a ⟺ -a < x < a` (daerah solusi di dalam interval)
7. `|x| > a ⟺ x < -a atau x > a` (daerah solusi di sayap luar)
8. `|x| ≤ |y| ⟺ x² ≤ y²` (metode kuadrat kedua ruas)

#### 2. Pembahasan Latihan Soal Nilai Mutlak Slide Dosen:
* **Contoh 1:** Selesaikan `|3x - 5| ≥ 1`  
  Gunakan sifat 7:  
  `3x - 5 ≤ -1` atau `3x - 5 ≥ 1`  
  ⟺ `3x ≤ 4 ⟹ x ≤ 4/3`  atau  `3x ≥ 6 ⟹ x ≥ 2`  
  **HP = ( -∞, 4/3 ] ∪ [ 2, ∞ )**

* **Contoh 2 (Kedua Ruas Memuat Nilai Mutlak):** Selesaikan `|2x + 3| ≥ |4x + 5|`  
  Gunakan sifat 8 (kuadratkan kedua ruas):  
  `(2x + 3)² ≥ (4x + 5)²`  
  ⟺ `(2x + 3)² - (4x + 5)² ≥ 0`  
  Gunakan rumus faktorisasi selisih kuadrat: `A² - B² = (A + B)(A - B)`  
  ⟺ `[(2x + 3) + (4x + 5)] · [(2x + 3) - (4x + 5)] ≥ 0`  
  ⟺ `(6x + 8)(-2x - 2) ≥ 0`  
  Bagi kedua ruas dengan `-4` (**TANDA PERTIDAKSAMAAN WAJIB DIBALIK!**):  
  ⟺ `(3x + 4)(x + 1) ≤ 0`  
  Titik pemecah: `x = -4/3` dan `x = -1`  
  Uji titik `x = 0`: `(3(0) + 4)(0 + 1) = +4` (Positif)  
  Garis bilangan: `(+) --- [-4/3] --- (-) --- [-1] --- (+)`  
  Karena diminta `≤ 0`, ambil daerah negatif di antara dua pemecah:  
  **HP = [ -4/3, -1 ]**

---

### Pertemuan 4: Konsep Pemetaan Fungsi, Evaluasi Beda h, Uji Genap/Ganjil, Domain & Range, dan Komposisi (Sesi Live Google Meet)
- [ ] *Sudah disalin ke lembar binder fisik*
* **Dosen Pengajar:** Ibu Syifaafidah, M.Pd. / Dr. Munali, M.Pd.
* **Berkas Rujukan:** Slide PDF Dosen `1790406762_Pert_3_Matematika_-_Fungsi_RegPagi.pdf` (Slide 4 - 17) + Papan Tulis Digital & Transkrip Percakapan Google Meet (Tactiq AI).
* **Catatan Kode Berkas:** File modul tertulis `Pert_3`, tetapi materi ini resmi diajarkan pada **Pertemuan 4**.

#### 📢 Pengumuman Akademik Unindra & Kebijakan Materi UTS 2026:
1. **Pengurangan Sesi Luring (Offline):** Perkuliahan luring/tatap muka di kampus dikurangi dari sebelumnya 4 sesi sebelum UTS & 3 sesi setelah UTS menjadi **3 sesi sebelum UTS dan 2 sesi setelah UTS** (sisanya daring via Google Meet / LMS).
2. **FUNGSI INVERS DITIADAKAN DARI UJIAN UTS!** Dosen Syifaafidah menegaskan bahwa materi *Fungsi Invers* **TIDAK AKAN MASUK DALAM SOAL UTS**. Bahan ujian hanya mencakup sampai: Evaluasi Fungsi, Difference Quotient, Uji Fungsi Genap/Ganjil, Domain Alami & Range, serta Komposisi Fungsi.

#### 1. Definisi Fungsi & Aturan Pemetaan Diagram Panah:
Fungsi `f` adalah aturan korespondensi yang menghubungkan **setiap** elemen `x` pada daerah asal (**Domain**) dengan **tepat satu** nilai `f(x)` pada daerah kawan (**Kodomain**). Himpunan semua nilai pasangan di kodomain disebut daerah hasil (**Range**).
* **Kaidah Wajib Domain:** Domain **tidak boleh bercabang** dan **tidak boleh kosong** (setiap elemen wajib memiliki tepat 1 kawan).
* **Kaidah Kodomain:** Kodomain **boleh bercabang** (banyak domain menuju 1 kodomain yang sama) dan **boleh ada sisa** (elemen yang tidak berpasangan).
* **Coretan Diagram Panah Dosen di Kelas:**
  * Himpunan Asal: `A = {a, b, c}` ➔ **Domain** = `{a, b, c}`
  * Himpunan Kawan: `B = {1, 2, 3, 4}` ➔ **Kodomain** = `{1, 2, 3, 4}`
  * Relasi Pemetaan: `a ➔ 1`, `b ➔ 2`, `c ➔ 3`
  * **Daerah Hasil (Range):** `{1, 2, 3}` *(Elemen 4 bukan anggota range karena tidak memiliki prapeta dari A)*.

#### 2. Evaluasi Nilai Fungsi & Rasio Selisih Beda (Difference Quotient):
Diberikan fungsi `f(x) = x² - 2x`:
* **a. Nilai `f(4)`:**  
  `f(4) = (4)² - 2(4) = 16 - 8 = 8`
* **b. Nilai `f(4 + h)` (Metode Pangkat-Kali-Kali-Pangkat):**  
  `f(4 + h) = (4 + h)² - 2(4 + h) = (16 + 8h + h²) - 8 - 2h = h² + 6h + 8`
* **c. Nilai `f(4 - h) - f(4)`:**  
  `f(4 - h) = (4 - h)² - 2(4 - h) = 16 - 8h + h² - 8 + 2h = h² - 6h + 8` *(Catatan dosen: (-h)² = h²)*  
  `f(4 - h) - f(4) = (h² - 6h + 8) - 8 = h² - 6h`
* **d. Difference Quotient (Fondasi Limit Turunan Kalkulus):**  
  `[f(4 + h) - f(4)] / h = [(h² + 6h + 8) - 8] / h = (h² + 6h) / h = h(h + 6) / h = h + 6`  
  *⚠️ Peringatan Dosen:* Jangan mencoret variabel `h` pada operasi penjumlahan! Faktorkan perkaliannya terlebih dahulu atau pisah menjadi `(h²/h) + (6h/h)`.

#### 3. Uji Simetri: Fungsi Genap vs Fungsi Ganjil:
Substitusikan `x` dengan `(-x)` ke seluruh suku fungsi:
* **Fungsi Genap (Even):** `f(-x) = f(x)` (Grafik kurva simetris terhadap sumbu Y).  
  *Contoh Dosen:* `f(x) = x² - 2 ⟹ f(-x) = (-x)² - 2 = x² - 2 = f(x)` (Genap).
* **Fungsi Ganjil (Odd):** `f(-x) = -f(x)` (Grafik kurva simetris terhadap titik pusat asal (0,0)).  
  *Contoh Dosen:* `g(x) = x³ - 2x ⟹ g(-x) = (-x)³ - 2(-x) = -x³ + 2x = -(x³ - 2x) = -g(x)` (Ganjil).
* **Contoh Soal Ujian Slide Dosen (Pecahan Rasional):**  
  Apakah `f(x) = (x³ + 3x) / (x⁴ - 3x² + 4)` termasuk fungsi ganjil atau genap?  
  *Langkah Pengujian Dosen:*  
  `f(-x) = [(-x)³ + 3(-x)] / [(-x)⁴ - 3(-x)² + 4] = (-x³ - 3x) / (x⁴ - 3x² + 4)`  
  Faktorkan tanda minus keluar dari pembilang:  
  `f(-x) = - (x³ + 3x) / (x⁴ - 3x² + 4) = - f(x)`  
  **Kesimpulan Dosen: Terbukti FUNGSI GANJIL!**
* **Contoh Soal GMeet:** `f(x) = x³/5 ⟹ f(-x) = (-x)³/5 = -x³/5 = -f(x)` (Fungsi Ganjil).
* **💡 Hukum Tanda Minus Pecahan Dosen:** `-a/b = -(a/b) = a/(-b)`. Tanda negatif hanya berlaku pada salah satu (pembilang ATAU penyebut), bukan keduanya. Jika kedua suku negatif, hasilnya positif: `(-a)/(-b) = a/b`.

#### 4. Penentuan Daerah Asal Alami (Domain) & Daerah Hasil (Range):
1. **Fungsi Linear `f(x) = mx + c`:**  
   Tidak ada pembagian nol atau bentuk akar.  
   **Domain:** `ℝ = ( -∞, ∞ )`, **Range:** `ℝ = ( -∞, ∞ )`.
2. **Fungsi Kuadrat Polinomial `f(x) = ax² + bx + c`:**  
   Domain: `ℝ`.  
   Untuk Range, gunakan rumus titik puncak ordinat: `y_p = -D/(4a) = -(b² - 4ac)/(4a)`.  
   * Kasus `a > 0` (parabola terbuka ke atas): **Range** = `[ y_min, ∞ )`  
     *Contoh GMeet:* `f(x) = x² - 5x - 10` (`a = 1 > 0`)  
     `y_min = -[(-5)² - 4(1)(-10)] / 4(1) = -(25 + 40) / 4 = -65/4`  
     **Range = [ -65/4, ∞ )**.  
   * Kasus `a < 0` (parabola terbuka ke bawah): **Range** = `( -∞, y_max ]`  
     *Contoh GMeet:* `f(x) = -x² + 4x` (`a = -1 < 0`)  
     `y_max = -[4² - 4(-1)(0)] / 4(-1) = -(16) / (-4) = 4`  
     **Range = ( -∞, 4 ]**.
3. **Fungsi Irasional (Akar) `f(x) = √(p(x))`:**  
   Syarat di dalam akar harus tak-negatif: `p(x) ≥ 0` (jika negatif ➔ bilangan imajiner).  
   *Contoh GMeet:* `f(x) = √(6 - 2x)`  
   `6 - 2x ≥ 0 ⟹ -2x ≥ -6 ⟹ x ≤ 3` (dibagi -2, tanda dibalik).  
   **Domain = ( -∞, 3 ]**, **Range = [ 0, ∞ )**.
4. **Fungsi Rasional (Pecahan) `f(x) = p(x) / q(x)`:**  
   Syarat penyebut tidak boleh nol: `q(x) ≠ 0`.  
   *Contoh GMeet:* `f(x) = 3 / (x - 1)`  
   Syarat domain: `x - 1 ≠ 0 ⟹ x ≠ 1`. **Domain = ℝ \ {1} = ( -∞, 1 ) ∪ ( 1, ∞ )**.  
   Range via invers aljabar: `y = 3 / (x - 1) ⟹ x - 1 = 3/y ⟹ x = 3/y + 1`.  
   Syarat range: `y ≠ 0`. **Range = ℝ \ {0} = ( -∞, 0 ) ∪ ( 0, ∞ )**.

#### 5. Operasi Aljabar & Komposisi Fungsi (Latihan Interaktif Live GMeet):
Diberikan `f(x) = √x` dan `g(x) = x - 2`:
* **a. Komposisi `(f ∘ g)(x) = f(g(x))`:**  
  `(f ∘ g)(x) = f(x - 2) = √(x - 2)`  
  Syarat domain: `x - 2 ≥ 0 ⟹ x ≥ 2` ➔ **Domain `(f ∘ g)` = [ 2, ∞ )**.  
  Daerah hasil: Nilai terkecil saat `x = 2 ⟹ √(2 - 2) = 0` ➔ **Range `(f ∘ g)` = [ 0, ∞ )**.
* **b. Komposisi `(g ∘ f)(x) = g(f(x))`:**  
  `(g ∘ f)(x) = g(√x) = √x - 2`  
  Syarat domain: `x ≥ 0` ➔ **Domain `(g ∘ f)` = [ 0, ∞ )**.  
  Daerah hasil: Nilai terkecil saat `x = 0 ⟹ √0 - 2 = -2` ➔ **Range `(g ∘ f)` = [ -2, ∞ )**.  
  *(⚠️ Catatan Dosen: Nilai -3 tidak mungkin masuk ke dalam range karena nilai x tidak boleh negatif).*

#### 6. Sesi Tanya Jawab Dosen - Mahasiswa (Jessenia Eka):
* **Pertanyaan Mahasiswa (Jessenia Eka):** *"Ibu, apakah untuk menentukan range kita wajib menggambar kurva grafiknya di kertas ujian?"*
* **Penjelasan Dosen (Ibu Syifaafidah):** *"Tidak wajib menggambar kurva grafik pada lembar jawaban ujian UTS. Mahasiswa cukup menganalisis nilai batas domain (ekstrem): substitusikan batas domain terkecil ke dalam fungsi. Untuk fungsi kuadrat gunakan rumus titik puncak `y_p = -D/(4a)`, dan untuk pecahan gunakan invers aljabar `x = g(y)`. Menggambar grafik hanya alat bantu visualisasi mandiri."*

---

## 7. Pendidikan Pancasila (MK02) • Berbasis RPS & Tugas Presentasi Kelompok
* **Koordinator Pengembang RPS:** Dr. Ida Rosida, MH. • Dr. Julia Bea Kurniawaty, SH., MH. • Dr. Iis Dewi Lestari, M.Pd.
* **Dosen Pengampu:** Tim Dosen Pancasila Universitas Indraprasta PGRI
* **Jadwal & Ruang:** Jumat • 07:30 - 09:10 WIB • Ruang R.4.4-1
* **Acuan Resmi:** `RPS MK02 Pancasila Pusat Gemini 010926.pdf` & Diktat Mahasiswa.

---

### 📢 DAFTAR PEMBAGIAN 10 KELOMPOK PRESENTASI PPT MANDIRI (RPS MK02)
Setiap mahasiswa **wajib membuat slide PowerPoint (PPT) secara mandiri** bersama kelompoknya sesuai tema kajian silabus:

| Kelompok | Tema Bahan Kajian RPS MK02 | Anggota Kelompok Mahasiswa | Sesi Pertemuan |
| :--- | :--- | :--- | :--- |
| **Kelompok 1** | **Pancasila dalam Lintasan Sejarah [SEBELUM KEMERDEKAAN]**<br>*(Pra-Kemerdekaan, BPUPKI, Panitia Sembilan, Piagam Jakarta)* | 1. A ALIF ASSYAFIYYAH<br>2. AILA AZ ZAHRA ZAINUDDIN<br>3. ACHMAD MIKO AL TORIK<br>4. AINI KURNIA SARI | **Pertemuan 2** |
| **Kelompok 2** | **Pancasila dalam Lintasan Sejarah [SESUDAH KEMERDEKAAN]**<br>*(Kemerdekaan, Orde Lama, Orde Baru, Reformasi)* | 1. AHMAD HAFIZH ISWHYUDI<br>2. DELYSIA VALA PUTRI DWI CALLISTA<br>3. AHMAD RAIHAN PRIMADIAWAN HERMANSYAH<br>4. HIKMATUS SHOLAWAT | **Pertemuan 3** |
| **Kelompok 3** | **Pancasila sebagai Dasar Negara**<br>*(Esensi, Urgensi, Sumber Historis, Yuridis, Sosiologis, Politis, UUD 1945)* | 1. AKMAL THORIQ RAMADHAN<br>2. KIARA BREZENSKA<br>3. ALFI MUHIDIN MATDOAN<br>4. NABILA BERLIAN BRIZKY SIREGAR | **Pertemuan 4** |
| **Kelompok 4** | **Pancasila sebagai Ideologi Negara**<br>*(Fungsi, urgensi ideologi, pengamalan pelestarian lingkungan)* | 1. HANIF FADHIL HAWARIZMI<br>2. SALMA NUR AULIA MUTHMAINAH<br>3. MUHAMAD NIZAR HAQIQI<br>4. VANDA RANGELIS SYAFINA | Pertemuan 5 |
| **Kelompok 5** | **Radikalisme dan Terorisme**<br>*(Bahaya radikalisme, tantangan ideologi, antisipasi era digital)* | 1. DODI ALFAYED<br>2. RATU BILKIS ALIZA<br>3. ESA RIZKY AL FATHIR<br>4. ZAHRAN FIRZATULLAH | Pertemuan 7 |
| **Kelompok 6** | **Pancasila sebagai Sistem Filsafat**<br>*(Kajian ontologis, epistemologis, dan aksiologis)* | 1. FACHRI DARMAWAN<br>2. AMANDA ZAHRA BILNINA<br>3. MOHAMAD NUR RAMADAY<br>4. ROSHAYYATINAH | Pertemuan 9 |
| **Kelompok 7** | **Pancasila sebagai Sistem Etika**<br>*(Sistem etika, moralitas, dan etika lingkungan hidup)* | 1. DAVA DWI RIANDONO<br>2. NAZWA SITI AZIZAH<br>3. DIMAS ISWANTO<br>4. PUTRI ALIYA MULYONO | Pertemuan 10 |
| **Kelompok 8** | **Pancasila sebagai Nilai Dasar Pengembangan Ilmu**<br>*(Etika keilmuan & pilar eksistensi IPTEK berkeadilan)* | 1. MARGARETA TRIYANI DAHOM<br>2. SERA PRISILIA<br>3. TRIA FITRIANI PASARIBU<br>4. ALBANI AHMAD MUNAWAR | Pertemuan 11-12 |
| **Kelompok 9** | **Pendidikan Anti Korupsi**<br>*(Makna, jenis, faktor penyebab, UU No. 20/2001, analisis kasus)* | 1. MUHAMMAD ZACKI ARR ROSIS<br>2. RAFI AL JABBAR<br>3. VIKA ARDITA<br>4. NATHALIE THEOPHILIA<br>5. WAHYU ARIF H | Pertemuan 13-14 |
| **Kelompok 10** | **Keanekaragaman di Indonesia**<br>*(Bhinneka Tunggal Ika & kerukunan berbangsa bernegara)* | 1. ISKAN AHMAD RAMZA<br>2. SANTA EKLESIA TAMPUBOLON<br>3. YOHANES ARIL DOVRIS GON<br>4. SITI FATHIYAH IMARAH | Pertemuan 15 |

---

### Ketentuan Wajib Pembuatan Slide PPT Presentasi:
1. **Slide 1:** Judul Presentasi & Profil Lengkap Anggota Kelompok (Nama & Foto).
2. **Slide 2:** Latar Belakang Kesejarahan & Urgensi RPS.
3. **Slide 3 - 4:** Pembahasan Konseptual Materi & Rujukan Buku Ajar Dikti.
4. **Slide 5:** Studi Kasus Riil di Lingkungan Masyarakat & Solusi Sila Pancasila.
5. **Slide 6:** Kesimpulan, Rencana Aksi, & Sesi Tanya Jawab.

---

### Pertemuan 1: Landasan, Visi, Misi Pendidikan Pancasila & Proyek MKWK
- [ ] *Sudah disalin ke lembar binder fisik*

#### 1. 4 Landasan Utama Kuliah Pancasila:
* **Landasan Historis:** Menggali akar nilai religio-kultural ribuan tahun peradaban Nusantara.
* **Landasan Kultural:** Menjaga jati diri bangsa agar tidak tergerus arus individualisme dan ideologi asing.
* **Landasan Yuridis:** UU No. 12 Tahun 2012 tentang Pendidikan Tinggi (Pasal 35 ayat 3) menetapkan Pancasila sebagai mata kuliah wajib kurikulum (MKWK).
* **Landasan Filosofis:** Pancasila berkedudukan sebagai *Philosophische Grondslag* (dasar filsafat negara) dan *Weltanschauung* (pandangan hidup).

#### 2. Kolaborasi Proyek MKWK Lapangan:
Mata kuliah Pancasila berkolaborasi dengan Agama Islam, Bahasa Indonesia, dan Kewarganegaraan dalam merancang tugas proyek kemasyarakatan (contoh proyek kelas: *Proposal Digitalisasi Kasir UMKM Dapoer Uti Zaza*).

---

### Pertemuan 2: Pancasila dalam Lintasan Sejarah [SEBELUM KEMERDEKAAN] • TUGAS KELOMPOK 1
- [ ] *Sudah disalin ke lembar binder fisik*
* **Pelaksana:** Kelompok 1 (Alif, Aila, Miko, Aini).

#### 1. Nilai Religio-Kultural Pra-Kemerdekaan:
* **Kutai (400 M):** Prasasti Yupa membuktikan kedermawanan dan nilai Ketuhanan.
* **Sriwijaya (Abad VII):** Negara kebangsaan pertama berbasis maritim dan toleransi keagamaan.
* **Majapahit (Abad XIII):** Kitab *Sutasoma* karya Mpu Tantular melahirkan semboyan *"Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa"*. Istilah *Pancasila* termuat dalam *Negarakertagama* karya Mpu Prapanca (Pancasila Krama: 5 norma moral larangan).

#### 2. Sidang BPUPKI I (29 Mei - 1 Juni 1945):
* **Mr. Muhammad Yamin (29 Mei):** Peri Kebangsaan, Kemanusiaan, Ketuhanan, Kerakyatan, Kesejahteraan Rakyat.
* **Prof. Dr. Soepomo (31 Mei):** Teori Negara Integralistik (Persatuan Mengatasi Golongan).
* **Ir. Soekarno (1 Juni):** Memperkenalkan nama **Pancasila**, diperas menjadi *Trisila*, lalu *Ekasila*: **Gotong Royong**.
* **Panitia Sembilan (22 Juni 1945):** Merumuskan Piagam Jakarta (*Jakarta Charter*).

---

### Pertemuan 3: Pancasila dalam Lintasan Sejarah [SESUDAH KEMERDEKAAN] • TUGAS KELOMPOK 2
- [ ] *Sudah disalin ke lembar binder fisik*
* **Pelaksana:** Kelompok 2 (Hafizh, Delysia, Raihan, Hikmatus).

#### 1. Sidang PPKI 18 Agustus 1945:
Mohammad Hatta bersama para tokoh Islam menyepakati penggantian 7 kata Piagam Jakarta menjadi **"Ketuhanan Yang Maha Esa"** demi menjaga keutuhan Sabang sampai Merauke.

#### 2. Dialektika Tiga Rezim:
* **Orde Lama (1945-1965):** Dinamika RIS & UUDS 1950, Dekrit Presiden 5 Juli 1959, Demokrasi Terpimpin, Nasakom, dan tragedi G30S/PKI.
* **Orde Baru (1966-1998):** Pembangunan Repelita, namun disertai penafsiran tunggal ideologi (Penataran P-4).
* **Era Reformasi (1998 - Sekarang):** Pancasila sebagai ideologi terbuka, tantangan era digital, hoaks, polarisasi, dan korupsi.

---

### Pertemuan 4: Pancasila sebagai Dasar Negara • TUGAS KELOMPOK 3 & KISI-KISI UTS RPS
- [ ] *Sudah disalin ke lembar binder fisik*
* **Pelaksana:** Kelompok 3 (Akmal, Kiara, Alfi, Nabila).

#### 1. Kedudukan Yuridis sebagai Dasar Negara:
Pancasila berkedudukan sebagai *Staatsfundamentalnorm* (Norma Fundamental Negara) dan sumber dari segala sumber hukum negara (Pasal 2 UU No. 12 Tahun 2011).

#### 2. Bank Soal Latihan Persiapan UTS Resmi dari RPS Unindra:
1. **Tujuan mempelajari Pancasila di PT:** Membina karakter beriman, bermoral, beretika, dan cinta tanah air berwawasan global.
2. **Upaya mempertahankan ideologi:** Penguatan pendidikan kewarganegaraan, penegakan hukum adil, literasi digital kritis, dan keteladanan pemimpin.
3. **Rumusan Piagam Jakarta:** Sila 1 memuat kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya.
4. **Proses perumusan:** Sidang BPUPKI I, Panitia Sembilan (Piagam Jakarta), dan pengesahan PPKI 18 Agustus 1945.
5. **Alasan memilih Pancasila:** Digali dari kepribadian bangsa sendiri, menyeimbangkan hak privat dan sosial kemasyarakatan.
6. **Kapitalisme vs Sosialisme:** Kapitalisme mengagungkan pasar bebas & kepemilikan modal privat; sosialisme mengontrol alat produksi oleh negara.
7. **Demokrasi di Indonesia:** Perlunya penguatan musyawarah mufakat untuk mengatasi politik transaksional.
8. **Sikap atas keberagaman:** Toleransi aktif, moderasi beragama, dan penghayatan Bhinneka Tunggal Ika.
9. **Hubungan dengan UUD 1945:** Pancasila menjiwai Pembukaan UUD 1945 dan dijabarkan dalam pasal-pasal konstitusi.
10. **Potensi bangsa:** Keragaman 1.340 suku bangsa, posisi maritim silang strategis, sumber daya alam melimpah, dan modal gotong royong.

---
## 8. Pendidikan Agama Islam (PAI)
* **Dosen Pengampu:** Tim Dosen PAI Universitas Indraprasta PGRI
* **Jadwal & Ruang:** Jumat • 09:10 - 10:50 WIB • Ruang R.4.4-1
* **Berkas Rujukan:** Diktat Kuliah PAI & Lembar Jawaban Mahasiswa (`04_Pendidikan_Agama_Islam/Tugas/`).

---

### Pertemuan 1: Visi Perkuliahan Islam & Fondasi Tauhid Komprehensif
- [ ] *Sudah disalin ke lembar binder fisik*

#### 1. Visi, Misi & Dua Sumber Primer Hukum Islam
* **Visi:** Membentuk sarjana muslim yang berintegritas ilmiah, bertakwa, berakhlak mulia (*akhlakul karimah*), dan mampu mengintegrasikan sains dengan tauhid.
* **Dua Sumber Primer:**
  1. **Al-Qur'anul Karim:** Kalamullah yang diturunkan kepada Nabi Muhammad SAW sebagai mukjizat dan pedoman mutlak.
  2. **As-Sunnah An-Nabawiyyah:** Sabda, perbuatan, dan ketetapan Rasulullah SAW yang shahih.

#### 2. Tiga Dimensi Tauhid (Trilogi Tauhid):
1. **Tauhid Rububiyyah:** Meyakini bahwa hanya Allah SWT satu-satunya Pencipta (*Al-Khaliq*), Pemelihara, Pengatur alam semesta (*Al-Mudabbir*), dan Pemberi rezeki (*Ar-Raziq*) tanpa sekutu (QS. Al-Fatihah: 2).
2. **Tauhid Uluhiyyah (Tauhid Ibadah):** Mengesakan Allah SWT dalam seluruh perbuatan ibadah hamba-Nya (shalat, doa, sembelihan, tawakal) hanya murni ditujukan kepada Allah (QS. Adz-Dzariyat: 56).
3. **Tauhid Asma' wa Shifat:** Menetapkan nama-nama (*Asma'ul Husna*) dan sifat-sifat kemuliaan Allah SWT sebagaimana yang Allah dan Rasul-Nya tetapkan tanpa menyerupakannya dengan makhluk (*bilaa takyif, bilaa tamtsil, bilaa ta'thil*).

---

### Pertemuan 2: Aqidah Islam, Rukun Iman & Hakikat Ihsan
- [ ] *Sudah disalin ke lembar binder fisik*

#### 1. Rukun Iman Enam Pilar:
1. Iman kepada Allah SWT.
2. Iman kepada Malaikat-Malaikat Allah.
3. Iman kepada Kitab-Kitab Allah (Taurat, Zabur, Injil, Al-Qur'an).
4. Iman kepada Rasul-Rasul Allah.
5. Iman kepada Hari Akhir (Kiamat).
6. Iman kepada Qadha dan Qadar (Takdir baik maupun buruk).

#### 2. Hakikat Tingkatan Ihsan
Sebagaimana dijelaskan dalam Hadits Jibril:
> *"Ihsan adalah engkau beribadah kepada Allah seakan-akan engkau melihat-Nya. Dan jika engkau tidak mampu melihat-Nya, maka sesungguhnya Dia senantiasa melihatmu."* (HR. Muslim).

---

### Pertemuan 3: Syariah Islam, Dimensi Ibadah & 5 Hukum Taklifi
- [ ] *Sudah disalin ke lembar binder fisik*

#### 1. Lima Hukum Taklifi dalam Ushul Fiqih:
1. **Wajib (Fardhu):** Dikerjakan berpahala, ditinggalkan berdosa (contoh: shalat lima waktu, puasa Ramadhan).
2. **Sunnah (Mandub):** Dikerjakan berpahala, ditinggalkan tidak berdosa (contoh: shalat tahajjud, puasa Senin-Kamis).
3. **Mubah (Ja'iz):** Netral; dikerjakan maupun ditinggalkan tidak berpahala dan tidak berdosa (contoh: makan, minum, memilih tipe font).
4. **Makruh:** Ditinggalkan berpahala, dikerjakan tidak berdosa namun dibenci Allah (contoh: makan makanan berbau menyengat sebelum shalat berjamaah).
5. **Haram:** Ditinggalkan berpahala, dikerjakan mendapat dosa dan siksa (contoh: riba, berbohong, menyebarkan virus siber).

#### 2. Dimensi Ibadah Mahdhah vs Ghairu Mahdhah:
* **Ibadah Mahdhah:** Ibadah murni yang rukun, syarat, dan tata caranya telah ditetapkan secara rinci oleh syariat (contoh: tata cara shalat, thawaf). Kaidah fikih: *"Hukum asal ibadah mahdhah adalah haram/terlarang kecuali ada dalil yang memerintahkannya."*
* **Ibadah Ghairu Mahdhah:** Seluruh aktivitas keduniaan (kuliah, bekerja, membuat sistem informasi kasir) yang diniatkan ikhlas mencari ridha Allah SWT.

---

### Pertemuan 4: Akhlak dalam Islam & Etika Profesi Komputasi
- [ ] *Sudah disalin ke lembar binder fisik*

#### 1. Tiga Spektrum Akhlakul Karimah:
1. **Akhlak kepada Allah SWT:** Tawakal, syukur, sabar, ikhlas, dan khauf (takut dosa).
2. **Akhlak kepada Manusia:** Berbakti kepada orang tua (*birrul walidain*), silaturahmi, jujur (*amanah*), menepati janji, dan tolong-menolong.
3. **Akhlak kepada Lingkungan Alam:** Memakmurkan bumi, melestarikan alam, dan tidak berbuat kerusakan (*fasad*).

#### 2. Integrasi Etika Islam bagi Praktisi Sistem Informasi:
* **Amanah Data (Kerahasiaan & Privasi):** Menjaga kerahasiaan data pengguna dan pelanggan adalah kewajiban syar'i. Membocorkan data pribadi merupakan bentuk khianat.
* **Integritas Kode (No Malware):** Haram hukumnya membuat perangkat lunak jahat (*trojan*, *ransomware*, judi online, atau sistem penipuan).
* **Teknologi sebagai Wasilah Kebaikan:** Menjadikan komputer dan internet sebagai wasilah dakwah, efisiensi zakat, dan peningkatan taraf hidup UMKM.

---
