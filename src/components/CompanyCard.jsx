import React from "react"

const CompanyCard = ({ name, logo, country }) => {
  if (!logo) return
  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={`https://image.tmdb.org/t/p/original${logo}`}
        alt={name}
        className="w-14 h-14 md:w-20 md:h-20 rounded-full object-contain bg-white"
      />
      <span className="text-xs sm:text-sm lg:text-base text-white whitespace-nowrap">{name}</span>
    </div>
  )
}

export default CompanyCard
