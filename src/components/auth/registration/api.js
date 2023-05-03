// export const apiurl = 'https://bitshis-server.herokuapp.com'
// // export const apiurl = 'http://localhost:5000'

import { apiURL } from "../../../redux/actions";

export function checkUsername(username, success, error) {
  fetch(`${apiURL()}/users/check/username`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  })
    .then((raw) => raw.json())
    .then((data) => {
      if (data.success) {
        success(data.username);
        // console.log(data)
      } else {
        error(data.username);
        // console.log(data)
      }
    })
    .catch((err) => {
      error("Unable to verify username");
      console.log(err);
    });
}

export function checkEmail(email, success, error) {
  fetch(`${apiURL()}/users/check/email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((raw) => raw.json())
    .then((data) => {
      if (data.success) {
        success(data.email);
        // console.log(data)
      } else {
        error(data.email);
        // console.log(data)
      }
    })
    .catch((err) => {
      error("Unable to verify email");
      console.log(err);
    });
}

export function checkPrefix(prefix, success, error) {
  fetch(`${apiURL()}/users/check/prefix`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prefix }),
  })
    .then((raw) => raw.json())
    .then((data) => {
      if (data.success) {
        success(data.prefix);
        // console.log(data)
      } else {
        error(data.prefix);
        // console.log(data)
      }
    })
    .catch((err) => {
      error("Unable to verify prefix");
      console.log(err);
    });
}

export function getSpecialityList(success, error) {
  fetch(`${apiURL()}/doctors/speciality/list`)
    .then((raw) => raw.json())
    .then((data) => {
      if (data.success) {
        success(data.results);
        console.log("succ", data.results);
      } else {
        error(data);
        console.log("err", data);
      }
    })
    .catch((err) => {
      error("Unable to verify prefix");
      console.log(err);
    });
}
