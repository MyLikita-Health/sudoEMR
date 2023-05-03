import PouchDB from "pouchdb-browser";
import Find from "pouchdb-find";
import { v4 as UUIDV4 } from "uuid";
import {
  GET_APPOINTMENTS,
  SET_PATIENT_APPOINTMENTS,
  SET_SELECTED_APPOINTMENT,
  CLEAR_SELECTED_APPOINTMENT,
  LOADING_UNAPPROVED_APPT,
  GET_UNAPPROVED_APPT,
  GET_PATIENTS_APPOINTMENTS,
} from "../types";
// import moment from 'moment';
import store from "../../../redux/store";
import { createNotification } from "../../../redux/actions/notifications";
import {
  getAppointments as getPatientAppointment,
  getPatientPendingAppt,
} from "../../patient/actions/appointments";
import { _postApi } from "../../../redux/actions/api";
import { apiURL } from "../../../redux/actions";
PouchDB.plugin(Find);

export const appointment_db = new PouchDB("appointment_db");

// let myMapReduce = {
//   map: doc => emit(doc._id, doc.number),
//   reduce: '_stats'
// }

export function reviewAppt(newAppt = {}, not, cb = (f) => f) {
  return (dispatch) => {
    console.log(newAppt);
    appointment_db
      .put(newAppt)
      .then(() => {
        console.log("Appt review success");
        dispatch(getUnapprovedAppointments());
        createNotification(not);
        cb();
      })
      .catch((err) => console.log("Appt review failed", err));
  };
}

export function getUnapprovedAppointments() {
  return (dispatch) => {
    dispatch({ type: LOADING_UNAPPROVED_APPT });
    const userId = store.getState().auth.user.id;

    appointment_db
      .createIndex({
        index: {
          fields: ["type", "status", "userId", "start"],
        },
      })
      .then(async () => {
        try {
          const result = await appointment_db.find({
            selector: {
              type: { $eq: "patient" },
              status: {
                $in: ["request", "reviewed"],
              },
              userId: { $eq: JSON.stringify(userId) },
              start: { $gte: null },
            },
            // sort: [{ start: 'asc' }],
          });
          console.log("Get unapproved success");
          dispatch({ type: GET_UNAPPROVED_APPT, payload: result.docs });
          dispatch({ type: LOADING_UNAPPROVED_APPT });
        } catch (err) {
          console.log(err);
          dispatch({ type: LOADING_UNAPPROVED_APPT });
        }
      });
  };
}

export function getAppointments() {
  return (dispatch) => {
    const userId = store.getState().auth.user.id;
    appointment_db
      .find({
        selector: {
          type: { $eq: "personal" },
          status: { $in: ["approved", "created"] },
          userId: { $eq: JSON.stringify(userId) },
          start: { $gte: null },
        },
      })
      .then((data) => {
        dispatch({ type: GET_APPOINTMENTS, payload: data.docs });
        dispatch(getPatientsAppointments());
        // console.log(data.docs);
      })
      .catch((err) => console.log(err));
  };
}

export function getPatientsAppointments() {
  return (dispatch) => {
    const userId = store.getState().auth.user.id;
    appointment_db
      .find({
        selector: {
          type: { $eq: "patient" },
          status: { $in: ["approved", "created"] },
          userId: { $eq: JSON.stringify(userId) },
          start: { $gte: null },
        },
      })
      .then((data) => {
        dispatch({ type: GET_PATIENTS_APPOINTMENTS, payload: data.docs });
        // console.log(data.docs);
      })
      .catch((err) => console.log(err));
  };
}

export function getAppointment(appointmentId, cb) {
  return (dispatch) => {
    appointment_db
      .find({ selector: { _id: { $eq: appointmentId } } })
      .then(({ docs }) => {
        if (docs.length) {
          // console.log(docs[0])
          dispatch({ type: SET_SELECTED_APPOINTMENT, payload: docs[0] });
          cb(docs[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getPatientAppointments(pid = "") {
  return (dispatch) => {
    const userId = store.getState().auth.user.id;

    appointment_db
      .find({
        selector: {
          userId: { $eq: userId.toString() },
          patientId: { $eq: pid },
        },
      })
      .then((data) => {
        // cb(data.docs);
        dispatch({ type: SET_PATIENT_APPOINTMENTS, payload: data.docs });
        // console.log(data);
      })
      .catch((err) => {
        err();
        console.log(err);
      });
  };
}

export const setSelectedAppointment = (appointment) => ({
  type: SET_SELECTED_APPOINTMENT,
  payload: appointment,
});

export const clearSelectedAppointment = () => ({
  type: CLEAR_SELECTED_APPOINTMENT,
});

// export function saveAppointment(data = {}, cb = (f) => f, error = (f) => f) {
//   return (dispatch) => {
//     // console.log('from action ====>', data)
//     let user = store.getState().auth.user;
//     data._id = UUIDV4();
//     data.type = "personal";
//     data.status = "created";
//     data.notify = [];
//     data.createdAt = new Date().toISOString();
//     data.createdBy = `${user.firstname} ${user.lastname}`;
//     data.facilityId = `${user.facilityId}`;
//     data.userId = `${user.id}`;
//     data.updatedAt = new Date().toISOString();
//     data.updatedBy = `${user.firstname} ${user.lastname}`;

//     appointment_db
//       .put(data)
//       .then(() => {
//         cb();
//         dispatch(getAppointments());
//       })
//       .catch((err) => {
//         error();
//         console.log(err);
//       });
//   };
// }
export function appointmentFunc(data, cb, error) {
  _postApi(
    `${apiURL()}/all/appointment/new`,
    data,
    (d) => {
      cb(d);
    },
    error()
  );
}

export function updateAppointment(
  appointmentId = "",
  appointmentDetails = "",
  cb = (f) => f,
  error = (f) => f
) {
  return (dispatch) => {
    let user = store.getState().auth.user;
    appointmentDetails.updatedAt = new Date().toISOString();
    appointmentDetails.updatedBy = `${user.firstname} ${user.lastname}`;
    // appointment_db.get(appointmentId)
    // .then()
    appointment_db
      .put(appointmentDetails)
      .then(() => {
        cb();
        dispatch(getAppointment(appointmentId));
      })
      .catch((err) => error(err));
  };
}

export function deleteAppointment(appointmentId, cb) {
  return (dispatch) => {
    appointment_db
      .get(appointmentId)
      .then((data) => {
        data._deleted = true;
        return appointment_db
          .put(data)
          .then(() => {
            cb();
            dispatch(getAppointments());
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
}
