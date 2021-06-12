import React from 'react'

import Navbar from './Components/Navbar'
import Content1 from './Components/Content/Content1'
import Content2 from './Components/Content/Content2'

import iPhone from './Assets/iPhone.png'

import './App.css'



const App = () => {

  return (
    <>
      <Navbar />
      <Content1 />
      <hr className="Spacer" />
      <Content2 />
    </>
  )
}

export default App
