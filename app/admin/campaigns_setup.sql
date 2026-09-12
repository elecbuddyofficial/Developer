-- ============================================================
--  Campaigns: an admin-made link (and QR) that takes someone
--  straight from a webinar slide to signing up and paying.
--  Re-runnable. Safe to apply more than once.
-- ============================================================
--
--  WHAT THIS IS AND ISN'T
--
--  A campaign is a named entry point, nothing more: a slug that becomes
--  /app/auth.html?c=<slug>, the course to put the visitor in, optionally a
--  plan to preselect, optionally a coupon, and the wording shown on the way
--  in. It does not price anything. create-razorpay-order still derives every
--  amount from pricing_plans and re-validates the coupon server-side, so a
--  campaign row can never make something cheaper than the admin set it.
--
--  It is also NOT analytics. There is one integer counter, scans, and that is
--  deliberate: funnel_events already exists for the signed-in funnel and its
--  header says "No IP, no user agent, no page contents." A scanner is signed
--  out, so funnel_events cannot take their row anyway (its INSERT policy
--  requires auth.uid() = user_id), and the answer to that is a counter, not a
--  second tracking table with weaker rules.
--
--  WHY ANON CAN READ THIS
--
--  The landing page has to render the campaign banner BEFORE anyone signs in,
--  exactly like public_events feeds the pre-sign-in Updates panel. is_admin()
--  returns FALSE rather than erroring for a NULL auth.uid(), so granting the
--  SELECT policy to anon is safe: an anonymous visitor sees only live rows.
--
--  The coupon code is readable by anon, and that is fine. It is being printed
--  on a slide in front of a room. coupons.max_redemptions stays the real
--  limit, and validate-coupon still has the final say at checkout.
--
--  APPLY:  paste into the Supabase SQL editor and run.
--  UNDO:   DROP FUNCTION public.campaign_hit(TEXT);
--          DROP TABLE public.campaigns;
--          ALTER TABLE public.payments DROP COLUMN campaign;
--          (recorded in claude-cowork/CHANGE_LEDGER.md)
-- ============================================================

CREATE TABLE IF NOT EXISTS public.campaigns (
  -- The slug IS the URL, so it is the primary key: there is no separate id to
  -- get out of step with the thing printed on the slide.
  slug         TEXT PRIMARY KEY,
  name         TEXT NOT NULL,              -- admin's own label for the list
  course       TEXT NOT NULL CHECK (course IN ('coc', 'sponsorship')),

  -- NULL means "show the whole modal", which is the usual case: a webinar
  -- audience should see all three durations and choose.
  plan         TEXT CHECK (plan IS NULL OR plan IN ('3mo', '6mo', '12mo')),

  -- A reference, never a pasted string. Same reasoning as
  -- email_templates.coupon_code: storing the code by value means a disabled
  -- or deleted coupon lives on in a campaign that still advertises it. With a
  -- reference, deleting the coupon empties this and the campaign quietly
  -- stops offering a discount instead of offering a dead one.
  coupon_code  TEXT REFERENCES public.coupons(code) ON DELETE SET NULL,

  headline     TEXT,                       -- shown on the landing page
  subline      TEXT,

  active       BOOLEAN NOT NULL DEFAULT TRUE,
  starts_at    TIMESTAMPTZ,                -- NULL = live immediately
  ends_at      TIMESTAMPTZ,                -- NULL = never expires

  -- Scans, not visitors. Someone who scans twice counts twice; this is a
  -- rough denominator for "did the QR get used", not an audience figure.
  scans        INTEGER NOT NULL DEFAULT 0,

  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by   UUID REFERENCES auth.users ON DELETE SET NULL,

  -- The slug ends up in a URL and in a QR code. Restricting it to lowercase
  -- alphanumerics and dashes keeps it unambiguous when read off a screen and
  -- removes any question of escaping it.
  CONSTRAINT campaigns_slug_shape CHECK (slug ~ '^[a-z0-9][a-z0-9-]{1,38}[a-z0-9]$'),
  CONSTRAINT campaigns_window     CHECK (ends_at IS NULL OR starts_at IS NULL OR ends_at > starts_at)
);

ALTER TABLE public.campaigns ENABLE ROW LEVEL SECURITY;

-- anon included deliberately, see WHY ANON CAN READ THIS above. The date
-- window is enforced here rather than in the client so that an expired
-- campaign cannot be revived by editing a URL.
DROP POLICY IF EXISTS "Anyone can read live campaigns" ON public.campaigns;
CREATE POLICY "Anyone can read live campaigns"
  ON public.campaigns FOR SELECT
  TO anon, authenticated
  USING (
    public.is_admin()
    OR (
      active
      AND (starts_at IS NULL OR NOW() >= starts_at)
      AND (ends_at   IS NULL OR NOW() <= ends_at)
    )
  );

DROP POLICY IF EXISTS "Admin can insert campaigns" ON public.campaigns;
CREATE POLICY "Admin can insert campaigns"
  ON public.campaigns FOR INSERT
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admin can update campaigns" ON public.campaigns;
CREATE POLICY "Admin can update campaigns"
  ON public.campaigns FOR UPDATE
  USING (public.is_admin()) WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admin can delete campaigns" ON public.campaigns;
CREATE POLICY "Admin can delete campaigns"
  ON public.campaigns FOR DELETE
  USING (public.is_admin());

COMMENT ON TABLE public.campaigns IS
  'Admin-made entry points for webinars and similar: /app/auth.html?c=<slug> sets the course, optionally preselects a plan and pre-applies a coupon. Readable by anon because the landing banner renders before sign-in. Prices are never taken from here - create-razorpay-order derives them from pricing_plans.';

-- ============================================================
--  Scan counter
--
--  SECURITY DEFINER because the counter has to move for a signed-out
--  visitor, and no anon UPDATE policy should exist on the table itself -
--  that would let anyone rewrite a campaign's wording. This function can
--  only ever add one to one column of one live row.
-- ============================================================
CREATE OR REPLACE FUNCTION public.campaign_hit(p_slug TEXT)
RETURNS VOID
LANGUAGE sql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
  UPDATE public.campaigns
     SET scans = scans + 1
   WHERE slug = p_slug
     AND active
     AND (starts_at IS NULL OR NOW() >= starts_at)
     AND (ends_at   IS NULL OR NOW() <= ends_at);
$$;

REVOKE ALL ON FUNCTION public.campaign_hit(TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.campaign_hit(TEXT) TO anon, authenticated;

COMMENT ON FUNCTION public.campaign_hit(TEXT) IS
  'Increments campaigns.scans for a live campaign. SECURITY DEFINER so a signed-out scanner can move the counter without the table needing an anon UPDATE policy.';

-- ============================================================
--  Attribution on the payment itself
--
--  coupon_code is the only handle that exists today, and it stops working the
--  moment a buyer clears the coupon or the campaign has none. This column
--  survives both. It is written by create-razorpay-order after checking the
--  campaign is real; it never influences the amount.
-- ============================================================
ALTER TABLE public.payments ADD COLUMN IF NOT EXISTS campaign TEXT;

COMMENT ON COLUMN public.payments.campaign IS
  'Slug of the campaign this purchase arrived from, or NULL. Attribution only - the amount is always derived from pricing_plans.';

CREATE INDEX IF NOT EXISTS payments_campaign_idx
  ON public.payments (campaign)
  WHERE campaign IS NOT NULL;

-- ============================================================
--  Verify (expect: table present, RLS enabled, 4 policies with anon in the
--  SELECT policy's roles, the function present, the payments column present)
-- ============================================================
-- SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'campaigns';
-- SELECT policyname, cmd, roles FROM pg_policies WHERE tablename = 'campaigns' ORDER BY cmd;
-- SELECT proname, prosecdef FROM pg_proc WHERE proname = 'campaign_hit';
-- SELECT column_name FROM information_schema.columns
--   WHERE table_name = 'payments' AND column_name = 'campaign';
--
--  A row to prove it works, then remove it:
-- INSERT INTO public.campaigns (slug, name, course, headline)
--   VALUES ('test-webinar', 'Test', 'sponsorship', 'Delete me');
-- SELECT public.campaign_hit('test-webinar');
-- SELECT slug, scans FROM public.campaigns WHERE slug = 'test-webinar';   -- scans = 1
-- DELETE FROM public.campaigns WHERE slug = 'test-webinar';
