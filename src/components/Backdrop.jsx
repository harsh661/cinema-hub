import React from "react"
import Button from "./Button"

const Backdrop = ({ src, banner, title, link }) => {
  if(!src) return
  return (
    <div className={`w-full h-[30vh] lg:h-[50vh] relative ${banner && '-mx-5 sm:mx-auto w-screen sm:w-auto sm:rounded-lg overflow-hidden'}`}>
      <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0">
        <img
          src={`https://image.tmdb.org/t/p/original${src}`}
          alt=""
          className={`w-full h-full object-cover object-top ${banner ? 'brightness-75': 'brightness-50'}`}
        />
      </div>
    {banner && <span className="w-full text-white absolute z-10 p-5 bottom-0 text-3xl font-semibold flex flex-col gap-2 md:gap-3 xl:gap-5 bg-gradient-to-t from-black to-transparent">
        {title}
        <Button action={link} label="Check out"/>
      </span>}
      <div
        className="w-full h-full absolute top-0 left-0 right-0 bottom-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(15, 23, 42, 1) 100%)",
        }}
      ></div>
    </div>
  )
}

export default Backdrop
