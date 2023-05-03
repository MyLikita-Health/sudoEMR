import {
  GET_IDS,
  GET_UNASSIGNED_PATIENTS,
  GET_PATIENT_LIST,
  SET_PATIENTS,
  SET_CURRENT_PATIENT,
  SET_BED_OBJ,
  SET_BED_LIST,
  SET_IN_PATIENT_LIST,
  SET_AVAILABLE_BED_LIST,
  SET_AVAILABLE_BED_OBJ,
  SET_PATIENTS_DISCHARGED_BY_DOCTOR,
  PATIENT_PASSPORT,
  VERIFY_PATIENT_ACCOUNT
} from "../actions/actionTypes";

const initialState = {
  ids: [],
  unassignedPatients: [],
  patientlist: [],
  patients: [],
  names: [],
  accountNos: [],
  currentPatient: {},
  bedList: [],
  availableBedList: [],
  bedObj: {},
  availableBedObj: {},
  inPatientsList: [],
  patientsDischargedByDoctor: [],
  patients_photo: {},
  account_type:""
};

const recordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IDS:
      return {
        ...state,
        ids: action.payload,
      };

    case GET_UNASSIGNED_PATIENTS:
      return {
        ...state,
        unassignedPatients: action.payload,
      };

      case VERIFY_PATIENT_ACCOUNT:
        return {
          ...state,
          account_type: action.payload,
        };

    case GET_PATIENT_LIST:
      return {
        ...state,
        patientlist: action.payload,
      };

    case SET_PATIENTS: {
      const { patients, names, accountNos } = action.payload;
      return {
        ...state,
        patients,
        names,
        accountNos,
      };
    }
    case SET_CURRENT_PATIENT:
      return {
        ...state,
        currentPatient: action.payload,
      };
    case SET_BED_LIST:
      return {
        ...state,
        bedList: action.payload,
      };
    case SET_BED_OBJ:
      return {
        ...state,
        bedObj: action.payload,
      };
    case SET_AVAILABLE_BED_LIST:
      return {
        ...state,
        availableBedList: action.payload,
      };
    case SET_AVAILABLE_BED_OBJ:
      return {
        ...state,
        availableBedObj: action.payload,
      };
    case SET_IN_PATIENT_LIST:
      return {
        ...state,
        inPatientsList: action.payload,
      };
    case SET_PATIENTS_DISCHARGED_BY_DOCTOR:
      return {
        patientsDischargedByDoctor: action.payload,
      };
    case PATIENT_PASSPORT:
      return {
        patients_photo: action.payload,
      };
    default:
      return state;
  }
};

export default recordsReducer;
