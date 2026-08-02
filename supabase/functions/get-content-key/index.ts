import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { deriveAccess, trialEnd } from '../_shared/entitlements.ts';

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

    // Check subscription status. Access comes from the per-scope expiry
    // columns now, so someone whose Written has lapsed while their Oral is
    // still running resolves correctly instead of being judged by whichever
    // plan they happened to buy last.
    const { data: profile } = await supabase
      .from('profiles')
      .select('subscription_plan, trial_started_at, written_expires_at, oral_expires_at')
      .eq('id', user.id)
      .single();

    if (!profile) return new Response('No profile', { status: 403, headers: CORS });

    const now = new Date();
    const { written: hasWritten, oral: hasOral } = deriveAccess(profile, now);

    // When the cached key set should be revisited. Not the LATEST expiry:
    // if Written ends in March and Oral in December, the cache has to be
    // refreshed in March so the Written key stops being handed out. So it is
    // the earliest expiry among the scopes actually granted.
    let expiresAt: number | null = null;
    if (profile.subscription_plan === 'lifetime') {
      expiresAt = null;                                   // never expires
    } else {
      const tEnd = trialEnd(profile);
      if (tEnd && now < tEnd) {
        expiresAt = tEnd.getTime();                       // trial grants both
      } else {
        const granted: number[] = [];
        if (hasWritten && profile.written_expires_at) granted.push(new Date(profile.written_expires_at).getTime());
        if (hasOral    && profile.oral_expires_at)    granted.push(new Date(profile.oral_expires_at).getTime());
        expiresAt = granted.length ? Math.min(...granted) : now.getTime();
      }
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
