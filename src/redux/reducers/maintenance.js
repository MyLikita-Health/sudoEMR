import { NEW_DIESEL_USAGE } from '../actions/actionTypes';
  
  const initialState = {
    services: [],
    deletingService: false
  };
  
  const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_DIESEL_USAGE : 
            return {
                ...state,
                dieselRefuel: state.services.concat(action.payload)
        }
      
      default:
        return state;
    }
  };
  
  export default servicesReducer;