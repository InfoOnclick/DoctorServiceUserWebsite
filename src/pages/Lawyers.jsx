import React from 'react'
import LawyerHeader from '../components/LawyerHeader'
import LawyerSpeciality from '../components/LawyerSpeciality'
import LawyerBanners from '../components/LawyerBanner'
import TopLawyers from '../components/TopLawyers'
<<<<<<< HEAD
import { useParams } from 'react-router-dom'

export default function Lawyers() {
    const {category}=useParams();
=======

export default function Lawyers() {
>>>>>>> 51e9133feb4d5653fe2f48e27168ec5c1532e66a
  return (
    <div>
       <LawyerHeader/>
       <LawyerSpeciality/>
       <TopLawyers/>
       <LawyerBanners/>

    </div>
  )
}
