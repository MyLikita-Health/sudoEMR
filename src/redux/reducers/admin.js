import {
  LOADING_ADMIN_ALL_APPOINTMENT_LIST,
  GET_ADMIN_ALL_APPOINTMENT_LIST,
} from '../actions/actionTypes';

const initialState = {
  allAppointment: [],
  loadingAllAppointment: false,
  totalAppointment: 0,
  totalOnline: 0,
  totalOffline: 0,
  totalPatientAppointment: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ADMIN_ALL_APPOINTMENT_LIST:
      return {
        ...state,
        loadingAllAppointment: !state.loadingAllAppointment,
      };
    case GET_ADMIN_ALL_APPOINTMENT_LIST:
      return {
        ...state,
        allAppointment: action.payload.all,
        totalAppointment: action.payload.total,
        totalOnline: action.payload.online,
        totalOffline: action.payload.offline,
      };

    default:
      return state;
  }
};
