import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import './css/Services.css'

const Banner = () => {

    const navigate = useNavigate()

  return (
    <div
    className="flex flex-col md:flex-row bg-400 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 items-center"
    style={{ backgroundColor: "#7680e9" }}
    id="banner"
  >
    {/* -----Left Side----- */}
    <div className="flex-1 text-center md:text-left py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
        <p>Book your Doctor</p>
        <p className="mt-4">Appointment</p>
        <p className="mt-4">Online.</p>
      </div>
      <button
        onClick={() => {
          navigate("/login");
          scrollTo(0, 0);
        }}
        className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all"
      >
        Create account
      </button>
    </div>
  
    {/* -----Right Side (Hidden on Small Screens) ----- */}
    <div className="hidden md:flex md:w-1/2 lg:w-[370px] relative justify-center">
      <img className="w-full max-w-xs md:max-w-sm lg:max-w-md" src={assets.appointment_img} alt="" />
    </div>
  </div>
  
  )
}

export default Banner
