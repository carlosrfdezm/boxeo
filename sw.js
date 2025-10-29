self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());
self.addEventListener('fetch', (e) => {
  // Fallback simple: intenta la red, si falla usa cache
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});