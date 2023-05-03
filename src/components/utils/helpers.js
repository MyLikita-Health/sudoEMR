import moment from 'moment'
import { toaster } from 'evergreen-ui'
import { apiURL } from '../../redux/actions/index'
import {
  _fetchApi,
  _postApi,
  _deleteApi,
  _updateApi,
} from '../../redux/actions/api'
import store from '../../redux/store'
// import store

// export const url = 'http://localhost:4000';
//http://192.168.43.240:4000';
export const url = apiURL()

// export const url = 'https://pscprime.com/hms1/hms-server';
// export const url = 'https://bitshis-server.herokuapp.com';

/**
 * _fetchData()
 * helper function that fetches data from the database using a
 * specified route and performs the callback function on the returned data
 * @params route (string) => the api route
 * @params callback (func) => the action to perform on that data
 *      that is being returned
 */
// const _fetchData = ({ route, callback }) => {
//   fetch(`http://localhost:4000/${route}`, {
//     method: 'GET',
//   })
//     .then(function(response) {
//       if (response.ok) return response.json();
//       else
//         return Promise.reject({
//           status: response.status,
//           statusText: response.statusText,
//         });
//     })
//     .then(function(data) {
//       // console.log(data)
//       callback(data);
//     })
//     .catch(err => console.log(err));
// };

const _fetchData = ({ route, success_callback, error_callback }) => {
  _fetchApi(
    `${url}/${route}`,
    (response) => success_callback(response),
    (error) =>
      error_callback ? error_callback(error.toString()) : console.log(error),
  )
}

/**
 * _postData()
 * An helper function that posts data to the database
 * @params route (string) => the api route to submit on
 * @params data (object) => item to be submitted
 * @params callback => optional callback function
 */
const _postData = ({ route, data, callback, error_cb = (f) => f }) => {
  _postApi(
    `${url}/${route}`,
    data,
    (response) => callback(response),
    (err) => error_cb(err),
  )
}

/**
 * _deleteData()
 * An helper function that deletes data from the database
 * @params route (String) => the api route
 * @params data (object) => object containing the details of
 * the item to be deleted
 * @params callback (func) => optional callback
 */
const _deleteData = ({ route, data, callback, err_cb }) => {
  _deleteApi(
    `${url}/${route}`,
    data,
    () => callback(),
    (err) => {
      console.log(err)
      err_cb()
    },
  )
}

const _updateData = ({
  route,
  data,
  callback = (f) => f,
  err_cb = (f) => f,
}) => {
  _updateApi(
    `${url}/${route}`,
    data,
    () => callback(),
    () => err_cb(),
  )
}

const toCamelCase = (str = '') => {
  return str && str[0].toUpperCase() + str.substr(1)
}

const _customNotify = (msg) => {
  toaster.notify(msg)
  // let myColor = { background: 'rgb(69,122,251)', text: '#FFFFFF' };
  // notify.show(msg, 'custom', 3000, myColor);
}

const _warningNotify = (msg) => {
  toaster.danger(msg)
  // let myColor = { background: '#f11', text: '#FFFFFF' };
  // notify.show(msg, 'custom', 3000, myColor);
}

const _convertArrOfObjToArr = (arr) => {
  let result = []
  for (let o of arr) {
    result.push(Object.values(o))
  }
  return result
}

const groupArray = (arr, group_key) => {
  let final = {}

  arr.forEach((i) => {
    if (Object.keys(final).includes(i[group_key])) {
      final[i[group_key]] = [...final[i[group_key]], i]
    } else {
      final[i[group_key]] = [i]
    }
  })

  return final
}

function formatNumber(n) {
  let num = Math.round(parseInt(n), 0)
  if (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  } else {
    return '0'
  }
}

function pad(n, width, z) {
  z = z || '0'
  n = n + ''
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}

// const _checkPresence = (arr, testId) => {
//   let errArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].id === testId ? errArr.push(true) : errArr.push(false);
//   }
//   return errArr.includes(true) ? true : false;
// };

const today = moment().format('YYYY-MM-DD')

function generateReceiptNo(callback) {
  // console.log()
  // const today = moment().format("DDMMYY");
  // _fetchApi(
  //   `${url}/transactions/getNextTransactionID`,
  //   ({ transactionId }) => {
  //     // let txnId = pad(transactionId, 6, 0)
  //     _fetchApi(
  //       `${url}/transactions/getReceiptNo`,
  //       ({ receiptNo }) => {
  let receiptNo = moment().format('YYMMDDHmmss')
  // let transactionId = moment().format('YYYYMMDDHmmss')

  // receiptNo = receiptNo ? receiptNo : moment().format("YYYYMMDDHmmss");
  // transactionId = transactionId ? transactionId : moment().format("YYYYMMDDHmmss");
  // console.log(receiptNo)
  // let rcptNo = pad(receiptNo, 4, 0)
  let rec = `${receiptNo}`
  // let rec = `${receiptNo}${transactionId}`;
  callback(rec, receiptNo)
  // const newBalance = this.state.depositForm.balance + this.state.depositForm.amount
  // this.setState(prevState => ({ depositForm: Object.assign({}, prevState.depositForm, { receiptNo: rec, receiptId: receiptNo }) }))
  //       },
  //       (err) => console.log(err),
  //     )
  //   },
  //   (err) => console.log(err),
  // )
}

function appendNameToTxnData(results = [], callback = (f) => f) {
  let allPatients = JSON.parse(localStorage.getItem('allpatients')) || []
  let newPendingTxnsList = []
  if (allPatients.length) {
    results.forEach((item) => {
      if (item.transaction_source === 'Expenditure') {
        newPendingTxnsList.push({ ...item, accountName: 'Expenditure' })
      } else {
        let actualPatient = allPatients.filter(
          (el) => parseInt(item.transaction_source) === parseInt(el.accountNo),
        )
        if (actualPatient.length) {
          let patient = actualPatient[0]
          newPendingTxnsList.push({
            ...item,
            accountName: `${patient.firstname} ${patient.surname} ${patient.other}`,
          })
        }
      }
    })
    callback(newPendingTxnsList)
  } else {
    _fetchApi(
      `${url}/patientrecords/patientlist`,
      (res) => {
        let allpatients = res.results
        if (allpatients.length) {
          localStorage.setItem('allpatients', JSON.stringify(allpatients))
          results.forEach((item) => {
            if (item.transaction_source === 'Expenditure') {
              newPendingTxnsList.push({ ...item, accountName: 'Expenditure' })
            } else {
              let actualPatient = allPatients.filter(
                (el) =>
                  parseInt(item.transaction_source) === parseInt(el.accountNo),
              )
              if (actualPatient.length) {
                let patient = actualPatient[0]
                newPendingTxnsList.push({
                  ...item,
                  accountName: `${patient.firstname} ${patient.surname} ${patient.other}`,
                })
              }
            }
          })
          callback(newPendingTxnsList)
        }
      },
      (err) => console.log(err),
    )
  }
}

function generateAvatar(firstname = '', lastname = '') {
  if (firstname !== '' && lastname !== '') {
    return `${firstname[0].toUpperCase()}${lastname[0].toUpperCase()}`
    // console.log(`${firstname[0].toUpperCase()}${lastname[0].toUpperCase()}`)
  }
}

function getPatientId(firstname = '', surname = '', accNo = '') {
  const patientList = store.getState().records.patientlist
  let patient = patientList.filter(
    (p) =>
      p.firstname === firstname &&
      p.surname === surname &&
      p.accountNo === parseInt(accNo),
  )
  if (patient.length) {
    return patient[0].id
  } else {
    return null
  }
}

function extractPatientNameAndId(nameNid) {
  let newVal = nameNid.split(' ')
  let surname = newVal[0]
  let firstname = newVal[1]
  let bracedAcc = newVal[2]
  let accNo = bracedAcc.substr(1, bracedAcc.length - 2)
  let patientId = getPatientId(firstname, surname, accNo)
  return {
    name: `${surname} ${firstname}`,
    accNo,
    patientId,
  }
}

function getAgeFromDOB(dob, format = 'Y') {
  let today = moment()
  let f_dob = moment(dob)
  let age = moment.duration(today.diff(f_dob))

  if (format === 'Y') {
    return `${age.years()} Y`
  } else if (format === 'YM') {
    return `${age.years()} Y, ${age.months()} months`
  } else if (format === 'YMD') {
    return `${age.years()} Y, ${age.months()} months, ${age.days()} days`
  } else {
    return null
  }
}

function checkEmpty(obj) {
  if (typeof obj === 'object') {
    let val = Object.values(obj)
    if (val.join('').length > 0) return false
    // if (!val.join('').includes('0') && val.join('').length > 0) return false;
    return true
  }
}

const convertSignedMoney = (amt) => {
  if (parseInt(amt) < 0) return `(${formatNumber(Math.abs(amt))})`
  else if (parseInt(amt) > 0) return `${formatNumber(amt)}`
}

export {
  _fetchData,
  _postData,
  _deleteData,
  _updateData,
  toCamelCase,
  _customNotify,
  _warningNotify,
  _convertArrOfObjToArr,
  pad,
  today,
  generateReceiptNo,
  appendNameToTxnData,
  generateAvatar,
  formatNumber,
  getPatientId,
  extractPatientNameAndId,
  getAgeFromDOB,
  checkEmpty,
  convertSignedMoney,
  groupArray,
}
