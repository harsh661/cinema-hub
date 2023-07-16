import Grid from "./components/Grid.jsx"
import MovieCard from "./components/MovieCard.jsx"
import Heading from "./components/Heading.jsx"
import Backdrop from "./components/Backdrop.jsx"
import Container from "./components/Container.jsx"
import { useContext, useEffect, useState } from "react"
import { MoviesContext } from "../contexts/moviesContext.jsx"

function App() {
  const { movies, setMovies } = useContext(MoviesContext)
  const [tv, setTv] = useState([])
  const [random, setRandom] = useState(0)
  useEffect(() => {
    if (movies.length === 0) {
      console.log("fetching")
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
    }

    const randomNumber = Math.floor(Math.random() * 20)
    setRandom(randomNumber)
  }, [movies])

  if (!movies.length) return

  return (
    <>
      <Container>
        <Backdrop src={movies[random].backdrop_path} banner title={movies[random].title}/>
        <Heading title="Trending in Movies" />
        <Grid>
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </Grid>
      </Container>
      <Container>
        <Heading title="Trending in TV" />
        <Grid>
          {tv.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default App
