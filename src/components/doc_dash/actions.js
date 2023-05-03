import PouchDB from "pouchdb-browser";
import Find from "pouchdb-find";
import { _postApi } from "../../redux/actions/api";
import { apiURL } from "../../redux/actions";
import {
  //   SAVE_PATIENT_DATA,
  GET_DOC_PATIENT_LIST,
  SAVE_PATIENT_TO_LIST,
  // SAVE_NEW_APPOINTMENT,
  GET_APPOINTMENTS,
} from "./types";

PouchDB.plugin(Find);

const doctor_db = new PouchDB("doctor_db");

// "selector": {
//     "places.0.place_name": {
//         "$gte": null
//       }

//   },
//   "fields": [
//     "_id",
//     "places.0.place_name"
//   ],
//   "sort": [
//     {
//       "places.0.place_name": "asc"
//     }
//   ]

export function getPatient(id) {
  return (dispatch) => {
    doctor_db
      .createIndex({ index: { fields: ["_id", "patients[].patientId"] } })
      .then(() => {
        return doctor_db
          .find({
            selector: {
              patients: {
                $elemMatch: { patientId: "001" },
              },
            },
            // fields: ['_id', 'patients.[].patientId'],
            // sort: [{ 'patients.[].patientId': 'asc' }]remoteURL,
          })
          .then((results) => console.log(results))
          .catch((err) => console.log(err));
      });

    // doctor_db.find({})
    // doctor_db
    //   .allDocs({ include_docs: true })
    //   .then((results) => {
    //     console.log(results);
    //   })
    //   .catch((err) => console.log(err));

    // doctor_db.get('patients')
  };
}

export function getPatientList() {
  return (dispatch) => {
    doctor_db
      .get("patients")
      .then(({ _rev, patients }) => {
        dispatch({ type: GET_DOC_PATIENT_LIST, payload: patients });
      })
      .catch((err) => console.log(err));
  };
}

export function getAppointments() {
  return (dispatch) => {
    doctor_db
      .get("appointments")
      .then(({ appointments }) =>
        dispatch({ type: GET_APPOINTMENTS, payload: appointments })
      )
      .catch((err) => console.log(err));
  };
}

// export function saveAppointment(data, cb, error) {
//   return (dispatch) => {
//     data.id = '';
//     doctor_db
//       .get('appointments')
//       .then(({ _rev, appointments }) => {
//         cb();
//         if (appointments) {
//           let newAppointmentList = [...appointments, data];
//           doctor_db
//             .put({
//               _id: 'appointments',
//               _rev,
//               appointments: newAppointmentList,
//             })
//             .then(() =>
//               dispatch({
//                 type: SAVE_NEW_APPOINTMENT,
//                 payload: newAppointmentList,
//               })
//             )
//             .catch(() => console.log('An error occured'));
//         }
//       })
//       .catch(() => {
//         error();
//         let newList = [data];
//         doctor_db
//           .put({ _id: 'appointments', appointments: newList })
//           .then(() => {
//             dispatch({ type: SAVE_NEW_APPOINTMENT, payload: newList });
//           })
//           .catch(() => console.log('error saving new appointment'));
//       });
//   };
// }



export function savePatient(data, cb, error) {
  return (dispatch) => {
    //   doctor_db.put(data)
    doctor_db
      .get("patients")
      .then(({ _rev, patients }) => {
        cb();
        if (patients) {
          let newPatientList = [...patients, data];
          doctor_db
            .put({ _id: "patients", _rev, patients: newPatientList })
            .then(() => {
              console.log("update patient list");
              dispatch({ type: SAVE_PATIENT_TO_LIST, payload: newPatientList });
            })
            .catch((err) => console.log("Error updating patient list", err));
        }
      })
      .catch(() => {
        error();
        let newList = [data];
        doctor_db
          .put({ _id: "patients", patients: newList })
          .then(() => {
            dispatch({ type: SAVE_PATIENT_TO_LIST, payload: newList });
          })
          .catch(() => console.log("error adding patient data"));
      });
  };
}
