import React from 'react'
import {RiLoader4Line} from 'react-icons/ri'

const Loader = () => {
  return (
    <div className='absolute inset-0 flex items-center justify-center bg-main-bg'>
        <span className='animate-spin'>
          <RiLoader4Line fill='#64748B' size={40}/>
        </span>
    </div>
  )
}

export default Loader