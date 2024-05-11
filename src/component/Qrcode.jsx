import React, { useEffect, useState } from 'react'

function Qrcode() {
const[url,setUrl]=useState('')
const[show,setShow]=useState(false)

function handleSubmit(e){
  e.preventDefault()
  setShow(true)
}

// useEffect(()=>{

// },[ur])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="url" name='url' value={url} onChange={(e)=>{setUrl(e.target.value)}} placeholder='Enter your URL'/>
        <input type="submit" value='Generate Qr CODE' />
      </form>
      {
        show && (
      <img src={`https://quickchart.io/qr?text=${url}`} />
        )
      }
    </div>
  )
}

export default Qrcode
