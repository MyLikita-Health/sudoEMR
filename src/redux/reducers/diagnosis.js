import {
  // SUBMIT_DIAGNOSIS,
  SUBMIT_DIAGNOSIS_LOADING,
  GETTING_PATIENT_ASSIGNED_TODAY,
  GET_PATIENT_ASSIGNED_TODAY,
  GETTING_PATIENTS_ASSIGNED_TO_DOC,
  GET_PATIENTS_ASSIGNED_TO_DOC,
  GETTING_PATIENT_WAITING_LIST,
  GET_PATIENT_WAITING_LIST,
  SET_CURRENT_DOCTOR_CONSULTATION_PATIENT,
} from "../actions/types";

const defaultState = {
  savingDiagnosis: false,
  gettingPatientAssignedToday: false,
  gettingPatientAssignedToDoc: false,
  gettingWaitingList: false,
  patientAssignedToday: [],
  waitingList: [],
  patientAssignedToDoc: [],
  labTree: [],
  currDoctorConsulationPatient: {},
};

const diagnosisReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SUBMIT_DIAGNOSIS_LOADING:
      return {
        ...state,
        savingDiagnosis: !state.savingDiagnosis,
      };
    case GETTING_PATIENT_ASSIGNED_TODAY:
      return {
        ...state,
        gettingPatientAssignedToday: !state.gettingPatientAssignedToday,
      };
    case GETTING_PATIENT_WAITING_LIST:
      return {
        ...state,
        gettingWaitingList: !state.gettingWaitingList,
      };
    case GET_PATIENT_ASSIGNED_TODAY:
      return {
        ...state,
        patientAssignedToday: action.payload,
      };
    case GET_PATIENT_WAITING_LIST:
      return {
        ...state,
        waitingList: action.payload,
      };
    case GETTING_PATIENTS_ASSIGNED_TO_DOC:
      return {
        ...state,
        gettingPatientAssignedToDoc: !state.gettingPatientAssignedToDoc,
      };
    case GET_PATIENTS_ASSIGNED_TO_DOC:
      return {
        ...state,
        patientAssignedToDoc: action.payload,
      };

    case SET_CURRENT_DOCTOR_CONSULTATION_PATIENT:
      return {
        ...state,
        currDoctorConsulationPatient: action.payload,
      };

    default:
      return state;
  }
};

export default diagnosisReducer;
