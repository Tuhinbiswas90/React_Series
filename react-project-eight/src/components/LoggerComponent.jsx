import React from 'react'
import { useState,useEffect } from 'react'

const LoggerComponent = () => {
    
    const[count,setCount]=useState(0);
    
    useEffect(() => {
     console.log('Component rendered or count changed: ',count);
    })
    


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count + 1)}>Increament</button>
    </div>
  )
}

export default LoggerComponent
