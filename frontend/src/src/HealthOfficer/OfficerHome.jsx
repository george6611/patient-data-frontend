import React from 'react'

export default function OfficerHome() {
  return (
    <div className="medicHome">
      <div className="medicHeader">
        <p>Welcome to The Future.com Dr.George</p>
        
      </div>
      <div className="medicInputs">
        <input type="search" id="input" placeholder="Enter Patient's Details"/>
        <button id="button">Search</button>
      </div>
      <div className="medicDisplay">
       <table>
        <thead>
          <tr>
            <th>Patient's Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Diagnosis</th>
            <th>History</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>George Nagithe Njenga</td>
            <td>20</td>
            <td>Male</td>
            <td>diagnosis</td>
            <td>history</td>

          </tr>
        </tbody>
       </table>
      </div>
    </div>
  )
}
