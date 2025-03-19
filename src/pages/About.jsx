import React from 'react'
import {assets} from '../assets/assets'
import { useParams } from 'react-router-dom'

const About = () => {


  return (
    <div>
      
      <div className='text-center text-2xl pt-8 text-gray-700 font-medium'>
        <p>ABOUT US</p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/3 text-base text-gray-600'>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-black'>Our Vision</b>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>


    </div>
  )
}


const aboutData=[
  {
  key:'doctor',
  img:assets.about_image,
  p1:"Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.",
  p2:"Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.",
  p3:"Our Vision",
  p4:"Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it."
  },
  {
    key:'lawyer',
    img:'https://th.bing.com/th/id/OIP.UhDhh-dl6vW4SyDV6GqIiwHaEK?w=758&h=426&rs=1&pid=ImgDetMain',
    p1:"Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.",
    p2:"Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.",
    p3:"Our Vision",
    p4:"Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it."
    },
]

const AboutPage=()=>{

  const {category}=useParams();

  const selectedData = aboutData.find((item) => item.key === category);



  return(
    <div className="container mt-5">
      {selectedData ? (
        <div className="row align-items-center">
          <div className="col-md-5">
            <img
              src={selectedData.img}
              alt={selectedData.key}
              className="img-fluid rounded"
              style={{ maxHeight: "300px" }}
            />
          </div>
          <div className="col-md-7">
       
            <p>{selectedData.p1}</p>
            <p>{selectedData.p2}</p>
            <h4>{selectedData.p3}</h4>
            <p>{selectedData.p4}</p>
          </div>
        </div>
      ) : (
        <h3 className="text-center">Category not found</h3>
      )}
    </div>
  )
}
export default AboutPage
