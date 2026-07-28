import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return json({ error: 'Unauthorized' }, 401);

    const SUPABASE_URL      = Deno.env.get('SUPABASE_URL')!;
    const ANON_KEY          = Deno.env.get('SUPABASE_ANON_KEY')!;
    const SERVICE_ROLE_KEY  = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    // ── 1. Verify caller identity via their JWT ──────────────────────
    const callerClient = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user: caller }, error: callerErr } = await callerClient.auth.getUser();
    if (callerErr || !caller) return json({ error: 'Unauthorized' }, 401);

    // ── 2. Confirm caller is an admin (server-side, service role) ────
    // Authority is profiles.is_admin, the same flag the admin panel manages
    // and every RLS policy checks. This used to read a separate admin_users
    // table that nothing else maintains, so removing someone via Team Admins
    // cleared profiles.is_admin but left any admin_users row intact, and they
    // kept the ability to delete accounts by calling this endpoint directly.
    const adminClient = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
    const { data: callerProfile } = await adminClient
      .from('profiles')
      .select('is_admin')
      .eq('id', caller.id)
      .single();
    if (!callerProfile?.is_admin) return json({ error: 'Forbidden: admin access required' }, 403);

    // ── 3. Parse and validate target ─────────────────────────────────
    const body = await req.json().catch(() => ({}));
    const { user_id } = body;
    if (!user_id || typeof user_id !== 'string') return json({ error: 'user_id required' }, 400);
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(user_id))
      return json({ error: 'Invalid user_id format' }, 400);

    // Block self-deletion
    if (user_id === caller.id) return json({ error: 'You cannot delete your own account' }, 400);

    // Block deletion of any admin
    const { data: targetProfile } = await adminClient
      .from('profiles')
      .select('is_admin')
      .eq('id', user_id)
      .single();
    if (targetProfile?.is_admin) return json({ error: 'Admin accounts cannot be deleted here' }, 400);

    // ── 4. Delete the user (cascades to profiles via FK) ─────────────
    const { error: deleteErr } = await adminClient.auth.admin.deleteUser(user_id);
    if (deleteErr) return json({ error: deleteErr.message }, 500);

    return json({ success: true });

  } catch (err) {
    return json({ error: String(err) }, 500);
  }
});
