import React from 'react'
import LawyerHeader from '../components/LawyerHeader'
import LawyerSpeciality from '../components/LawyerSpeciality'
import LawyerBanners from '../components/LawyerBanner'
import TopLawyers from '../components/TopLawyers'
import { useParams } from 'react-router-dom'

export default function Lawyers() {
    const {category}=useParams();
  return (
    <div>
       <LawyerHeader/>
       <LawyerSpeciality/>
       <TopLawyers/>
       <LawyerBanners/>

    </div>
  )
}
