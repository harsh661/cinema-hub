import React from 'react'

const Container = ({children, full}) => {
  return (
    <div className={`px-5 lg:px-10 xl:px-20 ${full && 'min-h-screen'}`}>
        {children}
    </div>
  )
}

export default Container;