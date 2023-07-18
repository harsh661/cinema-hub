import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import Backdrop from "../components/Backdrop.jsx"
import Container from "../components/Container.jsx"
import Grid from "../components/Grid.jsx"
import Heading from "../components/Heading.jsx"
import Loader from "../components/Loader.jsx"
import {AiFillStar} from 'react-icons/ai'
import EpisodeCard from "../components/EpisodeCard.jsx"

const SeasonPage = () => {
  const params = useParams()
  const [season, setSeason] = useState({})
  console.log(params.id)
  console.log(params.season_number)

  useEffect(() => {
      setSeason({})
      const url = `https://api.themoviedb.org/3/tv/${params.id}/season/${params.season_number}`
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
          setSeason(json)
          console.log(json)
        })
        .catch((err) => console.error("error:" + err))
  }, [params.id])

  if(Object.keys(season).length === 0) return <Loader />
  return (
    <>
      <Backdrop src={season?.backdrop_path} />
      <Container>
        <div className="py-5 flex gap-5">
          <div className="rounded-lg overflow-hidden w-36 sm:w-40 lg:w-52">
            <img
              src={`https://image.tmdb.org/t/p/original${season?.poster_path}`}
              alt={season?.title}
              className="w-full transition-transform duration-200"
            />
          </div>
          <div className="flex flex-col gap-2 text-dark-text">
            <h1 className="text-white font-medium text-2xl lg:text-3xl">
              {season?.name}
            </h1>
            <span className="text-base lg:text-lg">{season?.air_date?.substr(0, 4)}</span>

            <span className="text-sm lg:text-base text-light-text">No. of episodes: {season?.episodes?.length}</span>

            <span className="flex items-center gap-2">
              <AiFillStar fill="#facc15" />
              {season.vote_average.toFixed(1)}
            </span>
          </div>
        </div>

        <Heading title="Plot" />
        <div className="text-dark-text font-light pb-5 flex flex-col gap-5 lg:text-lg max-w-5xl">
          {season?.overview}
        </div>

        <div className="py-5">
          <Heading title="Episodes" />
          <Grid>
            {season.episodes.map((episode) => (
                <EpisodeCard key={episode.id} {...episode}/>
            ))}
          </Grid>
        </div>
      </Container>
    </>
  )
}

export default SeasonPage
