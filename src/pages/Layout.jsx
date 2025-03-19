import React from 'react'

import Home from './Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Homes from './Home'

export default function Layout() {
  return (
    <div>
      <Navbar/>
      <Homes category='doctor'/>
      <Footer/>
    </div>
  )
}
