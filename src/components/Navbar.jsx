import React, { useContext, useEffect, useState } from "react"
import { BiSearch } from "react-icons/bi"
import { MdOutlineClear } from 'react-icons/md'
import { MoviesContext } from "../../contexts/moviesContext"
import { Link } from "react-router-dom"

const Navbar = () => {
  const { setSearchQuery } = useContext(MoviesContext)
  const [value, setValue] = useState("")
  const [focus, setFocus] = useState(false)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchQuery(value)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [value])

  const clear = () => {
    setSearchQuery('')
  }

  return (
    <div className="px-5 lg:px-10 xl:px-20 py-5 text-light-gray flex items-center w-full justify-between relative">
      <Link className={`${focus && 'opacity-0 sm:opacity-100'}`} to="/">
        <svg
          width="160"
          height="25"
          className="css-1j8o68f"
          viewBox="0 0 369.913 59.158"
        >
          <g fill="currentColor">
            <path
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              d="M67.68 50v10.59H4.32V50zm0-26.85v25.74H4.32V23.11zm-11.91-8.6h7.48v4.51h-7.48zm-11.77 0h7.48v4.51H44zm-11.75 0h7.48v4.51h-7.47zm-11.75 0H28v4.51h-7.5zm-11.75 0h7.48v4.51H8.75zm47 38.19h7.48v4.51h-7.46zm-11.75 0h7.48v4.51H44zm-11.75 0h7.48v4.51h-7.47zm-11.75 0H28v4.51h-7.5zm-11.75 0h7.48v4.51H8.75zM44.31 36L36 31.26l-8.31-4.74v18.95L36 40.74zm-40-24.59h63.37V22H4.32z"
              transform="matrix(1.18886 0 0 1.18886 .048 0) translate(-4.04 -11.12)"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M68 60.88H4v-11.2h64zm-63.4-.57h62.8V50.24H4.6zm58.93-2.78h-8v-5.08h8zM56 57h7v-4h-7zm-4.27.57h-8v-5.12h8zM44.3 57h6.92v-4H44.3zm-4.3.53h-8v-5.08h8zM32.54 57h6.92v-4h-6.92zm-4.27.57h-8v-5.12h8zM20.79 57h6.91v-4h-6.91zm-4.27.57h-8v-5.12h8zM9 57h7v-4H9zm59-7.83H4V22.83h64zM4.6 48.6h62.8V23.4H4.6zM27.41 46V26l17.47 10zM28 27v18l15.77-9zm40-4.69H4V11.12h64zm-63.4-.55h62.8V11.69H4.6zm58.93-2.42h-8v-5.08h8zM56 18.77h7v-3.94h-7zm-4.27.57h-8v-5.08h8zm-7.48-.57h6.92v-3.94H44.3zm-4.25.57h-8v-5.08h8zm-7.48-.57h6.92v-3.94h-6.9zm-4.27.57h-8v-5.08h8zm-7.48-.57h6.93v-3.94h-6.91zm-4.27.57h-8v-5.08h8zM9 18.77h7v-3.94H9z"
              transform="matrix(1.18886 0 0 1.18886 .048 0) translate(-4.04 -11.12)"
            ></path>
          </g>
          <path
            fill="currentColor"
            d="M15.244 7.715l-1.152.86q-.938-1.231-2.261-1.861t-2.905-.63q-1.739 0-3.213.83t-2.29 2.232-.816 3.159q0 2.646 1.817 4.263t4.58 1.616q3.047 0 5.088-2.383l1.152.869q-1.084 1.377-2.705 2.129t-3.613.752q-3.809 0-6.006-2.53-1.836-2.138-1.836-4.843 0-3.174 2.231-5.352T8.896 4.65q2.032 0 3.667.805t2.681 2.261zm3.145-3.389q.468 0 .805.332t.337.8-.337.806-.805.337-.801-.337-.332-.805.332-.801.8-.332zm-.684 4.404h1.377v10.713h-1.377V8.73zm4.219 6.65l-.02-1.142q-.029-.84.069-1.425.214-1.846.937-2.706.703-.752 1.436-1.162 1.21-.517 2.763-.488 1.211 0 2.242.61t1.47 1.641.439 3.228v5.507h-1.368v-5.107q0-1.856-.156-2.48-.244-1.065-.967-1.51t-2.138-.444q-1.25 0-2.227.723t-.908 1.973q-.186.8-.186 2.92v3.925h-1.386v-4.062zm21.289.255l1.152.615q-.556 1.123-1.308 1.807t-1.69 1.04-2.119.356q-2.617 0-4.092-1.714t-1.474-3.872q0-2.04 1.25-3.633 1.582-2.03 4.248-2.03 2.724 0 4.365 2.08 1.162 1.464 1.172 3.652h-9.62q.04 1.875 1.192 3.07t2.842 1.197q.82 0 1.592-.288t1.313-.757 1.177-1.523zm0-2.881q-.273-1.104-.8-1.763t-1.397-1.064-1.826-.406q-1.573 0-2.706 1.016-.82.742-1.24 2.217h7.969zm4.053 2.539v-1.709q.175-2.188.918-3.203.615-.928 1.611-1.475.654-.42 1.865-.449.781 0 1.582.293t1.24.781.89 1.465q.243-.625 1.024-1.465.381-.322.987-.635.41-.263 1.904-.439 1.113 0 2.139.557t1.44 1.567.415 3.013v5.85h-1.406v-5.85q0-1.719-.244-2.364t-.84-1.04-1.436-.395q-1.582.107-2.705 1.533-.44.606-.664 2.686v5.43H54.61v-5.489q0-1.933-.43-2.632t-1.025-1.113-1.484-.415q-.957 0-1.646.488t-1.079 1.46-.312 3.16v4.54h-1.368v-4.15zm23.964-7.09q2.471 0 4.102 1.787 1.504 1.631 1.504 3.877.02 5.547 0 5.635H75.38V17.07q-1.143 2.13-4.15 2.383-2.461 0-4.02-1.675t-1.557-3.91q0-2.227 1.475-3.868 1.63-1.797 4.101-1.797zm0 1.348q-1.709 0-2.939 1.27t-1.23 3.066q0 1.162.63 2.236t2.133 1.817q3.77.84 5.362-3.428.087-1.367-.293-2.617-.274-.567-.752-1.074-1.202-1.27-2.91-1.27zm8.477-4.61h1.455v6.074h7.373V4.941h1.445v14.482h-1.445v-6.982h-7.373v6.982h-1.455V4.941zm13.36 3.536h1.386v5q0 1.836.195 2.52.293.986 1.124 1.557t1.992.571q1.152 0 1.953-.556t1.103-1.465q.215-.615.215-2.627v-5h1.406v5.264q0 2.217-.522 3.335t-1.558 1.748-2.597.63q-1.573 0-2.617-.63t-1.563-1.768-.518-3.423V8.477zm13.28 8.886q-.878-1.465-1.054-2.88V4.335h1.367v5.977q.87-1.065 1.944-1.587t2.353-.523q2.266 0 3.877 1.65t1.611 4.004q0 2.315-1.62 3.956t-3.907 1.64q-1.309 0-2.456-.503t-2.114-1.587zm4.454.772q1.162 0 2.134-.571t1.547-1.587.577-2.168q0-1.133-.581-2.173t-1.563-1.612-2.095-.57q-1.132 0-2.148.57t-1.563 1.553-.546 2.193q0 1.865 1.23 3.115t3.008 1.25z"
            transform="matrix(2.37439 0 0 2.37439 93.426 1.728)"
          ></path>
        </svg>
      </Link>

      <div className={`text-light-gray flex items-center rounded-full pl-5 pr-3 py-2 gap-2 absolute right-5 lg:right-10 xl:right-20 border bg-main-bg ${focus ? 'border-light-text left-5 sm:left-auto': 'border-transparent'} transition-colors duration-500`}>
        <input
          value={value}
          size={0}
          onChange={handleChange}
          type="text"
          id="search"
          placeholder="Search anything"
          className={`outline-none bg-transparent ${focus ? 'block' : 'hidden'} w-full transition-all duration-500`}
        />
        <label onClick={()=>setFocus(prev => !prev)} className="cursor-pointer" htmlFor="search">
          {focus ? <MdOutlineClear onClick={clear} size={25}/> : <BiSearch size={25} />}
        </label>
      </div>
    </div>
  )
}

export default Navbar
