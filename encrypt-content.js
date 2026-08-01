#!/usr/bin/env node
/**
 * Elec-Buddy content encryption / decryption script
 *
 * Usage:
 *   node encrypt-content.js --group=oral      — encrypt all plain Oral files
 *   node encrypt-content.js --group=written   — encrypt all plain Written files
 *   node encrypt-content.js --group=oral --decrypt     — restore Oral files for editing
 *   node encrypt-content.js --group=written --decrypt  — restore Written files for editing
 *
 *   node encrypt-content.js --group=oral --status      — report each file's
 *     current state (encrypted / PLAINTEXT / free-preview) without changing
 *     anything. Run this before ending any session that touched content —
 *     any "PLAINTEXT" line outside the free-preview files means something
 *     was left decrypted and needs `--group=X` (no --decrypt) to fix.
 *
 * --- Scoped mode (RECOMMENDED — use this instead of whole-group whenever
 *     you only need to touch specific files) ---
 *   node encrypt-content.js --group=oral --decrypt --files=data/Orals/notes/t16_notes.js,data/Orals/notes/t04_notes.js
 *   ...edit just those files...
 *   node encrypt-content.js --group=oral --files=data/Orals/notes/t16_notes.js,data/Orals/notes/t04_notes.js
 *
 *   Whole-group decrypt (no --files) puts every file in the group into
 *   plaintext at once, which then requires manually `git checkout --`ing
 *   back everything you're NOT editing before you're done — a step that has
 *   twice now been gotten wrong across multi-round sessions (an
 *   exclude-list rebuilt by hand each round is easy to under-scope, and it
 *   fails silently: no error, it just re-encrypts the original content with
 *   a fresh IV, quietly discarding real edits). Scoped mode sidesteps the
 *   whole bug class: only the files you name are ever touched, so there is
 *   no "restore everything else" step to get wrong, no matter how many
 *   rounds/topics you work through in one session. Prefer it by default;
 *   fall back to whole-group only when you genuinely mean to touch most/all
 *   of a group in one pass.
 *
 * data/Sponsorship/** is deliberately NOT in any group — it's permanently
 * public/plaintext and this script never touches it.
 *
 * Required env var (matching the chosen --group):
 *   CONTENT_KEY_ORAL / CONTENT_KEY_WRITTEN — 64 hex characters (32 bytes / 256-bit AES key)
 *
 * Generate a key once and store it in Supabase secrets + your own notes:
 *   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
 */

const crypto = require('crypto');
const fs     = require('fs');
const path   = require('path');

const KEY_GROUPS = {
    oral: {
        keyEnv: 'CONTENT_KEY_ORAL',
        dirs: [
            'data/Orals/notes',
            'data/Orals/quizzes',
            'data/Orals/videos',
            'data/Orals/SurveyorQA',
        ],
    },
    written: {
        keyEnv: 'CONTENT_KEY_WRITTEN',
        dirs: [
            'data/Written',
            'data/Written/notes',
        ],
    },
};

const groupArg = process.argv.find(a => a.startsWith('--group='));
const groupName = groupArg && groupArg.split('=')[1];
const group = groupName && KEY_GROUPS[groupName];
if (!group) {
    console.error('ERROR: Pass --group=oral or --group=written');
    process.exit(1);
}

const KEY_HEX = process.env[group.keyEnv];
if (!KEY_HEX || KEY_HEX.length !== 64) {
    console.error(`ERROR: Set ${group.keyEnv} to a 64-hex-character string (32 bytes).`);
    console.error('Generate one with: node -e "console.log(require(\'crypto\').randomBytes(32).toString(\'hex\'))"');
    process.exit(1);
}

const KEY     = Buffer.from(KEY_HEX, 'hex');
const DECRYPT = process.argv.includes('--decrypt');
const STATUS  = process.argv.includes('--status');

const filesArg = process.argv.find(a => a.startsWith('--files='));
// Paths as given on the command line (e.g. "data/Orals/notes/t16_notes.js"),
// normalized to forward slashes so comparisons work the same on Windows.
const scopedFiles = filesArg
    ? filesArg.split('=')[1].split(',').map(f => f.trim().replace(/\\/g, '/')).filter(Boolean)
    : null;

// Free preview files — keep plain JS so non-subscribers can see the preview
const FREE_PREFIXES = ['t01_', 'w01_'];

function encrypt(plaintext) {
    const iv       = crypto.randomBytes(12); // 96-bit IV for AES-GCM
    const cipher   = crypto.createCipheriv('aes-256-gcm', KEY, iv);
    const data     = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
    const tag      = cipher.getAuthTag();
    return JSON.stringify({ v: 1, iv: iv.toString('base64'), data: data.toString('base64'), tag: tag.toString('base64') });
}

function decrypt(json) {
    const { iv, data, tag } = JSON.parse(json);
    const decipher = crypto.createDecipheriv('aes-256-gcm', KEY, Buffer.from(iv, 'base64'));
    decipher.setAuthTag(Buffer.from(tag, 'base64'));
    return Buffer.concat([decipher.update(Buffer.from(data, 'base64')), decipher.final()]).toString('utf8');
}

function isEncrypted(content) {
    try { const p = JSON.parse(content); return !!(p && p.v === 1 && p.iv && p.data && p.tag); }
    catch (e) { return false; }
}

const base = __dirname;

// Build the candidate file list: either every .js file under the group's
// dirs (whole-group mode), or exactly the paths named by --files (scoped
// mode) — validated to actually belong to this group, so a typo or the
// wrong --group can't silently touch/skip the wrong files.
function collectCandidates() {
    if (scopedFiles) {
        const groupDirsNorm = group.dirs.map(d => d.replace(/\\/g, '/'));
        return scopedFiles.map(relPath => {
            const relDir = relPath.split('/').slice(0, -1).join('/');
            const inGroup = groupDirsNorm.some(d => d === relDir);
            const fullPath = path.join(base, relPath);
            return { relPath, fullPath, inGroup, exists: fs.existsSync(fullPath) };
        });
    }
    const out = [];
    for (const dir of group.dirs) {
        const fullDir = path.join(base, dir);
        if (!fs.existsSync(fullDir)) { console.warn('Skipping (dir not found):', dir); continue; }
        for (const file of fs.readdirSync(fullDir)) {
            if (!file.endsWith('.js')) continue;
            const relPath = (dir + '/' + file).replace(/\\/g, '/');
            out.push({ relPath, fullPath: path.join(fullDir, file), inGroup: true, exists: true });
        }
    }
    return out;
}

const candidates = collectCandidates();
let hadScopeError = false;
for (const c of candidates) {
    if (!c.exists) { console.error('ERROR: File not found:', c.relPath); hadScopeError = true; }
    else if (!c.inGroup) { console.error(`ERROR: ${c.relPath} is not under group "${groupName}"'s directories — wrong --group, or a typo'd path.`); hadScopeError = true; }
}
if (hadScopeError) { console.error('\nAborting — fix the --files list above before running.'); process.exit(1); }

if (STATUS) {
    let plaintextCount = 0, encryptedCount = 0, freeCount = 0;
    for (const c of candidates) {
        const file = path.basename(c.relPath);
        const isFree = FREE_PREFIXES.some(p => file.toLowerCase().startsWith(p));
        const content = fs.readFileSync(c.fullPath, 'utf8').trim();
        if (isFree) { console.log('FREE-PREVIEW (always plaintext):', c.relPath); freeCount++; continue; }
        if (isEncrypted(content)) { console.log('encrypted:', c.relPath); encryptedCount++; }
        else { console.log('PLAINTEXT:', c.relPath); plaintextCount++; }
    }
    console.log(`\n${candidates.length} file(s) checked in group "${groupName}": ${encryptedCount} encrypted, ${plaintextCount} PLAINTEXT, ${freeCount} free-preview.`);
    if (plaintextCount > 0) {
        console.log('\n⚠️  PLAINTEXT files above are not free-preview — they need re-encrypting:');
        console.log(`     node encrypt-content.js --group=${groupName} --files=<comma-separated paths>`);
    }
    process.exit(0);
}

let count = 0;
for (const c of candidates) {
    const file = path.basename(c.relPath);
    if (FREE_PREFIXES.some(p => file.toLowerCase().startsWith(p))) {
        console.log('Skipping (free):', c.relPath);
        continue;
    }
    const content = fs.readFileSync(c.fullPath, 'utf8').trim();

    if (DECRYPT) {
        if (isEncrypted(content)) {
            fs.writeFileSync(c.fullPath, decrypt(content) + '\n');
            console.log('Decrypted:', c.relPath);
            count++;
        } else if (scopedFiles) {
            console.log('Already plaintext, skipping:', c.relPath);
        }
    } else {
        if (!isEncrypted(content)) {
            fs.writeFileSync(c.fullPath, encrypt(content));
            console.log('Encrypted:', c.relPath);
            count++;
        } else if (scopedFiles) {
            console.log('Already encrypted, skipping:', c.relPath);
        }
    }
}

console.log(`\nDone: ${count} file(s) ${DECRYPT ? 'decrypted' : 'encrypted'} in group "${groupName}"${scopedFiles ? ' (scoped)' : ''}.`);
if (!DECRYPT && count > 0) {
    console.log('\nNext steps:');
    console.log('  1. Make sure get-content-key is deployed with the matching secret set:');
    console.log(`     supabase secrets set ${group.keyEnv}=${KEY_HEX}`);
    console.log('  2. Bump sw.js VERSION so the re-encrypted files aren\'t served stale from cache.');
    console.log(`  3. Run --status to confirm nothing else in the group was left plaintext:`);
    console.log(`     node encrypt-content.js --group=${groupName} --status`);
}
