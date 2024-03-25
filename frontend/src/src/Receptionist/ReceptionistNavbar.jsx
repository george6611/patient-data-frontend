import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom'; 

export default function ReceptionistNavbar() {
  const [scrolling, setScrolling] = useState(false);

useEffect(() => {
     const handleScroll = () => {
       if(window.scrollY > 0){
         setScrolling(true);
       }else{
         setScrolling(false);
       }
     };
     window.addEventListener('scroll',handleScroll);
   
     return () => {
       //Cleanup the event listener when the component unmounts
       window.removeEventListener('scroll',handleScroll);
     };
   }, []); //empty dependency arry means the effect runs only once on mount and cleans up on unmount


  return (
    <div className="receptionistNavbar">
      <div className={scrolling ? 'navbarScroll': 'navbar'}>
         <Link to="/receptionist">Home</Link>         
         <Link to="/createPatient">New Patient</Link>
         <Link to="/search">Search</Link>
         
    </div>
    </div>
  )
}
