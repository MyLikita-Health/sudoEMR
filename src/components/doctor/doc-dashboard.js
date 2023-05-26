import React, { useState, useEffect } from "react";
import { compose } from "redux";
import { Jumbotron, Container, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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
import { FaNotesMedical } from "react-icons/fa";
import { setTab } from "../../redux/actions/doctor";
import DocNav from "./components/nav-bar";
import "./components/test.css";
import "./components/test2.css";
// import ItemsBar from './components/items-bar';
import EditView from "./EditView";

export function checkEmpty(obj) {
  let val = Object.values(obj);
  if (!val.join("").includes("0") && val.join("").length > 0) return false;
  else return true;
}

const HistoryTabs = connect(({ doctor }) => ({
  pComplain: doctor.presentingComplaints,
  history: doctor.historyOfPComplaints,
  medicalHistory: doctor.prevMedHistory,
}))(
  ({ component, setComponentToRender, pComplain, medicalHistory, history }) => {
    return (
      <div className="mother">
        <div className="motherwrapper">
          <div className="arrow-steps clfix">
            <div
              onClick={() => setComponentToRender("PcomplaintsForm")}
              className={`step ${pComplain.length ? "done" : ""} ${
                component === "PcomplaintsForm" ? "current" : ""
              }`}
            >
              <span> Presenting Complaints</span>
            </div>
            <div
              onClick={() => setComponentToRender("HistoryForm")}
              className={`step ${checkEmpty(history) ? "" : "done"} ${
                component === "HistoryForm" ? "current" : ""
              }`}
            >
              <span>History of Presenting Complaints</span>
            </div>
            <div
              onClick={() => setComponentToRender("PreviousMedicalHistoryForm")}
              className={`step ${checkEmpty(medicalHistory) ? "" : "done"} ${
                component === "PreviousMedicalHistoryForm" ? "current" : ""
              }`}
            >
              <span> Medical History</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

const ExaminationTabs = connect(({ doctor }) => ({
  systemExam: doctor.systemExam,
  vitalSigns: doctor.vitalSigns,
}))(({ component, setComponentToRender, systemExam, vitalSigns }) => (
  <div className="mother">
    <div className="motherwrapper">
      <div className="arrow-steps clfix">
        <div
          onClick={() => setComponentToRender("CreateVitalSigns")}
          className={`step ${checkEmpty(vitalSigns) ? "" : "done"} ${
            component === "CreateVitalSigns" ? "current" : ""
          }`}
        >
          {" "}
          <span> Vital Signs </span>{" "}
        </div>
        <div
          onClick={() => setComponentToRender("SystemExaminationForm")}
          className={`step ${checkEmpty(systemExam) ? "" : "done"} ${
            component === "SystemExaminationForm" ? "current" : ""
          }`}
        >
          {" "}
          <span> System Examination </span>{" "}
        </div>
        {/* <div className={`step ${component === 'HistoryForm' ? 'current' : ''}`}> <span>History of Presenting Complaints</span> </div> */}
        {/* <div className={`step ${component === 'PreviousMedicalHistoryForm' ? 'current' : ''}`}> <span> Medical History</span> </div> */}
      </div>
    </div>
  </div>
));

const DiagnosisTabs = connect(({ doctor }) => ({
  problems: doctor.problems,
  provisionalDiagnosis: doctor.provisionalDiagnosis,
}))(({ component, setComponentToRender, problems, provisionalDiagnosis }) => (
  <div className="mother">
    <div className="motherwrapper">
      <div className="arrow-steps clfix">
        <div
          onClick={() => setComponentToRender("NewProblems")}
          className={`step ${checkEmpty(problems) ? "" : "done"} ${
            component === "NewProblems" ? "current" : ""
          }`}
        >
          {" "}
          <span> Problems</span>{" "}
        </div>
        <div
          onClick={() => setComponentToRender("NewProvisionalDiagnosis")}
          className={`step ${checkEmpty(provisionalDiagnosis) ? "" : "done"} ${
            component === "NewProvisionalDiagnosis" ? "current" : ""
          }`}
        >
          {" "}
          <span>Provisional Diagnosis</span>{" "}
        </div>
        {/* <div className={`step ${component === 'PreviousMedicalHistoryForm' ? 'current' : ''}`}> <span> Medical History</span> </div> */}
      </div>
    </div>
  </div>
));

const ManagementTabs = connect(({ doctor }) => ({
  labInvestigations: doctor.labInvestigations,
  athropometry: doctor.athropometry,
  managementPlan: doctor.managementPlan,
  prescriptionRequest: doctor.prescriptionRequest,
  observationRequest: doctor.observationRequest,
  dressingRequest: doctor.dressingRequest,
}))(
  ({
    component,
    setComponentToRender,
    athropometry,
    labInvestigations,
    managementPlan,
    prescriptionRequest,
    observationRequest,
    dressingRequest,
  }) => (
    <div className="mother">
      <div className="motherwrapper">
        <div className="arrow-steps clfix">
          <div
            onClick={() => setComponentToRender("CreateAthropometry")}
            className={`step ${checkEmpty(athropometry) ? "" : "done"} ${
              component === "CreateAthropometry" ? "current" : ""
            }`}
          >
            {" "}
            <span> Athropometry</span>{" "}
          </div>
          <div
            onClick={() => setComponentToRender("EditManagementplan")}
            className={`step ${checkEmpty(managementPlan) ? "" : "done"} ${
              component === "EditManagementplan" ? "current" : ""
            }`}
          >
            {" "}
            <span>Management</span>{" "}
          </div>
          <div
            onClick={() => setComponentToRender("EditDressingRequest")}
            className={`step ${checkEmpty(dressingRequest) ? "" : "done"} ${
              component === "EditDressingRequest" ? "current" : ""
            }`}
          >
            {" "}
            <span> Dressing</span>{" "}
          </div>
          <div
            onClick={() => setComponentToRender("EditObservationRequest")}
            className={`step ${observationRequest.length ? "done" : ""} ${
              component === "EditObservationRequest" ? "current" : ""
            }`}
          >
            {" "}
            <span> Observations</span>{" "}
          </div>
          <div
            onClick={() => setComponentToRender("EditPrescriptionRequest")}
            className={`step ${prescriptionRequest.length ? "done" : ""} ${
              component === "EditPrescriptionRequest" ? "current" : ""
            }`}
          >
            {" "}
            <span> Prescriptions</span>{" "}
          </div>
          <div
            onClick={() => setComponentToRender("NewRadiologyInvestigations")}
            className={`step ${labInvestigations.length ? "done" : ""} ${
              component === "NewRadiologyInvestigations" ? "current" : ""
            }`}
          >
            {" "}
            <span> Investigations</span>{" "}
          </div>
        </div>
      </div>
    </div>
  )
);

const Tabs = ({ path, setComponentToRender, component }) => {
  switch (path) {
    case "/me/doctors/patient/history":
      return (
        <HistoryTabs
          setComponentToRender={setComponentToRender}
          component={component}
        />
      );

    case "/me/doctors/patient/examination":
      return (
        <ExaminationTabs
          setComponentToRender={setComponentToRender}
          component={component}
        />
      );

    case "/me/doctors/patient/diagnosis":
      return (
        <DiagnosisTabs
          setComponentToRender={setComponentToRender}
          component={component}
        />
      );

    case "/me/doctors/patient/management":
      return (
        <ManagementTabs
          setComponentToRender={setComponentToRender}
          component={component}
        />
      );

    default:
      return (
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3 text-center">Welcome</h1>
            {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
          </Container>
        </Jumbotron>
      );
  }
};

// const TestTab = () => (
//     <div className="mother">
//         <div className="motherwrapper">
//             <div className="arrow-steps clfix">
//                 <div className="step current"> <span> Athropometry</span> </div>
//                 <div className="step"> <span>Dressing</span> </div>
//                 <div className="step"> <span> Observations</span> </div>
//                 <div className="step"> <span>Prescriptions</span> </div>
//             </div>

//         </div>
//     </div>
// )

const TabBody = ({ component, setComponentToRender }) => {
  switch (component) {
    case "PcomplaintsForm":
      return <PcomplaintsForm setComponent={setComponentToRender} />;
    case "HistoryForm":
      return <HistoryForm setComponent={setComponentToRender} />;
    case "PreviousMedicalHistoryForm":
      return <PreviousMedicalHistoryForm setComponent={setComponentToRender} />;
    case "SystemExaminationForm":
      return <SystemExaminationForm setComponent={setComponentToRender} />;
    case "CreateVitalSigns":
      return <CreateVitalSigns setComponent={setComponentToRender} />;
    case "NewProblems":
      return <NewProblems setComponent={setComponentToRender} />;
    case "NewRadiologyInvestigations":
      return <NewRadiologyInvestigations setComponent={setComponentToRender} />;
    case "NewProvisionalDiagnosis":
      return <NewProvisionalDiagnosis setComponent={setComponentToRender} />;
    case "CreateAthropometry":
      return <CreateAthropometry setComponent={setComponentToRender} />;
    case "EditManagementplan":
      return <EditManagementplan setComponent={setComponentToRender} />;
    case "EditPrescriptionRequest":
      return <EditPrescriptionRequest setComponent={setComponentToRender} />;
    case "EditObservationRequest":
      return <EditObservationRequest setComponent={setComponentToRender} />;
    case "EditDressingRequest":
      return <EditDressingRequest setComponent={setComponentToRender} />;
    case "EditView":
      return <EditView setComponent={setComponentToRender} />;
    default:
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // alignItems: 'center',
            justifyContent: "center",
          }}
        >
          <ListGroupItem
            style={{
              height: 150,
              width: 150,
              cursor: "pointer",
              margin: "0 10px",
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            tag="div"
          >
            <FaNotesMedical size={32} style={{ marginBottom: 15 }} /> Operation
            Note
          </ListGroupItem>
          <ListGroupItem
            style={{
              height: 150,
              width: 150,
              cursor: "pointer",
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              margin: "0 10px",
              alignItems: "center",
              justifyContent: "center",
            }}
            tag="div"
          >
            <FaNotesMedical size={32} style={{ marginBottom: 15 }} /> Operation
            Note
          </ListGroupItem>
          <ListGroupItem
            style={{
              height: 150,
              width: 150,
              cursor: "pointer",
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              margin: "0 10px",
              alignItems: "center",
              justifyContent: "center",
            }}
            tag="div"
          >
            <FaNotesMedical size={32} style={{ marginBottom: 15 }} /> Operation
            Note
          </ListGroupItem>
        </div>
      );
  }
};

const DoctorDashboard = ({ location, activeTab, setTab, access }) => {
  const [component, setComponent] = useState("");
  useEffect(() => {
    setComponent(activeTab);
  });
  return (
    <div>
      <DocNav />
      {/* <ItemsBar /> */}
      <Tabs
        path={location.pathname}
        component={component}
        setComponentToRender={(component) => setTab(component)}
      />
      <TabBody
        component={component}
        setComponentToRender={(component) => setTab(component)}
      />
    </div>
  );
};

function mapStateToProps({ doctor, auth }) {
  return {
    access: auth.user.accessTo,
    activeTab: doctor.activeTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTab: (tab) => dispatch(setTab(tab)),
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(DoctorDashboard);
