import {
  SUBMIT_DIAGNOSIS_LOADING,
  GETTING_PATIENT_ASSIGNED_TODAY,
  GETTING_PATIENTS_ASSIGNED_TO_DOC,
  GET_PATIENTS_ASSIGNED_TO_DOC,
} from "./types";
import { _postApi, _fetchApi } from "./api";
import { apiURL } from "./index";
import { _customNotify, _warningNotify } from "../../components/utils/helpers";

const endpoint = "diagnosis";

export const saveNewDiagnosis = (data) => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_DIAGNOSIS_LOADING });
    _postApi(
      `${apiURL()}/${endpoint}/new`,
      data,
      () => {
        _customNotify("Diagnosis submitted");
        dispatch({ type: SUBMIT_DIAGNOSIS_LOADING });
      },
      (err) => {
        _warningNotify("An error occured, please try again later");
        console.log(err);
        dispatch({ type: SUBMIT_DIAGNOSIS_LOADING });
      }
    );
  };
};

export const getPatientAssignedToday = () => {
  return (dispatch) => {
    dispatch({ type: GETTING_PATIENT_ASSIGNED_TODAY });
    // _fetchApi(
    //   `${apiURL()}/patientrecords/patientAssignedToday`,
    //   ({ results }) => {
    //     console.log(results);
    //     dispatch({ type: GET_PATIENT_ASSIGNED_TODAY, payload: results });
    //     dispatch({ type: GETTING_PATIENT_ASSIGNED_TODAY });
    //   },
    //   (err) => {
    //     dispatch({ type: GETTING_PATIENT_ASSIGNED_TODAY });
    //     console.log(err);
    //   }
    // );
  };
};

export const assignPatientToDoc = () => {
  return (dispatch) => {
    _postApi();
  };
};

export const getPatientAssignedToDoctor = (doc) => {
  return (dispatch) => {
    dispatch({ type: GETTING_PATIENTS_ASSIGNED_TO_DOC });
    _fetchApi(
      `${apiURL()}/patientrecords/doctor/${doc}`,
      ({ results }) => {
        dispatch({ type: GET_PATIENTS_ASSIGNED_TO_DOC, payload: results });
        dispatch({ type: GETTING_PATIENTS_ASSIGNED_TO_DOC });
      },
      (err) => {
        dispatch({ type: GET_PATIENTS_ASSIGNED_TO_DOC, payload: [] });
        dispatch({ type: GETTING_PATIENTS_ASSIGNED_TO_DOC });
        console.log(err);
      }
    );
  };
};
