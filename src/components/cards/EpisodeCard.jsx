import React from "react"
import { AiFillStar } from "react-icons/ai"

const EpisodeCard = (episode) => {
  return (
    <div className="flex-shrink-0 w-64 sm:w-80 lg:w-96 group animate-fade-in">
      <div className="rounded-lg overflow-hidden aspect-[16/9] bg-dark-gray">
        <img
          src={`https://image.tmdb.org/t/p/original${episode?.still_path}`}
          alt={episode?.name}
          className='"w-full group-hover:scale-110 transition-transform duration-200'
        />
      </div>

      <div className="flex flex-col py-2 gap-2 px-1">
        <h1 className="truncate overflow-ellipsis overflow-hidden text-white font-medium text-sm sm:text-base lg:text-lg">
          {episode.name}
        </h1>
        <div className="text-dark-text text-sm">Runtime: {Math.floor(episode?.runtime/60)}:{episode?.runtime%60} hr</div>
        <div className="flex items-center justify-between text-xs text-dark-text">
          <span>{episode?.air_date?.substring(0, 4)}</span>
          <span className="flex items-center gap-1">
            <AiFillStar fill="#facc15" />
            {episode.vote_average.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="text-light-text text-sm lg:text-base">
        {episode?.overview}
      </div>
    </div>
  )
}

export default EpisodeCard
