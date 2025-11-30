// Service worker simples só para habilitar PWA, sem cache agressivo
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {});
self.addEventListener('fetch', (event) => {});