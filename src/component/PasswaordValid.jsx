import React, { useState } from 'react'

function PasswaordValid() {
    const[password,setPassword]=useState('')
    const[strength,setStrength]=useState('')
   
    const validate=(input)=>{
        const strongP=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const mediumP=/^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

        if(strongP.test(input)){
            setStrength("strong")
        }
        
        else if(mediumP.test(input)){
            setStrength("Medium")
        }
        else{
            setStrength("week")
        }
    }

    function handleChange(e){
          setPassword(e.target.value) 
          validate(e.target.value)
    }
  return (
    <div>
      <h3>Password</h3>
      <input onChange={handleChange} type="password" />
      <p>Massage:{strength} </p>
    </div>
  )
}

export default PasswaordValid
