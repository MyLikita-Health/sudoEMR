import React from "react";
import { Switch, Route, Redirect } from "react-router";
import {
  UNAPPROVED_APPOINTMENTS,
  VIEW_APPOINTMENT,
  NEW_APPOITNMENT,
  APPOINTMENTS,
} from "./routes";
// import { FallbackComp } from '../comp/components/FallbackSkeleton'

import InPatientTable from "../nurse/InPatientTable";
import ConsultationSheet from "./visits/ConsultationSheet";

import Patients from "./patients";
import NewPatient from "./patients/NewPatient";
import Appointments from "./appointments";
import NewAppointment from "./appointments/NewAppointment";
import ViewPatient from "./patients/ViewPatient";
import ViewAppointment from "./appointments/ViewAppointment";
import Visits from "./visits";
import NewVisit from "./visits/NewVisit";
import ViewVisits from "./visits/ViewVisit";
import VideoChat from "./video-chat";
import Lab from "./lab";
// import ViewLab from "./lab/ViewLab")
// import NewLab from "./lab/NewLab")
import Notifications from "../notifications";
import StartConsultation from "./StartConsultation/StartConsultation";

import OfflineConsultation from "./StartConsultation/OfflineConsultation";

import OnlineConsultation from "./StartConsultation/OnlineConsultation";

import ReferPatient from "./patients/ReferPatient";
import TransferPatient from "./patients/TransferPatient";
import ConsultReferral from "./consult/ConsultReferral";
import UnapprovedAppointments from "./appointments/UnapprovedAppointments";
import PastRecords from "./visits/past-records/PastRecords";
import VisitPreview from "./visits/components/VisitPreview";
import OperationNoteSheet from "./visits/OperationNoteSheet";
import SurgicalNote from "./visits/components/SurgicalNote";
import MedicalReport from "./visits/components/MedicalReport";

function DoctorMain() {
  return (
    <Switch>
      <Redirect
        exact
        from="/me/doctor"
        to="/me/doctor/visits/new-summary/view"
      />
      <Route
        exact
        path="/me/doctor/patients"
        component={(props) => <Patients {...props} />}
      />
      <Route
        exact
        path="/me/doctor/patients/new"
        component={(props) => <NewPatient {...props} />}
      />
      <Route
        path="/me/doctor/patients/view/:patientId"
        component={(props) => <ViewPatient {...props} />}
      />
      <Route
        exact
        path={APPOINTMENTS}
        component={(props) => <Appointments {...props} />}
      />
      <Route
        exact
        path={NEW_APPOITNMENT}
        component={(props) => <NewAppointment {...props} />}
      />
      <Route
        exact
        path="/me/doctor/appointments/new/:patientId"
        component={(props) => <NewAppointment {...props} />}
      />
      <Route
        exact
        path="/me/doctor/appointments/new/:patientId/:type"
        component={(props) => <NewAppointment {...props} />}
      />
      <Route
        exact
        path={VIEW_APPOINTMENT}
        component={(props) => <ViewAppointment {...props} />}
      />
      <Route
        exact
        path={UNAPPROVED_APPOINTMENTS}
        component={(props) => <UnapprovedAppointments {...props} />}
      />
      <Route
        exact
        path="/me/doctor/visits"
        component={(props) => <Visits {...props} />}
      />
      <Route
        path="/me/doctor/visits/new-summary/:patientId"
        component={(props) => <ConsultationSheet />}
      />
      <Route
        path="/me/doctor/operation-notes/new/:patientId"
        component={(props) => <OperationNoteSheet />}
      />
      <Route
        path="/me/doctor/past-records/:patientId"
        component={(props) => <PastRecords />}
      />
      <Route
        path="/me/doctor/visit-preview/:patientId"
        component={(props) => <VisitPreview />}
      />
      <Route
        path="/me/doctor/visits/new/:patientId"
        component={(props) => <NewVisit />}
      />
      <Route
        path="/me/doctor/visits/view/:visitId"
        component={(props) => <ViewVisits {...props} />}
      />
      <Route
        // exact
        path="/me/doctor/labs"
        component={(props) => <Lab {...props} />}
      />

      <Route
        exact
        path="/me/doctor/patients/refer"
        component={(props) => <ReferPatient {...props} />}
      />
      <Route
        exact
        path="/me/doctor/patients/transfer"
        component={(props) => <TransferPatient {...props} />}
      />

      {/* <Route
        // exact
        path="/me/doctor/labs/view/:labId"
        component={(props) => (
          
            <ViewLab {...props} />
       
        )}
      /> */}

      <Route
        exact
        path="/me/doctor/notifications"
        component={(props) => <Notifications {...props} />}
      />

      <Route
        exact
        path="/me/doctor/videochat"
        component={(props) => <VideoChat {...props} />}
      />
      <Route
        exact
        path="/me/doctor/consultation"
        component={(props) => <StartConsultation {...props} />}
      />
      <Route
        exact
        path="/me/doctor/offlineconsultation"
        component={(props) => <OfflineConsultation {...props} />}
      />
      <Route
        exact
        path="/me/doctor/onlineconsultation"
        component={(props) => <OnlineConsultation {...props} />}
      />
      <Route
        exact
        path="/me/doctor/consult_referral"
        component={(props) => <ConsultReferral {...props} />}
      />
      <Route exact path="/me/doctor/in-patients" component={InPatientTable} />
      <Route
        exact
        path="/me/doctor/surgical-note/new"
        component={SurgicalNote}
      />
      <Route
        exact
        path="/me/doctor/medical-report/new"
        component={MedicalReport}
      />
    </Switch>
  );
}

export default DoctorMain;
