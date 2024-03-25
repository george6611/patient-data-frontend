import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import sha256 from 'crypto-js/sha256';

export default function Login() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  
  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (username, password) => {
    const hashedPassword = sha256(password).toString();
    const dataToSend = { email: username, password: hashedPassword };

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/users/user_login/',
        dataToSend,
        { withCredentials: true } // Include credentials (cookies) with the request
      );

      if (response && response.data && response.data.user_data) {
        // Redirect based on user type
        const user_type = response.data.user_data.user_type;
        if (user_type === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        console.error(
          'Login failed:',
          response ? response.data.error : 'Unknown error'
        );
        setErrors({ email: 'Invalid credentials', password: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ email: 'Invalid credentials', password: 'Invalid credentials' });
    }
  };

  return (
    <div className="regContainer">
      <div className="loginForm">
        <form onSubmit={(e) => {
          e.preventDefault();
          handleLogin(values.email, values.password);
        }}>
          <div className="username" id="inputFields">
            {errors.email && <span className="text-danger">{errors.email}</span>}
            <br />
            <input type="text" placeholder="Email" name="email" onChange={handleInput} />
          </div>

          <div className="password" id="inputFields">
            {errors.password && <span className="text-danger">{errors.password}</span>}
            <br />
            <input type="password" placeholder="Password" name="password" onChange={handleInput} />
          </div>
          <div className="formButton">
            <button id="button" type="submit">Login</button>
            <Link to="/register">
              <button id="button">Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
