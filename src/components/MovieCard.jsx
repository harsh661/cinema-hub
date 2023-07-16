import React from "react"
import { Link } from "react-router-dom"
import { AiFillStar } from "react-icons/ai"

const MovieCard = (movie) => {
  const isTv = movie.media_type === 'tv'
  return (
    <Link to={`${isTv ? `/`: `/movie/${movie.id}`}`} className="flex-shrink-0 w-36 sm:w-40 lg:w-52 group">
      <div className="rounded-lg overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          className="w-full group-hover:scale-110 transition-transform duration-200"
        />
      </div>

      <div className="flex flex-col py-2 gap-2 px-1">
        <h1 className="truncate overflow-ellipsis overflow-hidden text-white font-medium text-sm sm:text-base lg:text-lg">
          {isTv ? movie.name : movie.title}
        </h1>
        <div className="flex items-center justify-between text-xs text-dark-text">
          <span>{isTv ? movie.first_air_date.substring(0, 4): movie.release_date.substring(0, 4)}</span>
          <span className="flex items-center gap-1">
            <AiFillStar />
            {movie.vote_average}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
