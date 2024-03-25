import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminNavbar() {
  const [scrolling, setScrolling] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      //Cleanup the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); //empty dependency arry means the effect runs only once on mount and cleans up on unmount

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8000/users/logout_view/');
      console.log(response.data.message);
      // Redirect to login page after logout
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <div className={scrolling ? 'navbarScroll' : 'navbar'}>
        <Link to="/admin">Home</Link>
        <Link to="/admin/details">Details</Link>
        <Link to="/admin/staff">Staff</Link>
        <Link to="/admin/profile">Profile</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
