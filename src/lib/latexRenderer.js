// High-Precision LaTeX & Mathematical Expression Renderer
// Ditenagai KaTeX Engine untuk Rendering Rumus Responsif Bebas Horizontal Overflow

import katex from 'katex';

/**
 * Renders a single LaTeX math string using KaTeX with safety fallback
 */
export function renderLatexFormula(formula, isDisplayMode = false) {
  if (!formula || typeof formula !== 'string') return '';
  const clean = formula.trim();
  if (!clean) return '';

  try {
    const rendered = katex.renderToString(clean, {
      displayMode: isDisplayMode,
      throwOnError: false,
      errorColor: '#F87171',
      output: 'htmlAndMathml',
      strict: false,
      trust: false,
    });

    if (isDisplayMode) {
      return `<div class="katex-block-wrapper my-3.5 p-3 sm:p-4 rounded-xl bg-[#0B0F19] border border-indigo-500/25 shadow-md overflow-x-auto max-w-full text-center scrollbar-thin"><div class="inline-block min-w-0">${rendered}</div></div>`;
    }
    return `<span class="katex-inline-wrapper inline-block align-middle mx-0.5 px-1 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[0.95em] overflow-x-auto max-w-full">${rendered}</span>`;
  } catch (err) {
    console.warn('[KaTeX Render Fallback]', clean, err);
    // Graceful fallback representation
    const fallbackText = clean
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
      .replace(/\\rightarrow/g, ' → ')
      .replace(/\\times/g, ' × ')
      .replace(/\\cdot/g, ' · ')
      .replace(/\\le\b|\\leq\b/g, ' ≤ ')
      .replace(/\\ge\b|\\geq\b/g, ' ≥ ')
      .replace(/\\ne\b|\\neq\b/g, ' ≠ ')
      .replace(/\\pm\b/g, ' ± ')
      .replace(/\\infty/g, ' ∞ ')
      .replace(/\\sqrt\{([^}]+)\}/g, '√($1)');

    if (isDisplayMode) {
      return `<div class="font-mono text-sm my-2 p-3 bg-slate-900 border border-white/10 rounded-lg text-cyan-300 overflow-x-auto max-w-full">${fallbackText}</div>`;
    }
    return `<span class="font-mono text-xs px-1.5 py-0.5 bg-slate-800 text-cyan-300 rounded border border-white/10">${fallbackText}</span>`;
  }
}

/**
 * Scans HTML content and replaces LaTeX delimiters with true KaTeX elements:
 * 1. Block math: $$ ... $$ and \[ ... \]
 * 2. Inline math: $ ... $ and \( ... \)
 */
export function renderMathInHtml(rawHtml) {
  if (!rawHtml || typeof rawHtml !== 'string') return '';
  let content = rawHtml;

  // 1. Process Block Math: \[ ... \]
  content = content.replace(/\\\[([\s\S]*?)\\\]/g, (_, formula) => {
    return renderLatexFormula(formula, true);
  });

  // 2. Process Block Math: $$ ... $$
  content = content.replace(/\$\$([\s\S]*?)\$\$/g, (_, formula) => {
    return renderLatexFormula(formula, true);
  });

  // 3. Process Inline Math: \( ... \)
  content = content.replace(/\\\(([\s\S]*?)\\\)/g, (_, formula) => {
    return renderLatexFormula(formula, false);
  });

  // 4. Process Inline Math: $ ... $ (exclude currency patterns like $100 or standalone $)
  content = content.replace(/(?<!\\|\$)\$([^$\n\r]+?)\$(?!\$)/g, (match, formula) => {
    // Avoid false positives like "$50 to $100" or empty
    if (/^\s*\d+([.,]\d+)?\s*$/.test(formula)) return match;
    return renderLatexFormula(formula, false);
  });

  // 5. Clean up any loose mathematical symbols leaking outside tags
  content = content
    .replace(/\\rightarrow/g, ' → ')
    .replace(/\\times/g, ' × ')
    .replace(/\\cdot/g, ' · ')
    .replace(/\\le\b|\\leq\b/g, ' ≤ ')
    .replace(/\\ge\b|\\geq\b/g, ' ≥ ')
    .replace(/\\ne\b|\\neq\b/g, ' ≠ ')
    .replace(/\\pm\b/g, ' ± ')
    .replace(/\\infty/g, ' ∞ ');

  return content;
}

/**
 * Transforms Markdown text (such as AI Tutor responses) into beautifully formatted HTML
 * with full KaTeX math support, code blocks, lists, and headings.
 */
export function formatTutorResponseToHtml(markdownText) {
  if (!markdownText || typeof markdownText !== 'string') return '';
  let text = markdownText;

  // Protect code blocks before math processing
  const codeBlocks = [];
  text = text.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
    codeBlocks.push({ lang, code });
    return placeholder;
  });

  // Protect inline code
  const inlineCodes = [];
  text = text.replace(/`([^`\n]+)`/g, (_, code) => {
    const placeholder = `__INLINE_CODE_${inlineCodes.length}__`;
    inlineCodes.push(code);
    return placeholder;
  });

  // Process LaTeX math in text
  text = renderMathInHtml(text);

  // Process Headings
  text = text
    .replace(/^### (.*$)/gim, '<h3 class="text-base sm:text-lg font-bold text-indigo-400 mt-5 mb-2.5 pb-1 border-b border-indigo-500/20 flex items-center gap-2">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-lg sm:text-xl font-extrabold text-white mt-6 mb-3 pb-1.5 border-b border-white/10 flex items-center gap-2">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-xl sm:text-2xl font-black text-white mt-7 mb-4 pb-2 border-b-2 border-indigo-500 flex items-center gap-2">$1</h1>');

  // Process Bold and Italic
  text = text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic text-slate-300">$1</em>');

  // Process Blockquotes
  text = text.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-indigo-500 bg-indigo-950/20 px-3.5 py-2 my-2.5 rounded-r-lg text-slate-200 italic">$1</blockquote>');

  // Process Horizontal Rules
  text = text.replace(/^---$/gim, '<hr class="my-4 border-white/10" />');

  // Process Unordered Lists
  text = text.replace(/^\s*[-*]\s+(.*$)/gim, '<li class="ml-4 list-disc text-slate-200 my-1 leading-relaxed">$1</li>');

  // Process Ordered Lists (1. 2. etc)
  text = text.replace(/^\s*(\d+)\.\s+(.*$)/gim, '<li class="ml-4 list-decimal text-slate-200 my-1.5 leading-relaxed"><span class="font-semibold text-indigo-300">$1.</span> $2</li>');

  // Process Paragraphs
  const lines = text.split('\n\n');
  text = lines
    .map(block => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      if (
        trimmed.startsWith('<h1') ||
        trimmed.startsWith('<h2') ||
        trimmed.startsWith('<h3') ||
        trimmed.startsWith('<li') ||
        trimmed.startsWith('<blockquote') ||
        trimmed.startsWith('<div') ||
        trimmed.startsWith('<hr')
      ) {
        return trimmed;
      }
      return `<p class="my-2.5 text-slate-200 leading-relaxed text-sm sm:text-base">${trimmed.replace(/\n/g, '<br />')}</p>`;
    })
    .join('\n');

  // Restore Inline Code
  inlineCodes.forEach((code, idx) => {
    text = text.replace(`__INLINE_CODE_${idx}__`, `<code class="font-mono text-xs px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 border border-white/10">${escapeHtml(code)}</code>`);
  });

  // Restore Code Blocks
  codeBlocks.forEach(({ lang, code }, idx) => {
    const formatted = `<div class="my-3.5 rounded-xl overflow-hidden border border-white/10 bg-[#090D16] shadow-lg max-w-full">
      <div class="px-3.5 py-1.5 bg-slate-900 border-b border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span class="uppercase tracking-wider font-semibold text-indigo-400">${lang || 'CODE'}</span>
        <span>Unindra Editor</span>
      </div>
      <pre class="p-3.5 overflow-x-auto text-xs font-mono text-slate-200 leading-relaxed scrollbar-thin"><code>${escapeHtml(code.trim())}</code></pre>
    </div>`;
    text = text.replace(`__CODE_BLOCK_${idx}__`, formatted);
  });

  return text;
}

/**
 * Converts rich mathematical text into ultra-clean plain text
 * specifically structured for handwriting into a physical paper binder.
 */
export function convertToPhysicalBinderFormat(markdownOrHtml) {
  if (!markdownOrHtml || typeof markdownOrHtml !== 'string') return '';
  let str = markdownOrHtml;

  // Strip HTML tags if any
  str = str.replace(/<[^>]+>/g, ' ');

  // Transform LaTeX symbols into natural handwriting symbols
  str = str
    .replace(/\\int_\{([^}]+)\}\^\{([^}]+)\}/g, '∫[bawah: $1, atas: $2] ')
    .replace(/\\int/g, '∫ ')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1) / ($2)')
    .replace(/\\lim_\{([^}]+)\}/g, (_, inner) => {
      const cleanInner = inner.replace(/\\to|\\rightarrow/g, '→').replace(/\s+/g, '');
      return `lim(${cleanInner}) `;
    })
    .replace(/\\to|\\rightarrow/g, ' → ')
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    .replace(/\\times/g, ' × ')
    .replace(/\\cdot/g, ' · ')
    .replace(/\\le\b|\\leq\b/g, ' ≤ ')
    .replace(/\\ge\b|\\geq\b/g, ' ≥ ')
    .replace(/\\ne\b|\\neq\b/g, ' ≠ ')
    .replace(/\\pm\b/g, ' ± ')
    .replace(/\\infty/g, '∞')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\theta/g, 'θ')
    .replace(/\\Delta/g, 'Δ')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\$\$/g, '')
    .replace(/\$/g, '');

  // Clean Markdown formatting for clean handwriting
  str = str
    .replace(/^### (.*$)/gim, '\n[ $1 ]\n')
    .replace(/^## (.*$)/gim, '\n=== $1 ===\n')
    .replace(/^# (.*$)/gim, '\n##############################\n$1\n##############################\n')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return str;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
