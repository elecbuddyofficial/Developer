// ─── Elec-Buddy — Service Worker ──────────────────────────
// Bump VERSION on every deploy to clear old cache for all users
const VERSION = 'v161';
const CACHE = 'elec-buddy-' + VERSION;

// App shell — always cached at install time
const PRECACHE = [
  './',
  './auth.html',
  './courses.html',
  './sponsorship/index.html',
  './style.css',
  './table-hints.js',
  './progress.js',
  './app.js',
  './account.js',
  './written.css',
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
    caches.keys().then(keys => {
      const oldKeys = keys.filter(k => k !== CACHE);
      return Promise.all(oldKeys.map(k => caches.delete(k)))
        .then(() => self.clients.claim())
        .then(() => {
          if (oldKeys.length > 0) {
            return self.clients.matchAll({ type: 'window' })
              .then(clients => clients.forEach(c => c.postMessage({ type: 'SW_UPDATED' })));
          }
        });
    })
  );
});

// ── Fetch ─────────────────────────────────────────────────
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  // Never cache external CDN requests — always fetch fresh
  if (!e.request.url.startsWith(self.location.origin)) {
    e.respondWith(fetch(e.request));
    return;
  }

  // HTML navigation requests: always network-first so users get fresh code.
  // Fall back to cache only if completely offline.
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() => caches.match('./'))
    );
    return;
  }

  // Hard-refresh: bypass SW cache entirely
  if (e.request.cache === 'reload' || e.request.cache === 'no-cache') {
    e.respondWith(fetch(e.request));
    return;
  }

  // All static content under /data/ — diagrams, notes, quizzes, videos —
  // is cache-first: fetched once, then served from cache with zero network
  // cost on every later visit.
  //
  // This used to be stale-while-revalidate for notes/quiz content, on the
  // reasoning that content corrections should propagate without a version
  // bump. In practice that meant a background search indexer (app.js,
  // startBackgroundIndexing) silently re-downloaded the full text of every
  // topic — around 0.7MB gzip — a few seconds into EVERY page load, for
  // every user, whether or not they ever opened a single topic, forever,
  // even on repeat visits with nothing changed. That cost was invisible and
  // recurring in exactly the way the diagram fix above was trying to avoid.
  //
  // Content fixes already require a deploy (these files live in the repo),
  // and every deploy that matters already bumps VERSION above — so cache-
  // first here costs nothing in practice and stops the silent re-fetching.
  if (e.request.url.includes('/data/')) {
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(e.request).then(cached => {
          if (cached) return cached;
          return fetch(e.request).then(response => {
            if (response && response.status === 200) {
              cache.put(e.request, response.clone());
            }
            return response;
          });
        })
      )
    );
    return;
  }

  // App shell (JS, CSS): cache-first, update in background
  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(e.request, { ignoreSearch: true }).then(cached => {
        const networkFetch = fetch(new Request(e.request, { cache: 'no-cache' })).then(response => {
          if (response && response.status === 200) {
            cache.put(e.request, response.clone());
          }
          return response;
        }).catch(() => cached);

        return cached || networkFetch;
      })
    )
  );
});
