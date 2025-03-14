import React, { useEffect, useState } from "react";
// import { useEffect } from "react";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import axios from "axios";
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const[loading,setloading]=useState(true);
  const [error, setError] = useState(null);
  const[lattitude,setLattitude]=useState(null);
  const[longitude,setLongitude]=useState(null);
  const[locate,setLocate]=useState(null);
    const[country,setCountry]=useState(null);

  

useEffect(() => {
  
    const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
             setLattitude(position.coords.latitude);
             setLongitude(position.coords.longitude);
             fetchData(lattitude,longitude);
         
            },
            (error) => {
              setError(error.message);
            }
          );
      
        } else {
          setError("Geolocation is not supported by this browser.");
        }
      };
  getLocation();

  


})
  const fetchData= async(lattitude,longitude) =>{
    try {
    //     await getLocation();
    //   setloading(true);
    const lat=location.latitude;
    const long=location.longitude;
  
      // const response = await axios.get(`https://mapquestapi.com/geocoding/v1/reverse?key=Cmjtd|luur2108n1,7w=o5-gz8a&location=10.7838746,78.6879327&outFormat=json&thumbMaps=false`);
      const response = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat} &lon=${long}&apiKey=03b2251cf0d74e75bb66c12087d75ccd`);
      
     
      const loc=response.data.features[0].properties.formatted;
      const con=response.data.features[0].properties.county;
      const states=response.data.features[0].properties.city;
      setLocate(loc);
      setCountry(states);
      console.log(loc);
      //  console.log(con);
      //  console.log(states);
      //  setLocate(loc);
      //  setCountry(con);
      //  setStates(states);
  
      // const zone=response.data.results[0].locations[0].adminArea6;
      // const dist=response.data.results[0].locations[0].adminArea5;
      // const state=response.data.results[0].locations[0].adminArea3;
     
     
      //  console.log(zone);
      //  console.log(dist);
      //  console.log(state);
      //  setCountry(con);
      //  setStates(states);
  
       setloading(false);
    
      // console.log(sortedData);
    } catch (error) {
      console.error('Error fetching data:', error);
     
    } finally {
      // console.log("finally");
       // Stop loading  after data fetch
    }
  }



  return (
    <div>
        {/* <LinearProgress/> */}
      {/* <button onClick={getLocation}>Get My Location</button>
      <button onClick={fetchData}>Get My data</button> */}
      
      
      {loading ?(
        <p>   <Box sx={{ width: 180 }}>
       
        <Skeleton animation="wave" />
        
      </Box></p>
      ) :(
        <p>
         Longitude: {country}
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}


    </div>
  );
};

export default LocationComponent;
