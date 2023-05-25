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
        from="/me/doctors"
        to="/me/doctors/visits/new-summary/view"
      />
      <Route
        exact
        path="/me/doctors/patients"
        component={(props) => <Patients {...props} />}
      />
      <Route
        exact
        path="/me/doctors/patients/new"
        component={(props) => <NewPatient {...props} />}
      />
      <Route
        path="/me/doctors/patients/view/:patientId"
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
        path="/me/doctors/appointments/new/:patientId"
        component={(props) => <NewAppointment {...props} />}
      />
      <Route
        exact
        path="/me/doctors/appointments/new/:patientId/:type"
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
        path="/me/doctors/visits"
        component={(props) => <Visits {...props} />}
      />
      <Route
        path="/me/doctors/visits/new-summary/:patientId"
        component={(props) => <ConsultationSheet />}
      />
      <Route
        path="/me/doctors/operation-notes/new/:patientId"
        component={(props) => <OperationNoteSheet />}
      />
      <Route
        path="/me/doctors/past-records/:patientId"
        component={(props) => <PastRecords />}
      />
      <Route
        path="/me/doctors/visit-preview/:patientId"
        component={(props) => <VisitPreview />}
      />
      <Route
        path="/me/doctors/visits/new/:patientId"
        component={(props) => <NewVisit />}
      />
      <Route
        path="/me/doctors/visits/view/:visitId"
        component={(props) => <ViewVisits {...props} />}
      />
      <Route
        // exact
        path="/me/doctors/labs"
        component={(props) => <Lab {...props} />}
      />

      <Route
        exact
        path="/me/doctors/patients/refer"
        component={(props) => <ReferPatient {...props} />}
      />
      <Route
        exact
        path="/me/doctors/patients/transfer"
        component={(props) => <TransferPatient {...props} />}
      />

      {/* <Route
        // exact
        path="/me/doctors/labs/view/:labId"
        component={(props) => (
          
            <ViewLab {...props} />
       
        )}
      /> */}

      <Route
        exact
        path="/me/doctors/notifications"
        component={(props) => <Notifications {...props} />}
      />

      <Route
        exact
        path="/me/doctors/videochat"
        component={(props) => <VideoChat {...props} />}
      />
      <Route
        exact
        path="/me/doctors/consultation"
        component={(props) => <StartConsultation {...props} />}
      />
      <Route
        exact
        path="/me/doctors/offlineconsultation"
        component={(props) => <OfflineConsultation {...props} />}
      />
      <Route
        exact
        path="/me/doctors/onlineconsultation"
        component={(props) => <OnlineConsultation {...props} />}
      />
      <Route
        exact
        path="/me/doctors/consult_referral"
        component={(props) => <ConsultReferral {...props} />}
      />
      <Route exact path="/me/doctors/in-patients" component={InPatientTable} />
      <Route
        exact
        path="/me/doctors/surgical-note/new"
        component={SurgicalNote}
      />
      <Route
        exact
        path="/me/doctors/medical-report/new"
        component={MedicalReport}
      />
    </Switch>
  );
}

export default DoctorMain;
