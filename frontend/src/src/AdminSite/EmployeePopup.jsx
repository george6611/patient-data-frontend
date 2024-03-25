import React, { useState } from 'react';
import axios from 'axios';

export default function EmployeePopup({ trigger, setTrigger, selectedEmployee,refreshEmployeeList }) {
  const [updatedEmployee, setUpdatedEmployee] = useState(selectedEmployee || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
   e.preventDefault();
   try {
     const response = await axios.put(`http://127.0.0.1:8000/update_employee/${selectedEmployee.id}/`, updatedEmployee);
     console.log("Updated employee details:", response.data);
     // Close the popup after successful submission
     setTrigger(false);
     // You may want to fetch updated employee data or update the state in the parent component
     refreshEmployeeList();
   } catch (error) {
     console.error('Error updating employee:', error);
   }
 };
 

  return (trigger && selectedEmployee) ? (
    <div className="popup">
      <h1>Update Employee Details</h1>
      <div className="form">

      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">Full Name:</label> <br/>
          <input type="text" id="full_name" name="full_name" value={updatedEmployee.full_name || ''} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label> <br/>
          <input type="email" id="email" name="email" value={updatedEmployee.email || ''} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="profession">Profession:</label> <br/>
          <input type="text" id="profession" name="profession" value={updatedEmployee.profession || ''} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="department">Department:</label> <br/>
          <input type="text" id="department" name="department" value={updatedEmployee.department || ''} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="position">Position:</label> <br/>
          <input type="text" id="position" name="position" value={updatedEmployee.position || ''} onChange={handleChange} />
        </div> <br/>
        <button type="submit" id='button'>Update</button>
        <button className='close-btn' id='button' onClick={() => setTrigger(false)}>Close</button>
      </form>
      </div>
    </div>
  ) : null;
}
