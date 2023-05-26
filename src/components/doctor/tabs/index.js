import React from "react";
import { useLocation } from "react-router";
import HistoryTabs from "./HistoryTabs";
import ExaminationTabs from "./ExaminationTabs";
import ManagementTabs from "./ManagementTabs";
import DiagnosisTabs from "./DiagnosisTabs";

const Tabs = ({ patient }) => {
  const patientId = patient.patientHospitalId;
  const location = useLocation();
  if (
    location.pathname.includes(`/me/doctors/visits/new/${patientId}/history`)
  ) {
    return <HistoryTabs patientId={patientId} />;
  } else if (
    location.pathname.includes(
      `/me/doctors/visits/new/${patientId}/examination`
    )
  ) {
    return <ExaminationTabs patientId={patientId} />;
  } else if (
    location.pathname.includes(`/me/doctors/visits/new/${patientId}/diagnosis`)
  ) {
    return <DiagnosisTabs patientId={patientId} />;
  } else if (
    location.pathname.includes(`/me/doctors/visits/new/${patientId}/management`)
  ) {
    return <ManagementTabs patientId={patientId} />;
  } else {
    return null;
  }
};

export default Tabs;
