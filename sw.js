const CACHE='sub40-v2';
const APP_SHELL=['./','./index.html','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP_SHELL)));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(url.pathname.endsWith('/manifest.webmanifest')){
    event.respondWith(fetch(event.request,{cache:'no-store'}));
    return;
  }
  event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)));
});
