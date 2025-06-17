import { createBrowserRouter, RouterProvider } from "react-router"

import "./index.css"

import ReactDOM from "react-dom/client"
import RootPage, { loader as RootPageLoader } from "./routes/root/root"
import SomePage from "./routes/somepage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    loader: RootPageLoader,
    children: [
      {
        path: "somepage",
        element: <SomePage />,
      },
    ],
  },
])

const root = document.getElementById("root")!

ReactDOM.createRoot(root).render(<RouterProvider router={router} />)
