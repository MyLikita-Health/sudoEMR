import moment from "moment";
import { apiURL } from "../../../../redux/actions";
import { _fetchApi2, _postApi } from "../../../../redux/actions/api";
import store from "../../../../redux/store";
// import { createDrugSchedule } from '../../../nurse/drug-schedule'
import {
  today,
  // checkEmpty,
  _convertArrOfObjToArr,
  // _customNotify,
  _warningNotify,
} from "../../../utils/helpers";
import { saveVisits } from "../../actions/visitsActions";

export function getStartTime(schList) {
  let startT = "";
  schList.forEach((sch) => {
    let schTime = moment(sch.time, "hha").format("YYYY-MM-DD HH:mm");
    // console.log(schTime)
    // if(moment(sch.time, 'hha').isBefore(moment().format('hha'))) {
    let timeIsB4Now = moment(moment().format("YYYY-MM-DD HH:mm")).isBefore(
      schTime
    );
    // console.log(timeIsB4Now, 'timeIsB4Now')
    if (timeIsB4Now) {
      startT = schTime;
      return;
    } else {
      startT = moment(schList[0].time, "hha")
        .add(1, "day")
        .format("YYYY-MM-DD HH:mm");
      return;
    }
  });

  return startT;
}

export function savePrescriptionRequest(
  prescriptionList,
  patient,
  visit,
  callback = (f) => f
  // listOfSchedule = [],
) {
  console.log(prescriptionList);
  console.log(prescriptionList);
  console.log(prescriptionList);
  const { username, facilityId } = store.getState().auth.user;
  let endDate = moment().add(
    prescriptionList[0].duration,
    prescriptionList[0].period
  );
  prescriptionList.forEach((p) => {
    let lastDayForP = moment().add(p.duration, p.period);
    if (moment(lastDayForP).isAfter(moment(endDate))) {
      return (endDate = lastDayForP);
    }
  });
  const list = [];
  let decision = prescriptionList[0].decision || "";

  for (let i = 0; i < prescriptionList.length; i++) {
    let prescription = prescriptionList[i];
    // let currentHr = moment().format('HH')

    // eslint-disable-next-line no-loop-func
    // _fetchApi2(
    //   `${apiURL()}/drugs/drugs_freq?query_type=freq_details&param=${
    //     prescription.frequency
    //   }&current_hour=${currentHr}`,
    //   // eslint-disable-next-line no-loop-func
    //   (data) => {
    //     if (data && data.results) {
    //       let { next_time, no_of_times } = data.results[0]
    // let startTime = moment(next_time, 'HH').format('YYYY-MM-DD HH:mm')
    // let endTime = moment(startTime).add(
    //   prescription.duration,
    //   prescription.period,
    // )

    let obj = {
      drug: prescription.drug,
      drug_id: prescription.drug_id,
      dosage: prescription.dosage,
      period: prescription.period,
      duration: prescription.duration,
      frequency: prescription.frequency,
      patient_id: patient.id,
      prescribed_by: username,
      facilityId: facilityId,
      status: "request",
      request_id: visit._id,
      route: prescription.route,
      additionalInfo: prescription.additionalInfo,
      decision: prescription.decision ? prescription.decision : "",
      // startTime,
      // timesPD: no_of_times,
      id: prescription._id,
      // endDate: endTime ? endTime : endDate,
    };
    // console.log(obj,'ppppppppppppppppppppppppppp')
    list.push(obj);
  }
  //     },
  //   )
  // }

  // console.log(list)
  // let prescriptionsData = _convertArrOfObjToArr(list)
  _postApi(
    `${apiURL()}/prescriptions/requests/batch-new`,
    { data: list, decision, patientId: patient.id },
    () => {
      // _customNotify('Prescription request(s) sent!')
      // console.log('HERE WE ARE', list)
      callback();
      //   if (!labInvestigations.length) {
      //     dispatch(resetDiagnosisForm())
      //   }
    },
    () => _warningNotify("Error submitting prescription requests(s)")
  );
}

// function saveLabReq(labInvestigations, patient) {
//   const { username, facilityId } = store.getState().auth.user;

//   let investigationObj = {
//     summary: labInvestigations.receiptDisplayed,
//     detail: labInvestigations.selectedLabs,
//     patient_id: patient.id,
//     requested_by: username,
//     facilityId: facilityId,
//     status: "ordered",
//     // visitId: visit._id,
//   };

// }

export function saveBreifDiagnosis(
  consultation,
  patient,
  consultStatus,
  patientType,
  callback = (f) => f
) {
  return (dispatch) => {
    const {
      username,
      facilityId,
      firstname,
      lastname,
    } = store.getState().auth.user;
    const {
      presentingComplaint,
      prescriptionRequestList,
      labInvestigations,
      nursingRequests,
      managementPlan,
      treatmentPlan,
    } = consultation;
    let investigationObj = {
      summary: labInvestigations.receiptDisplayed,
      detail: labInvestigations.selectedLabs,
      patient_id: patient.id,
      requested_by: username,
      facilityId: facilityId,
      status: "ordered",
      decision: managementPlan.patientStatus,
    };
    let validPrescription = [];
    prescriptionRequestList.forEach((pr) => {
      if (pr.name) {
        validPrescription.push({
          ...pr,
          drug_id: pr.id,
          drug: pr.name,
          decision: managementPlan.patientStatus,
        });
      }
    });

    let consultObj = {
      presenting_complaints: presentingComplaint,
      treatmentPlan,
      labInvestigations: investigationObj.summary.length
        ? investigationObj
        : [],
      prescriptionRequest: validPrescription,
      managementPlan,
      dressingRequest: nursingRequests,
      patient_id: patient.id,
      patient_name: patient.name,
      seen_by: `${firstname} ${lastname}`,
      facilityId,
      created_by: `${firstname} ${lastname}`,
    };

    let charges = {
      patient_id: patient.id,
      user_id: username,
      status: consultStatus,
      query_type: "insert",
      facilityId: facilityId,
      head: 400,
      patientType,
    };
    _postApi(
      `${apiURL()}/post-charges`,
      charges,
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
    dispatch(
      saveVisits(consultObj, (visit) => {
        // console.log(visit)
        _postApi(
          `${apiURL()}/consultation/new`,
          {
            consult_id: visit._id,
            ...consultObj,
            ...managementPlan,
            ...nursingRequests,
          },
          () => {
            _fetchApi2(
              `${apiURL()}/frequency-setup/get?query_type=list&facilityId=${facilityId}`,
              (data) => {
                if (data && data.results) {
                  savePrescriptionRequest(
                    validPrescription,
                    patient,
                    visit,
                    () => {
                      // if (visit.managementPlan.patientStatus === 'admit') {
                      //   createDrugSchedule(
                      //     patient.id,
                      //     null,
                      //     // allocation_id,
                      //     () => {
                      //       // _customNotify("Drug Schedule Saved!");
                      console.log("successfully saved drug schedule");
                      //     },
                      //     () => {
                      //       // _warningNotify("Error saving drug schedule");
                      //       console.log('Error saving drug schedule')
                      //     },
                      //   )
                      // }
                    },
                    data.results
                  );
                }
              }
            );

            // saveLabReq(labInvestigations, patient);
            // _customNotify('Diagnosis submitted')
            callback();
            //   dispatch({ type: SUBMIT_DIAGNOSIS_LOADING })
            //   if (!prescriptionRequest.length && !labInvestigations.length) {
            // dispatch(resetDiagnosisForm())
            //   }
          },
          (err) => {
            _warningNotify("An error occured, please try again later");
            console.log(err);
            //   dispatch({ type: SUBMIT_DIAGNOSIS_LOADING })
          }
        );
      })
    );
  };
}

// const getPatientStatus = () => {
//   // visit
// }

export function postConsultationRecord(data, callback = (f) => f) {
  _postApi(
    `${apiURL()}/consultation/new`,
    data,
    (resp) => {
      callback(resp);
    },
    (err) => {
      console.log(err);
    }
  );
}

export function getConsultationRecord(
  q,
  callback = (f) => f,
  patientId = "",
  error = (f) => f,
  userId = "",
  dateFrom = today,
  dateTo = today
) {
  const facilityId = store.getState().auth.user.facilityId;
  _fetchApi2(
    `${apiURL()}/consultation/query?query_type=${q}&patient_id=${patientId}&facilityId=${facilityId}&userId=${userId}&dateFrom=${dateFrom}&dateTo=${dateTo}`,
    (resp) => {
      callback(resp);
    },
    (err) => {
      error(err);
      console.log(err);
    }
  );
}

export function getVitalHistory(patientId = "", q, callback = (f) => f) {
  const facilityId = store.getState().auth.user.facilityId;
  _fetchApi2(
    `${apiURL()}/vitals/query?patient_id=${patientId}&query_type=${q}&facilityId=${facilityId}`,
    (data) => {
      if (data.results) {
        callback(data.results);
      }
    }
  );
}

export function surgical_note(data = {}, callback = (f) => f, query) {
  const facilityId = store.getState().auth.user.facilityId;
  _postApi(
    `${apiURL()}/surgical-note/new?query_type=${query}&facilityId=${facilityId}`,
    data,
    (data) => {
      callback(data);
    },
    (err) => {
      console.log(err);
    }
  );
}
