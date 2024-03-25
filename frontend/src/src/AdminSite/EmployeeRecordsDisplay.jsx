import React from 'react'

export default function EmployeeRecordsDisplay() {
  return (
    <div className="recordsDisplay">
     <table>
      {/* <tr> */}
        {/* <th></th> */}
        {/* <th></th> */}
        {/* <th></th> */}
        {/* <th>Activity</th> */}
        {/* <th>Transaction</th> */}
        {/* <th>Commit</th> */}
      {/* </tr> */}
      {/* <tr> */}
        {/* <th>Day</th> */}
        {/* <th>Date</th> */}
        {/* <th>Time</th> */}
      {/* </tr> */}
      {/* <tr>   */}
        {/* <td>Wenesday</td> */}
        {/* <td>11 September 2023</td>         */}
        {/* <td>12:00:45</td> */}
      {/* </tr> */}
      <thead>
        <tr>
          <th>Day</th>
          <th>Date</th>
          <th>Time</th>
          <th>Activity</th>
          <th>Transaction</th>
          <th>Commit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Wenesday</th>
          <th>17th September 2017</th>
          <th>2:00:32</th>
          <th>Logged In</th>
          <th>Checked User</th>
          <th>None</th>
        </tr>
      </tbody>
     </table>
    </div>
  )
}
