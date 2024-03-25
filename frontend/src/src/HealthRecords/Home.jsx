import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="recordsHome">

      <div className="recordsBar">
        <p id="recordsBar">
          Hello there
        </p>
          <div className="recordsProfile">
              
          </div>
      </div>

      <div className="recordsContainer">
        <div className="recordsInput">
          <input type="search" placeholder="Search"/>
          <button>Search</button>
        </div>
      <div className="recordsDisplay">
        <ol>
           <li>
            <select name="" id="">
              <option value="">
              George Ngaithe Njenga
              </option>
              
              <option value="update">
              <Link to="/records/update">
                Update
                </Link>
                </option>
              
              <option value="view">View</option>
            </select>
           </li>
          
            
          
          
        </ol>
      </div>
      
      </div>
      </div>
  )
}
