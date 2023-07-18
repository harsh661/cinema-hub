import React, { useContext, useEffect, useState } from "react"
import { MoviesContext } from "../../contexts/moviesContext"
import Heading from "../components/Heading"
import ArtistCard from "../components/ArtistCard.jsx"
import MovieCard from "../components/MovieCard"
import Container from "../components/Container"
import Grid from "../components/Grid"

const SearchPage = () => {
  const { searchQuery } = useContext(MoviesContext)
  const [result, setResult] = useState([])

  const movies = result.filter((item) => item.media_type === "movie")
  const shows = result.filter((item) => item.media_type === "tv")
  const persons = result.filter((item) => item.media_type === "person")

  useEffect(() => {
    if (searchQuery.length > 2) {
      const url = `https://api.themoviedb.org/3/search/multi?query=${searchQuery}`
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_REACT_API_KEY}`,
        },
      }

      fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
          setResult(json.results)
          console.log(json)
          console.log(movies)
        })
        .catch((err) => console.error("error:" + err))
    }
  }, [searchQuery])
  return (
    <Container>
      {!!movies.length && <Heading title="Movies" />}
      <Grid>
        {movies.map((item) => (
          <MovieCard key={item.id} {...item} />
        ))}
      </Grid>

      {!!shows.length && <Heading title="TV" />}
      <Grid>
        {shows.map((item) => (
          <MovieCard key={item.id} {...item} />
        ))}
      </Grid>
      {!!persons.length && <Heading title="People" />}
      <Grid>
        {persons.map((item) => (
          <ArtistCard key={item.id} {...item} />
        ))}
      </Grid>
    </Container>
  )
}

export default SearchPage
