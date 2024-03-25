 import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundChanger from './Background';
import hiddenElements from './AnimateScroll';
import landing from '../Images/landing.jpeg';
import landing2 from '../Images/landing2.jpeg';
import landing3 from '../Images/landing3.jpg';
import landing4 from '../Images/landing4.jpg';
import landing5 from '../Images/landing5.jpg';

export default function LandingPage() {
  const imageUrls = [
    landing,landing2,landing2,landing3,landing4,landing5
    ]
  return (
    <div className="landingContainer">
       
      <div className="container1">
       <BackgroundChanger imageUrls={imageUrls}/>
        <div className="inputs">
          <div className="login">
            <Link to="/login"> <button id="button">Login</button> </Link>
             
          </div>
          <div className="register">
           <Link to="/register"> <button id="button">SignUp</button> </Link> 
          </div>         
        </div>
        
      </div>

      <div className="container2">
        <div className="search">
           <input type="search" id="input" placeholder="Search any hospital"/>
          <Link to="/display"> <button id="button">Search</button> </Link>
         </div>
         <div className="introduction">
          <p>Hello and welcome to the personal and health Records Website(PHR.com). This is a site that is 
            built around and well equiped to handle, maintain as well as share patient data from one health facility to another
            with the authorization of the specific patitient of course.
             </p>
             <p>
             The patients records are captured at any registered and authenticated hospital 
             clinic or health center and is then encrypted upoaded to a pateints specific address in the cloud.
             Being a cloud based solution it makes it easier to access the data from any physical location on a secure
             device. The access of the data is highly restricted depending on each person using the website.
             </p>
         </div>

      <div className="demos">
      <hiddenElements/>
         <div className="demo1" id="demo">
        
            <p>Have You Sign Up with us</p>
         </div>
         <div className="demo2" id="demo">
           <p>Your Records are captured and securly stored</p>
         </div>
         <div className="demo3" id="demo">
              <p>Your Records are now available for dotors to better judgement</p>
         </div>
        </div>   

         <div className="principles">
            <div className="vision">
              <h4>Vision</h4>
              <p>
                To create a secure and efficient solution for patient records handling and sharing in compliance with all
                legal institution and agencies in the county, country, continent even the whole globe.
              </p>
            </div>
            <div className="mission">
              <h4>Mission</h4>
               <p>
                Help eradicate health pratiotioners ignorance of patients medical history
                in an attempt to serve humanity.
               </p>
            </div>
         </div>
         
         <div className="landingFooter">

         
        <div className="contact">
          <p>
            For more information you can contact us via our:-
          </p>
          <p>
            Physical Address: <br/>
             <a href="location: PO Box 354- 30400 Dream City">
                     PO Box 354- 30400 Dream City
             </a>
          </p>
          <p>
             Email : <br/>
             <a href="mailto: phr@gmail.com">
                phr@gmail.com
             </a>
               
             
          </p>
          <p>
            
            Phone Number: <br/>
            <a href="contact: +254 793 434 538">+254 793 434 538</a> <br/> 
            <a href="contact: +254 783 834 348">+254 783 834 348</a> <br/>
            <a href="contact: +254 754 932 984">+254 754 932 984</a> <br/>
            <a href="contact: +254 789 342 349 ">+254 789 342 349</a> <br/>
          </p> 

           
        </div>
        </div>
      </div>
    </div>
  )
}
