import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import moment from "moment";
import { Card, Table, CardTitle } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";
import Loading from "../loading";
import {
  setPatientToSee,
  setTab,
  getPatientPastVisits,
} from "../../redux/actions/doctor";

function AssignedList({
  loading,
  pendingRequests,
  setPatient,
  setTab,
  toggle,
  getPastVisits,
  history,
}) {
  return (
    <Card body style={{ height: "90vh" }}>
      <CardTitle tag="h6" className="text-center">
        List of Patients Assigned to you
      </CardTitle>
      <Scrollbars>
        {loading && <Loading />}
        {!loading && pendingRequests && !pendingRequests.length ? (
          <p className="text-center">
            <em>No pending request.</em>
          </p>
        ) : null}
        {!loading && pendingRequests && pendingRequests.length ? (
          <Table bordered hover striped>
            <thead>
              <tr>
                <th>Date</th>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {pendingRequests.map((record) => (
                <tr
                  style={{ cursor: "pointer" }}
                  key={record.id}
                  onClick={() => {
                    setPatient(record);
                    setTab("PcomplaintsForm");
                    history.push("/me/doctors/patient/history");
                    toggle();
                    getPastVisits(record.id);
                  }}
                >
                  <td>{moment(record.date_assigned).format("DD-MM-YYYY")}</td>
                  <td>{record.id}</td>
                  <td>
                    {record.firstname} {record.surname}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null}
      </Scrollbars>
    </Card>
  );
}
// const data = [
//   {
//     chemical_pathology: {
//       testname: 'Blood Urea Nitrogen (BUN)',
//       value: '7-25 mg/dL',
//       speciment: 'Urine',
//     },
//     biology_lab: {
//       testname: 'Serology',
//       value: '7-25 mg/dL',
//       speciment: 'Urine',
//     },
//     Heamatology: {
//       testname: 'Neutrolopils',
//       value: '7-25 mg/dL',
//       speciment: 'Urine',
//     },
//   },
// ];

// {/*
//    <Table striped>
// <thead>
//   <tr>
//     <th>Lab</th>
//     <th>Test Name</th>
//     <th>Specimen</th>
//     <th />
//   </tr>
// </thead>
// <tbody>
//   {data.map((item, index) => (
//     <tr key={index}>
//       <td>{item.chemical_pathology.testname}</td>
//       <td>{item.chemical_pathology.value}</td>
//       <td>{item.chemical_pathology.speciment}</td>
//       <td>
//         <CheckBoxItem
//           label={item.chemical_pathology.testname}
//           name={item.chemical_pathology.testname}
//           value={item.chemical_pathology.testname}
//           handleCheck={handleItemCheck}
//         />
//       </td> */
// }
// {
//   /*
//       <td>{item.biology_lab.testname}</td>
//       <td>{item.biology_lab.value}</td>
//       <td>{item.biology_lab.speciment}</td>
//       <td>
//         <CheckBoxItem
//           label={item.biology_lab.testname}
//           name={item.biology_lab.testname}
//           value={item.biology_lab.testname}
//           handleCheck={handleItemCheck}
//         />
//       </td>

//       <td>{item.Heamatology.testname}</td>
//       <td>{item.Heamatology.value}</td>
//       <td>{item.Heamatology.speciment}</td>
//       <td>
//         <CheckBoxItem
//           label={item.Heamatology.testname}
//           name={item.Heamatology.testname}
//           value={item.Heamatology.testname}
//           handleCheck={handleItemCheck}
//         />
//       </td> */
// }
// {
//   /* </tr>
//   ))} */
// }

function mapDispatchToProps(dispatch) {
  return {
    setPatient: (patient) => dispatch(setPatientToSee(patient)),
    setTab: (tab) => dispatch(setTab(tab)),
    getPastVisits: (id) => dispatch(getPatientPastVisits(id)),
  };
}

function mapStateToProps(state) {
  return {
    pendingRequests: state.diagnosis.patientAssignedToDoc,
    loading: state.diagnosis.gettingPatientAssignedToDoc,
    // patient_id: state.doctor.patient.id
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(AssignedList);
