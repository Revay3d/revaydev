import React from 'react'
import './assets/stylesheets/App.scss'
import Inicio  from './assets/pages/Inicio'
import Nav from './Nav.jsx'
import Error from './assets/pages/Error'
import { Routes, Route } from 'react-router-dom'

function App() {
 
  return (
    <div>
    <Nav />
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="*" element={<Error />} />
   
  </Routes>


  </div>
  )
}

export default App
