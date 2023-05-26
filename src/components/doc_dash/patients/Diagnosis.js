import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router";
import DiagnosisList from "./DiagnosisList";

function Diagnosis({ patient }) {
  //   const match = useRouteMatch();
  //   const { patientId } = match.params;

  //   useEffect(() => {
  //     getPatientDetails(patientId);
  //   }, []);

  return (
    <div>
      {/* {JSON.stringify(patient)} */}
      <Switch>
        <Route exact path="/me/doctors/patients/view/:patientId/diagnoses">
          <DiagnosisList patient={patient} />
        </Route>
        {/* <Route exact path="/me/doctors/patients/view/:patientId/diagnoses/new">
          <DoctorDashboard patient={patient} />
        </Route> */}
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ doctor }) => ({
  activeTab: doctor.activeTab,
});

// const mapDispatchToProps = (dispatch) => ({
//   getPatientDetails: (id) => dispatch(getPatient(id)),
// });

export default connect(
  mapStateToProps
  //   mapDispatchToProps
)(Diagnosis);
