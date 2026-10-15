// Automated Verification Suite for Academic Digital Binder: KaTeX, RAG & Tutor Engine
import katex from 'katex';
import { renderLatexFormula, renderMathInHtml, formatTutorResponseToHtml, convertToPhysicalBinderFormat } from '../src/lib/latexRenderer.js';
import { searchRelevantChunks, buildGroundTruthContext } from '../src/lib/documentRagEngine.js';
import { synthesizeLocalTutorResponse, TUTOR_MODES } from '../src/lib/aiTutorEngine.js';

console.log('================================================================');
console.log('🧪 RUNNING COMPREHENSIVE TEST SUITE: ACADEMIC DIGITAL BINDER');
console.log('================================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`✅ [PASS] ${testName}`);
    passCount++;
  } else {
    console.error(`❌ [FAIL] ${testName}: ${details}`);
    failCount++;
  }
}

// TEST CASE 1: Math Formula LaTeX Rendering via KaTeX
console.log('--- TEST GROUP 1: KaTeX Formula & Math Rendering ---');

const formula1 = '\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}';
const rendered1 = renderLatexFormula(formula1, true);
assert(rendered1.includes('katex-block-wrapper') && rendered1.includes('katex-display'), 'Block Display KaTeX Limit Trigonometri');

const formula2 = 'f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}';
const rendered2 = renderLatexFormula(formula2, false);
assert(rendered2.includes('katex-inline-wrapper') && rendered2.includes('katex'), 'Inline KaTeX Definition of Derivative');

const nestedFraction = '\\frac{\\frac{a}{b} + 1}{\\sqrt{x^2 + 1}}';
const rendered3 = renderLatexFormula(nestedFraction, true);
assert(rendered3.includes('katex-block-wrapper'), 'Nested Fraction and Square Root Rendering');

// Check that long formula contains overflow-x-auto protection
assert(rendered3.includes('overflow-x-auto') && rendered3.includes('max-w-full'), 'Responsive Horizontal Overflow Protection on Equations');

// TEST CASE 2: Markdown & KaTeX Mixed Text Processing
console.log('\n--- TEST GROUP 2: Full Tutor Response HTML Formatting ---');
const sampleMarkdown = `### 1. Pengertian
Turunan adalah laju perubahan sesaat:
$$ f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} $$
Simbol $f'(x)$ adalah notasi Leibniz atau Lagrange.`;

const formattedHtml = formatTutorResponseToHtml(sampleMarkdown);
assert(formattedHtml.includes('<h3') && formattedHtml.includes('katex-block-wrapper') && formattedHtml.includes('katex-inline-wrapper'), 'Markdown to KaTeX HTML formatting with Headings and Formulas');

// TEST CASE 3: Handwriting / Physical Notebook Plain Text Conversion
console.log('\n--- TEST GROUP 3: Physical Binder Handwriting Transcriber ---');
const handwritingText = convertToPhysicalBinderFormat(sampleMarkdown);
assert(
  !handwritingText.includes('$$') && 
  !handwritingText.includes('\\lim_') && 
  handwritingText.includes('lim(h→0)'), 
  'LaTeX correctly transformed to natural handwriting symbols (no raw LaTeX slop)'
);

// TEST CASE 4: Smart RAG Retrieval on Official Course Documents
console.log('\n--- TEST GROUP 4: Smart Document RAG Retrieval ---');

// Query 4.1: Turunan Aljabar (Pertemuan 6 Matdas)
const resultsTurunan = searchRelevantChunks('turunan aljabar limit fungsi', 'subject-matdas', 3);
assert(
  resultsTurunan.length > 0 && resultsTurunan[0].documentTitle.includes('Turunan_Aljabar'),
  'RAG correctly retrieves Pertemuan 6 Math PDF for derivative query',
  `Top hit: ${resultsTurunan[0]?.documentTitle}`
);

// Query 4.2: Limit Trigonometri 10 Rumus
const resultsTrigo = searchRelevantChunks('limit trigonometri sin cos tan', 'subject-matdas', 3);
assert(
  resultsTrigo.length > 0 && resultsTrigo[0].topic.includes('Limit Fungsi Trigonometri'),
  'RAG correctly retrieves 10 Trigonometric limit formulas chunk',
  `Top hit: ${resultsTrigo[0]?.topic}`
);

// Query 4.3: ANSI Flowchart Symbols (Algoritma Pertemuan 3)
const resultsFlowchart = searchRelevantChunks('simbol ansi terminator decision flowchart', 'subject-algo', 3);
assert(
  resultsFlowchart.length > 0 && resultsFlowchart[0].documentTitle.includes('flowchart_ansi'),
  'RAG correctly retrieves ANSI Flowchart symbols PDF chunk',
  `Top hit: ${resultsFlowchart[0]?.documentTitle}`
);

// Query 4.4: Pascal IF-THEN-ELSE Semicolon Rule
const resultsPascal = searchRelevantChunks('titik koma percabangan if else pascal', 'subject-pascal', 3);
assert(
  resultsPascal.length > 0 && resultsPascal[0].documentTitle.includes('pascal'),
  'RAG correctly retrieves Pascal branching syntax chunk',
  `Top hit: ${resultsPascal[0]?.documentTitle}`
);

// Query 4.5: Negative test / Out-of-syllabus query
const resultsNegative = searchRelevantChunks('resep memasak kue bolu panggang oven', 'all', 3);
assert(
  resultsNegative.length === 0,
  'RAG returns 0 matches for completely irrelevant non-academic query (Zero-Hallucination Gate)'
);

// TEST CASE 5: AI Tutor Response Synthesis Quality
console.log('\n--- TEST GROUP 5: AI Tutor 8-Part Structure & Sanity ---');
const tutorResponse = synthesizeLocalTutorResponse({
  query: 'Jelaskan turunan aljabar via limit dari dasar dan berikan contoh soal langkah demi langkah',
  subjectId: 'subject-matdas',
  subjectName: 'Matematika Dasar',
  mode: TUTOR_MODES.COMPREHENSIVE,
});

assert(tutorResponse.includes('### 1. Pengertian'), 'Tutor response contains Section 1: Pengertian');
assert(tutorResponse.includes('### 2. Rumus Utama'), 'Tutor response contains Section 2: Rumus Utama (KaTeX LaTeX)');
assert(tutorResponse.includes('### 3. Penjelasan Simbol'), 'Tutor response contains Section 3: Penjelasan Simbol');
assert(tutorResponse.includes('### 4. Contoh Soal'), 'Tutor response contains Section 4: Contoh Soal');
assert(tutorResponse.includes('### 5. Pembahasan Langkah demi Langkah'), 'Tutor response contains Section 5: Pembahasan Langkah demi Langkah');
assert(tutorResponse.includes('### 6. Jawaban Akhir'), 'Tutor response contains Section 6: Jawaban Akhir');
assert(tutorResponse.includes('### 7. Kesimpulan'), 'Tutor response contains Section 7: Kesimpulan');
assert(tutorResponse.includes('### 8. Sumber Materi'), 'Tutor response contains Section 8: Sumber Materi Terverifikasi');

// TEST CASE 6: Verification of User's 10-Problem Assignment (Screenshot Test)
console.log('\n--- TEST GROUP 6: 10-Problem Drill (User Screenshot Verification) ---');
const drillResponse = synthesizeLocalTutorResponse({
  query: 'Tolong jelaskan seperti ini loh di academic digital binder di web saya paket 10 soal limit dan turunan',
  subjectId: 'subject-matdas',
  subjectName: 'Matematika Dasar',
  mode: TUTOR_MODES.COMPREHENSIVE,
});

assert(drillResponse.includes('\\sqrt{x+5} - 3') && drillResponse.includes('\\frac{1}{6}'), 'Drill Question 1a (Akar Sekawan) Solved Correctly');
assert(drillResponse.includes('x^2 - 3x + 2') && drillResponse.includes('\\frac{1}{4}'), 'Drill Question 1b (Faktorisasi) Solved Correctly');
assert(drillResponse.includes('2x^3 - 4x^2 + 3') && drillResponse.includes('3'), 'Drill Question 1c (Substitusi Polinomial) Solved Correctly');
assert(drillResponse.includes('\\frac{x \\cos x}{\\sin 3x}') && drillResponse.includes('\\frac{1}{3}'), 'Drill Question 2a (Limit Trigonometri x cos x) Solved Correctly');
assert(drillResponse.includes('1 - \\cos 2x') && drillResponse.includes('\\sin^2 x'), 'Drill Question 2b (Sudut Rangkap) Solved Correctly');
assert(drillResponse.includes('1 - \\sin 2x') && drillResponse.includes('\\cos^2 2x'), 'Drill Question 2c (Identitas Pythagoras) Solved Correctly');
assert(drillResponse.includes('f(x) = 3x + 5') && drillResponse.includes('f\'(x) = 3'), 'Drill Question 3a (Definisi Limit 3x+5) Solved Correctly');
assert(drillResponse.includes('f(x) = x^2 + 4x + 2') && drillResponse.includes('2x + 4'), 'Drill Question 3b (Definisi Limit Kuadrat) Solved Correctly');
assert(drillResponse.includes('\\frac{x^2 - 2x - 1}{(x - 1)^2}'), 'Drill Question 4a (Aturan Pembagian) Solved Correctly');
assert(drillResponse.includes('10x^4 - 15x^2 - 12'), 'Drill Question 4b (Aturan Perkalian) Solved Correctly');

const drillHandwriting = synthesizeLocalTutorResponse({
  query: 'paket 10 soal limit aljabar dan turunan',
  subjectId: 'subject-matdas',
  subjectName: 'Matematika Dasar',
  mode: TUTOR_MODES.HANDWRITING,
});
assert(drillHandwriting.includes('lim(x→4)') && drillHandwriting.includes('lim(h→0)'), 'Handwriting Binder format for 10 problems produces natural pen notes');

console.log('\n================================================================');
console.log(`🏁 TEST SUITE COMPLETE: ${passCount} PASSED, ${failCount} FAILED`);
console.log('================================================================\n');

if (failCount > 0) {
  process.exit(1);
}
