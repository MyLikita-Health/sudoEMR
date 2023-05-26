import React from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { FaDiagnoses, FaPrescription, FaNotesMedical } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { connect } from "react-redux";
import { setTab } from "../../../redux/actions/doctor";

let itemStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const DocNav = ({ setTab, history, location }) => {
  return (
    <div className="mother">
      <div className="motherwrapper">
        <div className="arrow-steps clfix">
          <div
            style={itemStyle}
            onClick={() => {
              history.push("/me/doctors/patient/history");
              setTab("PcomplaintsForm");
            }}
            className={`step ${
              location.pathname === "/me/doctors/patient/history"
                ? "current"
                : ""
            }`}
          >
            <MdHistory size={22} style={{ marginRight: 5 }} />
            History
          </div>

          <div
            style={itemStyle}
            onClick={() => {
              history.push("/me/doctors/patient/examination");
              setTab("CreateVitalSigns");
            }}
            className={`step ${
              location.pathname === "/me/doctors/patient/examination"
                ? "current"
                : ""
            }`}
          >
            <FaNotesMedical size={22} style={{ marginRight: 5 }} />
            Examination
          </div>
          <div
            style={itemStyle}
            onClick={() => {
              history.push("/me/doctors/patient/diagnosis");
              setTab("NewProblems");
            }}
            className={`step ${
              location.pathname === "/me/doctors/patient/diagnosis"
                ? "current"
                : ""
            }`}
          >
            <FaDiagnoses size={22} style={{ marginRight: 5 }} />
            Diagnosis
          </div>

          <div
            style={itemStyle}
            onClick={() => {
              history.push("/me/doctors/patient/management");
              setTab("EditManagementplan");
            }}
            className={`step ${
              location.pathname === "/me/doctors/patient/management"
                ? "current"
                : ""
            }`}
          >
            <FaPrescription size={22} style={{ marginRight: 5 }} />
            Management
          </div>
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    setTab: (tab) => dispatch(setTab(tab)),
  };
}

export default compose(withRouter, connect(null, mapDispatchToProps))(DocNav);
