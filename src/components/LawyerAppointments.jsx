import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets, Lawyerss } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './css/Services.css';

const lawyerAppointments = () => {
  const { docId } = useParams();
   const[schedul,setSchedul]=useState(false);
      const [modalShow, setModalShow] = React.useState(false);  
  const { Lawyerss, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = Lawyerss.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([])

    // getting current date
    let today = new Date()

    for(let i=0; i<7; i++){
      // getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)

      // setting end time of the date with  index
      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0) 
      
      // setting hours
      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

        // add slot to array
        timeSlots.push({
        dateTime: new Date(currentDate),
        time: formattedTime
        })

        // increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }

  useEffect(() => {
    fetchDocInfo();
  }, [Lawyerss, docId]);

  useEffect(() => {
    getAvailableSlots();
  },[docInfo]);

  useEffect(()=>{
    console.log(docSlots)
  },[docSlots])

  return (
    docInfo && (
      <div>
        {/* -----Doctor Details----- */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-green-100 w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
              style={{backgroundColor:"#d2cff1"}}
            />
          </div>

          <div className="flex-1  border border-gray-400 rounded-lg p-8 py-7 mx-2 sm:mx-0 mt-[-80px] sm:mt-0 bg-blue-100">
            {/* -----Doc Info: namee, degree, experience----- */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 mt-1 text-gray-600 text-sm ">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 text-xs rounded-full bg-green-50 border">
                {docInfo.experience}
              </button>
            </div>
            {/* -----Doctor About----- */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3 ">
                About <img className="w-3" src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:
              <span className="text-black">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
 
        {/* -----Booking Slots----- */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking slots</p>
          {!schedul ? (
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button variant="outline-dark" style={{ borderRadius: '20px' }}  onClick={() => setModalShow(true)}>Schedule</Button>
                     
                   </div>
              ) : null}
 <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
         

          {/* <div className="flex items-center gap-3 overflow-x-scroll mt-4 w-full">
           {docSlots.length && docSlots[slotIndex].map((item, index)=>(
             <p onClick={()=>(setSlotTime(item.time))} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-green-300 text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
              {item.time.toLowerCase()}
             </p>
           ))}
          </div> */}
           <Button variant="outline-dark" style={{ borderRadius: '20px',marginTop:'25px',padding:'12px',fontSize:'20px' }} >Book Slot</Button>
        </div>

    {/* Related Doctors */}
    <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>

     </div>
    )
  );
};


function MyVerticallyCenteredModal(props) {
  const[schedul,setSchedul]=useState(false);
  const [modalShow, setModalShow] = React.useState(false);  
  const [selectedDate, setSelectedDate] = useState(null);

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
      
      style={{background:'transparent'}}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
    Schedule Date and Time
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{display:'flex',justifyContent:'space-evenly',gap:30 }}>
            <div style={{display:'flex',flexDirection:'column',gap:25,width:300}}>
               <h4>Select Date</h4>
               <DatePicker
             
        selected={selectedDate}
        minDate={new Date()}
        onChange={(date) => setSelectedDate(date)}
        customInput={<Button variant="outline-dark">Pick Date  <><CalendarMonthIcon/></> </Button>}
      />
   

               {/* <input type='Date' className="dateIcon-outline" currentDate color="black"  min={new Date().toISOString().split("T")[0]} style={{height:'50px',width:'180px',alignSelf:'center',  marginBottom:'20px',
             display:'flex',
           flexDirection:'column',
             justifyContent:'space-between',padding:'6px 15px',borderRadius:'10px',}}/> */}
             </div>

             
             <div style={{display:'flex',flexDirection:'row',gap:10,marginLeft:'15px',flexWrap:'wrap'}}>
            
             <h4 style={{ width: '90%' }}>Select A Time Slot</h4>
             
            
             {data.map((item, index) => (
               <div style={{alignSelf:'center',
          //    marginBottom:'20px',
             display:'flex',
           flexDirection:'column',
           
          //    justifyContent:'space-between',backgroundColor:'#575de3',padding:'6px 15px',borderRadius:'10px',color:'white',
 
             }}
             >
              
              <Button variant="outline-dark" className="custom-outline">{item.time}</Button>
                 </div>
))}
             </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
      {/* <Button variant="outline-dark" style={{ borderRadius: '20px',marginTop:'25px',padding:'12px',fontSize:'20px' }}  >Book Slot</Button> */}
      {!schedul ? (
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button variant="outline-dark" style={{ borderRadius: '20px' }}  onClick={() => setModalShow(true)}>Make Appointment</Button>
                     
                   </div>
              ) : null}
      <UserDataModel 
      show={modalShow}
      onHide={() => setModalShow(false)}/>
      </Modal.Footer>
      
    </Modal>
    
  );
}

function UserDataModel(props) {
 

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
  const [selectedFruit, setSelectedFruit] = useState('Gender');
  const handleSelectChange = (e) => {
      setSelectedFruit(e.target.value);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      style={{background:'transparent'}}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
   Enter Your Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Name"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Age"
                autoFocus
              />
            </Form.Group>
            <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Select value={selectedFruit} onChange={handleSelectChange}>
               
                    <option> Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                   
                </Form.Select>
                </Form.Group>
                <div>
                <Button variant="outline-success" href="/Schedules" style={{alignItems:'center' , borderRadius: '20px',marginTop:'20px',padding:'10px',fontSize:'18px' }}  >Complete Booking</Button>
                </div>          
          </Form>

      </Modal.Body>
     
      
     
   
    
      
    </Modal>
    
  );
}
export default lawyerAppointments;
