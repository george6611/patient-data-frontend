import React from 'react';
import StaffNavbar from './StaffNavbar';
import { Link } from 'react-router-dom';

export default function EmployeeRecords() {
  return (
    <div className="employeeRecords">
         <StaffNavbar/>
         <input type="search" id="input" placeholder="Search Staff" />
         <button id="button">search</button>
      <div className="listDisplay">
          <ol>
            <Link to="/admin/staff/employee records/ display"><li>George Ngaithe Njenga</li></Link>
            <hr/>
            <li>George Ngaithe Njenga</li>
            <hr/>
            <li>George Ngaithe Njenga</li>
            <hr/>
            <li>George Ngaithe Njenga</li>
            <hr/>
            <li>George Ngaithe Njenga</li>
            <hr/>
          </ol>
      </div>
    </div>
  )
}
