const VERSION = 'v1';

self.addEventListener('install', event => {
    event.waitUntil(precache());
  });

self.addEventListener('fetch', event => {
    const request = event.request;
    // aquí el único método que nos interesa es el get
    if (request.method !== 'GET') {
        return;
    }

    //Buscar en el cache, para ver si ya tenemos los datos de esta petición.
    event.respondWith(cachedResponse(request));

    //para actualizar el cache y asegurar que tenemos la versión más reciente de los archivos:
    event.waitUntil(updateCache(request));
});

async function precache() {
    const cache = await caches.open(VERSION);
    return cache.addAll([
      // '/',
      // '/index.html',
      // '/assets/index.js',
      // '/assets/MediaPlayer.js',
      // '/assets/plugins/AutoPlay.js',
      // '/assets/plugins/AutoPause.ts',
      // '/assets/index.css',
      // '/assets/BigBuckBunny.mp4',
    ]);
  }

async function cachedResponse(request) {
    //abrimos la versión específica que hemos declarado en VERSION, que en este caso es la v1
    const cache = await caches.open(VERSION);
    //aquí le preguntamos al cache si ya tiene la petición que querenoos hacer:
    const response = await cache.match(request);
    // aquí es importante agregar el || fetch(request), porque si no se tiene en cache, regresaría undefined y nunca ejecutaria la petición
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    //llamamos a networtk para actualizar el cache
    return cache.put(request, response);
}