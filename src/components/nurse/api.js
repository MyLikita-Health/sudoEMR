import { apiURL } from "../../redux/actions";
import { _fetchApi2 } from "../../redux/actions/api";
import store from "../../redux/store";
import { visits_db } from "../doc_dash/actions/visitsActions";

export function getAllocationInfo(
  allocation_id = "",
  callback = (f) => f,
  error = (f) => f
) {
  const user = store.getState().auth.user;

  _fetchApi2(
    `${apiURL()}/record/in-patients?query_type=in_patient&condition=${allocation_id}&facilityId=${
      user.facilityId
    }`,
    (data) => {
      callback(data);
    },
    (err) => {
      error(err);
    }
  );
}

export function getNursingDressingRequestFormPatient(
  pid,
  cb = (f) => f,
  error = (f) => f
) {
  // return (dispatch) => {
  const user = store.getState().auth.user.id;
  // alert("hello");
  visits_db
    .createIndex({
      index: {
        fields: ["facilityId", "patient_id"],
      },
    })
    .then(() => {
      return visits_db.find({
        selector: {
          facilityId: { $eq: user.facilityId },
          patient_id: { $eq: pid },
        },
        fields: [
          "dressingRequest",
          "_id",
          "patient_name",
          "patient_id",
          "createdAt",
        ],
      });
    })
    .then((data) => {
      //   console.log(data);
      //   error();
      if (data.docs && data.docs.length) {
        // dispatch({ type: SET_PATIENT_LABS, payload: data.doc });
        cb(data.docs);
      }
    })
    .catch((err) => {
      error();
      console.log(err);
    });
  // };
}
