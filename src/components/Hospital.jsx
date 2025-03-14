import React from "react";
import doc1 from '../assets/doc1.png';
import doc2 from '../assets/doc2.png';

const hospitals = [
  { id: 1, name: "City Hospital", location: "New York, USA" },
  { id: 2, name: "Sunrise Medical", location: "Los Angeles, USA" },
  { id: 3, name: "Green Valley Clinic", location: "Chicago, USA" },
  { id: 4, name: "Downtown Healthcare", location: "Houston, USA" }
];

const HospitalList = () => {
  return (
    <div>
      <h2>List of Hospitals</h2>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id}>
            <div className="relative w-25">
            <div  className="flex overflow-x-auto gap-4 pt-5 px-3 sm:px-0 scrollbar-hide" id="TopdocScroll">
            <img className="bg-100 w-full h-40 object-cover" src={doc1} alt="" style={{ backgroundColor: "#d2cff1" }} />
            <strong>{hospital.name}</strong> - {hospital.location}
            </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default HospitalList;
