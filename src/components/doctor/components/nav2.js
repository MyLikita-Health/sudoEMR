import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { FaDiagnoses, FaPrescription, FaNotesMedical } from "react-icons/fa";
import { MdHistory } from "react-icons/md";

let itemStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const DocNav = ({ patient }) => {
  const history = useHistory();
  const location = useLocation();
  const patientId = patient.patientHospitalId;
  return (
    <div className="mother">
      <div className="motherwrapper">
        <div className="arrow-steps clfix">
          <div
            style={itemStyle}
            onClick={() => {
              history.push(`/me/doctors/visits/new/${patientId}/history`);
            }}
            className={`step ${
              location.pathname.includes("history") ? "current" : ""
            }`}
          >
            <MdHistory size={22} className="mr-2" />
            History
          </div>

          <div
            style={itemStyle}
            onClick={() => {
              history.push(`/me/doctors/visits/new/${patientId}/examination`);
            }}
            className={`step ${
              location.pathname.includes("examination") ? "current" : ""
            }`}
          >
            <FaNotesMedical size={22} className="mr-2" />
            Examination
          </div>
          <div
            style={itemStyle}
            onClick={() => {
              history.push(`/me/doctors/visits/new/${patientId}/diagnosis`);
            }}
            className={`step ${
              location.pathname.includes("diagnosis") ? "current" : ""
            }`}
          >
            <FaDiagnoses size={22} className="mr-2" />
            Diagnosis
          </div>

          <div
            style={itemStyle}
            onClick={() => {
              history.push(`/me/doctors/visits/new/${patientId}/management`);
            }}
            className={`step ${
              location.pathname.includes("management") ? "current" : ""
            }`}
          >
            <FaPrescription size={22} className="mr-2" />
            Management
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocNav;
