import React from 'react'

const Loading = ({center}) => {
  return (
    <div className={`loading ${center? 'loading-center':''}`}/>
  )
}

export default Loading