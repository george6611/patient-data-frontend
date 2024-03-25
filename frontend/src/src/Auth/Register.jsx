import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { register } from '../actions/auth';
import SignUpValidation from './Validation';
import CSRFToken from './CSRFToken';


const Register = ({register,isAuthenticated}) => {

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    sur_name: '',
    email: '',
    password: '',
    phone_number: '',
    hospitalName: '',
    adminType: '',
    
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  
  const {first_name, last_name,sur_name,email,password,phone_number,hospitalName,adminType} = formData;

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors(SignUpValidation({ ...formData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    register(first_name,last_name,sur_name,email,password,phone_number,hospitalName,adminType)  
    
    if (isAuthenticated)
    return navigate('/admin');
   else 
    return navigate('/login');
  };


  console.log(Cookies.get('csrftoken'));
  return (
    <div className="regContainer">
      <CSRFToken/>
      <div className="regForm">
        <form onSubmit={handleSubmit}>
          

          <div className="firstName" >
            {errors.first_name && <span className='text-danger'> {errors.first_name} </span>}<br />
            <input type="text" placeholder="Firstname" name="first_name" onChange={handleInput} />
          </div>

          <div className="lastName" >
            {errors.last_name && <span className='text-danger'> {errors.last_name} </span>} <br />
            <input type="text" placeholder="Lastname" name="last_name" onChange={handleInput} />
          </div>

          <div className="surName" >
            {errors.sur_name && <span className='text-danger'> {errors.sur_name} </span>} <br />
            <input type="text" placeholder="Surname" name="sur_name" onChange={handleInput} />
          </div>

          <div className="email" >
            {errors.email && <span className='text-danger'> {errors.email} </span>} <br />
            <input type="email" placeholder="Email" name="email" onChange={handleInput} />
          </div>

         

         

          <div className="phone" >
            {errors.phone_number && <span className='text-danger'> {errors.phone_number} </span>} <br />
            <input type="text" placeholder="Phone Number" name="phone_number" onChange={handleInput} />
          </div>

          <div className="hospitalName" >
            {errors.hospitalName && <span className='text-danger' > {errors.hospitalName} </span>} <br />
            <input type="text" placeholder="Hospital Name" name="hospitalName" onChange={handleInput} />
          </div>

          <div className="level" >
  {errors.adminType && <span className='text-danger'> {errors.adminType} </span>} <br />
  <select name="adminType" id="adminType" onChange={handleInput}>
    <option value="Administrator">Administrator</option>
    <option value="ChiefExecutiveOfficer">Chief Executive Officer</option>
  </select>
</div>

          <div className="formButton">
            <button id="button">Sign Up</button>
            <Link to="/login"><button id="button">Login</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
}
const mapStateTpProps = state => ({
  isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateTpProps, { register })(Register);
