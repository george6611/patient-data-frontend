import React from 'react';
import { Link } from 'react-router-dom';

import profile from '../Images/profile.png';

import { FaHome } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="profile">
      
        <div className="profileBox">
          <div className='homeIcon'>
             <Link to={'/admin'}> <FaHome/></Link> 
          </div>
          <div className='settingIcon'>
          <Link to={'/#'}> <IoSettings/></Link>
            
          </div>
          
         <img src={profile} className='profilePic' />
         <h3>Georeg Ngaithe</h3>
         <p>Web developer at</p>
         <div className="socialMedia">
            <FaFacebook />
            <FaInstagramSquare />
            <FaLinkedin/>
            <FaTelegram />
            <FaTiktok/>
         </div>
           <button type='button'>Follow</button>
           <div className="profileButton">
               <p>Learn More About My Profile</p>
           </div>
        </div>
      
    </div>
  )
}