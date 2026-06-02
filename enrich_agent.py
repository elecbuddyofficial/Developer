#!/usr/bin/env python3
"""
ETO Enrich Agent — analyses existing notes, finds gaps vs the docx, and adds missing content.
Run repeatedly: each pass adds whatever was still missing from the previous run.

Quality benchmark: Topic 1 (Alternator) notes — use that level of depth as target.
Every section should have: specific values, regulation references, surveyor Q&A,
memory aids, complete procedures with steps, and comparison tables where applicable.

Usage (run from ETO_Study_App directory):
    python enrich_agent.py T03          # analyse and enrich T03
    python enrich_agent.py T03 --dry    # dry-run: print gap report only, don't write
    python enrich_agent.py T04 T05
    python enrich_agent.py all

Requirements:
    pip install anthropic python-docx
    set ANTHROPIC_API_KEY=sk-ant-...
"""

import sys
import os
import re
import time
from pathlib import Path

try:
    import anthropic
except ImportError:
    sys.exit("ERROR: Run:  pip install anthropic")

try:
    from docx import Document
except ImportError:
    sys.exit("ERROR: Run:  pip install python-docx")

try:
    from agent_utils import (
        DOCX_MAP, TOPIC_NAMES, TOPIC_KEYS,
        find_docx, extract_docx, content_to_text,
        detect_sections, split_by_sections,
    )
except ImportError:
    sys.exit("ERROR: agent_utils.py not found in current directory.")

# --- T01 quality reference (excerpt shown to Claude as benchmark) -------------

T01_QUALITY_SAMPLE = """\
Example of TARGET quality from Topic 1 (Alternator) — match this depth:

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most asked topic in oral exam.</strong> Know the complete excitation chain by heart — every surveyor asks it. PMG -> AVR -> Exciter field -> Exciter armature -> Rotating diodes -> Main field -> Stator output.</div></div>
  <div class="n-h2">3 Machines on One Shaft</div>
  <div class="n-grid-3">
    <div class="n-card" style="border-color:rgba(57,208,216,.3)"><div class="card-title" style="color:var(--cyan)">① PMG — Permanent Magnet Generator</div><div class="card-desc">Permanent magnets on rotor. Output unaffected by main alternator faults. Sole supply to AVR. Eliminates need for residual magnetism to start.</div></div>
    <div class="n-card" style="border-color:rgba(167,139,250,.3)"><div class="card-title" style="color:var(--purple)">② Main Exciter — Reversed Design</div><div class="card-desc"><strong>STATOR</strong> = DC field (from AVR). <strong>ROTOR</strong> = 3-phase AC armature. Reversed vs. normal — output taken on rotating shaft.</div></div>
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">③ Main Alternator — AC Output</div><div class="card-desc">Rotor carries DC (from rotating diodes on shaft). Stator gives 3-phase AC output to main switchboard.</div></div>
  </div>
  <div class="n-h2">SOLAS II-1/Reg 40 — Voltage & Frequency Limits</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Steady State</th><th>Transient</th><th>Recovery</th></tr>
    <tr><td>Voltage</td><td class="hl">±2.5%</td><td class="hl">±20%</td><td class="ok">≤1.5 seconds</td></tr>
    <tr><td>Frequency</td><td class="hl">±5%</td><td class="hl">±10%</td><td class="ok">≤5 seconds</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Kamath, Deswal):</strong> Why is an alternator rated in kVA and not kW?<br><strong>Ideal Answer:</strong> Copper winding losses are I²R — they depend on current, not power factor. kVA = V×I captures the full current flowing and determines heating. The useful output in kW = kVA × power factor, which varies with the connected load.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Governors control kW (active). AVR controls kVAR (reactive). Never adjust the wrong one when sharing load.</div></div>
"""

# --- CSS class reference (same as notes_agent) -------------------------------

CSS_REF = """\
AVAILABLE CSS CLASSES:
  <div class="n-h1" id="s-anchorid">EMOJI Section Title</div>
  <div class="n-h2">Subsection</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Label:</strong> text</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Label:</strong> text</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Label:</strong> text</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Label:</strong> text</div></div>
  <div class="n-formula">FORMULA<div class="label">description</div></div>
  <ol class="n-steps"><li>Step</li></ol>
  <ul class="n-list"><li>Item</li></ul>
  <span class="n-val">specific value</span>
  <div class="n-grid"><div class="n-card"><div class="card-title">T</div><div class="card-val">V</div><div class="card-desc">D</div></div></div>
  <table class="n-table"><tr><th>H</th></tr><tr><td class="hl">orange</td><td class="ok">green</td><td class="bad">red</td></tr></table>
  <p class="n-p">text with <strong>bold</strong> and <span class="n-val">value</span></p>
"""

# --- Prompts -----------------------------------------------------------------

SYSTEM = """\
You are a senior maritime engineering notes auditor and author. Your job is to:
1. Identify what content from a source docx is MISSING from the existing HTML notes.
2. Write rich, exam-quality HTML to fill those gaps.
3. Use Topic 1 (Alternator) notes as the quality and depth benchmark.

You must NEVER omit or paraphrase things that are already in the existing notes.
You only ADD what is missing. Your additions must match or exceed T01 quality:
- Specific numeric values in n-val spans
- Regulations with exact rule numbers (SOLAS Chapter/Reg, IEC 60092, ISM)
- Step-by-step procedures in n-steps
- Comparison tables in n-table
- Surveyor Q&A in n-warn boxes (format: "Surveyor Q (Name): ... Ideal Answer: ...")
- Memory aids in n-ok boxes
- Critical exam content in n-crit boxes

Output: ONLY the new HTML to be appended (no duplicate content, no outer wrapper).
Start directly with the first new section div.
"""


def _gap_prompt(topic_id, topic_name, docx_text, existing_html, dry_run=False):
    mode = "REPORT ONLY (list what is missing — do NOT generate HTML)" if dry_run else \
           "GENERATE HTML for all missing content"
    return f"""\
Topic {topic_id} — {topic_name}

{CSS_REF}

{T01_QUALITY_SAMPLE}

EXISTING NOTES HTML (what is already in the app — do NOT repeat this):
---
{existing_html[:12000]}
{'... [truncated for brevity — there is more existing content]' if len(existing_html) > 12000 else ''}
---

FULL DOCX SOURCE (this is the ground truth — every item here must be in the notes):
---
{docx_text[:18000]}
{'... [truncated — there is more source content]' if len(docx_text) > 18000 else ''}
---

TASK: {mode}

Check for these specific gap types:
1. Content blocks in the docx that have NO corresponding entry in the notes
2. GAP ADDITIONS sections in the docx that appear as bare section titles in notes
   (no content — just a heading with placeholder text)
3. Surveyor Q&A entries in the docx that are missing from notes
   (look for "EXAMINER QUESTION", "IDEAL ANSWER", surveyor names like Kamath/Deswal/Sanjib)
4. Memory aids ("MEMORY AID", "Remember:", green boxes) missing from notes
5. Specific values/formulas in docx not reflected in notes
6. Any section with much less depth in notes than source

{'Output ONLY a concise bullet-point gap report. No HTML.' if dry_run else
 'Output ONLY the new HTML additions. Do not repeat existing content.'}"""


# --- Helpers -----------------------------------------------------------------

def _call_claude(client, user_prompt, max_tokens=10000):
    for attempt in range(3):
        try:
            msg = client.messages.create(
                model="claude-sonnet-4-6",
                max_tokens=max_tokens,
                system=SYSTEM,
                messages=[{"role": "user", "content": user_prompt}],
            )
            return msg.content[0].text.strip()
        except anthropic.RateLimitError:
            wait = 30 * (attempt + 1)
            print(f"      [RATE LIMIT] Waiting {wait}s...")
            time.sleep(wait)
        except anthropic.APIStatusError as e:
            print(f"      [API ERROR] {e.status_code}: {e.message}")
            if attempt == 2:
                raise
            time.sleep(10)
    raise RuntimeError("API failed after 3 attempts")


def _read_existing_notes(topic_id):
    """Read current notes JS file; return the HTML content string or '' if not found."""
    path = Path('data/notes') / f'{topic_id.lower()}_notes.js'
    if not path.exists():
        return ''
    raw = path.read_text(encoding='utf-8')
    # Extract the template literal content between the first ` and last `
    m = re.search(r'window\.loadNotes\([^,]+,\s*`([\s\S]+)`\s*\)\s*;', raw)
    if m:
        return m.group(1)
    # Fallback: try NOTE_HTML assignment pattern (old format)
    m2 = re.search(r'window\.NOTE_HTML\[[^\]]+\]\s*=\s*`([\s\S]+)`\s*;', raw)
    return m2.group(1) if m2 else raw


def _inject_additions(notes_js_path, new_html, topic_id, topic_name):
    """
    Insert new_html into the existing notes JS file, before the Quick Revision section
    (or before the closing </div></div> if no Quick Revision found).
    """
    path = Path(notes_js_path)
    raw = path.read_text(encoding='utf-8')

    # Escape the new HTML for JS template literal
    def esc(s):
        return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

    escaped_new = esc(new_html)

    # Try to insert before the Quick Revision section
    ANCHORS = [
        'id="s-quickrev"',
        'id="s-surveyorqa"',
        'Quick Revision',
        '</div>\n</div>',    # last fallback: before closing tags
    ]

    inserted = False
    for anchor in ANCHORS:
        idx = raw.find(anchor)
        if idx != -1:
            # Find the start of that line
            line_start = raw.rfind('\n', 0, idx) + 1
            raw = raw[:line_start] + '\n' + escaped_new + '\n\n' + raw[line_start:]
            inserted = True
            break

    if not inserted:
        # Append before the final `); close
        raw = raw.rstrip()
        if raw.endswith('`);'):
            raw = raw[:-3] + '\n\n' + escaped_new + '\n`);'
        else:
            raw = raw + '\n\n' + escaped_new

    path.write_text(raw, encoding='utf-8')
    return path


# --- Main processing ---------------------------------------------------------

def process_topic(topic_id, dry_run=False):
    topic_name = TOPIC_NAMES.get(topic_id, topic_id)

    print(f"\n{'='*62}")
    mode_label = "DRY RUN" if dry_run else "ENRICH"
    print(f"  ENRICH AGENT [{mode_label}]  ·  {topic_id}  ·  {topic_name}")
    print(f"{'='*62}")

    # Load docx
    docx_path = find_docx(topic_id)
    if not docx_path:
        print(f"[ERROR] Docx not found for {topic_id}")
        return False

    print(f"[1/4] Reading docx: {docx_path.name} ...")
    content = extract_docx(docx_path)
    docx_text = content_to_text(content)
    print(f"      {len(docx_text):,} chars from docx")

    # Load existing notes
    print(f"[2/4] Reading existing notes ...")
    existing_html = _read_existing_notes(topic_id)
    if not existing_html:
        print(f"      [WARN] No existing notes found for {topic_id}.")
        print(f"             Run notes_agent.py {topic_id} first to generate base notes.")
        print(f"             Proceeding with empty base — will generate full content.")
    else:
        print(f"      {len(existing_html):,} chars in current notes")

    # Ask Claude to find gaps and generate additions
    print(f"[3/4] Analysing gaps with Claude API ...")
    client = anthropic.Anthropic()

    prompt = _gap_prompt(topic_id, topic_name, docx_text, existing_html, dry_run=dry_run)
    result = _call_claude(client, prompt, max_tokens=12000 if not dry_run else 2000)

    if dry_run:
        print(f"\n{'-'*62}")
        print(f"  GAP REPORT for {topic_id} — {topic_name}")
        print(f"{'-'*62}")
        print(result)
        print(f"{'-'*62}")
        return True

    # Check if there's actually any new content
    stripped = result.strip()
    if not stripped or len(stripped) < 50:
        print(f"[OK]  No significant gaps found — notes are already comprehensive.")
        return True

    # Inject additions into the notes file
    print(f"[4/4] Injecting additions into notes file ...")
    notes_path = Path('data/notes') / f'{topic_id.lower()}_notes.js'

    if not notes_path.exists():
        # No existing notes — write the additions as a new notes file via notes_agent
        print(f"      [INFO] No existing notes file — writing additions as new file.")
        notes_path.parent.mkdir(parents=True, exist_ok=True)
        # Wrap in the standard JS format
        def esc(s):
            return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
        tid_lower = topic_id.lower()
        inner = (f'<div class="view" id="view-notes-{tid_lower}">\n'
                 f'<div class="note-doc">\n'
                 f'  <div style="margin-bottom:16px"><button class="anc-btn" onclick="showView(\'notes-picker\')" '
                 f'style="border-color:var(--blue);color:var(--blue)"><- All Topics</button></div>\n'
                 f'  <div class="note-title">\n'
                 f'    <h1>Topic {topic_id[1:]} — {topic_name}</h1>\n'
                 f'    <div class="sub">ETO MMD Oral Examination · Function 5 · Class 2 · Mumbai &amp; Noida</div>\n'
                 f'  </div>\n\n'
                 + stripped
                 + '\n\n</div>\n</div>')
        notes_path.write_text(f'window.loadNotes("{topic_id}", `{esc(inner)}`);\n', encoding='utf-8')
        print(f"[OK]  Created {notes_path}  ({len(stripped):,} chars of new content)")
    else:
        updated = _inject_additions(notes_path, stripped, topic_id, topic_name)
        print(f"[OK]  Updated {updated}  (+{len(stripped):,} chars added)")

    print(f"\n  Tip: run again to find any remaining gaps:")
    print(f"       python enrich_agent.py {topic_id}")
    return True


# --- Entry point -------------------------------------------------------------

def main():
    if len(sys.argv) < 2:
        print(__doc__)
        print(f"Available: {' '.join(sorted(DOCX_MAP))}")
        sys.exit(1)

    key = os.environ.get('ANTHROPIC_API_KEY', '')
    if not key:
        sys.exit(
            "ERROR: ANTHROPIC_API_KEY not set.\n"
            "  Windows: set ANTHROPIC_API_KEY=sk-ant-...\n"
            "  PowerShell: $env:ANTHROPIC_API_KEY='sk-ant-...'"
        )

    raw_args = sys.argv[1:]
    dry_run = '--dry' in raw_args
    args = [a.upper() for a in raw_args if not a.startswith('--')]

    if 'ALL' in args:
        targets = sorted(DOCX_MAP)
    else:
        targets = []
        for a in args:
            if a in DOCX_MAP:
                targets.append(a)
            else:
                print(f"[WARN] Unknown topic '{a}' — skipped")

    if not targets:
        sys.exit("No valid topics specified.")

    print(f"{'DRY RUN — ' if dry_run else ''}Processing {len(targets)} topic(s): {', '.join(targets)}")
    ok = 0
    for t in targets:
        if process_topic(t, dry_run=dry_run):
            ok += 1

    print(f"\nDone: {ok}/{len(targets)} topics processed.")


if __name__ == '__main__':
    main()
