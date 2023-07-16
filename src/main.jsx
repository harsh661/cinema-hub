import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import Navbar from "./components/Navbar.jsx"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Movie from "./pages/Movie.jsx"
import MoviesContextProvider from "../contexts/moviesContext.jsx"
import Footer from "./components/Footer.jsx"

const Layout = () => {
  return (
    <MoviesContextProvider>
      <Navbar />
      <Outlet />
      <Footer />
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
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
)
