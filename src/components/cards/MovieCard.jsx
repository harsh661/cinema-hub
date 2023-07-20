import React from "react"
import { Link } from "react-router-dom"
import { AiFillStar } from "react-icons/ai"

const MovieCard = (movie) => {
  const isMovie = !!movie.release_date
  const isTv = !!movie.first_air_date

  if(!movie.poster_path) return

  return (
    <div className="flex flex-col">
      {movie.season_number >= 0 && (
        <span className="text-light-gray font-semibold text-sm lg:text-lg py-2">
          {movie?.name}
        </span>
      )}

      <Link
        to={
          isTv
            ? `/tv/${movie.id}`
            : isMovie
            ? `/movie/${movie.id}`
            : `/tv/${movie.id}/season/${movie?.season_number}`
        }
        className="flex-shrink-0 w-36 sm:w-40 lg:w-52 group animate-fade-in"
      >
        <div className="rounded-lg overflow-hidden max-w-[208px] aspect-[9/12] bg-dark-gray">
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="w-full group-hover:scale-110 transition-transform duration-200"
            />
          )}
        </div>

        <div className="flex flex-col py-2 gap-2 px-1">
          <h1 className="truncate overflow-ellipsis overflow-hidden text-white font-medium text-sm sm:text-base lg:text-lg">
            {isTv ? movie.name : movie.title}
          </h1>
          <div className="flex items-center justify-between text-xs text-dark-text">
            <span>
              {isTv
                ? movie?.first_air_date?.substring(0, 4)
                : isMovie
                ? movie?.release_date?.substring(0, 4)
                : movie?.air_date?.substring(0, 4)}
            </span>
            <span className="flex items-center gap-1">
              <AiFillStar fill="#facc15" />
              {movie.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard
