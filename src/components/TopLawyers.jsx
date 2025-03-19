import React, { useContext ,useRef,useEffect} from 'react'
import { Lawyerss } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import './css/Services.css'
const TopLawyers = () => {

  const navigate = useNavigate()
  const {Lawyerss} = useContext(AppContext)
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      const handleWheelScroll = (event) => {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY * 2; // Adjust speed
      };

      scrollContainer.addEventListener("wheel", handleWheelScroll);

      return () => {
        scrollContainer.removeEventListener("wheel", handleWheelScroll);
      };
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10" id="Topdoc2">
      <h1 className='text-3xl font-medium'>Top Lawyers to Book</h1>
      <p className='text-sm w-1/3 text-center' id="Topdoc1">Simply browse through our extensive list of trusted Lawyers.</p>
      
      <div className="relative w-full">
      <div ref={scrollRef} className="flex overflow-x-auto gap-4 pt-5 px-3 sm:px-0 scrollbar-hide" id="TopdocScroll">
        {Lawyerss.slice(0,10).map((item,index)=>(
          <div onClick={()=>{navigate(`/lawyerAppointment/${item._id}`); scrollTo(0,0)}}  className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 min-w-[250px] sm:min-w-[200px] flex-shrink-0" key={index}>
            <img className='bg-100 w-full h-40 object-cover' src={item.image} alt=""  style={{backgroundColor:"#d2cff1"}} />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
              <p className="w-2 h-2 bg-green-500 rounded-full"></p>
              <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      </div>

      <button
        onClick={() => {
          navigate("/allLawyers");
          scrollTo(0, 0);
        }}
        className="bg-100 text-black px-12 py-3 rounded-full mt-10 font-medium"
        style={{ backgroundColor: "#d2cff1" }}
      >
        More
      </button>
     
    </div>
  )
}

export default TopLawyers
