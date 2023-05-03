import {
  GET_DOC_PATIENT_LIST,
  SAVE_PATIENT_TO_LIST,
  SAVE_NEW_APPOINTMENT,
  GET_APPOINTMENTS,
  SET_SELECTED_PATIENT,
  SET_PATIENT_FORM_MODE,
  CLEAR_SELECTED_PATIENT,
  SET_PATIENT_APPOINTMENTS,
  SET_SELECTED_APPOINTMENT,
  CLEAR_SELECTED_APPOINTMENT,
  GET_VISITS_LIST,
  SET_SELECTED_VISIT,
  CLEAR_SELECTED_VISIT,
  SET_PATIENT_PAST_VISITS,
  GET_LAB_LIST,
  SET_SELECTED_LAB,
  CLEAR_SELECTED_LAB,
  SET_PATIENT_LABS,
  TOGGLE_VIDEO_VIEW,
  GET_PATIENTS_APPOINTMENTS,
} from '../types';

const initialState = {
  profile: {
    prefix: '',
  },
  patients: [],
  selectedPatient: {},
  appointments: [],
  patientAppointments: [],
  selectedAppointment: {},
  formMode: 'EDITABLE',
  pastVisits: [],
  patientVisits: [],
  selectedVisit: {},
  labTests: [],
  patientLabTests: [],
  selectedLabTest: {},
  videoIsOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DOC_PATIENT_LIST:
      return {
        ...state,
        patients: action.payload,
      };
    case SAVE_PATIENT_TO_LIST:
      return {
        ...state,
        patients: action.payload,
      };
    case SAVE_NEW_APPOINTMENT:
      return {
        ...state,
        appointments: action.payload,
      };
    case GET_APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload,
      };
    case GET_PATIENTS_APPOINTMENTS:
      return {
        ...state,
        appointments: [...state.appointments, ...action.payload],
      };
    case SET_SELECTED_PATIENT:
      return {
        ...state,
        selectedPatient: action.payload,
      };
    case CLEAR_SELECTED_PATIENT:
      return {
        ...state,
        selectedPatient: {},
      };
    case SET_PATIENT_FORM_MODE:
      return {
        ...state,
        formMode: action.payload,
      };
    case SET_PATIENT_APPOINTMENTS:
      return {
        ...state,
        patientAppointments: action.payload,
      };
    case SET_SELECTED_APPOINTMENT:
      return {
        ...state,
        selectedAppointment: action.payload,
      };
    case CLEAR_SELECTED_APPOINTMENT:
      return {
        selectedAppointment: {},
      };
    case GET_VISITS_LIST:
      return {
        ...state,
        pastVisits: action.payload,
      };
    case SET_SELECTED_VISIT:
      return {
        ...state,
        selectedVisit: action.payload,
      };
    case CLEAR_SELECTED_VISIT:
      return {
        ...state,
        selectedVisit: {},
      };
    case SET_PATIENT_PAST_VISITS:
      return {
        ...state,
        patientVisits: action.payload,
      };

    case GET_LAB_LIST:
      return {
        ...state,
        labTests: action.payload,
      };
    case SET_SELECTED_LAB:
      return {
        ...state,
        selectedLabTest: action.payload,
      };
    case CLEAR_SELECTED_LAB:
      return {
        ...state,
        selectedLabTest: {},
      };
    case SET_PATIENT_LABS:
      return {
        ...state,
        patientLabTests: action.payload,
      };
    case TOGGLE_VIDEO_VIEW:
      return {
        ...state,
        videoIsOpen: action.payload ? action.payload : !state.videoIsOpen,
      };

    default:
      return state;
  }
};
