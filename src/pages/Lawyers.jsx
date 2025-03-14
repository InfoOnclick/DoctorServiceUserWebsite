import React from 'react'
import LawyerHeader from '../components/LawyerHeader'
import LawyerSpeciality from '../components/LawyerSpeciality'
import LawyerBanners from '../components/LawyerBanner'
import TopLawyers from '../components/TopLawyers'

export default function Lawyers() {
  return (
    <div>
       <LawyerHeader/>
       <LawyerSpeciality/>
       <TopLawyers/>
       <LawyerBanners/>

    </div>
  )
}
