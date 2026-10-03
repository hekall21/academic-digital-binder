# -*- coding: utf-8 -*-
"""
HTML Template & Renderer for AI Master Teaching Guides
Ensures 100% clean typography, dark code cards, zero raw LaTeX glitches,
and responsive print-to-PDF formatting.
Explicitly divides content into:
  - BAGIAN 1: 🎙️ BEDAH & PENJELASAN LENGKAP PPT DOSEN (STEP-BY-STEP)
  - BAGIAN 2: 💡 TAMBAHAN MATERI, INSIGHT & SARAN GURU AI (PENGAYAAN)
  - BAGIAN 3: 📚 SUMBER DOKUMEN & RUJUKAN RESMI DOSEN
"""

def render_html_page(data):
    sections_rendered = []
    for idx, sec in enumerate(data.get("sections", []), 1):
        sec_html = f"""
    <div class="section">
      <div class="section-title">BAB {idx}. {sec['title']}</div>
      {sec['content_html']}
    </div>
        """
        sections_rendered.append(sec_html)

    ai_insights_rendered = []
    if data.get("ai_insights"):
        for idx, ai_sec in enumerate(data.get("ai_insights", []), 1):
            ai_html = f"""
    <div class="section">
      <div class="section-title section-title-ai">PENGAYAAN {idx}. {ai_sec['title']}</div>
      {ai_sec['content_html']}
    </div>
            """
            ai_insights_rendered.append(ai_html)

    references_rendered = "".join(f"<li>{r}</li>" for r in data.get("references", []))
    doc_fn = data.get('doc_filename', 'Modul Resmi Perkuliahan FTIK Unindra')
    slide_cnt = data.get('slide_count', '')

    ai_part_html = ""
    if ai_insights_rendered:
        ai_part_html = f"""
  <!-- Bagian 2: Tambahan Materi & Saran Guru AI -->
  <div style="background: #ecfdf5; border-left: 4px solid #059669; padding: 7px 12px; border-radius: 5px; margin: 16px 0 10px 0;">
    <strong style="color: #065f46; font-size: 9pt;">💡 BAGIAN 2: TAMBAHAN MATERI, INSIGHT & SARAN GURU AI (PENGAYAAN)</strong><br>
    <span style="font-size: 7.6pt; color: #047857;">Materi pengayaan di luar slide: intuisi first principles, relevansi industri, tips belajar & mencatat, serta bedah jebakan UTS.</span>
  </div>
  {"".join(ai_insights_rendered)}
        """

    return f"""<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>{data['title']} - Panduan Guru AI Antigravity</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

    @page {{
      size: A4;
      margin: 12mm 14mm;
    }}

    * {{
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }}

    body {{
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      color: #0f172a;
      line-height: 1.48;
      font-size: 8.8pt;
      margin: 0;
      background: #ffffff;
    }}

    .header-container {{
      border-bottom: 2.5px solid #2563eb;
      padding-bottom: 8px;
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }}

    .badge-wrap {{
      display: flex;
      gap: 6px;
      margin-bottom: 4px;
    }}

    .badge {{
      background: #dbeafe;
      color: #1d4ed8;
      padding: 2.5px 8px;
      border-radius: 4px;
      font-size: 7.2pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }}

    .badge-ai {{
      background: #ecfdf5;
      color: #047857;
      border: 1px solid #a7f3d0;
    }}

    .badge-gold {{
      background: #fef3c7;
      color: #b45309;
      border: 1px solid #fde68a;
    }}

    h1 {{
      font-size: 13.5pt;
      font-weight: 800;
      color: #0f172a;
      margin: 0 0 2px 0;
      letter-spacing: -0.3px;
    }}

    h2 {{
      font-size: 9.8pt;
      font-weight: 600;
      color: #2563eb;
      margin: 0;
    }}

    .meta-text {{
      font-size: 7.8pt;
      color: #64748b;
      margin-top: 3px;
    }}

    .section {{
      margin-bottom: 12px;
      page-break-inside: avoid;
    }}

    .section-title {{
      font-size: 9.8pt;
      font-weight: 800;
      color: #0f172a;
      border-left: 3.5px solid #2563eb;
      padding-left: 7px;
      margin: 10px 0 6px 0;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }}

    .section-title-ai {{
      border-left-color: #059669;
      color: #065f46;
    }}

    .sub-title {{
      font-size: 8.8pt;
      font-weight: 700;
      color: #1e293b;
      margin: 6px 0 3px 0;
    }}

    .card {{
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 8px 10px;
      margin-bottom: 7px;
    }}

    .card-accent {{
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
    }}

    .card-dark {{
      background: #090d16;
      border: 1px solid #1e293b;
      color: #e2e8f0;
      border-radius: 8px;
      padding: 10px 12px;
      margin: 6px 0;
      box-shadow: 0 4px 14px -2px rgba(0, 0, 0, 0.4);
    }}

    .grid-2 {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }}

    .grid-3 {{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 8px;
    }}

    table {{
      width: 100%;
      border-collapse: collapse;
      font-size: 7.9pt;
      margin: 6px 0 8px 0;
      border: 1px solid #cbd5e1;
    }}

    th, td {{
      border: 1px solid #cbd5e1;
      padding: 5px 8px;
      text-align: left;
      vertical-align: middle;
    }}

    th {{
      background: #0f172a;
      font-weight: 700;
      color: #ffffff;
      font-size: 7.8pt;
      letter-spacing: 0.3px;
      border-bottom: 2px solid #2563eb;
    }}

    tr:nth-child(even) td {{
      background: #f8fafc;
    }}

    td code {{
      background: #eff6ff;
      color: #1e40af;
      border: 1px solid #bfdbfe;
      padding: 1px 4px;
      border-radius: 3px;
      font-size: 7.6pt;
    }}

    pre, code {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.8pt;
    }}

    code {{
      background: #e2e8f0;
      color: #0f172a;
      padding: 1px 3px;
      border-radius: 3px;
      font-weight: 600;
    }}

    pre {{
      background: #090d16;
      color: #e2e8f0;
      padding: 9px 12px;
      border-radius: 6px;
      margin: 5px 0 7px 0;
      line-height: 1.4;
      border: 1px solid #1e293b;
      overflow: hidden;
      white-space: pre-wrap;
    }}

    pre code {{
      background: transparent;
      padding: 0;
      color: inherit;
    }}

    .code-kw {{ color: #f43f5e; font-weight: bold; }}
    .code-fn {{ color: #38bdf8; font-weight: bold; }}
    .code-str {{ color: #4ade80; }}
    .code-num {{ color: #fbbf24; }}
    .code-cmt {{ color: #94a3b8; font-style: italic; }}
    .code-type {{ color: #c084fc; font-weight: bold; }}

    .alert {{
      padding: 6px 9px;
      border-radius: 5px;
      font-size: 7.9pt;
      margin: 5px 0;
      border-left: 3.5px solid;
    }}

    .alert-info {{ background: #eff6ff; border-color: #3b82f6; color: #1e40af; }}
    .alert-warning {{ background: #fffbeb; border-color: #f59e0b; color: #92400e; }}
    .alert-danger {{ background: #fef2f2; border-color: #ef4444; color: #991b1b; }}
    .alert-success {{ background: #f0fdf4; border-color: #10b981; color: #065f46; }}

    ul, ol {{
      margin: 4px 0 6px 0;
      padding-left: 18px;
    }}

    li {{
      margin-bottom: 2.5px;
    }}

    .footer {{
      border-top: 1px solid #cbd5e1;
      padding-top: 5px;
      margin-top: 12px;
      font-size: 7.2pt;
      color: #94a3b8;
      display: flex;
      justify-content: space-between;
    }}
  </style>
</head>
<body>

  <!-- Header Banner -->
  <div class="header-container">
    <div>
      <div class="badge-wrap">
        <span class="badge badge-ai">🤖 PANDUAN GURU AI • BEDAH MODUL & PPT DOSEN</span>
        <span class="badge badge-gold">SEMESTER 1 • UNINDRA RG</span>
      </div>
      <h1>{data['title']}</h1>
      <h2>{data['subject_name']} • Pertemuan {data['meeting_no']}</h2>
    </div>
    <div style="text-align: right;">
      <div class="meta-text"><strong>Dosen Pengampu:</strong> {data['lecturer']}</div>
      <div class="meta-text"><strong>Berkas Sumber:</strong> {doc_fn}</div>
      <div class="meta-text"><strong>Edisi:</strong> Akademik 2026/2027 • FTIK Unindra</div>
    </div>
  </div>

  <!-- Bagian 1: Bedah PPT & Modul Dosen -->
  <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 7px 12px; border-radius: 5px; margin: 10px 0 12px 0;">
    <strong style="color: #1e40af; font-size: 9pt;">🎙️ BAGIAN 1: PENJELASAN & BEDAH MATERI PPT DOSEN (STEP-BY-STEP)</strong><br>
    <span style="font-size: 7.6pt; color: #475569;">Uraian materi kuliah resmi mengikuti urutan slide presentasi dan topik modul dari dosen pengampu.</span>
  </div>

  <!-- Sections Content (Bagian 1) -->
  {"".join(sections_rendered)}

  {ai_part_html}

  <!-- Bagian 3: Dokumen Sumber & Rujukan Resmi -->
  <div class="section" style="margin-top: 14px;">
    <div style="background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 6px; padding: 8px 12px;">
      <strong style="color: #0f172a; font-size: 8.6pt;">📚 BAGIAN 3: SUMBER DOKUMEN & RUJUKAN RESMI DOSEN</strong>
      <div style="font-size: 7.8pt; color: #334155; margin-top: 4px; line-height: 1.5;">
        <div><strong>📁 Berkas Resmi Dosen:</strong> <code>{doc_fn}</code> {f'({slide_cnt})' if slide_cnt else ''}</div>
        <div><strong>👨‍🏫 Dosen Pengampu:</strong> {data['lecturer']} • Program Studi Sistem Informasi FTIK Unindra</div>
        <div style="margin-top: 5px;"><strong>📖 Daftar Rujukan Pustaka & Literatur Standar:</strong></div>
        <ul style="margin: 2px 0 0 14px; padding: 0; font-size: 7.5pt; color: #64748b;">
          {references_rendered}
        </ul>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="footer">
    <span>Academic Digital Binder • Sistem Informasi FTIK Universitas Indraprasta PGRI</span>
    <span>Dokumen Resmi Pembelajaran Mandiri & Persiapan UTS • Dicetak Secara Otomatis</span>
  </div>

</body>
</html>
"""
