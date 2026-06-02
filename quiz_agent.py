#!/usr/bin/env python3
"""
ETO Quiz Agent — generates 30+ MCQ questions per subtopic from .docx source files.
Covers: regulations (SOLAS/MARPOL/IEC/ISM), specific values, formulas,
procedures, troubleshooting, and comparisons.

Usage (run from ETO_Study_App directory):
    python quiz_agent.py T03
    python quiz_agent.py T04 T05
    python quiz_agent.py all

Requirements:
    pip install anthropic python-docx
    set ANTHROPIC_API_KEY=sk-ant-...
"""

import sys
import os
import re
import json
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
        detect_sections, split_by_sections, make_cat_code,
    )
except ImportError:
    sys.exit("ERROR: agent_utils.py not found in current directory.")

# --- Prompts -----------------------------------------------------------------

SYSTEM = """\
You are a senior MMD (Mercantile Marine Department) examiner writing MCQ questions \
for ETO Class 2 oral examination preparation. You write questions that test genuine \
understanding — not just surface recall.

MCQ quality rules:
• Each question must test ONE clear concept.
• Wrong options (distractors) must be plausible — common misconceptions or \
  near-correct variants, NOT obviously wrong.
• The "a" field must be the EXACT text of one of the items in the "opts" array.
• Never make the correct answer longer or more detailed than the distractors — \
  length is a give-away. Keep all options approximately equal in length.
• Questions about regulations must cite the specific rule number \
  (e.g. "SOLAS II-1/Reg 42", "IEC 60092-301") in the question or options.
• Calculation questions must include full worked example in the explanation.
• Output ONLY a valid JSON array — no markdown fences, no commentary, nothing else.

EXPLANATION QUALITY — this is critical. Each "exp" field must contain:
1. WHY the correct answer is right — the underlying principle or regulation.
2. WHY at least one or two distractors are wrong — address the most likely confusion.
3. A practical context sentence: how this applies on a real ship, OR a memory aid.
4. If a regulation applies: state the full regulation reference.
5. If a calculation: show the full worked formula with numbers.
Minimum explanation length: 3 sentences. Maximum: 6 sentences. Be precise, not padded.

JSON element format:
{"q": "Question text?",
 "a": "Correct answer text (must match one opt exactly)",
 "opts": ["Option A", "Option B", "Option C", "Option D"],
 "exp": "Full explanation: why correct, why distractors wrong, practical context / regulation / worked calc.",
 "cat": "CAT_CODE"}
"""


def _section_prompt(topic_id, topic_name, sec_title, cat_code, source_text, n=30):
    return f"""\
Topic {topic_id} — {topic_name}
Section: "{sec_title}" (category code: {cat_code})

SOURCE MATERIAL (every item below must be covered by at least one question):
---
{source_text}
---

Generate EXACTLY {n} MCQ questions for this section.

REQUIRED DISTRIBUTION (minimum counts — exceed them if possible):
  • 4 questions — definitions / first principles (the fundamental "what is X" questions)
  • 5 questions — specific values and parameters (exact voltages, currents, \
    time delays, temperatures, percentages, RPM, resistance values)
  • 4 questions — regulations (SOLAS, MARPOL, IEC 60092, ISM Code, \
    STCW) with specific regulation numbers
  • 4 questions — step-by-step procedures \
    ("What is the FIRST / CORRECT step when...")
  • 5 questions — troubleshooting and fault diagnosis \
    ("The ... fails to start. The most likely cause is ...")
  • 3 questions — calculations / formula application \
    (provide numbers, ask for result or unknown)
  • 2 questions — comparisons ("What is the key DIFFERENCE between X and Y")
  • 3 questions — advantages / disadvantages / applications
  • Remaining — any mix of the above types

Set "cat" to "{cat_code}" for every question.
Output ONLY the JSON array."""


# --- Core generation ---------------------------------------------------------

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


def _parse_questions(raw, fallback_cat):
    """Parse JSON array from Claude response; return list of dicts or []."""
    # Strip markdown code fences if present
    raw = re.sub(r'^```[a-z]*\s*', '', raw, flags=re.MULTILINE)
    raw = re.sub(r'\s*```$', '', raw, flags=re.MULTILINE).strip()

    # Find the JSON array even if there is leading/trailing text
    m = re.search(r'(\[[\s\S]+\])', raw)
    if not m:
        print(f"      [WARN] No JSON array found in response.")
        return []

    try:
        questions = json.loads(m.group(1))
    except json.JSONDecodeError as e:
        print(f"      [WARN] JSON parse error: {e}")
        print(f"             First 300 chars: {raw[:300]}")
        return []

    # Validate and clean each question
    valid = []
    for q in questions:
        if not isinstance(q, dict):
            continue
        if not all(k in q for k in ('q', 'a', 'opts', 'exp')):
            continue
        if not isinstance(q['opts'], list) or len(q['opts']) < 2:
            continue
        if q['a'] not in q['opts']:
            # Try to add the answer if missing from opts
            if len(q['opts']) == 3:
                q['opts'].append(q['a'])
            else:
                q['opts'][0] = q['a']   # force it in
        q.setdefault('cat', fallback_cat)
        valid.append(q)

    return valid


# --- CAT_NAMES output --------------------------------------------------------

def _write_cat_names(topic_id, cat_map):
    """
    Write a JSON file mapping cat codes -> full names.
    Used to update CAT_NAMES in index.html.
    """
    out = Path('data') / f'{topic_id.lower()}_categories.json'
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(cat_map, indent=2, ensure_ascii=False), encoding='utf-8')
    return out


# --- Main processing ---------------------------------------------------------

def process_topic(topic_id):
    topic_key = TOPIC_KEYS.get(topic_id, f'{topic_id}_Unknown')
    topic_name = TOPIC_NAMES.get(topic_id, topic_id)

    print(f"\n{'='*62}")
    print(f"  QUIZ AGENT  ·  {topic_id}  ·  {topic_name}")
    print(f"{'='*62}")

    docx_path = find_docx(topic_id)
    if not docx_path:
        print(f"[ERROR] Docx not found for {topic_id}. Looked in: {DOCX_MAP.get(topic_id)}")
        return False

    print(f"[1/4] Reading {docx_path.name} ...")
    content = extract_docx(docx_path)
    print(f"      {len(content)} content blocks extracted")

    print(f"[2/4] Detecting sections ...")
    raw_sections = detect_sections(content)
    sections = split_by_sections(content, raw_sections)
    print(f"      {len(sections)} sections: {[s[1][:28] for s in sections]}")

    print(f"[3/4] Generating questions with Claude API (30+ per section) ...")
    client = anthropic.Anthropic()

    all_questions = []
    cat_map = {}     # cat_code -> full section title

    for i, (sec_num, sec_title, sec_content) in enumerate(sections):
        src = content_to_text(sec_content)
        if len(src.strip()) < 300:
            print(f"      [{i+1}/{len(sections)}] SKIP (too short, {len(src.strip())} chars): {sec_title[:40]}")
            continue

        cat = make_cat_code(sec_title)
        # Ensure unique cat codes across sections
        base_cat = cat
        suffix = 1
        while cat in cat_map and cat_map[cat] != sec_title:
            cat = f"{base_cat}{suffix}"
            suffix += 1
        cat_map[cat] = sec_title.title()

        print(f"      [{i+1}/{len(sections)}] [{cat}] {sec_title[:48]} ...")

        raw = _call_claude(
            client,
            _section_prompt(topic_id, topic_name, sec_title, cat, src, n=30)
        )
        questions = _parse_questions(raw, cat)

        if len(questions) < 25:
            # Retry once if we got too few
            print(f"      [RETRY] Only {len(questions)} Q — retrying for more ...")
            raw2 = _call_claude(
                client,
                _section_prompt(topic_id, topic_name, sec_title, cat, src, n=35)
            )
            q2 = _parse_questions(raw2, cat)
            if len(q2) > len(questions):
                questions = q2

        # Stamp IDs and topic key
        for j, q in enumerate(questions, start=1):
            q['id'] = f"{topic_key}_{cat}_{j:03d}"
            q['topic'] = topic_key

        all_questions.extend(questions)
        print(f"             -> {len(questions)} questions generated")

    print(f"[4/4] Writing output files ...")

    # Write quiz JS
    quiz_out = Path('data/quizzes') / f'{topic_id.lower()}_quiz.js'
    quiz_out.parent.mkdir(parents=True, exist_ok=True)
    js = (
        f'window.loadQuizzes("{topic_key}", '
        + json.dumps(all_questions, ensure_ascii=False)
        + ');\n'
    )
    quiz_out.write_text(js, encoding='utf-8')

    # Write categories JSON
    cat_out = _write_cat_names(topic_id, cat_map)

    total = len(all_questions)
    print(f"[OK]  {quiz_out}  ({total} questions)")
    print(f"      {cat_out}  ({len(cat_map)} categories)")
    print()
    print(f"  Categories generated for {topic_id}:")
    for code, name in cat_map.items():
        count = sum(1 for q in all_questions if q.get('cat') == code)
        print(f"    {code:<6} -> {name:<40} ({count} Q)")
    print()
    print(f"  ACTION REQUIRED: add the following to CAT_NAMES in app/index.html:")
    lines = [f'  {code}:"{name}"' for code, name in cat_map.items()]
    print('  ' + ',\n  '.join(lines))

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
