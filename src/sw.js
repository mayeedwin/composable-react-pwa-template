/* eslint-disable no-undef */
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
  );
  if (workbox) {
    try {
      console.log("[ PWA Fire Bundle ] Hello from Workbox");
      workbox.routing.registerRoute(
        new RegExp("/"),
        new workbox.strategies.NetworkFirst({
          cacheName: "App",
          plugins: [
            new workbox.expiration.ExpirationPlugin({
              maxAgeSeconds: 60 * 60 * 1 * 1,
            }),
          ],
        })
      );
      workbox.core.skipWaiting();
      workbox.core.clientsClaim();
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("Boo! Workbox failed to load 😬");
  }
  
