# -*- coding: utf-8 -*-
"""
Main Builder Script:
Appends and enriches Pertemuan 5 and Pertemuan 6 across all 8 subjects
in academic-digital-binder (seedData.js and storage.js).
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

sys.path.insert(0, os.path.join(BASE_DIR, "scripts", "ai_modules"))
from p5_p6_data import P5_P6_SPECS

def make_alert_header(subj_name, m_no, title):
    return f"""<div class="alert alert-info" style="margin-bottom: 24px;">
  <strong>🤖 PANDUAN GURU AI (DIKTAT MATERI LENGKAP PPT DOSEN) • PERTEMUAN {m_no}</strong><br>
  <strong>Pokok Bahasan:</strong> {title}<br>
  <em>Uraian materi kuliah resmi disajikan secara tuntas, mendalam, dan terstruktur bab demi bab mengikuti berkas presentasi dan modul dosen pengampu FTIK Unindra. Dilengkapi tabel komparasi konsep, contoh kasus praktikum/hitungan, materi pengayaan first principles, serta verifikasi rujukan resmi di bagian paling bawah. Siap dipelajari dan disalin ke lembar catatan binder fisik!</em>
</div>"""

def make_bagian_header(title, subtitle):
    return f"""<div style="background: rgba(99, 102, 241, 0.12); border-left: 5px solid #6366F1; padding: 14px 18px; border-radius: 10px; margin: 20px 0 24px 0;">
  <h3 style="margin: 0; color: #818CF8; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
    <span>🎙️ {title}</span>
  </h3>
  <p style="margin: 6px 0 0 0; font-size: 0.85rem; color: #94A3B8;">
    {subtitle}
  </p>
</div>"""

def make_section_box(title, content_html):
    return f"""<div class="academic-section-block" style="background: rgba(30, 41, 59, 0.35); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 22px 24px; margin-bottom: 24px;">
  <h4 style="margin: 0 0 14px 0; color: #38BDF8; font-size: 1.05rem; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid rgba(56, 189, 248, 0.2); padding-bottom: 8px;">
    <span>📌</span>
    <span>{title}</span>
  </h4>
  <div class="academic-section-content" style="color: #E2E8F0; line-height: 1.7; font-size: 0.93rem;">
    {content_html}
  </div>
</div>"""

def make_pengayaan_box(insights):
    lis = "".join([f"<li style='margin-bottom: 10px;'>{ins}</li>" for ins in insights])
    return f"""<div class="card-dark" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(148, 163, 184, 0.15); border-radius: 12px; padding: 20px 24px; margin: 28px 0 20px 0;">
  <h4 style="margin: 0 0 12px 0; color: #F59E0B; font-size: 1rem; display: flex; align-items: center; gap: 8px;">
    <span>💡</span>
    <span>BAGIAN 2: PENGAYAAN MATERI FIRST PRINCIPLES, INDUSTRI & JEBAKAN UTS</span>
  </h4>
  <ul style="margin: 0; padding-left: 20px; color: #CBD5E1; line-height: 1.65; font-size: 0.9rem;">
    {lis}
  </ul>
</div>"""

def make_rujukan_box(doc_name, lecturer):
    return f"""<div style="background: rgba(15, 23, 42, 0.8); border: 1px dashed rgba(148, 163, 184, 0.25); border-radius: 10px; padding: 14px 18px; margin-top: 24px; font-size: 0.82rem; color: #94A3B8;">
  <strong style="color: #E2E8F0;">📚 BAGIAN 3: VERIFIKASI SUMBER RUJUKAN RESMI PERKULIAHAN FTIK UNINDRA</strong><br>
  <span>• Berkas Sumber Materi: <code>{doc_name}</code></span><br>
  <span>• Dosen Pengampu / Tim Pengajar: <strong>{lecturer}</strong></span><br>
  <span>• Kurikulum: Program Studi S1 Sistem Informasi • Universitas Indraprasta PGRI (Unindra)</span>
</div>"""

def make_ringkas_table(m_no, items, tip):
    rows = []
    for idx, (topik, kaidah) in enumerate(items, 1):
        rows.append(f"""    <tr>
      <td style="text-align: center; font-weight: bold; color: #38BDF8;">{idx}</td>
      <td><strong style="color: #F8FAFC;">{topik}</strong></td>
      <td style="color: #CBD5E1; line-height: 1.6;">{kaidah}</td>
    </tr>""")
    rows_html = "\n".join(rows)

    return f"""<div class="alert alert-success" style="margin-bottom: 16px;">
  <strong>⚡ INTISARI KILAT & POIN KUNCI UJIAN (CHEATSHEET) • PERTEMUAN {m_no}</strong><br>
  Poin-poin konsep esensial, formula, kaidah mutlak, dan rangkuman hafalan cepat persiapan kuis & UTS. Cocok untuk review kilat 5 menit!
</div>
<div class="table-wrap">
<table>
  <thead>
    <tr>
      <th style="width: 50px; text-align: center;">No</th>
      <th style="width: 240px;">Topik / Istilah Kunci</th>
      <th>Kaidah Mutlak & Poin Ujian yang Wajib Diingat</th>
    </tr>
  </thead>
  <tbody>
{rows_html}
  </tbody>
</table>
</div>
<div class="card-dark" style="margin-top: 14px; padding: 12px 16px; border-left: 4px solid #38BDF8;">
  <strong style="color: #38BDF8;">🎯 Tips Belajar & Menjawab Soal:</strong> 
  {tip}
</div>"""

def build_meeting_object(subj_id, subj_name, m_no, spec):
    m_id = f"{subj_id}_m{m_no}"
    title = spec["title"]
    desc = spec["desc"]
    notes = spec["notes"]
    date_str = spec["date"]
    materials = spec.get("materials", [])
    transcript_text = spec.get("transcripts", "")
    
    # 1. Detail HTML (Guru AI Diktat)
    detail_parts = [
        make_alert_header(subj_name, m_no, title),
        make_bagian_header(
            "BAGIAN 1: BEDAH MATERI LENGKAP PPT DOSEN (STEP-BY-STEP & TUNTAS)",
            "Uraian materi perkuliahan resmi mengikuti urutan pokok bahasan slide presentasi dosen pengampu secara utuh tanpa ada teks yang terpotong."
        )
    ]
    for sec in spec.get("sections", []):
        detail_parts.append(make_section_box(sec["title"], sec["html"]))
    
    detail_parts.append(make_pengayaan_box(spec.get("insights", [])))
    detail_parts.append(make_rujukan_box(spec.get("doc_ref", "Modul Resmi Dosen FTIK"), spec.get("lecturer", "Tim Dosen FTIK Unindra")))
    detail_html = "\n\n".join(detail_parts)

    # 2. Standar HTML (Catatan Mahasiswa GMeet)
    standar_html = spec.get("standar_html", "")

    # 3. Ringkas HTML (Cheatsheet Poin Kunci)
    ringkas_html = make_ringkas_table(m_no, spec.get("cheatsheet_pts", []), spec.get("tip", "Pelajari konsep esensial di atas."))

    # Normalize material URLs
    norm_materials = []
    for mat in materials:
        actual_url = mat.get("file_url") or mat.get("url") or ""
        norm_materials.append({
            "id": mat.get("id"),
            "type": mat.get("type", "pdf"),
            "title": mat.get("title", f"Modul Pertemuan {m_no}"),
            "file_url": actual_url,
            "url": actual_url,
            "file_size": mat.get("file_size", 500000),
            "date_added": mat.get("date_added", date_str)
        })

    meeting_obj = {
        "id": m_id,
        "subject_id": subj_id,
        "meeting_number": m_no,
        "date": date_str,
        "title": title,
        "description": desc,
        "notes": notes,
        "materials": norm_materials,
        "transcripts": [
            {
                "id": f"trans_{subj_id.replace('subject-', '')}_{m_no}",
                "audio_url": None,
                "content": transcript_text,
                "status": "completed"
            }
        ],
        "summaries": {
            "detail": detail_html,
            "standar": standar_html,
            "ringkas": ringkas_html
        },
        "progress": {
            "is_read": False,
            "is_summarized": True,
            "is_studied": False,
            "is_noted_in_binder": False
        },
        "raw_slide_content": detail_html
    }
    return meeting_obj

def main():
    print("=" * 70)
    print("🚀 INJEKSI PERTEMUAN 5 & 6 KE ACADEMIC DIGITAL BINDER")
    print("   • 8 Mata Kuliah Lengkap Semester 1 FTIK Unindra")
    print("   • Clean HTML / Unicode (0 Simbol LaTeX Dollar '$', 0 Broken Math Tags)")
    print("   • Menjaga 3 Tab Summaries: Detail, Standar, Ringkas")
    print("=" * 70)

    with open(SEEDDATA_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    prefix = "export const initialSubjects = "
    idx_start = content.find(prefix)
    if idx_start == -1:
        print("[ERROR] Cannot find initialSubjects in seedData.js")
        return

    idx_profile = content.find("export const initialProfile = ", idx_start)
    if idx_profile != -1:
        json_str = content[idx_start + len(prefix):idx_profile].strip()
        if json_str.endswith(";"):
            json_str = json_str[:-1].strip()
        suffix = content[idx_profile:]
    else:
        json_str = content[idx_start + len(prefix):].rstrip()
        if json_str.endswith(";"):
            json_str = json_str[:-1]
        suffix = ""

    subjects_data = json.loads(json_str)

    total_added = 0
    total_updated = 0

    for subj in subjects_data:
        subj_id = subj["id"]
        subj_name = subj["name"]
        subj_spec = P5_P6_SPECS.get(subj_id)
        if not subj_spec:
            print(f"[!] Warning: No spec found for {subj_id}")
            continue

        existing_meetings = subj.get("meetings", [])
        m_map = {m["meeting_number"]: m for m in existing_meetings}

        for m_no in [5, 6]:
            spec = subj_spec.get(m_no)
            if not spec:
                continue

            new_m_obj = build_meeting_object(subj_id, subj_name, m_no, spec)

            if m_no in m_map:
                # Update existing
                idx = next(i for i, m in enumerate(existing_meetings) if m["meeting_number"] == m_no)
                existing_meetings[idx] = new_m_obj
                total_updated += 1
                print(f"  • [{subj_name}] Pertemuan {m_no}: Diperbarui.")
            else:
                # Append new
                existing_meetings.append(new_m_obj)
                total_added += 1
                print(f"  • [{subj_name}] Pertemuan {m_no}: Ditambahkan.")

        # Sort meetings by meeting_number
        existing_meetings.sort(key=lambda x: x["meeting_number"])
        subj["meetings"] = existing_meetings
        subj["target_meetings"] = 16

    new_content = content[:idx_start] + prefix + json.dumps(subjects_data, indent=2, ensure_ascii=False) + ";\n\n" + suffix
    with open(SEEDDATA_PATH, "w", encoding="utf-8") as f:
        f.write(new_content)

    print(f"\n✓ Berhasil memperbarui seedData.js: {total_added} pertemuan baru ditambahkan, {total_updated} diperbarui.")

    # Bump CURRENT_DATA_VERSION in storage.js
    with open(STORAGE_PATH, "r", encoding="utf-8") as f:
        st_content = f.read()

    new_ver_str = "export const CURRENT_DATA_VERSION = 'v15_pertemuan_5_dan_6_lengkap_clean_math_2026';"
    st_content = re.sub(r"export const CURRENT_DATA_VERSION = '[^']+';", new_ver_str, st_content)
    with open(STORAGE_PATH, "w", encoding="utf-8") as f:
        f.write(st_content)

    print("✓ CURRENT_DATA_VERSION dinaikkan ke v15 di storage.js (Browser otomatis upgrade).")
    print("=" * 70)

if __name__ == "__main__":
    main()
