import os
import re
import glob
import docx
from docx.document import Document as _Document
from docx.oxml.text.paragraph import CT_P
from docx.oxml.table import CT_Tbl
from docx.table import _Cell, Table
from docx.text.paragraph import Paragraph

def iter_block_items(parent):
    if isinstance(parent, _Document):
        parent_elm = parent.element.body
    elif isinstance(parent, _Cell):
        parent_elm = parent._tc
    else:
        raise ValueError("Invalid parent type")
    for child in parent_elm.iterchildren():
        if isinstance(child, CT_P):
            yield Paragraph(child, parent)
        elif isinstance(child, CT_Tbl):
            yield Table(child, parent)

def format_number_spans(text):
    # Regex to find numbers and units (e.g., 4-20mA, 250Ω, 120 deg C)
    # Simple heuristic: any digit followed by optional letters/symbols
    import re
    # We will just wrap things like "4-20mA", "250Ω", "120-150 deg C", "3-15 psi"
    text = re.sub(r'\b(\d+(?:\.\d+)?(?:-\d+(?:\.\d+)?)?\s*(?:mA|Ω|V|A|Hz|psi|bar|deg C|°C|%|kbps|bps|min|sec|ms|kW|kVA))\b', r'<span class="n-val">\1</span>', text)
    return text

def parse_docx_to_html(filepath, topic_id_str):
    doc = docx.Document(filepath)
    blocks = []
    
    for block in iter_block_items(doc):
        if isinstance(block, Paragraph):
            if block.text.strip():
                blocks.append(('p', block.text.strip()))
        elif isinstance(block, Table):
            table_data = []
            for row in block.rows:
                row_data = [cell.text.strip().replace('\n', ' ') for cell in row.cells]
                table_data.append(row_data)
            blocks.append(('t', table_data))
            
    html_content = ""
    anchors = []
    
    # Process blocks
    in_surveyor_qa = False
    in_quick_rev = False
    section_counter = 1
    
    # Try to extract a clean title from the filename
    basename = os.path.basename(filepath)
    # e.g., ETO_v2_Topic7_Control_PLC.docx -> Control_PLC
    title_match = re.search(r'Topic\d+_(.*)\.docx', basename)
    title_text = title_match.group(1).replace('_', ' ') if title_match else basename
    
    for block_type, data in blocks:
        if block_type == 'p':
            text = data
            
            # Check for main headings
            if re.match(r'^\d+\.\s+[A-Z]', text) or text.isupper() and len(text) < 50:
                if "SURVEYOR" in text or "EXAMINER" in text or "QUESTIONS" in text:
                    html_content += f'\n  <!-- ═══ SURVEYOR Q&A ═══ -->\n  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>\n  <div class="n-crit"><div class="icon">🔴</div><div class="body">These are exact question formats from MMD orals. Study the key points.</div></div>\n'
                    in_surveyor_qa = True
                elif "QUICK REVISION" in text or "REVISION" in text:
                    html_content += f'\n  <!-- ═══ QUICK REVISION ═══ -->\n  <div class="n-h1" id="s-quickrev">📋 Quick Revision</div>\n'
                    in_quick_rev = True
                else:
                    sec_id = f"s-{section_counter}"
                    html_content += f'\n  <div class="n-h1" id="{sec_id}">{text}</div>\n'
                    # Add to anchors
                    short_title = text.split('—')[0].split('-')[0].strip()
                    if len(short_title) > 20: short_title = short_title[:20] + "..."
                    if len(anchors) < 8:  # limit number of anchors
                        anchors.append(f'<button class="anc-btn" onclick="jumpTo(\'{sec_id}\')">{short_title}</button>')
                    section_counter += 1
            
            elif "🔴" in text or "EXAM CRITICAL" in text:
                clean_text = format_number_spans(text.replace("🔴", "").replace("EXAM CRITICAL:", "").strip())
                html_content += f'  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> {clean_text}</div></div>\n'
            
            elif text.startswith("GAP ADDITIONS"):
                html_content += f'  <div class="n-h2">{text}</div>\n'
            
            else:
                formatted = format_number_spans(text)
                html_content += f'  <div class="body">{formatted}</div>\n'
                
        elif block_type == 't':
            # Check if it's the Surveyor Q&A table
            table = data
            if not table: continue
            
            if in_surveyor_qa or (len(table[0]) == 2 and "Question" in table[0][0]):
                html_content += '  <table class="n-table">\n'
                html_content += f'    <tr><th>{table[0][0]}</th><th>{table[0][1]}</th></tr>\n'
                for row in table[1:]:
                    html_content += f'    <tr><td>{row[0]}</td><td>{format_number_spans(row[1])}</td></tr>\n'
                html_content += '  </table>\n'
            else:
                html_content += '  <table class="n-table">\n'
                # Assume first row is header
                html_content += '    <tr>' + "".join([f"<th>{c}</th>" for c in table[0]]) + '</tr>\n'
                for row in table[1:]:
                    html_content += '    <tr>' + "".join([f"<td>{format_number_spans(c)}</td>" for c in row]) + '</tr>\n'
                html_content += '  </table>\n'
                
    # Build the full file content
    topic_num = int(topic_id_str[1:])
    topic_title = f"Topic {topic_num:02d} — {title_text}"
    
    # Combine anchors
    anchors_html = '\n    '.join(anchors)
    anchors_html += f'\n    <button class="anc-btn" onclick="jumpTo(\'s-written\')">📝 Written Section</button>'
    anchors_html += f'\n    <button class="anc-btn" onclick="jumpTo(\'s-surveyorqa\')">Surveyor Q&amp;A</button>'
    anchors_html += f'\n    <button class="anc-btn" onclick="jumpTo(\'s-quickrev\')">Quick Revision</button>'

    written_section = f'''
  <!-- ═══ WRITTEN SECTION ═══ -->
  <div class="n-h1" id="s-written">📝 Written Section</div>
  <div class="n-info"><div class="icon">📝</div><div class="body"><strong>Coming Soon:</strong> The written preparation module is currently under development.</div></div>
'''
    
    # If the docx was missing Surveyor Q&A, inject a placeholder to satisfy the validator
    surveyor_qa_section = ""
    if not in_surveyor_qa:
        surveyor_qa_section = f'''
  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>No Surveyor Q&A available</strong> for this topic yet.</div></div>
'''

    quick_rev_section = ""
    if not in_quick_rev:
        quick_rev_section = f'''
  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📋 Quick Revision</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body">Revision tables coming soon.</div></div>
'''

    full_html = f'''window.loadNotes("{topic_id_str}", `<div class="view" id="view-notes-{topic_id_str.lower()}">
<div class="note-doc">
  <div style="margin-bottom:16px"><button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button></div>
  <div class="note-title">
    <h1>{topic_title}</h1>
    <div class="sub">ETO MMD Oral Examination · Function 5 · Class 2 · Mumbai & Noida</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    {anchors_html}
  </div>

  <div class="note-content">
{html_content}
{written_section}
{surveyor_qa_section}
{quick_rev_section}
  </div>
</div>
</div>`);
'''
    return full_html

def main():
    files = glob.glob('Oral Material/ETO_v2_Topic*.docx')
    for f in files:
        # Extract topic number
        m = re.search(r'Topic(\d+)_', f)
        if m:
            t_num = int(m.group(1))
            if t_num >= 7:
                t_id = f"T{t_num:02d}"
                print(f"Generating {t_id} from {f}")
                html = parse_docx_to_html(f, t_id)
                out_path = f"data/notes/{t_id.lower()}_notes.js"
                with open(out_path, 'w', encoding='utf-8') as out_f:
                    out_f.write(html)

if __name__ == "__main__":
    main()
