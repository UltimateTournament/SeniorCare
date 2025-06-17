import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['vite.svg'],
    manifest: {
      name: 'Cobbery - Senior Care',
      short_name: 'Cobbery',
      description: 'Cobbery - Senior Care',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: 'vite.svg',
          sizes: '192x192',
          type: 'image/svg+xml'
        },
        {
          src: 'vite.svg', 
          sizes: '512x512',
          type: 'image/svg+xml'
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,wasm}'],
      navigateFallback: '/index.html', // Point to the actual precached HTML file
      // navigateFallbackDenylist: [/^\/api\/.*$/, /\.\w+$/], // Don't use fallback for API routes or files with extensions
      // runtimeCaching: [ // TODO: these are just examples, not sure if these are what we'll use
      //   {
      //     urlPattern: /^\/api\/.*$/,
      //     handler: 'NetworkFirst',           // ← try network, then cache
      //     options: {
      //       cacheName: 'api-cache',
      //       expiration: {
      //         maxEntries: 50,
      //         maxAgeSeconds: 5 * 60,        // keep API responses 5 min
      //       },
      //       cacheableResponse: { statuses: [0, 200] },
      //     },
      //   },
      //   {
      //     urlPattern: /\.wasm$/,
      //     handler: 'StaleWhileRevalidate',
      //     options: {
      //       cacheName: 'wasm-modules',
      //       expiration: { maxEntries: 10, maxAgeSeconds: 7 * 24 * 3600 },
      //       cacheableResponse: { statuses: [0, 200] },
      //     },
      //   },
      // ],
    },
  })],
})
