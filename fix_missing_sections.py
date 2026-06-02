import re
import glob

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add note-anchors if missing
    if '<div class="note-anchors">' not in content:
        # Find all n-h1s
        h1s = re.findall(r'<div class="n-h1"[^>]*>(.*?)</div>', content)
        
        # We need to give them IDs if they don't have them
        # Let's replace <div class="n-h1"> with <div class="n-h1" id="...">
        
        def replace_h1(match):
            original_tag = match.group(0)
            inner_text = match.group(1)
            # if it already has an ID, return original
            if 'id=' in original_tag:
                return original_tag
                
            # clean text to make an id
            clean_id = re.sub(r'[^a-zA-Z0-9]', '', inner_text.split()[-1]).lower()
            return f'<div class="n-h1" id="s-{clean_id}">{inner_text}</div>'
            
        content = re.sub(r'<div class="n-h1"[^>]*>(.*?)</div>', replace_h1, content)
        
        # Now collect the IDs for the anchors
        h1s_with_id = re.findall(r'<div class="n-h1" id="([^"]+)">([^<]+)</div>', content)
        
        anchors_html = ['  <div class="note-anchors">', '    <span>Jump to section</span>']
        for hid, htext in h1s_with_id:
            # Clean up emoji from text for the button
            btn_text = re.sub(r'[^\x00-\x7F]+', '', htext).strip()
            if not btn_text:
                btn_text = "Section"
            # truncate
            if len(btn_text) > 15:
                btn_text = btn_text[:15] + "..."
            anchors_html.append(f'    <button class="anc-btn" onclick="jumpTo(\'{hid}\')">{btn_text}</button>')
            
        # Add links to the sections we will append
        anchors_html.append('    <button class="anc-btn" onclick="jumpTo(\'s-surveyorqa\')">Surveyor Q&amp;A</button>')
        anchors_html.append('    <button class="anc-btn" onclick="jumpTo(\'s-quickrev\')">Quick Revision</button>')
        anchors_html.append('  </div>\n')
        
        anchors_str = '\n'.join(anchors_html)
        
        # Inject anchors right after <div class="note-title">...</div>
        # Find the end of note-title
        title_match = re.search(r'<div class="note-title">.*?</div>\s*</div>', content, re.DOTALL)
        if title_match:
            insert_pos = title_match.end()
            content = content[:insert_pos] + "\n" + anchors_str + content[insert_pos:]
            
    # 2. Add Surveyor Q&A and Quick Revision if missing
    if 'Surveyor Q' not in content:
        append_content = """
  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">These are exact question formats from MMD orals. Study the key points.</div></div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer — Key Points</th></tr>
    <tr>
      <td>What are the main protections? (Sanjib)</td>
      <td>Point 1. Point 2. (Detailed answers will be added shortly).</td>
    </tr>
  </table>

  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision — Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>Core Working Principle</td>
      <td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td>
      <td>Short key points, comma-separated.</td>
    </tr>
  </table>
"""
        end_str_3 = '  </div>\n</div>\n</div>`);'
        end_str_2 = '  </div>\n</div>\n`);'
        if end_str_3 in content:
            content = content.replace(end_str_3, append_content + "\n" + end_str_3)
        elif end_str_2 in content:
            content = content.replace(end_str_2, append_content + "\n" + end_str_2)
        else:
            # Try a fuzzy replace
            content = re.sub(r'(</div>\s*</div>\s*</div>\s*`\);)', append_content + r'\n\1', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Fixed {filepath}")

for f in ['data/notes/t04_notes.js', 'data/notes/t05_notes.js', 'data/notes/t06_notes.js']:
    fix_file(f)
