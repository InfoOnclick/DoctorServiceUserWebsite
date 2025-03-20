import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import {Alert} from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import '../components/css/Services.css'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './css/Services.css';
import { assets } from '../assets/assets';
import { scheduleData } from "../assets/assets";
import doc from '../assets/doc7.png'
// import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';




export default function Schedules() {
    // const[num,setnum]=useState(20);
    // const[schedul,setSchedul]=useState(false);
    // const [modalShow, setModalShow] = React.useState(false);  

      const [activeTab, setActiveTab] = useState("Upcoming");
      const [modalShow, setModalShow] = useState(false);
    
      // Filter schedules based on active tab
      const filteredSchedules = scheduleData.filter((item) => item.status === activeTab);


   
  return (
  
//     <div>
//       <h1 style={{textAlign:'center',fontSize:'30px'}}>Schedules</h1>

//         <Nav variant="tabs" defaultActiveKey="#first"  style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:'20px',borderBottom:'none',}}>
//           <Nav.Item className="NavItem" onClick={()=>{setnum(10);setSchedul(false);}}>
//             <Nav.Link href="#first" className="NavLink">Upcoming</Nav.Link>
//           </Nav.Item>
//           <Nav.Item className="NavItem" onClick={()=>{setnum(9); setSchedul(true);}}>
//             <Nav.Link href="#link" className="NavLink">Completed</Nav.Link>
//           </Nav.Item>
//           <Nav.Item className="NavItem" onClick={()=>{setnum(5); setSchedul(true);}}>
//             <Nav.Link href="#disabled" className="NavLink">
//               Cancelled
//             </Nav.Link>
//           </Nav.Item>
//         </Nav>
        
//         <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:'50px',borderBottom:'none'}}>
//         <Row xs={1} md={4} className="g-2">
//       {Array.from({ length: num }).map((_, idx) => (
//         <Col key={idx}>
//           <Card style={{}}>
//             <div style={{display:'flex',flexDirection:'row'}}>
//             <div style={{marginLeft:'20px',marginTop:'20px'}}>
//                  <Card.Img variant="top" src={doc} style={{height:90,width:120}}/>
//             </div>
//             <div style={{marginLeft:'40px',marginTop:'20px'}}>
//                <Card.Text>Dr. Anastasya syahid</Card.Text>
//                <Card.Text>Dental Specialist</Card.Text>
//             </div>
//             </div>
//             <Card.Body>
//                <div style={{alignSelf:'center',fontSize:15,marginBottom:'20px',display:'flex',justifyContent:'space-between',backgroundColor:'#575de3',padding:'6px 15px',borderRadius:'10px',color:'white'}}>
//               {/* <input id="dateRequired" type="date" name="dateRequired" style={{backgroundColor:'#575de3',padding:'10px',borderRadius:'10px'}} /> */}
//               <p>Mon,July 29</p>
//               <p>11:00AM - 12:00PM</p>
//               </div>
//               {!schedul ? (
//                   <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                       <Button variant="outline-dark" style={{ borderRadius: '20px' }} onClick={() => setModalShow(true)}>Reschedule</Button>
//                        <Button variant="outline-dark" style={{ borderRadius: '20px' }} >Cancel</Button>
//                    </div>
//               ) : null}
//  <MyverticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   </div>
      
//     </div>
<div>
<h1 style={{ textAlign: "center", fontSize: "30px" }}>Schedules</h1>

<Nav
  variant="tabs"
  defaultActiveKey="Upcoming"
  style={{
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "20px",
    borderBottom: "none",
  }}
>
  {["Upcoming", "Completed", "Cancelled"].map((status) => (
    <Nav.Item key={status} className="NavItem">
      <Nav.Link className="NavLink" onClick={() => setActiveTab(status)}>
        {status}
      </Nav.Link>
    </Nav.Item>
  ))}
</Nav>

<div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", flexWrap: "wrap" }}>
  <Row xs={1} sm={2} md={3} className="g-4" style={{ width: "100%", maxWidth: "1200px" }}>
    {filteredSchedules.length > 0 ? (
      filteredSchedules.map((item) => (
        <Col key={item.id}>
          <Card style={{ borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "15px" }}>
              <Card.Img variant="top" src={item.image} style={{ height: 90, width: 120, borderRadius: "10px" }} />
              <div style={{ marginLeft: "15px", flex: 1 }}>
                <Card.Text style={{ fontWeight: "bold", fontSize: "1rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {item.doctor}
                </Card.Text>
                <Card.Text style={{ fontSize: "0.9rem", color: "#6c757d" }}>{item.specialty}</Card.Text>
              </div>
            </div>

            <Card.Body>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#575de3",
                  padding: "8px 15px",
                  borderRadius: "10px",
                  color: "white",
                  fontSize: "0.9rem",
                }}
              >
                <p style={{ margin: 0 }}>{item.date}</p>
                <p style={{ margin: 0 }}>{item.time}</p>
              </div>

              {activeTab === "Upcoming" && (
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", flexWrap: "wrap", gap: "10px" }}>
                  <Button variant="outline-dark" style={{ borderRadius: "20px", flex: 1 }} onClick={() => setModalShow(true)}>
                    Reschedule
                  </Button>
                  <Button variant="outline-dark" style={{ borderRadius: "20px", flex: 1 }}>
                    Cancel
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      ))
    ) : (
      <p style={{ textAlign: "center", marginTop: "20px", fontSize: "1.1rem", color: "#6c757d" }}>No schedules found.</p>
    )}
  </Row>
</div>


<MyverticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
</div>
  )
}

function MyverticallyCenteredModal(props) {
  const navigate = useNavigate();
   const[schedul,setSchedul]=useState(false);
   const [modalShow, setModalShow] = React.useState(false);  
   const [showAlert, setShowAlert] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [clk, setClk] = useState(false);


  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  
    console.log('Selected Time Slot:', time); // Print to console
  };
  const isDateDisabled = (date) => {
    const today = new Date();
    const day = date.getDay(); // 0 = Sunday, 6 = Saturday

  
    return day !== 0 && day !== 6; 
  };
  

  const data = [
    { key:1,time: "11AM - 12PM" },
    { key:2,time: "1PM - 2PM" },
    { key:2,time: "2PM - 3PM" },
    { key:2,time: "3PM - 4PM" },
    { key:2,time: "5PM - 6PM" },
    { key:2,time: "6PM - 7PM" },
    { key:2,time: "8PM - 9PM" },
    { key:2,time: "9PM - 10PM" },
    { key:2,time: "10PM - 11PM" },
  ];

  const handleClick = () => {
    setShowAlert(true);
    console.log(selectedDate + "  " + selectedTime);

    setTimeout(() => {
        setShowAlert(false);
        // setModalShow(false);
        // navigate('/Schedules');
      
    }, 3000);
};
  
  return (
    <Modal
   
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
         contentClassName="transparent-modal-content"
      // style={{background:'transparent'}}
        id='modelContainer'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="contained-modal-title-vcenter" id='modelHeader'> 
    Schedule Date and Time
    {showAlert && <Alert severity="success" >Appointment successfully made!</Alert>}

        </Modal.Title>
       
          
        
      </Modal.Header>
      <Modal.Body id="modelBody">
        <div style={{display:'flex',justifyContent:'space-evenly',gap:30 }}>
        
            <div style={{display:'flex',flexDirection:'column',gap:25,width:300,position:'relative'}}>
               <h4 id="selectDate">Select Date</h4>
              
               
               <DatePicker
               id='timePicker'
                  selected={selectedDate}
                   minDate={new Date()}
                   style={{position:'absolute',left:50}}
                   filterDate={isDateDisabled}
                   onChange={(date) => setSelectedDate(date)}
                    customInput={<Button variant="outline-dark" className="w-full sm:w-auto" id='timePick'>
                       <p className="text-center w-full sm:w-auto">{selectedDate ? ` ${selectedDate.toLocaleDateString()}` : 'Pick Date'}</p><><CalendarMonthIcon/></> </Button>}
      />

   

               {/* <input type='Date' className="dateIcon-outline" currentDate color="black"  min={new Date().toISOString().split("T")[0]} style={{height:'50px',width:'180px',alignSelf:'center',  marginBottom:'20px',
             display:'flex',
           flexDirection:'column',
             justifyContent:'space-between',padding:'6px 15px',borderRadius:'10px',}}/> */}
             </div>

             
             <div style={{display:'flex',flexDirection:'row',gap:10,marginLeft:'15px',flexWrap:'wrap'}}>
            
             <h4 style={{ width: '90%' }} id='selectTime'>Select A Time Slot</h4>
             
            
             { data.map((item, index) => ( 
              item.time != selectedTime ? (
               <div style={{alignSelf:'center', display:'flex', flexDirection:'column'}} >
           
              <Button variant="outline-primary"   id='DocSlot' onClick={() => handleTimeSelection(item.time)} 
              // className="custom-outline "
              >{item.time}</Button>
                 </div>) : (
                 <div style={{alignSelf:'center', display:'flex', flexDirection:'column'}} >
                  <Button variant="primary"  id='DocSlot' onClick={() => handleTimeSelection(item.time)} 
                  // className="custom-outline "
                  >{item.time}</Button>
                  </div>
               )))}
             </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
      {/* <Button variant="outline-dark" style={{ borderRadius: '20px',marginTop:'25px',padding:'12px',fontSize:'20px' }}  >Book Slot</Button> */}
      {!schedul ? (
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button id="makeAppoint" variant="outline-dark" style={{ borderRadius: '20px' }}  onClick={handleClick}>Reschedule Appointment</Button>
                     
                   </div>
              ) : null}
     
      </Modal.Footer>
      
    </Modal>
    
  );
}

