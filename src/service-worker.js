const CACHE_NAME = 'stackforge-cache';

// Event for installing the service worker
self.addEventListener('install', async (event) => {
  try {
    // Open or create a cache
    const cache = await caches.open(CACHE_NAME);

    // Add resources to the cache
    await cache.addAll([
      '/',
      './src/styles/primary.css',
      './src/scripts/bundle.js',
      './src/vendors/js/lordicon-icons/icons',
      './src/vendors/js/lordicon-icons/lordicon.min.js'
      // And other paths to cache...
    ]);
  } catch (error) {
    console.error('Service Worker installation failed:', error);
  }
});

// Event for intercepting network requests
self.addEventListener('fetch', async (event) => {
  try {
    // Try to find the request in the cache & Return the found resource
    // or perform the network request
    return (await caches.match(event.request)) || fetch(event.request);
  } catch (error) {
    console.error('Service Worker fetch error:', error);
  }
});
