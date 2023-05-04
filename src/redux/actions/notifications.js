import PouchDB from "pouchdb-browser";
import Find from "pouchdb-find";
import { v4 as UUIDV4 } from "uuid";
// import { ipAddr } from ".";
import { GET_NOTIFICATIONS } from "../../components/doc_dash/types";
import store from "../store";

PouchDB.plugin(Find);

export const notificationTypes = {
  APPOINTMENT: "APPOINTMENT",
  NEW_APPOINTMENT_REQUEST: "NEW_APPOINTMENT_REQUEST",
  APPOINTMENT_SENT: "APPOINTMENT_SENT",
};

const notification_db = new PouchDB("notification_db");

export function readNotification(notfn) {
  return (dispatch) => {
    notfn.read = true;
    notification_db
      .put(notfn)
      .then(() => {
        dispatch(getNotifications());
      })
      .catch((err) => console.log("Error creating notification", err));
  };
}

export function createNotification(obj) {
  // console.log(obj);
  obj._id = UUIDV4();
  notification_db
    .put(obj)
    .then(() => {
      console.log(obj);
      console.log("Successfully created notification");
    })
    .catch((err) => console.log("Error creating notification", err));
}

export function getNotifications() {
  return (dispatch) => {
    const userId = store.getState().auth.user.id;
    // console.log(userId)

    // dispatch({ type: LOADING_NOTIFICATIONS });
    notification_db
      .createIndex({
        index: {
          fields: ["uid", "timestamp"],
        },
      })
      .then(async () => {
        try {
          const result = await notification_db.find({
            selector: {
              uid: { $eq: userId.toString() },
              timestamp: { $gte: null },
            },
          });

          dispatch({ type: GET_NOTIFICATIONS, payload: result.docs });
          // dispatch({ type: LOADING_NOTIFICATIONS });
        } catch (err) {
          console.log(err);
          // dispatch({ type: LOADING_NOTIFICATIONS });
        }
      });
  };
}