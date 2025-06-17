# Web app

Vite + React + React Router v7 (Data mode) + Vite-PWA

## PWA testing

The PWA parts are not installed when using `npm run dev`. To have the service worker (`sw.js`) installed, you need to `npm run build && npm run preview`.

Then, in the `Application` tab of the dev tools, you can see the service worker installed.

You can test offline capabilities by setting the throttling to `Offline` in the `Network` tab of the dev tools, and reloading the page. It should still work.
