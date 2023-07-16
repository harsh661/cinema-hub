import React from 'react'

const Heading = ({title, subtitle}) => {
  return (
    <div className='flex flex-col py-5'>
        <h1 className='text-2xl lg:text-3xl font-semibold text-white'>{title}</h1>
    </div>
  )
}

export default Heading