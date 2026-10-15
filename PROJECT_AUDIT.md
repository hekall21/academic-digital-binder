# 📋 PROJECT AUDIT & SYSTEM ARCHITECTURE REPORT
**Academic Digital Binder & AI Study Companion (Unindra R1G)**
*Tanggal Audit: 15 Oktober 2026 • Auditor: Senior Full-Stack & AI RAG Specialist*

---

## 1. Ringkasan Eksekutif & Struktur Proyek

Aplikasi **Academic Digital Binder** adalah sistem manajemen pembelajaran dan catatan digital yang dirancang untuk mengelola **8 mata kuliah** aktif mahasiswa Sistem Informasi:
1. `subject-matdas`: **Matematika Dasar** (TI-106)
2. `subject-algo`: **Algoritma dan Pemrograman 1** (TI-103)
3. `subject-pascal`: **Praktikum Pemrograman 1 (Pascal)** (TI-104)
4. `subject-ksi`: **Konsep Sistem Informasi** (TI-101)
5. `subject-indo`: **Bahasa Indonesia** (MKWK107)
6. `subject-pancasila`: **Pendidikan Pancasila** (MK02)
7. `subject-pai`: **Pendidikan Agama Islam** (MK01)
8. `subject-inggris`: **Bahasa Inggris 1** (MK03)

### Inventaris Folder dan Berkas Inti:
```
academic-digital-binder/
├── public/
│   ├── images/               # Cheatsheet HD JPG 1200px (6 Mata Kuliah Utama)
│   ├── materials/            # Puluhan PDF resmi perkuliahan dosen (Pertemuan 1-6)
│   │   ├── ai_html_sources/  # Sumber bahan kajian Diktat Guru AI
│   │   ├── matdas_p1..p6.pdf # Modul Matematika Dasar (termasuk Turunan Aljabar P6)
│   │   ├── algo_p1..p4.pdf   # Slide Algoritma, Flowchart, Pseudocode
│   │   ├── ksi_p1..p6.pdf    # Slide Konsep Sistem Informasi
│   │   └── ...
│   └── pascal/               # 24 berkas kode Pascal (.pas) Pertemuan 5 & 6
├── src/
│   ├── components/
│   │   ├── common/           # ErrorBoundary
│   │   ├── dashboard/        # DashboardView, Cheatsheet Gallery, Continue Card
│   │   ├── handwriting/      # ModeCatatanFisikView (Orphaned / Belum Terhubung)
│   │   ├── layout/           # Navbar, Sidebar
│   │   ├── materials/        # PdfViewerModal, CheatsheetViewerModal
│   │   ├── meetings/         # MeetingDetailView, AddMeetingModal
│   │   ├── pascal/           # PascalExplorerView (Line-by-line explainer)
│   │   ├── search/           # GlobalSearchModal (Ctrl+K)
│   │   ├── settings/         # SettingsModal, Backup/Restore
│   │   └── subjects/         # SubjectsView, AddSubjectModal
│   ├── data/                 # seedData.js, pascalFiles.js
│   ├── hooks/                # useBinderStore.js, useTheme.js
│   ├── lib/                  # aiSummaryEngine.js, storage.js, security.js, supabase.js
│   ├── App.jsx               # Root orchestrator & routing
│   └── index.css             # Tailwind layers & typography styles
├── package.json              # React 18, Vite 6, Tailwind CSS 3
└── vite.config.js
```

---

## 2. Fitur yang Sudah Berfungsi dengan Baik

1. **Dashboard Akademik:**
   - Visualisasi progres belajar 8 mata kuliah.
   - Galeri kartu cheatsheet resolusi tinggi dengan modal pratinjau.
   - Kartu "Lanjutkan Belajar" yang mendeteksi pertemuan yang belum selesai dicatat.
2. **Manajemen Mata Kuliah & Pertemuan:**
   - Penjelajahan 32 pertemuan lengkap untuk 8 mata kuliah.
   - Sinkronisasi metadata dosen, ruang kelas, jadwal, dan kurikulum.
3. **Pratinjau PDF & Dokumen Dosen:**
   - Mode pratinjau ganda (Direct Browser Viewer & Google Docs Embedded Viewer).
   - Akses instan buka tab baru dan unduh berkas PDF resmi dosen.
4. **Koleksi Pascal (.PAS) Explorer:**
   - 24 berkas Pascal perkuliahan dengan sintaks terstruktur dan penjelasan baris demi baris (*line explainer*).
5. **Tema & Keamanan:**
   - Mode Gelap (*Dark*) dan Terang (*Light*) tersimpan di localStorage.
   - Sanitasi input dan URL (`DOMPurify`/HTML Sanitizer) mencegah serangan XSS.
   - Backup dan Restore JSON offline.

---

## 3. Temuan Masalah Kritis & Analisis Penyebab Utama (Root Cause)

Berdasarkan audit mendalam baris demi baris, ditemukan 5 penyebab utama dari masalah yang dirasakan pengguna:

### 🚨 Masalah 1: Rendering Rumus Matematika Melebar, Rusak, & Kode LaTeX Mentah
- **Penyebab Utama:**
  Pada [`MeetingDetailView.jsx`](file:///C:/Users/haike/Downloads/academic-digital-binder/src/components/meetings/MeetingDetailView.jsx#L46-L75), rumus matematika hanya diproses dengan *regular expression string replace* sederhana:
  ```javascript
  html.replace(/\$([^$\n]+)\$/g, (match, formula) => {
    let clean = formula.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)');
    return `<span class="math-badge font-mono">${clean}</span>`;
  });
  ```
  - Pola ini **gagal total** membaca pecahan bersarang, limit (`\lim_{x \to 0}`), turunan (`\frac{df}{dx}`), integral (`\int_a^b`), akar (`\sqrt{...}`), tanda panah, eksponen, dan display math `$$...$$` atau `\[...\]`.
  - Rumus panjang hanya dibungkus dalam tag `<span>` tanpa kontainer *scrollable horizontal*, sehingga ketika rumus panjang dirender, seluruh kartu dan layar ikut melebar ke samping (*horizontal layout overflow*).
  - Tidak ada library rendering LaTeX matematis sekelas **KaTeX** yang diimpor.

### 🚨 Masalah 2: Belum Adanya Fitur AI Tutor & Chat Q&A Interaktif
- **Penyebab Utama:**
  Aplikasi sebelumnya hanya menampilkan rangkuman statis HTML di dalam tab pertemuan. Tidak tersedia antarmuka chat tanya-jawab AI yang memungkinkan mahasiswa bertanya:
  *"Jelaskan turunan aljabar menggunakan aturan limit dan berikan contoh soal berdasarkan PDF pertemuan 6!"*
- Tidak ada prompt sistematis bergaya **ChatGPT / Claude AI Tutor** yang membagi jawaban secara terstruktur (Pengertian, Rumus LaTeX KaTeX, Penjelasan Simbol, Contoh Soal, Pembahasan Langkah demi Langkah, Jawaban Akhir, Kesimpulan, dan Sitasi Sumber).

### 🚨 Masalah 3: Ketiadaan Pipeline Parsing PDF & Smart Document RAG
- **Penyebab Utama:**
  Saat pengguna mengunggah berkas PDF baru, aplikasi hanya menyimpan nama dan ukuran file tanpa mengekstrak teks halamannya.
  - Tidak ada library ekstraksi teks PDF (seperti `pdfjs-dist`).
  - Tidak ada modul *semantic chunking* (pemotongan dokumen berbasis halaman/slide dan struktur judul).
  - Tidak ada mesin pencari relevansi konteks (*in-memory keyword + semantic BM25/cosine matcher*) untuk menemukan potongan halaman yang menjawab pertanyaan mahasiswa.

### 🚨 Masalah 4: Komponen Yatim (*Orphaned Components*) & State Terputus
- **Penyebab Utama:**
  - Komponen [`ModeCatatanFisikView.jsx`](file:///C:/Users/haike/Downloads/academic-digital-binder/src/components/handwriting/ModeCatatanFisikView.jsx) sudah dibuat dengan rapi untuk membantu mahasiswa menyalin catatan ke binder kertas, namun **tidak pernah dipasang pada navigasi Sidebar maupun routing di `App.jsx`**.
  - Callback fungsi `addMaterial`, `deleteMaterial`, `updateSummary`, dan `toggleProgressItem` diekstrak di `App.jsx`, tetapi **tidak diteruskan sebagai props** ke `MeetingDetailView`, sehingga aksi manipulasi materi di detail pertemuan menjadi pasif.

### 🚨 Masalah 5: Ekstraksi Catatan Tangan Menghilangkan Struktur Rumus
- **Penyebab Utama:**
  Tombol "Salin Catatan Binder" sebelumnya menggunakan `tempDiv.textContent` yang menghapus seluruh format baris dan mengubah rumus matematika menjadi teks mentah yang berantakan, menyulitkan mahasiswa saat menulis di buku tulis.

---

## 4. Rencana Implementasi & Solusi Arsitektur

| Prioritas | Komponen | Tindakan Perbaikan |
| :-: | :--- | :--- |
| **P0** | **Engine LaTeX & KaTeX** | Integrasikan library `katex`, tambahkan renderer matematika inline (`$...$`, `\(...\)`) dan block display (`$$...$$`, `\[...\]`), serta bungkus persamaan panjang dalam kontainer `overflow-x-auto` terlindungi. |
| **P0** | **Interactive AI Tutor Chat** | Bangun komponen `AiTutorChatView.jsx` dengan mode Tutor Komprehensif, Pemecahan Soal Langkah demi Langkah, Mode Rangkuman Kilat, dan Tombol Salin Format Bersih. |
| **P1** | **Smart Document RAG & PDF Parser** | Bangun modul `documentRagEngine.js` menggunakan `pdfjs-dist` untuk membaca teks PDF per slide/halaman, memotong dokumen secara semantik dengan metadata, dan melakukan retrieval akurat berdasar kueri. |
| **P1** | **Hubungkan Navigasi & Fitur Yatim** | Sambungkan `ModeCatatanFisikView` ke Sidebar dan App.jsx. Teruskan seluruh callback mutasi data ke `MeetingDetailView` dan `SubjectsView`. |
| **P2** | **Penyempurnaan UI/UX & Responsive** | Pastikan layout chat tutor lebar dan lega, hilangkan overflow horizontal pada mobile dan desktop, serta perkuat tampilan status pencarian dokumen. |

Dokumentasi audit ini menjadi acuan mutlak bagi eksekusi perbaikan sistem.
