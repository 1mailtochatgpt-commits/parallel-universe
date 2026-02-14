const CACHE = "our-universe-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./assets/us.jpg",
  "./assets/ambient.mp3",
  "./assets/us1.jpg",
  "./assets/eg1.jpg",
  "./assets/eg2.jpg",
  "./assets/ma1.jpg",
  "./assets/ma2.jpg",
  "./assets/pws.jpg",
  "./assets/wy1.jpg",
  "./assets/wy2.jpg",
  "./assets/rain.mp3"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
