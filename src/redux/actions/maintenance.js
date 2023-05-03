import {
  NEW_DIESEL_USAGE,
  NEW_DIESEL_REFUEL,
  NEW_REPAIR_ERROR_LOG,
  NEW_SERVICE_LOG,
} from "./actionTypes";
// import {
//   url,
//   _customNotify,
//   _warningNotify,
// } from "../../components/utils/helpers";
import { _postApi } from "./api";
import { apiURL } from "./index";

const endpoint = "maintenance";

export function newDieselUsage(data = [], success = (f) => f) {
  return (dispatch) => {
    _postApi(
      `${apiURL()}/${endpoint}/usage/new`,
      data,
      () => {
        console.log("success");
        dispatch({ type: NEW_DIESEL_USAGE, payload: data });
        success();
      },
      (err) => console.log(err)
    );
  };
}

export function newDieselRefuel(data = [], success = (f) => f) {
  return (dispatch) => {
    _postApi(
      `${apiURL()}/${endpoint}/refuel/new`,
      data,
      () => {
        console.log("success");
        dispatch({ type: NEW_DIESEL_REFUEL, payload: data });
        success();
      },
      (err) => console.log(err)
    );
  };
}

export function newServiceLog(data = [], success = (f) => f) {
  return (dispatch) => {
    _postApi(
      `${apiURL()}/${endpoint}/servicelog/new`,
      data,
      () => {
        console.log("success");
        dispatch({ type: NEW_SERVICE_LOG, payload: data });
        success();
      },
      (err) => console.log(err)
    );
  };
}

export function newErrorRepairLog(data = [], success = (f) => f) {
  return (dispatch) => {
    _postApi(
      `${apiURL()}/${endpoint}/errorrepairlog/new`,
      data,
      () => {
        console.log("success");
        dispatch({ type: NEW_REPAIR_ERROR_LOG, payload: data });
        success();
      },
      (err) => console.log(err)
    );
  };
}
