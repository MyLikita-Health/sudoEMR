/**
 * This function helps schedule drugs for a patient assigned to a bed
 *
 * @param patientId
 *
 * - Get all pending prescribed drugs for a patient
 * - For each of the drugs, using the period and frequency of the
 * prescription, we would generate a schedule from the start to end
 * prescription.
 */

import moment from 'moment'
import { apiURL } from '../../redux/actions'
import { _fetchApiAsync, _postApi } from '../../redux/actions/api'
import store from '../../redux/store'
import { _convertArrOfObjToArr, _warningNotify } from '../utils/helpers'

function generateSchedule(curr, pid, allocation_id, user, facId) {
  // try {
  // console.log("calling generate schedule");
  let timeSchedule = []
  console.log(curr)
  // let startDate = moment().format("YYYY-MM-DD");
  let startDate = curr.startTime
  if (curr.frequency === 'STAT') {
    timeSchedule.push({
      allocation_id: allocation_id,
      patient_id: pid,
      drug_name: curr.drug,
      // time_stamp: "STAT",
      time_stamp: moment().format('YYYY-MM-DD HH:mm:ss'),
      status: 'scheduled',
      administered_by: user,
      facilityId: facId,
      prescription_id: curr.prescription_id,
      frequency: curr.frequency
    })

    return timeSchedule
  } else {
    let scheduleInterval = 24 / curr.times_per_day
    let end = moment(startDate)
      .add(curr.duration, curr.period)
      .format('YYYY-MM-DD')
    // let currTime = startDate + " " + curr.time_start;
    let currTime = startDate

    while (moment.utc(currTime).isBefore(end)) {
      // console.log(moment(currTime).isBefore(end), currTime, end);
      //  timeSchedule.push(moment(currTime).format("YYYY-MM-DD hh:mm a"));
      timeSchedule.push({
        allocation_id: allocation_id,
        patient_id: pid,
        drug_name: curr.drug,
        time_stamp: moment.utc(currTime).format('YYYY-MM-DD HH:mm:ss'),
        status: 'scheduled',
        administered_by: user,
        facilityId: facId,
        prescription_id: curr.prescription_id,
        frequency: curr.frequency
      })
      currTime = moment(currTime)
        .add(scheduleInterval, 'hours')
        .format('YYYY-MM-DD HH:mm:ss')
    }

    return timeSchedule
    // } catch (error) {
    // return error;
    // }
  }
}

export async function getPendingPrescriptionForPatient(pid) {
  try {
    const facilityId = store.getState().auth.user.facilityId
    let data = await _fetchApiAsync(
      `${apiURL()}/prescriptions/patient-prescribed?query_type=pending&patient_id=${pid}&facilityId=${facilityId}`,
    )

    return data.results
  } catch (error) {
    console.log(error)
  }
}

export async function getPrescriptionForPatient(pid, type) {
  try {
    const facilityId = store.getState().auth.user.facilityId
    let data = await _fetchApiAsync(
      `${apiURL()}/prescriptions/patient-prescribed?query_type=${type}&patient_id=${pid}&facilityId=${facilityId}`,
    )

    return data.results
  } catch (error) {
    console.log(error)
  }
}

export function createDrugSchedule(
  pid = '',
  allocation_id = '',
  callback = (f) => f,
  error = (f) => f,
) {
  // console.log("calling get_schedule on", pid);
  const username = store.getState().auth.user.username
  const facilityId = store.getState().auth.user.facilityId
  getPendingPrescriptionForPatient(pid)
    .then((list) => {
      console.log(
        list,
        '-----------------list of pending prescription for patient',
      )

      if (list.length) {
        let scheduleArr = []
        //  let curr = list[0];
        for (let i = 0; i < list.length; i++) {
          let curr = list[i]

          let sch = generateSchedule(
            curr,
            pid,
            allocation_id,
            username,
            facilityId,
          )

          console.log(sch)
          scheduleArr = [...scheduleArr, ...sch]
        }
        // list.forEach((curr) => {
        //   // console.log(curr);

        // });

        // console.log(scheduleArr);
        // let data = _convertArrOfObjToArr(scheduleArr)
        _postApi(
          `${apiURL()}/drug-schedule/new`,
          {
            data:scheduleArr,
          },
          () => {
            callback()
          },
          (err) => {
            error(err)
          },
        )
      }
    })
    .catch((err) => {
      console.log(err)
      _warningNotify('Sorry, an error occured, please try again later!')
    })
}
