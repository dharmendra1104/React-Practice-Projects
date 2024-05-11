import React, { useState } from 'react'

function MobileNoValidation() {
    const [number,setNumber]=useState('')
    const[isValid,setIsvalid]=useState(false)

    function handleChange(e){
      let value=e.target.value
      value=value.replace(/\D/g,'')
      value=value.slice(0,10)
      setNumber(value)
      
          const isValidNumber=/^\d{10}$/.test(value)
          setIsvalid(isValidNumber)
    }

  return (
    <>
     <h2>Mobile No Validaton</h2>
     <input type="text" value={number} onChange={handleChange} /> 
     <p>{
        number =='' ?(<p style={{color:"Black"}}>Number is Valid...</p>):
        isValid?(<p style={{color:"green"}}>Number is Valid</p>):
        (<p style={{color:"red"}}>Number Not is Valid</p>)
     }</p>
    </>
  )
}

export default MobileNoValidation
