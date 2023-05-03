import PouchDB from 'pouchdb-browser'
import {
  GET_INVENTORY,
  INVENTORY_LOADING,
  SUBMIT_DRUG_LOADING,
  UPDATE_DRUG,
  // ADD_DRUG,
  UPDATING_DRUG,
  LOAD_EXPIRY_ALERT,
  LOAD_QTTY_ALERT,
  LOAD_EXPIRED,
  GET_PURCHASE_RECORDS,
  // SET_PURCHASE_RECORDS,
  PURCHASE_RECORDS_LOADING,
  PENDING_PURCHASES_LOADING,
  GET_PENDING_PURCHASES,
  DISPENSING_DRUGS,
  DISPENSE_DRUGS,
  GETTING_ALL_SUPPLIERS,
  GET_ALL_SUPPLIERS,
  CREATING_SUPPLIERS,
  CREATE_SUPPLIER,
  GET_DRUGS,
  DRUGS_LOADING,
  DELETING_DRUG,
  ADDING_DRUG,
  UPDATING_SUPPLIER,
  DELETING_SUPPLIER,
  GETTING_PHARM_SALES_SUMMARY,
  GET_PHARM_SALES_SUMMARY,
  CLEAR_PHARM_SALES_SUMMARY,
  GETTING_TOP_5_POPULAR_DRUGS,
  GET_TOP_5_POPULAR_DRUGS,
  GETTING_CUSTOMERS,
  GET_CUSTOMERS,
  GET_OTHER_EXPENSES,
  SET_PENDING_PHARMACY_REQUEST,
} from './actionTypes'
import {
  url,
  _customNotify,
  _warningNotify,
  _convertArrOfObjToArr,
  _fetchData,
} from '../../components/utils/helpers'
import { _updateApi, _fetchApi, _postApi, _deleteApi } from './api'
import { recordServices } from './services'
import store from '../store'
import { apiURL } from './index'
import moment from 'moment'

export const pharmDB = PouchDB('pharmDB')

const baseAPI = `${url}/drugs`

export function init() {
  return (dispatch) => {
    // dispatch(showLoading('sectionBar'))
    _fetchApi(
      `${baseAPI}/alert/expiry`,
      ({ results }) => {
        if (results) {
          dispatch({ type: LOAD_EXPIRY_ALERT, payload: results })
        }
      },
      (error) => console.log(error),
    )
    _fetchApi(
      `${baseAPI}/alert/quantity`,
      ({ results }) => {
        if (results) {
          dispatch({ type: LOAD_QTTY_ALERT, payload: results })
        }
      },
      (error) => console.log(error),
    )
    _fetchApi(
      `${baseAPI}/expired`,
      ({ results }) => {
        if (results) {
          dispatch({ type: LOAD_EXPIRED, payload: results })
        }
      },
      (error) => console.log(error),
    )
  }
}

export function getInventory() {
  return (dispatch) => {
    dispatch({ type: INVENTORY_LOADING })
    pharmDB
      .get('inventory')
      .then(({ inventory }) => {
        dispatch({ type: GET_INVENTORY, inventory })
      })
      .catch((err) => console.log(err))

    _fetchApi(
      `${baseAPI}/all`,
      ({ results }) => {
        if (results) {
          dispatch({ type: GET_INVENTORY, inventory: results })
          pharmDB
            .get('inventory')
            .then(({ _rev }) => {
              pharmDB
                .put({ _id: 'inventory', _rev, inventory: results })
                .then(() => console.log('update inventory'))
                .catch((err) => console.log(err))
            })
            .catch(() => {
              pharmDB
                .put({ _id: 'inventory', inventory: results })
                .then(() => {
                  console.log('added to inventory')
                })
                .catch((err) => console.log(err))
            })
        } else {
          dispatch({ type: INVENTORY_LOADING })
        }
      },
      (err) => {
        dispatch({ type: INVENTORY_LOADING })
        _warningNotify('An error occured!')
        console.log(err)
      },
    )
  }
}

export function getDrugList() {
  return (dispatch) => {
    dispatch({ type: DRUGS_LOADING })
    pharmDB
      .get('drugs')
      .then(({ drugs }) => {
        dispatch({ type: GET_DRUGS, drugs })
      })
      .catch((err) => console.log(err))

    fetch(`${baseAPI}/list`)
      .then((raw) => raw.json())
      .then(({ results }) => {
        if (results) {
          dispatch({ type: GET_DRUGS, drugs: results })
          pharmDB
            .get('drugs')
            .then(({ _rev }) => {
              pharmDB
                .put({ _id: 'drugs', _rev, drugs: results })
                .then(() => console.log('update drugs'))
                .catch((err) => console.log(err))
            })
            .catch(() => {
              pharmDB
                .put({ _id: 'drugs', drugs: results })
                .then(() => {
                  console.log('added to drugs')
                })
                .catch((err) => console.log(err))
            })
        } else {
          dispatch({ type: DRUGS_LOADING })
        }
      })
      .catch((err) => {
        dispatch({ type: DRUGS_LOADING })
        _warningNotify('An error occured!')
        console.log(err)
      })
  }
}

export function addDrug(data) {
  return (dispatch) => {
    _postApi(
      `${baseAPI}/new`,
      data,
      (result) => console.log(result),
      (err) => console.log(err),
    )
  }
}

export function addNewDrugToList(data, callback = (f) => f) {
  return (dispatch) => {
    dispatch({ type: ADDING_DRUG })
    _postApi(
      `${baseAPI}/list/new`,
      data,
      () => {
        _customNotify('Drug added')
        dispatch({ type: ADDING_DRUG })
        dispatch(getDrugList())
        callback()
      },
      (err) => {
        console.log(err)
        _warningNotify('Something went wrong')
        dispatch({ type: ADDING_DRUG })
      },
    )
  }
}

export function batchAddDrugs(data, callback) {
  return (dispatch) => {
    // console.log(data)
    dispatch({ type: SUBMIT_DRUG_LOADING })
    _postApi(
      `${baseAPI}/new/batch`,
      data,
      () => {
        // dispatch({ type: ADD_DRUG, payload: data })
        dispatch({ type: SUBMIT_DRUG_LOADING })
        _customNotify('Record Saved!')
        callback()
      },
      (err) => {
        dispatch({ type: SUBMIT_DRUG_LOADING })
        _warningNotify('An error occured!')
        console.log(err)
      },
    )
  }
}

export function editInventory(drugId, data, callback) {
  return (dispatch) => {
    dispatch({ type: UPDATING_DRUG })
    _updateApi(
      `${baseAPI}/update/${drugId}`,
      data,
      (response) => {
        dispatch({ type: UPDATE_DRUG, payload: { ...data, drug_id: drugId } })
        dispatch({ type: UPDATING_DRUG })
        callback()
        _customNotify('Drug updated!')
        console.log(response)
      },
      (error) => {
        dispatch({ type: UPDATING_DRUG })
        console.log(error)
      },
    )
  }
}

export function setInventory() {
  return (dispatch) => {
    // dispatch({ type })
  }
}

export function dispenseDrugs(data = {}, suppObj = {}, cb = (f) => f) {
  return (dispatch) => {
    // let finalData = _convertArrOfObjToArr(data);
    dispatch({ type: DISPENSING_DRUGS })
    _postApi(
      `${baseAPI}/dispense`,
      { data },
      () => {
        dispatch({
          type: DISPENSE_DRUGS,
          payload: { dispensed: data.dispense, username: suppObj.username },
        })
        // let drugsList = store.getState().pharmacy.inventory;

        // data.forEach(({ drug, quantity_dispensed }) => {
        //   let actualDrug = drugsList.filter(item => item.drug === drug);
        //   if (actualDrug.length) {
        //     let drugId = actualDrug[0].drug_id;
        //     console.log(
        //       data,
        //       actualDrug,
        //       drugId,
        //       quantity_dispensed,
        //       'from update'
        //     );
        //     _updateApi(
        //       `${baseAPI}/update/${drugId}/${quantity_dispensed}`,
        //       null,
        //       () => console.log('drug qtty updated!'),
        //       err => console.log(err)
        //     );
        //   }
        // });

        recordService(dispatch, data.drugs, suppObj, cb)
      },
      (err) => console.log(err),
    )
  }
}

function recordService(dispatch, data, suppObj, cb) {
  const {
    // total,
    patient_id,
    receiptId,
    receiptNo,
    modeOfPayment,
    username,
    grandTotal,
    // discount,
  } = suppObj
  let drugs = []
  let facilityId = store.getState().auth.user.facilityId
  data.forEach((drug) => drugs.push(drug.drug))
  let txnDetails = {
    description: `Drug(s) Purchased (${drugs.join(', ')})`,
    debited: grandTotal,
    credited: grandTotal,
    debit: patient_id,
    amount: grandTotal,
    credit: 'Pharmacy',
    transaction_source: patient_id,
    destination: 'Pharmacy',
    enteredBy: username,
    receiptDateSN: receiptNo,
    receiptNo: receiptId,
    modeOfPayment,
    paymentStatus: 'paid',
    patient_id,
    facilityId,
    createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
  }
  let serviceData = {
    data: _convertArrOfObjToArr([txnDetails]),
    amount: grandTotal,
    accountNo: patient_id,
    mode: modeOfPayment,
  }
  dispatch(
    recordServices(serviceData, () => {
      _customNotify('Transaction Successful')
      cb()
    }),
  )
}

export function getPurchaseRecords() {
  return (dispatch) => {
    dispatch({ type: PURCHASE_RECORDS_LOADING })
    // pharmDB
    //   .get('purchaseRecords')
    //   .then(({ purchaseRecords }) => {
    //     dispatch({ type: GET_PURCHASE_RECORDS, purchaseRecords });
    //   })
    //   .catch(err => console.log(err));
    _fetchApi(
      `${baseAPI}/purchase/all`,
      ({ results }) => {
        if (results) {
          dispatch({ type: GET_PURCHASE_RECORDS, purchaseRecords: results })
          pharmDB
            .get('purchaseRecords')
            .then(({ _rev }) => {
              pharmDB
                .put({ _id: 'purchaseRecords', _rev, purchaseRecords: results })
                .then(() => console.log('update purchase records'))
                .catch((err) => console.log(err))
            })
            .catch(() => {
              pharmDB
                .put({ _id: 'purchaseRecords', purchaseRecords: results })
                .then(() => {
                  console.log('added to purchaseRecords')
                })
                .catch((err) => console.log(err))
            })
        } else {
          dispatch({ type: PURCHASE_RECORDS_LOADING })
        }
      },
      (err) => {
        dispatch({ type: PURCHASE_RECORDS_LOADING })
        _warningNotify('An error occured!')
        console.log(err)
      },
    )
  }
}

export function getPendingPurchases() {
  return (dispatch) => {
    dispatch({ type: PENDING_PURCHASES_LOADING })
    pharmDB
      .get('pendingPurchases')
      .then(({ pendingPurchases }) => {
        dispatch({ type: GET_PENDING_PURCHASES, pendingPurchases })
      })
      .catch((err) => console.log(err))
    _fetchApi(
      `${baseAPI}/purchase/pending`,
      ({ results }) => {
        if (results) {
          dispatch({ type: GET_PENDING_PURCHASES, pendingPurchases: results })
          pharmDB
            .get('pendingPurchases')
            .then(({ _rev }) => {
              pharmDB
                .put({
                  _id: 'pendingPurchases',
                  _rev,
                  pendingPurchases: results,
                })
                .then(() => console.log('update pending purchase records'))
                .catch((err) => console.log(err))
            })
            .catch(() => {
              pharmDB
                .put({ _id: 'pendingPurchases', pendingPurchases: results })
                .then(() => {
                  console.log('added to pendingPurchases')
                })
                .catch((err) => console.log(err))
            })
        } else {
          dispatch({ type: PENDING_PURCHASES_LOADING })
        }
      },
      (err) => {
        dispatch({ type: PENDING_PURCHASES_LOADING })
        _warningNotify('An error occured!')
        console.log(err)
      },
    )
  }
}

export function getAllSuppliers() {
  return (dispatch) => {
    dispatch({ type: GETTING_ALL_SUPPLIERS })
    // pharmDB
    //   .get('suppliers')
    //   .then(({ suppliers }) => {
    //     dispatch({ type: GET_ALL_SUPPLIERS, suppliers });
    //   })
    //   .catch(err => console.log(err));

    _fetchApi(
      `${baseAPI}/supplier/all`,
      ({ results }) => {
        if (results) {
          // console.log(results)
          dispatch({ type: GET_ALL_SUPPLIERS, suppliers: results })
          pharmDB
            .get('suppliers')
            .then(({ _rev }) => {
              pharmDB
                .put({ _id: 'suppliers', _rev, suppliers: results })
                .then(() => console.log('update suppliers'))
                .catch((err) => console.log(err))
            })
            .catch(() => {
              pharmDB
                .put({ _id: 'suppliers', suppliers: results })
                .then(() => {
                  console.log('added to suppliers')
                })
                .catch((err) => console.log(err))
            })
        } else {
          dispatch({ type: GETTING_ALL_SUPPLIERS })
        }
      },
      (err) => {
        dispatch({ type: GETTING_ALL_SUPPLIERS })
        _warningNotify('An error occured!')
        console.log(err)
      },
    )
  }
}

export function addNewSupplier(data, callback = (f) => f) {
  return (dispatch) => {
    // console.log(data);
    dispatch({ type: CREATING_SUPPLIERS })
    _postApi(
      `${baseAPI}/supplier/new`,
      data,
      () => {
        _customNotify('Supplier added')
        dispatch({ type: CREATE_SUPPLIER, payload: data })
        dispatch({ type: CREATING_SUPPLIERS })
        dispatch(getAllSuppliers())
        callback()
      },
      (err) => {
        console.log(err)
        dispatch({ type: CREATING_SUPPLIERS })
      },
    )
  }
}

export function updateSupplier(supplierId, data, callback = (f) => f) {
  return (dispatch) => {
    dispatch({ type: UPDATING_SUPPLIER })
    _updateApi(
      `${baseAPI}/supplier/update/${supplierId}`,
      data,
      () => {
        _customNotify('Supplier updated successfully!')
        callback()
        dispatch({ type: UPDATING_SUPPLIER })
        dispatch(getAllSuppliers())
      },
      (err) => {
        console.log(err)
        _warningNotify('An error occurred')
        dispatch({ type: UPDATING_SUPPLIER })
      },
    )
  }
}

export function deleteSupplier(supplierId, callback = (f) => f) {
  return (dispatch) => {
    dispatch({ type: DELETING_SUPPLIER })
    _deleteApi(
      `${baseAPI}/supplier/delete/${supplierId}`,
      {},
      () => {
        dispatch({ type: DELETING_SUPPLIER })
        callback()
        dispatch(getAllSuppliers())
        _customNotify('Supplier Deleted')
      },
      (err) => {
        dispatch({ type: DELETING_SUPPLIER })
        console.log(err)
        _warningNotify('Unable to delete supplier')
      },
    )
  }
}

// export function updateDrug
export function updateDrug(drugId, data, callback) {
  return (dispatch) => {
    dispatch({ type: UPDATING_DRUG })
    _updateApi(
      `${baseAPI}/update/${drugId}`,
      data,
      (response) => {
        dispatch({ type: UPDATE_DRUG, payload: { ...data, drug_id: drugId } })
        dispatch({ type: UPDATING_DRUG })
        callback()
        _customNotify('Drug updated!')
        dispatch(getDrugList())
        console.log(response)
      },
      (error) => {
        dispatch({ type: UPDATING_DRUG })
        console.log(error)
      },
    )
  }
}

export function deleteDrug(drugId, callback) {
  return (dispatch) => {
    dispatch({ type: DELETING_DRUG })
    _deleteApi(
      `${baseAPI}/delete/${drugId}`,
      {},
      (data) => {
        console.log(data)
        _customNotify('Drug deleted successfully')
        dispatch({ type: DELETING_DRUG })
        dispatch(getDrugList())
        callback()
      },
      (err) => {
        console.log(err)
        _warningNotify('An error occurred')
        dispatch({ type: DELETING_DRUG })
      },
    )
  }
}

export function getPharmSalesSummary(from, to) {
  return (dispatch) => {
    dispatch({ type: CLEAR_PHARM_SALES_SUMMARY })
    dispatch({ type: GETTING_PHARM_SALES_SUMMARY })
    _fetchApi(
      `${apiURL()}/drugs/sales/summary/${from}/${to}`,
      ({ results }) => {
        dispatch(getPharmTotalStock())
        dispatch({ type: GETTING_PHARM_SALES_SUMMARY })
        dispatch({ type: GET_PHARM_SALES_SUMMARY, payload: results[0] })
      },
      (err) => {
        console.log(err)
        dispatch({ type: GETTING_PHARM_SALES_SUMMARY })
      },
    )
  }
}

export function getPharmTotalStock() {
  return (dispatch) => {
    _fetchApi(
      `${apiURL()}/drugs/stock/total`,
      ({ results }) => {
        dispatch({ type: GET_PHARM_SALES_SUMMARY, payload: results })
      },
      (err) => {
        console.log(err)
      },
    )
  }
}

export function getTop5PopularDrugsForToday() {
  return (dispatch) => {
    dispatch({ type: GETTING_TOP_5_POPULAR_DRUGS })
    _fetchApi(
      `${apiURL()}/drugs/summary/top/5`,
      ({ results }) => {
        dispatch({ type: GET_TOP_5_POPULAR_DRUGS, payload: results })
        dispatch({ type: GETTING_TOP_5_POPULAR_DRUGS })
      },
      (err) => {
        dispatch({ type: GETTING_TOP_5_POPULAR_DRUGS })
        console.log(err)
      },
    )
  }
}

export function getCustomersList() {
  return (dispatch) => {
    dispatch({ type: GETTING_CUSTOMERS })
    _fetchApi(
      `${apiURL()}/pharmacy/customers`,
      ({ results }) => {
        dispatch({ type: GET_CUSTOMERS, payload: results })
        dispatch({ type: GETTING_CUSTOMERS })
      },
      (err) => {
        console.log(err)
        dispatch({ type: GETTING_CUSTOMERS })
      },
    )
  }
}

export function getOtherExpenses(req) {
  return (dispatch) => {
    _fetchApi(
      `${apiURL()}/drugs/get/other/expenses/${req}`,
      (data) => {
        if (data.success) {
          dispatch({ type: GET_OTHER_EXPENSES, payload: data.results })
        }
      },
      (err) => {
        console.log(err)
      },
    )
  }
}

export function getPendingPharmacyRequests(
  status="request",
  callback = (f) => f,
  error = (f) => f,
) {
  return (dispatch) => {
    let route = `prescriptions/pending/${status}`
    let success_callback = (data) => {
      // console.log(data)
      callback(data)
      if (data && data.results) {
        dispatch({ type: SET_PENDING_PHARMACY_REQUEST, payload: data.results })
      }
    }
    let error_callback = (err) => {
      console.log(err)
      error(err)
    }
    _fetchApi(`${apiURL()}/${route}`, success_callback, error_callback)
  }
}