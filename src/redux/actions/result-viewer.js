import { apiURL } from "./index.js";
import {  RESULT_ERROR, RESULT_VIEW } from "./types";

export function view({ lab_no, token }, callback, error, history) {
  return (dispatch) => {
    console.log({ lab_no, token });
    fetch(`${apiURL()}/results/view`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lab_no, token }),
    })
      .then((raw) => raw.json())
      .then((result) => {
        console.log({ result: result.data });
        if (result.success) {
          localStorage.setItem("results", JSON.stringify(result.data));
          dispatch({ type: RESULT_VIEW, payload: result.data });

          history.push(
            `/result-index/${result.data.patient_id}/${
              result.data.booking_no
            }?facilityId=${result.data.facilityId}&request_id=${
              result.data.request_id
            }`
          );
          // dispatch({ type: LOGIN, payload: })
          callback();
        } else {
          error(result.error);
          dispatch({ type: RESULT_ERROR, payload: result.error });
        }
      })
      .catch((err) => {
        error(err);
        dispatch({ type: RESULT_ERROR, payload: err });
      });
  };
}
