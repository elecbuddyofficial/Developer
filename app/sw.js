// ─── ETO Oral Prep — Service Worker ───────────────────────
// Bump VERSION on every deploy to clear old cache for all users
const VERSION = 'v1';
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

  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(e.request).then(cached => {
        const networkFetch = fetch(e.request).then(response => {
          if (response && response.status === 200) {
            cache.put(e.request, response.clone());
          }
          return response;
        }).catch(() => null);

        // Return cache immediately if available, else wait for network
        return cached || networkFetch;
      })
    )
  );
});
