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
let count = 0;

for (const dir of group.dirs) {
    const fullDir = path.join(base, dir);
    if (!fs.existsSync(fullDir)) { console.warn('Skipping (not found):', dir); continue; }

    for (const file of fs.readdirSync(fullDir)) {
        if (!file.endsWith('.js')) continue;
        if (FREE_PREFIXES.some(p => file.toLowerCase().startsWith(p))) {
            console.log('Skipping (free):', path.join(dir, file));
            continue;
        }
        const filePath = path.join(fullDir, file);
        const content  = fs.readFileSync(filePath, 'utf8').trim();

        if (DECRYPT) {
            if (isEncrypted(content)) {
                fs.writeFileSync(filePath, decrypt(content) + '\n');
                console.log('Decrypted:', path.join(dir, file));
                count++;
            }
        } else {
            if (!isEncrypted(content)) {
                fs.writeFileSync(filePath, encrypt(content));
                console.log('Encrypted:', path.join(dir, file));
                count++;
            }
        }
    }
}

console.log(`\nDone: ${count} file(s) ${DECRYPT ? 'decrypted' : 'encrypted'} in group "${groupName}".`);
if (!DECRYPT && count > 0) {
    console.log('\nNext steps:');
    console.log('  1. Make sure get-content-key is deployed with the matching secret set:');
    console.log(`     supabase secrets set ${group.keyEnv}=${KEY_HEX}`);
    console.log('  2. Bump sw.js VERSION so the re-encrypted files aren\'t served stale from cache.');
}
