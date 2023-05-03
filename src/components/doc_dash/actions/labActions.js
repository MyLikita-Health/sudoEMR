// import moment from 'moment';
// import PouchDB from 'pouchdb-browser';
// import Find from 'pouchdb-find';
import { v4 as uuidv4 } from 'uuid'
import store from '../../../redux/store'
import {
  GET_LAB_LIST,
  SET_PATIENT_LABS,
  SET_SELECTED_LAB,
  CLEAR_SELECTED_LAB,
} from '../types'
import { getPatient } from './patientsActions'
import { lab_db } from '../../../db'
import { visits_db } from './visitsActions'
import { _fetchApi, _fetchApi2, _postApi } from '../../../redux/actions/api'
import { apiURL } from '../../../redux/actions'

export const saveLab = (data = [], cb = (f) => f, error = (f) => f) => {
  return (dispatch) => {
    let user = store.getState().auth.user
    let labList = []
    data.forEach((item) => {
      item._id = uuidv4()
      item.createdAt = new Date().toISOString()
      item.createdBy = `${user.firstname} ${user.lastname}`
      item.userId = `${user.id}`
      item.facilityId = `${user.facilityId}`
      item.updatedAt = new Date().toISOString()
      item.updatedBy = `${user.firstname} ${user.lastname}`
      labList.push(item)
    })
    // console.log(labList)
    lab_db
      .put(labList)
      // .bulkDocs(labList)
      .then(() => {
        cb(data)
        dispatch(getLabList())
      })
      .catch((err) => {
        error()
        console.log(err)
      })
  }
}

export function getPatientLabTestsByVisit(
  pid = '',
  visitId = '',
  cb = (f) => f,
  error = (f) => f,
) {
  const user = store.getState().auth.user
  _fetchApi2(
    `${apiURL()}/diagnosis/get-pending-lab-tx?query_type=by_req&consult_id=${visitId}&facilityId=${
      user.facilityId
    }`,
    (data) => {
      // alert(data)

      if (data.results) {
        // cb(data.results)
        let summary = data.results
        // _fetchApi2(`${apiURL}`)
        cb({ summary, detail: [] })
      }
    },
  )

  // visits_db
  //   .createIndex({
  //     index: {
  //       fields: ['facilityId', 'patient_id', '_id'],
  //     },
  //   })
  //   .then(() => {
  //     return visits_db.find({
  //       selector: {
  //         facilityId: { $eq: user.facilityId },
  //         patient_id: { $eq: pid },
  //         _id: { $eq: visitId },
  //       },
  //       fields: ['labInvestigations'],
  //     })
  //   })
  //   .then((data) => {
  //     // cb();
  //     if (data.docs && data.docs.length) {
  //       cb(data.docs[0])
  //     }
  //   })
  //   .catch((err) => {
  //     error()
  //     console.log(err)
  //   })
}

export function getPatientLabTests(pid = '', cb = (f) => f) {
  return (dispatch) => {
    const user = store.getState().auth.user.id

    visits_db
      .createIndex({
        index: {
          fields: ['facilityId', 'patient_id'],
        },
      })
      .then(() => {
        return visits_db.find({
          selector: {
            facilityId: { $eq: user.facilityId },
            patient_id: { $eq: pid },
          },
          fields: ['labInvestigations.summary'],
        })
      })
      .then((data) => {
        cb()
        if (data.docs && data.docs.length) {
          // cb(data.docs);
          // let resp = data.docs[0]
          // let labs = resp.labInvestigations.summary
          let final = []
          data.docs.forEach((i) => {
            i.labInvestigations.summary.forEach((j) => {
              final.push(j)
            })
          })
          dispatch({ type: SET_PATIENT_LABS, payload: final })
          // console.log(data);
        }
      })
      .catch((err) => {
        cb()
        console.log(err)
      })

    // lab_db
    //   .find({
    //     selector: {
    //       userId: { $eq: JSON.stringify(userId) },
    //       patient_id: { $eq: pid },
    //     },
    //   })
    //   .then((data) => {
    //     // cb(data.docs);
    //     dispatch({ type: SET_PATIENT_LABS, payload: data.docs });
    //     // console.log(data);
    //     cb();
    //   })
    //   .catch((err) => {
    //     cb();
    //     console.log(err);
    //   });
  }
}

export function getPendingLabRequests(
  cb = (f) => f,
  error = (f) => f,
  range = {},
) {
  // return (dispatch) => {
  const user = store.getState().auth.user.id

  _fetchApi2(
    `${apiURL()}/diagnosis/ordered-lab?query_type=ordered_list&facilityId=${
      user.facilityId
    }&from=${range.from}&to=${range.to}`,
    (data) => {
      if (data.results) {
        cb(data.results)
      }
    },
  )
  // alert("hello");
  // visits_db
  //   .createIndex({
  //     index: {
  //       fields: ["facilityId", "labInvestigations.status"],
  //     },
  //   })
  //   .then(() => {
  //     return visits_db.find({
  //       selector: {
  //         facilityId: { $eq: user.facilityId },
  //         "labInvestigations.status": { $eq: "ordered" },
  //       },
  //       fields: ["labInvestigations", "_id", "patient_name", "createdAt"],
  //     });
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     error();
  //     if (data.docs && data.docs.length) {
  //       // dispatch({ type: SET_PATIENT_LABS, payload: data.doc });
  //       cb(data.docs);
  //     }
  //   })
  //   .catch((err) => {
  //     error();
  //     console.log(err);
  //   });
  // };
}

export function updatePendingLabReq(status, visitId, pid, cb = (f) => f) {
  // return (dispatch) => {
  let user = store.getState().auth.user

  // dispatch(
  //   getVisitDetails(visitId, (visit) => {
  //     // console.log(visit)

  _postApi(
    `${apiURL()}/diagnosis/update-pending-lab`,
    { query_type: 'lab_processed', request_id: visitId },
    () => {
      cb()
    },
    (err) => {
      console.log(err)
    },
  )

  // visits_db.get(visitId).then(function (visit) {
  //   let labInv = visit.labInvestigations
  //   labInv.updatedAt = new Date().toISOString()
  //   labInv.updatedBy = `${user.firstname} ${user.lastname}`
  //   labInv.status = status
  //   visit.labInvestigations = labInv

  //   return visits_db.put(visit)
  // })

  // .then(function () {
  //   // fetch mittens again
  //   return db.get('mittens');
  // }).then(function (doc) {
  //   console.log(doc);
  // });

  // visits_db
  //   .put(labInv)
  //   .then((d) => {
  //     // console.log(d);
  //     cb(d);
  //   })
  //   .catch((err) => console.log(err));
  //   })
  // );
  // };
}

export function getLabList(cb = (f) => f) {
  return (dispatch) => {
    const userId = store.getState().auth.user.id

    lab_db
      .find({
        selector: {
          _id: { $gt: null },
          userId: { $eq: userId.toString() },
        },
      })
      .then((data) => {
        // console.log(data);
        cb()
        dispatch({ type: GET_LAB_LIST, payload: data.docs })
      })
      .catch((err) => {
        cb()
        console.log(err)
      })
  }
}

export function getLabDetails(labId = '', cb = (f) => f) {
  return (dispatch) => {
    const userId = store.getState().auth.user.id

    lab_db
      .find({
        selector: {
          _id: {
            $eq: labId,
          },
          userId: {
            $eq: userId.toString(),
          },
        },
      })
      .then(({ docs }) => {
        // console.log(docs);
        if (docs.length) {
          // console.log(docs[0])
          dispatch({ type: SET_SELECTED_LAB, payload: docs[0] })
          cb(docs[0])
          dispatch(getPatient(docs[0].patient_id))
        }
      })
      .catch((err) => {
        cb()
        console.log(err)
      })
  }
}

export const cancelLabTest = (labId = '', cb = (f) => f) => {
  return (dispatch) => {
    let user = store.getState().auth.user
    lab_db
      .get(labId)
      .then((test) => {
        test.status = 'cancelled'
        test.updatedAt = new Date().toISOString()
        test.updatedBy = `${user.firstname} ${user.lastname}`
        lab_db
          .put(test)
          .then(() => {
            cb()
            dispatch(getLabDetails(labId))
            dispatch(getLabList())
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  }
}

export const completeLabTest = (labId = '', data = {}, cb = (f) => f) => {
  return (dispatch) => {
    let user = store.getState().auth.user
    lab_db
      .get(labId)
      .then((test) => {
        test = {
          ...test,
          ...data,
          status: 'completed',
          updatedAt: new Date().toISOString(),
          updatedBy: `${user.firstname} ${user.lastname}`,
        }
        lab_db
          .put(test)
          .then(() => {
            cb()
            dispatch(getLabDetails(labId))
            dispatch(getLabList())
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  }
}

export const updateLabTest = (labId = '', data = {}, cb = (f) => f) => {
  return (dispatch) => {
    let user = store.getState().auth.user
    lab_db
      .get(labId)
      .then((test) => {
        test = {
          ...test,
          ...data,
          updatedAt: new Date().toISOString(),
          updatedBy: `${user.firstname} ${user.lastname}`,
        }
        lab_db
          .put(test)
          .then(() => {
            cb()
            dispatch(getLabDetails(labId))
            dispatch(getLabList())
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  }
}

export const clearSelectedLab = () => ({
  type: CLEAR_SELECTED_LAB,
})
