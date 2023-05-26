import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./components/test.css";
import "./components/test2.css";
// import { FallbackComp } from "../comp/components/FallbackSkeleton";
import Tabs from "./tabs";

import PcomplaintsForm from "./PcomplaintsForm";
import HistoryForm from "./HistoryForm";
import SystemExaminationForm from "./SysExaminationEdit";
import CreateVitalSigns from "./CreateVitalSigns";
import NewProblems from "./NewProblems";
import NewRadiologyInvestigations from "./NewRadiologyInvestigations";
import NewProvisionalDiagnosis from "./NewProvisionalDiagnosis";
import CreateAthropometry from "./CreateAthropometry";
import EditManagementplan from "./EditManagementplan";
import EditPrescriptionRequest from "./EditPrescriptionRequest";
import EditDressingRequest from "./EditDressingRequest";
import EditObservationRequest from "./EditObservationRequest";
import PreviousMedicalHistoryForm from "./PreviousMedicalHistoryForm";
import DocNav from "./components/nav2";
import EditView from "./EditView";

const TabBody = ({ patient }) => {
  return (
    <Switch>
      <Redirect
        exact
        from="/me/doctors/visits/new/:patientId"
        to="/me/doctors/visits/new/:patientId/history"
      />
      <Redirect
        exact
        from="/me/doctors/visits/new/:patientId/history"
        to="/me/doctors/visits/new/:patientId/history/presentingcomplaints"
      />
      <Route
        path="/me/doctors/visits/new/:patientId/history/presentingcomplaints"
        exact
      >
        <PcomplaintsForm patient={patient} />
      </Route>

      <Route
        path="/me/doctors/visits/new/:patientId/history/previousmedicalhistory"
        exact
      >
        <HistoryForm patient={patient} />
      </Route>

      <Route path="/me/doctors/visits/new/:patientId/history/historyform" exact>
        <PreviousMedicalHistoryForm patient={patient} />
      </Route>

      <Redirect
        exact
        from="/me/doctors/visits/new/:patientId/examination"
        to="/me/doctors/visits/new/:patientId/examination/systemexam"
      />

      <Route
        path="/me/doctors/visits/new/:patientId/examination/systemexam"
        exact
      >
        <SystemExaminationForm patient={patient} />
      </Route>

      <Route
        path="/me/doctors/visits/new/:patientId/examination/vitalsigns"
        exact
      >
        <CreateVitalSigns patient={patient} />
      </Route>
      <Redirect
        exact
        from="/me/doctors/visits/new/:patientId/diagnosis"
        to="/me/doctors/visits/new/:patientId/diagnosis/problems"
      />
      <Route path="/me/doctors/visits/new/:patientId/diagnosis/problems" exact>
        <NewProblems patient={patient} />
      </Route>

      <Redirect
        exact
        from="/me/doctors/visits/new/:patientId/management"
        to="/me/doctors/visits/new/:patientId/management/plan"
      />

      <Route
        path="/me/doctors/visits/new/:patientId/management/radiologyinvestigations"
        exact
      >
        <NewRadiologyInvestigations patient={patient} />
      </Route>

      <Route
        path="/me/doctors/visits/new/:patientId/diagnosis/provisionaldiagnosis"
        exact
      >
        <NewProvisionalDiagnosis patient={patient} />
      </Route>

      <Route
        path="/me/doctors/visits/new/:patientId/examination/athropometry"
        exact
      >
        <CreateAthropometry patient={patient} />
      </Route>

      <Route path="/me/doctors/visits/new/:patientId/management/plan" exact>
        <EditManagementplan patient={patient} />
      </Route>

      <Route
        path="/me/doctors/visits/new/:patientId/management/prescription"
        exact
      >
        <EditPrescriptionRequest patient={patient} />
      </Route>

      <Route
        path="/me/doctors/visits/new/:patientId/management/observation"
        exact
      >
        <EditObservationRequest patient={patient} />
      </Route>

      <Route path="/me/doctors/visits/new/:patientId/management/dressing" exact>
        <EditDressingRequest patient={patient} />
      </Route>
      <Route path="/me/doctors/visits/new/:patientId/management/view" exact>
        <EditView patient={patient} />
      </Route>
    </Switch>
  );
};

export const DiagnosisDashboard = ({ patient }) => (
  <>
    <DocNav patient={patient} />
    <Tabs patient={patient} />
    <TabBody patient={patient} />
  </>
);

const DoctorDashboard = ({ patient }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   return () => {
  //     dispatch(resetDiagnosisForm());
  //   };
  // }, []);

  return (
    <div>
      <DiagnosisDashboard patient={patient} />
    </div>
  );
};

export default DoctorDashboard;
