import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import Navbar from "./components/Navbar.jsx"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Movie from "./pages/Movie.jsx"
import Tv from "./pages/Tv.jsx"
import MoviesContextProvider from "../contexts/moviesContext.jsx"
import Footer from "./components/Footer.jsx"
import ArtistPage from "./pages/ArtistPage.jsx"
import SeasonPage from "./pages/SeasonPage.jsx"
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary.jsx"

const Layout = () => {
  return (
    <ErrorBoundary>
      <MoviesContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </MoviesContextProvider>
    </ErrorBoundary>
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
        element: <Movie />,
      },
      {
        path: "/tv/:id",
        element: <Tv />,
      },
      {
        path: "/artist/:id",
        element: <ArtistPage />,
      },
      {
        path: "/tv/:id/season/:season_number",
        element: <SeasonPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
