import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const LawyerBanners = () => {

    const navigate = useNavigate()

  return (
    <div className='flex bg-400 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10' style={{backgroundColor:"#7680e9"}}>
        {/* -----Left Side----- */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                <p>Book your Lawyer</p>
                <p className='mt-4'>Appointment</p>
                <p className='mt-4'>Online.</p>
            </div>
            <button onClick={()=> {navigate('/login'); scrollTo(0,0)}} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create account</button>
        </div>

         {/* -----Left Side----- */}
         <div className='hidden md:flex md:w-1/2 lg:w-[370px] relative justify-center"'>
            <img className='w-full max-w-xs md:max-w-sm lg:max-w-md' src="https://th.bing.com/th/id/OIP.hKGZDELu0fyvdWaDP0HUiwHaFj?rs=1&pid=ImgDetMain" alt=""  style={{height:'480px',width:'350px',borderRadius:'5px'}}/>
         </div>
      
    </div>
  )
}

export default LawyerBanners
