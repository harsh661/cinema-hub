import Grid from "./components/Grid.jsx"
import MovieCard from "./components/MovieCard.jsx"
import Heading from "./components/Heading.jsx"
import Backdrop from "./components/Backdrop.jsx"
import Container from "./components/Container.jsx"
import { useContext, useEffect, useState } from "react"
import { MoviesContext } from "../contexts/moviesContext.jsx"
import SearchPage from "./pages/SearchPage.jsx"
import Loader from "./components/Loader.jsx"
import ArtistCard from "./components/ArtistCard.jsx"

function App() {
  const { movies, setMovies, tv, setTv, searchQuery, people, setPeople } =
    useContext(MoviesContext)
  const [random, setRandom] = useState(0)

  useEffect(() => {
    if (movies.length === 0) {
      const url = `https://api.themoviedb.org/3/trending/movie/day`
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_REACT_API_KEY}`,
        },
      }

      fetch(url, options)
        .then((res) => res.json())
        .then((json) => setMovies(json.results))
        .catch((err) => console.error("error:" + err))

      const urlforTV = `https://api.themoviedb.org/3/trending/tv/day`

      fetch(urlforTV, options)
        .then((res) => res.json())
        .then((json) => setTv(json.results))
        .catch((err) => console.error("error:" + err))

      const urlforPeople = `https://api.themoviedb.org/3/trending/person/day`

      fetch(urlforPeople, options)
        .then((res) => res.json())
        .then((json) => setPeople(json.results))
        .catch((err) => console.error("error:" + err))
    }

    const randomNumber = Math.floor(Math.random() * 20)
    setRandom(randomNumber)
  }, [movies])

  if (!movies.length) return <Loader />

  if (searchQuery.length > 2) return <SearchPage />

  return (
    <Container>
      <Backdrop
        src={movies[random]?.backdrop_path}
        banner
        link={`/movie/${movies[random]?.id}`}
        title={movies[random]?.title}
      />
      <Heading title="Trending Movies" />
      <Grid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </Grid>

      <Heading title="Trending TV shows" />
      <Grid>
        {tv.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </Grid>

      <Heading title="Trending People" />
      <Grid>
        {people.map((artist) => (
          <ArtistCard key={artist.id} {...artist} />
        ))}
      </Grid>
    </Container>
  )
}

export default App
