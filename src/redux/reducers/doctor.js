import {
  SAVE_VITAL_SIGNS,
  SAVE_PRESENTING_COMPLAINTS,
  SAVE_P_COMPLAINT_HISTORY,
  SAVE_PREV_MED_HISTORY,
  SAVE_PROBLEMS,
  SAVE_LAB_INVESTIGATIONS,
  SAVE_LAB_REQUEST,
  SAVE_PROVISIONAL_DIAGNOSIS,
  SAVE_ATHROPOMETRY,
  SAVE_MANAGEMENT_PLAN,
  SAVE_PRESCRIPTION_REQUEST,
  SAVE_OBSERVATION_REQUEST,
  SAVE_DRESSING_REQUEST,
  SAVE_SYS_EXAM,
  SET_TAB,
  SET_PATIENT_TO_SEE,
  GET_PATIENT_PAST_VISIT,
  GETTING_PATIENT_PAST_VISIT,
  RESET_DIAGNOSIS_FORM,
  SAVE_FOLLOWUP_APPOINTMENT,
  SAVE_MSS,
  SAVE_CVS,
  SAVE_RESPIRATORY,
  SAVE_ABDOMEN,
  SAVE_CNS,
  SAVE_GPE,
  // SET_CURRENT_DOCTOR_CONSULTATION_PATIENT,
} from "../actions/types";

const defaultState = {
  activeTab: "",
  patient: {},
  encounterDetails: {},
  pastVisits: [],
  getPastVisitsLoading: false,
  presentingComplaints: [],
  vitalSigns: {
    tempreture: "",
    pulse: "",
    bloodpressure: "",
    vital_height: "",
    respiratoryRate: "",
    vital_weight: "",
  },
  historyOfPComplaints: {
    others: "",
    pastMedicalHistory: "",
    pastSurgicalHistory: "",
    allergy: "",
    drugAllergy: "",
    social: "",
    otherAllergies: "",
    otherSocialHistory: "",
    obtsGyneaHistory: "",
    drugHistory: "",
    hypertensive: "",
    hypertensiveDuration: null,
    hypertensiveRegularOnMedication: null,
    diabetic: "",
    optimalSugarControl: null,
    asthmatic: "",
    pbnh: "",
    nutrition: "",
    immunization: "",
    development: "",
  },
  // prevMedHistory: {
  //   pbnh: '',
  //   nutrition: '',
  //   immunization: '',
  //   development: '',
  // },
  systemExam: {
    palor: "",
    dehydration: "",
    icterus: "",
    cyanosis: "",
    rDistress: "",
    pedalEdema: "",
    gLymphadenopathy: "",
    otherFinding: "",
    generalexamination: "",
    mss: "",
    cvs: "",
    abdomen: "",
    respiratory: "",
    otherSysExamination: "",
    cns: "",
    eye_opening: "",
    BVR: "",
    BMR: "",
    gcs: "",
    RUL: "",
    LUL: "",
    RLL: "",
    LLL: "",
    mssPalpation: "",
    mssInspection: "",
    mssPercussion: "",
    mssAuscultation: "",
  },
  problems: [],
  labInvestigations: [],
  labRequest: [],
  provisionalDiagnosis: [],
  athropometry: {
    weight: "",
    headcircumference: "",
    height: "",
    muac: "",
  },
  managementPlan: {
    addedcare: "",
    patientStatus: "",
    appointment: {},
  },
  prescriptionRequest: [],

  observation_request: "",
  dressingRequest: {
    partToDress: "",
    dresswith: "",
  },
  // currDoctorConsulationPatient: {},
};

const doctorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    case SAVE_VITAL_SIGNS:
      // console.log(action)
      return {
        ...state,
        vitalSigns: {
          ...state.vitalSigns,
          ...action.payload,
        },
      };
    case SAVE_PRESENTING_COMPLAINTS:
      return {
        ...state,
        presentingComplaints: action.payload,
      };
    case SAVE_P_COMPLAINT_HISTORY:
      return {
        ...state,
        historyOfPComplaints: {
          ...state.historyOfPComplaints,
          ...action.payload,
        },
      };
    case SAVE_PREV_MED_HISTORY:
      return {
        ...state,
        historyOfPComplaints: {
          ...state.historyOfPComplaints,
          ...action.payload,
        },
      };
    case SAVE_SYS_EXAM:
      return {
        ...state,
        systemExam: {
          ...state.systemExam,
          ...action.payload,
        },
      };
    case SAVE_PROBLEMS:
      return {
        ...state,
        problems: action.payload,
      };
    case SAVE_LAB_INVESTIGATIONS:
      // let newList = state.labInvestigations
      return {
        ...state,
        labInvestigations: action.payload,
      };
    case SAVE_LAB_REQUEST:
      // let newList = state.labInvestigations
      return {
        ...state,
        labRequest: action.payload,
      };
    case SAVE_PROVISIONAL_DIAGNOSIS:
      return {
        ...state,
        provisionalDiagnosis: action.payload,
      };
    case SAVE_ATHROPOMETRY:
      return {
        ...state,
        athropometry: {
          ...state.athropometry,
          ...action.payload,
        },
      };
    case SAVE_MANAGEMENT_PLAN:
      return {
        ...state,
        managementPlan: {
          ...state.managementPlan,
          ...action.payload,
        },
      };
    case SAVE_FOLLOWUP_APPOINTMENT:
      return {
        ...state,
        managementPlan: {
          ...state.managementPlan,
          appointment: action.payload,
        },
      };
    case SAVE_PRESCRIPTION_REQUEST:
      return {
        ...state,
        prescriptionRequest: action.payload,
      };
    case SAVE_OBSERVATION_REQUEST:
      return {
        ...state,
        observation_request: action.payload,
      };
    case SAVE_DRESSING_REQUEST:
      return {
        ...state,
        dressingRequest: {
          ...state.dressingRequest,
          ...action.payload,
        },
      };
    case SET_PATIENT_TO_SEE:
      return {
        ...state,
        patient: action.payload,
      };
    case GET_PATIENT_PAST_VISIT:
      return {
        ...state,
        pastVisits: action.payload,
      };
    case GETTING_PATIENT_PAST_VISIT:
      return {
        ...state,
        getPastVisitsLoading: !state.getPastVisitsLoading,
      };
    case SAVE_MSS:
      return {
        ...state,
        systemExam: {
          ...state.systemExam,
          ...action.payload,
        },
      };
    case SAVE_CVS:
      return {
        ...state,
        systemExam: {
          ...state.systemExam,
          ...action.payload,
        },
      };
    case SAVE_RESPIRATORY:
      return {
        ...state,
        systemExam: {
          ...state.systemExam,
          ...action.payload,
        },
      };
    case SAVE_ABDOMEN:
      return {
        ...state,
        systemExam: {
          ...state.systemExam,
          ...action.payload,
        },
      };
    case SAVE_CNS:
      return {
        ...state,
        systemExam: {
          ...state.systemExam,
          ...action.payload,
        },
      };
    case SAVE_GPE:
      return {
        ...state,
        systemExam: {
          ...state.systemExam,
          SAVE_GPE,
          ...action.payload,
        },
      };

    case RESET_DIAGNOSIS_FORM:
      return defaultState;

    default:
      return state;
  }
};

export default doctorReducer;
