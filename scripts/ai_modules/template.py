# -*- coding: utf-8 -*-
"""
HTML Template & Renderer for AI Master Teaching Guides
Ensures 100% clean typography, dark code cards matching Screenshot 2,
zero raw LaTeX glitches, and responsive print-to-PDF formatting.
"""

def render_html_page(data):
    """
    Renders an HTML document from a structured module dictionary.
    data format:
    {
        "title": str,
        "subject_name": str,
        "meeting_no": int,
        "date_info": str,
        "lecturer": str,
        "tagline": str,
        "sections": [
            {
                "title": str,
                "content_html": str
            }
        ],
        "references": [str]
    }
    """
    sections_rendered = []
    for idx, sec in enumerate(data.get("sections", []), 1):
        sec_html = f"""
    <div class="section">
      <div class="section-title">BAB {idx}. {sec['title']}</div>
      {sec['content_html']}
    </div>
        """
        sections_rendered.append(sec_html)

    references_rendered = "".join(f"<li>{r}</li>" for r in data.get("references", []))

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
        <span class="badge badge-ai">🤖 PANDUAN GURU AI • ANTIGRAVITY MASTER GUIDE</span>
        <span class="badge badge-gold">SEMESTER 1 • UNINDRA RG</span>
      </div>
      <h1>{data['title']}</h1>
      <h2>{data['subject_name']} • Pertemuan {data['meeting_no']}</h2>
    </div>
    <div style="text-align: right;">
      <div class="meta-text"><strong>Dosen Pengampu:</strong> {data['lecturer']}</div>
      <div class="meta-text"><strong>Sintesis:</strong> Modul Dosen + Catatan Mahasiswa + Analisis AI</div>
      <div class="meta-text"><strong>Edisi:</strong> Akademik 2026/2027 • FTIK Unindra</div>
    </div>
  </div>

  <!-- Sections Content -->
  {"".join(sections_rendered)}

  <!-- Academic References Box -->
  <div class="section" style="margin-top: 12px;">
    <div class="alert alert-info">
      <strong>📚 Daftar Rujukan Literatur Akademik & Standar Industri:</strong>
      <ul style="margin: 3px 0 0 0; padding-left: 16px; font-size: 7.6pt;">
        {references_rendered}
      </ul>
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
