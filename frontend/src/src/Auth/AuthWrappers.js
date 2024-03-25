import axios from 'axios';

export const checkAuthenticated = () => async dispatch => {
    const config = {
     headers: {
       'Accept':'application/json',
       'Content-Type':'application/json'
     }
    };
  
    try{
    const res = await axios.get(`http://127.0.0.1:8000/users/authenticated`,config);
 
   
    } catch(err){
     
    }
  };