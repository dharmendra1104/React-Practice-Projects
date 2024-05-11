import React from 'react'
import { useState } from 'react'

function Prctice() {
    const [value, setValue] = useState("")
 function handleChange(e){
  setValue((e.target.value))
 }
 function handleUpper(){
   setValue((value).toUpperCase())
  // let value1=value.toUpperCase()
  // setValue(value1)
 }

 function handleLower(){
  setValue((value).toLowerCase())
}

function handleEmpty(){
  setValue('')
}
function handleCopy(){
  // value.select()
  const inputBox=document.getElementById('input')
  inputBox.select()
  navigator.clipboard.writeText(inputBox.value)
}
  return (
    <>
    <input id='input' type="text" value={value} onChange={handleChange}/>
    <button onClick={handleUpper}>Upper</button>
    <button onClick={handleLower}>lower</button>
    <button onClick={handleEmpty}>empty</button>
    <button onClick={handleCopy}>Copy</button>
    <p>Para:{value}</p>
    </>
  )
}

export default Prctice
