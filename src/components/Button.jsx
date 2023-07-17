import React from "react"
import { Link } from "react-router-dom"

const Button = ({ action, label, external }) => {
  return (
    <>
      {!external ? (
        <Link
          to={action}
          className="px-4 py-2 text-sm bg-yellow-400 text-black font-bold w-max rounded-full"
        >
          {label}
        </Link>
      ) : (
        <a
          href={action}
          target="_blank"
          className="px-4 py-2 text-sm bg-yellow-400 text-black font-bold w-max rounded-full"
        >
          {label}
        </a>
      )}
    </>
  )
}

export default Button
