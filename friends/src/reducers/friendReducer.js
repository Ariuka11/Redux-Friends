import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE} 
    from '../actions'
    

const initialState = {
        friends : [],
        fetchingData : false,
        fetchingError: null
    }

const friendReducer = (state = initialState, action) => {
        switch(action.type){
            case FETCH_START:
             return {
                 ...state,
                 fetchingData: true
             }
             case FETCH_SUCCESS: 
              return {
                  ...state,
                  fetchingData: false,
                  friends : action.payload
              }
             case FETCH_FAILURE: 
              return {
                  ...state,
                  fetchingData: false,
                  fetchingError: action.payload
              } 

            default: 
             return state
        }
    }

export default friendReducer;