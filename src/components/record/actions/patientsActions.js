import { v4 as uuidv4 } from 'uuid'
import {
  SET_SELECTED_PATIENT,
  SET_PATIENT_FORM_MODE,
  CLEAR_SELECTED_PATIENT,
} from '../../doc_dash/types'
import { pad, _warningNotify, _customNotify } from '../../utils/helpers'
import store from '../../../redux/store'
import { patients_db } from '../../doc_dash/actions/patientsActions'
import {
  GET_PATIENT_LIST,
  SET_CURRENT_PATIENT,
} from '../../../redux/actions/actionTypes'
import { assign_db } from '../../../db'
import {
  // GET_PATIENT_ASSIGNED_TODAY,
  // GETTING_PATIENT_ASSIGNED_TODAY,
  // GET_PATIENT_WAITING_LIST,
  // GETTING_PATIENT_WAITING_LIST,
  // GETTING_PATIENTS_ASSIGNED_TO_DOC,
  // GET_PATIENTS_ASSIGNED_TO_DOC,
  SET_CURRENT_DOCTOR_CONSULTATION_PATIENT,
} from '../../../redux/actions/types'
import { getWaitingList, getAssignedToday } from './bed-allocation'
import { _fetchApi2, _postApi } from '../../../redux/actions/api'
import { apiURL } from '../../../redux/actions'

export const getPatientByIdAsync = async (_id) => {
  try {
    let patient = await patients_db.get(_id)
    return patient
  } catch (error) {
    console.log(error)
  }
}

export const getPatientInfo = (id, cb = (f) => f, error = (f) => f) => {
  const { facilityId } = store.getState().auth.user
  let userId = facilityId

  patients_db
    .createIndex({ index: { fields: ['userId', 'patientHospitalId'] } })
    .then(() => {
      return patients_db.find({
        selector: {
          userId: { $eq: userId.toString() },
          patientHospitalId: { $eq: id.toString() },
        },
      })
    })
    .then(({ docs }) => {
      // console.log(docs);
      if (docs.length) {
        cb(docs[0])
      }
    })
    .catch((err) => error(err))
}

export function getPatient(_id, cb = (f) => f) {
  return (dispatch) => {
    getPatientInfo(
      _id,
      (patientInfo) => {
        cb(patientInfo)
        dispatch({ type: SET_CURRENT_PATIENT, payload: patientInfo })
      },
      (err) => {
        console.log('err', err)
      },
    )
  }
}

export function getNextPatientId(cb = (f) => f, error = (f) => f) {
  return (dispatch) => {
    let userId = store.getState().auth.user.id

    patients_db
      .createIndex({
        index: {
          fields: ['patientId', 'userId'],
        },
      })
      .then(function () {
        return patients_db.find({
          selector: {
            patientId: { $gt: null },
            userId: { $eq: JSON.stringify(userId) },
          },
          sort: [{ patientId: 'desc' }],
        })
      })
      .then((data) => {
        if (data.docs.length) {
          cb(pad(parseInt(data.docs[0].patientNo) + 1, 4))
        } else {
          cb(pad(1, 4))
        }
      })
      .catch((err) => {
        console.log(err)
        error()
      })
  }
}

export function getPatientByDocId(docId) {
  return (dispatch) => {
    return patients_db
      .get(docId)
      .then((data) => {
        if (data._id) {
          // console.log(data, 'from doc-id');
          dispatch({ type: SET_SELECTED_PATIENT, payload: data })
          //   dispatch({ type: SET_PATIENT_FORM_MODE, payload: 'VIEW' });
        }
      })
      .catch((err) => {
        console.log('err', err)
      })
  }
}

export function getPatientList() {
  return (dispatch) => {
    const { facilityId } = store.getState().auth.user
    let userId = facilityId

    // console.log(userId);
    patients_db
      .createIndex({
        index: {
          fields: ['userId'],
        },
      })
      .then(function () {
        return patients_db.find({
          selector: {
            userId: {
              $eq: userId.toString(),
            },
            // patientId: {},
            // accountNo: {},
            // createdAt: {}
          },
          // sort: [{ createdAt: 'desc' }],
        })
      })
      .then((data) => {
        // console.log(data);
        dispatch({ type: GET_PATIENT_LIST, payload: data.docs })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

// const getPatient = (searchTerm,val) => {
//   const map = doc => {
//     let searchTerm, regEx;

//     searchTerm = val.replace(/[$-\/?[-^{|}]/g, '\\$&')
//     regEx = new RegExp(searchTerm, 'i')

//     if(doc.facilityId.match(regEx) || doc.patientHospitalId.match(regEx)) {
//       emit(doc._id, { ...doc })
//     }

//   }

//   patients_db.query(map, (err, resp) => {
//     if(err) {
//       console.log(err)
//     }

//     if(resp) {
//       // use resp
//     }
//   })
// }

export function savePatient(data = {}, cb = (f) => f, error = (f) => f) {
  // return (dispatch) => {
  let user = store.getState().auth.user
  data.createdAt = new Date().toISOString()
  data.createdBy = `${user.firstname} ${user.lastname}`
  data.patientHospitalId = `${data.clientAccount}-${data.clientBeneficiaryAcc}`
  data.accessibleTo = []
  data.userId = `${user.facilityId}`
  data.updatedAt = new Date().toISOString()
  data.updatedBy = `${user.firstname} ${user.lastname}`

  // console.log("trying to save the data");
  patients_db
    .put(data)
    .then(() => {
      cb(data)
      // console.log("Submitted to couchdb");
      // dispatch(getPatientList());
    })
    .catch((err) => {
      error()
      console.log(err)
    })
  // };
}

export function updatePatient(patientInfo = {}, cb = (f) => f) {
  return (dispatch) => {
    let user = store.getState().auth.user
    patientInfo.updatedAt = new Date().toISOString()
    patientInfo.updatedBy = `${user.firstname} ${user.lastname}`

    patients_db
      .put(patientInfo)
      .then((d) => {
        // console.log(d);
        // cb();
        _customNotify('Patient updated successfully.')
        dispatch(getPatient(patientInfo._id, cb))
      })
      .catch((err) => {
        _warningNotify('An error occurred.')
        cb()
        console.log(err)
      })
  }
}

export function assignPatient(data, cb = (f) => f, error = (f) => f) {
  return (dispatch) => {
    console.log('assigning')
    let user = store.getState().auth.user

    data.createdAt = new Date().toISOString()
    data.createdBy = `${user.firstname} ${user.lastname}`
    data.userId = `${user.facilityId}`
    data.updatedAt = new Date().toISOString()
    data.updatedBy = `${user.firstname} ${user.lastname}`
    data._id = uuidv4()

    _postApi(`${apiURL()}/patientrecords/assign`, data, () => {
      cb(data)
      dispatch(getAssignedToday())
      dispatch(getWaitingList())
    })

    // assign_db
    //   .createIndex({ index: { fields: ["patientId", "status"] } })
    //   .then(() =>
    //     assign_db.find({
    //       selector: {
    //         patientId: { $eq: data.patientId },
    //         status: { $eq: "new" },
    //       },
    //     })
    //   )
    //   .then((resp) => {
    //     console.log(resp, user.id);
    //     if (resp.docs && resp.docs.length) {
    //       // alert("found");
    //       _customNotify('Patient already assigned')
    //       assign_db
    //         .put({ ...data, _id: resp.docs._id })
    //         .then(() => {
    //           cb(resp);
    //           dispatch(getAssignedToday());
    //           dispatch(getWaitingList());
    //         })
    //         .catch((err) => {
    //           error();
    //           console.log(err);
    //           // _warningNotify("An error occurred.");
    //         });
    //     } else {
    //       // alert("not not not found");
    //       assign_db
    //         .put(data)
    //         .then(() => {
    //           cb(data);
    //           dispatch(getAssignedToday());
    //           dispatch(getWaitingList());
    //         })
    //         .catch((err) => {
    //           error();
    //           console.log(err);
    //           // _warningNotify("An error occurred.");
    //         });
    //     }
    //     // dispatch({ type: GETTING_PATIENTS_ASSIGNED_TO_DOC });
    //     // dispatch({ type: GET_PATIENTS_ASSIGNED_TO_DOC, payload: data.docs });
    //   })
    //   .catch((err) => {
    //     alert("not found");
    //     console.log(err);
    //     // dispatch({ type: GETTING_PATIENTS_ASSIGNED_TO_DOC });
    //   });
  }
}

// const assignPatient = () => {
//   _postApi(`${apiURL()}/patientrecords/assign`, {
//     type,
//   })
// }

export const getPendingPatient = (type, docId, cb, error) => {
  let user = store.getState().auth.user
  // let today = new Date().toISOString();
  // console.log(today.substr(0, 10));

  _fetchApi2(
    `${apiURL()}/patientrecords/assign?query_type=${type}&assigned_to=${docId}&facilityId=${
      user.facilityId
    }`,
    (data) => {
      if (data.results) {
        cb(data.results)
      }
    },
    (err) => {
      error(err)
    },
  )

  // assign_db
  //   .createIndex({
  //     index: { fields: ["userId", "status", "type", "createdAt"] },
  //   })
  //   .then(() =>
  //     assign_db.find({
  //       selector: {
  //         userId: { $eq: `${user.facilityId}` },
  //         status: { $eq: "new" },
  //         type: { $eq: type },
  //         // createdAt: { $eq: today.toString() },
  //       },
  //       // sort: ['createdAt']
  //     })
  //   )
  //   .then((data) => {
  //     cb(data);
  //   })
  //   .catch((err) => {
  //     error(err);
  //   });
}

export const updatePendingPatient = (_id, status) => {
  let user = store.getState().auth.user

  assign_db.get(_id).then(function (assignment) {
    // let labInv = assignment.labInvestigations;
    assignment.updatedAt = new Date().toISOString()
    assignment.updatedBy = `${user.firstname} ${user.lastname}`
    assignment.status = status
    // assignment.labInvestigations = labInv;
    // update their age
    // doc.age = 4;
    // put them back
    return assign_db.put(assignment)
  })
}

export const updateAssignedPatient = (assignId) => {
  return (dispatch) => {
    assign_db
      .find({ selector: { _id: { $eq: assignId } } })
      .then(({ docs }) => {
        if (docs.length) {
          let selectedAssign = docs[0]
          selectedAssign.status = 'seen'
          selectedAssign.updatedAt = new Date().toISOString()

          assign_db.put(selectedAssign)
          dispatch({
            type: SET_CURRENT_DOCTOR_CONSULTATION_PATIENT,
            payload: {},
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function clearPatient() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_SELECTED_PATIENT,
    })
  }
}

export const closePatientForm = () => ({
  type: SET_PATIENT_FORM_MODE,
  payload: 'VIEW',
})
