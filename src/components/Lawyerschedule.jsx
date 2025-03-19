
    import React, { useState } from 'react'
    import Button from 'react-bootstrap/Button';
    import Card from 'react-bootstrap/Card';
    import Nav from 'react-bootstrap/Nav';
    
import Modal from 'react-bootstrap/Modal';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './css/Services.css';
    import { assets } from '../assets/assets';
    import doc from '../assets/doc7.png'
    // import Card from 'react-bootstrap/Card';
    import Col from 'react-bootstrap/Col';
    import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
    
     const Lawyerschedule=()=> {
        const[num,setnum]=useState(20);
        const[schedul,setSchedul]=useState(false);
        const [modalShow, setModalShow] = React.useState(false);  
      return (
      
        <div>
          <h1 style={{textAlign:'center',fontSize:'30px'}}>Schedules</h1>
    
            <Nav variant="tabs" defaultActiveKey="#first"  style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:'20px',borderBottom:'none',}}>
              <Nav.Item className="NavItem" onClick={()=>{setnum(10);setSchedul(false);}}>
                <Nav.Link href="#first" className="NavLink">Upcoming</Nav.Link>
              </Nav.Item>
              <Nav.Item className="NavItem" onClick={()=>{setnum(9); setSchedul(true);}}>
                <Nav.Link href="#link" className="NavLink">Completed</Nav.Link>
              </Nav.Item>
              <Nav.Item className="NavItem" onClick={()=>{setnum(5); setSchedul(true);}}>
                <Nav.Link href="#disabled" className="NavLink">
                  Cancelled
                </Nav.Link>
              </Nav.Item>
            </Nav>
            
            <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:'50px',borderBottom:'none'}}>
            <Row xs={1} md={4} className="g-2">
          {Array.from({ length: num }).map((_, idx) => (
            <Col key={idx}>
              <Card style={{}}>
                <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{marginLeft:'20px',marginTop:'20px'}}>
<<<<<<< HEAD
                     <Card.Img variant="top" src="https://i.pinimg.com/originals/ed/39/6d/ed396d80c3c06f625c443a03ae78f0f3.jpg" style={{height:100,width:120}}/>
=======
                     <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.hKGZDELu0fyvdWaDP0HUiwHaFj?rs=1&pid=ImgDetMain" style={{height:90,width:120}}/>
>>>>>>> 51e9133feb4d5653fe2f48e27168ec5c1532e66a
                </div>
                <div style={{marginLeft:'40px',marginTop:'20px'}}>
                   <Card.Text>Dr. Timothy White</Card.Text>
                   <Card.Text>Tax Lawyer</Card.Text>
                </div>
                </div>
                <Card.Body>
                   <div style={{alignSelf:'center', fontSize:15,marginBottom:'20px',display:'flex',justifyContent:'space-between',backgroundColor:'#575de3',padding:'6px 15px',borderRadius:'10px',color:'white'}}>
                  {/* <input id="dateRequired" type="date" name="dateRequired" style={{backgroundColor:'#575de3',padding:'10px',borderRadius:'10px'}} /> */}
                  <p>Mon,July 29</p>
                  <p>11:00AM - 12:00PM</p>
                  </div>
                  {!schedul ? (
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Button variant="outline-dark" style={{ borderRadius: '20px' }} onClick={() => setModalShow(true)}>Reschedule</Button>
                           <Button variant="outline-dark" style={{ borderRadius: '20px' }} >Cancel</Button>
                       </div>
                  ) : null}
     <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
          
        </div>
      )
    }
    
function MyVerticallyCenteredModal(props) {
 const[schedul,setSchedul]=useState(false);
   const [modalShow, setModalShow] = React.useState(false);  
   
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();

  const [clk, setClk] = useState(false); 
   const navigate=useNavigate();
  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    console.log('Selected Time Slot:', time); // Print to console
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
  

  return (
    <Modal
   
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
       id='modelContainer'
      style={{background:'transparent'}}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="contained-modal-title-vcenter" id='modelHeader'>
    Schedule Date and Time
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="modelBody">
        <div style={{display:'flex',justifyContent:'space-evenly',gap:30 }}>
            <div style={{display:'flex',flexDirection:'column',gap:25,width:300,position:'relative'}}>
            <h4 id="selectDate">Select Date</h4>
               <DatePicker
                  selected={selectedDate}
                   minDate={new Date()}
                   style={{position:'absolute',left:50}}
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
                      <Button variant="outline-dark" id="makeAppoint" style={{ borderRadius: '20px' }}  onClick={() =>{ setModalShow(true);console.log(selectedDate+"  "+selectedTime);alert("Appointment Rescheduled Successfully");navigate(0)}}>Reschedule Appointment</Button>
                     
                   </div>
              ) : null}
     
      </Modal.Footer>
      
    </Modal>
    
  );
}

  
 export default Lawyerschedule
