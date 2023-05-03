// import moment from 'moment';
import moment from 'moment'
import PouchDB from 'pouchdb-browser'
import Find from 'pouchdb-find'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { apiURL, ipAddr } from '../../../redux/actions'
import { _fetchApi, _fetchApi2, _postApi } from '../../../redux/actions/api'
import store from '../../../redux/store'
import {
  GET_VISITS_LIST,
  CLEAR_SELECTED_VISIT,
  SET_PATIENT_PAST_VISITS,
  SET_SELECTED_VISIT,
} from '../types'
import { getPatient } from './patientsActions'

PouchDB.plugin(Find)

export const visits_db = new PouchDB('visits_db')

export const saveVisits = (data = {}, cb = (f) => f, error = (f) => f) => {
  return (dispatch) => {
    let user = store.getState().auth.user
    data._id = uuidv4()
    data.createdAt = new Date().toISOString()
    data.createdBy = `${user.firstname} ${user.lastname}`
    data.userId = `${user.id}`
    data.facilityId = `${user.facilityId}`
    data.updatedAt = new Date().toISOString()
    data.updatedBy = `${user.firstname} ${user.lastname}`
    console.log(data)
    visits_db
      .put(data)
      .then(() => {
        cb(data)
        dispatch(getVisitsList())
      })
      .catch((err) => {
        error()
        console.log(err)
      })
  }
}

export function updateVisit(visit, callback = (f) => f) {
  visits_db
    .put(visit)
    .then(() => {
      callback()
    })
    .catch((err) => {
      console.log(err)
    })

  _postApi(
    `${apiURL()}/consultation/new`,
    {
      query_type: 'update',
      consult_id: visit.id,
      presenting_complaints: visit.consultation_notes,
      ...visit,
    },
    () => {
      callback()
    },
    (err) => {
      console.log(err)
    },
  )
}

export function getPatientStatus(pid = '', cb = (f) => f) {
  visits_db.find({
    selector: {
      patient_id: {
        $eq: pid.toString(),
      },
      // "managementPlan.patientStatus": {

      // }
    },
    fields: ['managementPlan.patientStatus'],
  })
}

export function getPatientVisits(pid = '', cb = (f) => f) {
  return (dispatch) => {
    console.log(pid)
    const facilityId = store.getState().auth.user.facilityId

    visits_db
      .find({
        selector: {
          facilityId: { $eq: facilityId },
          patient_id: { $eq: pid.toString() },
        },
      })
      .then((data) => {
        // cb(data.docs);
        if (data.docs && data.docs.length) {
          let sortedByDate = data.docs.sort(
            (a, b) => a.createdAt.valueOf() - b.createdAt.valueOf(),
          )
          // dispatch({ type: SET_PATIENT_PAST_VISITS, payload: data.docs })
          dispatch({ type: SET_PATIENT_PAST_VISITS, payload: sortedByDate })
        }
        // console.log(data);
        cb()
      })
      .catch((err) => {
        cb()
        console.log(err)
      })
  }
}

export function getPrescriptionByReqId(reqId, cb) {
  const facilityId = store.getState().auth.user.facilityId
  _fetchApi2(
    `${apiURL()}/prescriptions/patient-prescribed?query_type=by_req_id&patient_id=${reqId}&facilityId=${facilityId}`,
    (data) => {
      if (data.results) {
        cb(data.results)
      }
    },
    (err) => {
      console.log(err)
    },
  )
}

export function getPatientConsultationList(
  pid = '',
  cb = (f) => f,
  report_type = 'by_date',
  queryDate,
) {
  const facilityId = store.getState().auth.user.facilityId

  _fetchApi2(
    `${apiURL()}/consultation/query?query_type=list by patient&patient_id=${pid}&facilityId=${facilityId}&report_type=${report_type}&report_date=${queryDate}`,
    (data) => {
      cb(data)
    },
    (err) => console.log(err),
  )
  // return (dispatch) => {
  //   console.log(pid)
  //   const userId = store.getState().auth.user.id

  //   visits_db
  //     .find({
  //       selector: {
  //         userId: { $eq: JSON.stringify(userId) },
  //         patient_id: { $eq: pid.toString() },
  //       },
  //     })
  //     .then((data) => {
  //       // cb(data.docs);
  //       dispatch({ type: SET_PATIENT_PAST_VISITS, payload: data.docs })
  //       // console.log(data);
  //       cb()
  //     })
  //     .catch((err) => {
  //       cb()
  //       console.log(err)
  //     })
  // }
}

export function getPatientOperationNotesList(
  pid = '',
  cb = (f) => f,
  report_type = 'by_date',
  queryDate,
) {
  const facilityId = store.getState().auth.user.facilityId

  _fetchApi2(
    `${apiURL()}/operationnotes/query?query_type=list by patient&patient_id=${pid}&patientId=${pid}&facilityId=${facilityId}&report_type=${report_type}&date=${queryDate}`,
    (data) => {
      cb(data)
    },
    (err) => console.log(err),
  )
  
  // return (dispatch) => {
  //   console.log(pid)
  //   const userId = store.getState().auth.user.id

  //   visits_db
  //     .find({
  //       selector: {
  //         userId: { $eq: JSON.stringify(userId) },
  //         patient_id: { $eq: pid.toString() },
  //       },
  //     })
  //     .then((data) => {
  //       // cb(data.docs);
  //       dispatch({ type: SET_PATIENT_PAST_VISITS, payload: data.docs })
  //       // console.log(data);
  //       cb()
  //     })
  //     .catch((err) => {
  //       cb()
  //       console.log(err)
  //     })
  // }
}

export function getVisitsList() {
  return (dispatch) => {
    const userId = store.getState().auth.user.id

    // visits_db
    //   .createIndex({ index: { fields: ["_id", "userId", "createdAt"] } })
    //   .then(() =>
    //     visits_db.find({
    //       selector: {
    //         _id: { $gt: null },
    //         userId: { $eq: JSON.stringify(userId) },
    //         createdAt: { $gte: null },
    //       },
    //    sort: [
    //       "createdAt",
    //    ]
    //     })
    //   )
    //   .then((data) => {
    //     dispatch({ type: GET_VISITS_LIST, payload: data.docs });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    visits_db
      .find({
        selector: {
          _id: { $gt: null },
          userId: { $eq: JSON.stringify(userId) },
        },
        // sort: ['createdAt']
      })
      .then((data) => {
        // console.log(data);
        dispatch({ type: GET_VISITS_LIST, payload: data.docs })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function getVisitDetails2(_id, cb = (f) => f, error = (f) => f) {
  visits_db.get(_id).then((resp) => {
    cb(resp)
  })
}

export function getVisitDetailsFromMySQL(_id, cb = (f) => f, error = (f) => f) {
  const facilityId = store.getState().auth.user.facilityId
  _fetchApi2(
    `${apiURL()}/consultation/query?query_type=by_id&consult_id=${_id}&facilityId=${facilityId}`,
    (data) => {
      cb(data)
    },
    (err) => console.log(err),
  )
  // visits_db.get(_id).then((resp) => {
  //   cb(resp)
  // })
}

export function getVisitDetails(visitId, cb) {
  return (dispatch) => {
    const userId = store.getState().auth.user.facilityId

    visits_db
      .createIndex({ index: { fields: ['_id', 'facilityId'] } })
      .find({
        selector: {
          _id: { $eq: visitId },
          facilityId: { $eq: JSON.stringify(userId) },
        },
      })
      .then(({ docs }) => {
        if (docs.length) {
          // console.log(docs[0])
          dispatch({ type: SET_SELECTED_VISIT, payload: docs[0] })
          cb(docs[0])
          dispatch(getPatient(docs[0].patient_id))
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const clearSelectedVisit = () => ({
  type: CLEAR_SELECTED_VISIT,
})
