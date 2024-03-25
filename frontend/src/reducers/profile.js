import {
    LOAD_USER_PROFILE_SUCCESS,
    LOAD_USER_PROFILE_FAIL
} from '../actions/types';

const initialState = {
    
    first_name:'',
    last_name:'',
    sur_name:'',
    emial:'',
    password:'',
    phone_number:'',
    hospital_name:'',
    admin_type:''
};

export default function (state = initialState, action){
    const {type,payload} = action;

    switch(type){
        case LOAD_USER_PROFILE_SUCCESS:
            return{
                ...state,
                first_name:payload.first_name,
                last_name:payload.last_name,
                sur_name:payload,sur_name,
                emial:payload.email,
                password:payload.password,
                phone_number:payload.phone_number,
                hospital_name:payload.hospital_name,
                admin_type:payload.admin_type
            }
        case LOAD_USER_PROFILE_FAIL:
            return{
                ...state,
                first_name:'',
                last_name:'',
                sur_name:'',
                emial:'',
                password:'',
                phone_number:'',
                hospital_name:'',
                admin_type:''
            }    
    };
}