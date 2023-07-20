import React from "react"
import { Link } from "react-router-dom"

const ArtistCard = (artist) => {
  if (!artist || !artist.profile_path) return null
  return (
    <Link
      to={`/artist/${artist.id}`}
      className="flex-shrink-0 w-36 sm:w-40 lg:w-52 group animate-fade-in"
    >
      <div className="rounded-lg overflow-hidden max-w-[208px] aspect-[9/12] bg-dark-gray">
        {artist.profile_path && (
          <img
            src={`https://image.tmdb.org/t/p/original${artist.profile_path}`}
            alt={artist.name}
            className="w-full group-hover:scale-110 transition-transform duration-200"
          />
        )}
      </div>

      <div className="flex flex-col py-2 gap-2 px-1">
        <h1 className="truncate overflow-ellipsis overflow-hidden text-white font-medium text-sm sm:text-base lg:text-lg">
          {artist?.name}
        </h1>
      </div>
    </Link>
  )
}

export default ArtistCard
