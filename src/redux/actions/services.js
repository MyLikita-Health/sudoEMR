import {
  NEW_TRANSACTION,
  DELETE_SERVICE_LOADING,
  DELETE_SERVICE,
} from "./actionTypes";
import {
  // url,
  _customNotify,
  _warningNotify,
} from "../../components/utils/helpers";
import { _postApi, _deleteApi } from "./api";
import { apiURL } from "./index";

const endpoint = "services";

export function recordServices(data = [], success = (f) => f) {
  return (dispatch) => {
    _postApi(
      `${apiURL()}/${endpoint}/recordservices`,
      data,
      () => {
        console.log("success");
        dispatch({ type: NEW_TRANSACTION, payload: data });
        success();
      },
      (err) => console.log(err)
    );
  };
}

export function deleteService(serviceId) {
  return (dispatch) => {
    dispatch({ type: DELETE_SERVICE_LOADING });
    _deleteApi(
      `${apiURL()}/${endpoint}/${serviceId}`,
      null,
      () => {
        dispatch({ type: DELETE_SERVICE_LOADING });
        dispatch({ type: DELETE_SERVICE, payload: serviceId });
        _customNotify("Service delete");
      },
      (err) => {
        dispatch({ type: DELETE_SERVICE_LOADING });
        _warningNotify("An error occured");
        console.log(err);
      }
    );
  };
}
