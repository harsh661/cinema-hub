import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import Backdrop from "../components/Backdrop"
import Container from "../components/Container"
import Heading from "../components/Heading"
import Grid from "../components/Grid"
import MovieCard from "../components/MovieCard"
import CompanyCard from "../components/CompanyCard"
import { AiFillStar } from "react-icons/ai"
import Button from "../components/Button"

const Tv = () => {
  const params = useParams()
  const [tv, setTv] = useState({})
  const [similar, setSimilar] = useState([])

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_REACT_API_KEY}`,
    },
  }

  useEffect(() => {
    if (Object.keys(tv).length == 0) {
      fetch(`https://api.themoviedb.org/3/tv/${params.id}`, options)
        .then((res) => res.json())
        .then((json) => {
          setTv(json)
        })
        .catch((err) => console.error("error:" + err))

      fetch(`https://api.themoviedb.org/3/tv/${params.id}/similar`, options)
        .then((res) => res.json())
        .then((json) => {
          setSimilar(json.results)
        })
        .catch((err) => console.error("error:" + err))
    }
  }, [params.id])

  if (Object.keys(tv).length == 0) return

  return (
    <>
      <Backdrop src={tv?.backdrop_path} />
      <Container>
        <div className="py-5 flex">
          <div className="rounded-lg overflow-hidden w-36 sm:w-40 lg:w-52 hidden md:block">
            <img
              src={`https://image.tmdb.org/t/p/original${tv?.poster_path}`}
              alt={tv?.name}
              className="w-full transition-transform duration-200"
            />
          </div>
          <div className="flex flex-col gap-2 justify-between text-dark-text p-0 md:p-5">
            <h1 className="text-white font-medium text-2xl lg:text-3xl">
              {tv?.name}
            </h1>
            <span className="text-base lg:text-lg">{tv?.tagline}</span>

            <span className="text-sm lg:text-base text-light-text">
              {tv?.first_air_date.substr(0, 4)} -{" "}
              {new Date().getFullYear() == tv?.last_air_date.substr(0, 4)
                ? ""
                : tv?.last_air_date.substr(0, 4)}
            </span>

            <span className="flex items-center gap-2">
              <AiFillStar fill="#facc15" />
              {tv?.vote_average.toFixed(1)}
            </span>

            <span className="flex items-center flex-wrap gap-2">
              {tv?.spoken_languages?.map((language) => (
                <span
                  key={language.iso_639_1}
                  className="text-light-text text-sm lg:text-base"
                >
                  {language.english_name}
                </span>
              ))}
            </span>

            <Button external action={tv?.homepage} label="Watch Now" />
          </div>
        </div>

        <Heading title="Plot" />
        <div className="text-dark-text font-light pb-5 flex flex-col gap-5 lg:text-lg max-w-5xl">
          {tv?.overview}
        </div>

        <Heading title="Seasons" />
        <Grid>
          {tv?.seasons?.map((season) => (
            <MovieCard key={season.id} {...season} />
          ))}
        </Grid>

        <div className="py-5">
          <Heading title="Produced by" />
          <Grid>
            {tv?.production_companies?.map((company) => (
              <CompanyCard
                key={company.id}
                name={company?.name}
                country={company?.origin_country}
                logo={company?.logo_path}
              />
            ))}
          </Grid>
        </div>

        {/* to add reviews */}

        <Heading title="Similar to this" />
        <Grid>
          {similar.map((tv) => (
            <MovieCard key={tv.id} {...tv} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Tv
