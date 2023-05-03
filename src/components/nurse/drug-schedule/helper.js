export const formatSchedule = (arr) => {
  let final = {}

  arr.forEach((i) => {
    let exisitingIndex = Object.keys(final).indexOf(i['time_stamp'])
    if (exisitingIndex !== -1) {
      let curr = final[i['time_stamp']]
      // console.log(curr)
      let patientIndexInList = curr.findIndex(
        (a) => a.patient_id === i.patient_id,
      )
      if (patientIndexInList !== -1) {
        curr[patientIndexInList].drugList = curr[
          patientIndexInList
        ].drugList.concat(i)
      } else {
        final[i['time_stamp']] = [
          ...final[i['time_stamp']],
          { ...i, drugList: [i] },
        ]
      }
    } else {
      final[i['time_stamp']] = [{ ...i, drugList: [i] }]
    }
  })

  return final
}

export const formatScheduleByTime = (arr, key='time_stamp') => {
  let final = {}

  arr.forEach((i) => {
    let exisitingIndex = Object.keys(final).indexOf(i[key])
    if (exisitingIndex !== -1) {


      final[i[key]] = [
        ...final[i[key]],
        { ...i, drugList: [i] },
      ]
    } else {
      final[i[key]] = [{ ...i, drugList: [i] }]
    }
  })

  return final
}
