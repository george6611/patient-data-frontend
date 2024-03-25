import axios from 'axios';
import Cookies from 'js-cookie';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';

// export const checkAuthenticated = () => async dispatch => {
//     const config = {
//      headers: {
//        'Accept':'application/json',
//        'Content-Type':'application/json'
//      }
//     };
  
//     try{
//     const res = await axios.get(`http://127.0.0.1:8000/users/authenticated`,config);
    
//     if(res.data.error || res.data.isAuthenticated === 'error'){
//       dispatch({
//         type:AUTHENTICATED_FAIL,
//         payload:false
//       });
//     }
//     else if (res.data.isAuthenticated === 'success'){
//       dispatch({
//         type:AUTHENTICATED_SUCCESS,
//         payload:true
//       })
//     }
//     else {
//       dispatch({
//         type:AUTHENTICATED_FAIL,
//         payload:false
//       });
//     }
   
//     } catch(err){
     
//     }
//   };

export const register = (first_name,last_name,sur_name,emial,password,phone_number,hospital_name,admin_type) => async dispatch => {
    const config = {
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'X-CSRFToken':Cookies.get('csrftoken')
        }
    };
    const body = JSON.stringify({first_name,last_name,sur_name,emial,password,phone_number,hospital_name,admin_type});

    try{
        const res = await axios.post('http://127.0.0.1:8000/users/admin_register', body,config);

        if(res.data.error){
            dispatch({
                type:REGISTER_FAIL
            });
        } else {
            dispatch({
                type:REGISTER_SUCCESS
            });
        }
    } catch (err){
        dispatch({
            type:REGISTER_FAIL
        });
    }
}

export const login = (email, password) => async dispatch => {
    const config = {
     headers: {
       'Accept':'application/json',
       'Content-Type':'application/json',
       'X-CSRFToken':Cookies.get('csrftoken')
     }
    };
    const body = JSON.stringify({email,password});
  
    try{
    const res = await axios.post(`http://127.0.0.1:8000/users/login`,body,config);
  
    if(res.data.success){
     dispatch({
       type:LOGIN_SUCCESS
     });
      //dispatch(load_user());
    }else {
       dispatch({
         type:LOGIN_FAIL
       });
    }
    } catch(err){
     dispatch({
       type:LOGIN_FAIL
     });
    }
  };
  
