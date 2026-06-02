import json
import re
import glob

def parse_js_array(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the JSON array from window.loadQuizzes("...", [...])
    match = re.search(r'window\.loadQuizzes\([^,]+,\s*(\[.*\])\s*\);', content, re.DOTALL)
    if not match:
        print(f"Could not parse {filepath}")
        return []
    
    try:
        data = json.loads(match.group(1))
        return data
    except Exception as e:
        print(f"JSON Error in {filepath}: {e}")
        return []

files = glob.glob('data/quizzes/t*_quiz.js')
for f in files:
    data = parse_js_array(f)
    cats = {}
    for q in data:
        c = q.get('cat', 'UNKNOWN')
        cats[c] = cats.get(c, 0) + 1
    
    print(f"\n{f} (Total: {len(data)})")
    for c, count in cats.items():
        print(f"  - {c}: {count} questions")
