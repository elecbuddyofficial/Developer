// ═══════════════════════════════════════════════════════════════════════════
//  The Sponsorship content key.
//
//  WHY THIS IS A SEPARATE FUNCTION AND NOT A THIRD KEY ON get-content-key.
//  That was the obvious move and it is a real regression risk, so it is worth
//  writing down before somebody "simplifies" the two back together.
//
//  get-content-key answers 403 when a caller has neither Oral nor Written.
//  The client leans on that: initContentKeys (app/index.html:1727) does
//  `if (!resp.ok) return;`, which leaves both the IndexedDB record 'ck2' and
//  window._contentKeys exactly as the cache left them. It is a
//  graceful-degradation path, not an error path.
//
//  Add sponsorship there and every caller starts getting 200. The early
//  return stops firing, execution reaches _saveKeys(...), and a response that
//  happens to carry no oral/written key OVERWRITES a paying user's cached
//  keys with an empty, already-expired record — including the copy that makes
//  the app work offline. Any transient false negative on entitlement (replica
//  lag during a renewal, a .single() landing mid-update from
//  verify-razorpay-payment, clock skew across the exact expiry minute) turns
//  from harmless into "I paid and I am locked out".
//
//  Keeping it separate means the proof that COC is unaffected is
//  `git diff supabase/functions/get-content-key/` returning empty. That is
//  worth about forty duplicated lines.
//
//  WHAT THIS PROTECTS, HONESTLY. Every logged-in user gets this key, so anyone
//  willing to make an account can read it out of devtools. That is the design,
//  not an oversight: Sponsorship is free to read once you are signed in. The
//  point is that data/Sponsorship stops being readable by someone browsing the
//  public GitHub repo or fetching a URL while logged out, which is the way
//  content actually walks. It raises the cost of copying from one `git clone`
//  to real work. It is deterrence, not access control, and no amount of
//  cleverness here would change that.
// ═══════════════════════════════════════════════════════════════════════════

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// How long the client may cache the key before asking again. Fixed, and
// deliberately NOT derived from any subscription date.
//
// get-content-key computes expiresAt from the earliest live entitlement, and
// collapses it to now when nothing is granted. Reusing that here would hand a
// free user a record that is already expired the moment it is written, so
// _loadKeys would bin it and every single page load would re-fetch. Flooring
// that shared value at now+7d instead would be worse: it would keep a lapsed
// buyer's Oral key valid for a week past their expiry. Separate lifetime,
// separate field, no interaction.
const KEY_TTL_MS = 7 * 24 * 60 * 60 * 1000;

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

    // Verify the caller's JWT. This is the whole gate: a valid session.
    const { data: { user }, error: userErr } = await supabase.auth.getUser();
    if (userErr || !user) return new Response('Unauthorized', { status: 401, headers: CORS });

    // Confirm a profile row exists, so a token for a deleted account cannot
    // still pull content. No plan, no expiry, no scope is read: Sponsorship
    // has no paid tier and inventing an entitlement check here would gate
    // content that is free today.
    //
    // signup_status is deliberately NOT checked. A pending account can already
    // read every Sponsorship page today, because the hold screen only exists
    // in app/index.html. Refusing them the key here would take away access
    // they currently have, as a side effect of an encryption change. Whether
    // the hold should cover Sponsorship is a real product question and it is
    // being handled separately, where it can be given a proper screen instead
    // of silently failing to decrypt.
    const { data: profile, error: profErr } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', user.id)
      .single();

    if (profErr || !profile) {
      return new Response(JSON.stringify({ error: 'No profile' }), {
        status: 403,
        headers: { ...CORS, 'Content-Type': 'application/json' },
      });
    }

    const key = Deno.env.get('CONTENT_KEY_SPONSORSHIP') ?? '';
    if (key.length !== 64) {
      // Fail loudly rather than handing back an empty string the client would
      // import as a key and then fail to decrypt with, which would look like
      // corrupt content instead of a misconfigured server.
      return new Response('Server misconfigured', { status: 500, headers: CORS });
    }

    return new Response(
      JSON.stringify({ key, expiresAt: Date.now() + KEY_TTL_MS, userId: user.id }),
      { headers: { ...CORS, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    return new Response(String(err), { status: 500, headers: CORS });
  }
});
