import json
import re
import os

def refactor():
    print("Extracting Quizzes...")
    with open('data/quiz_data.js', 'r', encoding='utf-8') as f:
        q_content = f.read()

    match = re.search(r'var QD = (\{.*?\});', q_content, re.DOTALL)
    if not match:
        print("Could not find QD object")
        return

    data = json.loads(match.group(1))

    # Split Quizzes
    topic_mapping = {
        'T01_Alternator': 'T01',
        'T02_HV': 'T02',
        'T03_Motors': 'T03'
    }

    for key, qlist in data.items():
        tid = topic_mapping.get(key)
        if not tid: continue
        js_str = f'window.loadQuizzes("{key}", {json.dumps(qlist)});\n'
        with open(f'data/quizzes/{tid.lower()}_quiz.js', 'w', encoding='utf-8') as out:
            out.write(js_str)
        print(f"Created {tid.lower()}_quiz.js")

    print("\nExtracting HTML Notes...")
    with open('app/index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    tids = ['T01', 'T02', 'T03']
    new_html = html

    for tid in tids:
        # Regex to match the entire <div class="view" id="view-notes-tXX"> ... </div>
        # Since HTML contains nested divs, regex is tricky. We'll find by string splitting.
        start_str = f'<div class="view" id="view-notes-{tid.lower()}">'
        if start_str not in html:
            # Maybe the ID is slightly different for T03?
            start_str2 = f'<div class="view" id="view-notes-{tid.lower()}">'
            if start_str2 not in html:
                continue

        start_idx = html.find(start_str)
        
        # Find next TOPIC comment or </script> or next view
        end_idx = -1
        # The next topic usually starts with <!-- ═══════════════ TOPIC or <!-- ═══════════════ NOTES TOPIC PICKER
        # Or the next view
        next_view_idx = html.find('<div class="view" id="view-', start_idx + len(start_str))
        script_idx = html.find('<script src="../data/quiz_data.js">', start_idx)
        
        if next_view_idx != -1 and script_idx != -1:
            end_idx = min(next_view_idx, script_idx)
        elif next_view_idx != -1:
            end_idx = next_view_idx
        elif script_idx != -1:
            end_idx = script_idx
            
        # Refine end index to just before the next topic comment if possible
        topic_comment = html.rfind('<!-- ═══════════════', start_idx, end_idx)
        # Actually, the best way is to extract it, then parse to find balanced divs or just rely on the above.
        # Let's just find the next <!-- ═══════════════
        next_comment_idx = html.find('<!-- ═══════════════', start_idx + len(start_str))
        if next_comment_idx != -1 and next_comment_idx < end_idx:
            end_idx = next_comment_idx

        # Extract
        content = html[start_idx:end_idx].strip()
        
        # We need to escape backticks and ${} for JS template literals
        safe_content = content.replace('`', '\\`').replace('${', '\\${')
        
        js_str = f'window.loadNotes("{tid}", `{safe_content}`);\n'
        with open(f'data/notes/{tid.lower()}_notes.js', 'w', encoding='utf-8') as out:
            out.write(js_str)
        print(f"Created {tid.lower()}_notes.js")
        
        # Remove from new_html
        new_html = new_html.replace(content, "")

    # Inject dynamic loader scripts into new_html
    # Replace `<script src="../data/quiz_data.js"></script>` with dynamic loader logic
    loader_logic = """
<script>
// Dynamic Loader System
window.QD = {}; // Quiz Data Store
window.NOTE_HTML = {}; // HTML Store

window.loadQuizzes = function(topicKey, data) {
    window.QD[topicKey] = data;
    buildCatGrid(); // Update UI
    buildQuizTopicGrid();
};

window.loadNotes = function(topicId, htmlContent) {
    window.NOTE_HTML[topicId] = htmlContent;
    document.getElementById('notes-container').innerHTML = htmlContent;
    // Show it
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('notes-container').children[0].classList.add('active');
    
    var btt = document.getElementById('back-to-top');
    if (btt) {
        document.getElementById('notes-container').addEventListener('scroll', function(e) {
            if(e.target.scrollTop > 300) { btt.style.display = 'flex'; }
            else { btt.style.display = 'none'; }
        }, true);
    }
};

window.fetchTopicData = function(topicId, topicKey) {
    // Inject Script tags dynamically
    if (!window.NOTE_HTML[topicId]) {
        let noteScript = document.createElement('script');
        noteScript.src = '../data/notes/' + topicId.toLowerCase() + '_notes.js';
        document.head.appendChild(noteScript);
    } else {
        document.getElementById('notes-container').innerHTML = window.NOTE_HTML[topicId];
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById('notes-container').children[0].classList.add('active');
    }

    if (!window.QD[topicKey]) {
        let quizScript = document.createElement('script');
        quizScript.src = '../data/quizzes/' + topicId.toLowerCase() + '_quiz.js';
        document.head.appendChild(quizScript);
    }
};
</script>
"""
    new_html = new_html.replace('<script src="../data/quiz_data.js"></script>', loader_logic)
    
    # Add <div id="notes-container"></div> right before loader_logic if we just deleted the views
    # Actually, we should add it where the views used to be.
    # We will just insert it before <!-- ═══════════════ QUIZ TOPIC PICKER or something similar.
    # Let's insert it right after the view-quiz-picker closing div.
    view_q_end = new_html.find('id="view-quiz-picker"')
    if view_q_end != -1:
        div_end = new_html.find('</div>\n</div>', view_q_end) + 13
        new_html = new_html[:div_end] + '\n\n<!-- DYNAMIC NOTES CONTAINER -->\n<div id="notes-container"></div>\n' + new_html[div_end:]
    
    with open('app/index.html', 'w', encoding='utf-8') as f:
        f.write(new_html)
    
    print("Updated app/index.html")

if __name__ == '__main__':
    refactor()
