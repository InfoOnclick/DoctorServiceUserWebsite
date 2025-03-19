import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { assets } from '../assets/assets';

export default function UserProfile() {

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



  return (





        <div className="flex flex-col md:flex-row items-center justify-center" >

             {/* <div style={{flexDirection:'row'}}>
             <h1 style={{textAlign:'center',marginBottom:15}}>PROFILE</h1>
              </div>       */}
         <div style={{display:'flex'}}>
                <img style={{height: 400,width:280,borderRadius:'5px'}} src={assets.profile_pic} alt="" />
          </div>
        
          <div className="p-5 w-full md:w-1/2" >
          
          
          {/* <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginBottom:20}}>
              <h1 style={{textAlign:'center',marginBottom:15}}>PROFILE</h1>
            <img style={{height:200,width:200,borderRadius:'100px'}} src={assets.profile_pic} alt="" />
           </div> */}

            <Form>
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 "> */}
                <Form.Group className="mb-2 d-flex flex-col" controlId="name">
                  <Form.Label style={{fontSize:15}}>Name</Form.Label>
                  <Form.Label style={{fontSize:22}}>{userData.name}</Form.Label>
                
                </Form.Group>
                <Form.Group className="mb-2 d-flex flex-col" controlId="name">
                  <Form.Label style={{fontSize:15}}>Email</Form.Label>
                  <Form.Label  style={{fontSize:22}}>{userData.email}</Form.Label>
            
                </Form.Group>
              {/* </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0"> */}
              <Form.Group className="mb-2 d-flex flex-col" controlId="name">
                  <Form.Label style={{fontSize:15}}>Gender</Form.Label>
                  <Form.Label  style={{fontSize:22}}>{userData.gender}</Form.Label>
                
                </Form.Group>
                <Form.Group className="mb-2 d-flex flex-col" controlId="name">
                  <Form.Label style={{fontSize:15}}>PhoneNumber</Form.Label>
                  <Form.Label  style={{fontSize:22}}>{userData.phone}</Form.Label>
                
                </Form.Group>
                {/* </div> */}
                <Form.Group className="mb-3 d-flex flex-col" controlId="name">
                  <Form.Label style={{fontSize:15}}>Location</Form.Label>
                  <Form.Label  style={{fontSize:22}}>{userData.address.line1}</Form.Label>
                  <Form.Label  style={{fontSize:22}}>{userData.address.line2}</Form.Label>
                
                </Form.Group>
                
              {/* <Button variant="success" className="w">Submit</Button> */}
            </Form>
          </div>
        </div>
      
  )
}
