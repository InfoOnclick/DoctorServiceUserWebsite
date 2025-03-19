import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RiVideoOnLine, RiVideoOffLine } from "react-icons/ri";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const timeSlots = [
  { key: 1, date: "2025-03-17", time: "11AM - 12PM", hospital: ["Krishna Hospital", "Cauvery Hospital"], online: true },
  { key: 2, date: "2025-03-17", time: "1PM - 2PM", hospital: ["Cauvery Hospital", "Apollo Hospital"], online: true },
  { key: 3, date: "2025-03-18", time: "2PM - 3PM", hospital: ["Krishna Hospital", "Apollo Hospital"], online: false },
  { key: 4, date: "2025-03-18", time: "3PM - 4PM", hospital: ["Krishna Hospital", "Cauvery Hospital"], online: false },
  { key: 5, date: "2025-03-19", time: "5PM - 6PM", hospital: ["Krishna Hospital", "Cauvery Hospital"], online: true },
];

const BookingSystem = () => {
  const [online, setOnline] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Toggle Online/Offline
  const toggleOnline = () => setOnline((prev) => !prev);

  // Handle Time Selection
  const handleTimeSelection = (time) => setSelectedTime(time);

  // Format selected date to match data
  const formattedDate = selectedDate ? selectedDate.toISOString().split("T")[0] : null;

  // Filter Slots based on Date & Online Status
  const filteredSlots = timeSlots.filter(
    (slot) => (!selectedDate || slot.date === formattedDate) && slot.online === online
  );

  // Get Selected Slot Data
  const selectedSlot = timeSlots.find((slot) => slot.time === selectedTime);

  return (
    <div>
      {/* Online/Offline Toggle Buttons */}
      <div className="flex gap-4">
        <Button
          variant={online ? "success" : "outline-success"}
          className="d-flex align-items-center gap-2"
          onClick={toggleOnline}
        >
          <RiVideoOnLine size={20} /> Online
        </Button>

        <Button
          variant={!online ? "success" : "outline-success"}
          className="d-flex align-items-center gap-2"
          onClick={toggleOnline}
        >
          <RiVideoOffLine size={20} /> Offline
        </Button>
      </div>

      <br />

      <div style={{ display: "flex", justifyContent: "space-evenly", gap: 30 }}>
        {/* Date Selection */}
        <div style={{ display: "flex", flexDirection: "column", gap: 25, width: 300 }}>
          <h4>Select Date</h4>
          <DatePicker
            selected={selectedDate}
            minDate={new Date()}
            onChange={(date) => setSelectedDate(date)}
            customInput={
              <Button variant="outline-dark" className="w-full sm:w-auto">
                <p className="text-center w-full sm:w-auto">
                  {selectedDate ? selectedDate.toLocaleDateString() : "Pick Date"}
                </p>
                <CalendarMonthIcon />
              </Button>
            }
          />
        </div>

        {/* Time Slot Selection */}
        <div style={{ display: "flex", flexDirection: "row", gap: 5, marginLeft: "5px", flexWrap: "wrap" }}>
          <h4 style={{ width: "100%" }}>Select A Time Slot</h4>

          {filteredSlots.length > 0 ? (
            filteredSlots.map((item) => (
              <div key={item.key} style={{ alignSelf: "center", display: "flex", flexDirection: "column" }}>
                <Button
                  variant={selectedTime === item.time ? "primary" : "outline-primary"}
                  id="DocSlot"
                  onClick={() => handleTimeSelection(item.time)}
                >
                  {item.time}
                </Button>
              </div>
            ))
          ) : (
            <p>No available slots for the selected date and mode.</p>
          )}
        </div>
      </div>

      {/* Display Selected Slot Hospitals */}
      {selectedSlot && (
        <div className="mt-4">
          <h5>Hospitals for {selectedSlot.time}</h5>
          <ul>
            <li>{selectedSlot.hospital[0]}</li> {/* Display only the first hospital */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookingSystem;
