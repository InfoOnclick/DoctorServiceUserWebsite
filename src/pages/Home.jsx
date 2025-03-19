import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import LawyerBanner from '../components/LawyerBanner'
<<<<<<< HEAD
import { useParams } from 'react-router-dom'
import LawyerHeader from '../components/LawyerHeader'
import LawyerSpeciality from '../components/LawyerSpeciality'
import LawyerBanners from '../components/LawyerBanner'
import TopLawyers from '../components/TopLawyers'
import { Navbar } from 'react-bootstrap'
import HeaderHome from '../components/Header'
import SpecialMenu from '../components/SpecialityMenu'
import Banners from '../components/Banner'
import TopOnes from '../components/TopDoctors'


const Home = () => {

=======

const Home = () => {
>>>>>>> 51e9133feb4d5653fe2f48e27168ec5c1532e66a
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
    </div>
  )
}

<<<<<<< HEAD

const Homes = ({category}) => {
  // const { category } = useParams();
  console.log(category);

  const { category: categoryParam } = useParams();  // Get category from URL
  const finalCategory = categoryParam || category;// Use URL param OR fallback to prop

  console.log("Current Category:", finalCategory);

  return (
    <div>
      {finalCategory === "doctor" ? (
        <>
          <HeaderHome category="doctor" />
          <SpecialMenu category="doctor" />
          <TopOnes category="doctor" />
          <Banners category="doctor" />
        </>
      ) : finalCategory === "lawyer" ? (
        <>
          <HeaderHome category="lawyer" />
          <SpecialMenu category="lawyer" />
          <TopOnes category="lawyer" />
          <Banners category="lawyer" />
        </>
      ) : (
        <p>No category found.</p>
      )}
    </div>

  )
   }
  

   const categoryComponents = {
    doctor: (
      <>
        <HeaderHome category="doctor" />
        <SpecialMenu category="doctor" />
        <TopOnes category="doctor" />
        <Banners category="doctor" />
      </>
    ),
    lawyer: (
      <>
        <HeaderHome category="lawyer" />
        <SpecialMenu category="lawyer" />
        <TopOnes category="lawyer" />
        <Banners category="lawyer" />
      </>
    ),
  
  
  };
  

export default Homes;
=======
export default Home
>>>>>>> 51e9133feb4d5653fe2f48e27168ec5c1532e66a
