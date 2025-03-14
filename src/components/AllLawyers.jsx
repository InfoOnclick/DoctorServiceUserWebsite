import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {AppContext} from '../context/AppContext'
import './css/Services.css'

const AllLawyers = () => {

    const { speciality } = useParams()
    const [filterDoc, setFilterDoc] = useState([])
    const [showFilter, setShowFilter] = useState(false)


    const navigate = useNavigate()
    
    const { Lawyerss } = useContext(AppContext)

    const applyFilter = () => {
        if(speciality) {
            setFilterDoc(Lawyerss.filter(doc => doc.speciality === speciality))
        }else{
            setFilterDoc(Lawyerss)
        }
    }

    useEffect(()=>{
        applyFilter()
    },[Lawyerss,speciality])
    
    return (
    <div>
      <p className='text-gray-600'>Browse through the Lawyers specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
            <p onClick={()=> {speciality === 'Business Lawyer' ? navigate('/allLawyers') : navigate('/allLawyers/Business Lawyer');setShowFilter(prev => !prev)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === "Business Lawyer" ? "bg-purple-100 text-black " : ""}`}>Business Lawyer</p>
            <p onClick={()=> {speciality === 'Bankruptcy Lawyer' ? navigate('/allLawyers') : navigate('/allLawyers/Bankruptcy Lawyer');setShowFilter(prev => !prev)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === "Bankruptcy Lawyer" ? "bg-purple-100 text-black" : ""}`}>Bankruptcy Lawyer</p>
            <p onClick={()=>{ speciality === 'Tax Lawyer' ? navigate('/allLawyers') : navigate('/allLawyers/Tax Lawyer');setShowFilter(prev => !prev)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === "Tax Lawyer" ? "bg-purple-100 text-black" : ""}`}>Tax Lawyer</p>
            <p onClick={()=> {speciality === 'Defense Lawyer' ? navigate('/allLawyers') : navigate('/allLawyers/Defense Lawyer');setShowFilter(prev => !prev)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === "Defense Lawyer" ? "bg-purple-100 text-black" : ""}`}>Defense Lawyer </p>
            <p onClick={()=> {speciality === 'Constitutional Lawyer' ? navigate('/allLawyers') : navigate('/allLawyers/Constitutional Lawyer');setShowFilter(prev => !prev)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === "Constitutional Lawyer" ? "bg-purple-100 text-black" : ""}`}> Constitutional Lawyer </p>
            <p onClick={()=> {speciality === 'Family Lawyer' ? navigate('/allLawyers') : navigate('/allLawyers/Family Lawyer');setShowFilter(prev => !prev)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === "Family Lawyer" ? "bg-purple-100 text-black" : ""}`}>Family Lawyer</p>
        </div>
        <div className="w-full overflow-x-auto sm:grid sm:grid-cols-auto gap-4 gap-y-6 flex flex-nowrap" id='nocards'>
            {
                filterDoc.map((item,index)=>(
                    <div onClick={()=>navigate(`/lawyerAppointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 min-w-[250px] sm:w-auto flex-shrink-0' key={index}>
                      <img className='w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-md' src={item.image} alt="" style={{backgroundColor:"#d2cff1"}} id='imgRes'/>
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
      </div>
    </div>
  )
}

export default AllLawyers
