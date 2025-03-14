import React from 'react';
import './css/Services.css';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import { Button } from '@mui/material';
import { Color } from '../Colors/Color';
export default function Services() {
  return (
    <div className="container">
      <p className="heading" id='serHead'>Select the Services you want</p>
      <div className="Sections">
          <div className="doctor" id='servButton'>
               <Button className="dept" id='servButton' href="/Home" variant="contained" sx={{
    backgroundColor: Color.Primary,// Custom color
    color: '#fff', // Text color
    '&:hover': {
      backgroundColor: '#8e93c7', // Hover color
    },
  }}>
                    <MedicationOutlinedIcon sx={{ fontSize: 100 }} id='lawIcon' />
                     <h4 className="deptName" id='but'>Doctor</h4>
                </Button>
          </div>
          <div className="lawyer" >
             <Button className="dept" id='lawServ' variant="contained" sx={{ backgroundColor: '#7680e9',   color: '#fff',  '&:hover': { backgroundColor: '#8e93c7', },}} href="/lawyers">
                 <GavelRoundedIcon sx={{ fontSize: 100 }} id='lawIcon'/>
                <h4 className="deptName" id='but'>Lawyer</h4>
             </Button>
          </div>
      </div>
    </div>
  )
}
