# -*- coding: utf-8 -*-
import os
import sys
import re

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

seed_path = r"src/data/seedData.js"
with open(seed_path, "r", encoding="utf-8") as f:
    content = f.read()

print("=" * 60)
print("🔍 AUDIT LAPORAN SINTAKS MATEMATIKA & LATEX ARTIFACTS")
print("=" * 60)

# 1. Search for raw dollar signs ($...$)
dollars = re.findall(r"\$[^$\n]+\$", content)
print(f"[1] Dollar math markers ($...$): {len(dollars)} ditemukan")
for d in dollars[:20]:
    print("   Artifact:", d)

# 2. Search for LaTeX commands like \frac, \le, \ge, \in, \cdot, \times, etc.
raw_commands = re.findall(r"\\[a-zA-Z]{2,}", content)
unique_cmds = set(raw_commands)
# Filter out common escape sequences like \n, \t, etc.
suspicious_cmds = [c for c in unique_cmds if c not in ["\\n", "\\t", "\\r"]]
print(f"\n[2] Suspicious LaTeX slash commands: {len(suspicious_cmds)} ditemukan")
for sc in suspicious_cmds[:20]:
    print("   Command:", sc)

# 3. Search for raw inequality glitches like $< or $> or &lt; &gt; issues
glitches = re.findall(r"(\$[><=][^$]*\$|\\leq|\\geq|\\frac)", content)
print(f"\n[3] Raw math inequality/fraction glitches: {len(glitches)} ditemukan")
for g in glitches[:20]:
    print("   Glitch:", g)

# 4. Check HTML files in public/materials/ai_html_sources/
html_files = os.listdir("public/materials/ai_html_sources")
total_html_dollars = 0
for hf in html_files:
    if hf.endswith(".html"):
        with open(os.path.join("public/materials/ai_html_sources", hf), "r", encoding="utf-8") as h:
            h_text = h.read()
            h_dollars = re.findall(r"\$[^$\n]+\$", h_text)
            if h_dollars:
                total_html_dollars += len(h_dollars)
                print(f"   [!] In {hf}: {len(h_dollars)} dollar markers found, e.g. {h_dollars[:3]}")

print(f"\nTotal HTML files checked: {len(html_files)}")
print(f"Total HTML dollar math markers: {total_html_dollars}")
print("=" * 60)
