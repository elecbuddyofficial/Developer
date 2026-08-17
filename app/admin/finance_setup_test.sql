-- ═══════════════════════════════════════════════════════════════════════════
--  FUNCTIONAL TEST for finance_setup.sql. Run it against the DEV project.
--
--  Everything happens inside one transaction and ends in ROLLBACK, so it
--  leaves no rows behind. It still writes, so do not point it at production.
--
--  WHY IT SWITCHES ROLE. The Supabase SQL editor and the Management API both
--  connect as a superuser, and a superuser BYPASSES RLS completely. Every
--  access-control assertion below would pass no matter how wrong the policies
--  were. So each one first sets role `authenticated` and plants a JWT sub
--  claim, which is what auth.uid() reads.
--
--  WHY IT ASSERTS SQLSTATE. A refusal test that only catches "an error",
--  happens" passes when the insert fails for an unrelated reason, such as a
--  NOT NULL violation. 42501 is an RLS refusal specifically. 23514 is a CHECK
--  constraint. The difference is the whole result.
--
--  WHY IT SEEDS ITS OWN PAYMENTS. Dev has no payment rows, so every revenue
--  assertion would pass vacuously against an empty table. Two are inserted:
--  one paid, one abandoned at status created, which is the exact pair that
--  produces the 6x overstatement if the status filter is ever dropped.
--
--  Every assertion carries a hand-computed expectation. If the arithmetic in
--  the views changes, these numbers must be recomputed by hand, not copied
--  from whatever the new code happens to return.
--
--  EXPECT: 29 rows, all reading ok.
-- ═══════════════════════════════════════════════════════════════════════════
-- Functional test for the finance schema, run on dev inside a transaction
-- that is rolled back at the end. The Management API connects as a superuser,
-- which BYPASSES RLS entirely, so every access-control assertion below first
-- switches to the `authenticated` role and plants a JWT sub claim. Testing
-- these as superuser would pass no matter how wrong the policies were.

BEGIN;

CREATE TEMP TABLE res(n int, step text, got text, want text) ON COMMIT DROP;

DO $test$
DECLARE
  -- Real dev accounts. A is the admin, B is a second account, O is a
  -- non-partner used to prove the read policies actually exclude someone.
  ua uuid := 'f9baae44-74bc-444b-baa9-9f9e8a818906';
  ub uuid := '53e0b9a8-9799-40a6-b9b1-44211967a554';
  uo uuid := 'acb8466b-9230-4b1c-817b-74836db85489';
  pa uuid; pb uuid; gotp uuid; paid_id uuid; n int; i int := 0; sqlst text;
  s text[] := '{}'; g text[] := '{}'; w text[] := '{}';
BEGIN
  -- ── helper: record an assertion ────────────────────────────────────────
  -- (inlined as array pushes; a nested function would need its own grants)

  -- ── setup, as superuser ────────────────────────────────────────────────
  INSERT INTO public.partners (user_id, display_name, email, role)
    VALUES (ua, 'Partner A', 'a@test', 'super_admin') RETURNING id INTO pa;
  INSERT INTO public.partners (user_id, display_name, email, role)
    VALUES (ub, 'Partner B', 'b@test', 'partner') RETURNING id INTO pb;
  INSERT INTO public.partner_shares (partner_id, share_bp, effective_from)
    VALUES (pa, 6000, '2026-01-01'), (pb, 4000, '2026-01-01');

  -- Dev has no payments at all, so every revenue assertion below would pass
  -- vacuously without these. A test that cannot fail is not a test.
  INSERT INTO public.payments (user_id, razorpay_order_id, plan, scope, amount,
                               status, paid_at, gateway_fee_paise, gateway_tax_paise)
    VALUES (ua, 'order_test_paid', '3mo', 'written', 49900, 'paid', '2026-08-05', 1000, 180)
    RETURNING id INTO paid_id;
  INSERT INTO public.payments (user_id, razorpay_order_id, plan, scope, amount, status)
    VALUES (ua, 'order_test_abandoned', '3mo', 'written', 999999, 'created');

  i := i+1; s := array_append(s, 'share total is 100%');
  g := array_append(g, public.finance_share_total()::text); w := array_append(w, '10000');

  -- ── act as partner A ───────────────────────────────────────────────────
  PERFORM set_config('request.jwt.claims',
    json_build_object('sub', ua, 'role', 'authenticated')::text, true);
  PERFORM set_config('role', 'authenticated', true);

  i := i+1; s := array_append(s, 'current_partner_id resolves to A');
  g := array_append(g, (public.current_partner_id() = pa)::text); w := array_append(w, 'true');

  -- THE CORE RULE, half one: no partner_id supplied, so the DEFAULT fills it.
  INSERT INTO public.expenses (description, amount_paise, spent_on, is_reimbursable)
    VALUES ('A: office supplies', 100000, '2026-08-01', true)
    RETURNING partner_id INTO gotp;
  i := i+1; s := array_append(s, 'expense auto-assigned to the caller');
  g := array_append(g, (gotp = pa)::text); w := array_append(w, 'true');

  -- The other half of the revenue-visibility rule. Proving a non-admin reads
  -- nothing is only half a result: if this returned 0 too, revenue would be
  -- unreadable by anyone and the feature would be broken, not secure.
  SELECT count(*) INTO n FROM public.v_finance_revenue;
  i := i+1; s := array_append(s, 'partner who IS an admin reads the revenue');
  g := array_append(g, n::text); w := array_append(w, '1');

  -- THE CORE RULE, half two: naming another partner must be refused by the
  -- database, not merely absent from the form.
  BEGIN
    INSERT INTO public.expenses (partner_id, description, amount_paise)
      VALUES (pb, 'A filing against B', 5000);
    i := i+1; s := array_append(s, 'foreign partner_id on INSERT'); g := array_append(g, 'ACCEPTED'); w := array_append(w, 'refused');
  EXCEPTION WHEN OTHERS THEN
    GET STACKED DIAGNOSTICS sqlst = RETURNED_SQLSTATE;
    i := i+1; s := array_append(s, 'foreign partner_id on INSERT'); g := array_append(g, sqlst); w := array_append(w, '42501');
  END;

  -- Partner transactions carry the same rule.
  INSERT INTO public.partner_transactions (kind, amount_paise, txn_on)
    VALUES ('capital_in', 500000, '2026-07-01') RETURNING partner_id INTO gotp;
  i := i+1; s := array_append(s, 'partner txn auto-assigned to the caller');
  g := array_append(g, (gotp = pa)::text); w := array_append(w, 'true');
  INSERT INTO public.partner_transactions (kind, amount_paise, txn_on)
    VALUES ('drawing', 20000, '2026-08-10');

  BEGIN
    INSERT INTO public.partner_transactions (partner_id, kind, amount_paise)
      VALUES (pb, 'capital_in', 999999);
    i := i+1; s := array_append(s, 'foreign partner_id on partner txn'); g := array_append(g, 'ACCEPTED'); w := array_append(w, 'refused');
  EXCEPTION WHEN OTHERS THEN
    GET STACKED DIAGNOSTICS sqlst = RETURNED_SQLSTATE;
    i := i+1; s := array_append(s, 'foreign partner_id on partner txn'); g := array_append(g, sqlst); w := array_append(w, '42501');
  END;

  -- A hard DELETE must be impossible: there is no DELETE policy, so this
  -- matches zero rows rather than erroring.
  DELETE FROM public.expenses WHERE partner_id = pa;
  GET DIAGNOSTICS n = ROW_COUNT;
  i := i+1; s := array_append(s, 'hard DELETE of own expense removes nothing');
  g := array_append(g, n::text); w := array_append(w, '0');

  -- ── act as partner B ───────────────────────────────────────────────────
  PERFORM set_config('request.jwt.claims',
    json_build_object('sub', ub, 'role', 'authenticated')::text, true);

  INSERT INTO public.expenses (description, amount_paise, spent_on, is_reimbursable)
    VALUES ('B: reimbursable', 50000, '2026-08-02', true);
  INSERT INTO public.expenses (description, amount_paise, spent_on, is_reimbursable)
    VALUES ('B: paid by company', 30000, '2026-08-03', false);

  -- Full transparency: B reads A's rows.
  SELECT count(*) INTO n FROM public.expenses WHERE partner_id = pa;
  i := i+1; s := array_append(s, 'B can READ A''s expenses (full transparency)');
  g := array_append(g, (n > 0)::text); w := array_append(w, 'true');

  -- But cannot change them. UPDATE with a failing USING affects zero rows.
  UPDATE public.expenses SET amount_paise = 1 WHERE partner_id = pa;
  GET DIAGNOSTICS n = ROW_COUNT;
  i := i+1; s := array_append(s, 'B cannot UPDATE A''s expenses');
  g := array_append(g, n::text); w := array_append(w, '0');

  -- B is not a super admin, so excluding revenue is closed to them.
  BEGIN
    INSERT INTO public.payment_finance (payment_id, is_excluded, exclusion_reason)
      VALUES (paid_id, true, 'B should not be able to do this');
    i := i+1; s := array_append(s, 'non-super-admin cannot exclude a payment');
    g := array_append(g, 'ACCEPTED'); w := array_append(w, '42501');
  EXCEPTION WHEN OTHERS THEN
    GET STACKED DIAGNOSTICS sqlst = RETURNED_SQLSTATE;
    i := i+1; s := array_append(s, 'non-super-admin cannot exclude a payment'); g := array_append(g, sqlst); w := array_append(w, '42501');
  END;

  -- The documented gotcha, proved rather than asserted: v_finance_revenue is
  -- security_invoker and public.payments admits only admins. B is a partner
  -- but NOT an admin, so B reads no revenue at all. This is exactly why the
  -- Partners form must check profiles.is_admin before accepting someone.
  SELECT count(*) INTO n FROM public.v_finance_revenue;
  i := i+1; s := array_append(s, 'partner who is NOT an admin reads 0 revenue');
  g := array_append(g, n::text); w := array_append(w, '0');

  -- ── act as a non-partner ───────────────────────────────────────────────
  PERFORM set_config('request.jwt.claims',
    json_build_object('sub', uo, 'role', 'authenticated')::text, true);

  SELECT count(*) INTO n FROM public.expenses;
  i := i+1; s := array_append(s, 'non-partner reads 0 expenses'); g := array_append(g, n::text); w := array_append(w, '0');
  SELECT count(*) INTO n FROM public.partner_transactions;
  i := i+1; s := array_append(s, 'non-partner reads 0 partner txns'); g := array_append(g, n::text); w := array_append(w, '0');
  SELECT count(*) INTO n FROM public.v_finance_expenses;
  i := i+1; s := array_append(s, 'non-partner reads 0 rows from the expenses VIEW');
  g := array_append(g, n::text); w := array_append(w, '0');

  BEGIN
    INSERT INTO public.expenses (description, amount_paise) VALUES ('sneaky', 1);
    i := i+1; s := array_append(s, 'non-partner cannot insert an expense'); g := array_append(g, 'ACCEPTED'); w := array_append(w, 'refused');
  EXCEPTION WHEN OTHERS THEN
    GET STACKED DIAGNOSTICS sqlst = RETURNED_SQLSTATE;
    i := i+1; s := array_append(s, 'non-partner cannot insert an expense'); g := array_append(g, sqlst); w := array_append(w, '42501');
  END;

  -- ── back to superuser for the arithmetic ───────────────────────────────
  EXECUTE 'RESET ROLE';
  PERFORM set_config('request.jwt.claims', '', true);

  -- Positive controls. A refusal test means nothing without proof that the
  -- permitted case works, and the status filter is the whole point of the
  -- revenue view: the 999999 abandoned checkout must contribute nothing.
  SELECT count(*) INTO n FROM public.v_finance_revenue;
  i := i+1; s := array_append(s, 'revenue view shows the paid payment only');
  g := array_append(g, n::text); w := array_append(w, '1');
  SELECT gross_paise INTO n FROM public.v_finance_revenue;
  i := i+1; s := array_append(s, 'abandoned 999999 checkout excluded from gross');
  g := array_append(g, n::text); w := array_append(w, '49900');
  SELECT count(*) INTO n FROM public.v_finance_revenue WHERE fee_unknown;
  i := i+1; s := array_append(s, 'a payment with a captured fee is not fee_unknown');
  g := array_append(g, n::text); w := array_append(w, '0');

  -- Operating spend = 100000 (A) + 50000 (B) + 30000 (B) = 180000.
  -- No revenue on dev, so profit = -180000.
  SELECT profit_paise INTO n FROM public.v_finance_totals;
  i := i+1; s := array_append(s, 'profit = 49900 revenue - 1180 fee - 180000 spend');
  g := array_append(g, n::text); w := array_append(w, '-131280');

  -- A: capital 500000 + reimbursable paid 100000 + 60% of -180000 - drawings 20000
  SELECT owed_paise INTO n FROM public.v_partner_statement WHERE partner_id = pa;
  i := i+1; s := array_append(s, 'A owed = 500000 + 100000 - 78768 - 20000');
  g := array_append(g, n::text); w := array_append(w, '501232');

  -- B: only the REIMBURSABLE 50000 counts, not the 30000 the company paid.
  SELECT owed_paise INTO n FROM public.v_partner_statement WHERE partner_id = pb;
  i := i+1; s := array_append(s, 'B owed = 50000 - 52512 (non-reimbursable excluded)');
  g := array_append(g, n::text); w := array_append(w, '-2512');

  SELECT reimbursable_paid_paise INTO n FROM public.v_partner_statement WHERE partner_id = pb;
  i := i+1; s := array_append(s, 'B reimbursable excludes the company-paid row');
  g := array_append(g, n::text); w := array_append(w, '50000');

  -- Monthly P&L must bucket all three August expenses into one month.
  SELECT operating_paise INTO n FROM public.v_finance_pnl_monthly WHERE month = '2026-08-01';
  i := i+1; s := array_append(s, 'August operating spend'); g := array_append(g, n::text); w := array_append(w, '180000');

  -- Soft delete removes a row from the views but not from the table.
  UPDATE public.expenses SET deleted_at = now(), delete_reason = 'test'
   WHERE description = 'B: paid by company';
  SELECT count(*) INTO n FROM public.v_finance_expenses;
  i := i+1; s := array_append(s, 'soft-deleted expense leaves the view'); g := array_append(g, n::text); w := array_append(w, '2');
  SELECT count(*) INTO n FROM public.expenses;
  i := i+1; s := array_append(s, 'soft-deleted expense stays in the table'); g := array_append(g, n::text); w := array_append(w, '3');

  -- A deletion with no reason must be impossible.
  BEGIN
    UPDATE public.expenses SET deleted_at = now(), delete_reason = NULL
     WHERE description = 'A: office supplies';
    i := i+1; s := array_append(s, 'delete without a reason'); g := array_append(g, 'ACCEPTED'); w := array_append(w, 'refused');
  EXCEPTION WHEN check_violation THEN
    i := i+1; s := array_append(s, 'delete without a reason'); g := array_append(g, 'refused'); w := array_append(w, 'refused');
  END;

  -- An exclusion with no reason must be impossible.
  BEGIN
    INSERT INTO public.payment_finance (payment_id, is_excluded)
      VALUES (gen_random_uuid(), true);
    i := i+1; s := array_append(s, 'exclusion without a reason'); g := array_append(g, 'ACCEPTED'); w := array_append(w, 'refused');
  EXCEPTION WHEN OTHERS THEN
    GET STACKED DIAGNOSTICS sqlst = RETURNED_SQLSTATE;
    i := i+1; s := array_append(s, 'exclusion without a reason'); g := array_append(g, sqlst); w := array_append(w, '23514');
  END;

  -- Shares that do not total 100% must be visible, never auto-corrected.
  UPDATE public.partner_shares SET share_bp = 3000 WHERE partner_id = pb;
  i := i+1; s := array_append(s, 'a broken split reports its real total');
  g := array_append(g, public.finance_share_total()::text); w := array_append(w, '9000');

  FOR n IN 1..i LOOP
    INSERT INTO res VALUES (n, s[n], g[n], w[n]);
  END LOOP;
END
$test$;

SELECT n, step, got, want,
       CASE WHEN got IS NOT DISTINCT FROM want THEN 'ok' ELSE 'FAIL' END AS result
  FROM res ORDER BY n;

ROLLBACK;
