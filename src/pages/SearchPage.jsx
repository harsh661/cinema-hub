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
        })
        .catch((err) => console.error("error:" + err))
    }
  }, [searchQuery])
  return (
    <Container>
      <Heading title="Search Results" />
      <div className="flex flex-wrap gap-5 justify-center">
        {result.map((item) => (
          item.media_type == "person" ? (
            <ArtistCard {...item} />
          ) : (
            <MovieCard {...item} />
          )
        ))}
      </div>
    </Container>
  )
}

export default SearchPage
