import {
  SAVE_VITAL_SIGNS,
  SAVE_PRESENTING_COMPLAINTS,
  SAVE_P_COMPLAINT_HISTORY,
  SAVE_PREV_MED_HISTORY,
  SAVE_PROBLEMS,
  SAVE_LAB_INVESTIGATIONS,
  SAVE_PROVISIONAL_DIAGNOSIS,
  SAVE_ATHROPOMETRY,
  SAVE_MANAGEMENT_PLAN,
  SAVE_PRESCRIPTION_REQUEST,
  SAVE_OBSERVATION_REQUEST,
  SAVE_DRESSING_REQUEST,
  SAVE_SYS_EXAM,
  SET_TAB,
  SET_PATIENT_TO_SEE,
  GET_PATIENT_PAST_VISIT,
  GETTING_PATIENT_PAST_VISIT,
  SUBMIT_DIAGNOSIS_LOADING,
  RESET_DIAGNOSIS_FORM,
  SAVE_FOLLOWUP_APPOINTMENT,
  SAVE_MSS,
  SAVE_CVS,
  SAVE_RESPIRATORY,
  SAVE_ABDOMEN,
  SAVE_CNS,
  SAVE_GPE,
  SAVE_LAB_REQUEST,
} from './types'
import { _fetchApi, _postApi } from './api'
import { apiURL } from './index'
import store from '../store'
// import { saveLabRequest as _saveLabRequest } from "../../components/doc_dash/actions/helpers/saveLabRequest";

import {
  _warningNotify,
  checkEmpty,
  _customNotify,
  _convertArrOfObjToArr,
  // _customNotify,
  // _convertArrOfObjToArr,
} from '../../components/utils/helpers'
// import { getPatientAssignedToDoctor } from "./diagnosis";
import { saveVisits } from '../../components/doc_dash/actions/visitsActions'
// import { saveLab } from "../../components/doc_dash/actions/labActions";
import { appointmentFunc } from "../../components/doc_dash/actions/appointmentsAction";
import { updateAssignedPatient } from '../../components/record/actions/patientsActions'

const endpoint = 'diagnosis'

export function setTab(tab) {
  return (dispatch) => {
    dispatch({
      type: SET_TAB,
      payload: tab,
    })
  }
}

export function saveVitalSigns(data) {
  return (dispatch) => {
    dispatch({
      type: SAVE_VITAL_SIGNS,
      payload: data,
    })
  }
}

export function savePresentingComplaints(data) {
  // console.log(data, "=================> complaint");
  return (dispatch) => {
    dispatch({
      type: SAVE_PRESENTING_COMPLAINTS,
      payload: data,
    })
  }
}

export function savePComplaintsHisory(data) {
  return (dispatch) => {
    dispatch({
      type: SAVE_P_COMPLAINT_HISTORY,
      payload: data,
    })
  }
}

export function savePrevMedHistory(data) {
  return (dispatch) => {
    dispatch({
      type: SAVE_PREV_MED_HISTORY,
      payload: data,
    })
  }
}

export function saveSysExam(data) {
  return (dispatch) => {
    dispatch({
      type: SAVE_SYS_EXAM,
      payload: data,
    })
  }
}

export function saveProblems(data) {
  return (dispatch) => {
    dispatch({
      type: SAVE_PROBLEMS,
      payload: data,
    })
  }
}

export function saveLabInvestigation(data) {
  return (dispatch) => {
    dispatch({
      type: SAVE_LAB_INVESTIGATIONS,
      payload: data,
    })
  }
}

export function saveLabRequest(data) {
  return (dispatch) => {
    dispatch({
      type: SAVE_LAB_REQUEST,
      payload: data,
    })
  }
}

export function saveProvisionalDiagnosis(data) {
  return (dispatch) => {
    dispatch({
      type: SAVE_PROVISIONAL_DIAGNOSIS,
      payload: data,
    })
  }
}

export function saveAthropometry(data) {
  return (dispatch) => {
    dispatch({
      type: SAVE_ATHROPOMETRY,
      payload: data,
    })
  }
}

export function saveManagementPlan(data) {
  return (dispatch) => {
    dispatch({
      type: SAVE_MANAGEMENT_PLAN,
      payload: data,
    })
  }
}

export const saveFollowupAppointment = (data) => ({
  type: SAVE_FOLLOWUP_APPOINTMENT,
  payload: data,
})

export const savePrescriptionRequest = (data) => ({
  type: SAVE_PRESCRIPTION_REQUEST,
  payload: data,
})

export const saveObservationRequest = (data) => ({
  type: SAVE_OBSERVATION_REQUEST,
  payload: data,
})

export const saveDressingRequest = (data) => ({
  type: SAVE_DRESSING_REQUEST,
  payload: data,
})

export const setPatientToSee = (data) => ({
  type: SET_PATIENT_TO_SEE,
  payload: data,
})

export const saveMSS = (data) => ({
  type: SAVE_MSS,
  payload: data,
})

export const saveCVS = (data) => ({
  type: SAVE_CVS,
  payload: data,
})
export const saveRESPIRATORY = (data) => ({
  type: SAVE_RESPIRATORY,
  payload: data,
})
export const saveABDOMEN = (data) => ({
  type: SAVE_ABDOMEN,
  payload: data,
})
export const saveCNS = (data) => ({
  type: SAVE_CNS,
  payload: data,
})
export const saveGPE = (data) => ({
  type: SAVE_GPE,
  payload: data,
})

export function getPatientPastVisits(id) {
  return (dispatch) => {
    dispatch({
      type: GETTING_PATIENT_PAST_VISIT,
    })
    _fetchApi(
      `${apiURL()}/${endpoint}/all/${id}`,
      ({ results }) => {
        dispatch({
          type: GET_PATIENT_PAST_VISIT,
          payload: results,
        })
        dispatch({
          type: GETTING_PATIENT_PAST_VISIT,
        })
      },
      (err) => {
        dispatch({
          type: GETTING_PATIENT_PAST_VISIT,
        })
        console.log(err)
      },
    )
  }
}

export const sxsaveDiagnosis = (cb = (f) => f, error = (f) => f) => {
  return (dispatch) => {
    dispatch({
      type: SUBMIT_DIAGNOSIS_LOADING,
    })
    const {
      doctor: {
        athropometry,
        managementPlan,
        presentingComplaints,
        prescriptionRequest,
        observation_request,
        dressingRequest,
        problems,
        provisionalDiagnosis,
        systemExam,
        vitalSigns,
        pComplain,
        history,
        prevMedHistory,
        labInvestigations,
        labRequest,
        historyOfPComplaints,
      },
      auth: {
        user: { username, facilityId },
      },
      individualDoc: { selectedPatient },
      diagnosis: { currDoctorConsulationPatient },
    } = store.getState()
    if (
      checkEmpty(athropometry) &&
      checkEmpty(managementPlan) &&
      checkEmpty(dressingRequest) &&
      checkEmpty(systemExam) &&
      checkEmpty(vitalSigns) &&
      checkEmpty(pComplain) &&
      checkEmpty(historyOfPComplaints) &&
      checkEmpty(history) &&
      checkEmpty(prevMedHistory) &&
      provisionalDiagnosis.length === 0 &&
      problems.length === 0 &&
      presentingComplaints.length === 0 &&
      prescriptionRequest.length === 0 &&
      labInvestigations.length === 0
    ) {
      return _warningNotify('Please fill the form')
    } else {
      let arr = []
      if (presentingComplaints.length) {
        presentingComplaints.forEach((complaint) =>
          arr.push(`${complaint.complaint} (${complaint.history})`),
        )
      }

      let presenting_complaints = arr.join(',')

      const consultObj = {
        presenting_complaints,
        historyOfPComplaints,
        athropometry,
        managementPlan,
        observation_request,
        dressingRequest,
        systemExam,
        vitalSigns,
        pComplain,
        history,
        prevMedHistory,
        patient_id: selectedPatient.patientHospitalId,
        patient_name: `${selectedPatient.surname} ${selectedPatient.firstname}`,
        seen_by: username,
        facilityId,
      }

      let data = {
        presenting_complaints,
        ...historyOfPComplaints,
        ...athropometry,
        ...managementPlan,
        observation_request,
        ...dressingRequest,
        ...systemExam,
        ...vitalSigns,
        ...pComplain,
        ...history,
        ...prevMedHistory,
        patient_id: selectedPatient.patientHospitalId,
        patient_name: `${selectedPatient.surname} ${selectedPatient.firstname}`,
        seen_by: username,
        facilityId,
      }

      let appointment = managementPlan.appointment

      // let data = {
      //   presenting_complaints,
      //   historyOfPComplaints,
      //   athropometry,
      //   managementPlan,
      //   observation_request,
      //   dressingRequest,
      //   systemExam,
      //   vitalSigns,
      //   pComplain,
      //   history,
      //   prevMedHistory,
      //   patient_id: selectedPatient.patientHospitalId,
      //   seen_by: username,
      //   facilityId,
      // };

      if (provisionalDiagnosis.length) {
        consultObj.provisionalDiagnosis = provisionalDiagnosis
        data.provisionalDiagnosis = provisionalDiagnosis.join(', ')
      }
      if (problems.length) {
        consultObj.problems = problems
        data.problems = problems.join(', ')
      }

      _postApi(
        `${apiURL()}/diagnosis/new`,
        data,
        () => {
          _customNotify('Diagnosis submitted')
          dispatch({ type: SUBMIT_DIAGNOSIS_LOADING })
          if (!prescriptionRequest.length && !labInvestigations.length) {
            dispatch(resetDiagnosisForm())
          }
        },
        (err) => {
          _warningNotify('An error occured, please try again later')
          console.log(err)
          dispatch({ type: SUBMIT_DIAGNOSIS_LOADING })
        },
      )

      // let labData = _convertArrOfObjToArr(labTestList);
      // _postApi(
      //   `${apiURL()}/lab/requests/new`,
      //   { data: labData },
      //   () => {
      //     _customNotify('Laboratory investigation request(s) sent!');
      //     dispatch(resetDiagnosisForm());
      //   },
      //   () =>
      //     _warningNotify(
      //       'Error submitting laboratory investigation request(s)'
      //     )
      // );

      data.prescriptionRequest = prescriptionRequest
      consultObj.prescriptionRequest = prescriptionRequest
      let investigationObj
      if (labInvestigations.length) {
        investigationObj = {
          summary: labInvestigations,
          detail: labRequest,
          patient_id: selectedPatient.patientHospitalId,
          requested_by: username,
          facilityId: facilityId,
          status: 'ordered',
          // visitId: visit._id,
        }
      }
      consultObj.labInvestigations = investigationObj
      data.labInvestigations = investigationObj

      dispatch(
        saveVisits(
          consultObj,
          (visit) => {

            if (prescriptionRequest.length) {
              const prescriptionList = []
              prescriptionRequest.forEach((prescription) =>
                prescriptionList.push({
                  drug: prescription.drug,
                  dosage: prescription.dosage,
                  period: prescription.period,
                  duration: prescription.duration,
                  frequency: prescription.frequency,
                  patient_id: selectedPatient.patientHospitalId,
                  prescribed_by: username,
                  facilityId: facilityId,
                  status: 'request',
                  request_id: visit._id,
                  route: prescription.route,
                  additionalInfo: prescription.additionalInfo,
                  id: prescription._id
                }),
              )

              let prescriptionsData = _convertArrOfObjToArr(prescriptionList)
              _postApi(
                `${apiURL()}/prescriptions/requests/new`,
                { data: prescriptionsData },
                () => {
                  _customNotify('Prescription request(s) sent!')
                  console.log('HERE WE ARE', prescriptionList)
                  if (!labInvestigations.length) {
                    dispatch(resetDiagnosisForm())
                  }
                },
                () =>
                  _warningNotify('Error submitting prescription requests(s)'),
              )
            }

            cb()
            dispatch(resetDiagnosisForm())
            dispatch({
              type: SUBMIT_DIAGNOSIS_LOADING,
            })
            // let labTestList = [];
            if (labInvestigations.length) {
              // dispatch(saveLab(obj, () => {}));
            }

            // save lab request to MySQL db
            // _saveLabRequest(
            //   labRequest,
            //   labInvestigations,
            //   selectedPatient,
            //   visit._id,
            //   () => {

            //   },
            //   () => {}
            // );
            dispatch(appointmentFunc(appointment));
            dispatch({
              type: SUBMIT_DIAGNOSIS_LOADING,
            })
            if (currDoctorConsulationPatient._id) {
              dispatch(
                updateAssignedPatient(
                  currDoctorConsulationPatient._id,
                  'completed',
                ),
              )
            }

            // update assigned patients list to reflect this
            // important!!!
          },
          error,
        ),
      )

      console.log(data)
    }
  }
}

// const saveConsultation = (visit) => {

// }

// const savePrescriptionRequests = (prescriptionRequest,selectedPatient, visit_id) => {
//   if (prescriptionRequest.length) {
//     const prescriptionList = [];
//     prescriptionRequest.forEach((prescription) =>
//       prescriptionList.push({
//         drug: prescription.drug,
//         dosage: prescription.dosage,
//         period: prescription.period,
//         duration: prescription.duration,
//         frequency: prescription.frequency,
//         patient_id: selectedPatient.patientHospitalId,
//         prescribed_by: username,
//         facilityId: facilityId,
//         status: "request",
//       })
//     );

//     let prescriptionsData = _convertArrOfObjToArr(prescriptionList);
//     _postApi(
//       `${apiURL()}/prescriptions/requests/new`,
//       { data: prescriptionsData },
//       () => {
//         _customNotify("Prescription request(s) sent!");
//         console.log("HERE WE ARE", prescriptionList);
//         if (!labInvestigations.length) {
//           dispatch(resetDiagnosisForm());
//         }
//       },
//       () => _warningNotify("Error submitting prescription requests(s)")
//     );
//   }
// }

export function resetDiagnosisForm() {
  return (dispatch) => {
    // const { username } = store.getState().auth.user;
    dispatch({
      type: RESET_DIAGNOSIS_FORM,
    })
    // dispatch(getPatientAssignedToDoctor(username));
  }
}
