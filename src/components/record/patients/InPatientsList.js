import React from "react";
import { Route } from "react-router";
import InPatientTable from "../../nurse/InPatientTable";
import AddPatientButton from "./AddPatientButton";

export default function InPatientsList(props) {
  return (
    <div>
      <AddPatientButton />

      <Route
        exact
        path="/me/records/patients/in-patients-list"
        component={InPatientTable}
      />
    </div>
  );
}
