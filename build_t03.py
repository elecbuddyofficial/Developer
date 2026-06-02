import sys

def build_html():
    with open('t3_full.txt', 'r', encoding='utf-8') as f:
        lines = [line.strip() for line in f.readlines() if line.strip()]

    html = []
    html.append('<div class="view" id="view-notes-t03">')
    html.append('<div class="note-doc">')
    html.append('  <div style="margin-bottom:16px"><button class="anc-btn" onclick="showView(\'notes-picker\')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button></div>')
    html.append('  <div class="note-title">')
    html.append('    <h1>Topic 3 — Motors &amp; Starters</h1>')
    html.append('    <div class="sub">ETO MMD Oral Examination · Function 5 · Class 2 · Mumbai &amp; Noida</div>')
    html.append('    <div class="tags">')
    html.append('      <span class="tag tag-blue">🔴 Exam Critical</span>')
    html.append('      <span class="tag tag-orange">Induction Motors</span>')
    html.append('      <span class="tag tag-purple">Starters & VFD</span>')
    html.append('    </div>')
    html.append('  </div>')

    # Add quick anchors (hardcoded based on sections)
    html.append('  <div class="note-anchors">')
    html.append('    <span>Jump to section</span>')
    html.append('    <button class="anc-btn" onclick="jumpTo(\'s3-principle\')">Principle</button>')
    html.append('    <button class="anc-btn" onclick="jumpTo(\'s3-startcurrent\')">Starting Current</button>')
    html.append('    <button class="anc-btn" onclick="jumpTo(\'s3-stardelta\')">Star-Delta</button>')
    html.append('    <button class="anc-btn" onclick="jumpTo(\'s3-softvfd\')">Soft Starter vs VFD</button>')
    html.append('    <button class="anc-btn" onclick="jumpTo(\'s3-speed\')">Speed Control</button>')
    html.append('    <button class="anc-btn" onclick="jumpTo(\'s3-frame\')">Alignment & Grease</button>')
    html.append('    <button class="anc-btn" onclick="jumpTo(\'s3-dc\')">DC Motors</button>')
    html.append('    <button class="anc-btn" onclick="jumpTo(\'s3-protect\')">Protection</button>')
    html.append('    <button class="anc-btn" onclick="jumpTo(\'s3-sync\')">Sync Motors</button>')
    html.append('    <button class="anc-btn" onclick="jumpTo(\'s3-quickrev\')">Quick Revision</button>')
    html.append('    <button class="anc-btn" onclick="jumpTo(\'s3-gap\')">Gap Additions</button>')
    html.append('  </div>')

    # Basic parsing logic (simplified, will need manual refinement if generated incorrectly)
    in_table = False
    table_headers = []
    in_grid = False

    for line in lines:
        if line.startswith('1. INDUCTION MOTOR'):
            html.append('  <div class="n-h1" id="s3-principle">⚡ 1. Induction Motor — Working Principle</div>')
        elif line.startswith('2. HIGH STARTING CURRENT'):
            html.append('  <div class="n-h1" id="s3-startcurrent">📈 2. High Starting Current</div>')
        elif line.startswith('3. STAR-DELTA STARTER'):
            html.append('  <div class="n-h1" id="s3-stardelta">🔄 3. Star-Delta Starter</div>')
        elif line.startswith('4. SOFT STARTER vs VFD'):
            html.append('  <div class="n-h1" id="s3-softvfd">💻 4. Soft Starter vs VFD</div>')
        elif line.startswith('5. SPEED CONTROL'):
            html.append('  <div class="n-h1" id="s3-speed">⚙️ 5. Speed Control</div>')
        elif line.startswith('6. MOTOR FRAME NUMBER'):
            html.append('  <div class="n-h1" id="s3-frame">📏 6. Alignment & Greasing</div>')
        elif line.startswith('7. DC MOTORS'):
            html.append('  <div class="n-h1" id="s3-dc">🧲 7. DC Motors & Braking</div>')
        elif line.startswith('8. MOTOR PROTECTION'):
            html.append('  <div class="n-h1" id="s3-protect">🛡️ 8. Motor Protection</div>')
        elif line.startswith('9. SYNCHRONOUS MOTOR'):
            html.append('  <div class="n-h1" id="s3-sync">⏳ 9. Synchronous Motors</div>')
        elif line.startswith('10. QUICK REVISION'):
            html.append('  <div class="n-h1" id="s3-quickrev">📝 10. Quick Revision</div>')
        elif line.startswith('GAP ADDITIONS'):
            html.append('  <div class="n-h1" id="s3-gap">🆕 Gap Additions</div>')
        elif line.startswith('🔴 EXAM CRITICAL:'):
            html.append(f'  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Exam Critical:</strong> {line.replace("🔴 EXAM CRITICAL:", "").strip()}</div></div>')
        elif line.startswith('EXAMINER QUESTION'):
            html.append('  <div class="n-h2">Surveyor Q&A</div>')
        elif line.startswith('IDEAL ANSWER'):
            continue
        elif '?' in line and line.endswith('?'):
            # Assumption: Questions in Q&A sections
            html.append(f'  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>{line}</strong></div></div>')
        elif line.startswith('MEMORY AID'):
            html.append(f'  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>{line}</strong></div></div>')
        elif line.startswith('FEATURE') and 'SOFT STARTER' in lines[lines.index(line)+1]:
            html.append('  <table class="n-table">')
            in_table = True
            table_headers = ['Feature', 'Soft Starter', 'VFD']
            html.append(f'    <tr><th>{table_headers[0]}</th><th>{table_headers[1]}</th><th>{table_headers[2]}</th></tr>')
        elif in_table and line.startswith('EXAMINER QUESTION'):
            in_table = False
            html.append('  </table>')
            html.append('  <div class="n-h2">Surveyor Q&A</div>')
        elif in_table:
            pass # Skipping complex table parsing in this basic script, will manually fix table in next step or use complex logic
        elif line.isupper() and len(line) < 40 and not line.startswith('EXAM'):
            html.append(f'  <div class="n-h2">{line}</div>')
        elif line.startswith('Step '):
            html.append(f'  <div class="n-info"><div class="icon">👉</div><div class="body">{line}</div></div>')
        else:
            if not in_table:
                html.append(f'  <p>{line}</p>')
                
    html.append('</div>')
    html.append('</div>')
    
    with open('t3_generated.html', 'w', encoding='utf-8') as f:
        f.write('\\n'.join(html))

if __name__ == "__main__":
    build_html()
