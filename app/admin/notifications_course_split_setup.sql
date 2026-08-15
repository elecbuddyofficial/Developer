-- ============================================================
--  Split notifications between COC and Sponsorship
--  Re-runnable. Safe to apply more than once.
-- ============================================================
--
--  THE PROBLEM
--
--  app/index.html and app/sponsorship/index.html both read
--  public.notifications with no filter, so every notification is shown in both
--  apps. A COC notice about a new Oral topic appears to Sponsorship cadets, and
--  anything posted for Sponsorship reaches COC subscribers who did not ask for
--  it. This is live today, not hypothetical.
--
--  THE FIX
--
--  One column. A separate table was considered and rejected: the rows are the
--  same shape, the admin screen is the same screen, and two tables would mean
--  duplicating the bell, the unread logic and the reads table for no gain.
--
--  DEFAULT IS 'coc', DELIBERATELY
--
--  Every existing row was written for COC, because Sponsorship has never had a
--  notification posted. Defaulting to 'coc' keeps them exactly where they were
--  and, more importantly, stops old COC notices appearing in Sponsorship the
--  moment the filter goes live. Defaulting to 'both' would do the opposite.
--
--  ORDER OF OPERATIONS MATTERS
--
--  Apply this FIRST, then ship the client filters. A client that filters on a
--  column which does not exist yet gets an error back and shows the user no
--  notifications at all.
--
--  APPLY:  paste into the Supabase SQL editor and run.
--  UNDO:   ALTER TABLE public.notifications DROP COLUMN course;
--          (revert the client filters too, or they will error)
--          (recorded in claude-cowork/CHANGE_LEDGER.md)
-- ============================================================

ALTER TABLE public.notifications
  ADD COLUMN IF NOT EXISTS course TEXT NOT NULL DEFAULT 'coc';

-- Added separately so re-running cannot fail on an existing constraint.
ALTER TABLE public.notifications
  DROP CONSTRAINT IF EXISTS notifications_course_check;

ALTER TABLE public.notifications
  ADD CONSTRAINT notifications_course_check
  CHECK (course IN ('coc','sponsorship','both'));

-- Both apps filter on this, always alongside the ordering by date.
CREATE INDEX IF NOT EXISTS notifications_course_created_idx
  ON public.notifications (course, created_at DESC);

COMMENT ON COLUMN public.notifications.course IS
  'Which app shows this notification: coc, sponsorship, or both. Defaults to coc because every row predating this column was written for COC. The clients filter with .in(course, [<their app>, ''both'']).';

-- ============================================================
--  Verify
-- ============================================================
-- Existing rows should all read 'coc', and the count should match the total:
-- SELECT course, COUNT(*) FROM public.notifications GROUP BY course;
--
-- The constraint should reject anything else:
-- INSERT INTO public.notifications (title, body, course)
--   VALUES ('x','y','banana');   -- expect: violates check constraint
--
-- ============================================================
--  Client changes to ship AFTER this is applied
-- ============================================================
--  app/sponsorship/index.html
--    .from('notifications').select('id,title,body,type,created_at')
--      .in('course', ['sponsorship','both'])
--    ...and the same .in() on the unread-check query that selects created_at.
--
--  app/index.html
--    .from('notifications').select('id,title,body,type,created_at,target_plan')
--      .in('course', ['coc','both'])
--    ...and the same on its unread-check query.
--
--  app/admin  the notification composer gains a course selector writing this
--  column. Default it to the course tab the admin is currently on.

-- ============================================================
--  ADDENDUM, after applying and auditing the above
-- ============================================================
--  The audit found notifications has SELECT, INSERT and DELETE policies but no
--  UPDATE policy. That predates this change, and it did not matter while a
--  notice was only ever posted or removed. It matters now, because course is a
--  field an admin will plausibly want to correct after posting.
--
--  Without this, changing a notice's course means deleting and reposting it,
--  which also resets created_at and re-marks it unread for everyone.
--
--  Optional. Apply only if you want notices to be editable in the console.

-- DROP POLICY IF EXISTS "Admin can update notifications" ON public.notifications;
-- CREATE POLICY "Admin can update notifications"
--   ON public.notifications FOR UPDATE
--   USING (public.is_admin()) WITH CHECK (public.is_admin());
