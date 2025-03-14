import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function DoctorContact() {
   const navigate = useNavigate();
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[subject,setSubject]=useState('');
  const[message,setMessage]=useState('');

  const submitMessage = () => {
    console.log("Form Data:", { name, email,subject,message });
    alert("Appointment Booked Successfully!");

    setTimeout(() => {
      navigate("/doctors"); // Change "/confirmation" to your target route
    }, 200);
  
  };


  return (


<div>
{/* <h1 style={{display:'flex',justifyContent:'center'}}>Contact Us</h1> */}

        <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-10">
            
          <div className="bg-[#c5f6de] p-6 md:p-12 w-full md:w-1/2 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold">Let’s get in touch</h1>
            <p className="mb-4">Fill out the form  to contact us</p>
            <div className="space-y-3">
              <div className="flex space-x-2 items-center">
                <p><LocationOnIcon/></p>
                <p>Address: 196 West 21st Street, Trichy</p>
              </div>
              <div className="flex space-x-2 items-center">
                <p><LocalPhoneIcon/></p>
                <p>+91 5459965649</p>
              </div>
              <div className="flex space-x-2 items-center">
                <p><EmailIcon/></p>
                <p>contact@example.com</p>
              </div>
              <div className="flex space-x-2 items-center">
                <p><LanguageIcon/></p>
                <p>www.example.com</p>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-12 w-full md:w-1/2">
            <h1 className="text-2xl font-bold mb-4">Get in touch</h1>
            <Form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Enter Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name"  value={name}
                onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Enter Email</Form.Label>
                  <Form.Control type="email" placeholder="Your Email"  value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
              </div>
              <Form.Group className="mb-3" controlId="subject">
                <Form.Label>Your Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject"  value={subject}
                onChange={(e) => setSubject(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="feedback">
                <Form.Label>Enter Feedback</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Your Message"  value={message}
                onChange={(e) => setMessage(e.target.value)}/>
              </Form.Group>
              <Button variant="success" onClick={submitMessage} className="w">Submit</Button>
            </Form>
          </div>
        </div>
        </div>
  )
}
