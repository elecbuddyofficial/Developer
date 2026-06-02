import glob
import re

files = glob.glob('data/notes/t0*_notes.js')

written_block = """
  <!-- ═══ WRITTEN SECTION ═══ -->
  <div class="n-h1" id="s-written">📝 Written Section</div>
  <div class="n-info"><div class="icon">📝</div><div class="body"><strong>Coming Soon:</strong> The written preparation module is currently under development. It will feature past papers, detailed numerical solutions, and structured answers for this topic.</div></div>
"""

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Check if already injected
    if 'id="s-written"' in content:
        print(f"Already injected in {f}")
        continue
    
    # 1. Inject the jump link in note-anchors
    # We'll find <button class="anc-btn" onclick="jumpTo('s-surveyorqa')"> or similar
    # and put our button right before it
    btn_html = '<button class="anc-btn" onclick="jumpTo(\'s-written\')">Written Section</button>\n    '
    
    # Try replacing right before the Surveyor Q&A button
    content = re.sub(
        r'(<button class="anc-btn" onclick="jumpTo\([\'"]s-surveyor-qa(-extra)?[\'"]\)">)', 
        btn_html + r'\1', 
        content,
        flags=re.IGNORECASE
    )
    content = re.sub(
        r'(<button class="anc-btn" onclick="jumpTo\([\'"]s-surveyorqa(-extra)?[\'"]\)">)', 
        btn_html + r'\1', 
        content,
        flags=re.IGNORECASE
    )

    # 2. Inject the written block right before the Surveyor Q&A section
    # Usually indicated by <!-- ═══ SURVEYOR Q&A ═══ --> or <div class="n-h1" id="s-surveyorqa">
    content = re.sub(
        r'(<!-- ═══ SURVEYOR Q&A ═══ -->)',
        written_block + r'\n  \1',
        content,
        flags=re.IGNORECASE
    )
    
    # If the comment isn't there, look for the h1 directly
    if '═══ WRITTEN SECTION ═══' not in content:
        content = re.sub(
            r'(<div class="n-h1"[^>]*>🎤 Surveyor)',
            written_block + r'\n  \1',
            content,
            flags=re.IGNORECASE
        )
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
        
    print(f"Injected Written Section into {f}")
