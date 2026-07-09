// ─── ETO Oral Prep — Service Worker ───────────────────────
// Bump VERSION on every deploy to clear old cache for all users
const VERSION = 'v14';
const CACHE = 'elec-buddy-' + VERSION;

const PRECACHE = [
  './',
  './style.css',
  './app.js',
  './written.css',
  // Oral notes
  '../data/Orals/notes/t01_notes.js',
  '../data/Orals/notes/t02_notes.js',
  '../data/Orals/notes/t03_notes.js',
  '../data/Orals/notes/t04_notes.js',
  '../data/Orals/notes/t05_notes.js',
  '../data/Orals/notes/t06_notes.js',
  '../data/Orals/notes/t07_notes.js',
  '../data/Orals/notes/t08_notes.js',
  '../data/Orals/notes/t09_notes.js',
  '../data/Orals/notes/t10_notes.js',
  '../data/Orals/notes/t11_notes.js',
  '../data/Orals/notes/t12_notes.js',
  '../data/Orals/notes/t13_notes.js',
  '../data/Orals/notes/t14_notes.js',
  '../data/Orals/notes/t15_notes.js',
  '../data/Orals/notes/t16_notes.js',
  '../data/Orals/notes/t17_notes.js',
  '../data/Orals/notes/t18_notes.js',
  '../data/Orals/notes/t19_notes.js',
  '../data/Orals/notes/t20_notes.js',
  '../data/Orals/notes/t21_notes.js',
  '../data/Orals/notes/t22_notes.js',
  '../data/Orals/notes/t23_notes.js',
  // Written notes
  '../data/Written/notes/w01_notes.js',
  '../data/Written/notes/w02_notes.js',
  '../data/Written/notes/w03_notes.js',
  '../data/Written/notes/w04_notes.js',
  '../data/Written/notes/w05_notes.js',
  '../data/Written/notes/w06_notes.js',
  '../data/Written/notes/w07_notes.js',
  // Diagrams - Topic 1
  '../data/diagrams/t01-ac-generator-principle.png',
  '../data/diagrams/t01-brushless-system.png',
  '../data/diagrams/t01-synchroscope-construction.png',
  '../data/diagrams/t01-dark-lamp-sync.png',
  '../data/diagrams/t01-dashpot.png',
  // Diagrams - Topic 2
  '../data/diagrams/t02-hv-protection-scheme.png',
  '../data/diagrams/t02-earth-neutral-system.png',
  '../data/diagrams/t02-vcb-construction.png',
  '../data/diagrams/t02-sf6-breaker.png',
  '../data/diagrams/t02-vcb-racking.png',
  // Diagrams - Topic 3
  '../data/diagrams/t03-induction-motor.png',
  '../data/diagrams/t03-slip-torque-curve.png',
  '../data/diagrams/t03-dol-starter.png',
  '../data/diagrams/t03-star-delta-terminals.png',
  '../data/diagrams/t03-star-delta-starter.png',
  '../data/diagrams/t03-vfd-block.png',
  '../data/diagrams/t03-armature-reaction.png',
  '../data/diagrams/t03-ward-leonard.png',
  '../data/diagrams/t03-dc-injection-braking.png',
  '../data/diagrams/t03-plugging-braking.png',
  '../data/diagrams/t03-slip-ring-motor.png',
  '../data/diagrams/t03-motor-nameplate.png',
  // Diagrams - Topic 2 (additional)
  '../data/diagrams/t02-ct-pt-connection.png',
  // Diagrams - Topic 4 (additional)
  '../data/diagrams/t04-acb-arc-chute.png',
  '../data/diagrams/t04-hrc-fuse.png',
  '../data/diagrams/t04-differential-protection.png',
  '../data/diagrams/t04-ct-pt-connection.png',
  '../data/diagrams/t04-reverse-power-schematic.png',
  '../data/diagrams/t04-reverse-power-relay.png',
  '../data/diagrams/t04-pi-test-curve.png',
  '../data/diagrams/t04-ups-types.png',
  '../data/diagrams/t04-earth-lamps.png',
  '../data/diagrams/t04-fire-detection-eol.png',
  // Diagrams - Topic 5
  '../data/diagrams/t05-transformer-principle.png',
  '../data/diagrams/t05-transformer-oc-sc-test.png',
  // Diagrams - Topic 6
  '../data/diagrams/t06-4-20ma-current-loop.png',
  '../data/diagrams/t06-dp-flow-sensor.png',
  '../data/diagrams/t06-dp-three-way-valve.png',
  '../data/diagrams/t06-hart-communicator.png',
  '../data/diagrams/t06-rtd-wiring.png',
  '../data/diagrams/t06-thermocouple.png',
  '../data/diagrams/t06-two-wire-transmitter.png',
  '../data/diagrams/t06-wheatstone-strain-gauge.png',
  '../data/diagrams/t06-zener-barrier.png',
  // Diagrams - Topic 7
  '../data/diagrams/t07-cascade-control.png',
  '../data/diagrams/t07-open-closed-loop.png',
  '../data/diagrams/t07-plc-ladder-logic.png',
  '../data/diagrams/t07-plc-scan-cycle.png',
  '../data/diagrams/t07-three-element-boiler.png',
  // Diagrams - Topic 8
  '../data/diagrams/t08-diode-zener-vi-char.png',
  '../data/diagrams/t08-opamp-circuits.png',
  '../data/diagrams/t08-rectifier-circuits.png',
  // Diagrams - Topic 9
  '../data/diagrams/t09-steering-gear.png',
  // Diagrams - Topic 10
  '../data/diagrams/t10-iccp-system.png',
  // Diagrams - Topic 11
  '../data/diagrams/t11-capacitor-banks.png',
  '../data/diagrams/t11-power-triangle.png',
  // Diagrams - Topic 17
  '../data/diagrams/t17-ows-system.png',
  // Diagrams - Topic 19
  '../data/diagrams/t19-zener-barrier.png',
  // Diagrams - Topic 6 (additional)
  '../data/diagrams/t06-pellistor-catalytic.png',
  '../data/diagrams/t06-lvdt.png',
  '../data/diagrams/t06-capacitive-level.png',
  '../data/diagrams/t06-ultrasonic-level.png',
  '../data/diagrams/t06-radar-level.png',
  '../data/diagrams/t06-magnetic-pickup.png',
  '../data/diagrams/t06-capacitive-proximity.png',
  '../data/diagrams/t06-inductive-proximity.png',
  '../data/diagrams/t06-paramagnetic-o2.png',
  '../data/diagrams/t06-coriolis-flowmeter.png',
  '../data/diagrams/t06-turbine-flowmeter.png',
  // Diagrams - Topic 7 (additional)
  '../data/diagrams/t07-master-slave-arch.png',
  // Diagrams - Topic 8 (additional)
  '../data/diagrams/t08-bjt-structure.png',
  '../data/diagrams/t08-mosfet-structure.png',
  '../data/diagrams/t08-scr-thyristor.png',
  '../data/diagrams/t08-cycloconverter.png',
  '../data/diagrams/t08-optocoupler.png',
  // Diagrams - Topic 8 (additional 2)
  '../data/diagrams/t08-types-of-diodes.png',
  '../data/diagrams/t08-smps.png',
  '../data/diagrams/t08-all-gates.png',
  // Diagrams - Topic 9 (additional)
  '../data/diagrams/t09-omd.png',
  '../data/diagrams/t09-crankcase-relief.png',
  '../data/diagrams/t09-boiler-bms.png',
  '../data/diagrams/t09-boiler-types.png',
  '../data/diagrams/t09-refrigeration-cycle.png',
  '../data/diagrams/t09-tev-schema.png',
  '../data/diagrams/t09-purifier-screw.png',
  '../data/diagrams/t09-hydraulic-governor.png',
  '../data/diagrams/t09-flyball-governor.png',
  '../data/diagrams/t09-smoke-density-meter.png',
  '../data/diagrams/t09-fresh-water-generator.png',
  '../data/diagrams/t09-anti-heeling.png',
  '../data/diagrams/t09-dead-ship-recovery.png',
  '../data/diagrams/t09-blackout.png',
  '../data/diagrams/t09-electric-oven.png',
  '../data/diagrams/t09-seawater-injection-valve.png',
  // Diagrams - Topic 10 (additional)
  '../data/diagrams/t10-sacrificial-vs-iccp.png',
  '../data/diagrams/t10-iccp-protection-levels.png',
  '../data/diagrams/t10-stray-current-jetty.png',
  '../data/diagrams/t10-portable-ref-anode.png',
  '../data/diagrams/t10-bonding-arrangement.png',
  '../data/diagrams/t10-shaft-earthing-brush.png',
  '../data/diagrams/t10-mgps.png',
  // Videos
  '../data/Orals/videos/t01_videos.js',
  '../data/Orals/videos/t02_videos.js',
  '../data/Orals/videos/t03_videos.js',
  '../data/Orals/videos/t04_videos.js',
  '../data/Orals/videos/t05_videos.js',
  '../data/Orals/videos/t06_videos.js',
  '../data/Orals/videos/t07_videos.js',
  '../data/Orals/videos/t08_videos.js',
  '../data/Orals/videos/t09_videos.js',
  '../data/Orals/videos/t10_videos.js',
  '../data/Orals/videos/t11_videos.js',
  '../data/Orals/videos/t12_videos.js',
  '../data/Orals/videos/t13_videos.js',
  '../data/Orals/videos/t14_videos.js',
  '../data/Orals/videos/t15_videos.js',
  '../data/Orals/videos/t16_videos.js',
  '../data/Orals/videos/t17_videos.js',
  '../data/Orals/videos/t18_videos.js',
  '../data/Orals/videos/t19_videos.js',
  '../data/Orals/videos/t20_videos.js',
  '../data/Orals/videos/t21_videos.js',
  '../data/Orals/videos/t22_videos.js',
  '../data/Orals/videos/t23_videos.js',
  // Quizzes
  '../data/Orals/quizzes/t01_quiz.js',
  '../data/Orals/quizzes/t02_quiz.js',
  '../data/Orals/quizzes/t03_quiz.js',
  '../data/Orals/quizzes/t04_quiz.js',
  '../data/Orals/quizzes/t05_quiz.js',
  '../data/Orals/quizzes/t06_quiz.js',
  '../data/Orals/quizzes/t07_quiz.js',
  '../data/Orals/quizzes/t08_quiz.js',
  '../data/Orals/quizzes/t09_quiz.js',
  '../data/Orals/quizzes/t10_quiz.js',
  '../data/Orals/quizzes/t11_quiz.js',
  '../data/Orals/quizzes/t12_quiz.js',
  '../data/Orals/quizzes/t13_quiz.js',
  '../data/Orals/quizzes/t14_quiz.js',
  '../data/Orals/quizzes/t15_quiz.js',
  '../data/Orals/quizzes/t16_quiz.js',
  '../data/Orals/quizzes/t17_quiz.js',
  '../data/Orals/quizzes/t18_quiz.js',
  '../data/Orals/quizzes/t19_quiz.js',
  '../data/Orals/quizzes/t20_quiz.js',
  '../data/Orals/quizzes/t21_quiz.js',
  '../data/Orals/quizzes/t22_quiz.js',
  '../data/Orals/quizzes/t23_quiz.js',
];

// ── Install: cache app shell immediately ──────────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: delete old cache versions ──────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: cache-first, update in background ─────────────
self.addEventListener('fetch', e => {
  // Only handle GET requests for same-origin assets
  if (e.request.method !== 'GET') return;

  // Let hard-refresh (cache: reload/no-cache) bypass SW cache entirely
  if (e.request.cache === 'reload' || e.request.cache === 'no-cache') {
    e.respondWith(fetch(e.request));
    return;
  }

  e.respondWith(
    caches.open(CACHE).then(cache =>
      // ignoreSearch: true so app.js?v=2 hits the cached ./app.js
      cache.match(e.request, { ignoreSearch: true }).then(cached => {
        // Fetch from network bypassing browser HTTP cache so we always get fresh files
        const networkFetch = fetch(new Request(e.request, { cache: 'no-cache' })).then(response => {
          if (response && response.status === 200) {
            cache.put(e.request, response.clone());
          }
          return response;
        }).catch(err => {
          if (cached) return cached;
          throw err;
        });

        return cached || networkFetch;
      })
    )
  );
});
