import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import ReceptionistNavbar from './ReceptionistNavbar';

export default function ReceptionistSearch() {
const [searchQuery, setSearchQuery] = useState('');
const [patients,setPatients] = useState([])

useEffect(() => {
  // Fetch the last 10 newly created patients by default
  fetchNewPatients();
 
}, []);


  const fetchNewPatients = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/new_patient/');
      setPatients(response.data);
      
    } catch (error) {
      console.error('Error fetching new patients:', error);
    }
  };

 
  
  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/search_patient/?q=${searchQuery}`);
      setPatients(response.data);
    } catch (error) {
      console.error('Error searching patients:', error);
    }
  };

  return (
    <div className="receptionistSearch">
      <ReceptionistNavbar/>
      <div className="receptionInputs">
      <input type="search" id="input" placeholder="Search by FirstName, Email, or Phone Number" 
        value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button id="button" onClick={handleSearch}>Search</button>
      </div>
      
      <div className="receptionistdisplay">
      <ol>
  <li id="list">
    <span>FirstName </span>
    <span>SurName </span>
    <span>Email</span>
    <span>Phone Number</span>
    {/* Add more title spans if needed */}
  </li>
  {patients.map((patient, index) => (
    <li id="list" key={patient.id}>
      <span>{index + 1}</span>
      <span>{patient.first_name}</span>
      <span>{patient.sur_name}</span>
      <span>{patient.email}</span>
      <span>{patient.phone_number}</span>
      {/* Add more spans for additional patient details */}
    </li>
  ))}
</ol>



      </div>
    </div>
  )
}
