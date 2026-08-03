import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ─────────────────────────────────────────────────────────────────────────
// Device registration and the cap that Terms section 9 has always promised.
//
// The reader's own client cannot do this itself. devices is readable and
// deletable by its owner but not insertable, so registration has to come
// through here, where the service role runs register_device() and the row
// lock inside decides. Otherwise a reader could add their own rows, or pass
// their own limit, and the cap would mean nothing.
//
// Nothing is ever evicted automatically. Being over the cap is reported and
// the reader picks which of their own devices to drop, because silently
// signing someone out of their phone because they opened a laptop is hostile
// and generates a support ticket rather than a payment.
// ─────────────────────────────────────────────────────────────────────────

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });

/** How many devices one account may have registered at once. */
const DEVICE_LIMIT = 3;

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  try {
    const SUPABASE_URL     = Deno.env.get('SUPABASE_URL')!;
    const ANON_KEY         = Deno.env.get('SUPABASE_ANON_KEY')!;
    const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return json({ error: 'Unauthorized' }, 401);

    // Identity comes from the JWT, never from the body. A user_id in the
    // request would let anyone register devices onto someone else's account,
    // or fill a stranger's slots to lock them out.
    const userClient = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user }, error: authErr } = await userClient.auth.getUser();
    if (authErr || !user) return json({ error: 'Unauthorized' }, 401);

    const body = await req.json().catch(() => ({}));
    const fingerprint = String(body?.fingerprint ?? '').trim();
    const label       = String(body?.label ?? '').trim().slice(0, 60);

    // A random UUID the browser generated, not a measurement of the machine.
    // Length-checked so a caller cannot stuff arbitrary data into the column.
    if (!fingerprint || fingerprint.length < 8 || fingerprint.length > 100) {
      return json({ error: 'Invalid device id' }, 400);
    }

    const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    const { data, error } = await sb.rpc('register_device', {
      p_user: user.id,
      p_fingerprint: fingerprint,
      p_label: label,
      p_limit: DEVICE_LIMIT,
    });
    if (error) {
      console.error('register_device failed:', error.message);
      // Fail OPEN. This gate exists to discourage account sharing, not to be
      // the reason a paying reader cannot open their notes. If the check
      // itself breaks, the reader gets in and the problem is ours to find.
      return json({ allowed: true, degraded: true, limit: DEVICE_LIMIT, devices: [] });
    }

    const row = Array.isArray(data) ? data[0] : data;
    const allowed = row?.allowed !== false;

    // Only sent when the answer is no, because that is the only time the
    // reader has a decision to make and needs to see the list.
    let devices: unknown[] = [];
    if (!allowed) {
      const { data: rows } = await sb
        .from('devices')
        .select('id, fingerprint, device_label, last_seen, created_at')
        .eq('user_id', user.id)
        .order('last_seen', { ascending: false });
      devices = rows ?? [];
    }

    return json({
      allowed,
      count: row?.device_count ?? null,
      limit: row?.device_limit ?? DEVICE_LIMIT,
      devices,
    });

  } catch (e) {
    console.error(e);
    // Same reasoning as above: never lock a paying reader out over this.
    return json({ allowed: true, degraded: true, limit: DEVICE_LIMIT, devices: [] });
  }
});
