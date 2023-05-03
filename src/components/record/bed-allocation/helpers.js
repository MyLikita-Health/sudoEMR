import moment from "moment";
import { apiURL } from "../../../redux/actions";
import { _postApiAsync } from "../../../redux/actions/api";
// import { createDrugSchedule } from "../../nurse/drug-schedule";

export function allocateBedToPatient(
  selectedPatient = {},
  selectedBed = {},
  success_callback = (f) => f,
  error_callback = (f) => f
) {
  let now = moment().format("YYYY-MM-DD hh:mm:ss");
  //   setLoading(true);
  
  let data = {
    bedId: selectedBed.id,
    timeAllocated: now,
    query_type: "new",
    patient_id: selectedPatient.patient_id,
    status: "allocated",
  };
  console.log(data);
  _postApiAsync(`${apiURL()}/beds/allocation`, data)
    .then((resp) => {
      console.log(resp);
      let allocation_id = resp.allocation_id;
      //   setLoading(false);
      //   toggle();
      //   dispatch(getAvailableBeds());
      success_callback(allocation_id);
      //   _customNotify("Bed space allocated successfully!");
    })
    .catch((err) => {
      error_callback();
    });
}
