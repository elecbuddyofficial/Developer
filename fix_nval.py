import re
import os

files_to_fix = ['data/notes/t01_notes.js', 'data/notes/t02_notes.js', 'data/notes/t03_notes.js']

# Regex matches numbers followed by optional space and unit (V, kV, Hz, A, mA, kW, MW, Mohm, Gohm, ohm, %, rpm, deg C, mm, bar)
pattern = re.compile(r'(\b\d+(?:\.\d+)?\s*(?:V|kV|Hz|A|mA|kW|MW|Mohm|Gohm|ohm|%|rpm|deg\s*C|mm|bar)\b)')

for filepath in files_to_fix:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace only if it's not already wrapped in <span class="n-val">
        # To avoid complex lookbehinds, we'll first remove any existing n-val tags just in case
        content = re.sub(r'<span class="n-val">(.*?)</span>', r'\1', content)
        
        # Now apply the wrapper to all matches
        new_content = pattern.sub(r'<span class="n-val">\1</span>', content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed {filepath}")
