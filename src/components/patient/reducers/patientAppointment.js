import {
  LOADING_PATIENT_APPOINTMENTS,
  LOADING_PENDING_PATIENT_APPOINTMENTS,
  GET_PATIENT_PENDING_APPOINTMENTS,
} from '../actions/types';
import { GET_PATIENTS_APPOINTMENTS } from '../../doc_dash/types';

const initialState = {
  appointments: [],
  loadingAppointments: false,
  pendingPatientAppointments: [],
  loadingPendingAppointments: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PATIENT_APPOINTMENTS:
      return {
        ...state,
        loadingAppointments: !state.loadingAppointments,
      };
    case GET_PATIENTS_APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload,
      };
    case LOADING_PENDING_PATIENT_APPOINTMENTS:
      return {
        ...state,
        loadingPendingAppointments: !state.loadingPendingAppointments,
      };
    case GET_PATIENT_PENDING_APPOINTMENTS:
      return {
        ...state,
        pendingPatientAppointments: action.payload,
      };

    default:
      return state;
  }
};
