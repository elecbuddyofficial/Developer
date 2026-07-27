const VERSION = 'v19';
const CACHE = 'elec-buddy-' + VERSION;

// On install: cache only the maintenance page
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.add('./')).then(() => self.skipWaiting())
  );
});

// On activate: wipe every old cache, take control immediately
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Intercept every request and return the maintenance page
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match('./').then(cached => {
      if (cached) return cached;
      return fetch('./');
    })
  );
});
