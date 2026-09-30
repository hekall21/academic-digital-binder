# 📓 Academic Digital Binder • Web Application

> **Sistem Manajemen Catatan Akademik, Rangkuman Kuliah & Pelacakan Salin Binder Fisik.**  
> *Dikembangkan berdasarkan spesifikasi resmi `Binder.txt` & Kompendium UTS 8 Mata Kuliah (Unindra Semester 1).*

---

## 🌟 Fitur Utama (Sesuai Spesifikasi Binder.txt)

1. **Academic Command Dashboard:**
   - Statistik real-time: Total 8 Mata Kuliah, 32+ Pertemuan, Materi Tersimpan, Rangkuman AI, dan Progress Salin Buku.
   - Kartu **"Continue Studying"** yang otomatis memunculkan pertemuan terakhir yang belum selesai disalin ke binder fisik.
   - Filter cepat berdasarkan mata kuliah dan status catatan.

2. **Dinamis Tanpa Batas (No Hardcoded Limits):**
   - Tambah mata kuliah baru kapan saja (`+ Mata Kuliah Baru`).
   - Tambah pertemuan baru kapan saja tanpa batas (`+ Tambah Pertemuan`).
   - Mendukung pergantian semester (Semester 1, Semester 2, dst.).

3. **Detail Pertemuan & Source Material:**
   - Manajemen berkas materi dosen: PDF, PPT/PPTX, DOCX, TXT, Audio, Video, dan Tautan Drive/Web.
   - Penampil dan editor **Transkrip Rekaman Dosen**.
   - **AI Study Assistant** dengan 3 mode:
     - ⚡ **Mode Ringkas**: Intisari dan glosarium kilat.
     - ✅ **Mode Standar**: Rangkuman seimbang materi perkuliahan harian.
     - 📚 **Mode Detail**: Elaborasi mendalam dan kisi-kisi ujian UTS/UAS.

4. **Mode Catatan Fisik (Handwriting Transcription):**
   - Tampilan khusus yang dirancang dengan spasi dan tipografi nyaman untuk disalin menggunakan pena ke binder kertas.
   - Dilengkapi tombol instan **[ Copy ]**, **[ Print ]**, dan **[ Export PDF ]**.

5. **4-Tier Binder Progress Checklist:**
   - 📖 Sudah Membaca
   - ⚡ Sudah Dirangkum
   - 🧠 Sudah Dipelajari
   - ✍️ Sudah Dicatat di Binder Fisik

6. **Pencarian Global (Ctrl + K):**
   - Pencarian instan melintasi mata kuliah, pertemuan, isi rangkuman, transkrip rekaman, dan istilah penting.

7. **Dual-Layer Architecture & Storage:**
   - **Offline-First**: Berjalan 100% langsung di browser via LocalStorage tanpa perlu setup server rumit.
   - **Backup & Restore**: Export dan Import cadangan JSON sewaktu-waktu.
   - **Supabase Ready**: Skema PostgreSQL lengkap (`supabase_schema.sql`) dengan Row Level Security (RLS) dan Storage bucket.

---

## 🚀 Panduan Menjalankan Proyek Secara Lokal

Pastikan Anda telah memasang **Node.js** (v18+):

```bash
# 1. Masuk ke direktori proyek
cd "C:\Users\haike\Downloads\academic-digital-binder"

# 2. Jalankan development server
npm run dev

# 3. Buka browser pada URL:
# http://localhost:3000
```

Untuk membangun bundle produksi:
```bash
npm run build
npm run preview
```

---

## 📤 Panduan Git Push ke GitHub

Proyek ini telah diinisialisasi sebagai repositori Git lokal. Untuk mengunggah (*push*) ke repositori GitHub Anda:

```bash
# 1. Pastikan Anda berada di direktori proyek
cd "C:\Users\haike\Downloads\academic-digital-binder"

# 2. Hubungkan ke repositori GitHub Anda (ganti URL dengan repo Anda)
git remote add origin https://github.com/USERNAME/academic-digital-binder.git

# 3. Pastikan branch utama bernama main
git branch -M main

# 4. Unggah seluruh kode
git push -u origin main
```

---

## 🗄️ Menghubungkan ke Supabase (Opsional)

1. Buat proyek baru di [Supabase Dashboard](https://supabase.com/).
2. Buka menu **SQL Editor**, buka berkas `supabase_schema.sql` di repositori ini, tempelkan isinya, dan klik **Run**.
3. Buat file `.env` di root folder proyek:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```
4. Restart development server (`npm run dev`). Aplikasi akan otomatis mendeteksi koneksi Supabase!

---

## 🌐 Deploy ke Vercel

1. Buka [Vercel](https://vercel.com/) dan pilih **Add New Project**.
2. Pilih repositori GitHub `academic-digital-binder`.
3. Framework preset akan otomatis terdeteksi sebagai **Vite**.
4. Masukkan Environment Variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) jika menggunakan Supabase.
5. Klik **Deploy**. Selesai!
