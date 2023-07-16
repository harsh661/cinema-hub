import React from 'react'

const Container = ({children}) => {
  return (
    <div className="px-5 lg:px-10 xl:px-20">
        {children}
    </div>
  )
}

export default Container;