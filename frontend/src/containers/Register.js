import React, {useState} from 'react';
import { connect } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import { register } from '../actions/auth';
import SignUpValidation from '../actions/Validation';
import CSRFToken from '../components/CSRFToken';

const Register = ({register}) => {
    const [formData,setFormData] = useState({
        first_name:'',
        last_name:'',
        sur_name:'',
        emial:'',
        password:'',
        phone_number:'',
        hospital_name:'',
        admin_type:''
    });
     
    const navigate = useNavigate();
    const [accountCreated, setAccountCreated] = useState(false);
    const [errors, setErrors] = [];

    const { first_name,last_name,sur_name,emial,password,phone_number,hospital_name,admin_type } = formData;
    
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    SignUpValidation(formData);


    const onSubmit = e => {
        e.preventDefault();
    
        register(first_name,last_name,sur_name,emial,password,phone_number,hospital_name,admin_type);
        setAccountCreated(true);
    }
     
    if(accountCreated)
      navigate('/login');

return(
    <div className="regContainer">
     
    <div className="regForm">
      <form onSubmit={e => onSubmit(e)}>
         <CSRFToken/>

        <div className="firstName" >
          {/* {errors.first_name && <span className='text-danger'> {errors.first_name} </span>}<br /> */}
          <input type="text" placeholder="Firstname" name="first_name" onChange={e => onChange(e)} />
        </div>

        <div className="lastName" >
          
          <input type="text" placeholder="Lastname" name="last_name" onChange={e => onChange(e)} />
        </div>

        <div className="surName" >
          
          <input type="text" placeholder="Surname" name="sur_name" onChange={e => onChange(e)} />
        </div>

        <div className="email" >
          
          <input type="email" placeholder="Email" name="email" onChange={e => onChange(e)} />
        </div>

        <div className="phone" >
          
          <input type="text" placeholder="Phone Number" name="phone_number" onChange={e => onChange(e)} />
        </div>

        <div className="hospitalName" >
          
          <input type="text" placeholder="Hospital Name" name="hospitalName" onChange={e => onChange(e)} />
        </div>

        <div className="level" >

<select name="adminType" id="adminType" onChange={e => onChange(e)}>
  <option value="Administrator">Administrator</option>
  <option value="ChiefExecutiveOfficer">Chief Executive Officer</option>
</select>
</div>

        <div className="formButton">
          <button id="button" type='submit '>Sign Up</button>
          <Link to="/login"><button id="button">Login</button></Link>
        </div>
      </form>
    </div>
  </div>
    )
   
}
export default connect(null, {register}) (Register);