// export const apiURL = 'https://pscprime.com/hms1/hms-server';

// let exisiting = localStorage.getItem('ipAddr')
let local = "127.0.0.1";
// let local = "192.168.0.234";
// const local = "192.168.0.100";
// const local = "192.168.0.171";
// let locahost = '127.0.0.1'
// let local = 'localhost'
export const ipAddr = local;

// local setup
// export function apiURL() {
//   if (!navigator.onLine) {
//     // return 'http://192.168.0.118:49495'
//     return `http://127.0.0.1:49495`;
//   } else {
//     // return 'http://localhost:49495'
//     return `http://127.0.0.1:49495`;
//   }
// }

// export function apiURL() {
//   if (!navigator.onLine) {
//     // return 'http://192.168.8.108:49495'
//     return "http://192.168.0.171:49495";
//   } else {
//     // return 'http://192.168.8.108:49495'
//     return "http://192.168.0.171:49495";
//   }
// }

// const REMOTE_DICOM_SERVER = 'http://pscprime.com/test/dicom'
const LOCAL_DICOM_SERVER = `http://localhost:5986`;
const REMOTE_DICOM_SERVER =
  "https://yge.wvi.mybluehost.me/test/dicomweb-server";
const REMOTE_DICOM_WEB_URL = "https://dicom.mylikita.clinic";
const LOCAL_DICOM_WEB_URL = `http://localhost:3000`;

const QMS_IP = "192.168.10.122";
export const QUEUE_MGT_SYS = `http://${QMS_IP}:5000`;

// const LOCAL_DICOM_SERVER = "http://127.0.0.1:5985"
// const LOCAL_DICOM_CLIENT_WEB_URL = "http://localhost:3000"

export const DICOM_SERVER =
  process.env.NODE_ENV === "development"
    ? LOCAL_DICOM_SERVER
    : REMOTE_DICOM_SERVER;
export const DICOM_CLIENT_WEB_URL =
  process.env.NODE_ENV === "development"
    ? LOCAL_DICOM_WEB_URL
    : REMOTE_DICOM_WEB_URL;

export function apiURL() {
  if (!navigator.onLine) {
    return "https://yge.wvi.mybluehost.me/test/server";
  } else {
    return "https://yge.wvi.mybluehost.me/test/server";
  }
}

// export function apiURL() {
//   if (!navigator.onLine) {
//     return "https://yge.wvi.mybluehost.me/test/demo_server";
//   } else {
//     return "https://yge.wvi.mybluehost.me/test/demo_server";
//   }
// }

// local IP
// export function apiURL() {
//   if (!navigator.onLine) {
//     return "http://localhost:49495";
//   } else {
//     return "http://localhost:49495";
//   }
// }

// prime IP
// export function apiURL() {
//   if (!navigator.onLine) {
//     return "http://192.168.0.118:49495";
//   } else {
//     return "http://192.168.0.118:49495";
//   }
// }

// deploy

// Abeeb IP
// export function apiURL() {
//   if (!navigator.onLine) {
//     return "http://192.168.0.117:49495";
//   } else {
//     return "http://192.168.0.117:49495";
//   }
// }

// deploy Prime
// export function apiURL() {
//   if (!navigator.onLine) {
//     // return 'http://192.168.0.118:49495'
//     return "http://127.0.0.1:49495";
//   } else {
//     // return 'http://192.168.0.118:49495'
//     return "http://127.0.0.1:49495";
//   }
// }

// export const apiURL = 'http://127.0.0.1:49494';
// export const apiURL = 'https://pscprime.com/hms-bk/code';
// export const apiURL = 'https://bitshis-server.herokuapp.com';
// export const apiURL = () => 'https://doc-individual.herokuapp.com';

export const mylikitaURL = "https://mylikita.herokuapp.com";
// export const mylikitaURL = 'http://localhost:9000';

// export const twilioServer = 'http://localhost:6000';
export const twilioServer = "https://bits-video-server.herokuapp.com";

// Patient Waiting Admission
// List of admitted patients, room and a discharge btn
// Patients discharged by doctor but not yet cleared at the reception
// List of available beds
