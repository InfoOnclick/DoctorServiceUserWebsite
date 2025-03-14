import React from 'react'

import Home from './Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}
