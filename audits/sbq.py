"""Run read-only SQL against a Supabase project via the Management API.
Usage: python sbq.py <prod|dev> "<sql>"   (or --file query.sql)
Token is read from .sb_token beside this script; never printed."""
import sys, os, json, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
TOKEN = open(os.path.join(HERE, '.sb_token'), encoding='utf-8').read().strip()
REFS = {'prod': 'vcofgjuwprylojgyfbtr', 'dev': 'wyudmkvelyhdtqezqinn'}

def run(which, sql):
    ref = REFS[which]
    req = urllib.request.Request(
        'https://api.supabase.com/v1/projects/%s/database/query' % ref,
        data=json.dumps({'query': sql}).encode('utf-8'),
        headers={'Authorization': 'Bearer ' + TOKEN,
                 'Content-Type': 'application/json',
                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
                               'AppleWebKit/537.36 (KHTML, like Gecko) '
                               'Chrome/128.0 Safari/537.36',
                 'Accept': 'application/json'},
        method='POST')
    try:
        with urllib.request.urlopen(req, timeout=90) as r:
            return json.loads(r.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        return {'__error': e.code, '__body': e.read().decode('utf-8')[:800]}

def show(rows, maxw=118):
    if isinstance(rows, dict):
        print('ERROR', rows.get('__error'), rows.get('__body', '')[:600]); return
    if not rows:
        print('(no rows)'); return
    cols = list(rows[0].keys())
    widths = {c: min(maxw, max(len(str(c)), max(len(str(r.get(c, ''))) for r in rows))) for c in cols}
    print(' | '.join(str(c)[:widths[c]].ljust(widths[c]) for c in cols))
    print('-+-'.join('-' * widths[c] for c in cols))
    for r in rows:
        print(' | '.join(str(r.get(c, ''))[:widths[c]].ljust(widths[c]) for c in cols))
    print('(%d rows)' % len(rows))

if __name__ == '__main__':
    which = sys.argv[1]
    if sys.argv[2] == '--file':
        sql = open(sys.argv[3], encoding='utf-8').read()
    else:
        sql = sys.argv[2]
    show(run(which, sql))
