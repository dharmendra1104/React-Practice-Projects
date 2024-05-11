import React, { useState } from 'react'

function Random() {
    const[min,setMin]=useState(1)
    const[max,setMax]=useState(10000)
    const[random,setRandom]=useState(null)

    function Generate(){
        const minv=parseInt(min)
        const maxv=parseInt(max)
        const randomv=Math.floor(Math.random() *(maxv+1)+(minv))
        setRandom(randomv)
    }

  return (
    <div>
      <h3>Number:{random}</h3>
      <button onClick={Generate}>Update</button>
    </div>
  )
}

export default Random
