import React from "react";
import { TiUserAdd } from "react-icons/ti";
import { MdTimelapse } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { Button } from "reactstrap";
import { useHistory, useLocation } from "react-router";

function AddPatientButton() {
  const history = useHistory();
  const location = useLocation();

  const isInPatient = location.pathname.includes("in-patients-list");
  return (
    <div className="row m-1 mb-2">
      <Button
        onClick={() => {
          history.push("/me/records/patients/new");
        }}
        color="primary"
        className="d-flex flex-row align-items-center col-md-3 col-lg-3"
        outline 
      >
        <TiUserAdd size={24} style={{ marginRight: 5, marginLeft: 5 }} />
        Add new patient
      </Button>

      <Button
        onClick={() => {
          if (isInPatient) {
            history.push("/me/records/patients/list");
          } else {
            history.push("/me/records/patients/in-patients-list");
          }
        }}
        color="primary"
        className="d-flex flex-row align-items-center col-md-4 offset-md-1"
        outline
      >
        <MdTimelapse size={24} style={{ marginRight: 5, marginLeft: 5 }} />
        {isInPatient ? "View All Patient List" : "View In-Patients List"}
      </Button>

      <Button
        color="primary"
        outline
        onClick={() => {
          history.push("/me/records/beds-allocation");
        }}
        className="d-flex flex-row align-items-center col-md-3 col-lg-3 offset-md-1"
      >
        <FaBed size={24} style={{ marginRight: 5, marginLeft: 5 }} />
        Bed Allocation
      </Button>
    </div>
  );
}
export default AddPatientButton;
