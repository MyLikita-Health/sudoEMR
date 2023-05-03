
// const patient_doc = {
//     _id: '_design/patient_index',
//     views: {
//         by_id: {
//             map: function (doc) {emit(doc.name);}.toString()
//         }
//     }
// }

// pouch.put(patient_doc).then(() => {/**success */}).catch(err => console.log(err))