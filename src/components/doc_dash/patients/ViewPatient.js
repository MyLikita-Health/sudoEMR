import React from "react";
import { useHistory, useLocation, Switch, Route } from "react-router-dom";
import { Card, Nav, NavItem, NavLink, CardHeader, CardBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPatient } from "../actions/patientsActions";
import { useEffect } from "react";
// import NextOfKinInformation from './NextOfKin';
import { RiEdit2Line } from "react-icons/ri";
import { SET_PATIENT_FORM_MODE } from "../types";
// import { BsChat } from 'react-icons/bs';
import { MdCall } from "react-icons/md";
import {
  FaCalendar,
  FaCommentMedical,
  FaUserCog,
  FaClipboardList,
  FaCapsules,
} from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";
// import { IoIosPeople } from 'react-icons/io';

import Notes from "./Notes";
import AppointmentList from "../appointments/AppointmentList";
import Referral from "./Referral";
import Diagnosis from "./Diagnosis";
import NewPatient from "./NewPatient";
import Contact from "../contact";
import ChatContainer from "../chat/ChatInterface";
import LabList from "../lab/LabList";

// import { RiUserShared2Line } from 'react-icons/ri';
import Scrollbars from "react-custom-scrollbars";
import BackButton from "../../comp/components/BackButton";
import Medications from "./Medications";

function Tab({
  active = false,
  text = "",
  onClick = (f) => f,
  icon = (f) => f,
  isMobile = false,
}) {
  return (
    <NavItem className="m-0">
      <NavLink
        className={`${
          active ? "active btn text-dark" : "text-primary btn"
        } d-flex flex-direction-row align-items-center`}
        onClick={onClick}
      >
        {icon}
        <span className="ml-2">{!isMobile && text}</span>
      </NavLink>
    </NavItem>
  );
}

function ViewPatient({ match }) {
  const { patientId } = match.params;
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const selectedPatient = useSelector(
    (state) => state.individualDoc.selectedPatient
  );

  const mode = useSelector((state) => state.individualDoc.formMode);
  const isMobile = useSelector((state) => state.app.isMobile);
  // const currDoctorConsulationPatient = useSelector(
  //   (state) => state.diagnosis.currDoctorConsulationPatient
  // );

  const toggleFormMode = () =>
    dispatch({ type: SET_PATIENT_FORM_MODE, payload: "EDITABLE" });

  useEffect(() => {
    dispatch(getPatient(patientId));
  }, [patientId, dispatch]);

  const handleEditClick = () => {
    toggleFormMode();
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-1 mt-1">
        <BackButton />
        {/* {JSON.stringify(currDoctorConsulationPatient)} */}
        <p className="h6 align-self-center text-center">{`${selectedPatient &&
          selectedPatient.name} (${
          // selectedPatient.patientId
          //   ? selectedPatient.patientId
          //   :
          selectedPatient && selectedPatient.id
        })`}</p>
        {mode === "VIEW" ? (
          <button
            className="btn btn-outline-dark"
            disabled
            onClick={handleEditClick}
          >
            <RiEdit2Line size={20} />
            Edit Record
          </button>
        ) : null}
      </div>
      <Card>
        <CardHeader className="p-0">
          <Nav tabs>
            <Tab
              active={
                location.pathname === `/me/doctor/patients/view/${patientId}`
              }
              text="General Information"
              icon={<FaUserCog size={22} className="mr-md-1" />}
              onClick={() =>
                history.push(`/me/doctor/patients/view/${patientId}`)
              }
              isMobile={isMobile}
            />
            {/* <Tab
              active={
                location.pathname ===
                `/me/doctor/patients/view/${patientId}/nextofkin`
              }
              text="Next of Kin"
              icon={<IoIosPeople size={22} className="mr-md-1" />}
              onClick={() =>
                history.push(`/me/doctor/patients/view/${patientId}/nextofkin`)
              }
              isMobile={isMobile}
            /> */}
            <Tab
              active={
                location.pathname ===
                `/me/doctor/patients/view/${patientId}/diagnoses`
              }
              text="Consultation Records"
              icon={<FaClipboardList size={22} className="mr-md-1" />}
              onClick={() =>
                history.push(`/me/doctor/patients/view/${patientId}/diagnoses`)
              }
              isMobile={isMobile}
            />
            <Tab
              active={
                location.pathname ===
                `/me/doctor/patients/view/${patientId}/notes`
              }
              text="Notes"
              icon={<FaCommentMedical size={22} className="mr-md-1" />}
              onClick={() =>
                history.push(`/me/doctor/patients/view/${patientId}/notes`)
              }
              isMobile={isMobile}
            />
            <Tab
              active={
                location.pathname ===
                `/me/doctor/patients/view/${patientId}/appointments`
              }
              text="Appointments"
              icon={<FaCalendar size={22} className="mr-md-1" />}
              onClick={() =>
                history.push(
                  `/me/doctor/patients/view/${patientId}/appointments`
                )
              }
              isMobile={isMobile}
            />

            {/* <Tab
              active={
                location.pathname ===
                `/me/doctor/patients/view/${patientId}/chat`
              }
              text="Chat"
              icon={<BsChat size={22} className="mr-md-1" />}
              onClick={() =>
                history.push(`/me/doctor/patients/view/${patientId}/chat`)
              }
              isMobile={isMobile}
            /> */}
            <Tab
              active={
                location.pathname ===
                `/me/doctor/patients/view/${patientId}/medications`
              }
              text="Medications"
              icon={<FaCapsules size={22} className="mr-md-1" />}
              onClick={() =>
                history.push(
                  `/me/doctor/patients/view/${patientId}/medications`
                )
              }
              isMobile={isMobile}
            />
            <Tab
              active={
                location.pathname ===
                `/me/doctor/patients/view/${patientId}/lab`
              }
              text="Lab Results"
              icon={<GiTestTubes size={22} className="mr-md-1" />}
              onClick={() =>
                history.push(`/me/doctor/patients/view/${patientId}/lab`)
              }
              isMobile={isMobile}
            />
            <Tab
              active={
                location.pathname ===
                `/me/doctor/patients/view/${patientId}/contact`
              }
              text={"Contact"}
              icon={<MdCall size={22} className="mr-md-1" />}
              onClick={() =>
                history.push(`/me/doctor/patients/view/${patientId}/contact`)
              }
              isMobile={isMobile}
            />
            {/* <Tab
              active={
                location.pathname ===
                `/me/doctor/patients/view/${patientId}/referral`
              }
              text="Consult/Referral"
              icon={<RiUserShared2Line size={22} className="mr-md-1" />}
              onClick={() =>
                history.push(`/me/doctor/patients/view/${patientId}/referral`)
              }
              isMobile={isMobile}
            /> */}
          </Nav>
        </CardHeader>
        <CardBody>
          <Scrollbars style={{ height: "70vh" }} autoHide>
            <Switch>
              <Route exact path="/me/doctor/patients/view/:patientId">
                <NewPatient patient={selectedPatient} />
              </Route>
              {/* <Route exact path="/me/doctor/patients/view/:patientId/nextofkin">
                <NextOfKinInformation patient={selectedPatient} />
              </Route> */}
              <Route path="/me/doctor/patients/view/:patientId/diagnoses">
                <Diagnosis patient={selectedPatient} />
              </Route>
              <Route exact path="/me/doctor/patients/view/:patientId/notes">
                <Notes patient={selectedPatient} />
              </Route>
              <Route
                exact
                path="/me/doctor/patients/view/:patientId/appointments"
              >
                <AppointmentList patient={selectedPatient} />
              </Route>
              <Route exact path="/me/doctor/patients/view/:patientId/contact">
                <Contact patient={selectedPatient} />
              </Route>
              <Route exact path="/me/doctor/patients/view/:patientId/chat">
                <ChatContainer patient={selectedPatient} />
              </Route>
              <Route exact path="/me/doctor/patients/view/:patientId/lab">
                <LabList patient={selectedPatient} />
              </Route>
              <Route
                exact
                path="/me/doctor/patients/view/:patientId/medications"
              >
                <Medications />
              </Route>
              <Route exact path="/me/doctor/patients/view/:patientId/referral">
                <Referral patient={selectedPatient} />
              </Route>
            </Switch>
          </Scrollbars>
        </CardBody>
      </Card>
    </div>
  );
}

// const mapStateToProps = ({
//   app,
//   individualDoc: { selectedPatient, formMode },
// }) => ({
//   selectedPatient,
//   mode: formMode,
//   isMobile: app.isMobile,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getPatientDetails: (id) => dispatch(getPatient(id)),
//   toggleFormMode: () =>
//     dispatch({ type: SET_PATIENT_FORM_MODE, payload: "EDITABLE" }),
// });

export default ViewPatient;
// compose(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   ),
//   withRouter
// )();
