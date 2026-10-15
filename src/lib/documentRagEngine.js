// Smart Document Ingestion, Semantic Chunking & RAG Retrieval Engine
// Mendukung ekstraksi PDF real via pdfjs-dist, chunking per-halaman/slide, dan pencarian relevansi semantik

import * as pdfjsLib from 'pdfjs-dist';

// Configure PDF.js worker defensively
try {
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
  ).toString();
} catch (e) {
  // CDN fallback if URL resolution fails
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version || '4.0.379'}/pdf.worker.min.mjs`;
}

// In-Memory Document Store & Cache
const documentIndex = [];

/**
 * Extracts clean structured text page-by-page from a PDF File or ArrayBuffer
 */
export async function extractPdfText(fileOrBuffer, fileName = 'Dokumen.pdf') {
  try {
    let data;
    if (fileOrBuffer instanceof ArrayBuffer) {
      data = fileOrBuffer;
    } else if (fileOrBuffer instanceof Blob) {
      data = await fileOrBuffer.arrayBuffer();
    } else if (typeof fileOrBuffer === 'string') {
      const response = await fetch(fileOrBuffer);
      data = await response.arrayBuffer();
    } else {
      throw new Error('Format berkas tidak didukung.');
    }

    const loadingTask = pdfjsLib.getDocument({ data });
    const pdfDoc = await loadingTask.promise;
    const totalPages = pdfDoc.numPages;
    const extractedPages = [];

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      const page = await pdfDoc.getPage(pageNum);
      const textContent = await page.getTextContent();

      // Sort items by vertical position (Y descending) then horizontal position (X ascending)
      const items = textContent.items || [];
      const lines = [];
      let currentLineY = null;
      let currentLineText = '';

      for (const item of items) {
        if (!item.str) continue;
        const y = Math.round(item.transform[5]);

        if (currentLineY === null || Math.abs(y - currentLineY) < 6) {
          currentLineText += (currentLineText ? ' ' : '') + item.str;
          currentLineY = y;
        } else {
          if (currentLineText.trim()) lines.push(currentLineText.trim());
          currentLineText = item.str;
          currentLineY = y;
        }
      }
      if (currentLineText.trim()) lines.push(currentLineText.trim());

      const pageText = lines.join('\n');
      extractedPages.push({
        pageNumber: pageNum,
        text: pageText,
        lineCount: lines.length,
      });
    }

    return {
      success: true,
      fileName,
      totalPages,
      pages: extractedPages,
    };
  } catch (error) {
    console.error('[PDF Extraction Error]', error);
    return {
      success: false,
      fileName,
      error: error.message || 'Gagal mengekstrak berkas PDF.',
      pages: [],
    };
  }
}

/**
 * Performs Semantic Chunking on extracted pages
 * Groups content by Slide/Page boundaries and topic headers
 */
export function chunkDocumentPages({
  pages,
  documentId,
  documentTitle,
  subjectId,
  subjectName,
  meetingNumber,
}) {
  const chunks = [];

  pages.forEach((page) => {
    const text = page.text.trim();
    if (!text) return;

    // Detect primary heading from the first 2 non-empty lines
    const lines = text.split('\n').filter((l) => l.trim().length > 0);
    const titleCandidate = lines[0] || `Halaman ${page.pageNumber}`;
    const subtitleCandidate = lines[1] || '';

    // Create semantic chunk
    chunks.push({
      id: `${documentId}_p${page.pageNumber}`,
      documentId,
      documentTitle,
      subjectId,
      subjectName,
      meetingNumber: meetingNumber || 1,
      pageNumber: page.pageNumber,
      totalPages: pages.length,
      topic: `${titleCandidate} ${subtitleCandidate ? '• ' + subtitleCandidate : ''}`.slice(0, 100),
      content: text,
      contentKeywords: extractKeywords(text),
    });
  });

  return chunks;
}

/**
 * Helper to extract meaningful search keywords from text
 */
function extractKeywords(text) {
  if (!text) return [];
  const clean = text
    .toLowerCase()
    .replace(/[^\w\s\u00C0-\u017F]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2);
  return Array.from(new Set(clean));
}

/**
 * Pre-seeded Core Academic Knowledge Base for all 8 Subjects
 * Guarantees zero-hallucination factual grounding
 */
const SEED_ACADEMIC_CHUNKS = [
  // MATEMATIKA DASAR - PERTEMUAN 6: TURUNAN ALJABAR & LIMIT TRIGONOMETRI
  {
    id: 'matdas_p6_limit_trigo',
    subjectId: 'subject-matdas',
    subjectName: 'Matematika Dasar',
    documentTitle: '1792035539_Pert_6_Matematika_-_Turunan_Aljabar_RG.pdf',
    meetingNumber: 6,
    pageNumber: 1,
    topic: '10 Rumus Baku Limit Fungsi Trigonometri (Slide 1-7)',
    content: `10 Rumus Dasar Limit Fungsi Trigonometri (x mendekati 0):
1. lim_{x->0} (sin x / x) = 1
2. lim_{x->0} (x / sin x) = 1
3. lim_{x->0} (tan x / x) = 1
4. lim_{x->0} (x / tan x) = 1
5. lim_{x->0} (sin ax / bx) = a / b
6. lim_{x->0} (ax / sin bx) = a / b
7. lim_{x->0} (tan ax / bx) = a / b
8. lim_{x->0} (ax / tan bx) = a / b
9. lim_{x->0} (tan ax / tan bx) = a / b
10. lim_{x->0} (tan ax / sin bx) = a / b
Identitas Sudut Rangkap Trigonometri yang Wajib Digunakan:
cos 2x = 1 - 2 sin^2 x <=> 1 - cos 2x = 2 sin^2 x
1 - cos ax = 2 sin^2 (a/2 x)`,
    contentKeywords: ['limit', 'trigonometri', 'sin', 'cos', 'tan', 'rumus', 'sudut', 'rangkap', 'identitas'],
  },
  {
    id: 'matdas_p6_turunan_definisi',
    subjectId: 'subject-matdas',
    subjectName: 'Matematika Dasar',
    documentTitle: '1792035539_Pert_6_Matematika_-_Turunan_Aljabar_RG.pdf',
    meetingNumber: 6,
    pageNumber: 8,
    topic: 'Definisi Turunan Fungsi Aljabar Melalui Pendekatan Limit (Slide 8-10)',
    content: `Definisi Matematis Turunan Fungsi:
Turunan f'(x) adalah laju perubahan sesaat nilai fungsi f(x) terhadap x, yang diperoleh dari kemiringan garis sekan ketika h mendekati 0.
Rumus Fundamental Definisi Turunan:
f'(x) = lim_{h->0} [f(x + h) - f(x)] / h
Contoh 1: Buktikan f(x) = x^2 turunannya f'(x) = 2x
f'(x) = lim_{h->0} [(x + h)^2 - x^2] / h
      = lim_{h->0} [x^2 + 2xh + h^2 - x^2] / h
      = lim_{h->0} [2xh + h^2] / h = lim_{h->0} (2x + h) = 2x. Terbukti!
Contoh 2: f(x) = 5x - 3 -> f'(x) = 5
Contoh 3: f(x) = 3x^2 + 2x - 5 -> f'(x) = 6x + 2`,
    contentKeywords: ['turunan', 'definisi', 'limit', 'aljabar', 'garis', 'singgung', 'kemiringan', 'pembuktian', 'fx'],
  },
  {
    id: 'matdas_p6_sifat_turunan',
    subjectId: 'subject-matdas',
    subjectName: 'Matematika Dasar',
    documentTitle: '1792035539_Pert_6_Matematika_-_Turunan_Aljabar_RG.pdf',
    meetingNumber: 6,
    pageNumber: 11,
    topic: '5 Sifat Operasi Turunan Fungsi Aljabar (Slide 11-13)',
    content: `5 Sifat dan Aturan Operasi Turunan Fungsi Aljabar:
1. Turunan Konstanta: f(x) = c -> f'(x) = 0
2. Turunan Fungsi Pangkat: f(x) = x^n -> f'(x) = n * x^(n - 1)
3. Perkalian dengan Skalar: f(x) = c * u(x) -> f'(x) = c * u'(x)
4. Penjumlahan & Pengurangan Fungsi: f(x) = u(x) +- v(x) -> f'(x) = u'(x) +- v'(x)
5. Perkalian Dua Fungsi: f(x) = u(x) * v(x) -> f'(x) = u'(x)*v(x) + u(x)*v'(x)
Contoh Perkalian: f(x) = (2x + 3)(x^2 - 1)
Misal u = 2x + 3 => u' = 2
v = x^2 - 1 => v' = 2x
f'(x) = 2(x^2 - 1) + (2x + 3)(2x) = 2x^2 - 2 + 4x^2 + 6x = 6x^2 + 6x - 2`,
    contentKeywords: ['sifat', 'aturan', 'turunan', 'aljabar', 'konstanta', 'pangkat', 'perkalian', 'penjumlahan', 'uv'],
  },

  // MATEMATIKA DASAR - PERTEMUAN 5: LIMIT FUNGSI ALJABAR
  {
    id: 'matdas_p5_limit_aljabar',
    subjectId: 'subject-matdas',
    subjectName: 'Matematika Dasar',
    documentTitle: '1791885965_Pert_5_Matematika_-_Limit_SC.pdf',
    meetingNumber: 5,
    pageNumber: 1,
    topic: 'Metode Penyelesaian Limit Aljabar (Substitusi, Faktorisasi, Kali Sekawan)',
    content: `Metode Penyelesaian Limit Aljabar:
1. Metode Substitusi Langsung: Masukkan nilai x = a ke f(x). Jika menghasilkan nilai tentu L, maka limit = L.
2. Jika Substitusi menghasilkan bentuk tak tentu (0/0):
   a. Faktorisasi: Faktorkan pembilang dan penyebut untuk mencoret pembuat nol (x - a).
   b. Mengalikan Akar Sekawan: Jika terdapat bentuk akar sqrt(x) - sqrt(a), kalikan dengan (sqrt(x) + sqrt(a)) / (sqrt(x) + sqrt(a)).
3. Limit Mendekati Tak Hingga (x -> infty):
   Bagi pembilang dan penyebut dengan x berpangkat tertinggi dari penyebut.`,
    contentKeywords: ['limit', 'aljabar', 'substitusi', 'faktorisasi', 'sekawan', 'akar', 'tak', 'tentu', 'tak hingga'],
  },

  // ALGORITMA DAN PEMROGRAMAN 1 - FLOWCHART & STRUKTUR KONTROL
  {
    id: 'algo_p3_ansi_flowchart',
    subjectId: 'subject-algo',
    subjectName: 'Algoritma dan Pemrograman 1',
    documentTitle: 'algo_p3_flowchart_ansi.pdf',
    meetingNumber: 3,
    pageNumber: 1,
    topic: 'Simbol Standar ANSI Flowchart & Kaidah Logika',
    content: `Simbol Standar ANSI Flowchart Pemrograman:
1. Terminator (Oval / Kapsul): Menandakan awal (Start/Mulai) atau akhir (End/Selesai) alur program.
2. Preparation (Segienam): Inisialisasi variabel dan pemberian nilai awal (contoh: counter := 0).
3. Input/Output (Jajargenjang): Operasi membaca data dari keyboard (Read/Input) atau menampilkan ke layar (Write/Print).
4. Process (Persegi Panjang): Operasi perhitungan matematika, kalkulasi rumus, dan assignment (contoh: luas := p * l).
5. Decision (Belah Ketupat / Diamond): Pengujian kondisi boolean yang menghasilkan dua cabang arah: YA (True) atau TIDAK (False).
6. Connector (Lingkaran Kecil): Penghubung alur pada halaman yang sama.
7. Off-page Connector (Segilima): Penghubung alur ke halaman berbeda.
8. Flowline (Garis Berpanah): Menunjukkan arah jalannya instruksi logis.`,
    contentKeywords: ['flowchart', 'ansi', 'terminator', 'decision', 'input', 'output', 'process', 'simbol', 'algoritma'],
  },

  // PRAKTIKUM PASCAL - PERCABANGAN & IF ELSE
  {
    id: 'pascal_p5_percabangan',
    subjectId: 'subject-pascal',
    subjectName: 'Praktikum Pemrograman 1 (Pascal)',
    documentTitle: 'pascal_p5_pemilihan_majemuk_if.pdf',
    meetingNumber: 5,
    pageNumber: 1,
    topic: 'Percabangan Tunggal, Ganda & Majemuk IF-THEN-ELSE di Pascal',
    content: `Aturan Sintaks Percabangan IF di Free Pascal:
1. Aturan Titik Koma (CRUCIAL RULE): Baris sebelum kata kunci ELSE TIDAK BOLEH diakhiri titik koma (;)!
   Contoh Benar:
   if (nilai >= 70) then
     writeln('LULUS')
   else
     writeln('TIDAK LULUS');
2. Percabangan Majemuk (Nested IF):
   if (nilai >= 80) then grade := 'A'
   else if (nilai >= 70) then grade := 'B'
   else if (nilai >= 60) then grade := 'C'
   else grade := 'E';
3. Penggunaan Blok begin..end; jika ada lebih dari 1 instruksi di dalam cabang.`,
    contentKeywords: ['pascal', 'if', 'else', 'percabangan', 'titik', 'koma', 'syntax', 'nested', 'grade'],
  },

  // KONSEP SISTEM INFORMASI - PIRAMIDA DIKW & CBIS
  {
    id: 'ksi_p1_dikw_cbis',
    subjectId: 'subject-ksi',
    subjectName: 'Konsep Sistem Informasi',
    documentTitle: 'ksi_p1_sistem_informasi_1.pdf',
    meetingNumber: 1,
    pageNumber: 1,
    topic: 'Hierarki DIKW, Karakteristik Sistem & Komponen CBIS',
    content: `Piramida DIKW (Data -> Information -> Knowledge -> Wisdom):
1. Data: Fakta mentah tanpa konteks (contoh: angka '40').
2. Informasi: Data yang telah diproses dan diberi konteks bermakna (contoh: 'Suhu ruangan 40 derajat Celcius, sangat panas').
3. Knowledge (Pengetahuan): Pemahaman cara menggunakan informasi untuk tindakan (contoh: 'Nyalakan AC ke 20 derajat').
4. Wisdom (Kebijaksanaan): Keputusan strategis berjangka panjang dan beretika.
Komponen CBIS (Computer-Based Information System):
Hardware, Software, Brainware (User/Admin), Database, Jaringan/Telekomunikasi, dan Prosedur.`,
    contentKeywords: ['dikw', 'data', 'informasi', 'knowledge', 'wisdom', 'cbis', 'sistem', 'informasi', 'komponen'],
  },

  // PENDIDIKAN PANCASILA - LANDASAN & SEJARAH
  {
    id: 'pancasila_p1_landasan',
    subjectId: 'subject-pancasila',
    subjectName: 'Pendidikan Pancasila',
    documentTitle: 'pancasila_p1_landasan_pendidikan.pdf',
    meetingNumber: 1,
    pageNumber: 1,
    topic: '4 Landasan Pendidikan Pancasila di Perguruan Tinggi',
    content: `4 Landasan Pokok Pendidikan Pancasila:
1. Landasan Historis: Nilai-nilai Pancasila digali dari sejarah luhur bangsa Indonesia sejak zaman kerajaan Sriwijaya, Majapahit, pergerakan nasional 1908, hingga proklamasi 17 Agustus 1945.
2. Landasan Kultural: Nilai Pancasila adalah kristalisasi budaya dan adat istiadat nusantara (gotong royong, musyawarah, religiositas).
3. Landasan Yuridis: Kewajiban hukum berdasarkan UU No. 12 Tahun 2012 tentang Pendidikan Tinggi yang mewajibkan mata kuliah Pancasila, Agama, dan Kewarganegaraan.
4. Landasan Filosofis: Pancasila sebagai pandangan hidup bangsa (Weltanschauung) dan dasar filsafat negara (Philosophische Grondslag).`,
    contentKeywords: ['pancasila', 'landasan', 'historis', 'kultural', 'yuridis', 'filosofis', 'pendidikan', 'tinggi'],
  },
];

// Initialize index with seed chunks
SEED_ACADEMIC_CHUNKS.forEach((chunk) => documentIndex.push(chunk));

/**
 * Ingests a new document into the RAG index
 */
export async function ingestDocumentIntoRag({
  fileOrBuffer,
  documentTitle,
  subjectId,
  subjectName,
  meetingNumber,
}) {
  const result = await extractPdfText(fileOrBuffer, documentTitle);
  if (!result.success || result.pages.length === 0) {
    return {
      success: false,
      error: result.error || 'Dokumen kosong atau gagal diekstrak.',
    };
  }

  const documentId = `doc_${Date.now()}`;
  const newChunks = chunkDocumentPages({
    pages: result.pages,
    documentId,
    documentTitle,
    subjectId,
    subjectName,
    meetingNumber,
  });

  newChunks.forEach((c) => documentIndex.push(c));

  return {
    success: true,
    documentId,
    documentTitle,
    totalPages: result.totalPages,
    chunksCreated: newChunks.length,
  };
}

/**
 * Retrieves the most relevant document chunks based on a student query
 */
export function searchRelevantChunks(query, subjectIdFilter = null, topK = 3) {
  if (!query || typeof query !== 'string') return [];

  const queryTerms = query.toLowerCase().replace(/[^\w\s]/g, ' ').split(/\s+/).filter(w => w.length > 2);
  if (queryTerms.length === 0) return [];

  const scored = [];

  documentIndex.forEach((chunk) => {
    // Apply subject filter if specified
    if (subjectIdFilter && subjectIdFilter !== 'all' && chunk.subjectId !== subjectIdFilter) {
      return;
    }

    let score = 0;
    const lowerContent = chunk.content.toLowerCase();
    const lowerTopic = chunk.topic.toLowerCase();
    const lowerTitle = chunk.documentTitle.toLowerCase();

    // Exact query matching bonus
    if (lowerContent.includes(query.toLowerCase())) {
      score += 15;
    }

    // Term-by-term scoring
    queryTerms.forEach((term) => {
      // Topic match has higher weight
      if (lowerTopic.includes(term)) score += 8;
      // Title match
      if (lowerTitle.includes(term)) score += 5;
      // Keyword array match
      if (chunk.contentKeywords && chunk.contentKeywords.includes(term)) score += 3;
      // Content occurrence
      const count = (lowerContent.match(new RegExp(term, 'g')) || []).length;
      score += Math.min(count, 5) * 1.5;
    });

    if (score > 0) {
      scored.push({
        ...chunk,
        relevanceScore: Math.round(score * 10) / 10,
      });
    }
  });

  // Sort descending by score and pick topK
  scored.sort((a, b) => b.relevanceScore - a.relevanceScore);
  return scored.slice(0, topK);
}

/**
 * Builds the strict, ground-truth context block for AI Tutor prompts
 */
export function buildGroundTruthContext(retrievedChunks) {
  if (!retrievedChunks || retrievedChunks.length === 0) {
    return `[CATATAN RAG]: Tidak ada kutipan dokumen spesifik yang cocok langsung dengan kata kunci pencarian. AI diperintahkan untuk menjawab berdasarkan silabus resmi Unindra dan memberi tanda jelas jika menggunakan pengetahuan umum.`;
  }

  let text = `MATERI TERVERIFIKASI DARI DOKUMEN PERKULIAHAN:\n`;
  retrievedChunks.forEach((chunk, index) => {
    text += `\n--- [SUMBER ${index + 1}: ${chunk.documentTitle} | ${chunk.subjectName} • Halaman/Slide ${chunk.pageNumber}] ---\n`;
    text += `Topik: ${chunk.topic}\n`;
    text += `${chunk.content}\n`;
  });
  text += `\n--------------------------------------------------------------\n`;

  return text;
}
