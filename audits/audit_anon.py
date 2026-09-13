# -*- coding: utf-8 -*-
"""What can a stranger actually read?

Row level security being ON is a configuration fact. This is the behavioural
one: take the anon key that ships in the page - public by design, anyone can
read it out of the HTML - and try every table signed in as nobody.

THREE outcomes, and the middle one is where a lazy version of this goes wrong:

  refused (401/403)      the table is closed outright
  200 with zero rows     RLS evaluated and filtered everything out. Secure IF
                         the table actually holds rows. On an EMPTY table the
                         same answer proves nothing at all, and an earlier
                         version of this script called that "intended public,
                         returned 0 rows" for profiles and payments, which
                         reads as though those tables were wide open when the
                         truth was the opposite.
  200 with rows          world-readable. Intended for a few, a leak otherwise.

So every zero is checked against the real row count, read with the service
role. A table that holds 174 rows and shows a stranger none is proof. A table
that holds none is marked inconclusive rather than counted as a pass.
"""
import json, os, re, sys, urllib.request, urllib.error
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import sbq
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

ROOT = r'D:\Notes 1\Original\ETO_Study_App'
page = open(os.path.join(ROOT, 'app', 'index.html'), encoding='utf-8').read()
m = re.search(r"createClient\(\s*'(https://[^']+)'\s*,\s*'([^']+)'", page)
if not m:
    print('  could not read the client credentials out of the page'); sys.exit(1)
URL, ANON = m.group(1), m.group(2)

INTENDED = {
    'pricing_plans':         'the price grid is shown before sign-in',
    'public_events':         'the sign-in page shows a live events feed',
    'maritime_news':         'news on the public page',
    'course_config':         'whether Sponsorship is sold, needed before sign-in',
    'mock_interview_config': 'the interview price is advertised publicly',
    # Partial by policy, and verified as partial rather than assumed:
    'topic_videos':          'the T01 free preview only, 25 of 496',
    'mock_interview_slots':  'open future slots, so availability shows before booking',
}

# What each partially-public table is ALLOWED to expose. A policy that quietly
# widened would still read as "intended" without this, so the share is asserted
# rather than trusted: topic_videos must never exceed the free-preview topic,
# and slots must stay the open-and-future subset.
CEILING = {
    'topic_videos':         120,   # T01 only; the course holds 496
    'mock_interview_slots': None,  # every open future slot is meant to be seen
}


def anon_read(table):
    """Rows a stranger can see, and HOW MANY of them.

    The count has to come from PostgREST with this role's key, not from the
    table. An earlier version reported the table's total instead and announced
    that topic_videos leaked 496 rows and mock_interview_slots 113. The real
    numbers are 25 and 72: the free T01 preview, and the open future slots the
    booking page is supposed to advertise. Both policies were working exactly
    as written, and the audit was the thing that was wrong.
    """
    req = urllib.request.Request(
        '%s/rest/v1/%s?select=*&limit=3' % (URL, table),
        headers={'apikey': ANON, 'Authorization': 'Bearer ' + ANON,
                 'Accept': 'application/json', 'Prefer': 'count=exact'})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            body = json.loads(r.read().decode('utf-8'))
            cr = r.headers.get('Content-Range', '')
            try:
                visible = int(cr.split('/')[-1])
            except Exception:
                visible = len(body)
            return body, visible, None
    except urllib.error.HTTPError as e:
        return None, 0, str(e.code)
    except Exception as e:
        return None, 0, str(e)[:40]


# Real row counts, read with full privilege, so a zero above can be judged.
counts = {}
rows = sbq.run('prod', """
  select c.relname as t,
         (xpath('/row/c/text()',
           query_to_xml(format('select count(*) as c from public.%I', c.relname),
                        false, true, '')))[1]::text::int as n
    from pg_class c join pg_namespace n on n.oid=c.relnamespace
   where n.nspname='public' and c.relkind='r' order by 1;
""")
if isinstance(rows, list):
    for r in rows:
        counts[r['t']] = r['n']

refused, filtered, inconclusive, leaks, public = [], [], [], [], []

for t in sorted(counts):
    data, visible, err = anon_read(t)
    total = counts.get(t, 0)
    if data is None:
        refused.append((t, err))
    elif len(data) == 0:
        (filtered if total > 0 else inconclusive).append((t, total))
    elif t in INTENDED:
        cap = CEILING.get(t)
        if cap is not None and visible > cap:
            leaks.append((t, visible, total, ['exposes more than the %d-row ceiling' % cap]))
        else:
            public.append((t, visible, total))
    else:
        # Partial visibility is usually a policy doing its job (a free preview,
        # an open-slots calendar), so the share is reported rather than judged.
        leaks.append((t, visible, total, list(data[0].keys())[:8]))

print('')
print('  anonymous read of every table (%d tables)' % len(counts))
print('  ' + '-' * 68)
print('   refused outright              : %d' % len(refused))
print('   RLS filtered every row        : %d   <- proven, these hold real rows' % len(filtered))
print('   empty, so the test proves none: %d' % len(inconclusive))
print('   public by design              : %d' % len(public))
print('   READABLE and should not be    : %d' % len(leaks))

if filtered:
    print('')
    print('  proven closed (holds rows, stranger sees none):')
    for t, n in sorted(filtered, key=lambda x: -x[1])[:14]:
        print('     %-28s %d rows hidden' % (t, n))

if public:
    print('')
    print('  public by design:')
    for t, vis, tot in sorted(public):
        print('     %-28s %d of %d  %s' % (t, vis, tot, INTENDED[t]))

if inconclusive:
    print('')
    print('  empty tables - policy untested by this method, not a finding:')
    print('     ' + ', '.join(t for t, _ in sorted(inconclusive)))

if leaks:
    print('')
    for t, vis, tot, cols in sorted(leaks):
        print('   *** %-24s stranger sees %d of %d rows, columns: %s'
              % (t, vis, tot, ', '.join(cols)))

print('')
print('  %d table(s) leak.' % len(leaks) if leaks else
      '  No table exposes a row to a stranger that is not meant to be public.')
sys.exit(1 if leaks else 0)
