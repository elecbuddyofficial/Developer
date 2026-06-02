import os
import re

def format_file(filepath, topic_id, topic_title):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract just the HTML part inside window.loadNotes('TXX', `...`)
    match = re.search(r"window\.loadNotes\(['\"]" + topic_id + r"['\"],\s*`([\s\S]*?)`\);", content)
    if not match:
        print(f"Could not find loadNotes for {topic_id} in {filepath}")
        return

    raw_html = match.group(1)

    # Check if it already has note-doc wrapper
    if 'class="note-doc"' in raw_html:
        print(f"{topic_id} already formatted.")
        return

    # Basic cleanup: remove old headers like <div class="topic-title">...</div> or <h3>TOPIC...</h3>
    clean_html = re.sub(r"<div class=['\"]topic-title['\"]>.*?</div>", "", raw_html, flags=re.IGNORECASE)
    clean_html = re.sub(r"<div class=['\"]topic-subtitle['\"]>.*?</div>", "", clean_html, flags=re.IGNORECASE)
    clean_html = re.sub(r"<h3>ETO MMD ORAL EXAMINATION</h3>", "", clean_html, flags=re.IGNORECASE)
    clean_html = re.sub(r"<p>COMPREHENSIVE STUDY NOTES.*?/p>", "", clean_html, flags=re.IGNORECASE)
    clean_html = re.sub(r"<h3>TOPIC \d+:.*?</h3>", "", clean_html, flags=re.IGNORECASE)
    clean_html = re.sub(r"<p>Function 5 \| Class 2 ETO.*?/p>", "", clean_html, flags=re.IGNORECASE)
    clean_html = re.sub(r"<p>Compiled from 2025-2026.*?/p>", "", clean_html, flags=re.IGNORECASE)
    clean_html = re.sub(r"<h3>COLOUR CODE LEGEND</h3>", "", clean_html, flags=re.IGNORECASE)
    clean_html = re.sub(r"<p>YELLOW = Key Exam Points.*?/p>", "", clean_html, flags=re.IGNORECASE)
    clean_html = re.sub(r"<div class=['\"]study-topic-content['\"]>", "", clean_html, flags=re.IGNORECASE)

    # Replace <div class="section-title">1. BLAH</div> or <h2>1. BLAH</h2> with <div class="n-h1">1. BLAH</div>
    clean_html = re.sub(r"<div class=['\"]section-title['\"]>(.*?)</div>", r'<div class="n-h1">\1</div>', clean_html, flags=re.IGNORECASE)
    clean_html = re.sub(r"<h2>(.*?)</h2>", r'<div class="n-h1">\1</div>', clean_html, flags=re.IGNORECASE)

    # Replace <h3> with <div class="n-h2">
    clean_html = re.sub(r"<h3>(.*?)</h3>", r'<div class="n-h2">\1</div>', clean_html, flags=re.IGNORECASE)

    # Replace <p> with <p class="n-p"> except inside qa-box
    def replace_p(m):
        return m.group(0) # Will refine later, just simple replacement for now
        
    # Replace QA boxes
    clean_html = re.sub(r"<div class=['\"]qa-box['\"]>", r'<div class="n-crit"><div class="icon">❓</div><div class="body">', clean_html, flags=re.IGNORECASE)

    # Highlight boxes
    clean_html = re.sub(r"<div class=['\"]highlight-box['\"]>(.*?)</div>", r'<div class="n-warn"><div class="icon">⚠️</div><div class="body">\1</div></div>', clean_html, flags=re.IGNORECASE)
    
    # Wrap everything in the nice UI
    wrapper = f"""<div class="view" id="view-notes-{topic_id.lower()}">
<div class="note-doc">
  <div style="margin-bottom:16px"><button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button></div>
  <div class="note-title">
    <h1>Topic {topic_id[1:]} — {topic_title}</h1>
    <div class="sub">ETO MMD Oral Examination · Function 5 · Class 2 · Mumbai & Noida</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>

  <div class="note-content">
{clean_html}
  </div>
</div>
</div>"""

    new_content = content[:match.start()] + f"window.loadNotes('{topic_id}', `{wrapper}`);\n" + content[match.end():]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Formatted {topic_id}")

if __name__ == '__main__':
    base_dir = r"D:\Notes 1\Original\ETO_Study_App\data\notes"
    format_file(os.path.join(base_dir, "t04_notes.js"), "T04", "Switchboard & Circuit Breakers")
    format_file(os.path.join(base_dir, "t05_notes.js"), "T05", "Transformers")
    format_file(os.path.join(base_dir, "t06_notes.js"), "T06", "Sensors & Instrumentation")
