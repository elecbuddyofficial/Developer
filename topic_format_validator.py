import re
import sys
import glob
import os

class TopicValidator:
    def __init__(self, filepath):
        self.filepath = filepath
        with open(filepath, 'r', encoding='utf-8') as f:
            self.content = f.read()
        self.errors = []
        self.warnings = []

    def log_err(self, msg):
        self.errors.append(msg)

    def log_warn(self, msg):
        self.warnings.append(msg)

    def validate(self):
        c = self.content
        
        # 1. Wrapper Check
        if not re.search(r'window\.loadNotes\([\'"]T\d+[\'"]', c):
            self.log_err("Missing window.loadNotes wrapper.")
        if '<div class="note-doc">' not in c:
            self.log_err("Missing <div class=\"note-doc\"> wrapper.")
        if '<div class="note-title">' not in c:
            self.log_err("Missing <div class=\"note-title\"> block.")
        if '<div class="note-anchors">' not in c:
            self.log_err("Missing <div class=\"note-anchors\"> block.")

        # 2. Anchor Integrity Check
        anchors = re.findall(r'jumpTo\([\'"]([^\'"]+)[\'"]\)', c)
        for anchor in anchors:
            # Check if there is an element with this id
            if not re.search(f'id=[\'"]{anchor}[\'"]', c):
                self.log_err(f"Anchor jumpTo('{anchor}') has no matching id='{anchor}' in the document.")

        h1s = re.findall(r'<div class="n-h1" id="([^"]+)">', c)
        for h1 in h1s:
            if h1 not in anchors:
                # It's okay if not all h1s are in anchors, but usually they should be. We'll make it a warning.
                if h1 not in ['s-surveyor-qa', 's-surveyorqa', 's-quickrev', 's-quick-rev']:
                    self.log_warn(f"Section id '{h1}' is not linked in the note-anchors bar.")

        # 3. Mandatory Sections Check
        if not re.search(r'Surveyor (Q&amp;A|Q&A|Questions)', c, re.IGNORECASE):
            self.log_err("Missing mandatory Surveyor Q&A section.")
        
        if 'Quick Revision' not in c:
            self.log_err("Missing mandatory Quick Revision section.")

        # 4. Callout Box Integrity Check
        callout_classes = ['n-crit', 'n-warn', 'n-info', 'n-ok']
        for cls in callout_classes:
            # Find all instances of `<div class="n-crit">` etc
            blocks = re.finditer(f'<div class="{cls}">', c)
            for block in blocks:
                start_idx = block.start()
                # grab the next 100 chars to check structure
                snippet = c[start_idx:start_idx+100]
                if '<div class="icon">' not in snippet or '<div class="body">' not in snippet:
                    self.log_err(f"Malformed callout box '{cls}' at index {start_idx}. Missing .icon or .body")

        # 5. Content Tags
        if 'class="n-val"' not in c:
            self.log_warn("No <span class=\"n-val\"> tags found. Topic must highlight important values.")

        return len(self.errors) == 0

def check_index_registration(files):
    index_path = 'app/index.html'
    if not os.path.exists(index_path):
        return True
    
    with open(index_path, 'r', encoding='utf-8') as f:
        index_content = f.read()
        
    all_passed = True
    for f in files:
        basename = os.path.basename(f)
        topic_id = basename.split('_')[0].upper()
        
        pattern = r"\{id:\s*['\"]" + topic_id + r"['\"].*?\}"
        match = re.search(pattern, index_content)
        if match:
            obj_str = match.group(0).replace(' ', '')
            errs = []
            if 'notesReady:true' not in obj_str:
                errs.append(f"{topic_id} is marked as notesReady:false in app/index.html")
            if f"notesView:'notes-{topic_id.lower()}'" not in obj_str:
                errs.append(f"{topic_id} is missing notesView:'notes-{topic_id.lower()}' in app/index.html")
            
            if errs:
                print(f"[FAIL] {basename} (UI Accessibility):")
                for e in errs:
                    print(f"   [ERROR] {e}")
                all_passed = False
        else:
            print(f"[FAIL] {basename} (UI Accessibility):")
            print(f"   [ERROR] {topic_id} not found in TOPICS array in app/index.html")
            all_passed = False
            
    return all_passed

def run_validation(files):
    print("="*60)
    print(" TOPIC FORMAT & ACCESSIBILITY VALIDATOR ")
    print("="*60)
    
    ui_passed = check_index_registration(files)
    print("-" * 60)
    
    all_passed = True
    
    for f in files:
        validator = TopicValidator(f)
        passed = validator.validate()
        
        basename = os.path.basename(f)
        if passed and not validator.warnings:
            print(f"[OK] {basename} strictly adheres to the format.")
        else:
            print(f"[FAIL] {basename}:")
            for err in validator.errors:
                print(f"   [ERROR] {err}")
            for warn in validator.warnings:
                print(f"   [WARN]  {warn}")
            all_passed = False
            
    print("="*60)
    return all_passed

if __name__ == '__main__':
    # Default to t02..t06 if no args provided
    if len(sys.argv) > 1:
        files = sys.argv[1:]
    else:
        files = glob.glob('data/notes/t0*.js')
        
    run_validation(files)
