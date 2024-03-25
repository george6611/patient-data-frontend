import React from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

export default function Staff() {
  return (
    <div className="staffHome">
      <AdminNavbar/>
      <ul>
        <Link to="new employee"><li id="staffLinks">Create New Employee</li></Link>
        <hr/>
        <Link to="update employee"><li id="staffLinks">Update Employee Account</li></Link>
        <hr/>
        <Link to="employee records"><li id="staffLinks">View Employee Records</li></Link>
        <hr/>
      </ul>
    </div>
  )
}
