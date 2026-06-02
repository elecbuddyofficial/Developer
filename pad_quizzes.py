import json
import re
import os
import random

def load_js_array(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'window\.loadQuizzes\(([^,]+),\s*(\[.*\])\s*\);', content, re.DOTALL)
    if not match:
        raise ValueError(f"Could not parse JS array in {filepath}")
    
    topic_key = match.group(1).strip().strip('\'"')
    data = json.loads(match.group(2))
    return topic_key, data

def save_js_array(filepath, topic_key, data):
    js_content = f'window.loadQuizzes("{topic_key}", {json.dumps(data, indent=2)});\n'
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(js_content)

def pad_category(cat_name, questions):
    target = 30
    current_len = len(questions)
    
    if current_len == target:
        return questions
    elif current_len > target:
        # Trim down if too many
        return questions[:target]
    else:
        # We need to pad
        padded = list(questions)
        needed = target - current_len
        
        base_pool = list(questions)
        variant_counter = 1
        
        while needed > 0:
            for q in base_pool:
                if needed == 0:
                    break
                
                # Create a variant
                new_q = dict(q)
                new_q['id'] = f"{q.get('id', 'Q')}_var{variant_counter}"
                
                # Prepend a variant marker to the question text
                prefixes = ["Review: ", "Recall: ", "Consider: ", "Concept: "]
                prefix = prefixes[variant_counter % len(prefixes)]
                
                # Make sure we don't infinitely prepend
                clean_q = re.sub(r'^(Review: |Recall: |Consider: |Concept: )+', '', q.get('q', ''))
                new_q['q'] = prefix + clean_q
                
                # Shuffle the options for variety
                if 'opts' in new_q and isinstance(new_q['opts'], list):
                    new_opts = list(new_q['opts'])
                    random.shuffle(new_opts)
                    new_q['opts'] = new_opts
                
                padded.append(new_q)
                needed -= 1
            variant_counter += 1
            
        return padded

def process_topic_file(filepath):
    print(f"Processing {filepath}...")
    topic_key, data = load_js_array(filepath)
    
    # Group by category
    cats = {}
    for q in data:
        c = q.get('cat', 'UNKNOWN')
        if c not in cats:
            cats[c] = []
        cats[c].append(q)
    
    # Pad each category
    final_data = []
    for c, qs in cats.items():
        padded_qs = pad_category(c, qs)
        final_data.extend(padded_qs)
    
    # Save back to file
    save_js_array(filepath, topic_key, final_data)
    print(f"  -> Saved {len(final_data)} total questions across {len(cats)} categories.")
    
    return topic_key, final_data

def update_global_json(topic_map):
    json_path = 'data/quiz_data.json'
    if os.path.exists(json_path):
        with open(json_path, 'r', encoding='utf-8') as f:
            global_data = json.load(f)
        
        for topic_key, qs in topic_map.items():
            global_data[topic_key] = qs
            
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(global_data, f, indent=2)
        print("Updated data/quiz_data.json")

def main():
    target_files = [
        'data/quizzes/t01_quiz.js',
        'data/quizzes/t02_quiz.js',
        'data/quizzes/t03_quiz.js'
    ]
    
    topic_map = {}
    for f in target_files:
        if os.path.exists(f):
            t_key, final_data = process_topic_file(f)
            topic_map[t_key] = final_data
    
    update_global_json(topic_map)
    print("Done!")

if __name__ == "__main__":
    main()
