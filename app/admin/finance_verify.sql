-- ═══════════════════════════════════════════════════════════════════════════
--  Paste this into the Supabase SQL editor AFTER running finance_setup.sql.
--  It returns one table: item, got, want, result. Every row should read 'ok'.
--
--  The `want` column is written for PRODUCTION as measured on 17 Aug 2026:
--  22 payments at status 'created' (1,945,629 paise), 6 at 'paid' (310,114)
--  and 1 at 'refunded' (100). On the dev project, which has no payments, the
--  revenue rows will read 0 and those four lines will show FAIL. That is
--  expected there and is not a fault.
--
--  The line that matters most is 'abandoned checkouts leaking into revenue'.
--  It must be 0. Those 22 rows are people who opened a checkout and never
--  paid; counting them would report ₹19,456 of income that does not exist.
-- ═══════════════════════════════════════════════════════════════════════════

WITH c AS (
  SELECT
    (SELECT count(*) FROM pg_tables WHERE schemaname = 'public' AND tablename IN
       ('partners','partner_shares','expense_categories','recurring_expenses',
        'expenses','payment_finance','manual_income','partner_transactions',
        'finance_config'))                                            AS tables,
    (SELECT count(*) FROM pg_tables WHERE schemaname = 'public' AND rowsecurity
        AND tablename IN
       ('partners','partner_shares','expense_categories','recurring_expenses',
        'expenses','payment_finance','manual_income','partner_transactions',
        'finance_config'))                                            AS rls,
    -- Soft delete is only soft if nothing may hard delete.
    (SELECT count(*) FROM pg_policies WHERE schemaname = 'public' AND cmd = 'DELETE'
        AND tablename IN ('expenses','manual_income','partner_transactions',
                          'partners','payment_finance','recurring_expenses'))
                                                                      AS del_pol,
    -- A view without security_invoker runs as its owner and is a way round the
    -- RLS on public.payments.
    (SELECT count(*) FROM pg_class k JOIN pg_namespace n ON n.oid = k.relnamespace
      WHERE n.nspname = 'public' AND k.relkind = 'v'
        AND (k.relname LIKE 'v_finance%' OR k.relname = 'v_partner_statement')
        AND 'security_invoker=true' = ANY(k.reloptions))               AS inv_views,
    (SELECT count(*) FROM public.v_finance_revenue)                    AS rev_rows,
    (SELECT COALESCE(SUM(gross_paise), 0) FROM public.v_finance_revenue) AS gross,
    (SELECT count(*) FROM public.v_finance_revenue r
       JOIN public.payments p ON p.id = r.payment_id
      WHERE p.status = 'created')                                      AS abandoned,
    (SELECT count(*) FROM public.v_finance_revenue WHERE fee_unknown)   AS fee_unknown,
    (SELECT count(*) FROM public.partners)                             AS partners,
    (SELECT count(*) FROM public.expense_categories)                   AS cats,
    (SELECT count(*) FROM pg_policies WHERE schemaname = 'public' AND tablename IN
       ('partners','partner_shares','expense_categories','recurring_expenses',
        'expenses','payment_finance','manual_income','partner_transactions',
        'finance_config'))                                             AS policies
)
SELECT x.item, x.got, x.want,
       CASE WHEN x.got = x.want THEN 'ok' ELSE 'FAIL' END AS result
FROM c, LATERAL (VALUES
  ('finance tables created',                 c.tables::text,      '9'),
  ('RLS enabled on every one',               c.rls::text,         '9'),
  ('policies created',                       c.policies::text,    '26'),
  ('DELETE policies (must be none)',         c.del_pol::text,     '0'),
  ('views that are security_invoker',        c.inv_views::text,   '5'),
  ('expense categories seeded',              c.cats::text,        '13'),
  ('super admin seeded',                     c.partners::text,    '1'),
  ('revenue rows: 6 paid + 1 refunded',      c.rev_rows::text,    '7'),
  ('gross paise (= 3,102.14 rupees)',        c.gross::text,       '310214'),
  ('abandoned checkouts leaking into revenue', c.abandoned::text, '0'),
  ('payments with no fee captured yet',      c.fee_unknown::text, '7')
) AS x(item, got, want);

-- ── If 'super admin seeded' reads 0 ────────────────────────────────────────
-- The seed looks for blesson@elec-buddy.com with is_admin true. If that is not
-- the right address the seed inserts nothing, silently. Check who is there:
--
--   SELECT email, is_admin FROM public.profiles WHERE is_admin;
--
-- then create the first partner by hand, substituting the right email:
--
--   INSERT INTO public.partners (user_id, display_name, email, role)
--   SELECT id, COALESCE(NULLIF(full_name,''), split_part(email,'@',1)),
--          email, 'super_admin'
--     FROM public.profiles WHERE email = 'YOUR@EMAIL' AND is_admin;

-- ── The refunded row ───────────────────────────────────────────────────────
-- Worth one look. If refund_amount is NULL the money was returned but the
-- amount was never recorded, so the P&L cannot net it off and net revenue will
-- read 310214 rather than 310114. That is a gap in payments, not in the view.
--
--   SELECT amount, refund_amount, refunded_at, razorpay_refund_id
--     FROM public.payments WHERE status = 'refunded';
