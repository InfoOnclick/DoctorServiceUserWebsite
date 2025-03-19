import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedLawyers = ({speciality, docId}) => {

    const {Lawyerss} = useContext(AppContext)
    const navigate = useNavigate()

    const [relDoc, setRelDocs] = useState([])

    useEffect(()=>{
       if(Lawyerss.length > 0 && speciality){
            const doctorsData = Lawyerss.filter((doc) => doc.speciality === speciality && doc._id!== docId)
            setRelDocs(doctorsData)
       }
    },[Lawyerss, speciality, docId])


  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
    <h1 className='text-3xl font-medium'>Related Lawyers</h1>
    <p className='text-sm w-1/3 text-center' id='docHead'>Simply browse through our extensive list of trusted Lawyers.</p>
    <div className='w-full flex overflow-x-auto snap-x snap-mandatory gap-4 pt-5 px-3 sm:px-0 scrollbar-hide'>
      {relDoc.slice(0,5).map((item,index)=>(
            <div onClick={()=>{navigate(`/lawyerAppointment/${item._id}`); scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 w-64' key={index}>
          <img className='bg-100' src={item.image} alt=""  style={{backgroundColor:"#d2cff1"}}/>
          <div className='p-4'>
            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
              <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
            </div>
            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
            <p className='text-gray-600 text-sm'>{item.speciality}</p>
          </div>
        </div>
      ))}
    </div>
    <button onClick={()=>{ navigate('/allLawyers'); scrollTo(0,0) }} className='bg-green-100 text-black px-12 py-3 rounded-full mt-10 font-medium'>more</button>
  </div>
  )
}

export default RelatedLawyers
