import React, { useEffect, useState } from "react"
import Container from "../components/Container.jsx"
import { useParams } from "react-router"
import Heading from "../components/Heading.jsx"
import Loader from "../components/Loader.jsx"

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_REACT_API_KEY}`,
  },
}

const ArtistPage = () => {
  const params = useParams()
  const [artist, setArtist] = useState({})

  useEffect(() => {
    setArtist({})
    fetch(`https://api.themoviedb.org/3/person/${params.id}`, options)
      .then((res) => res.json())
      .then((json) => {
        setArtist(json)
      })
      .catch((err) => console.error("error:" + err))
  }, [params.id])

  if (Object.keys(artist).length === 0) return <Loader />

  return (
    <>
      <Container>
        <div className="py-5 flex flex-col md:flex-row gap-5">
          <div className="rounded-lg overflow-hidden w-40 sm:w-48 lg:w-52 mx-auto md:mx-0">
            <img
              src={`https://image.tmdb.org/t/p/original${artist?.profile_path}`}
              alt={artist?.name}
              className="w-full transition-transform duration-200"
            />
          </div>
          <div className="flex flex-col gap-2 text-dark-text">
            <h1 className="text-white font-medium text-2xl lg:text-3xl">
              {artist?.name}
            </h1>
            <span className="text-base lg:text-lg">
              {artist?.known_for_department}
            </span>

            <span className="text-sm lg:text-base text-light-text">
              {artist?.birthday}
            </span>

            <span className="flex items-center gap-2">
              {artist?.place_of_birth}
            </span>
          </div>
        </div>

        <Heading title="About" />
        <div className="text-dark-text font-light pb-5 flex flex-col gap-5 lg:text-lg max-w-5xl">
          {artist?.biography}
        </div>
      </Container>
    </>
  )
}

export default ArtistPage
