import axios from 'axios';
import AxiosWithAuth from '../components/AxiosWithAuth';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const getFriends = () => dispatch => {
    dispatch ({type: FETCH_START})
    AxiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then(res => {
            dispatch ({type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch ({type: FETCH_FAILURE, payload: err })
        })
}


export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loggingIn = (credentials) => dispatch => {
    dispatch ({type : LOGIN_LOADING})
    return axios
        .post("http://localhost:5000/api/login", credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            dispatch({type: LOGIN_SUCCESS})
        })
        .catch(err => {
            dispatch({type: LOGIN_FAILURE, payload: err})
        })
}