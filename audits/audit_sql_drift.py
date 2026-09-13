# -*- coding: utf-8 -*-
"""Which setup files would rebuild a database that refuses Sponsorship?

Narrowed on purpose. An earlier version of this tried to compare every declared
value list against every live CHECK and matched them by column NAME alone, so
it reported topic_activity.kind against coupons.kind and produced 84 findings,
none of them real. Before that it required a ',' or ')' after the CHECK and
found nothing at all while two known-stale files sat in front of it.

So this asks one question it can answer exactly: does a value list name the two
COC scopes and omit Sponsorship? That is the precise fault - a list written
before the third course existed - and it needs no cross-table matching to
detect.

Production is not in question. It accepts 'sponsorship' on all five of its
scope constraints, verified separately. These files are the stale side, and
they matter because they are what anyone would run to rebuild the schema.
"""
import os, re, sys
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

ROOT = r'D:\Notes 1\Original\ETO_Study_App'
SEARCH = [os.path.join(ROOT, 'app', 'admin'), os.path.join(ROOT, 'supabase')]

hits = []
scanned = 0
for base in SEARCH:
    for dirpath, _dirs, files in os.walk(base):
        for fn in files:
            if not fn.endswith('.sql'):
                continue
            path = os.path.join(dirpath, fn)
            scanned += 1
            src = open(path, encoding='utf-8').read()
            body = re.sub(r'--[^\n]*', '', src)          # drop line comments
            body = re.sub(r'/\*.*?\*/', '', body, flags=re.S)

            for m in re.finditer(r"IN\s*\(\s*((?:'[^']*'\s*,?\s*)+)\)", body, re.S):
                vals = set(re.findall(r"'([^']+)'", m.group(1)))
                # Only a CHECK constrains what the database will ACCEPT. The same
                # list in a WHERE clause is a query, and mapping the two COC
                # scopes to 'coc' in a backfill is correct rather than stale -
                # which is what the previous run flagged in the course-lock file.
                before = body[max(0, m.start() - 200):m.start()].upper()
                if 'CHECK' not in before:
                    continue
                if {'written', 'oral'} <= vals and 'sponsorship' not in vals:
                    line = body[:m.start()].count('\n') + 1
                    rel = os.path.relpath(path, ROOT).replace('\\', '/')
                    hits.append((rel, line, sorted(vals)))

print('')
print('  value lists naming Written and Oral but not Sponsorship')
print('  ' + '-' * 68)
if not hits:
    print('   none')
by_file = {}
for rel, line, vals in hits:
    by_file.setdefault(rel, []).append((line, vals))
for rel, rows in sorted(by_file.items()):
    print('   %s  (%d)' % (rel, len(rows)))
    for line, vals in rows[:6]:
        print('      around line %-5d %s' % (line, ', '.join(vals)))

print('')
print('   %d .sql file(s) scanned' % scanned)
print('')
if hits:
    print('  %d declaration(s) predate Sponsorship.' % len(hits))
    print('')
    print('  Nothing is broken today: production accepts sponsorship on every one')
    print('  of these columns. The risk is a rebuild, or anyone reading these files')
    print('  to learn what the schema allows.')
else:
    print('  No setup file declares a scope list that excludes Sponsorship.')
sys.exit(1 if hits else 0)
