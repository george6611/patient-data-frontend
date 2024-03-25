import React from 'react';
import { useHistory } from 'react-router-dom';

export default function EmployeePopup({ employee }) {
  const history = useHistory();

  const handleEditEmployee = () => {
    history.push(`/edit-employee/${employee.id}`);
  };

  return (
    <div>
      <h2>Edit Employee Details</h2>
      <p>Name: {employee.full_name}</p>
      <p>Email: {employee.email}</p>
      <p>Phone Number: {employee.phone_number}</p>
      {/* Add other details to display */}
      <button onClick={handleEditEmployee}>Edit Employee</button>
    </div>
  );
}
