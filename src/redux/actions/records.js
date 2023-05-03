import {
  GET_IDS,
  GET_UNASSIGNED_PATIENTS,
  GET_PATIENT_LIST,
  SET_PATIENTS,
  SET_BED_LIST,
  SET_BED_OBJ,
  SET_IN_PATIENT_LIST,
  SET_AVAILABLE_BED_LIST,
  SET_AVAILABLE_BED_OBJ,
  SET_PATIENTS_DISCHARGED_BY_DOCTOR,
  VERIFY_PATIENT_ACCOUNT,
} from "./actionTypes";
import { url } from "../../components/utils/helpers";
import { _fetchApi, _fetchApi2 } from "./api";
import { recordsDB } from "../../components/record/Patientlist";
import store from "../store";
import { apiURL } from ".";

const baseAPI = `${url}/patientrecords`;

export function getIds() {
  return (dispatch) => {
    _fetchApi(
      `${baseAPI}/getIds`,
      ({ arr }) => {
        dispatch({ GET_IDS, payload: arr });
      },
      (err) => {
        console.log(err);
      }
    );
  };
}

export function getUnassignedPatients() {
  return (dispatch) => {
    _fetchApi(
      `${baseAPI}/unassignedPatientlist`,
      ({ results }) => {
        if (results) {
          dispatch({ type: GET_UNASSIGNED_PATIENTS, payload: results });
        }
      },
      (err) => console.log(err)
    );
  };
}

export function verifyPatientAccountType(accountNo) {
  let acct = accountNo.split('-')
  return (dispatch) => {
    _fetchApi(
      `${baseAPI}/verify-patient-account-type/${acct[0]}`,
      ({ results }) => {
        if (results) {
          dispatch({
            type: VERIFY_PATIENT_ACCOUNT,
            payload: results[0].accountType,
          });
        }
      },
      (err) => console.log(err)
    );
  };
}

export function getPatients(success = (f) => f, error = (f) => f) {
  return (dispatch) => {
    recordsDB
      .get("patients")
      .then(({ patients }) => {
        success(patients);
        dispatch({ type: GET_PATIENT_LIST, payload: patients });
      })
      .catch((err) => console.log(err));

    _fetchApi(
      `${baseAPI}/patientlist`,
      ({ results }) => {
        success(results);
        dispatch({ type: GET_PATIENT_LIST, payload: results });
        savePatientlistToCache(results);
        dispatch(setPatientDetails(results));
      },
      (err) => {
        error(err);
        console.log(err);
      }
    );
  };
}

function setPatientDetails(results = []) {
  return (dispatch) => {
    if (results.length) {
      recordsDB
        .get("patientsDetails")
        .then(({ patientsDetails }) => {
          dispatch({
            type: SET_PATIENTS,
            payload: patientsDetails,
          });
        })
        .catch(() => console.log("An error occurred"));

      let patients = [];
      let names = [];
      let accountNos = [];
      for (let i = 0; i < results.length; i++) {
        const { accountNo, firstname, surname, id } = results[i];
        patients.push({ accountNo, firstname, surname, id });
        names.push(`${surname} ${firstname} (${accountNo})`);
        accountNos.push(accountNo);
      }
      savePatientDetailsToCache(patients, names, accountNos);
      dispatch({
        type: SET_PATIENTS,
        payload: { patients, names, accountNos },
      });
    }
  };
}

function savePatientlistToCache(results = []) {
  if (results.length) {
    recordsDB
      .get("patients")
      .then((doc) => {
        recordsDB
          .put({
            _id: "patients",
            _rev: doc._rev,
            patients: results,
          })
          .then(() => console.log("updated patients"))
          .catch((err) => console.log(err));
      })
      .catch(() => {
        recordsDB
          .put({
            _id: "patients",
            patients: results,
          })
          .then(() => console.log("added patientslist"))
          .catch((err) => console.log(err));
      });
  }
}

function savePatientDetailsToCache(patients, names, accountNos) {
  const results = { patients, names, accountNos };
  recordsDB
    .get("patientsDetails")
    .then((doc) => {
      recordsDB
        .put({
          _id: "patientsDetails",
          _rev: doc._rev,
          patientsDetails: results,
        })
        .then(() => console.log("updated patientsDetails"))
        .catch((err) => console.log(err));
    })
    .catch(() => {
      recordsDB
        .put({
          _id: "patientsDetails",
          patientsDetails: results,
        })
        .then(() => console.log("added patientsDetails"))
        .catch((err) => console.log(err));
    });
}

export function getBeds() {
  return (dispatch) => {
    const user = store.getState().auth.user;
    _fetchApi2(
      `${apiURL()}/beds?query_type=bedlist&facilityId=${user.facilityId}`,
      (data) => {
        if (data && data.results) {
          let f = {};
          data.results.forEach((i) => {
            if (Object.keys(f).includes(i.class_type)) {
              f[i.class_type] = [...f[i.class_type], i];
            } else {
              f[i.class_type] = [i];
            }
          });
          // setBedList(f);
          dispatch({ type: SET_BED_LIST, payload: data.results });
          dispatch({ type: SET_BED_OBJ, payload: f });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
}

export function getAvailableBeds(callback = (f) => f) {
  return (dispatch) => {
    const user = store.getState().auth.user;
    _fetchApi2(
      `${apiURL()}/beds?query_type=available&facilityId=${user.facilityId}`,
      (data) => {
        if (data && data.results) {
          let f = {};
          data.results.forEach((i) => {
            if (Object.keys(f).includes(i.class_type)) {
              f[i.class_type] = [...f[i.class_type], i];
            } else {
              f[i.class_type] = [i];
            }
          });
          // setBedList(f);
          dispatch({ type: SET_AVAILABLE_BED_LIST, payload: data.results });
          dispatch({ type: SET_AVAILABLE_BED_OBJ, payload: f });
          callback();
        }
      },
      (err) => {
        console.log(err);
        callback();
      }
    );
  };
}

export function getInPatients(cb = (f) => f) {
  return (dispatch) => {
    const facilityId = store.getState().auth.user.facilityId;
    _fetchApi2(
      `${apiURL()}/record/in-patients?query_type=in_patients&facilityId=${facilityId}`,
      (data) => {
        if (data && data.results) {
          dispatch({ type: SET_IN_PATIENT_LIST, payload: data.results });
        }
        cb();
      },
      (err) => {
        console.error(err);
        cb();
      }
    );
  };
}

export function getInPatientsQuery(
  query_type = "",
  condition = "",
  cb = (f) => f
) {
  const facilityId = store.getState().auth.user.facilityId;
  _fetchApi2(
    `${apiURL()}/record/in-patients?query_type=${query_type}&condition=${condition}&facilityId=${facilityId}`,
    (data) => {
      cb(data);
    },
    (err) => {
      console.error(err);
      cb();
    }
  );
}

export function getPatientDischargedByDoctor(cb = (f) => f) {
  return (dispatch) => {
    const facilityId = store.getState().auth.user.facilityId;
    _fetchApi2(
      `${apiURL()}/record/in-patients?query_type=by_status&condition=discharged_by_doc&facilityId=${facilityId}`,
      (data) => {
        if (data && data.results) {
          dispatch({
            type: SET_PATIENTS_DISCHARGED_BY_DOCTOR,
            payload: data.results,
          });
        }
        cb();
      },
      (err) => {
        console.error(err);
        cb();
      }
    );
  };
}
