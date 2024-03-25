import React, { useState } from 'react';
import axios from 'axios';
import StaffNavbar from './StaffNavbar';

export default function NewEmployee() {
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    surname: '', 
    email: '',
    phoneNumber: '',
    profession: '',
    department: '',
    position: '',
    dateOfRecruitment: '',
    licenseInfo: '',
    userType: 'employee' // Add userType field with default value
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData({
      ...employeeData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/create_employee/', employeeData);
      console.log(response.data); // handle success
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return (
    <div className="newEmployeeHome">
      <StaffNavbar />
      <form onSubmit={handleSubmit}>
        <div className="staffInfo">
          <input type="text" id='input' name="firstName" placeholder="Enter the first name" value={employeeData.firstName} onChange={handleInputChange} />
          <input type="text" id='input' name="lastName" placeholder="Enter the last name" value={employeeData.lastName} onChange={handleInputChange} />
          <input type="text" id='input' name="surname" placeholder="Enter the surname" value={employeeData.surname} onChange={handleInputChange} /> 
          <input type="email" id='input' name="email" placeholder="Email" value={employeeData.email} onChange={handleInputChange} required  />
          <input type="text" id='input' name="phoneNumber" placeholder="Phone Number" value={employeeData.phoneNumber} onChange={handleInputChange} required />
          <input type="text" id='input' name="profession" placeholder="Profession" value={employeeData.profession} onChange={handleInputChange} required />
          <input type="text" id='input' name="department" placeholder="Department" value={employeeData.department} onChange={handleInputChange}  required />
          <input type="text" id='input' name="position" placeholder="Position Held" value={employeeData.position} onChange={handleInputChange}  required />
          <input type="date" id='input' name="dateOfRecruitment" value={employeeData.dateOfRecruitment} onChange={handleInputChange}  required />
          <input type="text" id='input' name="licenseInfo" placeholder="License number/Info" value={employeeData.licenseInfo} onChange={handleInputChange} required />
          {/* <input type="password" id='input' name="password" placeholder="Password" value={employeeData.password} onChange={handleInputChange} required /> */}
          <input type="hidden" id='input' name="userType" value={employeeData.userType} /> {/* Add userType field with default value */}
        </div>
        <div className="staffButton">
          <button type="submit" id="button">Create</button>
        </div>
      </form>
      <hr id="hr" />
    </div>
  );
}
