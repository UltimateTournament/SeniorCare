import { createBrowserRouter, RouterProvider } from "react-router"

import "./index.css"

import ReactDOM from "react-dom/client"
import * as IndexPage from "./routes/index/index"
import * as SomePage from "./routes/somepage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage.IndexPage />,
    loader: IndexPage.loader,
    children: [
      {
        path: "somepage",
        element: <SomePage.SomePage />,
      },
    ],
  },
])

const root = document.getElementById("root")!

ReactDOM.createRoot(root).render(<RouterProvider router={router} />)
