import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom'; 

export default function StaffNavbar() {

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
    
<div>
    <div className={scrolling ? 'navbarScroll': 'navbar'}>
         <Link to="/admin/staff">Staff</Link>         
         <Link to="/admin/staff/new employee">New Employee</Link>
         <Link to="/admin/staff/update employee">Update</Link>
         <Link to="/admin/staff/employee records">Records</Link>
    </div>
</div>
  
  )
}
