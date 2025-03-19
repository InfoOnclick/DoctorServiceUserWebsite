import React from 'react'
import {assets} from '../assets/assets'
import { useParams } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-400 rounded-lg px-4 md:px-10 lg:px-20' style={{backgroundColor:"#7680e9"}}>
      {/* ------Left Side------ */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Find Your Doctor & make <br />an Appointment.</p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm'>
          <img className='w-28' src={assets.group_profiles} alt="" />
          <p>Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
          Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* ------Right Side------ */}
      <div className='w-1/2 relative'>
         <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
      </div > 
    </div>
  )
}

const HeaderHome=({category})=>{
    // const {category}=useParams();
    console.log(category);
  return(
<div 
  className='flex flex-col md:flex-row flex-wrap bg-400 rounded-lg px-4 md:px-10 lg:px-20' 
  style={{ backgroundColor: "#7680e9" }}
>
  {/* ------Left Side------ */}
  <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
   {category==='doctor'? (
   <p className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
      Find Your Doctor & make <br /> an Appointment.
    </p>): category === "lawyer" ? (
    <p className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
      Find Your Lawyers & make <br /> an Appointment.
    </p>):'No Category found'}
    <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm'>
      <img className='w-28' src={assets.group_profiles} alt="" />
      <p>
        Simply browse through our extensive list of trusted Lawyers,<br className='hidden sm:block' />
        schedule your appointment hassle-free.
      </p>
    </div>
    <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
      Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
    </a>
  </div>

  {/* ------Right Side------ */}
  <div className='w-full md:w-1/2 flex items-center justify-center py-5 md:py-0'>
   {category==='doctor'? ( <img className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg object-cover' src={assets.header_img} alt="" />):
   
   category === "lawyer" ? (
   <img 
      className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg object-cover' 
      src="https://th.bing.com/th/id/OIP.UhDhh-dl6vW4SyDV6GqIiwHaEK?w=758&h=426&rs=1&pid=ImgDetMain" 
      alt="Lawyer Consultation"
    />):'no Category  found'}
  </div> 
</div>
  )
}

export default HeaderHome
