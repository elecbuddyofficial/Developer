import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ─────────────────────────────────────────────────────────────────────────
// One-click unsubscribe from group emails.
//
// Deliberately requires NO sign-in. An unsubscribe link that asks somebody to
// remember a password is one they will not use, and the alternative they do
// use is the spam button, which costs the sending domain far more than the
// opt-out ever would.
//
// The token is a random 16 byte value per account, unrelated to the user id,
// so the link reveals nothing and cannot be guessed. It only ever sets one
// boolean: it cannot read the account, change access, or do anything else.
//
// Opting out stops MARKETING only. Receipts, trial notices and password resets
// are transactional and keep going, which is what the page says.
// ─────────────────────────────────────────────────────────────────────────

function page(title: string, message: string, ok: boolean): Response {
  return new Response(
`<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title></head>
<body style="margin:0;background:#070D1A;color:#DDE5EF;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px">
  <div style="max-width:420px;width:100%;background:#0D1E33;border:1px solid #1A3050;border-radius:14px;padding:30px 26px;text-align:center">
    <div style="font-family:Georgia,serif;font-size:20px;color:#C8A44A;margin-bottom:14px">Elec-Buddy</div>
    <div style="font-size:17px;font-weight:700;margin-bottom:10px;color:${ok ? '#5DC87A' : '#E05A6A'}">${title}</div>
    <div style="font-size:14px;line-height:1.65;color:#8FA3B8">${message}</div>
    <a href="https://elec-buddy.com/app/" style="display:inline-block;margin-top:22px;background:#C8A44A;color:#070D1A;text-decoration:none;font-weight:700;font-size:14px;padding:12px 24px;border-radius:9px">Open Elec-Buddy</a>
  </div>
</body></html>`,
    { status: ok ? 200 : 400, headers: { 'Content-Type': 'text/html; charset=utf-8' } },
  );
}

serve(async (req) => {
  try {
    const url = new URL(req.url);
    const token = (url.searchParams.get('t') || '').trim();

    if (!token || token.length < 16) {
      return page('That link did not work',
        'The unsubscribe link looks incomplete. Email support@elec-buddy.com and we will take you off the list.', false);
    }

    const sb = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);

    const { data, error } = await sb
      .from('profiles')
      .update({ marketing_opt_out: true })
      .eq('unsubscribe_token', token)
      .select('id');

    if (error) {
      console.error('unsubscribe failed:', error.message);
      return page('Something went wrong',
        'We could not update your preferences just now. Email support@elec-buddy.com and we will do it by hand.', false);
    }

    // A token that matches nothing is reported as success rather than as "no
    // such account". Saying otherwise would turn this into a way of testing
    // whether a given token, and therefore a given account, exists.
    if (!data || !data.length) {
      return page('You are unsubscribed',
        'You will not receive update emails from us. Receipts, trial notices and password resets are unaffected.', true);
    }

    return page('You are unsubscribed',
      'You will not receive update emails from us again. Receipts, trial notices and password resets are unaffected, since those are about your own account.', true);

  } catch (e) {
    console.error(e);
    return page('Something went wrong',
      'Email support@elec-buddy.com and we will take you off the list.', false);
  }
});
