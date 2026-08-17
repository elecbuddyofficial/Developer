-- ═══════════════════════════════════════════════════════════════════════════
--  RECEIPTS: storage policies for the private `receipts` bucket
--
--  The bucket itself is created through the Storage API, not here, because
--  buckets are not ordinary tables. It is private, capped at 5MB per file, and
--  accepts only jpeg, png, webp, heic and pdf. Nothing below will work until
--  it exists:
--
--    SELECT id, public, file_size_limit FROM storage.buckets WHERE id='receipts';
--
--  WHY THE PATH IS THE PERMISSION. Objects are stored as
--
--      <partner_id>/<uuid>.<ext>
--
--  and the INSERT policy requires the first path segment to equal the
--  uploader's own partner id. That is the same rule as expenses.partner_id: a
--  partner cannot file anything under another partner's name, and it is
--  enforced by Postgres rather than by the upload form, so it holds against a
--  direct call to the Storage API.
--
--  Reads are open to every active partner, matching the decision that all
--  finance data is visible to all partners. The bucket stays PRIVATE, so a
--  receipt is reachable only through a signed URL minted for someone who
--  passed this policy. A public bucket would put every invoice on a guessable
--  URL with no auth at all.
--
--  APPLY:  paste into the Supabase SQL editor and run. Re-runnable.
--  UNDO:   at the bottom.
-- ═══════════════════════════════════════════════════════════════════════════

-- Any active partner may read any receipt.
DROP POLICY IF EXISTS "Partners read receipts" ON storage.objects;
CREATE POLICY "Partners read receipts"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (bucket_id = 'receipts' AND public.is_finance_partner());

-- A partner may upload ONLY into their own folder. current_partner_id() is
-- NULL for a non-partner, and NULL never equals anything, so the same
-- expression refuses them without a second clause.
DROP POLICY IF EXISTS "Partners upload own receipts" ON storage.objects;
CREATE POLICY "Partners upload own receipts"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'receipts'
    AND (storage.foldername(name))[1] = public.current_partner_id()::text
  );

-- Replacing a receipt is allowed only inside your own folder, and cannot move
-- it into someone else's: the USING clause governs which rows you may touch,
-- the WITH CHECK clause governs what they may become, and both are needed.
DROP POLICY IF EXISTS "Partners replace own receipts" ON storage.objects;
CREATE POLICY "Partners replace own receipts"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'receipts'
    AND (storage.foldername(name))[1] = public.current_partner_id()::text
  )
  WITH CHECK (
    bucket_id = 'receipts'
    AND (storage.foldername(name))[1] = public.current_partner_id()::text
  );

-- Deleting a receipt IS allowed, unlike deleting an expense row.
--
-- The difference is deliberate. An expense row is the ledger; losing one
-- silently breaks the arithmetic, so those are soft deleted with a reason. A
-- receipt is an attachment to a row that survives without it, and a wrong
-- photo, a duplicate, or something personal uploaded by mistake has to be
-- removable. The expense keeps its receipt_path either way, and the page
-- reports a missing file rather than pretending none was ever attached.
DROP POLICY IF EXISTS "Partners delete own receipts" ON storage.objects;
CREATE POLICY "Partners delete own receipts"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'receipts'
    AND (
      (storage.foldername(name))[1] = public.current_partner_id()::text
      OR public.is_finance_super_admin()
    )
  );

-- ═══════════════════════════════════════════════════════════════════════════
--  VERIFY (expect 4 policies naming 'receipts')
-- ═══════════════════════════════════════════════════════════════════════════
-- SELECT policyname, cmd FROM pg_policies
--  WHERE schemaname='storage' AND tablename='objects'
--    AND policyname ILIKE '%receipt%' ORDER BY cmd;
--
-- The bucket must exist and must NOT be public:
-- SELECT id, public, file_size_limit, allowed_mime_types
--   FROM storage.buckets WHERE id = 'receipts';
--
-- ═══════════════════════════════════════════════════════════════════════════
--  UNDO
-- ═══════════════════════════════════════════════════════════════════════════
-- DROP POLICY IF EXISTS "Partners read receipts"          ON storage.objects;
-- DROP POLICY IF EXISTS "Partners upload own receipts"    ON storage.objects;
-- DROP POLICY IF EXISTS "Partners replace own receipts"   ON storage.objects;
-- DROP POLICY IF EXISTS "Partners delete own receipts"    ON storage.objects;
-- Then delete the bucket from the dashboard, or:
--   DELETE FROM storage.objects WHERE bucket_id='receipts';
--   DELETE FROM storage.buckets WHERE id='receipts';
