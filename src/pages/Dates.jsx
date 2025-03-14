// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Dates = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   // Function to disable specific dates
//   const isDateDisabled = (date) => {
//     const today = new Date();
//     const day = date.getDay(); // 0 = Sunday, 6 = Saturday

//     // Example conditions:
//     // - Disable past dates
//     // - Disable weekends (Saturday and Sunday)
//     // - Disable a specific date (e.g., June 15, 2024)
//     return day !== 0 && day !== 6; 
//   };

//   return (
//     <DatePicker
//       selected={selectedDate}
//       onChange={(date) => setSelectedDate(date)}
//       filterDate={isDateDisabled} // Disable dates based on the function
//       dateFormat="yyyy/MM/dd"
//       placeholderText="Select a date"
//     />
//   );
// };

// export default Dates;


import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const Dates = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState();

  const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
  ];


  // JSON data with allowed dates and days
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
        const today = new Date();
        const day = date.getDay(); 
    
     
        return day !== 0 && day !== 6 && allowedDates.includes(date.setHours(0, 0, 0, 0)); 

  };


  return (
    <div>
      <h3>Select a Date</h3>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        filterDate={filterDate} // Only allow specific dates
        placeholderText="Select a valid date"
      />

<ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx  ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default Dates;
