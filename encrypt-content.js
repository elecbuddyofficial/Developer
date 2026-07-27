#!/usr/bin/env node
/**
 * Elec-Buddy content encryption / decryption script
 *
 * Usage:
 *   node encrypt-content.js           — encrypt all plain content files
 *   node encrypt-content.js --decrypt — restore plain files for editing
 *
 * Required env var:
 *   CONTENT_KEY  — 64 hex characters (32 bytes / 256-bit AES key)
 *
 * Generate a key once and store it in Supabase secrets + your own notes:
 *   node -e "require('crypto').randomBytes(32).toString('hex').then?.(console.log):console.log(require('crypto').randomBytes(32).toString('hex'))"
 */

const crypto = require('crypto');
const fs     = require('fs');
const path   = require('path');

const KEY_HEX = process.env.CONTENT_KEY;
if (!KEY_HEX || KEY_HEX.length !== 64) {
    console.error('ERROR: Set CONTENT_KEY to a 64-hex-character string (32 bytes).');
    console.error('Generate one with: node -e "console.log(require(\'crypto\').randomBytes(32).toString(\'hex\'))"');
    process.exit(1);
}

const KEY     = Buffer.from(KEY_HEX, 'hex');
const DECRYPT = process.argv.includes('--decrypt');

// All directories containing content JS files
const CONTENT_DIRS = [
    'data/Orals/notes',
    'data/Orals/quizzes',
    'data/Orals/videos',
    'data/Orals/SurveyorQA',
    'data/Written/notes',
    'data/Sponsorship/overview',
    'data/Sponsorship/fundamentals',
    'data/Sponsorship/aptitude',
    'data/Sponsorship/CompanyQA',
    'data/Sponsorship/interview',
];

// Free preview files — keep plain JS so non-subscribers can see the preview
// Sponsorship free: s00 (overview), f01 (DC circuits), apt (aptitude strategy), ip01 (GD)
const FREE_PREFIXES = ['t01_', 'w01_', 's00_', 'f01_', 'apt_', 'ip01_'];

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

for (const dir of CONTENT_DIRS) {
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

console.log(`\nDone: ${count} file(s) ${DECRYPT ? 'decrypted' : 'encrypted'}.`);
if (!DECRYPT && count > 0) {
    console.log('\nNext steps:');
    console.log('  1. Deploy the get-content-key Edge Function to Supabase');
    console.log('  2. Set CONTENT_KEY as a Supabase secret: supabase secrets set CONTENT_KEY=' + KEY_HEX);
    console.log('  3. Deploy the updated app (sw.js v22 will cache encrypted files)');
}
