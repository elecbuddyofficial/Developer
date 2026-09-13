# -*- coding: utf-8 -*-
"""Are the scheduled jobs running, and is any of them mailing too many people?

Two questions that only production can answer, and neither shows up in a test
suite or a screenshot.

A cron job that stops running fails silently and forever. Nothing errors,
nothing appears on a screen, and the first sign is a customer saying they never
got a reminder. So the runs are counted rather than assumed.

The volume check exists because of 12 Sep 2026. send-expiry-emails sent 165
messages that day against a baseline of nought to five: a grace backfill had
written the same date into 161 accounts and the mailer read it as 161
subscriptions lapsing at once. The guard that stops that is deployed, but a
guard is a rule about ONE cause. This watches the number itself, so the next
cause - whatever it turns out to be - is visible the morning after rather than
after somebody replies.

Usage:  python audits/cron_and_mail.py
Needs a Supabase access token; see the runner note at the bottom.
"""
import os, sys, json, urllib.request

TOKEN_PATHS = [
    os.environ.get('SB_TOKEN_FILE', ''),
    os.path.join(os.path.dirname(os.path.abspath(__file__)), '.sb_token'),
]
TOKEN = os.environ.get('SUPABASE_ACCESS_TOKEN', '')
for p in TOKEN_PATHS:
    if not TOKEN and p and os.path.exists(p):
        TOKEN = open(p, encoding='utf-8').read().strip()
if not TOKEN:
    print('  No Supabase access token. Set SUPABASE_ACCESS_TOKEN, or put one in')
    print('  audits/.sb_token (gitignored). Nothing was checked.')
    sys.exit(2)

REF = 'vcofgjuwprylojgyfbtr'
UA = ('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/128.0 Safari/537.36')


def q(sql):
    req = urllib.request.Request(
        'https://api.supabase.com/v1/projects/%s/database/query' % REF,
        data=json.dumps({'query': sql}).encode('utf-8'),
        headers={'Authorization': 'Bearer ' + TOKEN, 'Content-Type': 'application/json',
                 'User-Agent': UA, 'Accept': 'application/json'}, method='POST')
    with urllib.request.urlopen(req, timeout=90) as r:
        return json.loads(r.read().decode('utf-8'))


# How often each job should run, and how long a silence is too long.
EXPECTED_SILENCE_HOURS = {
    'send-expiry-emails': 36,
    'sweep-welcome-emails': 6,
    'purge-deleted-accounts': 36,
    'sync-razorpay-fees': 36,
    'fetch-maritime-news': 36,
}
# A day this far above the recent median is worth a look, not an alarm.
VOLUME_MULTIPLE = 6
VOLUME_FLOOR = 20        # below this, a spike is just a busy day

# Spikes already investigated. Listed so the sweep does not stay red over
# something understood, because a suite that is always failing is a suite
# nobody reads. Each entry needs the reason, not just the date.
KNOWN_SPIKES = {
    ('send-expiry-emails', '2026-09-12'):
        'the grace backfill wrote one date into 161 accounts; the mailer read '
        'it as 161 lapses. Guard deployed 12 Sep, see mail_guard.mjs',
}

problems = 0
print('')
print('  scheduled jobs')
print('  ' + '-' * 68)
rows = q("""
  select job,
         max(ran_at) as last_run,
         round(extract(epoch from (now() - max(ran_at))) / 3600.0, 1) as hours_ago,
         count(*) filter (where ran_at > now() - interval '14 days') as runs_14d,
         count(*) filter (where not ok and ran_at > now() - interval '14 days') as failed_14d
    from cron_runs group by job order by job;
""")
seen = set()
for r in rows:
    job = r['job']
    seen.add(job)
    limit = EXPECTED_SILENCE_HOURS.get(job)
    hours = float(r['hours_ago'])
    late = limit is not None and hours > limit
    bad = late or int(r['failed_14d']) > 0
    if bad:
        problems += 1
    print('   %-5s %-24s last ran %5.1fh ago, %s runs in 14d, %s failed'
          % ('FAIL' if bad else 'ok', job, hours, r['runs_14d'], r['failed_14d']))
    if late:
        print('         silent for longer than the %dh this job should ever be' % limit)

for job in EXPECTED_SILENCE_HOURS:
    if job not in seen:
        problems += 1
        print('   FAIL  %-24s has NEVER run, or its log was cleared' % job)

print('')
print('  mail volume, per job per day')
print('  ' + '-' * 68)
vol = q("""
  select job, ran_at::date as day, sum(sent) as sent
    from cron_runs
   where ran_at > now() - interval '30 days'
   group by 1, 2 order by 1, 2 desc;
""")
by_job = {}
for v in vol:
    by_job.setdefault(v['job'], []).append((str(v['day']), int(v['sent'] or 0)))

for job, days in sorted(by_job.items()):
    counts = sorted(n for _, n in days)
    if not counts:
        continue
    median = counts[len(counts) // 2]
    spikes = [(d, n) for d, n in days
              if n >= VOLUME_FLOOR and n > max(median, 1) * VOLUME_MULTIPLE]
    fresh = [(d, n) for d, n in spikes if (job, d) not in KNOWN_SPIKES]
    known = [(d, n) for d, n in spikes if (job, d) in KNOWN_SPIKES]

    if not fresh:
        print('   ok    %-24s median %d/day, highest %d' % (job, median, max(counts)))
    else:
        problems += len(fresh)
        print('   FAIL  %-24s median %d/day' % (job, median))
        for d, n in fresh:
            print('         %s sent %d, which is %dx the median' % (d, n, n // max(median, 1)))
    for d, n in known:
        print('         note %s sent %d, already explained:' % (d, n))
        print('              ' + KNOWN_SPIKES[(job, d)])

print('')
if problems:
    print('  %d thing(s) to look at.' % problems)
    print('')
    print('  A spike is not proof of a fault. It is proof that something changed')
    print('  the size of the audience, which is worth knowing either way.')
else:
    print('  Every job is running, none is failing, and no day stands out.')
sys.exit(1 if problems else 0)
