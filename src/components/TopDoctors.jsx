import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "./css/Services.css";
import { useParams } from "react-router-dom";
import doc1 from '../assets/doc1.png';
import doc2 from '../assets/doc2.png';

import hospital from '../assets/hospital.jpg';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors,Lawyerss } = useContext(AppContext);
  const scrollRef = useRef(null);

  const hospitals = [
    { id: 1, name: "City Hospital", location: "New York, USA" },
    { id: 2, name: "Sunrise Medical", location: "Los Angeles, USA" },
    { id: 3, name: "Green Valley Clinic", location: "Chicago, USA" },
    { id: 4, name: "Downtown Healthcare", location: "Houston, USA" },
    { id: 5, name: "City Hospital", location: "New York, USA" },
    { id: 6, name: "Sunrise Medical", location: "Los Angeles, USA" },
    { id: 7, name: "City Hospital", location: "New York, USA" },
    { id: 8, name: "Sunrise Medical", location: "Los Angeles, USA" },
    { id: 9, name: "Green Valley Clinic", location: "Chicago, USA" },
    { id: 10, name: "Downtown Healthcare", location: "Houston, USA" },
  ];

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
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="text-sm w-1/3 text-center" id="Topdoc1">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Horizontal Scroll Container */}
      <div className="relative w-full">
        <div ref={scrollRef} className="flex overflow-x-auto gap-4 pt-5 px-3 sm:px-0 scrollbar-hide" id="TopdocScroll">
          {doctors.slice(0, 10).map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                // navigate("/doctors");
                scrollTo(0, 0);
              }}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 min-w-[250px] sm:min-w-[200px] flex-shrink-0"
              key={index}
            >
              <img className="bg-100 w-full h-40 object-cover" src={item.image} alt="" style={{ backgroundColor: "#d2cff1" }} />
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

      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-100 text-black px-12 py-3 rounded-full mt-10 font-medium"
        style={{ backgroundColor: "#d2cff1" }}
      >
        More
      </button>
    </div>
  );
};



 const TopOnes=({category})=>{
  // const {category}=useParams();
  const navigate = useNavigate();
  const { doctors,Lawyerss } = useContext(AppContext);
  const scrollRef = useRef(null);

  const hospitals = [
    { id: 1, name: "City Hospital", location: "New York, USA" },
    { id: 2, name: "Sunrise Medical", location: "Los Angeles, USA" },
    { id: 3, name: "Green Valley Clinic", location: "Chicago, USA" },
    { id: 4, name: "Downtown Healthcare", location: "Houston, USA" },
    { id: 5, name: "City Hospital", location: "New York, USA" },
    { id: 6, name: "Sunrise Medical", location: "Los Angeles, USA" },
    { id: 7, name: "City Hospital", location: "New York, USA" },
    { id: 8, name: "Sunrise Medical", location: "Los Angeles, USA" },
    { id: 9, name: "Green Valley Clinic", location: "Chicago, USA" },
    { id: 10, name: "Downtown Healthcare", location: "Houston, USA" },
  ];

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

  const handleNavigation = () => {
    const categoryParam = category === 'doctor' ? 'doctor' : 'lawyer';
    if (category === 'doctor') {
      navigate(`/appointment/${item._id}?category=${categoryParam}`);
    } else {
      navigate(`/lawyerAppointment/${item._id}?category=${categoryParam}`);
    }
  };

  return(
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10" id="Topdoc2">
    <h1 className="text-3xl font-medium">Top {category==='doctor'?'Doctors':'Lawyers'} to Book</h1>
    <p className="text-sm w-1/3 text-center" id="Topdoc1">
      Simply browse through our extensive list of trusted {category==='doctor'?'doctors':'lawyers'}.
    </p>

    {/* Horizontal Scroll Container */}
    <div className="relative w-full">
      <div ref={scrollRef} className="flex overflow-x-auto gap-4 pt-5 px-3 sm:px-0 scrollbar-hide" id="TopdocScroll">
        {(category==='doctor'?doctors:Lawyerss).slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              handleNavigation
              // navigate("/doctors");
              scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 min-w-[250px] sm:min-w-[200px] flex-shrink-0"
            key={index}
          >
            <img className="bg-100 w-full h-40 object-cover" src={item.image} alt="" style={{ backgroundColor: "#d2cff1" }} />
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

    <button
      onClick={() => {
        navigate("/doctors");
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

export default TopOnes;
