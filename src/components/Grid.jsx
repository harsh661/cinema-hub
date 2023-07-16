import React from 'react'

const Grid = ({children}) => {
  return (
    <div className='w-full overflow-x-auto'>
      <div className='flex gap-5'>
        {children}
      </div>
    </div>
  )
}

export default Grid