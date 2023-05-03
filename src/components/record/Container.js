import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
// import FullscreenLoading from "../comp/components/FullscreenLoading";
// import ModalPage from './ModalPage';
// import EditModal from './EditModal';
// import RenderPatientList from './RenderPatientList';
// import EditPatient from "./EditPatient";
// import PendingAdmission from "./bed-allocation/PendingAdmission";
// import BedAllocation from "./bed-allocation/BedAllocation";
import CreateNewPatient from "./CreateNewPatient";
import InPatientTable from "../nurse/InPatientTable";
// import DischargedByDoctorList from "./bed-allocation/PendingDischarge";
import DoctorsListModal from "./DoctorsListModal";
import NewPatientList from "./NewPatientList";
import InPatientsList from "./patients/InPatientsList";

export const RECORD_HOME_ROUTE = "/me/records";

function Container({
  selectedPatient,
  unassignedPatientlistLoading,
  patientrecords,
  unassignedError,
  openDoctorsModal,
  openEditModal,
  filterText,
  patientId,
  doctorsModalIsOpen,
  closeDoctorsModal,
  updateUnassignedTable,
  editModalIsOpen,
  closeModal,
  details,
  updateEdit,
  receiveState,
}) {
  return (
    <Switch>
      <Route exact path="/me/records/patients/list">
        <NewPatientList
          loading={unassignedPatientlistLoading}
          patientlist={patientrecords}
          error={unassignedError}
          openDoctorsModal={openDoctorsModal}
          openModal={openEditModal}
          filterText={filterText}
          renderEditButton={true}
        />
      </Route>
      <Route
        exact
        path="/me/records/patients/in-patients-list"
        component={InPatientsList}
      />
      <Route exact path="/me/records/patients/new">
        <CreateNewPatient patient={selectedPatient} />
      </Route>

      {/* <Route path={`${RECORD_HOME_ROUTE}/bed`} component={BedAllocation} /> */}
      {/* <Route
        path={`${RECORD_HOME_ROUTE}/pending-admission`}
        component={PendingAdmission}
      /> */}
      {/* <Route
        path={`${RECORD_HOME_ROUTE}/in-patients-list`}
        component={InPatientTable}
      /> */}
      {/* <Route
        path={`${RECORD_HOME_ROUTE}/patients-discharged-by-doctor`}
        component={DischargedByDoctorList}
      /> */}
      <Route path={`${RECORD_HOME_ROUTE}/patients/assign-to-specialist/:id`}>
        <DoctorsListModal
          patientId={patientId}
          doctorsModalIsOpen={doctorsModalIsOpen}
          closeDoctorsModal={closeDoctorsModal}
          updateUnassignedTable={updateUnassignedTable}
        />
      </Route>
      <Route exact path="/me/records/patients/edit/:id">
        <CreateNewPatient />
        {/* <EditPatient
            editModalIsOpen={editModalIsOpen}
            closeEditModal={closeModal}
            details={details}
            updateEdit={updateEdit}
          /> */}
      </Route>
    </Switch>
  );
}

export default withRouter(Container);
