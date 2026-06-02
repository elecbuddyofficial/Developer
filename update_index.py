import re

def update_index():
    filepath = 'app/index.html'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the TOPICS array and replace notesView:null, notesReady:false
    # Example: {id:'T07',key:'T07_Control_PLC',name:'Control Systems & PLC',icon:'🖥️',notesView:null,notesReady:false}
    # Becomes: {id:'T07',key:'T07_Control_PLC',name:'Control Systems & PLC',icon:'🖥️',notesView:'notes-t07',notesReady:true}
    
    def repl(m):
        t_id = m.group(1).lower()
        return f"notesView:'notes-{t_id}',notesReady:true"
        
    new_content = re.sub(r"id:'(T\d+)'(.*?)notesView:null,notesReady:false", r"id:'\1'\2notesView:'notes-\1',notesReady:true", content)
    new_content = new_content.replace("'notes-T", "'notes-t") # Ensure lowercase
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Updated index.html to register all topics.")

if __name__ == "__main__":
    update_index()
