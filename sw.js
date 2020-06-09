const CACHE_NAME = 'relaxo-cache';
const urlToCache = [
  './',
  './img/*.js'
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlToCache);
      })
  );
});