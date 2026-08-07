-- ═══════════════════════════════════════════════════════════════════════════
--  Lock down what a user may change on their own profile row.
--
--  WHY THIS IS NOT JUST AN RLS POLICY. The policy is
--  `USING (auth.uid() = id)` with no WITH CHECK, which for UPDATE defaults to
--  the same expression. It answers "is this your row", never "which columns
--  may you touch". So RLS alone lets a signed-in user PATCH ANY column on
--  their own row, and get-content-key grants access by reading
--  subscription_plan and the expiry dates straight off that row.
--
--  A trigger already existed and listed the columns to protect. The problem
--  with a denylist is that it is only correct until somebody adds a column,
--  and two had already slipped through:
--
--    granted_written_expires_at / granted_oral_expires_at
--      The grant ledger. recomputeFromPayments SEEDS entitlements from these
--      (see _shared/entitlements.ts), so a user setting them to 2030 gets
--      years of real access the next time entitlements rebuild, which any
--      refund triggers. Verified writable on dev before this fix.
--
--    email
--      Not an access bypass, but it is what admin views, receipts and group
--      mail address people by, and it was freely rewritable to anyone else's
--      address.
--
--  So this is now an ALLOWLIST. Everything reverts to the stored row except
--  the three fields a user genuinely owns. A column added next month is
--  protected by default rather than protected only if somebody remembers.
--
--  Service-role callers (every edge function) are unaffected: auth.uid() is
--  NULL for them, so the guard does not apply and admin grants, refunds,
--  purges and the welcome sweep all still work.
--
--  Re-runnable, like every other setup file here.
-- ═══════════════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION public.protect_privileged_fields()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_full_name        TEXT;
  v_topic_progress   JSONB;
  v_marketing_opt_out BOOLEAN;
BEGIN
  -- auth.uid() IS NULL means a service-role or SQL caller, which is trusted.
  -- Admins are trusted too, which is how the console grants access.
  IF auth.uid() IS NOT NULL AND NOT public.is_admin() THEN
    -- Keep the only three fields a user owns, then discard everything else
    -- they tried to send by reverting the row to what is stored.
    v_full_name         := NEW.full_name;
    v_topic_progress    := NEW.topic_progress;
    v_marketing_opt_out := NEW.marketing_opt_out;

    NEW := OLD;

    NEW.full_name         := v_full_name;
    NEW.topic_progress    := v_topic_progress;
    NEW.marketing_opt_out := v_marketing_opt_out;
  END IF;

  RETURN NEW;
END;
$$;

-- The trigger itself is unchanged if it already exists; recreated so this file
-- also works on a fresh database.
DROP TRIGGER IF EXISTS guard_privileged_fields ON public.profiles;
CREATE TRIGGER guard_privileged_fields
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.protect_privileged_fields();
