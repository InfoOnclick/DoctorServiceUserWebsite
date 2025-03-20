import React, { useState } from "react";
import { Card, Button, Row, Col, Nav, Modal } from "react-bootstrap";
import doc from '../assets/doc7.png'
const scheduleData = [
  {
    id: 1,
    doctor: "Dr. Anastasya Syahid",
    specialty: "Dental Specialist",
    date: "Mon, July 29",
    time: "11:00AM - 12:00PM",
    status: "Upcoming",
    image: doc, // Replace with actual doctor image
  },
  {
    id: 2,
    doctor: "Dr. John Doe",
    specialty: "Cardiologist",
    date: "Wed, Aug 2",
    time: "3:00PM - 4:00PM",
    status: "Completed",
    image: doc,
  },
  {
    id: 3,
    doctor: "Dr. Sarah White",
    specialty: "Neurologist",
    date: "Fri, Aug 4",
    time: "10:00AM - 11:00AM",
    status: "Cancelled",
    image: doc,
  },
];

const MyVerticallyCenteredModal = ({ show, onHide }) => (
  <Modal show={show} onHide={onHide} centered>
    <Modal.Header closeButton>
      <Modal.Title>Reschedule Appointment</Modal.Title>
    </Modal.Header>
    <Modal.Body>Form to reschedule goes here...</Modal.Body>
  </Modal>
);

const ScheduleList = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [modalShow, setModalShow] = useState(false);

  // Filter schedules based on active tab
  const filteredSchedules = scheduleData.filter((item) => item.status === activeTab);

  return (
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

      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:'50px',borderBottom:'none'}}>
        <Row xs={1} md={3} className="g-2">
          {filteredSchedules.length > 0 ? (
            filteredSchedules.map((item) => (
              <Col key={item.id}>
                <Card>
                  <div style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
                    <Card.Img variant="top" src={item.image} style={{ height: 90, width: 120, borderRadius: "10px" }} />
                    <div style={{ marginLeft: "20px" }}>
                      <Card.Text style={{ fontWeight: "bold" }}>{item.doctor}</Card.Text>
                      <Card.Text>{item.specialty}</Card.Text>
                    </div>
                  </div>
                  <Card.Body>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: "#575de3",
                        padding: "6px 15px",
                        borderRadius: "10px",
                        color: "white",
                      }}
                    >
                      <p>{item.date}</p>
                      <p>{item.time}</p>
                    </div>
                    {activeTab === "Upcoming" && (
                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                        <Button variant="outline-dark" style={{ borderRadius: "20px" }} onClick={() => setModalShow(true)}>
                          Reschedule
                        </Button>
                        <Button variant="outline-dark" style={{ borderRadius: "20px" }}>Cancel</Button>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p style={{ textAlign: "center", marginTop: "20px" }}>No schedules found.</p>
          )}
        </Row>
      </div>

      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default ScheduleList;
