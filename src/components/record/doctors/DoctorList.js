import React from 'react'
import { useHistory, useRouteMatch } from 'react-router'
import { Table } from 'reactstrap'
// import { apiURL } from '../../../redux/actions'
// import { _fetchApi } from '../../../redux/actions/api'
import { _customNotify } from '../../utils/helpers'
// import { getPatientInfo } from '../actions/patientsActions'

/**
 * This renders the row in the table
 */
function TableRow(props) {
  const doctor = props.doctor
  const history = useHistory()
  const match = useRouteMatch()
  const { id } = match.params

  const _assignPatient = (e) => {
    e.preventDefault()
    // getPatientByIdAsync(props.patientId)
    //   .then((patient) => {
    // console.log(id)
    // _fetchApi(
    //   `${apiURL()}/lab/patient/info/${id}`,
    //   (data) => {
    //     if (data) {
    //       // console.log(data)
    //       // setPatientInfo()
    //       let patient = data.results[0]

    const cb = () => {
      _customNotify('Patient assigned successfully')
      history.push('/me/records')
    }
    let assignmentObj = Object.assign(
      {},
      {
        id,
        assigned_to: doctor.username,
        query_type: 'assign',
        // patientId: id,
        // patientName: `${patient.name}`,
        // doctorId: doctor.id.toString(),
        // doctorName: `${doctor.firstname} ${doctor.lastname}`,
        // status: 'new',
        // type: 'specialist',
      },
    )

    props.assignPatient(assignmentObj, cb)
    // }
    //   },
    //   (err) => {
    //     console.log(err)
    //     _warningNotify('An error occured, please try again later')
    //   },
    // )

    // getPatientInfo(id, (patient) => {
    //   const cb = () => {
    //     _customNotify("Patient assigned successfully");
    //     history.push("/me/records");
    //   };
    //   let assignmentObj = Object.assign(
    //     {},
    //     {
    //       patientId: id,
    //       patientName: `${patient.surname} ${patient.firstname}`,
    //       doctorId: doctor.id.toString(),
    //       doctorName: `${doctor.firstname} ${doctor.lastname}`,
    //       status: "new",
    //       type: "specialist",
    //     }
    //   );

    //   props.assignPatient(assignmentObj, cb);
    // }, err => {
    //   console.log(err)
    //   _warningNotify('An error occured, please try again later')
    // });
    // })
    // .catch((err) => console.log(err));
  }

  return (
    <tr>
      <td>{`${doctor.firstname} ${doctor.lastname}`}</td>
      <td>{doctor.speciality}</td>
      <td className="text-center">
        <button
          className="btn btn-primary btn-sm"
          onClick={_assignPatient}
          style={{ marginBottom: '1rem' }}
        >
          Assign now
        </button>
      </td>
    </tr>
  )
}

/**
 * This component renders the table
 */
const DoctorsTable = (props) => {
  const filterText = props.filterText

  const rows = []

  if (!props.doctorsList.length)
    return <p className="text-center">No Doctor found</p>

  props.doctorsList.forEach((doctor) => {
    if (
      doctor.username.toLowerCase().indexOf(filterText.toLowerCase()) === -1
    ) {
      return
    }

    rows.push(
      <TableRow
        doctor={doctor}
        key={doctor.username}
        assignDoctor={props.assignDoctor}
        assignPatient={props.assignPatient}
        patientId={props.patientId}
      />,
    )
  })

  return (
    <form>
      <Table bordered hover striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Speciality</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </form>
  )
}

export default DoctorsTable
