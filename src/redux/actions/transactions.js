import {
  CREATE_ACC_HEAD,
  // CREATE_ACC_HEAD_LOADING,
  GET_EXPENDITURE_ACC_REPORT,
  GET_ACC_HEAD,
  GET_REV_ACC_HEAD,
  GETTING_TOTAL_SALES_BY_USER,
  GET_TOTAL_SALES_BY_USER,
  GET_AMOUNT_RECEIVED,
  GET_AMOUNT_HANDEDOVER,
  GET_EXPENSES_ACC_HEAD,
  GET_GENERAL_ACC_REPORT_LOADING,
  GET_GENERAL_ACC_REPORT,
  GET_REVENUE_ACC_REPORT,
  GET_ITEM_HEAD,
  NEW_ITEM_DESCRIPTION,
  GETTING_ACC_CHART,
  GET_ITEM_CHART_TREE,
} from "./types";
import { _postApi, _fetchApi } from "./api";
import { _customNotify, _warningNotify } from "../../components/utils/helpers";
import { getAccChart, unflatten } from "./account";
import { apiURL } from "./index";
import { REVENUEACCHEADS } from "./actionTypes";
import item from "react-bootstrap-typeahead/lib/behaviors/item";

// import { NEW_TRANSACTION } from './actionTypes';
// import { postApi } from './api';

const endpoint = "account";

export function newTransaction() {
  return (dispatch) => {
    // dispatch({ type: NEW_TRANSACTION })
    // _postApi(
    //     `${baseAPI}`
    // )
  };
}

export function createAccHead(data, callback) {
  return (dispatch) => {
    // dispatch({ type: CREATE_ACC_HEAD_LOADING })
    _postApi(
      `${apiURL()}/${endpoint}/head/new`,
      data,
      () => {
        // dispatch({ type: CREATE_ACC_HEAD_LOADING})
        dispatch({ type: CREATE_ACC_HEAD, payload: data });
        callback();
        _customNotify("Account Head Created");
        dispatch(getAccChart());
      },
      (err) => {
        // dispatch({ type: CREATE_ACC_HEAD_LOADING})
        _warningNotify("An error occured");
        console.log(err);
      }
    );
  };
}

export function getAccHeads() {
  return (dispatch) => {
    // dispatch({ type: GET_ACC_HEAD_LOADING });
    _fetchApi(
      `${apiURL()}/${endpoint}/head`,
      ({ results }) => {
        dispatch({ type: GET_ACC_HEAD, payload: results });
      },
      (err) => {
        // dispatch({ type: GET_ACC_HEAD_LOADING })
        _warningNotify(err.toString());
      }
    );
  };
}

export function getRevAccHeads(callback = (f) => f) {
  return (dispatch) => {
    // dispatch({ type: GET_ACC_HEAD_LOADING });
    _fetchApi(
      `${apiURL()}/${endpoint}/head/revenue`,
      ({ results }) => {
        // dispatch({ type: GET_ACC_HEAD_LOADING })
        let newArr = [];
        results.forEach((it) => {
          newArr.push({ ...it, edit: false });
        });
        callback(newArr);
        dispatch({ type: GET_REV_ACC_HEAD, payload: newArr });

        // let dd = unflatten(results);
        // console.log(dd, results);
      },
      (err) => {
        // dispatch({ type: GET_ACC_HEAD_LOADING })
        console.log(err);
        // _warningNotify('An error occurred');
        // _warningNotify(err.toString());
      }
    );
  };
}

export function getExpensesAccHeads() {
  return (dispatch) => {
    // dispatch({ type: GET_ACC_HEAD_LOADING });
    _fetchApi(
      `${apiURL()}/${endpoint}/head/expenses`,
      ({ results }) => {
        // dispatch({ type: GET_ACC_HEAD_LOADING })
        dispatch({ type: GET_EXPENSES_ACC_HEAD, payload: results });
      },
      (err) => {
        // dispatch({ type: GET_ACC_HEAD_LOADING })
        _warningNotify(err.toString());
      }
    );
  };
}

export function getRevenueAccHeads() {
  return (dispatch) => {
    // dispatch({ type: GET_ACC_HEAD_LOADING });
    _fetchApi(
      `${apiURL()}/${endpoint}/revenue/heads`,
      ({ results }) => {
        // dispatch({ type: GET_ACC_HEAD_LOADING })
        dispatch({ type: REVENUEACCHEADS, payload: results });
      },
      (err) => {
        // dispatch({ type: GET_ACC_HEAD_LOADING })
        _warningNotify(err.toString());
      }
    );
  };
}

export function transfer(data, callback) {
  return (dispatch) => {
    _postApi(
      `${apiURL()}/${endpoint}/transfer`,
      data,
      () => {
        callback();
        _customNotify("Transfer successful");
      },
      (err) => {
        console.log(err);
        _warningNotify("Sorry, Could not complete transfer");
      }
    );
  };
}

export function getTotalSalesByUser(userId) {
  return (dispatch) => {
    dispatch({ type: GETTING_TOTAL_SALES_BY_USER });
    _fetchApi(
      `${apiURL()}/${endpoint}/sales/${userId}`,
      ({ results }) => {
        dispatch({ type: GETTING_TOTAL_SALES_BY_USER });
        // console.log(results)
        dispatch({ type: GET_TOTAL_SALES_BY_USER, payload: results[0] });
      },
      (err) => {
        dispatch({ type: GETTING_TOTAL_SALES_BY_USER });
        console.log(err);
      }
    );
  };
}

export function getAmountReceived(userId) {
  return (dispatch) => {
    dispatch({ type: GETTING_TOTAL_SALES_BY_USER });
    _fetchApi(
      `${apiURL()}/${endpoint}/cash/received/${userId}`,
      ({ results }) => {
        dispatch({ type: GETTING_TOTAL_SALES_BY_USER });
        console.log(results);
        dispatch({ type: GET_AMOUNT_RECEIVED, payload: results[0] });
      },
      (err) => {
        dispatch({ type: GETTING_TOTAL_SALES_BY_USER });
        console.log(err);
      }
    );
  };
}

export function getAmountHandedOver(userId) {
  return (dispatch) => {
    dispatch({ type: GETTING_TOTAL_SALES_BY_USER });
    _fetchApi(
      `${apiURL()}/${endpoint}/cash/handedover/${userId}`,
      ({ results }) => {
        dispatch({ type: GETTING_TOTAL_SALES_BY_USER });
        console.log(results);
        dispatch({ type: GET_AMOUNT_HANDEDOVER, payload: results[0] });
      },
      (err) => {
        dispatch({ type: GETTING_TOTAL_SALES_BY_USER });
        console.log(err);
      }
    );
  };
}

export function getGeneralReport() {
  return (dispatch) => {
    dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING });
    _fetchApi(
      `${apiURL()}/transactions/reports/general`,
      ({ results }) => {
        // this.setState({ reportData: results })
        // console.log(results)
        dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING });
        dispatch({ type: GET_GENERAL_ACC_REPORT, payload: results });
      },
      (err) => {
        _warningNotify("An error occured");
        console.log(err);
        dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING });
      }
    );
  };
}

export function getGeneralReportByDate(from, to) {
  return (dispatch) => {
    dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING });
    _fetchApi(
      `${apiURL()}/transactions/reports/general/${from}/${to}`,
      ({ results }) => {
        // this.setState({ reportData: results })
        // console.log(results)
        dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING });
        dispatch({ type: GET_GENERAL_ACC_REPORT, payload: results });
      },
      (err) => {
        _warningNotify("An error occured");
        console.log(err);
        dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING });
      }
    );
  };
}

export function getGeneralReportByAccHead(from, to, accHead) {
  return (dispatch) => {
    dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING });
    _fetchApi(
      `${apiURL()}/transactions/reports/general/${accHead}/${from}/${to}`,
      ({ results }) => {
        // this.setState({ reportData: results })
        // console.log(results)
        dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING });
        dispatch({ type: GET_GENERAL_ACC_REPORT, payload: results });
      },
      (err) => {
        _warningNotify("An error occured");
        console.log(err);
        dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING });
      }
    );
  };
}

export function getRevenueReport(from, to) {
  return (dispatch) => {
    dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING });
    _fetchApi(
      `${apiURL()}/transactions/reports/revenue/${from}/${to}`,
      ({ results }) => {
        // this.setState({ reportData: results })
        // console.log(results)
        // dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING })
        dispatch({ type: GET_REVENUE_ACC_REPORT, payload: results });
      },
      (err) => {
        _warningNotify("An error occured");
        console.log(err);
        // dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING })
      }
    );
  };
}

export function getRevenueReportByAccHead(from, to, accHead) {
  return (dispatch) => {
    dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING });
    _fetchApi(
      `${apiURL()}/transactions/reports/revenue/${accHead}/${from}/${to}`,
      ({ results }) => {
        // this.setState({ reportData: results })
        // console.log(results)
        // dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING })
        dispatch({ type: GET_GENERAL_ACC_REPORT, payload: results });
      },
      (err) => {
        _warningNotify("An error occured");
        console.log(err);
        // dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING })
      }
    );
  };
}

export function getExpenditureReport(from, to) {
  return (dispatch) => {
    dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING });
    _fetchApi(
      `${apiURL()}/transactions/reports/expenditure/${from}/${to}`,
      ({ results }) => {
        // this.setState({ reportData: results })
        // console.log(results)
        // dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING })
        dispatch({ type: GET_EXPENDITURE_ACC_REPORT, payload: results });
      },
      (err) => {
        _warningNotify("An error occured");
        console.log(err);
        // dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING })
      }
    );
  };
}

export function getExpenditureReportByAccHead(from, to, accHead) {
  return (dispatch) => {
    dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING });
    _fetchApi(
      `${apiURL()}/transactions/reports/expenditure/${accHead}/${from}/${to}`,
      ({ results }) => {
        // this.setState({ reportData: results })
        // console.log(results)
        // dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING })
        dispatch({ type: GET_GENERAL_ACC_REPORT, payload: results });
      },
      (err) => {
        _warningNotify("An error occured");
        console.log(err);
        // dispatch({ type: GET_GENERAL_ACC_REPORT_LOADING })
      }
    );
  };
}

// export function getPatientAccStmt(patientId,from,to,cb){
//     return dispatch => {
//         dispatch({ type: GETTING_PATIENT_ACC_STMT });
//         _fetchApi(
//             `${apiURL()}/transactions/reports/stmt/${patientId}/${from}/${to}`,
//             ({results}) => {
//                 dispatch({ type: GET_PATIENT_ACC_STMT, payload: results })
//                 dispatch({ type: GETTING_PATIENT_ACC_STMT })
//                 if(results.length){
//                     cb(results);
//                 }
//             },
//             err => {
//                 dispatch({ type: GETTING_PATIENT_ACC_STMT });
//                 _warningNotify('An error occurred');
//                 console.log(err)
//             }
//         )

//     }
// }

export function getItemHeads() {
  return (dispatch) => {
    // dispatch({ type: GET_ACC_HEAD_LOADING });
    _fetchApi(
      `${apiURL()}/${endpoint}/new/item_head`,
      ({ results }) => {
        // dispatch({ type: GET_ACC_HEAD_LOADING })
        dispatch({ type: GET_ITEM_HEAD, payload: results });
      },
      (err) => {
        // dispatch({ type: GET_ACC_HEAD_LOADING })
        _warningNotify(err.toString());
      }
    );
  };
}

export function createItemDes(data, callback) {
  return (dispatch) => {
    // dispatch({ type: CREATE_ACC_HEAD_LOADING })
    _postApi(
      `${apiURL()}/${endpoint}/new/item_description`,
      data,
      () => {
        // dispatch({ type: CREATE_ACC_HEAD_LOADING})
        dispatch({ type: NEW_ITEM_DESCRIPTION, payload: data });
        callback();
        _customNotify("Item Head Created");
        dispatch(getItemChart());
      },
      (err) => {
        // dispatch({ type: CREATE_ACC_HEAD_LOADING})
        _warningNotify("An error occured");
        console.log(err);
      }
    );
  };
}

export function getItemChart() {
  return (dispatch) => {
    dispatch({ type: GETTING_ACC_CHART });
    _fetchApi(
      `${apiURL()}/${endpoint}/new/item_chart`,
      ({ results }) => {
        // dispatch({ type: GET_ACC_CHART, payload: results });
        dispatch({ type: GETTING_ACC_CHART });
        let arrInTree = unflatten(results);
        dispatch({ type: GET_ITEM_CHART_TREE, payload: arrInTree });
      },
      (err) => {
        dispatch({ type: GETTING_ACC_CHART });
        console.log(err);
      }
    );
  };
}
