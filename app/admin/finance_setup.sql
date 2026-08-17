-- ═══════════════════════════════════════════════════════════════════════════
--  PARTNER DASHBOARD / FINANCE LEDGER — schema, RLS and views
--
--  Elec-Buddy is a partnership. Money comes in through Razorpay and goes out
--  of whichever partner's pocket happened to be nearest. Until now only the
--  first half was recorded anywhere. This is the second half, plus the
--  arithmetic that turns both into "what is the business worth and what am I
--  owed".
--
--  THREE RULES THIS FILE ENFORCES, EACH FOR A MEASURED REASON
--
--  1. MONEY IS INTEGER PAISE. Never rupees, never a float. The existing
--     payments.amount is already paise (49900 = ₹499, confirmed against the
--     six real transactions), so this matches it. Percentages are integer
--     basis points: 25% is 2500, and 33.33% is 3333, with no rounding drift.
--
--  2. A PARTNER NEVER ASSIGNS THEIR OWN EXPENSE. expenses.partner_id defaults
--     from the authenticated session, and the INSERT policy REFUSES a row
--     naming anyone else. The default is the convenience; the policy is the
--     enforcement, so posting straight to the REST API cannot get around it.
--
--  3. REVENUE IS REFERENCED, NOT COPIED. public.payments belongs to the
--     Razorpay flow (verify-razorpay-payment, razorpay-webhook). Nothing here
--     duplicates a payment row. Finance stores only what it adds on top, in
--     payment_finance, keyed on payment_id. Copying would mean the two drift
--     the first time a refund lands, with nothing to say which is right.
--
--  THE MISTAKE THIS FILE EXISTS TO PREVENT
--
--  22 rows in public.payments sit at status 'created', totalling 1,945,629
--  paise. They are abandoned checkouts. Nobody ever paid them. A revenue
--  query that forgets `status = 'paid'` reports ₹19,456 of income against a
--  real figure of ₹3,101.14, an overstatement of roughly 6x. So no page code
--  reads public.payments for money at all. It reads v_finance_revenue, where
--  the filter is written once and cannot be left out on the eleventh screen.
--
--  APPLY:  paste into the Supabase SQL editor and run. Re-runnable.
--  UNDO:   see the block at the very bottom.
--          (record the apply in claude-cowork/CHANGE_LEDGER.md)
--
--  THE SQL EDITOR WILL WARN YOU. CHOOSE "Run without RLS".
--
--  It says: "This query creates a table without enabling Row Level Security
--  ... may be able to access `revenue`". It is wrong, and the reason is worth
--  knowing because the warning will come back on every future edit.
--
--  The linter sees `CREATE VIEW public.v_finance_revenue WITH (...)`. The
--  `WITH (...)` clause is also table storage-parameter syntax, so it reads
--  the statement as a CREATE TABLE and reports the tail of the name.
--
--  v_finance_revenue is a VIEW. Postgres cannot enable RLS on a view at all:
--  `ALTER TABLE <view> ENABLE ROW LEVEL SECURITY` fails with SQLSTATE 42809,
--  tested, so "Run and enable RLS" would append a statement that errors and
--  could take the whole script down with it.
--
--  Every actual table here enables RLS itself, in section 7. Views are
--  secured instead by `security_invoker = true`, which makes them run with
--  the caller's own rights rather than the view owner's. Without that, a view
--  over public.payments would be a way around the RLS on public.payments,
--  which is the classic way a reporting layer becomes a leak.
-- ═══════════════════════════════════════════════════════════════════════════


-- ═══════════════════════════════════════════════════════════════════════════
--  1. WHO
-- ═══════════════════════════════════════════════════════════════════════════

-- Partners are NOT "everyone with profiles.is_admin". There are five admins
-- today for four partners, one of them an operations mailbox rather than a
-- person. Sharing profit with a mailbox is not a hypothetical bug: it is what
-- deriving the list from is_admin would do on the first run.
CREATE TABLE IF NOT EXISTS public.partners (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  -- Nullable: a partner may hold a share before they have a login. UNIQUE so
  -- one account is never two partners, which would double-count their share.
  -- RESTRICT rather than CASCADE: deleting an auth user must not silently
  -- delete a partner and orphan every expense they ever filed.
  user_id      UUID UNIQUE REFERENCES auth.users(id) ON DELETE RESTRICT,
  display_name TEXT NOT NULL,
  email        TEXT,
  role         TEXT NOT NULL DEFAULT 'partner'
                 CHECK (role IN ('super_admin','partner')),
  is_active    BOOLEAN NOT NULL DEFAULT TRUE,
  joined_on    DATE NOT NULL DEFAULT CURRENT_DATE,
  left_on      DATE,
  note         TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by   UUID REFERENCES auth.users(id) ON DELETE SET NULL,

  CONSTRAINT partners_dates CHECK (left_on IS NULL OR left_on >= joined_on)
);

COMMENT ON TABLE public.partners IS
  'People who share profit. Deliberately separate from profiles.is_admin, which is an access flag and includes an operations mailbox. Deactivate (is_active=false, left_on set) rather than deleting: the FKs are RESTRICT so a partner with history cannot be removed without orphaning it.';


-- Share percentages change. A P&L for last quarter must use last quarter's
-- split, so this is a history table and not a column on partners.
CREATE TABLE IF NOT EXISTS public.partner_shares (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  partner_id     UUID NOT NULL REFERENCES public.partners(id) ON DELETE CASCADE,
  -- Basis points. 10000 = 100%. Integer, so three-way splits do not drift.
  share_bp       INTEGER NOT NULL CHECK (share_bp BETWEEN 0 AND 10000),
  effective_from DATE NOT NULL DEFAULT CURRENT_DATE,
  note           TEXT,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by     UUID REFERENCES auth.users(id) ON DELETE SET NULL,

  UNIQUE (partner_id, effective_from)
);

CREATE INDEX IF NOT EXISTS partner_shares_lookup_idx
  ON public.partner_shares (partner_id, effective_from DESC);


-- ═══════════════════════════════════════════════════════════════════════════
--  2. HELPERS — the identity functions every policy below is built on
-- ═══════════════════════════════════════════════════════════════════════════

-- SECURITY DEFINER because it reads public.partners, which is itself behind
-- RLS. Without it every policy that calls this would recurse into the policy
-- it is trying to evaluate.
CREATE OR REPLACE FUNCTION public.current_partner_id()
RETURNS UUID
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT id FROM public.partners
   WHERE user_id = auth.uid() AND is_active
   LIMIT 1;
$$;

COMMENT ON FUNCTION public.current_partner_id() IS
  'The partner row belonging to the caller, or NULL. This is the whole of the auto-assignment rule: expenses.partner_id defaults to it and the INSERT policy requires it to match, so an expense can only ever be filed against the person filing it.';

CREATE OR REPLACE FUNCTION public.is_finance_partner()
RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.partners
     WHERE user_id = auth.uid() AND is_active
  );
$$;

CREATE OR REPLACE FUNCTION public.is_finance_super_admin()
RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.partners
     WHERE user_id = auth.uid() AND is_active AND role = 'super_admin'
  );
$$;


-- Shares totalling 100% cannot be a CHECK constraint: the rule spans rows, and
-- any per-row check would make it impossible to edit a split at all (the first
-- of four writes would always fail). So it is a function the UI calls, and a
-- banner when it is wrong. Deliberately NOT auto-normalised: quietly rescaling
-- four numbers because they came to 95 would hide a typo and misallocate real
-- money.
CREATE OR REPLACE FUNCTION public.finance_share_total(on_date DATE DEFAULT CURRENT_DATE)
RETURNS INTEGER
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT COALESCE(SUM(s.share_bp), 0)::INTEGER
    FROM public.partners p
    JOIN LATERAL (
      SELECT ps.share_bp
        FROM public.partner_shares ps
       WHERE ps.partner_id = p.id
         AND ps.effective_from <= on_date
       ORDER BY ps.effective_from DESC
       LIMIT 1
    ) s ON TRUE
   WHERE p.is_active
     AND (p.left_on IS NULL OR p.left_on >= on_date);
$$;

COMMENT ON FUNCTION public.finance_share_total(DATE) IS
  'Total share in basis points across active partners on a date. 10000 is correct. Anything else means the split is wrong and profit allocation will be too; the finance page shows a banner rather than rescaling.';


-- ═══════════════════════════════════════════════════════════════════════════
--  3. WHAT WENT OUT
-- ═══════════════════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.expense_categories (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name       TEXT NOT NULL UNIQUE,
  -- 'operating' hits the P&L. 'capital' does not: buying a laptop is an asset
  -- swap, not a cost, and putting it in the P&L understates a month's profit
  -- by the whole purchase. 'tax' is kept apart so profit-before-tax is
  -- readable. 'gateway' exists only so a manually entered gateway fee lands on
  -- the fee line instead of being counted twice (see the P&L view).
  kind       TEXT NOT NULL DEFAULT 'operating'
               CHECK (kind IN ('operating','capital','tax','gateway')),
  is_active  BOOLEAN NOT NULL DEFAULT TRUE,
  sort_order INTEGER NOT NULL DEFAULT 100,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Seeded from what this business actually spends money on today. No
-- "Payment gateway fees" row: Razorpay's cut is captured per transaction on
-- the payments table, and offering the category as well would invite entering
-- it twice.
INSERT INTO public.expense_categories (name, kind, sort_order) VALUES
  ('Infrastructure and hosting', 'operating', 10),
  ('AI and APIs',                'operating', 20),
  ('Email and messaging',        'operating', 30),
  ('Domain and DNS',             'operating', 40),
  ('Marketing and ads',          'operating', 50),
  ('Content and design',         'operating', 60),
  ('Software subscriptions',     'operating', 70),
  ('Legal and compliance',       'operating', 80),
  ('Travel',                     'operating', 90),
  ('Bank charges',               'operating', 100),
  ('Equipment',                  'capital',   110),
  ('Taxes',                      'tax',       120),
  ('Miscellaneous',              'operating', 999)
ON CONFLICT (name) DO NOTHING;


-- Supabase, Resend, the domain, the Anthropic credit. These repeat, and
-- re-typing them monthly is exactly the manual work this system removes.
CREATE TABLE IF NOT EXISTS public.recurring_expenses (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  -- Same auto-assignment as expenses and partner_transactions. This DEFAULT
  -- was missing on the first apply and the table was unusable: the page
  -- deliberately does not send partner_id, so it arrived NULL, and the INSERT
  -- policy's `partner_id = current_partner_id()` evaluated to NULL rather than
  -- true. Every attempt was refused with "you can only add this against
  -- yourself", which was exactly wrong: the caller WAS themselves.
  partner_id   UUID NOT NULL REFERENCES public.partners(id) ON DELETE RESTRICT
                 DEFAULT public.current_partner_id(),
  category_id  UUID REFERENCES public.expense_categories(id) ON DELETE SET NULL,
  vendor       TEXT,
  description  TEXT NOT NULL,
  amount_paise BIGINT NOT NULL CHECK (amount_paise > 0),
  period       TEXT NOT NULL CHECK (period IN ('monthly','quarterly','yearly')),
  next_due_on  DATE NOT NULL,
  is_active    BOOLEAN NOT NULL DEFAULT TRUE,
  -- Defaults FALSE on purpose. These amounts move: Supabase overage, an
  -- Anthropic credit top-up, a price rise. Posting last month's figure
  -- unread would be inventing a number and calling it a record. Instead the
  -- page lists what is due and pre-fills the form for a human to confirm.
  auto_post    BOOLEAN NOT NULL DEFAULT FALSE,
  note         TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by   UUID REFERENCES auth.users(id) ON DELETE SET NULL
);


-- CREATE TABLE IF NOT EXISTS does nothing to a table that already exists, so
-- the DEFAULT above never reaches a database created before it was added.
-- This ALTER is what repairs one. Harmless on a fresh install: it sets the
-- default the CREATE just set.
ALTER TABLE public.recurring_expenses
  ALTER COLUMN partner_id SET DEFAULT public.current_partner_id();


-- ── The core table ─────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.expenses (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- THE AUTO-ASSIGNMENT. No form anywhere offers this field. The default
  -- fills it from the session; the INSERT policy below refuses any other
  -- value, so it holds against a hand-rolled POST as well as against the UI.
  partner_id      UUID NOT NULL REFERENCES public.partners(id) ON DELETE RESTRICT
                    DEFAULT public.current_partner_id(),

  category_id     UUID REFERENCES public.expense_categories(id) ON DELETE SET NULL,
  spent_on        DATE NOT NULL DEFAULT CURRENT_DATE,

  -- Paise. amount is the net; tax is on top. Kept apart rather than stored as
  -- one gross figure because GST registration will need the split, and
  -- recovering it later from a total and a rate is guesswork.
  amount_paise    BIGINT NOT NULL CHECK (amount_paise > 0),
  tax_paise       BIGINT NOT NULL DEFAULT 0 CHECK (tax_paise >= 0),
  gst_rate_bp     INTEGER CHECK (gst_rate_bp IS NULL OR gst_rate_bp BETWEEN 0 AND 10000),

  vendor          TEXT,
  vendor_gstin    TEXT,
  invoice_no      TEXT,
  description     TEXT NOT NULL,
  payment_method  TEXT CHECK (payment_method IS NULL OR payment_method IN
                    ('upi','card','netbanking','cash','auto_debit','wallet','other')),
  currency        TEXT NOT NULL DEFAULT 'INR',

  receipt_path    TEXT,   -- object path in the private 'receipts' storage bucket

  -- TRUE  = the partner paid from their own pocket, so the company owes them.
  -- FALSE = paid from a company account, so nothing is owed.
  -- This single flag is what makes the partner statement meaningful.
  is_reimbursable BOOLEAN NOT NULL DEFAULT TRUE,

  recurring_id    UUID REFERENCES public.recurring_expenses(id) ON DELETE SET NULL,

  -- Soft delete. There is no DELETE policy on this table at all, so a row can
  -- never actually leave: an audit trail with holes in it is not one.
  deleted_at      TIMESTAMPTZ,
  deleted_by      UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  delete_reason   TEXT,

  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by      UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  updated_at      TIMESTAMPTZ,

  -- A deletion without a reason is indistinguishable from a mistake.
  CONSTRAINT expenses_delete_reason CHECK (deleted_at IS NULL OR delete_reason IS NOT NULL)
);

CREATE INDEX IF NOT EXISTS expenses_spent_on_idx  ON public.expenses (spent_on DESC) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS expenses_partner_idx   ON public.expenses (partner_id, spent_on DESC) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS expenses_category_idx  ON public.expenses (category_id) WHERE deleted_at IS NULL;

COMMENT ON COLUMN public.expenses.partner_id IS
  'Filled from the authenticated session by DEFAULT public.current_partner_id() and pinned there by the INSERT policy. Never presented as a form field. Only a super admin can move an expense to another partner, and that is logged.';


-- ═══════════════════════════════════════════════════════════════════════════
--  4. WHAT CAME IN
-- ═══════════════════════════════════════════════════════════════════════════

-- Finance's additions to a payment, and nothing else. The payment itself is
-- never touched, so marking a test transaction as excluded leaves the original
-- record exactly as Razorpay wrote it.
CREATE TABLE IF NOT EXISTS public.payment_finance (
  payment_id       UUID PRIMARY KEY REFERENCES public.payments(id) ON DELETE CASCADE,
  is_excluded      BOOLEAN NOT NULL DEFAULT FALSE,
  exclusion_reason TEXT,
  note             TEXT,
  excluded_by      UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  excluded_at      TIMESTAMPTZ,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ,

  -- Money cannot leave the books anonymously.
  CONSTRAINT payment_finance_reason CHECK (NOT is_excluded OR exclusion_reason IS NOT NULL)
);


-- Razorpay's cut, per transaction, on the payments table itself because that
-- is what it belongs to.
--
-- ALL THREE ARE NULLABLE, AND NULL MEANS UNKNOWN, NOT ZERO. Defaulting an
-- uncaptured fee to 0 would report a sale as costing nothing and overstate
-- profit silently. The P&L counts the unknowns and says so on screen instead.
ALTER TABLE public.payments
  ADD COLUMN IF NOT EXISTS gateway_fee_paise INTEGER,
  ADD COLUMN IF NOT EXISTS gateway_tax_paise INTEGER,
  ADD COLUMN IF NOT EXISTS fee_synced_at     TIMESTAMPTZ;

-- Drives the backfill in sync-razorpay-fees: "paid, but we do not know the fee".
CREATE INDEX IF NOT EXISTS payments_fee_unsynced_idx
  ON public.payments (paid_at)
  WHERE status IN ('paid','refunded') AND gateway_fee_paise IS NULL;


-- Revenue that never touched Razorpay. Built now, because a table added after
-- the reports are written means rewriting all of them; kept off the dashboard
-- until it holds a row, because an always-zero panel is noise.
CREATE TABLE IF NOT EXISTS public.manual_income (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  received_on   DATE NOT NULL DEFAULT CURRENT_DATE,
  amount_paise  BIGINT NOT NULL CHECK (amount_paise > 0),
  source        TEXT NOT NULL,        -- what it was for
  payer         TEXT,                 -- who paid
  method        TEXT CHECK (method IS NULL OR method IN
                  ('upi','bank_transfer','cash','cheque','card','other')),
  reference_no  TEXT,
  note          TEXT,
  receipt_path  TEXT,
  deleted_at    TIMESTAMPTZ,
  deleted_by    UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  delete_reason TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by    UUID REFERENCES auth.users(id) ON DELETE SET NULL,

  CONSTRAINT manual_income_delete_reason CHECK (deleted_at IS NULL OR delete_reason IS NOT NULL)
);


-- ═══════════════════════════════════════════════════════════════════════════
--  5. PARTNER CURRENT ACCOUNT — capital in, drawings out
--
--  Money a partner puts into the business or takes out of it is NEITHER
--  revenue NOR an expense. A ledger that files a drawing as an expense reports
--  a loss that did not happen; one that files capital as revenue reports a
--  profit that did not happen. Both are wrong in the same direction as the
--  amount involved, which in a young business is most of the balance.
-- ═══════════════════════════════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.partner_transactions (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  partner_id    UUID NOT NULL REFERENCES public.partners(id) ON DELETE RESTRICT
                  DEFAULT public.current_partner_id(),
  txn_on        DATE NOT NULL DEFAULT CURRENT_DATE,
  -- capital_in     : partner funds the business. The company now owes them more.
  -- drawing        : partner takes profit out. The company owes them less.
  -- reimbursement  : company pays back an out-of-pocket expense. Owes less,
  --                  because the expense itself already credited them.
  kind          TEXT NOT NULL CHECK (kind IN ('capital_in','drawing','reimbursement')),
  amount_paise  BIGINT NOT NULL CHECK (amount_paise > 0),
  method        TEXT CHECK (method IS NULL OR method IN
                  ('upi','bank_transfer','cash','cheque','card','other')),
  reference_no  TEXT,
  note          TEXT,
  receipt_path  TEXT,
  deleted_at    TIMESTAMPTZ,
  deleted_by    UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  delete_reason TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by    UUID REFERENCES auth.users(id) ON DELETE SET NULL,

  CONSTRAINT partner_txn_delete_reason CHECK (deleted_at IS NULL OR delete_reason IS NOT NULL)
);

CREATE INDEX IF NOT EXISTS partner_txn_partner_idx
  ON public.partner_transactions (partner_id, txn_on DESC) WHERE deleted_at IS NULL;


-- ═══════════════════════════════════════════════════════════════════════════
--  6. CONFIG
-- ═══════════════════════════════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.finance_config (
  id                 BOOLEAN PRIMARY KEY DEFAULT TRUE CHECK (id),  -- exactly one row
  -- India's financial year runs April to March. A dashboard defaulting to
  -- January is wrong on its first screen and stays wrong all year, so the
  -- month is configuration and not an assumption buried in a date function.
  fy_start_month     SMALLINT NOT NULL DEFAULT 4 CHECK (fy_start_month BETWEEN 1 AND 12),
  -- Reporting timezone. Payments are timestamptz; a sale at 02:00 IST on the
  -- 1st is 20:30 UTC on the previous month's last day, and bucketing in UTC
  -- would file it in the wrong month.
  report_timezone    TEXT NOT NULL DEFAULT 'Asia/Kolkata',
  -- GST-ready, not GST-doing. Nothing computes output tax while this is false.
  is_gst_registered  BOOLEAN NOT NULL DEFAULT FALSE,
  company_gstin      TEXT,
  company_name       TEXT NOT NULL DEFAULT 'Elec-Buddy',
  output_gst_rate_bp INTEGER CHECK (output_gst_rate_bp IS NULL OR output_gst_rate_bp BETWEEN 0 AND 10000),
  updated_at         TIMESTAMPTZ,
  updated_by         UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

INSERT INTO public.finance_config (id) VALUES (TRUE) ON CONFLICT (id) DO NOTHING;


-- ═══════════════════════════════════════════════════════════════════════════
--  7. ROW LEVEL SECURITY
--
--  Decided with Blesson: full transparency. Every active partner reads every
--  finance row, including other partners' expenses and company-wide revenue.
--  Writing is still your own only.
--
--  There is deliberately NO DELETE policy anywhere in this file. Every table
--  that can lose a row has deleted_at instead. A hard delete would be
--  invisible afterwards, which is the one thing an audit trail may not be.
-- ═══════════════════════════════════════════════════════════════════════════

ALTER TABLE public.partners             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partner_shares       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.expense_categories   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recurring_expenses   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.expenses             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payment_finance      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.manual_income        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partner_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.finance_config       ENABLE ROW LEVEL SECURITY;


-- ── partners ───────────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Partners read partners" ON public.partners;
CREATE POLICY "Partners read partners" ON public.partners
  FOR SELECT USING (public.is_finance_partner() OR public.is_admin());

-- The bootstrap clause matters: while the table is empty nobody is a super
-- admin, so without it the first row could only ever be inserted from the SQL
-- editor. The seed below closes the window immediately.
DROP POLICY IF EXISTS "Super admin writes partners" ON public.partners;
CREATE POLICY "Super admin writes partners" ON public.partners
  FOR INSERT WITH CHECK (
    public.is_finance_super_admin()
    OR (public.is_admin() AND NOT EXISTS (SELECT 1 FROM public.partners))
  );

DROP POLICY IF EXISTS "Super admin updates partners" ON public.partners;
CREATE POLICY "Super admin updates partners" ON public.partners
  FOR UPDATE USING (public.is_finance_super_admin())
             WITH CHECK (public.is_finance_super_admin());


-- ── partner_shares ─────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Partners read shares" ON public.partner_shares;
CREATE POLICY "Partners read shares" ON public.partner_shares
  FOR SELECT USING (public.is_finance_partner());

DROP POLICY IF EXISTS "Super admin writes shares" ON public.partner_shares;
CREATE POLICY "Super admin writes shares" ON public.partner_shares
  FOR INSERT WITH CHECK (public.is_finance_super_admin());

DROP POLICY IF EXISTS "Super admin updates shares" ON public.partner_shares;
CREATE POLICY "Super admin updates shares" ON public.partner_shares
  FOR UPDATE USING (public.is_finance_super_admin())
             WITH CHECK (public.is_finance_super_admin());


-- ── expense_categories ─────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Partners read categories" ON public.expense_categories;
CREATE POLICY "Partners read categories" ON public.expense_categories
  FOR SELECT USING (public.is_finance_partner());

DROP POLICY IF EXISTS "Super admin writes categories" ON public.expense_categories;
CREATE POLICY "Super admin writes categories" ON public.expense_categories
  FOR INSERT WITH CHECK (public.is_finance_super_admin());

DROP POLICY IF EXISTS "Super admin updates categories" ON public.expense_categories;
CREATE POLICY "Super admin updates categories" ON public.expense_categories
  FOR UPDATE USING (public.is_finance_super_admin())
             WITH CHECK (public.is_finance_super_admin());


-- ── expenses: the one that matters ─────────────────────────────────────────
DROP POLICY IF EXISTS "Partners read expenses" ON public.expenses;
CREATE POLICY "Partners read expenses" ON public.expenses
  FOR SELECT USING (public.is_finance_partner());

-- THE RULE. Not "the form does not show the field" but "the database refuses
-- the row". current_partner_id() is NULL for a non-partner, and NULL never
-- equals anything, so a non-partner is refused by the same expression.
DROP POLICY IF EXISTS "Partners insert own expenses" ON public.expenses;
CREATE POLICY "Partners insert own expenses" ON public.expenses
  FOR INSERT WITH CHECK (partner_id = public.current_partner_id());

-- A partner may correct their own row. A super admin may correct anyone's,
-- including moving it to the right partner when it was filed from the wrong
-- login; that is logged to admin_actions by the page.
DROP POLICY IF EXISTS "Partners update own expenses" ON public.expenses;
CREATE POLICY "Partners update own expenses" ON public.expenses
  FOR UPDATE USING (partner_id = public.current_partner_id() OR public.is_finance_super_admin())
             WITH CHECK (partner_id = public.current_partner_id() OR public.is_finance_super_admin());


-- ── recurring_expenses ─────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Partners read recurring" ON public.recurring_expenses;
CREATE POLICY "Partners read recurring" ON public.recurring_expenses
  FOR SELECT USING (public.is_finance_partner());

DROP POLICY IF EXISTS "Partners insert own recurring" ON public.recurring_expenses;
CREATE POLICY "Partners insert own recurring" ON public.recurring_expenses
  FOR INSERT WITH CHECK (partner_id = public.current_partner_id());

DROP POLICY IF EXISTS "Partners update own recurring" ON public.recurring_expenses;
CREATE POLICY "Partners update own recurring" ON public.recurring_expenses
  FOR UPDATE USING (partner_id = public.current_partner_id() OR public.is_finance_super_admin())
             WITH CHECK (partner_id = public.current_partner_id() OR public.is_finance_super_admin());


-- ── partner_transactions ───────────────────────────────────────────────────
-- Same auto-assignment as expenses. Note the asymmetry worth knowing about: a
-- drawing recorded against yourself REDUCES what you are owed, so it carries
-- no incentive to overstate, while a capital_in increases it. Full
-- transparency plus the audit log is what covers that, which is the right
-- level for a four-person partnership but is a real assumption, not an
-- oversight.
DROP POLICY IF EXISTS "Partners read partner txns" ON public.partner_transactions;
CREATE POLICY "Partners read partner txns" ON public.partner_transactions
  FOR SELECT USING (public.is_finance_partner());

DROP POLICY IF EXISTS "Partners insert own txns" ON public.partner_transactions;
CREATE POLICY "Partners insert own txns" ON public.partner_transactions
  FOR INSERT WITH CHECK (partner_id = public.current_partner_id());

DROP POLICY IF EXISTS "Partners update own txns" ON public.partner_transactions;
CREATE POLICY "Partners update own txns" ON public.partner_transactions
  FOR UPDATE USING (partner_id = public.current_partner_id() OR public.is_finance_super_admin())
             WITH CHECK (partner_id = public.current_partner_id() OR public.is_finance_super_admin());


-- ── payment_finance: excluding revenue is a super admin act ────────────────
DROP POLICY IF EXISTS "Partners read payment finance" ON public.payment_finance;
CREATE POLICY "Partners read payment finance" ON public.payment_finance
  FOR SELECT USING (public.is_finance_partner());

DROP POLICY IF EXISTS "Super admin writes payment finance" ON public.payment_finance;
CREATE POLICY "Super admin writes payment finance" ON public.payment_finance
  FOR INSERT WITH CHECK (public.is_finance_super_admin());

DROP POLICY IF EXISTS "Super admin updates payment finance" ON public.payment_finance;
CREATE POLICY "Super admin updates payment finance" ON public.payment_finance
  FOR UPDATE USING (public.is_finance_super_admin())
             WITH CHECK (public.is_finance_super_admin());


-- ── manual_income ──────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Partners read manual income" ON public.manual_income;
CREATE POLICY "Partners read manual income" ON public.manual_income
  FOR SELECT USING (public.is_finance_partner());

DROP POLICY IF EXISTS "Partners insert manual income" ON public.manual_income;
CREATE POLICY "Partners insert manual income" ON public.manual_income
  FOR INSERT WITH CHECK (public.is_finance_partner());

DROP POLICY IF EXISTS "Partners update manual income" ON public.manual_income;
CREATE POLICY "Partners update manual income" ON public.manual_income
  FOR UPDATE USING (public.is_finance_partner())
             WITH CHECK (public.is_finance_partner());


-- ── finance_config ─────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Partners read finance config" ON public.finance_config;
CREATE POLICY "Partners read finance config" ON public.finance_config
  FOR SELECT USING (public.is_finance_partner());

DROP POLICY IF EXISTS "Super admin updates finance config" ON public.finance_config;
CREATE POLICY "Super admin updates finance config" ON public.finance_config
  FOR UPDATE USING (public.is_finance_super_admin())
             WITH CHECK (public.is_finance_super_admin());


-- ═══════════════════════════════════════════════════════════════════════════
--  8. VIEWS — the arithmetic, written once
--
--  Every view is security_invoker, so it runs with the caller's own rights
--  rather than the owner's. Without that a view over public.payments would be
--  a way around the RLS on public.payments, which is the classic way this kind
--  of reporting layer becomes a leak.
--
--  Partners are also admins, so the existing "Admins can read all payments"
--  policy is what lets v_finance_revenue see every row. A partner who is not
--  an admin would read zero revenue rather than being refused, which is why
--  the Partners form checks profiles.is_admin before accepting them.
--
--  DROP then CREATE, not CREATE OR REPLACE: replace refuses to change a
--  column list, so re-running an edited file would fail confusingly.
-- ═══════════════════════════════════════════════════════════════════════════

DROP VIEW IF EXISTS public.v_partner_statement;
DROP VIEW IF EXISTS public.v_finance_totals;
DROP VIEW IF EXISTS public.v_finance_pnl_monthly;
DROP VIEW IF EXISTS public.v_finance_expenses;
DROP VIEW IF EXISTS public.v_finance_revenue;


-- ── Revenue ────────────────────────────────────────────────────────────────
-- status IN ('paid','refunded') and paid_at NOT NULL is the whole guard
-- against the 6x overstatement described at the top of this file. It exists in
-- exactly this one place.
--
-- Refunded rows ARE included, with the refund alongside, because a P&L nets
-- them. Note this differs from the Payments tab in the admin console, which
-- excludes refunds from its revenue figure and reports them separately. Both
-- are right for what they are; the finance page says so on screen so the
-- difference does not read as a bug.
CREATE VIEW public.v_finance_revenue
  WITH (security_invoker = true) AS
SELECT
  p.id                                   AS payment_id,
  p.user_id,
  p.paid_at,
  (p.paid_at AT TIME ZONE 'Asia/Kolkata')::DATE AS paid_on,
  p.plan,
  p.scope,
  p.currency,
  p.status,
  p.amount::BIGINT                       AS gross_paise,
  COALESCE(p.refund_amount, 0)::BIGINT   AS refund_paise,
  p.gateway_fee_paise::BIGINT            AS fee_paise,
  p.gateway_tax_paise::BIGINT            AS fee_tax_paise,
  -- NULL fee means not yet captured. Never coalesced to zero: see the column
  -- comment on payments.gateway_fee_paise.
  (p.gateway_fee_paise IS NULL)          AS fee_unknown,
  p.coupon_code,
  COALESCE(pf.is_excluded, FALSE)        AS is_excluded,
  pf.exclusion_reason,
  p.razorpay_payment_id
FROM public.payments p
LEFT JOIN public.payment_finance pf ON pf.payment_id = p.id
WHERE p.status IN ('paid', 'refunded')
  AND p.paid_at IS NOT NULL;

COMMENT ON VIEW public.v_finance_revenue IS
  'The only sanctioned way to read money out of public.payments. Filters out the 22 abandoned status=created rows that would otherwise overstate revenue roughly 6x, and attaches finance exclusions without touching the payment itself.';


-- ── Expenses ───────────────────────────────────────────────────────────────
CREATE VIEW public.v_finance_expenses
  WITH (security_invoker = true) AS
SELECT
  e.id,
  e.spent_on,
  e.partner_id,
  pt.display_name                        AS partner_name,
  e.category_id,
  c.name                                 AS category_name,
  COALESCE(c.kind, 'operating')          AS category_kind,
  e.amount_paise,
  e.tax_paise,
  (e.amount_paise + e.tax_paise)         AS total_paise,
  e.vendor,
  e.invoice_no,
  e.description,
  e.payment_method,
  e.is_reimbursable,
  e.receipt_path,
  e.recurring_id,
  e.created_at
FROM public.expenses e
JOIN public.partners pt ON pt.id = e.partner_id
LEFT JOIN public.expense_categories c ON c.id = e.category_id
WHERE e.deleted_at IS NULL;


-- ── Monthly P&L ────────────────────────────────────────────────────────────
-- Bucketed in IST, not UTC. A payment at 02:00 IST on the 1st is 20:30 UTC on
-- the previous day, and UTC bucketing would put it in the wrong month.
--
-- Capital spending is excluded from profit on purpose: buying equipment is an
-- asset swap, not a cost, and charging the whole purchase to one month
-- understates that month and overstates every one after it.
CREATE VIEW public.v_finance_pnl_monthly
  WITH (security_invoker = true) AS
WITH months AS (
  SELECT DISTINCT m FROM (
    SELECT date_trunc('month', paid_on)::DATE AS m
      FROM public.v_finance_revenue WHERE NOT is_excluded
    UNION
    SELECT date_trunc('month', spent_on)::DATE FROM public.v_finance_expenses
    UNION
    SELECT date_trunc('month', received_on)::DATE
      FROM public.manual_income WHERE deleted_at IS NULL
  ) s
),
rev AS (
  SELECT date_trunc('month', paid_on)::DATE AS m,
         SUM(gross_paise)                        AS gross_paise,
         SUM(refund_paise)                       AS refund_paise,
         SUM(COALESCE(fee_paise, 0)
             + COALESCE(fee_tax_paise, 0))       AS fee_paise,
         COUNT(*) FILTER (WHERE fee_unknown)     AS fee_unknown_count,
         COUNT(*)                                AS payment_count
    FROM public.v_finance_revenue
   WHERE NOT is_excluded
   GROUP BY 1
),
mi AS (
  SELECT date_trunc('month', received_on)::DATE AS m,
         SUM(amount_paise) AS manual_paise
    FROM public.manual_income WHERE deleted_at IS NULL GROUP BY 1
),
exp AS (
  SELECT date_trunc('month', spent_on)::DATE AS m,
         SUM(total_paise) FILTER (WHERE category_kind = 'operating') AS operating_paise,
         SUM(total_paise) FILTER (WHERE category_kind = 'capital')   AS capital_paise,
         SUM(total_paise) FILTER (WHERE category_kind = 'tax')       AS tax_paise,
         -- A gateway fee typed in by hand. Kept on its own line because the
         -- fee is normally captured per transaction, so seeing both in one
         -- month means it has been counted twice and someone must look.
         SUM(total_paise) FILTER (WHERE category_kind = 'gateway')   AS manual_gateway_paise
    FROM public.v_finance_expenses GROUP BY 1
)
SELECT
  months.m                                         AS month,
  COALESCE(rev.gross_paise, 0)                     AS gross_paise,
  COALESCE(rev.refund_paise, 0)                    AS refund_paise,
  COALESCE(mi.manual_paise, 0)                     AS manual_income_paise,
  COALESCE(rev.gross_paise, 0) - COALESCE(rev.refund_paise, 0)
    + COALESCE(mi.manual_paise, 0)                 AS net_revenue_paise,
  COALESCE(rev.fee_paise, 0)                       AS gateway_fee_paise,
  COALESCE(exp.manual_gateway_paise, 0)            AS manual_gateway_paise,
  COALESCE(exp.operating_paise, 0)                 AS operating_paise,
  COALESCE(exp.tax_paise, 0)                       AS tax_expense_paise,
  COALESCE(exp.capital_paise, 0)                   AS capital_paise,
  (COALESCE(rev.gross_paise, 0) - COALESCE(rev.refund_paise, 0)
     + COALESCE(mi.manual_paise, 0)
     - COALESCE(rev.fee_paise, 0)
     - COALESCE(exp.manual_gateway_paise, 0)
     - COALESCE(exp.operating_paise, 0)
     - COALESCE(exp.tax_paise, 0))                 AS profit_paise,
  COALESCE(rev.payment_count, 0)                   AS payment_count,
  -- Surfaced, not hidden. If this is above zero the profit figure above is an
  -- overstatement by an unknown amount, and the page must say so.
  COALESCE(rev.fee_unknown_count, 0)               AS fee_unknown_count
FROM months
LEFT JOIN rev ON rev.m = months.m
LEFT JOIN mi  ON mi.m  = months.m
LEFT JOIN exp ON exp.m = months.m;


-- ── All-time totals, used by the partner statement ─────────────────────────
CREATE VIEW public.v_finance_totals
  WITH (security_invoker = true) AS
SELECT
  COALESCE(SUM(net_revenue_paise), 0)   AS net_revenue_paise,
  COALESCE(SUM(gateway_fee_paise), 0)   AS gateway_fee_paise,
  COALESCE(SUM(operating_paise), 0)     AS operating_paise,
  COALESCE(SUM(capital_paise), 0)       AS capital_paise,
  COALESCE(SUM(profit_paise), 0)        AS profit_paise,
  COALESCE(SUM(fee_unknown_count), 0)   AS fee_unknown_count
FROM public.v_finance_pnl_monthly;


-- ── Partner statement: "what am I owed" ────────────────────────────────────
--
--   owed = capital they put in
--        + expenses they paid out of pocket and have not been repaid for
--        + their share of profit
--        - drawings they have taken
--        - reimbursements they have received
--
-- Profit share uses the split effective TODAY across all-time profit. That is
-- the honest simplification: allocating each day's profit at that day's split
-- would be more precise, but profit is not attributable daily and the extra
-- machinery would imply an accuracy that is not there. When a split changes,
-- report the periods either side of it separately.
CREATE VIEW public.v_partner_statement
  WITH (security_invoker = true) AS
WITH cur_share AS (
  SELECT p.id AS partner_id,
         COALESCE((
           SELECT ps.share_bp FROM public.partner_shares ps
            WHERE ps.partner_id = p.id AND ps.effective_from <= CURRENT_DATE
            ORDER BY ps.effective_from DESC LIMIT 1
         ), 0) AS share_bp
    FROM public.partners p
),
paid_out AS (
  SELECT partner_id, SUM(total_paise) AS reimbursable_paid_paise
    FROM public.v_finance_expenses
   WHERE is_reimbursable
   GROUP BY 1
),
txn AS (
  SELECT partner_id,
         SUM(amount_paise) FILTER (WHERE kind = 'capital_in')    AS capital_in_paise,
         SUM(amount_paise) FILTER (WHERE kind = 'drawing')       AS drawings_paise,
         SUM(amount_paise) FILTER (WHERE kind = 'reimbursement') AS reimbursed_paise
    FROM public.partner_transactions
   WHERE deleted_at IS NULL
   GROUP BY 1
)
SELECT
  p.id                                        AS partner_id,
  p.display_name,
  p.email,
  p.role,
  p.is_active,
  cs.share_bp,
  COALESCE(t.capital_in_paise, 0)             AS capital_in_paise,
  COALESCE(t.drawings_paise, 0)               AS drawings_paise,
  COALESCE(t.reimbursed_paise, 0)             AS reimbursed_paise,
  COALESCE(po.reimbursable_paid_paise, 0)     AS reimbursable_paid_paise,
  -- numeric, not float: exact decimal arithmetic rounded once at the end.
  ROUND(tot.profit_paise::NUMERIC * cs.share_bp / 10000)::BIGINT AS profit_share_paise,
  ( COALESCE(t.capital_in_paise, 0)
  + COALESCE(po.reimbursable_paid_paise, 0)
  + ROUND(tot.profit_paise::NUMERIC * cs.share_bp / 10000)::BIGINT
  - COALESCE(t.drawings_paise, 0)
  - COALESCE(t.reimbursed_paise, 0) )         AS owed_paise
FROM public.partners p
JOIN cur_share cs ON cs.partner_id = p.id
LEFT JOIN paid_out po ON po.partner_id = p.id
LEFT JOIN txn t       ON t.partner_id  = p.id
CROSS JOIN public.v_finance_totals tot;


-- ═══════════════════════════════════════════════════════════════════════════
--  9. SEED — bootstrap the first super admin
--
--  Without this the partners table starts empty, nobody is a super admin, and
--  the only way in is the SQL editor. The policy above has an escape hatch for
--  exactly that case; this closes it on the first run instead of leaving it
--  open.
--
--  Shares are NOT seeded. Guessing a four-way split and having it silently
--  allocate real money is worse than an empty table and a banner saying the
--  split is missing.
-- ═══════════════════════════════════════════════════════════════════════════
INSERT INTO public.partners (user_id, display_name, email, role, note)
SELECT pr.id,
       COALESCE(NULLIF(pr.full_name, ''), split_part(pr.email, '@', 1)),
       pr.email,
       'super_admin',
       'Seeded by finance_setup.sql'
  FROM public.profiles pr
 WHERE pr.email = 'blesson@elec-buddy.com'
   AND pr.is_admin
ON CONFLICT (user_id) DO NOTHING;


-- ═══════════════════════════════════════════════════════════════════════════
--  VERIFY — run these after applying. Every one has an expected answer.
-- ═══════════════════════════════════════════════════════════════════════════
--
-- 1. Tables present (expect 9):
-- SELECT count(*) FROM pg_tables WHERE schemaname='public' AND tablename IN
--   ('partners','partner_shares','expense_categories','recurring_expenses',
--    'expenses','payment_finance','manual_income','partner_transactions',
--    'finance_config');
--
-- 2. Every finance table has RLS on (expect 9 rows, all true):
-- SELECT tablename, rowsecurity FROM pg_tables WHERE schemaname='public'
--  AND tablename IN ('partners','partner_shares','expense_categories',
--    'recurring_expenses','expenses','payment_finance','manual_income',
--    'partner_transactions','finance_config') ORDER BY tablename;
--
-- 3. NO delete policy exists anywhere (expect 0 rows):
-- SELECT tablename, policyname FROM pg_policies
--  WHERE schemaname='public' AND cmd='DELETE' AND tablename IN
--    ('expenses','manual_income','partner_transactions','partners');
--
-- 4. Every view is security_invoker (expect 5 rows, each showing the option):
-- SELECT c.relname, c.reloptions FROM pg_class c JOIN pg_namespace n ON n.oid=c.relnamespace
--  WHERE n.nspname='public' AND c.relkind='v' AND c.relname LIKE 'v_finance%' OR c.relname='v_partner_statement';
--
-- 5. THE RECONCILIATION. Measured against production on 17 Aug 2026, which
--    holds 22 rows at 'created' (1,945,629 paise), 6 at 'paid' (310,114) and
--    1 at 'refunded' (100).
--
--    Expect gross_paise = 310214 and payments = 7. The refunded row IS
--    included, because a P&L nets refunds off rather than pretending the sale
--    never happened. Note this deliberately differs from the Payments tab in
--    the admin console, which excludes refunds from its revenue figure and
--    reports them separately. Both are right for what they are.
-- SELECT SUM(gross_paise) AS gross_paise, SUM(refund_paise) AS refund_paise,
--        count(*) AS payments FROM public.v_finance_revenue;
--
-- 6. The 22 abandoned checkouts contribute nothing (expect 0). This is the
--    single check that matters most: without the status filter these 22 rows
--    add ₹19,456 of income that nobody ever paid.
-- SELECT count(*) FROM public.v_finance_revenue r
--   JOIN public.payments p ON p.id = r.payment_id WHERE p.status = 'created';
--
-- 7. Fees are unknown, not zero, until sync-razorpay-fees runs (expect 7):
-- SELECT count(*) FROM public.v_finance_revenue WHERE fee_unknown;
--
-- 8. Bootstrap worked (expect exactly 1 super_admin):
-- SELECT display_name, email, role FROM public.partners;
--
-- 9. Share total, before any share rows exist (expect 0, meaning "not set"):
-- SELECT public.finance_share_total();
--
-- ═══════════════════════════════════════════════════════════════════════════
--  UNDO — in dependency order. Note this destroys every expense recorded.
-- ═══════════════════════════════════════════════════════════════════════════
-- DROP VIEW IF EXISTS public.v_partner_statement, public.v_finance_totals,
--                     public.v_finance_pnl_monthly, public.v_finance_expenses,
--                     public.v_finance_revenue;
-- DROP TABLE IF EXISTS public.partner_transactions, public.manual_income,
--                      public.payment_finance, public.expenses,
--                      public.recurring_expenses, public.expense_categories,
--                      public.partner_shares, public.partners,
--                      public.finance_config CASCADE;
-- DROP FUNCTION IF EXISTS public.finance_share_total(DATE),
--                         public.is_finance_super_admin(),
--                         public.is_finance_partner(),
--                         public.current_partner_id();
-- ALTER TABLE public.payments DROP COLUMN IF EXISTS gateway_fee_paise,
--                             DROP COLUMN IF EXISTS gateway_tax_paise,
--                             DROP COLUMN IF EXISTS fee_synced_at;
