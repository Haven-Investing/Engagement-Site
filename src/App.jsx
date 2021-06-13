import React from 'react'

import Navbar from './Components/Navbar'
import Content1 from './Components/Content/Content1'
import Content2 from './Components/Content/Content2'
import Content3 from './Components/Content/Content3'

import './App.css'

import { isMobile } from 'react-device-detect'

const App = () => {


  return (

      
    isMobile ? 

      <div style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <h1 style={{fontWeight: "bold", fontSize:"100px", textAlign:"center"}}>This website is best viewed on a desktop device</h1>
        <h1 style={{fontSize:"25px", textAlign:"center", marginTop:"20px"}}>Mainly because the developer was too lazy to make it mobile friendly</h1>
      </div>

    :
      <>

        <Navbar />
        <Content1 />
        <hr className="Spacer" />
        <Content2 />
        <hr className="Spacer" />
        <Content3 />
        <hr className="Spacer" />

      </>
    

  )
}

export default App
