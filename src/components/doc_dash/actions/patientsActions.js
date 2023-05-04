import PouchDB from "pouchdb-browser";
import Find from "pouchdb-find";
import RelationalPouch from "relational-pouch";

import { v4 as uuidv4 } from "uuid";
import {
  //   SAVE_PATIENT_DATA,
  GET_DOC_PATIENT_LIST,
  //   SAVE_PATIENT_TO_LIST,
  SET_SELECTED_PATIENT,
  SET_PATIENT_FORM_MODE,
  CLEAR_SELECTED_PATIENT,
  TOGGLE_VIDEO_VIEW,
} from "../types";
// import moment from 'moment';
import { pad } from "../../utils/helpers";
import store from "../../../redux/store";
import { _fetchApi, _fetchApi2 } from "../../../redux/actions/api";
import { apiURL } from "../../../redux/actions";

PouchDB.plugin(RelationalPouch);
PouchDB.plugin(Find);

export const patients_db = new PouchDB("patients_db");

export function getPatient(_id, cb = (f) => f) {
  return (dispatch) => {
    // console.log(_id, '_________________________________id')
    // const { id, facilityId } = store.getState().auth.user;
    // let userId = facilityId === "doctors" ? id : facilityId;

    // console.log('=====================>', _id);
    // console.log('getting patient', userId, _id);

    _fetchApi(`${apiURL()}/lab/patient/full-info/${_id}`, (data) => {
      if (data) {
        console.log(data);
        // setPatientInfo(data.results[0]);
        cb(data.results[0]);
        dispatch({ type: SET_SELECTED_PATIENT, payload: data.results[0] });
        dispatch({ type: SET_PATIENT_FORM_MODE, payload: "VIEW" });
      }
    });
    // patients_db
    //   .createIndex({ index: { fields: ["userId", "patientHospitalId"] } })
    //   .then(() => {
    //     return patients_db.find({
    //       selector: {
    //         userId: { $eq: userId.toString() },
    //         patientHospitalId: { $eq: _id.toString() },
    //       },
    //     });
    //   })
    //   .then(({ docs }) => {
    //     // console.log(docs);
    //     if (docs.length) {
    //       cb(docs[0]);
    //       dispatch({ type: SET_SELECTED_PATIENT, payload: docs[0] });
    //       dispatch({ type: SET_PATIENT_FORM_MODE, payload: "VIEW" });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
  };
}

export function getPatientInfo(_id, cb = (f) => f, error = (f) => f) {
  const { id, facilityId } = store.getState().auth.user;
  let userId = facilityId === "doctors" ? id : facilityId;

  // console.log('=====================>', _id);
  // console.log('getting patient', userId, _id);

  patients_db
    .createIndex({ index: { fields: ["userId", "patientHospitalId"] } })
    .then(() => {
      return patients_db.find({
        selector: {
          userId: { $eq: userId.toString() },
          patientHospitalId: { $eq: _id.toString() },
        },
      });
    })
    .then(({ docs }) => {
      console.log(docs);
      if (docs.length) {
        cb(docs[0]);
      }
    })
    .catch((err) => {
      error(err);
      console.log("err", err);
    });
}

export function getNextPatientId(cb = (f) => f, error = (f) => f) {
  return (dispatch) => {
    let userId = store.getState().auth.user.id;

    patients_db
      .createIndex({
        index: {
          fields: ["patientId", "userId"],
        },
      })
      .then(function() {
        return patients_db.find({
          selector: {
            patientId: { $gt: null },
            userId: { $eq: JSON.stringify(userId) },
          },
          sort: [{ patientId: "desc" }],
        });
      })
      .then((data) => {
        if (data.docs.length) {
          cb(pad(parseInt(data.docs[0].patientNo) + 1, 4));
        } else {
          cb(pad(1, 4));
        }
      })
      .catch((err) => {
        console.log(err);
        error();
      });
  };
}

export function checkPatientAdmission () {
  
}

export function getPatientByDocId(docId) {
  return (dispatch) => {
    return patients_db
      .get(docId)
      .then((data) => {
        if (data._id) {
          // console.log(data, 'from doc-id');
          dispatch({ type: SET_SELECTED_PATIENT, payload: data });
          //   dispatch({ type: SET_PATIENT_FORM_MODE, payload: 'VIEW' });
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
}

export function getPatientList() {
  return (dispatch) => {
    // const { id, facilityId } = store.getState().auth.user;
    // let userId = facilityId === 'doctors' ? id : facilityId;

    _fetchApi2(
      `${apiURL()}/get/patients?query_type=all`,
      (data) => {
        if (data.success) {
          dispatch({ type: GET_DOC_PATIENT_LIST, payload: data.results });
          // this.setState({
          //   pattient:data.results
          // })
        }
      },
      (err) => {
        console.log(err);
      }
    );

    // console.log(userId);
    // patients_db
    //   .createIndex({
    //     index: {
    //       fields: ['userId'],
    //     },
    //   })
    //   .then(function() {
    //     return patients_db.find({
    //       selector: {
    //         userId: {
    //           $eq: userId.toString(),
    //         },
    //         // patientId: {},
    //         // accountNo: {},
    //         // createdAt: {}
    //       },
    //       // sort: [{ createdAt: 'desc' }],
    //     });
    //   })
    //   .then((data) => {
    //     // console.log(data);
    //     dispatch({ type: GET_DOC_PATIENT_LIST, payload: data.docs });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
}

export function savePatient(data, cb, error) {
  return (dispatch) => {
    let user = store.getState().auth.user;
    data._id = uuidv4();
    data.createdAt = new Date().toISOString();
    data.createdBy = `${user.firstname} ${user.lastname}`;
    data.accessibleTo = [];
    data.uid = uuidv4();
    data.userId = `${user.id}`;
    data.updatedAt = new Date().toISOString();
    data.updatedBy = `${user.firstname} ${user.lastname}`;

    patients_db
      .put(data)
      .then(() => {
        cb(data);
        dispatch(getPatientList());
      })
      .catch((err) => {
        error();
        console.log(err);
      });
  };
}

export function updatePatient(patientInfo = {}, cb = (f) => f) {
  return (dispatch) => {
    let user = store.getState().auth.user;
    patientInfo.updatedAt = new Date().toISOString();
    patientInfo.updatedBy = `${user.firstname} ${user.lastname}`;

    patients_db
      .put(patientInfo)
      .then((d) => {
        // console.log(d);
        cb();
        dispatch(getPatient(patientInfo._id));
      })
      .catch((err) => console.log(err));
  };
}

export function saveNote(id, data, cb, error) {
  return (dispatch) => {
    data._id = uuidv4();
    data.createdAt = new Date().toISOString();

    patients_db
      .get(id)
      .then((result) => {
        let notes;
        // console.log(result);

        if (result.notes) {
          notes = [...result.notes, data];
        } else {
          notes = [data];
        }
        let newUserObj = { ...result, notes };
        // console.log(newUserObj);

        patients_db
          .put(newUserObj)
          .then(() => {
            cb();
            dispatch(getPatientByDocId(id));
          })
          .catch((err) => {
            error();
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function clearPatient() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_SELECTED_PATIENT,
    });
  };
}

export const closePatientForm = () => ({
  type: SET_PATIENT_FORM_MODE,
  payload: "VIEW",
});

export const toggleVideoView = (s = null) => ({
  type: TOGGLE_VIDEO_VIEW,
  payload: s,
});

export const referPatient = (data) => {};
