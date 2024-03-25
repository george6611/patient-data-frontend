import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions/types';

const initialState = {
    isAuthenticated:null,
    first_name:'',
    last_name:'',
    sur_name:'',
    emial:'',
    password:'',
    phone_number:'',
    hospital_name:'',
    admin_type:''
}

export default function(state = initialState, action){
    const {type, payload} = action

    switch(type){
        
        case REGISTER_SUCCESS:
          return{
            ...state,
            isAuthenticated:false
          }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated:true
            } 

        case LOGIN_FAIL:
            return{
                ...state,
                isAuthenticated:false
            }     
        case REGISTER_FAIL:
            return state 
        default:
            return state     
    }
};