import {
  GET_LAB_SERVICES,
  LOADING_LAB_SERVICES,
  GET_PENDING_LAB_REQUEST,
  LOADING_PENDING_LAB_REQUEST,
  LOADING_PATIENT_LAB_TEST,
  GET_PATIENT_LAB_TEST,
  GET_LAB_SERVICES_RAW,
  GET_DOC_LAB_COMMISSION,
  SET_LAB_DATERANGE,
  SET_HISTORY_DATERANGE,
  SET_UNITS_LIST,
  SET_DEPARTMENT_LIST,
  SET_GROUP_LIST,
} from './actionTypes'
import { _customNotify, _warningNotify } from '../../components/utils/helpers'
import { _postApi, _fetchApi,_fetchApi2 } from './api'
import { apiURL } from './index'
import { unflatten } from './account'
import store from '../store'
// import { queryLabSetup } from '../../components/lab/lab-setup/helper'

const endpoint = 'lab'

export function newLabSetup(data) {
  return (dispatch) => {
    _postApi(
      `${apiURL()}/${endpoint}/service/new`,
      data,
      () => {
        dispatch(getAllLabServices())
        _customNotify('Lab created')
      },
      (err) => {
        console.log(err)
        _warningNotify('An error occurred')
      },
    )
  }
}
export function getLabSetupAccount({department="",unit="",group="",facilityId=""}) {
  let url = `${apiURL()}/${endpoint}/get-labsetup-account?department=${department}&unit=${unit}&group=${group}&facilityId=${facilityId}`
  return (dispatch) => {
    let successFn =(res)=>{
      dispatch({type:"GET_LAB_SETUP_ACCOUNT",payload:res.results})
    }
    let errorFn = (err) => {
      console.log(err)
    }
    _fetchApi2(url,successFn,errorFn)
  }
}



export function getAllLabServices() {
  return (dispatch) => {
    dispatch({ type: LOADING_LAB_SERVICES })
    let url = `${apiURL()}/${endpoint}/service/all`

    let successFn = ({ results }) => {
      // console.log(results)
      dispatch({ type: GET_LAB_SERVICES_RAW, payload: results })
      let formatted = unflatten(results)
      // console.log(formatted)
      dispatch({ type: GET_LAB_SERVICES, payload: formatted })
      dispatch({ type: LOADING_LAB_SERVICES })
    }

    let errorFn = (err) => {
      dispatch({ type: LOADING_LAB_SERVICES })
      console.log(err)
    }

    _fetchApi(url, successFn, errorFn)
  }
}

export function getAllPendingLabRequest() {
  return (dispatch) => {
    dispatch({ type: LOADING_PENDING_LAB_REQUEST })
    let url = `${apiURL()}/${endpoint}/request/pending`
    let successFn = ({ results }) => {
      dispatch({ type: GET_PENDING_LAB_REQUEST, requests: results })
      dispatch({ type: LOADING_PENDING_LAB_REQUEST })
    }
    let errorFn = (err) => {
      dispatch({ type: LOADING_PENDING_LAB_REQUEST })
      console.log(err)
    }
    _fetchApi(url, successFn, errorFn)
  }
}



export function getPetientLabTest(petientId) {
  return (dispatch) => {
    dispatch({ type: LOADING_PATIENT_LAB_TEST })
    let url = `${apiURL()}/${endpoint}/tests/${petientId}`
    let successFn = ({ results }) => {
      dispatch({ type: GET_PATIENT_LAB_TEST, requests: results })
      dispatch({
        type: dispatch({ type: LOADING_PATIENT_LAB_TEST }),
      })
    }
    let errorFn = (err) => {
      dispatch({
        type: dispatch({ type: LOADING_PATIENT_LAB_TEST }),
      })
      console.log(err)
    }
    _fetchApi(url, successFn, errorFn)
  }
}

export function getDocLabCommission() {
  return (dispatch) => {
    const user = store.getState().auth.user

    _fetchApi(
      `${apiURL()}/lab/doctor/acc-balance/${user.username}`,
      (data) => {
        if (data) {
          dispatch({ type: GET_DOC_LAB_COMMISSION, payload: data.results })
        }
      },
      (err) => console.log(err),
    )
  }
}

export function setLabDateRange(_key, val) {
  return (dispatch) => {
    dispatch({
      type: SET_LAB_DATERANGE,
      payload: {
        key: _key,
        value: val,
      },
    })
  }
}

export function setLabHistoryDateRange(_key, val) {
  return (dispatch) => {
    dispatch({
      type: SET_HISTORY_DATERANGE,
      payload: {
        key: _key,
        value: val,
      },
    })
  }
}

export const getUnitsList = (department='all') => {
  return (dispatch) => {
    // queryLabSetup({ query_type: 'unit_list', head: department }, (resp) => {
    //   if (resp && resp.results) {
    //     // setUnitsList(resp.results[0])
    //     dispatch({ type: SET_UNITS_LIST, payload: resp.results })
    //   }
    // })
  }
}

export const getGroupList = (department='all') => {
  return (dispatch) => {
    // queryLabSetup({ query_type: 'group_list', head: department }, (resp) => {
    //   if (resp && resp.results) {
    //     // setUnitsList(resp.results[0])
    //     dispatch({ type: SET_GROUP_LIST, payload: resp.results })
    //   }
    // })
  }
}

export const getDepartmentList = () => {
  return (dispatch) => {
    // queryLabSetup({ query_type: 'department_list' }, (resp) => {
    //   if (resp && resp.results) {
    //     // setDepartmentList(resp.results)
    //     dispatch({ type: SET_DEPARTMENT_LIST, payload: resp.results })
    //   }
    // })
  }
}

// export function
