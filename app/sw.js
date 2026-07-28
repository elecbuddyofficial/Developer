// ─── ETO Oral Prep — Service Worker ───────────────────────
// Bump VERSION on every deploy to clear old cache for all users
const VERSION = 'v24';
const CACHE = 'elec-buddy-' + VERSION;

// App shell — always cached at install time
const PRECACHE = [
  './',
  './style.css',
  './app.js',
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
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then(clients => clients.forEach(c => c.postMessage({ type: 'SW_UPDATED' })))
  );
});

// ── Fetch ─────────────────────────────────────────────────
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

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

  // Content files (notes, quizzes, videos, diagrams): stale-while-revalidate.
  // Files are AES-256-GCM encrypted — safe to cache and serve offline.
  // First visit fetches from network and caches; subsequent visits serve from
  // cache while updating in background. Offline: serves from cache.
  if (e.request.url.includes('/data/')) {
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(e.request).then(cached => {
          const networkFetch = fetch(e.request).then(response => {
            if (response && response.status === 200) {
              cache.put(e.request, response.clone());
            }
            return response;
          }).catch(() => cached);
          return cached || networkFetch;
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
