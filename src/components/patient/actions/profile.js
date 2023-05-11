import { sudoEMRURL } from "../../../redux/actions";
import { _customNotify, _warningNotify } from "../../utils/helpers";

export function submitHealthStatus(data, cb) {
  return async (dispatch) => {
    protectedPost("api/users/health", data)
      .then((resp) => {
        // console.log(resp);
        cb();
        if (resp.success) {
          _customNotify("Health Status Updated");
        } else {
          console.log(resp.error);
          _warningNotify(resp.error);
        }
      })
      .catch((err) => {
        console.log("caught error", err);
        _warningNotify("An error occured");
      });
  };
}

export function submitBasicInfo(data, cb) {
  return async (dispatch) => {
    protectedPost("api/users/basicinfo", data)
      .then((resp) => {
        // console.log(resp);
        cb();
        if (resp.success) {
          _customNotify("Profile Updated");

          // dispatch(initUser());
        } else {
          console.log(resp.error);
          _warningNotify(resp.error);
        }
      })
      .catch((err) => {
        console.log("caught error", err);
        _warningNotify("An error occured");
      });
  };
}

export async function protectedPost(route, dataObj) {
  try {
    const token = localStorage.getItem("@@__token");
    // console.log(token);
    const response = await fetch(`${sudoEMRURL}/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(dataObj),
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
