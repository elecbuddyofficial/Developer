import json

def analyze_json_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
            print(f"\nFile: {filepath}")
            if isinstance(data, dict):
                for topic_key, questions in data.items():
                    if isinstance(questions, list):
                        cats = {}
                        for q in questions:
                            c = q.get('cat', 'UNKNOWN')
                            cats[c] = cats.get(c, 0) + 1
                        print(f"  Topic: {topic_key} (Total: {len(questions)})")
                        for c, count in cats.items():
                            print(f"    - {c}: {count}")
            elif isinstance(data, list):
                topics = {}
                for q in data:
                    t = q.get('topic', 'UNKNOWN')
                    c = q.get('cat', 'UNKNOWN')
                    if t not in topics:
                        topics[t] = {}
                    topics[t][c] = topics[t].get(c, 0) + 1
                
                for t, cats in topics.items():
                    print(f"  Topic: {t}")
                    for c, count in cats.items():
                        print(f"    - {c}: {count}")
    except Exception as e:
        print(f"Failed to analyze {filepath}: {e}")

analyze_json_file('data/quiz_data.json')
