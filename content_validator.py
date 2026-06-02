"""
content_validator.py — checks that each topic's notes JS file covers the source docx.

Reads from data/notes/tXX_notes.js (not index.html — notes are now in separate files).
Prints a coverage report and exits 0 if all implemented topics pass, 1 if any fail.
"""

import re
import sys
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

try:
    from agent_utils import DOCX_MAP, TOPIC_NAMES, find_docx
except ImportError:
    sys.exit("ERROR: agent_utils.py not found. Run from ETO_Study_App directory.")

# ─── Docx text extraction ────────────────────────────────────────────────────

def extract_docx_text(docx_path):
    """Extract all plain text from a docx using raw XML (no python-docx needed)."""
    try:
        with zipfile.ZipFile(str(docx_path)) as z:
            xml = z.read('word/document.xml')
        tree = ET.fromstring(xml)
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        parts = []
        for para in tree.findall('.//w:p', ns):
            words = []
            for run in para.findall('.//w:r', ns):
                t = run.find('w:t', ns)
                if t is not None and t.text:
                    words.append(t.text)
            if words:
                parts.append(''.join(words))
        return ' '.join(parts)
    except Exception as e:
        return ''


# ─── Notes JS text extraction ────────────────────────────────────────────────

def extract_notes_text(topic_id):
    """Extract plain text from the topic's notes JS file."""
    path = Path('data/notes') / f'{topic_id.lower()}_notes.js'
    if not path.exists():
        return None
    raw = path.read_text(encoding='utf-8', errors='replace')
    # Strip all HTML tags
    text = re.sub(r'<[^>]+>', ' ', raw)
    # Strip JS wrapper noise
    text = re.sub(r'window\.(loadNotes|NOTE_HTML)[^`]*`', ' ', text)
    return text


# ─── Word set helpers ────────────────────────────────────────────────────────

STOP = {
    'the','a','an','and','or','but','is','are','was','were','in','on','at',
    'to','for','of','with','by','this','that','these','those','it','its',
    'be','as','from','will','can','has','have','been','not','all','if',
}

def word_set(text):
    text = re.sub(r'[^\w\s]', ' ', text.lower())
    return {w for w in text.split() if w not in STOP and len(w) > 3}


# ─── Main validation ─────────────────────────────────────────────────────────

def validate():
    print("=" * 52)
    print("[VALIDATOR] CONTENT COVERAGE CHECK")
    print("=" * 52)

    results = []

    for topic_id in sorted(DOCX_MAP.keys()):
        notes_text = extract_notes_text(topic_id)

        if notes_text is None:
            results.append((topic_id, None, None, 'NOT BUILT'))
            continue

        docx_path = find_docx(topic_id)
        if not docx_path:
            results.append((topic_id, None, None, 'DOCX MISSING'))
            continue

        docx_text = extract_docx_text(docx_path)
        if not docx_text.strip():
            results.append((topic_id, None, None, 'DOCX EMPTY'))
            continue

        docx_words = word_set(docx_text)
        notes_words = word_set(notes_text)

        matched = docx_words & notes_words
        coverage = len(matched) / len(docx_words) * 100 if docx_words else 0

        missing = sorted(docx_words - notes_words, key=len, reverse=True)
        sig_missing = [w for w in missing if len(w) > 6][:8]

        if coverage >= 65:
            status = 'OK'
        elif coverage >= 45:
            status = 'FAIR'
        else:
            status = 'LOW'
        results.append((topic_id, coverage, sig_missing, status))

    # Print report
    all_ok = True
    built = [r for r in results if r[2] is not None]
    not_built = [r for r in results if r[3] == 'NOT BUILT']

    for topic_id, coverage, sig_missing, status in results:
        name = TOPIC_NAMES.get(topic_id, '')
        if status == 'NOT BUILT':
            print(f"  [ -- ] {topic_id} {name[:30]:30} not built yet")
        elif status in ('DOCX MISSING', 'DOCX EMPTY'):
            print(f"  [WARN] {topic_id} {name[:30]:30} source docx unavailable")
        elif status == 'OK':
            print(f"  [ OK ] {topic_id} {name[:30]:30} {coverage:5.1f}%")
        elif status == 'FAIR':
            missing_str = ', '.join(sig_missing[:5]) if sig_missing else '—'
            print(f"  [FAIR] {topic_id} {name[:30]:30} {coverage:5.1f}% — possibly missing: {missing_str}")
        else:
            all_ok = False
            missing_str = ', '.join(sig_missing) if sig_missing else '—'
            print(f"  [LOW ] {topic_id} {name[:30]:30} {coverage:5.1f}% — missing: {missing_str}")

    print("=" * 52)
    built_count = len(built)
    ok_count = sum(1 for r in built if r[3] in ('OK', 'FAIR'))
    print(f"  Built: {built_count}/23   Passing (>=75%): {ok_count}/{built_count}")
    if not_built:
        print(f"  Not yet built: {', '.join(r[0] for r in not_built)}")
    print("=" * 52)

    return 0 if all_ok else 1


if __name__ == '__main__':
    sys.exit(validate())
