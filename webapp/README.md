# Web app

Vite + React + React Router v7 (Data mode) + Vite-PWA

## Style guide

> [!WARNING]
> This is subject to change

### Pages and loaders

Generally, loaders and actions should be contained within the same page as the route element.
Then, they are all exported at the same level, so they are easily attached.

For file paths, you should either use the path name directly if everything is contained in one file, or a folder if you are colocating components:

```
routes/
  index/
    index.tsx
    index.css
  somepage.tsx
```

There are special names like `index` for `/`. Generally, follow remix-style path routing, but they're still manually imported to the router (not using filesystem router). Then, everything relevant for the route (CSS files, loader functions, components) are all colocated in the same folder.

Routes should be like (`routes/index/index.tsx`):
```tsx
export async function loader() {
  return {
    message: "Hello World",
  }
}

export default function IndexPage() {
  const { message } = useLoaderData()
  // ...
  return (
    // ...
    <Outlet />
  )
```

Then in `main.tsx`, imported like:

```ts
import * as IndexPage from "./routes/index/index"
import * as SomePage from "./routes/somepage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage.default />,
    loader: IndexPage.loader,
    children: [
      {
        path: "somepage",
        element: <SomePage.default />,
      },
    ],
  },
])
```

For larger files (where the loader or action is broken out), they can be imported separately.

This naming makes it easy to `cmd+t` find things by signature, and not getting tons of the same `Page()` functions.

## PWA testing

The PWA parts are not installed when using `npm run dev`. To have the service worker (`sw.js`) installed, you need to `npm run build && npm run preview`.

Then, in the `Application` tab of the dev tools, you can see the service worker installed.

You can test offline capabilities by setting the throttling to `Offline` in the `Network` tab of the dev tools, and reloading the page. It should still work.

Since content is cached, you might have to refresh the cache to see updates. `cmd+shift+r` will hard refresh, or you can right-click on the reload button in your browser.
