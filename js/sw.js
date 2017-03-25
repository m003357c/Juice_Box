var CACHE_NAME = 'Juice_Box_Offline_Pages';
var CACHED_URLS = [
  '../index.html',
  '../basket.html',
  ' ../checkout.html',
  '../order-status.html',
  '../css/styles.css',
  '../js/script.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        } else if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('offline-index.html');
        }
      });
    })
  );
});
