# -*- coding: utf-8 -*-
"""
Script to update Konsep Sistem Informasi (KSI) Pertemuan 6 with
the verbatim live GMeet transcript and enriched lecture notes
from Monday, 12 Oktober 2026.
"""

import os
import sys
import json
import re

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BASE_DIR = r"C:\Users\haike\Downloads\academic-digital-binder"
SEEDDATA_PATH = os.path.join(BASE_DIR, "src", "data", "seedData.js")
STORAGE_PATH = os.path.join(BASE_DIR, "src", "lib", "storage.js")

RAW_GMEET_TRANSCRIPT = """Transkrip Asli Perkuliahan Google Meet (Senin, 12 Oktober 2026):
Dosen: Pak Dheni, M.Kom. | Mahasiswa: Haikel Saleh, Yasmine Avisha, Jessenia Eka, Shofiyah Nahda, Danu Hadiana, Viandra Suldep.

[07:35] Pembukaan & Review Subsistem CBIS:
Pak Dheni membuka perkuliahan dengan mereview keterkaitan subsistem CBIS (Computer-Based Information System) dengan level manajemen organisasi:
- TPS (Transaction Processing System): Mencatat transaksi harian operasional (kasir Indomaret/Alfamart, perbankan, teller, pembayaran Unindra).
- SIA (Sistem Informasi Akuntansi): Pengelolaan data keuangan periodik/bulanan (jurnal, neraca saldo).
- SIM (Sistem Informasi Manajemen): Laporan ringkasan untuk monitoring manajer tingkat menengah (laporan penjualan bulanan, evaluasi stok barang, grafik penjualan daerah).
- DSS (Decision Support System): Membantu analisis data rumit untuk keputusan semi-terstruktur & tidak terstruktur (penentuan harga produk baru, simulasi anggaran).
- OAS (Office Automation System): Mempermudah komunikasi dan produktivitas harian (email korporat, video conference GMeet/Zoom, kalender digital satu semester).
- EIS / ESS (Executive Information System): Untuk pimpinan tingkat atas (C-Level), menyajikan grafik strategi bisnis jangka panjang dan kerja sama global.
- Expert System (Sistem Pakar / AI): Mengadopsi kecerdasan buatan untuk pemecahan masalah spesifik (diagnosis medis otomatis, deteksi penipuan, trading saham).

[08:00] Model Sistem Pakar & Metode ATM:
Empat bagian sistem pakar: User Interface (UI), Inference Engine (mesin inferensi pencari aturan), Knowledge Base (basis pengetahuan fakta/aturan), dan Development Engine (alat rekayasa sistem).
Pak Dheni menekankan prinsip etika AI: Mahasiswa boleh menggunakan sistem pakar atau AI, tetapi WAJIB menerapkan metode ATM (Amati, Tiru, dan Modifikasi). Jangan menelan mentah hasil AI tanpa analisis kritis dan pemahaman logika sendiri.

[08:20] Materi Inti Pertemuan 6: TPS (Transaction Processing System):
Tujuan TPS:
1. Mencatat Transaksi Data secara real-time (contoh: scan barcode kasir Indomaret langsung tercatat di pusat).
2. Mempercepat Proses otomatisasi kalkulasi dibanding manual kalkulator.
3. Menyajikan Informasi Cepat (cek stok harian real-time; catatan: pencurian fisik tidak terdeteksi sistem barcode).
4. Meningkatkan Kinerja & Pelayanan efisien bagi pelanggan.
Tugas Pokok TPS:
1. Pengumpulan Data (Data Collection via barcode, kartu gesek, tunai).
2. Manipulasi Data: Klasifikasi (tunai vs transfer), Sortir (tanggal, nominal), Perhitungan (uang masuk/keluar), dan Pengikhtisaran (meringkas 1.000 struk belanja harian menjadi 1 baris laporan omset Rp 50.000.000).
3. Penyimpanan Data ke database pusat.
4. Persiapan Dokumen: Dokumen Aksi (struk belanja, invoice) dan Dokumen Informasi (laporan penjualan harian, laporan stok menipis).

[08:40] Sesi Tanya Jawab Tugas & Kisi-Kisi Ujian:
- Tanya Jawab Haikel Saleh: Haikel menanyakan teknis video presentasi kelompok: apakah video dibuat saat presentasi berlangsung atau menampilkan rekaman video? Pak Dheni mengklarifikasi bahwa saat giliran presentasi kelompok setelah UTS, mahasiswa mempresentasikan materinya; video penjelasannya bebas dibuat menggunakan rekaman pribadi, bantuan AI, atau rekaman Zoom meeting.
- Kisi-Kisi UTS: Pak Dheni menegaskan materi Pertemuan 5 dan Pertemuan 6 TIDAK KELUAR DI UTS. Bahan UTS difokuskan pada Pertemuan 1 s.d. 4 (open book buku binder catatan tulisan tangan). Materi Pertemuan 5 dan 6 akan diujikan pada UPM (Ujian Pengendali Mutu / UAS)."""

STANDAR_SUMMARY_HTML = """<div class="alert alert-info" style="margin-bottom: 20px;">
  <strong>🎙️ CATATAN RESMI KULIAH GMEET • PERTEMUAN 6 (SENIN, 12 OKTOBER 2026)</strong><br>
  <strong>Dosen Pengampu:</strong> Pak Dheni, M.Kom. • <strong>Mata Kuliah:</strong> Konsep Sistem Informasi (KSI)<br>
  <em>Catatan perkuliahan daring interaktif: Mereview keterkaitan subsistem CBIS (DSS, Expert System, CSCW, EIS) dari pertemuan sebelumnya, lalu membedah secara mendalam sistem tingkat operasional: Transaction Processing System (TPS), Office Automation System (OAS), dan Management Information System (MIS). Dilengkapi arahan tugas presentasi video kelompok dan kisi-kisi evaluasi ujian.</em>
</div>

<h4>1. Review Subsistem CBIS & Keterkaitan dengan Level Manajemen Organisasi</h4>
<p>Pak Dheni membuka sesi dengan mereview kembali kedudukan masing-masing subsistem dalam Computer-Based Information System (CBIS) yang menjadi pilar perusahaan:</p>
<div class="table-wrap">
  <table>
    <thead><tr><th>Subsistem CBIS</th><th>Fungsi Utama Organisasi</th><th>Level Manajemen & Pengguna</th><th>Contoh Riil di Lapangan</th></tr></thead>
    <tbody>
      <tr><td><strong>TPS (Transaction Processing System)</strong></td><td>Mencatat dan memproses transaksi operasional harian bervolume tinggi.</td><td>Tingkat Operasional (Kasir, Teller, Operator).</td><td>Kasir Indomaret/Alfamart, teller bank, mesin ATM, loket keuangan Unindra.</td></tr>
      <tr><td><strong>SIA (Sistem Informasi Akuntansi)</strong></td><td>Mengumpulkan dan mengelola data keuangan periodik/bulanan.</td><td>Bagian Keuangan & Akunting.</td><td>Pencatatan jurnal keuangan, buku besar, neraca saldo, laporan laba rugi bulanan.</td></tr>
      <tr><td><strong>SIM (Sistem Informasi Manajemen)</strong></td><td>Menyediakan laporan ringkasan berkala untuk monitoring kinerja.</td><td>Manajer Tingkat Menengah (Middle Management).</td><td>Laporan penjualan bulanan manajer pemasaran, evaluasi stok barang gudang, grafik penjualan regional.</td></tr>
      <tr><td><strong>DSS (Decision Support System)</strong></td><td>Membantu analisis data rumit untuk keputusan semi-terstruktur & tidak terstruktur.</td><td>Manajer / Analis Kebijakan.</td><td>Simulasi penentuan harga produk baru, permodelan anggaran promosi.</td></tr>
      <tr><td><strong>OAS (Office Automation System)</strong></td><td>Mempermudah komunikasi dan produktivitas administrasi harian.</td><td>Seluruh Staf & Karyawan Kantor.</td><td>Email korporat, video conference (Google Meet, Zoom), kalender digital terpadu satu semester.</td></tr>
      <tr><td><strong>EIS / ESS (Executive Information System)</strong></td><td>Menyajikan grafik strategi bisnis jangka panjang dan tren makroekonomi.</td><td>Manajer Tingkat Atas (Direktur / C-Level).</td><td>Dashboard performa bisnis global, analisis kemitraan strategis, ekspansi bisnis.</td></tr>
      <tr><td><strong>Expert System (Sistem Pakar / AI)</strong></td><td>Mengadopsi keahlian para pakar manusia untuk memecahkan masalah spesifik.</td><td>Spesialis / Pengguna Umum.</td><td>Aplikasi diagnosis medis otomatis, deteksi penipuan transaksi keuangan, sinyal analisis trading saham.</td></tr>
    </tbody>
  </table>
</div>

<h4>2. Bedah Model Sistem Pakar (Expert System) & Metode ATM</h4>
<p>Dalam penjelasan lanjutan materi DSS & Sistem Pakar:</p>
<ul>
  <li><strong>Empat Komponen Pokok Sistem Pakar:</strong>
    <ol>
      <li><strong>User Interface (UI):</strong> Antarmuka tatap muka antara pengguna dan sistem (layar menu, input pertanyaan, tombol pencarian).</li>
      <li><strong>Inference Engine (Mesin Inferensi):</strong> Otak penalaran yang menguji aturan logika satu per satu terhadap fakta yang dimasukkan hingga menghasilkan solusi/tindakan.</li>
      <li><strong>Knowledge Base (Basis Pengetahuan):</strong> Gudang fakta, kaidah, dan keahlian yang dihimpun dari para pakar.</li>
      <li><strong>Development Engine:</strong> Perangkat lunak yang digunakan oleh pengembang sistem (engineer) untuk membangun dan memprogram sistem pakar.</li>
    </ol>
  </li>
  <li><strong>Kelebihan & Kelemahan Sistem Pakar:</strong>
    <ul>
      <li><em>Keuntungan:</em> Memungkinkan orang awam menyelesaikan pekerjaan pakar (misal mendesain sketsa arsitektur via prompt AI), proses otomatis berulang, dan melestarikan ilmu para ahli.</li>
      <li><em>Kelemahan:</em> Biaya lisensi/pemeliharaan enterprise sangat mahal, sulit dikembangkan karena keterbatasan pakar, dan <strong>TIDAK 100% BERNILAI BENAR</strong>. Sistem tetap memiliki risiko galat atau disusupi virus/penyadapan data strategis.</li>
    </ul>
  </li>
  <li><strong>Pesan Kritis Dosen tentang Penggunaan AI (Metode ATM):</strong>
    <blockquote style="border-left: 4px solid #F59E0B; padding-left: 14px; margin: 12px 0; color: #FDE68A; background: rgba(245, 158, 11, 0.08); padding: 12px 16px; border-radius: 6px;">
      "Boleh kita menggunakan sistem pakar atau AI, tetapi gunakan metode <strong>ATM (Amati, Tiru, dan Modifikasi)</strong>! Jangan menelan mentah hasil AI tanpa analisis dan pemahaman nalar sendiri. Cerna dengan logika, pahami isinya, dan modifikasi hasilnya agar kita tidak bingung ketika dikonfirmasi ulang."<br>
      <strong>— Pak Dheni, M.Kom. (Kuliah GMeet KSI Pertemuan 6)</strong>
    </blockquote>
  </li>
</ul>

<h4>3. Pendalaman Materi Pertemuan 6: Transaction Processing System (TPS)</h4>
<p>TPS adalah sistem informasi level operasional paling dasar yang menjadi pintu masuk (gerbang utama) seluruh data perusahaan:</p>
<ul>
  <li><strong>Empat Tujuan Utama TPS (Slide Perkuliahan):</strong>
    <ol>
      <li><strong>Mencatat Transaksi Data:</strong> Menangkap setiap kejadian transaksi bisnis harian secara seketika (real-time). Contoh: pemindaian barcode kasir Indomaret langsung mencatat unit terjual ke database pusat secara real-time.</li>
      <li><strong>Mempercepat Proses:</strong> Menggantikan penghitungan manual kalkulator menjadi serba otomatis (scan barcode menghitung harga total dan potongan diskon otomatis).</li>
      <li><strong>Menyajikan Informasi Cepat & Akurat:</strong> Memungkinkan pemeriksaan stok barang harian secara langsung. Catatan kelemahan: Jika terjadi pencurian barang fisik tanpa melewati scan kasir, data sistem dan stok fisik rak akan mengalami selisih (minus).</li>
      <li><strong>Meningkatkan Kinerja & Pelayanan:</strong> Pelayanan pelanggan menjadi lebih efisien tanpa perlu antre menghitung ulang barang di rak.</li>
    </ol>
  </li>
  <li><strong>Empat Tugas Pokok TPS:</strong>
    <ol>
      <li><strong>Pengumpulan Data (Data Collection):</strong> Menangkap data transaksi melalui pemindai barcode, gesek kartu debit/kredit, atau input kasir.</li>
      <li><strong>Manipulasi Data (Data Manipulation):</strong> Terdiri dari 4 operasi:
        <ul>
          <li><em>Klasifikasi:</em> Mengelompokkan transaksi (pembayaran tunai vs non-tunai/QRIS/transfer).</li>
          <li><em>Sortir:</em> Mengurutkan data berdasarkan tanggal, jam, nama pelanggan, atau nominal transaksi.</li>
          <li><em>Perhitungan:</em> Melakukan kalkulasi aritmatika uang masuk, uang keluar, dan sisa stok.</li>
          <li><em>Pengikhtisaran (Summarizing):</em> Meringkas data bervolume besar menjadi ringkasan bernilai (contoh: 1.000 lembar struk transaksi harian diringkas menjadi 1 baris laporan total penjualan Rp 50.000.000).</li>
        </ul>
      </li>
      <li><strong>Penyimpanan Data (Data Storage):</strong> Menyimpan seluruh rekaman transaksi ke dalam basis data (database) pusat perusahaan.</li>
      <li><strong>Persiapan Dokumen (Document Preparation):</strong> Menghasilkan dua jenis dokumen:
        <ul>
          <li><em>Dokumen Aksi:</em> Dokumen pemicu tindakan transaksi (struk belanja fisik, invoice tagihan, bukti transfer).</li>
          <li><em>Dokumen Informasi:</em> Laporan pemantauan manajemen operasional (laporan rekap penjualan harian, laporan peringatan stok barang menipis).</li>
        </ul>
      </li>
    </ol>
  </li>
</ul>

<h4>4. Informasi Penting Akademik: Tugas Presentasi Video & Kisi-Kisi UTS</h4>
<div class="card-dark" style="background: rgba(30, 41, 59, 0.5); border: 1px solid rgba(148, 163, 184, 0.2); border-radius: 10px; padding: 16px 20px; margin-top: 14px;">
  <strong style="color: #38BDF8;">📢 Tanya Jawab Mahasiswa (Haikel Saleh) & Klarifikasi Dosen:</strong>
  <ul style="margin: 8px 0 0 0; padding-left: 20px; line-height: 1.6; color: #CBD5E1;">
    <li><strong>Pertanyaan Haikel Saleh:</strong> Terkait tugas pembuatan video presentasi kelompok—apakah video dibuat saat presentasi berlangsung, atau kita menampilkan video saat giliran presentasi?</li>
    <li><strong>Jawaban Pak Dheni:</strong> Saat giliran jadwal presentasi kelompok setelah UTS, mahasiswa mempresentasikan materinya secara langsung. Terkait media video penjelasannya, mahasiswa dibebaskan: boleh menggunakan rekaman video pribadi kelompok, memanfaatkan animasi/video AI, atau menggunakan rekaman Google Meet / Zoom meeting kelompok.</li>
    <li><strong>Ketentuan Materi Ujian UTS:</strong> Materi Pertemuan 5 (DSS/ES) dan Pertemuan 6 (TPS/OAS/MIS) <strong>TIDAK KELUAR DI UTS</strong>. Bahan ujian UTS difokuskan pada Pertemuan 1 sampai dengan Pertemuan 4 (kisi-kisi sekitar 60% s.d. 65% sudah disampaikan di Pertemuan 4, ujian open book khusus buku binder catatan fisik tulisan tangan). Materi Pertemuan 5 dan 6 nantinya akan diujikan pada UPM (Ujian Pengendali Mutu / UAS).</li>
  </ul>
</div>"""

def main():
    print("Memperbarui Pertemuan 6 KSI dengan transkrip rekaman GMeet...")

    with open(SEEDDATA_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    prefix = "export const initialSubjects = "
    idx_start = content.find(prefix)
    idx_profile = content.find("export const initialProfile = ", idx_start)
    json_str = content[idx_start + len(prefix):idx_profile].strip()
    if json_str.endswith(";"):
        json_str = json_str[:-1].strip()
    suffix = content[idx_profile:]

    subjects_data = json.loads(json_str)

    ksi = next(s for s in subjects_data if s["id"] == "subject-ksi")
    m6 = next(m for m in ksi["meetings"] if m["meeting_number"] == 6)

    # 1. Update date to today
    m6["date"] = "2026-10-12"
    m6["title"] = "Taksonomi Sistem Informasi Berdasarkan Level Organisasi (TPS, OAS, KWS & MIS)"

    # 2. Update transcripts with verbatim GMeet
    m6["transcripts"] = [
        {
            "id": "trans_ksi_6",
            "audio_url": None,
            "content": RAW_GMEET_TRANSCRIPT,
            "status": "completed"
        }
    ]

    # 3. Update summaries.standar with comprehensive student GMeet notes
    m6["summaries"]["standar"] = STANDAR_SUMMARY_HTML

    # 4. Update cheatsheet with exact lecture points
    m6["notes"] = "Catatan GMeet: Materi P5 & P6 TIDAK KELUAR DI UTS (UTS fokus P1-P4 open book binder). Pahami 4 tujuan TPS, 4 tugas pokok (termasuk 4 tahap manipulasi data: klasifikasi, sortir, hitung, ringkas 1000 struk), serta metode ATM pada AI."

    new_content = content[:idx_start] + prefix + json.dumps(subjects_data, indent=2, ensure_ascii=False) + ";\n\n" + suffix
    with open(SEEDDATA_PATH, "w", encoding="utf-8") as f:
        f.write(new_content)

    print("✓ Sukses memperbarui Pertemuan 6 KSI di seedData.js")

    # Bump CURRENT_DATA_VERSION
    with open(STORAGE_PATH, "r", encoding="utf-8") as f:
        st_content = f.read()

    new_ver_str = "export const CURRENT_DATA_VERSION = 'v16_ksi_p6_live_gmeet_pak_dheni_2026';"
    st_content = re.sub(r"export const CURRENT_DATA_VERSION = '[^']+';", new_ver_str, st_content)
    with open(STORAGE_PATH, "w", encoding="utf-8") as f:
        f.write(st_content)

    print("✓ CURRENT_DATA_VERSION dinaikkan ke v16 (Live GMeet Pak Dheni).")

if __name__ == "__main__":
    main()
