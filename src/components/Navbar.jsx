import React, { useState,useEffect } from 'react'
import {assets, DoctorNav} from '../assets/assets'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import docpro from '../assets/docpro.png'
import './css/Services.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import axios from "axios";
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Navbar = () => {
   
  const {category}=useParams();





    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)


     const [location, setLocation] = useState(null);
      const[loading,setloading]=useState(true);
      const [error, setError] = useState(null);
      const[lattitude,setLattitude]=useState(null);
      const[longitude,setLongitude]=useState(null);
      const[locate,setLocate]=useState(null);
        const[country,setCountry]=useState(null);


        useEffect(() => {
          const getLocation = () => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const lat = position.coords.latitude;
                  const lon = position.coords.longitude;
                  
                  setLocation({ latitude: lat, longitude: lon });
                  setLattitude(lat);
                  setLongitude(lon);
                },
                (error) => {
                  setError(error.message);
                }
              );
            } else {
              setError("Geolocation is not supported by this browser.");
            }
          };
        
          getLocation();
        }, []); // Run only once when the component mounts
        
        // ✅ Separate useEffect for fetching data AFTER latitude & longitude are updated
        useEffect(() => {
          if (lattitude !== null && longitude !== null) {
            fetchData(lattitude, longitude);
          }
        }, [lattitude, longitude]);


const fetchData= async(lattitude,longitude) =>{
  try {
  //     await getLocation();
  //   setloading(true);
  const lat=location.latitude;
  const long=location.longitude;

    // const response = await axios.get(`https://mapquestapi.com/geocoding/v1/reverse?key=Cmjtd|luur2108n1,7w=o5-gz8a&location=10.7838746,78.6879327&outFormat=json&thumbMaps=false`);
    const response = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat} &lon=${long}&apiKey=03b2251cf0d74e75bb66c12087d75ccd`);
    
   
    const loc=response.data.features[0].properties.formatted;
    const con=response.data.features[0].properties.county;
    const states=response.data.features[0].properties.city;
    setLocate(loc);
    setCountry(states);
    console.log(loc);
    //  console.log(con);
    //  console.log(states);
    //  setLocate(loc);
    //  setCountry(con);
    //  setStates(states);

    // const zone=response.data.results[0].locations[0].adminArea6;
    // const dist=response.data.results[0].locations[0].adminArea5;
    // const state=response.data.results[0].locations[0].adminArea3;
   
   
    //  console.log(zone);
    //  console.log(dist);
    //  console.log(state);
    //  setCountry(con);
    //  setStates(states);

     setloading(false);
  
    // console.log(sortedData);
  } catch (error) {
    console.error('Error fetching data:', error);
   
  } finally {
    // console.log("finally");
     // Stop loading  after data fetch
  }
}

    
  return (
    <div className='flex items-center justify-between align-middle text-sm py-0 mb-5 border-b border-b-gray-400 navbar-light bg-light'>
      <img onClick={()=>navigate('/')} className=' cursor-pointer' src={docpro} alt="" id='img' style={{height:120,width:140,borderRadius:20,padding:10}}/>
      {/* <ul className='hidden md:flex items-start gap-10 font-medium'>
        <NavLink to='/home' >
            <li className='py-1' >HOME</li>
            <hr className='border-none outline-none h-0.5 bg-purple-400 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-purple-400 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/Schedules'>
            <li className='py-1'>SCHEDULE</li>
            <hr className='border-none outline-none h-0.5 bg-purple-400 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-purple-400 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-purple-400 w-3/5 m-auto hidden'/>
        </NavLink>
      </ul> */}

<ul className="hidden md:flex items-center gap-6 md:gap-10 font-medium text-medium sm:text-lg md:text-lg">
  {[
    { path: "/home/doctor", label: "HOME" },
    { path: "/Listing/doctor/all", label: "ALL DOCTORS" },
    { path: "/Schedules", label: "SCHEDULE" },
    { path: "/about/doctor", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" }
  ].map((item, index) => (
    <NavLink key={index} to={item.path} className="relative hover:text-purple-500">
      <li className="py-2 text-sm">{item.label}</li>
      <hr className="border-none h-1 bg-purple-400 w-3/5 m-auto hidden group-hover:block" />
    </NavLink>
  ))}
</ul>



      <div className='flex items-center gap-4'>
        {
            token
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
             
              {loading ?(
     <CircularProgress size="20px" color="inherit" />
      ) :(
        <div className='flex items-center gap-0 cursor-pointer group relative'>
             <LocationOnIcon style={{fontSize:25}}/> 
             <text style={{fontSize:15}}> {country}</text>
 
       </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}


                <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                <img className='w-2.5 ' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-green-50 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=> navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        {/* <p onClick={()=> navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p> */}
                        <p onClick={()=> navigate('services')} className='hover:text-black cursor-pointer'>Change Service</p>
                        {/* <p onClick={()=> navigate('Docsettings')} className='hover:text-black cursor-pointer'>Settings</p> */}
                        <p onClick={()=>{setToken(false);navigate('')}} className='hover:text-black cursor-pointer'>Log out</p>
                    </div>
                </div>
            </div>
            :<button onClick={()=>navigate('/login')} className='bg-primary text-white px-6 py-3 rounded-full font-light hidden md:block'>create account</button>
        }
        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
        {/* ---Mobile Menu--- */}
        <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            {/* <img className='w-38' src={assets.logo} alt="" /> */}
            <img className='w-10 ' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
           { DoctorNav.map((item) => ( <NavLink  onClick={()=>setShowMenu(false)} to={item.to}><p className='px-4 py-2 rounded inline-block'>{item.name}</p></NavLink>))}
            {/* <NavLink  onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
            <NavLink  onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>All Doctors</p></NavLink>
             <NavLink  onClick={()=>setShowMenu(false)} to='/Schedules'><p className='px-4 py-2 rounded inline-block'>Schedules</p></NavLink>
            <NavLink  onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
            <NavLink  onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
