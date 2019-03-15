console.log('Hello depuis le service worker');

self.addEventListener('install', evt => {
    console.log('install evt', evt);
});

self.addEventListener('activate', evt => {
    console.log('activate evt', evt);
});

self.addEventListener('fetch', evt => {
    if(!navigator.onLine) {
        const headers = { headers: { 'Content-Type': 'text/html; charset=utf-8'}};
        evt.respondWith(new Response('<h1>Pas de connexion internet</h1><div>Application en mode dégradé. Veuillez vous connecter</div>', headers));
    }
    console.log('fetch event sur url', evt.request.url);
});