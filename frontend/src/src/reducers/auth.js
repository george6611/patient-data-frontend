import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/type'

const initialState = {
    isAuthenticated:null,
    first_name:'',
    last_name:'',
};

export default function(state=initialState, action){
    const {type, payload} = action;

    switch(type){
        case REGISTER_SUCCESS:
            return{
              ...state,
              isAuthenticated:false
            }
        case REGISTER_FAIL:
            return state  
        default:
                return state;      
        }
       
}