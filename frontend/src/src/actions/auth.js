import Cookies from "js-cookie";
import axios from "axios";
import{
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './type'

export const register = (first_name, last_name,sur_name,email,password,phone_number,hospitalName,adminType) => async  dispatch => {
    const config = {
      headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',
          'X-CSRFToken':Cookies.get('csrftoken')
      }
    };
   
    const body = JSON.stringify({first_name, last_name,sur_name,email,password,phone_number,hospitalName,adminType});
    try{
      const response = await axios.post('http://127.0.0.1:8000/users/admin_register',body,config);
  
      if (response.data.error){
          dispatch({
              type:REGISTER_FAIL
          }); 
      }else {
           dispatch({
              type:REGISTER_SUCCESS
           });
          }
      
    } catch (err){
      dispatch({
          type:REGISTER_FAIL
      });
    }
  };