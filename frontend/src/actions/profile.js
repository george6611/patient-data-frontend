import Cookies from 'js-cookie';
import axios from'axios';
import {
    LOAD_USER_PROFILE_SUCCESS,
    LOAD_USER_PROFILE_FAIL
} from './types';

export const load_user = () => async dispatch => {
    const config = {
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    };
    try{

        const res = await axios.get(`http://127.0.0.1:8000/users/admin_profile`,config);
        if(res.data.error){
          dispatch({
             type:LOAD_USER_PROFILE_FAIL
          });
        }else{
         dispatch({
             type:LOAD_USER_PROFILE_SUCCESS,
             payload:res.data
            });
        }

        
     } catch(err){

         dispatch({
             type:LOAD_USER_PROFILE_FAIL
         });
     }

}