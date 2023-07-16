import React from 'react'

const Button = ({action, label}) => {
  return (
    <div className='px-4 py-2 text-sm bg-yellow-400 text-black font-bold w-max rounded-full'>{label}</div>
  )
}

export default Button