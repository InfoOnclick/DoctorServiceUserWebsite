import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {AppContext} from '../context/AppContext'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { specialityData, specialityLawyers } from '../assets/assets';

const Doctors = () => {
    
  
    const { speciality } = useParams()
    const [filterDoc, setFilterDoc] = useState([])
    const [showFilter, setShowFilter] = useState(false)
    const[const1,setConst]=useState(false);

    const [specialities, setSpeciality] = React.useState('');

  const handleChange = (event) => {
     applyFilter(event.target.value);
    // speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician');
    // setShowFilter(prev => !prev)
    setSpeciality(event.target.value);
  };

    const navigate = useNavigate()
    
    const { doctors } = useContext(AppContext)

    const applyFilter = () => {
        if(speciality) {
            setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
        }else{
            setFilterDoc(doctors)
        }
    }

    useEffect(()=>{
        applyFilter()
    },[doctors,speciality])
    
    return (
    <div >
      
      <p className='text-gray-600'>Browse through the doctors specialist.</p>


      {/* <div className='flex flex-col sm:flex-row items-start gap-3 mt-3'>
      <Box sx={{ minWidth: 100 }}>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
      
            <InputLabel id="demo-simple-select-label">Select Specialization</InputLabel>
           
      
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={specialities}
          label="Select Specialization"
          onChange={handleChange}
        >
            {doctors.map((doc, index) => (
                <MenuItem key={index} value={doc.speciality}>{doc.speciality}</MenuItem>
            ))}
         
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ minWidth: 100 }}>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
      
            <InputLabel id="demo-simple-select-label1">Select Specialization</InputLabel>
           
      
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select1"
          value={specialities}
          label="Select Specialization"
          onChange={handleChange}
        >
            {doctors.map((doc, index) => (
                <MenuItem key={index} value={doc.speciality}>{doc.speciality}</MenuItem>
            ))}
         
        </Select>
      </FormControl>
    </Box>

      </div> */}
     
     
      <div className='flex flex-col sm:flex-row items-start gap-3 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=>{setShowFilter(prev => !prev);}}>Filters</button>
       <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
       {specialityData.map((item) => {
  return (
    <p 
      onClick={() => {
        speciality === item.speciality
          ? navigate("/doctors") :
          navigate(`/doctors/${item.speciality}`);
        setShowFilter(prev => !prev);
      }} 
      className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === item.speciality ? "bg-purple-100 text-black" : ""}`}
    >
      {item.speciality}
    </p>
  );
})}

            {/* <p onClick={()=> {speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist');setShowFilter(prev => !prev)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-purple-100 text-black" : ""}`}>Gynecologist</p>
            <p onClick={()=> {speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist');setShowFilter(prev => !prev)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-purple-100 text-black" : ""}`}>Dermatologist</p>
            <p onClick={()=> {speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians');setShowFilter(prev => !prev)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-purple-100 text-black" : ""}`}>Pediatricians</p>
            <p onClick={()=> {speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist');setShowFilter(prev => !prev)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-purple-100 text-black" : ""}`}>Neurologist</p>
            <p onClick={()=> {speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist');setShowFilter(prev => !prev)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-purple-100 text-black" : ""}`}>Gastroenterologist</p> */}
        </div>


         <div className="w-full overflow-x-auto sm:grid sm:grid-cols-auto gap-8 gap-y-6 flex flex-nowrap" id='nocards'>
      {filterDoc.map((item, index) => (
        <div
          onClick={() => navigate(`/appointment/${item._id}`)}
          className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 min-w-[250px] sm:w-auto flex-shrink-0"
          key={index}
        >
          <img
            className="bg-100 w-full"
            src={item.image}
            alt=""
            style={{ backgroundColor: "#d2cff1" }}
          />
          <div className="p-4">
            <div className="flex items-center gap-2 text-sm text-center text-green-500">
              <p className="w-2 h-2 bg-green-500 rounded-full"></p>
              <p>Available</p>
            </div>
            <p className="text-gray-900 text-lg font-medium">{item.name}</p>
            <p className="text-gray-600 text-sm">{item.speciality}</p>
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  )
}


const DoctorsFilter=()=>{

  const { speciality,category } = useParams();
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const[const1,setConst]=useState(false);

  const [specialities, setSpeciality] = React.useState('');

const handleChange = (event) => {
   applyFilter(event.target.value);

  setSpeciality(event.target.value);
};

  const navigate = useNavigate()
  
  const { doctors,Lawyerss } = useContext(AppContext)

  const applyFilter = () => {
      if(speciality != 'all') {
          setFilterDoc((category==='doctor'?doctors:Lawyerss).filter(doc => doc.speciality === speciality))
      }else{
          setFilterDoc((category==='doctor'?doctors:Lawyerss))
      }
  }

  useEffect(()=>{
      applyFilter()
  },[(category==='doctor'?doctors:Lawyerss),speciality])
  
  return (
  <div >
    
    <p className='text-gray-600'>Browse through the doctors specialist.</p>



    <div className='flex flex-col sm:flex-row items-start gap-3 mt-5'>
      <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=>{setShowFilter(prev => !prev);}}>Filters</button>
     <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
     {(category === 'doctor' ? specialityData : specialityLawyers).map((item) => {
return (
  <p 
    onClick={() => {
      // speciality === item.speciality
      setFilterDoc((category==='doctor'?doctors:Lawyerss).filter(doc => doc.speciality === item.speciality))
      setSpeciality(item.speciality);
      console.log(specialities);
      // ? navigate(`/${category==='doctor'?'doctors':'allLawyers'}`) :
        // navigate(`/${category==='doctor'?'doctors':'allLawyers'}/${item.speciality}`);
        console.log(speciality,filterDoc);
      setShowFilter(prev => !prev);
    }} 
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${specialities === item.speciality ? "bg-purple-100 text-black" : ""}`}
  >
    {item.speciality}
  </p>
);
})}

          {/* <p onClick={()=> {speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist');setShowFilter(prev => !prev)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-purple-100 text-black" : ""}`}>Gynecologist</p>
          <p onClick={()=> {speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist');setShowFilter(prev => !prev)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-purple-100 text-black" : ""}`}>Dermatologist</p>
          <p onClick={()=> {speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians');setShowFilter(prev => !prev)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-purple-100 text-black" : ""}`}>Pediatricians</p>
          <p onClick={()=> {speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist');setShowFilter(prev => !prev)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-purple-100 text-black" : ""}`}>Neurologist</p>
          <p onClick={()=> {speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist');setShowFilter(prev => !prev)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-purple-100 text-black" : ""}`}>Gastroenterologist</p> */}
      </div>


      <div className="w-full overflow-x-auto sm:grid sm:grid-cols-auto gap-8 gap-y-6 flex flex-nowrap" id='nocards'>
  {filterDoc.length === 0 ? (
    <h3 style={{textAlign:'center'}}>No data Found</h3>
  ) : (
    filterDoc.map((item, index) => (
      <div
        onClick={() => navigate(`/${category === 'doctor' ? 'appointment' : 'lawyerAppointment'}/${item._id}`)}
        className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 min-w-[250px] sm:w-auto flex-shrink-0"
        key={index}
      >
        <img
          className="bg-100 w-full"
          src={item.image}
          alt=""
          style={{ backgroundColor: "#d2cff1" }}
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 bg-green-500 rounded-full"></p>
            <p>Available</p>
          </div>
          <p className="text-gray-900 text-lg font-medium">{item.name}</p>
          <p className="text-gray-600 text-sm">{item.speciality}</p>
        </div>
      </div>
    ))
  )}
</div>

    </div>
  </div>

  )
}

export default DoctorsFilter
