import { GETTING_ACC_CHART, GET_ACC_CHART_TREE } from './types'
import { _fetchApi, _postApi } from './api'
import { apiURL } from './index'
import {
  GETTING_SUMMARY_REPORT,
  GET_SUMMARY_REPORT,
  GET_ALL_PENDING_REQ,
  GET_BRANCH_REQ,
  GET_REQUISITION_LIST,
  SET_PENDING_DISCOUNT,
  SET_PENDING_PART_PAYMENT,
  GET_ACCOUNT_TYPE,
} from './actionTypes'
import moment from 'moment'
// import { getDiscountApi } from '../../components/account/Forms/helper'
import store from '../store'
import { _customNotify, _warningNotify } from '../../components/utils/helpers'

const endpoint = 'account'

export function getTxnSummaryReport(fromDate, toDate) {
  return (dispatch) => {
    let from =
      fromDate === ''
        ? moment().format('YYYY-MM-DD')
        : moment(fromDate).format('YYYY-MM-DD')
    let to =
      toDate === ''
        ? moment().format('YYYY-MM-DD')
        : moment(toDate).format('YYYY-MM-DD')
    dispatch({ type: GETTING_SUMMARY_REPORT })
    _fetchApi(
      `${apiURL()}/transactions/reports/summary/${from}/${to}`,
      ({ results }) => {
        dispatch({ type: GET_SUMMARY_REPORT, payload: results })
        dispatch({ type: GETTING_SUMMARY_REPORT })
      },
      (err) => {
        console.log(err)
        dispatch({ type: GETTING_SUMMARY_REPORT })
      },
    )
  }
}

export function getAccChart() {
  return (dispatch) => {
    dispatch({ type: GETTING_ACC_CHART })
    _fetchApi(
      `${apiURL()}/${endpoint}/chart`,
      ({ results }) => {
        // dispatch({ type: GET_ACC_CHART, payload: results });
        dispatch({ type: GETTING_ACC_CHART })
        let arrInTree = unflatten(results)
        // console.log(arrInTree)
        dispatch({ type: GET_ACC_CHART_TREE, payload: arrInTree })
      },
      (err) => {
        dispatch({ type: GETTING_ACC_CHART })
        console.log(err)
      },
    )
  }
}

export function unflatten(arr) {
  var tree = [],
    mappedArr = {},
    arrElem,
    mappedElem

  // First map the nodes of the array to an object -> create a hash table.
  for (var i = 0, len = arr.length; i < len; i++) {
    arrElem = arr[i]
    mappedArr[arrElem.title] = arrElem
    mappedArr[arrElem.title]['children'] = []
  }

  for (var title in mappedArr) {
    // console.log(title, mappedArr)
    if (mappedArr.hasOwnProperty(title)) {
      mappedElem = mappedArr[title]
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem.subhead) {
        mappedArr[mappedElem['subhead']]['children'].push(mappedElem)
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem)
      }
    }
  }
  return tree
}

export function getAllBranchRequest() {
  return (dispatch) => {
    _fetchApi(
      `${apiURL()}/account/get_all/branch_req`,
      ({ results }) => {
        dispatch({ type: GET_ALL_PENDING_REQ, payload: results })
      },
      (err) => {
        console.log(err)
      },
    )
  }
}

export function getReqBranches(requisition_no) {
  return (dispatch) => {
    _fetchApi(
      `${apiURL()}/account/branch_req_item/${requisition_no}`,
      (data) => {
        if (data.success) {
          dispatch({ type: GET_BRANCH_REQ, payload: data.results })
        }
      },
      (err) => {
        console.log(err)
      },
    )
  }
}

export function getAccountType() {
  return (dispatch) => {
    _fetchApi(
      `${apiURL()}/account/get-account-type`,
      (data) => {
        if (data.success) {
          dispatch({ type: GET_ACCOUNT_TYPE, payload: data.results })
        }
      },
      (err) => {
        console.log(err)
      },
    )
  }
}

export function getRequisitionList() {
  return (dispatch) => {
    _fetchApi(
      `${apiURL()}/account/branch_req_requisition/requisition_no`,
      (data) => {
        if (data.success) {
          dispatch({ type: GET_REQUISITION_LIST, payload: data.results })
        }
      },
      (err) => {
        console.log(err)
      },
    )
  }
}

export function saveLabAccount(data,setLoading,setItem) {
    let url =`${apiURL()}/account/save-lab-account`
    _postApi(url,data,()=>{
      _customNotify("Submit Successfully")
      setLoading(false)
      setItem([])
    },()=>{
      _warningNotify("error occured")
      setLoading(false)
    })
}

export const getPendingDiscount = () => {
  return (dispatch) => {
    // getDiscountApi('pending', (d) => {
    //   if (d && d.results) {
    //     dispatch({ type: SET_PENDING_DISCOUNT, payload: d.results })
    //     // setPendingList(d.results)
    //   }
    // })
  }
}

export const getPendingPartPayments = () => {
  return (dispatch) => {
    const today = moment().format('YYYY-MM-DD')
    const user = store.getState().auth.user
    fetch(
      `${apiURL()}/lab/lab-summary?type=pending income&from=${today}&to=${today}&facilityId=${
        user.facilityId
      }`,
    )
      .then((raw) => raw.json())
      .then((data) => {
        if (data.success && data.results) {
          // setList(data.results)
          dispatch({ type: SET_PENDING_PART_PAYMENT, payload: data.results })
        }
      })
      .catch((err) => console.log(err))
  }
}
