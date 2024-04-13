import React from 'react'
import { ring2 } from 'ldrs'

export const LoaderComponent = () => {
  ring2.register()
  return (
    <div style={{display: 'flex', alignItems: "center", justifyContent: "center", width: "100vw", height: "100vh"}}>
      <l-ring-2
      size="40"
      stroke="5"
      stroke-length="0.25"
      bg-opacity="0.1"
      speed="0.8" 
      color="white" 
      ></l-ring-2>
    </div>
    
  )
}
