import React, { useState } from 'react'
import {assets} from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    iamge: assets.profile_pic,
    email: 'abcd@gmail.com',
    phone: '+91 1234 5679',
    address:{
      line1:'khajanagar, khajamalai',
      line2:'Trichy, TamilNadu,'
    },
    gender: 'Male',
    dob:'2000-01-20',
  })

  const [isEdit, setIsEdit] = useState(true)

  return (
    <div 
     
    style={{display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center', 
      height: '100vh',
      textAlign: 'center',
    }}>
      
      <img style={{height:180,width:160,borderRadius:'30px'}} src={userData.iamge} alt="" />
      {
        isEdit
        ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-2' style={{padding:'10px',borderRadius:'10px',width:'auto'}} type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev,name:e.target.value}))}/>
        : <p className='font-medium text-3xl text-neutral-800 mt-2'>{userData.name}</p>
      }
      {/* <hr className='border-zinc-400 h-[1px]' /> */}
      <div >
        <p className='text-neutral-700 underline mt-2'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-2' >
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500' style={{color:'black'}}>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
        isEdit
        ? <input className='bg-gray-100 max-w-52' style={{padding:'10px',borderRadius:'10px'}} type="text" value={userData.phone} onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))}/>
        : <p className='text-blue-400'  style={{color:'black'}}>{userData.phone}</p>
      }
      <p className='font-medium'>Address:</p>
      <p style={{color:'black'}}>{userData.address.line1} <br /> {userData.address.line2} </p>
        </div>
      </div>
      <div>
        <p className='text-neutral-700 underline mt-2'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-2 text-neutral-700' style={{gap:20}}>
          <p className='font-medium' >Gender:</p>
          {
        isEdit
        ? <select className='max-w-20 bg-gray-100' style={{width:100,borderRadius:'10px'}} onChange={(e)=> setUserData(prev=>({...prev, gender:e.target.value}))} value={userData.gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        : <p className='text-gray-400' style={{color:'black'}}>{userData.gender}</p>
      }
      <p className='font-medium'>Birthday:</p>
      {
        isEdit
        ? <input className='bg-gray-100' style={{padding:'10px',borderRadius:'10px',width:150}} type="date" value={userData.dob} onChange={e => setUserData(prev => ({...prev,dob:e.target.value}))}/>
        : <p className='text-gray-400' style={{color:'black'}}>{userData.dob}</p>
      }
        </div>
      </div>
      <div className='mt-10'>
        {
          isEdit
          ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(false)}>Save Information</button>
          : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile
