import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import Navbar from "./components/Navbar.jsx"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Movie from "./pages/Movie.jsx"
import Tv from "./pages/Tv.jsx"
import MoviesContextProvider from "../contexts/moviesContext.jsx"

const Layout = () => {
  return (
    <MoviesContextProvider>
      <Navbar />
      <Outlet />
    </MoviesContextProvider>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/movie/:id",
        element: <Movie />
      },
      {
        path: "/tv/:id",
        element: <Tv />
      },
      {
        path: "/artist/:id",
        element: <div>Hello</div>
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
)
