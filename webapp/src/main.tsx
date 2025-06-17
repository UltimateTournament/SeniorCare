import { createBrowserRouter, RouterProvider } from "react-router"

import "./index.css"

import ReactDOM from "react-dom/client"
import * as RootPage from "./routes/root/root"
import * as SomePage from "./routes/somepage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage.default />,
    loader: RootPage.loader,
    children: [
      {
        path: "somepage",
        element: <SomePage.default />,
      },
    ],
  },
])

const root = document.getElementById("root")!

ReactDOM.createRoot(root).render(<RouterProvider router={router} />)
