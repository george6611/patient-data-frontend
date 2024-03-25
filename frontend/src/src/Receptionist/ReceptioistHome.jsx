import React from 'react';
import { Link } from 'react-router-dom';


export default function ReceptioistHome() {


  return (
    <div className="adminHome">
     
      <div className="container1" id="hosDisplay">
        <div className="adminWelcome">
          <Link to="/createPatient">
            <button id="button">Create New Patient</button>
          </Link>
          <Link to="/search">
           <button id="button">Search</button>
          </Link>
          <br />

        </div>
      </div>
      <div className="hosDescription">
        <p>Hello this is kisii Refferal and training Hosipital.  it is a level 5 hospital located in Kisii
          town along Kwame Nkuruma road. 
          Hello this is kisii Refferal and training Hosipital.  it is a level 5 hospital located in Kisii
          Hello this is kisii Refferal and training Hosipital.  it is a level 5 hospital located in Kisii
          Hello this is kisii Refferal and training Hosipital.  it is a level 5 hospital located in Kisii
        </p>
      </div>
      <div className="depts">
        <ol>
          <li>
            OutPatient:
            <ul>
              <li>Dental Clinic</li>
              <li>VCT</li>
              <li>Renal</li>
              <li></li>
            </ul>
          </li>
          <li>InPatient:
            <ul>
              <li>ICU</li>
              <li>NBU</li>
              <li>HDU</li>
              <li>Male Ward</li>
              <li>Female Ward</li>
              <li>Martenity</li>
              <li>Threatre</li>
            </ul>
          </li>
        </ol>
      </div>            
      <div className="hosAchievements" id="changeableContainers">
  <div className="achieve"id="changeableDivs">
  </div>
  <div className="achieve" id="changeableDivs">
  </div>
  <div className="achieve" id="changeableDivs">
  </div>
  <div className="achieve" id="changeableDivs">
  </div>
  <div className="achieve" id="changeableDivs">
  </div>
  <div className="achieve" id="changeableDivs">
  </div>
  
</div>
<div className="break">
  <p>I dont know what should be here but i feel there ought tto be something</p>
</div>
<div className="hosOfficials" id="changeableContainers" >
    <div className="official1" id="changeableDivs">
    </div>
    <div className="official1" id="changeableDivs">
    </div>
    <div className="official1" id="changeableDivs">
    </div>
    <div className="official1" id="changeableDivs">
    </div>
    <div className="official1" id="changeableDivs">
    </div>
    <div className="official1" id="changeableDivs">
    </div>
    <div className="official1" id="changeableDivs">
    </div>
    <div className="official1" id="changeableDivs">
    </div>
    
</div>
      <div className="footer">
        <p>
          <a href="email: kisiireferral@ac.ke">kisiireferral@ac.ke</a>
        </p>
        <p>
          <a href="copyright: copyright @2024">copyright @2024</a>
        </p>
      </div>
    </div>
  )
}
