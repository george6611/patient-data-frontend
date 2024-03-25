import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  axios from 'axios'
import ReceptionistNavbar from './ReceptionistNavbar';

export default function CreatePatient() {
  const [patientData, setPatientData] = useState({
    firstName: '',
    surName: '',
    lastName: '',
    uniqueNumber:'',
    phoneNumber: '',
    email: '',
    physicalAddress: '',
    dob: '',
    
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPatientData({
      ...patientData,
      [name]: value
    });   

  };

  const handleSubmit = async (event) => {
    console.log(patientData)
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/create_patient/', patientData);
      console.log(response.data); // handle success
    } catch (error) {
      console.error('Submission failed:', error);
    }
  }; 

  return (
    <div className="createPatient">
    <ReceptionistNavbar/>
    <div className="patient">
      
      <form onSubmit={handleSubmit}>
        <div id='patientDetails'>
       <div className="patientDetails">
        
        <input type="text" id="input" name='firstName' placeholder="FirstName" value={patientData.firstName} onChange={handleInputChange} required/>
        <input type="text" id="input" name="surName" placeholder="SurName" value={patientData.surName} onChange={handleInputChange} />
        <input type="text" id="input" name="lastName" placeholder="LastName" value={patientData.lastName} onChange={handleInputChange}/>
        <input type="text" id="input" name="uniqueNumber" placeholder="Id/Birth Certifcate Number" value={patientData.uniqueNumber} onChange={handleInputChange} required/>
        <input type="text" id='input' name="phoneNumber" placeholder="Phone Number" value={patientData.phoneNumber} onChange={handleInputChange} required />
        <input type="text" id="input" name="email" placeholder="Email" value={patientData.email} onChange={handleInputChange} required/>
        <input type="text" id="input" name="physicalAddress" placeholder="Physical Address" value={patientData.physicalAddress} onChange={handleInputChange}/>
        <input type="date" id="input" name="dob" placeholder="Bate of Birth" value={patientData.dob} onChange={handleInputChange}/>
        
       </div>
       
         
            <button type="submit" id="button">Submit</button>
         
         <Link to="/search">
            <button id="button">Search</button>
         </Link>   
         <br />  
         </div>   
       </form>
       </div>
       
    </div>
  )
}
