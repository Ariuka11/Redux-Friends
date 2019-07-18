import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions';

const initialState = {
    isLogging: false,
    loginError: null
}

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case LOGIN_LOADING: 
        return {
            ...state,
            isLogging: true,
        }
        case LOGIN_SUCCESS:
        return{
            ...state,
            isLogging: false,
            loginError: null
        }
        case LOGIN_FAILURE:
        return{
            ...state,
            isLogging: false,
            loginError: action.payload
        }

        default:
        return state;
    }
}