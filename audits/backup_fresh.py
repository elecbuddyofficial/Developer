# -*- coding: utf-8 -*-
"""Is the local plaintext copy of the Oral notes still the same as the real thing?

    python audits/backup_fresh.py           report
    python audits/backup_fresh.py --fix     rewrite the stale copies from live

WHY THIS EXISTS. data/Orals/Backup/notes/ holds all 23 topics in plaintext. It
is deliberate, it is gitignored, and CLAUDE.md tells you not to encrypt or
delete it. What CLAUDE.md did not say is that nothing keeps it up to date.

On 24 Sep 2026 every file in it was thousands of characters behind the live
encrypted copy. T22 there still carried "1000 V DC" for a 440 V megger test,
a figure corrected to 500 V weeks earlier. A coverage check run against that
mirror reported gaps that were already filled and missed ones that were real,
and the notes were nearly "corrected" back to the wrong values.

The mirror is convenient precisely because it is greppable without a key, so
the fix is not to delete it. The fix is for something to notice when it lies.

Exits 2, not 1, when it cannot check: no Backup folder (most clones), or no
CONTENT_KEY_ORAL. That is "unchecked", which run_all reports apart from a
failure, because a suite that is permanently red stops being read.
"""
import base64
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
LIVE = os.path.join(ROOT, 'data', 'Orals', 'notes')
MIRROR = os.path.join(ROOT, 'data', 'Orals', 'Backup', 'notes')
FIX = '--fix' in sys.argv


def decrypt(raw, key):
    """AES-256-GCM, the same envelope encrypt-content.js writes."""
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM
    o = json.loads(raw)
    aes = AESGCM(bytes.fromhex(key))
    blob = base64.b64decode(o['data']) + base64.b64decode(o['tag'])
    return aes.decrypt(base64.b64decode(o['iv']), blob, None).decode('utf-8')


if not os.path.isdir(MIRROR):
    print('  No data/Orals/Backup/notes on this machine, so there is nothing to')
    print('  fall out of date. Nothing checked.')
    sys.exit(2)

KEY = os.environ.get('CONTENT_KEY_ORAL')
if not KEY:
    print('  CONTENT_KEY_ORAL is not exported, so the live files cannot be read.')
    print('  Export it (DecryptEncrypt/Decrypt.txt) and run this again.')
    sys.exit(2)

try:
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM  # noqa: F401
except ImportError:
    print('  The cryptography package is not installed: pip install cryptography')
    sys.exit(2)

stale, missing, same, unreadable = [], [], [], []

for name in sorted(os.listdir(LIVE)):
    if not name.endswith('_notes.js'):
        continue
    live_raw = open(os.path.join(LIVE, name), encoding='utf-8').read()
    try:
        live = decrypt(live_raw, KEY) if live_raw.lstrip().startswith('{"v":1') else live_raw
    except Exception as e:                      # a key that does not match this file
        unreadable.append('%s (%s)' % (name, str(e)[:40]))
        continue

    mirror_path = os.path.join(MIRROR, name)
    if not os.path.exists(mirror_path):
        missing.append(name)
        if FIX:
            open(mirror_path, 'w', encoding='utf-8', newline='').write(live)
        continue

    have = open(mirror_path, encoding='utf-8', newline='').read()
    # The mirror is for reading, so line endings, a BOM and a trailing newline
    # are all noise. The trailing newline matters in particular: encrypting a
    # file drops it, so comparing it would report every topic stale after every
    # encrypt cycle. A check that is always red is a check nobody reads, and
    # that is the failure this whole file exists to prevent.
    norm = lambda s: s.replace('\r\n', '\n').lstrip('﻿').rstrip('\n')
    if norm(have) == norm(live):
        same.append(name)
    else:
        stale.append((name, len(norm(live)) - len(norm(have))))
        if FIX:
            open(mirror_path, 'w', encoding='utf-8', newline='').write(live)

if unreadable:
    print('  Could not decrypt: %s' % ', '.join(unreadable))
    print('  The key does not match these files. Nothing checked.')
    sys.exit(2)

if FIX:
    print('  Refreshed %d file(s), added %d, %d were already current.'
          % (len(stale), len(missing), len(same)))
    sys.exit(0)

if not stale and not missing:
    print('  All %d Oral notes in data/Orals/Backup/notes match the live files.' % len(same))
    sys.exit(0)

print('')
for name, delta in stale:
    print('  STALE    %-18s live is %+d characters against the copy' % (name, delta))
for name in missing:
    print('  MISSING  %-18s not in the mirror at all' % name)
print('')
print('  %d stale, %d missing, %d current.' % (len(stale), len(missing), len(same)))
print('  Grepping that mirror right now would give you the wrong answer about')
print('  what the notes say. Refresh it:  python audits/backup_fresh.py --fix')
sys.exit(1)
