import React from 'react'
import './App.css'
import PasswaordValid from './component/PasswaordValid'
import Qrcode from './component/Qrcode'
import Prctice from './component/Prctice'
import Random from './component/Random'
import MobileNoValidation from './component/MobileNoValidation'


function App() {

  return (
    <>
       <Prctice/>
       <Random/>
       <PasswaordValid/>
       <Qrcode/>
       <MobileNoValidation/>

    </>
  )
}

export default App
