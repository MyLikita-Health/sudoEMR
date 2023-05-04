// import { v4 as uuidv4 } from 'uuid'
// import {
//   SET_SELECTED_PATIENT,
//   SET_PATIENT_FORM_MODE,
//   CLEAR_SELECTED_PATIENT,
// } from '../../doc_dash/types'
// import { pad, _warningNotify, _customNotify } from '../../utils/helpers'
import store from '../../../redux/store'
import {
  // patients_db,
  // pushPatientsChanges,
} from '../../doc_dash/actions/patientsActions'
// import { visits_db } from '../../doc_dash/actions/visitsActions'
// import {
//   GET_PATIENT_LIST,
//   SET_CURRENT_PATIENT,
// } from '../../../redux/actions/actionTypes'
// import { assign_db } from '../../../db'
import {
  GET_PATIENT_ASSIGNED_TODAY,
  GETTING_PATIENT_ASSIGNED_TODAY,
  GET_PATIENT_WAITING_LIST,
  GETTING_PATIENT_WAITING_LIST,
  GETTING_PATIENTS_ASSIGNED_TO_DOC,
  GET_PATIENTS_ASSIGNED_TO_DOC,
  // SET_CURRENT_DOCTOR_CONSULTATION_PATIENT,
} from '../../../redux/actions/types'
import { assignPatient, getPendingPatient } from './patientsActions'
import { getInPatientsQuery } from '../../../redux/actions/records'
import { postConsultationRecord } from '../../doc_dash/visits/components/helper'

export function getWaitingList() {
  return (dispatch) => {
    dispatch({ type: GETTING_PATIENT_WAITING_LIST })

    getPendingPatient(
      'waiting',
      '',
      (data) => {
        // console.log(data);
        dispatch({ type: GETTING_PATIENT_WAITING_LIST })
        dispatch({ type: GET_PATIENT_WAITING_LIST, payload: data })
      },
      (err) => {
        console.log(err)
        dispatch({ type: GETTING_PATIENT_WAITING_LIST })
      },
    )
  }
}

export function getAssignedToday() {
  return (dispatch) => {
    dispatch({ type: GETTING_PATIENT_ASSIGNED_TODAY })

    getPendingPatient(
      'specialists',
      '',
      (data) => {
        dispatch({ type: GETTING_PATIENT_ASSIGNED_TODAY })
        dispatch({ type: GET_PATIENT_ASSIGNED_TODAY, payload: data })
        // console.log(data);
      },
      (err) => {
        console.log(err)
        dispatch({ type: GETTING_PATIENT_ASSIGNED_TODAY })
      },
    )
  }
}

export function getAssignedToDoc() {
  return (dispatch) => {
    dispatch({ type: GETTING_PATIENTS_ASSIGNED_TO_DOC })
    let user = store.getState().auth.user

    getPendingPatient(
      'by_doc',
      user.username,
      (data) => {
        dispatch({ type: GETTING_PATIENTS_ASSIGNED_TO_DOC })
        dispatch({ type: GET_PATIENTS_ASSIGNED_TO_DOC, payload: data })
        // console.log(data);
      },
      (err) => {
        console.log(err)
        dispatch({ type: GETTING_PATIENTS_ASSIGNED_TO_DOC })
      },
    )

    // assign_db
    //   .createIndex({ index: { fields: ['doctorId', 'status', 'createdAt'] } })
    //   .then(() =>
    //     assign_db.find({
    //       selector: {
    //         doctorId: { $eq: user.id.toString() },
    //         status: { $eq: 'new' },
    //         createdAt: { $gte: null },
    //       },
    //     }),
    //   )
    //   .then((data) => {
    //     console.log(data, user.id)
    //     dispatch({ type: GETTING_PATIENTS_ASSIGNED_TO_DOC })
    //     dispatch({ type: GET_PATIENTS_ASSIGNED_TO_DOC, payload: data.docs })
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     dispatch({ type: GETTING_PATIENTS_ASSIGNED_TO_DOC })
    //   })
  }
}

export function removePatientAssignment(data, cb = (f) => f, error = (f) => f) {
  return (dispatch) => {
    // console.log(data)
    // createdAt: "2021-03-29T08:40:04.013Z"
    // createdBy: "Abdurrahman Nasir"
    // doctorId: ""
    // doctorName: ""
    // patientId: "1-2"
    // patientName: "Ashabi Adebowale"
    // status: "new"
    // type: "waiting"
    // updatedAt: "2021-03-29T08:40:04.014Z"
    // updatedBy: "Abdurrahman Nasir"
    // userId: "1be0a9da-bff9-4ab6-a36c-edfd8ca88f1a"
    // _id: "02fcc5d8-129c-40e5-a538-555dc0c4fabf"
    // _rev: "1-db2fc57f065deae5e159e9669db4d090"
    let user = store.getState().auth.user

    data.status = 'cancelled'
    data.updatedAt = new Date().toISOString()
    data.updatedBy = `${user.firstname} ${user.lastname}`

    dispatch(assignPatient({ ...data, query_type: 'end' }))

    // assign_db.get(data._id)
    // .then(resp => {
    // assign_db
    //   .put(data)
    //   .then(() => {
    //     cb()
    //     pushPatientsChanges(() => pushPatientsChanges())
    //     dispatch(getAssignedToday())
    //     dispatch(getWaitingList())
    //   })
    //   .catch((err) => {
    //     error()
    //     console.log(err)
    //     // _warningNotify("An error occurred.");
    //   })
    // })
  }
}

export function getPendingAdmissionList(callback = (f) => f, error = (f) => f) {
  // let user = store.getState().auth.user

  getInPatientsQuery('pending-admission', '', (data) => {
    if (data && data.results) {
      callback(data.results)
    }
  })
  // visits_db
  //   .createIndex({
  //     index: {
  //       fields: ['managementPlan.patientStatus', 'facilityId', 'createdAt'],
  //     },
  //   })
  //   .then(() =>
  //     visits_db.find({
  //       selector: {
  //         'managementPlan.patientStatus': { $eq: 'admit' },
  //         facilityId: { $eq: user.facilityId },
  //         createdAt: { $gte: null },
  //       },
  //       fields: [
  //         '_id',
  //         'managementPlan.patientStatus',
  //         'patient_name',
  //         'patient_id',
  //         'createdBy',
  //         'createdAt',
  //       ],
  //       // sort: [
  //       //    "createdAt",
  //       // ]
  //     }),
  //   )
  //   .then((data) => {
  //     console.log(data)
  //     callback(data.docs)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //     error(err)
  //   })
}

export function updateAllocatedPatient(_id, allocationId, bedId) {
  // console.log("Updating patient status")
  // console.log(_id, allocationId, bedId)
  postConsultationRecord({ query_type: 'admitted', patient_id: _id }, () => {
    console.log('Patient allocated')
  })
  // visits_db
  //   .get(_id)
  //   .then((doc) => {
  //     // console.log(doc)
  //     doc.managementPlan = {
  //       patientStatus: 'allocated',
  //       allocationId,
  //       bed: bedId,
  //     }

  //     visits_db.put(doc)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
}
