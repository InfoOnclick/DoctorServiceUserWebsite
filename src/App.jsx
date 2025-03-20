import React from 'react'
import { Route, Routes,useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Doctors from './pages/Doctors'
import Services from './pages/Services'
import UserLogin from './pages/UserLogin'
import Lawyers from './pages/Lawyers'
import Schedules from './components/Schedules'
import LawyerNavbar from './components/LawyerNav'
import LawyerFooter from './components/LawyerFoot'
import Lawyerschedule from './components/Lawyerschedule'
import AllLawyers from './components/AllLawyers'
import LawyerAppointments from './pages/lawyerAppointments'
import LawyerAbout from './pages/LawyerAbout'
import LawyerContact from './pages/LawyerContact'
import Docsettings from './pages/Docsettings'
import Contactus from './pages/Contactus'
import DoctorContact from './pages/DoctorContact'
// import UserProfile from './pages/UserProfile'
import UserProfile2 from './pages/UserProfile2'
// import UserProfile3 from './pages/UserProfile3'
import '../src/index.css'
import Dates from './pages/Dates'
import LocationComponent from './pages/Location'
import HospitalList from './components/Hospital'
import Layout from './pages/Layout'
import BookingSystem from './pages/BookingSystem'
import AboutPage from './pages/About'
import Homes from './pages/Home'
import SpecialMenu from './components/SpecialityMenu'
import TopOnes from './components/TopDoctors'
import Banners from './components/Banner'
import DoctorsFilter from './pages/Doctors'
import ScheduleList from './components/SchedulePage'

const App = () => {
  const location = useLocation();
  const noNavFoot=["/","/services",];
 
 
  const showNavbar = !noNavFoot.includes(location.pathname);
  const isLawyerPage =location.pathname.includes("/home/lawyer") || location.pathname.includes("/allLawyers")||
                      location.pathname.includes("/lawyers") || location.pathname.includes("/Lawyerschedule")||
                      location.pathname.includes("/about/lawyer") || location.pathname.includes("/LawyerContact")
                      || location.pathname.includes("/lawyerAppointment/")||location.pathname.includes("/Listing/lawyer/all");
                      
                      
  //  location.pathname.includes("/lawyers") || location.pathname.includes("/allLawyers")
  //                     || location.pathname.includes("/Lawyerschedule") ||  location.pathname.includes("/lawyerAppointment/")
  //                     ||  location.pathname.includes("/LawyerContact")||  location.pathname.includes("/LawyerAbout");


  return (
    <div className='mx-4 sm:mx-[10%] '>
<div id='nav'>
     {showNavbar && (isLawyerPage ? <LawyerNavbar /> : <Navbar/>)}
     </div>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/:category' element={<Banners/>}/>
        <Route path='/booking' element={<BookingSystem/>}/>
        
        <Route path='/userLogin' element={<UserLogin/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path="/nav" element={<Navbar/>}/>
        <Route path="/lawyerNav" element={<LawyerNavbar/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/lawyerFoot" element={<LawyerFooter/>}/>
        <Route path="/SchedulePage" element={<ScheduleList/>}/>
        {/* <Route path='/home/' element={<Homes/>}/> */}
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/Listing/:category/:speciality' element={<DoctorsFilter/>}/>
        <Route path='/allLawyers/:speciality' element={<AllLawyers/>}/>
        <Route path='/allLawyers' element={<AllLawyers/>}/>
        <Route path='/DocSettings' element={<Docsettings/>}/>
        <Route path='/lawyerAppointment/:docId' element={<LawyerAppointments/>}/>
        <Route path='/Schedules' element={<Schedules/>}/>
        <Route path='/Lawyerschedule' element={<Lawyerschedule/>}/>
        <Route path='/home/:category' element={<Homes/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about/:category' element={<AboutPage/>}/>
        <Route path='/LawyerAbout' element={<LawyerAbout/>}/>
        <Route path='/contact' element={<DoctorContact/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/LawyerContact' element={<Contactus/>}/>
        <Route path='/my-profile' element={<UserProfile2/>}/>
        <Route path='/my-appointments' element={<MyAppointments/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
        {/* <Route path='/userProfile' element={<UserProfile/>}/> */}
        <Route path='/userProfile2' element={<UserProfile2/>}/>
        {/* <Route path='/userProfile3' element={<UserProfile3/>}/> */}
        <Route path='/location' element={<LocationComponent/>}/>
        {/* <Route path='/dates' element={<Dates/>}/> */}
        <Route path='/hospitals' element={<HospitalList/>}/>
      </Routes>
      {showNavbar &&(isLawyerPage ? <LawyerFooter /> : <Footer/>)} 
  
    </div>
  )
}




export default App
