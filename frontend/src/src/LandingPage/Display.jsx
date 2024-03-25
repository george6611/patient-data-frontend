import React from 'react'
import {Link} from 'react-router-dom';

export default function Display() {
  return (
    <div className="displayPage">
      
      
      
      <div className="displaySearch">
       <div className="home" id="homeButton">
            <Link to = "/"> <button id="button">Home</button>  </Link>
       </div>
        <input type="search" id="input"placeholder="Enter hospital name"/>
        <button id="button">Search</button>
      </div>
      <div className="table">
        <ol>
          <Link to="#"> <li>Kenyatta Referral and Training Hospital</li ></Link>
          <Link to="#"><li>Kisii Referral and Training Hospital</li></Link>
          <Link to="#"><li>Nyahururu Referral and Training Hospital</li></Link>
          <Link to="#"><li>Olkaluo Referral and Training Hospital</li></Link>
        </ol>
      </div>
    </div>
  )
}
