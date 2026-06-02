#!/usr/bin/env python3
"""
ETO Notes Agent — generates rich, exam-quality HTML study notes from .docx source files.
Ensures 100% content coverage and adds exam-critical depth (regulations, values, procedures).

Usage (run from ETO_Study_App directory):
    python notes_agent.py T03
    python notes_agent.py T04 T05
    python notes_agent.py all

Requirements:
    pip install anthropic python-docx
    set ANTHROPIC_API_KEY=sk-ant-...
"""

import sys
import os
import re
import time
from pathlib import Path

# --- Dependency checks -------------------------------------------------------

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

# --- CSS class reference (injected into every prompt) ------------------------

CSS_REF = """
AVAILABLE CSS CLASSES — use exactly as shown:

SECTION HEADERS (always give a short lowercase id for anchors):
  <div class="n-h1" id="s-anchorid">EMOJI Section Title</div>
  <div class="n-h2">Subsection or Sub-heading</div>

CALLOUT BOXES (icon div + body div):
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Label:</strong> text</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Label:</strong> text</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Label:</strong> text</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Label:</strong> text</div></div>

FORMULA BOX:
  <div class="n-formula">FORMULA = expression<div class="label">Variable · description · here</div></div>

NUMBERED PROCEDURE:
  <ol class="n-steps"><li>Step one text</li><li>Step two text</li></ol>

BULLET LIST:
  <ul class="n-list"><li><strong>Item:</strong> description</li></ul>

INLINE VALUE HIGHLIGHT (use for specific numbers/codes):
  <span class="n-val">440V</span>  <span class="n-val">IEC 60092</span>

TWO-COLUMN CARD GRID:
  <div class="n-grid">
    <div class="n-card">
      <div class="card-title">TITLE</div>
      <div class="card-val">Key value or name</div>
      <div class="card-desc">Description text.</div>
    </div>
    ...
  </div>

THREE-COLUMN CARD GRID: same but class="n-grid-3"

COMPARISON / DATA TABLE:
  <table class="n-table">
    <tr><th>Col1</th><th>Col2</th><th>Col3</th></tr>
    <tr><td>val</td><td class="hl">orange highlight</td><td class="ok">green good</td></tr>
    <!-- td colour classes: hl=orange, ok=green, bad=red -->
  </table>

PARAGRAPH:
  <p class="n-p">Text. Use <strong>bold</strong> for key terms and <span class="n-val">values</span>.</p>
"""

# --- Prompts -----------------------------------------------------------------

SYSTEM = """\
You are an expert maritime engineering author producing HTML study notes for Indian ETO \
(Electro-Technical Officer) candidates sitting their MMD Class 2 oral examination \
(Function 5). Your output will be rendered inside a styled web app.

Rules that must NEVER be broken:
1. Every fact, value, formula, procedure, comparison, and regulation that appears in \
the source content MUST appear in the output — nothing omitted.
2. Mention specific regulation numbers / year when they appear \
(e.g. SOLAS II-1/Reg 42, IEC 60092-301, ISM Code Chapter 10).
3. Mark truly exam-critical content with n-crit (red box) — especially \
anything labelled "ALL surveyors ask" or "MOST ASKED" in the source.
4. Mark safety procedures with n-warn (orange box).
5. Every important numeric value must be placed in <span class="n-val">...</span>.
6. Every mathematical formula must go in a <div class="n-formula"> box.
7. All step-by-step procedures become <ol class="n-steps">.
8. All comparison tables become <table class="n-table">.
9. Include the surveyor names exactly as they appear in the source \
(they tell the student who asks which question).
10. End every major section with a memory-aid n-ok box if one appears in the source.
11. Output PURE HTML only — no markdown, no code fences, no JS, no outer wrapper divs.
"""


def _section_prompt(topic_id, topic_name, sec_title, source_text):
    return f"""\
Generate comprehensive HTML notes for:
  Topic {topic_id} — {topic_name}
  Section: "{sec_title}"

{CSS_REF}

SOURCE CONTENT (include EVERY item — nothing skipped):
---
{source_text}
---

Start with:
  <div class="n-h1" id="s-{re.sub(r'[^a-z0-9]', '-', sec_title.lower())[:24].strip('-')}">EMOJI {sec_title}</div>

Then produce the full, rich HTML for this section using all appropriate CSS classes.
Depth requirement: for every concept, include WHY it matters to a ship's ETO, \
typical shipboard values, and relevant regulatory references.
Output HTML only."""


def _final_section_prompt(topic_id, topic_name, source_text):
    """Prompt for a combined Quick Revision + Surveyor Q&A closing section."""
    return f"""\
Generate a closing "Quick Revision & Surveyor Q&A" section for:
  Topic {topic_id} — {topic_name}

{CSS_REF}

SOURCE (use any revision points, memory aids, surveyor questions from this):
---
{source_text}
---

Structure:
1. <div class="n-h1" id="s-quickrev">📝 Quick Revision — {topic_name}</div>
   - n-crit box: list the 8-12 most exam-critical facts / values to memorise
   - n-ok box: top 3-5 memory aids from the source
2. <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&A — Typical Oral Questions</div>
   - n-warn box for each surveyor question from the source, showing the ideal answer
Output HTML only."""


# --- Core generation function ------------------------------------------------

def _call_claude(client, user_prompt, max_tokens=8000):
    """Single API call with simple retry on overload."""
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
    raise RuntimeError("Claude API failed after 3 attempts")


# --- HTML assembly -----------------------------------------------------------

def _escape_for_template_literal(html):
    """Escape backticks and ${...} so the string is safe inside JS template literal."""
    return html.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')


def _extract_anchor_ids(html_fragment):
    """Return list of (anchor_id, label) from n-h1 elements in an HTML fragment."""
    results = []
    for m in re.finditer(r'<div class="n-h1"[^>]*id="([^"]+)"[^>]*>(?:[^<]*<[^/][^>]*>)*?([^<]+)', html_fragment):
        anchor = m.group(1)
        raw_label = re.sub(r'[^A-Za-z0-9 &\-]', '', m.group(2)).strip()
        label = ' '.join(raw_label.split()[:3])  # first 3 words
        results.append((anchor, label))
    # Simpler fallback
    if not results:
        for m in re.finditer(r'id="(s-[^"]+)"', html_fragment):
            results.append((m.group(1), m.group(1).replace('s-', '').replace('-', ' ').title()))
    return results


def _build_notes_js(topic_id, topic_name, sections_html, anchors):
    """Wrap section HTML in the full notes view and JS loadNotes() call."""
    tid_lower = topic_id.lower()
    topic_num = topic_id[1:]   # "03" from "T03"

    anchor_btns = '\n    '.join(
        f'<button class="anc-btn" onclick="jumpTo(\'{aid}\')">{lbl}</button>'
        for aid, lbl in anchors
    )

    body = '\n\n'.join(sections_html)

    inner = f"""<div class="view" id="view-notes-{tid_lower}">
<div class="note-doc">
  <div style="margin-bottom:16px"><button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)"><- All Topics</button></div>
  <div class="note-title">
    <h1>Topic {topic_num} — {topic_name}</h1>
    <div class="sub">ETO MMD Oral Examination · Function 5 · Class 2 · Mumbai &amp; Noida</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Function 5 · ETO</span>
      <span class="tag tag-purple">Mumbai &amp; Noida MMD</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    {anchor_btns}
  </div>

{body}

</div>
</div>"""

    escaped = _escape_for_template_literal(inner)
    return f'window.loadNotes("{topic_id}", `{escaped}`);\n'


# --- Main processing function -------------------------------------------------

def process_topic(topic_id):
    print(f"\n{'='*62}")
    print(f"  NOTES AGENT  ·  {topic_id}  ·  {TOPIC_NAMES.get(topic_id, '?')}")
    print(f"{'='*62}")

    docx_path = find_docx(topic_id)
    if not docx_path:
        print(f"[ERROR] Docx not found for {topic_id}. Looked in: {DOCX_MAP.get(topic_id)}")
        return False

    print(f"[1/5] Reading {docx_path.name} ...")
    content = extract_docx(docx_path)
    print(f"      {len(content)} content blocks extracted")

    print(f"[2/5] Detecting sections ...")
    raw_sections = detect_sections(content)
    sections = split_by_sections(content, raw_sections)
    print(f"      {len(sections)} sections: {[s[1][:28] for s in sections]}")

    print(f"[3/5] Generating HTML with Claude API ...")
    client = anthropic.Anthropic()

    sections_html = []
    all_anchors = []
    full_text = content_to_text(content)

    for i, (sec_num, sec_title, sec_content) in enumerate(sections):
        src = content_to_text(sec_content)
        if not src.strip():
            continue

        print(f"      [{i+1}/{len(sections)}] {sec_title[:52]} ...")

        html = _call_claude(client, _section_prompt(topic_id, TOPIC_NAMES[topic_id], sec_title, src))
        sections_html.append(html)
        all_anchors.extend(_extract_anchor_ids(html))

    # Generate Quick Revision + Surveyor Q&A closing section
    print(f"      Generating Quick Revision & Surveyor Q&A ...")
    closing = _call_claude(client, _final_section_prompt(topic_id, TOPIC_NAMES[topic_id], full_text), max_tokens=4000)
    sections_html.append(closing)
    all_anchors.extend(_extract_anchor_ids(closing))

    # Deduplicate anchors
    seen = set()
    unique_anchors = []
    for a in all_anchors:
        if a[0] not in seen:
            unique_anchors.append(a)
            seen.add(a[0])

    print(f"[4/5] Assembling output ...")
    js = _build_notes_js(topic_id, TOPIC_NAMES[topic_id], sections_html, unique_anchors)

    print(f"[5/5] Writing file ...")
    out = Path('data/notes') / f'{topic_id.lower()}_notes.js'
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(js, encoding='utf-8')

    char_count = len(js)
    print(f"[OK]  {out}  ({char_count:,} chars, ~{char_count // 4:,} tokens)")
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

    args = [a.upper() for a in sys.argv[1:]]

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

    print(f"Processing {len(targets)} topic(s): {', '.join(targets)}")
    ok = 0
    for t in targets:
        if process_topic(t):
            ok += 1

    print(f"\nDone: {ok}/{len(targets)} topics generated.")
    if ok < len(targets):
        print("Check errors above for failed topics.")


if __name__ == '__main__':
    main()
