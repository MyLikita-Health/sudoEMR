import {
  LOADING,
  LOGIN,
  ERROR,
  LOGOUT,
  LOADING_AVATAR,
  LOAD_AVATAR,
  CREATING_USER,
  ERROR_CREATING_USER,
  GET_ROLES,
  GET_USERS,
  GET_DOCTORS_LIST,
  GET_DOC_LIST_LOADING,
  LOADING_APPROVED_DOCTORS,
  GET_APPROVED_DOCTORS,
} from "./types";
import { apiURL, sudoEMRURL } from "./index.js";
import PouchDB from "pouchdb-browser";
import store from "../store";
import fire from "./firebase";
import { generateAvatar } from "../../components/utils/helpers";
import { _fetchApi, _fetchApi2, _postApi } from "./api";
import { getFacilityInfo } from "./facility";
import { accountTypes } from "../../components/auth/login/login";

const endpoint = "auth";
export const authDB = PouchDB("authDB");

export function patientSignup(data, callback = (f) => f, error = (f) => f) {
  return (dispatch) => {
    dispatch({ type: CREATING_USER });

    fire
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        fetch(`${sudoEMRURL}/api/users/create`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((raw) => raw.json())
          .then((result) => {
            if (!result.success) {
              error(result.error);
              dispatch({ type: ERROR, payload: result.error });
            } else {
              dispatch(
                patientLogin(
                  { email: data.email, password: data.password },
                  callback,
                  error
                )
              );
            }
          })
          .catch((err) => {
            error(err);
            // console.log(err);
            dispatch({ type: ERROR, payload: err });
          });
      })
      .catch((err) => {
        error(err.message);
        // console.log(err);
        dispatch({ type: ERROR, payload: err.message });
      });
  };
}

export function createUser(data = [], success = (f) => f, error = (f) => f) {
  return (dispatch) => {
    dispatch({ type: CREATING_USER });
    _postApi(
      `${apiURL()}/${endpoint}/sign-up`,
      data,
      (result) => {
        // console.log(result);
        if (result.errors) {
          let err = Object.values(result.errors);
          error(err[0]);
          dispatch({ type: ERROR_CREATING_USER, payload: err[0] });
        } else {
          dispatch({ type: CREATING_USER });
          success();
        }
      },
      (err) => {
        // console.log(err);
        dispatch({ type: ERROR_CREATING_USER, payload: err });
      }
    );
  };
}

export function saveUserData(data) {
  authDB
    .get("user")
    .then(({ user, _rev }) => {
      if (user) {
        authDB.put({ _id: "user", _rev, user: { ...user, ...data } });
      }
    })
    .catch(() => authDB.put({ _id: "user", user: data }));
}

export function login({ username, password, accountType }, callback, error) {
  return (dispatch) => {
    switch (accountType) {
      case accountTypes.PATIENT: {
        dispatch(patientLogin({ email: username, password }, callback, error));
        break;
      }
      case accountTypes.DOCTOR: {
        dispatch(doctorLogin({ username, password }, callback, error));
        break;
      }
      case accountTypes.OTHER: {
        dispatch(doctorLogin({ username, password }, callback, error));
        break;
      }
      default:
        return null;
    }
  };
}

export function doctorLogin({ username, password }, callback, error) {
  return (dispatch) => {
    fetch(`${apiURL()}/${endpoint}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((raw) => raw.json())
      .then((data) => {
        if (data.error) {
          error(data.error);
          dispatch({ type: ERROR, payload: data.error });
        } else {
          localStorage.setItem("user", data.user.username);
          localStorage.setItem("@@sudoEMR_token", data.token);
          // saveUserData(data);
          dispatch({ type: LOGIN, payload: data });
          callback();
        }
      })
      .catch((err) => {
        error(err);
        dispatch({ type: ERROR, payload: err });
      });
  };
}

export function patientLogin(
  { email, password },
  cb = (f) => f,
  error = (f) => f
) {
  return async (dispatch) => {
    fetch(`${sudoEMRURL}/api/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((raw) => raw.json())
      .then((data) => {
        if (data.error) {
          error(data.error);
          // console.log(data);
          dispatch({ type: ERROR, payload: data.error });
        } else {
          localStorage.setItem("@@__token", data.token);
          dispatch({ type: LOGIN, payload: data });
          cb();
        }
      })
      .catch((err) => {
        error(err);
        dispatch({ type: ERROR, payload: err });
      });
  };
}

export function authLoading() {
  return (dispatch) => {
    dispatch({ type: LOADING });
  };
}

export function checkAuthStatus(success, error) {
  return (dispatch) => {
    dispatch(init(success, error));
  };
}

export function logout(callback = (f) => f) {
  return (dispatch) => {
    // console.log('dispatching logout');
    authDB.get("user").then((data) => {
      data._deleted = true;
      authDB.put(data);
    });
    dispatch({ type: LOGOUT });
    localStorage.removeItem("@@__token");
    callback();
  };
}

export function loadUser(err = (f) => f, cb = (f) => f) {
  return (dispatch) => {
    authDB
      .get("user")
      .then(({ user }) => {
        dispatch({ type: LOGIN, payload: user });
        dispatch(getFacilityInfo(cb));
      })
      .catch(() => err());
  };
}

const navigateBasedOnAccess = (access, history) => {
  if (access && access.length) {
    switch (access[0]) {
      case "Laboratory":
        return history.push("/me/lab");
      case "Accounts":
        return history.push("/me/account");
      case "Reports":
        return history.push("/me/report");
      case "Records":
        return history.push("/me/records");
      case "Doctors":
        return history.push("/me/doctor");
      case "Pharmacy":
        return history.push("/me/pharmacy");

      case "Inventory":
        return history.push("/me/inventory");

      case "Operation":
        return history.push("/me/operation");
      case "Admin":
        return history.push("/me/admin");

      case "Patient":
        return history.push("/user");
      default:
        return history.push("/");
    }
  }
};

export async function getUserProfile(_token) {
  try {
    // console.log(_token);
    let response = await fetch(`${apiURL()}/auth/verify-token`, {
      method: "GET",
      headers: {
        authorization: _token,
      },
    });
    let data = await response.json();
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
}

export function init(history, location) {
  return (dispatch) => {
    dispatch({ type: "START_FULL_PAGE_LOADING" });
    let token = localStorage.getItem("@@sudoEMR_token");
    // dispatch({ type: START_LOADING_APP });
    console.log("Start Auth Process");
    if (token) {
      // let parsedToken = JSON.parse(token)
      console.log("Got Auth Token", token);
      /**
       * Token present
       * verifyToken */
      getUserProfile(token)
        .then((data) => {
          if (data.success) {
            /**
             * Token is valid
             * navigate user to dashboard */
            console.log("Token is valid, getting next page");
            dispatch({ type: LOGIN, payload: data });
            let user = data.user;

            if (location.pathname.includes("/me")) {
              console.log("Existing page loaded");
              dispatch({ type: "STOP_FULL_PAGE_LOADING" });
            } else {
              _fetchApi2(
                `${apiURL()}/navigation/get-homepage?facilityId=${
                  user.facilityId
                }&role=${user.role}`,
                (home) => {
                  if (home.results) {
                    console.log("Got homepage, opening app", home.results);
                    dispatch({ type: "STOP_FULL_PAGE_LOADING" });
                    let url = home.results.length
                      ? home.results[0].home_page
                      : "/me/account";
                    history.push(url);
                  }
                },
                (err) => {
                  console.log(
                    "Could not get homepage, navigating based on access..."
                  );
                  console.log(err);
                  dispatch({ type: "STOP_FULL_PAGE_LOADING" });
                  navigateBasedOnAccess(user.access, history);
                }
              );
            }

            // callback()
            //   dispatch({ type: STOP_LOADING_APP });
            // const { user } = data

            // dispatch({ type: types.auth.AUTH_USER, payload: data })
            // alert(JSON.stringify(data))
          } else {
            /**
             * Token is invalid
             * navigate user to auth */
            // dispatch({ type: STOP_LOADING_APP });
            console.log("Token is invalid, navigating to auth...");
            // callback()
            // console.log(err)
            localStorage.removeItem("@@sudoEMR_token");
            dispatch({ type: "STOP_FULL_PAGE_LOADING" });
            history.push("/auth");
          }
        })
        .catch((err) => {
          console.log(
            "An error occured while verifying token, navigating back to login...",
            err
          );
          console.log(err);
          dispatch({ type: "STOP_FULL_PAGE_LOADING" });
          history.push("/auth");
        });
    } else {
      /**
       * No token found
       * navigate user to auth page
       */
      // callback()
      console.log("No token was found, navigating to login");
      dispatch({ type: "STOP_FULL_PAGE_LOADING" });
      history.push("/auth");
    }
  };
}

// export function initUser(history = null, callback = (f) => f) {
//   return (dispatch) => {
//     let token = localStorage.getItem('@@__token');

//     if (token) {
//       /**
//        * Token present
//        * verifyToken */
//       verifyToken(token)
//         .then((data) => {
//           if (data.success) {
//             dispatch({ type: LOGIN, payload: data });
//             callback();
//           } else {
//             callback();
//             localStorage.removeItem('@@__token');
//             history.push('/auth');
//             console.log('Token expired');
//             dispatch({ type: LOGOUT });
//           }
//         })
//         .catch((err) => {
//           callback();
//           localStorage.removeItem('@@__token');
//           history.push('/auth');
//           console.log('Token expired');
//           dispatch({ type: LOGOUT });
//         });
//     } else {
//       /**
//        * No token found
//        * navigate user to auth page
//        */
//       callback();
//       history.push('/auth');
//     }
//   };
// }

// async function verifyToken(token) {
//   try {
//     let response = await fetch(`${apiURL()}/auth/verify-token`, {
//       method: 'GET',
//       headers: {
//         Authorization: token,
//       },
//     });
//     let data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

export function loadUserAvatar() {
  return (dispatch) => {
    // console.log('loading');
    dispatch({ type: LOADING_AVATAR });
    let user = store.getState().auth.user;
    if (user) {
      if (user.image) {
        let avatar = user.image;
        dispatch({ type: LOAD_AVATAR, avatar });
        dispatch({ type: LOADING_AVATAR });
      } else {
        let { firstname, lastname } = user;
        let avatar = generateAvatar(firstname, lastname);
        dispatch({ type: LOAD_AVATAR, avatar });
        dispatch({ type: LOADING_AVATAR });
      }
    }
  };
}

export function getRoles() {
  return (dispatch) => {
    _fetchApi(
      `${apiURL()}/users/roles`,
      ({ results }) => {
        // console.log(results)
        if (results.length) {
          dispatch({ type: GET_ROLES, payload: results });

          authDB
            .get("user")
            .then(({ _rev }) => {
              authDB
                .put({ _id: "user", _rev, user: results })
                .then(() => console.log("update user"))
                .catch((err) => console.log(err));
            })
            .catch(() => {
              authDB
                .put({ _id: "user", user: results })
                .then(() => {
                  console.log("update user");
                })
                .catch((err) => console.log(err));
            });
        }
      },
      (err) => console.log(err)
    );
  };
}

export function getUsers() {
  return (dispatch) => {
    _fetchApi(
      `${apiURL()}/users`,
      ({ results }) => {
        dispatch({ type: GET_USERS, payload: results });
      },
      (err) => {
        console.log(err);
        //
      }
    );
  };
}

export function getDoctors() {
  return (dispatch) => {
    const facilityId = store.getState().auth.user.facilityId;
    dispatch({ type: GET_DOC_LIST_LOADING });
    _fetchApi2(
      `${apiURL()}/doctors/${facilityId}?query_type=specialist`,
      ({ results }) => {
        dispatch({ type: GET_DOCTORS_LIST, payload: results });
        dispatch({ type: GET_DOC_LIST_LOADING });
      },
      (err) => {
        // console.log(err);
        dispatch({ type: GET_DOC_LIST_LOADING });
      }
    );
  };
}

export function getApprovedDoctors() {
  return (dispatch) => {
    dispatch({ type: LOADING_APPROVED_DOCTORS });
    fetch(`${apiURL()}/doctors/all/list`)
      .then((raw) => raw.json())
      .then(({ results }) => {
        dispatch({ type: GET_APPROVED_DOCTORS, payload: results });
        dispatch({ type: LOADING_APPROVED_DOCTORS });
      })
      .catch((err) => dispatch({ type: LOADING_APPROVED_DOCTORS }));
  };
}
