import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import AdminNavbar from './AdminNavbar';
import CSRFToken from '../Auth/CSRFToken';


export default function AdminPanel() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'X-CSRFToken':Cookies.get('csrftoken')
        }
      };
      
      try {
        const response = await axios.get('http://localhost:8000/users/admin_panel/',config );

        if (response.data && response.data.admin_data) {
          setUserData(response.data.admin_data);
        } else {
          console.error('Admin data not found:', response.data);
          // Redirect to login or display error message
          navigate('/login');
        }
      } catch (error) {
        // Handle error
        console.error('Error fetching admin data:', error);
        // Redirect to login or display error message
        navigate('/login');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="adminHome">
      <div className="contact2">
        <div className="logo">
        </div>
        <AdminNavbar />
        <CSRFToken/>
      </div>
      <div className="container1" id="hosDisplay">
        <div className="adminWelcome">
          <p>Hello and welcome to Kisii Refferal and Teaching Hospital</p>
        </div>
      </div>
      <div className="hosDescription">
        <p>Hello this is kisii Refferal and training Hosipital. it is a level 5 hospital located in Kisii
          town along Kwame Nkuruma road.
          Hello this is kisii Refferal and training Hosipital. it is a level 5 hospital located in Kisii
          Hello this is kisii Refferal and training Hosipital. it is a level 5 hospital located in Kisii
          Hello this is kisii Refferal and training Hosipital. it is a level 5 hospital located in Kisii
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
