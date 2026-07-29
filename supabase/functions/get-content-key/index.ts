import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Duration values that grant access when unexpired. Legacy values (starter/
// standard/pro) are pre-scope-split plans, backfilled to plan_scope='both'
// in the DB migration, so they keep working exactly as before.
const ALL_PAID_PLANS = ['starter', 'standard', 'pro', '3mo', '6mo', '12mo'];

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return new Response('Unauthorized', { status: 401, headers: CORS });

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: authHeader } } }
    );

    // Verify caller's JWT and get their user ID
    const { data: { user }, error: userErr } = await supabase.auth.getUser();
    if (userErr || !user) return new Response('Unauthorized', { status: 401, headers: CORS });

    // Check subscription status
    const { data: profile } = await supabase
      .from('profiles')
      .select('subscription_plan, subscription_expires_at, trial_started_at, plan_scope')
      .eq('id', user.id)
      .single();

    if (!profile) return new Response('No profile', { status: 403, headers: CORS });

    const plan = profile.subscription_plan;
    let expiresAt: number | null = null;
    let hasOral = false;
    let hasWritten = false;

    if (plan === 'lifetime') {
      hasOral = hasWritten = true;
      expiresAt = null; // never expires
    } else if (plan === 'trial' && profile.trial_started_at) {
      // Trial is never scope-restricted — full preview of both sections.
      const trialEnd = new Date(profile.trial_started_at).getTime() + 3 * 24 * 60 * 60 * 1000;
      const active = Date.now() < trialEnd;
      hasOral = hasWritten = active;
      expiresAt = trialEnd;
    } else if (ALL_PAID_PLANS.includes(plan) && profile.subscription_expires_at) {
      const subEnd = new Date(profile.subscription_expires_at).getTime();
      const active = Date.now() < subEnd;
      // Legacy rows and any payment caught mid-deploy-skew have plan_scope
      // NULL — those must resolve to 'both' (what they actually paid for
      // under the old all-or-nothing model), never fail closed to neither.
      const scope = profile.plan_scope || 'both';
      hasOral = active && (scope === 'oral' || scope === 'both');
      hasWritten = active && (scope === 'written' || scope === 'both');
      expiresAt = subEnd;
    }

    if (!hasOral && !hasWritten) {
      return new Response(JSON.stringify({ error: 'No active subscription' }), {
        status: 403,
        headers: { ...CORS, 'Content-Type': 'application/json' },
      });
    }

    // Return only the key(s) the caller is actually entitled to — never
    // include a key for a scope they don't have.
    const keys: Record<string, string> = {};
    if (hasOral)    keys.oral    = Deno.env.get('CONTENT_KEY_ORAL') ?? '';
    if (hasWritten) keys.written = Deno.env.get('CONTENT_KEY_WRITTEN') ?? '';

    if ((hasOral && !keys.oral) || (hasWritten && !keys.written)) {
      return new Response('Server misconfigured', { status: 500, headers: CORS });
    }

    return new Response(
      JSON.stringify({ keys, expiresAt, userId: user.id }),
      { headers: { ...CORS, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    return new Response(String(err), { status: 500, headers: CORS });
  }
});
