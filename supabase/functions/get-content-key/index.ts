import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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
      .select('subscription_plan, subscription_expires_at, trial_started_at')
      .eq('id', user.id)
      .single();

    if (!profile) return new Response('No profile', { status: 403, headers: CORS });

    const plan = profile.subscription_plan;
    let expiresAt: number | null = null;
    let hasAccess = false;

    if (plan === 'lifetime') {
      hasAccess = true;
      expiresAt = null; // never expires
    } else if (plan === 'trial' && profile.trial_started_at) {
      const trialEnd = new Date(profile.trial_started_at).getTime() + 3 * 24 * 60 * 60 * 1000;
      hasAccess = Date.now() < trialEnd;
      expiresAt = trialEnd;
    } else if (['starter', 'standard', 'pro'].includes(plan) && profile.subscription_expires_at) {
      const subEnd = new Date(profile.subscription_expires_at).getTime();
      hasAccess = Date.now() < subEnd;
      expiresAt = subEnd;
    }

    if (!hasAccess) {
      return new Response(JSON.stringify({ error: 'No active subscription' }), {
        status: 403,
        headers: { ...CORS, 'Content-Type': 'application/json' },
      });
    }

    // Return the content key (stored as 64-hex-char Supabase secret)
    const contentKeyHex = Deno.env.get('CONTENT_KEY');
    if (!contentKeyHex) {
      return new Response('Server misconfigured', { status: 500, headers: CORS });
    }

    return new Response(
      JSON.stringify({ key: contentKeyHex, expiresAt, userId: user.id }),
      { headers: { ...CORS, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    return new Response(String(err), { status: 500, headers: CORS });
  }
});
