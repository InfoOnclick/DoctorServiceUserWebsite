import React, { useContext, useEffect, useState,useRef } from "react";
import {  useParams,useNavigate  } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './css/Services.css';
import { Card, CardMedia, CardContent, Typography, Grid, Container } from "@mui/material";
import { Navigation } from "@mui/icons-material";
import { RiVideoOnLine,RiVideoOffLine } from "react-icons/ri";
import { Color } from '../Colors/Color';
import Multiselect from 'multiselect-react-dropdown';
        
// import { Button } from '@mui/material';


const Appointment = () => {
  const { docId,category } = useParams();
   const[schedul,setSchedul]=useState(false);
      const [modalShow, setModalShow] = React.useState(false);  
  const { doctors, currencySymbol } = useContext(AppContext);
  // const { Lawyerss,currentsymbol}=useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
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
  }, [doctors, docId]);

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

          <div className="flex-1  border border-gray-400 rounded-lg p-8 py-7 mx-2 sm:mx-0 mt-[20px] sm:mt-0 bg-blue-100" id='card'>
            {/* -----Doc Info: namee, degree, experience----- */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon}  alt="" />
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
            {/* {!schedul ? ( */}
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button variant="outline-dark" style={{ borderRadius: '20px' }}  onClick={() => setModalShow(true)}>Make Appointment</Button>
                     
                   </div>
              {/* ) : null} */}
              <ServiceType  show={modalShow}
        onHide={() => setModalShow(false)}/>

 {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
          </div>
        </div>
 
        {/* -----Booking Slots----- */}
        {/* <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking slots</p>
          {!schedul ? (
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button variant="outline-dark" style={{ borderRadius: '20px' }}  onClick={() => setModalShow(true)}>Schedule</Button>
                     
                   </div>
              ) : null}
 <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
         

          {/* <div className="flex items-center gap-3 overflow-x-scroll mt-4 w-full">
           {docSlots.length && docSlots[slotIndex].map((item, index)=>(
             <p onClick={()=>(setSlotTime(item.time))} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-green-300 text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
              {item.time.toLowerCase()}
             </p>
           ))}
          </div> */}
          
        {/* </div> */}

    {/* Related Doctors */}
    <RelatedDoctors docId={docId} speciality={docInfo.speciality} />

     </div>
    )
  );
};







function MyVerticallyCenteredModal(props) {
  const[schedul,setSchedul]=useState(false);
  const [modalShow, setModalShow] = React.useState(false);  
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [online, setOnline] = useState();
  const [offline, setOffline] = useState();
const[dataFilter,setDataFilter]=useState('');
 
// useEffect(() => {
//   console.log(dataFilter);
// }, [dataFilter]);


  const handleOnline = ({item}) => {
    setOnline(prev => !prev);
    setOffline(false);
    // data.forEach(item => console.log(`Key: ${item.key}, Date: ${item.dat}, Mode: ${item.by}, Time: ${item.time}, Hospital: ${item.hospital[0]}`));
    // const filData=dateAvailability.filter(item => item.by === 'online');
    // setDataFilter(filData);
    // console.log(dataFilter);
    const data = getAvailableTimeSlots(selectedDate, online);
    setDataFilter(data);
     console.log(data);
  }  

  const handleOffline = ({item}) =>{
     setOffline(prev => !prev);
     setOnline(false);

     const data = getAvailableTimeSlots(selectedDate, online);
     setDataFilter(data);
      console.log(data);
     

  }

  const handleTimeSelection = (time) => {
    const slot = data.find((item) => item.time === time);
    setSelectedTime(time);
    setSelectedSlot(slot);
  };

  const data = [
    { key:1,dat:"3",by:'online',time: "11AM - 12PM",hospital:["krishna hostipal"] },
    { key:2,dat:"3",by:'offline',time: "1PM - 2PM",hospital:["cauvery hostipal"] },
    { key:3,dat:"3",by:'online',time: "2PM - 3PM",hospital:["krishna hostipal"] },
    { key:4,dat:"3",by:'offline',time: "3PM - 4PM",hospital:["krishna hostipal"] },
    { key:5,dat:"4",by:'offline',time: "5PM - 6PM",hospital:["krishna hostipal"] },
    { key:6,dat:"4",by:'online',time: "6PM - 7PM",hospital:["cauvery hostipal"] },
    { key:7,dat:"4",by:'offline',time: "6.30PM - 7PM",hospital:["cauvery hostipal"] },
    { key:8,dat:"4",by:'online',time: "8PM - 9PM",hospital:["krishna hostipal"] },
    { key:9,dat:"5",by:'offline',time: "9PM - 10PM",hospital:["cauvery hostipal"] },
    { key:10,dat:"5",by:'online',time: "10PM - 11PM",hospital:["krishna hostipal"] },
  ];
 
  
  const jsonData = [
    { date: "2025-03-10", day: "Sunday" },
    { date: "2025-03-12", day: "Tuesday" },
    { date: "2025-03-15", day: "Friday" },
    { date: "2025-03-16", day: "Saturday" },
    { date: "2025-03-17", day: "Monday" },
  ];

  // Convert JSON date strings to Date objects
  const allowedDates = jsonData.map((item) => new Date(item.date).setHours(0, 0, 0, 0));

  // Function to filter allowed dates
  const filterDate = (date) => {
    const day = date.getDay(); // Get the day of the week (0 = Sunday, 6 = Saturday)

    // Exclude Saturdays (6) and Sundays (0)
    return day !== 0 && day !== 6;
 

  };

const dateAvailability = [
    {
      
      'day': 1,
      'onlineTimeSlots': [
        {
          'time': '10:00 AM - 10:30 AM',
          'fees': '50',
        },
        {
          'time': '11:00 AM - 11:30 AM',
          'fees': '50',
        },
        {
          'time': '12:00 PM - 12:30 PM',
          'fees': '50',
        },
        {
          'time': '03:00 PM - 03:30 PM',
          'fees': '50',
        },
      ],
      'offlineTimeSlots': [
        {
          'time': '05:00 PM - 05:30 PM',
          'hospital': 'Apollo Hospital',
          'address': 'Chennai Bypass Road , Ariyamangalam Area, Old Palpannai, Tiruchirappalli, Tamil Nadu, 620010',
          'image': 'https://cdn.apollohospitals.com/dev-apollohospitals/2022/08/Apollo-Gurgaon-Hospital-1024x481.jpg',
          'fees': '100',
        },
        {
          'time': '06:00 PM - 06:30 PM',
          'hospital': 'Cauvery Hospital, Trichy',
          'address': 'Chennai Bypass Road , Ariyamangalam Area, Old Palpannai, Tiruchirappalli, Tamil Nadu, 620010',
          'image': 'https://tse2.mm.bing.net/th?id=OIP.vG621err7P7NikXpKsELSgHaEK&pid=Api&P=0&h=180',
          'fees': '80',
        },
      ],
    },
    {
      'day': 2,
      'onlineTimeSlots': [
        {
          'time': '10:00 AM - 10:30 AM',
          'fees': '50',
        },
        {
          'time': '11:00 AM - 11:30 AM',
          'fees': '50',
        },
        {
          'time': '12:00 PM - 12:30 PM',
          'fees': '50',
        },
      ],
      'offlineTimeSlots': [
        {
          'time': '03:00 PM - 03:30 PM',
          'hospital': 'Government Hospital, Chennai',
          'address': 'Chennai Bypass Road , Ariyamangalam Area, Old Palpannai, Tiruchirappalli, Tamil Nadu, 620010',
          'image': 'https://tse3.mm.bing.net/th?id=OIP.VZPscNUsvUH57iUCjh2QKwHaDj&pid=Api&P=0&h=180',
          'fees': '100',
        },
        {
          'time': '04:00 PM - 04:30 PM',
          'hospital': 'Krishna Hospital, Trichy',
          'address': 'Chennai Bypass Road , Ariyamangalam Area, Old Palpannai, Tiruchirappalli, Tamil Nadu, 620010',
          'image': 'https://tse3.mm.bing.net/th?id=OIP.HtRM62gzrScL9qAS5J2FjwHaDe&pid=Api&P=0&h=180',
          'fees': '80',
        },
        {
          'time': '05:00 PM - 05:30 PM',
          'hospital': 'Apollo Hospital',
          'address': 'Chennai Bypass Road , Ariyamangalam Area, Old Palpannai, Tiruchirappalli, Tamil Nadu, 620010',
          'image': 'https://cdn.apollohospitals.com/dev-apollohospitals/2022/08/Apollo-Gurgaon-Hospital-1024x481.jpg',
          'fees': '100',
        },
      ],
    },
    {
      'day': 3,
      'onlineTimeSlots': [
        {
          'time': '2:00 PM - 2:30 PM',
          'fees': '50',
        },
        {
          'time': '03:00 PM - 03:30 PM',
          'fees': '50',
        },
      ],
      'offlineTimeSlots': [
        {
          'time': '05:00 PM - 05:30 PM',
          'hospital': 'Apollo Hospital, Chennai',
          'address': 'Chennai Bypass Road , Ariyamangalam Area, Old Palpannai, Tiruchirappalli, Tamil Nadu, 620010',
          'image': 'https://cdn.apollohospitals.com/dev-apollohospitals/2022/08/Apollo-Gurgaon-Hospital-1024x481.jpg',
          'fees': '100',
        },
        {
          'time': '06:00 PM - 06:30 PM',
          'hospital': 'Cauvery Hospital, Trichy',
          'address': 'Chennai Bypass Road , Ariyamangalam Area, Old Palpannai, Tiruchirappalli, Tamil Nadu, 620010',
          'image': 'https://tse2.mm.bing.net/th?id=OIP.vG621err7P7NikXpKsELSgHaEK&pid=Api&P=0&h=180',
          'fees': '80',
        },
      ],
    },
  ];

  function getAvailableTimeSlots(selectedDate, isOnline) {
    const dayOfWeek = selectedDate.getDay()+1; // 0 = Sunday, 6 = Saturday

    // Find availability for the selected day
    const availability = dateAvailability.find(e => e.day === dayOfWeek);

    if (!availability) {
        return []; // No available slots for this day
    }
 return availability.onlineTimeSlots;
    // Return online or offline slots based on isOnline flag
    // return isOnline ? availability.onlineTimeSlots : availability.offlineTimeSlots;
}

  

  return (
    <Modal
   
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter" 
      style={{background:'transparent'}}
      centered
      id='modelContainer'
    >
      <Modal.Header closeButton>
        <Modal.Title className="contained-modal-title-vcenter" id='modelHeader'>
              Schedule Date and Time
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="modelBody">
           
      
      <div style={{ display: "flex", justifyContent: "space-evenly", gap: 30 }}>
      {/* Date Selection */}
      <div style={{ display: "flex", flexDirection: "column", gap: 25, width: 300, position: "relative" }}>
        <h4 id="selectDate">Select Date</h4>
        <DatePicker
          id="timePicker"
          selected={selectedDate}
          minDate={new Date()}
          filterDate={filterDate}
          onChange={(date) => {setSelectedDate(date);
            const data = getAvailableTimeSlots(date, online);
            setDataFilter(data);
             console.log(data);
           

          }}
          
          customInput={
            <Button variant="outline-dark" className="w-full sm:w-auto" id="timePick">
              <p className="text-center w-full sm:w-auto">
                {selectedDate ? selectedDate.toLocaleDateString() : "Pick Date"}
              </p>
              <CalendarMonthIcon />
            </Button>
          }
        />
      </div>

      {/* <div>
      <h4 id="selectType">Select Appointment Type</h4><br/>
      <div className="flex gap-4">
      <Button
  variant={online ? "success" : "outline-success"}
  className="d-flex align-items-center gap-2"
  onClick={handleOnline}
>
  <RiVideoOnLine size={20} /> Online
</Button>

<Button
  variant={offline ? "success" : "outline-success"}
  className="d-flex align-items-center gap-2"
  onClick={handleOffline}
>
  <RiVideoOffLine size={20} /> Offline
</Button>
      </div>
      </div> */}

<div style={{ display: "flex", flexDirection: "row", gap: 5, marginLeft: "5px", flexWrap: "wrap" }}>
        <h4 style={{ width: "100%" }} id="selectTime">
          Select A Time Slot
        </h4>

        {dataFilter.length === 0 ? (
  <p>No slots available</p>
) : (
  dataFilter.map((item) => (
    <div
      key={item.time}
      style={{ alignSelf: "center", display: "flex", flexDirection: "column" }}
    >
      <Button
        variant={selectedTime === item.time ? "primary" : "outline-primary"}
        id="DocSlot"
        onClick={() => handleTimeSelection(item.time)}
      >
        {item.time}
      </Button>
    </div>
  ))    
)}
      </div>
      

    </div>

    {/* <br/> */}
    {/* Time Slot Selection */}
    {/* <div style={{ display: "flex", flexDirection: "row", gap: 5, marginLeft: "5px", flexWrap: "wrap" }}>
        <h4 style={{ width: "100%" }} id="selectTime">
          Select A Time Slot
        </h4>

        {dataFilter.length === 0 ? (
  <p>No slots available</p>
) : (
  dataFilter.map((item) => (
    <div
      key={item.time}
      style={{ alignSelf: "center", display: "flex", flexDirection: "column" }}
    >
      <Button
        variant={selectedTime === item.time ? "primary" : "outline-primary"}
        id="DocSlot"
        onClick={() => handleTimeSelection(item.time)}
      >
        {item.time}
      </Button>
    </div>
  ))    
)}
      </div> */}
      {/* <br/> */}
       
        
       
      </Modal.Body>
      <Modal.Footer>
      {/* <Button variant="outline-dark" style={{ borderRadius: '20px',marginTop:'25px',padding:'12px',fontSize:'20px' }}  >Book Slot</Button> */}
      {/* {!schedul ? ( */}
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button id="makeAppoint" variant="outline-dark" style={{ borderRadius: '20px' }}  onClick={() => {setModalShow(true);console.log(selectedDate+"  "+selectedTime);}}>Make Appointment</Button>
                     
                   </div>
              {/* // ) : null} */}
      <UserDataModel date={selectedDate} time={selectedTime}
      show={modalShow}
      onHide={() => setModalShow(false)}/>
      </Modal.Footer>
      
    </Modal>
    
  );
}

const handleSubmit = (event) => {
  event.preventDefault(); // Prevents the default page reload
 console.log("hello");

};


function ServiceType(props){

  const[vertModel,setVertModel]=useState(false);
  const[HosModel,setHosModel]=useState(false);

  return(
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    style={{background:'transparent'}}
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title className="contained-modal-title-vcenter" id='BookingHeader'> 
         Select ServiceType
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
  

  
    <div className="Sections">
          <div className="doctor" id='servButton'>
               <Button className="dept" id='servButton'  
               onClick={() => {setVertModel(true);}}
  //              sx={{
  //   backgroundColor: Color.Primary,// Custom color
  //   color: '#fff', // Text color
  //   '&:hover': {
  //     backgroundColor: '#8e93c7', // Hover color
  //   },
  // }}
  >
                    {/* <MedicationOutlinedIcon sx={{ fontSize: 100 }} id='lawIcon' /> */}
                    
                     <h4 className="deptName" id='but' >Online</h4>
                </Button>
          </div>
          <div className="lawyer" >
             <Button className="dept" id='lawServ' 
            //  sx={{ backgroundColor: '#7680e9',   color: '#fff',  '&:hover': { backgroundColor: '#8e93c7', },}} 
            >
                 {/* <GavelRoundedIcon sx={{ fontSize: 100 }} id='lawIcon'/> */}
                <h4 className="deptName" id='but' onClick={() => {setHosModel(true);}}>Offline</h4>
             </Button>
          </div>
      </div>
       <MyVerticallyCenteredModal
        show={vertModel}
        onHide={() => setVertModel(false)}
      />
      <HospitalModel 
      show={HosModel}
      onHide={()=>setHosModel(false)}/>
      </Modal.Body>
  </Modal>
  )
}




function HospitalModel(props) {
  const navigate = useNavigate();
   const time=props.time;
   const date=props.date;

   const[vertModel,setVertModel]=useState(false);

   const [selectedHospital, setSelectedHospital] = useState(null);
   const [open, setOpen] = useState(false);
 
   const handleOpen = (hospital) => {
     setSelectedHospital(hospital);
     setOpen(true);
     setVertModel(true);
   };
 
   const handleClose = () => {
     setOpen(false);
     setSelectedHospital(null);
   };

  // const data = [
  //   { key:1,time: "11AM - 12PM" },
  //   { key:2,time: "1PM - 2PM" },
  //   { key:2,time: "2PM - 3PM" },
  //   { key:2,time: "3PM - 4PM" },
  //   { key:2,time: "5PM - 6PM" },
  //   { key:2,time: "6PM - 7PM" },
  //   { key:2,time: "8PM - 9PM" },
  //   { key:2,time: "9PM - 10PM" },
  //   { key:2,time: "10PM - 11PM" },
  // ];

  const hospitalList = [
    {
      'hospital': 'Government Hospital',
      'address': 'Chennai Bypass Road , Ariyamangalam Area, Old Palpannai, Tiruchirappalli, Tamil Nadu, 620010',
      'image': 'https://tse3.mm.bing.net/th?id=OIP.VZPscNUsvUH57iUCjh2QKwHaDj&pid=Api&P=0&h=180',
      'fees': '10',
    },
    {
      'hospital': 'Krishna Hospital',
      'address': 'Chennai Bypass Road , Ariyamangalam Area, Old Palpannai, Tiruchirappalli, Tamil Nadu, 620010',
      'image': 'https://tse3.mm.bing.net/th?id=OIP.HtRM62gzrScL9qAS5J2FjwHaDe&pid=Api&P=0&h=180',
      'fees': '80',
    },
    {
      'hospital': 'Apollo Hospital',
      'address': 'Chennai Bypass Road , Ariyamangalam Area, Old Palpannai, Tiruchirappalli, Tamil Nadu, 620010',
      'image': 'https://cdn.apollohospitals.com/dev-apollohospitals/2022/08/Apollo-Gurgaon-Hospital-1024x481.jpg',
      'fees': '100',
    },
    {
      'hospital': 'Government Hospital',
      'address': 'Chennai Bypass Road , Ariyamangalam Area, Old Palpannai, Tiruchirappalli, Tamil Nadu, 620010',
      'image': 'https://tse3.mm.bing.net/th?id=OIP.VZPscNUsvUH57iUCjh2QKwHaDj&pid=Api&P=0&h=180',
      'fees': '10',
    },
    {
      'hospital': 'Krishna Hospital',
      'address': 'Chennai Bypass Road , Ariyamangalam Area, Old Palpannai, Tiruchirappalli, Tamil Nadu, 620010',
      'image': 'https://tse3.mm.bing.net/th?id=OIP.HtRM62gzrScL9qAS5J2FjwHaDe&pid=Api&P=0&h=180',
      'fees': '80',
    },
    {
      'hospital': 'Apollo Hospital',
      'address': 'Chennai Bypass Road , Ariyamangalam Area, Old Palpannai, Tiruchirappalli, Tamil Nadu, 620010',
      'image': 'https://cdn.apollohospitals.com/dev-apollohospitals/2022/08/Apollo-Gurgaon-Hospital-1024x481.jpg',
      'fees': '100',
    }, {
      'hospital': 'Government Hospital',
      'address': 'Chennai Bypass Road , Ariyamangalam Area, Old Palpannai, Tiruchirappalli, Tamil Nadu, 620010',
      'image': 'https://tse3.mm.bing.net/th?id=OIP.VZPscNUsvUH57iUCjh2QKwHaDj&pid=Api&P=0&h=180',
      'fees': '10',
    },
    {
      'hospital': 'Krishna Hospital',
      'address': 'Chennai Bypass Road , Ariyamangalam Area, Old Palpannai, Tiruchirappalli, Tamil Nadu, 620010',
      'image': 'https://tse3.mm.bing.net/th?id=OIP.HtRM62gzrScL9qAS5J2FjwHaDe&pid=Api&P=0&h=180',
      'fees': '80',
    },
    {
      'hospital': 'Apollo Hospital',
      'address': 'Chennai Bypass Road , Ariyamangalam Area, Old Palpannai, Tiruchirappalli, Tamil Nadu, 620010',
      'image': 'https://cdn.apollohospitals.com/dev-apollohospitals/2022/08/Apollo-Gurgaon-Hospital-1024x481.jpg',
      'fees': '100',
    },
  ];

  const[name,setName]=useState('');
  const[Age,setAge]=useState('');
  const [selectedGender, setSelectedGender] = useState('Gender');

  const handleSelectChange = (e) => {
      setSelectedGender(e.target.value);
  };  

  const BookAppointment = () => {
    console.log("Form Data:", { name, Age, selectedGender,time,date });
    alert("Appointment Booked Successfully!");

    // Redirect to another page after 2 seconds
    setTimeout(() => {
      navigate("/Schedules"); // Change "/confirmation" to your target route
    }, 200);
  
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      style={{background:'transparent'}}
      centered
    >
      <Modal.Header closeButton style={{
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: "white",
      borderBottom: "1px solid #dee2e6"
    }}>
        <Modal.Title className="contained-modal-title-vcenter" id='BookingHeader'> 
        Select Hospital
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Container>
      <Grid container spacing={3}>
        {hospitalList.map((hospital, index) => (
          <Grid item xs={12} sm={8} md={4} key={index}>
            <Card onClick={() => handleOpen(hospital)} sx={{ cursor: "pointer", transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}>
              <CardMedia component="img" height="140" image={hospital.image} alt={hospital.hospital} />
              <CardContent>
                <Typography variant="h6">{hospital.hospital}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {hospital.address}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
                  Fees: ₹{hospital.fees}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for Hospital Details */}
      <Modal open={open} onClose={handleClose} aria-labelledby="hospital-details-modal" centered>
        <div style={{ background: "white", padding: "20px", margin: "auto", width: "50%", borderRadius: "10px", textAlign: "center" }}>
          {selectedHospital && (
            <>
              <Typography variant="h5" id="hospital-details-modal">{selectedHospital.hospital}</Typography>
              <img src={selectedHospital.image} alt={selectedHospital.hospital} style={{ width: "100%", height: "auto", marginTop: "10px", borderRadius: "8px" }} />
              <Typography variant="body1" sx={{ mt: 2 }}>{selectedHospital.address}</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>Fees: ₹{selectedHospital.fees}</Typography>
            </>
          )}
        </div>
      </Modal>
    </Container>
    <MyVerticallyCenteredModal
        show={vertModel}
        onHide={() => setVertModel(false)}
      />
      </Modal.Body>
     
 
    </Modal>
    
  );
}

const symptomsOptions = [
  { name: 'HeadAche', id: 1 },
  { name: 'LegPain', id: 2 },
  { name: 'BackPain', id: 3 },
  { name: 'StomachPain', id: 4 },
  { name: 'Cold', id: 5 },
  
];

function UserDataModel(props) {
  const navigate = useNavigate();
   const time=props.time;
   const date=props.date;
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
  

  const[name,setName]=useState('');
  const[Age,setAge]=useState('');
  const [selectedGender, setSelectedGender] = useState('Gender');
  const [Phone, setPhone] = useState('');
  const[vertModel,setVertModel]=useState(false);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const[otps,setopts]=useState('');
  
  const handleSelectChange = (e) => {
      setSelectedGender(e.target.value);
  };  

  const onSelect = (selectedList) => {
    setSelectedSymptoms(selectedList);
  };

  const onRemove = (selectedList) => {
    setSelectedSymptoms(selectedList);
  };

  const BookAppointment = () => {
  
    function generateOtp() {
      return Math.floor(1000 + Math.random() * 9000).toString();
    }
    
    const otp = generateOtp();
    console.log('Your OTP is:', otp);
    setopts(otp);
    setVertModel(true);
    console.log("Form Data:", { name, Age, selectedGender,time,date });
    // alert("Appointment Booked Successfully!");

    // Redirect to another page after 2 seconds
    setTimeout(() => {
      // navigate("/Schedules");   // Change "/confirmation" to your target route
    }, 200);
  
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedHospital(null);
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
        <Modal.Title className="contained-modal-title-vcenter" id='BookingHeader'> 
   Enter Your Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label id='BookingSubtitle'>Name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label id='BookingSubtitle'>Age</Form.Label>
              <Form.Control
                type="email"
                value={Age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter Age"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label id='BookingSubtitle'>Phone</Form.Label>
              <Form.Control
                type="text"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phonenumber"
                autoFocus
              />
            </Form.Group>
            <Form.Group>
            <Form.Label id='BookingSubtitle'>Gender</Form.Label>
            <Form.Select value={selectedGender} onChange={handleSelectChange}>
               
                    <option> Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                   
                </Form.Select>
                </Form.Group>
<br/>
       {/* <Form.Group>
        <Form.Label id="BookingSubtitle">Symptoms</Form.Label>
        <Form.Control
          as="select"
          multiple
          value={selectedSymptoms}
          onChange={handleSelectSymptom}
        >
          <option value="HeadAche">HeadAche</option>
          <option value="LegPain">LegPain</option>
          <option value="BackPain">BackPain</option>
          <option value="StomachPain">StomachPain</option>
          <option value="Cold">Cold</option>
        </Form.Control>
      </Form.Group> */}
      <Form.Group >
            <Form.Label id='BookingSubtitle'>Symptoms</Form.Label>
            <Multiselect
            style={{marginBottom:20}}
              options={symptomsOptions}
              onSelect={onSelect}
              onRemove={onRemove}
              displayValue="name"
              placeholder="Select Symptoms"
              showCheckbox={true}
              closeOnSelect={false}
            />
          </Form.Group>
                
                <div>
                <Button variant="outline-success" 
                //  href="/Schedules" 
                 onClick={BookAppointment} style={{alignItems:'center' , borderRadius: '20px',marginTop:'20px',padding:'10px',fontSize:'15px' }}  >Complete Booking</Button>
                </div>          
          </Form>
          <OTPModel
        show={vertModel}
        otp={otps}
        onHide={() => setVertModel(false)}
      />
      </Modal.Body>
     
 
    </Modal>
    
  );
}




function OTPModel(props) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const otps=props.otp;

  const handleOtpChange = (value) => {
    setOtp(value);
    console.log('Current OTP:', value);

    if (value.length === 4) {
      // Perform OTP verification here
      if (value === otps) {
        alert('OTP verified successfully!');
        navigate("/Schedules");
      } else {
        alert('Invalid OTP. Please try again.');
      }
    }
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
        <Modal.Title className="contained-modal-title-vcenter" id='BookingHeader'> 
   Enter OTP
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            
      <div className="flex flex-col items-center justify-center space-x-4 space-y-6">
      <h1 className="text-2xl font-bold">Enter OTP</h1>
      <OtpInput length={4} onChange={handleOtpChange} />
      <button
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        
      >
        Submit
      </button>
    </div>
      </Modal.Body>
     
 
    </Modal>
    
  );
}

const OtpInput = ({ length = 4, onChange,props }) => {
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return; // only allow one digit

    const newOtp = inputs.current.map(input => input.value).join('');
    onChange(newOtp);

    if (value && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !inputs.current[index].value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex space-x-2">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={el => inputs.current[i] = el}
          type="text"
          maxLength={1}
          className="w-12 h-12 text-center border rounded text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={e => handleChange(e, i)}
          onKeyDown={e => handleKeyDown(e, i)}
        />
      ))}
    </div>
  );
};



export default Appointment;
