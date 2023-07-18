import React from "react"

const CompanyCard = ({ name, logo, country }) => {
  if (!logo) return
  return (
    <div className="flex flex-col gap-2 w-14 md:w-20">
      <img
        src={`https://image.tmdb.org/t/p/original${logo}`}
        alt={name}
        className="w-14 h-14 md:w-20 md:h-20 rounded-full object-contain bg-white"
      />
      <h2 className="truncate overflow-hidden overflow-ellipsis text-xs sm:text-sm text-white">{name}</h2>
    </div>
  )
}

export default CompanyCard
