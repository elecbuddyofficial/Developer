#!/usr/bin/env node
/* Finance ledger: schema and policy invariants.
   Run: node _finance.cjs

   There is no Postgres here to apply the file against, so this is static
   analysis. That makes WHAT it checks the whole question: a check that only
   confirms the file looks plausible is worse than none, because it reads as
   coverage. Each one below is aimed at a specific way this schema could be
   wrong while still applying cleanly.

   1. THE 6x OVERSTATEMENT. 22 rows in public.payments sit at status
      'created' and were never paid. Any revenue read that forgets
      `status = 'paid'` reports ₹19,456 against a real ₹3,101.14. So the
      filter must exist in v_finance_revenue, and no page may read
      public.payments for money directly. Checked here for the SQL, and for
      the pages once they exist.

   2. THE AUTO-ASSIGNMENT. "A partner never assigns their own expense" is
      only true if the INSERT policy pins partner_id to
      current_partner_id(). A column DEFAULT alone is decoration: a POST
      straight to the REST API overrides a default and would sail through.

   3. VIEWS AS AN RLS BYPASS. A view runs with its owner's rights unless it
      says security_invoker. v_finance_revenue selects from public.payments,
      which is RLS-protected, so a view missing that option is a hole
      through which any authenticated user reads every payment in the
      business.

   4. SOFT DELETE MEANING SOFT. Every deletable table carries deleted_at and
      no DELETE policy. One stray DELETE policy makes the audit trail
      optional.

   5. FLOATS IN MONEY. Every money column is integer paise. A NUMERIC or
      DOUBLE PRECISION column would work for months and then be out by
      fractions of a paisa in a way nobody can reconcile.

   6. DROP/CREATE POLICY NAME DRIFT. The file is re-runnable only because
      each CREATE POLICY is preceded by a DROP of the SAME name. A typo in
      one of the pair leaves the old policy in place alongside the new one,
      and RLS policies OR together: the stale permissive one silently wins.
      This is invisible on a first apply and only appears on a re-run.

   Comments are stripped before any of this. An earlier check in this repo
   failed on its own documentation, because the prose describing a hazard
   contained the pattern it was looking for. */

const fs = require('fs');

// Overridable so the checks can be mutation-tested against a deliberately
// broken copy. A check nobody has watched fail is not known to work.
const SQL = process.argv[2] || 'app/admin/finance_setup.sql';

let fails = 0, checks = 0;
function ok(cond, label, detail) {
  checks++;
  if (cond) { console.log('  ok    ' + label); return true; }
  fails++;
  console.log('  FAIL  ' + label + (detail ? '\n          ' + detail : ''));
  return false;
}

/* ── Strip SQL comments and string literals ───────────────────────────
   Line comments and single-quoted strings both hide patterns that would
   otherwise trip the scans below. Dollar-quoted function bodies are kept:
   the search_path check needs to see inside them. */
// Comments only, string literals kept. Needed on its own because some checks
// care WHICH values a statement names, and blanking the literals would throw
// exactly the information away.
function stripSqlComments(src) {
  let out = '', i = 0;
  while (i < src.length) {
    if (src[i] === '-' && src[i + 1] === '-') {
      while (i < src.length && src[i] !== '\n') i++;
      continue;
    }
    out += src[i++];
  }
  return out;
}

// CSS /* */ and JS // comments, for scanning the page. The `//` rule only
// fires at the start of a line so that https:// inside a URL survives.
function stripPageComments(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^[ \t]*\/\/.*$/gm, '');
}

function strip(src) {
  let out = '', i = 0;
  while (i < src.length) {
    if (src[i] === '-' && src[i + 1] === '-') {
      while (i < src.length && src[i] !== '\n') i++;
      continue;
    }
    if (src[i] === "'") {
      out += "''";                       // keep a placeholder token
      i++;
      while (i < src.length) {
        if (src[i] === "'" && src[i + 1] === "'") { i += 2; continue; }
        if (src[i] === "'") { i++; break; }
        i++;
      }
      continue;
    }
    out += src[i++];
  }
  return out;
}

/* ── Pull the body of a CREATE TABLE, parentheses balanced ───────────── */
function tableBody(sql, name) {
  const at = sql.search(new RegExp('CREATE TABLE IF NOT EXISTS public\\.' + name + '\\s*\\(', 'i'));
  if (at === -1) return null;
  const open = sql.indexOf('(', at);
  let d = 0;
  for (let j = open; j < sql.length; j++) {
    if (sql[j] === '(') d++;
    else if (sql[j] === ')') { d--; if (d === 0) return sql.slice(open + 1, j); }
  }
  return null;
}

/* ── Pull a CREATE VIEW body up to its terminating semicolon ─────────── */
function viewBody(sql, name) {
  const at = sql.search(new RegExp('CREATE VIEW public\\.' + name + '\\b', 'i'));
  if (at === -1) return null;
  const end = sql.indexOf(';', at);
  return end === -1 ? null : sql.slice(at, end);
}

const raw = fs.readFileSync(SQL, 'utf8');
const sql = strip(raw);

const TABLES = [
  'partners', 'partner_shares', 'expense_categories', 'recurring_expenses',
  'expenses', 'payment_finance', 'manual_income', 'partner_transactions',
  'finance_config',
];
const VIEWS = [
  'v_finance_revenue', 'v_finance_expenses', 'v_finance_pnl_monthly',
  'v_finance_totals', 'v_partner_statement',
];
// Tables where a row must never actually leave.
const SOFT_DELETE = ['expenses', 'manual_income', 'partner_transactions'];
// Tables carrying the auto-assignment rule.
const OWNED = ['expenses', 'partner_transactions', 'recurring_expenses'];

console.log('\nSTRUCTURE');
TABLES.forEach(function (t) {
  ok(tableBody(sql, t) !== null, 'table public.' + t + ' created');
});
VIEWS.forEach(function (v) {
  ok(viewBody(sql, v) !== null, 'view public.' + v + ' created');
});
// A view that is replaced rather than dropped cannot change its column list,
// so a re-run of an edited file would fail with a confusing error.
VIEWS.forEach(function (v) {
  ok(new RegExp('DROP VIEW IF EXISTS public\\.' + v + '\\b').test(sql),
     v + ' dropped before create (re-runnable)');
});

console.log('\nRLS ENABLED');
TABLES.forEach(function (t) {
  ok(new RegExp('ALTER TABLE public\\.' + t + '\\s+ENABLE ROW LEVEL SECURITY').test(sql),
     'RLS on public.' + t);
});

console.log('\nSOFT DELETE IS THE ONLY DELETE');
ok(!/FOR\s+DELETE/i.test(sql), 'no DELETE policy anywhere in the file',
   'A DELETE policy makes the audit trail optional. Use deleted_at.');
SOFT_DELETE.forEach(function (t) {
  const b = tableBody(sql, t) || '';
  ok(/deleted_at\s+TIMESTAMPTZ/i.test(b), t + ' has deleted_at');
  ok(/delete_reason/i.test(b) && /CHECK\s*\(\s*deleted_at IS NULL OR delete_reason IS NOT NULL\s*\)/i.test(b),
     t + ' cannot be deleted without a reason');
});

console.log('\nAUTO-ASSIGNMENT (the core rule)');
OWNED.forEach(function (t) {
  const b = tableBody(sql, t) || '';
  ok(/partner_id\s+UUID NOT NULL REFERENCES public\.partners\(id\)/i.test(b),
     t + '.partner_id is NOT NULL and a real FK');
  // The DEFAULT is convenience. The policy is the enforcement. Both required:
  // the default alone is overridable by any client that sends the column.
  ok(new RegExp('CREATE POLICY[^;]+ON public\\.' + t +
                '\\s+FOR INSERT WITH CHECK \\(partner_id = public\\.current_partner_id\\(\\)\\)', 'i').test(sql),
     t + ' INSERT policy pins partner_id to the caller',
     'Without this the DEFAULT is decoration and a direct POST can name anyone.');
});
ok(/DEFAULT public\.current_partner_id\(\)/.test(tableBody(sql, 'expenses') || ''),
   'expenses.partner_id defaults from the session');

console.log('\nVIEWS CANNOT BYPASS RLS');
VIEWS.forEach(function (v) {
  const b = viewBody(sql, v) || '';
  ok(/WITH\s*\(\s*security_invoker\s*=\s*true\s*\)/i.test(b),
     v + ' is security_invoker');
});

console.log('\nTHE 6x OVERSTATEMENT');
const rev = viewBody(sql, 'v_finance_revenue') || '';
ok(/p\.status IN \(/.test(rev), 'v_finance_revenue filters on payments.status');
// Read from the RAW source, because strip() blanks string literals and the
// whole point here is WHICH statuses are listed. "filters on status" would
// pass just as happily with 'created' added back into the list, which is the
// exact mistake this file exists to prevent.
const rawRev = (function () {
  // Comments stripped first. The file's own header explains this view and
  // names it, so searching the raw text matched the documentation and
  // returned an empty status list. The check caught it, which is the point.
  const nc = stripSqlComments(raw);
  const at = nc.search(/CREATE VIEW public\.v_finance_revenue\b/);
  const end = at === -1 ? -1 : nc.indexOf(';', at);
  return at === -1 || end === -1 ? '' : nc.slice(at, end);
})();
const statuses = (rawRev.match(/p\.status IN \(([^)]*)\)/) || [, ''])[1]
  .split(',').map(function (s) { return s.trim().replace(/'/g, ''); }).filter(Boolean);
ok(statuses.length === 2 && statuses.indexOf('paid') !== -1 && statuses.indexOf('refunded') !== -1,
   "v_finance_revenue admits exactly 'paid' and 'refunded'",
   'found [' + statuses.join(', ') + ']; anything else, and the 22 abandoned checkouts leak into revenue');
ok(/p\.paid_at IS NOT NULL/.test(rev),
   'v_finance_revenue requires paid_at');
// Only the revenue view may name the payments table. Everything else reads
// the view, so the filter cannot be forgotten on the eleventh screen.
const payRefs = (sql.match(/FROM public\.payments\b/g) || []).length;
ok(payRefs === 1, 'exactly one SELECT ... FROM public.payments in the file',
   'found ' + payRefs + '; every other reader must go through v_finance_revenue');

console.log('\nMONEY IS INTEGER PAISE');
let moneyCols = 0, badMoney = [];
TABLES.forEach(function (t) {
  const b = tableBody(sql, t) || '';
  b.split('\n').forEach(function (line) {
    const m = line.match(/^\s*(\w*_paise)\s+(\w+)/i);
    if (!m) return;
    moneyCols++;
    if (!/^(BIGINT|INTEGER)$/i.test(m[2])) badMoney.push(t + '.' + m[1] + ' is ' + m[2]);
  });
});
// A floor, not an exact count. The failure being guarded against is
// tableBody() silently returning null for everything, which would leave the
// type check below with nothing to look at and passing vacuously.
ok(moneyCols >= 5, 'found ' + moneyCols + ' *_paise columns in table bodies',
   'expected at least 5; a lower number means the extractor broke, not that the schema shrank');
ok(badMoney.length === 0, 'every *_paise column is BIGINT or INTEGER',
   badMoney.join('; '));
// These two arrive by ALTER TABLE on public.payments, so they are outside
// every table body above and would otherwise go unchecked.
['gateway_fee_paise', 'gateway_tax_paise'].forEach(function (c) {
  ok(new RegExp('ADD COLUMN IF NOT EXISTS ' + c + ' INTEGER\\b').test(sql),
     'payments.' + c + ' is INTEGER');
});
ok(!/\b(NUMERIC|DECIMAL|REAL|DOUBLE PRECISION|FLOAT)\b/i.test(
     TABLES.map(function (t) { return tableBody(sql, t) || ''; }).join('\n')),
   'no float or numeric column in any finance table');
// Basis points, for the same reason: 33.33% three ways must not drift.
ok(/share_bp\s+INTEGER NOT NULL CHECK \(share_bp BETWEEN 0 AND 10000\)/i.test(
     tableBody(sql, 'partner_shares') || ''),
   'partner_shares.share_bp is integer basis points, bounded');

console.log('\nRE-RUNNABILITY');
const drops   = (sql.match(/DROP POLICY IF EXISTS "([^"]+)"/g)  || []).map(function (s) { return s.match(/"([^"]+)"/)[1]; });
const creates = (sql.match(/CREATE POLICY "([^"]+)"/g)          || []).map(function (s) { return s.match(/"([^"]+)"/)[1]; });
ok(creates.length > 0, 'found ' + creates.length + ' policies');
const undropped = creates.filter(function (n) { return drops.indexOf(n) === -1; });
ok(undropped.length === 0, 'every CREATE POLICY has a matching DROP of the same name',
   undropped.join('; ') + ' — a name mismatch leaves the stale policy in place, and policies OR together');
const orphanDrops = drops.filter(function (n) { return creates.indexOf(n) === -1; });
ok(orphanDrops.length === 0, 'no DROP POLICY without its CREATE', orphanDrops.join('; '));
ok(/INSERT INTO public\.expense_categories[\s\S]*ON CONFLICT \(name\) DO NOTHING/.test(sql),
   'category seed is idempotent');
ok(/INSERT INTO public\.partners[\s\S]*ON CONFLICT \(user_id\) DO NOTHING/.test(sql),
   'partner bootstrap seed is idempotent');

console.log('\nSECURITY DEFINER HYGIENE');
const defs = sql.split(/CREATE OR REPLACE FUNCTION/).slice(1);
let sd = 0, missing = [];
defs.forEach(function (body) {
  const head = body.slice(0, body.indexOf('$$') === -1 ? 300 : body.indexOf('$$'));
  const name = (body.match(/^\s*public\.(\w+)/) || [, '?'])[1];
  if (!/SECURITY DEFINER/i.test(head)) return;
  sd++;
  // Without a pinned search_path a definer function can be hijacked by a
  // caller-controlled schema shadowing the tables it reads.
  if (!/SET search_path\s*=\s*public/i.test(head)) missing.push(name);
});
ok(sd >= 4, 'found ' + sd + ' SECURITY DEFINER functions');
ok(missing.length === 0, 'every SECURITY DEFINER function pins search_path', missing.join('; '));

console.log('\nEXCLUSIONS ARE NEVER SILENT');
ok(/CHECK \(NOT is_excluded OR exclusion_reason IS NOT NULL\)/i.test(
     tableBody(sql, 'payment_finance') || ''),
   'a payment cannot be excluded from revenue without a stated reason');

console.log('\nUNKNOWN FEE IS NOT ZERO');
ok(/ADD COLUMN IF NOT EXISTS gateway_fee_paise INTEGER,?\s*$/mi.test(sql) ||
   /gateway_fee_paise INTEGER(?!\s+NOT NULL)(?![^,]*DEFAULT)/i.test(sql),
   'payments.gateway_fee_paise is nullable with no DEFAULT',
   'A default of 0 would report every sale as costing nothing.');
ok(/\(p\.gateway_fee_paise IS NULL\)\s+AS fee_unknown/i.test(rev),
   'v_finance_revenue exposes fee_unknown so the page can say so');
ok(/fee_unknown_count/.test(viewBody(sql, 'v_finance_pnl_monthly') || ''),
   'the monthly P&L counts payments with an unknown fee');

console.log('\nINDIAN FINANCIAL YEAR AND TIMEZONE');
const cfg = tableBody(sql, 'finance_config') || '';
ok(/fy_start_month\s+SMALLINT NOT NULL DEFAULT 4/i.test(cfg),
   'financial year starts in April, not January');
ok(/report_timezone\s+TEXT NOT NULL DEFAULT ''/.test(cfg),
   'a reporting timezone is configured');
ok(/AT TIME ZONE/.test(rev),
   'revenue is bucketed in local time, not UTC',
   'A sale at 02:00 IST on the 1st is 20:30 UTC on the previous month.');

/* ═══════════════════════════════════════════════════════════════════════
   PART TWO: the page.

   These EXECUTE the real functions pulled out of finance.html rather than
   looking at their source. A check that only confirms the right-looking code
   is present passes while the code is wrong, and this repo has shipped two of
   those.
   ═══════════════════════════════════════════════════════════════════════ */

const vm = require('vm');
const PAGE = 'app/admin/finance.html';

function pull(src, name) {
  const at = src.search(new RegExp('function\\s+' + name + '\\s*\\('));
  if (at === -1) return null;
  let i = src.indexOf('{', at), d = 0;
  for (let j = i; j < src.length; j++) {
    if (src[j] === '{') d++;
    else if (src[j] === '}') { d--; if (d === 0) return src.slice(at, j + 1); }
  }
  return null;
}

if (!fs.existsSync(PAGE)) {
  console.log('\nPAGE\n  (not built yet, skipping)');
} else {
  const page = fs.readFileSync(PAGE, 'utf8');
  const NAMES = ['paise', 'rupees', 'pctToBp', 'bpToPct', 'fmtDate', 'today',
                 'currentBp', 'shareTotalBp', 'esc'];
  const bodies = NAMES.map(function (n) {
    const b = pull(page, n);
    if (!b) throw new Error('could not extract ' + n + ' from ' + PAGE);
    return b;
  }).join('\n');

  const ctx = { _partners: [], _shares: [], console: console };
  vm.createContext(ctx);
  vm.runInContext(bodies, ctx);

  console.log('\nMONEY PARSING (executed, not matched)');
  const MONEY = [
    ['499',        49900], ['0.29',        29], ['1',          100],
    ['₹1,234.56', 123456], ['  12.5  ',  1250], ['0',            0],
    ['-5',          -500], ['.5',           50], ['1234567.89', 123456789],
    // Rejections. Three decimals is not a rounding opportunity, it is a typo
    // in a money field, and silently dropping the digit loses real paise.
    ['1.005',       null], ['abc',       null], ['',          null],
    ['-',           null], ['.',         null], ['1.2.3',     null],
    ['1e3',         null], ['0x10',      null],
  ];
  let bad = [];
  MONEY.forEach(function (t) {
    const got = ctx.paise(t[0]);
    if (got !== t[1]) bad.push(JSON.stringify(t[0]) + ' -> ' + got + ', want ' + t[1]);
  });
  ok(bad.length === 0, 'paise() parses ' + MONEY.length + ' cases correctly', bad.join('; '));

  // parseFloat('0.29')*100 is 28.999999999999996. The string parser must not
  // reproduce that, and this is the case that proves it.
  ok(ctx.paise('0.29') === 29, 'paise("0.29") is exactly 29, not 28.999...');

  ok(ctx.rupees(49900) === '₹499.00' && ctx.rupees(0) === '₹0.00'
     && ctx.rupees(-100) === '-₹1.00' && ctx.rupees(5) === '₹0.05'
     && ctx.rupees(null) === '-',
     'rupees() formats whole, zero, negative, sub-rupee and null',
     [ctx.rupees(49900), ctx.rupees(0), ctx.rupees(-100), ctx.rupees(5), ctx.rupees(null)].join(' | '));

  console.log('\nPERCENTAGES AS BASIS POINTS');
  const PCT = [
    ['25', 2500], ['33.33', 3333], ['100', 10000], ['0', 0], ['0.01', 1],
    ['50%', 5000], [' 12.5 ', 1250],
    ['100.01', null], ['101', null], ['abc', null], ['', null], ['-5', null],
    ['1.005', null],
  ];
  bad = [];
  PCT.forEach(function (t) {
    const got = ctx.pctToBp(t[0]);
    if (got !== t[1]) bad.push(JSON.stringify(t[0]) + ' -> ' + got + ', want ' + t[1]);
  });
  ok(bad.length === 0, 'pctToBp() parses ' + PCT.length + ' cases correctly', bad.join('; '));

  // Exhaustive, because it is cheap and it is the property that matters: a
  // share shown on screen must parse back to the number stored. Anything else
  // and editing a partner's split silently changes it.
  let drift = [];
  for (let bp = 0; bp <= 10000; bp++) {
    if (ctx.pctToBp(ctx.bpToPct(bp)) !== bp) { drift.push(bp); if (drift.length > 4) break; }
  }
  ok(drift.length === 0, 'every share 0.00% to 100.00% round-trips exactly (10,001 values)',
     'drifts at ' + drift.join(', '));
  ok(ctx.bpToPct(3333) === '33.33%' && ctx.bpToPct(2500) === '25.00%',
     'bpToPct() keeps two decimals');

  console.log('\nDATES ARE CALENDAR DATES, NOT INSTANTS');
  // new Date('2026-08-01') is UTC midnight, which is 31 July anywhere west of
  // Greenwich. An effective_from shown a day early would attribute profit to
  // the wrong split.
  const saved = process.env.TZ;
  let shifted = [];
  ['UTC', 'America/Los_Angeles', 'Pacific/Kiritimati', 'Asia/Kolkata'].forEach(function (tz) {
    process.env.TZ = tz;
    const got = ctx.fmtDate('2026-08-01');
    if (!/^1 Aug 2026$/.test(got)) shifted.push(tz + ' -> ' + got);
  });
  process.env.TZ = saved;
  ok(shifted.length === 0, 'a DATE renders as the same day in every timezone', shifted.join('; '));
  ok(ctx.fmtDate(null) === '-' && ctx.fmtDate('') === '-' && ctx.fmtDate('rubbish') === '-',
     'fmtDate() handles null, empty and rubbish');

  console.log('\nSHARE ARITHMETIC');
  ctx._partners = [
    { id: 'a', is_active: true }, { id: 'b', is_active: true }, { id: 'c', is_active: false },
  ];
  ctx._shares = [
    { partner_id: 'a', share_bp: 6000, effective_from: '2020-01-01' },
    { partner_id: 'a', share_bp: 5000, effective_from: '2024-01-01' },   // newer wins
    { partner_id: 'a', share_bp: 9900, effective_from: '2099-01-01' },   // future, ignored
    { partner_id: 'b', share_bp: 5000, effective_from: '2024-01-01' },
    { partner_id: 'c', share_bp: 4000, effective_from: '2020-01-01' },   // inactive, ignored
  ];
  ok(ctx.currentBp('a') === 5000, 'the newest share on or before today wins', 'got ' + ctx.currentBp('a'));
  ok(ctx.currentBp('zz') === null, 'a partner with no share reads null, not 0',
     'null and 0 mean different things: "not set yet" versus "entitled to nothing"');
  ok(ctx.shareTotalBp() === 10000, 'total ignores future rows and inactive partners',
     'got ' + ctx.shareTotalBp());
  ctx._shares = ctx._shares.filter(function (s) { return s.partner_id !== 'b'; });
  ok(ctx.shareTotalBp() === 5000, 'a missing share lowers the total rather than being assumed',
     'got ' + ctx.shareTotalBp());

  console.log('\nESCAPING');
  ok(ctx.esc('<img src=x onerror=alert(1)>').indexOf('<') === -1,
     'esc() neutralises angle brackets');
  ok(ctx.esc('a"b').indexOf('&quot;') !== -1, 'esc() neutralises quotes in attributes');

  console.log('\nEXPENSE FILTERING (executed against a stub DOM)');
  {
    const fields = { 'fn-f-month':'', 'fn-f-partner':'', 'fn-f-cat':'', 'fn-f-text':'' };
    const ctx2 = {
      document: { getElementById: function (id) { return { value: fields[id] }; } },
      _expenses: [
        // The 1st of a month is the case that matters: turning 'YYYY-MM-DD'
        // into a Date reads it as UTC midnight, which is the previous month
        // anywhere west of Greenwich, and the expense vanishes from its own
        // month's total.
        { id:'e1', spent_on:'2026-08-01', partner_id:'p1', category_id:'c1', description:'Supabase', vendor:'Supabase' },
        { id:'e2', spent_on:'2026-08-31', partner_id:'p2', category_id:'c2', description:'Domain',   vendor:'GoDaddy' },
        { id:'e3', spent_on:'2026-07-31', partner_id:'p1', category_id:'c1', description:'Anthropic',vendor:'Anthropic' },
      ],
    };
    vm.createContext(ctx2);
    vm.runInContext(pull(page, 'filteredExpenses'), ctx2);

    const ids = function () { return ctx2.filteredExpenses().map(function (e) { return e.id; }).join(','); };
    ok(ids() === 'e1,e2,e3', 'no filter returns everything');
    fields['fn-f-month'] = '2026-08';
    ok(ids() === 'e1,e2', 'the month filter keeps the 1st and the 31st of that month',
       'got ' + ids() + '; a Date-based month read would drop e1');
    fields['fn-f-month'] = '2026-07';
    ok(ids() === 'e3', 'the month filter keeps the 31st of the previous month', 'got ' + ids());
    fields['fn-f-month'] = '';
    fields['fn-f-partner'] = 'p1';
    ok(ids() === 'e1,e3', 'the partner filter works', 'got ' + ids());
    fields['fn-f-partner'] = '';
    fields['fn-f-text'] = 'goda';
    ok(ids() === 'e2', 'search matches the vendor, case-insensitively', 'got ' + ids());
    fields['fn-f-text'] = 'ANTHROPIC';
    ok(ids() === 'e3', 'search matches the description, case-insensitively', 'got ' + ids());
  }

  console.log('\nCSV');
  {
    const ctx3 = {};
    vm.createContext(ctx3);
    vm.runInContext(pull(page, 'csvCell'), ctx3);
    ok(ctx3.csvCell('a,b') === '"a,b"', 'a comma is quoted');
    ok(ctx3.csvCell('say "hi"') === '"say ""hi"""', 'a quote is doubled and wrapped');
    ok(ctx3.csvCell('line\nbreak').indexOf('"') === 0, 'a newline is quoted');
    ok(ctx3.csvCell(null) === '' && ctx3.csvCell(undefined) === '', 'null and undefined are empty');
    ok(/﻿/.test(page), 'the CSV carries a UTF-8 BOM so Excel does not mangle the rupee sign');
  }

  console.log('\nTHE AUTO-ASSIGNMENT, CLIENT SIDE');
  // The database refuses a foreign partner_id either way. This is about the
  // page never having an opinion on whose expense it is: the moment a form
  // field or an insert payload carries partner_id, someone has reintroduced
  // the choice the whole design removes.
  // Comments stripped: the code says "partner_id is deliberately absent",
  // which is exactly the string being searched for. Second time in this file.
  const saveSrc = stripPageComments(
    (pull(page, 'saveExpense') || '') + (pull(page, 'expenseFormValues') || ''));
  ok(saveSrc.length > 200, 'found saveExpense and expenseFormValues to inspect');
  ok(saveSrc.indexOf('partner_id') === -1,
     'the expense insert never sends partner_id',
     'it must come from the column DEFAULT and the INSERT policy, not from the page');

  // Scoped to the entry card, not the whole tab. The tab also holds a partner
  // FILTER, which is a legitimate select naming a partner, and an unscoped
  // search cannot tell "show me only Rahul's spending" from "file this as
  // Rahul's spending". Only the second one is forbidden.
  const cardStart = page.indexOf('id="fn-exp-card"');
  const cardEnd   = page.indexOf('<div class="fn-card">', cardStart);   // the Filter card
  const expCard   = page.slice(cardStart, cardEnd);
  ok(cardStart !== -1 && cardEnd > cardStart, 'located the expense entry card');
  // Controls and labels only. The card's prose legitimately mentions the
  // partner statement while explaining why the reimbursable flag matters, and
  // banning the word outright would be banning the explanation.
  const controls = (expCard.match(/<(?:input|select|textarea)[^>]*>/gi) || []);
  const labels   = (expCard.match(/<label[^>]*>([\s\S]*?)<\/label>/gi) || []);
  const offending = controls.filter(function (c) { return /partner/i.test(c); })
    .concat(labels.filter(function (l) { return /partner/i.test(l); }));
  ok(offending.length === 0,
     'the expense entry form has no partner control or label',
     'found ' + offending.join(' | ') + '; whose expense it is, is not a question the form may ask');
  ok(controls.length >= 8, 'the entry card really was parsed (' + controls.length + ' controls)',
     'a low count means the card slice broke and the check above passed vacuously');
  const expTab = page.slice(page.indexOf('id="tab-expenses"'), page.indexOf('id="tab-partners"'));
  ok(/id="fn-f-partner"/.test(expTab),
     'a partner FILTER still exists, which is a different thing from choosing one');
  // Soft delete must be an UPDATE. A .delete() here would be refused by the
  // database anyway, but it would leave the user staring at a permission error
  // instead of a working control.
  const delSrc = pull(page, 'deleteExpense') || '';
  ok(/deleted_at/.test(delSrc) && !/\.delete\(/.test(delSrc),
     'removing an expense is a soft delete, not a DELETE');
  ok(/delete_reason/.test(delSrc), 'a removal records why');

  console.log('\nAN UNKNOWN FEE IS NEVER SHOWN OR EXPORTED AS ZERO');
  {
    const rev = stripPageComments(pull(page, 'renderRevenue') || '');
    ok(rev.length > 200, 'found renderRevenue to inspect');
    ok(/fee_paise === null \|\| r\.fee_paise === undefined/.test(rev),
       'the fee cell tests for null before formatting');
    ok(/unknown/.test(rev), 'an uncaptured fee renders as "unknown", not a rupee figure');
    // The banner is the only thing standing between an unsynced fee and a
    // profit figure quietly reading about 2% high.
    ok(/fee_unknown/.test(rev) && /reads high/.test(pull(page, 'renderRevenue')),
       'the page says out loud that profit is overstated while fees are missing');

    const csvSrc = stripPageComments(pull(page, 'exportRevenueCsv') || '');
    ok(csvSrc.length > 200, 'found exportRevenueCsv to inspect');
    // A blank cell in a spreadsheet is visibly missing. A 0.00 is a claim.
    ok(/fee_paise === null \|\| r\.fee_paise === undefined \? ''/.test(csvSrc),
       'an unknown fee exports as an empty cell, never 0.00',
       'once it is 0.00 in a spreadsheet nobody can tell it apart from a real zero');
  }

  console.log('\nTHE WEBHOOK FEE WRITE CANNOT BREAK A PAYMENT');
  {
    const WH = 'supabase/functions/razorpay-webhook/index.ts';
    const wh = fs.readFileSync(WH, 'utf8');
    const feeAt = wh.indexOf('gateway_fee_paise');
    // The compare-and-swap returns early when the client-side verify already
    // claimed the row, so anything written after it never runs for those
    // payments: fees would be captured only for buyers whose tab closed.
    const casAt = wh.indexOf(".neq('status', 'paid')");
    ok(feeAt !== -1, 'the webhook writes the gateway fee');
    ok(casAt !== -1, 'located the compare-and-swap');
    ok(feeAt < casAt, 'the fee write happens BEFORE the compare-and-swap',
       'after it, the early return would skip fees for every payment the client verified first');

    const block = wh.slice(feeAt - 900, feeAt + 700);
    ok(/try\s*\{/.test(block) && /catch\s*\(feeErr\)/.test(block),
       'the fee write is in its own try/catch, so bookkeeping cannot fail a sale');
    ok(/\.eq\('razorpay_order_id', orderId\)/.test(block),
       'the fee write is keyed on the order, not on a status');
    const upd = block.slice(block.indexOf('.update({'), block.indexOf('.eq(\'razorpay_order_id\''));
    ok(!/status|expires_at|subscription/.test(upd),
       'the fee write touches only the fee columns',
       'it must not be able to disturb status, expiry or entitlement');
    ok(/typeof feePaise === 'number'/.test(block),
       'a missing fee writes nothing, leaving NULL to mean "not known yet"');
  }

  console.log('\nTHE FEE BACKFILL');
  {
    const SY = 'supabase/functions/sync-razorpay-fees/index.ts';
    ok(fs.existsSync(SY), 'sync-razorpay-fees exists');
    const sy = stripPageComments(fs.readFileSync(SY, 'utf8'));
    ok(/typeof entity\?\.fee !== 'number'/.test(sy),
       'Razorpay returning fee:null is treated as unknown, not as zero',
       'writing 0 would turn "we do not know" into "it was free", permanently');
    ok(!/gateway_fee_paise:\s*0\b/.test(sy), 'it never writes a zero fee');
    ok(/\.is\('gateway_fee_paise', null\)/.test(sy),
       'it only touches rows still missing a fee, so re-running is harmless');
    ok(/\.in\('status', \['paid', 'refunded'\]\)/.test(sy),
       'it only looks at payments that actually took money');
    ok(/is_admin/.test(sy), 'the admin-triggered path re-checks is_admin server side');
    ok(/cron_runs/.test(sy), 'runs are logged where the admin console can see them');
    // Every other cron function here has verify_jwt false. Getting this wrong
    // cost a debugging session already.
    ok(/--no-verify-jwt/.test(fs.readFileSync(SY, 'utf8')),
       'the file records that it must be deployed with --no-verify-jwt');
  }

  console.log('\nRECURRING COSTS');
  {
    const ctx4 = {};
    vm.createContext(ctx4);
    vm.runInContext(pull(page, 'advanceRecurring'), ctx4);
    const adv = function (d, p) { return ctx4.advanceRecurring({ next_due_on: d, period: p }); };

    const CASES = [
      ['2026-01-15', 'monthly',   '2026-02-15'],
      ['2026-08-31', 'monthly',   '2026-10-01'],  // see the note below
      ['2026-01-31', 'quarterly', '2026-05-01'],
      ['2026-02-15', 'yearly',    '2027-02-15'],
      ['2026-12-15', 'monthly',   '2027-01-15'],  // year rollover
    ];
    let bad = [];
    CASES.forEach(function (c) {
      const got = adv(c[0], c[1]);
      if (got !== c[2]) bad.push(c[0] + ' +' + c[1] + ' -> ' + got + ', want ' + c[2]);
    });
    ok(bad.length === 0, 'the next due date advances correctly, year rollover included',
       bad.join('; '));
    // 31 Aug + 1 month has no answer everyone agrees on. JavaScript rolls into
    // the next month, so it lands on 1 Oct rather than 30 Sep. Asserted so the
    // behaviour is known and deliberate rather than discovered later on a
    // bill that seemed to skip a month. It only ever moves the reminder, and
    // the amount is confirmed by a human before anything is recorded.
    ok(adv('2026-08-31', 'monthly') === '2026-10-01',
       'a 31st rolls forward rather than clamping, and this is known');

    const recSrc = stripPageComments(pull(page, 'recordRecurring') || '');
    ok(recSrc.length > 100, 'found recordRecurring to inspect');
    // The whole point of auto_post defaulting false: this must PREFILL, never
    // write. An amount posted without being read is an invented number.
    ok(!/\.insert\(|\.update\(|\.upsert\(/.test(recSrc),
       'Record on a recurring cost writes nothing, it only fills the form',
       'these amounts move; posting last month\'s figure unread would invent a number');
    const saveSrc2 = stripPageComments(pull(page, 'saveExpense') || '');
    ok(/_pendingRecurringId/.test(saveSrc2) && saveSrc2.indexOf('_pendingRecurringId')
         > saveSrc2.indexOf('if (error)'),
       'the schedule advances only after the expense actually saved',
       'advancing on a failed save would hide the next bill');
  }

  console.log('\nRECEIPTS');
  {
    const up = stripPageComments(pull(page, 'uploadReceipt') || '');
    ok(up.length > 100, 'found uploadReceipt to inspect');
    // The first path segment IS the permission: the storage policy requires it
    // to equal the uploader's own partner id.
    ok(/_me\.id \+ '\/'/.test(up),
       'the object path starts with the uploader\'s own partner id');
    ok(/randomUUID|Math\.random/.test(up) && !/file\.name\s*\)/.test(up.replace(/split/g, '')),
       'the stored name is a uuid, not the original filename',
       'filenames carry personal information and the path is visible to every partner');
    ok(/5 \* 1024 \* 1024/.test(up), 'the size limit is checked client side too, so the message names it');

    const sv = stripPageComments(pull(page, 'saveExpense') || '');
    ok(sv.indexOf('uploadReceipt') !== -1
       && sv.indexOf('uploadReceipt') < sv.indexOf(".from('expenses')"),
       'the receipt uploads BEFORE the expense row is written',
       'the other order can leave an expense pointing at a file that does not exist');

    const op = stripPageComments(pull(page, 'openReceipt') || '');
    ok(/createSignedUrl/.test(op), 'receipts are opened through a signed URL, not a public one');
    ok(/no longer stored/.test(pull(page, 'openReceipt') || ''),
       'a deleted receipt reports itself instead of failing silently');
  }

  console.log('\nMANUAL INCOME');
  {
    const mi = stripPageComments(pull(page, 'renderManualIncome') || '');
    ok(mi.length > 100, 'found renderManualIncome to inspect');
    ok(/Nothing recorded/.test(pull(page, 'renderManualIncome') || ''),
       'an empty state says so rather than showing an always-empty table');
    const del = stripPageComments(pull(page, 'deleteManualIncome') || '');
    ok(/deleted_at/.test(del) && !/\.delete\(/.test(del),
       'removing manual income is a soft delete');
    ok(/delete_reason/.test(del), 'a removal records why');
    // The P&L counts manual income, so a change to it invalidates the numbers
    // on the dashboard.
    ok(/loadDashboard/.test(stripPageComments(pull(page, 'saveManualIncome') || '')),
       'recording income refreshes the P&L that counts it');
  }

  console.log('\nPAGE HYGIENE');
  const scriptBody = page.slice(page.indexOf('var SB_URL'));
  ok(!/from\(['"]payments['"]\)/.test(page),
     'the page never reads public.payments directly',
     'money must come from v_finance_revenue, where the status filter lives');
  ok(!/[—]/.test(page), 'no em dashes (they read as machine-written)');
  // A hardcoded colour beside a themed one is the bug that has shipped four
  // times here. Comments are stripped first, because the note explaining the
  // rule contains the very literal the scan looks for.
  //
  // @media print is the one legitimate exception and is cut out before the
  // scan. Paper is white and ink is black; there is no theme to respond to,
  // and a token would print a dark surface as a solid block or drop it
  // entirely, taking the text with it. The exception is narrow on purpose:
  // only inside the print block, which is verified to exist so this cannot
  // silently become a hole.
  const printAt = page.indexOf('@media print');
  ok(printAt !== -1, 'a print stylesheet exists for the P&L');
  let printBlock = '';
  if (printAt !== -1) {
    let d = 0;
    for (let j = page.indexOf('{', printAt); j < page.length; j++) {
      if (page[j] === '{') d++;
      else if (page[j] === '}') { d--; if (d === 0) { printBlock = page.slice(printAt, j + 1); break; } }
    }
  }
  ok(printBlock.length > 200, 'located the print block to exempt (' + printBlock.length + ' chars)',
     'if this is empty the exemption below removes nothing and the scan stays honest');
  const scanned = stripPageComments(page).replace(printBlock, '');
  const hexes = (scanned.match(/#[0-9a-fA-F]{3,8}\b/g) || []);
  ok(hexes.length === 0, 'no hardcoded hex colours anywhere on the page',
     'found ' + hexes.join(', ') + '; use theme tokens, and --on-accent for text on a filled accent');
  ok(/var\(--on-accent\)/.test(page),
     'text on a filled accent uses --on-accent rather than white');

  // A specificity collision, not a missing class. `.fn-table th` is (0,1,1)
  // and `.fn-num` is (0,1,0), so the header's text-align:left silently won and
  // every money column had its label pinned left while the figures ran right.
  // It shipped looking like the numbers had drifted out from under their
  // heading, and was spotted on screen rather than by anything here.
  ok(/\.fn-table th\.fn-num/.test(page),
     'numeric headers are pinned right against .fn-table th',
     'without this the label sits left of its own column');
  const nonNumHeaders = (page.match(/<th>([^<]*)<\/th>/g) || [])
    .map(function (h) { return h.replace(/<[^>]*>/g, '').trim(); });
  const looksNumeric = nonNumHeaders.filter(function (h) {
    return /^(amount|gross|refund|fee|fees|costs|profit|capital|share|owed|total|usual|revenue|drawings|repaid)$/i.test(h);
  });
  ok(looksNumeric.length === 0,
     'no money or percentage header is missing class="fn-num"',
     'found ' + looksNumeric.join(', '));

  console.log('\nCONSOLE WIRING');
  const admin = fs.readFileSync('app/admin/index.html', 'utf8');
  ok(/onclick="window\.location\.href='finance\.html'"/.test(admin),
     'the admin console links to the finance page');
  // A data-tab attribute would make applyCourseScope() hide the button
  // whenever the course switcher moved, because it walks TAB_NAMES.
  const btn = (admin.match(/<button[^>]*finance\.html[^>]*>/) || [''])[0];
  ok(btn && !/data-tab=/.test(btn),
     'the finance button carries no data-tab, so the course switcher cannot hide it');
  ok(/'app\/admin\/finance\.html'/.test(fs.readFileSync('theme-audit.cjs', 'utf8')),
     'finance.html is in the theme audit');
}

console.log('\n' + (fails ? fails + ' FAILED of ' + checks : 'all ' + checks + ' pass') + '\n');
process.exit(fails ? 1 : 0);
