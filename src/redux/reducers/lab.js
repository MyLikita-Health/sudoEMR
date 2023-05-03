// import {
//   // LOADING_LAB_LIST,
//   START_LOADING_LAB_HISTORY,
//   START_LOADING_LAB_LIST,
//   STOP_LOADING_LAB_HISTORY,
//   STOP_LOADING_LAB_LIST,
// } from '../../components/lab/labRedux/types'
import {
  GET_LAB_SERVICES,
  LOADING_LAB_SERVICES,
  LOADING_PENDING_LAB_REQUEST,
  GET_PENDING_LAB_REQUEST,
  LOADING_PATIENT_LAB_TEST,
  GET_PATIENT_LAB_TEST,
  GET_FACILITY_PENDING_LABS,
  LOADING_FACILITY_PENDING_LABS,
  SET_CURRENT_PATIENT_LAB_INFO,
  LOADING_LAB_TREE,
  SET_LAB_TREE,
  GET_VALID_TESTS,
  GET_LAB_SERVICES_RAW,
  GET_DOC_LAB_COMMISSION,
  SET_PRINTOUT,
  SET_LAB_PATIENT_LIST,
  SET_LAB_DATERANGE,
  SET_HISTORY_DATERANGE,
  SET_DEPARTMENT_LIST,
  SET_UNITS_LIST,
  SET_GROUP_LIST,
  GET_LAB_SETUP_ACCOUNT,
} from '../actions/actionTypes'
import moment from 'moment'

const today = moment().format('YYYY-MM-DD')
let tomorrow = moment(today).add(1, 'day').format('YYYY-MM-DD')

const initialState = {
  labservices: [],
  loadingLabServices: false,
  deletingService: false,
  loadingPendingLabRequests: false,
  pendingLabRequest: [],
  loadingLabList: false,
  loadingLabHistory: false,
  loadingPatientLabTest: false,
  patientLabTest: false,
  facilityPendingLab: [],
  loadingFacilityPendingLabs: false,
  selectedPatientLabInfo: {},
  labTree: [],
  loadingLabTree: false,
  validLabTests: [],
  rawLabservices: [],
  doctorCommission: {
    amt_generated: 0,
    collected: 0,
    balance: 0,
  },
  labPrintOut: {},
  patientList: [],
  labDateRange: {
    from: today,
    to: tomorrow,
  },
  labHistoryDateRange: {
    from: today,
    to: tomorrow,
  },
  departmentList: [],
  unitList: [],
  groupList: [],
  lab_setup_account:[]
}

const labReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LAB_SERVICES:
      return {
        ...state,
        labservices: action.payload,
      }
    case GET_LAB_SERVICES_RAW:
      return {
        ...state,
        rawLabservices: action.payload,
      }
    case LOADING_LAB_SERVICES:
      return {
        ...state,
        loadingLabServices: !state.loadingLabServices,
      }
    case GET_PENDING_LAB_REQUEST: {
      if (action.requests) {
        return {
          ...state,
          pendingLabRequest: action.requests,
        }
      } else return state
    }
    case LOADING_PENDING_LAB_REQUEST:
      return {
        ...state,
        loadingPendingLabRequests: !state.loadingPendingLabRequests,
      }
    case LOADING_PATIENT_LAB_TEST:
      return {
        ...state,
        loadingPatientLabTest: !state.loadingPatientLabTest,
      }
    case GET_PATIENT_LAB_TEST:
      return {
        ...state,
        patientLabTest: action.payload,
      }
    case GET_FACILITY_PENDING_LABS:
      return {
        ...state,
        facilityPendingLab: action.payload,
      }
    case LOADING_FACILITY_PENDING_LABS:
      return {
        ...state,
        loadingFacilityPendingLabs: !state.loadingFacilityPendingLabs,
      }
    case SET_CURRENT_PATIENT_LAB_INFO:
      return {
        ...state,
        selectedPatientLabInfo: action.payload,
      }
    case LOADING_LAB_TREE:
      return {
        ...state,
        loadingLabTree: !state.loadingLabTree,
      }
    case SET_LAB_TREE:
      return {
        ...state,
        labTree: action.payload,
      }
    case GET_VALID_TESTS:
      return {
        ...state,
        validLabTests: action.payload,
      }
    // case START_LOADING_LAB_LIST: {
    //   return {
    //     ...state,
    //     loadingLabList: true,
    //   }
    // }
    // case STOP_LOADING_LAB_LIST: {
    //   return {
    //     ...state,
    //     loadingLabList: false,
    //   }
    // }
    // case START_LOADING_LAB_HISTORY: {
    //   return {
    //     ...state,
    //     loadingLabList: true,
    //   }
    // }
    // case STOP_LOADING_LAB_HISTORY: {
    //   return {
    //     ...state,
    //     loadingLabList: false,
    //   }
    // }
    case GET_DOC_LAB_COMMISSION:
      return {
        ...state,
        doctorCommission: action.payload,
      }
    case SET_PRINTOUT:
      return {
        ...state,
        labPrintOut: action.payload,
      }
    case SET_LAB_PATIENT_LIST:
      return {
        ...state,
        patientList: action.payload,
      }
    case SET_LAB_DATERANGE:
      return {
        ...state,
        labDateRange: {
          ...state.labDateRange,
          [action.payload.key]: action.payload.value,
        },
      }

    case SET_HISTORY_DATERANGE:
      return {
        ...state,
        labHistoryDateRange: {
          ...state.labHistoryDateRange,
          [action.payload.key]: action.payload.value,
        },
      }
    case SET_DEPARTMENT_LIST:
      return {
        ...state,
        departmentList: action.payload,
      }
    case SET_UNITS_LIST:
      return {
        ...state,
        unitList: action.payload,
      }
    case SET_GROUP_LIST:
      return {
        ...state,
        groupList: action.payload,
      }
    case GET_LAB_SETUP_ACCOUNT:
      return{
        ...state,
        lab_setup_account:action.payload
      }
    default:
      return state
  }
}

export default labReducer
