import {NEW_TRANSACTION, DELETE_SERVICE_LOADING } from '../actions/actionTypes';
  
  const initialState = {
    services: [],
    deletingService: false
  };
  
  const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
			case NEW_TRANSACTION : 
				return {
					...state,
					services: state.services.concat(action.payload)
        }
      case DELETE_SERVICE_LOADING : 
        return {
          ...state,
          deletingService: !state.deletingService
        }
      
      default:
        return state;
    }
  };
  
  export default servicesReducer;
  