import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StaffNavbar from './StaffNavbar';
import EmployeePopup from './EmployeePopup';

export default function UpdateEmployee() {
  const [searchQuery, setSearchQuery] = useState('');
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    // Fetch the last 10 newly created employees by default
    fetchNewEmployees();
  }, []);

  const fetchNewEmployees = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/new_employees/');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching new employees:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/search_employee/?q=${searchQuery}`);
      setEmployees(response.data);
    } catch (error) {
      console.error('Error searching employees:', error);
    }
  };

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    setPopupVisible(true); // Show the popup when an employee is clicked
  };

  const refreshEmployeeList = async () => {
    await fetchNewEmployees();
  };

  return (
    <div>
      <StaffNavbar />
      <div className="searchContainer">
        <input type="search" id="input" placeholder="Search by Name, Email, or Phone Number" 
        value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button id="button" onClick={handleSearch}>Search</button>
      </div>
      <div className="staffList">
        <div className="listDisplay">
          <ol>
          
            {employees.map(employee => (
             
              <li id='list' key={employee.id} onClick={() => handleEmployeeClick(employee)}>
                
                       <span style={{ cursor: 'pointer'}}>{employee.full_name}</span>
                       <span>{employee.email}</span>
                       <span>{employee.profession}</span>
                       <span>{employee.department}</span>
                       
                 
              </li>
            ))}
          </ol>
        </div>
      </div>
      
      {
      popupVisible && 
      <EmployeePopup 
      trigger={popupVisible} 
      setTrigger={setPopupVisible} 
      selectedEmployee={selectedEmployee}
      refreshEmployeeList={refreshEmployeeList}
      />}
    </div>
  );
}
