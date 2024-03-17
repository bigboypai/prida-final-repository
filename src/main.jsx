import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Info from './components/Info/Info'
import Info2 from './components/Info2/Info2'

import './main.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='main-container'>
    <Navbar />
    <div className='main-container__hero'>
      <Hero />
    </div>
    <Info/>
    <Info2/>
  </div>
  </React.StrictMode>,
)
