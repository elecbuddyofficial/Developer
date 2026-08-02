// ═══════════════════════════════════════════════════════════════════════════
//  ELEC-BUDDY: ENVIRONMENT CONFIG
//
//  Single source of truth for which backend the app talks to. Before this,
//  the production project id, publishable key and the LIVE Razorpay key were
//  hardcoded across six files (21 places), which meant any clone or preview
//  deploy pointed at the real database and could take real card payments.
//
//  Everything in here is PUBLIC by design and safe to commit:
//    - the Supabase publishable/anon key is meant to ship to browsers; row
//      level security is what actually protects data
//    - the Razorpay key id is the publishable half; the secret half lives
//      only in Supabase edge function secrets and never reaches the client
//  Nothing secret belongs in this file. If a value must stay private, it
//  belongs in an edge function secret instead.
//
//  MUST be loaded before any script that creates a Supabase client, so it is
//  a plain synchronous <script> in <head> on every page.
// ═══════════════════════════════════════════════════════════════════════════
window.EB_CONFIG = (function () {
  'use strict';

  var PROD = {
    supabaseRef:   'vcofgjuwprylojgyfbtr',
    supabaseKey:   'sb_publishable_DrsdBaf18Ypt1dGdvM14LA_lW_d4aHW',
    razorpayKeyId: 'rzp_live_TJ1Il25pLKcrEU',
  };

  // Fill these in once the dev Supabase project exists. Use Razorpay TEST
  // keys here (rzp_test_...) - that is the whole point of a dev environment:
  // real checkout flows, test cards, no real money. While these stay null the
  // app falls back to PROD so nothing breaks, but it warns loudly, because
  // silently developing against the live database is exactly what this file
  // was created to prevent.
  var DEV = {
    supabaseRef:   null,
    supabaseKey:   null,
    razorpayKeyId: null,
  };

  // Hostnames that serve real users. Anything else - localhost, a Vercel
  // preview URL, a LAN IP while testing on a phone - is treated as dev.
  var PROD_HOSTS = [
    'elec-buddy.com',
    'www.elec-buddy.com',
    'elecbuddyofficial.github.io',   // current GitHub Pages deploy
  ];

  var host   = window.location.hostname;
  var isProd = PROD_HOSTS.indexOf(host) !== -1;

  var chosen = isProd ? PROD : DEV;

  if (!isProd && !chosen.supabaseRef) {
    chosen = PROD;
    if (window.console && console.warn) {
      console.warn(
        '[EB_CONFIG] No dev backend configured, falling back to PRODUCTION on "' + host + '".\n' +
        'This talks to the real database and uses LIVE payment keys. ' +
        'Set DEV in app/config.js once the dev Supabase project exists.'
      );
    }
  }

  var supabaseUrl = 'https://' + chosen.supabaseRef + '.supabase.co';

  return {
    isProd:        isProd,
    env:           isProd ? 'production' : (chosen === PROD ? 'dev-using-prod-backend' : 'development'),
    supabaseRef:   chosen.supabaseRef,
    supabaseUrl:   supabaseUrl,
    supabaseKey:   chosen.supabaseKey,
    functionsUrl:  supabaseUrl + '/functions/v1',
    razorpayKeyId: chosen.razorpayKeyId,
    // Supabase derives its localStorage key from the project ref, so anything
    // reading the stored session directly has to build it from the same ref.
    authTokenKey:  'sb-' + chosen.supabaseRef + '-auth-token',
  };
})();
